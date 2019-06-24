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

@Component({
  selector: 'app-saline-fluo',
  templateUrl: './saline-fluo.component.html',
  styleUrls: ['./saline-fluo.component.scss']
})
export class SalineFluoComponent implements OnInit {

  basket: any;
  productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  product: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  quantity: any;
  price: any;
  editPrice = false;
  user: any;
  image: any;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
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
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }

  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    this.quantity = this.productRequested.quantity;
    this.price = this.productRequested.price;
  }

  save() {
    if (this.typeEdit === 1) { // Basket
        this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
        this.productRequested.price = this.price;
        this.productRequested.detail = '';
        this.productRequested.patient = null;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.product.idProduct;
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.price = this.price;
        this.productRequestedAux.detail = '';
        this.productRequestedAux.patient = null;
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = this.product.idProduct;
        this.update(this.productRequestedAux);
    }
  }

  formIsValid() {
    let valido = true;
     if (this.quantity === null  || this.price === null) {
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
