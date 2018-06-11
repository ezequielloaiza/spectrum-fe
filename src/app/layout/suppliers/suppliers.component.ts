import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../user/modals/user-modal/user-modal.component';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { SupplierModalComponent } from './modals/supplier-modal/supplier-modal.component';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';

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
	/*initial order*/
	orderByField = 'idSupplier';
	reverseSort = true;
	typeSort = 0;

	constructor(private modalService: NgbModal,
							private supplierService: SupplierService,
							private alertify: AlertifyService,
							private notification: ToastrService,
							private translate: TranslateService){}

  ngOnInit() {
		this.advancedPagination = 1;
		this.getSuppliers();
	}

	getSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
				this.auxSuppliers = res.data;
				this.sortSupplier(this.orderByField);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
	}
	
	sortSupplier(key) {
		if (this.orderByField !== key) {
			this.typeSort = 0;
			this.reverseSort = false;
		}
		this.orderByField = key;
		if (this.orderByField !== 'idSupplier') {
			this.typeSort ++;
			if (this.typeSort > 2) {
				this.typeSort = 0;
				this.orderByField = 'idSupplier';
				key = 'idSupplier';
				this.reverseSort = true;
			}
		}
    let suppliersSort = this.auxSuppliers.sort(function(a, b) {
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.auxSuppliers = suppliersSort;
		if (this.reverseSort) {
			this.auxSuppliers = suppliersSort.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
	}

	pageChange(event) {
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.suppliers = this.auxSuppliers.slice(startItem,endItem);
	}
  
  open(supplier,action) {
		const modalRef = this.modalService.open(SupplierModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
		modalRef.componentInstance.supplier = supplier;
		modalRef.componentInstance.action = action;
		modalRef.result.then((result) => {
			if (action === 'edit') {
				var index = _.findIndex(this.auxSuppliers, {idSupplier: result.idSupplier});
				this.auxSuppliers[index] = result;
			}
			else {
				this.auxSuppliers.push(result);
			}
			this.moveFirstPage();
		} , (reason) => {
		});
	}

	moveFirstPage() {
		this.advancedPagination = 1;
		this.reverseSort = true;
		this.typeSort = 0;
		this.orderByField = 'idSupplier';
		this.sortSupplier(this.orderByField);
		this.pageChange(this.advancedPagination);
	}
	
	delete(id) {
		this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
			this.translate.get('Are you sure do you want to delete this register?', {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
				this.alertify.confirm(title, msg, () => {
					this.supplierService.removeById$(id).subscribe(res => {
						if (res.code === CodeHttp.ok) {
							this.getSuppliers();
							this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
								this.notification.success('', res);
							});
						} else {
							this.translate.get('Can not be eliminated', {value: 'Can not be eliminated'}).subscribe((res: string) => {
								this.notification.warning('', res);
							});
						}
					}, error => {
						console.log('error', error);
					});
				}, () => {
				});
			});
		});
	}

}
