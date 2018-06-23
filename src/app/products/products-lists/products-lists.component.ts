import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {

  products: Array<any> = new Array;
  constructor(private productComponent:ProductsComponent) { }

  ngOnInit() {
    this.products = this.productComponent.products
  }

}
