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
import * as _ from 'lodash';
import { UserStorageService } from '../../../../../http/user-storage.service';
import { FileinvoicepaymentService } from '../../../../../shared/services/fileinvoicepayment/fileinvoicepayment.service';
import { saveAs } from 'file-saver';

const URL = environment.apiUrl + 'fileInvoicePayment/uploader';
@Component({
  selector: 'app-add-payment-modal',
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss']
})
export class AddPaymentModalComponent implements OnInit {

  form: FormGroup;
  listTypes = [{ id: 0, name: 'Transfer' }, { id: 1, name: 'Deposit' }, { id: 2, name: 'Check' }];
  invoicePayment: InvoicePayment = new InvoicePayment();
  invoice: any;
  action: any;
  @ViewChild('selectedFiles') selectedFiles: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFilePayment: Array<FileInvoicePayment> = new Array;
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'files',
    queueLimit: this.queueLimit,
    maxFileSize: this.maxFileSize,
    removeAfterUpload: false,
    authToken: this.userStorageService.getToke(),
    autoUpload: false
  });

  constructor(private route: ActivatedRoute,
    public modalReference: NgbActiveModal,
    private userStorageService: UserStorageService,
    private formBuilder: FormBuilder,
    private invoicePaymentService: InvoicePaymentService,
    private fileInvoicePaymentService: FileinvoicepaymentService,
    private translate: TranslateService,
    private notification: ToastrService) {

    this.uploader.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item);
        this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      }
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.uploadResult = {
        'success': true, 'item': item, 'response':
          response, 'status': status, 'headers': headers
      };
      if (this.uploadResult) {
        this.buildFileInvoicePayment();
      }
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.uploadResult = {
        'success': true, 'item': item, 'response':
          response, 'status': status, 'headers': headers
      };
    };
  }

  ngOnInit() {
    if (this.invoicePayment == null) {
      this.invoicePayment = new InvoicePayment();
    }
    this.invoicePayment.idInvoiceClient = this.invoice.idInvoice;
    this.initializeForm();
    this.loadFileInvoicePayment();
    if (this.action === 'edit') {
      this.loadPaymentEdit();
    }
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      id: [this.action !== 'new' ? this.invoicePayment.idInvoicePayment : ''],
      typeId: [this.action !== 'new' ? this.invoicePayment.typePayment : '', [Validators.required]],
      date: [this.action !== 'new' ? this.invoicePayment.date : '', [Validators.required]],
      referenceNumber: [this.action === 'new' ? this.invoicePayment.referenceNumber : '', [Validators.required]],
      notes: [this.action === 'new' ? this.invoicePayment.description : '', [Validators.required]],
      bank: [this.action !== 'new' ? this.invoicePayment.bank : '', [Validators.required]],
      status: [this.action !== 'new' ? this.invoicePayment.status : 0, []],
      amount: [this.action !== 'new' ? this.invoicePayment.amount : '', [Validators.required]],
      idInvoiceClient: [this.action === 'new' ? this.invoicePayment.idInvoiceClient : this.invoice.idInvoice]
    });
  }

  loadFileInvoicePayment() {
    if (this.invoicePayment.idInvoicePayment !== undefined) {
      this.fileInvoicePaymentService.allFileByInvoicePayment$(this.invoicePayment.idInvoicePayment).subscribe(
        res => {
          if (res.code === CodeHttp.ok) {
            this.listFilePayment = res.data;
          } else {
            console.log(res.errors[0].detail);
          }
        }, error => {
          console.log('error', error);
        }
      );
    }
  }

  save(): void {
    this.loadPayment();
    this.saveFiles();
    console.log(this.invoicePayment);
    if (this.action === 'new') {
      this.invoicePaymentService.saveInvoicePayment$(this.invoicePayment).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.invoicePayment = res.data;
          this.fileInvoicePaymentService.saveAllFile$(this.listFilePayment, this.invoicePayment.idInvoicePayment).subscribe(
            res1 => {
              if (res1.code === CodeHttp.ok) {
                this.modalReference.close();
                this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
                  this.notification.success('', res);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            }
          );
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.invoicePaymentService.updateInvoicePayment$(this.invoicePayment).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.invoicePayment = res.data;
          this.fileInvoicePaymentService.saveAllFile$(this.listFilePayment, this.invoicePayment.idInvoicePayment).subscribe(
            res1 => {
              if (res1.code === CodeHttp.ok) {
                this.modalReference.close();
                this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
                  this.notification.success('', res);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            }
          );
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
  }

  close() {
    this.modalReference.close();
  }

  loadPayment() {
    this.invoicePayment.idInvoiceClient = this.invoice.idInvoice;
    this.invoicePayment.amount = this.form.get('amount').value;
    this.invoicePayment.bank = this.form.get('bank').value;
    this.invoicePayment.referenceNumber = this.form.get('referenceNumber').value;
    this.invoicePayment.typePayment = this.form.get('typeId').value;
    const aux = this.form.get('date').value;
    const date = new Date(aux.year, aux.month - 1, aux.day);
    this.invoicePayment.date = date;
  }

  loadPaymentEdit() {
    this.form.get('amount').setValue(this.invoicePayment.amount);
    this.form.get('bank').setValue(this.invoicePayment.bank);
    this.form.get('referenceNumber').setValue(this.invoicePayment.referenceNumber);
    this.form.get('typeId').setValue(this.listTypes.find(x => x.id === this.invoicePayment.typePayment));
    const date = this.invoicePayment.date;
    const aux = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.form.get('date').patchValue(aux);
    this.form.get('notes').setValue(this.invoicePayment.description);
  }

  get typeId() { return this.form.get('typeId'); }
  get bank() { return this.form.get('bank'); }
  get date() { return this.form.get('date'); }
  get referenceNumber() { return this.form.get('referenceNumber'); }
  get amount() { return this.form.get('amount'); }
  get notes() { return this.form.get('notes'); }


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
      fileInvoicePayment.url = JSON.parse(this.uploadResult.response).data;
      fileInvoicePayment.name = this.uploadResult.item.file.name;
      fileInvoicePayment.type = this.uploadResult.item.file.type;
      fileInvoicePayment.size = this.uploadResult.item.file.size;
      fileInvoicePayment.createdAt = new Date();
      this.listFilePayment.push(fileInvoicePayment);
    } else {
      console.log('error file');
    }
  }

  downloadFile(item) {
    this.fileInvoicePaymentService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
    }, error => {
      this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
  }
}
