import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GoogleService, UserService } from '../../shared/services';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, merge } from 'rxjs/operators';
import { UserStorageService } from '../../http/user-storage.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  canEditPersonal = false;
  canEditAccount = false;
  passwords: FormGroup;
  form: FormGroup;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  user: any;

  constructor(private formBuilder: FormBuilder,
              private googleService: GoogleService,
              private userService: UserService,
              private userStorageService: UserStorageService,
              private notification: ToastrService,
             ) {
              this.user = JSON.parse(userStorageService.getCurrentUser());
              console.log(this.user = JSON.parse(userStorageService.getCurrentUser()));
             }

  ngOnInit() {
    this.initializeForm();
    //document.getElementById("FS").onchange = this.checkFileSize;
  }

  formatter = (x: {description: string}) => x.description;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.googleService.searchCities$(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  initializeForm() {
    this.form = this.formBuilder.group({
      username        : ['', [ Validators.required]],
      name            : ['', [ Validators.required]],
      email           : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address         : [''],
      state           : ['', [ Validators.required]],
      country         : ['', [ Validators.required]],
      city            : ['', [ Validators.required]],
      postal          : ['', [ Validators.required]],
      phone           : [''],
      password: ['', [Validators.required]],
      confirmedPassword: ['', [Validators.required]],
    });
  }

  editPersonal() {
    this.canEditPersonal === false ? this.canEditPersonal = true : this.canEditPersonal = false;
    this.form.get('username').setValue(this.user.userResponse.username);
    //this.form.get('password').setValue("password");
    //this.form.get('confirmedPassword').setValue("password");
    this.form.get('email').setValue(this.user.userResponse.email);
    this.form.get('name').setValue(this.user.userResponse.name);
    this.form.get('phone').setValue(this.user.userResponse.phone);
    this.form.get('city').setValue({description: this.user.userResponse.city});
    this.form.get('state').setValue(this.user.userResponse.state);
    this.form.get('country').setValue(this.user.userResponse.country);
    this.form.get('postal').setValue(this.user.userResponse.postalCode);
    this.form.get('address').setValue(this.user.userResponse.address);
  }

  editAccount() {
    this.canEditAccount === false ? this.canEditAccount = true : this.canEditAccount = false;
    this.form.get('username').setValue(this.user.userResponse.username);
    //this.form.get('password').setValue("password");
    //this.form.get('confirmedPassword').setValue("password");
    this.form.get('email').setValue(this.user.userResponse.email);
    this.form.get('name').setValue(this.user.userResponse.name);
    this.form.get('phone').setValue(this.user.userResponse.phone);
    this.form.get('city').setValue({description: this.user.userResponse.city});
    this.form.get('state').setValue(this.user.userResponse.state);
    this.form.get('country').setValue(this.user.userResponse.country);
    this.form.get('postal').setValue(this.user.userResponse.postalCode);
    this.form.get('address').setValue(this.user.userResponse.address);
  }

  savePersonal(): void {
    /*
    if (this.form.get('city').value.description) {
      this.form.get('city').setValue(this.googleService.getCity() ? this.googleService.getCity() : this.user.city);
    }
    this.form.get('username').setValue(this.user.userResponse.username);
    this.form.get('city').setValue(this.googleService.getCity());
    //this.form.get('companyCity').setValue(this.googleService.getCity());
    this.userService.signUp$(this.form.value).subscribe(res => {
      this.notification.success('User save', 'Success');
    });
    */
   debugger
   this.form.get('city').setValue(this.form.value.city.description);
   debugger
   this.userService.updateUser$(this.form.value).subscribe(res => {
     debugger
     this.notification.success('User save', 'Success');
     this.canEditPersonal = false;
   });

  }

  saveAccount(): void {
    /*
    if (this.form.get('city').value.description) {
      this.form.get('city').setValue(this.googleService.getCity() ? this.googleService.getCity() : this.user.city);
    }
    this.form.get('username').setValue(this.user.userResponse.username);
    this.form.get('city').setValue(this.googleService.getCity());
    //this.form.get('companyCity').setValue(this.googleService.getCity());
    this.userService.signUp$(this.form.value).subscribe(res => {
      this.notification.success('User save', 'Success');
    });
    */
   this.notification.success('User save', 'Success');
   this.canEditAccount = false;
  }

  findPlace(item): void {
    this.googleService.placeById$(item.item.place_id).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('country').setValue(this.googleService.getCountry());
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({description: this.googleService.getCity()});
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmedPassword').value) {
        return {invalid: true};
    }
  }

  validatePhone(event) {
    const key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 32 || event.keyCode === 40 ||
        event.keyCode === 41 || event.keyCode === 45  || event.keyCode === 46 ) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
      return true;
    }
  }

  /*
  checkFileSize() {
    var FS = document.getElementById("FS");
    var files = FS.files;

    // If there is (at least) one file selected
    if (files.length > 0) {
       if (files[0].size > 75 * 1024) { // Check the constraint
         FS.setCustomValidity("The selected file must not be larger than 75 kB");
         return;
       }
    }
    // No custom constraint violation
    FS.setCustomValidity("");
  }
  */

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get confirmedPassword() { return this.form.get('confirmedPassword'); }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }
  get phone() { return this.form.get('phone'); }

}
