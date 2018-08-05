import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../../../shared/services/order/order.service';
import { FormBuilder } from '@angular/forms';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { UserStorageService } from '../../../http/user-storage.service';
import { ModalsStatusComponent} from '../modals-status/modals-status.component';

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
  { id: 1, name: "Pay" },
  { id: 2, name: "Processed" },
  { id: 3, name: "Sent" }
  ];
  model: NgbDateStruct;
  valid1 = false;
  formOrder: FormGroup;
  formOrder1: FormGroup;
  tamano: String;
  user: any;
  valorClient: string;
  mostrarStatus = false;

  constructor(private orderService: OrderService,
    private formBuilder: FormBuilder,
    private userService: UserStorageService,
    private modalService: NgbModal
) {
    this.user = JSON.parse(userService.getCurrentUser());
  }

  ngOnInit() {
    this.getListOrders();
    this.advancedPagination = 1;
    this.initializeForm();
    this.initializeForm1();
    this.model = { year: 0, month: 0, day: 0 };
  }

  getListOrders(): void {
    if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$().subscribe(res => {
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
      this.orderService.allOrder$().subscribe(res => {
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
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.listOrders = this.listOrdersAux.slice(startItem, endItem);
  }

  filter(value): void {
    if (value != "") {
      this.valid1 = true;
      if (this.tamano.length == 9 && (_.toString(this.valorClient).length == 0 || this.valorClient.trim() == '')) {
        this.listOrders = _.filter(this.listOrdersAux, { 'status': parseInt(value) });
      } else if (this.tamano.length == 15 && (_.toString(this.valorClient).length == 0 || this.valorClient.trim() == '')) {
        this.filterStatusDate(value);
      } else if (this.tamano.length == 9 && (this.valorClient.trim() !== '')) {
        var nombre = this.valorClient;
        this.filterStatusNombre(nombre,value);
      } else if ((this.tamano.length == 15) && (this.valorClient.trim() !== '')) {
        var nombre = this.valorClient;
        this.fullFilter(nombre,value);
      }
    }
  }

  filter1(value): void {
    this.model = value;
    var valorStatus = this.formOrder.get('selectedStatOrd').value;
    this.tamano = this.valueDate(this.model);
    if (this.tamano.length == 15) {
      this.valid1 = true;
      if ((_.toString(valorStatus) == "") && (_.toString(this.valorClient).length == 0 || this.valorClient.trim() == '')) {
       //FechaFiltro
        var fecha: String;
        fecha = this.getFecha();
        this.listOrders = _.filter(this.listOrdersAux, function (orders) {
          var fechaList: String;
          var ord = [];
          var listOrder;
          //Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
            if (_.isEqual(fecha, fechaList)) {
              listOrder = _(ord).push(orders);
              listOrder = listOrder.commit();
              return listOrder;
            }
      });
     }else if((_.toString(valorStatus) != "") && (_.toString(this.valorClient).length == 0 || this.valorClient.trim() == '')){
         this.filterStatusDate(valorStatus);
     }else if((this.valorClient.trim() != "") && (_.toString(valorStatus) == "")){
        this.filterDateNombre(this.valorClient);
     }else if((this.valorClient.trim() != "") && (_.toString(valorStatus) != "")){
        this.fullFilter(this.valorClient,valorStatus);
     }
    }

  }

  getItems(ev: any) {
    this.listOrders = this.listOrdersAux;

    const val = ev.target.value;
    this.valorClient = val;
    var valorStatus = this.formOrder.get('selectedStatOrd').value;
    if (val && val.trim() !== '') {
      var client = val;
      if (_.toString(valorStatus) == "" && this.tamano.length == 9) { //Si no ha seleccionado status y fecha
        this.listOrders = this.listOrders.filter((item) => {
          return ((item.nameUser.toLowerCase().indexOf(val.toLowerCase()) > -1)||
                 (item.supplier.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
      } else if (_.toString(valorStatus) != "" && this.tamano.length == 9) {//si selecciono status y no fecha
          this.filterStatusNombre(client,valorStatus);
      } else if (_.toString(valorStatus) == "" && this.tamano.length == 15) { // si no selecciono status y fecha si
          this.filterDateNombre(client);
      } else if (_.toString(valorStatus) != "" && this.tamano.length == 15) { // si escibio nombre y selecciono fecha
          this.fullFilter(client, valorStatus);
      }
    } else if (_.toString(valorStatus) != "") { // si borro el nombre y selecciono status
      this.filter(valorStatus);
    } else if (_.toString(valorStatus) == "") { // si borro el nombre y no selecciono status pero fecha si
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
          if (_.isEqual(fecha, fechaList)) {
            listOrder = _(ord).push(orders);
            listOrder = listOrder.commit();
            return listOrder;
          }
        });
      }
    }
  }

  fullFilter(nombreCliente, status): void {
    //FechaFiltro
    var fecha: String;
    fecha = this.getFecha();
    //Lista actual
    this.listOrders = _.filter(this.listOrdersAux, function (orders) {
      var ord = [];
      var listOrder;
      //Fecha Listado
      var fechaList = _.toString(orders.date.slice(0, 10));
      if ((((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase()))|| (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) || (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) && ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), orders.status))) {
        listOrder = _(ord).push(orders);
        listOrder = listOrder.commit();
        return listOrder;
      }
    });
  }

  filterStatusNombre(nombreCliente,status):void{
    this.listOrders = _.filter(this.listOrdersAux, function (orders) {
      var ord = [];
      var listOrder;
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase()))|| (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) && (_.isEqual(parseInt(status), orders.status))) {
        listOrder = _(ord).push(orders);
        listOrder = listOrder.commit();
        return listOrder;
      }
    });
  }

  filterDateNombre(nombreCliente):void{
    var fecha: String;
    //FechaFiltro
    fecha = this.getFecha();
    this.listOrders = _.filter(this.listOrdersAux, function (orders) {
      var ord = [];
      var listOrder;
      //Fecha Listado
      var fechaList = _.toString(orders.date.slice(0, 10));
      if (((_.includes(orders.nameUser.toLowerCase(), nombreCliente.toLowerCase())) || (_.includes(orders.supplier.companyName.toLowerCase(), nombreCliente.toLowerCase()))) && ((_.isEqual(fecha, fechaList)))) {
        listOrder = _(ord).push(orders);
        listOrder = listOrder.commit();
        return listOrder;
      }
    });
  }

  filterStatusDate(status):void{
    var fecha: String;
    //FechaFiltro
    fecha = this.getFecha();
    this.listOrders = _.filter(this.listOrdersAux, function (orders) {
      var fechaList: String;
      var ord = [];
      var listOrder;
      //Fecha Listado
      fechaList = _.toString(orders.date.slice(0, 10));
      if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(status), orders.status))) {
        listOrder = _(ord).push(orders);
        listOrder = listOrder.commit();
        return listOrder;
      }
    });
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
    this.formOrder1.get('fechaSelecOrd').reset();
    this.tamano = 'undefined';
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

  open(order) {
		const modalRef = this.modalService.open(ModalsStatusComponent);
		modalRef.componentInstance.order = order;
		modalRef.result.then((result) => {
			this.getListOrders();
		} , (reason) => {
		});
  }


}


