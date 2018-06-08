import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { BusinessTypeService, UserService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { CountryService } from '../../../../shared/services/country/country.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  form: FormGroup;
  businessTypes: Array<any> = new Array;
  countries: Array<any> = new Array;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  user: any;
  action: string;

  constructor(private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private businessTypeService: BusinessTypeService,
    private userSerice: UserService,
    private toastr: ToastrService,
    private googleService: GoogleService,
    private countryService: CountryService,
    public translate: TranslateService) { }

  ngOnInit() {
    this.initializeForm();
    this.getBussinesAll();
    this.getCountries();
  }

  initializeForm() {

    this.form = this.formBuilder.group({
      id                 : [this.action === 'edit' ? this.user.idUser : '', []],
      name               : [this.action === 'edit' ? this.user.name : '', [ Validators.required]],
      email              : [{value: this.action === 'edit' ? this.user.email : '', disabled: this.action === 'edit' ? true : false},
                           [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address            : [this.action === 'edit' ? this.user.address : ''],
      idBusinessType     : [this.action === 'edit' ? this.user.company.businessType.idBussinesType : '', [ Validators.required]],
      state              : [this.action === 'edit' ? this.user.state : '', [ Validators.required]],
      country            : [this.action === 'edit' ? this.user.country : '', [ Validators.required]],
      city               : [this.action === 'edit' ? {description: this.user.email} : '', [ Validators.required]],
      postal             : [this.action === 'edit' ? this.user.postalCode : '', []],
      phone              : [this.action === 'edit' ? this.user.phone : '', []],
      creditLimit        : [this.action === 'edit' ? this.user.company.creditLimit : '', [ Validators.required]],
      companyName        : [this.action === 'edit' ? this.user.company.companyName : '', [ Validators.required]],
      companyContactName : [this.action === 'edit' ? this.user.company.contactName : '', [ Validators.required]],
      companyAddress     : [this.action === 'edit' ? this.user.company.address : '', [ Validators.required]],
      companyPhone       : [this.action === 'edit' ? this.user.company.phone : '', [ Validators.required]],
      companyEmail       : [this.action === 'edit' ? this.user.company.email : '',
                           [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      companyState       : [this.action === 'edit' ? this.user.company.state : '', [ Validators.required]],
      companyCountry     : [this.action === 'edit' ? this.user.company.country : '', [ Validators.required]],
      companyCity        : [this.action === 'edit' ? {description: this.user.company.email} : '', [ Validators.required]],
      companyPostal      : [this.action === 'edit' ? this.user.company.postalCode : '', []],
      idCompany          : [this.action === 'edit' ? this.user.company.idCompany : '', []],
      typeUser           : ['USER']
    });
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

  close(): void {
    this.modal.dismiss();
  }

  getBussinesAll(): void {
    this.businessTypeService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.businessTypes = res.data;
      }
    });
  }

  getCountries(): void {
    this.countryService.findAll$().subscribe(res => {
      this.countries = res;
    });
  }

  save(): void {
    this.form.get('city').setValue(this.googleService.getCity());
    this.form.get('companyCity').setValue(this.googleService.getCity());
    if (this.action !== 'edit') {
      this.userSerice.signUp$(this.form.value).subscribe(res => {
        this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((tra: string) => {
          this.toastr.success('', tra);
        });
        this.modal.close();
      });
    } else {
      this.userSerice.userUpdate$(this.form.value).subscribe(res => {
        this.toastr.success('User save', 'Success');
        this.modal.close();
      });
    }
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

  findPlaceCompany(item): void {
    this.googleService.placeById$(item.item.place_id).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('companyCountry').setValue(this.googleService.getCountry());
      this.form.get('companyState').setValue(this.googleService.getState());
      this.form.get('companyPostal').setValue(this.googleService.getPostalCode());
      this.form.get('companyCity').setValue({description: this.googleService.getCity()});
    });
  }

  searchCountry(term: string, item: any) {
    term = term.toLocaleLowerCase();
    console.log('1', item);
    console.log('2', term);
   /* this.translate.get('Save', {value: 'Save'}).subscribe((res: string) => {
      console.log("ddd", res);
    });

    this.translate.get(item.name, {value: item.name}).subscribe((res: string) => {*/
      return item.name.toLocaleLowerCase().indexOf(term) > -1;
    /*});*/
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get companyName() { return this.form.get('companyName'); }
  get companyContactName() { return this.form.get('companyContactName'); }
  get companyAddress() { return this.form.get('companyAddress'); }
  get companyPhone() { return this.form.get('companyPhone'); }
  get companyEmail() { return this.form.get('companyEmail'); }
  get creditLimit() { return this.form.get('creditLimit'); }
  get idBusinessType() { return this.form.get('idBusinessType'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }
  get companyCity() { return this.form.get('companyCity'); }
  get companyState() { return this.form.get('companyState'); }
  get companyCountry() { return this.form.get('companyCountry'); }
  get companyPostal() { return this.form.get('companyPostal'); }

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

}
