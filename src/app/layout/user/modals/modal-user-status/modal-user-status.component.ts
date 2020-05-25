import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { UserService } from '../../../../shared/services';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-user-status',
  templateUrl: './modal-user-status.component.html',
  styleUrls: ['./modal-user-status.component.scss']
})
export class ModalUserStatusComponent implements OnInit {
  form: FormGroup;
  user: any;
  filterStatus = [{ id: 0, name: 'Active' },
  { id: 1, name: 'Inactive' },
  { id: 2, name: 'In Default' }
  ];
  userId: any;
  valid = false;
  idStatus: any;
  available: any;

  constructor(public modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private notification: ToastrService,
              private translate: TranslateService,
              private alertify: AlertifyService,
              private userService: UserService) { }


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
    this.translate.get('Customer status', { value: 'Customer status' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to change the status?', { value: 'Are you sure you want to change the status?' })
      .subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.changeStatusUser$(this.user.idUser, this.idStatus).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.close();
              this.translate.get('Status changed', { value: 'Status changed' }).subscribe((res1: string) => {
                this.notification.success('', res1);
              });
            }
          });
        }, () => {
        });
      });
    });
  }

}
