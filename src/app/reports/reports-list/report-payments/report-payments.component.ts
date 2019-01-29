import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { InvoiceClientService } from '../../../shared/services/invoiceClient/invoiceclient.service';
import * as _ from 'lodash';
import { StatusInvoiceClient } from '../../../shared/enum/status-invoice-client.enum';
import { saveAs } from 'file-saver';
import { InvoicePaymentService } from '../../../shared/services';

@Component({
  selector: 'app-report-payments',
  templateUrl: './report-payments.component.html',
  styleUrls: ['./report-payments.component.scss']
})
export class ReportPaymentsComponent implements OnInit {
  typeReport: any;
  typesReport = [{id: 0, name: 'All Clients'},
                {id: 1, name: 'By Client'}];
  listStatus = [{id: 0, name: 'Pending'},
            {id: 1, name: 'Verified'}];

  client: any;
  clients: Array<any> = new Array;
  user: any;
  valid = false;
  byClient = false;
  beginDate: NgbDatepicker;
  endDate: NgbDatepicker;
  selectStatus: any;

  constructor(public modalReference: NgbActiveModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private userStorageService: UserStorageService,
    private invoiceClientService: InvoiceClientService,
    private invoicePaymentService: InvoicePaymentService,
    private spinner: NgxSpinnerService) {
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
     }

    ngOnInit() {
      this.client = '';
    }

    close() {
      this.modalReference.close();
    }

    onSelectionChangeTypes(type) {
      if (type.id == 0) {
        this.valid = true;
        this.byClient = false;
        this.client = '';
      } else {
        this.valid = false;
        this.byClient = true;
        this.loadClients();
      }
    }

    onSelectionChangeStatus(state) {
      this.selectStatus = state.id;
      this.valid = true;
    }

    loadClients() {
      this.invoicePaymentService.usersWithPayments$(this.user.userResponse.idUser).subscribe(res => {
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

  getFecha(model) {
    return new Date(model.year, model.month - 1, model.day);
  }

  generateReport() {
    this.spinner.show();
    let idClient = 0;
    if (this.client != '') {
      idClient = this.client;
    }
    console.log(this.getFecha(this.beginDate), this.getFecha(this.endDate))
    this.invoicePaymentService.generateReportPayments$(this.selectStatus, idClient).subscribe(res => {
      const date = new Date();
      const aux = {year: date.getUTCFullYear(), month: date.getMonth() + 1,
        day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes()};
      const filename = 'PaymentsReport' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
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
