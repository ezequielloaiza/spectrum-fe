import { Component, OnInit } from '@angular/core';
import { InvoiceClientService } from '../../shared/services';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from 'protractor';
import * as _ from 'lodash';
import { NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-invoice-client-qbo',
  templateUrl: './invoice-client-qbo.component.html',
  styleUrls: ['./invoice-client-qbo.component.scss']
})
export class InvoiceClientQBOComponent implements OnInit {

  listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  model: NgbDateStruct;
  filterDateRange: Array<any> = new Array;
  selectedRange: any;

  constructor(private invoiceClientService: InvoiceClientService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getInvoiceClientQBO();
    this.model = { year: 0, month: 0, day: 0 };
    this.filterDateRange = [
      { key: "30,0", label: "Hasta 30 días" },
      { key: "60,31", label: "31-60 días" },
      { key: "90,61", label: "61-90 días" },
      { key: "90,>", label: "Más de 90 días" }
    ];
    this.selectedRange = '';
  }

  getInvoiceClientQBO() {
    this.spinner.show();
    this.invoiceClientService.allInvoiceQBO$().subscribe(res => {
      this.listInvoices = res.data;
      this.listInvoicesAux = res.data;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  downloadInvoiceQBO(invoice: any) {
    this.spinner.show();
    this.invoiceClientService.downloadInvoiceQBO$(invoice.qboInvoiceId).subscribe(res => {
      if (res != null) {
        saveAs(res, 'invoice-qb' + invoice.docNumber + '.pdf');
      }
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  sentToEmail(id) {
    this.spinner.show();
    this.invoiceClientService.sentToEmailInvoiceQBO$(id).subscribe(res => {
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  clean(type) {
    this.listInvoices = this.listInvoicesAux;

    if (type === 'allFilters') {
      this.selectedRange = '';
    }
  }

  getItems(ev: any) {
    this.listInvoices = this.listInvoicesAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listInvoices = this.listInvoices.filter((item) => {
        return ((_.toString(item.number).toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (_.toString(item.docNumber).toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (_.toString(item.qboTotalAmt).toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  getFecha(date): String {
    let ano;
    let mes;
    let dia;
    let fecha: String;
    // Ano
    ano = date.year;
    // Mes
    date.month < 10 ? mes = '0' + date.month : mes = date.month;
    // Dia
    date.day < 10 ? dia = '0' + date.day : dia = date.day;
    // FechaFiltro
    fecha = ano + '-' + mes + '-' + dia;
    return fecha;
  }

  filterDate(value): void {
    const lista = [];
    let filterDate: String;
    filterDate = this.getFecha(value);

    this.listInvoices = this.listInvoices.filter((item) => {
      let dateList: String;
      let dueDateList: String;
      dateList = _.toString(item.date.slice(0, 10));
      dueDateList = _.toString(item.dueDate.slice(0, 10));

      // tslint:disable-next-line:radix
      return _.isEqual(filterDate, dateList) || _.isEqual(filterDate, dueDateList);
    });
  }

  filterByRangeDate(): void {
    let finishDate = null;
    this.clean('forRange');

    let currentDate = new Date();
    const selected = this.selectedRange.split(",");
    const beginning = selected[0];
    const finish = selected[1];

    const beginningDate = new Date(currentDate.setDate(currentDate.getDate() - beginning));

    if (finish !== ">") {
      currentDate = new Date();
      finishDate = new Date(currentDate.setDate(currentDate.getDate() - finish));
    }

    this.listInvoices = this.listInvoices.filter((item) => {
      const dueDate = new Date(item.dueDate);

      if (finishDate) {
        return beginningDate <= dueDate && dueDate <= finishDate;
      }

      // > 90 días.
      return dueDate < beginningDate;
    });
  }

  getRangeLabel() {
    return this.selectedRange ? _.find(this.filterDateRange, { 'key': this.selectedRange }).label : null;
  }

  getBalance() {
    return _.round(_.sumBy(this.listInvoicesAux, 'qboTotalAmt'),2);
  }

  getDue() {
    const currentDate = new Date();

    return _.round(_.sumBy(this.listInvoicesAux, function(item) {
      return new Date(item.dueDate) < currentDate ? item.qboTotalAmt : 0;
    }),2);
  }

  getDueByRange() {
    return _.round(_.sumBy(this.listInvoices, 'qboTotalAmt'),2);
  }
}
