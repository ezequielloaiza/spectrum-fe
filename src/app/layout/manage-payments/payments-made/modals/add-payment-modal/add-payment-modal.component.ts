import { Component, OnInit, ViewChild } from '@angular/core';
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
import { FileInvoicePayment } from '../../../../../shared/models/fileinvoicepayment';
import * as _  from 'lodash';
import { UserStorageService } from '../../../../../http/user-storage.service';

const URL = environment.apiUrl + 'fileInvoicePayment/uploader';
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
  @ViewChild('selectedFiles') selectedFiles: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFilePayment: Array<FileInvoicePayment> = new Array;
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    authToken: this.userStorageService.getToke(),
                                                    autoUpload: false});

  constructor(private route: ActivatedRoute,
    public modalReference: NgbActiveModal,
    private userStorageService: UserStorageService,
    private formBuilder: FormBuilder,
    private invoicePaymentService: InvoicePaymentService, 
    private translate: TranslateService,
    private notification: ToastrService) { 

      this.uploader.onAfterAddingFile = (item) => {
        const maxSize = this.maxFilesSize();

        if (maxSize > this.maxFileSize) {
          this.removeFile(item);
          this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
            this.notification.error('', res);
          });
        }
      };
      this.uploader.onSuccessItem = (item, response, status, headers) => {
        this.uploadResult = {'success': true, 'item': item, 'response':
                             response, 'status': status, 'headers': headers};
        if (this.uploadResult) {
          this.buildFileInvoicePayment();
        }
      };
      this.uploader.onErrorItem = (item, response, status, headers) => {
          this.uploadResult = {'success': true, 'item': item, 'response':
                               response, 'status': status, 'headers': headers};
      };
    }

  ngOnInit() {
    this.invoicePayment.idInvoiceClient = this.invoice.idInvoice;
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
      idInvoiceClient: [this.action === 'edit' ? this.invoicePayment.idInvoiceClient : this.invoice.idInvoice]
    });
  }

  save(): void {
    this.loadPayment();
    this.saveFiles();
    this.invoicePaymentService.saveInvoicePayment$(this.invoicePayment).subscribe(res => {
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

  loadPayment() {
    this.invoicePayment.idInvoiceClient = this.invoice.idInvoice;
    this.invoicePayment.amount = this.form.get('amount').value;
    this.invoicePayment.bank = this.form.get('bank').value;
    this.invoicePayment.referenceNumber = this.form.get('referenceNumber').value;
    this.invoicePayment.typeId = this.form.get('typeId').value;
    const aux = this.form.get('date').value;
    const date = new Date(aux.year, aux.month - 1, aux.day);
    this.invoicePayment.date = date;
  }

  get typeId() { return this.form.get('typeId'); }
  get bank() { return this.form.get('bank'); }
  get date() { return this.form.get('date'); }
  get referenceNumber() { return this.form.get('referenceNumber'); }
  get amount() { return this.form.get('amount'); }


  maxFilesSize() {
    let maxFileSize = 0;

    if (this.uploader.queue) {
      _.each(this.uploader.queue, function (item) {
        maxFileSize = maxFileSize + item.file.size;
      });
    }
    return maxFileSize;
  }

  removeFile(item) {
    this.uploader.removeFromQueue(item);
    this.clearSelectedFile();
  }

  clearSelectedFile() {
    this.selectedFiles.nativeElement.value = '';
  }

  clearFiles() {
    if (this.uploader.queue.length) {
      this.uploader.clearQueue();
      this.clearSelectedFile();
    }
  }

  saveFiles(): void {
    this.listFilePayment = new Array;
    if (this.uploader.queue) {
      _.each(this.uploader.queue, function (item) {
        item.upload();
      });
    }
  }

  private buildFileInvoicePayment() {
    if (this.uploadResult.success) {
      const fileInvoicePayment: FileInvoicePayment = new FileInvoicePayment();
      fileInvoicePayment.url  = JSON.parse(this.uploadResult.response).data;
      fileInvoicePayment.name = this.uploadResult.item.file.name;
      fileInvoicePayment.type = this.uploadResult.item.file.type;
      fileInvoicePayment.size = this.uploadResult.item.file.size;
      fileInvoicePayment.createdAt = new Date();
      this.listFilePayment.push(fileInvoicePayment);
    } else {
      console.log('error file');
    }
  }
}
