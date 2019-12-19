import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../shared/enum/code-http.enum';

@Component({
  selector: 'app-product-view-synergeyes',
  templateUrl: './product-view-synergeyes.component.html',
  styleUrls: ['./product-view-synergeyes.component.scss']
})
export class ProductViewSynergeyesComponent implements OnInit {
  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  product: any;
  productCode: any;
  productCopy: any;
  id: any;
  parameters: any;
  quantity = 1;
  order: any;
  
  constructor(private productService: ProductService,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplierInView$(9 , true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        console.log(this.products);
        this.productService.findBySupplierAndInViewAndCategory$(3, false, 10).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.productsCode = res1.data;
            //this.setCodeProduct();
          } else {
            console.log(res1.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
          this.spinner.hide();
        });
        //this.getProductView();
        this.spinner.hide();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

}
