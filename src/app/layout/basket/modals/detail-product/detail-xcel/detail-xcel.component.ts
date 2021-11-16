import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-detail-xcel',
  templateUrl: './detail-xcel.component.html',
  styleUrls: ['./detail-xcel.component.scss']
})
export class DetailXcelComponent implements OnInit {

  basket: any;
  productRequested: any;
  product: any;
  detail: any;
  subtotal: any;

  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.productRequested = this.basket.productRequested;
    this.detail = this.productRequested.detail[0];
    console.log("viendo que trajo de atras", this.productRequested);
    this.product = this.productRequested.product;
    this.subtotal = this.productRequested.price * this.productRequested.quantity;
    this.setPrice();
  }

  setPrice() { //this could be for final price, when you buy it
    if (!this.detail.eyeSelected.right && this.detail.eyeSelected.left) { //only shows full price at left eye it not right eye selected
      this.subtotal += this.detail.insertor ? this.detail.insertor.price : 0;
      this.subtotal += this.detail.hydrapeg.left ? this.detail.hydrapeg.price : 0;
    } else if (this.detail.eye.toLowerCase() === 'right') { //if there are two eye selected, then, it will only appear at right eye
      this.subtotal = this.detail.insertor.selected === 'Yes' ? (this.detail.insertor.price + this.subtotal) : this.subtotal;
      this.subtotal = this.detail.hydrapeg.hydrapeg.right ? (this.detail.hydrapeg.price + this.subtotal) : this.subtotal;
    } else {
      this.subtotal = this.detail.insertor.selected === 'Yes' ? (this.detail.insertor.price +this.subtotal) : this.subtotal;
      this.subtotal = this.detail.hydrapeg.hydrapeg.left ? (this.detail.hydrapeg.price + this.subtotal) : this.subtotal;
    }
  }

  getParams() {
    let params = this.detail.parameters;

    /* if (this.detail.design === "Sph") {
      params =  _.filter(params, function(param) {
        // Remove params cylinder and axis when design is Sph.
        return param.name !== 'Cylinder (D)' && param.name !== 'Axis Cylinder(º)' && param.name !== 'Position of axis rotation markers' && param.name !== 'Rotationally stable';
      });
    }

    if (this.detail.typeLens === 'Final Design') {
      params =  _.filter(params, function(param) {
        // Excluding params design by laboratory
        return param.name !== 'Over-refraction';
      });
    } */
    return params;
  }

  close() {
    this.modalReference.close();
  }
 }
