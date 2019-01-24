import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { InvoiceClientService } from '../../../shared/services/invoiceClient/invoiceclient.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';
import { UserService } from '../../../shared/services';
import { Role } from '../../../shared/enum/role.enum';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-report-invoices-overdue',
  templateUrl: './report-invoices-overdue.component.html',
  styleUrls: ['./report-invoices-overdue.component.scss']
})
export class ReportInvoicesOverdueComponent implements OnInit {
  form: FormGroup;
  typeReport: any;
  typesReport: [{id: 0, name: 'All Clients'},
                {id: 1, name: 'By Client'}];

  client: any;
  clients: Array<any> = new Array;
  user: any;
  valid = false;

  constructor(public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private userService: UserService,
    private invoiceClientService: InvoiceClientService,
    private spinner: NgxSpinnerService) { 
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      typeReport : ['', [ Validators.required]],
      client: ['']
    });
  }

  close() {
    this.modalReference.close();
  }

  validateType() {
    if (this.typeReport == 0) {
      this.valid = true;
    } else {
      this.loadClients();
    }
  }

  loadClients() {
      this.invoiceClientService.usersWithInvoicesOverdue$(this.user.userResponse.idUser).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.clients = res.data;
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
  }

  generateReport() {
    this.spinner.show();
    this.invoiceClientService.generateReportInvoices$(3).subscribe(res => {
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
      this.translate.get('There was a problem generating the report',
      { value: 'There was a problem generating the report' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
  }
}
