import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../../../shared/services/basket/basket.service';
import { BasketproductrequestedService } from '../../../../../shared/services/basketproductrequested/basketproductrequested.service';
import { OrderService, UserService, ProductsRequestedService } from '../../../../../shared/services';
import { UserStorageService } from '../../../../../http/user-storage.service';
import { AlertifyService } from '../../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Buy } from '../../../../../shared/models/buy';
import { DetailProductModalComponent } from '../../../modals/detail-product/detail-product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SummaryProductsComponent } from '../../../modals/summary-products/summary-products.component';
import { MagicLookComponent } from '../../../../edit-order/magic-look/magic-look.component';
import { BlueLightComponent } from '../../../../edit-order/blue-light/blue-light.component';
import { EuclidComponent } from '../../../../edit-order/euclid/euclid.component';
import { MarkennovyComponent } from '../../../../edit-order/markennovy/markennovy.component';
import { DetailMagicLookComponent } from '../../../modals/detail-product/detail-magic-look/detail-magic-look.component';
import { DetailMarkennovyComponent } from '../../../modals/detail-product/detail-markennovy/detail-markennovy.component';
import { DetailBlueLightComponent } from '../../../modals/detail-product/detail-blue-light/detail-blue-light.component';
import { debug } from 'util';
import { DetailEuclidComponent } from '../../../modals/detail-product/detail-euclid/detail-euclid.component';
import { DetailEuropaComponent } from '../../../modals/detail-product/detail-europa/detail-europa.component';
import { EuropaComponent } from '../../../../edit-order/europa/europa.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DetailSalineFluoComponent } from '../../../modals/detail-product/detail-saline-fluo/detail-saline-fluo.component';
import { SalineFluoComponent } from '../../../../edit-order/saline-fluo/saline-fluo.component';
import { DetailLenticonComponent } from '../../../modals/detail-product/detail-lenticon/detail-lenticon.component';
import { LenticonComponent } from '../../../../edit-order/lenticon/lenticon.component';
import { ProductRequested } from '../../../../../shared/models/productrequested';
import { ProductService } from '../../../../../shared/services/products/product.service';
import { DetailSynergeyesComponent } from '../../../modals/detail-product/detail-synergeyes/detail-synergeyes.component';
import { SynergeyesComponent } from '../../../../edit-order/synergeyes/synergeyes.component';


@Component({
  selector: 'app-details-basket-client',
  templateUrl: './details-basket-client.component.html',
  styleUrls: ['./details-basket-client.component.scss']
})
export class DetailsBasketClientComponent implements OnInit {

  listBasket: Array<any> = new Array;
  listBasketAux: Array<any> = new Array;
  listBasketAll: Array<any> = new Array;
  user: any;
  id: any;
  buyBasket: Buy = new Buy();
  subtotal: any;
  total: any;
  productRequestedToBuy: Array<any> = new Array;
   checkboxModel = {
    value1 : false,
    value2 : 'NO'
  };
  checkedAll: any;
  customer: any;
  inserts = 0;
  basketUpdate;
  productRequested1: ProductRequested;
  productDMV: any;

  constructor(private basketService: BasketService,
    private basketProductRequestedService: BasketproductrequestedService,
    private orderService: OrderService,
    private userService: UserService,
    private userStorageService: UserStorageService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private productRequestedService: ProductsRequestedService,
    private productService: ProductService) {
      this.user = JSON.parse(userStorageService.getCurrentUser());
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCustomer();
    this.getListBasket();
  }

  getCustomer(): void {
    this.userService.findById$(this.id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.customer = res.data.company.companyName;
      }
    });
  }

  getListBasket(): void {
    this.spinner.show();
    this.basketService.allBasketByUser$(this.id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listBasket = res.data;
        this.listBasketAux = res.data;
        this.listBasketAll = res.data;

        const auxList = [];
        _.each(this.listBasket, function (basket) {
          basket.checked = false;
          basket.supplier = basket.productRequested.product.supplier.idSupplier;
          if (basket.productRequested.detail.length > 0) {
            basket.productRequested.detail = JSON.parse(basket.productRequested.detail);
          }
          const productId = basket.productRequested.product.idProduct;
          if (productId !== 145
                && productId !== 146
                && productId !== 147) {
            auxList.push(basket);
          }
        });
        this.listBasketAll = this.listBasket;
        this.listBasket = auxList;
        this.listBasketAux = auxList;
        // search product insertor
        this.productService.findById$(146).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.assignPriceAllEuropa(auxList, res1.data[0]);
          } else {
            console.log(res1.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
          this.spinner.hide();
        });

        this.listBasket = _.orderBy(this.listBasket, ['date'], ['desc']);
        this.listBasketAux = _.orderBy(this.listBasket, ['date'], ['desc']);
        this.spinner.hide();
      } else {
        this.spinner.hide();
      }
    });
  }

  assignPriceAllEuropa(auxList, productDMV): void {
    let arrayProductAditionals = [];
    const self = this;
    let priceAll = 0;
    let priceInsertor = 0;

    let existContraryEye = false;

    _.each(auxList, function(basket) {
      if (basket.productRequested.product.supplier.idSupplier === 2) {
        arrayProductAditionals = self.getProductsAditionalEuropa(basket.productRequested.groupId,
          basket.productRequested.detail[0].eye);
        priceAll = 0;
        existContraryEye = self.contraryEye(basket.productRequested.groupId,
          basket.productRequested.detail[0].eye);
        _.each(arrayProductAditionals, function(item) {
          const productId = item.productRequested.product.idProduct;
          if (productId !== 146) {
            priceAll = priceAll + item.productRequested.price;
          }
        });
        // price insertors
        const insertor = basket.productRequested.detail[0].header[2].selected === true;
        priceInsertor = self.getPriceInsertor(basket.basket.user.membership.idMembership, productDMV);
        if (insertor) {
          priceAll = priceAll + priceInsertor;
        }
        basket.productRequested.priceBase = basket.productRequested.price;
        basket.productRequested.price = priceAll;
      }
    });
  }

  getPriceInsertor(membership, productDMV) {
    let price = 0;

    switch (membership) {
      case 1:
        price = productDMV.price1;
        break;
      case 2:
        price = productDMV.price2;
        break;
      case 3:
        price = productDMV.price3;
        break;
    }

    return price;
  }

  contraryEye(groupId, eye) {
    let exist = false;
    let contraryEye = '';

    if (eye === 'Left') {
      contraryEye = 'Right';
    } else {
      contraryEye = 'Left';
    }

    _.each(this.listBasket, function(item) {
      if (item.productRequested.groupId === groupId && item.productRequested.detail[0].eye === contraryEye) {
        exist = true;
      }
    });
    return exist;
  }

  borrar(id): void {
   //Basket a eliminar
    let basket = _.find(this.listBasket, function(o) {
      return o.idBasketProductRequested === id;
    });
     if (basket.productRequested.product.supplier.idSupplier === 2) {
     } else {
      this.basketProductRequestedService.removeById$(id).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.getListBasket();
          // tslint:disable-next-line:no-shadowed-variable
          this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe(( res: string) => {
            this.notification.success('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
     }
  }

  delete(id) {
    this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
      this.translate.get('Are you sure do you want to delete this register?',
       {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
         this.alertify.confirm(title, msg, () => {
          const basket = this.getBasket(id);
          const idSupplier = basket.productRequested.product.supplier.idSupplier;

          if (idSupplier === 2) {
            this.deleteProductsAditionalEuropa(basket);
          } else {
            this.borrar(id);
          }

          }, () => {});
        });
      });
    }

  getItems(ev: any) {
    this.listBasket = this.listBasketAux;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
        this.listBasket = this.listBasket.filter((item) => {
          return ((item.productRequested.patient.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
    }
    if (this.checkedAll === false) {
      _.each(this.listBasket, function(item) {
            item.checked = true;
         });
      this.productRequestedToBuy = this.listBasket;
    }
  }

  buy() {
    this.calculationsSummary();
    this.openSumary();
  }

  getProductsAditionalEuropa(groupId, eye) {
    const auxList = [];

    _.each(this.listBasketAll, function(item) {
      if (item.productRequested.groupId === groupId && item.productRequested.detail[0].eye === eye) {
        auxList.push(item);
      }
    });

    return auxList;
  }

  getBasket(id) {
    let basket;
    _.each(this.listBasket, function(item) {
      if (item.idBasketProductRequested === id) {
        basket = item;
      }
    });
    return basket;
  }

  addProductsAditionalEuropa() {
    let listPA = [];
    let arrayAux = [];
    let arrayAuxPA = [];
    let self = this;

    const listSelect = this.productRequestedToBuy;
    _.each(this.listBasket, function(item) {
        _.each(listSelect, function(itemBasket) {
          if (item.productRequested.product.supplier.idSupplier === 2) {
            if (item.idBasketProductRequested === itemBasket) {
              arrayAuxPA = self.getProductsAditionalEuropa(item.productRequested.groupId, item.productRequested.detail[0].eye);
              listPA = _.concat(listPA, arrayAuxPA);
            }
          }
      });
    });

    let insertorsUniq = [];

    _.each(listPA, function(item) {
      const id = item.idBasketProductRequested;
      const groupId = item.productRequested.groupId;

      if (item.productRequested.product.idProduct === 146 && !_.includes(insertorsUniq, groupId)) {
        insertorsUniq.push(groupId);
        arrayAux = _.concat(arrayAux, id);
      } else if (item.productRequested.product.idProduct !== 146) {
        arrayAux = _.concat(arrayAux, id);
      }
    });

    if (arrayAux.length > 0) {
      this.productRequestedToBuy = arrayAux;
    }
  }

  deleteProductsAditionalEuropa(basket) {
    let auxList = [];
    let arrayAux = [];
    let arrayDelete = [];
    let detail;
    let idProductRequested;
    let price;
    const productRequested1 = new ProductRequested();
    let eye;
    let productRDmv;

    auxList = this.getProductsAditionalEuropa(basket.productRequested.groupId,
      basket.productRequested.detail[0].eye);

    // insertors
    const insertor = basket.productRequested.detail[0].header[2].selected === true;
    const existContraryEye = this.contraryEye(basket.productRequested.groupId,
      basket.productRequested.detail[0].eye);
    productRDmv = _.find(auxList, function(o) {
      return o.productRequested.product.idProduct === 146;
    });

    if (insertor && existContraryEye && productRDmv !== undefined) {
      eye = basket.productRequested.detail[0].eye === 'Left' ? 'Right' : 'Left';

      idProductRequested = productRDmv.productRequested.idProductRequested;
      const detailContrary = productRDmv.productRequested.detail;
      _.each(detailContrary, function(item) {
        item.eye = eye;
        _.each(item.header, function(itemH, index) {
          if (itemH.name === 'Inserts (DMV)') {
            item.header[index].selected = true;
          }
        });
      });

      price = productRDmv.productRequested.price;

      // build object
      productRequested1.detail = '[' + JSON.stringify({ name: detailContrary[0].name, eye: detailContrary[0].eye,
        header: detailContrary[0].header, parameters: detailContrary[0].parameters,
        pasos: detailContrary[0].pasos, productsAditional: detailContrary[0].productsAditional }) + ']';
      productRequested1.idProductRequested = idProductRequested;
      productRequested1.price = price;

      this.productRequestedService.updatePriceEuropa$(productRequested1).subscribe(res1 => {
        if (res1.code === CodeHttp.ok) {
          _.each(auxList, function(item) {
            if (item.productRequested.product.idProduct !== 146) {
              arrayDelete.push(item);
            }
          });
          auxList = arrayDelete;

          _.each(auxList, function(item) {
            const id = item.idBasketProductRequested;
            arrayAux = _.concat(arrayAux, id);
          });
          this.deleteByIds(arrayAux);
        }
      });
    } else {
      _.each(auxList, function(item) {
        const id = item.idBasketProductRequested;
        arrayAux = _.concat(arrayAux, id);
      });

      this.deleteByIds(arrayAux);
    }
  }

  deleteByIds(ids): void {
    this.basketProductRequestedService.removeByIds$(ids).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.getListBasket();
        // tslint:disable-next-line:no-shadowed-variable
        this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe(( res: string) => {
          this.notification.success('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  buyAll() {
    let arrayAux = this.productRequestedToBuy;
    _.each(this.listBasket, function(item) {
      let id = item.idBasketProductRequested;
      let exist = _.includes(arrayAux, id);
      if (!exist) {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.productRequestedToBuy = arrayAux;
    this.calculationsSummary();
    this.openSumary();
  }

  onSelection(basket, checked) {
    if (this.checkedAll === false && checked === true) {
      this.checkboxModel.value1 = false;
    }
    basket.checked = !checked;
    let id = basket.idBasketProductRequested;
    let exist = _.includes(this.productRequestedToBuy, id);
    if (exist) {
      _.remove(this.productRequestedToBuy,  function (product)  {
        return product === id;
      });
    } else {
      this.productRequestedToBuy = _.concat(this.productRequestedToBuy, id);
    }
    if (checked === false && this.productRequestedToBuy.length === this.listBasket.length) {
      this.checkboxModel.value1 = true;
    }
    }

  onSelectionAll(valueChecked) {
    this.checkedAll = valueChecked;
    let arrayAux = this.productRequestedToBuy;
    _.each(this.listBasket, function(item) {
      item.checked = !valueChecked;
      let id = item.idBasketProductRequested;
      let exist = _.includes(arrayAux, id);
      if (exist) {
        if (valueChecked === true) {
          _.remove(arrayAux,  function (product)  {
            return product === id;
          });
        }
      } else {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.productRequestedToBuy = arrayAux;
  }

  openParams(basket) {
    let  idSupplier = basket.productRequested.product.supplier.idSupplier;
    switch (idSupplier) {
     case 1: // Markennovy
          const modalRefMarkennovy = this.modalService.open(DetailMarkennovyComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefMarkennovy.componentInstance.basket = basket;
          modalRefMarkennovy.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 2: // Europa
          const modalRefEuropa = this.modalService.open(DetailEuropaComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefEuropa.componentInstance.basket = basket;
          modalRefEuropa.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
       break;
     case 3: // Lenticon
          const modalRefLenticon = this.modalService.open(DetailLenticonComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefLenticon.componentInstance.basket = basket;
          modalRefLenticon.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
       break;
     case 4: // Euclid
          const modalRefEuclid = this.modalService.open(DetailEuclidComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefEuclid.componentInstance.basket = basket;
          modalRefEuclid.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 5: // Magic Look
          const modalRefMagic = this.modalService.open( DetailMagicLookComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefMagic.componentInstance.basket = basket;
          modalRefMagic.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 6: // Blue Light
        const modalRefBlue = this.modalService.open(DetailBlueLightComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefBlue.componentInstance.basket = basket;
          modalRefBlue.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 7: // Fluo strips y spectrum saline
        const modalRefFluoSaline = this.modalService.open(DetailSalineFluoComponent,
          { size: 'lg', windowClass: 'modal-content-border', backdrop : 'static', keyboard : false});
          modalRefFluoSaline.componentInstance.basket = basket;
          modalRefFluoSaline.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
      case 9: // Synergeyes
        const modalRefSynergeyes = this.modalService.open(DetailSynergeyesComponent,
          { size: 'lg', windowClass: 'modal-content-border', backdrop : 'static', keyboard : false});
          modalRefSynergeyes.componentInstance.basket = basket;
          modalRefSynergeyes.result.then((result) => {
          this.ngOnInit();
          } , (reason) => {
          });
          break;
     }
  }

  openEdit(basket) {
    let  idSupplier = basket.productRequested.product.supplier.idSupplier;
    switch (idSupplier) {
     case 1: // Markennovy
          const modalRefMarkennovy = this.modalService.open( MarkennovyComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefMarkennovy.componentInstance.basket = basket;
          modalRefMarkennovy.componentInstance.typeEdit = 1;
          modalRefMarkennovy.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 2: // Europa
          const modalRefEuropa = this.modalService.open( EuropaComponent,
          { size: 'lg', windowClass: 'modal-content-border modal-edit-europa' , backdrop : 'static', keyboard : false });
          modalRefEuropa.componentInstance.basket = basket;
          modalRefEuropa.componentInstance.typeEdit = 1;
          modalRefEuropa.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 3: // Lenticon
          const modalRefLenticon = this.modalService.open( LenticonComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefLenticon.componentInstance.basket = basket;
          modalRefLenticon.componentInstance.typeEdit = 1;
          modalRefLenticon.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
       break;
     case 4: // Euclid
          const modalRefEuclid = this.modalService.open( EuclidComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefEuclid.componentInstance.basket = basket;
          modalRefEuclid.componentInstance.typeEdit = 1;
          modalRefEuclid.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 5: // Magic Look
          const modalRefMagic = this.modalService.open( MagicLookComponent,
          { size: 'lg', windowClass: 'modal-content-border', backdrop : 'static', keyboard : false });
          modalRefMagic.componentInstance.basket = basket;
          modalRefMagic.componentInstance.typeEdit = 1;
          modalRefMagic.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     case 6: // Blue Light
          const modalRefBlue = this.modalService.open( BlueLightComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefBlue.componentInstance.basket = basket;
          modalRefBlue.componentInstance.typeEdit = 1;
          modalRefBlue.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
    case 7: // Fluo strips y spectrum saline
          const modalRefSalineFluo = this.modalService.open( SalineFluoComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false});
          modalRefSalineFluo.componentInstance.basket = basket;
          modalRefSalineFluo.componentInstance.typeEdit = 1;
          modalRefSalineFluo.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
    case 9: // Synergeyes
          const modalRefSynergeyes = this.modalService.open( SynergeyesComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false});
          modalRefSynergeyes.componentInstance.basket = basket;
          modalRefSynergeyes.componentInstance.typeEdit = 1;
          modalRefSynergeyes.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
     }
   }

  openSumary() {
    this.addProductsAditionalEuropa();
    this.buyBasket.idUser = this.id;
    this.buyBasket.listBasket = this.productRequestedToBuy;
    this.buyBasket.idRole = this.user.role.idRole;
    const modalRef = this.modalService.open( SummaryProductsComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
    modalRef.componentInstance.subtotal = this.subtotal;
    modalRef.componentInstance.total = this.total;
    modalRef.componentInstance.buyBasket = this.buyBasket;
    modalRef.componentInstance.quantity = this.productRequestedToBuy.length;
    modalRef.componentInstance.list = this.listBasket;
    modalRef.componentInstance.client = this.user;
    modalRef.result.then((result) => {
      this.getCustomer();
      this.getListBasket();
      this.checkboxModel.value1 = false;
      this.productRequestedToBuy = new Array;
      // this.onSelectionAll(false);
    } , (reason) => {
    });
  }

  calculationsSummary() {
    let self = this;
    let subtotal = 0;
    const listSelect = this.productRequestedToBuy;
    _.each(this.listBasket, function(item) {
      _.each(listSelect, function(itemBasket) {
        if (item.idBasketProductRequested === itemBasket) {
          subtotal = subtotal + (item.productRequested.quantity  * item.productRequested.price);
        }
      });
    });
    let amountToExcluded = this.totalInsertsExcluded();
    this.subtotal = subtotal - amountToExcluded;
    this.total = this.subtotal;
  }



  totalInsertsExcluded() {
    let self = this;
    let amountToExcluded = 0;
    let groupsIdsReady = [];
    _.each(this.productRequestedToBuy, function (basketProductRequest) {
      let basket = _.find(self.listBasket, function(o) {
        return o.idBasketProductRequested === basketProductRequest;
      });

      if (!!basket) {
        self.definePriceInserts(basket.basket.user.membership.idMembership, basket.productRequested);
        let basketProduct = _.find(self.listBasket, function(o) {
          return _.includes(self.productRequestedToBuy, o.idBasketProductRequested) && o.productRequested.idProductRequested !== basket.productRequested.idProductRequested
          && basket.productRequested.groupId === o.productRequested.groupId;
        });

        if (basketProduct && !_.includes(groupsIdsReady, basketProduct.productRequested.groupId)) {
          groupsIdsReady.push(basketProduct.productRequested.groupId);
          amountToExcluded += self.inserts;
        }
      }
    });
    return amountToExcluded;
  }

  definePriceInserts(membership, productRequested) {
    let pricesAditionalInserts = JSON.parse(productRequested.product.infoAditional)[0].values[1];
    switch (membership) {
      case 1:
        this.inserts = pricesAditionalInserts.values[0].price;
        break;
      case 2:
        this.inserts =  pricesAditionalInserts.values[1].price;
        break;
      case 3:
        this.inserts = pricesAditionalInserts.values[2].price;
        break;
    }
  }
}
