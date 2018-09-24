import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusOrder } from '../../../shared/enum/status-order.enum';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FtpService } from '../../../shared/services/ftp/ftp.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { NgbDateAdapter, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit, OnDestroy {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
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

  constructor(private orderService: OrderService,
              private userService: UserStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private ftpService: FtpService,
              private formBuilder: FormBuilder) {
    this.user = JSON.parse(userService.getCurrentUser());
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
        this.getListOrders();
      }
    });
  }

  ngOnInit() {
    this.getUser();
    this.getListOrders();
    this.route.queryParams.subscribe(params => {
      this.status = params.status;
    });

    this.advancedPagination = 1;
    this.model = {year: 0, month: 0, day: 0};
    this.selectedStatus = '';
    this.tamano = 'undefined';
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getUser(): void {
    this.user = JSON.parse(this.userService.getCurrentUser());
  }

  getListOrders(): void {
    this.orderService.allOrderByUserIdAndStatus$(this.user.userResponse.idUser, this.status).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
        this.listOrdersAux = res.data;
        _.each(this.listOrders, function (order) {
           _.each(order.listProductRequested, function(listDetails) {
            listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
          });
        });
      }
      this.listOrders = this.listOrdersAux.slice(0, this.itemPerPage);
    });
  }

  upload(): void {
    console.log('upload');
    this.ftpService.uploadFile$('/home/naily/Descargas/prueba.jpg').subscribe(res => {
      if (res.code === CodeHttp.ok) {
        console.log('OK');
      }
    });
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(): void {
   const status = this.selectedStatus;
   const lista = [];
  if (this.selectedStatus !== '') {
      this.valid = true;
      if (this.tamano.length === 9) {
        // tslint:disable-next-line:radix
        this.listOrders = _.filter(this.listOrdersAux, { 'paymentStatus': parseInt(this.selectedStatus) });
      } else {
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
    }
  }

  filter1(value): void {
    this.model = value;
    const valorStatus = this.selectedStatus;
    this.tamano = this.valueDate(this.model);
    const lista = [];
    if (this.tamano.length === 15) {
      this.valid = true;
      let fecha: String;
      // FechaFiltro
      fecha = this.getFecha();
      _.filter(this.listOrdersAux, function (orders) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          if (_.toString(valorStatus) === '') { // Si no ha seleccionado status
            if (_.isEqual(fecha, fechaList)) {
              lista.push(orders);
            }
          // tslint:disable-next-line:radix
          } else if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(valorStatus), orders.paymentStatus))) {
              lista.push(orders);
          }
      });
      this.listOrders = lista;
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
    this.valid = false;
    this.tamano = 'undefined';
    this.selectedStatus = '';
    this.fechaSelec = null;
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }
}
