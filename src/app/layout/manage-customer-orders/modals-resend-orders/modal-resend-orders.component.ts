import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-modal-resend-orders',
  templateUrl: './modal-resend-orders.component.html',
  styleUrls: ['./modal-resend-orders.component.scss']
})
export class ModalResendOrdersComponent implements OnInit {
  resendNewEmail = false;
  form: FormGroup;
  order: any;
  titleModal: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit() {
    this.order.typeResend = "sameEmail";
    this.initializeForm();
    this.translate
            .get("Resend Order", { value: "Resend Order" })
            .subscribe((res1: string) => {
              this.titleModal = res1;
            });
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
    });
  }

  close() {
    this.modalReference.close();
  }

  disabledResend() {
    return this.order.typeResend === 'notSame' && this.form.invalid;
 }

  resend() {
    let emailTo = this.order.supplier.email;
    if (this.order.typeResend === "notSame") {
      emailTo = this.email.value;
    }
    this.orderService.resendOrder$(this.order.idOrder,emailTo).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate
            .get('Successfully Send', { value: 'Successfully Send' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
          this.spinner.hide();
        } else {
          this.close();
          this.translate
            .get('The order could not be sent to the mail', { value: 'The order could not be sent to the mail' })
            .subscribe((res2: string) => {
              this.notification.error('', res2);
            });
            this.spinner.hide();
        }
      },
      error => {
        this.spinner.hide();
        this.close();
        this.translate
          .get('The order could not be sent to the mail', { value: 'The order could not be sent to the mail' })
          .subscribe((res2: string) => {
            this.notification.error('', res2);
          });
        console.log('error', error);
      }
    );
  }

  get email() { return this.form.get('email'); }
}
