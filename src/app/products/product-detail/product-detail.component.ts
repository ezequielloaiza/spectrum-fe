import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: Array<any> = new Array;
  product: any;
  parameters: any;
  valueCurrent: any;
  constructor(private productComponent:ProductsComponent) { }

  ngOnInit() {
    this.products = this.productComponent.products

    //simulando click en el primer producto
    this.product = this.products[0];

    //simulando click en el primer type del producto actual
    this.parameters = this.product.types[0].parameters;

    //DESCOMENTAR Y SIMULAR LO SIGUIENTE COMENTANDO LINEAS 21 y 24 y OBSERVAR PARAMETRO SPHERE EN LA VISTA DE PRODUCT/DETAILS
    //SI LO MIRAMOS BIEN EL COMPORTAMIENTO DE LOS STEPS ES PARA UN RANGO ESPECIFICO, INVESTIGAR SI ESO SE PUEDE HACER EN UN INPUT
    //SINO TOCA TRAMPEARLO CON HIDDEN INPUT Y COSAS ASI DEPENDIENDO DEL VALOR QUE TENGA EL INPUT EN UN MOMENTO DETERMINADO
    /*this.product = this.products[1];
    this.parameters = this.product.types[1].parameters;*/
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

  setValue(value, values) {
    this.cleanValueSelected(values);
    value.selected = true;
  }

  cleanValueSelected(values) {
    _.each(values, function(value) {
      value.selected = false;
    });
  }

  
  buyNow() {
    console.log(this.product);
	}

}
