import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormsModule
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { UserService,
         OrderService,
         WarrantyService,
         ProductsRequestedService } from '../../../../shared/services';
import { UserStorageService } from '../../../../http/user-storage.service';
import { Role } from '../../../../shared/enum/role.enum';
import { TranslateService } from '@ngx-translate/core';
import { Warranty } from '../../../../shared/models/warranty';
import * as _ from 'lodash';

@Component({
  selector: 'app-warranty-modal',
  templateUrl: './warranty-modal.component.html',
  styleUrls: ['./warranty-modal.component.scss']
})

export class WarrantyModalComponent implements OnInit {
  form: FormGroup;
  user: any;
  warranty: any;
  order: any;
  product: any;
  listClients: Array<any> = new Array;
  listOrders: Array<any> = new Array;
  listProducts: Array<any> = new Array;
  listTypes = ['By default', 'By change'];
  today: Date = new Date();
  action: string;
  listStatus = [{ id: 0, name: 'Pending' },
                { id: 1, name: 'In process' },
                { id: 2, name: 'Approved' },
                { id: 3, name: 'Reject' }
               ];

  constructor(private modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private userStorageService: UserStorageService,
              private userService: UserService,
              private orderService: OrderService,
              private warrantyService: WarrantyService,
              private productsRequestedService: ProductsRequestedService,
              private notification: ToastrService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.getUser();
    this.getClients(-1);
    this.getDate();
    this.initializeForm();
    if (this.action !== 'create') { this.getDataEdit(); }
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      id  : [this.action !== 'create' ? this.warranty.id : ''],
      clientId    : [this.action !== 'create' ? this.warranty.orderClientProductRequest.orderClient.user.idUser : '',
                    [ Validators.required]],
      orderId     : [this.action !== 'create' ? this.warranty.orderClientProductRequest.orderClient.idOrder : '', [ Validators.required]],
      orderClientProductRequestId : [this.action !== 'create' ? this.warranty.orderClientProductRequest.idOrderClientProductRequested : '',
                                    [ Validators.required]],
      patient     : [this.action !== 'create' ? this.warranty.orderClientProductRequest.patient : ''],
      billNumber  : [this.action !== 'create' ? this.warranty.billNumber : '', [ Validators.required]],
      createdAt   : [this.action !== 'create' ? this.warranty.createdAt : this.today],
      type        : [this.action !== 'create' ? this.warranty.type : '',
                    [ Validators.required]],
      description : [this.action !== 'create' ? this.warranty.description : '', [ Validators.required]],
      referenceNumber : [this.action !== 'create' ? this.warranty.referenceNumber : '', [ Validators.required]],
      lotNumber  :  [this.action !== 'create' ? this.warranty.lotNumber : '', [ Validators.required]],
      notes       :  [this.action !== 'create' ? this.warranty.notes : '', [ Validators.required]],
      createdBy  : [this.action !== 'create' ? this.warranty.createdBy.idUser : this.user.userResponse.idUser],
      status      : [this.action !== 'create' ? this.warranty.status : 0]
    });
  }

  getDataEdit(): void {
    this.getOrders(this.form.get('clientId').value);
    this.getProducts(this.form.get('orderId').value);
  }

  getUser(): void {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
  }

  getClients(filter): void {
    this.userService.findByRole$(Role.User, filter).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listClients = res.data;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getOrders(clientId): void {
    this.orderService.allOrderWarrantyByUserIdAndStatus$(clientId, 1).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
      }
    });
  }

  getProducts(orderId): void {
    this.order = _.find(this.listOrders, { 'idOrder': orderId});
    if (this.order != null) {
      this.listProducts = this.order.listProductRequested;
    }
  }

  getDate(): void {
    if (this.action === 'edit') {
      this.today = new Date(this.warranty.createdAt);
    }
  }

  filterOrders(clientId): void {
    this.getOrders(parseInt(clientId.value, 10));
  }

  filterProducts(orderId): void {
    this.getProducts(parseInt(orderId.value, 10));
  }

  close(): void {
    this.modalReference.close();
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  save(): void {
    if (this.action === 'create') {
      this.warrantyService.save$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The warranty type already exists', { value: 'The business type already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.warrantyService.update$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
            this.notification.success('', res);
          });
          this.close();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The warranty type already exists', { value: 'The business type already exists' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
  }

  assignPatient(orderClientProductRequestId) {
    this.product = _.find(this.listProducts, { 'idOrderClientProductRequested': parseInt(orderClientProductRequestId.value, 10) } );
    this.form.get('patient').setValue(this.product.patient);
  }

  get clientId() { return this.form.get('clientId'); }
  get orderId() { return this.form.get('orderId'); }
  get orderClientProductRequestId() { return this.form.get('orderClientProductRequestId'); }
  get lotNumber() { return this.form.get('lotNumber'); }
  get referenceNumber() { return this.form.get('referenceNumber'); }
  get billNumber() { return this.form.get('billNumber'); }
  get createdAt() { return this.form.get('createdAt'); }
  get type() { return this.form.get('type'); }
  get description() { return this.form.get('description'); }
  get notes() { return this.form.get('notes'); }
  get status() { return this.form.get('status'); }
  get patient() { return this.form.get('patient'); }
}
