import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Validators } from '@angular/forms';
import { OrderService } from '../../../shared/services';
import { Order } from '../../../shared/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modals-shipping',
  templateUrl: './modals-shipping.component.html',
  styleUrls: ['./modals-shipping.component.scss']
})
export class ModalsShippingComponent implements OnInit {

  form: FormGroup;
  order: Order = new Order();
  orderModal: any;
  idStatus: any;
  constructor(
    private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    public router: Router,
    private orderClientService: OrderService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  formatter = (x: { description: string }) => x.description;

  initializeForm() {
    this.form = this.formBuilder.group({
      trackingNumber: ['', [Validators.required]],
      shippingPrice: ['', [Validators.required]]

    });
  }

  close(data): void {
    this.modalReference.close(data);
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }


  get trackingNumber() { return this.form.get('trackingNumber'); }
  get shippingPrice() { return this.form.get('shippingPrice'); }


  save(): void {
    this.orderClientService.changeStatus$(this.orderModal.idOrder, this.idStatus).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.saveShipping();
      } else {
        console.log(res.errors[0].detail);
      }
      }, error => {
        console.log('error', error);
      });
  }

  saveShipping() {
    this.order.idOrder = this.orderModal.idOrder;
    this.order.shippingPrice = this.form.get('shippingPrice').value;
    this.order.trackingNumber = this.form.get('trackingNumber').value;
    this.orderService.updateOrder$(this.order).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: this.idStatus } });
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
            .subscribe((rest: string) => {
              this.notification.success('', rest);
            });
          this.close(res);
        } else {
          console.log(res.errors[0].detail);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
