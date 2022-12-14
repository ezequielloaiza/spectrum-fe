import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../shared/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ProductRequested } from '../../shared/models/productrequested';
import { Product } from '../../shared/models/product';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { ConfirmationSynergeyesComponent } from '../modals/confirmation-buy/confirmation-synergeyes/confirmation-synergeyes.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-synergeyes',
  templateUrl: './product-view-synergeyes.component.html',
  styleUrls: ['./product-view-synergeyes.component.scss']
})
export class ProductViewSynergeyesComponent implements OnInit {
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
  basketRequestModal: BasketRequest = new BasketRequest();
  client: any;
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
  typeOrder = 'new';
  membershipAllowed: any;
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
              private userService: UserService,
              private route: ActivatedRoute,
              private notification: ToastrService,
              private translate: TranslateService,
              private spinner: NgxSpinnerService,
              private shippingAddressService: ShippingAddressService,
              private modalService: NgbModal,
              private userStorageService: UserStorageService) {
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
    this.productService.findBySupplierInView$(9 , true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.getProductView();
        this.spinner.hide();
        this.getUrl();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  getUrl() {
    const lang = this.userStorageService.getLanguage();
    return lang === 'en' ? JSON.parse(this.product.url)[0].en : JSON.parse(this.product.url)[0].es;
  }

  getProductsCode() {
    this.productService.findBySupplierAndInViewAndCategory$(9, false, 10).subscribe(res1 => {
      if (res1.code === CodeHttp.ok) {
        this.productsCode = res1.data;
        let pC = this.productsCode.filter((item) => {
          return _.includes(item.codeSpectrum, this.product.codeSpectrum); });
        this.productsCode = pC.sort((a, b) => (b.idProduct > a.idProduct) ? -1 : 1);
        this.setCodeProduct('');
      } else {
        console.log(res1.errors[0].detail);
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

    //default Diameter
    let diameterRight = null;
    diameterRight = _.find(this.product.parametersRight, { name: 'Diameter' });
    diameterRight.sel = diameterRight.selected = "14.50";

    let diameterLeft = null;
    diameterLeft =  _.find(this.product.parametersLeft, { name: 'Diameter' });
    diameterLeft.sel = diameterLeft.selected = "14.50";

    //set defaul Central Near Zone
    this.setParameterDefaultValue(this.product.parametersRight); //FUNCION AA
    this.setParameterDefaultValue(this.product.parametersLeft); //FUNCION AA

    this.setClient();
    this.setPrice();
    this.getProductsCode();
  }

  setParameterDefaultValue(parametersBox) { //FUNCION AA
    const self = this;
    _.each(parametersBox || [], function (parameter) {
      const parameterValues = _.uniq(parameter.values || []);
      if (parameterValues.length === 1) {
        parameter.selected = parameterValues[0];

      }
    });
  }

  setCodeProduct(warranty) {
    const prName = this.product.codeSpectrum;
    let prCode;

    for (let i = 0, len = this.productsCode.length; i < len; i++) {
      let pr = this.productsCode[i];
      if (_.includes(pr.codeSpectrum, prName ) && _.includes(pr.codeSpectrum, warranty)) {
        prCode = pr;
        break;
      }
    }
    this.productCode = prCode;
    if (this.productCode) {
      this.product.price1 = this.productCode.price1;
      this.product.price2 = this.productCode.price2;
      this.product.price3 = this.productCode.price3;
      this.product.price4 = this.productCode.price4;
      this.product.price5 = this.productCode.price5;
      this.product.price6 = this.productCode.price6;
      this.product.price7 = this.productCode.price7;
      this.product.price8 = this.productCode.price8;
    }
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser;
      this.membership = this.currentUser.membership;
      const accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
      this.product.client = accSpct + this.currentUser.name + ' | ' + this.currentUser.country.name;
      this.findShippingAddress(this.client.idUser);
      this.definePrice(this.membership.idMembership);
    } else if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          this.listCustomers = this.listCustomersAux;
          this.listCustomers.map((i) => {
            const accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' + i.country.name;
            return i;
          });
        }
      });
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


  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    if (parameter.name === 'Warranty') {
      if (eye === 'right') {
        if (parameter.selected === 'Yes') {
          this.warrantyRight = true;
          this.setCodeProduct('(W)' );
        } else {
          this.warrantyRight = false;
          this.setCodeProduct('(NW)');
        }
      }

      if (eye === 'left') {
        if (parameter.selected === 'Yes') {
          this.warrantyLeft = true;
          this.setCodeProduct('(W)');
        } else {
          this.warrantyLeft = false;
          this.setCodeProduct('(NW)');
        }
      }

      if (this.client) {
        this.definePrice(this.client.membership.idMembership);
        if (eye === 'right') {
          this.product.priceSaleRight = this.product.priceSale;
        } else if (eye === 'left') {
          this.product.priceSaleLeft = this.product.priceSale;
        }
        this.priceAcum = ((this.product.quantityLeft ? (this.product.quantityLeft * this.product.priceSaleLeft) : 0)
        + (this.product.quantityRight ? (this.product.quantityRight * this.product.priceSaleRight) : 0));
      }
    }

    if (parameter.name === 'Base Curve' && this.product.idProduct === 265) {
      let values: any;
      let skirtCurve: any;
      parameter.selected = value;
      if (parameter.selected >= 50 && parameter.selected <= 250 ){
        values = ['7.9', '8.1', '8.4', '8.7'];
      } else {
        values = ['7.9', '8.1', '8.4'];
      }
      if (eye === 'right') {
        skirtCurve = _.find(this.product.parametersRight, {name: 'Skirt Curve'});
        skirtCurve.values = values;
      }
      if (eye === 'left') {
        skirtCurve = _.find(this.product.parametersLeft, {name: 'Skirt Curve'});
        skirtCurve.values = values;
      }

    }

    if (parameter.name === 'Dominance' && this.product.idProduct === 268) {
      let values: any;
      let centralDistanceZone: any;
      let centralNearZone: any;
      let addPower: any;

      switch (eye) {
        case 'right':
          switch (parameter.selected) {
            case 'CN':
              addPower = _.find(this.product.parametersRight, {name: 'Add'});
              values = ['+1.00', '+1.75', '+2.50'];
              addPower.values = values;
              addPower.sel = null;
              addPower.selected = null;
              addPower.hidden = false;
              centralNearZone = _.find(this.product.parametersRight, {name: 'Central Near Zone'});
              centralNearZone.hidden = false;
              centralNearZone.selected = centralNearZone.values[0];
              centralNearZone.sele = centralNearZone.values[0];
              centralDistanceZone = _.find(this.product.parametersRight, {name: 'Central Distance Zone'});
              centralDistanceZone.sel = null;
              centralDistanceZone.selected = null;
              centralDistanceZone.hidden = true;
              break;
            case 'CD':
              addPower = _.find(this.product.parametersRight, {name: 'Add'});
              values = ['+0.75', '+1.00', '+1.25', '+1.50', '+1.75', '+2.00', '+2.25', '+2.50', '+2.75',
              '+3.00', '+3.25', '+3.50', '+3.75', '+4.00', '+4.25', '+4.50', '+4.75', '+5.00'];
              addPower.values = values;
              addPower.sel = null;
              addPower.selected = null;
              addPower.hidden = false;
              centralDistanceZone = _.find(this.product.parametersRight, {name: 'Central Distance Zone'});
              centralDistanceZone.hidden = false;
              centralNearZone = _.find(this.product.parametersRight, {name: 'Central Near Zone'});
              centralNearZone.hidden = true;
              centralNearZone.sel = null;
              centralNearZone.selected = null;
              break;
          }
          break;
        case 'left':
          switch (parameter.selected) {
            case 'CN':
              addPower = _.find(this.product.parametersLeft, {name: 'Add'});
              values = ['+1.00', '+1.75', '+2.50'];
              addPower.values = values;
              addPower.sel = null;
              addPower.selected = null;
              addPower.hidden = false;
              centralNearZone = _.find(this.product.parametersLeft, {name: 'Central Near Zone'});
              centralNearZone.hidden = false;
              centralNearZone.selected = centralNearZone.values[0];
              centralNearZone.sele = centralNearZone.values[0];
              centralDistanceZone = _.find(this.product.parametersLeft, {name: 'Central Distance Zone'});
              centralDistanceZone.selected = null;
              centralDistanceZone.sel = null;
              centralDistanceZone.hidden = true;
              break;
            case 'CD':
              addPower = _.find(this.product.parametersLeft, {name: 'Add'});
              values = ['+0.75', '+1.00', '+1.25', '+1.50', '+1.75', '+2.00', '+2.25', '+2.50', '+2.75',
              '+3.00', '+3.25', '+3.50', '+3.75', '+4.00', '+4.25', '+4.50', '+4.75', '+5.00'];
              addPower.values = values;
              addPower.selected = null;
              addPower.sel = null;
              addPower.hidden = false;
              centralDistanceZone = _.find(this.product.parametersLeft, {name: 'Central Distance Zone'});
              centralDistanceZone.hidden = false;
              centralNearZone = _.find(this.product.parametersLeft, {name: 'Central Near Zone'});
              centralNearZone.selected = null;
              centralNearZone.sel = null;
              centralNearZone.hidden = true;
              break;
          }
          break;
      }

      parameter.selected = value;
    }
  }

  updatePriceSale() {
    this.priceAcum = ((this.product.quantityLeft ? (this.product.quantityLeft * this.product.priceSaleLeft) : 0)
        + (this.product.quantityRight ? (this.product.quantityRight * this.product.priceSaleRight) : 0));
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
    _.each(parameters, function (param) {
      if (_.uniq(param.values).length > 1) {
        param.selected = null;
        param.sel = null;
      }
    });
    if (eye === 'right') {
      this.product.parametersRight = parameters;
    } else {
      this.product.parametersLeft = parameters;
    }

    this.updatePriceSale();
  }

  hiddenParameters(parameter, eye) {
    if (parameter.name === 'Central Distance Zone' || parameter.name === 'Add Powers' || parameter.name === 'Central Near Zone'  ) {
      let dominance: any;
      let value: any;
      switch (eye) {
        case 'right':
          dominance =  _.find(this.product.parametersRight, {name: 'Dominance'});
          value = (dominance.selected !== null && dominance.selected !== undefined);
          break;
        case 'left':
          dominance =  _.find(this.product.parametersLeft, {name: 'Dominance'});
          value = (dominance.selected !== null || dominance.selected !== undefined);
          break;
      }
      return value ? parameter.hidden : true;
    }
    return false;
  }

  onSelectedClient(clientSelect) {
    if (clientSelect !== undefined) {
      this.client = clientSelect;
      this.membership = this.client.membership;
      this.findShippingAddress(this.client.idUser);
      this.definePrice(clientSelect.membership.idMembership);
      const self = this;
      if (this.product.eyeRight) {
        const parametersR = this.product.parametersRight;
        parametersR.forEach(function(param) {
          if (param.name === 'Warranty') {
            self.changeSelect('right', param, param.selected);
          }
        });
      }
      if (this.product.eyeLeft) {
        const parametersL = this.product.parametersLeft;
        parametersL.forEach(function(param) {
          if (param.name === 'Warranty') {
            self.changeSelect('left', param, param.selected);
          }
        });
      }
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
         {value: 'You must enter a main address in the shipping address module'}).subscribe(( res1: string) => {
          this.notification.warning('', res1);
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
      case 4:
        this.product.priceSale = this.product.price4;
        break;
      case 5:
        this.product.priceSale = this.product.price5;
        break;
      case 6:
        this.product.priceSale = this.product.price6;
        break;
      case 7:
        this.product.priceSale = this.product.price7;
        break;
      case 8:
        this.product.priceSale = this.product.price8;
        break;
    }

    this.membershipAllowed = this.product.priceSale > 0;
  }

  buildProductsSelected() {
    this.setEyeSelected();
    let product = this.productCopy;
    let productsSelected = this.productsSelected;
    let warrantyLeft = this.warrantyLeft;
    let warrantyRight = this.warrantyRight;
    const membership = this.membership.idMembership;
    _.each(productsSelected, function(this, productSelected, index) {

      productSelected.patient = product.patient;
      if (productSelected.eye === 'Right') {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;
        productSelected.price = product.priceSaleRight;

        /*params*/
        _.each(product.parametersRight, function(parameter, index) {
          if (parameter.name === 'Warranty' || parameter.name === 'Enhanced Profile') {
            parameter.selected = parameter.selected === 'Yes' ? true : false;
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
          if (parameter.name === 'Warranty' || parameter.name === 'Enhanced Profile') {
            parameter.selected = parameter.selected === 'Yes' ? true : false;
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

    _.each(auxList, function (productAux, index: number) {
      const productH = JSON.parse(JSON.stringify(productAux));
      let prCode: any;
      let warrant = '';

      if (productH.detail.eye === 'Right') {
        warrant = warrantyRight ? '(W)' : '(NW)';
      } else if (productH.detail.eye === 'Left') {
        warrant = warrantyLeft ? '(W)' : '(NW)';
      }

      for (let i = 0, len = productsCode.length; i < len; i++) {
        let pr = productsCode[i];
        if (_.includes(pr.codeSpectrum, warrant )) {
          prCode = pr;
          break;
        }
      }

      productH.id = prCode.idProduct;
      productH.name = prCode.name;
      productH.codeSpectrum = membership !== 7 ? prCode.codeSpectrum : prCode.codeSpectrum + ' P&O';
      productH.detail.codeSpectrum = productH.codeSpectrum;
      auxproductsSelected.push(productH);
    });

    productsSelected = auxproductsSelected;

    return productsSelected;
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
      _.each(this.product.parametersRight, function (param){
        if (param.selected === null || param.selected === undefined) {
          if (param.name !== 'Add' && param.name !== 'Dominance' && param.name !== 'Central Near Zone' && param.name !== 'Central Distance Zone') {
            isValid = false;
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
      _.each(this.product.parametersLeft, function (param){
        if (param.selected === null || param.selected === undefined) {
          if (param.name !== 'Add' && param.name !== 'Dominance' && param.name !== 'Central Near Zone' && param.name !== 'Central Distance Zone') {
            isValid = false;
          }
        }
      });
      if (!this.product.quantityLeft) {
        isValid = false;
      }
    }
    return isValid;
  }

  verifyOpenModal() {
    if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
      && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
      this.openModal(this.type);
    }
  }

  membershipNotAllowed() {
    this.translate.get('The current membership does not have prices for this product.', {value: 'The current membership does not have prices for this product.'}).subscribe(( res: string) => {
      this.notification.error('', res);
    });
  }

  openModal(type): void {
    this.spinner.hide();

    if (!this.membershipAllowed) {
      this.membershipNotAllowed();
      return;
    }

    const modalRef = this.modalService.open(ConfirmationSynergeyesComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeOrder = this.typeOrder;
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
    // this.openModal(type);
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
      const fileResponse = JSON.parse(this.uploadResultRightEye.response).data;
      fileProductRequest.url  = fileResponse.url;
      fileProductRequest.name = fileResponse.name;
      fileProductRequest.type = this.uploadResultRightEye.item.file.type;
      fileProductRequest.size = this.uploadResultRightEye.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFileRightEye.push(fileProductRequest);
      this.verifyOpenModal();
    } if (eye === 'Left' && this.uploadResultLeftEye.success) {
      const fileProductRequest: FileProductRequested = new FileProductRequested();
      const fileResponse = JSON.parse(this.uploadResultLeftEye.response).data;
      fileProductRequest.url  = fileResponse.url;
      fileProductRequest.name = fileResponse.name;
      fileProductRequest.type = this.uploadResultLeftEye.item.file.type;
      fileProductRequest.size = this.uploadResultLeftEye.item.file.size;
      fileProductRequest.createdAt = new Date();
      this.listFileLeftEye.push(fileProductRequest);
      this.verifyOpenModal();
    }
  }

  validatePower(parameter) {
    parameter.selected = parseFloat(parameter.selected);
    if (parameter.selected < -15.00 && parameter.selected > 10.00 ) {
      parameter.selected = 0;
    } else {
      if (parameter.selected < -8.00 || parameter.selected > 8.00) {
        if (parameter.selected % 0.5 == 0) {
          parameter.selected = this.format(parameter.selected);
        } else {
          parameter = 0;
        }
      } else {
        if (parameter.selected % 0.25 == 0) {
          parameter.selected = this.format(parameter.selected);
          parameter = parameter;
        } else {
          parameter = 0;
        }
      }
    }
  }
}
