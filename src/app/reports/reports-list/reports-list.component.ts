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
import { ReportProductMembershipComponent } from './report-product-membership/report-product-membership.component';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  listReport = [{id: 1, name: 'Report of Overdue Invoices'},
                {id: 2, name: 'Report 2'},
                {id: 3, name: 'Products Report'},
                {id: 4, name: 'Report of Products'}];
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
          const modalRef = this.modalService.open(ReportInvoicesOverdueComponent, { size: 'lg' });
          modalRef.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
        case 3: {
          const modalRef3 = this.modalService.open(ReportProductMembershipComponent, { size: 'lg' });
          modalRef3.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
        case 4:
             this.downloadProducts();
        break;
      }
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  downloadProducts() {
    this.spinner.show();
    this.productService.downloadProducts$().subscribe(res => {
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes(), seconds: this.today.getSeconds};
      const filename = 'Detailed-Products-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
      if (res.size > 0) {
        this.spinner.hide();
        saveAs(res, filename);
      } else {
        this.spinner.hide();
        this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res1: string) => {
          this.notification.error('', res1);
        });
      }
    }, error => {
      this.spinner.hide();
      this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
  }

}

