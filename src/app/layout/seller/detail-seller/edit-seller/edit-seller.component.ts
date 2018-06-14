import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GoogleService, UserService } from '../../../../shared/services';
import { Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, merge } from 'rxjs/operators';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.scss']
})
export class EditSellerComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  idSeller: any;
  seller: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private googleService: GoogleService,
              private userService: UserService,
              private notification: ToastrService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.idSeller = this.route.parent.snapshot.paramMap.get('id');
    this.getSeller(this.idSeller);
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      id                 : ['', []],
      name               : ['', [ Validators.required]],
      email              : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address            : [''],
      state              : ['', [ Validators.required]],
      country            : ['', [ Validators.required]],
      city               : ['', [ Validators.required]],
      postal             : ['', []],
      phone              : ['', [Validators.required]]
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

    getSeller(idSeller): void {
    this.userService.findById$(idSeller).subscribe( res => {
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
    this.googleService.placeById$(item.item.place_id).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('country').setValue(this.googleService.getCountry());
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({description: this.googleService.getCity()});
    });
  }

  setSeller(seller: any): void {
    this.form.get('id').setValue(seller.idUser);
    this.form.get('name').setValue(seller.name);
    this.form.get('email').setValue(seller.email);
    this.form.get('address').setValue(seller.address);
    this.form.get('state').setValue(seller.state);
    this.form.get('country').setValue(seller.country);
    this.form.get('city').setValue({description: this.seller.city});
    this.form.get('postal').setValue(seller.postalCode);
    this.form.get('phone').setValue(seller.phone);
  }

  save(): void {
    this.form.get('city').setValue(this.form.value.city.description);
    console.log(this.form.value);
    this.userService.updateSeller$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.form.get('city').setValue(this.form.value.city);
        this.seller = res.data;
        this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
          this.notification.success('', res);
        });
      this.canEdit = false;
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

}
