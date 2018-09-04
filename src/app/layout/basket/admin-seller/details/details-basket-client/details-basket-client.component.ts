import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../../../shared/services/basket/basket.service';
import { BasketproductrequestedService } from '../../../../../shared/services/basketproductrequested/basketproductrequested.service';
import { OrderService } from '../../../../../shared/services';
import { UserStorageService } from '../../../../../http/user-storage.service';
import { AlertifyService } from '../../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Buy } from '../../../../../shared/models/buy';

@Component({
  selector: 'app-details-basket-client',
  templateUrl: './details-basket-client.component.html',
  styleUrls: ['./details-basket-client.component.scss']
})
export class DetailsBasketClientComponent implements OnInit {

  listBasket: Array<any> = new Array;
  listBasketAux: Array<any> = new Array;
  user: any;
  id: any;
  buyBasket: Buy = new Buy();
  productRequestedToBuy: Array<any> = new Array;
   checkboxModel = {
    value1 : false,
    value2 : 'NO'
  };

  constructor(private basketService: BasketService,
    private basketProductRequestedService: BasketproductrequestedService,
    private orderService: OrderService,
    private userService: UserStorageService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private translate: TranslateService,
    private route: ActivatedRoute) {
      this.user = JSON.parse(userService.getCurrentUser());
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getListBasket();
  }

  getListBasket(): void {
      this.basketService.allBasketByUser$(this.id).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listBasket = res.data;
          this.listBasketAux = res.data;
          _.each(this.listBasket, function (basket) {
            basket.productRequested.detail = JSON.parse(basket.productRequested.detail);
          });
        }
      });
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
     this.buyBasket.idUser = this.id;
     this.buyBasket.listBasket = this.productRequestedToBuy;
     this.buyBasket.idRole = this.user.role.idRole;
     this.orderService.saveOrder$(this.buyBasket).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.getListBasket();
          this.productRequestedToBuy = new Array;
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

  onSelection(basket, checked) {
    basket.checked = !checked;
    let id = basket.idBasketProductRequested;
    let exist = _.includes(this.productRequestedToBuy, id);
    if (exist) {
      _.remove(this.productRequestedToBuy,  function (product)  {
        return product === id;
      });
    } else {
      this.productRequestedToBuy = _.concat(this.productRequestedToBuy, id);
    }
  }

  onSelectionAll(valueChecked) {
    let arrayAux = this.productRequestedToBuy;
  _.each(this.listBasket, function(item) {
      item.checked = !valueChecked;
        let id = item.idBasketProductRequested;
        let exist = _.includes(arrayAux, id);
        if (exist) {
            if (valueChecked === true) {
            _.remove(arrayAux,  function (product)  {
              return product === id;
            });
          }
        } else {
          arrayAux = _.concat(arrayAux, id);
        }
      });
      this.productRequestedToBuy = arrayAux;
  }
}
