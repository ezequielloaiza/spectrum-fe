import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { QuickbooksService } from '../../../shared/services/quickbooks/quickbooks.service';

@Component({
  selector: 'app-modals-send-invoice',
  templateUrl: './modals-send-invoice.component.html',
  styleUrls: ['./modals-send-invoice.component.scss']
})
export class ModalsSendInvoiceComponent implements OnInit {

  constructor(public modalReference: NgbActiveModal,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private quickbooksService: QuickbooksService) { }

  ngOnInit() {
  }

  close() {
    this.modalReference.close();
  }

  sendInvoice(order): void {
    debugger
    /*
    this.quickbooksService.connectQuickbooks$().subscribe(res => {
      console.log(res.data);
      if (res.code === CodeHttp.ok) {
        window.open(res.data,"Quickbooks","menubar=1,resizable=1,width=650,height=680,left=350");
				//this.businessTypes = this.auxBusinessTypes.slice(0,this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  */

  this.orderService.sendInvoice$(order.idOrder).subscribe(res => {
    debugger
    if (res.code === CodeHttp.ok) {
      this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe((res: string) => {
        this.notification.success('', res);
        this.close();
      });
    } else {
      console.log(res.errors[0].detail);
    }
  }, error => {
    console.log('error', error);
    });
  }

}
