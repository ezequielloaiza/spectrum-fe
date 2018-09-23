import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';
import { SupplieruserService } from '../../shared/services/supplieruser/supplieruser.service';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from '../modals/edit-product/edit-product.component';
import { Router } from '@angular/router';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { CategoryService } from '../../shared/services/category/category.service';


@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {
  products: Array<any> = new Array();
  productsAux: Array<any> = new Array();
  listSupplier: Array<any> = new Array();
  listSupplierAux: Array<any> = new Array();
  listSupplierFilter: Array<any> = new Array();
  listSupplierFilterAux: Array<any> = new Array();
  auxCategories: Array<any> = new Array;
  currentUser: any;
  user: any;
  visible: boolean;

  constructor(private productService: ProductService,
              private userStorageService: UserStorageService,
              private modalService: NgbModal,
              private supplierUserService: SupplieruserService,
              public router: Router,
              private supplierService: SupplierService,
              private categoryService: CategoryService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.getProducts();
    this.visible = false;
  }

  getProducts() {
    this.productService.findAll$().subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          if (this.user.role.idRole === 3) {
            this.productsAux = res.data;
            this.products = res.data;
            this.associatedSuppliers();
          } else if (
            this.user.role.idRole === 1 ||
            this.user.role.idRole === 2
          ) {
            this.products = res.data;
            this.productsAux = res.data;
            this.getSuppliers();
          }
        } else {
          console.log(res.errors[0].detail);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  associatedSuppliers() {
    this.supplierUserService
      .findIdUser$(this.currentUser.idUser)
      .subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listSupplierAux = res.data;
          const userConc = this.currentUser;
          this.listSupplier = _.filter(this.listSupplierAux, function(u) {
            const idSupp = u.supplier.idSupplier;
            switch (idSupp) {
              case 1: // Markennoy
                return !(userConc.cardCode === null || userConc.cardCode === '');
              case 2: // Europa
                return u;
              case 3: // Lenticon
                return u;
              case 4: // Euclid
               return !(userConc.certificationCode === null || userConc.certificationCode === '');
              case 5: // Magic Look
                return u;
              case 6: // Blue Light
                return u;
            }
          });
          this.productAvailable();
          this.getSuppliers();
        }
      });
  }

  productAvailable() {
    const lista = this.listSupplier;
    const productsFiltered = [];
    _.each(this.products, function(product) {
      _.each(lista, function(item) {
        if (product.supplier.idSupplier === item.supplier.idSupplier) {
          productsFiltered.push(product);
        }
      });
    });
    this.products = productsFiltered;
    this.productsAux = productsFiltered;
    this.setPrice();
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

  getSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
          this.listSupplierFilterAux = res.data;
          this.listSupplierFilter = this.listSupplierFilterAux;
          if (this.user.role.idRole === 3) {
            const lista = this.listSupplier; // los asociado a los clientes
            const supplierFiltered = [];
            _.each(this.listSupplierFilter, function(supplier) {
              _.each(lista, function(item) {
                if (supplier.idSupplier === item.supplier.idSupplier) {
                  supplierFiltered.push(supplier);
                }
              });
            });
            this.listSupplier = supplierFiltered;
            this.listSupplierFilter = supplierFiltered;
            this.orderList();
          } else {
            this.listSupplier = this.listSupplierFilter;
            this.orderList();
          }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getCategories() {
    this.categoryService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.auxCategories = res.data;
        this.visible = true;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  onSelectionSupplier(idSupplier) {
   const productsFiltered = [];
   _.each(this.productsAux, function(product) {
        if (product.supplier.idSupplier === idSupplier) {
          productsFiltered.push(product);
        }
    });
    this.products = productsFiltered;
    switch (idSupplier) {
      case 1:
       this.getCategories();
       break;
      case 1000:
        this.all();
        break;
    }
    if (idSupplier > 1 ) {
      this.visible = false;
    }
  }

  onSelectionCategory(idCategory) {
    const productsFiltered = [];
    _.each(this.productsAux, function(product) {
        if (product.supplier.idSupplier === 1 && product.category.idCategory === idCategory) {
          productsFiltered.push(product);
        }
    });
    this.products = productsFiltered;
  }

  all() {
    this.products = this.productsAux;
    this.visible = false;
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
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

  orderList(){
    let array = [{idSupplier: 1000, companyName: 'All'}];
    this.listSupplierFilter = _.concat(this.listSupplierFilter, array);
    this.listSupplierFilterAux = _.orderBy(this.listSupplierFilter, ['idSupplier'], ['desc']);
    this.listSupplierFilter = this.listSupplierFilterAux;
  }
}
