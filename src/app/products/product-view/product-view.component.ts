import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products: Array<any> = new Array;
  product: any;
  id: number;
  parameters: any;
  quantity = 1;
  order: any;
  productsSelected: Array<any> = new Array;
  currentUser: any;
  constructor(private productService:ProductService, private route: ActivatedRoute, private userStorageService: UserStorageService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
   }

  ngOnInit() {
    this.getProducts();
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
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    this.product.infoAditional = JSON.parse(this.product.infoAditional);
    //simulando click en el primer type del producto actual
    //this.parameters = this.product.types[0].parameters;
  }

  changeSelect(parameter, value) {
    parameter.selected = value;
    if (this.product.name === "Xtensa" && parameter.name === 'Cylinder (D)'){
      //this.setValuesAxesXtensa(typeEye, value);
    }
  }

  setValueEye(eye) {
    if (eye === "right") {
      this.product.eyeRight = !this.product.eyeRight;
    } else {
      this.product.eyeLeft = !this.product.eyeLeft;
    }
  }

  setEyeSelected(){
    this.productsSelected = [];

    if (this.product.eyeRight) {
      this.productsSelected.push({eye: 'Right'});
    }
    if (this.product.eyeLeft) {
      this.productsSelected.push({eye: 'Left'});
    }
  }

  

  buildOrder() {

    this.setEyeSelected();
    let product = this.product;
    let client = this.currentUser;

    _.each(this.productsSelected, function(productSelected, index) {

      product.typeName = product.types[0].name;
      productSelected.codClient = client; //TODO cambiar por el campo del COD
      productSelected.code = product.code;
      productSelected.pacient = product.pacient;

      if (productSelected.eye === "Right") {
        productSelected.parameters = product.parametersRight;
      }
      if (productSelected.eye === "Left") {
        productSelected.parameters = product.parametersLeft;
      }
      /*_.each(type.parameters, function(parameter, index) {
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

        if (parameter.eye === "right") {
          var paramsEyes:any = _.filter(type.parameters, { 'name': parameter.name});
          parameter.selectedLeft = paramsEyes[1].selectedLeft;
        }
        type.parameters[index] = _.omit(parameter, ['type', 'values']);
      });

      _.remove(type.parameters, function (parameter:any) {
        return parameter.eye === 'left';
      })

      _.each(type.parameters, function(parameter, index) {
        type.parameters[index] = _.omit(parameter, ['eye']);
      });*/
    });

    debugger

    //verificar atributos del producto que se enviaran a la orden
    /*var productToBuy = {
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
      type: types.length === 1 ? types[0] : null,
      typeRight: types.length > 1 ? types[0] : null,
      typeLeft: types.length > 1 ? types[1] : null,
      quantityBuy: this.quantity
    }
    return productToBuy;*/
  }


  buyNow() {
    this.order = this.buildOrder();
    this.getProducts();
    /*alert('In construction.');
    this.router.navigate(['/order-list-client']);*/
    console.log(JSON.stringify(this.order));
  }

}
