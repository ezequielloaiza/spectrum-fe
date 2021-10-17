import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-info-params',
  templateUrl: './info-params.component.html',
  styleUrls: ['./info-params.component.scss']
})
export class InfoParamsComponent implements OnInit {

  @Input() eye: any;
  @Input() newParameters: any;
  @Input() typeParams: any;
  @Input() enableParams: any;

  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output("changeParam") changeParam: EventEmitter<any> = new EventEmitter();

  parameters: any;
  globalHeader = [];
  isSelectedDesign = false;

  eyeSelected: any;

  constructor() {}

  ngOnInit(): void {
    //this.getHeader();
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
       return  _.filter(this.newParameters, function (param) {
          return param.header;
        });

      case 'body':
        return _.filter(this.newParameters, function (param) {
          return !param.header;
        });
    }
  }

  changeParamValue(paramHeader) {
    this.changeParam.emit({ param: paramHeader, eye: this.eye });
  }

  setRadioButtonValue(param, eye, value) {
    //let parameters = eye === 'right' ? this.product.parametersRight : this.product.parametersLeft;
    _.forEach(this.parameters, function (param) {
      if (param.name === param.name) {
        param.selected = value;
      }
    });
  }

  cleanEye(eye) {
   // let parameters = eye === 'right' ? this.product.parametersRight : this.product.parametersLeft;
    if (!this.eyeSelected) {
      this.newParameters = [];
      _.forEach(this.parameters, function (param) {
        if (param.type === 'radio') {
          param.selected = 'No';
        } else {
          param.selected = null;
        }
      });
    }
  }
}
