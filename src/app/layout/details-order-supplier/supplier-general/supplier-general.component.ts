import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { ProductRequested } from '../../../shared/models/productrequested';
import { OrderService } from '../../../shared/services';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { GeneralOrderComponent } from '../../edit-order/general-order/general-order.component';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';

@Component({
    selector: 'app-supplier-general',
    templateUrl: './supplier-general.component.html',
    styleUrls: ['./supplier-general.component.scss']
  })
  export class SupplierGeneralComponent implements OnInit {

    @Input() order: any;
    @Input() files: Array<FileProductRequested>;
    @Output() emitEventMarkennovy: EventEmitter<any> = new EventEmitter<any>();
    user: any;

    productRequested: ProductRequested;

    constructor(private modalService: NgbModal,
                private spinner: NgxSpinnerService,
                private orderService: OrderService,
                private userStorageService: UserStorageService,
                private fileProductRequestedService: FileProductRequestedService) {}

    ngOnInit(): void {
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
      this.productRequested = this.order.listDetailsAll[0].productRequested;
    }

    getOrder() {
      this.spinner.show();
      this.orderService.findByIds$([this.order.idOrder]).subscribe(res => {
        this.order = res.data[0];
        this.order.listDetailsAll = res.data[0].listProductRequested;
        this.productRequested = this.order.listProductRequested[0].productRequested;
        this.spinner.hide();
      });
    }

    openEdit() {
      const createOrder = this.modalService.open(GeneralOrderComponent,
      {
        size: 'lg',
        windowClass: 'modal-content-border',
        backdrop: 'static',
        keyboard: false
      });
      createOrder.componentInstance.orderEdit = this.order;
      createOrder.componentInstance.files = this.files;
      createOrder.result.then((result) => {
        this.getOrder();
      } , (reason) => {
      });
    }

    downloadFile(item) {
      this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
        saveAs(res, item.name);
      }, error => {
        console.log('error', error);
      });
    }
  }
