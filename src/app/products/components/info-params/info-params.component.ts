import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output("changeParam") changeParam: EventEmitter<any> = new EventEmitter();

  globalHeader = [];
  isSelectedDesign = false;

  eyeSelected: any;
  paramsByDefault: any;

  constructor() {}

  ngOnInit(): void {
    this.paramsByDefault = JSON.parse(JSON.stringify(this.parameters));
  }

  /* quantity() {
    return this.eye === 'right' ? 'quantityRight' : 'quantityLeft';
  } */

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

  changeParamValue(parameter) {
    this.changeParam.emit({ param: parameter, eye: this.eye });
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
}
