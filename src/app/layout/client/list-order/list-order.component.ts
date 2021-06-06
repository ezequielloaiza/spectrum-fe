import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusOrder } from '../../../shared/enum/status-order.enum';
import * as _ from 'lodash';
import { NgbDateAdapter, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit, OnDestroy {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
  list: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  filterStatus = [{ id: 0, name: "Pending" },
                  { id: 1, name: "Paid" }
                ];
  model: NgbDateStruct;
  valid = false;
  tamano: String;
  selectedStatus: any;
  fechaSelec: NgbDatepicker;
  user: any;
  status: any;
  navigationSubscription;
  today: Date = new Date();
  valorClient: String;
  valorProduct: String

  constructor(private orderService: OrderService,
              private userService: UserStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private notification: ToastrService,
              private translate: TranslateService,
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
    this.route.queryParams.subscribe(params => {
      this.status = params.status;
    });

    this.advancedPagination = 1;
    this.model = { year: 0, month: 0, day: 0 };
    this.valorClient = '';
    this.selectedStatus = '';
    this.tamano = 'undefined';
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getListOrders(): void {
    this.spinner.show();
    this.orderService.allOrderByUserIdAndStatus$(this.user.userResponse.idUser, this.status).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
        this.listOrdersAux = res.data;
        _.each(this.listOrders, function (order) {
           _.each(order.listProductRequested, function(listDetails) {
            if (listDetails.productRequested.detail.length > 0) {
              listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
            }
          });
        });
        this.listOrders = _.orderBy(this.listOrders, ['date'], ['desc']);
        this.listOrdersAux = _.orderBy(this.listOrdersAux, ['date'], ['desc']);
        this.list = this.listOrdersAux;
        this.spinner.hide();
      }
      this.listOrders = this.listOrdersAux.slice(0, this.itemPerPage);
    });
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
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
            (item.number && item.number.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.supplier.companyName.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.listProductRequested.find((pR) => {
              if (pR.productRequested.patient !== null) {
                return (pR.productRequested.patient.toLowerCase().indexOf(client.toLowerCase()) > -1);
              }
            }))) ;
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
            (item.number && item.number.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.supplier.companyName.toLowerCase().indexOf(client.toLowerCase()) > -1) ||
            (item.listProductRequested.find((pR) => {
                if (pR.productRequested.patient !== null) {
                  return (pR.productRequested.patient.toLowerCase().indexOf(client.toLowerCase()) > -1);
                }
              })))
            && (item.listProductRequested.find((pR) => {
              return (pR.productRequested.product.name.toLowerCase().indexOf(this.valorProduct.toLowerCase()) > -1);
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
        this.valid = true;
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
          return item.listProductRequested.find((pR) => {
            return (pR.productRequested.product.name.toLowerCase().indexOf(product.toLowerCase()) > -1);
          });
        });
        //*
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 9
        && _.toString(this.valorClient) !== '') {// si selecciono status y no fecha ni cliente
        this.listOrders = this.listOrders.filter((item) => {
          return item.listProductRequested.find((pR) => {
            return (((item.nameUser.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1) ||
            (item.number.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1) ||
            (item.supplier.companyName.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1) ||
            (pR.productRequested.patient ? pR.productRequested.patient.toLowerCase().indexOf(this.valorClient.toLowerCase()) > -1 : false))
            && (pR.productRequested.product.name.toLowerCase().indexOf(product.toLowerCase()) > -1));
          });
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
        this.valid = true;
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
    _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if ((((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.number.toLowerCase(), nombreCliente.toLowerCase()))  ||
        (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) || (orders.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) &&
        (orders.listProductRequested.find((pR) => {
          return (pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1);
        }))) &&
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

  filterDateStatusProducto(status, producto): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // Lista actual
      this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if ((orders.listProductRequested.find((pR) => {
        return (pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
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

  filterDateClienteProducto(nombreCliente, producto): void {
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
        (orders.listProductRequested.find((pR) => {
          return (pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
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
    _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if ((orders.listProductRequested.find((pR) => {
        return (pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
        (_.isEqual(fecha, fechaList))) {
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

  filterStatusProducto(producto, status): void {
    const lista = [];
    this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (orders) {
      if (((orders.listProductRequested.find((pR) => {
        return (pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); }))) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), orders.paymentStatus))) {
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
    _.filter(this.listOrdersAux, function (orders) {
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) ||
         (orders.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) &&
        (orders.listProductRequested.find((pR) => {
          return (pR.productRequested.product.name.toLowerCase().indexOf(producto.toLowerCase()) > -1); })) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), orders.paymentStatus))) {
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

  filterStatusNombre(nombreCliente, status): void {
    const lista = [];
    this.listOrdersAux = this.list;
    _.filter(this.listOrdersAux, function (orders) {
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.number.toLowerCase(), nombreCliente.toLowerCase())) ||
        (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase())) ||
        (orders.listProductRequested.find((pR) => {
          if (pR.productRequested.patient !== null) {
            return (pR.productRequested.patient.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1);
          }
        }))) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), orders.paymentStatus))) {
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

  filter(): void {
    //*
    this.listOrdersAux = this.list;
    //*
    if (this.selectedStatus !== '') {
      this.valid = true;
      if (this.tamano.length === 9 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        // tslint:disable-next-line:radix
        this.listOrders = _.filter(this.listOrdersAux, { 'paymentStatus': parseInt(this.selectedStatus) });
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      } else if (this.tamano.length === 15 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        this.filterStatusDate(this.selectedStatus);
      } else if (this.tamano.length === 9 && (this.valorClient.trim() !== '')) {
        const nombre = this.valorClient;
        this.filterStatusNombre(nombre, this.selectedStatus);
      } else if (this.tamano.length === 15 && (this.valorClient.trim() !== '')) {
        const client = this.valorClient;
        this.filterDateStatusCliente(this.selectedStatus, client);
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
      this.valid = true;
      if ((_.toString(valorStatus) === '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
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
      } else if ((_.toString(valorStatus) !== '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        this.filterStatusDate(valorStatus);
      } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) === '')) {
        this.filterDateNombre(this.valorClient);
      } else if (_.toString(valorStatus) !== ''  && (this.valorClient.trim() !== '')) {
        this.filterDateStatusCliente(valorStatus, this.valorClient);
      }
    }
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
    this.getListOrders();
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
    this.router.navigate(['/order-list-client'], { queryParams: { status: this.status } });
    this.valid = false;
    this.tamano = 'undefined';
    this.selectedStatus = '';
    this.fechaSelec = null;
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

  downloadOrder() {
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
  }

  getReferenceCopy(order) {
    let reference = null;
    if (order.type) {
      const type = this.translate.instant(order.type);
      reference = ' (' + type + ': ' + '#' + order.originReference + ') '
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
        this.status = 0;
        this.clean();
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
