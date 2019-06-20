import { Component, OnInit, HostListener } from '@angular/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';
import { SupplieruserService } from '../../shared/services/supplieruser/supplieruser.service';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from '../modals/edit-product/edit-product.component';
import { Router } from '@angular/router';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../../shared/services/products/product.service';

const SHOWSUPPLIERS = 'showSuppliers';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {
  listSupplier: Array<any> = new Array();
  listSupplierAux: Array<any> = new Array();
  listSupplierFilter: Array<any> = new Array();
  auxCategories: Array<any> = new Array;
  currentUser: any;
  user: any;
  products: Array<any> = new Array;
  constructor(private userStorageService: UserStorageService,
              private modalService: NgbModal,
              private supplierUserService: SupplieruserService,
              public router: Router,
              private supplierService: SupplierService,
              private categoryService: CategoryService,
              private spinner: NgxSpinnerService,
              private productService: ProductService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    if (this.user.role.idRole === 3) {
      this.associatedSuppliers();
    } else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.getSuppliers();
    }
  }

  associatedSuppliers() {
    this.spinner.show();
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
              case 7: // Fluo Strips y Spectrum Saline
                return u;
            }
          });
          this.getSuppliers();
          this.spinner.hide();
        }
      });
  }

  getSuppliers() {
    this.spinner.show();
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
          this.listSupplierFilter = res.data;
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
            this.listSupplierFilter = supplierFiltered;
            this.orderList();
            this.listSupplier = this.listSupplierFilter;
            this.spinner.hide();
          } else {
            this.orderList();
            this.listSupplier = this.listSupplierFilter;
            this.spinner.hide();
          }
          this.setImageSupplier();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  setImageSupplier() {
    _.each(this.listSupplier, function(supplier){
      switch (supplier.idSupplier) {
        case 1: // Markennoy
          supplier.image = 'assets/images/suppliers/markennovy.png';
          break
        case 2: // Europa
          supplier.image = 'assets/images/suppliers/europa.png';
          break
        case 3: // Lenticon
          supplier.image = 'assets/images/suppliers/elipsys.png';
          break
        case 4: // Euclid
          supplier.image = 'assets/images/suppliers/euclid.png';
          break
        case 5: // Magic Look
          supplier.image = 'assets/images/suppliers/magiclook.png';
          break
        case 6: // Blue Light
          supplier.image = 'assets/images/suppliers/bluelight.png';
          break
        case 7: // Fluo Strips y spectrum saline
          supplier.image = 'assets/images/suppliers/spectrum_products.jpg';
          break
      }
    });
  }

  getCategories() {
    this.categoryService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.auxCategories = res.data;
        //this.visible = true;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  onSelectionSupplier(idSupplier) {
    if (this.user.role.idRole === 1) {
      this.router.navigate(['/products/' + idSupplier + '/internal']);
    } else {
      switch (idSupplier) {
        case 1: //markennovy
        case 2: //europa
        case 3: //Lenticon
        case 4:  //euclid
        case 7:  //fluo strips y saline spectrum
          this.router.navigate(['/products/' + idSupplier + '/internal']);
          break;
        case 5: //magic look
            this.productService.findBySupplierInView$(idSupplier).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.products = res.data;
                this.router.navigate(['/products/' + this.products[0].idProduct + '/product-view-magic']);
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
              this.spinner.hide();
            });
          break;
        case 6:  // Blue Light
            this.productService.findBySupplierInView$(idSupplier).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.products = res.data;
                this.router.navigate(['/products/' + this.products[0].idProduct + '/product-view-blue']);
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
              this.spinner.hide();
            });
        }
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  orderList(){
   this.listSupplierFilter = _.orderBy(this.listSupplierFilter, ['idSupplier'], ['asc']);
  }
}
