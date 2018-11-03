import { Component, OnInit, ViewChild, QueryList, AfterViewInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Role } from '../../shared/enum/role.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { WarrantyService } from '../../shared/services/warranty/warranty.service';
import { OrderService } from '../../shared/services/order/order.service';
import * as _ from 'lodash';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})

export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) charts: QueryList<BaseChartDirective>;
  // chart: Array<any> = [];
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  warrantiesList: Array<any> = new Array;
  user: any;
  orders = 0;
  warranties = 0;
  warrantiesS: any;
  ordersS: any;
  orderPend: any;
  orderProc: any;
  orderReady: any;
  orderShipped: any;

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

  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
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
              private warrantyService: WarrantyService) {
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
    this.getOrdersPendings();
    this.getWarrantiesPendings();
    this.getCountOrders();
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  getOrdersPendings(): void {
    if (this.user.role.idRole === 3) {
      this.orderService.allOrderByUserIdAndStatus$(this.user.userResponse.idUser, 0).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.orders = res.data.length;
          this.ordersS = this.orders < 10 ? '0' + this.orders.toString() : this.orders.toString();
        }
      });
    } else if (this.user.role.idRole === 2) {
      this.orderService.findOrdersClientBySeller$(0).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.orders = res.data.length;
          this.ordersS = this.orders < 10 ? '0' + this.orders.toString() : this.orders.toString();
        }
      });
    } else if (this.user.role.idRole === 1) {
      this.orderService.allOrderWithStatus$(0).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.orders = res.data.length;
          this.ordersS = this.orders < 10 ? '0' + this.orders.toString() : this.orders.toString();
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
        this.warrantiesS = this.warranties < 10 ? '0' + this.warranties.toString() : this.warranties.toString();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getCountOrders(): void {
    let ordersCount;
    let pendingO = this.lineChartData[0].data.slice();
    pendingO.shift();
    let processedO = this.lineChartData[1].data.slice();
    processedO.shift();
    let readyToShipO = this.lineChartData[2].data.slice();
    readyToShipO.shift();
    let shippedO = this.lineChartData[3].data.slice();
    shippedO.shift();
    this.orderService.countOrdersByMonth$(0).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        ordersCount= res.data;
        console.log("count", ordersCount);
        /*this.orderPend = ordersCount.pending;
        this.orderProc = ordersCount.processed;
        this.orderReady = ordersCount.readyToShip;
        this.orderShipped = ordersCount.shipped;*/
      }
      _.each(ordersCount.pending, function(pending) {
        console.log('pend', pending);
        pendingO.push(pending);
      });
      _.each(ordersCount.processed, function(processed) {
        console.log('processed', processed);
        processedO.push(processed);
      });
      _.each(ordersCount.readyToShip, function(readyToShip) {
        console.log('readyToS', readyToShip);
        readyToShipO.push(readyToShip);
      });
      _.each(ordersCount.shipped, function(shipped) {
        console.log('shipped', shipped);
        shippedO.push(shipped);
      });
    });
  /*
    this.lineChartData = [
      { data: pendingO, label: 'Pending Orders' },
      { data: processedO, label: 'Processed Orders' },
      { data: readyToShipO, label: 'Ready to Ship Orders' },
      { data: shippedO, label: 'Shipped Orders' }
    ];*/
    // this.charts[0].chart.update();
    let clone = JSON.parse(JSON.stringify(this.lineChartData));
    clone[0].data = pendingO;
    clone[1].data = processedO;
    clone[2].data = readyToShipO;
    clone[3].data = shippedO;
    this.lineChartData = clone;
/*
    if (this.charts[0] !== undefined) {
      // this.chart.chart.update();
      /*this.chart[0].chart.destroy();
      this.chart[0].chart = 0;

      this.chart[0].datasets = this.lineChartData;
      this.chart[0].labels = this.lineChartLabels;
      this.chart[0].ngOnInit();
      this.charts[0].ngOnDestroy();
      this.charts[0].chart = this.charts[0].getChartBuilder(this.charts[0].ctx);
    }*/

    /*this.lineChartData.push({ data: this.orderPend, label: 'Pending Orders' });
    this.lineChartData.push({ data: this.orderProc, label: 'Paid Orders' });
    this.lineChartData.push({ data: this.orderReady, label: 'Ready to Ship Orders' });
    this.lineChartData.push({ data: this.orderShipped, label: 'Shipped Orders' });*/
  }

}
