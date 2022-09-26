import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import * as _ from 'lodash';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../../../shared/services/products/product.service';

@Component({
  selector: 'app-blue-light',
  templateUrl: './blue-light.component.html',
  styleUrls: ['./blue-light.component.scss']
})
export class BlueLightComponent implements OnInit {

  basket: any;
  productsCode: any;
  membership: any;
  userOrder:any;
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
  image: any;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productService: ProductService,
              private productRequestedService: ProductsRequestedService,
              private userService: UserStorageService,
              public router: Router,
              private spinner: NgxSpinnerService) {
                this.user = JSON.parse(userService.getCurrentUser());
              }

  ngOnInit() {
    if (this.typeEdit === 1 ) { // Basket
      this.productRequested = this.basket.productRequested;
      this.membership = this.basket.basket.user.membership.idMembership;
    } else { // order-detail
      this.productRequested = this.detailEdit;
    }
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
    this.getProductView();
    this.getProductsBlueLight();
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }

  }

  getProductsBlueLight() {
    this.productService.findBySupplier$(6).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.productsCode = res1.data;
      } else {
        console.log(res1.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
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
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
           productSelected.selected = item.selected;
        }
     });
    });
    this.product.parameters = paramet;
  }

  getProductSelected(parameters) {
    const diameter: any = _.find(parameters, { name: 'Diameter (mm)' });
    let productSelected;

    _.each(this.productsCode, function (pr) {
      if (diameter.selected === "22.0" && _.includes(pr.name, '22.0')) {
        productSelected = pr;
      }
    });

    return productSelected || this.productsCode[0]; // TODO: refactor prices... Explanation: Position 0 is diameter 15.5 to 18.0
  }

  getPrice(product) {
    switch (this.membership) {
      case 1:
        return product.price1;
      case 2:
        return product.price2;
      case 3:
        return product.price3;
      case 4:
        return product.price4;
      case 5:
        return product.price5;
      case 6:
        return product.price6;
      case 7:
        return product.price7;
      case 8:
        return product.price8;
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
        this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: '', parameters: this.detail.parameters}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.getPrice(this.getProductSelected(this.detail.parameters));
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.getProductSelected(this.detail.parameters).idProduct;
        this.productRequested.patient = this.patient;
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: '', parameters: this.detail.parameters}) + ']';
        this.productRequestedAux.observations = this.observations;
        this.productRequestedAux.price = this.getPrice(this.getProductSelected(this.detail.parameters));
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = this.getProductSelected(this.detail.parameters).idProduct;
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
     if (this.quantity === null  || (this.patient === null || this.patient === '')) {
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
