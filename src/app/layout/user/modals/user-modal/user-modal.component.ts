import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessTypeService, UserService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  form: FormGroup;
  businessTypes: Array<any> = new Array;

  constructor(private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private businessTypeService: BusinessTypeService,
    private userSerice: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.initializeForm();
    this.getBussinesAll();
  }

  initializeForm() {

    this.form = this.formBuilder.group({
      name               : ['', [ Validators.required]],
      email              : ['', [ Validators.required, Validators.email]],
      address            : ['', [ Validators.required]],
      companyName        : ['', [ Validators.required]],
      companyContactName : ['', [ Validators.required]],
      companyAddress     : ['', [ Validators.required]],
      companyPhone       : ['', [ Validators.required]],
      companyEmail       : ['', [ Validators.required]],
      creditLimit        : ['', [ Validators.required]],
      idBusinessType     : ['', [ Validators.required]],
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
    this.userSerice.signUp$(this.form.value).subscribe(res => {
      this.toastr.success('User save', 'Success');
      this.modal.close();
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

}
