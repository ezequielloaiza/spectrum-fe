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

  constructor(private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private toastr: ToastrService,
    private notification: ToastrService,
    private googleService: GoogleService) { }

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
      website     : [this.action === 'edit' ? this.supplier.website : '', [ Validators.required]]
    });
  }

  close(data): void {
    this.modalReference.close(data);
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  save(): void {
    if (this.action !== 'edit') {
      this.supplierService.save$(this.form.value).subscribe(res => {
        if (res.code === 200) {
          this.close(res.data);
          this.notification.success('', 'Saved Success');
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      console.log('save',this.form.value);
      this.supplierService.update$(this.form.value).subscribe(res => {
        if (res.code === 200) {
          this.close(res.data);
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
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
