import { Component, OnInit } from '@angular/core';
import { BuyNow } from '../../../../shared/models/buynow';
import { BasketRequest } from '../../../../shared/models/basketrequest';
import { ProductRequested } from '../../../../shared/models/productrequested';
import { FileProductRequested } from '../../../../shared/models/fileproductrequested';
import { Company } from '../../../../shared/models/company';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { BasketService } from '../../../../shared/services/basket/basket.service';
import { OrderService, UserService } from '../../../../shared/services';
import { FileProductRequestedService } from '../../../../shared/services/fileproductrequested/fileproductrequested.service';
import { Router } from '@angular/router';
import { UserStorageService } from '../../../../http/user-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { NotificationBalanceComponent } from '../../notification-balance/notification-balance.component';
import * as _ from 'lodash';
import { StatusUser } from '../../../../shared/enum/status-user.enum';

@Component({
  selector: 'app-confirmation-smartlens',
  templateUrl: './confirmation-smartlens.component.html',
  styleUrls: ['./confirmation-smartlens.component.scss']
})
export class ConfirmationSmartlensComponent implements OnInit {

  typeOrder: any;
  datos: any;
  product: any;
  file: File;
  role: any;
  listBasket: Array<ProductRequested> = new Array;
  lista: Array<ProductRequested> = new Array;
  namePatient: any;
  basketRequest: BasketRequest = new BasketRequest();
  buyNow: BuyNow = new BuyNow();
  eyesSelected: any;
  typeBuy: any;
  price: any;
  user: any;
  client: any;
  balance: any;
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
    if (!this.save_success && !this.balance_modal) {
      this.listUrlFiles = this.buildUrlFiles();
      this.deleteAllFile();
    }
    this.modalReference.dismiss();
    this.modalReference.close();
  }

  getDatos() {
    const self = this;
    let patient;
    let  priceAcum = 0;
    let eyesSelected = [];
    this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    const listBasketAux = [];
    _.each(this.listBasket, function (productRequested) {

      priceAcum =  priceAcum + (productRequested.price * productRequested.quantity);

      patient = productRequested.patient;
      if (productRequested.observations === undefined) {
        productRequested.observations = '';
      }
      let details = JSON.parse(productRequested.detail);

      _.each(details, function (detail) {
        eyesSelected.push(detail.eye);
      });

      productRequested.detail = JSON.parse(productRequested.detail);

      if (!self.isAdditionalProduct(productRequested)) {
        listBasketAux.push(productRequested);
      }
    });

    this.listBasket = listBasketAux;
    this.eyesSelected = eyesSelected;
    this.namePatient = patient;
    this.price = priceAcum;
  }

  isAdditionalProduct(productRequested) {
    return productRequested.name === 'Notch' || productRequested.name === 'Hydrapeg';
  }

  getBalance() {
    this.userService.findById$(this.datos.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.client = res.data;
        this.company = res.data.company;
        this.balance = this.company.balance;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getParams(detail) {
    let params = detail.parameters;

    if (detail.design === "Sph") {
      params =  _.filter(params, function(param) {
        // Remove params cylinder and axis when design is Sph.
        return param.name !== 'Cylinder (D)' && param.name !== 'Axis Cylinder(º)' && param.name !== 'Position of axis rotation markers' && param.name !== 'Rotationally stable';
      });
    }

    if (detail.typeLens === 'Final Design') {
      params =  _.filter(params, function(param) {
        // Excluding params design by laboratory
        return param.name !== 'Over-refraction';
      });
    }
    return params;
  }

  buildUrlFiles() {
    const listUrlFiles: Array<String> = new Array;

    _.each(this.listFileLeftEye, function (file) {
      listUrlFiles.push(file.url);
    });
    _.each(this.listFileRightEye, function (file) {
      listUrlFiles.push(file.url);
    });
    return listUrlFiles;
  }

  deleteAllFile(): void {
    this.fileProductRequestedService.deleteAllFile$(this.buildUrlFiles()).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        console.log('Delete files');
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
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

  validateAvailableBalance() {
    let available = true;
    if (this.company.paymentMethod === 1 && ((this.price) > this.balance)) { // Postpago
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
      this.save_success = true;
      this.balance_modal = false;
      this.close();
    });
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
        this.buyNow.listFileRightEye = this.listFileRightEye;
        this.buyNow.listFileLeftEye = this.listFileLeftEye;


        // this.validateAvailableBalance();
        // if (this.available) {
            this.spinner.show();
            this.buyNow.typeOrder = this.typeOrder;
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
          this.balance_modal = true;
          this.openModal(); // No tiene disponible el balance de credito
          this.close();
        }*/
      }
    }
  }
}
