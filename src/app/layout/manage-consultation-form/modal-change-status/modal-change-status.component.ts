import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ConsultationFormService } from '../../../shared/services/consultation-form/consultation-form.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-modal-change-status',
  templateUrl: './modal-change-status.component.html',
  styleUrls: ['./modal-change-status.component.scss']
})
export class ModalChangeStatusComponent implements OnInit {

  form: FormGroup;
  consultation: any;
  filterStatus = [{ id: 0, name: 'Pending' },
  { id: 1, name: 'Verified' }];
  valid = false;
  idStatus: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private consultationFormService: ConsultationFormService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
    });
  }

  close() {
    this.modalReference.close();
  }

  onSelectionChange(status) {
    this.valid = true;
    this.idStatus = status.id;
  }

  changeStatus(): void {
    this.translate.get('Commission\'s status', { value: 'Commission\'s status' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to change the status?',
        { value: 'Are you sure you want to change the status?' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.consultationFormService.changeStatus$(this.consultation.idConsultation, this.idStatus).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.close();
                this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res1: string) => {
                  this.notification.success('', res1);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            });
          }, () => {
          });
        });
    });
  }

}
