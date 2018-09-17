import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Invoice } from '../../../shared/models/invoice';
import * as _ from 'lodash';
import { InvoiceProductRequested } from '../../../shared/models/invoiceproductrequested';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {

  form: FormGroup;
  order: any;
  today: Date = new Date();
  invoice: Invoice = new Invoice();

  constructor(public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService) { }

    ngOnInit() {
      console.log('order:', this.order);
      this.initializeForm();
      this.loadInvoice();
      console.log('invoice:', this.invoice);
    }

    initializeForm() {
      this.form = this.formBuilder.group({
      });
    }

    close() {
      this.modalReference.close();
    }

    loadInvoice() {
      const productReq = [];
      this.invoice.address = this.order.address;
      this.invoice.date = this.today;
      this.invoice.user = this.order.user;
      this.invoice.idOrder = this.order.idOrder;
      this.invoice.number = this.order.number;
      this.invoice.subtotal = this.order.subtotal;
      this.invoice.total = this.order.total;
      _.each(this.order.listProductRequested, function (pRequested) {
          const productR = new InvoiceProductRequested();
          productR.productRequested = pRequested.productRequested;
          /*productR.invoice = this.invoice;*/
          productR.urlImage = pRequested.productRequested.urlImage;
          productR.price = pRequested.productRequested.price;
          productR.netAmount = pRequested.productRequested.price * pRequested.productRequested.quantity;
          productReq.push(productR);
      });
      this.invoice.listProductRequested = productReq;
    }

    updateUnitPrice(value, index) {
      this.invoice.listProductRequested[index].price = value;
    }

    generateInvoice(order) {
    this.orderService.generateInvoice$(order, this.invoice).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.translate.get('Successfully Generated', { value: 'Successfully Generated' }).subscribe((res1: string) => {
          this.notification.success('', res1);
        });
      } else {
        console.log(res.code);
      }
    }, error => {
      console.log('error', error);
    });
    }

}
