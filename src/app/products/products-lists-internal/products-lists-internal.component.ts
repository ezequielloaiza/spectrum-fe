import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from '../modals/edit-product/edit-product.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EditProductMagicLookComponent } from '../modals/edit-product/edit-product-magic-look/edit-product-magic-look.component';
import { EditProductEuclidComponent } from '../modals/edit-product/edit-product-euclid/edit-product-euclid.component';

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
  filterName: any;
  filterMarkennovy: any;
  priceFrom: any;
  priceUp: any;
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
    this.filterMarkennovy = 'All';
    this.filterName = '';
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
      let priceFrom;
      let priceUp;
      _.each(this.products, function (product) {
        if (product.supplier.idSupplier !== 5) {
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
        } else {
          let info = JSON.parse(product.infoAditional);
          switch (membership) {
            case 1: // Gold
                priceFrom = parseFloat(info[1].values[2].price);
                priceUp = parseFloat(info[1].values[0].price);
              break;
            case 2: // Diamond
                priceFrom = parseFloat(info[2].values[2].price);
                priceUp = parseFloat(info[2].values[0].price);
              break;
            case 3: // Preferred
              priceFrom = parseFloat(info[3].values[2].price);
              priceUp = parseFloat(info[3].values[0].price);
              break;
          }
        }
      });
      this.priceFrom = priceFrom;
      this.priceUp = priceUp;
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
    if (product.supplier.idSupplier !== 5 && product.supplier.idSupplier !== 4) {
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
    } else if (product.supplier.idSupplier === 4) {
      const modalRef = this.modalService.open(EditProductEuclidComponent, {
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
    } else if (product.supplier.idSupplier === 5) {
      const modalRef = this.modalService.open(EditProductMagicLookComponent, {
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
  }

  getItems() {
    const val = this.filterName;

    if (val && val.trim() !== '') {
      this.products = this.products.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  filter(type) {
    this.products = this.productsAux;

    if (type !== 'byName') {
      this.filterMarkennovy = type;
    }

    if (this.filterMarkennovy === 'All') {
      this.getItems();
      return;
    }

    const val = this.filterName;

    this.products = this.products.filter((item) => {
      return item.replacementPeriod === this.filterMarkennovy;
    });

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
