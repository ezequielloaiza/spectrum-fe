import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-info-params',
  templateUrl: './info-params.component.html',
  styleUrls: ['./info-params.component.scss']
})
export class InfoParamsComponent implements OnInit {

  @Input() eye: any;
  @Input() product: any

  eyeSelected: any;

  constructor() {}

  ngOnInit(): void {
  }

  quantity() {
    return this.eye === 'right' ? 'quantityRight' : 'quantityLeft';
  }

  selectEye() {
    this.eyeSelected = !this.eyeSelected;
    //CLEAN PARAMS IF EYESELECTED
  }

  getParams() {
    return this.eye === 'right' ? this.product.parametersRight : this.product.parametersLeft;
  }
}
