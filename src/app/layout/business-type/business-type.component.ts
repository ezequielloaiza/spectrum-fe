import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { BusinessTypeService } from '../../shared/services/businessType/business-type.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { BusinessTypeModalComponent } from './modals/business-type-modal/business-type-modal.component';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-business-type',
  templateUrl: './business-type.component.html',
  styleUrls: ['./business-type.component.scss']
})
export class BusinessTypeComponent implements OnInit {

  closeResult: string;
	businessTypes: Array<any> = new Array;
	auxBusinessTypes: Array<any> = new Array;
	advancedPagination: number;
	itemPerPage: number = 5;
	/*initial order*/
	orderByField = 'idBusinessType';
	reverseSort = true;
	typeSort = 0;

  constructor(private modalService: NgbModal,
              private businessTypeService: BusinessTypeService,
              private alertify: AlertifyService,
							private notification: ToastrService,
							private translate: TranslateService){ }

  ngOnInit() {
    this.getBusinessType();
		this.advancedPagination = 1;
	}

	open(businesstype,action) {
		const modalRef = this.modalService.open(BusinessTypeModalComponent);
		modalRef.componentInstance.businesstype = businesstype;
		modalRef.componentInstance.action = action;
		modalRef.result.then((result) => {
			this.getBusinessType();
			this.moveFirstPage();
		} , (reason) => {

		});
	}

	moveFirstPage() {
		this.advancedPagination = 1;
		this.reverseSort = true;
		this.typeSort = 0;
		this.orderByField = 'idBusinessType';
		this.sortBusinessType(this.orderByField);
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

	getBusinessType() {
    this.businessTypeService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
				this.auxBusinessTypes = res.data;
				this.sortBusinessType(this.orderByField);
				//this.businessTypes = this.auxBusinessTypes.slice(0,this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
	}
	
	sortBusinessType(key) {
		if (this.orderByField !== key) {
			this.typeSort = 0;
			this.reverseSort = false;
		}
		this.orderByField = key;
		if (this.orderByField !== 'idBusinessType') {
			this.typeSort ++;
			if (this.typeSort > 2) {
				this.typeSort = 0;
				this.orderByField = 'idBusinessType';
				key = 'idBusinessType';
				this.reverseSort = true;
			}
		}
    let businessTypeSort = this.auxBusinessTypes.sort(function(a, b) {
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.auxBusinessTypes = businessTypeSort;
		if (this.reverseSort) {
			this.auxBusinessTypes = businessTypeSort.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
	}


	borrar(id) {
		this.businessTypeService.removeById$(id).subscribe(res => {
			if (res.code === CodeHttp.ok) {
				this.getBusinessType();
				this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
					this.notification.success('', res);
				});
			} else if(res.code === CodeHttp.notAcceptable) {
				this.translate.get('Can not be eliminated, is associated with a company', {value: 'Can not be eliminated, is associated with a company'}).subscribe((res: string) => {
					this.notification.warning('', res);
				});
			}
			else {
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
		this.businessTypes = this.auxBusinessTypes.slice(startItem,endItem);
	}


}
