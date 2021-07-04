import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { UserStorageService } from '../../http/user-storage.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { OrderService, ProductsRequestedService, UserService } from '../../shared/services';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SupplieruserService } from '../../shared/services/supplieruser/supplieruser.service';

const URL = environment.apiUrl + 'order/uploader-file-pre-order';

@Component({
    selector: 'app-pre-order.component',
    templateUrl: './pre-order.component.html',
    styleUrls: ['./pre-order.component.scss']
  })
  export class PreOrderComponent implements OnInit {

    @ViewChild('selectedFiles') selectedFiles: any;

    files: Array<any>;
    currentUser: any;
    user: any;
    listSupplier: Array<any> = new Array();
    listSupplierAux: Array<any> = new Array();
    listSupplierFilter: Array<any> = new Array();
    listCustomers: Array<any> = new Array;
    listFile: Array<FileProductRequested> = new Array;
    shippingAddress = '';
    preOrder = {
      userId: null,
      comments: null,
      lentType: null,
      patient: null,
      listFile: null,
      supplierId: null,
      orderNumber: null,
      invoiceNumber: null,
      product: null,
      typeOrder: 'Duplicate'
    };
    queueLimit = 5;
    fullNameClient = '';
    maxFileSize = 25 * 1024 * 1024; // 25 MB
    private uploadResult: any = null;

    public uploader: FileUploader = new FileUploader(
      {
        url: URL,
        itemAlias: 'files',
        queueLimit: this.queueLimit,
        maxFileSize: this.maxFileSize,
        removeAfterUpload: false,
        authToken: this.userStorageService.getToke(),
        autoUpload: false
      });

    constructor (private userStorageService: UserStorageService,
                 private supplierService: SupplierService,
                 private userService: UserService,
                 private ordeService: OrderService,
                 private shippingAddressService: ShippingAddressService,
                 private supplierUserService: SupplieruserService,
                 private spinner: NgxSpinnerService,
                 public router: Router,
                 private notification: ToastrService,
                 private translate: TranslateService) {

      this.uploader.onAfterAddingFile = (item) => {
        const maxSize = this.maxFilesSize();
        if (maxSize > this.maxFileSize) {
          this.removeFile(item);
          this.notification.error('', this.translate.instant('Exceeds the maximum size allowed'));
        }
      };

      this.uploader.onSuccessItem = (item, response, status, headers) => {
        this.uploadResult = {'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers};
        if (this.uploadResult) {
          this.buildFileProductRequested();
        }
      };

      this.uploader.onErrorItem = (item, response, status, headers) => {
          this.uploadResult = {'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers};
      };
    }

    ngOnInit(): void {
      this.currentUser = JSON.parse(this.userStorageService.getCurrentUser()).userResponse;
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
      this.setClient();
      this.getSuppliers();
    }

    setClient() {
      if (this.user.role.idRole === 3) {
        this.preOrder.userId = this.currentUser.idUser;
        const accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
        this.fullNameClient = accSpct + this.currentUser.name + ' | ' + this.currentUser.country.name;
        this.findShippingAddress(this.preOrder.userId);
      }
    }

    getSuppliers() {
      this.supplierUserService.findIdUser$(this.currentUser.idUser).subscribe(res => {
        res.data.forEach(obj => {
          this.listSupplier.push(obj.supplier);
        });
        this.listSupplier =  _.orderBy(this.listSupplier, 'companyName');
      });
    }

    getClient() {
      this.spinner.show();
      this.userService.allCustomersAvailableBuy$(this.preOrder.supplierId).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomers = res.data;
          this.listCustomers.map((i) => {
            const accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' + i.country.name;
            return i;
          });
        }
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
      });
    }



    onSelectedSupplier() {
      if (this.preOrder.supplierId) {
      } else {
        this.listCustomers = [];
      }
    }

    onSelectedClient() {
      if (this.preOrder.userId) {
        this.findShippingAddress(this.preOrder.userId);
      } else {
        this.shippingAddress = '';
      }
    }

    findShippingAddress(idCliente) {
      this.shippingAddressService.findIdUser$(idCliente).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
        } else if (res.code === CodeHttp.notContent) {
          this.shippingAddress = '';
          this.notification.warning('', this.translate.instant('You must enter a main address in the shipping address module'));
        } else {
          this.shippingAddress = '';
        }
      });
    }

    removeFile(item) {
      this.uploader.removeFromQueue(item);
      this.clearSelectedFile();
    }

    clearSelectedFile() {
      this.selectedFiles.nativeElement.value = '';
    }

    maxFilesSize() {
      let maxFileSize = 0;
      if (this.uploader.queue) {
        _.each(this.uploader.queue, function (item) {
          maxFileSize = maxFileSize + item.file.size;
        });
      }
      return maxFileSize;
    }

    private buildFileProductRequested() {
      if (this.uploadResult.success) {
        const name = JSON.parse(this.uploadResult.response).data;
        this.listFile.push(name);
      }

      if (this.listFile.length === this.uploader.queue.length) {
        this.preOrder.listFile = this.listFile;
        this.savePreOrder();
      }
    }

    save(): void {
      this.spinner.show();
      this.listFile = new Array;
      if (this.uploader.queue.length) {
        _.each(this.uploader.queue, function (item) {
          item.upload();
        });
      } else {
        this.savePreOrder();
      }
    }

    savePreOrder() {
      this.ordeService.savePreOrder$(this.preOrder).subscribe(res => {
        this.spinner.hide();
        this.notification.success('', this.translate.instant('Your order has been successfully generated'));
        this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
    }

    formIsValid() {
      let isValid = true;
      debugger
      if (this.validValue(this.preOrder.userId) || this.validValue(this.preOrder.supplierId) ||
          this.validValue(this.preOrder.patient) || this.validValue(this.preOrder.product)) {
        isValid = false;
      }
      return isValid;
    }

    validValue(value) {
      return (value === null || value === '' || value === undefined);
    }

  }
