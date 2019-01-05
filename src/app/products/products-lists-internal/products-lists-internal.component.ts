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
import { EditProductEuropaComponent } from '../modals/edit-product/edit-product-europa/edit-product-europa.component';
import { EditProductSpectrumSalineComponent } from '../modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component';

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
  productsMarkennovy: Array<any> = new Array();
  productsAuxMarkennovy: Array<any> = new Array();
  showFathersMarkennovy: any;
  currentFather: any;
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
    this.currentFather = '';
  }

  userIsAdmin() {
    return this.user.role.idRole === 1;
  }

  setProductsFatherMarkennovy() {
    var productsSaphirRx = [];
    var productsGentle80 = [];
    var productsGentle59 = [];
    var productsBluGen = [];
    var productsBluKidz = [];
    var productsXtensa = [];
    var productsSaphir = [];
    var productsQuattroX3 = [];
    var productsQuattroX1 = [];
    var userIsAdmin = this.userIsAdmin();
    _.each(this.products, function(product) {
      if (userIsAdmin || product.status) {
        switch (product.father) {
          case 'Saphir Rx':
            productsSaphirRx.push(product);
            break;
          case 'Gentle 80':
            productsGentle80.push(product);
            break;
          case 'Gentle 59':
            productsGentle59.push(product);
            break;
          case 'Blu:gen':
            productsBluGen.push(product);
            break;
          case 'Blu:kidz':
            productsBluKidz.push(product);
            break;
          case 'Xtensa':
            productsXtensa.push(product);
            break;
          case 'Saphir':
            productsSaphir.push(product);
            break;
          case 'Quattro 3-Monthly':
            productsQuattroX3.push(product);
            break;
          case 'Quattro Conventional':
            productsQuattroX1.push(product);
            break;
        }
      }
    });

    if (productsSaphirRx.length) {
      this.productsMarkennovy.push({name:"Saphir Rx",
                                    mainImg:"assets/images/products/markennovy/saphirRx.png",
                                    replacementPeriod:"Monthly",
                                    father: "Saphir Rx"});
    }
    if (productsGentle80.length) {
      this.productsMarkennovy.push({name:"Gentle 80",
                                    mainImg:"assets/images/products/markennovy/Mark’ennovy-Gentle-80.png",
                                    replacementPeriod:"Monthly",
                                    father: "Gentle 80"});
    }
    if (productsGentle59.length) {
      this.productsMarkennovy.push({name:"Gentle 59",
                                    mainImg:"assets/images/products/markennovy/gentle_59_hi_ret_2.png",
                                    replacementPeriod:"Monthly",
                                    father: "Gentle 59"});
    }
    if (productsBluGen.length) {
      this.productsMarkennovy.push({name:"Blu:gen",
                                    mainImg:"assets/images/products/markennovy/blu-gen.ppg",
                                    replacementPeriod:"Monthly",
                                    father: "Blu:gen"});
    }
    if (productsBluKidz.length) {
      this.productsMarkennovy.push({name:"Blu:kidz",
                                    mainImg:"assets/images/products/markennovy/Blukidz summer season.jpg",
                                    replacementPeriod:"Monthly",
                                    father: "Blu:kidz"});
    }
    if (productsXtensa.length) {
      this.productsMarkennovy.push({name:"Xtensa",
                                    mainImg:"assets/images/products/markennovy/xtensa.png",
                                    replacementPeriod:"Monthly",
                                    father: "Xtensa"});
    }
    if (productsSaphir.length) {
      this.productsMarkennovy.push({name:"Saphir",
                                    mainImg:"assets/images/products/markennovy/saphir.png",
                                    replacementPeriod:"3-Monthly",
                                    father: "Saphir"});
    }
    if (productsQuattroX3.length) {
      this.productsMarkennovy.push({name:"Quattro 3-Monthly",
                                    mainImg:"assets/images/products/markennovy/quattro.png",
                                    replacementPeriod:"3-Monthly",
                                    father: "Quattro 3-Monthly"});
    }
    if (productsQuattroX1.length) {
      this.productsMarkennovy.push({name:"Quattro x1Conv",
                                    mainImg:"assets/images/products/markennovy/quattro-conventional.png",
                                    replacementPeriod:"Conventional",
                                    father: "Quattro Conventional"});
    }

    this.productsAuxMarkennovy = this.productsMarkennovy;
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplier$(this.idSupplier).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.setPrice();

        if (this.idSupplier === 1) { //Markennovy
          this.setProductsFatherMarkennovy();
          this.showFathersMarkennovy = true;
        }

        this.nameSupplier = this.products[0] ? this.products[0].supplier.companyName : '';
        if (this.idSupplier === 7 && this.user.role.idRole === 3) {
           this.excludeProduct();
        } else {
           this.productsAux = this.products;
        }
        this.products = _.orderBy( this.products, ['idProduct'], ['asc']);
        this.spinner.hide();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    },
    error => {
      console.log('error', error);
    });
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
      case 1: // markennovy
        this.router.navigate(['/products/' + product.idProduct + '/product-view']);
        break;
      case 2: // europa
        this.router.navigate(['/products/' + product.idProduct + '/product-view-europa']);
        break;
      case 3: // Lenticon
        this.router.navigate(['/products/' + product.idProduct + '/product-view-lenticon']);
        break;
      case 4:  // euclid
        this.router.navigate(['/products/' + product.idProduct + '/product-view-euclid']);
        break;
      case 5: // magic look
        this.router.navigate(['/products/' + product.idProduct + '/product-view-magic']);
        break;
      case 6:  // magic blue
        this.router.navigate(['/products/' + product.idProduct + '/product-view-blue']);
        break;
      case 7:  // fluo strips y spectrum saline
        if (product.father === 'Fluo Strips') {
          this.router.navigate(['/products/' + product.idProduct + '/product-view-fluo-strips']);
        }
        if (product.father === 'Spectrum Saline') {
          this.router.navigate(['/products/' + product.idProduct + '/product-view-spectrum-saline']);
        }
        break;
    }
  }

  open(product, action) {
    const  idSupplier = product.supplier.idSupplier;
    switch (idSupplier) {
      case 1: // Markennovy
      case 3: // Lenticon
      case 6: // Blue Light
            const modalRefGeneral = this.modalService.open(EditProductComponent, {
              size: 'lg',
              windowClass: 'modal-content-border'
            });
            modalRefGeneral.componentInstance.product = product;
            modalRefGeneral.componentInstance.action = action;
            modalRefGeneral.result.then(
              (result) => {
                this.getProducts();
              },
              (reason) => {}
            );
            break;
      case 2: // Europa
            const modalRefEuropa = this.modalService.open(EditProductEuropaComponent, {
              size: 'lg',
              windowClass: 'modal-content-border'
            });
            modalRefEuropa.componentInstance.product = product;
            modalRefEuropa.componentInstance.action = action;
            modalRefEuropa.result.then(
              (result) => {
                this.getProducts();
              },
              (reason) => {}
            );
            break;
      case 4: // Euclid
            const modalRefEuclid = this.modalService.open(EditProductEuclidComponent, {
              size: 'lg',
              windowClass: 'modal-content-border'
            });
            modalRefEuclid.componentInstance.product = product;
            modalRefEuclid.componentInstance.action = action;
            modalRefEuclid.result.then(
              (result) => {
                this.getProducts();
              },
              (reason) => {}
            );
            break;
      case 5: // Magic Look
            const modalRefMagic = this.modalService.open(EditProductMagicLookComponent, {
              size: 'lg',
              windowClass: 'modal-content-border'
            });
            modalRefMagic.componentInstance.product = product;
            modalRefMagic.componentInstance.action = action;
            modalRefMagic.result.then(
              (result) => {
                this.getProducts();
              },
              (reason) => {}
            );
            break;
      case 7: // Fluo Strips
            if (product.father === 'Fluo Strips') {
              const modalRefGeneralFluo = this.modalService.open(EditProductComponent, {
                size: 'lg',
                windowClass: 'modal-content-border'
              });
              modalRefGeneralFluo.componentInstance.product = product;
              modalRefGeneralFluo.componentInstance.action = action;
              modalRefGeneralFluo.result.then(
                (result) => {
                  this.getProducts();
                },
                (reason) => {}
              );
            } else { // spectrum saline
              const modalRefSpectrum = this.modalService.open(EditProductSpectrumSalineComponent, {
                size: 'lg',
                windowClass: 'modal-content-border'
              });
              modalRefSpectrum.componentInstance.product = product;
              modalRefSpectrum.componentInstance.action = action;
              modalRefSpectrum.result.then(
                (result) => {
                  this.getProducts();
                },
                (reason) => {}
              );
            }
            break;
    }
  }

  getItems() {
    const val = this.filterName;

    if (val && val.trim() !== '') {
      this.productsMarkennovy = this.productsMarkennovy.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  filter(type) {
    this.products = this.productsAux;
    const val = this.filterName;

    if (val && val.trim() !== '') {
      this.products = this.products.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  filterByFather(type) {
    var products = [];
    const val = this.filterName;

    if (this.showFathersMarkennovy) {
      products = this.productsAuxMarkennovy;
    } else {
      products = this.productsAux;
    }

    if (type !== 'byName') {
      this.filterMarkennovy = type;
    }

    if (this.filterMarkennovy === 'All') {
      if (val && val.trim() !== '') {
        products = products.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
      }
      if (this.showFathersMarkennovy) {
        this.productsMarkennovy = products;
      } else {
        this.products = products;
      }
      return;
    }

    products = products.filter((item) => {
      return item.replacementPeriod === this.filterMarkennovy;
    });

    if (val && val.trim() !== '') {
      products = products.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }

    if (this.showFathersMarkennovy) {
      this.productsMarkennovy = products;
    } else {
      this.products = products;
    }
  }

  redirectFather(product) {
    this.products = this.productsAux;

    this.products = this.products.filter((item) => {
      return item.father === product.father;
    });
    this.currentFather = product.father;
    this.showFathersMarkennovy = false;
  }

  backToFathersHeader() {
    if (this.idSupplier === 1) {
      if (!this.showFathersMarkennovy) {
        this.showFathersMarkennovy = true;
        this.currentFather = '';
      }
    }
  }

  backToFathers() {
    this.currentFather = '';
    this.showFathersMarkennovy = true;
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  excludeProduct() {  // Exclusion de Spectrum Saline para clientes con membresia Oro
    let productsAux = [];
    const membership = this.currentUser.membership.idMembership;
    if (membership === 1) { // Gold
      productsAux = _.filter(this.products, function(o) {
        return o.father !== 'Spectrum Saline';
      });
      this.products = productsAux;
    }
  }
}
