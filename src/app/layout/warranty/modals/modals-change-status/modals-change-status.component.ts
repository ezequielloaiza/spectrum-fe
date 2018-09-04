import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { WarrantyService } from '../../../../shared/services';

@Component({
  selector: 'app-modals-change-status',
  templateUrl: './modals-change-status.component.html',
  styleUrls: ['./modals-change-status.component.scss']
})
export class ModalsChangeStatusComponent implements OnInit {
  form: FormGroup;
  warranty: any;
  filterStatus = [
    { id: 0, name: 'Pending' },
    { id: 1, name: 'In process' },
    { id: 2, name: 'Approved' },
    { id: 3, name: 'Reject' }
  ];
  valid = false;
  idStatus: any;
  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private warrantyService: WarrantyService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    console.log('warranty', this.warranty);
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({});
  }

  close() {
    this.modalReference.close();
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }
  onSelectionChange(status) {
    this.valid = true;
    this.idStatus = status.id;
  }

  changeStatus(): void {
    this.translate
      .get('Warranty\'s status', { value: 'Warranty\'s status' })
      .subscribe((title: string) => {
        this.translate
          .get('Are you sure you want to change the status?', {
            value: 'Are you sure you want to change the status?'
          })
          .subscribe((msg: string) => {
            this.alertify.confirm(
              title,
              msg,
              () => {
                this.warrantyService
                  .changeStatus$(this.warranty.id, this.idStatus)
                  .subscribe(
                    res => {
                      if (res.code === CodeHttp.ok) {
                        this.close();
                        this.translate
                          .get('Successfully Updated', {
                            value: 'Successfully Updated'
                          })
                          .subscribe((res1: string) => {
                            this.notification.success('', res1);
                          });
                      } else {
                        console.log(res.errors[0].detail);
                      }
                    },
                    error => {
                      console.log('error', error);
                    }
                  );
              },
              () => {}
            );
          });
      });
  }

}
