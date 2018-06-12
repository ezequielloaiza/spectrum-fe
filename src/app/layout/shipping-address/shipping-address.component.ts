import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ShippingAddressModalComponent } from './modals/shipping-address-modal/shipping-address-modal.component';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';

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
	/*initial order*/
	orderByField = 'idAddress';
	reverseSort = true;
	typeSort = 0;

	constructor(private modalService: NgbModal,
							private shippingAddressService: ShippingAddressService,
							private alertify: AlertifyService,
							private notification: ToastrService,
						  private translate: TranslateService){}

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
			this.moveFirstPage();
		} , (reason) => {

		});
	}

	moveFirstPage() {
		this.advancedPagination = 1;
		this.reverseSort = true;
		this.typeSort = 0;
		this.orderByField = 'idSupplier';
		this.sortAddress(this.orderByField);
		this.pageChange(this.advancedPagination);
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
				this.sortAddress(this.orderByField);
				//this.addresses = this.auxAddresses.slice(0,this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
	}

	sortAddress(key) {
		if (this.orderByField !== key) {
			this.typeSort = 0;
			this.reverseSort = false;
		}
		this.orderByField = key;
		if (this.orderByField !== 'idAddress') {
			this.typeSort ++;
			if (this.typeSort > 2) {
				this.typeSort = 0;
				this.orderByField = 'idAddress';
				key = 'idAddress';
				this.reverseSort = true;
			}
		}
    let suppliersAddress = this.auxAddresses.sort(function(a, b) {
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.auxAddresses = suppliersAddress;
		if (this.reverseSort) {
			this.auxAddresses = suppliersAddress.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
	}


	borrar(id) {
		this.shippingAddressService.removeById$(id).subscribe(res => {
			if (res.code === CodeHttp.ok) {
				this.getAddress();
				this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
					this.notification.success('', res);
				});
			} else if(res.code === CodeHttp.notAcceptable) {
				this.translate.get('Can not be eliminated', {value: 'Can not be eliminated'}).subscribe((res: string) => {
					this.notification.warning('', res);
				});
			} else {
				console.log(res.errors[0].detail);
			}
		}, error => {
			console.log('error', error);
		});
	}

	delete(id) {
		this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
			this.translate.get('Are you sure do you want to delete this register?', {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
				this.alertify.confirm(title, msg, () => {
					this.borrar(id);
				}, () => {
				});
			});
		});
	}

	pageChange(event) {
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.addresses = this.auxAddresses.slice(startItem,endItem);
	}

}
