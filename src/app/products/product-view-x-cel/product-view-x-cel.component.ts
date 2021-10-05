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
    idSupplier: any;

    parameters = {
      types: null,
      parametersRight: [],
      parametersLeft: []
    };
    product = {
      eyeRight: null
    };

    constructor(private route: ActivatedRoute,
                private productService: ProductService) {}

    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.idSupplier = +this.route.snapshot.paramMap.get('idSupplier');
      this.getProduct();
    }

    getProduct() {
      this.productService.findById$(this.id).subscribe(res => {
        this.parameters = res.data[0];
        this.parameters.parametersRight = JSON.parse(this.parameters.types)[0].parameters;
        // _.reverse(this.product.parametersRight[4].values);
        this.parameters.parametersLeft = JSON.parse(this.parameters.types)[0].parameters;
        // _.reverse(this.product.parametersLeft[4].values);
      });
    }
  }
