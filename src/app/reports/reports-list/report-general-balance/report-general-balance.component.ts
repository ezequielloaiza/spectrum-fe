import { Component, OnInit } from '@angular/core';
import { NgbDatepicker, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportRequest } from '../../../shared/models/reportRequest';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { InvoiceClientService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report-general-balance',
  templateUrl: './report-general-balance.component.html',
  styleUrls: ['./report-general-balance.component.scss']
})
export class ReportGeneralBalanceComponent implements OnInit {
  user: any;
  valid = false;
  beginDate: NgbDatepicker;
  endDate: NgbDatepicker;
  selectStatus: any;
  reportRequest: ReportRequest;

  constructor(public modalReference: NgbActiveModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private invoiceClientService: InvoiceClientService,
    private spinner: NgxSpinnerService) {
     }

    ngOnInit() {
    }

    close() {
      this.modalReference.close();
    }

  getFecha(model) {
    return new Date(model.year, model.month - 1, model.day);
  }

  generateReport() {
    this.spinner.show();
    this.reportRequest = new ReportRequest;

    this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
    this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
    this.invoiceClientService.downloadGeneralBalance$(this.reportRequest).subscribe(res => {
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
