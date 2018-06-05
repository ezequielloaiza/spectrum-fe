import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../user/modals/user-modal/user-modal.component';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { SupplierModalComponent } from './modals/supplier-modal/supplier-modal.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  closeResult: string;
	suppliers: Array<any> = new Array;
	auxSuppliers: Array<any> = new Array;
	advancedPagination: number;
	itemPerPage: number = 5;

	constructor(private modalService: NgbModal,
							private supplierService: SupplierService,
							private alertify: AlertifyService,
						  private notification: ToastrService){}

  ngOnInit() {
		this.getSuppliers();
		this.advancedPagination = 1;
  }
  
  open(supplier,action) {
		const modalRef = this.modalService.open(SupplierModalComponent);
		modalRef.componentInstance.supplier = supplier;
		modalRef.componentInstance.action = action;
		modalRef.result.then((result) => {
			this.getSuppliers();
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

	getSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === 200) {
				this.auxSuppliers = res.data;
				this.suppliers = this.auxSuppliers.slice(0,this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
	}
	
	delete(id) {
		this.alertify.confirm('Delete Supplier', 'Are you sure do you want to delete this?', () => {
			this.supplierService.removeById$(id).subscribe(res => {
				console.log('test');
				if (res.code === 200) {
					this.getSuppliers();
					this.notification.success('', 'Deleted Success');
				} else {
					console.log(res.errors[0].detail);
				}
			}, error => {
				console.log('error', error);
			});
		}, () => {
		}) ;
	}

	pageChange(event) {
		event.page;
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.suppliers = this.auxSuppliers.slice(startItem,endItem);
	}

}
