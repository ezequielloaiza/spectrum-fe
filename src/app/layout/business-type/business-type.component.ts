import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { BusinessTypeService } from '../../shared/services/businessType/business-type.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { BusinessTypeModalComponent } from './modals/business-type-modal/business-type-modal.component';

@Component({
  selector: 'app-business-type',
  templateUrl: './business-type.component.html',
  styleUrls: ['./business-type.component.scss']
})
export class BusinessTypeComponent implements OnInit {

  closeResult: string;
	businesstypes: Array<any> = new Array;
	auxbusinesstypes: Array<any> = new Array;
	advancedPagination: number;
  itemPerPage: number = 5;
  
  constructor(private modalService: NgbModal,
              private businessTypeService: BusinessTypeService,
              private alertify: AlertifyService,
              private notification: ToastrService) { }

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

	getBusinessType() {
    this.businessTypeService.findAll$().subscribe(res => {
      if (res.code === 200) {
				this.auxbusinesstypes = res.data;
				this.businesstypes = this.businesstypes.slice(0,this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  
	borrar(id) {
		this.businessTypeService.removeById$(id).subscribe(res => {
			console.log('test');
			if (res.code === 200) {
				this.getBusinessType();
				this.notification.success('', 'Deleted Success');
			} else {
				console.log(res.errors[0].detail);
			}
		}, error => {
			console.log('error', error);
		});
	}
	
	delete(id) {
		this.alertify.confirm('Delete Business Type', 'Are you sure do you want to delete this?', () => {
			this.borrar(id);
		}, () => {
		}) ;
	}

	pageChange(event) {
		event.page;
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.businesstypes = this.auxbusinesstypes.slice(startItem,endItem);
	}

  
}
