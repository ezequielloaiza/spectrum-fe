import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Role } from '../../shared/enum/role.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { WarrantyService } from '../../shared/services/warranty/warranty.service';
import { OrderService } from '../../shared/services/order/order.service';
import * as _ from 'lodash';
import { formatDate } from '@angular/common';

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
  user: any;
  orders = 0;
  warranties = 0;
  warrantiesS: any;
  ordersS: any;
  orderPend: any;
  orderProc: any;
  orderReady: any;
  orderShipped: any;
  months = 6;
  locale: any;

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
    let clone = JSON.parse(JSON.stringify(this.lineChartData));
    this.orderService.countOrdersByMonth$(0, this.user.userResponse.idUser).subscribe(res => {
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

  getMonths(): void {
    for (let index = 0; index < 6; index++) {
      const today = new Date();
      const dt = new Date();
      dt.setMonth(today.getMonth() - (5 - index));
      console.log(index, formatDate(dt, 'medium', 'en-US'));
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

}
