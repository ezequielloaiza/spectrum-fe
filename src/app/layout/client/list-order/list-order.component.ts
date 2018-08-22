import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusOrder } from '../../../shared/enum/status-order.enum';
import * as _ from 'lodash';
import { NgbDateAdapter, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  filterStatus = [{ id: 0, name: 'Pending' },
                  { id: 1, name: 'Pay' },
                  { id: 2, name: 'Processed' },
                  { id: 3, name: 'Sent' }
                 ];
  model: NgbDateStruct;
  valid = false;
  tamano: String;
  selectedStatus: any;
  fechaSelec: NgbDatepicker;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getListOrders();
    this.advancedPagination = 1;
    this.model = {year: 0, month: 0, day: 0};
    this.selectedStatus = '';
    this.tamano = 'undefined';
  }

  getListOrders(): void {
    this.orderService.allOrderByUser$().subscribe(res => {
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

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(): void {
   const status = this.selectedStatus;
  if (this.selectedStatus !== '') {
      this.valid = true;
      if (this.tamano.length === 9) {
        // tslint:disable-next-line:radix
        this.listOrders = _.filter(this.listOrdersAux, { 'status': parseInt(this.selectedStatus) });
      } else {
        let fecha: String;
        // FechaFiltro
        fecha = this.getFecha();
        this.listOrders = _.filter(this.listOrdersAux, function (orders) {
          let fechaList: String;
          const ord = [];
          let listOrder;
          // Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          // tslint:disable-next-line:radix
          if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(status), orders.status))) {
            listOrder = _(ord).push(orders);
            listOrder = listOrder.commit();
            return listOrder;
          }
        });
      }
    }
  }

  filter1(value): void {
    this.model = value;
    const valorStatus = this.selectedStatus;
    this.tamano = this.valueDate(this.model);
    if (this.tamano.length === 15) {
      this.valid = true;
      let fecha: String;
      // FechaFiltro
      fecha = this.getFecha();
      this.listOrders = _.filter(this.listOrdersAux, function (orders) {
        let fechaList: String;
        const ord = [];
        let listOrder;
        // Fecha Listado
        fechaList = _.toString(orders.date.slice(0, 10));
        if (_.toString(valorStatus) === '') { // Si no ha seleccionado status
          if (_.isEqual(fecha, fechaList)) {
            listOrder = _(ord).push(orders);
            listOrder = listOrder.commit();
            return listOrder;
          }
        // tslint:disable-next-line:radix
        } else if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(valorStatus), orders.status))) {
            listOrder = _(ord).push(orders);
            listOrder = listOrder.commit();
            return listOrder;
          }
      });
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
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    let l = _(o).push(valor);
    l = l.commit();
    str = _.toString(l);
    return str;
  }
}
