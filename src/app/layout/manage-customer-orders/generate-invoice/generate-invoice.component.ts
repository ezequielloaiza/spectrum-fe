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
              this.original = invoices[0].original ? invoices[0] : invoices[1];
              this.invoice = (invoices[0].original == false) ? invoices[0] : invoices[1];
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
    this.invoice.original = false;
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
    this.loadOriginalFromOrder();
  }

  loadOriginalFromOrder() {
    let productReq = [];
    this.original.address = this.order.address;
    this.original.idAddress = this.order.address.idAddress;
    this.original.date = this.today;
    const date = new Date(this.original.date);
    this.invDate = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.original.dueDate = this.dueDate;
    const dueDate = new Date(this.original.date);
    this.invDueDate = {year: dueDate.getUTCFullYear(), month: dueDate.getMonth() + 1, day: dueDate.getDate()};
    this.original.user = this.order.user;
    this.original.number = this.order.number;
    this.original.subtotal = this.order.subtotal;
    this.original.total = this.order.total;
    this.original.idUser = this.order.user.idUser;
    this.original.original = true;
   // const ship = 0;
    this.original.shipping = this.order.shippingPrice;
    this.original.due = this.order.total;
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

    this.original.listProductRequested = productReq;
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
    this.updateAmountProduct(index);
    this.sumNetAmount();
  }

  updateQuantity($event, index) {
    this.invoice.listProductRequested[index].quantity = $event.target.value;
    this.updateAmountProduct(index);
    this.sumNetAmount();
  }

  updateAmountProduct(index) {
    this.invoice.listProductRequested[index].netAmount = 
                    Number(this.invoice.listProductRequested[index].quantity * this.invoice.listProductRequested[index].price)
                    + Number(this.invoice.listProductRequested[index].tax);
  }

  updateDescription($event, index) {
    this.invoice.listProductRequested[index].description = $event.target.value;
  }

  updateTax($event, index) {
    this.invoice.listProductRequested[index].tax = $event.target.value;
    this.updateAmountProduct(index);
    this.sumNetAmount();
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

  updateComment($event) {
    this.invoice.comments = $event.target.value;
  }

  updateInstructions($event) {
    this.invoice.shippingInstructions = $event.target.value;
  }

  updateTerms($event) {
    this.invoice.termsAndConditions = $event.target.value;
  }

  updateDate($event) {
    const date = new Date(this.invDate.year, this.invDate.month - 1, this.invDate.day);
    this.invoice.date = date;
  }

  updateDueDate($event) {
    const date = new Date(this.invDueDate.year, this.invDueDate.month - 1, this.invDueDate.day);
    this.invoice.date = date;
  }

  updateNumber($event) {
    this.invoice.number = $event.target.value;
  }

  sumNetAmount() {
    let sum = 0;
    _.each(this.invoice.listProductRequested, function(pRequested) {
      sum += pRequested.netAmount;
    });
    this.invoice.subtotal = sum;
    this.invoice.total = sum + this.invoice.shipping;
    this.invoice.due = sum + this.invoice.shipping;
  }

  addItem() {
    const invSupplier = new InvoiceSupplierProductRequested();
    this.invoice.listProductRequested.push(invSupplier);
  }

  removeItem(index) {
    this.invoice.listProductRequested.slice(index, 1);
  }

  generateInvoice(send, idOrder) {
    this.spinner.show();
    let inv: Array<any> = new Array;
    inv.push(this.original);
    inv.push(this.invoice);
    console.log('invoices', inv);
    this.orderService.generateInvoiceSupplierAndCopy$(idOrder, send, inv).subscribe(
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
