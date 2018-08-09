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

      productSelected.productId = product.id;
      productSelected.codClient = client; //TODO cambiar por el campo del COD
      productSelected.pacient = product.pacient;
      productSelected.price = product.price; //TODO colocar precio por membresia del usuario logueado

      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.parameters = product.parametersRight;
      }
      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.parameters = product.parametersLeft;
      }
    });

    debugger
  }


  buyNow() {
    this.order = this.buildOrder();
    this.getProducts();
    /*alert('In construction.');
    this.router.navigate(['/order-list-client']);*/
    console.log(JSON.stringify(this.order));
  }

}
