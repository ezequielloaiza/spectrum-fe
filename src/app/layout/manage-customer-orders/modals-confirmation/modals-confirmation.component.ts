import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modals-confirmation',
  templateUrl: './modals-confirmation.component.html',
  styleUrls: ['./modals-confirmation.component.scss']
})
export class ModalsConfirmationComponent implements OnInit {

  constructor(public modalReference: NgbActiveModal,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  close() {
    this.modalReference.close();
  }

  generateOrder(order) {
    this.spinner.show();
    this.orderService.generateOrder$(order.idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe((res: string) => {
          this.notification.success('', res);
          this.spinner.hide();
          this.close();
        });
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
    });
  }
}
