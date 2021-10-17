import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
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
  priceHydrapeg
  productRequestedNotch: any;
  productRequestedHydrapeg: any;

  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productRequestedService: ProductsRequestedService,
              private productService: ProductService,
              private userService: UserStorageService,
              private basketProductRequestedService: BasketproductrequestedService,
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
    this.typeLens = JSON.parse(this.product.types)[0].typeLens;
    this.design = JSON.parse(this.product.types)[0].design;
    this.product.materials = JSON.parse(this.product.types)[0].materials;
    this.product.hydrapeg = JSON.parse(this.product.types)[0].hydrapeg;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.patient = this.productRequested.patient;
    let self = this;

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
    this.findByGroupdId();
  }

  getOtherProducts() {
    this.productService.findBySupplierAndInViewAndCategory$(14, false, 10).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.setInfoAdditionalPrices(res.data);
        this.definePrice();
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

  findByGroupdId() {
    const eye = JSON.parse(JSON.stringify(this.productRequested.detail))[0].eye;
    this.basketProductRequestedService.allBasketByGroupId$(this.productRequested.groupId).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        let prNotch;
        let prHydrapeg;
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
                prNotch = basket.productRequested;
              }
              break;
          }
        });
        this.productRequestedNotch = prNotch;
        this.productRequestedHydrapeg = prHydrapeg;
      }
    }, error => {
      console.log('error', error);
    });
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
          "notch" :{
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

  definePrice() {
    const membership = this.basket.basket.user.membership.idMembership;
    switch (membership) {
      case 1:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.gold;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.gold;
        break;
      case 2:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamond;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.diamond;
        break;
      case 3:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.preferred;
        this.priceNotch = this.product.infoAdditionalPrices.values.notch.preferred;
        break;
    }
  }

  setFullPrice() {
    this.price = this.productRequested.priceBase;

    this.price += this.getAdditionalPrices().notch;
    this.price += this.getAdditionalPrices().hydrapeg;
  }

  getAdditionalPrices() {
    let notchPrice = 0;
    let hydrapegPrice = 0;

    // Finding Notch
    const notch: any = _.find(this.product.parameters, { name: 'Notch (mm)' });
    if (notch.selected !== '0x0' && notch.selected) {
      notchPrice = this.priceNotch;
    }

    // Finding Hydrapeg
    if (this.product.hydrapeg.selected === "Yes") {
      hydrapegPrice = this.priceHydrapeg;
    }

    return { notch: notchPrice, hydrapeg: hydrapegPrice };
  }

  getParams() {
    let params = this.product.parameters;

    if (this.design.selected === "Sph") {
      params =  _.filter(params, function(param) {
        // Remove params cylinder and axis when design is Sph.
        return param.name !== 'Cylinder (D)' && param.name !== 'Axis Cylinder(º)' && param.name !== 'Position of axis rotation markers' && param.name !== 'Rotationally stable';
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
        this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                      parameters: this.detail.parameters, typeLens: this.detail.typeLens,
                                      design: this.detail.design, materials: this.detail.materials, hydrapeg: this.detail.hydrapeg,
                                      productsAdditional: self.getProductsAdditional(this.productRequested, 'detail')}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.productRequested.priceBase;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.product.idProduct;
        this.productRequested.patient = this.patient;
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
          parameters: this.detail.parameters, typeLens: this.detail.typeLens,
          design: this.detail.design, materials: this.detail.materials, hydrapeg: this.detail.hydrapeg,
          productsAdditional: self.getProductsAdditional(this.productRequested, 'detail')}) + ']';
        this.productRequestedAux.observations = this.observations;
        this.productRequestedAux.price = this.productRequested.priceBase;
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = this.product.idProduct;
        this.productRequestedAux.patient = this.patient;
    }

    const productRequested = this.typeEdit === 1 ? this.productRequested : this.productRequestedAux;

    let requestedProducts = [JSON.parse(JSON.stringify(productRequested))];
    _.each(self.getProductsAdditional(productRequested, 'basket'), function(additional) {
      requestedProducts.push(additional);
    });

    this.update(requestedProducts);
  }

  getProductsAdditional(productSelected: any, type: any) {
    const additionals = [];

    // Type is basket (detail) and when is detail (productSelected)
    const eye = productSelected.eye || productSelected.detail.eye;

    const productNotch: any = _.find(this.productsAdditional, {name:"Notch"});
    const productHydrapeg: any = _.find(this.productsAdditional, {name:"Hydrapeg"});


    /////////////////////////////// NOTCH //////////////////////////////////
    if (this.getAdditionalPrices()["notch"] || this.productRequestedNotch) {
      const notch = {
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
        delete: !this.getAdditionalPrices()["notch"],
        basketId: this.basket.basket.idBasket
      }

      if (type === 'basket') {
        notch.detail = productSelected.detail;
      }
      additionals.push(notch);
    }

    /////////////////////////////// HYDRAPEG //////////////////////////////////

    if (this.getAdditionalPrices()["hydrapeg"] || this.productRequestedHydrapeg) {
      const hydrapeg = {
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
        delete: !this.getAdditionalPrices()["hydrapeg"],
        basketId: this.basket.basket.idBasket
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
      } else if (param.name === "Axis (º)") {
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
