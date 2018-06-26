import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  listOrders: Array<any> = new Array;
  listOrdersAux: Array<any> = new Array;
	advancedPagination: number;
  itemPerPage: number = 5;
  filterStatus = [{ id:"0",name:"Pending"},
                  {id:"1", "name":"Authorized"}
                ];
  model: NgbDateStruct;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getListOrders();
    this.advancedPagination = 1;
  }

  getListOrders(): void {
    this.orderService.allOrderByUser$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
        this.listOrdersAux = this.listOrders;
      }
    });
  }

  pageChange(event) {
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.listOrders = this.listOrdersAux.slice(startItem,endItem);
	}
 
  filter(value:number):void{
   
   if (value >=0){
    console.log("stat"+value);
    this.listOrders = _.filter(this.listOrdersAux,{'status':value})
    return ;
   }
   this.listOrders = this.listOrdersAux;
  }

  filter1(value):void{
    console.log("fecha"+value);
   }

   

}
