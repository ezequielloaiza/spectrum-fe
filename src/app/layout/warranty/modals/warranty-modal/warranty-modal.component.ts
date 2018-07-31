import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { UserService,
         OrderService,
         WarrantyService } from '../../../../shared/services';
import { Role } from '../../../../shared/enum/role.enum';
import { TranslateService } from '@ngx-translate/core';
import { Warranty } from '../../../../shared/models/warranty';

@Component({
  selector: 'app-warranty-modal',
  templateUrl: './warranty-modal.component.html',
  styleUrls: ['./warranty-modal.component.scss']
})

export class WarrantyModalComponent implements OnInit {
  form: FormGroup;
  warranty: any;
  listTypes: Array<String> = new Array;
  today: Date = new Date();
  searching = false;
  action: string;
  public model: any;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private orderService: OrderService,
              private warrantyService: WarrantyService,
              private notification: ToastrService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.getDate();
    this.initializeForm();
    this.getType();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      billNumber  : [this.action === 'edit' ? this.warranty.billNumber : ''],
      createdAt   : [this.action === 'edit' ? this.warranty.createdAt : new Date()],
      type        : [this.action === 'edit' ? this.warranty.type : this.today , [ Validators.required]],
      description : [this.action === 'edit' ? this.warranty.description : '', [ Validators.required]]
    });
  }

  getDate(): void {
    if (this.action === 'edit') {
      this.today = new Date(this.warranty.createdAt);
    } else {
      this.today = new Date();
    }
  }

  getType(): void {
    this.listTypes = ['By default', 'By change'];
  }

  close(): void {
    this.modalReference.close();
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  save(): void {
    if (this.action !== 'edit') {
      this.warrantyService.save$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The warranty type already exists', { value: 'The business type already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.warrantyService.update$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
          this.close();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The warranty type already exists', { value: 'The business type already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
  }

  get billNumber() { return this.form.get('billNumber'); }
  get createdAt() { return this.form.get('createdAt'); }
  get type() { return this.form.get('type'); }
  get description() { return this.form.get('description'); }

}
