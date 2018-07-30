import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import * as _ from 'lodash';
import { NgbModalRef, NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GoogleService } from '../../../../shared/services/google/google.service';
import { UserService,
         OrderService,
         WarrantyService } from '../../../../shared/services';
import { Role } from '../../../../shared/enum/role.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-warranty-modal',
  templateUrl: './warranty-modal.component.html',
  styleUrls: ['./warranty-modal.component.scss']
})

export class WarrantyModalComponent implements OnInit {
  form: FormGroup;
  warranty: any;
  listClients: Array<any> = new Array;
  listOrders: Array<any> = new Array;
  listProducts: Array<any> = new Array;
  searching = false;
  action: string;
  public model: any;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private orderService: OrderService,
              private warrantyService: WarrantyService,
              private toastr: ToastrService,
              private notification: ToastrService,
              private googleService: GoogleService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.initializeForm();
    this.getListClient(-1);
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      id          : [this.action === 'edit' ? this.warranty.idWarranty : ''],
      clientId    : [this.action === 'edit' ? this.warranty.order.nameUser : ''],
      orderId     : [this.action === 'edit' ? this.warranty.ordert.id : '', [ Validators.required]],
      productId   : [this.action === 'edit' ? this.warranty.order.id : '', [ Validators.required]],
      conditions  : [this.action === 'edit' ? this.warranty.conditions : '', [ Validators.required]],
      time        : [this.action === 'edit' ? this.warranty.time : '', [ Validators.required]]
    });
  }

  close(): void {
    this.modalReference.close();
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  getListClient(filter): void {
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

  onClientSelectionChanged(clientId): void {
    this.getListOrders(parseInt(clientId.value, 10));
  }

  getListOrders(clientId): void {
    this.orderService.allOrderByUserId$(clientId).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listOrders = res.data;
      }
    });
  }

  filterProducts(orderId): void {}

  save(): void {}

  get clientId() { return this.form.get('clientId'); }
  get orderId() { return this.form.get('orderId'); }
  get productId() { return this.form.get('productId'); }
  get condicions() { return this.form.get('condicions'); }
  get time() { return this.form.get('time'); }

}
