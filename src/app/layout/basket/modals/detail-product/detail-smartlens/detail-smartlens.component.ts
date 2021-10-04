import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-detail-smartlens',
  templateUrl: './detail-smartlens.component.html',
  styleUrls: ['./detail-smartlens.component.scss']
})
export class DetailSmartlensComponent implements OnInit {

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
    this.product = this.productRequested.product;
    this.subtotal = this.productRequested.price * this.productRequested.quantity;
  }

  getParams() {
    let params = this.detail.parameters;

    if (this.detail.design === "Sph") {
      params =  _.filter(params, function(param) {
        // Remove params cylinder and axis when design is Sph.
        return param.name !== 'Cylinder (D)' && param.name !== 'Axes Cylinder(º)';
      });
    }

    if (this.detail.typeLens === 'Final Design') {
      params =  _.filter(params, function(param) {
        // Excluding params design by laboratory
        return param.name !== 'Over-refraction';
      });
    }
    return params;
  }

  close() {
    this.modalReference.close();
  }
 }
