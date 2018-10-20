import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GoogleService, CompanyService, BusinessTypeService, CountryService, OrderService } from '../../../../shared/services';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError, merge } from 'rxjs/operators';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { MembershipService } from '../../../../shared/services/membership/membership.service';
import { Company } from '../../../../shared/models/company';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { UserStorageService } from '../../../../http/user-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  id: any;
  company: Company = new Company;
  searching = false;
  searchFailed = false;
  businessTypes: Array<any> = new Array;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  saving = false;
  listPaymentMethod = [{ id: 0, name: 'Prepaid' },
                       { id: 1, name: 'Postpaid' }];
  listCreditDays = [ '15', '30', '60' ];
  postpaid = false;
  method: any;
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  locale: any;
  quantityProcessed: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private googleService: GoogleService,
              private companyService: CompanyService,
              private businessTypeService: BusinessTypeService,
              private translate: TranslateService,
              private notification: ToastrService,
              private countryService: CountryService,
              private userStorageService: UserStorageService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getBussinesAll();
    this.getCompany(this.id);
    this.initializeForm();
    this.getCountries();
    this.getOrderProcessed(this.id);
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name          : ['', [Validators.required]],
      contactName   : ['', [Validators.required]],
      phone         : ['', []],
      email         : ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      creditLimit   : ['', [Validators.required]],
      idBusinessType: ['', [Validators.required]],
      address       : [''],
      state         : [''],
      idCountry       : ['', [ Validators.required]],
      cityPlace          : ['', [ Validators.required]],
      postalCode    : ['', []],
      idCompany     : ['', []],
      idUser        : [this.id, []],
      city          : ['', []],
      paymentMethod : ['', []],
      creditDays    : ['', []],
      balance   : ['', [Validators.required]],
    });
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

  getCompany(id): void {
    this.companyService.findByIdUser$(id).subscribe( res => {
      if (res.code === CodeHttp.ok) {
        this.company = res.data;
        this.setCompany(this.company);
      }
    });
  }

  getBussinesAll(): void {
    this.businessTypeService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.businessTypes = res.data;
      }
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


  edit(): void {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
  }

  cancel(): void {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
    this.setCompany(this.company);
  }

  findPlace(item): void {
    const countries = this.listCountries;
    this.locale = this.userStorageService.getLanguage();
    this.googleService.placeById$(item.item.place_id, this.locale).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      const country = this.translate.instant(this.googleService.getCountry());
      this.selectedCountry = _.filter(countries, { 'name': country } );
      this.form.get('idCountry').setValue(this.selectedCountry[0].idCountry);
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postalCode').setValue(this.googleService.getPostalCode());
      this.form.get('cityPlace').setValue({description: this.googleService.getCity()});
      this.form.get('city').setValue({ description: this.googleService.getCity() });
    });
  }

  setCompany(company: any): void {
    this.form.get('name').setValue(company.companyName);
    this.form.get('contactName').setValue(company.contactName);
    this.form.get('email').setValue(company.email);
    this.form.get('address').setValue(company.address);
    this.form.get('state').setValue(company.state);
    this.form.get('idCountry').setValue(company.country == null ? '' : company.country.idCountry);
    this.form.get('cityPlace').setValue({description: company.city});
    this.form.get('postalCode').setValue(company.postalCode);
    this.form.get('phone').setValue(this.company.phone == null ? '' : this.company.phone);
    this.form.get('idBusinessType').setValue(company.businessType.idBusinessType);
    this.form.get('creditLimit').setValue(company.creditLimit);
    this.form.get('paymentMethod').setValue(company.paymentMethod);
    this.method = company.paymentMethod === 1 ? 'Postpaid' : 'Prepaid';
    this.postpaid = company.paymentMethod === 1 ? true : false;
    this.form.get('creditDays').setValue(company.creditDays);
    this.form.get('idCompany').setValue(company.idCompany);
    this.form.get('city').setValue(company.city);
    this.form.get('balance').setValue(company.balance);
  }

  save(): void {
    this.saving = true;
    this.companyService.update$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.canEdit = false;
        this.company = res.data;
        this.method = this.company.paymentMethod === 1 ? 'Postpaid' : 'Prepaid';
        this.postpaid = this.company.paymentMethod === 1 ? true : false;
        this.translate.get('Successfully Updated', {value: 'Successfully Updated'}).subscribe((resTra: string) => {
          this.notification.success('', resTra);
        });
      }
      this.saving = false;
    }, error => {
      this.saving = false;
    });
  }


  get contactName() { return this.form.get('contactName'); }
  get creditLimit() { return this.form.get('creditLimit'); }
  get idBusinessType() { return this.form.get('idBusinessType'); }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get cityPlace() { return this.form.get('cityPlace'); }
  get state() { return this.form.get('state'); }
  get idCountry() { return this.form.get('idCountry'); }
  get postalCode() { return this.form.get('postalCode'); }
  get paymentMethod() {return this.form.get('paymentMethod'); }
  get creditDays() {return this.form.get('creditDays'); }
  get balance() {return this.form.get('balance'); }

  assignCreditDays(value: number) {
    if (value === 1) {
      this.postpaid = true;
      this.form.get('creditDays').setValue(null);
      this.form.get('creditLimit').setValue(null);
      this.form.get('balance').setValue(null);
    } else {
      this.postpaid = false;
      this.form.get('creditDays').setValue(0);
      this.form.get('creditLimit').setValue(0);
      this.form.get('balance').setValue(0);
    }
    this.form.get('paymentMethod').setValue(value);
  }

  newBalance(ev: any) {
    const val = ev.target.value; // nuevo limite
      if (this.company.balance !== null) {
          let oldAmount = this.company.creditLimit - (this.company.balance); // lo que ha gastado
          if (val <= this.company.balance) {
              if (oldAmount === 0) { // No ha gastado
                this.form.get('balance').setValue(val);
              } else { // Si habia gastado
                this.form.get('balance').setValue(val - oldAmount);
              }
          } else if ((this.company.balance === 0 && this.quantityProcessed === 0)) {
                this.form.get('balance').setValue(val);
          } else if ((this.company.balance === 0 && this.quantityProcessed > 0) || val > this.company.balance) {
              // Lo disponible sera el nuevo limite menos lo que habia gastado
              this.form.get('balance').setValue(val - oldAmount);
          }
      } else {
          this.form.get('balance').setValue(val);
      }
    }

    getOrderProcessed(id): void {
      this.orderService.findOrderProcessedByUser$(id).subscribe( res => {
        if (res.code === CodeHttp.ok) {
          this.quantityProcessed = res.data.length;
        }
      });
    }
}
