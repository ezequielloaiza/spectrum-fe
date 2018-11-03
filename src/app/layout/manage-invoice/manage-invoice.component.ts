import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { InvoiceService } from '../../shared/services/invoiceSupplier/invoiceSupplier.service';
import { UserStorageService } from '../../http/user-storage.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { GenerateInvoiceComponent } from '../manage-customer-orders/generate-invoice/generate-invoice.component';
import { OrderService } from '../../shared/services';
import { saveAs } from 'file-saver';

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
  listInvoices: Array<any> = new Array;
  listInvoicesAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 5;
  order: any;
  constructor(private orderService: OrderService,
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userStorageService: UserStorageService,
    private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.getListInvoices();
    this.advancedPagination = 1;
  }
  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listInvoices = this.listInvoicesAux.slice(startItem, endItem);
  }

  getListInvoices(): void {
    this.invoiceService.allInvoiceByStatus$(1).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.listInvoices = res.data;
        } else {
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
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
			this.typeSort ++;
			if (this.typeSort > 2) {
				this.typeSort = 0;
				this.orderByField = 'number';
			 	key = 'number';
        this.reverseSort = true;
        this.getListInvoices();
			}
		}
    let invoicesSort = this.listInvoicesAux.sort(function(a, b) {
      let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.listInvoicesAux = invoicesSort;
		if (this.reverseSort) {
			this.listInvoicesAux = invoicesSort.reverse();
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
    const modalRef = this.modalService.open(GenerateInvoiceComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.invoice = invoice;
    modalRef.componentInstance.order = invoice.order;
    modalRef.componentInstance.pilot = true;
    modalRef.result.then((result) => {
          this.getListInvoices();
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

  downloadInvoice(invoice): void {
    this.invoiceService.downloadInvoice$(invoice.number).subscribe(res => {
      const filename = 'I-' + invoice.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }
}
