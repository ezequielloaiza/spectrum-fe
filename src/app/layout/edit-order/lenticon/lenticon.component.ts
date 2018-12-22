import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductsRequestedService } from '../../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductRequested } from '../../../shared/models/productrequested';
import * as _ from 'lodash';

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
  add = false;
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
    this.product.set = JSON.parse(this.product.types)[0].set;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let set = this.product.set;
    let id;
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
      this.productRequested.detail = '[' + JSON.stringify({ name: this.product.name , eye: this.detail.eye,
                                      parameters: this.detail.parameters, set: this.detail.set}) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.product.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: this.product.name, eye: this.detail.eye,
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
    let paramet = this.product.parameters;
    let addAux = false;
      _.each(paramet, function(productSelected) {
         if (productSelected.name === 'Design') {
            if (productSelected.selected === 'Elipsys_STD_MF' ||
            productSelected.selected === 'Elipsys_KC_MF' || productSelected.selected === 'Elipsys_SE_MF'){
              addAux = true;
            }
         } else {
            if (productSelected.name === 'Addition') {
               if ((productSelected.selected === null || productSelected.selected === undefined) && addAux === true){
                 valido = false;
               }
            }
          }
     });
     if (this.quantity === null  || this.price === null || (this.patient === null || this.patient === '' ||
     (addAux && this.product.pupillary === null) )) {
          valido = false;
     }
     return valido;
  }

  update(productRequested) {
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }
}
