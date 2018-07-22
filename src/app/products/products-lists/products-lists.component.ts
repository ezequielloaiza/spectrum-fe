import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../shared/services';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {

  products: Array<any> = new Array;
  constructor(private productService:ProductService,
              private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    if(!this.authorizationService.hasPermission('Products')){
			this.router.navigate(['/dashboard']);
		}
    this.getProducts();
  }

  getProducts() {
    this.productService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

}
