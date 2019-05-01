import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { InvoiceSupplierService } from '../../shared/services/invoiceSupplier/invoiceSupplier.service';
import { UserStorageService } from '../../http/user-storage.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { GenerateInvoiceComponent } from '../manage-customer-orders/generate-invoice/generate-invoice.component';
import { OrderService } from '../../shared/services';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-invoice',
  templateUrl: './manage-invoice.component.html',
  styleUrls: ['./manage-invoice.component.scss']
})
export class ManageInvoiceComponent implements OnInit {
  orderByField = 'number';
  reverseSort = true;
  typeSort = 0;
  invoice: any;
  // listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  listInvoicesOriginal: Array<any> = new Array;
  listInvoicesAuxOriginal: Array<any> = new Array;
  listInvoicesCopy: Array<any> = new Array;
  listInvoicesAuxCopy: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 8;
  order: any;
  filterStatus = [{ id: 0, name: 'Pending' },
                  { id: 1, name: 'Sent' }
                ];
  valorClient: string;
  // selectedStatus: any;
  selectedStatusOriginal: any;
  selectedStatusCopy: any;
  status: any;
  tamano: String;
  model: NgbDateStruct;
  // valid1 = false;
  validOriginal = false;
  validCopy = false;
  fechaSelec: NgbDatepicker;
  fechaSelecOriginal: NgbDatepicker;
  fechaSelecCopy: NgbDatepicker;
  search: String;
  searchOriginal: String;
  searchCopy: String;
  constructor(private orderService: OrderService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceSupplierService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getListInvoices();
    this.advancedPagination = 1;
    // this.selectedStatus = '';
    this.selectedStatusOriginal = '';
    this.selectedStatusCopy = '';
    this.tamano = 'undefined';
    this.model = { year: 0, month: 0, day: 0 };
  }

  /*pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listInvoices = this.listInvoicesAux.slice(startItem, endItem);
  }*/

  pageChangeOriginal(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listInvoicesOriginal = this.listInvoicesAuxOriginal.slice(startItem, endItem);
  }

  pageChangeCopy(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listInvoicesCopy = this.listInvoicesAuxCopy.slice(startItem, endItem);
  }

  getListInvoices(): void {
    this.spinner.show();
    this.invoiceService.allInvoice$().subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          /*this.listInvoices = res.data;
          this.listInvoicesAux = res.data;
          this.listInvoices = _.orderBy(this.listInvoices, ['date'], ['desc']);
          this.listInvoicesAux = _.orderBy(this.listInvoicesAux, ['date'], ['desc']);
          this.listInvoices = this.listInvoicesAux.slice(0, this.itemPerPage);*/
          // Original
          this.listInvoicesOriginal = _.filter(res.data, { 'original': true });
          this.listInvoicesAuxOriginal = _.filter(res.data, { 'original': true });
          this.listInvoicesOriginal = _.orderBy(this.listInvoicesOriginal, ['date'], ['desc']);
          this.listInvoicesAuxOriginal = _.orderBy(this.listInvoicesAuxOriginal, ['date'], ['desc']);
          this.listInvoicesOriginal = this.listInvoicesAuxOriginal.slice(0, this.itemPerPage);
          // Copy
          this.listInvoicesCopy = _.filter(res.data, { 'original': false });
          this.listInvoicesAuxCopy = _.filter(res.data, { 'original': false });
          this.listInvoicesCopy = _.orderBy(this.listInvoicesCopy, ['date'], ['desc']);
          this.listInvoicesAuxCopy = _.orderBy(this.listInvoicesAuxCopy, ['date'], ['desc']);
          this.listInvoicesCopy = this.listInvoicesAuxCopy.slice(0, this.itemPerPage);
          this.spinner.hide();
        } else {
          console.log(res.code);
          this.spinner.hide();
        }
      },
      error => {
        console.log('error', error);
        this.spinner.hide();
      }
    )
  }

  sortInvoice(key, type) {
    if (this.orderByField !== key) {
      this.typeSort = 0;
      this.reverseSort = false;
    }
    this.orderByField = key;
    if (this.orderByField !== 'number') {
      this.typeSort ++;
      if (this.typeSort > 2) {
        this.typeSort = 0;
        this.orderByField = 'number';
        key = 'number';
        this.reverseSort = true;
        this.getListInvoices();
      }
    }

    if (type === 'original') {
      const invoicesSort = this.listInvoicesAuxOriginal.sort(function(a, b) {
        const x = a[key].toString().toLowerCase(); const y = b[key].toString().toLowerCase();
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
      this.listInvoicesAuxOriginal = invoicesSort;
      if (this.reverseSort) {
        this.listInvoicesAuxOriginal = invoicesSort.reverse();
      }
      this.advancedPagination = 1;
      this.pageChangeOriginal(this.advancedPagination);
    } else {
      const invoicesSort = this.listInvoicesAuxCopy.sort(function(a, b) {
        const x = a[key].toString().toLowerCase(); const y = b[key].toString().toLowerCase();
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
      this.listInvoicesAuxCopy = invoicesSort;
      if (this.reverseSort) {
        this.listInvoicesAuxCopy = invoicesSort.reverse();
      }
      this.advancedPagination = 1;
      this.pageChangeCopy(this.advancedPagination);
    }
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.pageChangeOriginal(this.advancedPagination);
    this.pageChangeCopy(this.advancedPagination);
  }

  getOrder(idOrder) {
    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.order = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  open(invoice, actions) {
    let p = true;
    if (actions == 'edit') {
      p = false;
    }
    const modalRef = this.modalService.open(GenerateInvoiceComponent,
    { size: 'lg', windowClass: 'modal-content-border modal-adaptive', backdrop  : 'static', keyboard  : false });
    if (invoice.original) {
      modalRef.componentInstance.original = invoice;
    } else {
      modalRef.componentInstance.invoice = invoice;
    }
    modalRef.componentInstance.idsOrders = invoice.listOrders;
    modalRef.componentInstance.order = undefined;
    modalRef.componentInstance.pilot = p;
    modalRef.result.then((result) => {
          this.getListInvoices();
    } , (reason) => {
    });
  }

  delete(invoice): void {
    this.translate.get('Delete Invoice', { value: 'Delete Invoice' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to delete the invoice? You must notify the provider this change.',
        { value: 'Are you sure you want to delete the invoice? You must notify the provider this change.' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
              this.invoiceService.delete$(invoice.idInvoice).subscribe(res => {
                if (res.code === CodeHttp.ok) {
                  this.getListInvoices();
                  this.translate.get('Successfully Deleted', { value: 'Successfully Deleted' }).subscribe((res1: string) => {
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

  downloadInvoice(invoice): void {
    this.spinner.show();
    this.invoiceService.downloadInvoice$(invoice.idInvoice).subscribe(res => {
      const filename = 'I-' + invoice.number + '.pdf';
      if (res.size > 0) {
        this.spinner.hide();
        saveAs(res, filename);
      } else {
        this.spinner.hide();
        this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res1: string) => {
          this.notification.error('', res1);
        });
      }
    }, error => {
      this.spinner.hide();
      this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
  }

  /*getItems(ev: any, type: String) {
    this.listInvoices = this.listInvoicesAux;
    const val = ev.target.value;
    this.valorClient = val;
    const valorStatus = this.selectedStatus;
    const lista = [];
    this.valid1 = true;
    if (val && val.trim() !== '') {
      const client = val;
      if (_.toString(valorStatus) === '' && this.tamano.length === 9) { // Si no ha seleccionado status y fecha
        this.listInvoices = this.listInvoices.filter((item) => {
          return ((item.user.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.number.toLowerCase().indexOf(val.toLowerCase()) > -1));
        });
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9) {// si selecciono status y no fecha
          this.filterStatusNombre(client , valorStatus);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15) { // si no selecciono status y fecha si
          this.filterDateNombre(client);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15) { // si escribio nombre y selecciono fecha
          this.fullFilter(client, valorStatus);
      }
    } else if (_.toString(valorStatus) !== '') { // si borro el nombre y selecciono status
      this.filter(type);
    } else if (_.toString(valorStatus) === '') { // si borro el nombre y no selecciono status pero fecha si
      if (this.tamano.length === 15) {
        this.valid1 = true;
        let fecha: String;
        // FechaFiltro
        fecha = this.getFecha();
        _.filter(this.listInvoicesAux, function (orders) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(orders.date.slice(0, 10));
          if (_.isEqual(fecha, fechaList)) {
            lista.push(orders);
          }
        });
        this.listInvoices = lista;
      }
    }
  }*/

  getItems(ev: any, type: String) {
    const val = ev.target.value;
    this.valorClient = val;
    const lista = [];

    if (type === 'original') {
      this.listInvoicesOriginal = this.listInvoicesAuxOriginal;
      const valorStatus = this.selectedStatusOriginal;
      this.validOriginal = true;
      if (val && val.trim() !== '') {
        const client = val;
        if (_.toString(valorStatus) === '' && this.tamano.length === 9) { // Si no ha seleccionado status y fecha
          this.listInvoicesOriginal = this.listInvoicesOriginal.filter((item) => {
            return ((item.user.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
            (item.number.toLowerCase().indexOf(val.toLowerCase()) > -1));
          });
        } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9) {// si selecciono status y no fecha
            this.filterStatusNombre(client , valorStatus, type);
        } else if (_.toString(valorStatus) === '' && this.tamano.length === 15) { // si no selecciono status y fecha si
            this.filterDateNombre(client, type);
        } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15) { // si escribio nombre y selecciono fecha
            this.fullFilter(client, valorStatus, type);
        }
      } else if (_.toString(valorStatus) !== '') { // si borro el nombre y selecciono status
        this.filter(type);
      } else if (_.toString(valorStatus) === '') { // si borro el nombre y no selecciono status pero fecha si
        if (this.tamano.length === 15) {
          this.validOriginal = true;
          let fecha: String;
          // FechaFiltro
          fecha = this.getFecha();
          _.filter(this.listInvoicesAuxOriginal, function (orders) {
            let fechaList: String;
            // Fecha Listado
            fechaList = _.toString(orders.date.slice(0, 10));
            if (_.isEqual(fecha, fechaList)) {
              lista.push(orders);
            }
          });
          this.listInvoicesOriginal = lista;
        }
      }
    } else {
      this.listInvoicesCopy = this.listInvoicesAuxCopy;
      const valorStatus = this.selectedStatusCopy;
      const lista = [];
      this.validCopy = true;
      if (val && val.trim() !== '') {
        const client = val;
        if (_.toString(valorStatus) === '' && this.tamano.length === 9) { // Si no ha seleccionado status y fecha
          this.listInvoicesCopy = this.listInvoicesCopy.filter((item) => {
            return ((item.user.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
            (item.number.toLowerCase().indexOf(val.toLowerCase()) > -1));
          });
        } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9) {// si selecciono status y no fecha
            this.filterStatusNombre(client , valorStatus, type);
        } else if (_.toString(valorStatus) === '' && this.tamano.length === 15) { // si no selecciono status y fecha si
            this.filterDateNombre(client, type);
        } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15) { // si escribio nombre y selecciono fecha
            this.fullFilter(client, valorStatus, type);
        }
      } else if (_.toString(valorStatus) !== '') { // si borro el nombre y selecciono status
        this.filter(type);
      } else if (_.toString(valorStatus) === '') { // si borro el nombre y no selecciono status pero fecha si
        if (this.tamano.length === 15) {
          this.validCopy = true;
          let fecha: String;
          // FechaFiltro
          fecha = this.getFecha();
          _.filter(this.listInvoicesAuxCopy, function (orders) {
            let fechaList: String;
            // Fecha Listado
            fechaList = _.toString(orders.date.slice(0, 10));
            if (_.isEqual(fecha, fechaList)) {
              lista.push(orders);
            }
          });
          this.listInvoicesCopy = lista;
        }
      }
    }
  }

  filter(type: String): void {
    if (type === 'original') {
      if (this.selectedStatusOriginal !== '') {
        this.validOriginal = true;
        if (this.tamano.length === 9 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
          this.listInvoicesOriginal = _.filter(this.listInvoicesAuxOriginal, { 'status': parseInt(this.selectedStatusOriginal) });
        } else if (this.tamano.length === 15 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
          this.filterStatusDate(this.selectedStatusOriginal, type);
        } else if (this.tamano.length === 9 && (this.valorClient.trim() !== '')) {
          const nombre = this.valorClient;
          this.filterStatusNombre(nombre , this.selectedStatusOriginal, type);
        } else if ((this.tamano.length === 15) && (this.valorClient.trim() !== '')) {
          const nombre = this.valorClient;
          this.fullFilter(nombre , this.selectedStatusOriginal, type);
        }
      }
    } else {
      if (this.selectedStatusCopy !== '') {
        this.validCopy = true;
        if (this.tamano.length === 9 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
          this.listInvoicesCopy = _.filter(this.listInvoicesAuxCopy, { 'status': parseInt(this.selectedStatusCopy) });
        } else if (this.tamano.length === 15 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
          this.filterStatusDate(this.selectedStatusCopy, type);
        } else if (this.tamano.length === 9 && (this.valorClient.trim() !== '')) {
          const nombre = this.valorClient;
          this.filterStatusNombre(nombre , this.selectedStatusCopy, type);
        } else if ((this.tamano.length === 15) && (this.valorClient.trim() !== '')) {
          const nombre = this.valorClient;
          this.fullFilter(nombre , this.selectedStatusCopy, type);
        }
      }
    }
  }

  filter1(value, type): void {
    this.model = value;
    this.tamano = this.valueDate(this.model);
    const lista = [];
    let valorStatus: any;
    if (type === 'original') {
      this.validOriginal = true;
      valorStatus = this.selectedStatusOriginal;
    } else {
      this.validCopy = true;
      valorStatus = this.selectedStatusCopy;
    }
    if (this.tamano.length === 15) {
      if (type === 'original' &&
        (_.toString(valorStatus) === '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        // FechaFiltro
         let fecha: String;
         fecha = this.getFecha();
          _.filter(this.listInvoicesAuxOriginal, function (invoices) {
           let fechaList: String;
           // Fecha Listado
           fechaList = _.toString(invoices.date.slice(0, 10));
             if (_.isEqual(fecha, fechaList)) {
               lista.push(invoices);
             }
          });
        this.listInvoicesOriginal = lista;
      } else if (type === 'copy' &&
        (_.toString(valorStatus) === '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        // FechaFiltro
        let fecha: String;
        fecha = this.getFecha();
        _.filter(this.listInvoicesAuxCopy, function (invoices) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(invoices.date.slice(0, 10));
            if (_.isEqual(fecha, fechaList)) {
              lista.push(invoices);
            }
          });
        this.listInvoicesCopy = lista;
      } else if ((_.toString(valorStatus) !== '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        this.filterStatusDate(valorStatus, type);
      } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) === '')) {
        this.filterDateNombre(this.valorClient, type);
      } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) !== '')) {
        this.fullFilter(this.valorClient , valorStatus, type);
      }
    }
  }

  filterStatusNombre(nombreCliente, status, type): void {
    const lista = [];
    if (type === 'original') {
      _.filter(this.listInvoicesAuxOriginal, function (invoices) {
        if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
        (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), invoices.status))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesOriginal = lista;
    } else {
      _.filter(this.listInvoicesAuxCopy, function (invoices) {
        if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
        (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
        // tslint:disable-next-line:radix
        (_.isEqual(parseInt(status), invoices.status))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesCopy = lista;
    }
  }

  filterDateNombre(nombreCliente, type): void {
    const lista = [];
    let fecha: String;
    // FechaFiltro
    fecha = this.getFecha();
    if (type === 'original') {
      _.filter(this.listInvoicesAuxOriginal, function (invoices) {
        // Fecha Listado
        const fechaList = _.toString(invoices.date.slice(0, 10));
        if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
        (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
        ((_.isEqual(fecha, fechaList)))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesOriginal = lista;

    } else {
      _.filter(this.listInvoicesAuxCopy, function (invoices) {
        // Fecha Listado
        const fechaList = _.toString(invoices.date.slice(0, 10));
        if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
        (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
        ((_.isEqual(fecha, fechaList)))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesCopy = lista;
    }
  }

  filterStatusDate(status, type): void {
    const lista = [];
    let fecha: String;
    // FechaFiltro
    fecha = this.getFecha();
    if (type === 'original') {
      _.filter(this.listInvoicesAuxOriginal, function (invoices) {
        let fechaList: String;
        // Fecha Listado
        fechaList = _.toString(invoices.date.slice(0, 10));
        // tslint:disable-next-line:radix
        if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(status), invoices.status))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesOriginal = lista;
    } else {
      _.filter(this.listInvoicesAuxCopy, function (invoices) {
        let fechaList: String;
        // Fecha Listado
        fechaList = _.toString(invoices.date.slice(0, 10));
        // tslint:disable-next-line:radix
        if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(status), invoices.status))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesCopy = lista;
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

  fullFilter(nombreCliente, status, type): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];

    if (type === 'original') {
      // Lista actual
      _.filter(this.listInvoicesAuxOriginal, function (invoices) {
        // Fecha Listado
        const fechaList = _.toString(invoices.date.slice(0, 10));
        if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
        (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
        // tslint:disable-next-line:radix
        ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), invoices.status))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesOriginal = lista;
    } else {
      // Lista actual
      _.filter(this.listInvoicesAuxCopy, function (invoices) {
        // Fecha Listado
        const fechaList = _.toString(invoices.date.slice(0, 10));
        if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
        (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
        // tslint:disable-next-line:radix
        ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), invoices.status))) {
          lista.push(invoices);
        }
      });
      this.listInvoicesCopy = lista;
    }
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  clean(type) {
    this.getListInvoices();
    if (type === 'original') {
      this.validOriginal = false;
      this.selectedStatusOriginal = '';
      this.fechaSelecOriginal = null;
      this.searchOriginal = '';
    } else {
      this.validCopy = false;
      this.selectedStatusCopy = '';
      this.fechaSelecCopy = null;
      this.searchCopy = '';
    }
    this.tamano = 'undefined';
    this.valorClient = null;
  }
}
