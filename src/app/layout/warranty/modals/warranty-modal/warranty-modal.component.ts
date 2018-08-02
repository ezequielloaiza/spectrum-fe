import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { UserService,
         OrderService,
         WarrantyService } from '../../../../shared/services';
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
  listClients: Array<any> = new Array;
  listOrders: Array<any> = new Array;
  listProducts: Array<any> = new Array;
  listTypes: Array<String> = new Array;
  today: Date = new Date();
  action: string;

  constructor(private modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private userStorageService: UserStorageService,
              private userService: UserService,
              private orderService: OrderService,
              private warrantyService: WarrantyService,
              private notification: ToastrService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.getUser();
    this.getClients(-1);
    this.getDate();
    this.getTypes();
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      clientId    : [this.action === 'edit' ? this.warranty.clientId : '', [ Validators.required]],
      orderId     : [this.action === 'edit' ? this.warranty.orderId : '', [ Validators.required]],
      productId   : [this.action === 'edit' ? this.warranty.productId : '', [ Validators.required]],
      billNumber  : [this.action === 'edit' ? this.warranty.billNumber : '', [ Validators.required]],
      createdAt   : [this.action === 'edit' ? this.warranty.createdAt : this.today],
      type        : [this.action === 'edit' ? [this.warranty.type] : '', [ Validators.required]],
      description : [this.action === 'edit' ? this.warranty.description : '', [ Validators.required]],
      referenceNumber : [this.action === 'edit' ? this.warranty.referenceNumber : '', [ Validators.required]],
      lotNumber  :  [this.action === 'edit' ? this.warranty.lotNumber : '', [ Validators.required]],
      notes       :  [this.action === 'edit' ? this.warranty.notes : '', [ Validators.required]],
      createdBy  : [this.action === 'edit' ? this.warranty.createdBy : this.user.id],
      status      : [this.action === 'edit' ? parseInt(this.warranty.status, 10) : 0]
    });
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
    this.orderService.allOrderByClient$(clientId).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
      }
    });
  }

  getProducts(): void {
  }

  getDate(): void {
    if (this.action === 'edit') {
      this.today = new Date(this.warranty.createdAt);
    }
  }

  getTypes(): void {
    this.listTypes = ['By default', 'By change'];
  }

  filterOrders(clientId): void {
    this.getOrders(parseInt(clientId.value, 10));
  }

  filterProducts(): void {
    this.getProducts();
  }

  close(): void {
    this.modalReference.close();
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  save(): void {
    if (this.action !== 'edit') {
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

  get clientId() { return this.form.get('clientId'); }
  get orderId() { return this.form.get('orderId'); }
  get productId() { return this.form.get('productId'); }
  get lotNumber() { return this.form.get('lotNumber'); }
  get referenceNumber() { return this.form.get('referenceNumber'); }
  get billNumber() { return this.form.get('billNumber'); }
  get createdAt() { return this.form.get('createdAt'); }
  get type() { return this.form.get('type'); }
  get description() { return this.form.get('description'); }
  get notes() { return this.form.get('notes'); }
}
