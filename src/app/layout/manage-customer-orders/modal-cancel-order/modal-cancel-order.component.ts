import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-cancel-order',
  templateUrl: './modal-cancel-order.component.html',
  styleUrls: ['./modal-cancel-order.component.scss']
})
export class ModalCancelOrderComponent implements OnInit {

  reasonCancel: any;
  order: any;

  constructor(
    public modalReference: NgbActiveModal,
    private orderService: OrderService,) { }

  ngOnInit() {
  }

  close() {
    this.modalReference.close();
  }

  isValid() {
    return !!_.trim(this.reasonCancel);
  }

  cancelOrder(): void {
    this.orderService.cancelOrder$(this.order.idOrder, this.reasonCancel).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.close();
      } else {
        console.log(res.errors[0].detail);
      }
      }, error => {
        console.log('error', error);
      });
  }
}
