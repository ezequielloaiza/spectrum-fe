import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { Order } from '../../../shared/models/order';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { SmartlensComponent } from '../../edit-order/smartlens/smartlens.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-supplier-smartlens',
  templateUrl: './supplier-smartlens.component.html',
  styleUrls: ['./supplier-smartlens.component.scss']
})
export class SupplierSmartlensComponent implements OnInit {

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

  getParams(detail) {
    let params = detail.parameters;

    if (detail.design === "Sph") {
      params =  _.filter(params, function(param) {
        // Remove params cylinder and axis when design is Sph.
        return param.name !== 'Cylinder (D)' && param.name !== 'Axis Cylinder(º)' && param.name !== 'Position of axis rotation markers' && param.name !== 'Rotationally stable';
      });
    }

    if (detail.typeLens === 'Final Design') {
      params =  _.filter(params, function(param) {
        // Excluding params design by laboratory
        return param.name !== 'Over-refraction';
      });
    }
    return params;
  }

  downloadFile(item) {
    this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
      }, error => {
      console.log('error', error);
    });
  }

  openEdit() {
    const modalRefSmartlens = this.modalService.open( SmartlensComponent,
      { size: 'lg', windowClass: 'modal-content-border modal-edit-smartlens' , backdrop  : 'static', keyboard  : false});
      modalRefSmartlens.componentInstance.detailEdit = this.lista;
      modalRefSmartlens.componentInstance.typeEdit = 2;
      modalRefSmartlens.componentInstance.userOrder = this.order.user;
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
