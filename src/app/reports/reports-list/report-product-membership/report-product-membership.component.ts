import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { ProductService } from '../../../shared/services/products/product.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';
import { UserService } from '../../../shared/services';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusInvoiceClient } from '../../../shared/enum/status-invoice-client.enum';

@Component({
  selector: 'app-report-product-membership',
  templateUrl: './report-product-membership.component.html',
  styleUrls: ['./report-product-membership.component.scss']
})
export class ReportProductMembershipComponent implements OnInit {

  typeReport: any;
  typesReport = [{id: 0, name: 'All Suppliers'},
                {id: 1, name: 'By Supplier'}];

  supplier: any;
  suppliers: Array<any> = new Array;
  user: any;
  valid = false;
  bySupplier = false;

  constructor(public modalReference: NgbActiveModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private userService: UserService,
    private productService: ProductService,
    private supplierService: SupplierService,
    private spinner: NgxSpinnerService) {
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }

  ngOnInit() {
    this.supplier = '';
  }

  close() {
    this.modalReference.close();
  }

  onSelectSupplier() {
    this.valid = true;
  }

  onSelectionChange(type) {
    if (type.id === 0) {
      this.valid = true;
      this.bySupplier = false;
      this.supplier = '';
    } else {
      this.valid = false;
      this.bySupplier = true;
      this.loadSuppliers();
    }
  }

  loadSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.suppliers = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  generateReport() {
    this.spinner.show();
    let idSupplier = 0;
    if (this.supplier !== '') {
      idSupplier = this.supplier;
    }
    this.productService.reportAllOrBySupplier$(idSupplier).subscribe(res => {
      const date = new Date();
      const aux = {year: date.getUTCFullYear(), month: date.getMonth() + 1,
        day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes()};
      const filename = 'Products-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
      saveAs(res, filename);
      this.spinner.hide();
      this.translate.get('Report has been generated',
        { value: 'Report has been generated' }).subscribe((res1: string) => {
          this.notification.success('', res1);
        });
    }, error => {
      this.spinner.hide();
      this.translate.get('The file could not be generated',
      { value: 'The file could not be generated' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
    this.close();
  }

}
