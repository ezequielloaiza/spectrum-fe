import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShippingAddressService } from '../../../../shared/services/shippingAddress/shipping-address.service';
import { CompanyService } from '../../../../shared/services/company/company.service';

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


  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private shippingAddressService: ShippingAddressService,
    private companyService: CompanyService) {
   }

  initializeForm() {
    this.form = this.formBuilder.group({ 
      id       : [this.action === 'edit' ? this.address.idAddress : ''],
      companyId: [ this.action === 'edit' ? this.address.company.idCompany : '',[ Validators.required]],
      name     : [this.action === 'edit' ? this.address.name : '', [ Validators.required]]
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.getCompanies();
  }

  save(): void {
    if (this.action !== 'edit') {
      this.shippingAddressService.save$(this.form.value).subscribe(res => {
        if (res.code === 200) {
          this.close();
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

}
