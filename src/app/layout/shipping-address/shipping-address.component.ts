import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ShippingAddressModalComponent } from './modals/shipping-address-modal/shipping-address-modal.component';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

	closeResult: string;
	addresses: Array<any> = new Array;
	auxAddresses: Array<any> = new Array;
	advancedPagination: number;
	itemPerPage: number = 5;

	constructor(private modalService: NgbModal,
							private shippingAddressService: ShippingAddressService,
							private alertify: AlertifyService){}

  ngOnInit() {
		this.getAddress();
		this.advancedPagination = 1;
  }
  
  open(address,action) {
		const modalRef = this.modalService.open(ShippingAddressModalComponent);
		modalRef.componentInstance.address = address;
		modalRef.componentInstance.action = action;
		modalRef.result.then((result) => {
			this.getAddress();
		} , (reason) => {

		});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	getAddress() {
    this.shippingAddressService.findAll$().subscribe(res => {
      if (res.code === 200) {
				this.auxAddresses = res.data;
				this.addresses = this.auxAddresses.slice(0,this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
	}

	borrar(id) {
		this.shippingAddressService.removeById$(id).subscribe(res => {
			console.log('test');
			if (res.code === 200) {
				this.getAddress();
			} else {
				console.log(res.errors[0].detail);
			}
		}, error => {
			console.log('error', error);
		});
	}
	
	delete(id) {
		this.alertify.confirm('Delete Shipping Address', 'Are you sure do you want to delete this?', () => {
			this.borrar(id);
		}, () => {

		}) ;
	}

	pageChange(event) {
		event.page;
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.addresses = this.auxAddresses.slice(startItem,endItem);
	}

}