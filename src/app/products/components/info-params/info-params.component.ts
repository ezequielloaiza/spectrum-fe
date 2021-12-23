import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-info-params',
  templateUrl: './info-params.component.html',
  styleUrls: ['./info-params.component.scss']
})
export class InfoParamsComponent implements OnInit {

  @Input() eye: any;
  @Input() parameters: any;
  @Input() typeParams: any;
  @Input() enableParams: any;
  @Input() quantityDisabled: any;

  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output("changeParamsAndPrice") changeParamsAndPrice: EventEmitter<any> = new EventEmitter();

  globalHeader = [];
  isSelectedDesign = false;

  eyeSelected: any;
  paramsByDefault: any;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.paramsByDefault = JSON.parse(JSON.stringify(this.parameters));
  }

  getLabelEye() {
    return this.eye === 'right' ? 'OD' : 'OS'
  }

  selectEye() {
    this.eyeSelected = !this.eyeSelected;
    this.select.emit({name: this.eye, value: this.eyeSelected});
    //CLEAN PARAMS IF EYESELECTED
  }

  getParams() {
    switch (this.typeParams) {
      case 'header':
        return _.filter(this.parameters, function (param) {
          return param.header;
        });

      case 'body':
        return _.filter(this.parameters, function (param) {
          return !param.header;
        });
    }
  }

  changeParamsAndPriceValue(parameter) {
    this.changeParamsAndPrice.emit({ param: parameter, eye: this.eye });
  }

  setRadioButtonValue(parameter, eye, value) {
    //let parameters = eye === 'right' ? this.product.parametersRight : this.product.parametersLeft;
    _.each(this.parameters, function (param) {
      if (parameter.name === param.name) {
        param.selected = value;
      }
    });
  }

  cleanEye() {
    let self = this;

    if (!this.eyeSelected) {
      _.each(this.parameters, function (param) {
        _.each(self.paramsByDefault, function (p) {
          if (param.name === p.name) {
            param.selected = p.selected;
          }
        });
      });
    }
  }

  qtyDisabled(param) {
    return this.quantityDisabled && param.name === 'Quantity'
  }

  setMinimum(param) {

    if (param.name === 'Quantity') {
      return 1
    } else if (['BC', 'Base Curve', 'Diameter'].some(x => param.name.includes(x))) {
      return 0
    } else {
      return null
    }
  }

  changeRequired(parameter) {
    if (parameter === 'Edge') {
      let design = this.parameters.find(p => p.name === 'Design').selected;
      if (!!design && ['Apex', 'Pinnacle', 'Titan'].some(x => design.includes(x))) {
        return true;
      }
      return false;
    }
  }
}
