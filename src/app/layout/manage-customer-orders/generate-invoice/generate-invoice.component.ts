import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  idsOrders: Array<any> = new Array;
  pilot: any;
  titleModal: any;
  ordersNumber: any;
  verify: any;
  allDelete: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceSupplierService,
    private spinner: NgxSpinnerService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.user = JSON.parse(this. userStorageService.getCurrentUser()).userResponse;
    this.dueDate.setDate(this.today.getDate() + 30);
    this.loadInvoice();
    this.getDates();
    this.translate
            .get("Provider's Invoice", { value: "Provider's Invoice" })
            .subscribe((res1: string) => {
              this.titleModal = res1;
            });
    this.loadOrderNumbers();
    this.verify = false;
    this.allDelete = false;
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
            console.log('invoices', invoices);
            if (invoices.length > 0) {
              this.original = invoices[0];
              this.loadInvoiceFromOriginal(this.original);
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
    } else {
      if (this.original.idInvoice != null && this.original.idInvoice != undefined) {
        this.loadInvoiceFromOriginal(this.original);
        this.loadOrderNumbers();
      } else {
        this.invoiceService.findByNumberAndOriginal$(this.invoice.numberOriginal).subscribe(
          res => {
            if (res.code === CodeHttp.ok) {
              const invoices = res.data;
              if (invoices.length > 0) {
                this.original = invoices[0];
                this.loadOrderNumbers();
                this.invoice.listProductRequested = this.loadProductRequestedFromInvoice(this.invoice);
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
  }

  getDates() {
    const date = new Date(this.invoice.date);
    this.invDate = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    const dueDate = new Date(this.invoice.dueDate);
    this.invDueDate = {year: dueDate.getUTCFullYear(), month: dueDate.getMonth() + 1, day: dueDate.getDate()};
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
    this.idsOrders = ids;
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

  loadInvoiceFromOriginal(original) {
    this.invoice.address = original.address;
    this.invoice.idAddress = original.idAddress;
    this.invoice.date = original.date;
    const date = new Date(this.invoice.date);
    this.invDate = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.invoice.dueDate = original.dueDate;
    const dueDate = new Date(this.invoice.dueDate);
    this.invDueDate = {year: dueDate.getUTCFullYear(), month: dueDate.getMonth() + 1, day: dueDate.getDate()};
    this.invoice.user = original.user;
    this.invoice.number = original.number;
    this.invoice.subtotal = original.subtotal;
    this.invoice.total = original.total;
    this.invoice.idUser = original.idUser;
    this.invoice.deliverTo = original.deliverTo;
    this.invoice.customer = original.customer;
    this.invoice.original = false;
    this.invoice.shipping = original.shipping;
    this.invoice.due = original.total;
    this.invoice.shippingInstructions = original.shippingInstructions;
    let productReq = [];
    const version = original.original;
    _.each(original.listProductRequested, function(pRequested) {
      let productR = new InvoiceSupplierProductRequested();
      if (!version) {
        productR.idInvoiceProductRequested = pRequested.idInvoiceProductRequested;
      }
      productR.idProductRequested = pRequested.productRequested.idProductRequested;
      productR.productRequested = pRequested.productRequested;
      productR.urlImage = pRequested.urlImage;
      productR.price = pRequested.price == null ? pRequested.productRequested.price : pRequested.price;
      productR.tax = pRequested.tax == null ? 0.00 : pRequested.tax;
      productR.quantity = pRequested.quantity == null ? pRequested.productRequested.quantity : pRequested.quantity;
      productR.netAmount = pRequested.netAmount == null ? (pRequested.quantity * pRequested.price) : pRequested.netAmount;
      productR.description = pRequested.description == null ? pRequested.productRequested.product.name : pRequested.description;
      productR.delete = false;
      productReq.push(productR);
    });
    this.invoice.listProductRequested = productReq;
    this.invoice.listOrders = original.listOrders;
    this.invoice.numberOriginal = original.number;
    this.invoice.termsAndConditions = original.termsAndConditions;
  }

  loadProductRequestedFromInvoice(original) {
    let productReq = [];
    const version = original.original;
    _.each(original.listProductRequested, function(pRequested) {
      let productR = new InvoiceSupplierProductRequested();
      if (!version) {
        productR.idInvoiceProductRequested = pRequested.idInvoiceProductRequested;
      }
      productR.idProductRequested = pRequested.productRequested.idProductRequested;
      productR.productRequested = pRequested.productRequested;
      productR.urlImage = pRequested.urlImage;
      productR.price = pRequested.price == null ? pRequested.productRequested.price : pRequested.price;
      productR.tax = pRequested.tax == null ? 0.00 : pRequested.tax;
      productR.quantity = pRequested.quantity == null ? pRequested.productRequested.quantity : pRequested.quantity;
      productR.netAmount = pRequested.netAmount == null ? (pRequested.quantity * pRequested.price) : pRequested.netAmount;
      productR.description = pRequested.description == null ? pRequested.productRequested.product.name : pRequested.description;
      productR.delete = false;
      productReq.push(productR);
    });
    return productReq;
  }

  loadProductRequestedFromOrder(order) {
    let productReq = [];
    _.each(order.listProductRequested, function(pRequested) {
      const productR = new InvoiceSupplierProductRequested();
      productR.idProductRequested = pRequested.productRequested.idProductRequested;
      productR.productRequested = pRequested.productRequested;
      productR.urlImage = pRequested.productRequested.urlImage;
      productR.price = pRequested.productRequested.price;
      productR.tax = pRequested.tax == null ? 0.00 : pRequested.tax;
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
      productR.delete = false;
      productReq.push(productR);
    });
    return productReq;
  }

  loadInvoiceFromOrder() {
    this.invoice.address = this.order.address;
    this.invoice.idAddress = this.order.address.idAddress;
    this.invoice.date = this.today;
    const date = new Date(this.invoice.date);
    this.invDate = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.invoice.dueDate = this.dueDate;
    const dueDate = new Date(this.invoice.dueDate);
    this.invDueDate = {year: dueDate.getUTCFullYear(), month: dueDate.getMonth() + 1, day: dueDate.getDate()};
    this.invoice.user = this.order.user;
    this.invoice.number = this.order.number;
    this.invoice.subtotal = this.order.subtotal;
    this.invoice.total = this.order.total;
    this.invoice.idUser = this.order.user.idUser;
    this.invoice.deliverTo = this.order.nameUser;
    this.invoice.customer = this.order.nameUser;
    this.invoice.original = false;
    this.invoice.shippingInstructions = (this.order.user.company.shippingInstructions ?
      this.order.user.company.shippingInstructions : 'No Instructions Shipping');
   // const ship = 0;
    this.invoice.shipping = this.order.shippingPrice;
    this.invoice.due = this.order.total;
    this.invoice.listProductRequested = this.loadProductRequestedFromOrder(this.order);
    this.original.termsAndConditions = 'Net 30, 3.5% Fee for CC Payments, Thank you for your trust and preference';
    this.loadOriginalFromOrder(this.order);
  }

  loadOriginalFromOrder(order) {
    this.original.address = order.address;
    this.original.idAddress = order.address.idAddress;
    this.original.date = this.today;
    const date = new Date(this.original.date);
    this.invDate = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.original.dueDate = this.dueDate;
    const dueDate = new Date(this.original.date);
    dueDate.setDate(dueDate.getDate() + 30);
    this.invDueDate = {year: dueDate.getUTCFullYear(), month: dueDate.getMonth() + 1, day: dueDate.getDate()};
    this.original.user = order.user;
    this.original.number = order.number;
    this.original.subtotal = order.subtotal;
    this.original.total = order.total;
    this.original.idUser = order.user.idUser;
    this.original.deliverTo = order.nameUser;
    this.original.customer = order.nameUser;
    this.original.original = true;
    this.original.shippingInstructions = (order.user.company.shippingInstructions ?
      order.user.company.shippingInstructions : 'No Instructions Shipping');
   // const ship = 0;
    this.original.shipping = order.shippingPrice;
    this.original.due = order.total;
    this.original.listProductRequested = this.loadProductRequestedFromOrder(order);
    this.invoice.numberOriginal = this.original.number;
    this.original.termsAndConditions = 'Net 30, 3.5% Fee for CC Payments, Thank you for your trust and preference';
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
    this.sumNetAmount();
  }

  updateTotal($event) {
    this.invoice.total = $event.target.value;
  }

  updateAmountDue($event) {
    this.invoice.due = $event.target.value;
  }

  updateComment($event) {
    this.invoice.comments = $event.target.value;
    this.original.comments = $event.target.value;
  }

  updateInstructions($event) {
    this.invoice.shippingInstructions = $event.target.value;
  }

  updateTerms($event) {
    this.invoice.termsAndConditions = $event.target.value;
  }

  updateNumber($event) {
    this.invoice.number = $event.target.value;
  }

  updateDeliverTo($event) {
    this.invoice.deliverTo = $event.target.value;
  }
  updateCustomer($event) {
    this.invoice.customer = $event.target.value;
  }

  sumNetAmount() {
    let sum = 0, cont = 0;
    _.each(this.invoice.listProductRequested, function(pRequested) {
      if (!pRequested.delete) {
        sum += pRequested.netAmount;
      } else {
        cont ++;
      }
    });
    if (cont == this.invoice.listProductRequested.length) {
      this.allDelete = true;
    }
    this.invoice.subtotal = sum;
    this.invoice.total = Number(sum) + Number(this.invoice.shipping);
    this.invoice.due = Number(sum) + Number(this.invoice.shipping);
  }

  addItem() {
    const invSupplier = new InvoiceSupplierProductRequested();
    invSupplier.netAmount = 0.00;
    invSupplier.price = 0.00;
    invSupplier.tax = 0.00;
    invSupplier.quantity = 0;
    invSupplier.delete = false;
    this.invoice.listProductRequested.push(invSupplier);
    if (this.allDelete) {
      this.allDelete = false;
    }
  }

  removeItem(index) {
    if (this.invoice.listProductRequested[index].idInvoiceProductRequested == null) {
      this.invoice.listProductRequested.splice(index, 1);
    } else {
      this.invoice.listProductRequested[index].delete = true;
    }
    this.sumNetAmount();
  }

  updateDates() {
    const date = new Date(this.invDate.year, this.invDate.month - 1, this.invDate.day);
    this.invoice.date = date;
    const ddate = new Date(this.invDueDate.year, this.invDueDate.month - 1, this.invDueDate.day);
    this.invoice.dueDate = ddate;
  }

  verification() {
    let cont = 0;
    if (this.invDate != null && this.invDueDate != null) {
      _.each(this.invoice.listProductRequested, function(pRequested) {
        if (pRequested.idProductRequested == null) {
          cont += 1;
        }
      });
      if (cont > 0) {
        this.verify = false;
      } else {
        this.verify = true;
      }
    } else {
      this.verify = false;
    }
  }

  generateInvoice(send) {
    this.spinner.show();
    this.verification();
    if (this.verify) {
      this.updateDates();
      let inv: Array<any> = new Array;
      inv.push(this.original);
      inv.push(this.invoice);
      console.log('inv', inv);
      this.orderService.generateInvoiceSupplierAndCopy$(this.idsOrders, send, inv).subscribe(
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
    } else {
      this.translate
              .get('One or more items are not complete', { value: 'One or more items are not complete' })
              .subscribe((res1: string) => {
                this.notification.warning('', res1);
              });
            this.spinner.hide();
    }
  }

  sendInvoice() {
    this.spinner.show();
    this.invoiceService.sendInvoice$(this.invoice.idInvoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate
            .get('Successfully Send', { value: 'Successfully Send' })
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
