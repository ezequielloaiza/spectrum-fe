import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-molded-lenses',
  templateUrl: './molded-lenses.component.html',
  styleUrls: ['./molded-lenses.component.scss']
})
export class MoldedLensesComponent implements OnInit {

  basket: any;productRequested: ProductRequested = new ProductRequested();
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
    } else { // order-detail
      this.productRequested = this.detailEdit;
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
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let parameters = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(parameters, function(productSelected) {
        if (productSelected.name === item.name) {
          productSelected.selected = item.selected;
        }
     });
    });
    this.product.parameters = parameters;
    this.initialPricesAndCodes();
  }

  initialPricesAndCodes() {
    let self = this;
    _.each(this.product.parameters, function(parameter) {
      self.setCodeAndPrice(parameter);
    });
  }

  savePricesAndCodes() {
    switch (this.product.name) {
      case 'Xtensa Premium Toric 6pk':
        this.productRequested.price = this.productRequested.newPrice;
        this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                    parameters: this.detail.parameters, codeSpectrum: this.productRequested.newCode}) + ']';
        break;
    }
  }

  save() {
    this.spinner.show();
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
            item.selected = productSelected.selected;
        }
     });
    });
    if (this.typeEdit === 1) { // Basket
        this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
        this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                      parameters: this.detail.parameters}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.price;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.product.idProduct;
        this.productRequested.patient = this.patient;
        this.savePricesAndCodes();
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                         parameters: this.detail.parameters}) + ']';
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
     if (this.quantity === null  || this.price === null || !this.patient) {
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

  setCodeAndPrice(parameter) {
    switch (this.product.name) {
      case 'Xtensa Premium Toric 6pk':
        if (parameter.name === 'Cylinder (D)') {
          if (parameter.selected === '-2.75') {
            this.productRequested.newCode = '214C';
            this.productRequested.newPrice = 15.0;
            this.price = 15.0;
          } else {
            this.productRequested.newCode = '214B';
            this.productRequested.newPrice = 14.5;
            this.price = 14.5;
          }
        }
        break;
    }
  }
}
