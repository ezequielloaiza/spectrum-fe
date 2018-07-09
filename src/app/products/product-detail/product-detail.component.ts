import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: Array<any> = new Array;
  eyes: Array<any> = new Array;
  product: any;
  id: number;
  parameters: any;
  quantity = 1;
  order: any;
  constructor(private productService:ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setEyes();
    this.getProducts();
  }

  setEyes() {
    this.eyes = [ { type: 'left', name: 'Eye Left' }, { type: 'right', name: 'Eye Right' }];
  }

  getProducts() {
    this.productService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.getProductView();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getProductView() {
    console.log(JSON.stringify(_.range(4, 10, 0.5)));
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {idProduct: this.id});
    this.product.types = JSON.parse(this.product.types);
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

  changeSelect(typeEye, parameter, value) {
    if (typeEye === 'left') {
      parameter.selectedLeft = value;
    } else {
      parameter.selectedRight = value;
    }
  }

  checkedRadio(typeEye, value) {
    if (typeEye === 'left') {
      if (value.selectedLeft === true)
        return true;
    } else {
      if (value.selectedRight === true)
        return true;
    }
    return false;
  }

  setValueRadio(typeEye, value, values) {
    this.cleanValueRadio(typeEye, values);
    if (typeEye === 'left') {
      value.selectedLeft = true;
    } else {
      value.selectedRight = true;
    }
  }

  cleanValueRadio(typeEye, values) {
    _.each(values, function(value) {
      if (typeEye === 'left') {
        value.selectedLeft = false;
      } else {
        value.selectedRight = false;
      }
    });
  }

  buildOrder() {
    var color = _.find(this.product.colors, function (color) {
      return color.selected === true;
    });

    var type = _.find(this.product.types, function (type) {
      return type.selected === true;
    });

    _.each(type.parameters, function(parameter, index) {
      if (parameter.type === "radio") {
        _.each(parameter.values, function(value) {
          if (value.selectedLeft) {
            parameter.selectedLeft = value.name;
          }
          if (value.selectedRight) {
            parameter.selectedRight = value.name;
          }
        });
      }
      type.parameters[index] = _.omit(parameter, ['type', 'values']);
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
      color: 'falta traerselo',
      type,
      quantityBuy: this.quantity
    }
    return productToBuy;
  }


  buyNow() {
    this.order = this.buildOrder();
    console.log(JSON.stringify(this.order));
  }

}
