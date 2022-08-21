import { Component, OnInit } from '@angular/core';
import { InvoiceClientService } from '../../shared/services';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';


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
  itemPerPage = 5;

  paginateParams = {
    page: 1,
    perPage: 5
  };

  meta = {
    pages: 0,
    total: 0
  };

  filter = {
    dueDate: '',
    general: '',
    rangeDate: -1,
    beginningDate: '',
    finishDate: ''
  };

  typingTimer: any;
  valorGeneral: any;
  fechaFilter: any;

  constructor(private invoiceClientService: InvoiceClientService, private spinner: NgxSpinnerService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.getInvoiceClientQBO();
    this.model = { year: 0, month: 0, day: 0 };
    this.filterDateRange = [
      { key: '30,0', label: 'Up to 30 days' },
      { key: '60,31', label: '31-60 days' },
      { key: '90,61', label: '61-90 days' },
      { key: '90,>', label: 'More than 90 days' }
    ];
    this.selectedRange = '';
  }

  getInvoiceClientQBO() {
    this.spinner.show();
    this.invoiceClientService.allInvoiceQBO$(this.paginateParams, this.filter).subscribe(res => {
      this.meta = res.data.meta;
      this.listInvoices = res.data.result;
      this.listInvoicesAux = res.data.result;
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
    this.meta = {
      pages: 0,
      total: 0
    };

    this.filter = {
      dueDate: '',
      general: '',
      rangeDate: -1,
      finishDate: '',
      beginningDate: ''
    };
    this.valorGeneral = '';
    this.fechaFilter = null;
    this.selectedRange = '';
    this.getInvoiceClientQBO();
  }

  getItems(ev: any) {
    clearTimeout(this.typingTimer);
    if (ev.target.value !== '') {
      this.typingTimer = setTimeout(() => {
        this.filter.general = ev.target.value;
        this.paginateParams.page = 1;
        this.getInvoiceClientQBO();
      }, 500);
    } else {
      this.filter.general = '';
      this.paginateParams.page = 1;
      this.getInvoiceClientQBO();
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

  filterByDate(date) {
    this.filter.dueDate = date.year + '-' + (date.month < 10 ?  '0' + date.month : date.month) + '-' + date.day;
    this.paginateParams.page = 1;
    this.getInvoiceClientQBO();
  }

  filterByRangeDate(): void {
    this.filter.finishDate = '';
    this.filter.beginningDate = '';
    let finishDate = null;
    let currentDate = new Date();
    const selected = this.selectedRange.split(',');
    let finish = selected[1];

    // Set beginningDate
    let beginning = selected[0];
    switch (beginning) {
      case '30':
        beginning = 30;
        break;
      case '60':
        beginning = 61;
        break;
      case '90':
        beginning = 91;
        break;
    }

    const beginningDate = new Date(currentDate.setDate(currentDate.getDate() - beginning));
    this.filter.beginningDate = this.datepipe.transform(beginningDate, 'yyyy-MM-dd');

    // Set finishDate
    if (finish !== '>') {
      switch (finish) {
        case '31':
          finish = 31;
          break;
        case '61':
          finish = 62;
          break;
        default:
          finish = null;
          break;
      }

      currentDate = new Date();
      finishDate = new Date(currentDate.setDate(currentDate.getDate() - finish));
      this.filter.finishDate = this.datepipe.transform(finishDate, 'yyyy-MM-dd');
    }

    this.paginateParams.page = 1;
    this.getInvoiceClientQBO();
  }

  getRangeLabel() {
    return this.selectedRange ? _.find(this.filterDateRange, { 'key': this.selectedRange }).label : null;
  }

  getBalance() {
    return _.round(_.sumBy(this.listInvoicesAux, 'due'), 2);
  }

  getDue() {
    const currentDate = new Date();

    return _.round(_.sumBy(this.listInvoicesAux, function (item) {
      return new Date(item.dueDate) < currentDate ? item.due : 0;
    }), 2);
  }

  getDueByRange() {
    return _.round(_.sumBy(this.listInvoices, 'due'), 2);
  }

   // Paging methods
   onPrev(): void {
    this.paginateParams.page--;
    this.getInvoiceClientQBO();
  }

  onNext(): void {
    this.paginateParams.page++;
    this.getInvoiceClientQBO();
  }

  onFirst(): void {
    this.paginateParams.page = 1;
    this.getInvoiceClientQBO();
  }

  onLast(): void {
    this.paginateParams.page = this.meta.pages;
    this.getInvoiceClientQBO();
  }

  onPerPage(perPage: number): void {
    this.paginateParams.page = 1;
    this.paginateParams.perPage = perPage;
    this.getInvoiceClientQBO();
  }
}
