import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import {  } from '../../../shared/models/invoice-supplier';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modify-generate-order',
  templateUrl: './modify-generate-order.component.html',
  styleUrls: ['./modify-generate-order.component.scss']
})
export class ModifyGenerateOrderComponent implements OnInit {
  form: FormGroup;
  order: any;
  user: any;
  titleModal: any;

  constructor(
    public modalReference: NgbActiveModal,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.translate.get("Generate Order", { value: "Generate Order" }).subscribe((res1: string) => {
      this.titleModal = res1;
    });
    this.order.listDetailsAll = this.order.listDetailsAll || this.order.listProductRequested;
    _.each(this.order.listDetailsAll, function (opr) {
      opr.productRequested.priceBase = opr.productRequested.priceBase = opr.productRequested.price;
    });
  }

  close() {
    this.modalReference.close();
  }

  total() {
    return  _.sumBy(this.order.listDetailsAll, function (opr: any) {
      return opr.productRequested.priceBase * opr.productRequested.quantity;
    });
  }

  modifyGenerateOrder() {
    this.spinner.show();

    let productsRequestedToUpdate = _.map(this.order.listDetailsAll, function(opr) {
      return {idProductRequested: opr.productRequested.idProductRequested, price: opr.productRequested.priceBase}
    });

    this.orderService.modifyGenerateOrder$(this.order.idOrder, productsRequestedToUpdate).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.close();
        this.translate
          .get('Successfully Generated', { value: 'Successfully Generated' })
          .subscribe((res1: string) => {
            this.notification.success('', res1);
          });
        this.spinner.hide();
        this.close();
      } else {
        this.spinner.hide();
        console.log(res.code);
      }
    },error => {
      console.log('error', error);
    });
  }
}
