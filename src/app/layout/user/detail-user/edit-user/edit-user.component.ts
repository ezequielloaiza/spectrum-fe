import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, debounceTime, distinctUntilChanged, tap, catchError, merge } from 'rxjs/operators';
import { UserService, GoogleService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { Observable, of } from 'rxjs';
import { User } from '../../../../shared/models/user';
import { MembershipService } from '../../../../shared/services/membership/membership.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListUserModalComponent } from '../../modals/list-user-modal/list-user-modal.component';


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

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private membershipService: MembershipService,
              private googleService: GoogleService,
              private userService: UserService,
              private translate: TranslateService,
              private notification: ToastrService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getMembershipAll();
    this.getUser(this.id);
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name        : ['', [ Validators.required]],
      email       : ['', [ Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      address     : [''],
      state       : ['', [ Validators.required]],
      country     : ['', [ Validators.required]],
      city        : ['', [ Validators.required]],
      postal      : ['', []],
      phone       : ['', []],
      membershipId: ['', [Validators.required]],
      id          : [this.id, [Validators.required]],
      userId      : []
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
      }
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
    const modalRef = this.modalService.open(ListUserModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.result.then((result) => {
      this.form.get('userId').setValue(result.idUser);
      this.nameSeller = result.name;
    } , (reason) => {

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

  setUser(user: any): void {
    this.form.get('name').setValue(user.name);
    this.form.get('email').setValue(user.email);
    this.form.get('address').setValue(user.address);
    this.form.get('state').setValue(user.state);
    this.form.get('country').setValue(user.country);
    this.form.get('city').setValue({description: user.city});
    this.form.get('postal').setValue(user.postal);
    this.form.get('phone').setValue(user.phone);
    this.form.get('membershipId').setValue(user.membership.idMembership);
    this.nameSeller = user.nameSeller;
  }

  save(): void {
    if (this.form.get('city').value.description) {
      this.form.get('city').setValue(this.googleService.getCity() ? this.googleService.getCity() : this.user.city);
    }
    this.userService.update$(this.form.value).subscribe( res => {
      if (CodeHttp.ok === res.code) {
        this.canEdit = false;
        this.user = res.data;
        this.translate.get('Successfully Updated', {value: 'Successfully Updated'}).subscribe((resTra: string) => {
          this.notification.success('', resTra);
        });
      }
    }, error  => { });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get country() { return this.form.get('country'); }
  get postal() { return this.form.get('postal'); }
  get membershipId() { return this.form.get('membershipId'); }

  unlink(): void {
    this.nameSeller = '';
  }

}
