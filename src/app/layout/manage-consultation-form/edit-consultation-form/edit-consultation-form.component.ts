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
import * as _ from 'lodash';

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
  typeForm: any;

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
    this.detail = JSON.parse(this.consultation.details)[0];
    this.generalParams = this.detail.generals;
    this.typeForm = this.generalParams[0].selected ? 'New Order' : 'Warranty';
    this.eyes = this.detail.eyes;
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

  changeTypeForm(param) {
    switch (param.name) {
      case 'New Order':
        this.typeForm = 'New Order';
        this.generalParams[0].selected = true;
        this.generalParams[1].selected = false;
        break;
      case 'Warranty':
        this.typeForm = 'Warranty';
        this.generalParams[1].selected = true;
        this.generalParams[0].selected = false;
        break;
    }
  }

  setDisabledMultiple(param, subparam, eye, value) {
    let parameters;
    if (eye === 'right') {
      parameters = this.eyes[0].params;
    } else {
      parameters = this.eyes[1].params;
    }
    if (subparam.name === 'Ideal') {
      switch (param.name) {
        case '1. Corneal Clearance':
          let addMicrons1: any;
          let subsMicrons1: any;
          let parameter1: any;
          parameter1 = _.find(parameters, {name: '1. Corneal Clearance'});
          addMicrons1 = _.find(parameter1.values, {name: 'Add Microns'});
          addMicrons1.disabled = value;
          addMicrons1.selected = addMicrons1.disabled ? null : addMicrons1.selected;
          subsMicrons1 = _.find(parameter1.values, {name: 'Substract Microns'});
          subsMicrons1.disabled = value;
          subsMicrons1.selected = subsMicrons1.disabled ? null : subsMicrons1.selected;
          break;
        case '2. Limbal Clearance':
          let addMicrons2: any;
          let subsMicrons2: any;
          let parameter2: any;
          parameter2 = _.find(parameters, {name: '2. Limbal Clearance'});
          addMicrons2 = _.find(parameter2.values, {name: 'Add Microns'});
          addMicrons2.disabled = value;
          addMicrons2.selected = addMicrons2.disabled ? null : addMicrons2.selected;
          subsMicrons2 = _.find(parameter2.values, {name: 'Substract Microns'});
          subsMicrons2.disabled = value;
          subsMicrons2.selected = subsMicrons2.disabled ? null : subsMicrons2.selected;
          break;
        case '3. Lens Landing':
          let blanching: any;
          let impingement: any;
          let blanchingSelect: any;
          let impingementSelect: any;
          let parameter3: any;
          parameter3 = _.find(parameters, {name: '3. Lens Landing'});
          blanching = _.find(parameter3.values, {name: 'Blanching'});
          blanching.disabled = value;
          blanching.selected = blanching.disabled ? null : blanching.selected;
          blanchingSelect = _.find(parameter3.values, {name: 'Blanching-Select'});
          blanchingSelect.disabled = value;
          blanchingSelect.selected = blanchingSelect.disabled ? null : blanchingSelect.selected;
          impingement = _.find(parameter3.values, {name: 'Impingement'});
          impingement.disabled = value;
          impingement.selected = impingement.disabled ? null : impingement.selected;
          impingementSelect = _.find(parameter3.values, {name: 'Impingement-Select'});
          impingementSelect.disabled = value;
          impingementSelect.selected = impingementSelect.disabled ? null : impingementSelect.selected;
          break;
      }
    }

    if (eye === 'right') {
      this.eyes[0].params = parameters;
    } else {
      this.eyes[1].params = parameters;
    }
  }

  setValueEye(eye) {
    if (eye === 'right') {
      this.eyes[0].selected = !this.eyes[0].selected;
      if (!this.eyes[0].selected) {
        this.clean('right');
        this.eyes[0].selected = null;
      } else {
        this.eyes[0].selected = true;
      }
    } else {
      this.eyes[1].selected = !this.eyes[1].selected;
      if (!this.eyes[1].selected) {
        this.clean('left');
        this.eyes[1].selected = null;
      } else {
        this.eyes[1].selected = true;
      }
    }
  }

  clean(eye) {
    let parameters;
    if (eye === 'right') {
      parameters = this.eyes[0].params;
    } else {
      parameters = this.eyes[1].params;
    }
    // parameter
    _.each(parameters, function(param) {
      if ((param.type === 'text-area' || param.type === 'input' || param.type === 'radio')) {
        param.selected = null;
      }
      if (param.type === 'multiple') {
        _.each(param.values, function (item) {
          item.selected = null;
          item.disabled = null;
        });
      }
    });
    if (eye === 'right') {
      this.eyes[0].params = parameters;
    } else {
      this.eyes[1].params = parameters;
    }
  }

  formIsValid() {
    let isValid = true;
    if ((!this.eyes[0].selected && !this.eyes[1].selected) || !this.consultation.patientName ) {
      return false;
    }

    if ((this.generalParams[0].selected === null || this.generalParams[0].selected === undefined) && 
    (this.generalParams[1].selected === null || this.generalParams[1].selected === undefined) ) {
      isValid = false;
    }

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
