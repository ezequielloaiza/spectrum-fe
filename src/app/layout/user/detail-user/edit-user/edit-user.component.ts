import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, debounceTime, distinctUntilChanged, tap, catchError, merge } from 'rxjs/operators';
import { UserService, GoogleService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  id: any;
  user: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private googleService: GoogleService,
              private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getUser(this.id);
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name               : ['', [ Validators.required]],
      email              : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address            : [''],
      state              : ['', [ Validators.required]],
      country            : ['', [ Validators.required]],
      city               : ['', [ Validators.required]],
      postal             : ['', []],
      phone     : ['', [Validators.required]]
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

  getUser(id): void {
    this.userService.findById$(id).subscribe( res => {
      if (res.code === CodeHttp.ok) {
        this.user = res.data;
        this.setUser(this.user);
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

  setUser(user: any): void {
    this.form.get('name').setValue(user.name);
    this.form.get('email').setValue(user.email);
    this.form.get('address').setValue(user.address);
    this.form.get('state').setValue(user.state);
    this.form.get('country').setValue(user.country);
    this.form.get('city').setValue(user.city);
    this.form.get('postal').setValue(user.postal);
  }

  save(): void {
    console.log(this.form.value);
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
