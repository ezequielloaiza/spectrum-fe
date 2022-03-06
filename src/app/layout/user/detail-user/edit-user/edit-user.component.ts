import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, debounceTime, distinctUntilChanged, tap, catchError, merge } from 'rxjs/operators';
import { UserService, GoogleService, CountryService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { Observable, of } from 'rxjs';
import { User } from '../../../../shared/models/user';
import { MembershipService } from '../../../../shared/services/membership/membership.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListUserModalComponent } from '../../modals/list-user-modal/list-user-modal.component';
import { UserStorageService } from '../../../../http/user-storage.service';
import * as _ from 'lodash';
import { BasketproductrequestedService } from '../../../../shared/services/basketproductrequested/basketproductrequested.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  id: any;
  user: User = new User();
  nameSeller = '';
  searching = false;
  searchFailed = false;
  memberships: Array<any> = new Array;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  saving = false;
  listCountries: Array<any> = new Array;
  selectedCountry: any = null;
  locale: any;
  connected: boolean;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private membershipService: MembershipService,
              private googleService: GoogleService,
              private userService: UserService,
              private translate: TranslateService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private modalService: NgbModal,
              private userStorageService: UserStorageService,
              private countryService: CountryService,
              private basketProductRequestedService: BasketproductrequestedService) { }

  ngOnInit() {
    this.connected = this.userStorageService.getIsIntegratedQBO();
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getMembershipAll();
    this.getUser(this.id);
    this.initializeForm();
    this.getCountries();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      username    : ['', [ Validators.required]],
      name        : ['', [ Validators.required]],
      email       : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address     : [''],
      state       : [''],
      idCountry   : ['', [ Validators.required]],
      cityPlace   : ['', [ Validators.required]],
      postal      : ['', []],
      phone       : ['', []],
      cardCode    : [''],
      certificationCode: [''],
      accSpct     : [''],
      membershipId: ['', [Validators.required]],
      id          : [this.id, [Validators.required]],
      userId      : [],
      city        : [],
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

  getUser(id): void {
    this.userService.findByIdFull$(id).subscribe( res => {
      if (res.code === CodeHttp.ok) {
        this.user = res.data;
        this.setUser(this.user);
      }
    });
  }

  getMembershipAll(): void {
    this.membershipService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.memberships = res.data;
        this.memberships = _.orderBy(this.memberships, ['idMembership'], ['desc']);
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


  edit() {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
  }

  cancel(): void {
    this.canEdit === false ? this.canEdit = true : this.canEdit = false;
    this.setUser(this.user);
  }

  openSeller(): void {
    const modalRef = this.modalService.open(ListUserModalComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false});
    modalRef.result.then((result) => {
      this.form.get('userId').setValue(result.idUser);
      this.nameSeller = result.name;
    } , (reason) => {

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
      this.form.get('cityPlace').setValue({description: this.googleService.getCity() ? this.googleService.getCity() : this.googleService.place.address_components[0].long_name});
      this.form.get('city').setValue(this.googleService.getCity() ? this.googleService.getCity() : this.googleService.place.address_components[0].long_name);
    });
  }

  setUser(user: any): void {
    this.form.get('username').setValue(user.username);
    this.form.get('name').setValue(user.name);
    this.form.get('email').setValue(user.email);
    this.form.get('address').setValue(user.address);
    this.form.get('state').setValue(user.state);
    this.form.get('idCountry').setValue(user.country == null ? '' : user.country.idCountry);
    this.form.get('cityPlace').setValue({description: user.city});
    this.form.get('city').setValue(user.city);
    this.form.get('postal').setValue(user.postalCode);
    this.form.get('phone').setValue(this.user.phone == null ? '' : this.user.phone);
    this.form.get('cardCode').setValue(this.user.cardCode );
    this.form.get('certificationCode').setValue(this.user.certificationCode);
    this.form.get('accSpct').setValue(this.user.accSpct);
    this.form.get('membershipId').setValue(user.membership.idMembership);
    this.nameSeller = user.nameSeller;
    this.form.get('userId').setValue(user.idSeller);
  }

  save(): void {
    if (this.form.get('membershipId').value === 1 ) {
      this.basketProductRequestedService.checkProduct$(this.user.idUser).subscribe( res1 => {
        if (res1.code === CodeHttp.ok) {
         const quantity = res1.data;
         if (quantity > 0) {
          this.translate.get('Confirm Update', {value: 'Confirm Update'}).subscribe((title: string) => {
            this.translate.get('Are you sure you want to change the price list? The customer has products that will be removed from his cart.',
             {value: 'Are you sure you want to change the price list? The customer has products that will be removed from his cart.'}).subscribe((msg: string) => {
              this.alertify.confirm(title, msg, () => {
                this.saveUser();
              }, () => {
              });
            });
          });
         } else {
          this.saveUser();
         }
        } else {
          console.log(res1.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
   } else {
     this.saveUser();
   }
  }

  saveUser() {
    this.saving = true;
    if (this.nameSeller === '') {
      this.form.get('userId').setValue(null);
    }
    this.userService.update$(this.form.value).subscribe( res => {
      if (CodeHttp.ok === res.code) {
        this.canEdit = false;
        this.user = res.data;
        this.translate.get('Successfully Updated', {value: 'Successfully Updated'}).subscribe((resTra: string) => {
          this.notification.success('', resTra);
        });
      } else if (CodeHttp.notAcceptable === res.code && res.data === 1) {
        this.form.get('cityPlace').setValue({ description: this.form.value.city });
        this.translate.get('The user already exists, check the email',
        { value: 'The user already exists, check the email' }).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      } else if (CodeHttp.notAcceptable === res.code && res.data === 2) {
        this.form.get('cityPlace').setValue({ description: this.form.value.city });
        this.translate.get('The card code is associated with another client',
        { value: 'The card code is associated with another client' }).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      } else if (CodeHttp.notAcceptable === res.code && res.data === 3) {
        this.form.get('cityPlace').setValue({ description: this.form.value.city });
        this.translate.get('The certification code is associated with another client',
        { value: 'The certification code is associated with another client' }).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      } else if (CodeHttp.notAcceptable === res.code && res.data === 4) {
        this.form.get('cityPlace').setValue({ description: this.form.value.city });
        this.translate.get('The user already exists, check the username',
        { value: 'The user already exists, check the username' }).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      }
      this.saving = false;
    }, error  => {
      this.saving = false;
    });
  }

  resetKey(user) {
    this.translate.get('Confirm reset key', { value: 'Confirm reset key' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to reset the key?',
      { value: 'Are you sure you want to reset the key?' }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.recoveryPassword$(user).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.translate.get('The user will receive an email with their password',
              { value: 'The user will receive an email with their password' }).subscribe((res: string) => {
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

  get username() { return this.form.get('username'); }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get cityPlace() { return this.form.get('cityPlace'); }
  get state() { return this.form.get('state'); }
  get idCountry() { return this.form.get('idCountry'); }
  get postal() { return this.form.get('postal'); }
  get cardCode() { return this.form.get('cardCode'); }
  get certificationCode() { return this.form.get('cerfiticationCode'); }
  get accSpct() { return this.form.get('accSpct'); }
  get membershipId() { return this.form.get('membershipId'); }

  unlink(): void {
    this.nameSeller = '';
  }

}
