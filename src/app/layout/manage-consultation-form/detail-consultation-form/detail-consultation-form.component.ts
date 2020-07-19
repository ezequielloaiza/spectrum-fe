import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public modalReference: NgbActiveModal,
      private notification: ToastrService,
      private translate: TranslateService) {
  }

  ngOnInit() {
    console.log(this.consultation);
    this.detail = JSON.parse(this.consultation.details)[0];
    this.generalParams = this.detail.generals;
    this.eyes = this.detail.eyes;
    console.log(this.eyes);
  }

  close() {
  this.modalReference.close();
  }

  setCheckbox(param) {
    param.selected = !param.selected;
  }

  isDisabled(eye) {
    switch (eye) {
      case 'right':
        return !this.eyes[0].selected;
      case 'left':
        return !this.eyes[1].selected;
    }
  }

  isSelected(param) {
    let selected = param.selected ? 'X' : '';
    return selected;
  }


}
