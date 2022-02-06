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

  membership: any;
  userOrder: any;
  basket: any;productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  product: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  tones: Array<any> = new Array;
  quantity: any;
  observations: any;
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
      this.membership = this.basket.basket.user.membership.idMembership;
    } else { // order-detail
      this.productRequested = this.detailEdit;
      this.membership = this.userOrder.membership.idMembership;
    }
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
    this.getProductView();

  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.patient = this.productRequested.patient;
    this.product.parameters = this.detail.parameters;
    this.product.priceSale = this.productRequested.price;
    this.boxes = JSON.parse(JSON.stringify(this.detail.boxes));
    this.product.parametersBox = _.filter(JSON.parse(this.product.types)[0].parameters, function (param: any) {
      return param.values.length > 1;
    });
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
        this.productRequested.detail = '[' + JSON.stringify({ name: this.product.name,
                                                              eye: this.detail.eye,
                                                              parameters: this.detail.parameters,
                                                              boxes: this.boxes,
                                                              codeSpectrum: this.product.codeSpectrum}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.product.priceSale;
        this.productRequested.quantity = _.sumBy(this.boxes, 'quantity');
        this.productRequested.product = this.product.idProduct;
        this.productRequested.patient = this.patient;
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: this.product.name,
                                                                 eye: this.detail.eye,
                                                                 parameters: this.detail.parameters,
                                                                 boxes: this.boxes,
                                                                 codeSpectrum: this.product.codeSpectrum}) + ']';
        this.productRequestedAux.observations = this.observations;
        this.productRequestedAux.price = this.product.priceSale;
        this.productRequestedAux.quantity = _.sumBy(this.boxes, 'quantity');
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
     if (this.quantity === null || !this.patient) {
          valido = false;
     }

     var totalQuantity = _.sumBy(this.boxes, 'quantity');
     if ( totalQuantity < 50 ) {
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

  setCodeAndPriceByQuantity() {
    var totalQuantity = _.sumBy(this.boxes, 'quantity');

    if (this.product.name === 'Claria SiHy Aspheric 6pk') {
      if (totalQuantity < 501) {
        this.product.codeSpectrum = '216A';
        this.product.priceSale = 14.0;
        if (this.membership === 6) {
          this.product.priceSale = 29.0;
        }
      } else if (totalQuantity < 2001) {
        this.product.codeSpectrum = '216B';
        this.product.priceSale = 13.5;
        if (this.membership === 6) {
          this.product.priceSale = 28.5;
        }
      } else if (totalQuantity < 3501) {
        this.product.codeSpectrum = '216C';
        this.product.priceSale = 13.2;
        if (this.membership === 6) {
          this.product.priceSale = 28.0;
        }
      } else if (totalQuantity < 5001) {
        this.product.codeSpectrum = '216D';
        this.product.priceSale = 12.75;
        if (this.membership === 6) {
          this.product.priceSale = 27.5;
        }
      } else {
        this.product.codeSpectrum = '216E';
        this.product.priceSale = 12.5;
        if (this.membership === 6) {
          this.product.priceSale = 27.0;
        }
      }
    } else if (this.product.name === 'Claria SiHy Toric 6pk') {
      if (totalQuantity < 501) {
        this.product.codeSpectrum = '217A';
        this.product.priceSale = 18.25;
        if (this.membership === 6) {
          this.product.priceSale = 35.0;
        }
      } else if (totalQuantity < 2001) {
        this.product.codeSpectrum = '217B';
        this.product.priceSale = 18.0;
        if (this.membership === 6) {
          this.product.priceSale = 34.5;
        }
      } else if (totalQuantity < 3501) {
        this.product.codeSpectrum = '217C';
        this.product.priceSale = 17.75;
        if (this.membership === 6) {
          this.product.priceSale = 34.0;
        }
      } else if (totalQuantity < 5001) {
        this.product.codeSpectrum = '217D';
        this.product.priceSale = 17.5;
        if (this.membership === 6) {
          this.product.priceSale = 33.5;
        }
      } else {
        this.product.codeSpectrum = '217E';
        this.product.priceSale = 17.25;
        if (this.membership === 6) {
          this.product.priceSale = 33.0;
        }
      }
    }
  }

  addBox() {
    this.boxes.push({ quantity: 1, parameters: JSON.parse(JSON.stringify(this.product.parametersBox)) });
  }

  removeBox(index) {
    if (this.boxes.length > 1) {
      this.boxes.splice(index, 1);
    }
  }
}
