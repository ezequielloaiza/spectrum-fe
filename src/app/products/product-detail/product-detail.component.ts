import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
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

  //configuration XTENSA product
  axesXtensa     : Array<any> = new Array;
  spheresXtensa  : Array<any> = new Array;
  cylindersXtensa: Array<any> = new Array;

  constructor(private productService:ProductService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.setEyes();
    this.getProducts();

    /* var product xtensa */
    this.setAxesXtensa();
    this.setSpheresXtensa();
    this.setCylindersXtensa();
  }

  setEyes() {
    this.eyes = [ { type: 'right', name: 'Eye Right' }, { type: 'left', name: 'Eye Left' } ];
  }

  setAxesXtensa(){
    this.axesXtensa = [ { "values": ["5º","10º","15º","20º","25º","30º","35º","40º","45º","50º","55º","60º","65º","70º","75º","80º","85º","90º","95º","100º","105º","110º","115º","120º","125º","130º","135º","140º","145º","150º","155º","160º","165º","170º","175º","180º"] },
                        { "values": ["10º", "20º","30º","40º","50º","60º","70º","80º","90º","100º","110º","120º","130º","140º","150º","160º","170º","180º"] }];
  }

  setSpheresXtensa(){
    this.spheresXtensa = [ { "values": [ "-8.00","-7.50","-7.00","-6.50","-6.00","-5.75","-5.50","-5.25","-5.00","-4.75","-4.50","-4.25","-4.00","-3.75","-3.50","-3.25","-3.00","-2.75","-2.50","-2.25","-2.00","-1.75","-1.50","-1.25","-1.00","-0.75","-0.50","-0.25","0.00","0.25","0.50","0.75","1.00","1.25","1.50","1.75","2.00","2.25","2.50","2.75","3.00","3.25","3.50","3.75","4.00","4.50","5.00","5.50","6.00"] },
                           { "values": [ "-10.00","-9.50","-8.00","-8.50","-8.00","-7.50","-7.00","-6.50","-6.00","-5.75","-5.50","-5.25","-5.00","-4.75","-4.50","-4.25","-4.00","-3.75","-3.50","-3.25","-3.00","-2.75","-2.50","-2.25","-2.00","-1.75","-1.50","-1.25","-1.00","-0.75","-0.50","-0.25","0.00","0.25","0.50","0.75","1.00","1.25","1.50","1.75","2.00","2.25","2.50","2.75","3.00","3.25","3.50","3.75","4.00","4.50","5.00","5.50","6.00","6.50","7.00","7.50","8.00"] }];
  }

  setCylindersXtensa(){
    this.cylindersXtensa = [ { "values": ["-2.75","-2.25","-1.75","-1.25","-0.75"] },
                        { "values": ["-5.75","-5.25","-4.75","-4.25","-3.75","-3.25","-2.75","-2.25","-1.75","-1.25","-0.75"] }];
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
    console.log(JSON.stringify(_.range(-8, -0.75, 0.25)));
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
      if (this.product.name === "Xtensa" && parameter.name === 'Cylinder (D)'){
        this.setValuesAxesXtensa(value);
      }
    } else {
      parameter.selectedRight = value;
      if (this.product.name === "Xtensa" && parameter.name === 'Cylinder (D)'){
        this.setValuesAxesXtensa(value);
      }
    }
  }

  setValuesSpheresXtensa(value) {
    var paramSpheres = _.find(this.parameters, ['name', 'Sphere (D)']);
    if (!value) { //Xtensa without RXDesign
      paramSpheres.values = this.spheresXtensa[0].values;
    } else {
      paramSpheres.values = this.spheresXtensa[1].values;
    }
  }

  setValuesCylindersXtensa(value) {
    var paramCylinders = _.find(this.parameters, ['name', 'Cylinder (D)']);
    if (!value) { //Xtensa without RXDesign
      paramCylinders.values = this.cylindersXtensa[0].values;
    } else {
      paramCylinders.values = this.cylindersXtensa[1].values;
    }
  }


  setValuesAxesXtensa(value) {
    var paramAxes = _.find(this.parameters, ['name', 'Axes (º)']);
    if (parseFloat(value) <= -3.25) {
      paramAxes.values = this.axesXtensa[0].values;
    } else {
      paramAxes.values = this.axesXtensa[1].values;
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

  setValueRadio(typeEye, value, parameter) {
    if (parameter.name === "Rx Design" && value.name === 'Yes') {
      this.setValuesSpheresXtensa(true);
      this.setValuesCylindersXtensa(true);
      this.setValuesAxesXtensa("-5.75");
    } else {
      this.setValuesSpheresXtensa(false);
      this.setValuesCylindersXtensa(false);
      this.setValuesAxesXtensa("-2.75");
    }

    this.cleanValueRadio(typeEye, parameter.values);
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
    this.getProducts();
    alert('In construction.');
    this.router.navigate(['/order-list-client']);
    console.log(JSON.stringify(this.order));
  }

}
