import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { UserService, GoogleService } from '../../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, catchError, merge } from 'rxjs/operators';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';

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

  constructor(private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userSerice: UserService,
    private toastr: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService,
    private notification: ToastrService) { }

  ngOnInit() {
    this.initializeForm();

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
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postal: ['', [Validators.required]]
    });
  }

  close(): void {
    this.modal.dismiss();
  }

  save(): void {
    this.form.get('city').setValue(this.googleService.getCity());
    this.userSerice.registerSeller$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.modal.close();
        this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.form.get('city').setValue({description: this.form.value.city});
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
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }


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

}
