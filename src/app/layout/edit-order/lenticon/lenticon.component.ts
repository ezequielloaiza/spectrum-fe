import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductsRequestedService } from '../../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductRequested } from '../../../shared/models/productrequested';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lenticon',
  templateUrl: './lenticon.component.html',
  styleUrls: ['./lenticon.component.scss']
})
export class LenticonComponent implements OnInit {
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
  patient: any;
  membership: any;
  additional = 0;
  userOrder: any;
  typeLens: any;
  add = false;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productRequestedService: ProductsRequestedService,
              private userService: UserStorageService,
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
    this.typeLens = JSON.parse(this.product.types)[0].typeLens;
    this.product.set = JSON.parse(this.product.types)[0].set;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let set = this.product.set;
    let id;

    //set type lens
    this.changeTypeLens(this.detail.typeLens);

    // Set
      _.each(this.detail.set, function(item) {
        _.each(set, function(productSelected) {
          if (productSelected.name === item.name) {
            if (productSelected.name === 'num.LC') {
              _.each(productSelected.values, function(itemAux) {
                if (itemAux.value === item.selected) {
                  id = itemAux.id;
                }
              });
              productSelected.selected = id;
            } else {
              productSelected.selected = item.selected;
            }
         }
       });
      });
    // Parameters
    let add = this.add;
    let pupillary;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Addition' || productSelected.name === 'Center') {
            productSelected.selected = item.selected === '' ? null : item.selected;
            if (productSelected.name === 'Addition' && productSelected.selected !== null) {
              add = true;
            }
          } else {
            productSelected.selected = item.selected;
          }
       }
     });
     if (item.name === 'Pupillary diameter') {
       pupillary = item.selected === '' ? null : item.selected;
    }
    });
    this.product.parameters = paramet;
    this.product.set = set;
    this.add = add;
    this.product.pupillary = pupillary;
  }

  changeSelect(parameter, value) {
    if (parameter.name === 'num.LC') {
        this.product.set[2].selected = this.product.set[2].values[parseInt(value.id)]; //Base curve
        this.product.set[3].selected = this.product.set[3].values[parseInt(value.id)]; // Power
        this.product.set[4].selected = this.product.set[4].values[parseInt(value.id)];  // exc
    }
    if (parameter.name === 'Design') {
       if (parameter.selected === 'Elipsys_STD_MF' || parameter.selected === 'Elipsys_KC_MF'  || parameter.selected === 'Elipsys_SE_MF') {
             this.add = true;

       } else {
            this.add = false;
            this.product.parameters[5].selected = null;
            this.product.parameters[5].sel = null;
            this.product.pupillary = null;
          }
      parameter.selected = value;
    }
  }

  save() {
    this.spinner.show();
    let paramet = this.product.parameters;
    let set = this.product.set;
    let pupillary = this.product.pupillary;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Addition' || productSelected.name === 'Center') {
            if (productSelected.selected === null || productSelected.selected === undefined ) {
              item.selected = '';
            } else {
              item.selected = productSelected.selected;
            }
          } else {
            item.selected = productSelected.selected;
          }
        }
     });
     if (item.name === 'Pupillary diameter') {
       item.selected = pupillary === null ? '' : pupillary;
     }
    });
    let value;
    _.each(this.detail.set, function(item) {
      _.each(set, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'num.LC') {
            _.each(productSelected.values, function(itemAux) {
              if (itemAux.id === productSelected.selected) {
                value = itemAux.value;
              }
            });
            item.selected = value;
          } else {
            item.selected = productSelected.selected;
          }
        }
     });
    });
    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: this.product.name , eye: this.detail.eye, typeLens: this.typeLens.selected,
                                      parameters: this.detail.parameters, set: this.detail.set}) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.product.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: this.product.name, eye: this.detail.eye, typeLens: this.typeLens.selected,
                                          parameters: this.detail.parameters, set: this.detail.set}) + ']';
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
    let parameters = this.product.parameters;
    let addAux = false;

    _.each(parameters, function(param) {
      if (param.name === 'Design') {
        if (param.selected === 'Elipsys_STD_MF' ||
        param.selected === 'Elipsys_KC_MF' || param.selected === 'Elipsys_SE_MF'){
          addAux = true;
        }
      } else if (param.name === 'Addition') {
        if ((param.selected === null || param.selected === undefined) && addAux === true){
          valido = false;
        }
      } else if (param.name !== "Far Zone Diameter" && (param.selected === null || param.selected === undefined)) {
        valido = false;
      }
    });

    // Trial Lens
    if (this.typeLens.selected === 'Please design my lens') {
      _.each(this.product.set, function (param) {
        if (param.selected === null || param.selected === undefined) {
          valido = false;
        }
      });
    }

    if (this.quantity === null  || this.price === null || (this.patient === null || this.patient === '' ||
      (addAux && this.product.pupillary === null) )) {
        valido = false;
    }

    return valido;
  }

  update(productRequested) {
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        productRequested.detail = JSON.parse(productRequested.detail);
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }

  changePupillary(value) {
    let valueAux = 0;
    if (value != null) {
        if (value >= 1 && value <= 4) {
          valueAux = this.format(3.00);
        } else if (value > 4 && value <= 4.50) {
          valueAux = this.format(3.50);
        } else if (value > 4.50) {
          valueAux = this.format(4.00);
        }
    }
    _.each(this.product.parameters, function(parameter, index) {
      if (parameter.name === 'Far Zone Diameter') {
        parameter.selected = valueAux;
      }
    });
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
          flat = partInt + '.' + this.completeEnd(partDec, 2);
        } else {
           flat = null;
        }
      } else {
          if (value <= 99) {
            flat = value + '.00';
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

  isPower(param) {
    return param.name === 'Power(D)' || param.name === 'Over-Refaction' || param.name === 'Final Power';
  }

  setPower(power, powerDetail, value) {
    power.name = value;
    power.selected = null;

    powerDetail.name = value;
  }

  changeTypeLens(value) {
    let self = this;
    this.typeLens.selected = value;
    let power = _.find(this.product.parameters, function (param){ return self.isPower(param) });
    let powerDetail = _.find(this.detail.parameters, function (param){ return self.isPower(param) });
    switch (value) {
      case 'Please design my lens':
        this.setPower(power, powerDetail, 'Over-Refaction')
        break;
      case 'Final Lens':
        this.setPower(power, powerDetail, 'Final Power')
        this.resetTrialLens();
      break;
    }
  }

  resetTrialLens() {
    _.each(this.product.set, function (param, i: any, key) {
      if (_.includes([0, 2, 3, 4], i)) {
        param.selected = null
      }
    });
  }
}
