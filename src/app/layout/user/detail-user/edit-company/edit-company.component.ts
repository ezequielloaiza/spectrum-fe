import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GoogleService, CompanyService, BusinessTypeService } from '../../../../shared/services';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError, merge } from 'rxjs/operators';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  id: any;
  company: any;
  searching = false;
  searchFailed = false;
  businessTypes: Array<any> = new Array;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private googleService: GoogleService,
              private companyService: CompanyService,
              private businessTypeService: BusinessTypeService) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getBussinesAll();
    this.getCompany(this.id);
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name          : ['', [Validators.required]],
      contactName   : ['', [Validators.required]],
      phone         : ['', [Validators.required]],
      email         : ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      creditLimit   : ['', [Validators.required]],
      idBusinessType: ['', [Validators.required]],
      address       : [''],
      state         : ['', [ Validators.required]],
      country       : ['', [ Validators.required]],
      city          : ['', [ Validators.required]],
      postal        : ['', []],
      membershipId  : ['', [Validators.required]]
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

  edit() {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
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

  setCompany(company: any): void {
    this.form.get('name').setValue(company.companyName);
    this.form.get('contactName').setValue(company.contactName);
    this.form.get('email').setValue(company.email);
    this.form.get('address').setValue(company.address);
    this.form.get('state').setValue(company.state);
    this.form.get('country').setValue(company.country);
    this.form.get('city').setValue({description: company.city});
    this.form.get('postal').setValue(company.postalCode);
    this.form.get('phone').setValue(company.phone);
    this.form.get('idBusinessType').setValue(company.businessType.idBusinessType);
  }

  save(): void {
    console.log(this.form.value);
  }


  get contactName() { return this.form.get('contactName'); }
  get creditLimit() { return this.form.get('creditLimit'); }
  get idBusinessType() { return this.form.get('idBusinessType'); }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }

}
