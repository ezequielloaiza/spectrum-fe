import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { SupplierService } from '../../../../shared/services/suppliers/supplier.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-supplier-modal',
  templateUrl: './supplier-modal.component.html',
  styleUrls: ['./supplier-modal.component.scss']
})
export class SupplierModalComponent implements OnInit {
  form: FormGroup;
  supplier: any;
  searching = false;
  action: string;
  public model: any;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private toastr: ToastrService,
    private notification: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService) { }

  ngOnInit() {
    this.initializeForm();
  }

  formatter = (x: {description: string}) => x.description;

  initializeForm() {

    this.form = this.formBuilder.group({
      id          : [this.action === 'edit' ? this.supplier.idSupplier : ''],
      companyName : [this.action === 'edit' ? this.supplier.companyName : '', [ Validators.required]],
      contact     : [this.action === 'edit' ? this.supplier.contact : '', [ Validators.required]],
      address     : [this.action === 'edit' ? this.supplier.address : '', [ Validators.required]],
      email       : [this.action === 'edit' ? this.supplier.email : '', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      email2      : [this.action === 'edit' ? this.supplier.email2 : '', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      telephone   : [this.action === 'edit' ? this.supplier.telephone : '', [ Validators.required]],
      telephone2  : [this.action === 'edit' ? this.supplier.telephone2 : '', [ Validators.required]],
      plataform   : [this.action === 'edit' ? this.supplier.plataform : '', [ ]],
      website     : [this.action === 'edit' ? this.supplier.website : '', [ Validators.required]],
      state       : [this.action === 'edit' ? this.supplier.state : '', [ Validators.required]],
      country     : [this.action === 'edit' ? this.supplier.country : '', [ Validators.required]],
      city        : [this.action === 'edit' ? {description: this.supplier.city} : '', [ Validators.required]],
      postal      : [this.action === 'edit' ? this.supplier.postalCode : '']
    });
  }

  close(data): void {
    this.modalReference.close(data);
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  save(): void {
    if (this.form.get('city').value.description) {
      this.form.get('city').setValue(this.googleService.getCity() ? this.googleService.getCity() : this.supplier.city);
    }
    if (this.action !== 'edit') {
      /*update*/
      this.supplierService.save$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close(res.data);
          this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The supplier already exists, verify the name of the company or the emails', { value: 'The provider already exists, verify the name of the company or the emails' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      /*save*/
      this.supplierService.update$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close(res.data);
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The supplier already exists, verify the name of the company or the emails', { value: 'The provider already exists, verify the name of the company or the emails' }).subscribe((res: string) => {
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

  findPlace(item): void {
    this.googleService.placeById$(item.item.place_id).subscribe(res => {
      this.googleService.setPlace(res.data.result);
      this.form.get('country').setValue(this.googleService.getCountry());
      this.form.get('state').setValue(this.googleService.getState());
      this.form.get('postal').setValue(this.googleService.getPostalCode());
      this.form.get('city').setValue({description: this.googleService.getCity()});
    });
  }

  get companyName() { return this.form.get('companyName'); }
  get contact() { return this.form.get('contact'); }
  get address() { return this.form.get('address'); }
  get email() { return this.form.get('email'); }
  get email2() { return this.form.get('email2'); }
  get telephone() { return this.form.get('telephone'); }
  get telephone2() { return this.form.get('telephone2'); }
  get plataform() { return this.form.get('plataform'); }
  get website() { return this.form.get('website'); }
  get state() { return this.form.get('state'); }
  get city() { return this.form.get('city'); }
  get country() { return this.form.get('country'); }

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
