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
import { UserStorageService } from '../../../http/user-storage.service';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {
  form: FormGroup;
  order: any;
  user: any;
  today: Date = new Date();
  invoice: Invoice = new Invoice();

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService
  ) {}

  ngOnInit() {
    console.log('order:', this.order);
    this.initializeForm();
    this.user = JSON.parse(this. userStorageService.getCurrentUser()).userResponse;
    console.log('user', this.user);
    this.loadInvoice();
    console.log('invoice:', this.invoice);
  }

  initializeForm() {
    this.form = this.formBuilder.group({});
  }

  close() {
    this.modalReference.close();
  }

  loadInvoice() {
    const productReq = [];
    this.invoice.address = this.order.address;
    this.invoice.idAddress = this.order.address.idAddress;
    this.invoice.date = this.today;
    this.invoice.user = this.order.user;
    this.invoice.idOrder = this.order.idOrder;
    this.invoice.number = this.order.number;
    this.invoice.subtotal = this.order.subtotal;
    this.invoice.total = this.order.total;
    this.invoice.user = this.user;
    this.invoice.idUser = this.user.idUser;
    _.each(this.order.listProductRequested, function(pRequested) {
      const productR = new InvoiceProductRequested();
      productR.idProductRequested = pRequested.productRequested.idProductRequested;
      productR.productRequested = pRequested.productRequested;
      productR.urlImage = pRequested.productRequested.urlImage;
      productR.price = pRequested.productRequested.price;
      productR.netAmount =
        pRequested.productRequested.price *
        pRequested.productRequested.quantity;
      productReq.push(productR);
    });
    this.invoice.listProductRequested = productReq;
  }

  updateUnitPrice($event, index) {
    this.invoice.listProductRequested[index].price = $event.target.value;
    this.invoice.listProductRequested[index].netAmount =
      this.invoice.listProductRequested[index].price *
      this.invoice.listProductRequested[index].productRequested.quantity;
    this.sumNetAmount();
  }

  sumNetAmount() {
    let sum = 0;
    _.each(this.invoice.listProductRequested, function(pRequested) {
      sum += pRequested.netAmount;
    });
    this.invoice.subtotal = sum;
    this.invoice.total = sum;
  }

  generateInvoice(idOrder) {
    this.orderService.generateInvoice$(idOrder, this.invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate
            .get('Successfully Generated', { value: 'Successfully Generated' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
        } else {
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
