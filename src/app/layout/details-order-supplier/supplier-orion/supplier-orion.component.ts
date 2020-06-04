import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Order } from '../../../shared/models/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../shared/services';
import { OrionComponent } from '../../edit-order/orion/orion/orion.component';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';

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
  @Output() emitEventSynergeyes: EventEmitter<any> = new EventEmitter<any>();

  listAux: Array<ProductRequested> = new Array;
  urlImage: any;
  valueStatus: any;
  valueClient: any;
  user: any;

  constructor(private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router) {
      this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  skipLocationAndRedirect(uri) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }

  ngOnInit() {
    this.listAux = this.lista;
    this.urlImage = this.image;
    this.valueStatus = this.order.status;
    this.valueClient = this.order.user.status;
    this.sendReply();
  }

  openEdit() {
    const modalRefSynergeyes = this.modalService.open( OrionComponent,
      { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false});
      modalRefSynergeyes.componentInstance.detailEdit = this.lista;
      modalRefSynergeyes.componentInstance.typeEdit = 2;
      modalRefSynergeyes.componentInstance.userOrder = this.order.user;
      modalRefSynergeyes.componentInstance.image = this.urlImage;
      modalRefSynergeyes.result.then((result) => {
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
