import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { InvoiceService } from '../../shared/services/invoiceSupplier/invoiceSupplier.service';
import { UserStorageService } from '../../http/user-storage.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { GenerateInvoiceComponent } from '../manage-customer-orders/generate-invoice/generate-invoice.component';
import { OrderService } from '../../shared/services';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-manage-payments',
  templateUrl: './manage-payments.component.html',
  styleUrls: ['./manage-payments.component.scss']
})
export class ManagePaymentsComponent implements OnInit {
  orderByField = 'number';
	reverseSort = true;
  typeSort = 0;
  invoice: any;
  listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 8;
  order: any;
  filterStatus = [{ id: 0, name: "Pending" },
                  { id: 1, name: "Sent" }
                ];
  valorClient: string;
  selectedStatus: any;
  status: any;
  tamano: String;
  model: NgbDateStruct;
  valid1 = false;
  fechaSelec: NgbDatepicker;
  search: String;
  constructor(private orderService: OrderService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceService,
    private spinner: NgxSpinnerService,
    public router: Router) { }

  ngOnInit() {
    this.getListInvoices();
    this.advancedPagination = 1;
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.model = { year: 0, month: 0, day: 0 };
  }
  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listInvoices = this.listInvoicesAux.slice(startItem, endItem);
  }

  getListInvoices(): void {
    this.spinner.show();
    this.invoiceService.allInvoice$().subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.listInvoices = res.data;
          this.listInvoicesAux = res.data;
          this.listInvoices = _.orderBy(this.listInvoices, ['date'], ['desc']);
          this.listInvoicesAux = _.orderBy(this.listInvoicesAux, ['date'], ['desc']);
          this.listInvoices = this.listInvoicesAux.slice(0, this.itemPerPage);
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

  sortInvoice(key) {
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
    let invoicesSort = this.listInvoicesAux.sort(function(a, b) {
      let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.listInvoicesAux = invoicesSort;
		if (this.reverseSort) {
			this.listInvoicesAux = invoicesSort.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
  }

  moveFirstPage() {
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
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
    this.invoiceService.downloadInvoice$(invoice.number).subscribe(res => {
      const filename = 'I-' + invoice.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }

  getItems(ev: any) {
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
      this.filter();
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
  }

  filter(): void {
    if (this.selectedStatus !== '') {
      this.valid1 = true;
      if (this.tamano.length === 9 && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
        this.listInvoices = _.filter(this.listInvoicesAux, { 'status': parseInt(this.selectedStatus) });
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
         _.filter(this.listInvoicesAux, function (invoices) {
          let fechaList: String;
          // Fecha Listado
          fechaList = _.toString(invoices.date.slice(0, 10));
            if (_.isEqual(fecha, fechaList)) {
              lista.push(invoices);
            }
         });
      this.listInvoices = lista;
     } else if ((_.toString(valorStatus) !== '') && (_.toString(this.valorClient).length === 0 || this.valorClient.trim() === '')) {
         this.filterStatusDate(valorStatus);
     } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) === '')) {
        this.filterDateNombre(this.valorClient);
     } else if ((this.valorClient.trim() !== '') && (_.toString(valorStatus) !== '')) {
        this.fullFilter(this.valorClient , valorStatus);
     }
    }
  }

  filterStatusNombre(nombreCliente, status): void {
    const lista = [];
    _.filter(this.listInvoicesAux, function (invoices) {
      if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
      (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
      // tslint:disable-next-line:radix
      (_.isEqual(parseInt(status), invoices.status))) {
        lista.push(invoices);
      }
    });
    this.listInvoices = lista;
  }

  filterDateNombre(nombreCliente): void {
    const lista = [];
    let fecha: String;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listInvoicesAux, function (invoices) {
      // Fecha Listado
      const fechaList = _.toString(invoices.date.slice(0, 10));
      if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
      (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
      ((_.isEqual(fecha, fechaList)))) {
        lista.push(invoices);
      }
    });
    this.listInvoices = lista;
  }

  filterStatusDate(status): void {
    const lista = [];
    let fecha: String;
    // FechaFiltro
    fecha = this.getFecha();
    _.filter(this.listInvoicesAux, function (invoices) {
      let fechaList: String;
      // Fecha Listado
      fechaList = _.toString(invoices.date.slice(0, 10));
      // tslint:disable-next-line:radix
      if ((_.isEqual(fecha, fechaList)) && (_.isEqual(parseInt(status), invoices.status))) {
        lista.push(invoices);
      }
    });
    this.listInvoices = lista;
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

  fullFilter(nombreCliente, status): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // Lista actual
     _.filter(this.listInvoicesAux, function (invoices) {
      // Fecha Listado
      const fechaList = _.toString(invoices.date.slice(0, 10));
      if (((_.includes(invoices.user.name.toLowerCase(), nombreCliente.toLowerCase())) ||
      (invoices.number.toLowerCase().indexOf(nombreCliente.toLowerCase()) > -1)) &&
       // tslint:disable-next-line:radix
       ((_.isEqual(fecha, fechaList))) && (_.isEqual(parseInt(status), invoices.status))) {
        lista.push(invoices);
      }
    });
    this.listInvoices = lista;
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  clean() {
    this.getListInvoices();
    this.valid1 = false;
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.fechaSelec = null;
    this.search = '';
    this.valorClient = null;
  }

  open(invoice) {
    this.router.navigate(['/payments/' + invoice.idInvoice + '/paymentsMade']);
  }
}

