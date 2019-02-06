import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { OrderService } from '../../../shared/services/order/order.service';
import { ProductsRequestedService } from '../../../shared/services/productsRequested/products-requested.service';
import { ReportSalesByProductRequest } from '../../../shared/models/reportSalesByProductRequest';
import * as _ from 'lodash';
import { StatusInvoiceClient } from '../../../shared/enum/status-invoice-client.enum';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report-sales-by-product',
  templateUrl: './report-sales-by-product.component.html',
  styleUrls: ['./report-sales-by-product.component.scss']
})
export class ReportSalesByProductComponent implements OnInit {

  typeReport: any;
  typesReport = [{id: 0, name: 'All Products'},
                {id: 1, name: 'By Product'}];

  product: any;
  country: any;
  products: Array<any> = new Array;
  countries: Array<any> = new Array;
  user: any;
  valid = false;
  byProduct = false;
  beginDate: NgbDatepicker;
  endDate: NgbDatepicker;
  reportRequest: ReportSalesByProductRequest;

  constructor(public modalReference: NgbActiveModal,
              private notification: ToastrService,
              private translate: TranslateService,
              private userStorageService: UserStorageService,
              private orderService: OrderService,
              private productsRequestedService: ProductsRequestedService,
              private spinner: NgxSpinnerService) {
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.product = '';
    this.country = '';
    this.loadCountries();
  }

  close() {
    this.modalReference.close();
  }

  onSelectClient() {
    this.valid = true;
  }

  onSelectProduct() {
    this.valid = true;
  }

  onSelectionChangeTypes(type) {
    if (type.id === 0) {
      this.valid = true;
      this.byProduct = false;
      this.product = '';
      this.country = '';
    } else {
      this.product = '';
      this.country = '';
      this.valid = false;
      this.byProduct = true;
      this.loadProducts();
    }
  }

  loadCountries() {
    this.orderService.findAllCountries$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.countries = res.data;
        if (this.countries.length === 0) {
          this.translate.get('There are no orders',
          { value: 'There are no orders' }).subscribe((res1: string) => {
            this.notification.warning('', res1);
            this.byProduct = false;
            this.country = '';
          });
        }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  loadProducts() {
    this.productsRequestedService.findAllProducts$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        if (this.products.length === 0) {
          this.translate.get('There are no orders',
          { value: 'There are no orders' }).subscribe((res1: string) => {
            this.notification.warning('', res1);
            this.byProduct = true;
            this.product = '';
          });
        }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getFecha(model) {
    return new Date(model.year, model.month - 1, model.day);
  }

  generateReport() {
    this.spinner.show();
    this.reportRequest = new ReportSalesByProductRequest;
    let idProduct = 0;
    if (this.product !== '') {
      idProduct = this.product;
    }

    let idCountry = 0;
    if (this.country !== '') {
      idCountry = this.country;
    }

    this.reportRequest.idCountry = idCountry;
    this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
    this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
    this.reportRequest.idProduct = idProduct;

    this.orderService.reportSalesAllOrByProduct$(this.reportRequest).subscribe(res => {
      console.log('response', res);
      if (res == null) {
        this.translate.get('There are no records for the report',
          { value: 'There are no records for the report' }).subscribe((res1: string) => {
          this.notification.warning('', res1);
        });
        this.spinner.hide();
      } else {
        const date = new Date();
        const aux = {year: date.getUTCFullYear(), month: date.getMonth() + 1,
          day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes()};
        const filename = 'SalesReport-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
        saveAs(res, filename);
        this.spinner.hide();
        this.translate.get('Report has been generated',
          { value: 'Report has been generated' }).subscribe((res1: string) => {
            this.notification.success('', res1);
          });
      }
    }, error => {
      this.spinner.hide();
      this.translate.get('The file could not be generated',
      { value: 'The file could not be generated' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
    this.close();
  }


}
