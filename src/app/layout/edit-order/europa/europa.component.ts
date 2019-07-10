import { Component, OnInit } from '@angular/core';
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
  editPrice = false;
  user: any;
  patient: any;
  membership: any;
  signPower: any;
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
      this.membership = this.userOrder.membership.idMembership;
      this.findByGroupdId();
    }
    this.detail = this.productRequested.detail[0];
    this.productCode = this.productRequested.product;
    this.getProductsEuropa();

    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }
  }

  findBasketByGroupdId() {
    this.basketProductRequestedService.allBasketByGroupId$(this.productRequested.groupId).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        const auxList = [];
        _.each(res.data, function (basket) {
          const productId = basket.productRequested.product.idProduct;
          if (productId !== 145
                && productId !== 146
                && productId !== 147) {
            auxList.push(basket);
          }
        });
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
    this.orderProductRequestedService.allByGroupId$(this.productRequested.groupId, this.order.idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        const auxList = [];
        _.each(res.data, function (basket) {
          const productId = basket.productRequested.product.idProduct;
          if (productId !== 145
                && productId !== 146
                && productId !== 147) {
            auxList.push(basket);
          }
        });
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

  setProduct(list, name) {
    let prCode;
    _.each(list, function (pr) {
      if (_.includes(pr.name, name)) {
        prCode = pr;
      }
    });
    return prCode;
  }

  getProductView() {
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.header = JSON.parse(this.product.types)[0].header;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.product.steps = JSON.parse(this.product.types)[0].pasos;
    this.product.pricesAditionalHidrapeg = JSON.parse(this.product.infoAditional)[0].values[0];
    this.product.pricesAditionalInserts = JSON.parse(this.product.infoAditional)[0].values[1];
    this.product.pricesAditionalNotch = JSON.parse(this.product.infoAditional)[0].values[2];
    // this.product.pricesAditionalThickness = JSON.parse(this.product.infoAditional)[0].values[3];
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let paramet = this.product.parameters;
    let header = this.product.header;
    let steps = this.product.steps;
    let sign;
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
    // parameters
   // let flag = this.flagThickness;
    let flagN = this.flagNotch;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Power') {
            sign = item.selected.slice( 0, 1);
            productSelected.selected = item.selected.slice( 1, item.selected.length);
          } else if (productSelected.name === 'Notch (mm)') {
              let  pos = _.indexOf(item.selected, 'x');
              var itemSelected = String(item.selected);
              productSelected.values[0].selected = itemSelected.slice( 0, pos);
              productSelected.values[1].selected = itemSelected.slice( pos + 1, itemSelected.length);
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
    this.product.parameters = paramet;
    this.product.header =  header;
    this.product.steps = steps;
    // this.flagThickness = flag;
    this.flagNotch = flagN;
  }

  changeSelect(parameter, value, value2) {
    parameter.selected = value;
    if (parameter.name === 'Base Curve (d)' ) {
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
         if (value === '18.0' || value === '20.0' ) {
           this.price = this.priceB + this.notch + this.thickness + this.hidrapeg + valueInserts;
         } else {
           this.price = this.priceA + this.notch + this.thickness + this.hidrapeg + valueInserts;
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
    // Parameters
    let paramet = this.product.parameters;
    let signPower = this.signPower;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Power') {
            item.selected = signPower + productSelected.selected;
          } else  if (productSelected.name === 'Notch (mm)') {
              if (productSelected.values[0].selected === null || productSelected.values[1].selected === null) {
                item.selected = '';
              } else {
                item.selected = productSelected.values[0].selected + 'x' + productSelected.values[1].selected;
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
    const productsAditional = [];
    const productDMV = this.productDMV;
    const productHydraPEG = this.productHydraPEG;
    const productNotch = this.productNotch;
    const hidrapegPrice = this.hidrapeg;
    const notchPrice = this.notch;

    // add products aditionals
    if (this.detail.header[1].selected === true) {
      const productH =  { id: productHydraPEG.idProduct,
        name: productHydraPEG.name,
        price: hidrapegPrice,
        codeSpectrum: productHydraPEG.codeSpectrum };
      productsAditional.push(productH);
    }

    /*params*/
    _.each(this.detail.parameters, function(parameter) {
      if (parameter.name === 'Notch (mm)' && parameter.selected !== '0x0') {
        const productN =  { id: productNotch.idProduct,
          name: productNotch.name,
          price: notchPrice,
          codeSpectrum: productNotch.codeSpectrum };
        productsAditional.push(productN);
      }
    });

    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
      this.productRequested.detail = '[' + JSON.stringify({ name: this.detail.name, eye: this.detail.eye,
      header: this.detail.header, parameters: this.detail.parameters,
      pasos: this.detail.pasos, productsAditional: productsAditional }) + ']';
      this.productRequested.observations = this.observations;
      this.productRequested.price = this.price;
      this.productRequested.quantity = this.quantity;
      this.productRequested.product = this.productCode.idProduct;
      this.productRequested.patient = this.patient;
      this.update(this.productRequested);
    } else { // Order Detail
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
      this.productRequestedAux.detail = '[' + JSON.stringify({ name: this.detail.name, eye: this.detail.eye,
      header: this.detail.header, parameters: this.detail.parameters,
      pasos: this.detail.pasos, productsAditional: productsAditional}) + ']';
      this.productRequestedAux.observations = this.observations;
      this.productRequestedAux.price = this.price;
      this.productRequestedAux.quantity = this.quantity;
      this.productRequestedAux.product = this.productCode.idProduct;
      this.productRequestedAux.patient = this.patient;
      this.update(this.productRequestedAux);
    }

  }

  formIsValid() {
    let valido = true;
    let paramet = this.product.parameters;
    let header = this.product.header;
      _.each(paramet, function(productSelected) {
        if (productSelected.name === 'Notch (mm)') {
          if (productSelected.values[0].selected === null || productSelected.values[1].selected === null) {
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
    let lenghtGroup = this.lenghtGroup;
    let self = this;
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        if (lenghtGroup === 2 && self.changeInserts) {
           self.updateEuropa(res.data);
        } else {
          this.spinner.hide();
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
          productRequested = res.data;
          productRequested.detail = JSON.parse(productRequested.detail);
          this.modalReference.close(productRequested);
        }
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
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
    if (oldInserts !== self.additionalInserts) {
      if (self.additionalInserts === true) {
        productRequested1.price = price + self.valueInserts;
     } else {
        productRequested1.price = price - self.valueInserts;
     }
    } else {
       productRequested1.price = price;
    }
    //Modificacion
    self.productRequestedService.updatePriceEuropa$(productRequested1).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res2: string) => {
          this.notification.success('', res2);
        });
        productRequested = res1.data;
        productRequested.detail = JSON.parse(productRequested.detail);
        res1.data.detail = JSON.parse(res1.data.detail);
        self.listAux.push(productRequested);
        self.listAux.push(res1.data);
        this.modalReference.close(self.listAux);
      }
  });
  }
}
