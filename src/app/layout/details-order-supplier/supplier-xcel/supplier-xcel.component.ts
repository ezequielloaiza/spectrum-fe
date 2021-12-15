import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { Order } from '../../../shared/models/order';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import { XcelComponent } from '../../edit-order/xcel/xcel.component';

@Component({
  selector: 'app-supplier-xcel',
  templateUrl: './supplier-xcel.component.html',
  styleUrls: ['./supplier-xcel.component.scss']
})
export class SupplierXcelComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  @Input() image: any;
  @Input() order: Order;
  @Output() emitEventSynergeyes: EventEmitter<any> = new EventEmitter<any>();

  listAux: Array<ProductRequested> = new Array;
  urlImage: any;
  valueStatus: any;
  valueClient: any;
  user: any;
  paramStatus = '';
  design: any;
  clock: any;

  constructor(private fileProductRequestedService: FileProductRequestedService,
    private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private route: ActivatedRoute,
    private router: Router) {
      this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  skipLocationAndRedirect(uri) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      if (this.paramStatus) {
        this.router.navigate(['/details-order-client/' + this.order.idOrder + '/view'], { queryParams: { status: this.paramStatus } });
      } else {
        this.router.navigate([uri]);
      }
    });
  }

  ngOnInit() {
    this.listAux = this.lista;
    this.urlImage = this.image;
    this.valueStatus = this.order.status;
    this.valueClient = this.order.user.status;
    this.paramStatus = this.route.snapshot.queryParams.status;
    this.sendReply();
  }

  getHeader(list) {
    this.design = list.find(p => p.name === 'Design');
    return list
  }

  getParams(list) {
    return _.filter(list, function (parameter) {
      switch (parameter.name) {
        case 'Clock Mark':
        case 'Q1 LZ':
        case 'Q1 SZ':
        case 'Q2 LZ':
        case 'Q2 SZ':
        case 'Q3 LZ':
        case 'Q3 SZ':
        case 'Q4 LZ':
        case 'Q4 SZ':
          break;
        default:
          return parameter;
      }
    });
  }

  getClockParam(list) {
    this.clock = list.find(p => p.name === 'Clock Mark');
    return this.clock.selected;
  }

  getAtlantisParams(list) {
    return _.filter(list, function (parameter) {
      switch (parameter.name) {
        case 'Clock Mark':
        case 'Q1 LZ':
        case 'Q1 SZ':
        case 'Q2 LZ':
        case 'Q2 SZ':
        case 'Q3 LZ':
        case 'Q3 SZ':
        case 'Q4 LZ':
        case 'Q4 SZ':
          return parameter;
        default:
          break;
      }
    });
  }

  showImgs() {
    return this.design.selected === 'Atlantis 2.0'
  }

  downloadFile(item) {
    this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
      }, error => {
      console.log('error', error);
    });
  }

  openEdit() {
    const modalRefSmartlens = this.modalService.open( XcelComponent,
      { size: 'lg', windowClass: 'modal-content-border modal-edit-smartlens' , backdrop  : 'static', keyboard  : false});
      modalRefSmartlens.componentInstance.detailEdit = this.lista;
      modalRefSmartlens.componentInstance.typeEdit = 2;
      modalRefSmartlens.componentInstance.order = this.order;
      modalRefSmartlens.componentInstance.image = this.urlImage;
      modalRefSmartlens.result.then((result) => {
        this.skipLocationAndRedirect(this.router.url);
      } , (reason) => {
    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventSynergeyes.emit(fResponse);
    return fResponse;
  }

}
