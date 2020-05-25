import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { OrderService, InvoiceSupplierService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';

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
  supplierId: any;
  supplier: any;
  emailSupplier: any;
  valid = false;
  saveAndSend = false;
  idInvoice: any;

  constructor( public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private notification: ToastrService,
    private orderService: OrderService,
    private invoiceService: InvoiceSupplierService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private supplierService: SupplierService,
    private alertify: AlertifyService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.emailSupplier = '';
    this.initializeForm();
    this.loadSupplier();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      radioGroup1: [''],
      radioGroup2: [''],
      emailSupplier: ['', [Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]]
    });
  }

  close() {
    this.modalReference.close();
  }

  loadSupplier() {
    this.supplierService.findById$(this.supplierId).subscribe(res => {
      this.supplier = res.data;
    });
  }

  onSelectionChange(value) {
    switch (value) {
      case 1:
        this.spectrum = false;
        break;
      case 2:
        this.spectrum = true;
        this.form.get('emailSupplier').setValue(this.supplier.email2);
        this.emailSupplier = this.supplier.email2;
        break;
    }
  }

  validForm() {
    if (this.spectrum) {
      if (this.emailSupplier !== '' && this.emailSupplier !== undefined && this.emailSupplier !== null) {
        this.valid = true;
      }
    } else {
      this.valid = true;
    }
    return this.valid;
  }

  send() {
    this.spinner.show();
    this.emailSupplier = this.form.get('emailSupplier');
    if (this.spectrum) {
      this.invoices[0].emailTo = this.emailSupplier;
      this.invoices[1].emailTo = this.emailSupplier;
    }
    if (this.saveAndSend) {
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
    } else {
      this.invoiceService.sendInvoice$(this.idInvoice).subscribe(
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
            this.spinner.hide();
            console.log(res.code);
          }
        },
        error => {
          this.spinner.hide();
          console.log('error', error);
        }
      );
    }

  }

}
