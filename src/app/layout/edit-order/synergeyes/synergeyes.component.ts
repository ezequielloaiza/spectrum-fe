import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductService } from '../../../shared/services/products/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-synergeyes',
  templateUrl: './synergeyes.component.html',
  styleUrls: ['./synergeyes.component.scss']
})
export class SynergeyesComponent implements OnInit {

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
    private spinner: NgxSpinnerService) {
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
  }

  getProductsCode() {
    this.productService.findBySupplierAndInViewAndCategory$(9, false, 10).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.productsCode = res1.data;
      } else {
        console.log(res1.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  setCodeProduct(warranty) {
    const prName = this.product.codeSpectrum;
    let prCode;

    for (let i = 0, len = this.productsCode.length; i < len; i++) {
      let pr = this.productsCode[i];
      if (_.includes(pr.codeSpectrum, prName) && _.includes(pr.codeSpectrum, warranty)) {
        prCode = pr;
        break;
      }
    }
    this.productCode = prCode;
  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
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
           if (productSelected.name === 'Warranty' || productSelected.name === 'Profile') {
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
      if (eye === 'right') {
        if (parameter.selected === 'Yes') {
          this.warrantyRight = true;
          this.setCodeProduct('(W)' );
        } else {
          this.warrantyRight = false;
          this.setCodeProduct('(NW)');
        }
      }

      if (eye === 'left') {
        if (parameter.selected === 'Yes') {
          this.warrantyLeft = true;
          this.setCodeProduct('(W)');
        } else {
          this.warrantyLeft = false;
          this.setCodeProduct('(NW)');
        }
      }
      if (this.client) {
        this.definePrice(this.client.membership.idMembership);
      }
    }

    if ( parameter.name === 'Base Curve') {
      parameter.selected = this.format(value);
    }
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
        break;
      case 2:
        this.product.priceSale = this.product.price2;
        break;
      case 3:
        this.product.priceSale = this.product.price3;
        break;
    }
  }

  save() {
    this.spinner.show();
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           if (productSelected.name === 'Warranty') {
            item.selected = productSelected.selected === 'Yes' ? true : false;
          } else {
            item.selected = productSelected.selected;
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
