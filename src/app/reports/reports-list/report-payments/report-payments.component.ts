import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { InvoiceClientService } from '../../../shared/services/invoiceClient/invoiceclient.service';

@Component({
  selector: 'app-report-payments',
  templateUrl: './report-payments.component.html',
  styleUrls: ['./report-payments.component.scss']
})
export class ReportPaymentsComponent implements OnInit {
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

}
