import { Component, OnInit } from '@angular/core';
import { InvoiceClientService } from '../../shared/services';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from 'protractor';

@Component({
  selector: 'app-invoice-client-qbo',
  templateUrl: './invoice-client-qbo.component.html',
  styleUrls: ['./invoice-client-qbo.component.scss']
})
export class InvoiceClientQBOComponent implements OnInit {

  listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  
  constructor(private invoiceClientService: InvoiceClientService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getInvoiceClientQBO();
  }

  getInvoiceClientQBO() {
    this.spinner.show();
    this.invoiceClientService.allInvoiceQBO$().subscribe(res => {
      this.listInvoices = res.data;
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

  getItems(ev: any) {
    this.listInvoices = this.listInvoices;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listInvoices = this.listInvoices.filter((item) => {
        return ((item.number.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.docNumber.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.date.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.dueDate.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.qboTotalAmt.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

}
