import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GoogleService, UserService, CountryService } from '../../shared/services';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, merge } from 'rxjs/operators';
import { UserStorageService } from '../../http/user-storage.service';
import { ToastrService } from 'ngx-toastr';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../../../src/environments/environment';
import * as _ from 'lodash';

const URL = environment.apiUrl + 'user/uploaderAvatar';

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
  locale: any;
  avatar: any;
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  // Upload avatar
  queueLimit = 1;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    authToken: this.userStorageService.getToke(),
                                                    autoUpload: true});


  constructor(private formBuilder: FormBuilder,
    private googleService: GoogleService,
    private userService: UserService,
    private userStorageService: UserStorageService,
    private notification: ToastrService,
    private translate: TranslateService,
    private countryService: CountryService) {
    this.user = JSON.parse(userStorageService.getCurrentUser());
    this.initializeAvatar();

    this.uploader.onAfterAddingFile = (item) => {
      const ext = item.file.name.split('.').pop();

      item.file.name = this.user.userResponse.username + '.' + ext;
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.uploadResult = {'success': true, 'item': item, 'response':
                           response, 'status': status, 'headers': headers};

      if (this.uploadResult) {
        this.updateAvatar();
      }
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
        this.uploadResult = {'success': true, 'item': item, 'response':
                             response, 'status': status, 'headers': headers};
    };
  }

  ngOnInit() {
    this.initializeForm();
    this.initializeAvatar();
    this.getCountries();
  }

  initializeAvatar() {
    if (this.user.userResponse.avatar) {
      this.avatar = this.user.userResponse.avatar;
    } else {
      this.avatar = 'assets/images/user.png';
    }
  }

  onReset() {
    this.form.get('oldPassword').reset();
    this.form.get('password').reset();
  }

  formatter = (x: { description: string }) => x.description;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.googleService.searchCities$(term, this.userStorageService.getLanguage()).pipe(
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
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address: [''],
      state: [''],
      idCountry: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postal: [''],
      phone: [''],
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmedPassword: ['', [Validators.required]],
    });
  }

  getCountries() {
    this.countryService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listCountries = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  editPersonal() {
    this.canEditPersonal === false ? this.canEditPersonal = true : this.canEditPersonal = false;
    this.form.get('username').setValue(this.user.userResponse.username);
    this.form.get('email').setValue(this.user.userResponse.email);
    this.form.get('name').setValue(this.user.userResponse.name);
    this.form.get('phone').setValue(this.user.userResponse.phone==null?'':this.user.userResponse.phone);
    this.form.get('city').setValue({ description: this.user.userResponse.city });
    this.form.get('state').setValue(this.user.userResponse.state);
    this.form.get('idCountry').setValue(this.user.userResponse.country==null?'':this.user.userResponse.country.idCountry);
    this.form.get('postal').setValue(this.user.userResponse.postalCode);
    this.form.get('address').setValue(this.user.userResponse.address);
  }

  editAccount() {
    this.canEditAccount === false ? this.canEditAccount = true : this.canEditAccount = false;
    this.form.get('username').setValue(this.user.userResponse.username);
    this.form.get('email').setValue(this.user.userResponse.email);
    this.form.get('name').setValue(this.user.userResponse.name);
    this.form.get('phone').setValue(this.user.userResponse.phone==null?'':this.user.userResponse.phone);
    this.form.get('city').setValue({ description: this.user.userResponse.city });
    this.form.get('state').setValue(this.user.userResponse.state);
    this.form.get('idCountry').setValue(this.user.userResponse.country==null?'':this.user.userResponse.country.idCountry);
    this.form.get('postal').setValue(this.user.userResponse.postalCode);
    this.form.get('address').setValue(this.user.userResponse.address);
    this.onReset();
    this.form.get('oldPassword').setValue('');
    this.form.get('password').setValue('');
    this.form.get('confirmedPassword').setValue('');
  }

  savePersonal(): void {
    this.form.get('city').setValue(this.form.value.city.description);
    this.userService.updateProfile$(this.form.value).subscribe(res => {
      this.form.get('city').setValue({ description: this.user.userResponse.city });
      if (res.code === CodeHttp.ok) {
        this.user.userResponse = res.data;
        this.translate.get('User save', { value: 'User save' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        this.canEditPersonal = false;
      } else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('The user already exists', { value: 'The user already exists' }).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });

  }

  saveAccount(): void {
    this.form.get('city').setValue(this.form.value.city.description);
    this.userService.changePassword$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.user.userResponse = res.data;
        this.translate.get('User save', { value: 'User save' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        this.canEditAccount = false;
      } else if (res.code === CodeHttp.notFound) {
        this.translate.get('Password do not match with old password',
        { value: 'Password do not match with old password' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('Password matches with old password',
        { value: 'Password matches with old password' }).subscribe((res: string) => {
          this.notification.error('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  findPlace(item): void {
    const countries = this.listCountries;
    this.locale = this.userStorageService.getLanguage();
    this.googleService.placeById$(item.item.place_id, this.locale).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      const country = this.translate.instant(this.googleService.getCountry());
      this.selectedCountry = _.filter(countries, { 'name': country } );
      if (this.selectedCountry.length > 0) {
        this.form.get('idCountry').setValue(this.selectedCountry[0].idCountry);
      }
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({ description: this.googleService.getCity() });
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmedPassword').value) {
      return { invalid: true };
    }
  }

  validatePhone(event) {
    const key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 32 || event.keyCode === 40 ||
      event.keyCode === 41 || event.keyCode === 45 || event.keyCode === 46) {
      return true;
    } else if (key < 48 || key > 57) {
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
  get oldPassword() { return this.form.get('oldPassword'); }
  get password() { return this.form.get('password'); }
  get confirmedPassword() { return this.form.get('confirmedPassword'); }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get idCountry() { return this.form.get('idCountry'); }
  get postal() { return this.form.get('postal'); }
  get phone() { return this.form.get('phone'); }

  private updateAvatar() {
    if (this.uploadResult.success) {
      const url = JSON.parse(this.uploadResult.response).data;
      this.avatar = url;
    } else {
      console.log('error file');
    }
  }

}
