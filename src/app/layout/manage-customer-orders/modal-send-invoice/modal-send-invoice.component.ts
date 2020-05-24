import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { OrderService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modal-send-invoice',
  templateUrl: './modal-send-invoice.component.html',
  styleUrls: ['./modal-send-invoice.component.scss']
})
export class ModalSendInvoiceComponent implements OnInit {
  form: FormGroup;
  spectrum = false;
  idsOrders: any;
  invoices: any;
  supplier: any;
  emailSupplier: any;

  constructor( public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private notification: ToastrService,
    private orderService: OrderService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private alertify: AlertifyService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['']
    });
  }

  close() {
    this.modalReference.close();
  }

  onSelectionChange(value) {
    switch (value) {
      case 1:
        this.spectrum = false;
        break;
      case 2:
        this.spectrum = true;
        break;
    }
  }

  send() {
    this.spinner.show();
    this.orderService.generateInvoiceSupplierAndCopy$(this.idsOrders, 1, this.invoices).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Send', { value: 'Successfully Send' })
              .subscribe((res1: string) => {
                this.notification.success('', res1);
          });
          this.spinner.hide();
          this.close();
        } else {
          this.spinner.hide();
          console.log(res.code);
        }
      },
        error => {
            console.log('error', error);
          }
    );
  }

}
