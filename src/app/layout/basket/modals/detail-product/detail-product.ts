import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'detail-product',
  templateUrl: './detail-product.html',
  styleUrls: ['./detail-product.scss']
})
export class DetailProductModalComponent implements OnInit {
  basket: any;
  productRequested: any;
  product: any;
  detail: any;

  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.productRequested = this.basket.productRequested;
    this.detail = this.productRequested.detail[0];
    this.product = this.productRequested.product;
  }

  close() {
    this.modalReference.close();
  }
}
