import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Buy } from '../../../../shared/models/buy';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { OrderService, UserService, ProductsRequestedService } from '../../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { Company } from '../../../../shared/models/company';
import { UserStorageService } from '../../../../http/user-storage.service';
import { NotificationBalanceOrderComponent } from '../../../notification/notification-balance-order/notification-balance-order.component';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { StatusUser } from '../../../../shared/enum/status-user.enum';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';

@Component({
  selector: 'app-summary-products',
  templateUrl: './summary-products.component.html',
  styleUrls: ['./summary-products.component.scss']
})
export class SummaryProductsComponent implements OnInit {

  subtotal: any;
  total: any;
  buyBasket: Buy;
  quantity: any;
  user: any;
  client: any;
  balace: any;
  company: Company = new Company();
  available: any;
  list: Array<any>;
  listAux: Array<any>;
  inserts = 0;
  validRecords = 0;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private alertify: AlertifyService,
              private translate: TranslateService,
              private orderService: OrderService,
              private spinner: NgxSpinnerService,
              private userService: UserService,
              private userStorageService: UserStorageService,
              private modalService: NgbModal,
              public router: Router) {
      this.user = JSON.parse(userStorageService.getCurrentUser());
              }

  ngOnInit() {
    this.getBalance();
  }

  close() {
    this.modalReference.close(1);
  }

  generateOrder() {
    // this.validateAvailableBalance();
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
      this.spinner.show();
      this.orderService.saveOrder$(this.buyBasket).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.spinner.hide();
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
    }
  }


  getBalance() {
    this.userService.findById$(this.buyBasket.idUser).subscribe(res => {
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
    if (this.company.paymentMethod === 1 && ((this.total) > this.balace)) { // Postpago
        available = false;
    }
    this.available = available;
  }

  openModal(): void {
    const modalRef = this.modalService.open( NotificationBalanceOrderComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
    modalRef.componentInstance.buyBasketModal = this.buyBasket;
    modalRef.componentInstance.type = 1;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
      this.close();
    });
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
}
