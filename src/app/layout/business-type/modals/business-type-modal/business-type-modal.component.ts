import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessTypeService } from '../../../../shared/services/businessType/business-type.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, merge } from 'rxjs/operators';
import { GoogleService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-business-type-modal',
  templateUrl: './business-type-modal.component.html',
  styleUrls: ['./business-type-modal.component.scss']
})
export class BusinessTypeModalComponent implements OnInit {

  form: FormGroup;
  businesstype: any;
  action: string;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;


  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private businessTypeService: BusinessTypeService,
    private notification: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService) { }

  initializeForm() {
    this.form = this.formBuilder.group({
      id: [this.action === 'edit' ? this.businesstype.idBusinessType : ''],
      name: [this.action === 'edit' ? this.businesstype.name : '', [Validators.required]],
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  save(): void {
    if (this.action !== 'edit') {
      this.businessTypeService.save$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The business type already exists', { value: 'The business type already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.businessTypeService.update$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
          this.close();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The business type already exists', { value: 'The business type already exists' }).subscribe((res: string) => {
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

  close() {
    this.modalReference.close();
  }

  get name() { return this.form.get('name'); }
}
