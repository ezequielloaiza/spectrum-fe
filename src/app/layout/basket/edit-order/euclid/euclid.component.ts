import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../../shared/services';
import { UserStorageService } from '../../../../http/user-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-euclid',
  templateUrl: './euclid.component.html',
  styleUrls: ['./euclid.component.scss']
})
export class EuclidComponent implements OnInit {

  basket: any;
  productRequested: any;
  product: any;
  detail: any;
  tones: Array<any> = new Array;
  quantity: any;
  observations: any;
  price: any;
  editPrice = false;
  user: any;
  cl = ['row', 'selection', 'label-title', 'width-input', 'separator'];
  warranty = false;
  patient: any;
  membership: any;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productRequestedService: ProductsRequestedService,
              private userService: UserStorageService) {
                this.user = JSON.parse(userService.getCurrentUser());
              }

  ngOnInit() {
    this.productRequested = this.basket.productRequested;
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
    this.membership = this.basket.basket.user.membership.idMembership;
    this.getProductView();
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
      this.cl = ['row', 'selection', 'width-input', 'separator'];
    }

  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.product.pricesAditionalWarranties = JSON.parse(this.product.infoAditional)[1].values[0];
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let warranty;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           if (productSelected.name === 'Warranty') {
               productSelected.selected = item.selected ? 'Yes' : 'No';
               warranty = productSelected.selected === 'Yes' ? true : false;
           } else {
               productSelected.selected = item.selected;
           }
        }
     });
    });
    this.warranty = warranty;
    this.product.parameters = paramet;
  }

  changeSelect(parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Warranty') {
      if (parameter.selected === 'Yes') {
        this.warranty = true;
        this.definePriceWarranty(this.membership);
      } else {
        this.definePrice(this.membership);
        this.warranty = false;
      }
    }
    if (parameter.name === 'Axes (º)') {
      parameter.selected = this.axisFormat(value);
    }
    if (parameter.name === 'Flat K' || parameter.name === 'Steep K' || parameter.name === 'HVID' ) {
      parameter.selected = this.format(value);
    }
    if (parameter.name === 'Cylinder (D)') {
      parameter.selected = this.cilinderFormat(value);
    }
  }

  save() {
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
    this.productRequested.detail = { name: '', eye: this.detail.eye, parameters: this.detail.parameters};
    this.productRequested.detail = '[' + JSON.stringify(this.productRequested.detail) + ']';
    this.productRequested.observations = this.observations;
    this.productRequested.price = this.price;
    this.productRequested.quantity = this.quantity;
    this.productRequested.product = this.product.idProduct;
    this.productRequested.patient = this.patient;
    this.productRequestedService.update$(this.productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        this.close();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
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

  definePriceWarranty(membership) {
    switch (membership) {
      case 1:
        this.price = this.product.pricesAditionalWarranties.values[0].price;
        break;
      case 2:
        this.price = this.product.pricesAditionalWarranties.values[1].price;
        break;
      case 3:
        this.price = this.product.pricesAditionalWarranties.values[2].price;
        break;
    }
  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.price = this.product.price1;
        break;
      case 2:
        this.price = this.product.price2;
        break;
      case 3:
        this.price = this.product.price3;
        break;
    }
  }

  axisFormat(value): any {
    let axes;
    if (value !== null) {
      if (value <= 180) {
        axes = this.complete(value, 3);
      } else {
        axes = null;
      }
    }
     return axes;
  }

  cilinderFormat(value): any {
    let cilinder;
    let toString;
    if (value !== null) {
      toString = value.toString();
        if (_.includes(toString, '-')) {
          cilinder = toString;
        } else if (value !== 0 && value !== '0.00') {
          cilinder = '-' + toString;
        } else {
          cilinder = toString;
        }
      }
      return cilinder;
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
        partDec = toString.slice( pos + 1, toString.length);
        flat = this.complete(partInt, 2) + '.' + this.complete(partDec, 2);
      } else {
         flat = this.complete(value, 2) + '.00';
      }
      return flat;
    }
  }
  complete(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padStart(filteredId, tamano, '0');
    return filteredId;

  }
}
