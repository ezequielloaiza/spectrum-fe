import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { ProductsRequestedService } from '../../../shared/services';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-magic-look',
  templateUrl: './magic-look.component.html',
  styleUrls: ['./magic-look.component.scss']
})
export class MagicLookComponent implements OnInit {

  basket: any;
  productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  product: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  tones: Array<any> = new Array;
  quantity: any;
  observations: any;
  price: any;
  editPrice = false;
  user: any;
  patient: any;
  membership: any;
  userOrder: any;
  // NUEVO
  parametList: Array<any> = new Array;
  listBoxes:  Array<any> = new Array;

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
    this.product.boxes = JSON.parse(this.product.types)[0].parametersBoxes; ///
    this.listBoxes = this.detail.boxes;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let tono = this.product.types;
    let tonesAux;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           productSelected.selected = item.selected;
        }
     });
    });

    let parametAux = this.product.boxes; // Parametros del producto boxes
    let auxList =[];
    let tonoValue = this.product.types;
    let index = 0;
    _.each(this.listBoxes, function(itemTone) {
      _.each(parametAux, function(itemParamet) {
        if (itemParamet.name === 'Tone') {
          index = index + 1;
          switch ( itemTone.Tone) {
            /*case '1 TONE':
              tonesAux = JSON.parse(tonoValue)[0].parametersBoxes[1].values[0];
              break;
            case '2 TONE':
              tonesAux = JSON.parse(tonoValue)[0].parametersBoxes[1].values[1];
              break;*/
            case '3 TONE':
              tonesAux = JSON.parse(tonoValue)[0].parametersBoxes[1].values[0];
              break;
          }
          let tono = {'id': index,
                      'name': itemParamet.name,
                      'type': itemParamet.type,
                      'values': itemParamet.values,
                      'selected': itemTone.Tone,
                      'quantitySelected': itemTone.Quantity,
                      'color': tonesAux,
                      'colorSelected': itemTone.Color};
           auxList.push(tono);
        }
      });
    });
    this.parametList = auxList;
    this.product.parameters = paramet;
  }

  changeTono(id, parameter, value) {
    parameter.selected = value === undefined ? null : value;
    let tonesAux;
    let tono = this.product.types;
      switch (value) {
        /*case '1 TONE':
          tonesAux = JSON.parse(tono)[0].parametersBoxes[1].values[0];
          break;
        case '2 TONE':
          tonesAux = JSON.parse(tono)[0].parametersBoxes[1].values[1];
          break;*/
        case '3 TONE':
          tonesAux = JSON.parse(tono)[0].parametersBoxes[1].values[0];
          break;
    }
    const productSelected1 = _.find(this.parametList, { 'id': id});
    productSelected1.colorSelected = null;
    productSelected1.color = tonesAux;
  }

  changeQuantity(id, ev) {
    const val = ev.target.value;
    let modulo: number;
    modulo = (parseInt(val) % 50);
    if (modulo === 0) {
      // Actualizo la cantidad Total
      this.quantity = _.sumBy(this.parametList, 'quantitySelected');
    } else {
        const productSelected1 = _.find(this.parametList, { 'id': id});
        productSelected1.quantitySelected = null;
    }
    this.quantity = _.sumBy(this.parametList, 'quantitySelected');
    let info = JSON.parse(this.productRequested.product.infoAditional);
    let pos;
      if (this.quantity >= 250 && this.quantity <= 1000 ) {
         pos = 0;
      } else if (this.quantity >= 1001 && this.quantity <= 2000) {
         pos = 1;
      } else if (this.quantity >= 2001) {
         pos = 2;
      }
    if (this.quantity >= 250) {
      switch (this.membership) {
        case 1: // Gold
          this.price = parseFloat(info[1].values[pos].price);
          break;
        case 2: // Diamond
          this.price = parseFloat(info[2].values[pos].price);
          break;
        case 3: // Preferred
        this.price = parseFloat(info[3].values[pos].price);
          break;
      }
    } else {
      this.price = '';
    }
  }

  save() {
    this.spinner.show();
    // parameters
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           item.selected = productSelected.selected;
          }
     });
    });
    // boxes
    let boxesAux = this.parametList;
    _.each(this.listBoxes, function(itemBoxe) {
      _.each(boxesAux, function(itemAux) {
        // tslint:disable-next-line:radix
        if (itemAux.id === parseInt(itemBoxe.id)) {
          itemBoxe.Tone = itemAux.selected;
          itemBoxe.Color = itemAux.colorSelected;
          itemBoxe.Quantity = itemAux.quantitySelected;
          }
     });
    });
    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: '',
      parameters: this.detail.parameters, boxes: this.listBoxes}) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.product.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else {
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: '',
      parameters: this.detail.parameters, boxes: this.listBoxes}) + ']';
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
        if (productSelected.name !== 'Tone' && productSelected.name !== 'Color') {
          if (productSelected.selected === null || productSelected.selected === undefined) {
               valido = false;
            }
          }
     });
     _.each(this.parametList, function(boxeSelected) {
       let modulo = parseInt(boxeSelected.quantitySelected)%50;
        if ((boxeSelected.selected === null || boxeSelected.selected === undefined) ||
           (modulo !== 0 || boxeSelected.quantitySelected === null || boxeSelected.quantitySelected === undefined) ||
           (boxeSelected.colorSelected === null || boxeSelected.colorSelected === undefined)) {
             valido = false;
          }
      });
     if (this.quantity === null || this.quantity < 250 || this.price === null) {
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

}
