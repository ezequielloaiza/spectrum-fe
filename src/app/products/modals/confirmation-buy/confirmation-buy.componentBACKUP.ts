import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ProductRequested } from '../../../shared/models/productrequested';
import { BasketService } from '../../../shared/services/basket/basket.service';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { BasketRequest } from '../../../shared/models/basketrequest';
import { BuyNow } from '../../../shared/models/buynow';
import { OrderService, UserService } from '../../../shared/services';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Company } from '../../../shared/models/company';
import { NotificationBalanceComponent } from '../notification-balance/notification-balance.component';

@Component({
  selector: 'app-confirmation-buy',
  templateUrl: './confirmation-buy.component.html',
  styleUrls: ['./confirmation-buy.component.scss']
})
export class ConfirmationBuyComponent implements OnInit {
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
  quantity: any;
  user: any;
  balace: any;
  // list for File
  listFileBasket: Array<FileProductRequested> = new Array;
  listUrlFiles: Array<String> = new Array;
  // boolean for delete file
  save_success: Boolean = false;
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
    if (!this.save_success) {
      this.listUrlFiles = this.buildUrlFiles();
      this.deleteAllFile();
    }
    this.modalReference.dismiss();
    this.modalReference.close();
  }

  getDatos() {
    let patient;
    let  quantityAcum = 0;
    let eyesSelected = [];
    this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    _.each(this.listBasket, function (productRequested) {
      quantityAcum =  quantityAcum + productRequested.quantity;
      patient = productRequested.patient;
      let details = JSON.parse(productRequested.detail);
      _.each(details, function (detail) {
        eyesSelected.push(detail.eye);
      });
      productRequested.detail = JSON.parse(productRequested.detail);
    });
    this.eyesSelected = eyesSelected;
    this.namePatient = patient;
    this.quantity = quantityAcum;
    this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
  }

  save(): void {
    if (this.typeBuy === 1) {
      this.spinner.show();
      this.basketRequest.idUser = this.datos.idUser;
      this.basketRequest.productRequestedList = this.lista;
      // this.basketRequest.fileProductRequestedList = this.listFileBasket;
      this.basketService.saveBasket$(this.basketRequest).subscribe(res => {
        if (res.code === CodeHttp.ok) {
            this.save_success = true;
            this.close();
            this.translate.get('Successfully save', {value: 'Successfully save'}).subscribe(( res: string) => {
              this.notification.success('', res);
            });
            this.spinner.hide();
            this.redirectListBasket();
        } else {
          console.log(res.errors[0].detail);
          this.spinner.hide();
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.buyNow.idUser = this.datos.idUser;
      this.buyNow.productRequestedList = this.lista;
      this.buyNow.idRole = this.role;
      // this.buyNow.fileProductRequestedList = this.listFileBasket;
      this.validateAvailableBalance();
      if (this.available) {
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
          console.log(res.errors[0].detail);
          this.spinner.hide();
        }
      }, error => {
        console.log('error', error);
      });
      } else {
        this.openModal(); // No tiene disponible el balance de credito
        this.close();
      }
    }
  }

  buildUrlFiles() {
    const listUrlFiles: Array<String> = new Array;
    _.each(this.listFileBasket, function (file) {
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
    if (this.company.paymentMethod === 1 && ((this.product.priceSale * this.quantity) > this.balace)) { // Postpago
        available = false;
    }
    this.available = available;
  }

  openModal(): void {
    const modalRef = this.modalService.open( NotificationBalanceComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.buyNowModal = this.buyNow;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
      this.close();
    });
  }
}
