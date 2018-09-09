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
import { Buy } from '../../../../../shared/models/buy';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DetailProductModalComponent } from '../../../modals/detail-product/detail-product';
import { SummaryProductsComponent } from '../../../modals/summary-products/summary-products.component';


@Component({
  selector: 'app-list-basket',
  templateUrl: './list-basket.component.html',
  styleUrls: ['./list-basket.component.scss']
})
export class ListBasketComponent implements OnInit {

  listBasket: Array<any> = new Array;
  listBasketAux: Array<any> = new Array;
  user: any;
  buyBasket: Buy = new Buy();
  subtotal: any;
  total: any;
  productRequestedToBuy: Array<any> = new Array;
   checkboxModel = {
    value1 : false,
    value2 : 'NO'
  };
  basket: any;
  checkedAll: any;

  constructor(private basketService: BasketService,
    private basketProductRequestedService: BasketproductrequestedService,
    private orderService: OrderService,
    private userService: UserStorageService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal,
    private translate: TranslateService) {
      this.user = JSON.parse(userService.getCurrentUser());
    }

  ngOnInit() {
    this.getListBasket();
  }

  getListBasket(): void {
      this.basketService.allBasketByUser$(this.user.userResponse.idUser).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listBasket = res.data;
          this.listBasketAux = res.data;
          _.each(this.listBasket, function (basket) {
            basket.checked = false;
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
    } else {
      if (this.checkedAll === false) {
        _.each(this.listBasket, function(item) {
            item.checked = true;
         });
        this.productRequestedToBuy = this.listBasket;
      }
    }
  }

  buy() {
    this.calculationsSummary();
    this.openSumary();
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
    this.checkedAll = valueChecked;
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

  openParams(basket) {
    const modalRef = this.modalService.open( DetailProductModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.basket = basket;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  openSumary() {
    this.buyBasket.idUser = this.user.userResponse.idUser;
    this.buyBasket.listBasket = this.productRequestedToBuy;
    this.buyBasket.idRole = this.user.role.idRole;
    const modalRef = this.modalService.open( SummaryProductsComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.subtotal = this.subtotal;
    modalRef.componentInstance.total = this.total;
    modalRef.componentInstance.buyBasket = this.buyBasket;
    modalRef.componentInstance.quantity = this.productRequestedToBuy.length;
    modalRef.result.then((result) => {
      this.getListBasket();
      this.checkboxModel.value1 = false;
      this.productRequestedToBuy = new Array;
    } , (reason) => {
    });
  }

  calculationsSummary() {
    let subtotal = 0;
    const listSelect = this.productRequestedToBuy;
    _.each(this.listBasket, function(item) {
        _.each(listSelect, function(itemBasket) {
          if (item.idBasketProductRequested === itemBasket) {
            subtotal = subtotal + (item.productRequested.quantity  * item.productRequested.price);
          }
        });
      });
      this.subtotal = subtotal;
      this.total = subtotal;
  }

}
