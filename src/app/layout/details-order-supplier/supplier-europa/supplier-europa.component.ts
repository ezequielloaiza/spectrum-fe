import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { saveAs } from 'file-saver';
import { Order } from '../../../shared/models/order';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OrderService } from '../../../shared/services';
import { EuropaComponent } from '../../edit-order/europa/europa.component';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-europa',
  templateUrl: './supplier-europa.component.html',
  styleUrls: ['./supplier-europa.component.scss']
})
export class SupplierEuropaComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  @Input() image: any;
  @Input() order: Order;
  @Output() emitEventEuropa: EventEmitter<any> = new EventEmitter<any>();
  listAux: Array<ProductRequested> = new Array;
  urlImage: any;
  valueStatus: any;
  user: any;

  constructor(private fileProductRequestedService: FileProductRequestedService,
              private modalService: NgbModal,
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
    const modalRefEuropa = this.modalService.open( EuropaComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false});
    modalRefEuropa.componentInstance.detailEdit = this.lista;
    modalRefEuropa.componentInstance.typeEdit = 2;
    modalRefEuropa.componentInstance.userOrder = this.order.user;
    modalRefEuropa.componentInstance.order = this.order;
    modalRefEuropa.componentInstance.image = this.urlImage;
    modalRefEuropa.result.then((result) => {
      /*console.log(result);
      this.listAux = result;
      this.sendReply();*/
      this.skipLocationAndRedirect(this.router.url);
    } , (reason) => {

    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventEuropa.emit(fResponse);
    return fResponse;
  }
}
