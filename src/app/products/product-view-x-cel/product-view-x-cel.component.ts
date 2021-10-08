import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';

@Component({
    selector: 'app-product-view-x-cel',
    templateUrl: './product-view-x-cel.component.html',
    styleUrls: ['./product-view-x-cel.component.scss']
  })
  export class ProductViewXCelComponent implements OnInit {
    id: any;
    product: any;

    constructor(private route: ActivatedRoute,
                private productService: ProductService) {}

    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.getProduct();
    }

    getProduct() {
      this.productService.findById$(this.id).subscribe(res => {
        this.product = res.data[0];
        this.product.typeOrder = 'new'

        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
      });
    }

    validation() {
      if (this.product) {
        console.log(this.product.typeOrder);
      }
      return true;
    }
  }
