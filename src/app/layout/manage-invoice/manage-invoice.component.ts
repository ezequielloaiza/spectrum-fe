import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { InvoiceSupplierService } from '../../shared/services/invoiceSupplier/invoiceSupplier.service';
import { UserStorageService } from '../../http/user-storage.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { GenerateInvoiceComponent } from '../manage-customer-orders/generate-invoice/generate-invoice.component';
import { OrderService } from '../../shared/services';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-invoice',
  templateUrl: './manage-invoice.component.html',
  styleUrls: ['./manage-invoice.component.scss']
})
export class ManageInvoiceComponent implements OnInit {
  orderByField = 'number';
  reverseSort = true;
  typeSort = 0;
  invoice: any;
  listInvoicesOriginal: Array<any> = new Array;
  listInvoicesCopy: Array<any> = new Array;
  order: any;
  filterStatus = [{ id: 0, name: 'Pending' },
                  { id: 1, name: 'Sent' }
                ];
  // selectedStatus: any;
  selectedStatusOriginal: any;
  selectedStatusCopy: any;
  status: any;
  tamano: String;
  model: NgbDateStruct;
  // valid1 = false;
  validOriginal = false;
  validCopy = false;
  fechaSelec: NgbDatepicker;
  fechaSelecOriginal: NgbDatepicker;
  fechaSelecCopy: NgbDatepicker;
  search: String;
  searchOriginal: String;
  searchCopy: String;
  eveCopy: any;
  eveOriginal: any;

  paginateParams = {
    page: 1,
    perPage: 5
  };

  metaOriginal = {
    pages: 0,
    total: 0
  };

  metaCopy = {
    pages: 0,
    total: 0
  };

  filterCopy = {
    date: '',
    general: '',
    status: -1,
    original: false,
    order: ''
  };

  filterOriginal = {
    date: '',
    general: '',
    status: -1,
    original: true,
    order: ''
  };

  typingTimer: any;

  constructor(private orderService: OrderService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceSupplierService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getListInvoicesCopy();
    this.selectedStatusOriginal = '';
    this.selectedStatusCopy = '';
    this.tamano = 'undefined';
    this.model = { year: 0, month: 0, day: 0 };
  }

  getListInvoicesOriginal(): void {
    this.spinner.show();
    this.invoiceService.allInvoice$(this.paginateParams, this.filterOriginal).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          // Original
          this.metaOriginal = res.data.meta;
          this.listInvoicesOriginal = res.data.result;
          this.spinner.hide();
        } else {
          console.log(res.code);
          this.spinner.hide();
        }
      },
      error => {
        console.log('error', error);
        this.spinner.hide();
      }
    );
  }

  getListInvoicesCopy() {
    this.spinner.show();
    this.invoiceService.allInvoice$(this.paginateParams, this.filterCopy).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.metaCopy = res.data.meta;
          this.listInvoicesCopy = res.data.result;
          this.spinner.hide();
        } else {
          console.log(res.code);
          this.spinner.hide();
        }
      },
      error => {
        console.log('error', error);
        this.spinner.hide();
      }
    );
  }

  sortInvoice(key, order, typeSort, type) {
    this.orderByField = key;
    this.typeSort = typeSort;
    if (type === 'copy') {
      this.filterCopy.order = key + ' ' + order;
      this.getListInvoicesCopy();
    } else {
      this.filterOriginal.order = key + ' ' + order;
      this.getListInvoicesOriginal();
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

  open(invoice, actions) {
    let p = true;
    if (actions === 'edit') {
      p = false;
    }
    const modalRef = this.modalService.open(GenerateInvoiceComponent,
    { size: 'lg', windowClass: 'modal-content-border modal-dialog-invoice', backdrop  : 'static', keyboard  : false });
    if (invoice.original) {
      modalRef.componentInstance.original = invoice;
    } else {
      modalRef.componentInstance.invoice = invoice;
    }
    modalRef.componentInstance.idsOrders = invoice.listOrders;
    modalRef.componentInstance.order = undefined;
    modalRef.componentInstance.pilot = p;
    modalRef.result.then((result) => {
          this.getListInvoicesOriginal();
    } , (reason) => {
    });
  }

  delete(invoice): void {
    this.translate.get('Delete Invoice', { value: 'Delete Invoice' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to delete the invoice? You must notify the provider this change.',
        { value: 'Are you sure you want to delete the invoice? You must notify the provider this change.' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
              this.invoiceService.delete$(invoice.idInvoice).subscribe(res => {
                if (res.code === CodeHttp.ok) {
                  this.getListInvoicesOriginal();
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

  downloadInvoice(invoice): void {
    this.spinner.show();
    this.invoiceService.downloadInvoice$(invoice.idInvoice).subscribe(res => {
      const filename = 'I-' + invoice.number + '.pdf';
      if (res.size > 0) {
        this.spinner.hide();
        saveAs(res, filename);
      } else {
        this.spinner.hide();
        console.log('error1', res);
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

  getItems(ev: any, type: String) {
    if (type === 'copy') {
      clearTimeout(this.typingTimer);
      if (ev.target.value !== '') {
        this.typingTimer = setTimeout(() => {
          this.filterCopy.general = ev.target.value;
          this.paginateParams.page = 1;
          this.validCopy = true;
          this.getListInvoicesCopy();
        }, 500);
      } else {
        this.filterCopy.general = '';
        this.paginateParams.page = 1;
        this.getListInvoicesCopy();
      }
    } else {
      clearTimeout(this.typingTimer);
      if (ev.target.value !== '') {
        this.typingTimer = setTimeout(() => {
          this.filterOriginal.general = ev.target.value;
          this.paginateParams.page = 1;
          this.validOriginal = true;
          this.getListInvoicesOriginal();
        }, 500);
      } else {
        this.filterOriginal.general = '';
        this.paginateParams.page = 1;
        this.getListInvoicesOriginal();
      }
    }
  }

  filter(type: String): void {
    if (type === 'copy') {
      this.filterCopy.status = this.selectedStatusCopy;
      this.paginateParams.page = 1;
      this.validCopy = true;
      this.getListInvoicesCopy();
    } else {
      this.filterOriginal.status = this.selectedStatusOriginal;
      this.paginateParams.page = 1;
      this.validOriginal = true;
      this.getListInvoicesOriginal();
    }
  }

  filterByDate(date, type) {
    if (type === 'copy') {
      this.filterCopy.date = date.year + '-' + (date.month < 10 ?  '0' + date.month : date.month) + '-' + date.day;
      this.paginateParams.page = 1;
      this.validCopy = true;
      this.getListInvoicesCopy();
    } else {
      this.filterOriginal.date = date.year + '-' + (date.month < 10 ?  '0' + date.month : date.month) + '-' + date.day;
      this.paginateParams.page = 1;
      this.validOriginal = true;
      this.getListInvoicesOriginal();
    }
  }

  clean(type) {
    this.getListInvoicesOriginal();
    if (type === 'original') {
      this.validOriginal = false;
      this.selectedStatusOriginal = '';
      this.fechaSelecOriginal = null;
      this.searchOriginal = '';
      this.filterOriginal = {
        date: '',
        general: '',
        status: -1,
        original: true,
        order: ''
      };
      this.getListInvoicesOriginal();
    } else {
      this.validCopy = false;
      this.selectedStatusCopy = '';
      this.fechaSelecCopy = null;
      this.searchCopy = '';
      this.filterCopy = {
        date: '',
        general: '',
        status: -1,
        original: false,
        order: ''
      };
      this.getListInvoicesCopy();
    }
    this.tamano = 'undefined';
  }

  // Paging methods
  onPrev(tap): void {
    this.paginateParams.page--;
    if (tap === 'original') {
      this.getListInvoicesOriginal();
    } else {
      this.getListInvoicesCopy();
    }
  }

  onNext(tap): void {
    this.paginateParams.page++;
    if (tap === 'original') {
      this.getListInvoicesOriginal();
    } else {
      this.getListInvoicesCopy();
    }
  }

  onFirst(tap): void {
    this.paginateParams.page = 1;
    if (tap === 'original') {
      this.getListInvoicesOriginal();
    } else {
      this.getListInvoicesCopy();
    }
  }

  onLast(tap): void {
    this.paginateParams.page = this.metaOriginal.pages;
    if (tap === 'original') {
      this.getListInvoicesOriginal();
    } else {
      this.getListInvoicesCopy();
    }
  }

  onPerPage(perPage: number, tap): void {
    this.paginateParams.page = 1;
    this.paginateParams.perPage = perPage;
    if (tap === 'original') {
      this.getListInvoicesOriginal();
    } else {
      this.getListInvoicesCopy();
    }
  }

    beforeChange(event) {
      this.paginateParams.page = 1;
      if (event.activeId === 'original') {
        this.filterOriginal = {
          date: '',
          general: '',
          status: -1,
          original: true,
          order: ''
        };
        this.getListInvoicesOriginal();
      } else {
        this.filterCopy = {
          date: '',
          general: '',
          status: -1,
          original: false,
          order: ''
        };
        this.getListInvoicesCopy();
      }
    }
}
