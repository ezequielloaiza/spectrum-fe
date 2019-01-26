import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modals-invoice',
  templateUrl: './modals-invoice.component.html',
  styleUrls: ['./modals-invoice.component.scss']
})
export class ModalsInvoiceComponent implements OnInit {


  advancedPagination: number;
  itemPerPage = 6;
  list: any;
  auxList: any;
  constructor(private supplierService: SupplierService,
    private modal: NgbActiveModal) { }

  ngOnInit() {
    this.advancedPagination = 1;
    this.auxList = this.list;
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.list = this.auxList.slice(startItem, endItem);
  }

  close(): void {
    this.modal.dismiss();
  }


}
