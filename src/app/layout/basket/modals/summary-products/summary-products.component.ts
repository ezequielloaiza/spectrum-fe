import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Buy } from '../../../../shared/models/buy';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { OrderService } from '../../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-summary-products',
  templateUrl: './summary-products.component.html',
  styleUrls: ['./summary-products.component.scss']
})
export class SummaryProductsComponent implements OnInit {

  subtotal: any;
  total: any;
  buyBasket: Buy;
  quantity: any;
  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private orderService: OrderService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  close() {
    this.modalReference.close(1);
  }

  generateOrder() {
    this.spinner.show();
    this.orderService.saveOrder$(this.buyBasket).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.close();
        this.spinner.hide();
        this.translate.get('Order generated successfully', {value: 'Order generated successfully'}).subscribe(( res: string) => {
          this.notification.success('', res);
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
