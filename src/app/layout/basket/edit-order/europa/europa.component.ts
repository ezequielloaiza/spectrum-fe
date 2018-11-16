import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../../shared/services';
import { UserStorageService } from '../../../../http/user-storage.service';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import * as _ from 'lodash';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss']
})
export class EuropaComponent implements OnInit {

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
  patient: any;
  membership: any;
  signPower: any;
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
    }

  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.header = JSON.parse(this.product.types)[0].header;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.product.steps = JSON.parse(this.product.types)[0].pasos;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let header = this.product.header;
    let steps = this.product.steps;
    let sign;
     // header
    _.each(this.detail.header, function(item) {
     _.each(header, function(itemHeader) {
          if (itemHeader.name === item.name) {
            if (itemHeader.name === 'Hidrapeg' || itemHeader.name === 'Inserts (DMV)') {
              itemHeader.selected = item.selected === true ? 'Yes' : 'No';
            } else {
              itemHeader.selected = item.selected;
            }
          }
      });
    });
    // parameters
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Power') {
            sign = item.selected.slice( 0, 1);
            productSelected.selected = item.selected.slice( 1, item.selected.length);
          } else {
            productSelected.selected = item.selected;
          }
        }
     });
    });
      // pasos
      _.each(this.detail.pasos, function(item) {
        _.each(steps, function(itemStep) {
          if (itemStep.name === item.name) {
              // Nombre: PC1 PC2 PC3
              itemStep.selected = item.selected;
               // Por cada PC
              _.each(item.values, function(value) {
                _.each(itemStep.values, function(valueFijo) {
                  if (value.name === valueFijo.name) {
                    _.each(value.values, function(paso) {
                      _.each(valueFijo.values, function(pasoFijo) {
                        if (paso.name === pasoFijo.name) {
                          pasoFijo.selected = paso.selected;
                        }
                      });
                    });
                  }
                });
              });
          }
       });
      });
    this.signPower = sign;
    this.product.parameters = paramet;
    this.product.header =  header;
    this.product.steps = steps;
  }

  changeSelect(parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Base Curve (d)' ) {
      parameter.selected = this.format(value);
    }
  }

  save() {
    // Header
    let header = this.product.header;
    _.each(this.detail.header, function(item) {
      _.each(header, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Hidrapeg' || productSelected.name === 'Inserts (DMV)') {
            item.selected = productSelected.selected === 'Yes' ? true : false;
          } else {
            item.selected = productSelected.selected;
          }
        }
     });
    });
    // Parameters
    let paramet = this.product.parameters;
    let signPower = this.signPower;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Power') {
            item.selected = signPower + productSelected.selected;
          } else {
            item.selected = productSelected.selected;
          }
        }
    });
    });
    // pasos
    let steps = this.product.steps;
    _.each(this.detail.pasos, function(item) {
      _.each(steps, function(itemStep) {
        if (itemStep.name === item.name) {
            // Nombre: PC1 PC2 PC3
            itemStep.selected = item.selected;
             // Por cada PC
            _.each(item.values, function(value) {
              _.each(itemStep.values, function(valueFijo) {
                if (value.name === valueFijo.name) {
                  _.each(value.values, function(paso) {
                    _.each(valueFijo.values, function(pasoFijo) {
                      if (paso.name === pasoFijo.name) {
                        paso.selected = pasoFijo.selected;
                      }
                    });
                  });
                }
              });
            });
        }
     });
    });
    this.productRequested.detail = { name: '', eye: this.detail.eye, header: this.detail.header, parameters: this.detail.parameters,
                                     pasos: this.detail.pasos};
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

  setChecked(value, PC) {
    _.each(PC.values, function(step) {
      _.each(step.values, function(item) {
        item.selected = false;
      });
    });
    value.selected = !value.selected;
  }

}
