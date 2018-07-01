import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: Array<any> = new Array;
  product: any;
  id: number;
  parameters: any;
  quantity = 1;
  order: any;
  constructor(private productComponent:ProductsComponent, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(JSON.stringify(_.range(4, 10, 0.5)));
    this.products = this.productComponent.products
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {id: this.id});
    
    //simulando click en el primer type del producto actual
    this.parameters = this.product.types[0].parameters;
  }

  setParameters(type) {
    this.cleanTypeSelected();
    type.selected = true;
    this.parameters = type.parameters;
  }

  cleanTypeSelected() {
    _.each(this.product.types, function(type) {
      type.selected = false;
    });
  }

  setColor(color) {
    this.cleanColorSelected();
    color.selected = true;
  }

  cleanColorSelected() {
    _.each(this.product.colors, function(color) {
      color.selected = false;
    });
  }

  setValueRadio(value, values) {
    this.cleanValueRadio(values);
    value.selected = true;
  }

  cleanValueRadio(values) {
    _.each(values, function(value) {
      value.selected = false;
    });
  }

  buildOrder() {
    var color = _.find(this.product.colors, function (color) { 
      return color.selected === true;
    });

    var type = _.find(this.product.types, function (type) { 
      return type.selected === true;
    });

    //verificar atributos del producto que se enviaran a la orden
    var productToBuy = {
      id: this.product.id,
      name: this.product.name,
      priceBase: this.product.priceBase,
      price1: this.product.price1,
      price2: this.product.price2,
      price3: this.product.price3,
      category: this.product.category,
      subCategory: this.product.subCategory,
      material: this.product.material,
      description: this.product.description,
      replacementPeriod: this.product.replacementPeriod,
      warranty: this.product.warranty,
      stock: this.product.stock,
      color: color.name,
      type,
      quantityBuy: this.quantity
    }
    return productToBuy;
  }

  
  buyNow() {
    this.order = this.buildOrder();
    console.log(this.order);
  }

}
