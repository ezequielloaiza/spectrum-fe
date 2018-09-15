import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {

  form: FormGroup;
  order: any;
  today: Date = new Date();

  constructor(public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderClientService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService) { }

    ngOnInit() {
      console.log('order:', this.order);
      this.initializeForm();
    }

    initializeForm() {
      this.form = this.formBuilder.group({
      });
    }

    close() {
      this.modalReference.close();
    }

    generateInvoice() {
    /*this.orderService.generateInvoice$(order).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.getListOrders();
        this.translate.get('Successfully Generated', { value: 'Successfully Generated' }).subscribe((res1: string) => {
          this.notification.success('', res1);
        });
      } else {
        console.log(res.code);
      }
    }, error => {
      console.log('error', error);
    });*/
    }

}
