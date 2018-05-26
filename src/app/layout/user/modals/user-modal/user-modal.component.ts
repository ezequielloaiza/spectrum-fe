import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessTypeService, UserService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';

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
    private userSerice: UserService) { }

  ngOnInit() {
    this.initializeForm();
    this.getBussinesAll();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name               : ['', [ Validators.required]],
      email              : ['', [ Validators.required]],
      address            : ['', [ Validators.required]],
      companyName        : ['', [ Validators.required]],
      companyContactName : ['', [ Validators.required]],
      companyAddress     : ['', [ Validators.required]],
      companyPhone       : ['', [ Validators.required]],
      companyEmail       : ['', [ Validators.required]],
      creditLimit        : ['', [ Validators.required]],
      idBusinessType     : ['', [ Validators.required]]
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

    });
  }

}
