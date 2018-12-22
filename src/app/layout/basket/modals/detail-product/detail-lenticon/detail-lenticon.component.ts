import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-lenticon',
  templateUrl: './detail-lenticon.component.html',
  styleUrls: ['./detail-lenticon.component.scss']
})
export class DetailLenticonComponent implements OnInit {

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
