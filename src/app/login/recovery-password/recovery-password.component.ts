import { Component, OnInit } from '@angular/core';
//import { routerTransition } from '../../router.animations';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from '../../shared/services';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  //animations: [routerTransition()]
})
export class RecoveryPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email              : ['', [ Validators.required]]
    });
  }

  submitPassword(): void {
    this.userService.recoveryPassword$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.alertify.success('Se ha enviado una contrasenna temporal a su email.');
        this.router.navigateByUrl('signin');
      }
      if (res.code === CodeHttp.notFound) {
        this.alertify.error('El email no se encuentra registrado.');
      }
    });
  }

}
