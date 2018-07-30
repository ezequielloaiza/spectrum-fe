import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WarrantyService } from '../../shared/services/warranty/warranty.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import { WarrantyModalComponent } from './modals/warranty-modal/warranty-modal.component';
import { Warranty } from '../../shared/models/warranty';


@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss']
})

export class WarrantyComponent implements OnInit {
  closeResult: string;
  warranties: Array<any> = new Array;
  auxWarranties: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number;
  /*initial order*/
  orderByField = 'idWarranty';
  reverseSort = true;
  typeSort = 0;

  constructor(private modalService: NgbModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private warrantyService: WarrantyService) { }

  ngOnInit() {
    this.getListWarranties();
    this.advancedPagination = 1;
    this.itemPerPage = 5;
  }

  open(warranty, action) {
    const modalRef = this.modalService.open(WarrantyModalComponent , { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.warranty = warranty;
    modalRef.componentInstance.action = action;
    modalRef.result.then((result) => {
      this.getListWarranties();
      this.moveFirstPage();
    } , (reason) => {	});
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.reverseSort = true;
    this.typeSort = 0;
    this.orderByField = 'idWarranty';
    this.sortWarranty(this.orderByField);
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

  getListWarranties(): void {
    this.warrantyService.findAllByUser$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.warranties = res.data;
        this.auxWarranties = res.data;
        this.sortWarranty(this.orderByField);
        // this.warranties = this.auxWarranties.slice(0, this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  sortWarranty(key) {
    if (this.orderByField !== key) {
      this.typeSort = 0;
      this.reverseSort = false;
    }
    this.orderByField = key;
    if (this.orderByField !== 'idWarranty') {
      this.typeSort ++;
      if (this.typeSort > 2) {
        this.typeSort = 0;
        this.orderByField = 'idWarranty';
        key = 'idWarranty';
        this.reverseSort = true;
      }
    }

    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  deleteWarranty(id) {
    this.warrantyService.removeById$(id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.getListWarranties();
        // tslint:disable-next-line:no-shadowed-variable
        this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        // tslint:disable-next-line:max-line-length
        this.translate.get('Can not be eliminated, is associated with a product', {value: 'Can not be eliminated, is associated with a product'}).subscribe((res: string) => {
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
      // tslint:disable-next-line:max-line-length
      this.translate.get('Are you sure do you want to delete this register?', {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.deleteWarranty(id);
        }, () => { });
      });
    });
  }

  pageChange(event) {
  }
}
