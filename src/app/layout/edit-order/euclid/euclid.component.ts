import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import * as _ from 'lodash';
import { ProductRequested } from '../../../shared/models/productrequested';

@Component({
  selector: 'app-euclid',
  templateUrl: './euclid.component.html',
  styleUrls: ['./euclid.component.scss']
})
export class EuclidComponent implements OnInit {

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
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productRequestedService: ProductsRequestedService,
              private userService: UserStorageService) {
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
    this.getProductView();
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
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
    /*this.warranty = warranty;
    if (this.warranty) {
      this.definePriceWarranty(this.membership);
    }*/
    this.product.parameters = paramet;
  }

  changeSelect(parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Warranty') {
      if (parameter.selected === 'Yes') {
        this.warranty = true;
        this.definePriceWarranty(this.membership);
      } else {
        this.warranty = false;
        this.additional = 0;
        this.definePrice(this.membership);
      }
    }
    if (parameter.name === 'Axes (º)') {
      parameter.selected = this.axisFormat(value);
    }
    if (parameter.name === 'Flat K' || parameter.name === 'Steep K' || parameter.name === 'HVID') {
      parameter.selected = this.format(value);
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
    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye, parameters: this.detail.parameters}) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.product.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye, parameters: this.detail.parameters}) + ']';
      this.productRequestedAux.observations = this.observations;
      this.productRequestedAux.price = this.price;
      this.productRequestedAux.quantity = this.quantity;
      this.productRequestedAux.product = this.product.idProduct;
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

  definePriceWarranty(membership) {
    switch (membership) {
      case 1:
        this.price = this.product.pricesAditionalWarranties.values[0].price;
        this.additional = this.product.pricesAditionalWarranties.values[0].price - this.product.price1;
        break;
      case 2:
        this.price = this.product.pricesAditionalWarranties.values[1].price;
        this.additional = this.product.pricesAditionalWarranties.values[1].price - this.product.price2;
        break;
      case 3:
       this.price = this.product.pricesAditionalWarranties.values[2].price;
       this.additional = this.product.pricesAditionalWarranties.values[2].price - this.product.price3;
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
        axes = this.completeStart(value, 3);
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
          cilinder = this.formatCi(toString);
        } else if (value !== 0 && value !== '0.00') {
          cilinder = '-' + this.formatCi(toString);
        } else {
          cilinder = this.formatCi(toString);
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

  formatCi(value): any {
    let cilinder;
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
        cilinder = this.completeStart(partInt, 1) + '.' + this.completeEnd(partDec, 2);
      } else {
        cilinder = this.completeStart(value, 1) + '.00';
      }
      return cilinder;
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

  update(productRequested) {
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        this.close();
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }
}
