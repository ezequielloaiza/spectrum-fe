import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../../../http/user-storage.service';
import { BasketService } from '../../../../../shared/services/basket/basket.service';

@Component({
  selector: 'app-list-basket-client',
  templateUrl: './list-basket-client.component.html',
  styleUrls: ['./list-basket-client.component.scss']
})
export class ListBasketClientComponent implements OnInit {

  listBasket: Array<any> = new Array;
  listBasketAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  user: any;
  constructor(private basket: BasketService,
    private userService: UserStorageService) {
      this.user = JSON.parse(userService.getCurrentUser());
    }

  ngOnInit() {
    this.advancedPagination = 1;
    this.getBasket();
  }

  getBasket() {
    if (this.user.role.idRole === 2) {
      this.basket.findBasketClientBySeller$().subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listBasket = res.data;
          this.listBasketAux = res.data;
        }
      });
    } else if (this.user.role.idRole === 1) {
      this.basket.allBasket$().subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listBasket = res.data;
          this.listBasketAux = res.data;
        }
      });
    }
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listBasket = this.  listBasketAux.slice(startItem, endItem);
  }

  getItems(ev: any) {
    this.listBasket = this.listBasketAux;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
        this.listBasket = this.listBasket.filter((item) => {
          return ((item.user.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
    }
  }

}
