import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { UserStorageService } from '../../../http/user-storage.service';
import { ModalsStatusComponent } from '../modals-status/modals-status.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { GenerateInvoiceComponent } from '../generate-invoice/generate-invoice.component';
import { InvoiceClientService } from '../../../shared/services/invoiceClient/invoice-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { InvoiceClient } from '../../../shared/models/invoiceclient';
import { InvoiceSupplier } from '../../../shared/models/invoice-supplier';
import { ModalsInvoiceComponent } from '../modals-invoice/modals-invoice.component';
import { ModalsConfirmationComponent } from '../modals-confirmation/modals-confirmation.component';
import { ModalsShippingComponent } from '../modals-shipping/modals-shipping.component';

@Component({
  selector: 'app-list-order-client',
  templateUrl: './list-order-client.component.html',
  styleUrls: ['./list-order-client.component.scss']
})
export class ListOrderClientComponent implements OnInit, OnDestroy {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
  list: Array<any> = new Array;
  listOrdersPending: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  filterStatus = [{ id: 0, name: "Pending" },
  { id: 1, name: "Paid" }
  ];
  model: NgbDateStruct;
  valid1 = false;
  tamano: String;
  user: any;
  valorClient: string;
  valorProduct: string;
  mostrarStatus = false;
  fechaSelecOrd: NgbDatepicker;
  selectedStatus: any;
  status: any;
  auxStatus: any;
  navigationSubscription;
  valid = false;
  listAux = [];
  selectedAll: any;
  invoice: InvoiceClient = new InvoiceClient();
  invoiceSupplier: InvoiceSupplier = new InvoiceSupplier();
  today: Date = new Date();
  listInvoiceClient = [];
  listInvoiceSupplier = [];
  valido = true;
  validoProvider = true;
  connected: boolean;
  ordersMap = {};
  constructor(private orderService: OrderService,
    private userService: UserStorageService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private invoiceClientService: InvoiceClientService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService) {
    this.user = JSON.parse(userService.getCurrentUser());
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
        this.getListOrders();
      }
    });
  }

  ngOnInit() {
    this.connected = this.userService.getIsIntegratedQBO();
    this.route.queryParams.subscribe(params => {
      this.status = params.status;
    });
    this.advancedPagination = 1;
    this.selectedStatus = '';
    this.valorClient = '';
    this.valorProduct = '';
    this.tamano = 'undefined';
    this.model = { year: 0, month: 0, day: 0 };
    this.listAux = [];
    this.selectedAll = false;
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getListOrders(): void {
    if (this.status === undefined) {
      this.status = this.auxStatus;
    }
    this.spinner.show();
    if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$(this.status).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          let invoiceSupplierIds = [];
          if (res.data.length && (this.status == 2 || this.status == 3)) {
            invoiceSupplierIds = res.data[0].invoiceSupplierIds;
            if (invoiceSupplierIds.length) {
              _.each(invoiceSupplierIds, function(id) {
                const orders: any[] = _.filter(res.data, { 'invoiceSupplierId': id });
                if (orders.length) {
                  const index = _.findIndex(res.data, {'idOrder': orders[0].idOrder});
                  res.data[index].listOrderGroups = orders;
                  const patients = [];
                  _.each(orders, function(o, j) {
                    patients.push(_.uniq(_.map(o.listProductRequested, 'productRequested.patient')));
                    if (j !== 0) {
                      res.data[index].listProductRequested = _.concat(res.data[index].listProductRequested ,o.listProductRequested);
                      const i = _.findIndex(res.data, {'idOrder': o.idOrder});
                      res.data.splice(i, 1);
                    }
                  });
                  res.data[index].patients = patients;
                }
              })
            }
          }


          this.listOrders = res.data;
          this.listOrdersAux = res.data;
          _.each(this.listOrders, function (order) {
              order.generate = false;
            _.each(order.listProductRequested, function (listDetails) {
              if (listDetails.productRequested.detail.length > 0){
                listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
              }
            });
          });
          this.listOrders = _.orderBy(this.listOrders, ['date'], ['desc']);
          this.listOrdersAux = _.orderBy(this.listOrdersAux, ['date'], ['desc']);
          this.list = this.listOrdersAux;
          this.listOrders = this.listOrdersAux.slice(0, this.itemPerPage);
        }
        this.spinner.hide();
      });
    } else if (this.user.role.idRole === 1) {
      this.orderService.allOrderWithStatus$(this.status).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          let invoiceSupplierIds = [];
          if (res.data.length && (this.status == 2 || this.status == 3)) {
            invoiceSupplierIds = res.data[0].invoiceSupplierIds;
            if (invoiceSupplierIds.length) {
              _.each(invoiceSupplierIds, function(id) {
                const orders: any[] = _.filter(res.data, { 'invoiceSupplierId': id });
                if (orders.length) {
                  const index = _.findIndex(res.data, {'idOrder': orders[0].idOrder});
                  res.data[index].listOrderGroups = orders;
                  const patients = [];
                  _.each(orders, function(o, j) {
                    patients.push(_.uniq(_.map(o.listProductRequested, 'productRequested.patient')));
                    if (j !== 0) {
                      res.data[index].listProductRequested = _.concat(res.data[index].listProductRequested ,o.listProductRequested);
                      const i = _.findIndex(res.data, {'idOrder': o.idOrder});
                      res.data.splice(i, 1);
                    }
                  });
                  res.data[index].patients = patients;
                }
              })
            }
          }
          this.mostrarStatus = true;
          this.listOrders = res.data;
          this.listOrdersAux = res.data;
          _.each(this.listOrders, function (order) {
              if (order.status !== 0 ) {
                order.generate = false;
              } else {
                if (order.dateSend !== null) {
                  order.generate = false;
                } else {
                  order.generate = true;
                }
              }
            _.each(order.listProductRequested, function (listDetails) {
              if (listDetails.productRequested.detail && listDetails.productRequested.detail.length > 0) {
                listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
              }
            });
          });
          this.pendingOrdersGenerate();
          this.listOrders = _.orderBy(this.listOrders, ['date'], ['desc']);
          this.listOrdersAux = _.orderBy(this.listOrdersAux, ['date'], ['desc']);
          this.list = this.listOrdersAux;
          this.listOrders = this.listOrdersAux.slice(0, this.itemPerPage);
          this.spinner.hide();
        }
      });
    }
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(): void {
    //*
    this.listOrdersAux = this.list;
    //*
    if (this.selectedStatus !== '') {
      this.valid1 = true;
      if (this.tamano.length === 9 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')
        && (_.toString(this.valorProduct).length === 0 || this.valorProduct.trim() === '')) {
        // tslint:disable-next-line:radix
        this.listOrders = _.filter(this.listOrdersAux, { 'paymentStatus': parseInt(this.selectedStatus) });
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      } else if (this.tamano.length === 15 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')
        && (_.toString(this.valorProduct).length === 0 || this.valorProduct.trim() === '')) {
        this.filterStatusDate(this.selectedStatus);
      } else if (this.tamano.length === 9 && (this.valorClient.trim() !== '')
        && (_.toString(this.valorProduct).length === 0 || this.valorProduct.trim() === '')) {
        const nombre = this.valorClient;
        this.filterStatusNombre(nombre, this.selectedStatus);
      } else if (this.tamano.length === 9 && (this.valorProduct.trim() !== '')
        && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        const product = this.valorProduct;
        this.filterStatusProducto(product, this.selectedStatus);
      } else if (this.tamano.length === 9 && (this.valorProduct.trim() !== '')
        && (this.valorClient.trim() !== '')) {
        const product = this.valorProduct;
        const client = this.valorClient;
        this.filterStatusClienteProducto(client, product, this.selectedStatus);
      } else if (this.tamano.length === 15 && (this.valorProduct.trim() === '')
        && (this.valorClient.trim() !== '')) {
        const client = this.valorClient;
        this.filterDateStatusCliente(this.selectedStatus, client);
      } else if (this.tamano.length === 15 && (this.valorProduct.trim() !== '')
        && (this.valorClient.trim() === '')) {
        const product = this.valorProduct;
        this.filterDateStatusCliente(this.selectedStatus, product);
      } else if ((this.tamano.length === 15) && (this.valorClient.trim() !== '') && (this.valorProduct.trim() !== '')) {
        const nombre = this.valorClient;
        const product = this.valorProduct;
        this.fullFilter(nombre, product, this.selectedStatus);
      }
    }
  }

  filter1(value): void {
    this.model = value;
    const valorStatus = this.selectedStatus;
    this.tamano = this.valueDate(this.model);
    const lista = [];
    //*
    this.listOrdersAux = this.list;
    //*
    if (this.tamano.length === 15) {
      this.valid1 = true;
      if ((_.toString(valorStatus) === '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')
        && (_.toString(this.valorProduct).length === 0 || this.valorProduct.trim() === '')) {
        // FechaFiltro
        let fecha: String;
        fecha = this.getFecha();
        _.filter(this.listOrdersAux, function (orders) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          if (_.isEqual(fecha, fechaList)) {
            lista.push(orders);
          }
        });
        //*
        this.listOrders = lista;
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      } else if ((_.toString(valorStatus) !== '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')
        && (_.toString(this.valorProduct).length === 0 || this.valorProduct.trim() === '')) {
        this.filterStatusDate(valorStatus);
      } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) === '')
        && (_.toString(this.valorProduct).length === 0 || this.valorProduct.trim() === '')) {
        this.filterDateNombre(this.valorClient);
      } else if ((this.valorProduct.trim() !== '') && (_.toString(valorStatus) === '')
        && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        this.filterDateProducto(this.valorProduct);
      } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) === '') && (this.valorProduct.trim() !== '')) {
        this.filterDateClienteProducto(this.valorClient, this.valorProduct);
      } else if (_.toString(valorStatus) !== '' && _.toString(this.valorProduct) === '' && (this.valorClient.trim() !== '')) {
        this.filterDateStatusCliente(valorStatus, this.valorClient);
      } else if (_.toString(valorStatus) !== '' && _.toString(this.valorProduct) !== '' && (this.valorClient.trim() === '')) {
        this.filterDateStatusProducto(valorStatus, this.valorProduct);
      } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) !== '') && (this.valorProduct.trim() !== '')) {
        this.fullFilter(this.valorClient, this.valorProduct, valorStatus);
      }
    }
  }

  findByOrdersGrouped(order:any, value:any) {
    return _.some(order.listOrderGroups, function(order: any) {
      return ((order.number && order.number.toLowerCase().indexOf(value.toLowerCase()) > -1) ||
        (order.supplier.companyName.toLowerCase().indexOf(value.toLowerCase()) > -1)) ||
        (order.listProductRequested.find((pR) => {
          return (pR.productRequested.patient !== null && pR.productRequested.patient.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }));
    });
  }

  findByOrdersGroupedOrManualByProduct(order: any, value: any) {
    return (_.some(order.listProductRequested, function(pR: any) {
      return pR.productRequested && pR.productRequested.additionalInformation &&
        pR.productRequested.additionalInformation.description &&
        pR.productRequested.additionalInformation.description.toLowerCase().indexOf(value.toLowerCase()) > -1;
    }) || _.some(order.listOrderGroups, function(order: any) {
      return (order.listProductRequested.find((pR) => {
          return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }));
    }));
  }

  getItems(ev: any) {
    this.listOrders = this.listOrdersAux;
    const val = ev.target.value;
    this.valorClient = val;
    const valorStatus = this.selectedStatus;
    const lista = [];
    //*
    this.listOrders = this.list;
    this.listOrdersAux  = this.list;
    //*
    if (val && val.trim() !== '') {
      const client = val;
      if (_.toString(valorStatus) === '' && this.tamano.length === 9
        && _.toString(this.valorProduct) === '') { // Si no ha seleccionado status y fecha
        this.listOrders = this.listOrders.filter((item) => {
          return ((item.nameUser.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            this.findByOrdersGrouped(item, client) ||
            (item.number && item.number.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.supplier.companyName.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.listProductRequested.find((pR) => {
              if (pR.productRequested.patient !== null) {
                return (pR.productRequested.patient.toLowerCase().indexOf(client.toLowerCase()) > -1);
              }
            })));
        });
         //*
         this.listOrdersAux = this.listOrders;
         this.advancedPagination = 1;
         this.pageChange(this.advancedPagination);
         //*
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 9
        && _.toString(this.valorProduct) !== '') {// si selecciono status y no fecha ni cliente
        this.listOrders = this.listOrders.filter((item) => {
          return (((item.nameUser.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            this.findByOrdersGrouped(item, client) ||
            (item.number && item.number.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.supplier.companyName.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.listProductRequested.find((pR) => {
                if (pR.productRequested.patient !== null) {
                  return (pR.productRequested.patient.toLowerCase().indexOf(client.toLowerCase()) > -1);
                }
              })))
            && (this.findByOrdersGroupedOrManualByProduct(item, this.valorProduct) || item.listProductRequested.find((pR) => {
              return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(this.valorProduct.toLowerCase()) > -1);
            })));
        });
         //*
         this.listOrdersAux = this.listOrders;
         this.advancedPagination = 1;
         this.pageChange(this.advancedPagination);
         //*
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9
        && _.toString(this.valorProduct) === '') {// si selecciono status y no fecha ni producto
        this.filterStatusNombre(client, valorStatus);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9
        && _.toString(this.valorProduct) !== '') {// si selecciono status y producto y no fecha
        this.filterStatusClienteProducto(client, this.valorProduct, valorStatus);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15
        && _.toString(this.valorProduct) === '') { // si no selecciono status ni producto y fecha si
        this.filterDateNombre(client);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15
        && _.toString(this.valorProduct) !== '') { // si no selecciono status y producto y fecha si
        this.filterDateClienteProducto(client, this.valorProduct);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15
        && _.toString(this.valorProduct) === '') { // si selecciono status y fecha y producto no
        this.filterDateStatusCliente(valorStatus, client);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15
        && _.toString(this.valorProduct) !== '') { // si escibio nombre y selecciono fecha
        this.fullFilter(client, this.valorProduct, valorStatus);
      }
    } else if (_.toString(valorStatus) !== '') { // si borro el nombre y selecciono status
      this.filter();
    } else if (_.toString(valorStatus) === '') { // si borro el nombre y no selecciono status pero fecha si
      if (this.tamano.length === 15) {
        this.valid1 = true;
        let fecha: String;
        // FechaFiltro
        fecha = this.getFecha();
        _.filter(this.listOrdersAux, function (orders) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          if (_.isEqual(fecha, fechaList)) {
            lista.push(orders);
          }
        });
        this.listOrders = lista;
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
      }
    }
     //*
     if (val === '' && _.toString(valorStatus) === '' &&  this.tamano.length === 9 && this.valorProduct === '') {
      this.listOrdersAux = this.listOrders;
      this.advancedPagination = 1;
      this.pageChange(this.advancedPagination);
    }
    //*
  }

  getItemsProduct(ev: any) {
    this.listOrders = this.listOrdersAux;
    const val = ev.target.value;
    this.valorProduct = val;
    const valorStatus = this.selectedStatus;
    const lista = [];
     //*
     this.listOrders = this.list;
     this.listOrdersAux  = this.list;
     //*
    if (val && val.trim() !== '') {
      const product = val;
      if (_.toString(valorStatus) === '' && this.tamano.length === 9 &&
        _.toString(this.valorClient) === '') { // Si no ha seleccionado cliente, status y fecha
        this.listOrders = this.listOrders.filter((item) => {
          return (this.findByOrdersGroupedOrManualByProduct(item, product) || item.listProductRequested.find((pR) => {
            return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(product.toLowerCase()) > -1);
          }));
        });
        //*
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 9
        && _.toString(this.valorClient) !== '') {// si selecciono status y no fecha ni cliente
        this.listOrders = this.listOrders.filter((item) => {
          return (this.findByOrdersGroupedOrManualByProduct(item, product) || item.listProductRequested.find((pR) => {
            return (((item.nameUser.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1) ||
            this.findByOrdersGrouped(item, this.valorClient) ||
            (item.number.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1) ||
            (item.supplier.companyName.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1) ||
            (pR.productRequested.patient ? pR.productRequested.patient.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1 : false))
            && (this.findByOrdersGroupedOrManualByProduct(item, product) || (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(product.toLowerCase()) > -1)));
          }));
        });
        //*
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9
        && _.toString(this.valorClient) === '') {// si selecciono status y no fecha ni cliente
        this.filterStatusProducto(product, valorStatus);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9
        && _.toString(this.valorClient) !== '') {// si selecciono status y cliente y no fecha
        this.filterStatusClienteProducto(this.valorClient, product, valorStatus);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15
        && _.toString(this.valorClient) === '') { // si no selecciono status ni cliente y fecha si
        this.filterDateProducto(product);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15
        && _.toString(this.valorClient) !== '') { // si no selecciono status y cliente y fecha si
        this.filterDateClienteProducto(this.valorClient, product);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15
        && _.toString(this.valorClient) === '') { // si selecciono status y fecha y cliente no
        this.filterDateStatusProducto(valorStatus, product);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15
        && _.toString(this.valorClient) !== '') { // si escribio nombre, producto y selecciono fecha
        this.fullFilter(this.valorClient, product, valorStatus);
      }
    } else if (_.toString(valorStatus) !== '') { // si borro el nombre y selecciono status
      this.filter();
    } else if (_.toString(valorStatus) === '') { // si borro el nombre y no selecciono status pero fecha si
      if (this.tamano.length === 15) {
        this.valid1 = true;
        let fecha: String;
        // FechaFiltro
        fecha = this.getFecha();
        _.filter(this.listOrdersAux, function (orders) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          if (_.isEqual(fecha, fechaList)) {
            lista.push(orders);
          }
        });
        //*
        this.listOrders = lista;
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
      }
    }
     //*
     if (val === '' && _.toString(valorStatus) === '' &&  this.tamano.length === 9 && this.valorProduct === '') {
      this.listOrdersAux = this.listOrders;
      this.advancedPagination = 1;
      this.pageChange(this.advancedPagination);
    }
    //*
  }

  fullFilter(nombreCliente, producto, status): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // Lista actual
    this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (order) {
      // Fecha Listado
      const fechaList = _.toString(order.date.slice(0, 10));
      if ((((_.includes(order.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.number.toLowerCase(), nombreCliente.toLowerCase()))  ||
        (_.includes(order.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) || (order.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) &&
        (this.findByOrdersGroupedOrManualByProduct(order, producto) || order.listProductRequested.find((pR) => {
          return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1);
        }))) &&
        // tslint:disable-next-line:radix
        ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), order.paymentStatus))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterDateStatusProducto(status, producto): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // Lista actual
      this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (order) {
      // Fecha Listado
      const fechaList = _.toString(order.date.slice(0, 10));
      if ((this.findByOrdersGroupedOrManualByProduct(order, producto) || order.listProductRequested.find((pR) => {
        return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); }) &&
        // tslint:disable-next-line:radix
        ((_.isEqual(fecha, fechaList)))) && (_.isEqual(parseInt(status), order.paymentStatus))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterDateStatusCliente(status, nombreCliente): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // Lista actual
     this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if ((((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) ||
        (orders.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        })) ) &&
        // tslint:disable-next-line:radix
        ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), orders.paymentStatus))) {
        lista.push(orders);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterStatusClienteProducto(nombreCliente, producto, status): void {
    const lista = [];
    this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (order) {
      if (((_.includes(order.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) ||
         (order.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) && (this.findByOrdersGroupedOrManualByProduct(order, producto) || order.listProductRequested.find((pR) => {
          return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), order.paymentStatus))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterStatusNombre(nombreCliente, status): void {
    const lista = [];
    this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (order) {
      if (((_.includes(order.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) ||
        (order.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), order.paymentStatus))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterStatusProducto(producto, status): void {
    const lista = [];
    this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (order) {
      if ((this.findByOrdersGroupedOrManualByProduct(order, producto) || order.listProductRequested.find((pR) => {
        return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), order.paymentStatus))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterDateClienteProducto(nombreCliente, producto): void {
    const lista = [];
    let fecha: String;
    this.listOrdersAux = this.list;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listOrdersAux, function (order) {
      // Fecha Listado
      const fechaList = _.toString(order.date.slice(0, 10));
      if (((_.includes(order.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(order.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) ||
        (order.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) &&
        (this.findByOrdersGroupedOrManualByProduct(order, producto) || order.listProductRequested.find((pR) => {
          return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
        ((_.isEqual(fecha, fechaList)))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterDateNombre(nombreCliente): void {
    const lista = [];
    let fecha: String;
    this.listOrdersAux = this.list;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) ||
         (orders.listProductRequested.find((pR) => {
           if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
           }
        }))) &&
        ((_.isEqual(fecha, fechaList)))) {
        lista.push(orders);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterDateProducto(producto): void {
    const lista = [];
    let fecha: String;
    this.listOrdersAux = this.list;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listOrdersAux, function (order) {
      // Fecha Listado
      const fechaList = _.toString(order.date.slice(0, 10));
      if ((this.findByOrdersGroupedOrManualByProduct(order, producto) || order.listProductRequested.find((pR) => {
        return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
        (_.isEqual(fecha, fechaList))) {
        lista.push(order);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  filterStatusDate(status): void {
    const lista = [];
    let fecha: String;
    this.listOrdersAux = this.list;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listOrdersAux, function (orders) {
      let fechaList: String;
      // Fecha Listado
      fechaList = _.toString(orders.date.slice(0, 10));
      // tslint:disable-next-line:radix
      if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(status), orders.paymentStatus))) {
        lista.push(orders);
      }
    });
    //*
    this.listOrders = lista;
    this.listOrdersAux = this.listOrders;
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    //*
  }

  getFecha(): String {
    let ano;
    let mes;
    let dia;
    let fecha: String;
    // Ano
    ano = this.model.year;
    // Mes
    this.model.month < 10 ? mes = '0' + this.model.month : mes = this.model.month;
    // Dia
    this.model.day < 10 ? dia = '0' + this.model.day : dia = this.model.day;
    // FechaFiltro
    fecha = ano + '-' + mes + '-' + dia;
    return fecha;
  }

  clean() {
    this.auxStatus = this.status;
    this.getListOrders();
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: this.status } });
    this.valid1 = false;
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.fechaSelecOrd = null;
    this.valorClient = '';
    this.valorProduct = '';
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  open(order) {
   // this.invoiceClientService.generateInvoiceClient$(order.idOrder).subscribe();
    const modalRef = this.modalService.open(ModalsStatusComponent ,
    {backdrop  : 'static', keyboard  : false});
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
      this.getListOrders();
    }, (reason) => {
    });
  }

  openModalShipping(orders): void {
    const modalRef = this.modalService.open(ModalsShippingComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.orderModal = orders;
    modalRef.componentInstance.idStatus = 3;
    modalRef.result.then((result) => {
      this.spinner.show();
      this.individualInvoice(orders);
    } , (reason) => {
    });
  }

  generateInvoice(order) {
    let pilot = order.invoiceSupplier === null ? false : true;
    const modalRef = this.modalService.open(GenerateInvoiceComponent,
    { windowClass: 'modal-content-border modal-dialog-invoice', backdrop  : 'static', keyboard  : false});
    modalRef.componentInstance.order = order;
    modalRef.componentInstance.pilot = pilot;
    if (pilot == true) {
      modalRef.componentInstance.invoice = order.invoiceSupplier;
      modalRef.componentInstance.original = order.invoiceSupplier;
    }
    modalRef.result.then((result) => {
      this.router.navigate(['/invoice']);
    }, (reason) => {
    });
  }

  cancel(order): void {
    this.translate.get('Cancel Order', { value: 'Cancel Order' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to cancel the order? You must notify the provider this change.',
        { value: 'Are you sure you want to cancel the order? You must notify the provider this change.' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.orderService.changeStatus$(order.idOrder, 4).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.getListOrders();
                this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res1: string) => {
                  this.notification.success('', res1);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            });
          }, () => {
          });
        });
    });
  }

  downloadOrder() {
    if (this.listOrders.length > 0) {
      this.spinner.show();
      this.orderService.reportByRoleAndStatus$(this.user.userResponse.idUser, this.user.role.idRole, this.status).subscribe(res => {
        const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
          day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
        const filename = 'Orders-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
        saveAs(res, filename);
        this.spinner.hide();
      }, error => {
        console.log('error', error);
        this.spinner.hide();
        this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      });
    } else {
      this.translate.get('There are no orders to export', { value: 'There are no orders to export' }).subscribe((res: string) => {
        this.notification.warning('', res);
      });
    }
  }

  onSelection(id, checked) {
    let existe: boolean;
    existe = _.includes(this.listAux,  id);
    if (existe) {
      if (!checked) {
        _.remove(this.listAux,  function (n)  {
          return  n  ===  id;
        });
      }
    } else {
      this.listAux = _.concat(this.listAux, id);
    }
    this.selectedAll = false;
    this.listAux.length > 1 ? this.valid = true : this.valid = false;
    this.listAux.length === this.listOrders.length ? this.selectedAll = true : this.selectedAll = false;
  }

  onSelectionAll(event) {
    let arrayAux = this.listAux;
    const check = event.target.checked;
    _.each(this.listOrders, function(item) {
      item.checked = check;
      let existe: boolean;
      const id = item.idOrder;
      existe = _.includes(arrayAux, id);
      if (existe) {
        if (!check) {
          _.remove(arrayAux,  function (n)  {
            return n === id;
          });
        }
      } else {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.selectedAll = check;
    this.listAux = arrayAux;
    this.listAux.length > 1 ? this.valid = true : this.valid = false;

  }

  billCustomers() {
    this.checkClient();
    if (this.valido) {
      this.verifyInvoice();
      if (this.listInvoiceClient.length > 0) {
        const modalRef = this.modalService.open(ModalsInvoiceComponent,
          { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
          modalRef.componentInstance.list = this.listInvoiceClient;
          modalRef.componentInstance.type = 1;
          modalRef.result.then((result) => {
            this.getListOrders();
          }, (reason) => {
        });
      } else {
      this.translate.get('Confirm invoice generation', {value: 'Confirm invoice generation'}).subscribe((title: string) => {
        this.translate.get('Are you sure want to bill all selected orders to customer?',
        {value: 'Are you sure want to bill all selected orders to customer?'}).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            const self = this;
            let orders = new Array;
            _.each(this.listAux, function(item) {
               const order = _.find(self.listOrdersAux, { 'idOrder': item});
               if (order) {
                order.listOrderGroups ? orders = _.concat(orders, order.listOrderGroups) : orders.push(order);
               }
            });
            this.openModalShipping(orders);
            }, () => {});
          });
        });
      }
    } else {
      this.translate.get('All orders must belong to the same customer', { value: 'All orders must belong to the same customer' })
            .subscribe((res1: string) => {
              this.notification.warning('', res1);
            });
    }
  }

  generateInvoiceClient() {
    this.invoice.date = this.today;
    const ship = 0;
    this.invoice.shipping = ship;
    this.invoice.listOrders = this.listAux;
    this.spinner.show();
    this.orderService.generateInvoiceClient$(this.invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate
            .get('Successfully Generated', { value: 'Successfully Generated' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
          this.reloadingAll();
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

  billProviders() {
    this.checkClient();
    if (this.valido) {
      this.checkProvider();
      if (this.validoProvider) {
        this.verifyInvoice();
        if (this.listInvoiceSupplier.length > 0) {
          const modalRef = this.modalService.open(ModalsInvoiceComponent,
            { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
            modalRef.componentInstance.list = this.listInvoiceSupplier;
            modalRef.componentInstance.type = 2;
            modalRef.result.then((result) => {
              this.getListOrders();
            }, (reason) => {
          });
        } else {
          this.generateInvoiceSupplier();
        }
      } else {
        this.translate.get('All orders must belong to the same provider', { value: 'All orders must belong to the same provider' })
              .subscribe((res1: string) => {
                this.notification.warning('', res1);
              });
        }
    } else {
        this.translate.get('All orders must belong to the same customer', { value: 'All orders must belong to the same customer' })
              .subscribe((res1: string) => {
                this.notification.warning('', res1);
              });
    }
  }

  generateInvoiceSupplier() {
    const self = this;
    const order = JSON.parse(JSON.stringify(_.find(this.listOrdersAux, { 'idOrder':  this.listAux[0] })));
    _.each(this.listAux, function(id) {
     if(order.idOrder !== id) {
      const _order: any =_.find(self.listOrdersAux, { 'idOrder':  id });
      _.each(_order.listProductRequested, function(productRequested) {
        order.listProductRequested.push(productRequested);
      });
      order.total += _order.total;
      order.subtotal += _order.subtotal;
      order.shipping += _order.shipping;
     }
    });
    order.ids = this.listAux;
    this.generateInvoice(order);
  }

  initialize() {
    _.each(this.listOrders, function(item) {
      item.checked = false;
    });
  }

  invoiceClient(order) {
    if (order.invoiceClient != null) {
      this.translate.get('The invoice was already generated to the client',
       { value: 'The invoice was already generated to the client' }).subscribe((res: string) => {
        this.notification.warning('', res);
      });
    } else {
    this.translate.get('Confirm invoice generation', {value: 'Confirm invoice generation'}).subscribe((title: string) => {
      this.translate.get('Are you sure want to bill selected order to customer?',
       {value: 'Are you sure want to bill selected order to customer?'}).subscribe((msg: string) => {
         this.alertify.confirm(title, msg, () => {
          let orders = new Array;
          if (order.listOrderGroups) {
            orders = _.concat(orders, order.listOrderGroups);
          } else {
            orders.push(order)
          }
          this.openModalShipping(orders);
          }, () => {});
        });
      });
    }
  }

  individualInvoice(orders) {
    this.invoice.date = this.today;
    const ship = 0;
    this.invoice.shipping = ship;
    const list = [];
    _.each(orders, function(order) {
      list.push(order.idOrder);
    });

    this.invoice.listOrders = list;
    this.orderService.generateInvoiceClient$(this.invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate
            .get('Successfully Generated', { value: 'Successfully Generated' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
          this.reloadingAll();
          this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 3 } });
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

  reloadingAll() {
    this.valid = false;
    this.listAux = [];
    this.selectedAll = false;
    this.initialize();
    this.getListOrders();
    this.spinner.hide();
  }

  verifyInvoice() {
    let listInvoiceClient = [];
    let listInvoiceSupplier = [];
    let orders = this.listOrdersAux;
    _.each(this.listAux, function(item) {
       let order = _.find(orders, { 'idOrder': item});
       if ( order.invoiceClient != null ) {
        order.listOrderGroups ? listInvoiceClient =_.concat(listInvoiceClient, order.listOrderGroups) : listInvoiceClient.push(order);
       }
       if ( order.invoiceSupplier != null ) {
        listInvoiceSupplier.push(order);
       }
    });
    this.listInvoiceClient = listInvoiceClient;
    this.listInvoiceSupplier = listInvoiceSupplier;
  }


  checkClient() {
    let valido = true;
    let listAux = this.listAux;
    let orders = this.listOrdersAux;
    let order;
    let orderAux;
    let aux;
    _.each(listAux, function(item, index) {
       aux = index + 1;
       order = _.find(orders, { 'idOrder': item});
       orderAux = _.find(orders, { 'idOrder': listAux[aux]});
       if (aux < listAux.length) {
        if (order.user.idUser !== orderAux.user.idUser) {
          valido = false;
          return valido;
        }
       }
    });
    this.valido = valido;
  }

  checkProvider() {
    let validoProvider = true;
    let listAux = this.listAux;
    let orders = this.listOrdersAux;
    let order;
    let orderAux;
    let aux;
    _.each(listAux, function(item, index) {
       aux = index + 1;
       order = _.find(orders, { 'idOrder': item});
       orderAux = _.find(orders, { 'idOrder': listAux[aux]});
       if (aux < listAux.length) {
        if (order.supplier.idSupplier !== orderAux.supplier.idSupplier && (!order.supplier.spectrum || !orderAux.supplier.spectrum)) {
          validoProvider = false;
          return validoProvider;
        }
       }
    });
    this.validoProvider = validoProvider;
  }

  generateOrder(order): void {
    const modalRef = this.modalService.open(ModalsConfirmationComponent ,
    {backdrop  : 'static', keyboard  : false});
      modalRef.componentInstance.order = order;
      modalRef.result.then((result) => {
        } , (reason) => {
          this.ngOnInit();
          this.selectedAll = false;
          this.initialize();
    });
  }

  processMultipleOrders() {
    let self = this;
  _.each(this.listAux, function(item, index) {
    let order = _.find(self.listOrdersAux, { 'idOrder': item });
        self.generateOrder(order);
    });
  }

  onSelectionPending(id, checked) {
    let existe: boolean;
    existe = _.includes(this.listAux,  id);
    if (existe) {
      if (!checked) {
        _.remove(this.listAux,  function (n)  {
          return  n  ===  id;
        });
      }
    } else {
      this.listAux = _.concat(this.listAux, id);
    }
    this.selectedAll = false;
    this.listAux.length === this.listOrdersPending.length ? this.selectedAll = true : this.selectedAll = false;
  }

  onSelectionAllPending(event) {
    let arrayAux = this.listAux;
    const check = event.target.checked;
    _.each(this.listOrdersPending, function(item) {
      item.checked = check;
      let existe: boolean;
      const id = item.idOrder;
      existe = _.includes(arrayAux, id);
      if (existe) {
        if (!check) {
          _.remove(arrayAux,  function (n)  {
            return n === id;
          });
        }
      } else {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.selectedAll = check;
    this.listAux = arrayAux;
  }

  pendingOrdersGenerate() {
    this.listOrdersPending =_.filter(this.listOrders, {'generate': true});
  }

  getReferenceCopy(order) {
    let reference = null;
    if (order.type) {
      const type = this.translate.instant(order.type);
      if (order.originReference) {
        return reference = ' (' + type + ': ' +  '#' + order.originReference + ') ';
      }
      reference = ' (' + type + ') ';
    }
    return reference;
  }

  dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  isValidDate(order) {
    let currentDate = new Date();
    let sendDate = new Date(order.dateSend);

    switch (order.supplier.idSupplier) {
      case 1: //Markennovy
        return true; // free for client conversation.

      case 2: //Europa
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 3: //Elipsys
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      case 4: //Euclid
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 6: //Lentes blandos de vendaje
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      case 9: //SynergEyes
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 10: //Orion Vision Group
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      default:
        return true;
    }
  }

  generateCopyOrder(order, type) {
    this.spinner.show();
    this.orderService.generateCopyOrder$(order.idOrder, type).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        var message = type === 'duplicate' ? "Order duplicate successfully" : "Order warranty generated successfully"
        this.translate.get(message, {value: message}).subscribe(( res: string) => {
          this.notification.success('', res);
        });

        this.reloadingAll();
        this.spinner.show();
        setTimeout(() => {
          this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
          this.spinner.hide();
        }, 1000);
      } else {
        this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe((res: string) => {
          this.notification.error('', res);
          this.spinner.hide();
          console.log(res);
        });
      }
    }, error => {
      console.log('error', error);
    });
  }
}
