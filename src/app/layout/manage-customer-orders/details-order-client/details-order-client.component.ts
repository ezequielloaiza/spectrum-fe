import { Component, OnInit} from '@angular/core';
import { Order } from '../../../shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { ProductoimageService } from '../../../shared/services/productoimage/productoimage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsConfirmationComponent } from '../modals-confirmation/modals-confirmation.component';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Product } from '../../../shared/models/product';
import { QuickbooksService } from '../../../shared/services/quickbooks/quickbooks.service';
import { ModalsSendInvoiceComponent } from '../modals-send-invoice/modals-send-invoice.component';

@Component({
  selector: 'app-details-order-client',
  templateUrl: './details-order-client.component.html',
  styleUrls: ['./details-order-client.component.scss']
})
export class DetailsOrderClientComponent implements OnInit {

  id: any;
  order: Order = new Order();
  listDetails: Array<any> = new Array;
  listDetailsAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 1;
  generar = false;

  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    public productImageService: ProductoimageService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private modalService: NgbModal) { }

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
        if (this.order.status !== 2 ) {
           this.generar = true;
        }
        _.each(this.order.listProductRequested, function (detailsOrder) {
          detailsOrder.productRequested.detail = JSON.parse(detailsOrder.productRequested.detail);
        });
        this.listDetails = this.order.listProductRequested;
        this.listDetailsAux = this.order.listProductRequested;
      }
    });
  }

  generateOrder(order): void {
  const modalRef = this.modalService.open(ModalsConfirmationComponent);
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
        this.generar = false;
      } , (reason) => {
    });
  }

  openModalSendInvoice(order): void {
    const modalRef = this.modalService.open(ModalsSendInvoiceComponent);
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
        this.generar = false;
      } , (reason) => {
    });
  }

}
