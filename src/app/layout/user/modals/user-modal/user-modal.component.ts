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

  constructor(private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private businessTypeService: BusinessTypeService,
    private userSerice: UserService,
    private toastr: ToastrService,
    private googleService: GoogleService) { }

  ngOnInit() {
    this.initializeForm();
    this.getBussinesAll();
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


  initializeForm() {

    this.form = this.formBuilder.group({
      name               : ['', [ Validators.required]],
      email              : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address            : ['', [ Validators.required]],
      companyName        : ['', [ Validators.required]],
      companyContactName : ['', [ Validators.required]],
      companyAddress     : ['', [ Validators.required]],
      companyPhone       : ['', [ Validators.required]],
      companyEmail       : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      creditLimit        : ['', [ Validators.required]],
      idBusinessType     : ['', [ Validators.required]],
      state              : ['', [ Validators.required]],
      country            : ['', [ Validators.required]],
      city               : ['', [ Validators.required]],
      postal             : ['', [ Validators.required]],
      typeUser           : ['USER']
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
    this.userSerice.signUp$(this.form.value).subscribe(res => {
      this.toastr.success('User save', 'Success');
      this.modal.close();
    });
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

  validatePhone(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 32 || event.keyCode === 40 || event.keyCode === 41 || event.keyCode === 45  || event.keyCode === 46 ) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
    	return true;
    }
  };

}
