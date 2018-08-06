import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusOrder } from '../../../shared/enum/status-order.enum';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FtpService } from '../../../shared/services/ftp/ftp.service';
import { UserStorageService } from '../../../http/user-storage.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 5;
  filterStatus = [{ id: 0, name: "Pending" },
  { id: 1, name: "Authorized" },
  { id: 2, name: "Processed" },
  { id: 3, name: "Pay" },
  { id: 4, name: "Sent" }
  ];
  model: NgbDateStruct;
  valid = false;
  form: FormGroup;
  form1: FormGroup;
  tamano: String;
  user: any;
  constructor(private orderService: OrderService,
    private ftpService: FtpService,
    private userStorageService: UserStorageService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUser();
    this.getListOrders();
    this.advancedPagination = 1;
    this.initializeForm();
    this.initializeForm1();
    this.model = {year: 0, month: 0, day: 0};
  }

  getUser(): void {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
  }

  getListOrders(): void {
    this.orderService.allOrderByUser$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
        this.listOrdersAux = res.data;
      }
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
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(value): void {
    if (value != "") {
      this.valid = true;
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
    var valorStatus = this.form.get('selectedStat').value;
    this.tamano = this.valueDate(this.model);
    if (this.tamano.length == 15) {
      this.valid = true;
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
    this.valid = false;
    this.form.get('selectedStat').setValue('');
    this.form1.get('fechaSelec').reset();
    this.tamano= 'undefined';
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      selectedStat: ['']
    });
  }

  initializeForm1() {
    this.form1 = this.formBuilder.group({
      fechaSelec: ['']
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
}
