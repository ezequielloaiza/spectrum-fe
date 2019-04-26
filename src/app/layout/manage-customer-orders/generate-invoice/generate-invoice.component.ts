import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
import { InvoiceSupplierService } from '../../../shared/services/invoiceSupplier/invoiceSupplier.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  dueDate: Date = new Date();
  invDate: any;
  invDueDate: any;
  original: InvoiceSupplier = new InvoiceSupplier();
  invoice: InvoiceSupplier = new InvoiceSupplier();
  listProducts: Array<any> = new Array;
  listOrders: Array<any> = new Array;
  pilot: any;
  titleModal: any;
  ordersNumber: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceSupplierService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.initializeForm();
    console.log('PILOT',this.pilot);
    this.user = JSON.parse(this. userStorageService.getCurrentUser()).userResponse;
    this.loadInvoice();
    this.dueDate.setDate(this.today.getDate() + 30);
    this.invDate = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate()};
    this.invDueDate = {year: this.dueDate.getUTCFullYear(), month: this.dueDate.getMonth() + 1, day: this.dueDate.getDate()};
    this.translate
            .get("Provider's Invoice", { value: "Provider's Invoice" })
            .subscribe((res1: string) => {
              this.titleModal = res1;
            });
    this.loadOrderNumbers();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      invDate   : [this.invDate, [Validators.required]],
      invDueDate: [this.invDueDate, [Validators.required]],
    });
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
              if (this.invoice.dateSend !== null || this.invoice.dateSend !== undefined) {
                this.pilot = true;
              }
              this.loadOrderNumbers();
            } else {
              this.loadInvoiceFromOrder();
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

  getProducts(): void {
    let list = this.listProducts;
    _.each(this.listOrders, function(order) {
      _.each(order.listProductRequested, function(oPR) {
        list.push(oPR.productRequested);
      });
    });
    this.listProducts = list;
  }

  loadOrderNumbers() {
    let auxNumbers = '';
    let ids = [];
    if (this.invoice.listOrders != undefined && this.invoice.listOrders.length > 0) {
      ids = this.invoice.listOrders.map(String);
    } else {
      if (this.order !== undefined) {
        ids = [this.order.idOrder];
      }
    }
    this.orderService.findByIds$(ids).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        const orders = res.data;
        _.each(orders, function(order) {
          auxNumbers += order.number + ', ';
        });
        if (auxNumbers.trim().endsWith(',')) {
          auxNumbers = auxNumbers.substring(0, auxNumbers.lastIndexOf(', ') - 2);
        }
        this.ordersNumber = auxNumbers;
        this.listOrders = orders;
        this.getProducts();
      } else {
        console.log(res.code);
      }
    },
    error => {
      console.log('error', error);
    });
  }

  loadInvoiceFromOrder() {
    let productReq = [];
    this.invoice.address = this.order.address;
    this.invoice.idAddress = this.order.address.idAddress;
    this.invoice.date = this.today;
    const date = new Date(this.invoice.date);
    this.invDate = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.invoice.dueDate = this.dueDate;
    const dueDate = new Date(this.invoice.date);
    this.invDueDate = {year: dueDate.getUTCFullYear(), month: dueDate.getMonth() + 1, day: dueDate.getDate()};
    this.invoice.user = this.order.user;
    this.invoice.number = this.order.number;
    this.invoice.subtotal = this.order.subtotal;
    this.invoice.total = this.order.total;
    this.invoice.idUser = this.order.user.idUser;
    this.invoice.original = true;
   // const ship = 0;
    this.invoice.shipping = this.order.shippingPrice;
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
      productR.quantity = pRequested.productRequested.quantity;
      // tslint:disable-next-line:max-line-length
      const code = (pRequested.productRequested.product.code != null ? pRequested.productRequested.product.code : pRequested.productRequested.product.name);
      const name = (pRequested.productRequested.product.code !== null ?
        pRequested.productRequested.product.name : '') + ' ' + (pRequested.productRequested.product.material !== null ?
          pRequested.productRequested.product.material : '');
      productR.description = code + name;
      productReq.push(productR);
    });

    this.invoice.listProductRequested = productReq;
    this.original = this.invoice;
    this.original.original = true;
    this.invoice.numberOriginal = this.original.number;
  }

  updateProduct($event, index) {
    const pR = $event.target.value;
    const prod = this.listProducts.find(x => (x.idProductRequested == pR));
    this.invoice.listProductRequested[index].idProductRequested = $event.target.value;
    this.invoice.listProductRequested[index].description = prod.product.name + '-' + prod.product.material;
  }

  updateUnitPrice($event, index) {
    this.invoice.listProductRequested[index].price = $event.target.value;
  }

  updateQuantity($event, index) {
    this.invoice.listProductRequested[index].quantity = $event.target.value;
  }

  updateDescription($event, index) {
    this.invoice.listProductRequested[index].description = $event.target.value;
  }

  updateTax($event, index) {
    this.invoice.listProductRequested[index].tax = $event.target.value;
  }

  updateNetAmount($event, index) {
    this.invoice.listProductRequested[index].netAmount = $event.target.value;
  }

  updateSubtotal($event) {
    this.invoice.subtotal = $event.target.value;
  }

  updateShipping($event) {
    this.invoice.shipping = $event.target.value;
  }

  updateTotal($event) {
    this.invoice.total = $event.target.value;
  }

  updateAmountDue($event) {
    this.invoice.due = $event.target.value;
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

  addItem() {
    const invSupplier = new InvoiceSupplierProductRequested();
    this.invoice.listProductRequested.push(invSupplier);
    console.log('list', this.invoice.listProductRequested.length);
  }

  generateInvoice(send, idOrder) {
    this.spinner.show();
    let invoices = [this.original, this.invoice];
    this.orderService.generateInvoiceSupplierAndCopy$(idOrder, send, invoices).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate
            .get('Successfully Generated', { value: 'Successfully Generated' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
          this.spinner.hide();
        } else {
          this.spinner.hide();
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
