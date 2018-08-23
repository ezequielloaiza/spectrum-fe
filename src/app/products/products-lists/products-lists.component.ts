import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {

  products: Array<any> = new Array;
  currentUser: any;
  user: any;

  constructor(private productService:ProductService, private userStorageService: UserStorageService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser())
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.setPrice();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  setPrice() {
    if (this.user.role.idRole === 3) {
    let membership = this.currentUser.membership.idMembership;
    _.each(this.products, function (product) {
      switch (membership) {
        case 1:
          product.priceSale = product.price1;
          break;
        case 2:
          product.priceSale = product.price2;
          break;
        case 3:
          product.priceSale = product.price3;
          break;
      }
    });
  }
}

}
