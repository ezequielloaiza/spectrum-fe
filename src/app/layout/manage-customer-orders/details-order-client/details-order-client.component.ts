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
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FtpService } from '../../../shared/services/ftp/ftp.service';
import { saveAs } from 'file-saver';

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
  download = false;

  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    private ftpService: FtpService,
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
        if (this.order.status !== 1 && this.order.dateSend === null) {
           this.generar = true;
        }

        if (res.data.dateSend !== null && res.data.supplier.idSupplier !== 1) {
          this.download = true;
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

  downloadOrder(order) {
    this.orderService.downloadOrder$(order.number).subscribe(res => {
      const filename = order.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }

  /*
  upload(order): void {
    console.log('upload', order);
    this.ftpService.uploadFile$('/home/naily/Descargas/prueba.jpg').subscribe(res => {
      if (res.code === CodeHttp.ok) {
        console.log('OK');
      }
    });
  }
  */
}

