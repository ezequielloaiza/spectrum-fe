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

  //configuration XTENSA product
  paramAxesRight: any;
  paramAxesLeft: any;
  axesXtensa     : Array<any> = new Array;

  constructor(private productService:ProductService, private route: ActivatedRoute, private userStorageService: UserStorageService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
   }

  ngOnInit() {
    this.getProducts();

    /* var product xtensa */
    this.setAxesXtensa();
  }

  setAxesXtensa(){
    this.axesXtensa = [ { "values": ["5º","10º","15º","20º","25º","30º","35º","40º","45º","50º","55º","60º","65º","70º","75º","80º","85º","90º","95º","100º","105º","110º","115º","120º","125º","130º","135º","140º","145º","150º","155º","160º","165º","170º","175º","180º"] },
                        { "values": ["10º", "20º","30º","40º","50º","60º","70º","80º","90º","100º","110º","120º","130º","140º","150º","160º","170º","180º"] }];
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
    this.setPrice();
  }

  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    if (this.product.father === "Xtensa" && parameter.name === 'Cylinder (D)'){
      this.setValuesAxesXtensa(eye, value);
    }
  }

  setValuesAxesXtensa(eye, value) {
    if (eye === 'right') {
      this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
      if (parseFloat(value) <= -3.25) {
        this.paramAxesRight.values = this.axesXtensa[0].values;
      } else {
        this.paramAxesRight.values = this.axesXtensa[1].values;
      }
    } else {
      this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
      if (parseFloat(value) <= -3.25) {
        this.paramAxesLeft.values = this.axesXtensa[0].values;
      } else {
        this.paramAxesLeft.values = this.axesXtensa[1].values;
      }
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

  setPrice() {
    let membership = this.currentUser.membership.idMembership;
    switch (membership) {
      case 1:
        this.product.priceSale = this.product.price1;
        break;
      case 2:
        this.product.priceSale = this.product.price2;
        break;
      case 3:
        this.product.priceSale = this.product.price3;
        break;
    }
  }

  
  buildOrder() {

    this.setEyeSelected();
    let product = this.product;
    let client = this.currentUser;
    let productsSelected = this.productsSelected;

    _.each(productsSelected, function(productSelected, index) {

      productSelected.productId = product.idProduct;
      productSelected.pacient = product.pacient;
      productSelected.price = product.priceSale;

      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;
        _.each(product.parametersRight, function(parameter, index) {
          product.parametersRight[index] = _.omit(parameter, ['type', 'values']);
        });
        productSelected.parameters = product.parametersRight;
      }
      
      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;
        _.each(product.parametersLeft, function(parameter, index) {
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values']);
        });
        productSelected.parameters = product.parametersLeft;
      }

      productSelected.detail = { name: product.name, eye: productSelected.eye, parameters: productSelected.parameters };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye'])
    });
  }


  buyNow() {
    this.order = this.buildOrder();
    this.getProducts();
    /*alert('In construction.');
    this.router.navigate(['/order-list-client']);*/
    console.log(JSON.stringify(this.order));
  }

}
