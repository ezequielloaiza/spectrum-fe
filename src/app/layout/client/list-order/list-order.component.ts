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
    this.model = {year: 0, month: 0, day: 0};
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
            if (listDetails.productRequested.detail && listDetails.productRequested.detail.length > 0) {
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

  filter(): void {
   const status = this.selectedStatus;
   const lista = [];
    //*
    this.listOrders = this.list;
    //*
  if (this.selectedStatus !== '') {
      this.valid = true;
      if (this.tamano.length === 9) {
        // tslint:disable-next-line:radix
        this.listOrders = _.filter(this.listOrdersAux, { 'paymentStatus': parseInt(this.selectedStatus) });
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
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
        //*
        this.listOrders = lista;
        this.listOrdersAux = this.listOrders;
        this.advancedPagination = 1;
        this.pageChange(this.advancedPagination);
        //*
      }
    }
  }

  filter1(value): void {
    this.model = value;
    const valorStatus = this.selectedStatus;
    this.tamano = this.valueDate(this.model);
    const lista = [];
     //*
     this.listOrders = this.list;
     //*
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
      //*
      this.listOrders = lista;
      this.listOrdersAux = this.listOrders;
      this.advancedPagination = 1;
      this.pageChange(this.advancedPagination);
      //*
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
