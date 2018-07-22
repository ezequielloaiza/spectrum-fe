import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { BusinessTypeService, UserService, AuthorizationService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { TranslateService } from '@ngx-translate/core';
import { MembershipService } from '../../../../shared/services/membership/membership.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  form: FormGroup;
  businessTypes: Array<any> = new Array;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;
  memberships: Array<any> = new Array;
  valorCity:any;
  valorCompanyCity:any;

  constructor(private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private businessTypeService: BusinessTypeService,
    private userSerice: UserService,
    private toastr: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService,
    private membershipService: MembershipService,
    private notification: ToastrService,
    private authorizationService: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
    if(!this.authorizationService.hasPermission('Users')){
			this.router.navigate(['/dashboard']);
		}
    this.initializeForm();
    this.getBussinesAll();
    this.getMembershipAll();
  }

  formatter = (x: { description: string }) => x.description;

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
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address: [''],
      companyName: ['', [Validators.required]],
      companyContactName: ['', [Validators.required]],
      companyAddress: ['', [Validators.required]],
      companyPhone: [''],
      companyEmail: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      creditLimit: ['', [Validators.required]],
      idBusinessType: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postal: ['', []],
      companyState: ['', [Validators.required]],
      companyCountry: ['', [Validators.required]],
      companyCity: ['', [Validators.required]],
      companyPostal: ['', []],
      typeUser: ['USER'],
      membershipId: ['', [Validators.required]],
      phone: ['']
    });
  }

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

  save(): void {
    this.form.get('city').setValue(this.googleService.getCity());
    this.form.get('companyCity').setValue(this.googleService.getCity());
    this.userSerice.signUp$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.modal.close();
        this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.form.get('city').setValue(this.valorCity);
        this.form.get('companyCity').setValue(this.valorCompanyCity);
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


  findPlace(item): void {
    this.googleService.placeById$(item.item.place_id).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('country').setValue(this.googleService.getCountry());
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({ description: this.googleService.getCity() });
      this.valorCity={ description: this.googleService.getCity() };
    });
  }

  findPlaceCompany(item): void {
    this.googleService.placeById$(item.item.place_id).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('companyCountry').setValue(this.googleService.getCountry());
      this.form.get('companyState').setValue(this.googleService.getState());
      this.form.get('companyPostal').setValue(this.googleService.getPostalCode());
      this.form.get('companyCity').setValue({ description: this.googleService.getCity() });
      this.valorCompanyCity = { description: this.googleService.getCity() };
    });
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
  get membershipId() { return this.form.get('membershipId'); }
  get phone() { return this.form.get('phone'); }

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

  getMembershipAll(): void {
    this.membershipService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.memberships = res.data;
      }
    });
  }

}
