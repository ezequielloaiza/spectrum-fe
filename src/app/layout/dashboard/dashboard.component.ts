import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SageService } from '../../shared/services/sage/sage.service';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Role } from '../../shared/enum/role.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { WarrantyService } from '../../shared/services/warranty/warranty.service';
import { OrderService } from '../../shared/services/order/order.service';
import * as _ from 'lodash';
import { formatDate } from '@angular/common';
import { InvoiceClientService, InvoicePaymentService } from '../../shared/services';
import { Router } from '@angular/router';
import { StatusInvoiceClient } from '../../shared/enum/status-invoice-client.enum';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import SweetScroll from 'sweet-scroll';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})

export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  warrantiesList: Array<any> = new Array;
  invoicesList: Array<any> = new Array;
  invoicesListAux: Array<any> = new Array;
  customersList: Array<any> = new Array;
  listPayments: Array<any> = new Array;
  user: any;
  orders = 0;
  ordersToBill = 0;
  total = 0;
  warranties = 0;
  pendingPayment = 0;
  overdueCustomers = 0;
  overdueInvoices = 0;
  orderPend = 0;
  orderProc = 0;
  orderReady = 0;
  orderShipped = 0;
  porcPend = 0;
  porcProc = 0;
  porcReady = 0;
  porcShipped = 0;
  months = 6;
  locale: any;
  listSupplierUser: Array<any> = new Array;
  disabledNew = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012'
  ];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
  ];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: String = 'doughnut';

  // Radar
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ];
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: String = 'radar';

  // Pie
  public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales'
  ];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: String = 'pie';

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
  ];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: Boolean = true;

  public polarAreaChartType: String = 'polarArea';

  // lineChart
  public lineChartData: Array<any> = [
    { data: [], label: 'Pending Orders' },
    { data: [], label: 'Processed Orders' },
    { data: [], label: 'Ready to Ship Orders' },
    { data: [], label: 'Shipped Orders' }
  ];

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // pending-status
      backgroundColor: 'rgba(183, 28, 28, 0.2)',
      borderColor: 'rgba(183, 28, 28, 1)',
      pointBackgroundColor: 'rgba(183, 28, 28, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(183, 28, 28, 0.8)',
      pointHoverBorderColor: 'rgba(183, 28, 28, 0.8)'
    },
    {
      // processed-status
      backgroundColor: 'rgba(255, 111, 0, 0.2)',
      borderColor: 'rgba(255, 111, 0, 1)',
      pointBackgroundColor: 'rgba(255, 111, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(255, 111, 0, 0.8)',
      pointHoverBorderColor: 'rgba(255, 111, 0, 0.8)'
    },
    {
      // ready-to-ship
      backgroundColor: 'rgba(1, 87, 155, 0.2)',
      borderColor: 'rgba(1, 87, 155, 1)',
      pointBackgroundColor: 'rgba(1, 87, 155, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(1, 87, 155, 0.8)',
      pointHoverBorderColor: 'rgba(1, 87, 155, 0.8)'
    },
    {
      // shipped
      backgroundColor: 'rgba(27, 94, 32, 0.2)',
      borderColor: 'rgba(27, 94, 32, 1)',
      pointBackgroundColor: 'rgba(27, 94, 32, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(27, 94, 32, 0.8)',
      pointHoverBorderColor: 'rgba(27, 94, 32, 0.8)'
    }
  ];
  public lineChartLegend: Boolean = true;
  public lineChartType: String = 'line';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor(private translate: TranslateService,
              private userService: UserStorageService,
              private orderService: OrderService,
              private invoiceService: InvoiceClientService,
              private warrantyService: WarrantyService,
              private invoicePaymentService: InvoicePaymentService,
              public router: Router,
              private sage: SageService,
              private supplierService: SupplierService,
              private spinner: NgxSpinnerService) {
    this.user = JSON.parse(userService.getCurrentUser());
    this.sliders.push(
      {
        imagePath: 'assets/images/slider1.jpg',
        label: 'First slide label',
        text:
          'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        imagePath: 'assets/images/slider2.jpg',
        label: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        imagePath: 'assets/images/slider3.jpg',
        label: 'Third slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      },
      {
        imagePath: 'assets/images/slider4.jpg',
        label: 'Third slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      },
      {
        imagePath: 'assets/images/slider5.jpg',
        label: 'Third slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }

    );

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
        id: 2,
        type: 'warning',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
    );
  }

  ngOnInit() {
    this.spinner.show();
    this.getOrdersPending();
    this.getWarrantiesPendings();
    this.getCountOrders();
    this.getCountOrdersTotal();
    this.getPendingPayments();
    this.getOrdersToBill();
    if (this.user.role.idRole === 3) {
      this.getSupplierByUser(this.user.userResponse.idUser);
    }
    this.spinner.hide();
  }

  getSupplierByUser(id: any) {
    this.supplierService.findByUser$(id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listSupplierUser = res.data;
        if (this.listSupplierUser.length === 0){
          this.disabledNew = true;
        }
      }
    });
    this.getFocus();
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public loginSage() {
    this.sage.findAll$().subscribe((res) => {
      window.open(res.data,"Sage","menubar=1,resizable=1,width=650,height=680,left=350");
    })
  }

  redirectProduts(): void {
    this.router.navigate(['/products/']);
  }

  getOrdersPending() {
    if (this.user.role.idRole === 3) {
      this.orderService.allOrderByUserIdAndStatus$(this.user.userResponse.idUser, 0).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.orders = res.data.length;
        }
      });
    } else if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$(0).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.orders = res.data.length;
        }
      });
    } else if (this.user.role.idRole === 1) {
      this.orderService.allOrderWithStatus$(0).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.orders = res.data.length;
        }
      });
    }
  }

  getOrdersToBill() {
    //Admin Role
    if (this.user.role.idRole === 1) {
      this.orderService.allOrderWithStatus$(2).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.ordersToBill = res.data.length;
        }
      });
    //Seller Role
    } else if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$(2).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.ordersToBill = res.data.length;
        }
      });
    // Client Role
    } else if (this.user.role.idRole === 3) {
      this.orderService.allOrderByUserIdAndStatus$(this.user.userResponse.idUser, 2).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.ordersToBill = res.data.length;
        }
      });
    }
  }

  getWarrantiesPendings(): void {
    this.warrantyService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.warrantiesList = res.data;

        _.each(this.warrantiesList, function(warranty) {
          warranty.seller = warranty.orderProductRequest.order.user.userId;
          warranty.clientId = warranty.orderProductRequest.order.user.idUser;
        });

        // filter list by role
        if (this.user.role.idRole === Role.Seller) {
          this.warrantiesList = _.filter(this.warrantiesList, { 'seller': this.user.userResponse.idUser, status: 0 } );
        } else if (this.user.role.idRole === Role.User) {
          this.warrantiesList = _.filter(this.warrantiesList, { 'clientId': this.user.userResponse.idUser, status: 0 } );
        } else {
          this.warrantiesList = _.filter(this.warrantiesList, { status: 0 } );
        }
        this.warranties = this.warrantiesList.length;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getCountOrders(): void {
    let ordersCount;
    let clone = JSON.parse(JSON.stringify(this.lineChartData));
    this.orderService.countOrdersByMonth$(this.user.userResponse.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        ordersCount = res.data;
        clone[0].data = ordersCount.pending;
        clone[1].data = ordersCount.processed;
        clone[2].data = ordersCount.readyToShip;
        clone[3].data = ordersCount.shipped;
        this.lineChartData = clone;
        this.lineChartData = this.lineChartData.slice();
      }
    });
    this.getMonths();

  }

  getCountOrdersTotal(): void {
    let ordersCount;
    this.orderService.countOrders$(this.user.userResponse.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        ordersCount = res.data;
        this.orderPend = ordersCount.pending;
        this.orderProc = ordersCount.processed;
        this.orderReady = ordersCount.readyToShip;
        this.orderShipped = ordersCount.shipped;
        this.total = ordersCount.total;

        this.porcPend = (this.orderPend * 100) / this.total;
        this.porcProc = (this.orderProc * 100) / this.total;
        this.porcReady = (this.orderReady * 100) / this.total;
        this.porcShipped = (this.orderShipped * 100) / this.total;
      }
    });
  }

  getMonths(): void {
    for (let index = 0; index < 6; index++) {
      const today = new Date();
      const dt = new Date();
      dt.setMonth(today.getMonth() - (5 - index));
      let month = formatDate(dt, 'MMMM', 'en-US');
      this.translate
            .get(month, { value: month })
            .subscribe((res1: string) => {
              month = res1;
            });
      const labelMonth =  month + "'" + formatDate(dt, 'yyyy', 'en-US');
      this.lineChartLabels.push(labelMonth);
    }
  }

  getPendingPayments(): void {
    const status = [StatusInvoiceClient.Pending, StatusInvoiceClient.Part_Paid, StatusInvoiceClient.Overdue];
    this.invoiceService.allInvoiceByStatusIn$(this.user.userResponse.idUser, status).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          const today = new Date().toISOString();
          this.invoicesList = res.data;
          for (let i = 0, len = this.invoicesList.length; i < len; i++) {
            this.getListPayments(this.invoicesList[i].idInvoice);
          }
          this.invoicesListAux = _.filter(this.invoicesList, function(o) { return o.dueDate < today;  });
          this.customersList = _.uniqBy(this.invoicesListAux, function(o) { return o.idUser; });
          this.overdueCustomers = this.customersList.length;
          this.overdueInvoices = this.customersList.length;
        } else {
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    )
  }

  getFocus(): void {
    const scroller = new SweetScroll({
      duration: 1200,
      easing: 'easeOutExpo',
    },);
    //scroller.toTop(0);
    scroller.toElement(document.getElementById('main'));
  }

  getListPayments(invoice): void {
    this.invoicePaymentService.allPaymentsByInvoice$(invoice).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.listPayments = res.data;
          this.listPayments = _.filter(res.data, function(o) { return o.status === 0;  });
          this.pendingPayment = this.pendingPayment + _.sumBy(this.listPayments, function(o) { return o.amount; });
        } else {
          console.log(res.code);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  viewPayments() {
    this.router.navigate(['/payments'], { queryParams: { status: 0 } });
  }
}
