import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GoogleService, UserService, CountryService } from '../../../../shared/services';
import { Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, merge } from 'rxjs/operators';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Seller } from '../../../../shared/models/seller';
import { User } from '../../../../shared/models/user';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { UserStorageService } from '../../../../http/user-storage.service';

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.scss']
})
export class EditSellerComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  idSeller: any;
  seller: User = new User();
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  locale: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private googleService: GoogleService,
    private userService: UserService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private countryService: CountryService,
    private userStorageService: UserStorageService) { }

  ngOnInit() {
    this.idSeller = this.route.parent.snapshot.paramMap.get('id');
    this.getSeller(this.idSeller);
    this.initializeForm();
    this.getCountries();
    this.locale = this.userStorageService.getLanguage();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      id: ['', []],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address: [''],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postal: ['', []],
      phone: ['', []]
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

  formatter = (x: { description: string }) => x.description;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.googleService.searchCities$(term, this.locale).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  getSeller(idSeller): void {
    this.userService.findById$(idSeller).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.seller = res.data;
        this.setSeller(this.seller);
      }
    });
  }

  edit() {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
  }

  findPlace(item): void {
    this.googleService.placeById$(item.item.place_id, this.locale).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('country').setValue(this.googleService.getCountry());
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({ description: this.googleService.getCity() });
    });
  }

  setSeller(seller: any): void {
    this.form.get('id').setValue(seller.idUser);
    this.form.get('name').setValue(seller.name);
    this.form.get('email').setValue(seller.email);
    this.form.get('address').setValue(seller.address);
    this.form.get('state').setValue(seller.state);
    this.form.get('country').setValue(seller.country);
    this.form.get('city').setValue({ description: this.seller.city });
    this.form.get('postal').setValue(seller.postalCode);
    this.form.get('phone').setValue(seller.phone);
  }

  save(): void {
    this.form.get('city').setValue(this.form.value.city.description);
    this.userService.updateSeller$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.form.get('city').setValue(this.form.value.city);
        this.seller = res.data;
        this.setSeller(this.seller);
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
        this.canEdit = false;
      } else if (res.code === CodeHttp.notAcceptable) {
        this.form.get('city').setValue({ description: this.form.value.city });
        this.translate.get('The seller already exists, check the email', { value: 'The seller already exists, check the email' }).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }

  resetKey(seller) {
    this.translate.get('Confirm reset key', { value: 'Confirm reset key' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to reset the key?', { value: 'Are you sure you want to reset the key?' }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.recoveryPassword$(seller).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.translate.get('Key successfully restored', { value: 'Key successfully restored' }).subscribe((res: string) => {
                this.notification.success('', res);
              });
            } else {
              console.log(res.errors[0].detail);
            }
          }, error => {
            console.log('error', error);
          });
        }, () => {
        });
      });
    });
  }

  cancel(): void {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
    this.setSeller(this.seller);
  }
}

