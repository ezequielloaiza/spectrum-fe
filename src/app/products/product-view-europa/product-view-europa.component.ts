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
import { ConfirmationEuropaComponent } from '../modals/confirmation-buy/confirmation-europa/confirmation-europa.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DEFAULT_ARIA_LIVE_DELAY } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';

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
  priceA = 0;
  priceB = 0;
  membership: any;
  notch = 0;
  thickness = 0;
 // flagThickness = false;
 // flagThicknessL = false;
  flagNotch = false;
  flagNotchL = false;
  hidrapeg = 0;
  inserts = 0;
  additionalNotch = false;
  additionalNotchL = false;
 // additionalThickness = false;
 // additionalThicknessL = false;
  additionalHidrapeg = false;
  additionalHidrapegL = false;
  additionalInserts = false;
  additionalInsertsL = false;
  // Upload files
  // @ViewChild('selectedFiles') selectedFiles: any;
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
              private modalService: NgbModal,
              public router: Router,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());

    /*this.uploader.onAfterAddingFile = (item) => {
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
      console.log('error uploader file', response);
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
      console.log('error uploader file', response);
    };
  }

  ngOnInit() {
    this.getProducts();
    this.clearFiles();
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplier$(2).subscribe(res => {
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
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.type = JSON.parse(this.product.types)[0].name;
    let orderCylinder;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    orderCylinder = _.find(this.product.parametersRight, {name: 'Cylinder (D)'});
    if (orderCylinder != null) {
      orderCylinder.values.reverse();
    }
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    orderCylinder = _.find(this.product.parametersLeft, {name: 'Cylinder (D)'});
    if (orderCylinder != null) {
      orderCylinder.values.reverse();
    }
    this.product.headerRight = JSON.parse(this.product.types)[0].header;
    this.product.headerLeft = JSON.parse(this.product.types)[0].header;
    this.product.pasosRight = JSON.parse(this.product.types)[0].pasos;
    this.product.pasosLeft = JSON.parse(this.product.types)[0].pasos;
    this.product.properties = JSON.parse(this.product.infoAditional)[0];
    this.product.pricesAditionalHidrapeg = JSON.parse(this.product.infoAditional)[0].values[0];
    this.product.pricesAditionalInserts = JSON.parse(this.product.infoAditional)[0].values[1];
    this.product.pricesAditionalNotch = JSON.parse(this.product.infoAditional)[0].values[2];
  //  this.product.pricesAditionalThickness = JSON.parse(this.product.infoAditional)[0].values[3];
    this.product.priceSaleRight = 0;
    this.product.priceSaleLeft = 0;
    this.setClient();
    this.setPrice();
  }

  changeSelect(eye, parameter, value, value2) {
    parameter.selected = value;
    if (parameter.name === 'Hidrapeg' || parameter.name === 'Inserts (DMV)') {
      parameter.selected = parameter.selected === 'Yes' ? true : false;
    }
      this.definePrice(this.membership);
      this.definePriceHidrapeg(this.membership);
      this.definePriceNotch(this.membership);
     // this.definePriceTickness(this.membership);
      this.definePriceInserts(this.membership);
      if (parameter.name === 'Diameter (mm)') {
        if (this.membership !== 0) {
         this.valueDiameter(value, eye);
        }
      }
      if (parameter.name === 'Hidrapeg') {
        if (value === 'Yes') {
          if (eye === 'right') {
            if (this.membership !== 0) {
              this.additionalHidrapeg = true;
              this.product.priceSaleRight = this.product.priceSaleRight + this.hidrapeg;
            } else {
              this.additionalHidrapeg = false;
            }
          } else {
            if (this.membership !== 0) {
              this.additionalHidrapegL = true;
              this.product.priceSaleLeft = this.product.priceSaleLeft + this.hidrapeg;
            } else {
              this.additionalHidrapegL = false;
            }
          }
        } else {
          if (eye === 'right') {
            if (this.membership !== 0) {
              if (this.additionalHidrapeg) {
                this.additionalHidrapeg = false;
                if (this.product.priceSaleRight > 0 ) {
                  this.product.priceSaleRight = this.product.priceSaleRight - this.hidrapeg;
                }
              }
            } else {
              this.additionalHidrapeg = false;
            }
          } else {
            if (this.membership !== 0) {
              if (this.additionalHidrapegL) {
                this.additionalHidrapegL = false;
                if (this.product.priceSaleLeft > 0 ) {
                  this.product.priceSaleLeft = this.product.priceSaleLeft - this.hidrapeg;
                }
              }
            } else {
              this.additionalHidrapegL = false;
            }
          }
        }
      }
      if (parameter.name === 'Inserts (DMV)') {
        if (value === 'Yes') {
          if (eye === 'right') {
            if (this.membership !== 0) {
              this.additionalInserts = true;
              this.product.priceSaleRight = this.product.priceSaleRight + this.inserts;
            } else {
              this.additionalInserts = false;
            }
          } else {
            if (this.membership !== 0) {
              this.additionalInsertsL = true;
              this.product.priceSaleLeft = this.product.priceSaleLeft + this.inserts;
            } else {
              this.additionalInsertsL = false;
            }
          }
        } else {
          if (eye === 'right') {
            if (this.membership !== 0) {
              if (this.additionalInserts) {
                this.additionalInserts = false;
                if (this.product.priceSaleRight > 0 ) {
                  this.product.priceSaleRight = this.product.priceSaleRight - this.inserts;
                }
              }
            } else {
              this.additionalInserts = false;
            }
          } else {
            if (this.membership !== 0) {
              if (this.additionalInsertsL){
                this.additionalInsertsL = false;
                if (this.product.priceSaleLeft > 0 ) {
                  this.product.priceSaleLeft = this.product.priceSaleLeft - this.inserts;
                }
              }
            } else {
              this.additionalInsertsL = false;
            }
          }
        }
      }
      /*if (parameter.name === 'Thickness') {
        if (parseFloat(value) !== null) {
          if (parseFloat(value) === 0 || value === null) {
            if (eye === 'right') {
              if (this.membership !== 0) {
                if (this.flagThickness) {
                  this.flagThickness = false;
                  this.additionalThickness = false;
                  this.product.priceSaleRight = this.product.priceSaleRight - this.thickness;
                }
              } else {
                 this.flagThickness = false;
                 this.additionalThickness = false;
              }
            } else {
              if (this.membership !== 0) {
                if (this.flagThicknessL) {
                  this.flagThicknessL = false;
                  this.additionalThicknessL = false;
                  this.product.priceSaleLeft = this.product.priceSaleLeft - this.thickness;
                }
              } else {
                this.flagThicknessL = false;
                this.additionalThicknessL = false;
              }
            }
          } else {
            if (eye === 'right') {
              if (this.membership !== 0) {
                if (!this.flagThickness) {
                  this.additionalThickness = true;
                  this.flagThickness = true;
                  this.product.priceSaleRight = this.product.priceSaleRight + this.thickness;
                }
              } else {
                this.flagThickness = false;
                this.additionalThickness = false;
              }
            } else {
              if (this.membership !== 0) {
                if (!this.flagThicknessL) {
                  this.additionalThicknessL = true;
                  this.flagThicknessL = true;
                  this.product.priceSaleLeft = this.product.priceSaleLeft + this.thickness;
                }
              } else {
                this.flagThicknessL = false;
                this.additionalThicknessL = false;
              }
            }
          }
        }
      }*/
      if (parameter.name === 'Notch (mm)') {
        if (eye === 'right') {
          if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
            if (this.membership !== 0) {
              if (!this.flagNotch) {
                this.additionalNotch = true;
                this.flagNotch = true;
                this.product.priceSaleRight = this.product.priceSaleRight + this.notch;
              }
            } else {
                this.additionalNotch = false;
                this.flagNotch = false;
            }
          } else if (parseFloat(value) === 0 && (value2 !== null) &&  parseFloat(value2) !== 0) {
            if (this.membership !== 0) {
              if (!this.flagNotch) {
                this.additionalNotch = true;
                this.flagNotch = true;
                this.product.priceSaleRight = this.product.priceSaleRight + this.notch;
              }
            } else {
                this.additionalNotch = false;
                this.flagNotch = false;
            }
          } else {
            if (this.membership !== 0) {
              if (this.flagNotch) {
                this.additionalNotch = false;
                this.flagNotch = false;
                this.product.priceSaleRight = this.product.priceSaleRight - this.notch;
              }
            } else {
                this.additionalNotch = false;
                this.flagNotch = false;
            }
          }
        } else {
            if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
              if (this.membership !== 0) {
                if (!this.flagNotchL) {
                  this.additionalNotchL = true;
                  this.flagNotchL = true;
                  this.product.priceSaleLeft = this.product.priceSaleLeft + this.notch;
                }
              } else {
                  this.additionalNotchL = false;
                  this.flagNotchL = false;
              }
            } else if (parseFloat(value) === 0 && (value2 !== null) &&  parseFloat(value2) !== 0) {
              if (this.membership !== 0) {
                if (!this.flagNotchL) {
                  this.additionalNotchL = true;
                  this.flagNotchL = true;
                  this.product.priceSaleLeft = this.product.priceSaleLeft + this.notch;
                }
              } else {
                  this.additionalNotchL = false;
                  this.flagNotchL = false;
              }
            } else {
              if (this.membership !== 0) {
                if (this.flagNotchL) {
                  this.additionalNotchL = false;
                  this.flagNotchL = false;
                  this.product.priceSaleLeft = this.product.priceSaleLeft - this.notch;
                }
              } else {
                  this.additionalNotchL = false;
                  this.flagNotchL = false;
              }
            }
        }
    }

  }
  setValueEye(eye) {
    if (eye === 'right') {
      this.product.priceSaleRight = 0;
      this.product.eyeRight = !this.product.eyeRight;
      this.product.quantityRight = '';
      if (this.product.eyeRight) {
        this.product.quantityRight = 1;
      } else {
        this.clean(eye);
        this.additionalHidrapeg = false;
        this.additionalInserts = false;
        this.additionalNotch = false;
       // this.additionalThickness = false;
       // this.flagThickness = false;
        this.flagNotch = false;

      }
    } else {
      this.product.priceSaleLeft = 0;
      this.product.eyeLeft = !this.product.eyeLeft;
      this.product.quantityLeft = '';
      if (this.product.eyeLeft) {
        this.product.quantityLeft = 1;
      } else {
        this.clean(eye);
        this.additionalHidrapegL = false;
        this.additionalInsertsL = false;
        this.additionalNotchL = false;
       // this.additionalThicknessL = false;
       // this.flagThicknessL = false;
        this.flagNotchL = false;
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
      this.definePriceHidrapeg(this.membership);
      this.definePriceNotch(this.membership);
     // this.definePriceTickness(this.membership);
      this.definePriceInserts(this.membership);
      if (this.product.eyeRight) {
        let paramet = this.product.parametersRight;
        let valueD = null;
          _.each(paramet, function(productSelected) {
            if (productSelected.name === 'Diameter (mm)') {
                // tslint:disable-next-line:radix
                if (productSelected.selected !== null ) {
                  valueD = productSelected.selected;
                }
            }
        });
        if (valueD !== null) {
          this.valueDiameter(valueD, 'right');
        } else {
            this.product.priceSaleRight = 0;
            if (this.additionalInserts) {
                this.product.priceSaleRight = this.product.priceSaleRight + this.inserts;
            }
            if (this.additionalHidrapeg) {
              this.product.priceSaleRight = this.product.priceSaleRight + this.hidrapeg;
            }
            if (this.additionalNotch) {
              this.product.priceSaleRight = this.product.priceSaleRight + this.notch;
            }
            /*if (this.additionalThickness) {
              this.product.priceSaleRight = this.product.priceSaleRight + this.thickness;
            }*/
          }
      }
      if (this.product.eyeLeft) {
        let paramet = this.product.parametersLeft;
        let valueD = null;
          _.each(paramet, function(productSelected) {
            if (productSelected.name === 'Diameter (mm)') {
                // tslint:disable-next-line:radix
                if (productSelected.selected !== null ) {
                  valueD = productSelected.selected;
                }
            }
         });
         if (valueD !== null) {
           this.valueDiameter(valueD, 'left');
         } else {
            this.product.priceSaleLeft = 0;
            if (this.additionalInsertsL) {
                this.product.priceSaleLeft = this.product.priceSaleLeft + this.inserts;
            }
            if (this.additionalHidrapegL) {
              this.product.priceSaleLeft = this.product.priceSaleLeft + this.hidrapeg;
            }
            if (this.additionalNotchL) {
              this.product.priceSaleLeft = this.product.priceSaleLeft + this.notch;
            }
           /* if (this.additionalThicknessL) {
              this.product.priceSaleLeft = this.product.priceSaleLeft + this.thickness;
            }*/
          }
        }
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSaleRight = 0;
      this.product.priceSaleLeft = 0;
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
       this.definePriceHidrapeg(this.membership);
       this.definePriceNotch(this.membership);
       // this.definePriceTickness(this.membership);
       this.definePriceInserts(this.membership);
    }
  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.priceA = this.product.price1;
        this.priceB = this.product.priced1;
        break;
      case 2:
        this.priceA = this.product.price2;
        this.priceB = this.product.priced2;
        break;
      case 3:
        this.priceA = this.product.price3;
        this.priceB = this.product.priced3;
        break;
    }
  }

  definePriceHidrapeg(membership) {
    switch (membership) {
      case 1:
        this.hidrapeg = this.product.pricesAditionalHidrapeg.values[0].price;
        break;
      case 2:
        this.hidrapeg = this.product.pricesAditionalHidrapeg.values[1].price;
        break;
      case 3:
        this.hidrapeg = this.product.pricesAditionalHidrapeg.values[2].price;
        break;
    }
  }

  definePriceInserts(membership) {
    switch (membership) {
      case 1:
        this.inserts = this.product.pricesAditionalInserts.values[0].price;
        break;
      case 2:
        this.inserts = this.product.pricesAditionalInserts.values[1].price;
        break;
      case 3:
        this.inserts = this.product.pricesAditionalInserts.values[2].price;
        break;
    }
  }

  definePriceNotch(membership) {
    switch (membership) {
      case 1:
        this.notch = this.product.pricesAditionalNotch.values[0].price;
        break;
      case 2:
        this.notch = this.product.pricesAditionalNotch.values[1].price;
        break;
      case 3:
        this.notch = this.product.pricesAditionalNotch.values[2].price;
        break;
    }
  }

  /*definePriceTickness(membership) {
    switch (membership) {
      case 1:
        this.thickness = this.product.pricesAditionalThickness.values[0].price;
        break;
      case 2:
        this.thickness = this.product.pricesAditionalThickness.values[1].price;
        break;
      case 3:
        this.thickness = this.product.pricesAditionalThickness.values[2].price;
        break;
    }
  }*/

  buildProductsSelected() {
    this.setEyeSelected();
    let product = this.productCopy;
    let productsSelected = this.productsSelected;
    let signPowerLeft = this.signPowerLeft;
    let signPowerRight = this.signPowerRight;

    _.each(productsSelected, function(productSelected, index) {

      productSelected.id = product.idProduct;
      productSelected.patient = product.patient;

      if (productSelected.eye === "Right") {
        productSelected.price = product.priceSaleRight;
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
          if (parameter.name === 'Power') {
            product.parametersRight[index].selected = signPowerRight + parameter.selected;
          }
          if (parameter.name === 'Notch (mm)') {
            product.parametersRight[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
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
        productSelected.price = product.priceSaleLeft;
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
          if (parameter.name === 'Notch (mm)') {
            product.parametersLeft[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
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
    const modalRef = this.modalService.open( ConfirmationEuropaComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.additionalHidrapeg = this.hidrapeg;
    modalRef.componentInstance.additionalInserts = this.inserts;
    modalRef.componentInstance.additionalNotch = this.notch;
    modalRef.componentInstance.additionalThickness = this.thickness;
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
      _.each(this.product.parametersRight, function (param) {
        if (param.name === 'Notch (mm)') {
          if (param.values[0].selected === null || param.values[1].selected === null) {
            isValid = false;
          }
        } else if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.signPowerRight) {
        isValid = false;
      }
    }

    if (this.product.eyeLeft) {
      _.each(this.product.parametersLeft, function (param) {
        if (param.name === 'Notch (mm)') {
          if (param.values[0].selected === null || param.values[1].selected === null) {
            isValid = false;
          }
        } else if (param.selected === null || param.selected === undefined) {
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
      this.clearSelectedFile();
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

  checkAdditional(eye) {
    let header;
    let paramet;
    let additionalH;
    let additionalI;
    let additionalN;
   // let additionalT;
    if (eye === 'right') {
      header = this.product.headerRight;
      paramet = this.product.parametersRight;
      additionalH = this.additionalHidrapeg;
      additionalI = this.additionalInserts;
      additionalN = this.additionalNotch;
     // additionalT = this.additionalThickness;
    } else {
      header = this.product.headerLeft;
      paramet = this.product.parametersLeft;
      additionalH = this.additionalHidrapegL;
      additionalI = this.additionalInsertsL;
      additionalN = this.additionalNotchL;
     // additionalT = this.additionalThicknessL;
    }
    let notch = this.notch;
    let inserts = this.inserts;
    let hidrapeg = this.hidrapeg;
   // let thickness = this.thickness;
        // header
          _.each(header, function(itemHeader) {
              if (itemHeader.name === 'Hidrapeg') {
                  if (itemHeader.selected === false || itemHeader.selected === null) {
                    hidrapeg = 0;
                  } else {
                    additionalH = true;
                  }
              }
              if (itemHeader.name === 'Inserts (DMV)') {
                if (itemHeader.selected === false || itemHeader.selected === null) {
                    inserts = 0;
                } else {
                  additionalI = true;
                }
              }
          });
        // parameters
          _.each(paramet, function(productSelected) {
              if (productSelected.name === 'Notch (mm)') {
                  if ((productSelected.selected === null || parseFloat(productSelected.values[0].selected) === 0 )
                      && (productSelected.selected === null || parseFloat(productSelected.values[1].selected) === 0)) {
                      notch = 0; // No se ha sumado el adicional por Notch en el precio
                } else {
                  additionalN = true;
                }
              }
             /* if (productSelected.name === 'Thickness') {
                  // tslint:disable-next-line:radix
                  if (parseFloat(productSelected.selected ) === 0 || productSelected.selected === null ) {
                    thickness = 0;
                  } else {
                    additionalT = true;
                  }
              }*/
          });
      this.notch = notch;
      this.inserts = inserts;
      this.hidrapeg = hidrapeg;
     // this.thickness = thickness;
      if (eye === 'right') {
        this.additionalHidrapeg = additionalH;
        this.additionalInserts = additionalI;
        this.additionalNotch = additionalN;
     // this.additionalThickness = additionalT;
      } else {
        this.additionalHidrapegL = additionalH;
        this.additionalInsertsL = additionalI;
        this.additionalNotchL = additionalN;
     // this.additionalThicknessL = additionalT;
      }
  }

  valueDiameter(value, eye) {
    if (value === '18.0' || value === '20.0' ) {
      if (eye === 'right') {
        this.checkAdditional('right');
        this.product.priceSaleRight = this.priceB + this.notch + this.thickness + this.hidrapeg + this.inserts;
      } else {
        this.checkAdditional('left');
        this.product.priceSaleLeft = this.priceB + this.notch + this.thickness + this.hidrapeg + this.inserts;
      }
    } else {
      if (eye === 'right') {
       this.checkAdditional('right');
       this.product.priceSaleRight = this.priceA + this.notch + this.thickness + this.hidrapeg + this.inserts;
      } else {
        this.checkAdditional('left');
        this.product.priceSaleLeft = this.priceA + this.notch + this.thickness + this.hidrapeg + this.inserts;
      }
    }
  }

  clean(eye) {
    let header;
    let parameters;
    let pasos;
    if (eye === 'right') {
     header = this.product.headerRight;
     parameters = this.product.parametersRight;
     pasos = this.product.pasosRight;
     this.product.observationsRight = '';
    } else {
      header = this.product.headerLeft;
      parameters = this.product.parametersLeft;
      pasos = this.product.pasosLeft;
      this.product.observationsLeft = '';
    }
     // header
     _.each(header, function(itemHeader) {
        itemHeader.selected = null;
        itemHeader.sel = null;
      });
    // parameter
    _.each(parameters, function(param) {
        if (param.name === 'Notch (mm)') {
            param.values[0].selected = 0;
            param.values[0].sel = 0;
            param.values[1].selected = 0;
            param.values[1].sel = 0;
        } else if (param.name === 'Thickness') {
            param.selected = 0;
        } else {
          param.selected = null;
          param.sel = null;
        }
    });
    // Pasos
    _.each(pasos, function(item) {
      _.each(item.values, function(valuesPC) {
        _.each(valuesPC.values, function(value) {
           value.selected = false;
        });
      });
    });
    if (eye === 'right') {
      this.product.headerRight = header;
      this.product.parametersRight = parameters;
      this.product.pasosRight = pasos;
      this.signPowerRight = null;
    } else {
      this.product.headerLeft = header;
      this.product.parametersLeft = parameters;
      this.product.pasosLeft = pasos;
      this.signPowerLeft = null;
    }
  }
}
