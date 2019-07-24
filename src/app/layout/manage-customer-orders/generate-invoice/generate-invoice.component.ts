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
import { ProtocolClientService } from '../../../shared/services/protocolClient/protocol-client.service';
import { ProtocolProformaService } from '../../../shared/services/protocolProforma/protocol-proforma.service';
import { InvoiceSupplierProtocolClient } from '../../../shared/models/invoicesupplierprotocolclient';
import { InvoiceSupplierProtocolProforma } from '../../../shared/models/invoicesupplierprotocolproforma';
import { CountryService } from '../../../shared/services';

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
  edit: any;
  allDelete: any;
  copy: any;
  shippingProtocol: any;
  countries: Array<any> = new Array();
  listShippingMethod = [ '2nd day', 'Overnight', 'Overnight AM' ];
  protocolProforma: any;
  invShippingProtocol: InvoiceSupplierProtocolClient = new InvoiceSupplierProtocolClient();
  invProtocolProforma: InvoiceSupplierProtocolProforma = new InvoiceSupplierProtocolProforma();
  // check protocolProforma
  editSpectrumP = false;
  editAdditionalDocuments = false;
  editOutputs = false;
  editDocumentation = false;
  editComments = false;
  editEmailCommentProforma = false;
  editTariffCodes = false;
  // check protocolClient
  editAccNumber = false;
  editBusinessName = false;
  editRecipient = false;
  editShippingAddress = false;
  editShippingMethod = false;
  editAccountNumber = false;
  editComment = false;
  editEmailComment = false;
  editCountry = false;
  // invoice
  protocolProformaInv = false;
  protocolShippingInv = false;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private protocolClientService: ProtocolClientService,
    private protocolProformaService: ProtocolProformaService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceSupplierService,
    private countryService: CountryService,
    private spinner: NgxSpinnerService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
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
    this.initializeForm();
    this.getCountry();
    this.verify = false;
    this.edit = true;
    this.allDelete = false;
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      invDate   : [this.invDate, [Validators.required]],
      invDueDate: [this.invDueDate, [Validators.required]],
      // protocol proforma
      cbSpectrumProforma: [this.editSpectrumP],
      spectrumProforma: [this.invProtocolProforma.spectrumProforma],
      cbAdditionalDocuments: [this.editAdditionalDocuments],
      additionalDocuments: [this.invProtocolProforma.additionalDocuments],
      cbOutputs: [this.editOutputs],
      outputs: [this.invProtocolProforma.outputs],
      cbDocumentation: [this.editDocumentation],
      documentation: [this.invProtocolProforma.documentation],
      cbComment: [this.editComments],
      commentsProforma: [this.invProtocolProforma.comments],
      cbEmailComment: [this.editEmailCommentProforma],
      emailCommentProforma: [this.invProtocolProforma.emailComment],
      cbTariffCodes: [this.editTariffCodes],
      tariffCodes: [this.invProtocolProforma.tariffCodes],
      // protocol client
      cbAccNumber: [this.editAccNumber],
      accNumber: [this.invShippingProtocol.accNumber],
      cbBusinessName: [this.editBusinessName],
      businessName: [this.invShippingProtocol.businessName],
      cbRecipient: [this.editRecipient],
      recipient: [this.invShippingProtocol.recipient],
      cbShippingAddress: [this.editShippingAddress],
      shippingAddress: [this.invShippingProtocol.shippingAddress],
      cbShippingMethod: [this.editShippingMethod],
      shippingMethod: [this.invShippingProtocol.shippingMethod],
      cbAccountNumber: [this.editAccountNumber],
      accountNumber: [this.invShippingProtocol.accountNumber],
      cbComments: [this.editComment],
      comment: [this.invShippingProtocol.comment],
      cbEmailComment2: [this.editEmailComment],
      emailComment: [this.invShippingProtocol.emailComment],
      cbCountry: [this.editCountry],
      country: [null]
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
        this.copy = false;
      } else {
        this.copy = true;
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

  loadProtocols(supplier, user) {
    this.protocolClientService.findByClienSupplier$(user, supplier).subscribe(res => {
      if (res != null) {
        this.shippingProtocol = res;
        this.loadInvoiceShippingProtocol(this.invoice);
      } else {
        console.log(res);
      }
    },
    error => {
      console.log('error', error);
    });

    this.protocolProformaService.findByClienSupplier$(user, supplier).subscribe(res => {
      if (res != null) {
        this.protocolProforma = res;
        this.loadInvoiceProtocolProforma(this.invoice);
      } else {
        console.log(res);
      }
    },
    error => {
      console.log('error', error);
    });
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
        let supplier, user;
        _.each(orders, function(order) {
          auxNumbers += order.number + ', ';
        });
        supplier = orders[0].supplier.idSupplier;
        user = orders[0].user.idUser;
        if (auxNumbers.trim().endsWith(',')) {
          auxNumbers = auxNumbers.substring(0, auxNumbers.lastIndexOf(', '));
        }
        this.ordersNumber = auxNumbers;
        this.listOrders = orders;
        this.getProducts();
        this.loadProtocols(supplier, user);
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
    this.invoice.status = original.status;
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
    this.invoice.status = 0;
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
    this.original.status = 0;
   // const ship = 0;
    this.original.shipping = order.shippingPrice;
    this.original.due = order.total;
    this.original.listProductRequested = this.loadProductRequestedFromOrder(order);
    this.invoice.numberOriginal = this.original.number;
    this.original.termsAndConditions = 'Net 30, 3.5% Fee for CC Payments, Thank you for your trust and preference';
  }

  loadInvoiceShippingProtocol(invoice) {
    // Shipping Protocol
    if (invoice.invoiceProtocolClientResponse != undefined && invoice.invoiceProtocolClientResponse != null 
      && invoice.invoiceProtocolClientResponse.idInvoiceProtocolClient != null) {
      this.invShippingProtocol.accNumber = invoice.invoiceProtocolClientResponse.accNumber;
      this.editAccNumber = (this.invShippingProtocol.accNumber != null && !this.pilot) ? true : false;
      this.invShippingProtocol.accountNumber = invoice.invoiceProtocolClientResponse.accountNumber;
      this.editAccountNumber = (this.invShippingProtocol.accountNumber != null && !this.pilot) ? true : false;
      this.invShippingProtocol.businessName = invoice.invoiceProtocolClientResponse.businessName;
      this.editBusinessName = (this.invShippingProtocol.businessName != null && !this.pilot) ? true : false;
      this.invShippingProtocol.comment = invoice.invoiceProtocolClientResponse.comment;
      this.editComment = (this.invShippingProtocol.comment != null && !this.pilot) ? true : false;
      this.invShippingProtocol.country = (invoice.invoiceProtocolClientResponse.country != null) ?
                                         invoice.invoiceProtocolClientResponse.country.idCountry : null;
      this.editCountry = (this.invShippingProtocol.country != null && !this.pilot) ? true : false;
      this.invShippingProtocol.countryName = invoice.invoiceProtocolClientResponse.countryName;
      this.invShippingProtocol.emailComment = invoice.invoiceProtocolClientResponse.emailComment;
      this.editEmailComment = (this.invShippingProtocol.emailComment != null && !this.pilot) ? true : false;
      this.invShippingProtocol.recipient = invoice.invoiceProtocolClientResponse.recipient;
      this.editRecipient = (this.invShippingProtocol.recipient != null && !this.pilot) ? true : false;
      this.invShippingProtocol.shippingAddress = invoice.invoiceProtocolClientResponse.shippingAddress;
      this.editShippingAddress = (this.invShippingProtocol.shippingAddress != null && !this.pilot) ? true : false;
      this.invShippingProtocol.shippingMethod = invoice.invoiceProtocolClientResponse.shippingMethod;
      this.editShippingMethod = (this.invShippingProtocol.shippingMethod != null && !this.pilot) ? true : false;
      this.invShippingProtocol.shippingFrecuency = invoice.invoiceProtocolClientResponse.shippingFrecuency;
      this.invShippingProtocol.shippingDetails = invoice.invoiceProtocolClientResponse.shippingDetails;
      this.invShippingProtocol.dmv = invoice.invoiceProtocolClientResponse.dmv;
      this.invShippingProtocol.idInvoice = invoice.invoiceProtocolClientResponse.idInvoice;
      this.invShippingProtocol.idInvoiceSupplierProtocolClient = invoice.invoiceProtocolClientResponse.idInvoiceSupplierProtocolClient;
      this.invShippingProtocol.idProtocolClient = invoice.invoiceProtocolClientResponse.idProtocolClient;
      if (this.invShippingProtocol.businessName != null || this.invShippingProtocol.recipient != null || this.invShippingProtocol.comment ){
        this.protocolShippingInv = true;
      }
    } else {
      this.invShippingProtocol.accNumber = this.shippingProtocol.accNumber;
      this.editAccNumber = false;
      this.invShippingProtocol.accountNumber = this.shippingProtocol.accountNumber;
      this.editAccountNumber = false;
      this.invShippingProtocol.businessName = this.shippingProtocol.businessName;
      this.editBusinessName = false;
      this.invShippingProtocol.comment = this.shippingProtocol.comment;
      this.editComment = false;
      this.invShippingProtocol.country = this.shippingProtocol.country;
      this.editCountry = false;
      this.invShippingProtocol.countryName = this.shippingProtocol.countryName;
      this.invShippingProtocol.emailComment = this.shippingProtocol.emailComment;
      this.editEmailComment = false;
      this.invShippingProtocol.recipient = this.shippingProtocol.recipient;
      this.editRecipient = false;
      this.invShippingProtocol.shippingAddress = this.shippingProtocol.shippingAddress;
      this.editShippingAddress = false;
      this.invShippingProtocol.shippingMethod = this.shippingProtocol.shippingMethod;
      this.editShippingMethod = false;
      this.invShippingProtocol.shippingFrecuency = this.shippingProtocol.shippingFrecuency;
      this.invShippingProtocol.shippingDetails = this.shippingProtocol.shippingDetail;
      this.invShippingProtocol.dmv = this.shippingProtocol.dmv;
      this.invShippingProtocol.idProtocolClient = this.shippingProtocol.idProtocolClient;
    }
  }

  loadInvoiceProtocolProforma(invoice) {
    // Protocol Proforma
    if (invoice.invoiceProtocolProformaResponse != undefined && invoice.invoiceProtocolProformaResponse != null 
      && invoice.invoiceProtocolProformaResponse.idInvoiceProtocolProforma != null ) {
      this.invProtocolProforma.additionalDocuments = invoice.invoiceProtocolProformaResponse.additionalDocuments;
      this.editAdditionalDocuments = (this.invProtocolProforma.additionalDocuments != null && !this.pilot) ? true : false;
      this.invProtocolProforma.comments = invoice.invoiceProtocolProformaResponse.comments;
      this.editComments = (this.invProtocolProforma.comments != null && !this.pilot) ? true : false;
      this.invProtocolProforma.documentation = invoice.invoiceProtocolProformaResponse.documentation;
      this.editDocumentation = (this.invProtocolProforma.documentation != null && !this.pilot) ? true : false;
      this.invProtocolProforma.emailComment = invoice.invoiceProtocolProformaResponse.emailComment;
      this.editEmailCommentProforma = (this.invProtocolProforma.emailComment != null && !this.pilot) ? true : false;
      this.invProtocolProforma.fixedPrices = invoice.invoiceProtocolProformaResponse.fixedPrices;
      this.invProtocolProforma.idInvoice = invoice.invoiceProtocolProformaResponse.idInvoice;
      this.invProtocolProforma.idInvoiceSupplierProtocolProforma =
                    invoice.invoiceProtocolProformaResponse.idInvoiceSupplierProtocolProforma;
      this.invProtocolProforma.idProtocolProforma = invoice.invoiceProtocolProformaResponse.idProtocolProforma;
      this.invProtocolProforma.outputs = invoice.invoiceProtocolProformaResponse.outputs;
      this.editOutputs = (this.invProtocolProforma.outputs != null && !this.pilot) ? true : false;
      this.invProtocolProforma.protocolProforma = invoice.invoiceProtocolProformaResponse.protocolProforma;
      this.invProtocolProforma.spectrumProforma = invoice.invoiceProtocolProformaResponse.spectrumProforma;
      this.editSpectrumP = (this.invProtocolProforma.spectrumProforma != null && !this.pilot) ? true : false;
      this.invProtocolProforma.tariffCodes = invoice.invoiceProtocolProformaResponse.tariffCodes;
      this.editTariffCodes = (this.invProtocolProforma.tariffCodes != null && !this.pilot) ? true : false;
      this.invProtocolProforma.protocolSpectrum = invoice.invoiceProtocolProformaResponse.protocolSpectrum;
      this.invProtocolProforma.maximumAmount = invoice.invoiceProtocolProformaResponse.maximumAmount;
      if (this.invProtocolProforma.tariffCodes != null) {
        this.protocolProformaInv = true;
      }
    } else {
      this.invProtocolProforma.additionalDocuments = this.protocolProforma.additionalDocuments;
      this.editAdditionalDocuments = false;
      this.invProtocolProforma.comments = this.protocolProforma.comments;
      this.editComments = false;
      this.invProtocolProforma.documentation = this.protocolProforma.documentation;
      this.editDocumentation = false;
      this.invProtocolProforma.emailComment = this.protocolProforma.emailComment;
      this.editEmailCommentProforma = false;
      this.invProtocolProforma.fixedPrices = this.protocolProforma.fixedPrices;
      this.invProtocolProforma.idProtocolProforma = this.protocolProforma.idProtocolProforma;
      this.invProtocolProforma.outputs = this.protocolProforma.outputs;
      this.editOutputs = false;
      this.invProtocolProforma.protocolProforma = this.protocolProforma.protocolProforma;
      this.editSpectrumP = false;
      this.invProtocolProforma.spectrumProforma = this.protocolProforma.spectrumProforma;
      this.editTariffCodes = false;
      this.invProtocolProforma.tariffCodes = this.protocolProforma.tariffCodes;
      this.invProtocolProforma.protocolSpectrum = this.protocolProforma.protocolSpectrum;
      this.invProtocolProforma.maximumAmount = this.protocolProforma.maximumAmount;
    }
  }

  getCountry() {
    this.countryService.findAll$().subscribe(res => {
      this.countries = res.data;
    });
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

  updateAccNumber($event) {
    this.invShippingProtocol.accNumber = $event.target.value;
  }

  updateCountry($event) {
    this.invShippingProtocol.country = this.form.get('country').value;
  }

  updateBusinessName($event) {
    this.invShippingProtocol.businessName = $event.target.value;
    if (!this.protocolShippingInv ) {
      this.protocolShippingInv = true;
    }
  }

  updateRecipient($event) {
    this.invShippingProtocol.recipient = $event.target.value;
    if (!this.protocolShippingInv ) {
      this.protocolShippingInv = true;
    }
  }

  updateShippingAddress($event) {
    this.invShippingProtocol.shippingAddress = $event.target.value;
  }

  updateShippingMethod($event) {
    this.invShippingProtocol.shippingMethod = $event.target.value;
  }

  updateAccountNumber($event) {
    this.invShippingProtocol.accountNumber = $event.target.value;
  }

  updateCommentProtocol($event) {
    this.invShippingProtocol.comment = $event.target.value;
    if (!this.protocolShippingInv ) {
      this.protocolShippingInv = true;
    }
  }

  updateEmailCommentProtocol($event) {
    this.invShippingProtocol.emailComment = $event.target.value;
  }

  updateAdditionalDocuments($event) {
    this.invProtocolProforma.additionalDocuments = $event.target.value;
  }

  updateOutputs($event) {
    this.invProtocolProforma.outputs = $event.target.value;
  }

  updateDocumentation($event) {
    this.invProtocolProforma.documentation = $event.target.value;
  }

  updateCommentsProforma($event) {
    this.invProtocolProforma.comments = $event.target.value;
  }

  updateEmailCommentsProforma($event) {
    this.invProtocolProforma.emailComment = $event.target.value;
  }

  updateTariffCodes($event) {
    this.invProtocolProforma.tariffCodes = $event.target.value;
    if (!this.protocolProformaInv) {
      this.protocolProformaInv = true;
    }
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

  buildInvoiceProtocols() {
    // Shipping Protocol
    if (!this.editAccNumber) {
      this.invShippingProtocol.accNumber = null;
    }

    if (!this.editBusinessName) {
      this.invShippingProtocol.businessName = null;
    }

    if (!this.editRecipient) {
      this.invShippingProtocol.recipient = null;
    }

    if (!this.editShippingAddress) {
      this.invShippingProtocol.shippingAddress = null;
    }

    if (!this.editShippingMethod) {
      this.invShippingProtocol.shippingMethod = null;
    }

    if (!this.editAccountNumber) {
      this.invShippingProtocol.accountNumber = null;
    }

    if (!this.editComment) {
      this.invShippingProtocol.comment = null;
    }

    if (!this.editEmailComment) {
      this.invShippingProtocol.emailComment = null;
    }

    if (this.editCountry) {
      this.invShippingProtocol.country = this.form.get('country').value;
    } else {
      this.invShippingProtocol.country = null;
      this.invShippingProtocol.countryName =  null;
    }


    if (this.editAccNumber || this.editBusinessName ||
        this.editRecipient || this.editShippingAddress ||
        this.editShippingMethod || this.editAccountNumber ||
        this.editComment || this.editEmailComment ||
        this.editCountry) {
      this.invShippingProtocol.idProtocolClient = this.shippingProtocol.id;
    } else {
      this.invShippingProtocol = null;
    }

    // Protocol Proforma
    if (!this.editSpectrumP) {
      this.invProtocolProforma.spectrumProforma = null;
    }

    if (!this.editAdditionalDocuments) {
      this.invProtocolProforma.additionalDocuments = null;
    }

    if (!this.editOutputs) {
      this.invProtocolProforma.outputs = null;
    }

    if (!this.editDocumentation) {
      this.invProtocolProforma.documentation = null;
    }

    if (!this.editComments) {
      this.invProtocolProforma.comments = null;
    }

    if (!this.editEmailCommentProforma) {
      this.invProtocolProforma.emailComment = null;
    }

    if (!this.editTariffCodes) {
      this.invProtocolProforma.tariffCodes = null;
    }

    if (this.editSpectrumP || this.editAdditionalDocuments ||
        this.editOutputs || this.editDocumentation ||
        this.editComments || this.editEmailCommentProforma ||
        this.editTariffCodes) {
      this.invProtocolProforma.idProtocolProforma = this.protocolProforma.id;
    } else {
      this.invProtocolProforma = null;
    }

    this.invoice.invoiceProtocolClientRequest = this.invShippingProtocol;
    this.invoice.invoiceProtocolProformaRequest = this.invProtocolProforma;
  }

  assignSpectrumProforma(value: number) {
    this.form.get('spectrumProforma').setValue(value);
    this.invProtocolProforma.spectrumProforma = value == 0 ? false : true;
  }

  generateInvoice(send) {
    this.spinner.show();
    this.verification();
    if (this.verify) {
      this.updateDates();
      this.buildInvoiceProtocols();
      let inv: Array<any> = new Array;
      this.invoice.status = send;
      this.original.status = send;
      inv.push(this.original);
      inv.push(this.invoice);
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
    let idInvoice;
    if (this.copy) {
      idInvoice = this.invoice.idInvoice;
    } else {
      idInvoice = this.original.idInvoice;
    }
    this.invoiceService.sendInvoice$(idInvoice).subscribe(
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
        this.spinner.hide();
        console.log('error', error);
      }
    );
  }
}
