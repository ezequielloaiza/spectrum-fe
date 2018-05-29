import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShippingAddressService } from '../../../../shared/services/shippingAddress/shipping-address.service';
import { CompanyService } from '../../../../shared/services/company/company.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, merge } from 'rxjs/operators';
import { GoogleService } from '../../../../shared/services';

@Component({
  selector: 'app-shipping-address-modal',
  templateUrl: './shipping-address-modal.component.html',
  styleUrls: ['./shipping-address-modal.component.scss']
})
export class ShippingAddressModalComponent implements OnInit {

  form: FormGroup;
  companies: Array<any>;
  address: any;
  action: string;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;


  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private shippingAddressService: ShippingAddressService,
    private companyService: CompanyService,
    private notification: ToastrService,
    private googleService: GoogleService) {
   }

  initializeForm() {
    this.form = this.formBuilder.group({ 
      id        : [this.action === 'edit' ? this.address.idAddress : ''],
      companyId : [ this.action === 'edit' ? this.address.company.idCompany : '',[ Validators.required]],
      name      : [this.action === 'edit' ? this.address.name : '', [ Validators.required]],
      state     : ['', [ Validators.required]],
      country   : ['', [ Validators.required]],
      city      : ['', [ Validators.required]],
      postal    : ['', [ Validators.required]],
      address   : ['', [ Validators.required]]
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.getCompanies();
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

  save(): void {
    if (this.action !== 'edit') {
      this.shippingAddressService.save$(this.form.value).subscribe(res => {
        if (res.code === 200) {
          this.close();
          this.notification.success('', 'Saved Success');
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      console.log('save',this.form.value);
      this.shippingAddressService.update$(this.form.value).subscribe(res => {
        if (res.code === 200) {
          this.close();
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
  }

  getCompanies() {
    this.companyService.findAllByCompany$().subscribe(res => {
      if (res.code === 200) {
        this.companies = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });

  }

  close() {
    this.modalReference.close();
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

}
