import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { UserStorageService } from '../../../http/user-storage.service';
import * as _ from 'lodash';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @Input() product: any;
  @Input() enableField: boolean;
  @Input() listFiles: any;
  @Input() eye: any;

  @ViewChild('selectedFiles') selectedFiles: any;

  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  uploadResult: any = null;

  public uploaderFile: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'files',
    queueLimit: this.queueLimit,
    maxFileSize: this.maxFileSize,
    removeAfterUpload: false,
    authToken: this.userStorageService.getToke(),
    autoUpload: false
  });

  constructor(private userStorageService: UserStorageService,
              private notification: ToastrService,
              private translate: TranslateService) {

    this.uploaderFile.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item);
        this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      }
    };
    this.uploaderFile.onSuccessItem = (item, response, status, headers) => {
      this.uploadResult = {
        'success': true, 'item': item, 'response':
          response, 'status': status, 'headers': headers
      };
      if (this.uploadResult) {
        this.buildFileProductRequested();
      }
    };
    this.uploaderFile.onErrorItem = (item, response, status, headers) => {
      this.uploadResult = {
        'success': true, 'item': item, 'response':
          response, 'status': status, 'headers': headers
      };
      console.log('error uploader file', response);
    };
  }

  ngOnInit() {
  }

  removeFile(item) {
    this.uploaderFile.removeFromQueue(item);
    this.clearSelectedFile();
  }

  clearSelectedFile() {
    this.selectedFiles.nativeElement.value = '';
  }

  maxFilesSize() {
    let maxFileSize = 0;

    if (this.uploaderFile.queue) {
      _.each(this.uploaderFile.queue, function (item) {
        maxFileSize = maxFileSize + item.file.size;
      });
    }
    return maxFileSize;
  }

  private buildFileProductRequested() {
    if (this.uploadResult.success) {
      const fileProductRequest: FileProductRequested = new FileProductRequested();
      const fileResponse = JSON.parse(this.uploadResult.response).data;
      fileProductRequest.url  = fileResponse.url;
      fileProductRequest.name = fileResponse.name;
      fileProductRequest.type = this.uploadResult.item.file.type;
      fileProductRequest.size = this.uploadResult.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFiles.push(fileProductRequest);
    }
  }

  saveFiles(): void {
    if (this.uploaderFile.queue) {
      _.each(this.uploaderFile.queue, function (item) {
        item.upload();
      });
    }
  }

}
