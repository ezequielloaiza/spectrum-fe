import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { GenerateInvoiceComponent } from '../../manage-customer-orders/generate-invoice/generate-invoice.component';
import { OrderService, InvoiceClientService, InvoicePaymentService } from '../../../shared/services';
import { saveAs } from 'file-saver';
import { Router, ActivatedRoute } from '@angular/router';
import { AddPaymentModalComponent } from './modals/add-payment-modal/add-payment-modal.component';
import { ChangeStatusComponent } from './modals/change-status/change-status.component';

@Component({
  selector: 'app-payments-made',
  templateUrl: './payments-made.component.html',
  styleUrls: ['./payments-made.component.scss']
})
export class PaymentsMadeComponent implements OnInit {
  orderByField = 'number';
  reverseSort = true;
  typeSort = 0;
  invoice: any;
  listPayments: Array<any> = new Array;
  listPaymentsAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 5;
  order: any;

  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceClientService,
    private invoicePaymentService: InvoicePaymentService,
    public router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('idInvoice');
    this.getInvoice(id);
    console.log(this.invoice);
    this.getListPayments(id);
    this.advancedPagination = 1;
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listPayments = this.listPaymentsAux.slice(startItem, endItem);
  }

  getInvoice(id): void {
    this.invoiceService.findInvoice$(id).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.invoice = res.data;
        } else {
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  getStatus(id) {
    switch (id) {
      case 0:
        return 'Unpaid';
      case 1:
        return 'Part paid';
      case 2:
        return 'Paid';
    }
  }

  getListPayments(invoice): void {
    this.invoicePaymentService.allPaymentsByInvoice$(invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.listPayments = res.data;
          console.log(res.data);
        } else {
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  openModal(invoice): void {
    const aux = invoice;
    const modalRef = this.modalService.open(AddPaymentModalComponent, { size: 'lg' });
    modalRef.componentInstance.invoice = invoice;
    modalRef.result.then((result) => {
      this.ngOnInit();
    }, (reason) => {
    });
  }

  changeStatus(payment) {
    const modalRef = this.modalService.open(ChangeStatusComponent);
    modalRef.componentInstance.payment = payment;
    modalRef.result.then((result) => {
      const id = this.route.snapshot.paramMap.get('idInvoice');

      this.getListPayments(id);
      this.ngOnInit();
    }, (reason) => {
    });
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
        this.getListPayments(this.invoice.idInvoiceClient);
      }
    }
    let invoicesSort = this.listPaymentsAux.sort(function (a, b) {
      let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    this.listPaymentsAux = invoicesSort;
    if (this.reverseSort) {
      this.listPaymentsAux = invoicesSort.reverse();
    }
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
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
  open(invoice) {
    this.router.navigate(['/payments/' + invoice.idInvoice + '/paymentsMade']);
  }

  delete(invoice): void {
    this.translate.get('Delete Invoice', { value: 'Delete Invoice' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to delete the invoice? You must notify the provider this change.',
        { value: 'Are you sure you want to delete the invoice? You must notify the provider this change.' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.invoiceService.delete$(invoice.idInvoice).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.getListPayments(this.invoice.idInvoiceClient);
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
    this.invoiceService.downloadInvoice$(invoice.number).subscribe(res => {
      const filename = 'I-' + invoice.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }
}
