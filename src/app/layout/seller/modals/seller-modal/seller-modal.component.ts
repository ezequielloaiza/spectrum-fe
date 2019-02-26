import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { UserService, GoogleService, CountryService } from '../../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, catchError, merge, switchMap } from 'rxjs/operators';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../../http/user-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-seller-modal',
  templateUrl: './seller-modal.component.html',
  styleUrls: ['./seller-modal.component.scss']
})
export class SellerModalComponent implements OnInit {

  form: FormGroup;
  businessTypes: Array<any> = new Array;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  locale: any;
  filter = [{ id: 0, name: 'No' },
  { id: 1, name: 'Yes' }];
  valid = false;
  idValue: any;

  constructor(private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userSerice: UserService,
    private toastr: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService,
    private notification: ToastrService,
    private countryService: CountryService,
    private userStorageService: UserStorageService) { }

  ngOnInit() {
    this.initializeForm();
    this.getCountries();
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
      name     : ['', [Validators.required]],
      email    : ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address  : [''],
      state    : [''],
      idCountry  : ['', [Validators.required]],
      city     : ['', [Validators.required]],
      postal   : ['', []],
      phone    : ['', []],
      commission : ['', []]
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

  close(): void {
    this.modal.dismiss();
  }

  save(): void {
    this.form.get('city').setValue(this.googleService.getCity());
    console.log(this.form.value);
    this.userSerice.registerSeller$(this.form.value).subscribe(res => {
      this.form.get('city').setValue({description: this.form.value.city});
      if (res.code === CodeHttp.ok) {
        this.modal.close();
        this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('The seller already exists', { value: 'The seller already exists' }).subscribe((res: string) => {
          this.notification.warning('', res);
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

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get idCountry() { return this.form.get('idCountry'); }
  get postal() { return this.form.get('postal'); }
  get phone() { return this.form.get('phone'); }
  get commission() {return this.form.get('commission'); }


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

  onSelectionChange(value) {
    this.valid = true;
    this.idValue = value.id;
    this.form.get('commission').setValue(this.idValue);
  }

}
