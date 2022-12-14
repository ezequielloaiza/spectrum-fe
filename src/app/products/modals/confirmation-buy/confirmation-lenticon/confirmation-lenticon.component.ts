import { Component, OnInit } from '@angular/core';
import { NotificationBalanceComponent } from '../../notification-balance/notification-balance.component';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService, OrderService } from '../../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserStorageService } from '../../../../http/user-storage.service';
import { Router } from '@angular/router';
import { FileProductRequestedService } from '../../../../shared/services/fileproductrequested/fileproductrequested.service';
import { BasketService } from '../../../../shared/services/basket/basket.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { Company } from '../../../../shared/models/company';
import { FileProductRequested } from '../../../../shared/models/fileproductrequested';
import { BuyNow } from '../../../../shared/models/buynow';
import { BasketRequest } from '../../../../shared/models/basketrequest';
import { ProductRequested } from '../../../../shared/models/productrequested';
import * as _ from 'lodash';
import { StatusUser } from '../../../../shared/enum/status-user.enum';
import { stubString } from 'lodash';

@Component({
  selector: 'app-confirmation-lenticon',
  templateUrl: './confirmation-lenticon.component.html',
  styleUrls: ['./confirmation-lenticon.component.scss']
})
export class ConfirmationLenticonComponent implements OnInit {

  typeOrder: any;
  datos: any;
  product: any;
  file: File;
  role: any;
  listBasket: Array<ProductRequested> = new Array;
  lista: Array<ProductRequested> = new Array;
  listNameParameters: Array<any> = new Array;
  namePatient: any;
  basketRequest: BasketRequest = new BasketRequest();
  buyNow: BuyNow = new BuyNow();
  eyesSelected: any;
  typeBuy: any;
  price: any;
  user: any;
  client: any;
  balace: any;
  // list for File
  listFileBasket: Array<FileProductRequested> = new Array;
  listUrlFiles: Array<String> = new Array;
  listFileLeftEye: Array<FileProductRequested> = new Array;
  listFileRightEye: Array<FileProductRequested> = new Array;
  // boolean for delete file
  save_success: Boolean = false;
  balance_modal: Boolean = false;
  company: Company = new Company();
  available: any;
  additional: any;
  constructor(public modalReference: NgbActiveModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private basketService: BasketService,
              private orderService: OrderService,
              private fileProductRequestedService: FileProductRequestedService,
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
    let patient;
    let  priceAcum = 0;
    this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    _.each(this.listBasket, function (productRequested) {
      priceAcum =  priceAcum + (productRequested.price * productRequested.quantity);
      patient = productRequested.patient;
      if (productRequested.observations === undefined) {
        productRequested.observations = '';
      }
      productRequested.detail = JSON.parse(productRequested.detail);
    });
    this.namePatient = patient;
    this.price = priceAcum;
  }

  save(): void {
    if (this.typeBuy === 1) {
      this.spinner.show();
      this.basketRequest.idUser = this.datos.idUser;
      this.basketRequest.productRequestedList = this.lista;
      this.basketRequest.listFileRightEye = this.listFileRightEye;
      this.basketRequest.listFileLeftEye = this.listFileLeftEye;
      this.basketService.saveBasket$(this.basketRequest).subscribe(res => {
        if (res.code === CodeHttp.ok) {
            this.save_success = true;
            this.close();
            this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe(( res: string) => {
              this.notification.success('', res);
            });
            this.spinner.hide();
            this.redirectListProducts();
            // this.redirectListBasket();
        } else {
          console.log(res);
          this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe((res: string) => {
            this.notification.error('', res);
          });
          this.spinner.hide();
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
        this.buyNow.listFileRightEye = this.listFileRightEye;
        this.buyNow.listFileLeftEye = this.listFileLeftEye;
        this.buyNow.typeOrder = this.typeOrder;
        // this.validateAvailableBalance();
        // if (this.available) {
            this.spinner.show();
            this.orderService.saveOrderDirect$(this.buyNow).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.save_success = true;
              this.spinner.hide();
              this.close();
              this.translate.get('Order generated successfully', {value: 'Order generated successfully'}).subscribe(( res: string) => {
                this.notification.success('', res);
              });
              this.redirectListOrder();
            } else {
              console.log(res);
              this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe((res: string) => {
                this.notification.error('', res);
              });
              this.spinner.hide();
              this.close();
            }
          }, error => {
            console.log('error', error);
          });
        /*} else {
          this.balance_modal = true;
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
      const status = this.typeOrder === 'new' ? 1 : 0;
      this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: status } });
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
      this.save_success = true;
      this.ngOnInit();
    } , (reason) => {
      this.save_success = true;
      this.balance_modal = false;
      this.close();
    });
  }
}

