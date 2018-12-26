import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { saveAs } from 'file-saver';
import { Order } from '../../../shared/models/order';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { OrderService } from '../../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { LenticonComponent } from '../../edit-order/lenticon/lenticon.component';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-lenticon',
  templateUrl: './supplier-lenticon.component.html',
  styleUrls: ['./supplier-lenticon.component.scss']
})
export class SupplierLenticonComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  @Input() image: any;
  @Input() order: Order;
  @Output() emitEventLenticon: EventEmitter<any> = new EventEmitter<any>();

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
    const modalRefEuclid = this.modalService.open( LenticonComponent, { size: 'lg', windowClass: 'modal-content-border' });
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
    this.emitEventLenticon.emit(fResponse);
    return fResponse;
  }

}
