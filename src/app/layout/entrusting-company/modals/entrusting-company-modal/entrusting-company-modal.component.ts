import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrustingCompanyService } from '../../../../shared/services/entrustingCompany/entrusting-company.service';
import { CountryService } from '../../../../shared/services/country/country.service';
import { UserStorageService } from '../../../../http/user-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, merge } from 'rxjs/operators';
import { GoogleService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-entrusting-company-modal',
  templateUrl: './entrusting-company-modal.component.html',
  styleUrls: ['./entrusting-company-modal.component.scss']
})
export class EntrustingCompanyModalComponent implements OnInit {

  form: FormGroup;
  entrustingCompany: any;
  action: string;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  locale: any;

  constructor(public modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private entrustingCompanyService: EntrustingCompanyService,
              private notification: ToastrService,
              private googleService: GoogleService,
              private translate: TranslateService,
              private countryService: CountryService,
              private userStorageService: UserStorageService) { }

  initializeForm() {
    this.form = this.formBuilder.group({
      idEntrustingCompany: [this.action === 'edit' ? this.entrustingCompany.idEntrustingCompany : ''],
      name: [this.action === 'edit' ? this.entrustingCompany.name : '', [Validators.required]],
      code: [this.action === 'edit' ? this.entrustingCompany.code : ''],
      address  : [this.action === 'edit' ? this.entrustingCompany.address : ''],
      state     : [this.action === 'edit' ? this.entrustingCompany.state : ''],
      idCountry   : [this.action === 'edit' && this.entrustingCompany.country ?
                     this.entrustingCompany.country.idCountry : ''],
      city      : [this.action === 'edit' ? {description: this.entrustingCompany.city} : ''],
      postalCode : [this.action === 'edit' ? this.entrustingCompany.postalCode : ''],
      phone    : [this.action === 'edit' ? this.entrustingCompany.phone : '']
    });
    this.selectedCountry = this.action === 'edit' && this.entrustingCompany.country ? this.entrustingCompany.country.idCountry : '';
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

  ngOnInit() {
    this.initializeForm();
    this.getCountries();
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

  save(): void {
    if (this.googleService.place && !!this.googleService.place.address_components.length && this.googleService.place.address_components[0].long_name) {
      this.form.get('city').setValue(this.googleService.place.address_components[0].long_name);
    } else if (this.entrustingCompany.city.description) {
      this.form.get('city').setValue(this.entrustingCompany.city.description);
    } else {
      this.form.get('city').setValue(this.entrustingCompany.city);
    }

    if (this.action !== 'edit') {
      this.entrustingCompanyService.save$(this.form.value).subscribe(res => {
        if (this.form.value.city) {
          this.form.get('city').setValue({description: this.form.value.city});
        }
        // this.form.get('city').setValue({description: this.form.value.city});
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The shipping company already exists',
          { value: 'The shipping company already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.entrustingCompanyService.update$(this.form.value).subscribe(res => {
        if (this.form.value.city) {
          this.form.get('city').setValue({description: this.form.value.city});
        }
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
          this.close();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The shipping address already exists',
          { value: 'The shipping address already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
  }

  close() {
    this.modalReference.close();
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
      this.form.get('postalCode').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({ description: this.googleService.getCity() ? this.googleService.getCity() : this.googleService.place.address_components[0].long_name });
    });
  }

  get name() { return this.form.get('name'); }
  get code() { return this.form.get('code'); }
  get state() { return this.form.get('state'); }
  get city() { return this.form.get('city'); }
  get idCountry() { return this.form.get('idCountry'); }
  get postalCode() { return this.form.get('postalCode'); }
  get phone() { return this.form.get('phone'); }
  get address() { return this.form.get('address'); }
}
