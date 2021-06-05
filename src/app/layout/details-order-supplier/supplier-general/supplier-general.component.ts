import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { ProductRequested } from '../../../shared/models/productrequested';
import { GeneralOrderComponent } from '../../edit-order/general-order/general-order.component';

@Component({
    selector: 'app-supplier-general',
    templateUrl: './supplier-general.component.html',
    styleUrls: ['./supplier-general.component.scss']
  })
  export class SupplierGeneralComponent implements OnInit {

    @Input() order: any;
    @Input() files: Array<FileProductRequested>;
    @Output() emitEventMarkennovy: EventEmitter<any> = new EventEmitter<any>();

    productRequested: ProductRequested;

    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {
        this.productRequested = this.order.listDetailsAll[0].productRequested;
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
      } , (reason) => {
      });
    }
  }
