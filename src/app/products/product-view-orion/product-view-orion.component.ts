import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { ProductService } from '../../shared/services/products/product.service';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ProductRequested } from '../../shared/models/productrequested';
import { Product } from '../../shared/models/product';
import { ConfirmationOrionComponent } from '../modals/confirmation-buy/confirmation-orion/confirmation-orion.component';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { runInThisContext } from 'vm';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-orion',
  templateUrl: './product-view-orion.component.html',
  styleUrls: ['./product-view-orion.component.scss']
})
export class ProductViewOrionComponent implements OnInit {

  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  product: any;
  productCode: any;
  productCopy: any;
  id: any;
  parameters: any;
  quantity = 1;
  priceAcum = 0;
  priceLeft = 0;
  priceRight = 0;
  order: any;
  productsSelected: Array<any> = new Array;
  currentUser: any;
  user: any;
  ngSelect: any;
  client: any;
  basketRequestModal: BasketRequest = new BasketRequest();
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;
  membership: any;
  addRight = false;
  addLeft = false;
  warrantyRight = false;
  warrantyLeft = false;
  download = false;
  type: any;
  parameterType: any;
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
              private shippingAddressService: ShippingAddressService,
              private userService: UserService,
              private modalService: NgbModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());



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
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplierInView$(10 , true).subscribe(res => {
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
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    this.product.priceSaleRight = 0;
    this.product.priceSaleLeft = 0;
    this.product.pupillaryRight = null;
    this.product.pupillaryLeft = null;
    this.setClient();
    this.setPrice();
    this.getProductsCode();
    this.setCodeProduct();
  }

  getProductsCode() {
    this.productService.findBySupplierAndInViewAndCategory$(10, false, 10).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.productsCode = res1.data;
        const pC = this.productsCode.filter((item) => {
          return _.includes(item.codeSpectrum, this.product.codeSpectrum); });
        this.productsCode = pC.sort((a, b) => (b.idProduct > a.idProduct) ? -1 : 1);
        this.setCodeProduct();
      } else {
        console.log(res1.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  setCodeProduct() {
    const productName = this.product.name;
    const idProduct = this.product.idProduct;
    const parameterType = this.parameterType === 'Cosmetic' ||  this.parameterType === 'Prosthetic' ? this.parameterType : '';
    let prCode;
    for (let i = 0, len = this.productsCode.length; i < len; i++) {
      const pr = this.productsCode[i];
      if (idProduct === 267) {
        if (parameterType === 'Cosmetic') {
          if (_.includes(pr.name.toLowerCase(), productName.toLowerCase())
              && _.includes(pr.name.toLowerCase(), parameterType.toLowerCase()) && _.includes(pr.name.toLowerCase(), 'sphere')) {
              prCode = pr;
              break;
           }
        } else {
          if (_.includes(pr.name.toLowerCase(), productName.toLowerCase())
          && _.includes(pr.name.toLowerCase(), parameterType.toLowerCase())) {
            prCode = pr;
            break;
          }
        }
      } else {
        if (_.includes(pr.name.toLowerCase(), productName.toLowerCase())
        && _.includes(pr.name.toLowerCase(), 'sphere')) {
          prCode = pr;
          break;
        }
      }
    }
    this.productCode = prCode;

    if (this.productCode) {
      this.product.price1 = this.productCode.price1;
      this.product.price2 = this.productCode.price2;
      this.product.price3 = this.productCode.price3;
    }
    this.setPrice();
    console.log(this.product);
    this.updatePriceSale();
  }

  updatePriceSale() {
    this.priceAcum = ((this.product.quantityLeft ? (this.product.quantityLeft * this.product.priceSaleLeft) : 0)
        + (this.product.quantityRight ? (this.product.quantityRight * this.product.priceSaleRight) : 0));
  }

  setPrice() {
    if (this.user.role.idRole === 3) {
       this.membership = this.currentUser.membership.idMembership;
       this.definePrice(this.membership, this.product);
    }
  }

  definePrice(membership, product) {
    switch (membership) {
      case 1:
        product.priceSale = product.price1;
        break;
      case 2:
        product.priceSale = product.price2;
        break;
      case 3:
        product.priceSale = product.price3;
        break;
    }
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser;
      let accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
      this.product.client = accSpct + this.currentUser.name + ' | ' + this.currentUser.country.name;
      this.findShippingAddress(this.client.idUser);
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

  onSelectedClient(clientSelect) {
    if (clientSelect !== undefined) {
      this.client = clientSelect;
      this.membership = this.client.membership;
      this.findShippingAddress(this.client.idUser);
      this.definePrice(this.membership.idMembership, this.product);
      const self = this;
      if (this.product.eyeRight) {
        const parametersR = this.product.parametersRight;
        console.log('paramRight', parametersR);
        parametersR.forEach(function(param) {
          if (param.name === 'Type') {
            self.changeSelect('right', param, param.selected);
          }
        });
      }
      if (this.product.eyeLeft) {
        const parametersL = this.product.parametersLeft;
        console.log('paramLeft', parametersL);
        parametersL.forEach(function(param) {
          if (param.name === 'Type') {
            self.changeSelect('left', param, param.selected);
          }
        });
      }
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSale = '';
      this.priceAcum = 0;
    }
  }

  getMin(parameter) {
    let min = 0;
    switch (parameter.name) {
      case 'Diameter':
        min = 13.00;
        break;
      case 'Base Curve':
        min = 7.70;
        break;
      case 'Axis':
        min = 1.00;
        break;
    }
    return min;
  }

  getMax(parameter) {
    let max = 0;
    switch (parameter.name) {
      case 'Diameter':
        max = 22.00;
        break;
      case 'Base Curve':
        max = 9.50;
        break;
      case 'Axis':
        max = 180.00;
        break;
    }
    return max;
  }

  getStep(parameter) {
    let step = 0;
    switch (parameter.name) {
      case 'Diameter':
        step = 0.10;
        break;
      case 'Base Curve':
        step = 0.10;
        break;
      case 'Axis':
        step = 0.25;
        break;
    }
    return step;
  }

  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Warranty') {
      if (eye === 'right') {
        if (parameter.selected === 'Yes') {
          this.warrantyRight = true;
        } else {
          this.warrantyRight = false;
        }
      }

      if (eye === 'left') {
        if (parameter.selected === 'Yes') {
          this.warrantyLeft = true;
        } else {
          this.warrantyLeft = false;
        }
      }
    }
    if (this.client ) {
      if (parameter.name === 'Type') {
        parameter.selected = value;
        this.parameterType = parameter.selected;
      }
      this.setCodeProduct();
      this.definePrice(this.client.membership.idMembership, this.product);
      if (eye === 'right') {
        this.product.priceSaleRight = this.product.priceSale;
      } else if (eye === 'left') {
        this.product.priceSaleLeft = this.product.priceSale;
      }
      this.updatePriceSale();
    }
    if (parameter.name === 'Black Pupil' || parameter.name === 'Clear Pupil') {
      parameter.disabled = false;
      switch (parameter.name) {
        case 'Black Pupil':
          if (eye === 'right') {
            let clearPupilRight: any;
            clearPupilRight = _.find(this.product.parametersRight, {name: 'Clear Pupil'});
            clearPupilRight.sel = null;
            clearPupilRight.selected = 'N/A';
            clearPupilRight.disabled = true;
          }
          if (eye === 'left') {
            let clearPupilLeft: any;
            clearPupilLeft = _.find(this.product.parametersLeft, {name: 'Clear Pupil'});
            clearPupilLeft.sel = null;
            clearPupilLeft.selected = 'N/A';
            clearPupilLeft.disabled = true;
          }
          break;
        case 'Clear Pupil':
          if (eye === 'right') {
            let blackPupilRight: any;
            blackPupilRight = _.find(this.product.parametersRight, {name: 'Black Pupil'});
            blackPupilRight.sel = null;
            blackPupilRight.selected = 'N/A';
            blackPupilRight.disabled = true;
          }
          if (eye === 'left') {
            let blackPupilLeft: any;
            blackPupilLeft = _.find(this.product.parametersLeft, {name: 'Black Pupil'});
            blackPupilLeft.sel = null;
            blackPupilLeft.selected = 'N/A';
            blackPupilLeft.disabled = true;
          }
          break;
      }
    }
  }

  disabledPupil(parameter) {
    if (parameter.name === 'Black Pupil' || parameter.name === 'Clear Pupil') {
      return parameter.disabled;
    }
    return false;
  }

  isPupil(parameter) {
    return parameter.name === 'Black Pupil' || parameter.name === 'Clear Pupil';
  }

  resetPupil(eye, parameter) {
    parameter.sel = null;
    parameter.selected = null;
    parameter.value = null;
    switch (parameter.name) {
      case 'Black Pupil':
        if (eye === 'right') {
          let clearPupilRight: any;
          clearPupilRight = _.find(this.product.parametersRight, {name: 'Clear Pupil'});
          clearPupilRight.disabled = false;
        }
        if (eye === 'left') {
          let clearPupilLeft: any;
          clearPupilLeft = _.find(this.product.parametersLeft, {name: 'Clear Pupil'});
          clearPupilLeft.disabled = false;
        }
        break;
      case 'Clear Pupil':
        if (eye === 'right') {
          let blackPupilRight: any;
          blackPupilRight = _.find(this.product.parametersRight, {name: 'Black Pupil'});
          blackPupilRight.disabled = false;
        }
        if (eye === 'left') {
          let blackPupilLeft: any;
          blackPupilLeft = _.find(this.product.parametersLeft, {name: 'Black Pupil'});
          blackPupilLeft.disabled = false;
        }
        break;
    }
  }
  findShippingAddress(idCliente) {
    this.shippingAddressService.findIdUser$(idCliente).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
      } else if (res.code === CodeHttp.notContent) {
        this.product.shippingAddress = '';
        this.translate.get('You must enter a main address in the shipping address module',
         {value: 'You must enter a main address in the shipping address module'}).subscribe(( res1: string) => {
          this.notification.warning('', res1);
        });
      } else {
        this.product.shippingAddress = '';
      }
    });
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

  formIsValid() {
    let isValid = true;
    if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
      return false;
    }

    if (this.product.eyeRight) {
      if (this.product.quantityRight === undefined) {
        return false;
      }
      _.each(this.product.parametersRight, function (param) {
        if (param.name !== 'Iris Code') {
          if (param.selected === null || param.selected === undefined) {
            isValid = param.disabled || false;
          }
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
      _.each(this.product.parametersLeft, function (param) {
        if (param.name !== 'Iris Code') {
          if (param.selected === null || param.selected === undefined) {
            isValid = param.disabled || false;
          }
        }
      });
      if (!this.product.quantityLeft) {
        isValid = false;
      }
    }
    return isValid;
  }

  getQuote() {
    this.translate.get('Confirm quote', {value: 'Confirm quote'}).subscribe((title: string) => {
      this.translate.get('Are you sure you want to get a quote?',
       {value: 'Are you sure you want to get a quote?'}).subscribe((msg: string) => {
         this.alertify.confirm(title, msg, () => {
            this.productService.getQuote$(this.client, this.id).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.translate.get('Request for quotation sent successfully',
                {value: 'Request for quotation sent successfully'}).subscribe(( res1: string) => {
                this.notification.success('', res1);
              });
              } else {
                console.log(res.errors[0].detail);
                this.spinner.hide();
              }
            }, error => {
              console.log('error', error);
              this.spinner.hide();
            });
          }, () => {});
        });
      });
  }

  format(value, parameter): any {
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
        if (partInt <= this.getMax(parameter)) {
          partDec = toString.slice( pos + 1, toString.length);
          flat = this.completeStart(partInt, 2) + '.' + this.completeEnd(partDec, 2);
        } else {
            flat = null;
        }
      } else {
          if (value <= this.getMax(parameter)) {
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

    this.updatePriceSale();
  }

  buildProductsSelected() {
    this.setEyeSelected();
    const product = this.productCopy;
    let productsSelected = this.productsSelected;
    const self = this;
    let typeLeft: any;
    let typeRight: any;
    _.each(productsSelected, function(this, productSelected, index) {

      productSelected.patient = product.patient;

      if (productSelected.eye === 'Right') {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;
        productSelected.price = product.priceSaleRight;

        /*params*/
        _.each(product.parametersRight, function(parameter, index) {
          if (parameter.name === 'Warranty' || parameter.name === 'Limbal Ring' || parameter.name === 'Light Sensitivity' ) {
            parameter.selected = parameter.selected === 'Yes' ? true : false;
          }
          if (parameter.name === 'Iris Code') {
            let values: any[] = [];
            parameter.values.forEach(function(param) {
              if (param.selected !== undefined && param.selected !== null) {
                values.push({ name: param.name, selected: param.selected }) ;
              }
            });
            parameter.selected = values;
          }

          if (parameter.name === 'Diameter' || parameter.name === 'Base Curve'
          || parameter.name === 'Axis' ) {
            parameter.selected = self.format(parameter.selected, parameter);
          }

          if (parameter.name === 'Type') {
            typeRight = parameter.selected;
          }
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
        });
        productSelected.parameters = product.parametersRight;

      }
      if (productSelected.eye === 'Left') {
        productSelected.quantity = product.quantityLeft;
        productSelected.price = product.priceSaleLeft;
        productSelected.observations = product.observationsLeft;

        /*params*/
        _.each(product.parametersLeft, function(parameter, index) {
          if (parameter.name === 'Warranty' || parameter.name === 'Limbal Ring' || parameter.name === 'Light Sensitivity') {
            parameter.selected = parameter.selected === 'Yes' ? true : false;
          }
          if (parameter.name === 'Iris Code') {
            let values: any[] = [];
            parameter.values.forEach(function(param) {
              if (param.selected !== undefined && param.selected !== null) {
                values.push({ name: param.name, selected: param.selected }) ;
              }
            });
            parameter.selected = values;
          }

          if (parameter.name === 'Diameter' || parameter.name === 'Base Curve'
          || parameter.name === 'Axis' ) {
            parameter.selected = self.format(parameter.selected, parameter);
          }

          if (parameter.name === 'Type') {
            typeLeft = parameter.selected;
          }
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel', 'placeholder']);
        });
        productSelected.parameters = product.parametersLeft;
      }

      productSelected.detail = { name: product.name, eye: productSelected.eye, parameters: productSelected.parameters };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye', 'set']);
    });

    // add products code
    const auxList = JSON.parse(JSON.stringify(productsSelected));
    const auxproductsSelected = [];
    const productsCode = this.productsCode;
    const idProduct = this.product.idProduct;
    const namePr = this.product.name;

    _.each(auxList, function (productAux, index: number) {
      const productH = JSON.parse(JSON.stringify(productAux));
      let prCode: any;
      let parameterType: any;
      if (idProduct === 267) {
        if (productH.detail.eye === 'Left') {
          parameterType = typeLeft;
        } else if (productH.detail.eye === 'Right') {
          parameterType = typeRight;
        }

        for (let i = 0, len = productsCode.length; i < len; i++) {
          let pr = productsCode[i];
          if (parameterType === 'Cosmetic') {
            if (_.includes(pr.name.toLowerCase(), namePr.toLowerCase())
                && _.includes(pr.name.toLowerCase(), parameterType.toLowerCase()) && _.includes(pr.name.toLowerCase(), 'sphere')) {
                prCode = pr;
                break;
             }
          } else {
            if (_.includes(pr.name.toLowerCase(), namePr.toLowerCase())
            && _.includes(pr.name.toLowerCase(), parameterType.toLowerCase())) {
              prCode = pr;
              break;
            }
          }
        }
      } else {
        for (let i = 0, len = productsCode.length; i < len; i++) {
          let pr = productsCode[i];
          if (_.includes(pr.name.toLowerCase(), namePr.toLowerCase())
          && _.includes(pr.name.toLowerCase(), 'sphere')) {
            prCode = pr;
            break;
          }
        }
      }

      productH.id = prCode.idProduct;
      productH.name = prCode.name;
      productH.codeSpectrum = prCode.codeSpectrum;
      auxproductsSelected.push(productH);
    });

    productsSelected = auxproductsSelected;

    return productsSelected;
  }

  verifyOpenModal() {
    if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
      && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
      this.openModal(this.type);
    }
  }

  openModal(type): void {
    this.spinner.hide();
    const modalRef = this.modalService.open(ConfirmationOrionComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.result.then((result) => {
      this.ngOnInit();
    }, (reason) => {
    });
  }

  addToCart(type) {
    this.type = type;
    this.spinner.show();
    this.productCopy = JSON.parse(JSON.stringify(this.product));
    const productsRequested = [];
    const productsSelected = this.buildProductsSelected();
    this.saveFiles();
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

}
