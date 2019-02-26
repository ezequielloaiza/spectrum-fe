import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { InvoiceClientService } from '../../../shared/services/invoiceClient/invoiceclient.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';
import { UserService } from '../../../shared/services';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusInvoiceClient } from '../../../shared/enum/status-invoice-client.enum';

@Component({
  selector: 'app-report-invoices-overdue',
  templateUrl: './report-invoices-overdue.component.html',
  styleUrls: ['./report-invoices-overdue.component.scss']
})
export class ReportInvoicesOverdueComponent implements OnInit {
  typeReport: any;
  typesReport = [{id: 0, name: 'All Clients'},
                {id: 1, name: 'By Client'}];

  client: any;
  clients: Array<any> = new Array;
  user: any;
  valid = false;
  byClient = false;

  constructor(public modalReference: NgbActiveModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private userStorageService: UserStorageService,
    private invoiceClientService: InvoiceClientService,
    private spinner: NgxSpinnerService) {
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }

  ngOnInit() {
    this.client = '';
  }

  close() {
    this.modalReference.close();
  }

  onSelectClient() {
    this.valid = true;
  }

  onSelectionChange(type) {
    if (type.id == 0) {
      this.valid = true;
      this.byClient = false;
      this.client = '';
      this.loadInvoices();
    } else {
      this.valid = false;
      this.byClient = true;
      this.loadClients();
    }
  }

  loadInvoices() {
    this.invoiceClientService.invoicesOverdue$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.clients = res.data;
        if (this.clients.length == 0) {
          this.translate.get('There are no overdue invoices',
          { value: 'There are no overdue invoices' }).subscribe((res1: string) => {
            this.notification.warning('', res1);
          });
          this.valid = false;
        }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  loadClients() {
      this.invoiceClientService.usersWithInvoicesOverdue$(this.user.userResponse.idUser).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.clients = res.data;
          console.log(this.clients);
          if (this.clients.length == 0) {
            this.translate.get('There are no customers with overdue invoices',
            { value: 'There are no customers with overdue invoices' }).subscribe((res1: string) => {
              this.notification.warning('', res1);
              this.byClient = false;
              this.client = '';
            });
          }
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
  }

  generateReport() {
    this.spinner.show();
    let idClient = 0;
    if (this.client != '') {
      idClient = this.client;
    }
    console.log('status', StatusInvoiceClient.Overdue);
    this.invoiceClientService.generateReportInvoices$(StatusInvoiceClient.Overdue, idClient).subscribe(res => {
      const date = new Date();
      const aux = {year: date.getUTCFullYear(), month: date.getMonth() + 1,
        day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes()};
      const filename = 'InvoicesOverdue-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
      saveAs(res, filename);
      this.spinner.hide();
      this.translate.get('Report has been generated',
        { value: 'Report has been generated' }).subscribe((res1: string) => {
          this.notification.success('', res1);
        });
    }, error => {
      this.spinner.hide();
      this.translate.get('The file could not be generated',
      { value: 'The file could not be generated' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
    this.close();
  }
}
