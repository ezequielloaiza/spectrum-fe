import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
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
  email: any;
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
    private supplierService: SupplierService) { }

  ngOnInit() {
    this.email = '';
    this.initializeForm();
    this.loadSupplier();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      radioGroup1: [''],
      radioGroup2: [''],
      emailSupplier: ['']
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

  onChangeEmail($event) {
    this.email = $event.target.value;
  }

  onSelectionChange(value) {
    switch (value) {
      case 1:
        this.spectrum = false;
        break;
      case 2:
        this.spectrum = true;
        this.form.get('emailSupplier').setValidators([Validators.required,
          Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]);
        if (this.supplier.email2 !== undefined && this.supplier.email2 !== null) {
          this.email = this.supplier.email2;
          this.form.get('emailSupplier').setValue(this.email);
        }
        break;
    }
  }

  validForm() {
    if (this.spectrum) {
      if (this.email !== '' && this.email !== undefined && this.email !== null && this.form.get('emailSupplier').valid) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    } else {
      this.valid = true;
    }
    return this.valid;
  }

  send() {
    this.spinner.show();
    if (this.saveAndSend) {
      if (this.spectrum) {
        const emailTo = this.spectrum ? this.email : this.supplier.email;
        this.invoices[0].emailTo = emailTo;
        this.invoices[0].status = 1;
        this.invoices[1].emailTo = emailTo;
        this.invoices[1].status = 1;
      }
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
      const emailTo = this.spectrum ? this.email : this.supplier.email;
      this.invoiceService.sendInvoice$(this.idInvoice, emailTo).subscribe(
        res => {
          if (res.code === CodeHttp.ok) {
            this.spinner.hide();
            this.close();
            this.translate
              .get('Successfully Send', { value: 'Successfully Send' })
              .subscribe((res1: string) => {
                this.notification.success('', res1);
              });
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
