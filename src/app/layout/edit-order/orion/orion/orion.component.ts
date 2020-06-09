import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ProductRequested } from '../../../../shared/models/productrequested';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../../shared/services';
import { UserStorageService } from '../../../../http/user-storage.service';
import { ProductService } from '../../../../shared/services/products/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';

@Component({
  selector: 'app-orion',
  templateUrl: './orion.component.html',
  styleUrls: ['./orion.component.scss']
})
export class OrionComponent implements OnInit {

  basket: any;
  productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  product: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  quantity: any;
  observations: any;
  price: any;
  editPrice = false;
  user: any;
  warranty = false;
  patient: any;
  membership: any;
  additional = 0;
  userOrder: any;
  productsCode: Array<any> = new Array;
  productCode: any;
  warrantyRight = false;
  warrantyLeft = false;
  client: any;

  constructor(public modalReference: NgbActiveModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private productRequestedService: ProductsRequestedService,
    private userService: UserStorageService,
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private cdRef: ChangeDetectorRef) {
      this.user = JSON.parse(userService.getCurrentUser());
    }

  ngOnInit() {
    if (this.typeEdit === 1 ) { // Basket
      this.productRequested = this.basket.productRequested;
      this.membership = this.basket.basket.user.membership.idMembership;
    } else { // order-detail
      this.productRequested = this.detailEdit;
      this.membership = this.userOrder.membership.idMembership;
    }
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
    this.productCode = this.productRequested.product;
    this.getProductsCode();
    this.getProductView();
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }
    this.cdRef.detectChanges();
  }

  getProductsCode() {
    this.productService.findBySupplierAndInViewAndCategory$(10, false, 10).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.productsCode = res1.data;
        let pC = this.productsCode.filter((item) => {
          return _.includes(item.name.toLowerCase(), this.product.name.toLowerCase()); });
        this.productsCode = pC.sort((a, b) => (b.idProduct > a.idProduct) ? -1 : 1);
        this.setCodeProduct('');
      } else {
        console.log(res1.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  setCodeProduct(value) {
    const prName = this.product.name;
    const idProduct = this.product.idProduct;
    let prCode;

    for (let i = 0, len = this.productsCode.length; i < len; i++) {
      let pr = this.productsCode[i];
      if (idProduct === 150 || idProduct === 151 || idProduct === 152) {
        if (_.includes(pr.name.toLowerCase(), prName.toLowerCase()) && _.includes(pr.name.toLowerCase(), value.toLowerCase())) {
          prCode = pr;
          break;
        }
      } else {
        if (_.includes(pr.name.toLowerCase(), prName.toLowerCase()) && _.includes(pr.name.toLowerCase(), value.toLowerCase())
          && _.includes(pr.name.toLowerCase(), 'sphere')) {
            prCode = pr;
            break;
        }
      }
    }
    this.productCode = prCode;
    if (this.productCode) {
      this.product.price1 = this.productCode.price1;
      this.product.price2 = this.productCode.price2;
      this.product.price3 = this.productCode.price3;
    }
  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    console.log(this.product.types);
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;

    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           if (productSelected.name === 'Warranty'
           || productSelected.name === 'Limbal Ring' || productSelected.name === 'Light Sensitivity') {
               productSelected.selected = item.selected ? 'Yes' : 'No';
           } else {
               productSelected.selected = item.selected;
           }
        }
     });
    });
    this.product.parameters = paramet;
  }

  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Warranty') {
      if (eye === 'Right') {
        if (parameter.selected === 'Yes') {
          this.warrantyRight = true;
        } else {
          this.warrantyRight = false;
        }
      }

      if (eye === 'Left') {
        if (parameter.selected === 'Yes') {
          this.warrantyLeft = true;
        } else {
          this.warrantyLeft = false;
        }
      }
    }
    if (this.membership) {
      if (parameter.name === 'Type') {
        this.setCodeProduct(parameter.selected);
      } else {
        this.setCodeProduct('');
      }
      this.definePrice(this.membership);
    }
  }

  getMin(parameter) {
    let min = 0;
    switch (parameter.name) {
      case 'Diameter':
        min = 13.00;
        break;
      case 'Base Curve':
        min = 7.70;
        break;
      case 'Axis':
        min = 1.00;
        break;
    }
    return min;
  }

  getMax(parameter) {
    let max = 0;
    switch (parameter.name) {
      case 'Diameter':
        max = 22.00;
        break;
      case 'Base Curve':
        max = 9.50;
        break;
      case 'Axis':
        max = 180.00;
        break;
    }
    return max;
  }

  getStep(parameter) {
    let step = 0;
    switch (parameter.name) {
      case 'Diameter':
        step = 0.10;
        break;
      case 'Base Curve':
        step = 0.10;
        break;
      case 'Axis':
        step = 0.25;
        break;
    }
    return step;
  }

  format(value): any {
    let flat;
    let partInt;
    let partDec;
    let pos;
    let toString;
    if (value !== null) {
      toString = value.toString();
      if (_.includes(toString, '.')) {
        pos = _.indexOf(toString, '.');
        partInt = toString.slice( 0, pos);
        if (partInt <= 99) {
          partDec = toString.slice( pos + 1, toString.length);
          flat = this.completeStart(partInt, 2) + '.' + this.completeEnd(partDec, 2);
        } else {
            flat = null;
        }
      } else {
          if (value <= 99) {
            flat = this.completeStart(value, 2) + '.00';
          } else {
            flat = null;
          }
      }
      return flat;
    }
  }

  completeStart(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padStart(filteredId, tamano, '0');
    return filteredId;

  }

  completeEnd(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padEnd(filteredId, tamano, '0');
    return filteredId;

  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.product.priceSale = this.product.price1;
        this.price = this.product.price1;
        break;
      case 2:
        this.product.priceSale = this.product.price2;
        this.price = this.product.price2;
        break;
      case 3:
        this.product.priceSale = this.product.price3;
        this.price = this.product.price3;
        break;
    }
  }

  save() {
    this.spinner.show();
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           if (productSelected.name === 'Warranty'
           || productSelected.name === 'Limbal Ring' || productSelected.name === 'Light Sensitivity' ) {
            item.selected = productSelected.selected === 'Yes' ? true : false;
          } else {
            item.selected = productSelected.selected;
          }

          if (productSelected.name === 'Diameter' || productSelected.name === 'Base Curve'
          || productSelected.name === 'Axis' ) {
            item.selected = this.format(item.selected);
          }

          if (productSelected.name === 'Iris Code') {
            let values: any[] = [];
            _.each(productSelected.values, function(param, index) {
              values[index] = ({ name: param.name, selected: param.selected }) ;
            });
            item.selected = values;
          }
        }

     });
    });
    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye, parameters: this.detail.parameters}) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.productCode.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye, parameters: this.detail.parameters}) + ']';
      this.productRequestedAux.observations = this.observations;
      this.productRequestedAux.price = this.price;
      this.productRequestedAux.quantity = this.quantity;
      this.productRequestedAux.product = this.productCode.idProduct;
      this.productRequestedAux.patient = this.patient;
      this.update(this.productRequestedAux);
    }

  }

  formIsValid() {
    let valido = true;
    let paramet = this.product.parameters;
      _.each(paramet, function(productSelected) {
        if (productSelected.selected === null || productSelected.selected === undefined) {
           valido = false;
          }
     });
     if (this.quantity === null  || this.price === null || (this.patient === null || this.patient === '')) {
          valido = false;
     }
     return valido;
  }

  update(productRequested) {
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res1: string) => {
          this.notification.success('', res1);
        });
        productRequested = res.data;
        productRequested.detail = JSON.parse(productRequested.detail);
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }
}
