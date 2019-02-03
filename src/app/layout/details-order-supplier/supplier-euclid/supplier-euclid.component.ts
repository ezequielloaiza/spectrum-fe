import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Input } from '@angular/core';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';
import { EuclidComponent } from '../../edit-order/euclid/euclid.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../../../shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services';
import { Output } from '@angular/core';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-euclid',
  templateUrl: './supplier-euclid.component.html',
  styleUrls: ['./supplier-euclid.component.scss']
})
export class SupplierEuclidComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  @Input() image: any;
  @Input() order: Order;
  @Output() emitEventEuclid: EventEmitter<any> = new EventEmitter<any>();

  listAux: Array<ProductRequested> = new Array;
  urlImage: any;
  valueStatus: any;
  user: any;

  constructor(private fileProductRequestedService: FileProductRequestedService,
              private modalService: NgbModal,
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

  downloadFile(item) {
    this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
    }, error => {
      console.log('error', error);
    });
  }

  openEdit() {
    const modalRefEuclid = this.modalService.open( EuclidComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false});
    modalRefEuclid.componentInstance.detailEdit = this.lista;
    modalRefEuclid.componentInstance.typeEdit = 2;
    modalRefEuclid.componentInstance.userOrder = this.order.user;
    modalRefEuclid.componentInstance.image = this.urlImage;
    modalRefEuclid.result.then((result) => {
      this.listAux = result;
      this.sendReply();
    } , (reason) => {

    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventEuclid.emit(fResponse);
    return fResponse;
  }


}
