import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { ProductService } from '../../shared/services/products/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { UserService } from '../../shared/services';
import { UserStorageService } from '../../http/user-storage.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
const URL = environment.apiUrl + 'products/uploaderXSB';

@Component({
  selector: 'app-product-view-xsb',
  templateUrl: './product-view-xsb.component.html',
  styleUrls: ['./product-view-xsb.component.scss']
})
export class ProductViewXsbComponent implements OnInit {

  products: Array<any> = new Array;
  product: any;
  id: any;
  currentUser: any;
  user: any;
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFile: Array<FileProductRequested> = new Array;
  private uploadResult: any = null;
  sentXSB = {
    comments: null,
    lentType: null,
    patient: null,
    client: null,
    listFile: null,
    name: null
  }

  shippingAddress = ''

  @ViewChild('selectedFiles') selectedFiles: any;

  supplierName = '';
  routeFormats: any;
  formats: any;

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'files',
    queueLimit: this.queueLimit,
    maxFileSize: this.maxFileSize,
    removeAfterUpload: false,
    authToken: this.userStorageService.getToke(),
    autoUpload: false
  });

  constructor(private productService: ProductService,
              private userService: UserService,
              private userStorageService: UserStorageService,
              private shippingAddressService: ShippingAddressService,
              public router: Router,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
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
                  this.uploadResult = {'success': true, 'item': item, 'response':
                                       response, 'status': status, 'headers': headers};
                  if (this.uploadResult) {
                    this.buildFileProductRequested();
                  }
                };
                this.uploader.onErrorItem = (item, response, status, headers) => {
                    this.uploadResult = {'success': true, 'item': item, 'response':
                                         response, 'status': status, 'headers': headers};
                };
              }

  ngOnInit() {
    this.currentUser = JSON.parse(this.userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    const id = this.route.snapshot.paramMap.get('supplierId');
    this.getNameSupplier(id);
    this.getFormatsSupplier(id);
    this.getProducts(id);

  }

  getNameSupplier(id) {
    switch (Number(id)) {
      case 13:
        this.supplierName = 'X-Cel'
        break;
      case 14:
        this.supplierName = 'Smartlens'
        break;
      case 15:
        this.supplierName = 'BostonSight'
        break;
    }
  }

  getFormatsSupplier(id) {
    this.routeFormats = "https://storage.googleapis.com/spectrum-storage/order-formats/";
    switch (Number(id)) {
      case 13:
        this.formats = ["RGP_ORDER", "FLEXLENS", "CONSULTATION_FORM_ATLANTIS", "ATLANTIS_FORMATO_FINAL"];
        break;
      case 14:
        this.formats = ["ORDER_FORM_SL"];
        break;
      case 15:
        this.formats = ["SCLERAL_ORDER_FORM"]
        break;
    }
  }

  getProducts(id) {
    this.spinner.show();

    this.productService.findBySupplierInView$(id , true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.getProductView();
        this.spinner.hide();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  getProductView() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.products[0];
    this.setClient();
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser.idUser;
      let accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
      this.sentXSB.client = this.client;
      this.sentXSB.name = accSpct + this.currentUser.name + ' | ' + this.currentUser.country.name;
      this.findShippingAddress(this.client);
    } else if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          this.listCustomers = this.listCustomersAux;
          this.listCustomers.map((i) => {
            let accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' + i.country.name;
            return i;
          });
        }
      });
    }
  }

  send() {
    this.productService.sendXSB$(this.sentXSB.client, this.id, this.sentXSB).subscribe(res => {
      this.spinner.hide();
      this.notification.success('', this.translate.instant('Your order has been successfully generated'));
      this.router.navigate(['/products']);
    }, error => {
      this.spinner.hide();
      console.log(error)
    });
  }

  formIsValid() {
    let isValid = true;
    if (this.sentXSB.client === null || this.sentXSB.lentType === null || this.sentXSB.patient === null) {
      isValid = false;
    }
    return isValid;
  }

  removeFile(item) {
    this.uploader.removeFromQueue(item);
    this.clearSelectedFile();
  }

  clearSelectedFile() {
    this.selectedFiles.nativeElement.value = '';
  }

  saveFiles(): void {
    this.spinner.show();
    this.listFile = new Array;
    if (this.uploader.queue.length) {
      _.each(this.uploader.queue, function (item) {
        item.upload()
      });
    } else {
      this.send();
    }
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
      this.sentXSB.listFile = this.listFile;
      this.send();
    }
  }

  verifyOpenModal() {
    if (this.uploader.queue.length === this.listFile.length) {
    }
  }

  onSelectedClient(clienteSelect) {
    if (clienteSelect !== undefined) {
      this.client = clienteSelect.idUser;
      this.findShippingAddress(this.client);
    } else {
      this.client = '';
      this.product.shippingAddress = '';
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

}
