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
import { EditProductMedmontComponent } from '../modals/edit-product/edit-product-medmont/edit-product-medmont.component';

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
  showPackingsMarkennovy: any;
  currentFather: any;
  currentPacking: any;
  packings: any;
  showFilterMarkennovy: any;
  listFilterMarkennovy = [ {replacementPeriod: 'All', mainImg: 'assets/images/suppliers/markennovy.png'},
                           {replacementPeriod: 'Monthly', mainImg: 'assets/images/suppliers/markennovy.png'},
                           {replacementPeriod: 'Monthly Disposable', mainImg: 'assets/images/suppliers/markennovy.png'},
                           {replacementPeriod: '3-Monthly', mainImg: 'assets/images/suppliers/markennovy.png'},
                           {replacementPeriod: 'Conventional', mainImg: 'assets/images/suppliers/markennovy.png'} ];

  constructor(private productService: ProductService,
              private userStorageService: UserStorageService,
              private modalService: NgbModal,
              public router: Router,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.idSupplier = +this.route.snapshot.paramMap.get('idSupplier');
    this.getProducts();
    this.filterName = '';
    this.currentFather = '';
    this.currentPacking = 'All';
    this.showFilterMarkennovy = true;
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
    var productsXtensaRx = [];
    var productsSaphir = [];
    var productsQuattroX3 = [];
    var productsQuattroX1 = [];
    var productsJade = [];
    var productsBluSsentials = [];
    var productsEquilibria = [];
    var productsMylo = [];
    var productsTechnical5T = [];
    var productsET43 = [];
    var productsTechnicalQuattro = [];
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
          case 'Xtensa Rx':
            productsXtensaRx.push(product);
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
          case 'Jade':
            productsJade.push(product);
            break;
          case 'Blu:ssentials':
            productsBluSsentials.push(product);
            break;
          case 'Equilibria':
            productsEquilibria.push(product);
            break;
          case 'Mylo':
            productsMylo.push(product);
            break;
          case 'Technical 5T':
              productsTechnical5T.push(product);
              break;
          case 'ET43':
              productsET43.push(product);
              break;
          case 'Technical Quattro':
              productsTechnicalQuattro.push(product);
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
                                    mainImg:"assets/images/products/markennovy/blu-gen.png",
                                    replacementPeriod:"Monthly",
                                    father: "Blu:gen"});
    }
    if (productsBluKidz.length) {
      this.productsMarkennovy.push({name:"Blu:kidz",
                                    mainImg:"assets/images/products/markennovy/blu-kidz.png",
                                    replacementPeriod:"Monthly",
                                    father: "Blu:kidz"});
    }
    if (productsXtensa.length) {
      this.productsMarkennovy.push({name:"Xtensa",
                                    mainImg:"assets/images/products/markennovy/xtensa.png",
                                    replacementPeriod:"Monthly Disposable",
                                    father: "Xtensa"});
    }

    if (productsXtensaRx.length) {
      this.productsMarkennovy.push({name:"Xtensa Rx",
                                    mainImg:"assets/images/products/markennovy/xtensa.png",
                                    replacementPeriod:"Monthly",
                                    father: "Xtensa Rx"});
    }
    if (productsJade.length) {
      this.productsMarkennovy.push({name:"Jade",
                                    mainImg:"assets/images/products/markennovy/jade.png",
                                    replacementPeriod:"Monthly Disposable",
                                    father: "Jade"});
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
    if (productsBluSsentials.length) {
      this.productsMarkennovy.push({name:"Blu:ssentials",
                                    mainImg:"assets/images/products/markennovy/blussentials.png",
                                    replacementPeriod:"Monthly",
                                    father: "Blu:ssentials"});
    }
    if (productsEquilibria.length) {
      this.productsMarkennovy.push({name:"Equilibria",
                                    mainImg:"assets/images/products/markennovy/equilibria.png",
                                    replacementPeriod:"3-Monthly",
                                    father: "Equilibria"});
    }
    if (productsMylo.length) {
      this.productsMarkennovy.push({name:"Mylo",
                                    mainImg:"assets/images/products/markennovy/mylo.png",
                                    replacementPeriod:"Monthly",
                                    father: "Mylo"});
    }
    if (productsTechnical5T.length) {
      this.productsMarkennovy.push({name:"Technical 5T",
                                    mainImg:"assets/images/products/markennovy/technical5t.png",
                                    replacementPeriod:"Yearly",
                                    father: "Technical 5T"});
    }
    if (productsEquilibria.length) {
      this.productsMarkennovy.push({name:"ET 43",
                                    mainImg:"assets/images/products/markennovy/et43.png",
                                    replacementPeriod:"Yearly",
                                    father: "ET 43"});
    }
    if (productsMylo.length) {
      this.productsMarkennovy.push({name:"Technical Quattro",
                                    mainImg:"assets/images/products/markennovy/technical_quattro.png",
                                    replacementPeriod:"3-Monthly",
                                    father: "Technical Quattro"});
    }



    this.productsAuxMarkennovy = this.productsMarkennovy;
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplierInView$(this.idSupplier, true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.setPrice();

        if (this.idSupplier === 1) { //Markennovy
          this.setProductsFatherMarkennovy();
          this.showFathersMarkennovy = true;
          this.showFilterMarkennovy = true;
        }

        this.nameSupplier = this.products[0] ? this.products[0].supplier.companyName : '';
        if (this.idSupplier === 7 && this.user.role.idRole === 3) {
           this.excludeProduct();
        } else {
           this.productsAux = this.products;
        }

        if (this.idSupplier === 2) {
          this.products = _.orderBy( this.products, ['idProduct'], ['desc']);
          const consultation = this.products[0];
          this.products.splice(0, 1);
          this.products.push(consultation);
        } else {
          this.products = _.orderBy( this.products, ['idProduct'], ['asc']);
        }
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
        if (product.name === 'Consultation Form') {
          this.router.navigate(['/products/' + product.idProduct + '/consultation-form']);
        } else {
          this.router.navigate(['/products/' + product.idProduct + '/product-view-europa']);
        }
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
      case 8: // medmont
        this.router.navigate(['/products/' + product.idProduct + '/product-view-medmont']);
        break;
      case 9:
        this.router.navigate(['/products/' + product.idProduct + '/product-view-synergeyes']);
        break;
      case 10:
        this.router.navigate(['/products/' + product.idProduct + '/product-view-orion']);
        break;
      case 7:  // fluo strips y spectrum saline
        if (product.father === 'Fluo Strips') {
          this.router.navigate(['/products/' + product.idProduct + '/product-view-fluo-strips']);
        }
        if (product.father === 'Spectrum Saline') {
          this.router.navigate(['/products/' + product.idProduct + '/product-view-spectrum-saline']);
        }
        break;
      case 13: // xcel
        this.router.navigate(['/products/' + product.idProduct + '/product-view-xsb/' + 13]);
        break;
      case 14: // SMARTLENS
        this.router.navigate(['/products/' + product.idProduct + '/product-view-xsb/' + 14]);
        break;
      case 15: // BOSTONSIGHT
        this.router.navigate(['/products/' + product.idProduct + '/product-view-xsb/' + 15]);
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
              windowClass: 'modal-content-border',
              backdrop  : 'static', keyboard  : false
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
              windowClass: 'modal-content-border',
              backdrop  : 'static', keyboard  : false
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
              windowClass: 'modal-content-border',
              backdrop  : 'static', keyboard  : false
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
              windowClass: 'modal-content-border',
              backdrop  : 'static', keyboard  : false
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
                windowClass: 'modal-content-border',
                backdrop  : 'static', keyboard  : false
              });
              modalRefGeneralFluo.componentInstance.product = product;
              modalRefGeneralFluo.componentInstance.action = action;
              modalRefGeneralFluo.result.then(
                (result) => {
                  this.getProducts();
                },
                (reason) => {}
              );
            } else if (product.father === 'Spectrum Saline') { // spectrum saline
              const modalRefSpectrum = this.modalService.open(EditProductSpectrumSalineComponent, {
                size: 'lg',
                windowClass: 'modal-content-border',
                backdrop  : 'static', keyboard  : false
              });
              modalRefSpectrum.componentInstance.product = product;
              modalRefSpectrum.componentInstance.action = action;
              modalRefSpectrum.result.then(
                (result) => {
                  this.getProducts();
                },
                (reason) => {}
              );
            } else {
              const modalRefMedmont = this.modalService.open(EditProductMedmontComponent, {
                size: 'lg',
                windowClass: 'modal-content-border',
                backdrop  : 'static', keyboard  : false
              });
              modalRefMedmont.componentInstance.product = product;
              modalRefMedmont.componentInstance.action = action;
              modalRefMedmont.result.then(
                (result) => {
                  this.getProducts();
                },
                (reason) => {}
              );
            }
        break;
      case 8: // Medmont
        const modalRefMedmont = this.modalService.open(EditProductMedmontComponent, {
          size: 'lg',
          windowClass: 'modal-content-border',
          backdrop: 'static', keyboard: false
        });
        modalRefMedmont.componentInstance.product = product;
        modalRefMedmont.componentInstance.action = action;
        modalRefMedmont.result.then(
          (result) => {
            this.getProducts();
          },
          (reason) => {}
        );
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
      this.showFilterMarkennovy = false;
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
      this.showFilterMarkennovy = false;
    } else {
      this.products = products;
    }
  }

  filterByPacking(type) {
    this.currentPacking = type;

    var products = this.productsAux;
    const val = this.filterName;

    products = products.filter((item) => {
      return item.father === this.currentFather;
    });

    if (type === 'All') {
      this.products = products;
      if (val && val.trim() !== '') {
        this.products = products.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
      }
      this.orderByPacking();
      return;
    }

    this.products = products.filter((item) => {
      return ((item.name.toLowerCase().indexOf(type.toLowerCase()) > -1));
    });

    if (val && val.trim() !== '') {
      this.products = this.products.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
    this.orderByPacking();
  }

  orderByPacking() {
    var productsBlister = [];
    var productsVial = [];
    var products6pk = [];
    var products3pk = [];
    var products2pk = []
    var others = [];

    var products = this.products;
    products = products.filter((item) => {
      return item.father === this.currentFather;
    });

    _.each(products, function (product) {
      if ((product.name.toLowerCase().indexOf('Blister'.toLowerCase()) > -1)) {
        productsBlister.push(product);
      } else if ((product.name.toLowerCase().indexOf('Vial'.toLowerCase()) > -1)) {
        productsVial.push(product);
      } else if ((product.name.toLowerCase().indexOf('6pk'.toLowerCase()) > -1)) {
        products6pk.push(product);
      } else if ((product.name.toLowerCase().indexOf('3pk'.toLowerCase()) > -1)) {
        products3pk.push(product);
      } else if ((product.name.toLowerCase().indexOf('2pk'.toLowerCase()) > -1)) {
        products2pk.push(product);
      } else {
        others.unshift(product);
      }
    });

    // Ordenar cada lista por tipo de producto
    productsBlister = _.orderBy(productsBlister, ['idProduct'], ['asc']);
    productsVial = _.orderBy(productsVial, ['idProduct'], ['asc']);
    products6pk = _.orderBy(products6pk, ['idProduct'], ['asc']);
    products3pk = _.orderBy(products3pk, ['idProduct'], ['asc']);
    products2pk = _.orderBy(products2pk, ['idProduct'], ['asc']);

    var productsAll = [];

    // Spheric, Toric, Multifocal, MultifocalToric
    _.times(10, function (i) {
      productsAll.push(productsBlister[i]);
      productsAll.push(productsVial[i]);
      productsAll.push(products6pk[i]);
      productsAll.push(products3pk[i]);
      productsAll.push(products2pk[i]);
    });
    this.products = _.concat(_.compact(productsAll), others);
  }

  redirectPacking(product) {
    this.packings = [];
    this.packings.push({ 'product': product, 'type': 'All'});

    if (product.father === 'Saphir Rx' || product.father === 'Gentle 80' || product.father === 'Gentle 59' ||
        product.father === 'Blu:gen' || product.father === 'Blu:kidz' || product.father === 'Xtensa Rx' ||
        product.father === 'Saphir' || product.father === 'Quattro 3-Monthly' || product.father === 'Jade'
        || product.father === 'Xtensa' || product.father === 'Mylo') {
          this.packings.push({ 'product': product, 'type': 'Blister'});
    }

    if (product.father === 'Equilibria') {
      this.packings.push({ 'product': product, 'type': 'Vial' });
    }

    if (product.father === 'Xtensa' || product.father === 'Jade' || product.father === 'Mylo') {
      this.packings.push({ 'product': product, 'type': '6pk'});
    }

    if (product.father === 'Saphir Rx' || product.father === 'Gentle 80' || product.father === 'Gentle 59' ||
        product.father === 'Blu:gen' || product.father === 'Blu:kidz' || product.father === 'Xtensa Rx') {
      this.packings.push({ 'product': product, 'type': '3pk'});
    }

    if (product.father === 'Saphir' || product.father === 'Quattro 3-Monthly' || product.father === 'Equilibria') {
      this.packings.push({ 'product': product, 'type': '2pk'});
    }

    this.currentFather = product.father;
    this.showFathersMarkennovy = false;
    this.showFilterMarkennovy =  false;
    this.showPackingsMarkennovy = true;
  }

  redirectFather(product, type) {
    this.products = this.productsAux;

    this.products = this.products.filter((item) => {
      return item.father === product.father;
    });

    this.filterByPacking(type);
    this.currentFather = product.father;
    this.showPackingsMarkennovy = false;
  }

  backToFathersHeader() {
    if (this.idSupplier === 1) {
      if (!this.showFathersMarkennovy) {
        this.showFathersMarkennovy = true;
        this.showFilterMarkennovy = true;
        this.showPackingsMarkennovy = false;
        this.filterName = '';
        this.currentFather = '';
        this.currentPacking = '';
      }
    }
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
