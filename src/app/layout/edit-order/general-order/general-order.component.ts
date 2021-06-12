import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { UserStorageService } from '../../../http/user-storage.service';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { ProductsRequestedService, UserService } from '../../../shared/services';
import { ShippingAddressService } from '../../../shared/services/shippingAddress/shipping-address.service';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
    selector: 'app-general-order.component',
    templateUrl: './general-order.component.html',
    styleUrls: ['./general-order.component.scss']
  })
  export class GeneralOrderComponent implements OnInit {

    @ViewChild('selectedFiles') selectedFiles: any;

    orderEdit: any;
    files: Array<any>;

    suppliers: Array<any> = new Array;
    listCustomers: Array<any> = new Array;
    listFile: Array<FileProductRequested> = new Array;
    shippingAddress = '';
    order = {
      supplierId: null,
      idUser: null,
      listFile: [],
      productRequested: null,
      listFileRemove: [],
      additionalInformation: {
        idAdditionalInformation: null,
        description: null,
        warranty: null,
        lentsTypes: null,
        codeSpectrum: null
      }
    };
    productRequested = {
      idProductRequested: null,
      patient: null,
      quantity: null,
      price: null,
      observations: null
    };
    queueLimit = 5;
    maxFileSize = 25 * 1024 * 1024; // 25 MB
    private uploadResult: any = null;
    filesAux: Array<any>;
    listFileRemove: Array<any> = new Array;

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
                 private productRequestedService: ProductsRequestedService,
                 private shippingAddressService: ShippingAddressService,
                 private spinner: NgxSpinnerService,
                 public router: Router,
                 private notification: ToastrService,
                 private translate: TranslateService,
                 public modalReference: NgbActiveModal) {

      this.uploader.onAfterAddingFile = (item) => {
        const maxSize = this.maxFilesSize();
        if (maxSize > this.maxFileSize) {
          this.removeFile(item);
          this.notification.error('', this.translate.instant('Exceeds the maximum size allowed'));
        }
      };

      this.uploader.onSuccessItem = (item, response, status, headers) => {
        console.log('dddd');
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
      this.getSuppliers();
      this.setData();
    }

    setData() {
      this.order.supplierId = this.orderEdit.supplier.idSupplier;
      this.getClient();
      this.order.idUser = this.orderEdit.user.idUser;
      this.onSelectedClient();
      this.filesAux = this.files;
      this.order.additionalInformation = this.orderEdit.listDetailsAll[0].productRequested.additionalInformation;
      this.productRequested.patient = this.orderEdit.listDetailsAll[0].productRequested.patient;
      this.productRequested.quantity = this.orderEdit.listDetailsAll[0].productRequested.quantity;
      this.productRequested.price = this.orderEdit.listDetailsAll[0].productRequested.price;
      this.productRequested.observations = this.orderEdit.listDetailsAll[0].productRequested.observations;
      this.productRequested.idProductRequested = this.orderEdit.listDetailsAll[0].productRequested.idProductRequested;
    }

    getSuppliers() {
      this.supplierService.findAll$().subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.suppliers = _.orderBy(res.data, 'companyName');
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }

    getClient() {
      this.userService.allCustomersAvailableBuy$(this.order.supplierId).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomers = res.data;
          this.listCustomers.map((i) => {
            const accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' + i.country.name;
            return i;
          });
        }
      });
    }

    onSelectedSupplier() {
      if (this.order.supplierId) {
        this.getClient();
      } else {
        this.listCustomers = [];
      }
    }

    onSelectedClient() {
      if (this.order.idUser) {
        this.findShippingAddress(this.order.idUser);
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

    removeFileSave(item) {
      this.filesAux.forEach( (obj, index) => {
        if (item.idFileProductRequested === obj.idFileProductRequested) {
          this.filesAux.splice(index, 1);
          this.listFileRemove.push(item.idFileProductRequested);
        }
      });
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
        const fileProductRequest: FileProductRequested = new FileProductRequested();
        fileProductRequest.url  = JSON.parse(this.uploadResult.response).data;
        fileProductRequest.name = this.uploadResult.item.file.name;
        fileProductRequest.type = this.uploadResult.item.file.type;
        fileProductRequest.size = this.uploadResult.item.file.size;
        fileProductRequest.createdAt = new Date();
        this.listFile.push(fileProductRequest);
      }

      if (this.listFile.length === this.uploader.queue.length) {
        this.order.listFile = this.listFile;
        this.updateOrder();
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
        this.updateOrder();
      }
    }


    updateOrder() {
      this.order.productRequested = this.productRequested;
      this.order.listFileRemove = this.listFileRemove;
      this.productRequestedService.updateOrderGeneral$(this.order).subscribe(res => {
        this.spinner.hide();
        this.notification.success('', this.translate.instant('Successfully Updated'));
        this.modalReference.close(res.data);
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
    }

    formIsValid() {
      let isValid = true;
      if (this.validValue(this.order.idUser) || this.validValue(this.order.supplierId) ||
          this.validValue(this.order.additionalInformation.description) || this.validValue(this.order.additionalInformation.warranty) ||
          this.validValue(this.productRequested.patient) || this.validValue(this.productRequested.price) ||
          this.validValue(this.productRequested.quantity)) {
        isValid = false;
      }
      return isValid;
    }

    validValue(value) {
      return (value === null || value === '' || value === undefined);
    }

  }