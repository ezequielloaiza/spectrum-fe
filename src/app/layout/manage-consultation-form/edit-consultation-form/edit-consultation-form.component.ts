import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ConsultationFormService } from '../../../shared/services/consultation-form/consultation-form.service';
import { UserService } from '../../../shared/services';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConsultationForm } from '../../../shared/models/consultation-form';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-edit-consultation-form',
  templateUrl: './edit-consultation-form.component.html',
  styleUrls: ['./edit-consultation-form.component.scss']
})
export class EditConsultationFormComponent implements OnInit {
  consultation: any;
  detail: any;
  generalParams: any;
  eyes: any;
  read: any;

  constructor(public modalReference: NgbActiveModal,
      private notification: ToastrService,
      private translate: TranslateService,
      private consultationFormService: ConsultationFormService,
      private userService: UserService,
      public router: Router,
      private spinner: NgxSpinnerService
      ) {
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

  formIsValid() {
    let isValid = true;
    return isValid;
  }

  buildConsultation() {
    // Buil detail
    const patient = this.consultation.patientName;
    const detail = {'patient': patient, 'generals': this.generalParams, 'eyes': this.eyes };
    // Buidl Consultation Form
    const consultation: ConsultationForm = new ConsultationForm();
    consultation.idConsultationForm = this.consultation.idConsultationForm;
    consultation.idUser = this.consultation.idUser;
    consultation.details = '[' + JSON.stringify(detail) + ']';
    consultation.patientName = patient;
    consultation.idSupplier = 2;
    return consultation;
  }

  saveConsultationForm(type) {
    this.spinner.show();
    const consultationRequest = this.buildConsultation();
    console.log(consultationRequest);
    this.consultationFormService.update$(consultationRequest).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Updated', {value: 'Successfully Updated'}).subscribe(( res1: string) => {
          this.notification.success('', res1);
        });
        this.spinner.hide();
        this.close();
      } else {
        console.log(res);
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
      this.spinner.hide();
    });
  }

}
