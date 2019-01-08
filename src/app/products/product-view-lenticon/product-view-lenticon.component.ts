import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { FileUploader } from 'ng2-file-upload';
import { ProductService } from '../../shared/services/products/product.service';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';
import { BasketService } from '../../shared/services/basket/basket.service';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ProductRequested } from '../../shared/models/productrequested';
import { Product } from '../../shared/models/product';
import { ConfirmationLenticonComponent } from '../modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component';
import { environment } from '../../../environments/environment';
import { saveAs } from 'file-saver';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-lenticon',
  templateUrl: './product-view-lenticon.component.html',
  styleUrls: ['./product-view-lenticon.component.scss']
})
export class ProductViewLenticonComponent implements OnInit {


  products: Array<any> = new Array;
  product: any;
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
  membership: any;
  addRight = false;
  addLeft = false;
  // Upload files
  @ViewChild('selectedFiles') selectedFiles: any;
  @ViewChild('selectedFilesLeftEye') selectedFilesLeftEye: any;
  @ViewChild('selectedFilesRightEye') selectedFilesRightEye: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFileBasket: Array<FileProductRequested> = new Array;
  listFileLeftEye: Array<FileProductRequested> = new Array;
  listFileRightEye: Array<FileProductRequested> = new Array;
  private uploadResultLeftEye: any = null;
  private uploadResultRightEye: any = null;
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
              private modalService: NgbModal,
              public router: Router,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());

    this.uploaderLeftEye.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize('Left');

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
      const maxSize = this.maxFilesSize('Right');

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
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplier$(3).subscribe(res => {
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
    console.log(JSON.stringify(_.range(4, 10, 0.5)));
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {idProduct: this.id});
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    this.product.setRight = JSON.parse(this.product.types)[0].set;
    this.product.setLeft = JSON.parse(this.product.types)[0].set;
    this.product.priceSaleRight = 0;
    this.product.priceSaleLeft = 0;
    this.product.pupillaryRight = null;
    this.product.pupillaryLeft = null;
    this.setClient();
    this.setPrice();
  }

  changeSelect(eye, parameter, value, value2) {
    parameter.selected = value;
    if (parameter.name === 'num.LC') {
      if (eye === 'right') {
        this.product.setRight[2].selected = this.product.setRight[2].values[parseInt(value.id)]; //Base curve
        this.product.setRight[3].selected = this.product.setRight[3].values[parseInt(value.id)]; // Power
        this.product.setRight[4].selected = this.product.setRight[4].values[parseInt(value.id)]; // exc
      } else {
        this.product.setLeft[2].selected = this.product.setLeft[2].values[parseInt(value.id)]; //Base curve
        this.product.setLeft[3].selected = this.product.setLeft[3].values[parseInt(value.id)]; // Power
        this.product.setLeft[4].selected = this.product.setLeft[4].values[parseInt(value.id)];  // exc
      }
    }
    if (parameter.name === 'Design') {
       if (parameter.selected === 'Elipsys_STD_MF' || parameter.selected === 'Elipsys_KC_MF'  || parameter.selected === 'Elipsys_SE_MF') {
          if (eye === 'right') {
             this.addRight = true;
          } else {
             this.addLeft = true;
          }
       } else {
          if (eye === 'right') {
            this.addRight = false;
            this.product.parametersRight[5].selected = null;
            this.product.parametersRight[5].sel = null;
            this.product.pupillaryRight = null;
          } else {
            this.addLeft = false;
            this.product.parametersLeft[5].selected = null;
            this.product.parametersLeft[5].sel = null;
            this.product.pupillaryLeft = null;
          }
       }
    }
  }

  setValueEye(eye) {
    if (eye === 'right') {
      this.product.eyeRight = !this.product.eyeRight;
      if (!this.product.eyeRight) {
        this.clean('right');
        this.addRight = false;
      }
    } else {
      this.product.eyeLeft = !this.product.eyeLeft;
      if (!this.product.eyeLeft) {
        this.clean('left');
        this.addLeft = false;
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
      this.client = this.currentUser.idUser;
      this.product.client = this.currentUser.name;
      this.findShippingAddress(this.client);

    } else if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          this.listCustomers = this.listCustomersAux;
        }
      });
    }
  }

  onSelectedClient(clienteSelect) {
    if (clienteSelect !== undefined) {
      this.client = clienteSelect.idUser;
      this.membership = clienteSelect.membership.idMembership;
      this.findShippingAddress(this.client);
      this.definePrice(clienteSelect.membership.idMembership);
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSaleRight = 0;
      this.product.priceSaleLeft = 0;
      this.product.priceSale = 0;
      this.membership = 0;
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
       this.membership = this.currentUser.membership.idMembership;
       this.definePrice(this.membership);
    }
  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.product.priceSale = this.product.price1;
        break;
      case 2:
        this.product.priceSale = this.product.price2;
        break;
      case 3:
        this.product.priceSale = this.product.price3;
        break;
    }
  }

  buildProductsSelected() {
    this.setEyeSelected();
    let product = this.productCopy;
    let productsSelected = this.productsSelected;
    let pupillaryRight = this.product.pupillaryRight === null ? '' : this.product.pupillaryRight;
    let pupillaryLeft = this.product.pupillaryLeft === null ? '' : this.product.pupillaryLeft;
    console.log('test', JSON.parse(JSON.stringify(this.uploadResultRightEye)));
    console.log('test1', JSON.parse(JSON.stringify(this.uploadResultLeftEye)));
    _.each(productsSelected, function(productSelected, index) {

      productSelected.id = product.idProduct;
      productSelected.patient = product.patient;
      productSelected.price = product.priceSale;
      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;

        /* set*/
        _.each(product.setRight, function(parameter, index) {
          if (parameter.name === 'num.LC') {
            let value = parameter.selected.value;
            parameter.selected = value;
          }
          product.setRight[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.set = product.setRight;

        /*params*/
        _.each(product.parametersRight, function(parameter, index) {
          if (parameter.name === 'Addition' || parameter.name === 'Center') {
            if (parameter.selected === null || parameter.selected === undefined ) {
              parameter.selected = '';
            }
          }
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
        });
        productSelected.parameters = product.parametersRight;
        productSelected.parameters.push({'name': 'Pupillary diameter', 'selected': pupillaryRight});

      }
      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;

        /* set*/
        _.each(product.setLeft, function(parameter, index) {
          if (parameter.name === 'num.LC') {
            let value = parameter.selected.value;
            parameter.selected = value;
          }
          product.setLeft[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.set = product.setLeft;

        /*params*/
        _.each(product.parametersLeft, function(parameter, index) {
          if (parameter.name === 'Addition' || parameter.name === 'Center') {
            if (parameter.selected === null || parameter.selected === undefined ) {
              parameter.selected = '';
            }
          }
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
        });
        productSelected.parameters = product.parametersLeft;
        productSelected.parameters.push({'name': 'Pupillary diameter', 'selected': pupillaryLeft});
      }

      productSelected.detail = { name: product.name, eye: productSelected.eye, parameters: productSelected.parameters,
        set: productSelected.set };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye', 'set']);
    });

    return productsSelected;
  }

  addToCart(type) {
    this.productCopy = JSON.parse(JSON.stringify(this.product));
    this.saveFiles();
    const productsRequested = [];
    const productsSelected = this.buildProductsSelected();
    _.each(productsSelected, function (product) {
      const productRequest: ProductRequested = new ProductRequested();
      const productoSelect: Product = new Product();
      productoSelect.idProduct = product.id;
      productRequest.product = productoSelect;
      productRequest.quantity = product.quantity;
      productRequest.price = product.price;
      productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
      productRequest.patient = product.patient;
      productRequest.observations = product.observations;
      productsRequested.push(productRequest);
    });
    this.basketRequestModal.idUser = this.client;
    this.basketRequestModal.productRequestedList = productsRequested;
    // this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
    this.openModal(type);
  }

  openModal(type): void {
    console.log('fils1', this.listFileLeftEye);
    console.log('fils2', this.listFileRightEye);

    const modalRef = this.modalService.open( ConfirmationLenticonComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  formIsValid() {
    let isValid = true;
    if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
      return false;
    }
    if (this.product.eyeRight) {
      let addAux = false;
      _.each(this.product.parametersRight, function (param) {
        if (param.name === 'Design') {
          if (param.selected === 'Elipsys_STD_MF' ||
          param.selected === 'Elipsys_KC_MF' || param.selected === 'Elipsys_SE_MF'){
            addAux = true;
          }
       } else {
          if (param.name === 'Addition') {
             if ((param.selected === null || param.selected === undefined) && addAux) {
              isValid = false;
             }
          }
        }
      });
      _.each(this.product.setRight, function (param) {
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
         }
      });
      if ((this.product.pupillaryRight === null && addAux ) || (this.product.quantityRight === null
        || this.product.quantityRight === undefined)) {
        isValid = false;
      }
    }

    if (this.product.eyeLeft) {
      let addAux = false;
      _.each(this.product.parametersLeft, function (param) {
        if (param.name === 'Design') {
          if (param.selected === 'Elipsys_STD_MF' ||
          param.selected === 'Elipsys_KC_MF' || param.selected === 'Elipsys_SE_MF'){
            addAux = true;
          }
       } else {
          if (param.name === 'Addition') {
             if ((param.selected === null || param.selected === undefined) && addAux) {
              isValid = false;
             }
          }
        }
      });
      _.each(this.product.setLeft, function (param) {
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
         }
      });
      if ((this.product.pupillaryLeft === null && addAux) || (this.product.quantityLeft === null
        || this.product.quantityLeft === undefined))  {
        isValid = false;
      }
    }
    return isValid;
  }

  clean(eye) {
    let parameters;
    if (eye === 'right') {
      parameters = this.product.parametersRight;
      this.product.quantityRight = '';
      this.product.observationsRight = '';
      this.product.setRight[0].selected = null;
      this.product.setRight[0].sel = null;
      this.product.setRight[2].selected = null;
      this.product.setRight[3].selected = null;
      this.product.setRight[4].selected = null;
      this.product.pupillaryRight = null;
    } else {
      parameters = this.product.parametersLeft;
      this.product.quantityLeft = '';
      this.product.observationsLeft = '';
      this.product.setLeft[0].selected = null;
      this.product.setLeft[0].sel = null;
      this.product.setLeft[2].selected = null;
      this.product.setLeft[3].selected = null;
      this.product.setLeft[4].selected = null;
      this.product.pupillaryLeft = null;
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

  maxFilesSize(eye) {
    let maxFileSize = 0;
    if (eye === 'Right') {
      if (this.uploaderRightEye.queue) {
        _.each(this.uploaderRightEye.queue, function (item) {
          maxFileSize = maxFileSize + item.file.size;
        });
      }
    } else if (eye === 'Left') {
      if (this.uploaderLeftEye.queue) {
        _.each(this.uploaderLeftEye.queue, function (item) {
          maxFileSize = maxFileSize + item.file.size;
        });
      }
    }
    return maxFileSize;
  }

  removeFile(item, eye) {
    if (eye === 'Right') {
      this.uploaderRightEye.removeFromQueue(item);
    } else if (eye === 'Left') {
      this.uploaderLeftEye.removeFromQueue(item);
    }
    this.clearSelectedFile(eye);
  }

  clearSelectedFile(eye) {
    if (eye === 'Right') {
      this.selectedFilesRightEye.nativeElement.value = '';
    } else if (eye === 'Left') {
      this.selectedFilesLeftEye.nativeElement.value = '';
    }
  }

  clearFiles() {
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
    this.listFileLeftEye = new Array;
    this.listFileRightEye = new Array;
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
    } if (eye === 'Left' && this.uploadResultLeftEye.success) {
      const fileProductRequest: FileProductRequested = new FileProductRequested();
      fileProductRequest.url  = JSON.parse(this.uploadResultLeftEye.response).data;
      fileProductRequest.name = this.uploadResultLeftEye.item.file.name;
      fileProductRequest.type = this.uploadResultLeftEye.item.file.type;
      fileProductRequest.size = this.uploadResultLeftEye.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFileLeftEye.push(fileProductRequest);
    }
  }

  download() {
    const language = this.userStorageService.getLanguage();
    let name;
    language === 'en' ? name = 'Elipsys-en' : name = 'Elipsys-es';
    this.productService.download$(name).subscribe(res => {
      const filename = name + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }
}
