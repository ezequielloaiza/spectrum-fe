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
import { ProductRequested } from '../../../../shared/models/productrequested';
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
              public router: Router,
              private productRequestedService: ProductsRequestedService) {
      this.user = JSON.parse(userStorageService.getCurrentUser());
              }

  ngOnInit() {
    this.getBalance();
    this.updatePriceEuropa();
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
      // if (this.available) {
        this.spinner.show();
        this.orderService.saveOrder$(this.buyBasket).subscribe(res => {
          if (res.code === CodeHttp.ok) {
            if (this.listAux.length > 0) {
               this.update();//caso europa
            } else {
              this.close();
              this.spinner.hide();
              this.translate.get('Order generated successfully', {value: 'Order generated successfully'}).subscribe(( res: string) => {
                this.notification.success('', res);
              });
              this.redirectListOrder();
            }
          } else {
            console.log(res.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
        });
     /*} else {
       this.openModal();
       this.close();
     }*/
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
    modalRef.componentInstance.listAux = this.listAux;
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

  updatePriceEuropa() {
    let self = this;
    let basketUpdate;
    let oldInserts;
    let listAux = [];
    _.each(this.buyBasket.listBasket, function (basket) {
      _.each(self.list, function (item) {
         if (item.idBasketProductRequested === basket) {
           if (item.productRequested.product.supplier.idSupplier === 2) {
            let detail = item.productRequested.detail;
            _.each( detail, function(item1) {
              _.each(item1.header, function(itemH, index) {
                if (itemH.name === 'Inserts (DMV)') {
                  oldInserts = item1.header[index].selected;
                }
              });
            });
            if (oldInserts) { //si tenia DMV
              let groupId = item.productRequested.groupId;
              basketUpdate = _.find(self.list, function(o) {
                return o.productRequested.idProductRequested !== item.productRequested.idProductRequested
                && item.productRequested.groupId === o.productRequested.groupId;
              });
              if (basketUpdate !== undefined) {
                self.definePriceInserts(basketUpdate.basket.user.membership.idMembership, basketUpdate);
                let exist = _.includes(self.buyBasket.listBasket, basketUpdate.idBasketProductRequested);
                if (!exist) {
                    //EL que se compra
                    let productRequested = new ProductRequested();
                    productRequested.idProductRequested = item.productRequested.idProductRequested;
                    productRequested.detail = JSON.stringify(item.productRequested.detail);
                    const priceNew = item.productRequested.price - (self.inserts / 2);
                    productRequested.price = priceNew + self.inserts;
                    listAux = _.concat(listAux, productRequested);
                    //El que queda en la cesta
                    let productRequested1 = new ProductRequested();
                    productRequested1.idProductRequested = basketUpdate.productRequested.idProductRequested;
                    productRequested1.detail = JSON.stringify(basketUpdate.productRequested.detail);
                    const priceNew1 = basketUpdate.productRequested.price - (self.inserts / 2);
                    productRequested1.price = priceNew1 + self.inserts;
                    listAux = _.concat(listAux, productRequested1);
                }
              }
            }
           }
         }
      });
    });
    this.listAux = listAux;
  }


  definePriceInserts(membership, basket) {
    let pricesAditionalInserts = JSON.parse(basket.productRequested.product.infoAditional)[0].values[1];
    switch (membership) {
      case 1:
        this.inserts = pricesAditionalInserts.values[0].price;
        break;
      case 2:
        this.inserts =  pricesAditionalInserts.values[1].price;
        break;
      case 3:
        this.inserts = pricesAditionalInserts.values[2].price;
        break;
    }
  }

  update() {
    let self = this;
    let records = this.validRecords;
    _.each(this.listAux, function(item) {
      self.productRequestedService.updatePriceEuropa$(item).subscribe(res1 => {
        records++;
        self.showMessage(records);
     });
   });
  }

  showMessage(records) {
    this.validRecords = records;
    if (this.validRecords === this.listAux.length) {
      this.close();
      this.spinner.hide();
      this.translate.get('Order generated successfully', {value: 'Order generated successfully'}).subscribe(( res: string) => {
        this.notification.success('', res);
      });
      this.redirectListOrder();
    }
 }

}
