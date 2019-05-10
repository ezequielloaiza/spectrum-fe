import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Order } from '../../../shared/models/order';
import * as _ from 'lodash';
import { ProductoimageService } from '../../../shared/services/productoimage/productoimage.service';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SalineFluoComponent } from '../../edit-order/saline-fluo/saline-fluo.component';
import { ProductRequested } from '../../../shared/models/productrequested';

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
  download = false;
  listAux: Array<ProductRequested> = new Array<ProductRequested>();

  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    public productImageService: ProductoimageService,
    private fileProductRequestedService: FileProductRequestedService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) { }

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
    this.spinner.show();
    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.order = res.data;

        if (res.data.dateSend !== null && res.data.supplier.idSupplier !== 1) {
          this.download = true;
        }
        _.each(this.order.listProductRequested, function (detailsOrder) {
          detailsOrder.productRequested.show = false;
          detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
          if (detailsOrder.productRequested.detail.length){
            detailsOrder.productRequested.detail = JSON.parse(detailsOrder.productRequested.detail);
          }
        });
        this.listDetails = this.order.listProductRequested;
        this.listDetailsAux = this.order.listProductRequested;
        this.spinner.hide();
      }
    });
  }

  downloadOrder(order) {
    this.orderService.downloadOrder$(order.number).subscribe(res => {
      const filename = order.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }

  openEdit(lista, image) {
    const modalRefSalineFluo = this.modalService.open( SalineFluoComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRefSalineFluo.componentInstance.detailEdit = lista;
    modalRefSalineFluo.componentInstance.typeEdit = 2;
    modalRefSalineFluo.componentInstance.userOrder = this.order.user;
    modalRefSalineFluo.componentInstance.image = image;
    modalRefSalineFluo.result.then((result) => {
      this.listAux.push(result);
      this.refresh(this.listAux);
    } , (reason) => {

    });
  }

  refresh(productRequested: any): void {
    let list: Array<ProductRequested> = productRequested;
     _.each(this.order.listProductRequested, function (detailsOrder) {
       _.each(list, function (item) {
         if (detailsOrder.productRequested.idProductRequested === item.idProductRequested) {
           detailsOrder.productRequested.patient = item.patient;
           detailsOrder.productRequested.price = item.price;
           detailsOrder.productRequested.quantity = item.quantity;
           detailsOrder.productRequested.observations = item.observations;
           detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
         }
       });

     });
     this.listDetails = this.order.listProductRequested;
     this.listDetailsAux = this.order.listProductRequested;
   }
}
