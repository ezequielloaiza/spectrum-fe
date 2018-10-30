import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-markennovy',
  templateUrl: './detail-markennovy.component.html',
  styleUrls: ['./detail-markennovy.component.scss']
})
export class DetailMarkennovyComponent implements OnInit {

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
