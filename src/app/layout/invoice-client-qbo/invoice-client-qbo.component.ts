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
  fechaSelecOrd: NgbDatepicker;
  
  constructor(private invoiceClientService: InvoiceClientService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getInvoiceClientQBO();
    this.model = { year: 0, month: 0, day: 0 };
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

  clean() {
    this.listInvoices = this.listInvoicesAux;
    this.fechaSelecOrd = null;

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

}
