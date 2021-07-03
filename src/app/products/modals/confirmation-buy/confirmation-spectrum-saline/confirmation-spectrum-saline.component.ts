import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../../shared/models/productrequested';
import { BasketRequest } from '../../../../shared/models/basketrequest';
import { BuyNow } from '../../../../shared/models/buynow';
import { Company } from '../../../../shared/models/company';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { OrderService, UserService } from '../../../../shared/services';
import { BasketService } from '../../../../shared/services/basket/basket.service';
import { Router } from '@angular/router';
import { UserStorageService } from '../../../../http/user-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { NotificationBalanceComponent } from '../../notification-balance/notification-balance.component';
import * as _ from 'lodash';
import { StatusUser } from '../../../../shared/enum/status-user.enum';


@Component({
  selector: 'app-confirmation-spectrum-saline',
  templateUrl: './confirmation-spectrum-saline.component.html',
  styleUrls: ['./confirmation-spectrum-saline.component.scss']
})
export class ConfirmationSpectrumSalineComponent implements OnInit {

  typeOrder: any;
  datos: any;
  product: any;
  role: any;
  listBasket: Array<ProductRequested> = new Array;
  lista: Array<ProductRequested> = new Array;
  namePatient: any;
  quantity: any;
  basketRequest: BasketRequest = new BasketRequest();
  buyNow: BuyNow = new BuyNow();
  typeBuy: any;
  price: any;
  user: any;
  client: any;
  balace: any;
  company: Company = new Company();
  available: any;
  strips: any;

  constructor(public modalReference: NgbActiveModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private basketService: BasketService,
              private orderService: OrderService,
              public router: Router,
              private userStorageService: UserStorageService,
              private spinner: NgxSpinnerService,
              private userService: UserService,
              private modalService: NgbModal) {
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.getDatos();
    this.getBalance();
  }

  close() {
    this.modalReference.dismiss();
    this.modalReference.close();
  }

  getDatos() {
    let  priceAcum = 0;
    let quantity = 0;
    this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    _.each(this.listBasket, function (productRequested) {
      priceAcum =  priceAcum + (productRequested.price * productRequested.quantity);
      quantity = productRequested.quantity;
    });
    this.price = priceAcum;
    this.quantity = quantity;
    this.strips = this.quantity * 100;
  }

  save(): void {

    if (this.typeBuy === 1) {
      this.spinner.show();
      this.basketRequest.idUser = this.datos.idUser;
      this.basketRequest.productRequestedList = this.lista;
      this.basketRequest.listFileRightEye = [];
      this.basketRequest.listFileLeftEye = [];
      this.basketService.saveBasket$(this.basketRequest).subscribe(res => {
        if (res.code === CodeHttp.ok) {
            this.close();
            this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe(( res: string) => {
              this.notification.success('', res);
            });
            this.spinner.hide();
            this.redirectListProducts();
        } else {
          this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe((res: string) => {
            this.notification.error('', res);
            this.spinner.hide();
            console.log(res);
          });
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      if (this.client.status === StatusUser.InDefault) {
        this.translate.get('Customer in Default', { value: 'Customer in Default' }).subscribe((title: string) => {
          this.translate.get('Your account was deactivated. Please contact with the administrator',
          { value: 'Your account was deactivated. Please contact with the administrator' })
          .subscribe((msg: string) => {
            this.alertify.warning(msg);
            this.close();
          });
        });
      } else {
        this.buyNow.idUser = this.datos.idUser;
        this.buyNow.productRequestedList = this.lista;
        this.buyNow.idRole = this.role;
        this.basketRequest.listFileRightEye = [];
        this.basketRequest.listFileLeftEye = [];
        this.buyNow.typeOrder = this.typeOrder;
        // this.validateAvailableBalance();
        // if (this.available) {
            this.spinner.show();
            this.orderService.saveOrderDirect$(this.buyNow).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.spinner.hide();
              this.close();
              this.translate.get('Order generated successfully', {value: 'Order generated successfully'}).subscribe(( res: string) => {
                this.notification.success('', res);
              });
              this.redirectListOrder();
            } else {
              this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe((res: string) => {
                this.notification.error('', res);
                this.spinner.hide();
                console.log(res);
              });
            }
          }, error => {
            console.log('error', error);
          });
        /*} else {
          this.openModal(); // No tiene disponible el balance de credito
          this.close();
        }*/
      }
    }
  }


  redirectListProducts(): void {
    this.router.navigate(['/products/']);
  }

  redirectListBasket(): void {
    if (this.user.role.idRole === 3) {
      this.router.navigate(['/list-basket-client']);
    } else if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.router.navigate(['/list-basket']);
    }
  }

  redirectListOrder(): void {
    if (this.user.role.idRole === 3) {
      this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
    } else if ( this.user.role.idRole === 1) {
      this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
    } else if ( this.user.role.idRole === 2) {
      this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
    }
  }

  getBalance() {
    this.userService.findById$(this.datos.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.client = res.data;
        this.company = res.data.company;
        this.balace = this.company.balance;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  validateAvailableBalance() {
    let available = true;
    if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) { // Postpago
        available = false;
    }
    this.available = available;
  }

  openModal(): void {
    const modalRef = this.modalService.open( NotificationBalanceComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.buyNowModal = this.buyNow;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
      this.close();
    });
  }
}
