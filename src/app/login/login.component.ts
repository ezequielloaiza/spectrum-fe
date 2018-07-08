import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../shared/services/user/user.service';
import { UserStorageService } from '../http/user-storage.service';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public router: Router, private userService: UserService,
              private userStorageService: UserStorageService,
              private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              private notification: ToastrService,
              private translate: TranslateService) {}

  user: any = {
    username: '',
    password: ''
  };

  message: String = '';

  ngOnInit() {
    this.initializeForm();
  }

  signIn(user: any): void {
    this.spinner.show();
    this.userService.signIn$(user).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.userStorageService.saveCurrentUser(JSON.stringify(res.data));
        this.router.navigateByUrl('');
        this.spinner.hide();
      } else if (res.code === CodeHttp.UNAUTHORIZED) {
        this.translate.get('Username/Password', {value: 'Username/Password'}).subscribe((tras: string) => {
          this.notification.error('', tras);
          this.spinner.hide();
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('User Inactive', {value: 'User Inactive'}).subscribe((tras: string) => {
          this.notification.error('', tras);
          this.spinner.hide();
        });
      } else if (res.code === CodeHttp.notFound) {
        this.translate.get('User does not exist', {value: 'User does not exist'}).subscribe((tras: string) => {
          this.notification.error('', tras);
          this.spinner.hide();
        });
      }
    }, error => {
      console.log('error', error);
    });
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      username: [
        this.user.username, [Validators.required]
      ],
      password: [
        this.user.password, [Validators.required]
      ]
    });

  }
}
