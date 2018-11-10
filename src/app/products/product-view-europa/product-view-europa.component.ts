import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
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

const URL = environment.apiUrl + 'fileProductRequested/uploader';


@Component({
  selector: 'app-product-view-europa',
  templateUrl: './product-view-europa.component.html',
  styleUrls: ['./product-view-europa.component.scss']
})
export class ProductViewEuropaComponent implements OnInit {

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
  signPowerRight: any;
  signPowerLeft: any;
  // Upload files
  @ViewChild('selectedFiles') selectedFiles: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFileBasket: Array<FileProductRequested> = new Array;
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
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
              private translate: TranslateService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());

    this.uploader.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item);
        this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
          this.notification.error('', res);
        });
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
    this.getProducts();
    this.clearFiles();
  }

  getProducts() {
    this.productService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.getProductView();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getProductView() {
    console.log(JSON.stringify(_.range(4, 10, 0.5)));
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {idProduct: this.id});
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    this.product.headerRight = JSON.parse(this.product.types)[0].header;
    this.product.headerLeft = JSON.parse(this.product.types)[0].header;
    this.product.pasosRight = JSON.parse(this.product.types)[0].pasos;
    this.product.pasosLeft = JSON.parse(this.product.types)[0].pasos;
    this.product.properties = JSON.parse(this.product.infoAditional)[0];
    this.product.priceSale = '';
    this.setClient();
    this.setPrice();
  }

  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Hidrapeg'|| parameter.name === 'Inserts'){
      parameter.selected = parameter.selected === "Yes" ? true : false;
    }
  }

  setValueEye(eye) {
    if (eye === "right") {
      this.product.eyeRight = !this.product.eyeRight;
      this.product.quantityRight = '';
      if (this.product.eyeRight) {
        this.product.quantityRight = 1;
      }
    } else {
      this.product.eyeLeft = !this.product.eyeLeft;
      this.product.quantityLeft = '';
      if (this.product.eyeLeft) {
        this.product.quantityLeft = 1;
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
          // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
          this.listCustomers = _.filter(this.listCustomersAux, function(u) {
            return !(u.cardCode === null || u.cardCode === '');
          });
           // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
           // todavia no se agregado ese campo en la bd
        }
      });
    }
  }

  onSelectedClient(clienteSelect) {
    if (clienteSelect !== undefined) {
      this.client = clienteSelect.idUser;
      this.findShippingAddress(this.client);
      this.definePrice(clienteSelect.membership.idMembership);
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
    let signPowerLeft = this.signPowerLeft;
    let signPowerRight = this.signPowerRight;

    _.each(productsSelected, function(productSelected, index) {

      productSelected.id = product.idProduct;
      productSelected.patient = product.patient;
      productSelected.price = product.priceSale;

      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;

        /* headers*/
        _.each(product.headerRight, function(parameter, index) {
          product.headerRight[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.header = product.headerRight;

        /*params*/
        _.each(product.parametersRight, function(parameter, index) {
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
          if (parameter.name === "Power") {
            product.parametersRight[index].selected = signPowerRight + parameter.selected;
          }
        });
        productSelected.parameters = product.parametersRight;

        /*steps*/
        _.each(product.pasosRight, function(PC) {
          _.each(PC.values, function(step) {
            _.each(step.values, function(value, index) {
              step.values[index] = _.omit(value, ['type', 'sel']);
            });
          });
        });
        productSelected.pasos = product.pasosRight;

      }

      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;

        /* headers*/
        _.each(product.headerLeft, function(parameter, index) {
          product.headerLeft[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.header = product.headerLeft;

        /*params*/
        _.each(product.parametersLeft, function(parameter, index) {
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
          if (parameter.name === "Power") {
            product.parametersLeft[index].selected = signPowerLeft + parameter.selected;
          }
        });
        productSelected.parameters = product.parametersLeft;

        /*steps*/
        _.each(product.pasosLeft, function(PC) {
          _.each(PC.values, function(step) {
            _.each(step.values, function(value, index) {
              step.values[index] = _.omit(value, ['type', 'sel']);
            });
          });
        });
        productSelected.pasos = product.pasosLeft;
      }

      productSelected.detail = { name: product.type, eye: productSelected.eye, header: productSelected.header, parameters: productSelected.parameters, pasos:productSelected.pasos };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye', 'pasos', 'header'])
    });

    return productsSelected;
  }

  addToCart(type) {
    this.productCopy = JSON.parse(JSON.stringify(this.product));
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

    this.openModal(type);
  }

  openModal(type): void {
    const modalRef = this.modalService.open( ConfirmationBuyComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.listFileBasket = this.listFileBasket;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  formIsValid() {
    var isValid = true;
    if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient){
      return false;
    }

    if (this.product.eyeRight) {
      _.each(this.product.parametersRight, function (param){
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.signPowerRight) {
        isValid = false;
      }
    }

    if (this.product.eyeLeft) {
      _.each(this.product.parametersLeft, function (param){
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.signPowerLeft) {
        isValid = false;
      }
    }
    return isValid;
  }

  setChecked(value, PC) {
    _.each(PC.values, function(step){
      _.each(step.values, function(value){
        value.selected = false;
      });
    });
    value.selected = !value.selected;
  }

  setNotch(parameter) {
    if (parameter.values[0].selected === null || parameter.values[1].selected === null) {
      parameter.selected = null;
    } else {
      parameter.selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
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

  removeFile(item) {
    this.uploader.removeFromQueue(item);
    this.clearSelectedFile();
  }

  clearSelectedFile() {
    this.selectedFiles.nativeElement.value = '';
  }

  clearFiles() {
    if (this.uploader.queue.length) {
      this.uploader.clearQueue();
      this.clearSelectedFile();
    }
  }

  saveFiles(): void {
    this.listFileBasket = new Array;
    if (this.uploader.queue) {
      _.each(this.uploader.queue, function (item) {
        item.upload();
      });
    }
  }

  private buildFileProductRequested() {
    if (this.uploadResult.success) {
      const fileProductRequest: FileProductRequested = new FileProductRequested();
      fileProductRequest.url  = JSON.parse(this.uploadResult.response).data;
      fileProductRequest.name = this.uploadResult.item.file.name;
      fileProductRequest.type = this.uploadResult.item.file.type;
      fileProductRequest.size = this.uploadResult.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFileBasket.push(fileProductRequest);
    } else {
      console.log('error file');
    }
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
}
