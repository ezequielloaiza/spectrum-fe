import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-europa',
  templateUrl: './detail-europa.component.html',
  styleUrls: ['./detail-europa.component.scss']
})
export class DetailEuropaComponent implements OnInit {

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

  close() {
    this.modalReference.close();
  }
}
