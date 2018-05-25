import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BussinesTypeService } from '../../../../shared/services';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  form: FormGroup;
  bussinesTypes: Array<any> = new Array;

  constructor(private modal: NgbActiveModal, private formBuilder: FormBuilder,
    private bussinesTypeService: BussinesTypeService) { }

  ngOnInit() {
    this.initializeForm();
    this.getBussinesAll();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      mame               : ['', [ Validators.required]],
      email              : ['', [ Validators.required]],
      address            : ['', [ Validators.required]],
      companyName        : ['', [ Validators.required]],
      companyContactName : ['', [ Validators.required]],
      companyAddress     : ['', [ Validators.required]],
      companyPhone       : ['', [ Validators.required]],
      companyEmail       : ['', [ Validators.required]],
      creditLimit        : ['', [ Validators.required]],
      idBussinesType     : ['', [ Validators.required]]
    });
  }

  close(): void {
    this.modal.dismiss();
  }

  getBussinesAll(): void {
    this.bussinesTypeService.findAll$().subscribe(res => {
      if (res.code === 200) {
        this.bussinesTypes = res.data;
      }
    });
  }

}
