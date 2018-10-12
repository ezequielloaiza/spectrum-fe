import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Buy } from '../../../../shared/models/buy';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { OrderService, UserService } from '../../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { Company } from '../../../../shared/models/company';
import { UserStorageService } from '../../../../http/user-storage.service';
import { NotificationBalanceOrderComponent } from '../../../notification/notification-balance-order/notification-balance-order.component';
import { Router } from '@angular/router';

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
  balace: any;
  company: Company = new Company();
  available: any;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
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
    this.validateAvailableBalance();
    if (this.available) {
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
   } else {
     this.openModal();
     this.close();
   }
  }


  getBalance() {
    this.userService.findById$(this.buyBasket.idUser).subscribe(res => {
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
    if (this.company.paymentMethod === 1 && ((this.total) > this.balace)) { // Postpago
        available = false;
    }
    this.available = available;
  }

  openModal(): void {
    const modalRef = this.modalService.open( NotificationBalanceOrderComponent, { size: 'lg', windowClass: 'modal-content-border' });
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
