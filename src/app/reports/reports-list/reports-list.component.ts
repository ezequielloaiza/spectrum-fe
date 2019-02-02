import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../../http/user-storage.service';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ReportInvoicesOverdueComponent } from './report-invoices-overdue/report-invoices-overdue.component';
import { ReportProductMembershipComponent } from './report-product-membership/report-product-membership.component';
import { ReportBalanceClientComponent } from './report-balance-client/report-balance-client.component';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  listReport = [{id: 1, name: 'Report of Overdue Invoices'},
                {id: 2, name: 'Report 2'},
                {id: 3, name: 'Products Report'},
                {id: 4, name: 'Balance of Clients'}];
  currentUser: any;
  user: any;
  products: Array<any> = new Array;
  constructor(private userStorageService: UserStorageService,
              private modalService: NgbModal,
              public router: Router) {
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
        case 4: {
          const modalRef4 = this.modalService.open(ReportBalanceClientComponent, { size: 'lg' });
          modalRef4.result.then((result) => {
            this.ngOnInit();
          }, (reason) => {
          });
          break;
        }
      }
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

}

