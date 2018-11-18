import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FileProductRequested } from '../../../../../shared/models/fileproductrequested';
import { environment } from '../../../../../../environments/environment';

const URL = environment.apiUrl + 'fileProductRequested/uploader';
@Component({
  selector: 'app-add-payment-modal',
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss']
})
export class AddPaymentModalComponent implements OnInit {

  form: FormGroup;
  listTypes = ['Transfer', 'Deposit', 'Check'];

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

  constructor(public modalReference: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.modalReference.close();
  }

}
