import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { FileProductRequested } from '../../../../../shared/models/fileproductrequested';
import { environment } from '../../../../../../environments/environment';
import { InvoicePaymentService, InvoiceClientService } from '../../../../../shared/services';
import { CodeHttp } from '../../../../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { InvoicePayment } from '../../../../../shared/models/invoicepayment';
import { FileInvoicePayment } from '../../../../../shared/models/fileinvoicepayment';
import * as _ from 'lodash';
import { UserStorageService } from '../../../../../http/user-storage.service';
import { FileinvoicepaymentService } from '../../../../../shared/services/fileinvoicepayment/fileinvoicepayment.service';
import { saveAs } from 'file-saver';
import { InvoiceClientInvoicePayment } from '../../../../../shared/models/invoiceclientinvoicepayment';

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
  idsInvoiceClient: Array<any> = new Array;
  listDetails: Array<any> = new Array;
  listAux: Array<any> = new Array;
  invoice: any;
  action: any;
  amountValid = true;
  maxAmountInvoice: any;
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
    private invoiceService: InvoiceClientService,
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

    if (this.idsInvoiceClient == null) {
      this.idsInvoiceClient.push(this.invoice.idInvoice);
    }

    if (this.action == 'view' && this.invoicePayment.invoiceClientInvoicePaymentList.length > 1) {
      let list = [];
      _.each(this.invoicePayment.invoiceClientInvoicePaymentList, function(iPIC) {
        list.push(iPIC.invoiceClient);
      });
      this.idsInvoiceClient = list;
    }

    console.log(this.invoicePayment);
    this.initializeForm();
    this.loadInvoices();
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
      referenceNumber: [this.action !== 'new' ? this.invoicePayment.referenceNumber : '', [Validators.required]],
      notes: [this.action !== 'new' ? this.invoicePayment.description : '', [Validators.required]],
      bank: [this.action !== 'new' ? this.invoicePayment.bank : '', [Validators.required]],
      status: [this.action !== 'new' ? this.invoicePayment.status : 0, []],
      amount: [this.action !== 'new' ? (this.action === 'bulk' ? this.maxAmountInvoice : this.invoicePayment.amount) : '', 
            [Validators.required, Validators.max(this.action === 'bulk' ? this.maxAmountInvoice : this.invoice.due)]],
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

  loadInvoices() {
    this.invoiceService.findByIds$(this.idsInvoiceClient).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listAux = res.data;
        let maxAmount = 0.00;
        _.each(this.listAux, function(invoice) {
          maxAmount += invoice.due;
        });
        this.maxAmountInvoice = maxAmount;
        if (this.action === 'bulk') {
          this.form.get('amount').setValue(this.maxAmountInvoice);
          this.form.get('amount').disable();
        }
      }
    }, error => {
      console.log('error', error);
    });
  }

  filterMaxAmount(ev: any) {
    const val = ev.target.value;
    if (this.action === 'bulk') {
      if (val != this.maxAmountInvoice) {
        this.amountValid = false;
      } else {
        this.amountValid = true;
      }
    } else {
      if (val > this.invoice.due) {
        this.amountValid = false;
      } else {
        this.amountValid = true;
      }
    }
  }

  save(): void {
    this.loadPayment();
    this.saveFiles();
    console.log(this.invoicePayment);
    if ((this.action === 'new') || (this.action === 'bulk') ) {
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
                this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
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

  getPartialPayment(payment) {
    const inv = this.invoice;
    const pI = payment.invoiceClientInvoicePaymentList.find(
      x => (x.invoiceClient === inv.idInvoice));
      return pI.partialPayment;
  }

  loadPayment() {
    this.invoicePayment.amount = this.form.get('amount').value;
    this.invoicePayment.bank = this.form.get('bank').value;
    this.invoicePayment.referenceNumber = this.form.get('referenceNumber').value;
    this.invoicePayment.typePayment = this.form.get('typeId').value;
    const aux = this.form.get('date').value;
    const date = new Date(aux.year, aux.month - 1, aux.day);
    this.invoicePayment.date = date;
    this.invoicePayment.description = this.form.get('notes').value;
    const inv = this.invoice;
    const payment = this.invoicePayment;
    const list: Array<any> = new Array;
    const act = this.action;
    const listAux = this.listDetails;
    const listInv = this.listAux;
    _.each(this.idsInvoiceClient, function (idInvoice) {
      const detailsICIP = new InvoiceClientInvoicePayment();
      if (act === 'edit') {
        detailsICIP.idInvoiceClientInvoicePayment = listAux.find(
         x => ((x.invoicePayment === payment.idInvoicePayment) && (x.invoiceClient === inv.idInvoice))).idInvoiceClientInvoicePayment;
      }
      detailsICIP.invoiceClient = idInvoice;
      detailsICIP.invoicePayment = payment.idInvoicePayment;
      if (act === 'bulk') {
        detailsICIP.partialPayment = listInv.find(x => (x.idInvoice === idInvoice)).due;
      } else {
        detailsICIP.partialPayment = payment.amount;
      }
      detailsICIP.tax = 0.00;
      list.push(detailsICIP);
    });
    console.log('list', list);
    this.invoicePayment.invoiceClientInvoicePaymentList = JSON.parse(JSON.stringify(list));
  }

  loadPaymentEdit() {
    // this.form.get('amount').setValue(this.invoicePayment.amount);
    this.form.get('bank').setValue(this.invoicePayment.bank);
    this.form.get('referenceNumber').setValue(this.invoicePayment.referenceNumber);
    this.form.get('typeId').setValue(this.listTypes.find(x => x.id === this.invoicePayment.typePayment).id);
    this.form.get('typeId').markAsTouched();
    const date = new Date(this.invoicePayment.date);
    const aux = {year: date.getUTCFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.form.get('date').patchValue(aux);
    this.form.get('notes').setValue(this.invoicePayment.description);
    const list: Array<any> = new Array;
    _.each(this.invoicePayment.invoiceClientInvoicePaymentList, function (detailsICIP) {
      const obj = new InvoiceClientInvoicePayment();
      obj.invoiceClient = detailsICIP.invoiceClient;
      obj.invoicePayment = detailsICIP.invoicePayment;
      obj.idInvoiceClientInvoicePayment = detailsICIP.idInvoiceClientInvoicePayment;
      obj.partialPayment = detailsICIP.partialPayment;
      obj.tax = detailsICIP.tax;
      list.push(obj);
    });
    this.form.get('amount').setValue(this.invoicePayment.invoiceClientInvoicePaymentList.find(
      x => ((x.invoicePayment === this.invoicePayment.idInvoicePayment) && (x.invoiceClient === this.invoice.idInvoice))).partialPayment);
    this.listDetails = JSON.parse(JSON.stringify(list));
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
    console.log('buildFileInvoicePayment');
    console.log('this.uploadResult.success', this.uploadResult.success);
    if (this.uploadResult.success) {
      console.log('this.uploadResult.response', JSON.parse(this.uploadResult.response));
      const fileInvoicePayment: FileInvoicePayment = new FileInvoicePayment();
      fileInvoicePayment.url = JSON.parse(this.uploadResult.response).data;
      fileInvoicePayment.name = this.uploadResult.item.file.name;
      fileInvoicePayment.type = this.uploadResult.item.file.type;
      fileInvoicePayment.size = this.uploadResult.item.file.size;
      fileInvoicePayment.createdAt = new Date();
      console.log('this.uploadResult.item', this.uploadResult.item);
      console.log('fileInvoicePayment', fileInvoicePayment);
      this.listFilePayment.push(fileInvoicePayment);
      console.log('this.listFilePayment', this.listFilePayment);
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

  deleteFile(item) {
    console.log(item);
    this.fileInvoicePaymentService.deleteFile$(item.idFileInvoicePayment, item).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.loadFileInvoicePayment();
          this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else {
          console.log('error', res);
        }
      }, error => {
        this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
        console.log('error', error);
      });
  }
}
