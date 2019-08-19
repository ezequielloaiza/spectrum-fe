import { Component, OnInit } from '@angular/core';
import { InvoiceClientService } from '../../shared/services';

@Component({
  selector: 'app-invoice-client-qbo',
  templateUrl: './invoice-client-qbo.component.html',
  styleUrls: ['./invoice-client-qbo.component.scss']
})
export class InvoiceClientQBOComponent implements OnInit {

  listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  
  constructor(private invoiceClientService: InvoiceClientService) { }

  ngOnInit() {
    this.getInvoiceClientQBO();
  }

  getInvoiceClientQBO() {
    this.invoiceClientService.allInvoiceQBO$().subscribe(res => {
      this.listInvoices = res.data;
    });
  }

}
