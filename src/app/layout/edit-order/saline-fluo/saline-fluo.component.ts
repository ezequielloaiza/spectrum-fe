import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { Router } from '@angular/router';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../../../shared/services/products/product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-saline-fluo',
  templateUrl: './saline-fluo.component.html',
  styleUrls: ['./saline-fluo.component.scss']
})
export class SalineFluoComponent implements OnInit {

  basket: any;
  productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  productsCode: any;
  productCode: any;
  product: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  quantity: any;
  price: any;
  editPrice = false;
  fluo = false;
  saline = false;
  user: any;
  image: any;
  strips: any;
  quantityValues: any;
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
    } else { // order-detail
      this.productRequested = this.detailEdit;
    }
    this.product = this.productRequested.product;
    this.getProductView();
    this.getProductsCode();
    if (_.includes(this.product.name, 'Saline')) {
      this.saline = true;
      debugger
      this.quantityValues = (JSON.parse(this.product.infoAditional).find(n => n.name === 'Quantity'));
    } else {
      this.fluo =  true;
    }
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }
  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    this.quantity = this.productRequested.quantity;
    this.strips = this.quantity * 100;
    this.price = this.productRequested.price;
  }

  getProductsCode() {
    if (this.product.codeSpectrum == '44A' || this.product.codeSpectrum == '44B') {
      this.productService.findBySupplierAndInViewAndCategory$(7, false, 10).subscribe(res1 => {
        if (res1.code === CodeHttp.ok) {
          this.productsCode = res1.data;
          this.productsCode = _.filter(res1.data, function (p) {
            return _.includes(p.codeSpectrum, '44');
          });
        } else {
          console.log(res1.errors[0].detail);
          this.spinner.hide();
        }
      }, error => {
        console.log('error', error);
        this.spinner.hide();
      });
    }
  }

  changeSpectrumSaline() {
    let productCode;
    let flag = '';
    console.log('this.quantity >= 250 && this.quantity < 500', this.quantity >= 250 && this.quantity < 500);
    if (this.quantity >= 250 && this.quantity < 500) {
      flag = '250';
    } else if (this.quantity >= 500) {
      flag = '500';
    }
    _.each(this.productsCode, function (pr) {
      if (_.includes(pr.name, flag)) {
        productCode = pr;
      }
    });
    this.productCode = productCode;
  }

  save() {
    let idProduct = this.product.idProduct;
    if (this.product.codeSpectrum == '44A' || this.product.codeSpectrum == '44B') {
      this.changeSpectrumSaline();
      idProduct = this.productCode.idProduct;
    }
    if (this.typeEdit === 1) { // Basket
        this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
        this.productRequested.price = this.price;
        this.productRequested.detail = '';
        this.productRequested.patient = null;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = idProduct;
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.price = this.price;
        this.productRequestedAux.detail = '';
        this.productRequestedAux.patient = null;
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = idProduct;
        this.update(this.productRequestedAux);
    }
  }

  formIsValid() {
    let valido = true;
     if (!this.strips || this.price === null) {
          valido = false;
     }
     return valido;
  }

  change(quantity) {
    if (quantity % 25 === 0) {
      this.strips = quantity * 100;
    }
  }

  update(productRequested) {
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        productRequested = res.data;
        productRequested.detail = JSON.parse(JSON.stringify(productRequested.detail));
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }
}
