import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../../http/user-storage.service';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ReportInvoicesOverdueComponent } from './report-invoices-overdue/report-invoices-overdue.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../shared/services/products/product.service';
import { saveAs } from 'file-saver';
import { ReportPaymentsComponent } from './report-payments/report-payments.component';
import { ReportProductMembershipComponent } from './report-product-membership/report-product-membership.component';
import { ReportBalanceClientComponent } from './report-balance-client/report-balance-client.component';
import { ReportSalesByProductComponent } from './report-sales-by-product/report-sales-by-product.component';
import { ReportGeneralBalanceComponent } from './report-general-balance/report-general-balance.component';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  listReport = [{id: 1, name: 'Overdue Invoices Report'},
                {id: 2, name: 'Payments Report'},
                {id: 3, name: 'Products Report'},
                {id: 4, name: 'Detailed Products Report'},
                {id: 5, name: 'Clients Balance'},
                {id: 6, name: 'General Balance'},
                {id: 7, name: 'Sales by Product Report'}];
  currentUser: any;
  user: any;
  products: Array<any> = new Array;
  today: Date = new Date();
  constructor(private userStorageService: UserStorageService,
    private modalService: NgbModal,
    public router: Router,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: ToastrService,
    private productService: ProductService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    console.log('report', this.listReport);
  }


  onSelection(id) {
    if (this.user.role.idRole === 1) {
      switch (id) {
        case 1: {
          const modalRef = this.modalService.open(ReportInvoicesOverdueComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
        case 2: {
          const modalRef = this.modalService.open(ReportPaymentsComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
        case 3: {
          const modalRef3 = this.modalService.open(ReportProductMembershipComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef3.componentInstance.type = 1;
          modalRef3.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
        case 4:
          const modalRef4 = this.modalService.open(ReportProductMembershipComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef4.componentInstance.type = 2;
          modalRef4.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        case 5:
          const modalRef5 = this.modalService.open(ReportBalanceClientComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef5.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        case 6: {
          const modalRef6 = this.modalService.open(ReportGeneralBalanceComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef6.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
        case 7:
          const modalRef7 = this.modalService.open(ReportSalesByProductComponent,
            { size: 'lg', backdrop: 'static', keyboard: false });
          modalRef7.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
        break;
      }
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
}

