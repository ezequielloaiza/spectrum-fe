import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { ProductRequested } from '../../shared/models/productrequested';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BasketService } from '../../shared/services/basket/basket.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../shared/models/product';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationBuyComponent } from '../modals/confirmation-buy/confirmation-buy.component';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../shared/services/fileproductrequested/fileproductrequested.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ConfirmationEuclidComponent } from '../modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component';
import { NgxSpinnerService } from 'ngx-spinner';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-euclid',
  templateUrl: './product-view-euclid.component.html',
  styleUrls: ['./product-view-euclid.component.scss']
})
export class ProductViewEuclidComponent implements OnInit {

  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  product: any;
  productCodeL: any;
  productCodeR: any;
  productCopy: any;
  id: any;
  parameters: any;
  quantity = 1;
  order: any;
  productsSelected: Array<any> = new Array;
  currentUser: any;
  user: any;
  ngSelect: any;
  basketRequestModal: BasketRequest = new BasketRequest();
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;
  warrantyRight = false;
  warrantyLeft = false;
  type: any;
  // Upload files
  @ViewChild('selectedFiles') selectedFiles: any;
  @ViewChild('selectedFilesLeftEye') selectedFilesLeftEye: any;
  @ViewChild('selectedFilesRightEye') selectedFilesRightEye: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFileBasket: Array<FileProductRequested> = new Array;
  listFileLeftEye: Array<FileProductRequested> = new Array;
  listFileRightEye: Array<FileProductRequested> = new Array;
  private uploadResult: any = null;
  private uploadResultLeftEye: any = null;
  private uploadResultRightEye: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    authToken: this.userStorageService.getToke(),
                                                    autoUpload: false});
  public uploaderLeftEye: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    authToken: this.userStorageService.getToke(),
                                                    autoUpload: false});
  public uploaderRightEye: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    authToken: this.userStorageService.getToke(),
                                                    autoUpload: false});

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private userStorageService: UserStorageService,
              private basketService: BasketService,
              private shippingAddressService: ShippingAddressService,
              private userService: UserService,
              private fileProductRequestedService: FileProductRequestedService,
              private modalService: NgbModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());

    /*this.uploader.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item, '');
        this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
          this.notification.error('', res);
        });
      }
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.uploadResult = {'success': true, 'item': item, 'response':
                           response, 'status': status, 'headers': headers};
      if (this.uploadResult) {
        // this.buildFileProductRequested();
      }
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
        this.uploadResult = {'success': true, 'item': item, 'response':
                             response, 'status': status, 'headers': headers};
    };*/
    this.uploaderLeftEye.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item, 'Left');
        this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
          this.notification.error('', res);
        });
      }
    };
    this.uploaderLeftEye.onSuccessItem = (item, response, status, headers) => {
      this.uploadResultLeftEye = {'success': true, 'item': item, 'response':
                           response, 'status': status, 'headers': headers};
      if (this.uploadResultLeftEye) {
        this.buildFileProductRequested('Left');
      }
    };
    this.uploaderLeftEye.onErrorItem = (item, response, status, headers) => {
        this.uploadResultLeftEye = {'success': true, 'item': item, 'response':
                             response, 'status': status, 'headers': headers};
    };
    this.uploaderRightEye.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item, 'Right');
        this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
          this.notification.error('', res);
        });
      }
    };
    this.uploaderRightEye.onSuccessItem = (item, response, status, headers) => {
      this.uploadResultRightEye = {'success': true, 'item': item, 'response':
                           response, 'status': status, 'headers': headers};
      if (this.uploadResultRightEye) {
        this.buildFileProductRequested('Right');
      }
    };
    this.uploaderRightEye.onErrorItem = (item, response, status, headers) => {
        this.uploadResultRightEye = {'success': true, 'item': item, 'response':
                             response, 'status': status, 'headers': headers};
    };
  }

  ngOnInit() {
    this.getProducts();
    this.clearFiles();
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplierInView$(4, true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.productService.findBySupplierAndInViewAndCategory$(4, false, 10).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.productsCode = res1.data;
          } else {
            console.log(res1.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
          this.spinner.hide();
        });
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
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {idProduct: this.id});
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    _.reverse(this.product.parametersRight[4].values);
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    _.reverse(this.product.parametersLeft[4].values);
    this.product.properties = JSON.parse(this.product.infoAditional)[0];
    this.product.pricesAditionalWarranties = JSON.parse(this.product.infoAditional)[1].values[0];
    this.product.priceSale = '';
    this.product.additional = '';
    this.setClient();
    this.setPrice();
  }

  setCodeProduct(cod, lat) {
    const productName = this.product.name;
    let prCode;
    _.each(this.productsCode, function (pr) {
      if (_.includes(pr.name, productName) && _.includes(pr.codeSpectrum, cod)) {
        prCode = pr;
      }
    });
    if (lat === 'right') {
      this.productCodeR = prCode;
    } else {
      this.productCodeL = prCode;
    }
  }


  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Warranty') {
      if (eye === 'right') {
        if (parameter.selected === 'Yes') {
          this.warrantyRight = true;
          this.setCodeProduct('(W)' , 'right');
        } else {
          this.warrantyRight = false;
          this.setCodeProduct('(NW)', 'right');
        }
      }

      if (eye === 'left') {
        if (parameter.selected === 'Yes') {
          this.warrantyLeft = true;
          this.setCodeProduct('(W)', 'left');
        } else {
          this.warrantyLeft = false;
          this.setCodeProduct('(NW)', 'left');
        }
      }
      if (this.client) {
        this.definePrice(this.client.membership.idMembership);
      }
    }

    if (parameter.name === 'Axes (º)') {
      parameter.selected = this.axisFormat(value);
    }
    if (parameter.name === 'Flat K' || parameter.name === 'Steep K' || parameter.name === 'HVID' ||
    (parameter.name === 'Sphere (D)' && parameter.type === 'input')) {
      parameter.selected = this.format(value);
    }
  }

  axisFormat(value): any {
    let axes;
    if (value !== null) {
      if (value <= 180) {
        axes = this.completeStart(value, 3);
      } else {
        axes = null;
      }
    }
     return axes;
  }

  cilinderFormat(value): any {
    let cilinder;
    let toString;
    if (value !== null) {
      toString = value.toString();
        if (_.includes(toString, '-')) {
          cilinder = this.formatCi(toString);
        } else if (value !== 0 && value !== '0.00') {
          cilinder = '-' + this.formatCi(toString);
        } else {
          cilinder = this.formatCi(toString);
        }
      }
      return cilinder;
    }

  format(value): any {
    let flat;
    let partInt;
    let partDec;
    let pos;
    let toString;
    if (value !== null) {
      toString = value.toString();
      if (_.includes(toString, '.')) {
        pos = _.indexOf(toString, '.');
        partInt = toString.slice( 0, pos);
        if (partInt <= 99) {
          partDec = toString.slice( pos + 1, toString.length);
          flat = this.completeStart(partInt, 2) + '.' + this.completeEnd(partDec, 2);
        } else {
            flat = null;
        }
      } else {
          if (value <= 99) {
            flat = this.completeStart(value, 2) + '.00';
          } else {
            flat = null;
          }
      }
      return flat;
    }
  }

  formatCi(value): any {
    let cilinder;
    let partInt;
    let partDec;
    let pos;
    let toString;
    if (value !== null) {
      toString = value.toString();
      if (_.includes(toString, '.')) {
        pos = _.indexOf(toString, '.');
        partInt = toString.slice( 0, pos);
        partDec = toString.slice( pos + 1, toString.length);
        cilinder = this.completeStart(partInt, 1) + '.' + this.completeEnd(partDec, 2);
      } else {
        cilinder = this.completeStart(value, 1) + '.00';
      }
      return cilinder;
    }
  }

  completeStart(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padStart(filteredId, tamano, '0');
    return filteredId;

  }

  completeEnd(value, tamano): any {
    let filteredId = value.toString();
    filteredId = _.padEnd(filteredId, tamano, '0');
    return filteredId;

  }

  setValueEye(eye) {
    if (eye === 'right') {
      this.product.eyeRight = !this.product.eyeRight;
      if (!this.product.eyeRight) {
        this.clean('right');
      }
    } else {
      this.product.eyeLeft = !this.product.eyeLeft;
      if (!this.product.eyeLeft) {
        this.clean('left');
      }
    }
  }

  setEyeSelected() {
    this.productsSelected = [];

    if (this.product.eyeRight) {
      this.productsSelected.push({eye: 'Right'});
    }
    if (this.product.eyeLeft) {
      this.productsSelected.push({eye: 'Left'});
    }
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser;
      this.product.client = this.currentUser.name;
      this.findShippingAddress(this.client.idUser);

    } else if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
          this.listCustomers = _.filter(this.listCustomersAux, function(u) {
            return !(u.certificationCode === null || u.certificationCode === '');
          });
        }
      });
    }
  }

  onSelectedClient(clientSelect) {
    if (clientSelect !== undefined) {
      this.client = clientSelect;
      this.findShippingAddress(this.client.idUser);
      this.definePrice(clientSelect.membership.idMembership);
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSale = '';
    }
  }

  findShippingAddress(idCliente) {
    this.shippingAddressService.findIdUser$(idCliente).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
      } else if (res.code === CodeHttp.notContent) {
        this.product.shippingAddress = '';
        this.translate.get('You must enter a main address in the shipping address module',
         {value: 'You must enter a main address in the shipping address module'}).subscribe(( res: string) => {
          this.notification.warning('', res);
        });
      } else {
        this.product.shippingAddress = '';
      }
    });
  }

  setPrice() {
    if (this.user.role.idRole === 3) {
      const membership = this.currentUser.membership.idMembership;
       this.definePrice(membership);
    }
  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.product.priceSale = this.product.price1;
        this.product.additional = this.product.pricesAditionalWarranties.values[0].price - this.product.price1;
        break;
      case 2:
        this.product.priceSale = this.product.price2;
        this.product.additional = this.product.pricesAditionalWarranties.values[1].price - this.product.price2;
        break;
      case 3:
        this.product.priceSale = this.product.price3;
        this.product.additional = this.product.pricesAditionalWarranties.values[2].price - this.product.price3;
        break;
    }
  }

  buildProductsSelected() {
    this.setEyeSelected();
    let product = this.productCopy;
    let productCodeL = this.productCodeL;
    let productCodeR = this.productCodeR;
    let productsSelected = this.productsSelected;
    let warrantyRight = this.warrantyRight;
    let warrantyLeft = this.warrantyLeft;

    _.each(productsSelected, function(productSelected, index) {

      productSelected.patient = product.patient;
      productSelected.price = product.priceSale;
      if (productSelected.eye === "Right") {
        productSelected.id = productCodeR.idProduct;
        productSelected.codeSpectrum = productCodeR.codeSpectrum;
        productSelected.quantity = product.quantityRight;

        if (warrantyRight) {
          productSelected.price = productSelected.price + product.additional;
        }
        productSelected.observations = product.observationsRight;
        _.each(product.parametersRight, function(parameter, index) {
            if (parameter.name === 'Warranty') {
              parameter.selected = parameter.selected === 'Yes' ? true : false;
            }
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
        });

        productSelected.parameters = product.parametersRight;
      }

      if (productSelected.eye === "Left") {
        productSelected.id = productCodeL.idProduct;
        productSelected.codeSpectrum = productCodeL.codeSpectrum;
        productSelected.quantity = product.quantityLeft;

        if (warrantyLeft) {
          productSelected.price = productSelected.price + product.additional;
        }
        productSelected.observations = product.observationsLeft;
        _.each(product.parametersLeft, function(parameter, index) {
            if (parameter.name === 'Warranty') {
              parameter.selected = parameter.selected === 'Yes' ? true : false;
           }
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
        });

        productSelected.parameters = product.parametersLeft;
      }

      productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye']);
    });
    return productsSelected;
  }

  addToCart(type) {
    this.type = type;
    this.spinner.show();
    this.productCopy = JSON.parse(JSON.stringify(this.product));
    const productsRequested = [];
    this.saveFiles();
    const productsSelected = this.buildProductsSelected();
    _.each(productsSelected, function (product) {
      const productRequest: ProductRequested = new ProductRequested();
      const productoSelect: Product = new Product();
      productoSelect.idProduct = product.id;
      productoSelect.codeSpectrum = product.codeSpectrum;
      productRequest.product = productoSelect;
      productRequest.quantity = product.quantity;
      productRequest.price = product.price;
      productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
      productRequest.patient = product.patient;
      productRequest.observations = product.observations;
      productsRequested.push(productRequest);
    });
    this.basketRequestModal.idUser = this.client.idUser;
    this.basketRequestModal.productRequestedList = productsRequested;
   // this.openModal(type);
  }

  verifyOpenModal() {
   if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
    && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
    this.openModal(this.type);
   }
  }

  openModal(type): void {
    this.spinner.hide();
    const modalRef = this.modalService.open( ConfirmationEuclidComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    // modalRef.componentInstance.listFileBasket = this.listFileBasket;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.additional = this.product.additional;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  formIsValid() {
    var isValid = true;
    if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
      return false;
    }

    if (this.product.eyeRight) {
      if (this.product.quantityRight === undefined) {
        return false;
      }
      _.each(this.product.parametersRight, function (param){
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.product.quantityRight) {
        isValid = false;
      }
    }

    if (this.product.eyeLeft) {
      if (this.product.quantityLeft === undefined) {
        return false;
      }
      _.each(this.product.parametersLeft, function (param){
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.product.quantityLeft) {
        isValid = false;
      }
    }
    return isValid;
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

  removeFile(item, eye) {
    // this.uploader.removeFromQueue(item);
    if (eye === 'Right') {
      this.uploaderRightEye.removeFromQueue(item);
    } else if (eye === 'Left') {
      this.uploaderLeftEye.removeFromQueue(item);
    }
    this.clearSelectedFile(eye);
  }

  clearSelectedFile(eye) {
    // this.selectedFiles.nativeElement.value = '';
    if (eye === 'Right') {
      this.selectedFilesRightEye.nativeElement.value = '';
    } else if (eye === 'Left') {
      this.selectedFilesLeftEye.nativeElement.value = '';
    }
  }

  clearFiles() {
    /*if (this.uploader.queue.length) {
      this.uploader.clearQueue();
      // this.clearSelectedFile();
    }*/
    if (this.uploaderLeftEye.queue.length) {
      this.uploaderLeftEye.clearQueue();
      this.clearSelectedFile('Left');
    }
    if (this.uploaderRightEye.queue.length) {
      this.uploaderRightEye.clearQueue();
      this.clearSelectedFile('Right');
    }
  }

  saveFiles(): void {
    // this.listFileBasket = new Array;
    this.listFileLeftEye = new Array;
    this.listFileRightEye = new Array;
    /*if (this.uploader.queue) {
      _.each(this.uploader.queue, function (item) {
        item.upload();
      });
    }*/
    if (this.uploaderLeftEye.queue) {
      _.each(this.uploaderLeftEye.queue, function (item) {
        item.upload();
      });
    }
    if (this.uploaderRightEye.queue) {
      _.each(this.uploaderRightEye.queue, function (item) {
        item.upload();
      });
    }

    if (!this.uploaderLeftEye.queue.length && !this.uploaderRightEye.queue.length) {
      this.openModal(this.type);
    }
  }

  private buildFileProductRequested(eye) {
    if (eye === 'Right' && this.uploadResultRightEye.success) {
      const fileProductRequest: FileProductRequested = new FileProductRequested();
      fileProductRequest.url  = JSON.parse(this.uploadResultRightEye.response).data;
      fileProductRequest.name = this.uploadResultRightEye.item.file.name;
      fileProductRequest.type = this.uploadResultRightEye.item.file.type;
      fileProductRequest.size = this.uploadResultRightEye.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFileRightEye.push(fileProductRequest);
      this.verifyOpenModal();
    } if (eye === 'Left' && this.uploadResultLeftEye.success) {
      const fileProductRequest: FileProductRequested = new FileProductRequested();
      fileProductRequest.url  = JSON.parse(this.uploadResultLeftEye.response).data;
      fileProductRequest.name = this.uploadResultLeftEye.item.file.name;
      fileProductRequest.type = this.uploadResultLeftEye.item.file.type;
      fileProductRequest.size = this.uploadResultLeftEye.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFileLeftEye.push(fileProductRequest);
      this.verifyOpenModal();
    }
  }

  clean(eye) {
    let parameters;
    if (eye === 'right') {
      parameters = this.product.parametersRight;
      this.product.quantityRight = '';
      this.product.observationsRight = '';
    } else {
      parameters = this.product.parametersLeft;
      this.product.quantityLeft = '';
      this.product.observationsLeft = '';
    }
    // parameter
    _.each(parameters, function(param) {
          param.selected = null;
          param.sel = null;
    });
    if (eye === 'right') {
      this.product.parametersRight = parameters;
    } else {
      this.product.parametersLeft = parameters;
    }
  }


}
