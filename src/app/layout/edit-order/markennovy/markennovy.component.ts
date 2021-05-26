import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProductsRequestedService } from '../../../shared/services';
import { UserStorageService } from '../../../http/user-storage.service';
import { ProductRequested } from '../../../shared/models/productrequested';
import { NgxSpinnerService } from 'ngx-spinner';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-markennovy',
  templateUrl: './markennovy.component.html',
  styleUrls: ['./markennovy.component.scss']
})
export class MarkennovyComponent implements OnInit {

  basket: any;productRequested: ProductRequested = new ProductRequested();
  productRequestedAux: ProductRequested = new ProductRequested();
  product: any;
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
  codeMarkennovy: any;
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
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.quantity = this.productRequested.quantity;
    this.observations = this.productRequested.observations;
    this.price = this.productRequested.price;
    this.patient = this.productRequested.patient;
    this.codeMarkennovy = this.product.code;
    let paramet = this.addSign();
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
          productSelected.selected = item.selected;
        }
     });
    });
    this.product.parameters = paramet;
  }

  save() {
    this.spinner.show();
    let paramet = this.product.parameters;
    _.each(this.detail.parameters, function(item) {
      _.each(paramet, function(productSelected) {
        if (productSelected.name === item.name) {
            item.selected = productSelected.selected;
        }
     });
    });
    if (this.typeEdit === 1) { // Basket
        this.productRequested.idProductRequested = this.basket.productRequested.idProductRequested;
        this.productRequested.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                      parameters: this.detail.parameters, code: this.codeMarkennovy}) + ']';
        this.productRequested.observations = this.observations;
        this.productRequested.price = this.price;
        this.productRequested.quantity = this.quantity;
        this.productRequested.product = this.product.idProduct;
        this.productRequested.patient = this.patient;
        this.update(this.productRequested);
   } else { // Order Detail
        this.productRequestedAux.idProductRequested = this.detailEdit.idProductRequested;
        this.productRequestedAux.detail = '[' + JSON.stringify({ name: '', eye: this.detail.eye,
                                         parameters: this.detail.parameters, code: this.codeMarkennovy}) + ']';
        this.productRequestedAux.observations = this.observations;
        this.productRequestedAux.price = this.price;
        this.productRequestedAux.quantity = this.quantity;
        this.productRequestedAux.product = this.product.idProduct;
        this.productRequestedAux.patient = this.patient;
        this.update(this.productRequestedAux);
    }
  }

  formIsValid() {
    let valido = true;
    let paramet = this.product.parameters;
      _.each(paramet, function(productSelected) {
        if (productSelected.selected === null || productSelected.selected === undefined) {
           valido = false;
          }
     });
     if (this.quantity === null  || this.price === null || !this.patient) {
          valido = false;
     }
     return valido;
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

  addSign(): any {
    let parameters = this.product.parameters;;
    let auxNeg = [];
    let auxPos = [];
    _.each(parameters, function(param, index) {
      if (param.name === 'Sphere (D)') {
        _.each(param.values, function(item) {
            if (_.includes(item, '-') || item === '0.00' ) {
              auxNeg.push(item);
            } else {
              item = '+' + item;
              auxPos.push(item);
            }
        });
        _.reverse(auxNeg);
        auxPos = _.concat(auxPos, auxNeg);
        parameters[index].values = auxPos;
      }
    });
    return parameters;
  }


  resetParams(eye, parameter) {

    if (parameter.name === "Diameter (mm)") {
      let baseCurve = null;
      baseCurve = _.find(this.product.parameters, { name: 'Base Curve (mm)' });

      if (baseCurve) {
        // Reset selection base curve
        baseCurve.selected = null;
      }
    }

    if (parameter.name === "Dominance") {
      // ADDITION
      let addition = null;
      addition = _.find(this.product.parameters, { name: 'Addition' });

      if (addition) {
        // Reset selection addition
        addition.selected = null;
      }

      //SPHERE
      let sphere = null;
      sphere = _.find(this.product.parameters, { name: 'Sphere (D)' });

      if (sphere) {
        // Reset selection sphere
        sphere.selected = null;
      }

      this.codeMarkennovy = this.product.code;
    }

    if (parameter.name === 'Cylinder (D)') {
      let axes = null;
      axes = _.find(this.product.parameters, { name: 'Axes (º)' });

      if (axes) {
        // Reset selection base curve
        axes.selected = null;
      }
    }
  }

  changeSelect(parameter, value) {

    if (parameter.name === "Diameter (mm)") {
      let baseCurve = null;
      baseCurve = _.find(this.product.parameters, { name: 'Base Curve (mm)' });

      if (!baseCurve) {
        return;
      }

      // Reset selection base curve
      baseCurve.selected = null;

      switch (this.product.father) {
        case "Gentle 80":
        case "Gentle 59":
          switch (value) {
            case "13.0":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "13.5":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2"];
              break;
            case "14.0":
              baseCurve.values = ["7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5"];
              break;
            case "14.5":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.0":
              baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.5":
              baseCurve.values = ["8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.0":
              baseCurve.values = ["8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        case "Blu:gen":
          switch (value) {
            case "11.5":
            case "12.0":
              baseCurve.values = ["6.5", "6.8","7.1", "7.4", "7.7", "8.0", "8.3"];
              break;
            case "12.5":
            case "13.0":
              baseCurve.values = ["6.5", "6.8","7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "13.5":
              baseCurve.values = ["6.8","7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2"];
              break;
            case "14.0":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5"];
              break;
            case "14.5":
              baseCurve.values = ["7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.0":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.5":
              baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.0":
              baseCurve.values = ["8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.5":
              baseCurve.values = ["8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        case "Saphir Rx":
        case "Saphir":
          switch (value) {
            case "13.0":
              baseCurve.values = ["6.8","7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "13.5":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2"];
              break;
            case "14.0":
              baseCurve.values = ["7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5"];
              break;
            case "14.5":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.0":
              baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.5":
              baseCurve.values = ["8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.0":
              baseCurve.values = ["8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        case "Quattro 3-Monthly":
        case "Quattro Conventional":
          switch (value) {
            case "13.0":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "14.5":
              if (this.product.name === "Quattro Sph UV x1 Conv") {
                baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              } else {
                baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              }
              break;
          }
          break;

        default:
          break;
      }
    }

    if (parameter.name === "Dominance") {
      // ADDITION
      let addition = null;
      addition = _.find(this.product.parameters, { name: 'Addition' });

      if (addition) {
        // Reset selection addition
        addition.selected = null;

        switch (this.product.father) {
          case "Quattro 3-Monthly":
          case "Quattro Conventional":
            switch (value) {
              case "CN":
                addition.values = ["1.0", "1.75", "2.50"];
                break;
              case "CD":
                addition.values = ["1.0", "2.0", "3.0"];
                break;
            }
          default:
            break;
        }
      }

      //SPHERE
      let sphere = null;
      sphere = _.find(this.product.parameters, { name: 'Sphere (D)' });

      if (sphere) {
        // Reset selection sphere
        sphere.selected = null;

        switch (this.product.father) {
          case "Quattro 3-Monthly":
          case "Quattro Conventional":
            switch (value) {
              case "CN":
                sphere.values = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "3.25", "3.50", "3.75", "4.00", "4.25", "4.50", "4.75", "5.00", "5.25", "5.50", "5.75", "6.00", "6.25", "6.50", "6.75", "7.00", "7.25", "7.50", "7.75", "8.00"];
                break;
              case "CD":
                sphere.values = ["-12.00", "-11.75", "-11.50", "-11.25", "-11.00", "-10.75", "-10.50", "-10.25", "-10.00", "-9.75", "-9.50", "-9.25", "-9.00", "-8.75", "-8.50", "-8.25", "-8.00", "-7.75", "-7.50", "-7.25", "-7.00", "-6.75", "-6.50", "-6.25", "-6.00", "-5.75", "-5.50", "-5.25", "-5.00", "-4.75", "-4.50", "-4.25", "-4.00", "-3.75", "-3.50", "-3.25", "-3.00", "-2.75", "-2.50", "-2.25", "-2.00", "-1.75", "-1.50", "-1.25", "-1.00"];
                break;
            }
          default:
            break;
        }
      }
    }

    if (parameter.name === "Cylinder (D)") {
      let axes = null;
      axes = _.find(this.product.parameters, { name: 'Axes (º)' });

      if (!axes) {
        return;
      }

      // Reset selection base curve
      axes.selected = null;
    }
  }
}
