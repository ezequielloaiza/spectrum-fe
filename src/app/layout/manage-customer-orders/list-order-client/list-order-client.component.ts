import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { UserStorageService } from '../../../http/user-storage.service';
import { ModalsStatusComponent} from '../modals-status/modals-status.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';

@Component({
  selector: 'app-list-order-client',
  templateUrl: './list-order-client.component.html',
  styleUrls: ['./list-order-client.component.scss']
})
export class ListOrderClientComponent implements OnInit, OnDestroy {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
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
  mostrarStatus = false;
  fechaSelecOrd: NgbDatepicker;
  selectedStatus: any;
  status: any;
  navigationSubscription;

  constructor(private orderService: OrderService,
    private userService: UserStorageService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router) {
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
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.model = { year: 0, month: 0, day: 0 };
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getListOrders(): void {

    if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$(this.status).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listOrders = res.data;
          this.listOrdersAux = res.data;
          _.each(this.listOrders, function (order) {
            _.each(order.listProductRequested, function (listDetails) {
              listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
            });
          });
        }
      });
    } else if (this.user.role.idRole === 1) {
      this.orderService.allOrderWithStatus$(this.status).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.mostrarStatus = true;
          this.listOrders = res.data;
          this.listOrdersAux = res.data;
          _.each(this.listOrders, function (order) {
            _.each(order.listProductRequested, function (listDetails) {
              listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
            });
          });
        }
      });
    }
    this.listOrders = this.listOrdersAux.slice(0, this.itemPerPage);
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(): void {
    if (this.selectedStatus !== '') {
      this.valid1 = true;
      if (this.tamano.length === 9 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        // tslint:disable-next-line:radix
        this.listOrders = _.filter(this.listOrdersAux, { 'paymentStatus': parseInt(this.selectedStatus) });
      } else if (this.tamano.length === 15 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        this.filterStatusDate(this.selectedStatus);
      } else if (this.tamano.length === 9 && (this.valorClient.trim() !== '')) {
        const nombre = this.valorClient;
        this.filterStatusNombre(nombre , this.selectedStatus);
      } else if ((this.tamano.length === 15) && (this.valorClient.trim() !== '')) {
        const nombre = this.valorClient;
        this.fullFilter(nombre , this.selectedStatus);
      }
    }
  }

  filter1(value): void {
    this.model = value;
    const valorStatus = this.selectedStatus;
    this.tamano = this.valueDate(this.model);
    const lista = [];
    if (this.tamano.length === 15) {
      this.valid1 = true;
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
      this.listOrders = lista;
     } else if ((_.toString(valorStatus) !== '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
         this.filterStatusDate(valorStatus);
     } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) === '')) {
        this.filterDateNombre(this.valorClient);
     } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) !== '')) {
        this.fullFilter(this.valorClient , valorStatus);
     }
    }
  }

  getItems(ev: any) {
    this.listOrders = this.listOrdersAux;
    const val = ev.target.value;
    this.valorClient = val;
    const valorStatus = this.selectedStatus;
    const lista = [];
    if (val && val.trim() !== '') {
      const client = val;
      if (_.toString(valorStatus) === '' && this.tamano.length === 9) { // Si no ha seleccionado status y fecha
        this.listOrders = this.listOrders.filter((item) => {
          return ((item.nameUser.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                 (item.supplier.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9) {// si selecciono status y no fecha
          this.filterStatusNombre(client , valorStatus);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15) { // si no selecciono status y fecha si
          this.filterDateNombre(client);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15) { // si escibio nombre y selecciono fecha
          this.fullFilter(client, valorStatus);
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
      }
    }
  }

  fullFilter(nombreCliente, status): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // Lista actual
     _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if ((((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
       (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) ||
       (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) &&
       // tslint:disable-next-line:radix
       ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), orders.paymentStatus))) {
        lista.push(orders);
      }
    });
    this.listOrders = lista;
  }

  filterStatusNombre(nombreCliente, status): void {
    const lista = [];
    _.filter(this.listOrdersAux, function (orders) {
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
       (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) &&
       // tslint:disable-next-line:radix
       (_.isEqual(parseInt(status), orders.paymentStatus))) {
        lista.push(orders);
      }
    });
    this.listOrders = lista;
  }

  filterDateNombre(nombreCliente): void {
    const lista = [];
    let fecha: String;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listOrdersAux, function (orders) {
      // Fecha Listado
      const fechaList = _.toString(orders.date.slice(0, 10));
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) ||
      (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) &&
      ((_.isEqual(fecha, fechaList)))) {
        lista.push(orders);
      }
    });
    this.listOrders = lista;
  }

  filterStatusDate(status): void {
    const lista = [];
    let fecha: String;
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
    this.listOrders = lista;
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
    this.valid1 = false;
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.fechaSelecOrd = null;
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  open(order) {
    const modalRef = this.modalService.open(ModalsStatusComponent);
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
          this.getListOrders();
    } , (reason) => {
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
}


