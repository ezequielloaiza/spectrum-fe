import { Component, OnInit } from '@angular/core';
import { InvoiceClientService } from '../../shared/services';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


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
      { key: "30,0", label: "Up to 30 days" },
      { key: "60,31", label: "31-60 days" },
      { key: "90,61", label: "61-90 days" },
      { key: "90,>", label: "More than 90 days" }
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
    let finish = selected[1];

    // Set beginningDate
    let beginning = selected[0];
    switch (beginning) {
      case "30":
        beginning = 30;
        break;
      case "60":
        beginning = 61;
        break;
      case "90":
        beginning = 91;
        break;
    }

    const beginningDate = new Date(currentDate.setDate(currentDate.getDate() - beginning));
    beginningDate.setHours(0);
    beginningDate.setMinutes(0);
    beginningDate.setSeconds(0);

    // Set finishDate
    if (finish !== ">") {
      switch (finish) {
        case "31":
          finish = 31;
          break;
        case "61":
          finish = 62;
          break;
        default:
          finish = null;
          break;
      }

      currentDate = new Date();
      finishDate = new Date(currentDate.setDate(currentDate.getDate() - finish));
      finishDate.setHours(0);
      finishDate.setMinutes(0);
      finishDate.setSeconds(0);
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
    return _.round(_.sumBy(this.listInvoicesAux, 'due'),2);
  }

  getDue() {
    const currentDate = new Date();

    return _.round(_.sumBy(this.listInvoicesAux, function (item) {
      return new Date(item.dueDate) < currentDate ? item.due : 0;
    }),2);
  }

  getDueByRange() {
    return _.round(_.sumBy(this.listInvoices, 'due'),2);
  }
}
