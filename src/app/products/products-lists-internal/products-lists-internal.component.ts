import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from '../modals/edit-product/edit-product.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products-lists-internal',
  templateUrl: './products-lists-internal.component.html',
  styleUrls: ['./products-lists-internal.component.scss']
})
export class ProductsListInternalComponent implements OnInit {
  products: Array<any> = new Array();
  productsAux: Array<any> = new Array();
  currentUser: any;
  user: any;
  idSupplier: any;
  nameSupplier: String;

  constructor(private productService: ProductService,
              private userStorageService: UserStorageService,
              private modalService: NgbModal,
              public router: Router,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute,) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.idSupplier = +this.route.snapshot.paramMap.get('idSupplier');
    this.getProducts();
  }

  getProducts() {
    let idSupplier = this.idSupplier;
    this.spinner.show();
    this.productService.findAll$().subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.products = res.data;
          this.products = _.filter(this.products, function(product){
            return product.supplier.idSupplier === idSupplier;
          });
          this.setPrice();
          this.nameSupplier = this.products[0] ? this.products[0].supplier.companyName : '';
          this.productsAux = this.products;
          this.spinner.hide();
        } else {
          console.log(res.errors[0].detail);
          this.spinner.hide();
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  setPrice() {
    if (this.user.role.idRole === 3) {
      let membership = this.currentUser.membership.idMembership;
      _.each(this.products, function (product) {
        switch (membership) {
          case 1:
            product.priceSale = product.price1;
            break;
          case 2:
            product.priceSale = product.price2;
            break;
          case 3:
            product.priceSale = product.price3;
            break;
        }
      });
    }
  }

  redirectView(product) {
    switch (product.supplier.idSupplier) {
      case 1: //markennovy
        this.router.navigate(['/products/' + product.idProduct + '/product-view']);
        break;
      case 2: //europa
        this.router.navigate(['/products/' + product.idProduct + '/product-view-europa']);
        break;
      case 4:  //euclid
        this.router.navigate(['/products/' + product.idProduct + '/product-view-euclid']);
        break;
      case 5: //magic look
        this.router.navigate(['/products/' + product.idProduct + '/product-view-magic']);
        break;
      case 6:  //magic blue
        this.router.navigate(['/products/' + product.idProduct + '/product-view-blue']);
        break;
    }
  }

  open(product, action) {
    const modalRef = this.modalService.open(EditProductComponent, {
      size: 'lg',
      windowClass: 'modal-content-border'
    });
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.action = action;
    modalRef.result.then(
      (result) => {
        this.getProducts();
      },
      (reason) => {}
    );
  }

  getItems(ev: any) {
    this.products = this.productsAux;
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.products = this.products.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
}
