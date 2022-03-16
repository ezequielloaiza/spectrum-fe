import { Component, OnInit } from '@angular/core';
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
  hydrapegInserted = false;
  paramsAtlantisImages: any;
  clockParam: any;
  header: any;
  parameters: any;
  designPR: any;
  membership: any;
  productHeader: any;
  productParams: any;
  hydrapegV: any;
  hydrapegSelection: any;
  presentation: any;
  paramsToShow: any;
  paramsToSave = [];

  // Values of product
  typeLens: any;
  design: any;
  materials: any;
  hydrapeg: any;

  // Products prices additionals
  priceHydrapeg: any;
  priceDMV: any;
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


  close() {
    this.modalReference.close();
  }

  ngOnInit() {
    if (this.typeEdit === 1 ) { // Basket
      this.productRequested = this.basket.productRequested;
      this.membership = this.basket.basket.user.membership.idMembership;

    } else { // order-detail
      this.productRequested = this.detailEdit;
      this.membership = this.order.user.membership.idMembership;
    }

    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;


    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }

    this.productHeader = JSON.parse(this.product.types)[0].header || [];
    this.productParams = JSON.parse(this.product.types)[0].parameters;
    this.getProductView();
  }


  getProductView() {
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.patient = this.productRequested.patient;
    let self = this;

    if (this.product.name.includes('Atlantis')) {
      this.productHeader[0].selected = this.detail.dmv.selected;
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

    this.revertChangePowerPositive();

    this.getOtherProducts();

    if (this.typeEdit === 1) {
      this.findBasketByGroupdId();
    } else {
      this.findOrderByGroupdId();
    }
  }

  revertChangePowerPositive() {
    let power = this.productParams.find(p => p.name.includes('Power'));
    power.selected = parseFloat(power.selected);
  }

  getOtherProducts() {
    this.productService.findBySupplierAndInViewAndCategory$(13, false, 10).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.setInfoAdditionalPrices(res.data);
        this.definePriceAdditionals();
        this.setFullPrice();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
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
      let prHydrapeg;
      let prDMV;
      _.each(res.data, function (basket) {
        const productId = basket.productRequested.product.idProduct;
        switch (productId) {
          case 310:
            if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
              prHydrapeg = basket.productRequested;
            }
            break;
          case 311:
            if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
              prDMV = basket.productRequested;
            }
            break;
        }
      });
      this.productRequestedDMV = prDMV;
      this.productRequestedHydrapeg = prHydrapeg;
    }
  }

  setInfoAdditionalPrices(data) {
    let self = this;
    this.productsAdditional = data;

    this.product.infoAdditionalPrices = {
      "name": "prices", "values":
        { "hydrapeg": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0,
            "bronze": 0,
            "diamondSaudi": 0,
            "centralAmerica": 0,
            "diamondPO": 0
          },
          "dmv insertion and removal set": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0,
            "bronze": 0,
            "diamondSaudi": 0,
            "centralAmerica": 0,
            "diamondPO": 0
          }
        }
    }

    _.each(this.productsAdditional, function(product) {
      const name = product.name.toLowerCase();

      self.product.infoAdditionalPrices.values[name] = {
        "gold": product.price1,
        "diamond": product.price2,
        "preferred": product.price3,
        "bronze": product.price4,
        "diamondSaudi": product.price5,
        "centralAmerica": product.price6,
        "diamondPO": product.price7
      };
    });
  }

  definePriceAdditionals() {
    let membership = null;
    if (this.typeEdit === 1 ) { // Basket
      membership = this.basket.basket.user.membership.idMembership;
    } else { // Order detail
      membership = this.order.user.membership.idMembership;
    }
    switch (membership) {
      case 1:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.gold;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].gold;
        break;
      case 2:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamond;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamond;
        break;
      case 3:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.preferred;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].preferred;
        break;
      case 4:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.bronze;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].bronze;
        break;
      case 5:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamondSaudi;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamondSaudi;
        break;
      case 6:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.centralAmerica;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].centralAmerica;
        break;
      case 7:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamondPO;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamondPO;
        break;
    }
  }

  setFullPrice() {
    this.price = this.priceSaleTotal(); //by design
    this.price += this.getAdditionalPrices()["dmv"];
    this.price += this.getAdditionalPrices()["hydrapeg"];
  }

  getAdditionalPrices() {
    let dmv = 0;
    let hydrapeg = 0;

    if (this.product.name.includes('Atlantis')) {
      // Finding DMV
      if (this.productHeader[0].selected === 'Yes') {
        dmv = this.priceDMV
      }

      // Finding Hydrapeg
      if (this.hydrapegV.selected === 'Yes') {
        hydrapeg = this.priceHydrapeg;
      }
    }
    return { dmv, hydrapeg };
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 180;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 260;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 260;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 260;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 260;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 260;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 175;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 260;
              break;
            case 7://Diamond P&O
              price = 0;
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
            case 4://Bronze
              price = 94.3;
              break;
            case 5://Diamond Saudi
              price = 0;
              break;
            case 6://Central America
              price = 95;
              break;
            case 7://Diamond P&O
              price = 0;
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
              case 4://Bronze
                price = 55.3;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 50;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 111.75;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 99;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 42.15;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 31;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 94.3;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 84;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 42.45;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 46;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 95.4;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 70;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 33.45;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 31;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 33.45;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 31;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 94.3;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 95;
                break;
              case 7://Diamond P&O
                price = 0;
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
              case 4://Bronze
                price = 33.45;
                break;
              case 5://Diamond Saudi
                price = 0;
                break;
              case 6://Central America
                price = 260;
                break;
              case 7://Diamond P&O
                price = 31;
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
                  case 4://Bronze
                    price = 50.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 91.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 20.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 47.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 60.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 144.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 80.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 104.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 30.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 53.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 90.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 155.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 80.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 123.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 30.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 69.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 90.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 150.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 50.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 91.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 20.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 58.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 60.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 168.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
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
                  case 4://Bronze
                    price = 50.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 78.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.detail.codeSpectrum = '108C (NW)';
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
                  case 4://Bronze
                    price = 20.00;
                    break;
                  case 5://Diamond Saudi
                    price = 0;
                    break;
                  case 6://Central America
                    price = 48.00;
                    break;
                  case 7://Diamond P&O
                    price = 0;
                    break;
                }
              break;
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
                    case 4://Bronze
                      price = 80.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 110.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 30.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 58.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 90.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 125.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 50.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 39.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 20.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 27.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 60.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 81.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 50.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 60.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 20.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price =33.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 60.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 99.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 80.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 110.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 30.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 58.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 90.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 125.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 50.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 39.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 20.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 27.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 60.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 81.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 50.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 60.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 20.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 33.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
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
                    case 4://Bronze
                      price = 60.00;
                      break;
                    case 5://Diamond Saudi
                      price = 0;
                      break;
                    case 6://Central America
                      price = 99.00;
                      break;
                    case 7://Diamond P&O
                      price = 0;
                      break;
                  }
                break;
              }
            break;

          //---------------------------------------------//
        }
    }

    this.product.priceSale = price;
    return price;
  }

  checkHydrapeg(parameter, flag) {
    if (flag) {
      this.hydrapegInserted = true;
      this.hydrapegV = parameter;
    } else if (!this.hydrapegInserted) {
      this.hydrapegV = parameter;
      this.detail.hydrapeg.selected = parameter.selected;
    }
  }

  changeDMV(value) {
    this.productHeader[0].selected = value;
    this.setFullPrice();
  }

  changeSelect(parameter, value, value2) {

    parameter.selected = value;
    const self = this;


    _.each(this.detail.parameters, function (param, index) {
      if (param.name === parameter.name) {
        self.detail.parameters[index].selected = value;
        if (self.product.name.includes('Atlantis')) {
          self.hydrapegV.selected = param.name === 'Hydrapeg' ? value : self.hydrapegV.selected;
        }
      }
    });

    if (parameter.name === 'Design' || parameter.name === 'Hydrapeg') {
      this.designPR = parameter.name === 'Design' ? value : this.designPR;
      this.setFullPrice();
    }
  }



  changeMaterials(value) {
    this.product.materials.selected = value;

    if (value !== 'Boston-XO' && value !== 'Boston XO2') {
      this.product.hydrapeg.selected = "No";
    }
  }

  getProductsAdditional(productSelected: any, type: any) {
    let self = this;
    const additionals = [];
    const productHydrapeg: any = _.find(this.productsAdditional, {name:"Hydrapeg"});
    const productDMV: any = _.find(this.productsAdditional, {name: "DMV Insertion and Removal Set"});

    /////////////////////////////// DMV //////////////////////////////////
    // if exist price dmv or productRequest will be deleted
    if (this.getAdditionalPrices()["dmv"] || this.productRequestedDMV) {
      const dmv: any = {
        id: productDMV.idProduct,
        idProductRequested: this.productRequestedDMV && this.productRequestedDMV.idProductRequested,
        product: productDMV.idProduct,
        name: productDMV.name,
        price: self.getAdditionalPrices()["dmv"],
        quantity: productSelected.quantity,
        patient: productSelected.patient,
        codeSpectrum: productDMV.codeSpectrum,
        detail: {},
        groupId: productSelected.groupId,
        delete: !self.getAdditionalPrices()["dmv"]
      }

      if (self.typeEdit === 1) {
        dmv.basketId = self.basket.basket.idBasket;
      } else {
        dmv.orderId = self.order.idOrder;
      }

      if (type === 'basket') {
        dmv.detail = productSelected.detail;
      }
      additionals.push(dmv);
    }

    /////////////////////////////// HYDRAPEG //////////////////////////////////
    // if exist price notch or productRequest will be deleted
    if (this.getAdditionalPrices()["hydrapeg"] || this.productRequestedHydrapeg) {
      const hydrapeg: any = {
        id: productHydrapeg.idProduct,
        idProductRequested: this.productRequestedHydrapeg && this.productRequestedHydrapeg.idProductRequested,
        product: productHydrapeg.idProduct,
        name: productHydrapeg.name,
        price: this.getAdditionalPrices()["hydrapeg"],
        quantity: productSelected.quantity,
        patient: productSelected.patient,
        codeSpectrum: productHydrapeg.codeSpectrum,
        detail: {},
        groupId: productSelected.groupId,
        delete: !this.getAdditionalPrices()["hydrapeg"]
      }

      if (this.typeEdit === 1) {
        hydrapeg.basketId = this.basket.basket.idBasket;
      } else {
        hydrapeg.orderId = this.order.idOrder;
      }

      if (type === 'basket') {
        hydrapeg.detail = productSelected.detail;
      }
      additionals.push(hydrapeg)
    }


    return additionals;
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
        isValid = param.selected === 0? !param.noRequired && !param.selected : !param.noRequired && param.selected;
      }
    });

    if (this.designPR === 'Atlantis 2.0') {
      _.each(this.paramsAtlantisImages, function (parameter) {
        if (!parameter.selected && parameter.selected !== 0) {
          isValid = false;
        }
      });
    }

    if (['Apex', 'Pinnacle', 'Titan'].some(x => this.designPR.includes(x))) {
      const edge = this.paramsToShow.find(p => p.name === 'Edge');
      if (edge.selected !== 0 && !edge.selected) {
        isValid = false;
      }
    }
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
        this.setFullPrice();

        this.paramsToShow = _.filter(this.productParams, function (param) {
          switch (self.designPR) {
            case 'Atlantis SPH':
            case 'Atlantis FT':
              self.lzRequired(param,0);
              if (_.includes(['LZ 3D Vault / 2.0', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              self.cleanAtlantisParam(param);
              return param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !self.checkAtlantisParams(param, 0) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            case 'Atlantis TPC':
            case 'Atlantis MF':
              self.lzRequired(param,0);
              if (param.name === 'LZ 3D Vault / 2.0') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              self.cleanAtlantisParam(param);
              return param.name !== 'LZ 3D Vault / 2.0' && !self.checkAtlantisParams(param, 0) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            case 'Atlantis 3D':
              self.lzRequired(param,1);
              if (param.name === 'TPC') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              self.cleanAtlantisParam(param);
              return param.name !== 'TPC' && !self.checkAtlantisParams(param, 0) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            case 'Atlantis 2.0':
              self.lzRequired(param,1);
              self.paramsAtlantisImages = _.filter(self.productParams, function (param) {
                return self.checkAtlantisParams(param, 1);
              });
              self.getClockParam();
              if (_.includes(['Limbal Zone', 'Scleral Zone', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && param.name !== 'Quantity' && param.name !== 'Hydrapeg'&& !self.checkAtlantisParams(param, 1);
            case 'Atlantis LD':
              self.lzRequired(param,0);
              self.cleanAtlantisParam(param);
              return  !self.checkAtlantisParams(param, 0) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
            default:
              self.lzRequired(param,0);
              self.cleanAtlantisParam(param);
              return param && !self.checkAtlantisParams(param, 0) && param.name !== 'Quantity' && param.name !== 'Hydrapeg';
          }

        });
        this.setRequiredParams(parameter, value);
      }
    } else if (this.product.name.includes('RGP')) { // RGP CASE

      if (parameter.name === 'Design') {

        this.designPR = value;
        this.paramsToShow = this.productParams;
        this.setFullPrice();

        this.paramsToShow = this.productParams.filter(p => p.name !== 'Quantity');

      }

    } else if (this.product.name.includes('Soft')) { //Custom Soft Case

        if (parameter.name === 'Presentation') {
          this.presentation = parameter.selected;
          this.setFullPrice();
        }

        if (parameter.name === 'Design') {

          this.designPR = value;
          this.setFullPrice();
          let material = this.productParams.find(p => p.name === 'Materials');

          this.paramsToShow = _.filter(this.productParams, function (param) {
            switch (self.designPR) {
              case 'X-Cel Multifocal': //addition, dom eye, distance zone
                if (param.name === 'C.T / E.C') {
                  self.ctRequired(param, self.designPR,0);
                }
                return param.name !== 'Quantity';
              case 'Flexlens ARC':
                if (param.name === 'C.T / E.C') {
                  self.ctRequired(param, self.designPR,1);
                }
                material.values = [];
                material.values = _.concat(material.values, "45%", "49%", "55%", "59%", "Definitive 74%");
                material.selected = (material.selected === '49%' || material.selected === 'Definitive 74%') ? material.selected : null;
                material.values = material.values.filter(p => p === '49%' || p === 'Definitive 74%');
              return param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye' && param.name !== 'Quantity';
              case 'Flexlens Large Diameter':
                if (param.name === 'C.T / E.C') {
                  self.ctRequired(param, self.designPR,0);
                }
                material.values = [];
                material.values = _.concat(material.values, "45%", "49%", "55%", "59%", "Definitive 74%");
                material.values = material.values.filter(p => p === '55%');
                material.selected = material.values[0];
                if (param.name === 'Presentation') {
                  param.values = param.values.filter(p => p !== '3 Pack');
                  param.selected = (param.selected === '3 Pack') ? null : param.selected;
                }
              return param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye' && param.name !== 'Quantity';
              default:
                if (param.name === 'C.T / E.C' && self.designPR === 'Flexlens Tricurve') {
                  self.ctRequired(param, self.designPR,1);
                } else if (param.name === 'C.T / E.C') {
                  self.ctRequired(param, self.designPR,0);
                }
                if (material.values.length <= 2) {
                  material.values = [];
                  material.values = _.concat(material.values, "45%", "49%", "55%", "59%", "Definitive 74%");
                }
                if (!_.includes(param.values, '3 Pack') && param.name === 'Presentation') {
                  param.values = _.concat(param.values, '3 Pack');
                }
              return param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye' && param.name !== 'Quantity';
            }
          });
        }

    }

  }

  lzRequired(param, required) {
    if (param.name.includes('LZ 3D Vault')) {
        param.noRequired = required? false : true;
    }
  }

  ctRequired(param, design, required) {
    if (required) {
        param.noRequired = false;
      if (design.includes('ARC')) {
        param.type = 'selected'
        param.values = ['0.30', '0.50'];
      } else {
        param.type = 'input-number';
      }
    } else {
      param.noRequired = true;
      param.type = 'input-number';
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

  cleanAtlantisParam(param) {
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

  checkAtlantisParams(param, remove) {
    switch (param.name) {
      case 'Atlantis 2.0 C.S.A':
        if (remove) {
          return false;
        }
      case 'Clock Mark':
      case 'Q1 LZ':
      case 'Q1 SZ':
      case 'Q2 LZ':
      case 'Q2 SZ':
      case 'Q3 LZ':
      case 'Q3 SZ':
      case 'Q4 LZ':
      case 'Q4 SZ':
        //param.selected = null;  //chequear y  borrar
        return true;
      default:
        break;
    }
  }

  getClockParam() {
    const self = this;
    _.each(this.paramsAtlantisImages, function (p, index) {
      if (p.name === 'Clock Mark') {
        self.clockParam = self.paramsAtlantisImages[index];
      }
    });
  }

  getAtlantisParams() {
    return this.paramsAtlantisImages.filter(p => p !== 'Clock Mark');
  }

  getNamesForMin(param) {
    return (['BC', 'Base Curve', 'Diameter', 'Addition'].some(x => param.name.includes(x)))
  }

  changeRequired(parameter) {
    if (parameter === 'Edge') {
      let design = this.paramsToShow.find(p => p.name === 'Design').selected;
      if (!!design && ['Apex', 'Pinnacle', 'Titan'].some(x => design.includes(x))) {
        return true;
      }
      return false;
    }
  }

  changePowerPositive() {
    let power = this.paramsToSave.find(p => p.name.includes('Power'));
    if (!!power) {
      power.selected = power.selected > 0 ? "+" + power.selected : power.selected;
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
    //concat productparams con los de atlantisimg??? revisar que tiene el producparams si creo un scope nuevo o es el mismo y ve los cambios
    _.each(this.productParams, function (parameter, i) {
      if (parameter.selected !== undefined && parameter.selected !== null && parameter.selected !== '' && parameter.selected !== 'No' && parameter.name !== 'Hydrapeg') {
        if (!parameter.header) {
          self.paramsToSave = _.concat(self.paramsToSave, parameter);
        } else {
          paramsHeader = _.concat(paramsHeader, parameter);
        }
      }
   /*    if (parameter.name === 'Quantity') {
        parameter.selected = self.quantity;
        //self.paramsToSave = _.concat(self.paramsToSave, parameter);
      } */
      if (parameter.name === 'Hydrapeg' && self.product.name.includes('Atlantis')) {
        self.paramsToSave = _.concat(self.paramsToSave, self.hydrapegV);
      }
    });

    this.changePowerPositive();

    if (!self.product.name.includes('Atlantis')) {
      this.productHeader[0] = { selected: 'No'};
    }
    paramsHeader = paramsHeader.filter(p => p.name !== 'Quantity');

    if (self.product.name.includes('Atlantis')) {
      this.productRequested.detail = '[' + JSON.stringify({ name: '', codeSpectrum: this.detail.codeSpectrum, eye: this.detail.eye,
                                  header: paramsHeader,
                                  hydrapeg: self.hydrapegV,
                                  dmv: this.productHeader[0],
                                  parameters: self.paramsToSave,
                                  productsAdditional: self.getProductsAdditional(this.productRequested, 'detail')}) + ']';

    } else {
      this.productRequested.detail = '[' + JSON.stringify({ name: '', codeSpectrum: this.detail.codeSpectrum, eye: this.detail.eye,
                                  header: paramsHeader,
                                  parameters: self.paramsToSave,
                                  productsAdditional: self.getProductsAdditional(this.productRequested, 'detail')}) + ']';
    }


    this.productRequested.observations = this.observations;
    this.productRequested.price = this.product.priceSale;
    this.productRequested.quantity = this.quantity;
    this.productRequested.product = this.product.idProduct;
    this.productRequested.patient = this.patient;

    let requestedProducts = [JSON.parse(JSON.stringify(this.productRequested))];
    _.each(self.getProductsAdditional(this.productRequested, 'basket'), function(additional) {
      requestedProducts.push(additional);
    });

    this.update(requestedProducts);



  }

}
