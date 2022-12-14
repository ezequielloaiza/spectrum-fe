import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShippingAddressService } from '../../../../shared/services/shippingAddress/shipping-address.service';
import { CompanyService } from '../../../../shared/services/company/company.service';
import { CountryService } from '../../../../shared/services/country/country.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, merge } from 'rxjs/operators';
import { GoogleService } from '../../../../shared/services';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../../http/user-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-shipping-address-modal',
  templateUrl: './shipping-address-modal.component.html',
  styleUrls: ['./shipping-address-modal.component.scss']
})
export class ShippingAddressModalComponent implements OnInit {

  form: FormGroup;
  companies: any;
  address: any;
  action: string;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  locale: any;
  companyName: any;

  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private shippingAddressService: ShippingAddressService,
    private companyService: CompanyService,
    private notification: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService,
    private countryService: CountryService,
    private userStorageService: UserStorageService) {
   }

  initializeForm() {
    this.form = this.formBuilder.group({
      id        : [this.action === 'edit' ? this.address.idAddress : ''],
      companyId : [this.action === 'edit' ? this.address.company.idCompany : '', []],
      name      : [this.action === 'edit' ? this.address.name : '', [ Validators.required]],
      state     : [this.action === 'edit' ? this.address.state : ''],
      countryId   : [this.action === 'edit' && this.address.country ? this.address.country.idCountry : '', [ Validators.required]],
      city      : [this.action === 'edit' ? {description: this.address.city} : '', [ Validators.required]],
      postal    : [this.action === 'edit' ? this.address.postalCode : '']
    });
    this.selectedCountry = this.action === 'edit' && this.address.country ? this.address.country.idCountry : '';
  }

  ngOnInit() {
    this.initializeForm();
    this.getCompanies();
    this.getCountries();
  }

  formatter = (x: {description: string}) => x.description;

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

  save(): void {
    this.form.get('companyId').setValue(this.companies.idCompany);

    if (this.googleService.place && !!this.googleService.place.address_components.length && this.googleService.place.address_components[0].long_name) {
      this.form.get('city').setValue(this.googleService.place.address_components[0].long_name);
    } else if (this.address.city.description) {
      this.form.get('city').setValue(this.address.city.city.description);
    } else {
      this.form.get('city').setValue(this.address.city);
    }

    if (this.action !== 'edit') {
      this.shippingAddressService.save$(this.form.value).subscribe(res => {
        this.form.get('city').setValue({description: this.form.value.city});
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The shipping address already exists', { value: 'The shipping address already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.shippingAddressService.update$(this.form.value).subscribe(res => {
        this.form.get('city').setValue({description: this.form.value.city});
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
          this.close();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The shipping address already exists', { value: 'The shipping address already exists' }).subscribe((res: string) => {
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

  getCompanies() {
    this.companyService.findAllByCompany$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.companies = res.data[0];
        this.companyName = this.companies.companyName;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
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
        this.form.get('countryId').setValue(this.selectedCountry[0].idCountry);
      }
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({ description: this.googleService.getCity() ? this.googleService.getCity() : this.googleService.place.address_components[0].long_name });
    });
  }

  get companyId() { return this.form.get('companyId'); }
  get state() { return this.form.get('state'); }
  get city() { return this.form.get('city'); }
  get countryId() { return this.form.get('countryId'); }
  get name() { return this.form.get('name'); }

}
