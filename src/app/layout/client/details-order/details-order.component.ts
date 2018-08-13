import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Order } from '../../../shared/models/order';
import * as _ from 'lodash';
import { ProductoimageService } from '../../../shared/services/productoimage/productoimage.service';
@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss']
})
export class DetailsOrderComponent implements OnInit {

  id: any;
  order: Order = new Order();
  listDetails: Array<any> = new Array;
  listDetailsAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 1;

  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    public productImageService: ProductoimageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.advancedPagination = 1;
    this.getOrder(this.id);
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listDetails = this.listDetailsAux.slice(startItem, endItem);
  }

  getOrder(idOrder): void {

    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.order = res.data;
        _.each(this.order.listProductRequested, function (detailsOrder) {
          detailsOrder.productRequested.show = false;
          detailsOrder.productRequested.detail = JSON.parse(detailsOrder.productRequested.detail);
        });
        this.listDetails = this.order.listProductRequested;
        this.listDetailsAux = this.order.listProductRequested;
      }
    });
  }
}

