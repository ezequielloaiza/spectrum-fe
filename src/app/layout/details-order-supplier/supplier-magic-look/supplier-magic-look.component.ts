import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Input } from '@angular/core';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageService } from '../../../http/user-storage.service';
import { MagicLookComponent } from '../../edit-order/magic-look/magic-look.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-magic-look',
  templateUrl: './supplier-magic-look.component.html',
  styleUrls: ['./supplier-magic-look.component.scss']
})
export class SupplierMagicLookComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  @Input() image: any;
  @Input() order: any;
  @Output() emitEventMagic: EventEmitter<any> = new EventEmitter<any>();
  listAux: Array<any> = new Array;
  urlImage: any;
  valueStatus: any;
  valueClient: any;
  user: any;
  paramStatus: any;

  constructor(private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private route: ActivatedRoute,
    private router: Router) {
              this.user = JSON.parse(userStorageService.getCurrentUser());
}


  skipLocationAndRedirect(uri) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      if (this.paramStatus) {
        this.router.navigate(['/details-order-client/'+this.order.idOrder+'/view'], { queryParams: { status: this.paramStatus } })
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
  }

  openEdit() {
    const modalRefMagic = this.modalService.open( MagicLookComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRefMagic.componentInstance.detailEdit = this.lista;
    modalRefMagic.componentInstance.typeEdit = 2;
    modalRefMagic.componentInstance.userOrder = this.order.user;
    modalRefMagic.componentInstance.image = this.urlImage;
    modalRefMagic.result.then((result) => {
      /*this.listAux = result;
      this.sendReply();*/
      this.skipLocationAndRedirect(this.router.url);
    } , (reason) => {
    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventMagic.emit(fResponse);
    return fResponse;
  }
}
