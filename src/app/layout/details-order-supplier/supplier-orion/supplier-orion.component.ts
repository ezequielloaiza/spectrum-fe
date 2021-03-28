import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Order } from '../../../shared/models/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../shared/services';
import { OrionComponent } from '../../edit-order/orion/orion/orion.component';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { environment } from '../../../../environments/environment';
import { saveAs } from 'file-saver';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';
@Component({
  selector: 'app-supplier-orion',
  templateUrl: './supplier-orion.component.html',
  styleUrls: ['./supplier-orion.component.scss']
})
export class SupplierOrionComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  @Input() image: any;
  @Input() order: Order;
  @Output() emitEventOrion: EventEmitter<any> = new EventEmitter<any>();

  listAux: Array<ProductRequested> = new Array;
  urlImage: any;
  valueStatus: any;
  valueClient: any;
  user: any;
  paramStatus = '';

  constructor(private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private fileProductRequestedService: FileProductRequestedService,
    private route: ActivatedRoute,
    private orderService: OrderService,
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

  downloadFile(item) {
    this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
    }, error => {
      console.log('error', error);
    });
  }

  openEdit() {
    const modalRefOrion = this.modalService.open( OrionComponent,
      { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false});
      modalRefOrion.componentInstance.detailEdit = this.lista;
      modalRefOrion.componentInstance.typeEdit = 2;
      modalRefOrion.componentInstance.userOrder = this.order.user;
      modalRefOrion.componentInstance.order = this.order;
      modalRefOrion.componentInstance.image = this.urlImage;
      modalRefOrion.result.then((result) => {
        /*this.listAux = result;
        this.sendReply();*/
        this.skipLocationAndRedirect(this.router.url);
      } , (reason) => {
    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventOrion.emit(fResponse);
    return fResponse;
  }

}
