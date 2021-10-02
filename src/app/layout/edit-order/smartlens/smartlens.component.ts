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

@Component({
  selector: 'app-smartlens',
  templateUrl: './smartlens.component.html',
  styleUrls: ['./smartlens.component.scss']
})
export class SmartlensComponent implements OnInit {

  basket: any;productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
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
  axesSelected: any;

  // Values of product
  typeLens: any;
  design: any;
  materials: any;
  hydrapeg: any;


  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private productRequestedService: ProductsRequestedService,
              private userService: UserStorageService,
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
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    let self = this;

    // Set typeLens
    this.changeTypeLens(this.detail.typeLens);

    // Set desing
    this.changeDesign(this.detail.design);

    // Set Materials
    this.changeMaterials(this.detail.materials);

    // Set Hydrapeg
    this.changeSelect(this.product.hydrapeg, this.detail.hydrapeg, 0);


    // Set selected value in parameters
    _.each(this.detail.parameters, function(item) {
      _.each(self.product.parameters, function(productSelected) {
        if (productSelected.name === item.name) {
          self.changeSelect(productSelected, item.selected, 0);
        }
      });
    });
  }

  getParams() {
    if (this.typeLens.selected === 'Final Design') {
      return _.filter(this.product.parameters, function(param) {
        // Excluding params design by laboratory
        return param.name !== 'Over-refraction';
      });
    }
    return this.product.parameters;
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


  changeTypeLens(value) {
    this.typeLens.selected = value;

    if (value === 'Final Design') {
      const overRefraction: any = _.find(this.product.parameters, { name: 'Over-refraction' });
      if (overRefraction) {
        overRefraction.selected = null;
      }
    }
  }

  changeDesign(value) {
    this.design.selected = value;
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
        }
      });
    });

    if (this.typeEdit === 1) { // Basket
        this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
        this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                      parameters: this.detail.parameters, typeLens: this.detail.typeLens,
                                      design: this.detail.design, materials: this.detail.materials, hydrapeg: this.detail.hydrapeg}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.price;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.product.idProduct;
        this.productRequested.patient = this.patient;
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
          parameters: this.detail.parameters, typeLens: this.detail.typeLens,
          design: this.detail.design, materials: this.detail.materials, hydrapeg: this.detail.hydrapeg}) + ']';
        this.productRequestedAux.observations = this.observations;
        this.productRequestedAux.price = this.price;
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = this.product.idProduct;
        this.productRequestedAux.patient = this.patient;
        this.update(this.productRequestedAux);
    }
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
      } else if (param.name === "Axes (º)") {
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

  update(productRequested) {
    this.productRequestedService.update$(productRequested).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res1: string) => {
          this.notification.success('', res1);
        });
        productRequested = res.data;
        productRequested.detail = JSON.parse(productRequested.detail);
        this.modalReference.close(productRequested);
      } else {
        console.log(res);
      }
    }, error => {
      console.log('error', error);
    });
  }
}
