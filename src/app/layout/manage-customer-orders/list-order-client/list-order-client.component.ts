import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../../../shared/services/order/order.service';
import { FormBuilder } from '@angular/forms';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-order-client',
  templateUrl: './list-order-client.component.html',
  styleUrls: ['./list-order-client.component.scss']
})
export class ListOrderClientComponent implements OnInit {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 5;
  filterStatus = [{ id: 0, name: "Pending" },
                  { id: 1, name: "Processed" },
                  { id: 2, name: "Pay" },
                  { id: 3, name: "Sent" }
                ];
  model: NgbDateStruct;
  valid1 = false;
  formOrder: FormGroup;
  formOrder1: FormGroup;
  tamano:String;
  constructor(private orderService: OrderService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getListOrders();
    this.advancedPagination = 1;
    this.initializeForm();
    this.initializeForm1();
    this.model = {year:0,month:0,day:0};
  }

  getListOrders(): void {
    this.orderService.findOrdersClientBySeller$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
        this.listOrdersAux = res.data;
        console.log('datos',res.data);
      }
    });
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(value): void {
    if (value != "") {
      this.valid1 = true;
      if (this.tamano.length == 9) {
        this.listOrders = _.filter(this.listOrdersAux, { 'status': parseInt(value) });
      } else {
        var fecha: String;
        //FechaFiltro
        fecha = this.getFecha();
        this.listOrders = _.filter(this.listOrdersAux, function (orders) {
          var fechaList: String;
          var ord = [];
          var listOrder;
          //Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(value), orders.status))) {
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
    var valorStatus = this.formOrder.get('selectedStatOrd').value;
    this.tamano = this.valueDate(this.model);
    if (this.tamano.length == 15) {
      this.valid1 = true;
      var fecha: String;
      //FechaFiltro
      fecha = this.getFecha();
      this.listOrders = _.filter(this.listOrdersAux, function (orders) {
        var fechaList: String;
        var ord = [];
        var listOrder;
        //Fecha Listado
        fechaList = _.toString(orders.date.slice(0, 10));
        if (_.toString(valorStatus) == "") { //Si no ha seleccionado status
          if (_.isEqual(fecha, fechaList)) {
            listOrder = _(ord).push(orders);
            listOrder = listOrder.commit();
            return listOrder;
          }
        } else if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(valorStatus), orders.status))) {
            listOrder = _(ord).push(orders);
            listOrder = listOrder.commit();
            return listOrder;
          }
      });
    }
  }

  getFecha(): String {
    var ano;
    var mes;
    var dia;
    var fecha: String;
    //Ano
    ano = this.model.year;
    //Mes
    this.model.month < 10 ? mes = '0' + this.model.month : mes = this.model.month;
    //Dia
    this.model.day < 10 ? dia = '0' + this.model.day : dia = this.model.day;
    //FechaFiltro
    fecha = ano + '-' + mes + '-' + dia;
    return fecha;
  }

  clean() {
    this.getListOrders();
    this.valid1 = false;
    this.formOrder.get('selectedStatOrd').setValue("");
    this.formOrder1.get('fechaSelecOrd').setValue("");
    this.tamano= 'undefined';
  }

  initializeForm() {
    this.formOrder = this.formBuilder.group({
      selectedStatOrd: ['']
    });
  }

  initializeForm1() {
    this.formOrder1 = this.formBuilder.group({
      fechaSelecOrd: ['']
    });
  }

  valueDate(valor): String {
    var str: String;
    var o = [];
    var l = _(o).push(valor);
    l = l.commit();
    str = _.toString(l);
    return str;
  }

  getItems(ev: any) {
    this.listOrders = this.listOrdersAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listOrders = this.listOrders.filter((item) => {
        return ((item.user.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }
}
