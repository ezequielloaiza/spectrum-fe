import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss']
})
export class DetailsOrderComponent implements OnInit {
  
  id:any;
  ordenes:any;
  listDetails=[100,200,300];
  listDetailsAux=[100,200,300];
  advancedPagination: number;
  itemPerPage: number = 1;
  constructor(private route: ActivatedRoute,
              private orderService: OrderService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id'+this.id);
    this.advancedPagination = 1;
    this.getOrder(this.id);
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.listDetails = this.listDetailsAux.slice(startItem, endItem);
  }

  getOrder(idOrder): void {
    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.ordenes = res.data;
        console.log('tamano'+this.ordenes.number);
      }
    });
  }

}
