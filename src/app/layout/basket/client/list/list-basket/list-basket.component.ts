import { Component, OnInit } from '@angular/core';
import { BasketService} from '../../../../../shared/services/basket/basket.service';
import { BasketproductrequestedService } from '../../../../../shared/services/basketproductrequested/basketproductrequested.service';
import { OrderService } from '../../../../../shared/services/order/order.service';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { AlertifyService } from '../../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../../../http/user-storage.service';

@Component({
  selector: 'app-list-basket',
  templateUrl: './list-basket.component.html',
  styleUrls: ['./list-basket.component.scss']
})
export class ListBasketComponent implements OnInit {

  listBasket: Array<any> = new Array;
  listBasketAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  user: any;

  constructor(private basketService: BasketService,
    private basketProductRequestedService: BasketproductrequestedService,
    private orderService: OrderService,
    private userService: UserStorageService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private translate: TranslateService) {
      this.user = JSON.parse(userService.getCurrentUser());
    }

  ngOnInit() {
    this.getListBasket();
    this.advancedPagination = 1;
  }

  getListBasket(): void {
      this.basketService.allBasketByUser$(this.user.userResponse.idUser).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listBasket = res.data;
          this.listBasketAux = res.data;
          _.each(this.listBasket, function (basket) {
            basket.productRequested.detail = JSON.parse(basket.productRequested.detail);
          });
        }
      });
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listBasket = this.  listBasketAux.slice(startItem, endItem);
  }

  borrar(id): void {
    this.basketProductRequestedService.removeById$(id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.getListBasket();
        // tslint:disable-next-line:no-shadowed-variable
        this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe(( res: string) => {
          this.notification.success('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  delete(id) {
    this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
      this.translate.get('Are you sure do you want to delete this register?',
       {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
         this.alertify.confirm(title, msg, () => {
           this.borrar(id);
          }, () => {});
        });
      });
    }

    getItems(ev: any) {
      this.listBasket = this.listBasketAux;
      const val = ev.target.value;
      if (val && val.trim() !== '') {
          this.listBasket = this.listBasket.filter((item) => {
            return ((item.productRequested.patient.toLowerCase().indexOf(val.toLowerCase()) > -1));
          });
      }
    }

    buy() {
      this.translate.get('Confirm Purchase', {value: 'Confirm Purchase'}).subscribe((title: string) => {
        this.translate.get('Are you sure you want to buy the entire basket?',
         {value: 'Are you sure you want to buy the entire basket?'}).subscribe((msg: string) => {
           this.alertify.confirm(title, msg, () => {
             this.generateOrder();
            }, () => {});
          });
        });
      }

    generateOrder() {
      this.orderService.saveOrder$(this.user.userResponse.idUser).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.getListBasket();
          this.translate.get('Order generated successfully', {value: 'Order generated successfully'}).subscribe(( res: string) => {
            this.notification.success('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
}
