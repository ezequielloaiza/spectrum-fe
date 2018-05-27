import { Component, OnInit } from '@angular/core';
//import { routerTransition } from '../../router.animations';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from '../../shared/services';
import { CodeHttp } from '../../shared/enum/code-http.enum';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  //animations: [routerTransition()]
})
export class RecoveryPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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
        alertify.success('Ok: ' + value);
        //this.businessTypes = res.data;
      }
    });
  }

}
