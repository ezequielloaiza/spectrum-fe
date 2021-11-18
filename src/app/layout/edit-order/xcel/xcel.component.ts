import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { OrderProductRequestedService, ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../../../shared/services/products/product.service';
import { Product } from '../../../shared/models/product';
import { BasketproductrequestedService } from '../../../shared/services/basketproductrequested/basketproductrequested.service';
import { DetailBlueLightComponent } from '../../basket/modals/detail-product/detail-blue-light/detail-blue-light.component';

@Component({
  selector: 'app-xcel',
  templateUrl: './xcel.component.html',
  styleUrls: ['./xcel.component.scss']
})
export class XcelComponent implements OnInit {

  basket: any;productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  productModel: Product = new Product();
  productsAdditional: any;
  product: any;
  detail: any;
  detailEdit: any;
  typeEdit: any;
  quantity: any;
  observations: any;
  price: any;
  editPrice = false;
  user: any;
  patient: any;
  order: any;

  header: any;
  parameters: any;
  designPR: any;
  membership: any;
  showHydrapeg = false;
  showDmv = false;
  productHeader: any;
  productParams: any;
  hydrapegV: any;
  hydrapegSelection: any;
  presentation: any;
  paramsToShow: any;
  paramsToSave = [];

  /* Notch */
  @ViewChild('notchTime') notchTime;
  selectedNotch: any;
  axisSelected: any;

  // Values of product
  typeLens: any;
  design: any;
  materials: any;
  hydrapeg: any;

  // Products prices additionals
  priceNotch: any;
  priceHydrapeg: any;
  priceDMV: any;
  productRequestedNotch: any;
  productRequestedHydrapeg: any;
  productRequestedDMV: any;

  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productRequestedService: ProductsRequestedService,
              private productService: ProductService,
              private userService: UserStorageService,
              private basketProductRequestedService: BasketproductrequestedService,
              private orderProductRequestedService: OrderProductRequestedService,
              private spinner: NgxSpinnerService) {
                this.user = JSON.parse(userService.getCurrentUser());
              }

  ngOnInit() {
    if (this.typeEdit === 1 ) { // Basket
      this.productRequested = this.basket.productRequested;
    } else { // order-detail
      this.productRequested = this.detailEdit;
    }
    this.observations = this.productRequested.observations;
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
    this.showHydrapeg = this.product.name.includes('Atlantis');
    this.showDmv = this.product.name.includes('Atlantis');


    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }

    if (this.typeEdit === 1 ) { // Basket
      this.membership = this.basket.basket.user.membership.idMembership;
    } else { // Order detail
      this.membership = this.order.user.membership.idMembership;
    }

    this.productHeader = JSON.parse(this.product.types)[0].header || [];
    this.productParams = JSON.parse(this.product.types)[0].parameters;
    this.getProductView();
    this.setFullPrice();
  }

  close() {
    this.modalReference.close();
  }

  getProductView() {

    this.price = this.productRequested.price;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.patient = this.productRequested.patient;
    let self = this;

    if (this.showDmv) {
      this.productHeader[0].selected = this.detail.insertor.selected;
      this.productHeader[0].price = this.detail.insertor.price
    }

    _.each(this.productParams, function (parameter, i) {
      _.each(self.detail.header, function (param, j) {
        if (parameter.name === param.name) {
          self.productParams[i].selected = self.detail.header[j].selected;
        }
      })
    });

    _.each(this.productParams, function (parameter, i) {
      _.each(self.detail.parameters, function (param, j) {
        if (parameter.name === param.name) {
          self.productParams[i].selected = self.detail.parameters[j].selected;
          if (param.name === 'Hydrapeg') {
            self.checkHydrapeg(param, 1);
          }
          if (parameter.name === 'Design') {
            self.designPR = param.selected;
          } else if (parameter.name === 'Presentation') {
            self.presentation = param.selected;
          }
        }
      })
      if (parameter.name === 'Hydrapeg') {
        self.checkHydrapeg(parameter, 0);
      }
    });

    _.each(this.detail.header, function (param) {
      if (param.name === 'Design') {
        self.designPR = param.selected;
        self.changeParams(param,self.designPR)
      }
    });
  }

  checkHydrapeg(parameter, value) {
    if (value) {
      this.hydrapegV = parameter;
      this.hydrapegV['price'] = this.detail.hydrapeg.price;
    } else {
      this.hydrapegV = parameter;
      this.hydrapegV['price'] = this.detail.hydrapeg.price;
    }
  }

  changeDMV(value) {
    this.productHeader[0].selected = value;
    this.setFullPrice();
  }

  findBasketByGroupdId() {
    this.basketProductRequestedService.allBasketByGroupId$(this.productRequested.groupId).subscribe(res => {
      this.setProductsByGroup(res);
    }, error => {
      console.log('error', error);
    });
  }

  findOrderByGroupdId() {
    this.orderProductRequestedService.allByGroupId$(this.productRequested.groupId, this.order.idOrder).subscribe(res => {
      this.setProductsByGroup(res);
    }, error => {
      console.log('error', error);
    });
  }

  setProductsByGroup(res) {
    const eye = JSON.parse(JSON.stringify(this.productRequested.detail))[0].eye;

    if (res.code === CodeHttp.ok) {
      let prNotch;
      let prHydrapeg;
      let prDMV;
      _.each(res.data, function (basket) {
        const productId = basket.productRequested.product.idProduct;
        switch (productId) {
          case 305:
            if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
              prHydrapeg = basket.productRequested;
            }
            break;

          case 306:
            if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
              prNotch = basket.productRequested;
            }
            break;
          case 307:
            if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
              prDMV = basket.productRequested;
            }
            break;
        }
      });
      this.productRequestedDMV = prDMV;
      this.productRequestedNotch = prNotch;
      this.productRequestedHydrapeg = prHydrapeg;
    }
  }

  setFullPrice() {
    this.priceSaleTotal(); //by design
    this.price += this.getAdditionalPrices().dmv;
    this.price += this.getAdditionalPrices().hydrapeg;
  }

  getAdditionalPrices() {
    let dmv = 0;
    let notchPrice = 0;
    let hydrapegPrice = 0;

    // Finding DMV
    if (this.showDmv) {
      if (this.productHeader[0].selected === 'Yes') {
        dmv = this.detail.insertor.price;
      }
    }
    if (this.showHydrapeg) {
      // Finding Hydrapeg
      if (this.hydrapegV.selected === 'Yes') {
        hydrapegPrice = this.detail.hydrapeg.price;
      }
    }

    return { dmv, hydrapeg: hydrapegPrice };
  }

  priceSaleTotal() {
    const self = this;
    let price = 0;

    if (this.product.name.includes('Atlantis')) {
      switch (this.designPR) {
        case 'Atlantis SPH':
          this.detail.codeSpectrum = '122A';
          switch (this.membership) {
            case 1://Gold
              price = 95;
              break;
            case 2://Diamond
              price = 95;
              break;
            case 3://Preffered
              price = 95;
              break;
          }
        break;
        case 'Atlantis TPC':
          this.detail.codeSpectrum = '126A';
          switch (this.membership) {
            case 1://Gold
              price = 140;
              break;
            case 2://Diamond
              price = 140;
              break;
            case 3://Preffered
              price = 140;
              break;
          }
        break;
        case 'Atlantis FT':
          this.detail.codeSpectrum = '125A';
          switch (this.membership) {
            case 1://Gold
              price = 140;
              break;
            case 2://Diamond
              price = 140;
              break;
            case 3://Preffered
              price = 140;
              break;
          }
        break;
        case 'Atlantis 3D':
          this.detail.codeSpectrum = '124A';
          switch (this.membership) {
            case 1://Gold
              price = 140;
              break;
            case 2://Diamond
              price = 140;
              break;
            case 3://Preffered
              price = 140;
              break;
          }
        break;
        case 'Atlantis MF':
          this.detail.codeSpectrum = '125A';
          switch (this.membership) {
            case 1://Gold
              price = 140;
              break;
            case 2://Diamond
              price = 140;
              break;
            case 3://Preffered
              price = 140;
              break;
          }
        break;
        case 'Atlantis 2.0':
          this.detail.codeSpectrum = '127A';
          switch (this.membership) {
            case 1://Gold
              price = 140;
              break;
            case 2://Diamond
              price = 140;
              break;
            case 3://Preffered
              price = 140;
              break;
          }
        break;
        case 'Atlantis LD':
          this.detail.codeSpectrum = '123A';
          switch (this.membership) {
            case 1://Gold
              price = 140;
              break;
            case 2://Diamond
              price = 140;
              break;
            case 3://Preffered
              price = 140;
              break;
          }
        break;
      }
    } else if (this.product.name.includes('RGP')) {
      switch (this.designPR) {
        case 'Apex':
          this.detail.codeSpectrum = '130A';
          switch (this.membership) {
            case 1://Gold
              price = 65;
              break;
            case 2://Diamond
              price = 65;
              break;
            case 3://Preffered
              price = 65;
          break;
          }
          break;
          case 'Bitoric':
            this.detail.codeSpectrum = '129A';
            switch (this.membership) {
              case 1://Gold
                price = 32;
                break;
              case 2://Diamond
                price = 32;
                break;
              case 3://Preffered
                price = 32;
                break;
            }
          break;
          case 'CV-4 Multifocal':
            this.detail.codeSpectrum = '133A';
            switch (this.membership) {
              case 1://Gold
                price = 66;
                break;
              case 2://Diamond
                price = 66;
                break;
              case 3://Preffered
                price = 66;
                break;
            }
          break;
          case 'Pinnacle':
            this.detail.codeSpectrum = '118A';
            switch (this.membership) {
              case 1://Gold
                price = 21;
                break;
              case 2://Diamond
                price = 21;
                break;
              case 3://Preffered
                price = 21;
                break;
            }
          break;
          case 'Pinnacle IC':
            this.detail.codeSpectrum = '120A';
            switch (this.membership) {
              case 1://Gold
                price = 55;
                break;
              case 2://Diamond
                price = 55;
                break;
              case 3://Preffered
                price = 55;
                break;
            }
          break;
          case 'Pinnacle LD':
            this.detail.codeSpectrum = '119A';
            switch (this.membership) {
              case 1://Gold
                price = 31;
                break;
              case 2://Diamond
                price = 31;
                break;
              case 3://Preffered
                price = 31;
                break;
            }
          break;
          case 'Proplus':
            this.detail.codeSpectrum = '131A';
            switch (this.membership) {
              case 1://Gold
                price = 47;
                break;
              case 2://Diamond
                price = 47;
                break;
              case 3://Preffered
                price = 47;
                break;
            }
          break;
          case 'Sphere':
            this.detail.codeSpectrum = '114A';
            switch (this.membership) {
              case 1://Gold
                price = 21;
                break;
              case 2://Diamond
                price = 21;
                break;
              case 3://Preffered
                price = 21;
                break;
            }
          break;
          case 'Starlens':
            this.detail.codeSpectrum = '116A';
            switch (this.membership) {
              case 1://Gold
                price = 21;
                break;
              case 2://Diamond
                price = 21;
                break;
              case 3://Preffered
                price = 21;
                break;
            }
          break;
          case 'Titan':
            this.detail.codeSpectrum = '121A';
            switch (this.membership) {
              case 1://Gold
                price = 65;
                break;
              case 2://Diamond
                price = 65;
                break;
              case 3://Preffered
                price = 65;
                break;
            }
          break;
          case 'X-Cel Thin':
            this.detail.codeSpectrum = '117A';
            switch (this.membership) {
              case 1://Gold
                price = 21;
                break;
              case 2://Diamond
                price = 21;
                break;
              case 3://Preffered
                price = 21;
                break;
            }
          break;
      }

    } else if (this.product.name.includes('Custom Soft')) {
        switch (this.designPR) {
          case 'Adult Aphakic':
          case 'Pediatric Aphakic':
            switch (this.presentation) {
              case 'Single (Vial)':
                this.detail.codeSpectrum = '104A (W)';
                switch (this.membership) {
                  case 1://Gold
                    price = 60.00;
                    break;
                  case 2://Diamond
                    price = 60.00;
                    break;
                  case 3://Preffered
                    price = 60.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.detail.codeSpectrum = '104B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    price = 30.00;
                    break;
                  case 2://Diamond
                    price = 30.00;
                    break;
                  case 3://Preffered
                    price = 30.00;
                    break;
                }
              break;
              case '3 Pack':
                this.detail.codeSpectrum = '104C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    price = 93.00;
                    break;
                  case 2://Diamond
                    price = 93.00;
                    break;
                  case 3://Preffered
                    price = 93.00;
                    break;
                }
              break;
            }
          break;
          case 'X-Cel Multifocal':
            switch (this.presentation) {
              case 'Single (Vial)':
                this.detail.codeSpectrum = '107A (W)';
                switch (this.membership) {
                  case 1://Gold
                    price = 69.00;
                    break;
                  case 2://Diamond
                    price = 69.00;
                    break;
                  case 3://Preffered
                    price = 69.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.detail.codeSpectrum = '107B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    price = 36.50;
                    break;
                  case 2://Diamond
                    price = 36.50;
                    break;
                  case 3://Preffered
                    price = 36.50;
                    break;
                }
              break;
              case '3 Pack':
                this.detail.codeSpectrum = '107C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    price = 103.50;
                    break;
                  case 2://Diamond
                    price = 103.50;
                    break;
                  case 3://Preffered
                    price = 103.50;
                    break;
                }
              break;
            }
          break;
          case 'Flexlens ARC':
            switch (this.presentation) {
              case 'Single (Vial)':
                this.detail.codeSpectrum = '100A (W)';
                switch (this.membership) {
                  case 1://Gold
                    price = 79.00;
                    break;
                  case 2://Diamond
                    price = 79.00;
                    break;
                  case 3://Preffered
                    price = 79.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.detail.codeSpectrum = '100B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    price = 45.00;
                    break;
                  case 2://Diamond
                    price = 45.00;
                    break;
                  case 3://Preffered
                    price = 45.00;
                    break;
                }
              break;
              case '3 Pack':
                this.detail.codeSpectrum = '100C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    price = 99.00;
                    break;
                  case 2://Diamond
                    price = 99.00;
                    break;
                  case 3://Preffered
                    price = 99.00;
                    break;
                }
              break;
            }
          break;
          case 'Flexlens Piggyback':
            switch (this.presentation) {
              case 'Single (Vial)':
                this.detail.codeSpectrum = '103A (W)';
                switch (this.membership) {
                  case 1://Gold
                    price = 60.00;
                    break;
                  case 2://Diamond
                    price = 60.00;
                    break;
                  case 3://Preffered
                    price = 60.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.detail.codeSpectrum = '103B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    price = 37.50;
                    break;
                  case 2://Diamond
                    price = 37.50;
                    break;
                  case 3://Preffered
                    price = 37.50;
                    break;
                }
              break;
              case '3 Pack':
                this.detail.codeSpectrum = '103C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    price = 110.00;
                    break;
                  case 2://Diamond
                    price = 110.00;
                    break;
                  case 3://Preffered
                    price = 110.00;
                    break;
                }
              break;
            }
          break;
          case 'Flexlens Large Diameter':
            switch (this.presentation) {
              case 'Single (Vial)':
                this.detail.codeSpectrum = '108A (W)';
                switch (this.membership) {
                  case 1://Gold
                    price = 51.75;
                    break;
                  case 2://Diamond
                    price = 51.75;
                    break;
                  case 3://Preffered
                    price = 51.75;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.detail.codeSpectrum = '108B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    price = 32.30;
                    break;
                  case 2://Diamond
                    price = 32.30;
                    break;
                  case 3://Preffered
                    price = 32.30;
                    break;
                }
              break;
/*               case '3 Pack': //This presentation is not being offered
                this.detail.codeSpectrum = '103C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    price = 110.00;
                    break;
                  case 2://Diamond
                    price = 110.00;
                    break;
                  case 3://Preffered
                    price = 110.00;
                    break;
                }
              break; */
            }
            break;
            case 'Flexlens PRS':
              switch (this.presentation) {
                case 'Single (Vial)':
                  this.detail.codeSpectrum = '102A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 70.00;
                      break;
                    case 2://Diamond
                      price = 70.00;
                      break;
                    case 3://Preffered
                      price = 70.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.detail.codeSpectrum = '102B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 37.50;
                      break;
                    case 2://Diamond
                      price = 37.50;
                      break;
                    case 3://Preffered
                      price = 37.50;
                      break;
                  }
                break;
                case '3 Pack':
                  this.detail.codeSpectrum = '102C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 80.00;
                      break;
                    case 2://Diamond
                      price = 80.00;
                      break;
                    case 3://Preffered
                      price = 80.00;
                      break;
                  }
                break;
              }
            break;
            case 'Flexlens Sphere':
              switch (this.presentation) {
                case 'Single (Vial)':
                  this.detail.codeSpectrum = '105A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 26.00;
                      break;
                    case 2://Diamond
                      price = 26.00;
                      break;
                    case 3://Preffered
                      price = 26.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.detail.codeSpectrum = '105B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 14.00;
                      break;
                    case 2://Diamond
                      price = 14.00;
                      break;
                    case 3://Preffered
                      price = 14.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.detail.codeSpectrum = '105C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 42.00;
                      break;
                    case 2://Diamond
                      price = 42.00;
                      break;
                    case 3://Preffered
                      price = 42.00;
                      break;
                  }
                break;
              }
            break;
            case 'Flexlens Toric':
              switch (this.presentation) {
                case 'Single (Vial)':
                  this.detail.codeSpectrum = '106A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 40.00;
                      break;
                    case 2://Diamond
                      price = 40.00;
                      break;
                    case 3://Preffered
                      price = 40.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.detail.codeSpectrum = '106B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 18.00;
                      break;
                    case 2://Diamond
                      price = 18.00;
                      break;
                    case 3://Preffered
                      price = 18.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.detail.codeSpectrum = '106C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 54.00;
                      break;
                    case 2://Diamond
                      price = 54.00;
                      break;
                    case 3://Preffered
                      price = 54.00;
                      break;
                  }
                break;
              }
            break;
            case 'Flexlens Tricurve':
              switch (this.presentation) {
                case 'Single (Vial)':
                  this.detail.codeSpectrum = '101A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 70.00;
                      break;
                    case 2://Diamond
                      price = 70.00;
                      break;
                    case 3://Preffered
                      price = 70.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.detail.codeSpectrum = '101B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 37.50;
                      break;
                    case 2://Diamond
                      price = 37.50;
                      break;
                    case 3://Preffered
                      price = 37.50;
                      break;
                  }
                break;
                case '3 Pack':
                  this.detail.codeSpectrum = '101C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 80.00;
                      break;
                    case 2://Diamond
                      price = 80.00;
                      break;
                    case 3://Preffered
                      price = 80.00;
                      break;
                  }
                break;
              }
            break;
            case 'Horizon Sphere':
              switch (this.presentation) {
                case 'Single (Vial)':
                  this.detail.codeSpectrum = '111A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 26.00;
                      break;
                    case 2://Diamond
                      price = 26.00;
                      break;
                    case 3://Preffered
                      price = 26.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.detail.codeSpectrum = '111B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 14.00;
                      break;
                    case 2://Diamond
                      price = 14.00;
                      break;
                    case 3://Preffered
                      price = 14.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.detail.codeSpectrum = '111C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 42.00;
                      break;
                    case 2://Diamond
                      price = 42.00;
                      break;
                    case 3://Preffered
                      price = 42.00;
                      break;
                  }
                break;
              }
            break;
            case 'Horizon Toric':
              switch (this.presentation) {
                case 'Single (Vial)':
                  this.detail.codeSpectrum = '112A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 40.00;
                      break;
                    case 2://Diamond
                      price = 40.00;
                      break;
                    case 3://Preffered
                      price = 40.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.detail.codeSpectrum = '112B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 18.00;
                      break;
                    case 2://Diamond
                      price = 18.00;
                      break;
                    case 3://Preffered
                      price = 18.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.detail.codeSpectrum = '112C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      price = 54.00;
                      break;
                    case 2://Diamond
                      price = 54.00;
                      break;
                    case 3://Preffered
                      price = 54.00;
                      break;
                  }
                break;
              }
            break;

          //---------------------------------------------//
        }


    }

    this.price = price * this.quantity;
    return price
  }

  setInfoAdditionalPrices(data) {
    let self = this;
    this.productsAdditional = data;

    this.product.infoAdditionalPrices = {
      "name": "prices", "values":
        { "hydrapeg": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0
          },
          "notch" : {
            "gold": 0,
            "diamond": 0,
            "preferred": 0
          },
          "dmv insertion and removal set": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0
          }
        }
    }

    _.each(this.productsAdditional, function(product) {
      const name = product.name.toLowerCase();

      self.product.infoAdditionalPrices.values[name] = {
        "gold": product.price1,
        "diamond": product.price2,
        "preferred": product.price3
      };
    });
  }

  getParams() {
    return this.product.parameters;
  }

  changeSelect(parameter, value, value2) {

    parameter.selected = value;
    let check = false;
    const self = this;


    _.each(this.detail.parameters, function (param, index) {
      if (param.name === parameter.name) {
        self.detail.parameters[index].selected = value;
        if (self.showHydrapeg) {
          self.hydrapegV.selected = param.name === 'Hydrapeg' ? value : self.hydrapegV.selected;
        }
      }
    });

    if (parameter.name === 'Design' || parameter.name === 'Hydrapeg') {
      this.designPR = parameter.name === 'Design' ? value : this.designPR;
      this.setFullPrice();
    }
  }

  renameSphere(params, newName) {
    let self = this;
    _.each(params, function(param, index) {
      if (self.isSphere(param)) {
        params[index].name = newName;
      }
    });
  }

  renameAddition(params, newName) {
    _.each(params, function(param, index) {
      if (param.name === "Addition" || param.name === "Addition (MF Sph)" || param.name === "Addition (MF Bitoric)") {
        params[index].name = newName;
      }
    });
  }

  changeDesign(value) {
    this.design.selected = value;

    if (value === 'Sph') {
      const cylinder: any = _.find(this.product.parameters, { name: 'Cylinder (D)' });
      if (cylinder) {
        cylinder.selected = null;
      }

      const axisCylinder: any = _.find(this.product.parameters, { name: 'Axis Cylinder(º)' });
      if (axisCylinder) {
        axisCylinder.selected = null;
      }

      const axisRotationMarkers: any = _.find(this.product.parameters, { name: 'Position of axis rotation markers' });
      if (axisRotationMarkers) {
        axisRotationMarkers.selected = null;
      }

      this.renameAddition(this.product.parameters, 'Addition (MF Sph)');
    }

    if (value === 'Bitoric') {
      this.renameAddition(this.product.parameters, 'Addition (MF Bitoric)');
    }
  }

  changeMaterials(value) {
    this.product.materials.selected = value;

    if (value !== 'Boston-XO') {
      this.product.hydrapeg.selected = "No";
    }
  }

  // Params notch and axis
  changeNotchTime(value, parameter) {
    //validating change in notch time
    var changedNotch = this.selectedNotch !== value;

    this.selectedNotch = value;

    this.notchTime.itemsList._items[0].label = value;
    this.notchTime.itemsList._items[0].value = value;

     // restart axis after change
     if (changedNotch) {
      this.axisSelected = _.find(this.product.parameters, { name: 'Axis (º)' });
      this.axisSelected.selected = null
    }

    //set null in values notch
    if (parameter.values[0].selected === 0)
      parameter.values[0].selected = null;

    if (parameter.values[1].selected === 0)
      parameter.values[1].selected = null;

    this.setFullPrice();
  }

  validateSelectedNotch(parameter) {
    if (this.selectedNotch === null) {
      parameter.selected = null;
      parameter.values[0].selected = 0;
      parameter.values[1].selected = 0;
      this.axisSelected.selected = null
    }

    this.setFullPrice();
  }

  axisValues() {
    this.axisSelected = _.find(this.product.parameters, { name: 'Axis (º)' });
    if (this.selectedNotch === null) { this.axisSelected.selected = null };
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

  isSphere(param) {
    return param.name === "Sphere (D)" || param.name === "Sphere (D) (final power)" || param.name === "Sphere (D) (add over-refraction)";
  }

  formIsValid() {
    let self = this;
    let isValid = true;
    isValid = !!this.patient;
    if (this.quantity <= 0) {
      isValid = false;
    }
    _.each(this.paramsToShow, function (param) {
      if (!param.noRequired && !param.selected) {
        isValid = false;
      }

    });
    return isValid;
  }

  update(listProducts) {
    let self = this;
    this.productRequestedService.updateList$(listProducts).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        let listAux = res.data;
        const principal = listAux.filter((item) => {
          return !self.productModel.isAdditionalProduct(item.product.idProduct);
        });
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        let productRequested = principal[0];
        productRequested.detail = JSON.parse(productRequested.detail);
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
        this.spinner.hide();
        this.modalReference.close();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
      this.modalReference.close();
    });
  }


  changeParams(parameter,value) {
    const self = this;
    //--------------------------------------------------------

    if (this.product.name.includes('Atlantis')) { //Atlantis Case

      if (parameter.name === 'Design') {

        this.designPR = value;
        this.priceSaleTotal();

        this.paramsToShow = _.filter(this.productParams, function (param) {
          switch (self.designPR) {
            case 'Atlantis SPH':
            case 'Atlantis FT':
              if (_.includes(['LZ 3D Vault / 2.0', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !self.checkAtlantisParams(param) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            case 'Atlantis TPC':
            case 'Atlantis MF':
              if (param.name === 'LZ 3D Vault / 2.0') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'LZ 3D Vault / 2.0' && !self.checkAtlantisParams(param) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            case 'Atlantis 3D':
              if (param.name === 'TPC') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'TPC' && !self.checkAtlantisParams(param) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            case 'Atlantis 2.0':
              if (_.includes(['Limbal Zone', 'Scleral Zone', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && param.name !== 'Quantity' && param.name !== 'Hydrapeg' ;
            case 'Atlantis LD':
              return  !self.checkAtlantisParams(param) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            default:
              return param && !self.checkAtlantisParams(param) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
          }

        });
        this.setRequiredParams(parameter, value);
      }
    } else if (this.product.name.includes('RGP')) { // RGP CASE

      if (parameter.name === 'Design') {

        this.designPR = value;
        this.paramsToShow = this.productParams;
        this.priceSaleTotal();
      }

    } else if (this.product.name.includes('Soft')) { //Custom Soft Case

        if (parameter.name === 'Presentation') {
          this.presentation = parameter.selected;
          this.priceSaleTotal();
        }

        if (parameter.name === 'Design') {

          this.designPR = value;
          this.priceSaleTotal();

          this.paramsToShow = _.filter(this.productParams, function (param) {
            switch (self.designPR) {
              case 'Flexlens Large Diameter':
                if (param.name === 'Presentation') {
                  param.values = param.values.filter(p => p !== '3 Pack');
                  param.selected = (param.selected === '3 Pack') ? null : param.selected;
                }
              return param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
              default:
                if (!_.includes(param.values, '3 Pack') && param.name === 'Presentation') {
                  param.values = _.concat(param.values, '3 Pack');
                }
              return param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
            }
          });
        }

    }

  }

  setRequiredParams(param, value) {
    let self = this;
    _.each(this.productParams, function (p, index) {
      switch (p.name) {
        case 'Addition':
        case 'Dom. Eye':
        case 'Distance Zone':
          if (param.name === 'Design') {
            self.productParams[index].noRequired = param.selected !== 'Atlantis MF';
          }
          break;
      }
    });
  }


  checkAtlantisParams(param) {
    switch (param.name) {
      case 'Atlantis 2.0 C.S.A':
      case 'Clock Mark':
      case 'Q1 LZ':
      case 'Q1 SZ':
      case 'Q2 LZ':
      case 'Q2 SZ':
      case 'Q3 LZ':
      case 'Q3 SZ':
      case 'Q4 LZ':
      case 'Q4 SZ':
        param.selected = null;
        return true;
      default:
        break;
    }
  }

  save() {
    this.spinner.show();
    const self = this;
    this.paramsToSave = [];
    let paramsHeader = [];

    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
    } else {
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
    }

    _.each(this.productParams, function (parameter, i) {
      if (!!parameter.selected && parameter.selected !== 'No') {
        if (!parameter.header) {
          self.paramsToSave = _.concat(self.paramsToSave, parameter);
        } else {
          paramsHeader = _.concat(paramsHeader, parameter);
        }
      }
      if (parameter.name === 'Quantity') {
        parameter.selected = self.quantity;
        self.paramsToSave = _.concat(self.paramsToSave, parameter);
      }
      if (parameter.name === 'Hydrapeg' && self.showHydrapeg) {
        self.paramsToSave = _.concat(self.paramsToSave, self.hydrapegV);
      }
    });

    if (!this.showDmv) {
      this.productHeader[0] = { selected: 'No'};

    }
     this.productRequested.detail = '[' + JSON.stringify({ name: '', codeSpectrum: this.detail.codeSpectrum, eye: this.detail.eye,
                                  header: paramsHeader, hydrapeg: self.hydrapegV, insertor: this.productHeader[0], eyesSelected: this.detail.eyesSelected,
                                  parameters: self.paramsToSave}) + ']';
    this.productRequested.observations = this.observations;
    this.productRequested.price = this.priceSaleTotal();
    this.productRequested.quantity = this.quantity;
    this.productRequested.product = this.product.idProduct;
    this.productRequested.patient = this.patient;

    let requestedProducts = [JSON.parse(JSON.stringify(this.productRequested))];
    this.update(requestedProducts);



  }

}
