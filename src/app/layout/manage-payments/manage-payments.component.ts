import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { UserStorageService } from '../../http/user-storage.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { GenerateInvoiceComponent } from '../manage-customer-orders/generate-invoice/generate-invoice.component';
import { OrderService, InvoicePaymentService } from '../../shared/services';
import { saveAs } from 'file-saver';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { InvoiceClientService } from '../../shared/services/invoiceClient/invoiceclient.service';
import { AddPaymentModalComponent } from './payments-made/modals/add-payment-modal/add-payment-modal.component';
import { StatusInvoiceClient } from '../../shared/enum/status-invoice-client.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manage-payments',
  templateUrl: './manage-payments.component.html',
  styleUrls: ['./manage-payments.component.scss']
})
export class ManagePaymentsComponent implements OnInit, OnDestroy {
  orderByField = 'number';
  reverseSort = true;
  typeSort = 0;
  invoice: any;
  user: any;
  statusRoute: any;
  listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  itemPerPage: number = 8;
  order: any;
  filterStatus = [{ id: 0, name: 'Pending' },
  // { id: 1, name: 'Part Paid' },
  { id: 2, name: 'Paid' },
  { id: 3, name: 'Overdue' }
  ];
  listAux = [];
  valid = false;
  selectedAll: any;
  valorClient: string;
  selectedStatus: any;
  status: any;
  valid1 = false;
  fechaSelec: NgbDatepicker;
  search: String;
  navigationSubscription;
  listPayments: Array<any> = new Array;
  invoicesSameClient = [];
  connected: boolean;
  filterDateRange: Array<any> = new Array;
  selectedRange: any;

  paginateParams = {
    page: 1,
    perPage: 5
  };

  meta = {
    pages: 0,
    total: 0
  };

  filterP = {
    dueDate: '',
    general: '',
    status: -1,
    beginningDate: '',
    finishDate: '',
    order: ''
  };
  typingTimer: any;

  constructor(private orderService: OrderService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceClientService,
    private spinner: NgxSpinnerService,
    public router: Router,
    private route: ActivatedRoute,
    private invoicePaymentService: InvoicePaymentService,
    private datepipe: DatePipe) {
    this.user = JSON.parse(userStorageService.getCurrentUser());
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        //this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.connected = this.userStorageService.getIsIntegratedQBO();
    this.route.queryParams.subscribe(params => {
      this.statusRoute = params.status;
    });
    this.getListInvoices();
    this.listAux = [];
    this.selectedStatus = '';
    this.selectedAll = false;
    this.valid = false;

    this.filterDateRange = [
      { key: '30,0', label: 'Up to 30 days' },
      { key: '60,31', label: '31-60 days' },
      { key: '90,61', label: '61-90 days' },
      { key: '90,>', label: 'More than 90 days' }
    ];
    this.selectedRange = '';
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getListInvoices(): void {
    this.spinner.show();
    const status: Array<any> = new Array;
    if (Number(this.statusRoute) === 0) {
      status.push(StatusInvoiceClient.Pending);
      status.push(StatusInvoiceClient.Part_Paid);
      status.push(StatusInvoiceClient.Overdue);
    } else if (Number(this.statusRoute) === 1) {
      status.push(StatusInvoiceClient.Part_Paid);
      status.push(StatusInvoiceClient.Paid);
    }
    this.invoiceService.allInvoiceByStatusIn$(this.user.userResponse.idUser, status, this.paginateParams, this.filterP).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.meta = res.data.meta;
          this.listInvoices = res.data.result;
          this.listInvoicesAux = res.data.result;
          _.each(this.listInvoices, function (invoice) {
            invoice.pay = false;
            _.each(invoice.invoiceClientInvoicePayments, function (payment) {
              if (payment.invoicePayment.status === 0) {
                invoice.pay = true;
              }
            });
          });
        }
        this.spinner.hide();
      },
      error => {
        console.log('error', error);
        this.spinner.hide();
      }
    );
  }

  sortInvoice(key) {
    if (this.orderByField !== key) {
      this.typeSort = 0;
      this.reverseSort = false;
    }
    this.orderByField = key;
    if (this.orderByField !== 'number') {
      this.typeSort++;
      if (this.typeSort > 2) {
        this.typeSort = 0;
        this.orderByField = 'number';
        key = 'number';
        this.reverseSort = true;
        this.getListInvoices();
      }
    }
    let invoicesSort = this.listInvoicesAux.sort(function (a, b) {
      let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    this.listInvoicesAux = invoicesSort;
    if (this.reverseSort) {
      this.listInvoicesAux = invoicesSort.reverse();
    }
  }

  getOrder(idOrder) {
    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.order = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  delete(invoice): void {
    this.translate.get('Delete Invoice', { value: 'Delete Invoice' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to delete the invoice? You must notify the provider this change.',
        { value: 'Are you sure you want to delete the invoice? You must notify the provider this change.' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.invoiceService.delete$(invoice.idInvoice).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.getListInvoices();
                this.translate.get('Successfully Deleted', { value: 'Successfully Deleted' }).subscribe((res1: string) => {
                  this.notification.success('', res1);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            });
          }, () => {
          });
        });
    });
  }

  showItemOnlyAdmin(): boolean {
    return this.user.role.idRole === 1;
  }

  downloadInvoice(invoice): void {
    this.invoiceService.downloadInvoice$(invoice.number).subscribe(res => {
      const filename = 'I-' + invoice.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
  }

  getItems(ev: any) {
    clearTimeout(this.typingTimer);
    if (ev.target.value !== '') {
      this.typingTimer = setTimeout(() => {
        this.filterP.general = ev.target.value;
        this.paginateParams.page = 1;
        this.getListInvoices();
      }, 500);
    } else {
      this.filterP.general = '';
      this.paginateParams.page = 1;
      this.getListInvoices();
    }
  }

  filterPaymentStatus() {
    this.filterP.status = Number(this.selectedStatus);
    this.paginateParams.page = 1;
    this.getListInvoices();
  }

  filterByDate(date) {
    this.filterP.dueDate = date.year + '-' + (date.month < 10 ?  '0' + date.month : date.month) + '-' + date.day;
    this.paginateParams.page = 1;
    this.getListInvoices();
  }

  clean(type) {
    this.selectedStatus = '';
    this.meta = {
      pages: 0,
      total: 0
    };

    this.filterP = {
      dueDate: '',
      general: '',
      status: -1,
      finishDate: '',
      beginningDate: '',
      order: ''
    };

    this.search = null;
    this.valorClient = null;
    this.fechaSelec = null;
    this.selectedRange = '';
    this.getListInvoices();
  }

  open(invoice) {
    this.router.navigate(['/payments/' + invoice.idInvoice + '/paymentsMade']);
  }

  onSelection(id, checked) {
    let arrayAux = this.listAux;
    let due = false;
    var self = this;
    _.each(this.listInvoices, function (item) {
      if (item.idInvoice === id) {
        let existe: boolean;
        existe = _.includes(arrayAux, id);
        item.checked = checked;
        if (item.due !== 0) {
          if (existe) {
            if (!checked) {
              _.remove(arrayAux, function (n) {
                return n === id;
              });
            }
          } else {
            arrayAux = _.concat(arrayAux, id);
          }
        } else {
          item.checked = false;
          checked ? due = true : due = false;
        }
      }
    });
    if (due) {
      this.translate.get('Invoice already been paid', { value: 'Invoice already been paid' }).subscribe((res1: string) => {
        this.notification.success('', res1);
      });
    }
    this.selectedAll = false;
    this.listAux = arrayAux;
    this.listAux.length > 1 ? this.valid = true : this.valid = false;
    this.listAux.length === this.listInvoices.length ? this.selectedAll = true : this.selectedAll = false;
  }

  onSelectionAll(event) {
    let arrayAux = this.listAux;
    const check = event.target.checked;
    let due = false;
    var self = this;
    _.each(this.listInvoices, function (item) {
      item.checked = check;
      let existe: boolean;
      const id = item.idInvoice;
      existe = _.includes(arrayAux, id);
      if (item.due !== 0) {
        if (existe) {
          if (!check) {
            _.remove(arrayAux, function (n) {
              return n === id;
            });
          }
        } else {
          arrayAux = _.concat(arrayAux, id);
        }
      } else {
        check ? due = true : due = false;
        item.checked = false;
      }
    });
    if (due) {
      this.translate.get('Invoice already been paid', { value: 'Invoice already been paid' }).subscribe((res1: string) => {
        this.notification.success('', res1);
      });
    }
    this.selectedAll = check;
    this.listAux = arrayAux;
    this.listAux.length > 1 ? this.valid = true : this.valid = false;
  }

  checkSameClient(): any {
    let self = this;
    let invoices = [];
    let allSameClient = false;
    _.each(this.listAux, function(invoiceSelected) {
      _.each(self.listInvoices, function(invoice) {
        if (invoice.idInvoice == invoiceSelected) {
          invoices.push(invoice);
        }
      });
    });
    if (invoices.length > 0) {
      let idUser = invoices[0].idUser;
      allSameClient = _.every(invoices, function(invoice) {
        return invoice.idUser == idUser;
      });
      return  allSameClient;
    }
    return allSameClient;
  }

  openModal(invoice, action, payment): void {
    const modalRef = this.modalService.open(AddPaymentModalComponent,
      { size: 'lg', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.invoice = invoice;
    modalRef.componentInstance.action = action;
    modalRef.componentInstance.invoicePayment = payment;
    modalRef.componentInstance.idsInvoiceClient = this.listAux;
    modalRef.result.then((result) => {
      this.ngOnInit();
    }, (reason) => {
    });
  }

  filterByRangeDate(): void {
    this.filterP.finishDate = '';
    this.filterP.beginningDate = '';
    let finishDate = null;
    this.valid1 = true;

    let currentDate = new Date();
    const selected = this.selectedRange.split(',');
    let finish = selected[1];

    // Set beginningDate
    let beginning = selected[0];
    switch (beginning) {
      case '30':
        beginning = 30;
        break;
      case '60':
        beginning = 61;
        break;
      case '90':
        beginning = 91;
        break;
    }

    const beginningDate = new Date(currentDate.setDate(currentDate.getDate() - beginning));
    this.filterP.beginningDate = this.datepipe.transform(beginningDate, 'yyyy-MM-dd');

    // Set finishDate
    if (finish !== '>') {
      switch (finish) {
        case '31':
          finish = 31;
          break;
        case '61':
          finish = 62;
          break;
        default:
          finish = null;
          break;
      }

      currentDate = new Date();
      finishDate = new Date(currentDate.setDate(currentDate.getDate() - finish));
      this.filterP.finishDate = this.datepipe.transform(finishDate, 'yyyy-MM-dd');
    }

    this.paginateParams.page = 1;
    this.getListInvoices();

    /*this.listInvoices = this.listInvoices.filter((item) => {
      const dueDate = new Date(item.dueDate);

      if (finishDate) {
        return beginningDate <= dueDate && dueDate <= finishDate;
      }

      // > 90 días.
      return dueDate < beginningDate;
    });*/
  }

  getRangeLabel() {
    return this.selectedRange ? _.find(this.filterDateRange, { 'key': this.selectedRange }).label : null;
  }

  getBalance() {
    return _.round(_.sumBy(this.listInvoicesAux, 'due'), 2);
  }

  getDue() {
    const currentDate = new Date();

    return _.round(_.sumBy(this.listInvoicesAux, function(item) {
      return new Date(item.dueDate) < currentDate ? item.due : 0;
    }),2);
  }

  getDueByRange() {
    return _.round(_.sumBy(this.listInvoices, 'due'), 2);
  }

  // Paging methods
  onPrev(): void {
    this.paginateParams.page--;
    this.getListInvoices();
  }

  onNext(): void {
    this.paginateParams.page++;
    this.getListInvoices();
  }

  onFirst(): void {
    this.paginateParams.page = 1;
    this.getListInvoices();
  }

  onLast(): void {
    this.paginateParams.page = this.meta.pages;
    this.getListInvoices();
  }

  onPerPage(perPage: number): void {
    this.paginateParams.page = 1;
    this.paginateParams.perPage = perPage;
    this.getListInvoices();
  }

}
