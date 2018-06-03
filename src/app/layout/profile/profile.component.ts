import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder
             ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name               : ['', [ Validators.required]],
      email              : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address            : [''],
      state              : ['', [ Validators.required]],
      country            : ['', [ Validators.required]],
      city               : ['', [ Validators.required]],
      postal             : ['', [ Validators.required]],
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }

}
