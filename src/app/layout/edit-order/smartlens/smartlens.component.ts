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

@Component({
  selector: 'app-smartlens',
  templateUrl: './smartlens.component.html',
  styleUrls: ['./smartlens.component.scss']
})
export class SmartlensComponent implements OnInit {

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
  priceMultimeridian: any;
  productRequestedNotch: any;
  productRequestedHydrapeg: any;
  productRequestedDMV: any;
  productRequestedMultimeridian: any;

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
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
    this.getProductView();
    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.editPrice = true;
    }
  }

  close() {
    this.modalReference.close();
  }

  getProductView() {
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.dmv = JSON.parse(this.product.types)[0].dmv;
    this.typeLens = JSON.parse(this.product.types)[0].typeLens;
    this.design = JSON.parse(this.product.types)[0].design;
    this.product.materials = JSON.parse(this.product.types)[0].materials;
    this.product.hydrapeg = JSON.parse(this.product.types)[0].hydrapeg;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.patient = this.productRequested.patient;
    let self = this;

    // Set DMV
    this.changeDMV(this.detail.dmv.selected);

    // Set typeLens
    this.changeTypeLens(this.detail.typeLens);

    // Set design
    this.changeDesign(this.detail.design);

    // Set Materials
    this.changeMaterials(this.detail.materials);

    // Set Hydrapeg
    this.changeSelect(this.product.hydrapeg, this.detail.hydrapeg, 0);


    // Set selected value in parameters
    _.each(this.detail.parameters, function(item) {
      _.each(self.product.parameters, function(productSelected) {
        if (productSelected.name === item.name) {
          if (productSelected.name === 'Notch (mm)') {
            let  pos = _.indexOf(item.selected, 'x');
            var itemSelected = String(item.selected);
            productSelected.values[0].selected = parseFloat(itemSelected.slice(0, pos));
            let pos2 = _.indexOf(item.selected, '(');
            let pos3 = _.indexOf(item.selected, ')');
            if (pos2 > -1 && pos3 > -1) {
              productSelected.values[1].selected = parseFloat(itemSelected.slice(pos + 1, pos2 - 1));
              self.selectedNotch = itemSelected.slice(pos2 + 1, pos3);
              productSelected.selected = self.selectedNotch;
            } else {
              productSelected.values[1].selected = parseFloat(itemSelected.slice(pos + 1));
            }
          } else {
            self.changeSelect(productSelected, item.selected, 0);
          }
        }
      });
    });

    this.getOtherProducts();

    if (this.typeEdit === 1) {
      this.findBasketByGroupdId();
    } else {
      this.findOrderByGroupdId();
    }
  }

  getOtherProducts() {
    this.productService.findBySupplierAndInViewAndCategory$(14, false, 10).subscribe(res => {
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

  changeDMV(value) {
    this.product.dmv.selected = value;

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
      let prMultimeridian;
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
          case 316:
            if (JSON.parse(basket.productRequested.detail)[0].eye === eye) {
              prMultimeridian = basket.productRequested;
            }
            break;
        }
      });
      this.productRequestedDMV = prDMV;
      this.productRequestedNotch = prNotch;
      this.productRequestedHydrapeg = prHydrapeg;
      this.productRequestedMultimeridian = prMultimeridian;
    }
  }

  setFullPrice() {
    //this.price = this.productRequested.priceBase || this.productRequested.price;
    this.price = this.priceSaleTotal();
    this.price += this.getAdditionalPrices().dmv;
    this.price += this.getAdditionalPrices().notch;
    this.price += this.getAdditionalPrices().hydrapeg;
    this.price += this.getAdditionalPrices().multimeridian;
  }

  priceSaleTotal() {
    this.getPricePersonalized();
    return (this.product.priceSale || 0);
  }

  getPricePersonalized() {
    // Finding Diameter
    const diameter: any = _.find(this.product.parameters, { name: 'Diameter (mm)' });

    if (diameter) {
      if (_.includes(["15.00"], diameter.selected)) {
        this.product.code = '200A';
        this.product.priceSale = this.pricePersonalizedByMembership(diameter);
      } else if (_.includes(["15.50", "16.50"], diameter.selected)) {
        this.product.code = '200B';
        this.product.priceSale = this.pricePersonalizedByMembership(diameter);
      }
    }
  }

  pricePersonalizedByMembership(param) {
    let membership = null;
    if (this.typeEdit === 1 ) { // Basket
      membership = this.basket.basket.user.membership.idMembership;
    } else { // Order detail
      membership = this.order.user.membership.idMembership;
    }

    if (param.name === 'Diameter (mm)') {
      if (_.includes(["15.00"], param.selected)) {
        switch (membership) {
          case 1:
            return 122;
          case 2:
            return 0;
          case 3:
            return 110;
          case 4:
            return 122;
          case 5:
            return 0;
          case 6:
            return 230;
          case 7:
            return 0;
          case 8:
            return 100;
        }
      }

      if (_.includes(["15.50", "16.50"], param.selected)) {
        switch (membership) {
          case 1:
            return 149;
          case 2:
            return 0;
          case 3:
            return 138;
          case 4:
            return 149;
          case 5:
            return 0;
          case 6:
            return 258;
          case 7:
            return 0;
          case 8:
            return 125;
        }
      }
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
            "diamondPO": 0,
            "platinumCOL": 0
          },
          "notch" : {
            "gold": 0,
            "diamond": 0,
            "preferred": 0,
            "bronze": 0,
            "diamondSaudi": 0,
            "centralAmerica": 0,
            "diamondPO": 0,
            "platinumCOL": 0
          },
          "dmv insertion and removal set": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0,
            "bronze": 0,
            "diamondSaudi": 0,
            "centralAmerica": 0,
            "diamondPO": 0,
            "platinumCOL": 0
          },
          "multimeridian" :{
            "gold": 0,
            "diamond": 0,
            "preferred": 0,
            "bronze": 0,
            "diamondSaudi": 0,
            "centralAmerica": 0,
            "diamondPO": 0,
            "platinumCOL": 0
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
        "diamondPO": product.price7,
        "platinumCOL": product.price8
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
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.gold;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].gold;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.gold;
        break;
      case 2:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamond;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.diamond;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamond;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.diamond;
        break;
      case 3:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.preferred;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.preferred;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].preferred;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.preferred;
        break;
      case 4:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.bronze;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.bronze;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].bronze;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.bronze;
        break;
      case 5:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamondSaudi;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.diamondSaudi;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamondSaudi;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.diamondSaudi;
        break;
      case 6:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.centralAmerica;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.centralAmerica;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].centralAmerica;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.centralAmerica;
        break;
      case 7:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamondPO;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.diamondPO;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamondPO;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.diamondPO;
        break;
      case 8:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.platinumCOL;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.platinumCOL;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].platinumCOL;
        this.priceMultimeridian = this.product.infoAdditionalPrices.values.multimeridian.platinumCOL;
        break;
    }
  }

  getAdditionalPrices() {
    let dmv = 0;
    let notchPrice = 0;
    let hydrapegPrice = 0;
    let multimeridianPrice = 0;

    // Finding DMV
    if (this.product.dmv.selected === 'Yes') {
      dmv = this.priceDMV;
    }

    // Finding Notch
    const notch: any = _.find(this.product.parameters, { name: 'Notch (mm)' });
    if (notch.selected !== '0x0' && notch.selected) {
      notchPrice = this.priceNotch;
    }

    // Finding Hydrapeg
    if (this.product.hydrapeg.selected === "Yes") {
      hydrapegPrice = this.priceHydrapeg;
    }

    // Finding Multimeridian Rigth
    const multimeridian: any = _.find(this.product.parameters, { name: 'Multimeridian' });
    if (multimeridian.selected === "Yes") {
      multimeridianPrice = this.priceMultimeridian;
    }

    return { dmv, notch: notchPrice, hydrapeg: hydrapegPrice, multimeridian: multimeridianPrice };
  }

  getParams() {
    let params = this.product.parameters;

    if (this.design.selected === "Sph") {
      params =  _.filter(params, function(param) {
        // Remove params cylinder and axis when design is Sph.
        return param.name !== 'Cylinder (D)' && param.name !== 'Axis Cylinder(??)' && param.name !== 'Position of axis rotation markers' && param.name !== 'Rotationally stable';
      });
    }

    if (this.typeLens.selected === 'Final Design') {
      params =  _.filter(params, function(param) {
        // Excluding params design by laboratory
        return param.name !== 'Over-refraction';
      });
    }
    return params;
  }

  isDependent(param) {
    // Finding Diameter
    const diameter: any = _.find(this.product.parameters, { name: 'Diameter (mm)' });

    // Finding Sag.
    const sag: any = _.find(this.product.parameters, { name: 'Sag.' });

    switch (param.name) {
      case "Sag.":
        return diameter.selected ? null : "Select Diameter (mm)";

      case "Base Curve (mm)":
      case "Power (D)":
        return sag.selected ? null : "Select Sag.";

      default:
        return null;
    }
  }

  isVisible(parameter) {
    if (parameter.name === 'Multimeridian') {
      const diameter: any = _.find(this.product.parameters, {name: 'Diameter (mm)'});

      return diameter.selected === "16.50";
    }
    return true;
  }

  changeSelect(parameter, value, value2) {
    parameter.selected = value;

    this.setFullPrice();

    // Finding baseCurve
    let baseCurve = null;
    baseCurve = _.find(this.product.parameters, { name: 'Base Curve (mm)' });

    // Finding power
    let power = null;
    power = _.find(this.product.parameters, { name: 'Power (D)' });

    if (!power || !baseCurve) {
      return;
    }

    if (parameter.name === "Diameter (mm)") {

      // Finding Sag.
      let sag = null;
      sag = _.find(this.product.parameters, { name: 'Sag.' });

      if (!sag) {
        return;
      }

      // Finding Multimeridian.
      let multimeridian:any = _.find(this.product.parameters, {name: 'Multimeridian'});
      multimeridian.selected = "No";

      sag.selected = null;
      baseCurve.selected = null;
      power.selected = null;

      switch (parameter.selected) {
        case "15.00":
          sag.values = ["3.400", "3.800"];
          break;
        case "15.50":
          sag.values = ["3.200", "3.400", "3.600", "3.800", "4.000", "4.200", "4.800"];
          break;
        case "16.50":
          sag.values = ["3.800", "4.000", "4.200", "4.400", "4.600", "4.800", "5.200"];
          break;
      }
    } else if (parameter.name === "Sag.") {

      // Finding Diameter.
      let diameter = null;
      diameter = _.find(this.product.parameters, { name: 'Diameter (mm)' });

      baseCurve.disabled = true;
      power.disabled = true;

      // Diameter 15.00
      if (diameter.selected === "15.00") {
        if (parameter.selected === "3.400") {
          baseCurve.selected = "8.65";
          power.selected = "3.00";
        }

        if (parameter.selected === "3.800") {
          baseCurve.selected = "8.04";
          power.selected = "0.00";
        }
      }


      // Diameter 15.50
      if (diameter.selected === "15.50") {
        if (parameter.selected === "3.200") {
          baseCurve.selected = "8.65";
          power.selected = "4.00";
        }

        if (parameter.selected === "3.400") {
          baseCurve.selected = "8.65";
          power.selected = "3.00";
        }

        if (parameter.selected === "3.600") {
          baseCurve.selected = "8.45";
          power.selected = "2.00";
        }

        if (parameter.selected === "3.800") {
          baseCurve.selected = "8.04";
          power.selected = "0.00";
        }

        if (parameter.selected === "4.000") {
          baseCurve.selected = "7.50";
          power.selected = "-2.00";
        }

        if (parameter.selected === "4.200") {
          baseCurve.selected = "7.03";
          power.selected = "-4.00";
        }

        if (parameter.selected === "4.800") {
          baseCurve.selected = "6.75";
          power.selected = "-10.00";
        }
      }

      // Diameter 16.50
      if (diameter.selected === "16.50") {
        if (parameter.selected === "3.800") {
          baseCurve.selected = "8.44";
          power.selected = "2.00";
        }

        if (parameter.selected === "4.000") {
          baseCurve.selected = "8.44";
          power.selected = "0.00";
        }

        if (parameter.selected === "4.200") {
          baseCurve.selected = "8.04";
          power.selected = "-2.00";
        }

        if (parameter.selected === "4.400") {
          baseCurve.selected = "8.04";
          power.selected = "-4.00";
        }

        if (parameter.selected === "4.600") {
          baseCurve.selected = "8.04";
          power.selected = "-6.00";
        }

        if (parameter.selected === "4.800") {
          baseCurve.selected = "8.04";
          power.selected = "-8";
        }

        if (parameter.selected === "5.200") {
          baseCurve.selected = "7.34";
          power.selected = "-12.00";
        }
      }
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

  changeTypeLens(value) {
    this.typeLens.selected = value;

    if (value === 'Final Design') {
      const overRefraction: any = _.find(this.product.parameters, { name: 'Over-refraction' });
      if (overRefraction) {
        overRefraction.selected = null;
      }
      this.renameSphere(this.product.parameters, 'Sphere (D) (final power)');
    } else {
      this.renameSphere(this.product.parameters, 'Sphere (D) (add over-refraction)');
    }
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

      const axisCylinder: any = _.find(this.product.parameters, { name: 'Axis Cylinder(??)' });
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

    if (value !== 'Boston-XO' && value !== 'Boston XO2') {
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
      this.axisSelected = _.find(this.product.parameters, { name: 'Axis (??)' });
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
    this.axisSelected = _.find(this.product.parameters, { name: 'Axis (??)' });
    if (this.selectedNotch === null) { this.axisSelected.selected = null };
    switch (this.selectedNotch) {
      case 'Upper Temporal':
        return _.range(90,??181).toString().split(",")
      case 'Lower Temporal':
        return _.range(180,??271).toString().split(",");
      case 'Upper Nasal':
        return _.range(0,??91).toString().split(",");
      case 'Lower Nasal':
        return _.range(270,??361).toString().split(",");
      default:
        return [];
    }
  }

  isSphere(param) {
    return param.name === "Sphere (D)" || param.name === "Sphere (D) (final power)" || param.name === "Sphere (D) (add over-refraction)";
  }

  save() {
    let self = this;
    this.spinner.show();

    this.detail.materials = this.product.materials.selected;
    this.detail.hydrapeg = this.product.hydrapeg.selected;
    this.detail.typeLens = this.typeLens.selected;
    this.detail.design = this.design.selected;

    // Set param selected in detail json
    _.each(this.detail.parameters, function(itemDetail) {
      _.each(self.product.parameters, function(param) {
        if (param.name === itemDetail.name) {
          if (param.name === 'Notch (mm)') {
            if (param.values[0].selected === null || param.values[1].selected === null || !self.selectedNotch || (param.values[0].selected === 0 && param.values[1].selected === 0)) {
              itemDetail.selected = '0x0';
            } else {
              itemDetail.selected = param.values[0].selected + 'x' + param.values[1].selected + ' (' + self.selectedNotch + ')';
            }
          } else {
            itemDetail.selected = param.selected;
          }
        } else if (self.isSphere(param) && self.isSphere(itemDetail)) {
          // If the parameters are sphere in of detail and product then change selected value and overwrite name.
          itemDetail.name = param.name;
          itemDetail.selected = param.selected;
        }
      });
    });

    if (this.typeEdit === 1) { // Basket
      this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
    } else {
      this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
    }

    this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                  parameters: this.detail.parameters, typeLens: this.detail.typeLens,
                                  dmv: this.product.dmv, codeSpectrum: this.product.code,
                                  design: this.detail.design, materials: this.detail.materials, hydrapeg: this.detail.hydrapeg,
                                  productsAdditional: self.getProductsAdditional(this.productRequested, 'detail')}) + ']';
    this.productRequested.observations = this.observations;
    this.productRequested.price = this.priceSaleTotal();
    this.productRequested.quantity = this.quantity;
    this.productRequested.product = this.product.idProduct;
    this.productRequested.patient = this.patient;

    let requestedProducts = [JSON.parse(JSON.stringify(this.productRequested))];
    _.each(self.getProductsAdditional(this.productRequested, 'basket'), function(additional) {
      requestedProducts.push(additional);
    });

    this.update(requestedProducts);
  }

  getProductsAdditional(productSelected: any, type: any) {
    let self = this;
    const additionals = [];
    const productNotch: any = _.find(this.productsAdditional, {name:"Notch"});
    const productHydrapeg: any = _.find(this.productsAdditional, {name:"Hydrapeg"});
    const productDMV: any = _.find(this.productsAdditional, {name: "DMV Insertion and Removal Set"});
    const productMultimeridian: any = _.find(this.productsAdditional, {name:"Multimeridian"});

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

    /////////////////////////////// NOTCH //////////////////////////////////
    // if exist price notch or productRequest will be deleted
    if (this.getAdditionalPrices()["notch"] || this.productRequestedNotch) {
      const notch: any = {
        id: productNotch.idProduct,
        idProductRequested: this.productRequestedNotch && this.productRequestedNotch.idProductRequested,
        product: productNotch.idProduct,
        name: productNotch.name,
        price: this.getAdditionalPrices()["notch"],
        quantity: productSelected.quantity,
        patient: productSelected.patient,
        codeSpectrum: productNotch.codeSpectrum,
        detail: {},
        groupId: productSelected.groupId,
        delete: !this.getAdditionalPrices()["notch"]
      }

      if (this.typeEdit === 1) {
        notch.basketId = this.basket.basket.idBasket;
      } else {
        notch.orderId = this.order.idOrder;
      }

      if (type === 'basket') {
        notch.detail = productSelected.detail;
      }
      additionals.push(notch);
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

    if (this.getAdditionalPrices()["multimeridian"] || this.productRequestedMultimeridian) {
      const multimeridian:any = {
        id: productMultimeridian.idProduct,
        idProductRequested: this.productRequestedMultimeridian && this.productRequestedMultimeridian.idProductRequested,
        product: productMultimeridian.idProduct,
        name: productMultimeridian.name,
        price: this.getAdditionalPrices()["multimeridian"],
        quantity: productSelected.quantity,
        patient: productSelected.patient,
        codeSpectrum: productMultimeridian.codeSpectrum,
        detail: {},
        groupId: productSelected.groupId,
        delete: !this.getAdditionalPrices()["multimeridian"]
      }

      if (this.typeEdit === 1) {
        multimeridian.basketId = this.basket.basket.idBasket;
      } else {
        multimeridian.orderId = this.order.idOrder;
      }

      if (type === 'basket') {
        multimeridian.detail = productSelected.detail;
      }
      additionals.push(multimeridian);
    }


    return additionals;
  }

  formIsValid() {
    let self = this;
    let isValid = true;

    _.each(this.product.header, function(param) {
      if (param.selected === null || param.selected === undefined) {
        isValid = false;
      }
    });

    _.each(this.getParams(), function(param) {
      if (param.name === 'Notch (mm)') {
        if (param.values[0].selected === null || param.values[1].selected === null ) {
          isValid = false;
        }

        if ((param.values[0].selected !== 0 || param.values[1].selected !== 0) && !self.selectedNotch) {
          isValid = false;
        }
      } else if (param.name === "Axis (??)") {
        if (!!self.selectedNotch &&  (param.selected === null || param.selected === undefined)) {
          isValid = false;
        }
      } else if (!param.noRequired && (param.selected === null || param.selected === undefined || param.selected === '')) {
          isValid = false;
      }
    });

    if (this.quantity === null  || this.price === null || (this.patient === null || this.patient === '')) {
        isValid = false;
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
}
