import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../../../shared/services/alertify/alertify.service';
import { UserService, InvoicePaymentService } from '../../../../../shared/services';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit {

  form: FormGroup;
  payment: any;
  filterStatus = [{ id: 0, name: "Pending" },
  { id: 1, name: "Verified" }];
  valid = false;
  idStatus: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private invoicePaymentService: InvoicePaymentService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
    });
  }

  close() {
    this.modalReference.close();
  }

  onSelectionChange(status) {
    this.valid = true;
    this.idStatus = status.id;
  }

  changeStatus(): void {
    console.log(this.payment);
    this.translate.get("Invoice Payment's status", { value: "Invoice Payment's status" }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to change the status?',
        { value: 'Are you sure you want to change the status?' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.invoicePaymentService.changeStatus$(this.payment.idInvoicePayment, this.idStatus).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.close();
                this.translate.get('Successfully Update', { value: 'Successfully Update' }).subscribe((res: string) => {
                  this.notification.success('', res);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            });
          }, () => {
          });
        });
    });
  }

}
