import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Validators } from '@angular/forms';
import { OrderService, EntrustingCompanyService } from '../../../shared/services';
import { Order } from '../../../shared/models/order';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-modals-shipping',
  templateUrl: './modals-shipping.component.html',
  styleUrls: ['./modals-shipping.component.scss']
})
export class ModalsShippingComponent implements OnInit {

  form: FormGroup;
  orders: Array<Order> = new Array;
  orderModal: any;
  idStatus: any;
  companies: Array<any>;
  constructor(
    private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    public router: Router,
    private orderClientService: OrderService,
    private entrustingcompanyService: EntrustingCompanyService
  ) {}

  ngOnInit() {
    this.getEntrustingCompany();
    this.initializeForm();
  }

  formatter = (x: { description: string }) => x.description;

  initializeForm() {
    this.form = this.formBuilder.group({
      trackingNumber: [''],
      shippingPrice: [''],
      entrustingId : ['', [ Validators.required]],
      discount: ['']
    });
  }

  close(data): void {
    this.modalReference.close(data);
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

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
    const self = this;
    _.each(this.orderModal, function(_order) {
      const order: any = {};
      order.idOrder = _order.idOrder;
      order.shippingPrice = self.shippingPrice.value;
      order.trackingNumber = self.trackingNumber.value;
      order.idEntrustingCompany = self.entrustingId.value
      order.discount = self.discount.value
      self.orders.push(order);
    });
    this.orderService.saveShippingOrder$(this.orders).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          //this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: this.idStatus } });
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

  getEntrustingCompany() {
    this.entrustingcompanyService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.companies = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });

  }

  get trackingNumber() { return this.form.get('trackingNumber'); }
  get shippingPrice() { return this.form.get('shippingPrice'); }
  get entrustingId() { return this.form.get('entrustingId'); }
  get discount() { return this.form.get('discount'); }

}
