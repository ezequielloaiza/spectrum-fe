import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgxSpinnerService } from 'ngx-spinner';
import { Company } from '../../../shared/models/company';
import { UserService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { NotificationBalanceOrderComponent } from '../../notification/notification-balance-order/notification-balance-order.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modals-confirmation',
  templateUrl: './modals-confirmation.component.html',
  styleUrls: ['./modals-confirmation.component.scss']
})
export class ModalsConfirmationComponent implements OnInit {

  user: any;
  balace: any;
  company: Company = new Company();
  available: any;
  order: any;

  constructor(public modalReference: NgbActiveModal,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private userStorageService: UserStorageService,
    private modalService: NgbModal,
    public router: Router) { }

  ngOnInit() {
    this.getBalance();
  }

  close() {
    this.modalReference.close();
  }

  generateOrder(order) {
    this.validateAvailableBalance();
    if (this.available) {
      this.spinner.show();
      this.orderService.generateOrder$(order.idOrder).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe((res: string) => {
            this.notification.success('', res);
            this.spinner.hide();
            this.close();
            this.redirectListOrder();
          });
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
    this.userService.findById$(this.order.user.idUser).subscribe(res => {
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
    if (this.company.paymentMethod === 1 && ((this.order.total) > this.balace)) { // Postpago
        available = false;
    }
    this.available = available;
  }

  openModal(): void {
    const modalRef = this.modalService.open( NotificationBalanceOrderComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.orderModal = this.order;
    modalRef.componentInstance.type = 2;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
      this.close();
    });
  }

  redirectListOrder(): void {
      this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
  }


}
