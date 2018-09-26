import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { ProductsRequestedService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../../http/user-storage.service';

@Component({
  selector: 'app-magic-look',
  templateUrl: './magic-look.component.html',
  styleUrls: ['./magic-look.component.scss']
})
export class MagicLookComponent implements OnInit {

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
  cl = ['row', 'selection', 'label-title'];
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
    this.getProductView();
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
      this.cl = ['row', 'selection'];
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
    let paramet = this.product.parameters;
    let tono = this.product.types;
    let tonesAux;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           productSelected.selected = item.selected;
        }
        if (productSelected.name === "Tone") {
          switch ( item.selected) {
            case "1 TONE":
              tonesAux = JSON.parse(tono)[0].parameters[1].values[0];
              break;
            case "2 TONE":
              tonesAux = JSON.parse(tono)[0].parameters[1].values[1];
              break;
            case "3 TONE":
              tonesAux = JSON.parse(tono)[0].parameters[1].values[2];
              break;
          }
        }
     });
    });
    this.tones = tonesAux;
    this.product.parameters = paramet;
  }

  changeSelect(parameter, value) {
    parameter.selected = value === undefined ? null : value;
    let tonesAux = this.tones;
    let tono = this.product.types;
      if (parameter.name === "Tone") {
        this.cleanImage();
        switch (value) {
          case "1 TONE":
            tonesAux = JSON.parse(tono)[0].parameters[1].values[0];
            break;
          case "2 TONE":
            tonesAux = JSON.parse(tono)[0].parameters[1].values[1];
            break;
          case "3 TONE":
            tonesAux = JSON.parse(tono)[0].parameters[1].values[2];
            break;
        }
      }
   this.tones = tonesAux;
  }

  save() {
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           item.selected = productSelected.selected;
          }
     });
    });
    this.productRequested.detail = { name: '', eye: '', parameters: this.detail.parameters};
    this.productRequested.detail = '[' + JSON.stringify(this.productRequested.detail) + ']';
    this.productRequested.observations = this.observations;
    this.productRequested.price = this.price;
    this.productRequested.quantity = this.quantity;
    this.productRequested.product = this.product.idProduct;
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
     if (this.quantity === null  || this.price === null) {
          valido = false;
     }
     return valido;
  }

  cleanImage() {
     let paramet1 = this.product.parameters;
    _.each(paramet1, function(productSelected1) {
      if (productSelected1.type === 'image') {
          productSelected1.selected = null;
      }
    });
  }
}
