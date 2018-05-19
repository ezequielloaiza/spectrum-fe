import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shipping-address-modal',
  templateUrl: './shipping-address-modal.component.html',
  styleUrls: ['./shipping-address-modal.component.scss']
})
export class ShippingAddressModalComponent implements OnInit {

  constructor(
    private modalReference: NgbActiveModal) {
   }

  ngOnInit() {
  }

  close() {
    this.modalReference.dismiss();
  }

}
