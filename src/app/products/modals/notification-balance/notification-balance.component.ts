import { Component, OnInit } from '@angular/core';
import { BasketRequest } from '../../../shared/models/basketrequest';
import { BasketService } from '../../../shared/services/basket/basket.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { BuyNow } from '../../../shared/models/buynow';
import { OrderService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserStorageService } from '../../../http/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-balance',
  templateUrl: './notification-balance.component.html',
  styleUrls: ['./notification-balance.component.scss']
})
export class NotificationBalanceComponent implements OnInit {

  buyNowModal: any;
  buyNow: BuyNow = new BuyNow();
  user: any;
  message: any;
  visibleAdmin = false;
  constructor(public modalReference: NgbActiveModal,
              private basketService: BasketService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private orderService: OrderService,
              private spinner: NgxSpinnerService,
              private userStorageService: UserStorageService,
              public router: Router) {
          this.user = JSON.parse(userStorageService.getCurrentUser());
               }

  ngOnInit() {
    this.buyNow = this.buyNowModal;
    if (this.user.role.idRole === 3) {
         this.message = 'It does not have the credit balance available, the order will remain pending until authorized.';
    } else if (this.user.role.idRole === 2) {
        this.message = 'The Customer does not have the available credit balance, the order will remain in pending status until authorized.';
    } else {
        this.message = 'The Customer has no available balance.';
        this.visibleAdmin = true;
    }
  }

  save(): void {
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
    }

  close() {
    this.modalReference.dismiss();
    this.modalReference.close();
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
