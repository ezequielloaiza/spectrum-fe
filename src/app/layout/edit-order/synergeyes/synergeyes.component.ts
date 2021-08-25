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
        let pC = this.productsCode.filter((item) => {
          return _.includes(item.name, this.product.name); });
        this.productsCode = pC.sort((a, b) => (b.idProduct > a.idProduct) ? -1 : 1);
        this.setCodeProduct('');
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
    const prName = this.product.name;
    let prCode;

    for (let i = 0, len = this.productsCode.length; i < len; i++) {
      let pr = this.productsCode[i];
      if (_.includes(pr.name, prName) && _.includes(pr.codeSpectrum, warranty)) {
        prCode = pr;
        break;
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
          if (productSelected.name === 'Warranty' || productSelected.name === 'Enhanced Profile') {
            productSelected.selected = item.selected ? 'Yes' : 'No';
          } else {
            productSelected.selected = item.selected;
          }
          if (productSelected.name === 'Central Distance Zone' || productSelected.name === 'Add Powers'
          || productSelected.name === 'Central Near Zone'  ) {
            productSelected.hidden = (productSelected.selected === null || productSelected.selected === undefined);
          }
        }
     });
    });
    this.product.parameters = paramet;
    let dominance: any;
    dominance = _.find(this.product.parameters, { name: 'Dominance' });
    this.changeSelect(dominance, dominance.selected);
  }

  changeSelect(parameter, value) {
    parameter.selected = value;

    if (parameter.name === 'Warranty') {
      if (parameter.selected === 'Yes') {
        this.warranty = true;
        this.setCodeProduct('(W)');
      } else {
        this.warranty = false;
        this.setCodeProduct('(NW)');
      }
      if (this.membership) {
        this.definePrice(this.membership);
      }
    }

    if (parameter.name === 'Base Curve' && (this.product.idProduct === 265 || this.product.idProduct === 192
      || this.product.idProduct === 193 || this.product.idProduct === 194)) {
        let values: any;
        let skirtCurve: any;
        parameter.selected = value;
        if (parameter.selected >= 50 && parameter.selected <= 250 ) {
          values = ['7.9', '8.1', '8.4', '8.7'];
        } else {
          values = ['7.9', '8.1', '8.4'];
        }
        skirtCurve = _.find(this.product.parameters, {name: 'Skirt Curve'});
        skirtCurve.values = values;
        skirtCurve.selected = null;
    }

    if (parameter.name === 'Dominance' && (this.product.idProduct === 176 ||
       this.product.idProduct === 177 || this.product.idProduct === 268)) {
      let values: any;
      let centralDistanceZone: any;
      let centralNearZone: any;
      let addPower: any;

      switch (parameter.selected) {
        case 'CN':
          addPower = _.find(this.product.parameters, { name: 'Add' });
          values = ['+1.00', '+1.75', '+2.50'];
          addPower.values = values;
          addPower.hidden = false;
          centralNearZone = _.find(this.product.parameters, {name: 'Central Near Zone'});
          centralNearZone.hidden = false;
          centralNearZone.selected = centralNearZone.values[0];
          centralDistanceZone = _.find(this.product.parameters, {name: 'Central Distance Zone'});
          centralDistanceZone.hidden = true;
          centralDistanceZone.selected = null;
          break;
        case 'CD':
          addPower = _.find(this.product.parameters, {name: 'Add'});
          values = ['+0.75', '+1.00', '+1.25', '+1.50', '+1.75', '+2.00', '+2.25', '+2.50', '+2.75',
              '+3.00', '+3.25', '+3.50', '+3.75', '+4.00', '+4.25', '+4.50', '+4.75', '+5.00'];
          addPower.values = values;
          addPower.hidden = false;
          centralDistanceZone = _.find(this.product.parameters, {name: 'Central Distance Zone'});
          centralDistanceZone.hidden = false;
          centralNearZone = _.find(this.product.parameters, {name: 'Central Near Zone'});
          centralNearZone.hidden = true;
          centralNearZone.selected = null;
          break;
      }

      parameter.selected = value;
    }

  }

  resetDominance(parameter) {
    let centralDistanceZone: any;
    let centralNearZone: any;
    let addPower: any;
    if (parameter.name === 'Dominance') {
      addPower = _.find(this.product.parameters, {name: 'Add'});
      addPower.selected = null;
      centralDistanceZone = _.find(this.product.parameters, {name: 'Central Distance Zone'});
      centralDistanceZone.hidden = true;
      centralDistanceZone.selected = null;
      centralNearZone = _.find(this.product.parameters, {name: 'Central Near Zone'});
      //centralNearZone.selected = null;
      centralNearZone.hidden = true;
    }
  }

  hiddenParameters(parameter) {
    if (parameter.name === 'Central Distance Zone' || parameter.name === 'Add Powers' || parameter.name === 'Central Near Zone'  ) {
      let dominance: any;
      let value: any;
      dominance =  _.find(this.product.parameters, {name: 'Dominance'});
      value = (dominance.selected !== null && dominance.selected !== undefined);
      return value ? parameter.hidden : true;
    }
    return false;
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
           if (productSelected.name === 'Warranty' || productSelected.name === 'Enhanced Profile') {
            item.selected = productSelected.selected === 'Yes' ? true : false;
          } else {
            item.selected = productSelected.selected;
          }
        }
     });
    });
    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: this.productCode.name,
        eye: this.detail.eye, parameters: this.detail.parameters}) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.productCode.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: this.productCode.name,
        eye: this.detail.eye, parameters: this.detail.parameters}) + ']';
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
          if (productSelected.name !== 'Add' && productSelected.name !== 'Dominance' && productSelected.name !== 'Central Near Zone' && productSelected.name !== 'Central Distance Zone') {
            valido = false;
          }
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
