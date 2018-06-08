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

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public router: Router, private userService: UserService,
    private userStorageService: UserStorageService, private formBuilder: FormBuilder) {}

  user: any = {
    username: '',
    password: ''
  };

  message: String = '';

  ngOnInit() {
    this.initializeForm();
  }

  signIn(user: any): void {
    this.userService.signIn$(user).subscribe(res => {
      if (res.code === 200) {
        this.userStorageService.saveCurrentUser(JSON.stringify(res.data));
        this.router.navigateByUrl('');
      } else {
        this.message = res.errors[0].detail;
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
