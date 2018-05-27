import { Component, OnInit } from '@angular/core';
//import { routerTransition } from '../../router.animations';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from '../../shared/services';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  //animations: [routerTransition()]
})
export class RecoveryPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertify: ToastrService, private router: Router) { }

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
        this.alertify.success('', 'Contraseña temporal enviada');
        this.router.navigateByUrl('signin');
      }
      if (res.code === CodeHttp.notFound) {
        this.alertify.error('', 'Email no registrado');
      }
    });
  }

}
