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
import { OrionComponent } from '../../../../edit-order/orion/orion/orion.component';
import { DetailOrionComponent } from '../../../modals/detail-product/detail-orion/detail-orion.component';
import { DetailMoldedLensesComponent } from '../../../modals/detail-product/detail-molded-lenses/detail-molded-lenses.component';
import { MoldedLensesComponent } from '../../../../edit-order/molded-lenses/molded-lenses.component';
import { SmartlensComponent } from '../../../../edit-order/smartlens/smartlens.component';
import { DetailSmartlensComponent } from '../../../modals/detail-product/detail-smartlens/detail-smartlens.component';
import { Product } from '../../../../../shared/models/product';
import { DetailXcelComponent } from '../../../modals/detail-product/detail-xcel/detail-xcel.component';
import { XcelComponent } from '../../../../edit-order/xcel/xcel.component';


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
  basketUpdate;
  productRequested1: ProductRequested;
  productDMV: any;
  productModel: Product = new Product();

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
    const self = this;
    this.spinner.show();
    this.basketService.allBasketByUser$(this.id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listBasket = res.data;
        this.listBasketAux = res.data;
        this.listBasketAll = res.data;

        const auxList = [];
        let productsAdditional = [];

        _.each(this.listBasket, function (basket) {
          basket.checked = false;
          basket.supplier = basket.productRequested.product.supplier.idSupplier;
          if (basket.productRequested.detail.length > 0) {
            basket.productRequested.detail = JSON.parse(basket.productRequested.detail);
          }
          const productId = basket.productRequested.product.idProduct;

          // auxList filter only products to show
          if (!self.productModel.isAdditionalProduct(productId)) {
            auxList.push(basket);
          } else {
            productsAdditional.push(basket.productRequested.product);
          }
        });

        this.listBasketAll = this.listBasket;
        this.listBasket = auxList;
        this.listBasketAux = auxList;

        this.setPriceWithAdditionals(auxList, productsAdditional);

        this.listBasket = _.orderBy(this.listBasket, ['date'], ['desc']);
        this.listBasketAux = _.orderBy(this.listBasket, ['date'], ['desc']);
        this.spinner.hide();
      } else {
        this.spinner.hide();
      }
    });
  }

  // This method is only for Europa, Smartlens and X-cel
  setPriceWithAdditionals(auxList, productsAdditional): void {
    const self = this;

    let productsGrouped = [];
    let priceAll = 0;
    let priceInsertor = 0;
    let existContraryEye = false;

    _.each(auxList, function(basket) {
      priceAll = 0;
      var detail = basket.productRequested.detail[0];
      var eye = detail && detail.eye;
      productsGrouped = self.getProductsGrouped(basket.productRequested.groupId, eye);
      existContraryEye = self.contraryEye(basket.productRequested.groupId, eye);

      const insertID = self.productModel.getInsertsID(basket.productRequested.product, null);
      const productDMV = insertID && _.find(productsAdditional, {idProduct: insertID});

      _.each(productsGrouped, function(item) {
        const productId = item.productRequested.product.idProduct;
        if (productId !== insertID) {
          priceAll = priceAll + item.productRequested.price;
        }
      });

      const supplierId = basket.productRequested.product.supplier.idSupplier;

      // EUROPA
      if (supplierId === 2) {
        // price insertors
        const insertSelected = basket.productRequested.detail[0].header[2].selected === true;
        if (insertSelected) {
          priceInsertor = self.getPriceInsertor(basket.basket.user.membership.idMembership, productDMV);
          priceAll = priceAll + priceInsertor;
        }
      }

      // SMARTLENS or XCEL
      if (supplierId === 14 || self.productModel.xcelWithDmv(basket.productRequested.product.idProduct) ) {
        // price insertors
        const insertSelected = basket.productRequested.detail[0].dmv.selected === "Yes";
        if (insertSelected) {
          priceInsertor = self.getPriceInsertor(basket.basket.user.membership.idMembership, productDMV);
          priceAll = priceAll + priceInsertor;
        }
      }

      if (self.productModel.haveAdditionalProduct(supplierId)) {
        basket.productRequested.priceBase = basket.productRequested.price;
        basket.productRequested.price = priceAll;
      }
    });
  }

  getProductsGrouped(groupId, eye) {
    const auxList = [];

    _.each(this.listBasketAll, function (item) {
      var detail = item.productRequested.detail[0];
      var detail_eye = detail && detail.eye;
      if (item.productRequested.groupId === groupId && detail_eye === eye) {
        auxList.push(item);
      }
    });
    return auxList;
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
      case 4:
        price = productDMV.price4;
        break;
      case 5:
        price = productDMV.price5;
        break;
      case 6:
        price = productDMV.price6;
        break;
      case 7:
        price = productDMV.price7;
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
      var detail = item.productRequested.detail[0];
      var detail_eye = detail && detail.eye;
      if (item.productRequested.groupId === groupId && detail_eye === contraryEye) {
        exist = true;
      }
    });
    return exist;
  }

  delete(id) {
    this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
      this.translate.get('Are you sure do you want to delete this register?',
        {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {

        this.alertify.confirm(title, msg, () => {
        const basket = this.getBasket(id);
        const idSupplier = basket.productRequested.product.supplier.idSupplier;

        if (this.productModel.haveAdditionalProduct(idSupplier)) {
          this.deleteProductsAdditional(basket);
        } else {
          this.deleteBasket(id);
        }

        }, () => {});
      });
    });
  }

  deleteBasket(id): void {
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

  getBasket(id) {
    let basket;
    _.each(this.listBasket, function(item) {
      if (item.idBasketProductRequested === id) {
        basket = item;
      }
    });
    return basket;
  }

  deleteProductsAdditional(basket) {
    let arrayAux = [];
    let arrayDelete = [];
    let insertSelected;

    const newProductRequested = new ProductRequested();

    let productsAdditional = this.getProductsGrouped(basket.productRequested.groupId, basket.productRequested.detail[0].eye);
    const supplierId = basket.productRequested.product.supplier.idSupplier;
    const existContraryEye = this.contraryEye(basket.productRequested.groupId, basket.productRequested.detail[0].eye);
    const insertID = this.productModel.getInsertsID(basket.productRequested.product, null);
    const eyeContrary = basket.productRequested.detail[0].eye === 'Left' ? 'Right' : 'Left';

    const productDMV = insertID && _.find(productsAdditional, function(p) {
      return p.productRequested.product.idProduct === insertID;
    });

    const productRequestedDMV = productDMV && productDMV.productRequested;

    // EUROPA
    if (supplierId === 2) {
      // Inserts DMV
      insertSelected = basket.productRequested.detail[0].header[2].selected === true;
    }

    // XCEL
    if (supplierId === 'id supplier Xcel') {
      // Inserts DMV
      insertSelected = null;
    }

    if (insertSelected && existContraryEye && productDMV !== undefined) {

      const detailContrary = productRequestedDMV.detail;
      _.each(detailContrary, function(item) {
        item.eye = eyeContrary;
        newProductRequested.idProductRequested = productRequestedDMV.idProductRequested;
        newProductRequested.price = productRequestedDMV.price;

        // EUROPA
        if (supplierId === 2) {
          _.each(item.header, function(itemH, index) {
            if (itemH.name === 'Inserts (DMV)') {
              item.header[index].selected = true;
            }
          });

          // building detail Europa
          newProductRequested.detail = '[' + JSON.stringify({ name: detailContrary[0].name, eye: detailContrary[0].eye,
            header: detailContrary[0].header, parameters: detailContrary[0].parameters,
            pasos: detailContrary[0].pasos, productsAditional: detailContrary[0].productsAditional }) + ']';
        }
      });


      this.productRequestedService.updatePriceEuropa$(newProductRequested).subscribe(res1 => {
        if (res1.code === CodeHttp.ok) {
          _.each(productsAdditional, function(item) {
            if (item.productRequested.product.idProduct !== insertID) {
              arrayDelete.push(item);
            }
          });
          productsAdditional = arrayDelete;

          _.each(productsAdditional, function(item) {
            const id = item.idBasketProductRequested;
            arrayAux = _.concat(arrayAux, id);
          });
          this.deleteByIds(arrayAux);
        }
      });
    } else {
      _.each(productsAdditional, function(item) {
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
      case 10: // Orion
        const modalRefOrion = this.modalService.open(DetailOrionComponent,
          { size: 'lg', windowClass: 'modal-content-border', backdrop : 'static', keyboard : false});
          modalRefOrion.componentInstance.basket = basket;
          modalRefOrion.result.then((result) => {
          this.ngOnInit();
          } , (reason) => {
          });
        break;
        case 13: // Xcel
        const modalRefXcel = this.modalService.open(DetailXcelComponent,
        { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
        modalRefXcel.componentInstance.basket = basket;
        modalRefXcel.result.then((result) => {
          this.ngOnInit();
        } , (reason) => {
        });
        break;
      case 14: // Smartlens
        const modalRefSmartlens = this.modalService.open(DetailSmartlensComponent,
        { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
        modalRefSmartlens.componentInstance.basket = basket;
        modalRefSmartlens.result.then((result) => {
          this.ngOnInit();
        } , (reason) => {
        });
        break;
      case 16: // Spectrum Molded Lenses
        const modalRefMoldedLenses = this.modalService.open(DetailMoldedLensesComponent,
        { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
        modalRefMoldedLenses.componentInstance.basket = basket;
        modalRefMoldedLenses.result.then((result) => {
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
      case 10: // Orion
          const modalRefOrion = this.modalService.open( OrionComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false});
          modalRefOrion.componentInstance.basket = basket;
          modalRefOrion.componentInstance.typeEdit = 1;
          modalRefOrion.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
        break;
      case 13: // Xcel
      const modalRefXcel = this.modalService.open( XcelComponent,
        { size: 'lg', windowClass: 'modal-content-border modal-edit-Xcel' , backdrop : 'static', keyboard : false});
      modalRefXcel.componentInstance.basket = basket;
      modalRefXcel.componentInstance.typeEdit = 1;
      modalRefXcel.result.then((result) => {
        this.ngOnInit();
      } , (reason) => {
      });
      break;
      case 14: // Smartlens
          const modalRefSmartlens = this.modalService.open( SmartlensComponent,
            { size: 'lg', windowClass: 'modal-content-border modal-edit-smartlens' , backdrop : 'static', keyboard : false});
          modalRefSmartlens.componentInstance.basket = basket;
          modalRefSmartlens.componentInstance.typeEdit = 1;
          modalRefSmartlens.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
      case 16: // Spectrum Molded Lenses
          const modalRefMoldedLenses = this.modalService.open( MoldedLensesComponent,
          { size: 'lg', windowClass: 'modal-content-border' , backdrop : 'static', keyboard : false });
          modalRefMoldedLenses.componentInstance.basket = basket;
          modalRefMoldedLenses.componentInstance.typeEdit = 1;
          modalRefMoldedLenses.result.then((result) => {
            this.ngOnInit();
          } , (reason) => {
          });
          break;
    }
  }

  openSumary() {
    this.addingProductsAditional();
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

  addingProductsAditional() {
    let self = this;
    let productsAdditional = [];
    let arrayAux = [];

    // Filtering products without additionals
    let productsWithoutAdditionals = _.filter(this.productRequestedToBuy, function (itemBasket) {
      return _.find(self.listBasket, function (item) {
        const supplierId = item.productRequested.product.supplier.idSupplier;
        return !self.productModel.haveAdditionalProduct(supplierId) && item.idBasketProductRequested === itemBasket;
      });
    });

    const listSelect = this.productRequestedToBuy;
    _.each(this.listBasket, function(item) {
      var detail = item.productRequested.detail[0];
      var detail_eye = detail && detail.eye;
      _.each(listSelect, function(itemBasket) {
        const supplierId = item.productRequested.product.supplier.idSupplier;
        if (self.productModel.haveAdditionalProduct(supplierId) && item.idBasketProductRequested === itemBasket) {
          productsAdditional = _.concat(productsAdditional, self.getProductsGrouped(item.productRequested.groupId, detail_eye));
        }
      });
    });

    let insertorsUniq = [];

    _.each(productsAdditional, function(item) {
      const id = item.idBasketProductRequested;
      const groupId = item.productRequested.groupId;
      const isInsertsDMV = self.productModel.isInsertsDMV(item.productRequested.product.idProduct);

      if (isInsertsDMV && !_.includes(insertorsUniq, groupId)) {
        insertorsUniq.push(groupId);
        arrayAux = _.concat(arrayAux, id);
      } else if (!isInsertsDMV) {
        arrayAux = _.concat(arrayAux, id);
      }
    });

    // Set products to buy.
    if (arrayAux.length > 0) {
      this.productRequestedToBuy = _.concat(arrayAux, productsWithoutAdditionals);
    }
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

    // Finding inserts
    _.each(this.productRequestedToBuy, function (basketProductRequest) {
      let basket = _.find(self.listBasket, function(o) {
        return self.productModel.haveInsertsDMV(o.supplier) && o.idBasketProductRequested === basketProductRequest;
      });

      if (!!basket) {
        let priceInsert = 0
        const insert = _.find(self.listBasketAll, function(o) {
          return self.productModel.isInsertsDMV(o.productRequested.product.idProduct) && basket.productRequested.groupId === o.productRequested.groupId;
        });
        if (insert) {
          priceInsert = insert.productRequested.price;
        }

        let basketProduct = _.find(self.listBasket, function(o) {
          return _.includes(self.productRequestedToBuy, o.idBasketProductRequested) && o.productRequested.idProductRequested !== basket.productRequested.idProductRequested
          && basket.productRequested.groupId === o.productRequested.groupId;
        });

        if (basketProduct && !_.includes(groupsIdsReady, basketProduct.productRequested.groupId)) {
          groupsIdsReady.push(basketProduct.productRequested.groupId);
          amountToExcluded += priceInsert;
        }
      }
    });
    return amountToExcluded;
  }
}
