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

  constructor(
    private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private shippingAddressService: ShippingAddressService,
    private companyService: CompanyService) {
   }

  initializeForm() {
    this.form = this.formBuilder.group({ address: ['',[ Validators.required]],
                                         company: ['', [ Validators.required]]
                                      });
  }

  ngOnInit() {
    this.initializeForm();
    this.getCompanies();
  }

  save(): void {
    this.shippingAddressService.save$(this.form.value).subscribe(res => {
      if (res.code === 200) {
        close();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getCompanies() {
    console.log('companias')
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
    this.modalReference.dismiss();
  }

}
