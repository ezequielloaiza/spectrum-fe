import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';
import { SupplieruserService } from '../../shared/services/supplieruser/supplieruser.service';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {

  products: Array<any> = new Array;
  productsAux: Array<any> = new Array;
  listSupplier: Array<any> = new Array;
  listSupplierAux: Array<any> = new Array;
  currentUser: any;
  user: any;

  constructor(private productService: ProductService,
              private userStorageService: UserStorageService,
              private supplierUserService: SupplieruserService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        if (this.user.role.idRole === 3) {
          this.productsAux = res.data;
          this.products = res.data;
          this.associatedSuppliers();
          debugger

        } else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
          this.products = res.data;
        }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  associatedSuppliers() {
    this.supplierUserService.findIdUser$(this.currentUser.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
         this.listSupplierAux = res.data;
         console.log('lista proveedores' ,this.listSupplierAux);
         const userConc = this.currentUser;
         this.listSupplier = _.filter(this.listSupplierAux, function(u) {
           const idSupp = u.supplier.idSupplier;
           switch (idSupp) {
              case 1: // Markennoy
                return !(userConc.cardCode === null);
              case 2: // Europa
               return u;
              case 3: // Lenticon
               return u;
              case 4: // Euclid
               return u;
              case 5: // Magic Look
               return u;
              case 6: // Blue Light
               return u;
            }
        });
        this.productAvailable();
        console.log('lista provee' ,this.listSupplier);
      }
      });
  }

  productAvailable() {
    const lista = this.listSupplier;
    this.products =  _.filter(this.products, function (product) {
   // console.log('lista', lista.length);
      const valido = _.includes(lista, function (item) {
          return product.supplier.idSupplier === 2; // === item.supplier.idSupplier;
      });
      if (valido) {
        return product;
      }
      // return false;
    });
    console.log('list prod' , this.products);
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

}
