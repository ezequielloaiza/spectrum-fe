import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService, OrderProductRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgxSpinnerService } from 'ngx-spinner';
import { BasketproductrequestedService } from '../../../shared/services/basketproductrequested/basketproductrequested.service';
import { ProductService } from '../../../shared/services/products/product.service';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss']
})
export class EuropaComponent implements OnInit {

  basket: any;
  productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  productsOriginal: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  productOriginal: any;
  productName = '';
  productNotch: any;
  productHydraPEG: any;
  productDMV: any;
  productRequestedNotch: any;
  productRequestedHydraPEG: any;
  productRequestedDMV: any;
  productRequestedDMVContrary: any;
  listBasketProductREquested: Array<any> = new Array;
  listAux: Array<any> = new Array;
  product: any;
  productCode: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  tones: Array<any> = new Array;
  quantity: any;
  observations: any;
  price: any;
  priceBase = 0;
  editPrice = false;
  user: any;
  patient: any;
  membership: any;
  signPower: any;
  signPowerTrial: any;
  typeCurve: any;
  typeCurveTrial: any;
  selectedNotch: any;
  @ViewChild('notchTime') notchTime;
  priceA = 0;
  priceB = 0;
  notch = 0;
  thickness = 0;
  // flagThickness = false;
  flagNotch = false;
  hidrapeg = 0;
  inserts = 0;
  additionalNotch = false;
 // additionalThickness = false;
  additionalHidrapeg = false;
  additionalInserts = false;
  userOrder: any;
  lenghtGroup: any;
  valueInserts: any;
  changeInserts = false;
  order: any;
  axesSelected: any;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productService: ProductService,
              private productRequestedService: ProductsRequestedService,
              private orderProductRequestedService: OrderProductRequestedService,
              private userService: UserStorageService,
              private spinner: NgxSpinnerService,
              private basketProductRequestedService: BasketproductrequestedService) {
                this.user = JSON.parse(userService.getCurrentUser());
              }

  ngOnInit() {
    if (this.typeEdit === 1 ) { // Basket
      this.productRequested = this.basket.productRequested;
      this.membership = this.basket.basket.user.membership.idMembership;
      this.findBasketByGroupdId();
    } else { // order-detail
      this.productRequested = this.detailEdit;
      this.productRequestedAux = this.detailEdit;
      this.membership = this.userOrder.membership.idMembership;
      this.findByGroupdId();
    }
    this.detail = this.productRequested.detail[0];
    this.productCode = this.productRequested.product;
    this.getProductsEuropa();
    this.priceBase = this.productRequested.priceBase;
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }
  }

  findBasketByGroupdId() {
    const eye = JSON.parse(JSON.stringify(this.productRequested.detail))[0].eye;
    this.basketProductRequestedService.allBasketByGroupId$(this.productRequested.groupId).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        const auxList = [];
        let prNotch;
        let prDMV;
        let prHydrapeg;
        _.each(res.data, function (basket) {
          const productId = basket.productRequested.product.idProduct;
          if (productId !== 145
                && productId !== 146
                && productId !== 147) {
            auxList.push(basket);
          } else {
            switch (productId) {
              case 145:
                if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
                  prNotch = basket.productRequested;
                }
                break;
              case 146:
                prDMV = basket.productRequested;
                break;
              case 147:
                if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
                  prHydrapeg = basket.productRequested;
                }
                break;
            }
          }
        });
        this.productRequestedNotch = prNotch;
        this.productRequestedDMV = prDMV;
        this.productRequestedHydraPEG = prHydrapeg;
        this.listBasketProductREquested = auxList;
        this.lenghtGroup = this.listBasketProductREquested.length;
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }

  findByGroupdId() {
    const eye = JSON.parse(JSON.stringify(this.productRequested.detail))[0].eye;
    this.orderProductRequestedService.allByGroupId$(this.productRequested.groupId, this.order.idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        const auxList = [];
        let prNotch;
        let prDMV;
        let prHydrapeg;
        _.each(res.data, function (basket) {
          const productId = basket.productRequested.product.idProduct;
          if (productId !== 145
                && productId !== 146
                && productId !== 147) {
            auxList.push(basket);
          } else {
              switch (productId) {
                case 145:
                  if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
                    prNotch = basket.productRequested;
                  }
                  break;
                case 146:
                  prDMV = basket.productRequested;
                  break;
                case 147:
                  if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
                    prHydrapeg = basket.productRequested;
                  }
                  break;
              }
          }
        });
        this.productRequestedNotch = prNotch;
        this.productRequestedDMV = prDMV;
        this.productRequestedHydraPEG = prHydrapeg;
        this.listBasketProductREquested = auxList;
        this.lenghtGroup = this.listBasketProductREquested.length;
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }

  close() {
    this.modalReference.close();
  }

  getProductsEuropa() {
    this.productService.findBySupplierInView$(2, true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.productsOriginal = res.data;
        this.productService.findBySupplierAndInViewAndCategory$(2, false, 10).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.productsCode = res1.data;
            this.productNotch = this.setProduct(res1.data, 'Notch');
            this.productDMV = this.setProduct(res1.data, 'DMV Insertion and Removal Set');
            this.productHydraPEG = this.setProduct(res1.data, 'HydraPEG');
          } else {
            console.log(res1.errors[0].detail);
          }
        }, error => {
          console.log('error', error);
        });
        this.setNameProduct();
        this.product = this.setProduct(res.data, this.productName);
        this.getProductView();
        this.setNameProductCode();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  setNameProduct() {
    if (_.includes(this.detail.name, 'Bitorico')) {
      this.productName = 'Europa Bi-Toric';
    } else if (_.includes(this.detail.name, 'SPH')
        || _.includes(this.productCode.name, 'Sphere')) {
      this.productName = 'Europa SPH';
    } else if (_.includes(this.detail.name, 'M.F')) {
      this.productName = 'Europa Multifocal';
    } else if (_.includes(this.detail.name, 'T.F')) {
      this.productName = 'Europa Front Toric';
    } else if (_.includes(this.detail.name, 'TPC')) {
      this.productName = 'Europa TPC';
    }
  }

  setNameProductCode() {
    if (_.includes(this.product.name, 'Bi-Toric')) {
      this.productName = 'Europa Bitoric';
    } else if (_.includes(this.product.name, 'SPH')) {
      this.productName = 'Europa Sphere';
    } else if (_.includes(this.product.name, 'Multifocal')
              || _.includes(this.product.name, 'Front Toric')
              || _.includes(this.product.name, 'TPC')) {
      this.productName = 'Europa FT, TPC,  MF';
    }
  }

  setProduct(list, name) {
    let prCode;
    _.each(list, function (pr) {
      if (_.includes(pr.name, name)) {
        prCode = pr;
      }
    });
    return prCode;
  }

  setCodeProductByDiameter(name, diameter) {
    let prCode;
    _.each(this.productsCode, function (pr) {
      if (_.includes(pr.name, name) && _.includes(pr.name, diameter)) {
        prCode = pr;
      }
    });

    return prCode;
  }

  getProductView() {
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.typeLens = JSON.parse(this.product.types)[0].typeLens;
    this.product.header = JSON.parse(this.product.types)[0].header;
    this.product.set = JSON.parse(this.product.types)[0].set;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.product.steps = JSON.parse(this.product.types)[0].pasos;
    this.product.pricesAditionalHidrapeg = JSON.parse(this.product.infoAditional)[0].values[0];
    this.product.pricesAditionalInserts = JSON.parse(this.product.infoAditional)[0].values[1];
    this.product.pricesAditionalNotch = JSON.parse(this.product.infoAditional)[0].values[2];
    // this.product.pricesAditionalThickness = JSON.parse(this.product.infoAditional)[0].values[3];
    //set type lens
    this.changeTypeLens(this.detail.typeLens);
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let header = this.product.header;
    let steps = this.product.steps;
    let sign;
    let signPowerTrial;
    let typeCurve;
    let typeCurveTrial;
    let set = this.product.set;
    let selectedNotch;
    let self = this;
     // header
    _.each(this.detail.header, function(item) {
      _.each(header, function(itemHeader) {
        if (itemHeader.name === item.name) {
          if (itemHeader.name === 'Hidrapeg' || itemHeader.name === 'Inserts (DMV)') {
            itemHeader.selected = item.selected === true ? 'Yes' : 'No';
          } else {
            itemHeader.selected = item.selected;
          }
        }
      });
    });

    // set
    _.each(this.detail.set, function(item) {
      _.each(set, function(itemSet) {
        if (itemSet.name === item.name) {
          if (!!item.selected) {
            if (itemSet.name === 'Power') {
              signPowerTrial = item.selected.slice( 0, 1);
              itemSet.selected = item.selected.slice(1, item.selected.length);
            } else if (itemSet.name === 'Base Curve') {
              let  pos = _.indexOf(item.selected, '(');
              if (pos > -1) {
                var itemSelected = String(item.selected);
                itemSet.selected = itemSelected.slice(0, pos-1);
                typeCurveTrial = itemSelected.slice( pos + 1, pos + 2);
              }
            } else {
              itemSet.selected = item.selected;
            }
          }
        }
      });
    });

    // parameters
    // let flag = this.flagThickness;
    let flagN = this.flagNotch;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (self.isPower(item)) {
            sign = item.selected.slice( 0, 1);
            productSelected.selected = item.selected.slice( 1, item.selected.length);
          } else if (productSelected.name === 'Base Curve') {
            let  pos = _.indexOf(item.selected, '(');
            var itemSelected = String(item.selected);
            productSelected.selected = itemSelected.slice(0, pos-1);
            typeCurve = itemSelected.slice( pos + 1, pos + 2);
          } else if (productSelected.name === 'Notch (mm)') {
              let  pos = _.indexOf(item.selected, 'x');
              var itemSelected = String(item.selected);
              productSelected.values[0].selected = parseFloat(itemSelected.slice(0, pos));
              let pos2 = _.indexOf(item.selected, '(');
              let pos3 = _.indexOf(item.selected, ')');
              if (pos2 > -1 && pos3 > -1) {
                productSelected.values[1].selected = parseFloat(itemSelected.slice(pos + 1, pos2 - 1));
                selectedNotch = itemSelected.slice(pos2 + 1, pos3);
              } else {
                productSelected.values[1].selected = parseFloat(itemSelected.slice(pos + 1));
              }
              // tslint:disable-next-line:radix
              if (parseFloat(productSelected.values[0].selected) !== 0 ||
                  parseFloat(productSelected.values[1].selected) !== 0 ) {
                    flagN = true; // ya trae el adicional por Notch en el precio
              }
          } else {
                productSelected.selected = item.selected;
              }
        }
     });
    });
      // pasos
      _.each(this.detail.pasos, function(item) {
        _.each(steps, function(itemStep) {
          if (itemStep.name === item.name) {
              // Nombre: PC1 PC2 PC3
              itemStep.selected = item.selected;
               // Por cada PC
              _.each(item.values, function(value) {
                _.each(itemStep.values, function(valueFijo) {
                  if (value.name === valueFijo.name) {
                    _.each(value.values, function(paso) {
                      _.each(valueFijo.values, function(pasoFijo) {
                        if (paso.name === pasoFijo.name) {
                          pasoFijo.selected = paso.selected;
                        }
                      });
                    });
                  }
                });
              });
          }
       });
      });
    this.signPower = sign;
    this.signPowerTrial = signPowerTrial;
    this.product.parameters = paramet;
    this.product.header =  header;
    this.product.steps = steps;
    this.product.set = set;
    // this.flagThickness = flag;
    this.flagNotch = flagN;
    this.product.set = set;
    this.typeCurve = typeCurve;
    this.typeCurveTrial = typeCurveTrial;
    this.selectedNotch = selectedNotch;
  }

  changeSelect(parameter, value, value2) {
    parameter.selected = value;
    if (parameter.name === 'Base Curve') {
      parameter.selected = this.format(value);
    }
    this.definePrice(this.membership);
    this.definePriceHidrapeg(this.membership);
    this.definePriceNotch(this.membership);
    // this.definePriceTickness(this.membership);
    this.definePriceInserts(this.membership);
    let valueInserts = 0;
    if (this.lenghtGroup === 2) {
      valueInserts = this.inserts / 2;
    } else {
      valueInserts = this.inserts;
    }
    this.valueInserts = valueInserts;
    if (parameter.name === 'Diameter (mm)') {
      this.checkAdditional();
      if (value === '17.0' ||
          value === '17.5' ||
          value === '18.0' ||
          value === '18.5' ||
          value === '19.0' ||
          value === '19.5' ||
          value === '20.0' ) {
        const prCode = this.setCodeProductByDiameter(this.productName, '(Dia. 17.0-20.0)');
        this.productCode = prCode;
        this.priceBase = this.priceB;
        this.price = this.inserts > 0 ? this.priceB + this.notch + this.hidrapeg + valueInserts : this.priceB + this.notch + this.hidrapeg;
      } else {
        const prCode = this.setCodeProductByDiameter(this.productName, '(Dia. 15.2-16.5)');
        this.productCode = prCode;
        this.priceBase = this.priceA;
        this.price = this.inserts > 0 ? this.priceA + this.notch + this.hidrapeg + valueInserts : this.priceA + this.notch + this.hidrapeg;
      }
    }
    if (parameter.name === 'Hidrapeg') {
      if (value === 'Yes') {
        this.additionalHidrapeg = true;
        this.price = this.price + this.hidrapeg;
      } else {
        this.additionalHidrapeg = false;
        this.price = this.price - this.hidrapeg;
      }
    }
    if (parameter.name === 'Inserts (DMV)') {
      this.changeInserts = true;
      if (value === 'Yes') {
        this.additionalInserts = true;
        this.price = this.price + valueInserts;
      } else {
        this.additionalInserts = false;
        this.price = this.price - valueInserts;
      }
    }
    /*if (parameter.name === 'Thickness') {
        if (parseFloat(value) === 0 || value === null) {
          if (this.flagThickness) {
            this.flagThickness = false;
            this.additionalThickness = false;
            this.price = this.price - this.thickness;
          }
        } else {
          if (!this.flagThickness) {
            this.additionalThickness = true;
            this.flagThickness = true;
            this.price = this.price + this.thickness;
          }
        }
    }*/
    if (parameter.name === 'Notch (mm)') {
      if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
        if (!this.flagNotch) {
          this.additionalNotch = true;
          this.flagNotch = true;
          this.price = this.price + this.notch;
        }
      } else if (parseFloat(value) === 0 && (value2 !== null) &&  parseFloat(value2) !== 0) {
        if (!this.flagNotch) {
          this.additionalNotch = true;
          this.flagNotch = true;
          this.price = this.price + this.notch;
        }
      } else {
        if (this.flagNotch) {
          this.additionalNotch = false;
          this.flagNotch = false;
          this.price = this.price - this.notch;
        }
      }
    }
  }

  save() {
    let self = this;
    this.spinner.show();
    // Header
    let header = this.product.header;
    _.each(this.detail.header, function(item) {
      _.each(header, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Hidrapeg' || productSelected.name === 'Inserts (DMV)') {
            item.selected = productSelected.selected === 'Yes' ? true : false;
          } else {
            item.selected = productSelected.selected;
          }
        }
     });
    });

    //set
    let set = this.product.set;
    let typeCurveTrial = this.typeCurveTrial;
    let signPowerTrial = this.signPowerTrial;

    _.each(this.detail.set, function(item) {
      _.each(set, function(itemSet) {
        if (itemSet.name === item.name) {
          if (itemSet.name === 'Diameter (mm)' && !itemSet.selected) {
            item.selected = '';
          }
          if (itemSet.name === 'Base Curve') {
            if (!!typeCurveTrial && !!itemSet.selected) {
              item.selected = itemSet.selected + ' (' + typeCurveTrial + ')';
            } else {
              item.selected = '';
            }
          } else if (itemSet.name === 'Power') {
            if (!!signPowerTrial && !!itemSet.selected) {
              item.selected = signPowerTrial + itemSet.selected;
            } else {
              item.selected = '';
            }
          } else {
            item.selected = itemSet.selected;
          }
        }
     });
    });

    // Parameters
    let paramet = this.product.parameters;
    let signPower = this.signPower;
    let typeCurve = this.typeCurve;
    let selectedNotch = this.selectedNotch;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Base Curve') {
            item.selected = productSelected.selected + ' (' + typeCurve + ')';
          } else if (self.isPower(item)) {
            item.selected = signPower + productSelected.selected;
          } else if (productSelected.name === 'Notch (mm)') {
            if (productSelected.values[0].selected === null || productSelected.values[1].selected === null || !selectedNotch || (productSelected.values[0].selected === 0 && productSelected.values[1].selected === 0)) {
              item.selected = '0x0';
            } else {
              item.selected = productSelected.values[0].selected + 'x' + productSelected.values[1].selected + ' (' + selectedNotch + ')';
            }
          } else {
            item.selected = productSelected.selected;
          }
        }
    });
    });
    // pasos
    let steps = this.product.steps;
    _.each(this.detail.pasos, function(item) {
      _.each(steps, function(itemStep) {
        if (itemStep.name === item.name) {
          // Nombre: PC1 PC2 PC3
          itemStep.selected = item.selected;
            // Por cada PC
          _.each(item.values, function(value) {
            _.each(itemStep.values, function(valueFijo) {
              if (value.name === valueFijo.name) {
                _.each(value.values, function(paso) {
                  _.each(valueFijo.values, function(pasoFijo) {
                    if (paso.name === pasoFijo.name) {
                      paso.selected = pasoFijo.selected;
                    }
                  });
                });
              }
            });
          });
        }
      });
    });
    // add products code
    this.definePriceHidrapeg(this.membership);
    this.definePriceNotch(this.membership);
    this.definePriceInserts(this.membership);
    const productsAditional = [];
    const productsRequestedsAditional = [];
    const productDMV = this.productDMV;
    const productHydraPEG = this.productHydraPEG;
    const productNotch = this.productNotch;
    const hidrapegPrice = this.hidrapeg;
    const notchPrice = this.notch;
    const dMVPrice = this.inserts;
    const groupId = this.productRequested.groupId;
    const detail = '[' + JSON.stringify({ name: this.detail.name, eye: this.detail.eye, typeLens: this.product.typeLens.selected,
      header: this.detail.header, parameters: this.detail.parameters,
      set: this.detail.set,
      pasos: this.detail.pasos}) + ']';

    // add products aditionals
    if (this.detail.header[1].selected === true) {
      const productH =  { id: productHydraPEG.idProduct,
        name: productHydraPEG.name,
        price: hidrapegPrice,
        codeSpectrum: productHydraPEG.codeSpectrum };
      if (this.productRequestedHydraPEG == undefined) {
        this.productRequestedHydraPEG = new ProductRequested();
      } else {
        this.productRequestedHydraPEG.idProductRequested = this.productRequestedHydraPEG.idProductRequested;
      }
      this.productRequestedHydraPEG.detail = detail;
      this.productRequestedHydraPEG.observations = this.observations;
      this.productRequestedHydraPEG.price = hidrapegPrice;
      this.productRequestedHydraPEG.quantity = 1;
      this.productRequestedHydraPEG.product = productHydraPEG.idProduct;
      this.productRequestedHydraPEG.patient = this.patient;
      this.productRequestedHydraPEG.delete = false;
      this.productRequestedHydraPEG.groupId = groupId;
      productsAditional.push(productH);
    } else if (this.productRequestedHydraPEG != undefined) {
      this.productRequestedHydraPEG.product = productHydraPEG.idProduct;
      this.productRequestedHydraPEG.delete = true;
    }

    if (this.detail.header[2].selected === true) {
      const productD = { id: productDMV.idProduct,
        name: 'Inserts (DMV)',
        price: dMVPrice,
        codeSpectrum: productDMV.codeSpectrum };
      if (this.productRequestedDMV == undefined) {
        this.productRequestedDMV = new ProductRequested();
      } else {
        this.productRequestedDMV.idProductRequested = this.productRequestedDMV.idProductRequested;
      }
      this.productRequestedDMV.detail = detail;
      this.productRequestedDMV.observations = this.observations;
      this.productRequestedDMV.price = dMVPrice;
      this.productRequestedDMV.quantity = 1;
      this.productRequestedDMV.product = this.productDMV.idProduct;
      this.productRequestedDMV.patient = this.patient;
      this.productRequestedDMV.delete = false;
      this.productRequestedDMV.groupId = groupId;
      if (this.lenghtGroup == 2) {
        const idPR = this.productRequested.idProductRequested;
        const contraryEye = this.listBasketProductREquested.find(function(o) {
            return o.productRequested.idProductRequested !== idPR;
          });
          const detailContrary = JSON.parse(contraryEye.productRequested.detail);
          _.each( detailContrary, function(item) {
            _.each(item.header, function(itemH, index) {
              if (itemH.name === 'Inserts (DMV)') {
                item.header[index].selected = true;
              }
            });
          });

          if (contraryEye != undefined) {
            this.productRequestedDMVContrary = contraryEye.productRequested;
            this.productRequestedDMVContrary.detail = '[' + JSON.stringify({ name: detailContrary[0].name, eye: detailContrary[0].eye,
              set: detailContrary[0].set, header: detailContrary[0].header, parameters: detailContrary[0].parameters,
              pasos: detailContrary[0].pasos, productsAditional: detailContrary[0].productsAditional }) + ']';
            this.productRequestedDMVContrary.observations = contraryEye.productRequested.observations;
            this.productRequestedDMVContrary.price = contraryEye.productRequested.price;
            this.productRequestedDMVContrary.quantity = 1;
            this.productRequestedDMVContrary.product = contraryEye.productRequested.product.idProduct;
            this.productRequestedDMVContrary.patient = contraryEye.productRequested.patient;
            this.productRequestedDMVContrary.delete = false;
            this.productRequestedDMVContrary.groupId = groupId;
          }
      }

      productsAditional.push(productD);
    } else if (this.detail.header[2].selected === false && this.lenghtGroup === 2) {
      if (this.productRequestedDMV != undefined ) {
        this.productRequestedDMV.idProductRequested = this.productRequestedDMV.idProductRequested;
        this.productRequestedDMV.product = this.productDMV.idProduct;
        const idPR = this.productRequested.idProductRequested;
        const contraryEye = this.listBasketProductREquested.find(function(o) {
          return o.productRequested.idProductRequested !== idPR;
        });
        const detailContrary = JSON.parse(contraryEye.productRequested.detail);
        _.each( detailContrary, function(item) {
          _.each(item.header, function(itemH, index) {
            if (itemH.name === 'Inserts (DMV)' && itemH.selected == true) {
              item.header[index].selected = false;
            }
          });
        });
        this.productRequestedDMV.delete = true;

        this.productRequestedDMVContrary = contraryEye.productRequested;
        this.productRequestedDMVContrary.detail = '[' + JSON.stringify({ name: detailContrary[0].name, eye: detailContrary[0].eye,
          set: detailContrary[0].set, header: detailContrary[0].header, parameters: detailContrary[0].parameters,
          pasos: detailContrary[0].pasos, productsAditional: detailContrary[0].productsAditional }) + ']';

        this.productRequestedDMVContrary.observations = contraryEye.productRequested.observations;
        this.productRequestedDMVContrary.price = contraryEye.productRequested.price;
        this.productRequestedDMVContrary.quantity = 1;
        this.productRequestedDMVContrary.product = contraryEye.productRequested.product.idProduct;
        this.productRequestedDMVContrary.patient = contraryEye.productRequested.patient;
        this.productRequestedDMVContrary.delete = false;
        this.productRequestedDMVContrary.groupId = groupId;
      }
    } else {
      if (this.productRequestedDMV != undefined ) {
        this.productRequestedDMV.idProductRequested = this.productRequestedDMV.idProductRequested;
        this.productRequestedDMV.product = this.productDMV.idProduct;
        this.productRequestedDMV.delete = true;
      }
    }

    /*params*/
    const prNotch: ProductRequested = new ProductRequested();
    const pRNotch = this.productRequestedNotch;
    const patient = this.patient;
    const flagNotch = this.additionalNotch;
    const obs = this.observations;
    _.each(this.detail.parameters, function(parameter) {
      if (parameter.name === 'Notch (mm)' && parameter.selected !== '0x0' && parameter.selected !== '0x0 (undefined)' && parameter.selected !== '0x0 (Upper Temporal)' &&
          parameter.selected !== '0x0 (Lower Temporal)' && parameter.selected !== '0x0 (Upper Nasal)' && parameter.selected !== '0x0 (Lower Nasal)') {
        const productN =  { id: productNotch.idProduct,
          name: productNotch.name,
          price: notchPrice,
          codeSpectrum: productNotch.codeSpectrum };
        prNotch.detail = detail;
        prNotch.observations = obs;
        prNotch.price = notchPrice;
        prNotch.quantity = 1;
        prNotch.product = productNotch.idProduct;
        prNotch.patient = patient;
        prNotch.delete = false;
        prNotch.groupId = groupId;
        if (pRNotch !== undefined && pRNotch.idProductRequested != null) {
          prNotch.idProductRequested = pRNotch.idProductRequested;
        }
        productsAditional.push(productN);
      } else if (parameter.name === 'Notch (mm)' && (parameter.selected === '0x0' || parameter.selected === '0x0 (undefined)' || parameter.selected === '0x0 (Upper Temporal)' ||
                 parameter.selected === '0x0 (Lower Temporal)' || parameter.selected === '0x0 (Upper Nasal)' || parameter.selected === '0x0 (Lower Nasal)')) {
        if (pRNotch != undefined) {
          prNotch.idProductRequested = pRNotch.idProductRequested;
          prNotch.product = productNotch.idProduct;
          prNotch.delete = true;
        }
      }
    });
    this.productRequestedNotch = prNotch;

    if (this.productRequestedHydraPEG != undefined) {
      if (this.typeEdit === 1) {
        this.productRequestedHydraPEG.basketId = this.basket.basket.idBasket;
      } else {
        this.productRequestedHydraPEG.orderId = this.order.idOrder;
      }
      productsRequestedsAditional.push(this.productRequestedHydraPEG);
    }
    if (this.productRequestedDMV != undefined) {
      if (this.typeEdit === 1) {
        this.productRequestedDMV.basketId = this.basket.basket.idBasket;
      } else {
        this.productRequestedDMV.orderId = this.order.idOrder;
      }
      productsRequestedsAditional.push(this.productRequestedDMV);
    }
    if (this.productRequestedNotch != undefined && this.productRequestedNotch.product != undefined) {
      if (this.typeEdit === 1) {
        this.productRequestedNotch.basketId = this.basket.basket.idBasket;
      } else {
        this.productRequestedNotch.orderId = this.order.idOrder;
      }
      productsRequestedsAditional.push(this.productRequestedNotch);
    }

    if (this.productRequestedDMVContrary != undefined) {
      productsRequestedsAditional.push(this.productRequestedDMVContrary);
    }
    this.definePrice(this.membership);
    this.updatePriceBase(this.detail.parameters);

    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: this.detail.name, eye: this.detail.eye, typeLens: this.product.typeLens.selected,
                                      set: this.detail.set, header: this.detail.header, parameters: this.detail.parameters,
                                      pasos: this.detail.pasos, productsAditional: productsAditional }) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.priceBase;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.productCode.idProduct;
      this.productRequested.patient = this.patient;
      this.productRequested.delete = false;
      this.productRequested.basketId = this.basket.basket.idBasket;
      productsRequestedsAditional.push(this.productRequested);
      this.update(productsRequestedsAditional);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.productRequested.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: this.detail.name, eye: this.detail.eye, typeLens: this.product.typeLens.selected,
                                        set: this.detail.set, header: this.detail.header, parameters: this.detail.parameters,
                                        pasos: this.detail.pasos, productsAditional: productsAditional}) + ']';
      this.productRequestedAux.observations = this.observations;
      this.productRequestedAux.price = this.priceBase;
      this.productRequestedAux.quantity = this.quantity;
      this.productRequestedAux.product = this.productCode.idProduct;
      this.productRequestedAux.patient = this.patient;
      this.productRequestedAux.delete = false;
      this.productRequestedAux.orderId = this.order.idOrder;
      productsRequestedsAditional.push(this.productRequestedAux);
      this.update(productsRequestedsAditional);
    }

  }

  updatePriceBase(parameters) {
    const priceA = this.priceA;
    const priceB = this.priceB;
    let priceBase;
    _.each(parameters, function(parameter) {
      if (parameter.name === 'Diameter (mm)') {
        if (parameter.selected === '17.0' ||
            parameter.selected === '17.5' ||
            parameter.selected === '18.0' ||
            parameter.selected === '18.5' ||
            parameter.selected === '19.0' ||
            parameter.selected === '19.5' ||
            parameter.selected === '20.0' ) {
          priceBase = priceB;
        } else {
          priceBase = priceA;
        }
      }
    });

    this.priceBase = priceBase;
  }

  formIsValid() {
    let valido = true;
    let paramet = this.product.parameters;
    let header = this.product.header;
    let selectedNotch = this.selectedNotch;
      _.each(paramet, function(productSelected) {
        if (productSelected.name === 'Notch (mm)') {
          if (productSelected.values[0].selected === null || productSelected.values[1].selected === null ) {
            valido = false;
          }

          if ((productSelected.values[0].selected !== 0 || productSelected.values[1].selected !== 0) && !selectedNotch) {
            valido = false;
          }
        } else if (productSelected.name === "Axes (º)") {
          if (!!selectedNotch &&  (productSelected.selected === null || productSelected.selected === undefined)) {
            valido = false;
          }
        } else if (productSelected.selected === null || productSelected.selected === undefined) {
           valido = false;
        }
     });
     _.each(header, function(productSelected) {
        if (productSelected.selected === null || productSelected.selected === undefined) {
          valido = false;
        }
     });
     if (this.quantity === null  || this.price === null || (this.patient === null || this.patient === '')) {
          valido = false;
     }
     return valido;
  }

  format(value): any {
    let flat;
    let partInt;
    let partDec;
    let pos;
    let toString;
    if (value !== null) {
      toString = value.toString();
      if (_.includes(toString, '.')) {
        pos = _.indexOf(toString, '.');
        partInt = toString.slice( 0, pos);
        if (partInt <= 99) {
          partDec = toString.slice( pos + 1, toString.length);
          flat = this.completeStart(partInt, 2) + '.' + this.completeEnd(partDec, 2);
        } else {
           flat = null;
        }
      } else {
          if (value <= 99) {
            flat = this.completeStart(value, 2) + '.00';
          } else {
            flat = null;
          }
      }
      return flat;
    }
  }

  completeStart(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padStart(filteredId, tamano, '0');
    return filteredId;

  }

  completeEnd(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padEnd(filteredId, tamano, '0');
    return filteredId;

  }

  setChecked(value, PC) {
    _.each(PC.values, function(step) {
      _.each(step.values, function(item) {
        item.selected = false;
      });
    });
    value.selected = !value.selected;
  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.priceA = this.product.price1;
        this.priceB = this.product.priced1;
        break;
      case 2:
        this.priceA = this.product.price2;
         this.priceB = this.product.priced2;
        break;
      case 3:
        this.priceA = this.product.price3;
        this.priceB = this.product.priced3;
        break;
    }
  }

  definePriceHidrapeg(membership) {
    switch (membership) {
      case 1:
        this.hidrapeg = this.product.pricesAditionalHidrapeg.values[0].price;
        break;
      case 2:
        this.hidrapeg = this.product.pricesAditionalHidrapeg.values[1].price;
        break;
      case 3:
        this.hidrapeg = this.product.pricesAditionalHidrapeg.values[2].price;
        break;
    }
  }

  definePriceInserts(membership) {
    switch (membership) {
      case 1:
        this.inserts = this.product.pricesAditionalInserts.values[0].price;
        break;
      case 2:
        this.inserts = this.product.pricesAditionalInserts.values[1].price;
        break;
      case 3:
        this.inserts = this.product.pricesAditionalInserts.values[2].price;
        break;
    }
  }

  definePriceNotch(membership) {
    switch (membership) {
      case 1:
        this.notch = this.product.pricesAditionalNotch.values[0].price;
        break;
      case 2:
        this.notch = this.product.pricesAditionalNotch.values[1].price;
        break;
      case 3:
        this.notch = this.product.pricesAditionalNotch.values[2].price;
        break;
    }
  }

  /*definePriceTickness(membership) {
    switch (membership) {
      case 1:
        this.thickness = this.product.pricesAditionalThickness.values[0].price;
        break;
      case 2:
        this.thickness = this.product.pricesAditionalThickness.values[1].price;
        break;
      case 3:
        this.thickness = this.product.pricesAditionalThickness.values[2].price;
        break;
    }
  }*/

  checkAdditional() {
    let header = this.product.header;
    let paramet = this.product.parameters;
    let notch = this.notch;
    let inserts = this.inserts;
    let hidrapeg = this.hidrapeg;
    // let thickness = this.thickness;
       // header
        _.each(header, function(itemHeader) {
            if (itemHeader.name === 'Hidrapeg') {
                if (itemHeader.selected === 'No') {
                  hidrapeg = 0;
                }
            }
            if (itemHeader.name === 'Inserts (DMV)') {
              if (itemHeader.selected === 'No') {
                  inserts = 0;
              }
            }
         });
       // parameters
         _.each(paramet, function(productSelected) {
             if (productSelected.name === 'Notch (mm)') {
                if (parseFloat(productSelected.values[0].selected) === 0 &&
                parseFloat(productSelected.values[1].selected) === 0 ) {
                  notch = 0; // No se ha el adicional por Notch en el precio
               }
             }
             /*if (productSelected.name === 'Thickness') {
                 // tslint:disable-next-line:radix
                 if (parseFloat(productSelected.selected ) === 0 ) {
                  thickness = 0;
                 }
             }*/
        });
    this.notch = notch;
    this.inserts = inserts;
    this.hidrapeg = hidrapeg;
    // this.thickness = thickness;

  }

  update(productRequested) {
    let self = this;
    this.productRequestedService.updateList$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        let listAux = res.data;
        const principal = listAux.filter((item) => {
          return ((item.product.idProduct != 145 &&  item.product.idProduct != 146
            && item.product.idProduct != 147));
        });
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        productRequested = principal[0];
        productRequested.detail = JSON.parse(productRequested.detail);
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
        this.spinner.hide();
        this.modalReference.close(self.listAux);
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
      this.modalReference.close(self.listAux);
    });
  }

  updateEuropa(productRequested) {
    let self = this;
    let detail;
    let oldInserts;
    let basket;
    let productRequestedAux;
    let idProductRequested;
    let price;
    let productRequested1 = new ProductRequested();
    //Se obtiene el otro ojo asociado al group_id
    if (this.typeEdit === 1) { // Basket
        basket = _.find(self.listBasketProductREquested, function(o) {
          return o.productRequested.idProductRequested !== productRequested.idProductRequested;
        });
        idProductRequested = basket.productRequested.idProductRequested;
        detail = JSON.parse(basket.productRequested.detail);
        price = basket.productRequested.price;
    } else { // Orden
        productRequestedAux = _.find(self.listBasketProductREquested, function(o) {
          return o.productRequested.idProductRequested !== productRequested.idProductRequested;
        });
        idProductRequested = productRequestedAux.productRequested.idProductRequested;
        detail = JSON.parse(productRequestedAux.productRequested.detail);
        price = productRequestedAux.productRequested.price;
    }
    productRequested1.idProductRequested = idProductRequested;
    //Cambio en header del detalle
    _.each( detail, function(item) {
      _.each(item.header, function(itemH, index) {
        if (itemH.name === 'Inserts (DMV)') {
          oldInserts = item.header[index].selected;
          item.header[index].selected = self.additionalInserts;
        }
      });
    });
    productRequested1.detail = JSON.stringify(detail);
    //Cambio de precio
    /*if (oldInserts !== self.additionalInserts) {
      if (self.additionalInserts === true) {
        productRequested1.price = price + self.valueInserts;
     } else {
        productRequested1.price = price - self.valueInserts;
     }
    } else {*/
       productRequested1.price = self.priceBase;
    //}
    //Modificacion
    self.productRequestedService.updatePriceEuropa$(productRequested1).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res2: string) => {
          this.notification.success('', res2);
        });
        productRequested = res1.data;
        productRequested.detail = JSON.parse(productRequested.detail);
        this.modalReference.close(productRequested);
      }
  });
  }

  disabledOption(item) {
    return item === "For other diameters, please contact us";
  }

  changeNotchTime(value, parameter) {
    //validating change in notch time
    var changedNotch = this.selectedNotch !== value;

    this.selectedNotch = value;

    this.notchTime.itemsList._items[0].label = value;
    this.notchTime.itemsList._items[0].value = value;

     // restart axes after change
     if (changedNotch) {
      this.axesSelected = _.find(this.product.parameters, { name: 'Axes (º)' });
      this.axesSelected.selected = null
    }

    //set null in values notch
    if (parameter.values[0].selected === 0)
      parameter.values[0].selected = null;

    if (parameter.values[1].selected === 0)
      parameter.values[1].selected = null;
  }

  validateSelectedNotch(parameter) {
    if (this.selectedNotch === null) {
      parameter.values[0].selected = 0;
      parameter.values[1].selected = 0;
      this.axesSelected.selected = null
    }
  }

  axesValues() {
    this.axesSelected = _.find(this.product.parameters, { name: 'Axes (º)' });
    if (this.selectedNotch === null) { this.axesSelected.selected = null };
    switch (this.selectedNotch) {
      case 'Upper Temporal':
        return _.range(90, 181).toString().split(",")
      case 'Lower Temporal':
        return _.range(180, 271).toString().split(",");
      case 'Upper Nasal':
        return _.range(0, 91).toString().split(",");
      case 'Lower Nasal':
        return _.range(270, 361).toString().split(",");
      default:
        return [];
    }
  }

  isPower(param) {
    return param.name === 'Power' || param.name === 'Over-Refaction' || param.name === 'Final Power';
  }

  changeTypeLens(value) {
    this.product.typeLens.selected = value;
    let power = _.find(this.product.parameters, function (param){ return param.name === 'Power' || param.name === 'Over-Refaction' || param.name === 'Final Power'});
    let powerDetail = _.find(this.detail.parameters, function (param){ return param.name === 'Power' || param.name === 'Over-Refaction' || param.name === 'Final Power'});
    switch (value) {
      case 'Please design my lens':
        this.setPower(power, powerDetail, 'Over-Refaction')
        this.resetTrialLens();
        break;
      case 'Final Lens':
        this.setPower(power, powerDetail, 'Final Power')
      break;
    }
  }

  resetTrialLens() {
    _.each(this.product.set, function (param) { param.selected = null });
    this.signPowerTrial = null;
    this.typeCurveTrial = null;
  }

  setPower(power, powerDetail, value) {
    power.name = value;
    power.sel = null;
    power.selected = null;
    this.signPower = null;

    powerDetail.name = value;
  }
}
