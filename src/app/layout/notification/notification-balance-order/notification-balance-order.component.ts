import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Buy } from '../../../shared/models/buy';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from '../../../shared/services/basket/basket.service';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { OrderService, ProductsRequestedService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserStorageService } from '../../../http/user-storage.service';
import { Router } from '@angular/router';
import { Order } from '../../../shared/models/order';
import { ModalsShippingComponent } from '../../manage-customer-orders/modals-shipping/modals-shipping.component';
import * as _ from 'lodash';


@Component({
  selector: 'app-notification-balance-order',
  templateUrl: './notification-balance-order.component.html',
  styleUrls: ['./notification-balance-order.component.scss']
})
export class NotificationBalanceOrderComponent implements OnInit {

  buyBasketModal: any;
  orderModal: any;
  buyBasket: Buy = new Buy();
  order: Order = new Order();
  type: any;
  user: any;
  message: any;
  visibleAdmin = false;
  newStatus: any;
  validRecords = 0;
  constructor(public modalReference: NgbActiveModal,
              private basketService: BasketService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private orderService: OrderService,
              private spinner: NgxSpinnerService,
              private userStorageService: UserStorageService,
              public router: Router,
              private modalService: NgbModal,
              private productRequestedService: ProductsRequestedService) {
          this.user = JSON.parse(userStorageService.getCurrentUser());
               }

  ngOnInit() {
    if (this.type === 1) {
      this.buyBasket = this.buyBasketModal;
    } else {
      this.order = this.orderModal;
    }
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
    if (this.type === 1) { // Genera desde la cesta
      this.orderService.saveOrder$(this.buyBasket).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.spinner.hide();
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
    } else if (this.type === 2) { // Genera desde el detalle de la orden
      this.orderService.generateOrder$(this.order.idOrder).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe((res: string) => {
            this.notification.success('', res);
            this.spinner.hide();
            this.close();
            this.redirectListOrder();
          });
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
    } else { // Cambiar status
      if (this.newStatus === 2) {
        this.openModalShipping();
        this.spinner.hide();
        this.close();
      } else {
        this.orderService.changeStatus$(this.order.idOrder, this.newStatus).subscribe(res => {
          if (res.code === CodeHttp.ok) {
            this.spinner.hide();
            this.close();
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: this.newStatus } });
            this.translate.get('Successfully Update', { value: 'Successfully Update' }).subscribe((res: string) => {
              this.notification.success('', res);
            });
          } else {
            console.log(res.errors[0].detail);
            this.spinner.hide();
          }
          }, error => {
            console.log('error', error);
          });
        }
      }
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

  openModalShipping(): void {
    const modalRef = this.modalService.open( ModalsShippingComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.orderModal = this.order;
    modalRef.componentInstance.idStatus = this.newStatus;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
      this.close();
    });
  }
}
