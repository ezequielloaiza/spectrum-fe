import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../../http/user-storage.service';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InvoiceClientService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ReportInvoicesOverdueComponent } from './report-invoices-overdue/report-invoices-overdue.component';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  listReport = [{id: 1, name: 'Report of Overdue Invoices'},
                {id: 2, name: 'Report 2'},
                {id: 3, name: 'Report 3'},
                {id: 4, name: 'Report 4'}];
  currentUser: any;
  user: any;
  products: Array<any> = new Array;
  constructor(private userStorageService: UserStorageService,
              private modalService: NgbModal,
              public router: Router,
              private spinner: NgxSpinnerService,
              private invoiceClientService: InvoiceClientService,
              private translate: TranslateService,
              private notification: ToastrService) {
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
        }
      }
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  open(action): void {
    const modalRef = this.modalService.open(ReportInvoicesOverdueComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      this.ngOnInit();
    }, (reason) => {
    });
  }
}

