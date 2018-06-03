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
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  //animations: [routerTransition()]
})
export class RecoveryPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private alertify: ToastrService,
              private router: Router,
              private translate: TranslateService) { }

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
        this.translate.get('Temporary Password Sent', {value: 'Temporary Password Sent'}).subscribe((res: string) => {
          this.alertify.success('', res);
          this.router.navigateByUrl('signin');
        });
      }
      if (res.code === CodeHttp.notFound) {
        this.translate.get('Unregistered Email', {value: 'Unregistered Email'}).subscribe((res: string) => {
          this.alertify.error('', res);
        });
      }
    });
  }

}
