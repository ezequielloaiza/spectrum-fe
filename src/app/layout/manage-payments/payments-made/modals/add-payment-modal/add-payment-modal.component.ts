import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { FileProductRequested } from '../../../../../shared/models/fileproductrequested';
import { environment } from '../../../../../../environments/environment';
import { InvoicePaymentService } from '../../../../../shared/services';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { InvoicePayment } from '../../../../../shared/models/invoicepayment';

const URL = environment.apiUrl + 'fileProductRequested/uploader';
@Component({
  selector: 'app-add-payment-modal',
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss']
})
export class AddPaymentModalComponent implements OnInit {

  form: FormGroup;
  listTypes = [{id: 0, name: 'Transfer'}, {id: 1, name: 'Deposit'}, {id: 2, name: 'Check'}];
  invoicePayment: InvoicePayment = new InvoicePayment();
  invoice: any;
  action: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFileBasket: Array<FileProductRequested> = new Array;
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    autoUpload: false});

  constructor(private route: ActivatedRoute,
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private invoicePaymentService: InvoicePaymentService, 
    private translate: TranslateService,
    private notification: ToastrService) { }

  ngOnInit() {
    this.invoicePayment.idInvoiceClient = this.invoice.idInvoice;
    console.log(this.invoice);
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      id     : [this.action === 'edit' ? this.invoicePayment.idInvoicePayment : ''],
      typeId : [this.action === 'edit' ? this.invoicePayment.typeId : '', [ Validators.required]],
      date   : [this.action === 'edit' ? this.invoicePayment.date : '', [ Validators.required]],
      referenceNumber: [this.action === 'edit' ? this.invoicePayment.referenceNumber : '', [ Validators.required]],
      bank   : [this.action === 'edit' ? this.invoicePayment.bank : '', [ Validators.required]],
      status : [this.action === 'edit' ? this.invoicePayment.status : 0, []],
      amount : [this.action === 'edit' ? this.invoicePayment.amount : '', [Validators.required]],
      idInvoiceClient: [this.action === 'edit' ? this.invoicePayment.idInvoiceClient : this.invoice.idInvoiceClient]
    });
  }

  save(): void {
    this.invoicePaymentService.saveInvoicePayment$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.modalReference.close();
        this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  close() {
    this.modalReference.close();
  }

  get typeId() { return this.form.get('typeId'); }
  get bank() { return this.form.get('bank'); }
  get date() { return this.form.get('date'); }
  get referenceNumber() { return this.form.get('referenceNumber'); }
  get amount() { return this.form.get('amount'); }

}
