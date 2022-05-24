import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { StatusOrder } from '../../../shared/enum/status-order.enum';
import * as _ from 'lodash';
import { NgbDateAdapter, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit, OnDestroy {

  listOrders: Array<any> = new Array;
  list: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  filterStatus = [{ id: 0, name: "Pending" },
                  { id: 1, name: "Paid" }
                ];
  model: NgbDateStruct;
  valid = true;
  tamano: String;
  selectedStatus: any;
  fechaSelec: NgbDatepicker;
  user: any;
  status: any;
  navigationSubscription;
  today: Date = new Date();
  valorClient: String;
  valorCodeClient: String;
  valorProduct: String;
  paginateParams = {
    page: 1,
    perPage: 5
  };

  meta = {
    pages: 0,
    total: 0
  };

  filterOrder = {
    date: '',
    general: '',
    nameProduct: '',
    paymentStatus: -1,
    codeClient: ''
  };

  typingTimer: any;

  constructor(private orderService: OrderService,
              private userService: UserStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) {
    this.user = JSON.parse(userService.getCurrentUser());
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
        this.getListOrders();
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.status = params.status;
    });

    this.advancedPagination = 1;
    this.model = { year: 0, month: 0, day: 0 };
    this.valorClient = '';
    this.valorCodeClient = '';
    this.selectedStatus = '';
    this.tamano = 'undefined';
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getListOrders(): void {
    this.spinner.show();
    this.orderService.allOrderByUserIdAndStatus$(this.user.userResponse.idUser, this.status, this.paginateParams, this.filterOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.meta = res.data.meta;
        this.listOrders = res.data.result;
        _.each(this.listOrders, function (order) {
           _.each(order.listProductRequested, function(listDetails) {
            if (listDetails.productRequested.detail && listDetails.productRequested.detail.length > 0) {
              listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
            }
          });
        });
        this.listOrders = _.orderBy(this.listOrders, ['date'], ['desc']);
        debugger
        this.spinner.hide();
      }
    });
  }

  findByProductInOrdersManual(pR: any, value: any) {
    return pR.productRequested && pR.productRequested.additionalInformation &&
        pR.productRequested.additionalInformation.description &&
        pR.productRequested.additionalInformation.description.toLowerCase().indexOf(value.toLowerCase()) > -1;
  }

  filterByPaymentStatus() {
    this.filterOrder.paymentStatus = this.selectedStatus;
    this.paginateParams.page = 1;
    this.getListOrders();
  }

  filterByDate(date) {
    this.filterOrder.date = date.year + '-' + (date.month < 10 ?  '0' + date.month : date.month) + '-' + date.day;
    this.paginateParams.page = 1;
    this.getListOrders();
  }

  filterGeneral(event) {
    clearTimeout(this.typingTimer);
    if (event.target.value !== '') {
      this.typingTimer = setTimeout(() => {
        this.filterOrder.general = event.target.value;
        this.paginateParams.page = 1;
        this.getListOrders();
      }, 500);
    } else {
      this.filterOrder.general = '';
      this.paginateParams.page = 1;
      this.getListOrders();
    }
  }

  filterByProduct(event) {
    clearTimeout(this.typingTimer);
    if (event.target.value !== '') {
      this.typingTimer = setTimeout(() => {
        this.filterOrder.nameProduct = event.target.value;
        this.paginateParams.page = 1;
        this.getListOrders();
      }, 500);
    } else {
      this.filterOrder.nameProduct = '';
      this.paginateParams.page = 1;
      this.getListOrders();
    }
  }

  filterCodeClient(event) {
    clearTimeout(this.typingTimer);
    if (event.target.value !== '') {
      this.typingTimer = setTimeout(() => {
        this.filterOrder.codeClient = event.target.value;
        this.paginateParams.page = 1;
        this.getListOrders();
      }, 500);
    } else {
      this.filterOrder.general = '';
      this.paginateParams.page = 1;
      this.getListOrders();
    }
  }

  clean() {
    this.getListOrders();
    this.advancedPagination = 1;
    this.router.navigate(['/order-list-client'], { queryParams: { status: this.status } });
    this.valid = false;
    this.tamano = 'undefined';
    this.selectedStatus = '';
    this.fechaSelec = null;
    this.valorClient = '';
    this.valorCodeClient = '';
    this.valorProduct = '';
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  downloadOrder() {
    this.spinner.show();
    this.orderService.reportByRoleAndStatus$(this.user.userResponse.idUser, this.user.role.idRole, this.status).subscribe(res => {
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
      const filename = 'Orders-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
      saveAs(res, filename);
      this.spinner.hide();
    }, error => {
      console.log('error', error);
      this.spinner.hide();
      this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
    });
  }

  getReferenceCopy(order) {
    let reference = null;
    if (order.type) {
      const type = this.translate.instant(order.type);
      if (order.originReference) {
        return reference = ' (' + type + ': ' +  '#' + order.originReference + ') ';
      }
      reference = ' (' + type + ') ';
    }
    return reference;
  }

  dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  isValidDate(order) {
    let currentDate = new Date();
    let sendDate = new Date(order.dateSend);

    switch (order.supplier.idSupplier) {
      case 1: // Markennovy
        return true; // free for client conversation.

      case 2: // Europa
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 3: // Elipsys
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      case 4: // Euclid
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 6: // Lentes blandos de vendaje
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      case 9: // SynergEyes
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 10: // Orion Vision Group
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      default:
        return true;
    }
  }

  generateCopyOrder(order, type) {
    this.spinner.show();
    this.orderService.generateCopyOrder$(order.idOrder, type).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        var message = type === 'duplicate' ? "Order duplicate successfully" : "Order warranty generated successfully"
        this.translate.get(message, {value: message}).subscribe(( res: string) => {
          this.notification.success('', res);
        });
        this.status = 0;
        this.clean();
      } else {
        this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe((res: string) => {
          this.notification.error('', res);
          this.spinner.hide();
          console.log(res);
        });
      }
    }, error => {
      console.log('error', error);
    });
  }

  // Paging methods
  onPrev(): void {
    this.paginateParams.page--;
    this.getListOrders();
  }

  onNext(): void {
    this.paginateParams.page++;
    this.getListOrders();
  }

  onFirst(): void {
    this.paginateParams.page = 1;
    this.getListOrders();
  }

  onLast(): void {
    this.paginateParams.page = this.meta.pages;
    this.getListOrders();
  }

  onPerPage(perPage: number): void {
    this.paginateParams.page = 1;
    this.paginateParams.perPage = perPage;
    this.getListOrders();
  }
}
