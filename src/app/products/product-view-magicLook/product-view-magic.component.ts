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
import { ConfirmationMagicLookComponent } from '../modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component';
import { debug } from 'util';
import { NgxSpinnerService } from 'ngx-spinner';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-magic',
  templateUrl: './product-view-magic.component.html',
  styleUrls: ['./product-view-magic.component.scss']
})
export class ProductViewMagicComponent implements OnInit {

  products: Array<any> = new Array;
  boxes: Array<any> = new Array;
  boxesCopy: any;
  tones: Array<any> = new Array;
  product: any;
  productCopy: any;
  id: any;
  parameters: any;
  quantity = 1;
  order: any;
  currentUser: any;
  user: any;
  ngSelect: any;
  basketRequestModal: BasketRequest = new BasketRequest();
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;
  priceFrom: any;
  priceUp: any;
  clientSelected: any;
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
              private fileProductRequestedService: FileProductRequestedService,
              private modalService: NgbModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) {
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
    this.spinner.show();
    this.productService.findBySupplier$(5).subscribe(res => {
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
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {idProduct: this.id});
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.product.parameters = JSON.parse(this.product.types)[0].parameters;
    this.product.parametersBoxes = JSON.parse(this.product.types)[0].parametersBoxes;
    this.product.properties = JSON.parse(this.product.infoAditional)[0];
    this.product.priceSale = '';

    //adding first box in array boxes
    let parametersBox = { parameters: JSON.parse(JSON.stringify(this.product.parametersBoxes))};
    this.boxes.push(parametersBox);
    this.setClient();
    this.setPrice();
  }

  addBox() {
    let parametersBox = { parameters: JSON.parse(JSON.stringify(this.product.parametersBoxes))};
    this.boxes.push(parametersBox);
  }

  removeBox(index) {
    if (this.boxes.length > 1) {
      this.boxes.splice(index, 1);
    }
  }

  changeSelect(parameter, value) {
    parameter.selected = value;
    if (parameter.name === "Tone") {
      switch (value) {
        /*case "1 TONE":
          this.tones[value] = this.product.parametersBoxes[1].values[0];
          break;
        case "2 TONE":
          this.tones[value] = this.product.parametersBoxes[1].values[1];
          break;*/
        case "3 TONE":
          //this.tones[value] = this.product.parametersBoxes[1].values[2];
          this.tones[value] = this.product.parametersBoxes[1].values[0];
          break;
      }
      this.product.parametersBoxes[0].selected = null;
      }
    }

  setValueEye(eye) {
    if (eye === "right") {
      this.product.eyeRight = !this.product.eyeRight;
    } else {
      this.product.eyeLeft = !this.product.eyeLeft;
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
      this.clientSelected = clienteSelect;
      this.client = clienteSelect.idUser;
      this.findShippingAddress(this.client);
      this.definePrice(clienteSelect.membership.idMembership);
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSale = '';
      this.priceFrom = '';
      this.priceUp = '';
      this.clientSelected = '';
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
    let info = JSON.parse(this.product.infoAditional);
    let totalQuantity = _.sumBy(this.boxes, 'quantity');
    const pos = this.calculateQuantity();
        switch (membership) {
          case 1: // Gold
            if (totalQuantity >= 250) {
              this.product.priceSale = parseFloat(info[1].values[pos].price);
            } else {
              this.priceFrom = parseFloat(info[1].values[2].price);
              this.priceUp = parseFloat(info[1].values[0].price);
            }
            break;
          case 2: // Diamond
            if (totalQuantity >= 250) {
              this.product.priceSale = parseFloat(info[2].values[pos].price);
            } else {
              this.priceFrom = parseFloat(info[2].values[2].price);
              this.priceUp = parseFloat(info[2].values[0].price);
            }
            break;
          case 3: // Preferred
            if (totalQuantity >= 250) {
              this.product.priceSale = parseFloat(info[3].values[pos].price);
          } else {
            this.priceFrom = parseFloat(info[3].values[2].price);
            this.priceUp = parseFloat(info[3].values[0].price);
          }
            break;
        }
  }

  buildProductsSelected() {
    let productsSelected = [];
    let product = this.productCopy;
    let boxes = this.boxesCopy;
    let boxesProduct = [];

    let productSelected = {
      id      : product.idProduct,
      quantity: 0,
      price   : product.priceSale,
      detail  : {},
      patient : '',
    };

    //parameters generals
    _.each(product.parameters, function(parameter, index) {
      product.parameters[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
    });
    let parameters = product.parameters;

    //parameters boxes
    _.each(boxes, function(box, index){
      let boxProduct = { "id":index+1, "Tone": box.parameters[0].selected , "Color" :box.parameters[1].selected , "Quantity": box.quantity };
      boxesProduct.push(boxProduct);
    });

    var totalQuantity = _.sumBy(boxes, 'quantity');

    productSelected.detail = { name: '', eye: '', parameters: parameters, boxes: boxesProduct };
    productSelected.quantity = totalQuantity;

    productsSelected.push(productSelected);
    return productsSelected;
  }

  addToCart(type) {
    this.productCopy = JSON.parse(JSON.stringify(this.product));
    this.boxesCopy = JSON.parse(JSON.stringify(this.boxes));
    this.saveFiles();
    let productsRequested = [];
    let productsSelected = this.buildProductsSelected();
    _.each(productsSelected, function (product) {
      const productRequest: ProductRequested = new ProductRequested();
      const productoSelect: Product = new Product();
      productoSelect.idProduct = product.id;
      productRequest.product = productoSelect;
      productRequest.quantity = product.quantity;
      productRequest.price = product.price;
      productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
      productRequest.patient = '';
      productsRequested.push(productRequest);
    });
    this.basketRequestModal.idUser = this.client;
    this.basketRequestModal.productRequestedList = productsRequested;
    // this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
    this.openModal(type);
  }

  openModal(type): void {
    const modalRef = this.modalService.open( ConfirmationMagicLookComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.listFileBasket = this.listFileBasket;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  formIsValid() {
    var isValid = true;
    var totalQuantity =_.sumBy(this.boxes, 'quantity');
    if ( totalQuantity < 250 ) {
      return false;
    }
    if (this.client === '' || this.client === undefined) {
      isValid = false;
    }
    _.each(this.boxes, function(product) {
      _.each(product.parameters, function(param){
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      });
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

  setPriceBoxes(quantity) {
    if (quantity%50 === 0) {
      var totalQuantity = _.sumBy(this.boxes, 'quantity');
      let info = JSON.parse(this.product.infoAditional);
      let  membership = 0;
      const pos = this.calculateQuantity();
      if (this.user.role.idRole === 3) {
        membership = this.currentUser.membership.idMembership;
      } else {
        if (this.clientSelected !== undefined) {
          membership = this.clientSelected.membership.idMembership;
        }
      }
      if (totalQuantity >= 250) {
        switch (membership) {
          case 1: // Gold
            this.product.priceSale = parseFloat(info[1].values[pos].price);
            break;
          case 2: // Diamond
            this.product.priceSale = parseFloat(info[2].values[pos].price);
            break;
          case 3: // Preferred
          this.product.priceSale = parseFloat(info[3].values[pos].price);
            break;
        }
      } else {
        this.product.priceSale = '';
      }
    }
  }

  calculateQuantity(): any {
    let totalQuantity = _.sumBy(this.boxes, 'quantity');
    let pos;
      if (totalQuantity >= 250 && totalQuantity <= 1000 ) {
         pos = 0;
      } else if (totalQuantity >= 1001 && totalQuantity <= 2000) {
         pos = 1;
      } else if (totalQuantity >= 2001) {
         pos = 2;
      }
      return pos;
  }
}
