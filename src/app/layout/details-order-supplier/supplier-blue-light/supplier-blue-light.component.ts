import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlueLightComponent } from '../../edit-order/blue-light/blue-light.component';
import { UserStorageService } from '../../../http/user-storage.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-blue-light',
  templateUrl: './supplier-blue-light.component.html',
  styleUrls: ['./supplier-blue-light.component.scss']
})
export class SupplierBlueLightComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() image: any;
  @Input() order: any;
  @Output() emitEventBlue: EventEmitter<any> = new EventEmitter<any>();
  listAux: Array<any> = new Array;
  urlImage: any;
  valueStatus: any;
  user: any;
  constructor(private modalService: NgbModal,
              private userStorageService: UserStorageService,
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
  }

  openEdit() {
    const modalRefBlue = this.modalService.open( BlueLightComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRefBlue.componentInstance.detailEdit = this.lista;
    modalRefBlue.componentInstance.typeEdit = 2;
    modalRefBlue.componentInstance.image = this.urlImage;
    modalRefBlue.result.then((result) => {
      /*this.listAux = result;
      this.sendReply();*/
      this.skipLocationAndRedirect(this.router.url);
    } , (reason) => {
    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.listAux);
    this.emitEventBlue.emit(fResponse);
    return fResponse;
  }

}
