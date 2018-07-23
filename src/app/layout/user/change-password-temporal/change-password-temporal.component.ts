import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GoogleService, UserService } from '../../../shared/services';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, merge } from 'rxjs/operators';
import { UserStorageService } from '../../../http/user-storage.service';
import { ToastrService } from 'ngx-toastr';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-password-temporal',
  templateUrl: './change-password-temporal.component.html',
  styleUrls: ['./change-password-temporal.component.scss'],
  animations: [routerTransition()]
})
export class ChangePasswordTemporalComponent implements OnInit {
  
  passwords: FormGroup;
  form: FormGroup;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  user: any;
  
  constructor(public router: Router, private formBuilder: FormBuilder,
    private googleService: GoogleService,
    private userService: UserService,
    private userStorageService: UserStorageService,
    private notification: ToastrService,
    private translate: TranslateService,
  ) {
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.initializeForm();
    this.form.get('username').setValue(this.user.userResponse.username);
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmedPassword: ['', [Validators.required]]
    });
  }

  saveAccount(): void {
    this.userService.changePassword$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.user.userResponse = res.data;
        this.userStorageService.saveCurrentUser(JSON.stringify(res.data));
        this.router.navigateByUrl('');
        this.notification.success('User save', 'Success');
      } else if (res.code === CodeHttp.notFound) {
        this.translate.get('Password do not match with old password', { value: 'Password do not match with old password' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('Password matches with old password', { value: 'Password matches with old password' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  get username() { return this.form.get('username'); }
  get oldPassword() { return this.form.get('oldPassword'); }
  get password() { return this.form.get('password'); }
  get confirmedPassword() { return this.form.get('confirmedPassword'); }

}
