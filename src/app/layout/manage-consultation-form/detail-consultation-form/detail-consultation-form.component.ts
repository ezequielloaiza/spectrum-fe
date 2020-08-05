import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { saveAs } from 'file-saver';
import { FileConsultationFormService } from '../../../shared/services/fileConsultationForm/file-consultation-form.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detail-consultation-form',
  templateUrl: './detail-consultation-form.component.html',
  styleUrls: ['./detail-consultation-form.component.scss']
})
export class DetailConsultationFormComponent implements OnInit {
  consultation: any;
  detail: any;
  generalParams: any;
  eyes: any;
  read: any;
  listFiles: Array<any> = new Array;

  constructor(public modalReference: NgbActiveModal,
      private fileConsultationFormService: FileConsultationFormService,
      private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.detail = JSON.parse(this.consultation.details)[0];
    this.generalParams = this.detail.generals;
    this.eyes = this.detail.eyes;
    this.loadFiles();
  }

  close() {
  this.modalReference.close();
  }

  loadFiles() {
    this.fileConsultationFormService.allFileByConsultationForm$(this.consultation.idConsultationForm).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listFiles = res.data;
      }
    }, error => {
      console.log('error', error);
    });
  }

  downloadFile(item) {
    this.spinner.show();
    this.fileConsultationFormService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
      this.spinner.hide();
    }, error => {
      console.log('error', error);
    });
  }


}
