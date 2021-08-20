import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { Order } from '../../../shared/models/order';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../shared/services';
import { saveAs } from 'file-saver';
import { MoldedLensesComponent } from '../../edit-order/molded-lenses/molded-lenses.component';

@Component({
  selector: 'app-supplier-molded-lenses',
  templateUrl: './supplier-molded-lenses.component.html',
  styleUrls: ['./supplier-molded-lenses.component.scss']
})
export class SupplierMoldedLensesComponent implements OnInit {

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
    const modalRefMoldedLenses = this.modalService.open( MoldedLensesComponent,
      { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false});
      modalRefMoldedLenses.componentInstance.detailEdit = this.lista;
      modalRefMoldedLenses.componentInstance.typeEdit = 2;
      modalRefMoldedLenses.componentInstance.userOrder = this.order.user;
      modalRefMoldedLenses.componentInstance.image = this.urlImage;
      modalRefMoldedLenses.result.then((result) => {
        /*this.listAux = result;
        this.sendReply();*/
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
