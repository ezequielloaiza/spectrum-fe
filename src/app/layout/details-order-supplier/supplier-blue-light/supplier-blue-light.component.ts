import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlueLightComponent } from '../../edit-order/blue-light/blue-light.component';
import { UserStorageService } from '../../../http/user-storage.service';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-blue-light',
  templateUrl: './supplier-blue-light.component.html',
  styleUrls: ['./supplier-blue-light.component.scss']
})
export class SupplierBlueLightComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() image: any;
  @Input() status: any;
  listAux: Array<any> = new Array;
  urlImage: any;
  valueStatus: any;
  user: any;
  constructor(private modalService: NgbModal,
              private userStorageService: UserStorageService) {
    this.user = JSON.parse(userStorageService.getCurrentUser());
   }

  ngOnInit() {
    this.listAux = this.lista;
    this.urlImage = this.image;
    this.valueStatus = this.status;
  }

  openEdit() {
    const modalRefBlue = this.modalService.open( BlueLightComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRefBlue.componentInstance.detailEdit = this.listAux;
    modalRefBlue.componentInstance.typeEdit = 2;
    modalRefBlue.componentInstance.image = this.urlImage;
    modalRefBlue.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

}
