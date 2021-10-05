import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/products/product.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit {

  @Input()
  id: any;

  /*parameters = {
    types: null,
    parametersRight: [],
    parametersLeft: []
  };*/
  product = {
    eyeRight: null
  };

  @Input()
  parameters: Array<any>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.getProduct();
  }
  /*getProduct() {
    this.productService.findById$(this.id).subscribe(res => {
      debugger
      this.parameters = res.data[0];
      this.parameters.parametersRight = JSON.parse(this.parameters.types)[0].parameters;
      debugger
      // _.reverse(this.product.parametersRight[4].values);
      this.parameters.parametersLeft = JSON.parse(this.parameters.types)[0].parameters;
      // _.reverse(this.product.parametersLeft[4].values);
    });
  }*/
}
