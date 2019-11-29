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
  @ViewChild('notchRight') notchRight;
  @ViewChild('notchLeft') notchLeft;
  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  productsCodeSelectL: Array<any> = new Array;
  productsCodeSelectR: Array<any> = new Array;
  productName = '';
  productDiameterL: any;
  productDiameterR: any;
  productNotch: any;
  productHydraPEG: any;
  productDMV: any;
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
  signPowerRightTrial: any;
  signPowerLeftTrial:any;
  typeCurveRight: any;
  typeCurveLeft: any;
  typeCurveRightTrial: any;
  typeCurveLeftTrial: any;
  typeNotchRight: any;
  typeNotchLeft: any;
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
  type: any;
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
    this.productService.findBySupplierInView$(2 , true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.productService.findBySupplierAndInViewAndCategory$(2, false, 10).subscribe(res1 => {
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
        this.setNameProduct();
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
    this.product.setRight = JSON.parse(this.product.types)[0].set;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    orderCylinder = _.find(this.product.parametersRight, {name: 'Cylinder (D)'});
    if (orderCylinder != null) {
      orderCylinder.values.reverse();
    }
    this.product.setLeft = JSON.parse(this.product.types)[0].set;
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
    this.product.productsAditional = [];
    this.setClient();
    this.setPrice();
  }

  setNameProduct() {
    if (_.includes(this.product.name, 'Bi-Toric')) {
      this.productName = 'Europa Bitoric';
    } else if (_.includes(this.product.name, 'SPH')) {
      this.productName = 'Europa Sphere';
    } else if (_.includes(this.product.name, 'Multifocal')
              || _.includes(this.product.name, 'Front Toric')
              || _.includes(this.product.name, 'TPC')) {
      this.productName = 'Europa FT, TPC,  MF';
    }
  }

  setCodeProduct(name) {
    let prCode;
    _.each(this.productsCode, function (pr) {
      if (_.includes(pr.name, name)) {
        prCode = pr;
      }
    });
    return prCode;
  }

  setCodeProductByDiameter(name, diameter) {
    let prCode;
    _.each(this.productsCode, function (pr) {
      if (_.includes(pr.name, name) && _.includes(pr.name, diameter)) {
        prCode = pr;
      }
    });

    return prCode;
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
          this.productHydraPEG = this.setCodeProduct('HydraPEG');
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
          this.productDMV = this.setCodeProduct('DMV Insertion and Removal Set');
            if (this.membership !== 0) {
              this.additionalInserts = true;
              this.additionalInsertsL = true;
            } else {
              this.additionalInserts = false;
              this.additionalInsertsL = false;
            }
        } else {
            if (this.membership !== 0) {
              if (this.additionalInserts) {
                this.additionalInserts = false;
              }
            } else {
              this.additionalInserts = false;
            }
            if (this.membership !== 0) {
              if (this.additionalInsertsL) {
                this.additionalInsertsL = false;
              }
            } else {
              this.additionalInsertsL = false;
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
        if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
          this.productNotch = this.setCodeProduct('Notch');
        }
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
       // this.additionalInserts = false;
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
      //  this.additionalInsertsL = false;
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
          //this.listCustomers.map((i) => { i.fullName = i.accSpct + ' ' + i.country.name + ' ' + i.name; return i; });
          this.listCustomers.map((i) => {
            let accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' + i.country.name;
            return i;
          });
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
            /*if (this.additionalInserts) {
                this.product.priceSaleRight = this.product.priceSaleRight + (this.inserts / 2);
            }*/
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
           /* if (this.additionalInsertsL) {
                this.product.priceSaleLeft = this.product.priceSaleLeft + (this.inserts / 2);
            }*/
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
    this.notch = 0;
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
    let productDiameterL = this.productDiameterL;
    let productDiameterR = this.productDiameterR;
    let productsSelected = this.productsSelected;
    let signPowerLeft = this.signPowerLeft;
    let signPowerRight = this.signPowerRight;
    let signPowerRightTrial = this.signPowerRightTrial;
    let signPowerLeftTrial = this.signPowerLeftTrial;
    let typeCurveLeft = this.typeCurveLeft;
    let typeCurveRight = this.typeCurveRight;
    let typeCurveLeftTrial = this.typeCurveLeftTrial;
    let typeCurveRightTrial = this.typeCurveRightTrial;
    let additionalInserts = this.additionalInserts;
    let additionalInsertsL = this.additionalInsertsL;
    let inserts = this.inserts;
    const additionalH = this.additionalHidrapeg;
    const additionalHL = this.additionalHidrapegL;
    const additionalN = this.additionalNotch;
    const additionalNL = this.additionalNotchL;
    let productsAditional = [];
    // add products code
    const productDMV = this.productDMV;
    const productHydraPEG = this.productHydraPEG;
    const productNotch = this.productNotch;
    const hidrapegPrice = this.hidrapeg;
    const dMVPrice = this.inserts;
    const notchPrice = this.notch;

    _.each(productsSelected, function(productSelected, index) {

      productSelected.patient = product.patient;
      productSelected.name = product.name;

      if (productSelected.eye === 'Right') {
        // add header spectrum code
        productSelected.id = productDiameterR.idProduct;
        productSelected.codeSpectrum = productDiameterR.codeSpectrum;

        /*if (additionalInserts && product.eyeLeft) {
          productSelected.price = product.priceSaleRight + (inserts / 2);
        } else if (additionalInserts && !product.eyeLeft) {
          productSelected.price = product.priceSaleRight + inserts;
        } else {
          productSelected.price = product.priceSaleRight;
        }*/

       /*if (additionalH) {
          productSelected.price = product.priceSaleRight - hidrapegPrice;
        }
        if (additionalN) {
          productSelected.price = product.priceSaleRight - notchPrice;
        }*/

        // productSelected.price = product.priceSaleRight;
        productSelected.price = product.priceBaseRight;
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;

        //set
         _.each(product.setRight, function(parameter, index) {
          product.setRight[index] = _.omit(parameter, ['type', 'values', 'sel']);
          if (parameter.name === 'Base Curve') {
            if (!!typeCurveRightTrial && !!parameter.selected) {
              product.setRight[index].selected = parameter.selected + ' (' + typeCurveRightTrial + ')';
            } else {
              product.setRight[index].selected = null;
            }
          }
          if (parameter.name === 'Power') {
            if (!!signPowerRightTrial && !!parameter.selected) {
              product.setRight[index].selected = signPowerRightTrial + parameter.selected;
            } else {
              product.setRight[index].selected = null;
            }
          }
        });
        productSelected.set = product.setRight;

        /* headers*/
        _.each(product.headerRight, function(parameter, index) {
          product.headerRight[index] = _.omit(parameter, ['type', 'values', 'sel']);
          if (parameter.name === 'Inserts (DMV)') {
            product.headerLeft[index].selected = additionalInserts;
          }
        });

        productSelected.header = product.headerRight;

        /*params*/
        _.each(product.parametersRight, function(parameter, index) {
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
          if (parameter.name === 'Base Curve') {
            if (!!typeCurveRight) {
              product.parametersRight[index].selected = parameter.selected + ' (' + typeCurveRight + ')';
            } else {
              product.parametersRight[index].selected = null;
            }
          }
          if (parameter.name === 'Power') {
            product.parametersRight[index].selected = signPowerRight + parameter.selected;
          }
          if (parameter.name === 'Notch (mm)') {
            if (!parameter.selectedNotchTime) {
              product.parametersRight[index].selected = '0x0'
            } else {
              product.parametersRight[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected + ' (' + parameter.selectedNotchTime + ')';
            }
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

      if (productSelected.eye === 'Left') {
        // add header spectrum code
        productSelected.id = productDiameterL.idProduct;
        productSelected.codeSpectrum = productDiameterL.codeSpectrum;

        /*if (additionalInsertsL && product.eyeRight) {
          productSelected.price = product.priceSaleLeft + (inserts / 2);
        } else if (additionalInsertsL && !product.eyeRight) {
          productSelected.price = product.priceSaleLeft + inserts;
        } else {
          productSelected.price = product.priceSaleLeft;
        }
        if (additionalHL) {
          productSelected.price = product.priceSaleLeft - hidrapegPrice;
        }
        if (additionalNL) {
          productSelected.price = product.priceSaleLeft - notchPrice;
        }*/
        //productSelected.price = product.priceSaleLeft;
        productSelected.price = product.priceBaseLeft;
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;

        //set
        _.each(product.setLeft, function(parameter, index) {
          product.setLeft[index] = _.omit(parameter, ['type', 'values', 'sel']);

          if (parameter.name === 'Base Curve') {
            if (!!typeCurveLeftTrial && !!parameter.selected) {
              product.setLeft[index].selected = parameter.selected + ' (' + typeCurveLeftTrial + ')';
            } else {
              product.setLeft[index].selected = null;
            }
          }
          if (parameter.name === 'Power') {
            if (!!signPowerLeftTrial && !!parameter.selected) {
              product.setLeft[index].selected = signPowerLeftTrial + parameter.selected;
            } else {
              product.setLeft[index].selected = null;
            }
          }
        });
        productSelected.set = product.setLeft;

        /* headers*/
        _.each(product.headerLeft, function(parameter, index) {
          product.headerLeft[index] = _.omit(parameter, ['type', 'values', 'sel']);
          if (parameter.name === 'Inserts (DMV)') {
            product.headerLeft[index].selected = additionalInsertsL;
          }
        });

        productSelected.header = product.headerLeft;

        /*params*/
        _.each(product.parametersLeft, function(parameter, index) {
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
          if (parameter.name === 'Base Curve') {
            if (!!typeCurveLeft) {
              product.parametersLeft[index].selected = parameter.selected + ' (' + typeCurveLeft + ')';
            } else {
              product.parametersLeft[index].selected = null;
            }
          }
          if (parameter.name === "Power") {
            product.parametersLeft[index].selected = signPowerLeft + parameter.selected;
          }
          if (parameter.name === 'Notch (mm)') {
            if (!parameter.selectedNotchTime) {
              product.parametersLeft[index].selected = '0x0'
            } else {
              product.parametersLeft[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected + ' (' + parameter.selectedNotchTime + ')';
            }
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

      // add products aditionals
      productsAditional = [];
      if (productSelected.header[1].selected === true) {
        const productH =  { id: productHydraPEG.idProduct,
          name: productHydraPEG.name,
          price: hidrapegPrice,
          codeSpectrum: productHydraPEG.codeSpectrum };
        productsAditional.push(productH);
      }

      /*params*/
      _.each(productSelected.parameters, function(parameter) {
        if (parameter.name === 'Notch (mm)' && parameter.selected !== '0x0' && parameter.selected !== '0x0 (undefined)' &&
            parameter.selected !== '0x0 (Temporal Superior)' && parameter.selected !== '0x0 (Temporal Inferior)' &&
            parameter.selected !== '0x0 (Nasal Superior)' && parameter.selected !== '0x0 (Nasal Inferior)') {
          const productN =  { id: productNotch.idProduct,
            name: productNotch.name,
            price: notchPrice,
            codeSpectrum: productNotch.codeSpectrum };
          productsAditional.push(productN);
        }
      });

      productSelected.detail = { name: product.type, eye: productSelected.eye, set: productSelected.set, header: productSelected.header, parameters: productSelected.parameters, pasos:productSelected.pasos, productsAditional: productsAditional };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye', 'pasos', 'header', 'productsAditional', 'set'])
    });

    // add products code
    const auxList = JSON.parse(JSON.stringify(productsSelected));
    const auxproductsSelected = [];
    let exist =  false;
    this.definePriceHidrapeg(this.membership);
    this.definePriceInserts(this.membership);
    this.definePriceNotch(this.membership);
    const hidrapegPr = this.hidrapeg;
    const dMVPr = this.inserts;
    const notchPr = this.notch;

    _.each(auxList, function(productAux, index: number) {
      auxproductsSelected.push(JSON.parse(JSON.stringify(productAux)));
      if (productAux.detail.header[1].selected === true) {
        const productH = JSON.parse(JSON.stringify(productAux));
        productH.id = productHydraPEG.idProduct;
        productH.name = productHydraPEG.name;
        productH.price = hidrapegPr;
        productH.codeSpectrum = productHydraPEG.codeSpectrum;
        auxproductsSelected.push(productH);
      }

      /*params*/
      _.each(productAux.detail.parameters, function(parameter) {
        if (parameter.name === 'Notch (mm)' && parameter.selected !== '0x0' && parameter.selected !== '0x0 (undefined)' &&
            parameter.selected !== '0x0 (Temporal Superior)' && parameter.selected !== '0x0 (Temporal Inferior)' &&
            parameter.selected !== '0x0 (Nasal Superior)' && parameter.selected !== '0x0 (Nasal Inferior)') {
          const productN =  JSON.parse(JSON.stringify(productAux));
          productN.id = productNotch.idProduct;
          productN.name = productNotch.name;
          productN.price = notchPr;
          productN.codeSpectrum = productNotch.codeSpectrum;
          auxproductsSelected.push(productN);
        }
      });

      if (productAux.detail.header[2].selected === true
        && (index === (auxList.length - 1) )) {
      const productD =  JSON.parse(JSON.stringify(productAux));
      productD.id = productDMV.idProduct;
      productD.name = 'Inserts (DMV)';
      productD.price = dMVPr;
      productD.codeSpectrum = productDMV.codeSpectrum;
      exist = true;
      auxproductsSelected.push(productD);
    }
    });

    productsSelected = auxproductsSelected;

    return productsSelected;
  }

  addToCart(type) {
    this.type = type;
    this.spinner.show();
    this.productCopy = JSON.parse(JSON.stringify(this.product));
    this.saveFiles();
    const productsRequested = [];
    const productsSelected = this.buildProductsSelected();
    _.each(productsSelected, function (product) {
      const productRequest: ProductRequested = new ProductRequested();
      const productoSelect: Product = new Product();
      productoSelect.idProduct = product.id;
      productoSelect.codeSpectrum = product.codeSpectrum;
      productRequest.product = productoSelect;
      productRequest.quantity = product.quantity;
      productRequest.name = product.name;
      productRequest.price = product.price;
      productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
      productRequest.patient = product.patient;
      productRequest.observations = product.observations;
      productsRequested.push(productRequest);
    });
    this.basketRequestModal.idUser = this.client;
    this.basketRequestModal.productRequestedList = productsRequested;

    // this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
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

    _.each(this.product.headerRight, function (param) {
      if (param.name === 'Inserts (DMV)') {
       if (param.selected === null || param.selected === undefined) {
        isValid = false;
       }
      }
    });

    if (this.product.eyeRight) {
      _.each(this.product.parametersRight, function (param) {
        if (param.name === 'Notch (mm)') {
          if (param.values[0].selected === null || param.values[1].selected === null) {
            isValid = false;
          }

          if ((param.values[0].selected !== 0 || param.values[1].selected !== 0) && !param.selectedNotchTime) {
            isValid = false;
          }

        } else if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.typeCurveRight || !this.signPowerRight || !this.product.quantityRight) {
        isValid = false;
      }
    }

    if (this.product.eyeLeft) {
      _.each(this.product.parametersLeft, function (param) {
        if (param.name === 'Notch (mm)') {
          if (param.values[0].selected === null || param.values[1].selected === null) {
            isValid = false;
          }

          if ((param.values[0].selected !== 0 || param.values[1].selected !== 0) && !param.selectedNotchTime) {
            isValid = false;
          }

        } else if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
      if (!this.typeCurveLeft || !this.signPowerLeft || !this.product.quantityLeft) {
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
      parameter.selected = '0x0';
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
             /* if (itemHeader.name === 'Inserts (DMV)') {
                if (itemHeader.selected === false || itemHeader.selected === null) {
                    inserts = 0;
                } else {
                  additionalI = true;
                }
              }*/
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
    //  this.inserts = inserts;
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
    if (value === '17.0' ||
        value === '17.5' ||
        value === '18.0' ||
        value === '18.5' ||
        value === '19.0' ||
        value === '19.5' ||
        value === '20.0' ) {
      // assing product code
      const prCode = this.setCodeProductByDiameter(this.productName, '(Dia. 17.0-20.0)');
      if (eye === 'right') {
        this.checkAdditional('right');
        this.product.priceBaseRight = this.priceB;
        this.product.priceSaleRight = this.priceB + this.notch + this.thickness + this.hidrapeg;
        this.productDiameterR = prCode;
      } else {
        this.checkAdditional('left');
        this.product.priceBaseLeft = this.priceB;
        this.product.priceSaleLeft = this.priceB + this.notch + this.thickness + this.hidrapeg;
        this.productDiameterL = prCode;
      }
    } else {
      // assing product code
      const prCode = this.setCodeProductByDiameter(this.productName, '(Dia. 15.2-16.5)');
      if (eye === 'right') {
       this.checkAdditional('right');
       this.product.priceBaseRight = this.priceA;
       this.product.priceSaleRight = this.priceA + this.notch + this.thickness + this.hidrapeg;
       this.productDiameterR = prCode;
      } else {
        this.checkAdditional('left');
        this.product.priceBaseLeft = this.priceA;
        this.product.priceSaleLeft = this.priceA + this.notch + this.thickness + this.hidrapeg;
        this.productDiameterL = prCode;
      }
    }
  }

  clean(eye) {
    let set;
    let header;
    let parameters;
    let pasos;
    if (eye === 'right') {
     header = this.product.headerRight;
     parameters = this.product.parametersRight;
     pasos = this.product.pasosRight;
     set = this.product.setRight;
     this.product.observationsRight = '';
    } else {
      header = this.product.headerLeft;
      parameters = this.product.parametersLeft;
      pasos = this.product.pasosLeft;
      set = this.product.setLeft;
      this.product.observationsLeft = '';
    }
     // set
     _.each(set, function(item) {
      item.selected = null;
      item.sel = null;
    });
     // header
     _.each(header, function(itemHeader) {
        if (itemHeader.name !== 'Inserts (DMV)' ) {
          itemHeader.selected = null;
          itemHeader.sel = null;
        }
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
      this.typeCurveRight = null;
      this.typeCurveRightTrial = null;
      this.signPowerRight = null;
      this.signPowerRightTrial = null;
      this.typeNotchRight = null;
    } else {
      this.product.headerLeft = header;
      this.product.parametersLeft = parameters;
      this.product.pasosLeft = pasos;
      this.typeCurveLeft = null;
      this.typeCurveLeftTrial = null;
      this.signPowerLeft = null;
      this.signPowerLeftTrial = null;
      this.typeNotchLeft = null;
    }
  }

  disabledOption(item) {
    return item === "For other diameters, please contact us";
  }

  changeNotchTime(eye, parameter, value) {
    parameter.selectedNotchTime = value;
    switch (eye) {
      case 'right':
        this.notchRight.itemsList._items[0].label = value;
        this.notchRight.itemsList._items[0].value = value;
        break;
      case 'left':
        this.notchLeft.itemsList._items[0].label = value;
        this.notchLeft.itemsList._items[0].value = value;
        break;
    }

    //set null in values notch
    if (parameter.values[0].selected === 0)
      parameter.values[0].selected = null;
    
    if (parameter.values[1].selected === 0)
      parameter.values[1].selected = null;
  }
}
