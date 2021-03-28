import { Component, OnInit } from '@angular/core';
import { NgbDatepicker, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { InvoicePaymentService, InvoiceClientService, UserService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import { ReportRequest } from '../../../shared/models/reportRequest';

@Component({
  selector: 'app-report-balance-client',
  templateUrl: './report-balance-client.component.html',
  styleUrls: ['./report-balance-client.component.scss']
})
export class ReportBalanceClientComponent implements OnInit {
  typeReport: any;
  typesReport = [{id: 0, name: 'All Clients'},
                {id: 1, name: 'By Client'}];
  listStatus = [{id: 0, name: 'Pending'},
            {id: 1, name: 'Verified'},
            {id: 2, name: 'All'}];

  client: any;
  clients: Array<any> = new Array;
  user: any;
  valid = false;
  byClient = false;
  beginDate: NgbDatepicker;
  endDate: NgbDatepicker;
  selectStatus: any;
  reportRequest: ReportRequest;

  constructor(public modalReference: NgbActiveModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private userStorageService: UserStorageService,
    private userService: UserService,
    private invoiceClientService: InvoiceClientService,
    private invoicePaymentService: InvoicePaymentService,
    private spinner: NgxSpinnerService) {
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
     }

    ngOnInit() {
      this.client = '';
      this.selectStatus = 2;
    }

    close() {
      this.modalReference.close();
    }

    onSelectClient() {
      this.valid = true;
    }

    onSelectionChangeTypes(type) {
      if (type.id == 0) {
        this.valid = (this.selectStatus == undefined ? false : true);
        this.byClient = false;
        this.client = '';
      } else {
        this.client = '';
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
      this.invoiceClientService.usersWithInvoices$().subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.clients = res.data;
          if (this.clients.length == 0) {
            this.translate.get('There are no customers with invoices',
            { value: 'There are no customers with invoices' }).subscribe((res1: string) => {
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
    this.reportRequest = new ReportRequest;
    let idClient = 0;
    if (this.client != '') {
      idClient = this.client;
    }

    // this.reportRequest.status = this.selectStatus;
    this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
    this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
    this.reportRequest.idClient = idClient;
    this.invoiceClientService.downloadReportBalance$(this.reportRequest).subscribe(res => {
      if (res == null) {
        this.translate.get('There are no records for the report',
          { value: 'There are no records for the report' }).subscribe((res1: string) => {
          this.notification.warning('', res1);
        });
        this.spinner.hide();
      } else {
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
      }
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

