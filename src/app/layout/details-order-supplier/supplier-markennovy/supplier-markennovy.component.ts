import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { environment } from '../../../../../src/environments/environment';
import { Order } from '../../../shared/models/order';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services';
import { MarkennovyComponent } from '../../edit-order/markennovy/markennovy.component';

@Component({
  selector: 'app-supplier-markennovy',
  templateUrl: './supplier-markennovy.component.html',
  styleUrls: ['./supplier-markennovy.component.scss']

})
export class SupplierMarkennovyComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() image: any;
  @Input() order: Order;
  @Output() emitEventMarkennovy: EventEmitter<any> = new EventEmitter<any>();
  listAux: Array<ProductRequested> = new Array;
  urlImage: any;
  valueStatus: any;
  user: any;

  constructor(private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private route: ActivatedRoute,
    private orderService: OrderService) {
      this.user = JSON.parse(userStorageService.getCurrentUser());
}
  ngOnInit() {
    this.listAux = this.lista;
    this.urlImage = this.image;
    this.valueStatus = this.order.status;
    this.sendReply();
  }

  openEdit() {
    const modalRefMarkennovy = this.modalService.open( MarkennovyComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRefMarkennovy.componentInstance.detailEdit = this.lista;
    modalRefMarkennovy.componentInstance.typeEdit = 2;
    modalRefMarkennovy.componentInstance.userOrder = this.order.user;
    modalRefMarkennovy.componentInstance.image = this.urlImage;
    modalRefMarkennovy.result.then((result) => {
      this.listAux = result;
      this.sendReply();
    } , (reason) => {

    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventMarkennovy.emit(fResponse);
    return fResponse;
  }


}
