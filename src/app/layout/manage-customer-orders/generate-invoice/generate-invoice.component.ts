import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService, ProductsRequestedService } from '../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { InvoiceSupplier } from '../../../shared/models/invoice-supplier';
import * as _ from 'lodash';
import { InvoiceSupplierProductRequested } from '../../../shared/models/invoicesupplierproductrequested';
import { UserStorageService } from '../../../http/user-storage.service';
import { InvoiceService } from '../../../shared/services/invoiceSupplier/invoiceSupplier.service';

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
  invoice: InvoiceSupplier = new InvoiceSupplier();
  pilot: any;
  titleModal: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.user = JSON.parse(this. userStorageService.getCurrentUser()).userResponse;
    this.loadInvoice();
    this.translate
            .get("Provider's Invoice", { value: "Provider's Invoice" })
            .subscribe((res1: string) => {
              this.titleModal = res1;
            });
  }

  initializeForm() {
    this.form = this.formBuilder.group({});
  }

  close() {
    this.modalReference.close();
  }

  loadInvoice() {
    if (this.order !== undefined) {
      this.invoiceService.allInvoiceByOrder$(this.order.idOrder).subscribe(
        res => {
          if (res.code === CodeHttp.ok) {
            const invoices = res.data;
            if (invoices.length > 0) {
              this.invoice = invoices[0];
            } else {
              this.loadInvoiceFromOrder();
              console.log('inv',this.invoice);
            }
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

  loadInvoiceFromOrder() {
    let productReq = [];
    this.invoice.address = this.order.address;
    this.invoice.idAddress = this.order.address.idAddress;
    this.invoice.date = this.today;
    this.invoice.user = this.order.user;
    this.invoice.idOrder = this.order.idOrder;
    this.invoice.number = this.order.number;
    this.invoice.subtotal = this.order.subtotal;
    this.invoice.total = this.order.total;
    this.invoice.idUser = this.order.user.idUser;
    const ship = 0;
    this.invoice.shipping = ship;
    this.invoice.due = this.order.total;
    _.each(this.order.listProductRequested, function(pRequested) {
      const productR = new InvoiceSupplierProductRequested();
      productR.idProductRequested = pRequested.productRequested.idProductRequested;
      productR.productRequested = pRequested.productRequested;
      productR.urlImage = pRequested.productRequested.urlImage;
      productR.price = pRequested.productRequested.price;
      productR.tax = pRequested.tax;
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
    this.invoice.due = sum;
  }

  generateInvoice(send, idOrder) {
    this.orderService.generateInvoice$(idOrder, send, this.invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.close();
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
