import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormsModule
} from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WarrantyService } from '../../shared/services/warranty/warranty.service';
import { UserStorageService } from '../../http/user-storage.service';
import { Role } from '../../shared/enum/role.enum';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { TranslateService } from '@ngx-translate/core';
import { WarrantyModalComponent } from './modals/warranty-modal/warranty-modal.component';
import { Warranty } from '../../shared/models/warranty';
import * as _ from 'lodash';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss']
})

export class WarrantyComponent implements OnInit {
  form: FormGroup;
  closeResult: string;
  user: any;
  warranties: Array<any> = new Array;
  auxWarranties: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number;
  startItem: number;
  endItem: number;
  valid = false;
  /*initial order*/
  orderByField = 'id';
  reverseSort = true;
  typeSort = 0;
  listStatus = [{ id: 0, name: 'Pending' },
                { id: 1, name: 'In process' },
                { id: 2, name: 'Approved' },
                { id: 3, name: 'Reject' }
               ];

  constructor(private modalService: NgbModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private formBuilder: FormBuilder,
              private userStorageService: UserStorageService,
              private warrantyService: WarrantyService) { }

  ngOnInit() {
    this.getUser();
    this.getListWarranties();
    this.initializeForm();
    this.advancedPagination = 1;
    this.itemPerPage = 5;
  }

  getUser(): void {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      selectedStat: ['']
    });
  }

  open(warranty, action) {
    const modalRef = this.modalService.open(WarrantyModalComponent , { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.warranty = warranty;
    modalRef.componentInstance.action = action;
    modalRef.result.then((result) => {
      this.getListWarranties();
      this.moveFirstPage();
    } , (reason) => {	});
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.reverseSort = true;
    this.typeSort = 0;
    this.orderByField = 'id';
    this.sortWarranty(this.orderByField);
    this.pageChange(this.advancedPagination);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getListWarranties(): void {
    this.warrantyService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.warranties = res.data;
        this.auxWarranties = res.data;

        _.each(this.warranties, function(warranty) {
          warranty.client = warranty.orderProductRequest.order.user.name;
          warranty.order = warranty.orderProductRequest.order.number;
          warranty.patient = warranty.orderProductRequest.productRequested.patient;
          warranty.seller = warranty.orderProductRequest.order.user.userId;
          warranty.clientId = warranty.orderProductRequest.order.user.idUser;
        });

        // filter list by role
        if (this.user.role.idRole === Role.Seller) {
          this.warranties = _.filter(this.warranties, { 'seller': this.user.userResponse.idUser } );
          this.auxWarranties = this.warranties.slice(0, this.warranties.length);
        } else if (this.user.role.idRole === Role.User) {
          this.warranties = _.filter(this.warranties, { 'clientId': this.user.userResponse.idUser } );
          this.auxWarranties = this.warranties.slice(0, this.warranties.length);
        }

        this.sortWarranty(this.orderByField);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  filter(value): void {
    if (value !== '') {
      this.valid = true;
      this.warranties = _.filter(this.auxWarranties, { 'status': parseInt(value) } );
    }
  }

  pageChange(event) {
    this.startItem = (event - 1) * this.itemPerPage;
    this.endItem = event * this.itemPerPage;
    this.warranties = this.auxWarranties.slice(this.startItem, this.endItem);
  }

  getItems(ev: any) {
    this.warranties = this.auxWarranties;
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.warranties = this.warranties.filter((item) => {
        return ((item.client.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.order.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.patient.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.billNumber.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.type.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  sortWarranty(key) {
    if (this.orderByField !== key) {
      this.typeSort = 0;
      this.reverseSort = false;
    }
    this.orderByField = key;
    if (this.orderByField !== 'id') {
      this.typeSort ++;
      if (this.typeSort > 2) {
        this.typeSort = 0;
        this.orderByField = 'id';
        key = 'id';
        this.reverseSort = true;
      }
    }

    let warrantiesSort = this.auxWarranties.sort(function(a, b) {
      let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    this.auxWarranties = warrantiesSort;
    if (this.reverseSort) {
      this.auxWarranties = warrantiesSort.reverse();
    }
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  clean() {
    this.valid = false;
    this.getListWarranties();
    this.form.get('selectedStat').setValue('');
  }

  deleteWarranty(id) {
    this.warrantyService.removeById$(id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.getListWarranties();
        // tslint:disable-next-line:no-shadowed-variable
        this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  delete(id) {
    this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
      // tslint:disable-next-line:max-line-length
      this.translate.get('Are you sure do you want to delete this register?', {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.deleteWarranty(id);
        }, () => { });
      });
    });
  }
}
