import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WarrantyService } from '../../shared/services/warranty/warranty.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import { WarrantyModalComponent } from './modals/warranty-modal/warranty-modal.component';


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
    private translate: TranslateService) { }

  ngOnInit() {
    this.advancedPagination = 1;
    this.itemPerPage = 5;
  }

  open(warranty, action) {
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

  getWarranty() {
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
  }

  borrar(id) {
  }

  delete(id) {
  }

  pageChange(event) {
  }
}
