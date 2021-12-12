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

  boxes: Array<any> = new Array;

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
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    this.product.parameters = this.detail.parameters;
    this.boxes = this.detail.boxes;
  }

  savePricesAndCodes(type) {
    if (this.isProductPersonalized(this.product)) {
      if (type === 'basket') {
        this.productRequested.detail = '[' + JSON.stringify({ name: '',
                                                              eye: this.detail.eye,
                                                              parameters: this.detail.parameters,
                                                              codeSpectrum: this.productRequested.newCode,
                                                              boxes: this.boxes}) + ']';

        this.productRequested.price = this.productRequested.newPrice;
      } else if (type === 'order-detail') {
        this.productRequestedAux.newCode = this.productRequested.newCode;
        this.productRequestedAux.newPrice = this.productRequested.newPrice;
        this.productRequestedAux.price = this.productRequested.newPrice;

        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '',
                                                                 eye: this.detail.eye,
                                                                 parameters: this.detail.parameters,
                                                                 codeSpectrum: this.productRequestedAux.newCode,
                                                                 boxes: this.boxes}) + ']';
      }
    }
  }

  save() {
    this.setCodeAndPriceByQuantity();

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
        this.productRequested.detail = '[' + JSON.stringify({ name: '',
                                                              eye: this.detail.eye,
                                                              parameters: this.detail.parameters,
                                                              boxes: this.boxes}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.price;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.product.idProduct;
        this.productRequested.patient = this.patient;
        this.savePricesAndCodes('basket');
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '',
                                                                 eye: this.detail.eye,
                                                                 parameters: this.detail.parameters,
                                                                 boxes: this.boxes}) + ']';
        this.productRequestedAux.observations = this.observations;
        this.productRequestedAux.price = this.price;
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = this.product.idProduct;
        this.productRequestedAux.patient = this.patient;
        this.savePricesAndCodes('order-detail');
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

     if (this.isProductClaria(this.product)) {
      valido = this.quantity > 49;
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

  minToBuy() {
    if (this.isProductClaria(this.product)) {
      return 50;
    } else {
      return 1;
    }
  }

  isProductPersonalized(product) {
    return product.name === 'Xtensa Premium Toric 6pk' || this.isProductClaria(product);
  }

  isProductClaria(product) {
    return product.name === 'Claria SiHy Aspheric 6pk' || product.name === 'Claria SiHy Toric 6pk';
  }

  setCodeAndPriceByQuantity() {
    var totalQuantity = _.sumBy(this.boxes, 'quantity');

    if (this.product.name === 'Claria SiHy Aspheric 6pk') {
      if (totalQuantity < 501) {
        this.productRequested.newCode = '216A';
        this.productRequested.newPrice = 14.0;
      } else if (totalQuantity < 2001) {
        this.productRequested.newCode = '216B';
        this.productRequested.newPrice = 13.5;
      } else if (totalQuantity < 3501) {
        this.productRequested.newCode = '216C';
        this.productRequested.newPrice = 13.2;
      } else if (totalQuantity < 5001) {
        this.productRequested.newCode = '216D';
        this.productRequested.newPrice = 12.75;
      } else {
        this.productRequested.newCode = '216E';
        this.productRequested.newPrice = 12.5;
      }
    } else if (this.product.name === 'Claria SiHy Toric 6pk') {
      if (totalQuantity < 501) {
        this.productRequested.newCode = '217A';
        this.productRequested.newPrice = 18.25;
      } else if (totalQuantity < 2001) {
        this.productRequested.newCode = '217B';
        this.productRequested.newPrice = 18.0;
      } else if (totalQuantity < 3501) {
        this.productRequested.newCode = '217C';
        this.productRequested.newPrice = 17.75;
      } else if (totalQuantity < 5001) {
        this.productRequested.newCode = '217D';
        this.productRequested.newPrice = 17.5;
      } else {
        this.productRequested.newCode = '217E';
        this.productRequested.newPrice = 17.25;
      }
    }
    this.price = this.productRequested.newPrice;
  }


  setCodeAndPrice(box, parameter) {
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
