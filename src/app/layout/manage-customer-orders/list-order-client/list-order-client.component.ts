import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { UserStorageService } from '../../../http/user-storage.service';
import { ModalsStatusComponent } from '../modals-status/modals-status.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { GenerateInvoiceComponent } from '../generate-invoice/generate-invoice.component';
import { InvoiceClientService } from '../../../shared/services/invoiceClient/invoice-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { InvoiceClient } from '../../../shared/models/invoiceclient';
import { InvoiceSupplier } from '../../../shared/models/invoice-supplier';
import { ModalsInvoiceComponent } from '../modals-invoice/modals-invoice.component';
import { ModalsConfirmationComponent } from '../modals-confirmation/modals-confirmation.component';
import { ModalsShippingComponent } from '../modals-shipping/modals-shipping.component';
import { ModalResendOrdersComponent } from '../modals-resend-orders/modal-resend-orders.component';


@Component({
  selector: 'app-list-order-client',
  templateUrl: './list-order-client.component.html',
  styleUrls: ['./list-order-client.component.scss']
})
export class ListOrderClientComponent implements OnInit, OnDestroy {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
  listOrdersPending: Array<any> = new Array;
  listOrdersSelected: Array<any> = new Array;
  filterStatus = [{ id: 0, name: 'Pending' },
  { id: 1, name: 'Paid' }
  ];
  model: NgbDateStruct;
  valid1 = false;
  user: any;
  valorClient: string;
  valorCodeClient: string;
  valorProduct: string;
  mostrarStatus = false;
  fechaSelecOrd: NgbDatepicker;
  selectedStatus: any;
  status: any;
  auxStatus: any;
  navigationSubscription;
  valid = false;
  listAux = [];
  selectedAll: any;
  invoice: InvoiceClient = new InvoiceClient();
  invoiceSupplier: InvoiceSupplier = new InvoiceSupplier();
  today: Date = new Date();
  listInvoiceClient = [];
  listInvoiceSupplier = [];
  valido = true;
  validoProvider = true;
  connected: boolean;
  ordersMap = {};
  paginateParams: any;
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
    private modalService: NgbModal,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private invoiceClientService: InvoiceClientService,
    private route: ActivatedRoute,
    private router: Router,
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
    this.connected = this.userService.getIsIntegratedQBO();
    this.route.queryParams.subscribe(params => {
      this.status = params.status;
      this.listOrdersSelected = [];
      this.listOrdersSelected.length > 1 ? this.valid = true : this.valid = false;
    });
    this.selectedStatus = '';
    this.valorClient = '';
    this.valorProduct = '';
    this.valorCodeClient = '';
    this.model = { year: 0, month: 0, day: 0 };
    this.listAux = [];
    this.selectedAll = false;
    this.paginateParams = {
      page: 1,
      perPage: 5
    };
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getListOrders(): void {
    if (this.status === undefined) {
      this.status = this.auxStatus;
    }
    this.showFilter();
    this.spinner.show();
    if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$(this.status, this.paginateParams, this.filterOrder).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.meta = res.data.meta;
          let invoiceSupplierIds = [];
          if (res.data.result.length && (this.status == 2 || this.status == 3)) {
            invoiceSupplierIds = res.data.result[0].invoiceSupplierIds;
            if (invoiceSupplierIds.length) {
              _.each(invoiceSupplierIds, function(id) {
                const orders: any[] = _.filter(res.data.result, { 'invoiceSupplierId': id });
                if (orders.length) {
                  const index = _.findIndex(res.data.result, {'idOrder': orders[0].idOrder});
                  res.data.result[index].listOrderGroups = orders;
                  const patients = [];
                  _.each(orders, function(o, j) {
                    patients.push(_.uniq(_.map(o.listProductRequested, 'productRequested.patient')));
                    if (j !== 0) {
                      res.data.result[index].listProductRequested = _.concat(res.data.result[index].listProductRequested ,o.listProductRequested);
                      const i = _.findIndex(res.data.result, {'idOrder': o.idOrder});
                      res.data.result.splice(i, 1);
                    }
                  });
                  res.data.result[index].patients = patients;
                }
              });
            }
          }


          this.listOrders = res.data.result;
          this.listOrdersAux = res.data.result;
          _.each(this.listOrders, function (order) {
              order.generate = false;
            _.each(order.listProductRequested, function (listDetails) {
              if (listDetails.productRequested.detail.length > 0){
                listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
              }
            });
          });
          this.listOrders = _.orderBy(this.listOrders, ['date'], ['desc']);
          this.listOrdersAux = _.orderBy(this.listOrdersAux, ['date'], ['desc']);
        }
        this.spinner.hide();
      });
    } else if (this.user.role.idRole === 1) {
      this.orderService.allOrderWithStatus$(this.status, this.paginateParams, this.filterOrder).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.meta = res.data.meta;
          let invoiceSupplierIds = [];
          if (res.data.result.length && (this.status === 2 || this.status === 3)) {
            invoiceSupplierIds = res.data.result[0].invoiceSupplierIds;
            if (invoiceSupplierIds.length) {
              _.each(invoiceSupplierIds, function(id) {
                const orders: any[] = _.filter(res.data.result, { 'invoiceSupplierId': id });
                if (orders.length) {
                  const index = _.findIndex(res.data.result, {'idOrder': orders[0].idOrder});
                  res.data.result[index].listOrderGroups = orders;
                  const patients = [];
                  _.each(orders, function(o, j) {
                    patients.push(_.uniq(_.map(o.listProductRequested, 'productRequested.patient')));
                    if (j !== 0) {
                      res.data.result[index].listProductRequested = _.concat(res.data.result[index].listProductRequested ,o.listProductRequested);
                      const i = _.findIndex(res.data.result, {'idOrder': o.idOrder});
                      res.data.result.splice(i, 1);
                    }
                  });
                  res.data.result[index].patients = patients;
                }
              });
            }
          }
          this.mostrarStatus = true;
          this.listOrders = res.data.result;
          this.listOrdersAux = res.data.result;
          this.listOrders.forEach(order => {
              if (order.status !== 0 ) {
                order.generate = false;
              } else {
                if (order.dateSend !== null) {
                  order.generate = false;
                } else {
                  order.generate = true;
                }
              }
              const include = this.listOrdersSelected.find(o => o.idOrder === order.idOrder);
              if (include) {
                order.checked = true;
              }
            _.each(order.listProductRequested, function (listDetails) {
              if (listDetails.productRequested.detail && listDetails.productRequested.detail.length > 0) {
                listDetails.productRequested.detail = JSON.parse(listDetails.productRequested.detail);
              }
            });
          });
          this.pendingOrdersGenerate();
          this.listOrders = _.orderBy(this.listOrders, ['date'], ['desc']);
          this.listOrdersAux = _.orderBy(this.listOrdersAux, ['date'], ['desc']);
          this.spinner.hide();
        }
      });
    }
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

  findByOrdersGrouped(order:any, value:any) {
    return _.some(order.listOrderGroups, function(order: any) {
      return ((order.number && order.number.toLowerCase().indexOf(value.toLowerCase()) > -1) ||
        (order.supplier.companyName.toLowerCase().indexOf(value.toLowerCase()) > -1)) ||
        (order.listProductRequested.find((pR) => {
          return (pR.productRequested.patient !== null && pR.productRequested.patient.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }));
    });
  }

  findByOrdersGroupedOrManualByProduct(order: any, value: any) {
    return (_.some(order.listProductRequested, function(pR: any) {
      return pR.productRequested && pR.productRequested.additionalInformation &&
        pR.productRequested.additionalInformation.description &&
        pR.productRequested.additionalInformation.description.toLowerCase().indexOf(value.toLowerCase()) > -1;
    }) || _.some(order.listOrderGroups, function(order: any) {
      return (order.listProductRequested.find((pR) => {
          return (pR.productRequested.product && pR.productRequested.product.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }));
    }));
  }

  getFecha(): String {
    let ano;
    let mes;
    let dia;
    let fecha: String;
    // Ano
    ano = this.model.year;
    // Mes
    this.model.month < 10 ? mes = '0' + this.model.month : mes = this.model.month;
    // Dia
    this.model.day < 10 ? dia = '0' + this.model.day : dia = this.model.day;
    // FechaFiltro
    fecha = ano + '-' + mes + '-' + dia;
    return fecha;
  }

  clean() {
    this.auxStatus = this.status;
    this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: this.status } });
    this.valid1 = false;
    this.selectedStatus = '';
    this.fechaSelecOrd = null;
    this.valorClient = '';
    this.valorProduct = '';
    this.valorCodeClient = '';
    this.filterOrder = {
      date: '',
      general: '',
      nameProduct: '',
      paymentStatus: -1,
      codeClient: ''
    };
    this.getListOrders();
  }

  showFilter() {
    debugger
    if (this.selectedStatus !== '' || (this.fechaSelecOrd !== null && this.fechaSelecOrd !== undefined) ||
        this.valorClient !== '' || this.valorProduct !== '' || this.valorCodeClient !== '') {
          this.valid1 = true;
        }
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  open(order) {
   // this.invoiceClientService.generateInvoiceClient$(order.idOrder).subscribe();
    const modalRef = this.modalService.open(ModalsStatusComponent ,
    {backdrop  : 'static', keyboard  : false});
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
      this.getListOrders();
    }, (reason) => {
    });
  }

  openModalShipping(orders): void {
    const modalRef = this.modalService.open(ModalsShippingComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.orderModal = orders;
    modalRef.componentInstance.idStatus = 3;
    modalRef.result.then((result) => {
      this.spinner.show();
      this.individualInvoice(orders);
    } , (reason) => {
    });
  }

  generateInvoice(order) {
    const pilot = order.invoiceSupplier === null ? false : true;
    const modalRef = this.modalService.open(GenerateInvoiceComponent,
      { windowClass: 'modal-content-border modal-dialog-invoice', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.order = order;
    modalRef.componentInstance.pilot = pilot;
    if (pilot === true) {
      modalRef.componentInstance.invoice = order.invoiceSupplier;
      modalRef.componentInstance.original = order.invoiceSupplier;
    }
    modalRef.result.then((result) => {
      this.router.navigate(['/invoice']);
    }, (reason) => {
    });
  }

  cancel(order): void {
    this.translate.get('Cancel Order', { value: 'Cancel Order' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to cancel the order? You must notify the provider this change.',
        { value: 'Are you sure you want to cancel the order? You must notify the provider this change.' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.orderService.changeStatus$(order.idOrder, 4).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.getListOrders();
                this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res1: string) => {
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

  downloadOrder() {
    if (this.listOrders.length > 0) {
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
    } else {
      this.translate.get('There are no orders to export', { value: 'There are no orders to export' }).subscribe((res: string) => {
        this.notification.warning('', res);
      });
    }
  }

  onSelection(id, checked, order) {
    const index = this.listOrdersSelected.findIndex(o => o.idOrder === order.idOrder);
    if (index !== -1) {
      if (checked) {
        this.listOrdersSelected = this.listOrdersSelected.filter(o => o.idOrder !== order.idOrder);
      }
    } else {
      this.listOrdersSelected.push(order);
    }

    this.listOrdersSelected.length > 1 ? this.valid = true : this.valid = false;
    this.listAux.length === this.listOrders.length ? this.selectedAll = true : this.selectedAll = false;
  }

  onSelectionAll(event) {
    let arrayAux = this.listAux;
    const check = event.target.checked;
    _.each(this.listOrders, function(item) {
      item.checked = check;
      let existe: boolean;
      const id = item.idOrder;
      existe = _.includes(arrayAux, id);
      if (existe) {
        if (!check) {
          _.remove(arrayAux,  function (n)  {
            return n === id;
          });
        }
      } else {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.selectedAll = check;
    this.listAux = arrayAux;
    this.listAux.length > 1 ? this.valid = true : this.valid = false;

  }

  billCustomers() {
    this.checkClient();
    if (this.valido) {
      this.verifyInvoice();
      debugger
      if (this.listInvoiceClient.length > 0) {
        const modalRef = this.modalService.open(ModalsInvoiceComponent,
          { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
          modalRef.componentInstance.list = this.listInvoiceClient;
          modalRef.componentInstance.type = 1;
          modalRef.result.then((result) => {
            this.getListOrders();
          }, (reason) => {
        });
      } else {
      this.translate.get('Confirm invoice generation', {value: 'Confirm invoice generation'}).subscribe((title: string) => {
        this.translate.get('Are you sure want to bill all selected orders to customer?',
        {value: 'Are you sure want to bill all selected orders to customer?'}).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            const self = this;
            let orders = new Array;
            _.each(this.listOrdersSelected, function(order) {
               if (order) {
                order.listOrderGroups ? orders = _.concat(orders, order.listOrderGroups) : orders.push(order);
               }
            });
            this.openModalShipping(orders);
            }, () => {});
          });
        });
      }
    } else {
      this.translate.get('All orders must belong to the same customer', { value: 'All orders must belong to the same customer' })
            .subscribe((res1: string) => {
              this.notification.warning('', res1);
            });
    }
  }

  generateInvoiceClient() {
    this.invoice.date = this.today;
    const ship = 0;
    this.invoice.shipping = ship;
    this.invoice.listOrders = this.listAux;
    this.spinner.show();
    this.orderService.generateInvoiceClient$(this.invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate
            .get('Successfully Generated', { value: 'Successfully Generated' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
          this.reloadingAll();
        } else {
          this.spinner.hide();
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  billProviders() {
    this.checkClient();
    if (this.valido) {
      this.checkProvider();
      if (this.validoProvider) {
        this.verifyInvoice();
        if (this.listInvoiceSupplier.length > 0) {
          const modalRef = this.modalService.open(ModalsInvoiceComponent,
            { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
            modalRef.componentInstance.list = this.listInvoiceSupplier;
            modalRef.componentInstance.type = 2;
            modalRef.result.then((result) => {
              this.getListOrders();
            }, (reason) => {
          });
        } else {
          this.generateInvoiceSupplier();
        }
      } else {
        this.translate.get('All orders must belong to the same provider', { value: 'All orders must belong to the same provider' })
              .subscribe((res1: string) => {
                this.notification.warning('', res1);
              });
        }
    } else {
        this.translate.get('All orders must belong to the same customer', { value: 'All orders must belong to the same customer' })
              .subscribe((res1: string) => {
                this.notification.warning('', res1);
              });
    }
  }

  generateInvoiceSupplier() {
    const order = this.listOrdersSelected[0];
    this.listOrdersSelected.forEach(o => {
      if (order.idOrder !== o.idOrder) {
        o.listProductRequested.forEach(productRequested => {
          order.listProductRequested.push(productRequested);
        });
        order.total += o.total;
        order.subtotal += o.subtotal;
        order.shipping += o.shipping;
      }
    });

    order.ids = this.listOrdersSelected.map(o => o.idOrder);
    this.generateInvoice(order);
  }

  initialize() {
    _.each(this.listOrders, function(item) {
      item.checked = false;
    });
  }

  invoiceClient(order) {
    if (order.invoiceClient != null) {
      this.translate.get('The invoice was already generated to the client',
       { value: 'The invoice was already generated to the client' }).subscribe((res: string) => {
        this.notification.warning('', res);
      });
    } else {
    this.translate.get('Confirm invoice generation', {value: 'Confirm invoice generation'}).subscribe((title: string) => {
      this.translate.get('Are you sure want to bill selected order to customer?',
       {value: 'Are you sure want to bill selected order to customer?'}).subscribe((msg: string) => {
         this.alertify.confirm(title, msg, () => {
          let orders = new Array;
          if (order.listOrderGroups) {
            orders = _.concat(orders, order.listOrderGroups);
          } else {
            orders.push(order)
          }
          this.openModalShipping(orders);
          }, () => {});
        });
      });
    }
  }

  individualInvoice(orders) {
    this.invoice.date = this.today;
    const ship = 0;
    this.invoice.shipping = ship;
    const list = [];
    _.each(orders, function(order) {
      list.push(order.idOrder);
    });

    this.invoice.listOrders = list;
    this.orderService.generateInvoiceClient$(this.invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate
            .get('Successfully Generated', { value: 'Successfully Generated' })
            .subscribe((res1: string) => {
              this.notification.success('', res1);
            });
          this.reloadingAll();
          this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 3 } });
        } else {
          this.spinner.hide();
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  reloadingAll() {
    this.valid = false;
    this.listAux = [];
    this.selectedAll = false;
    this.initialize();
    this.getListOrders();
    this.spinner.hide();
  }

  verifyInvoice() {
    let listInvoiceClient = [];
    const listInvoiceSupplier = [];

    this.listOrdersSelected.forEach(o => {
      if ( o.invoiceSupplier != null ) {
        listInvoiceSupplier.push(o);
       }

       if ( o.invoiceClient != null ) {
        o.listOrderGroups ? listInvoiceClient = _.concat(listInvoiceClient, o.listOrderGroups) : listInvoiceClient.push(o);
       }
    });

    this.listInvoiceClient = listInvoiceClient;
    this.listInvoiceSupplier = listInvoiceSupplier;

  }


  checkClient() {
    let valido = true;
    const keys = {};
    this.listOrdersSelected.forEach(o => {
      keys[o.user.idUser] = o.idOrder;
    });

    if (Object.keys(keys).length > 1) {
      valido = false;
    }
    this.valido = valido;
  }

  checkProvider() {
    let validoProvider = true;
    const keys = {};
    this.listOrdersSelected.forEach(o => {
      keys[o.supplier.idSupplier] = o.supplier.spectrum;
    });

    if (Object.keys(keys).length > 1) {
      Object.keys(keys).forEach((k) => {
        if (!keys[k]) {
          validoProvider = false;
          return validoProvider;
        }
      });
    }

    this.validoProvider = validoProvider;
  }

  generateOrder(order): void {
    const modalRef = this.modalService.open(ModalsConfirmationComponent ,
    {backdrop  : 'static', keyboard  : false});
      modalRef.componentInstance.order = order;
      modalRef.result.then((result) => {
        } , (reason) => {
          this.ngOnInit();
          this.selectedAll = false;
          this.initialize();
    });
  }

  processMultipleOrders() {
    let self = this;
  _.each(this.listAux, function(item, index) {
    let order = _.find(self.listOrdersAux, { 'idOrder': item });
        self.generateOrder(order);
    });
  }

  onSelectionPending(id, checked) {
    let existe: boolean;
    existe = _.includes(this.listAux,  id);
    if (existe) {
      if (!checked) {
        _.remove(this.listAux,  function (n)  {
          return  n  ===  id;
        });
      }
    } else {
      this.listAux = _.concat(this.listAux, id);
    }
    this.selectedAll = false;
    this.listAux.length === this.listOrdersPending.length ? this.selectedAll = true : this.selectedAll = false;
  }

  onSelectionAllPending(event) {
    let arrayAux = this.listAux;
    const check = event.target.checked;
    _.each(this.listOrdersPending, function(item) {
      item.checked = check;
      let existe: boolean;
      const id = item.idOrder;
      existe = _.includes(arrayAux, id);
      if (existe) {
        if (!check) {
          _.remove(arrayAux,  function (n)  {
            return n === id;
          });
        }
      } else {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.selectedAll = check;
    this.listAux = arrayAux;
  }

  pendingOrdersGenerate() {
    this.listOrdersPending =_.filter(this.listOrders, {'generate': true});
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
      case 1: //Markennovy
        return true; // free for client conversation.

      case 2: //Europa
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 3: //Elipsys
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      case 4: //Euclid
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 6: //Lentes blandos de vendaje
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      case 9: //SynergEyes
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 100;

      case 10: //Orion Vision Group
        return currentDate > sendDate && this.dateDiffInDays(sendDate, currentDate) <= 70;

      default:
        return true;
    }
  }

  generateCopyOrder(order, type) {
    this.spinner.show();
    this.orderService.generateCopyOrder$(order.idOrder, type).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        var message = type === 'duplicate' ? 'Order duplicate successfully' : 'Order warranty generated successfully'
        this.translate.get(message, {value: message}).subscribe(( res: string) => {
          this.notification.success('', res);
        });

        this.reloadingAll();
        this.spinner.show();
        setTimeout(() => {
          this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
          this.spinner.hide();
        }, 1000);
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

  resendOrder(order) {
    const modalRef = this.modalService.open(ModalResendOrdersComponent,
      { windowClass: 'modal-content-border', backdrop: 'static', keyboard: false, size: 'sm' });
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
    }, (reason) => {//dismiss or cancel
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
