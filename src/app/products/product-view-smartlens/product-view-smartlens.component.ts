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
import { environment } from '../../../environments/environment';
import { ConfirmationSmartlensComponent } from '../modals/confirmation-buy/confirmation-smartlens/confirmation-smartlens.component';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-smartlens',
  templateUrl: './product-view-smartlens.component.html',
  styleUrls: ['./product-view-smartlens.component.scss']
})
export class ProductViewSmartlensComponent implements OnInit {


  products: Array<any> = new Array;
  product: any;
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
  private uploadResultLeftEye: any = null;
  private uploadResultRightEye: any = null;
  typeOrder = 'new';
  typeLensLeft: any;
  typeLensRight: any;

  designLeft: any;
  designRight: any;
  materialsRight: any;
  materialsLeft: any;
  hydrapegRight: any;
  hydrapegLeft: any;


  /* Notch */
  @ViewChild('notchRight') notchRight;
  @ViewChild('notchLeft') notchLeft;
  typeNotchRight: any;
  typeNotchLeft: any;
  notchParam: any;
  axesParam: any;

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
    this.productService.findBySupplierInView$(14 , true).subscribe(res => {
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
    this.product.priceSale = '';

    // Eye Right
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    this.typeLensRight = JSON.parse(this.product.types)[0].typeLens;
    this.designRight = JSON.parse(this.product.types)[0].design;
    this.product.materialsRight = JSON.parse(this.product.types)[0].materials;
    this.product.hydrapegRight = JSON.parse(this.product.types)[0].hydrapeg;
    this.setParameterDefaultValue(this.product.parametersRight);
    this.changeTypeLens('right', 'Design by laboratory');

    // Eye Left
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    this.typeLensLeft = JSON.parse(this.product.types)[0].typeLens;
    this.designLeft = JSON.parse(this.product.types)[0].design;
    this.product.materialsLeft = JSON.parse(this.product.types)[0].materials;
    this.product.hydrapegLeft = JSON.parse(this.product.types)[0].hydrapeg;
    this.setParameterDefaultValue(this.product.parametersLeft);
    this.changeTypeLens('left', 'Design by laboratory');

    this.setClient();
    this.setPrice();
  }

  setParameterDefaultValue(parameters) {
    const self = this;
    _.each(parameters || [], function (parameter) {
      const parameterValues = _.uniq(parameter.values || []);
      if (parameterValues.length === 1 ) {
        parameter.selected = parameterValues[0];
        console.log(parameter.name);
      }
    });
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser.idUser;
      let accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
      this.product.client = accSpct + this.currentUser.name + ' | ' + this.currentUser.country.name;
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

  setPrice() {
    if (this.user.role.idRole === 3) {
       this.membership = this.currentUser.membership.idMembership;
       this.definePrice(this.membership);
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

  // Methods of View

  getParams(eye) {
    let self = this;
    switch (eye) {
      case 'right':
        if (this.typeLensRight.selected === 'Final Design') {
          return _.filter(this.product.parametersRight, function(param) {
            // Excluding params design by laboratory
            return param.name !== 'Over-refraction';
          });
        }
        return this.product.parametersRight;

      case 'left':
        if (this.typeLensLeft.selected === 'Final Design') {
          return _.filter(this.product.parametersLeft, function(param) {
            // Excluding params design by laboratory
            return param.name !== 'Over-refraction';
          });
        }
        return this.product.parametersLeft;
    }
  }

  isDependent(param, eye) {
    const parameters = eye === 'right' ? this.product.parametersRight : this.product.parametersLeft;
    const eyeSelected = eye === 'right' ? this.product.eyeRight : this.product.eyeLeft;

    // Finding Diameter
    const diameter: any = _.find(parameters, { name: 'Diameter (mm)' });

    // Finding Sag.
    const sag: any = _.find(parameters, { name: 'Sag.' });

    switch (param.name) {
      case "Sag.":
        return !eyeSelected  || diameter.selected ? null : "Select Diameter (mm)";

      case "Base Curve (mm)":
      case "Power (D)":
        return !eyeSelected || sag.selected ? null : "Select Sag.";

      default:
        return null;
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
      this.membership = 0;
      this.product.priceSale = '';
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

  clean(eye) {
    let header;
    let parameters;
    if (eye === 'right') {
      parameters = this.product.parametersRight;
      header = this.product.headerRight;
      this.product.quantityRight = '';
      this.product.observationsRight = '';
      this.typeLensRight = JSON.parse(this.product.types)[0].typeLens;
      this.designRight = JSON.parse(this.product.types)[0].design;
      this.changeTypeLens('right', 'Design by laboratory');
    } else {
      parameters = this.product.parametersLeft;
      header = this.product.headerLeft;
      this.product.quantityLeft = '';
      this.product.observationsLeft = '';
      this.typeLensLeft = JSON.parse(this.product.types)[0].typeLens;
      this.designLeft = JSON.parse(this.product.types)[0].design;
      this.changeTypeLens('left', 'Design by laboratory');
    }

    // header
    _.each(header, function (itemHeader) {
      itemHeader.selected = null;
    });
    // parameter
    _.each(parameters, function (param) {
      if (param.values.length > 1 || param.type !== "selected") {
        param.selected = null;
      }
    });
    if (eye === 'right') {
      this.product.parametersRight = parameters;
    } else {
      this.product.parametersLeft = parameters;
    }
  }

  changeMaterials(value) {
    this.product.materials.selected = value;

    if (value !== 'Boston-XO') {
      this.product.hydrapeg.selected = "No";
    }
  }

  changeSelect(eye, parameter, value, value2) {
    parameter.selected = value;

    // Finding baseCurve
    let baseCurve = null;
    if (eye === "right") {
      baseCurve = _.find(this.product.parametersRight, { name: 'Base Curve (mm)' });
    } else {
      baseCurve = _.find(this.product.parametersLeft, { name: 'Base Curve (mm)' });
    }

     // Finding power
     let power = null;
     if (eye === "right") {
       power = _.find(this.product.parametersRight, { name: 'Power (D)' });
     } else {
       power = _.find(this.product.parametersLeft, { name: 'Power (D)' });
     }

    if (!power || !baseCurve) {
      return;
    }

    if (parameter.name === "Diameter (mm)") {

      // Finding Sag.
      let sag = null;
      if (eye === "right") {
        sag = _.find(this.product.parametersRight, { name: 'Sag.' });
      } else {
        sag = _.find(this.product.parametersLeft, { name: 'Sag.' });
      }

      if (!sag) {
        return;
      }

      sag.selected = null;
      baseCurve.selected = null;
      power.selected = null;

      switch (parameter.selected) {
        case "15.00":
          sag.values = ["3.400", "3.800"];
          break;
        case "15.50":
          sag.values = ["3.200", "3.400", "3.600", "3.800", "4.000", "4.200", "4.800"];
          break;
        case "16.50":
          sag.values = ["3.800", "4.000", "4.200", "4.400", "4.600", "4.800", "5.200"];
          break;
      }
    } else if (parameter.name === "Sag.") {

      // Finding Diameter.
      let diameter = null;
      if (eye === "right") {
        diameter = _.find(this.product.parametersRight, { name: 'Diameter (mm)' });
      } else {
        diameter = _.find(this.product.parametersLeft, { name: 'Diameter (mm)' });
      }

      baseCurve.disabled = true;
      power.disabled = true;

      // Diameter 15.00
      if (diameter.selected === "15.00") {
        if (parameter.selected === "3.400") {
          baseCurve.selected = "8.65";
          power.selected = "3.00";
        }

        if (parameter.selected === "3.800") {
          baseCurve.selected = "8.04";
          power.selected = "0.00";
        }
      }


      // Diameter 15.50
      if (diameter.selected === "15.50") {
        if (parameter.selected === "3.200") {
          baseCurve.selected = "8.65";
          power.selected = "4.00";
        }

        if (parameter.selected === "3.400") {
          baseCurve.selected = "8.65";
          power.selected = "3.00";
        }

        if (parameter.selected === "3.600") {
          baseCurve.selected = "8.45";
          power.selected = "2.00";
        }

        if (parameter.selected === "3.800") {
          baseCurve.selected = "8.04";
          power.selected = "0.00";
        }

        if (parameter.selected === "4.000") {
          baseCurve.selected = "7.50";
          power.selected = "-2.00";
        }

        if (parameter.selected === "4.200") {
          baseCurve.selected = "7.03";
          power.selected = "-4.00";
        }

        if (parameter.selected === "4.800") {
          baseCurve.selected = "6.75";
          power.selected = "-10.00";
        }
      }

      // Diameter 16.50
      if (diameter.selected === "16.50") {
        if (parameter.selected === "3.800") {
          baseCurve.selected = "8.44";
          power.selected = "2.00";
        }

        if (parameter.selected === "4.000") {
          baseCurve.selected = "8.44";
          power.selected = "0.00";
        }

        if (parameter.selected === "4.200") {
          baseCurve.selected = "8.04";
          power.selected = "-2.00";
        }

        if (parameter.selected === "4.400") {
          baseCurve.selected = "8.04";
          power.selected = "-4.00";
        }

        if (parameter.selected === "4.600") {
          baseCurve.selected = "8.04";
          power.selected = "-6.00";
        }

        if (parameter.selected === "4.800") {
          baseCurve.selected = "8.04";
          power.selected = "-8";
        }

        if (parameter.selected === "5.200") {
          baseCurve.selected = "7.34";
          power.selected = "-12.00";
        }
      }
    }
  }

  changeTypeLens(eye, value) {
    switch (eye) {
      ///////////////EYE RIGHT////////////////////
      case 'right':
        this.typeLensRight.selected = value;

        if (value === 'Final Design') {
          const overRefraction: any = _.find(this.product.parametersRight, { name: 'Over-refraction' });
          if (overRefraction) {
            overRefraction.selected = null;
          }
        }
        break;

      ///////////////EYE LEFT////////////////////
      case 'left':
        this.typeLensLeft.selected = value;
        if (value === 'Final Design') {
          const overRefraction: any = _.find(this.product.parametersLeft, { name: 'Over-refraction' });
          if (overRefraction) {
            overRefraction.selected = null;
          }
        }
        break;
    }
  }

  changeDesign(eye, value) {
    switch (eye) {
      ///////////////EYE RIGHT////////////////////
      case 'right':
        this.designRight.selected = value;
        break;

      ///////////////EYE LEFT////////////////////
      case 'left':
        this.designLeft.selected = value;
        break;
    }
  }

  formIsValid() {
    var isValid = true;
    let self = this;
    if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
      return false;
    }

    if (this.product.eyeRight) {
      // quantity
      if (!this.product.quantityRight || !this.product.materialsLeft) {
        isValid = false;
      }

    /*   // check header right
      _.each(this.product.materialsRight, function (param) {
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      }); */

      // check params right
      _.each(this.getParams('right'), function (param) {
        if (param.name === 'Notch (mm)') {
          if (param.values[0].selected === null || param.values[1].selected === null) {
            isValid = false;
          }

          if ((param.values[0].selected !== 0 || param.values[1].selected !== 0) && !param.selectedNotchTime) {
            isValid = false;
          }

        } else if (param.name === "Axes (º)") {
          self.axesParam = _.find(self.product.parametersRight, { name: 'Notch (mm)' });
          if (!!self.axesParam.selectedNotchTime && (param.selected === null || param.selected === undefined)) {
            isValid = false;
          }
        } else if (param.selected === null || param.selected === undefined || param.selected === '') {
          isValid = false;
        }
      });
    }


    if (this.product.eyeLeft) {
      // quantity
      if (!this.product.quantityLeft || !this.product.materialsLeft) {
        isValid = false;
      }

      /* // check header left
      _.each(this.product.materialsLeft, function (param) {
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      }); */

      // check params left
      _.each(this.getParams('left'), function (param) {
        if (param.name === 'Notch (mm)') {
          if (param.values[0].selected === null || param.values[1].selected === null) {
            isValid = false;
          }

          if ((param.values[0].selected !== 0 || param.values[1].selected !== 0) && !param.selectedNotchTime) {
            isValid = false;
          }

        } else if (param.name === "Axes (º)") {
          self.axesParam = _.find(self.product.parametersLeft, { name: 'Notch (mm)' });
          if (!!self.axesParam.selectedNotchTime && (param.selected === null || param.selected === undefined)) {
            isValid = false;
          }
        } else if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
      });
    }

    return isValid;
  }


  // Params notch and axis

  changeNotchTime(eye, parameter, value) {
    //validating change in notch time
    var changedNotch = parameter.selectedNotchTime !== value;

    parameter.selectedNotchTime = value;
    switch (eye) {
      case 'right':
        this.notchRight.itemsList._items[0].label = value;
        this.notchRight.itemsList._items[0].value = value;

        // restart axes after change
        if (changedNotch) {
          this.axesParam = _.find(this.product.parametersRight, { name: 'Axes (º)' });
           this.axesParam.selected = null
        }
        break;
      case 'left':
        this.notchLeft.itemsList._items[0].label = value;
        this.notchLeft.itemsList._items[0].value = value;

        // restart axes after change
        if (changedNotch) {
          this.axesParam = _.find(this.product.parametersLeft, { name: 'Axes (º)' });
          this.axesParam.selected = null
        }
        break;
    }

    //set null in values notch
    if (parameter.values[0].selected === 0) {
      parameter.values[0].selected = null;
    }

    if (parameter.values[1].selected === 0) {
      parameter.values[1].selected = null;
    }
  }

  validateSelectedNotch(parameter) {
    if (parameter.selectedNotchTime === null) {
      parameter.values[0].selected = 0;
      parameter.values[1].selected = 0;
    }
  }

  axesRequired(eye) {
    switch (eye) {
      case 'right':
        this.notchParam = _.find(this.product.parametersRight, { name: 'Notch (mm)' });
        return !!this.notchParam.selectedNotchTime;
      case 'left':
        this.notchParam = _.find(this.product.parametersLeft, { name: 'Notch (mm)' });
        return !!this.notchParam.selectedNotchTime;
    }
  }

  axesValues(eye) {
    switch (eye) {
      case 'right':
        this.notchParam = _.find(this.product.parametersRight, { name: 'Notch (mm)' });
        this.axesParam = _.find(this.product.parametersRight, { name: 'Axes (º)' });

        switch (this.notchParam.selectedNotchTime) {
          case 'Upper Temporal':
            return _.range(90, 181).toString().split(",")
          case 'Lower Temporal':
            return _.range(180, 271).toString().split(",");
          case 'Upper Nasal':
            return _.range(0, 91).toString().split(",");
          case 'Lower Nasal':
            return _.range(270, 361).toString().split(",");
          default:
            this.axesParam.selected = null;
            return [];
        }

      case 'left':
        this.notchParam = _.find(this.product.parametersLeft, { name: 'Notch (mm)' });
        this.axesParam = _.find(this.product.parametersLeft, { name: 'Axes (º)' });

        switch (this.notchParam.selectedNotchTime) {
          case 'Upper Temporal':
            return _.range(90, 181).toString().split(",")
          case 'Lower Temporal':
            return _.range(180, 271).toString().split(",");
          case 'Upper Nasal':
            return _.range(0, 91).toString().split(",");
          case 'Lower Nasal':
            return _.range(270, 361).toString().split(",");
          default:
            this.axesParam.selected = null;
            return [];
        }
    }
  }

  // TODO: pending for review (design, typelens)

  addToCart(type) {
    this.type = type;
    this.spinner.show();
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
    // this.openModal(type);
  }

  buildProductsSelected() {
    let self = this;
    this.setEyeSelected();
    let product = JSON.parse(JSON.stringify(this.product));
    let productsSelected = this.productsSelected;

    _.each(productsSelected, function(productSelected, index) {

      productSelected.id = product.idProduct;
      productSelected.patient = product.patient;
      productSelected.price = product.priceSale;

      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;
        productSelected.typeLens = self.typeLensRight.selected;

        /* Materials */
        productSelected.materials = product.materialsRight.selected;

        /* Hydrapeg */
        productSelected.hydrapeg = product.hydrapegRight.selected;

        /* design */
        productSelected.design = self.designRight.selected;

        /*params*/
        _.each(product.parametersRight, function(parameter, index) {
          if (parameter.name === 'Addition') {
            if (parameter.selected === null || parameter.selected === undefined ) {
              parameter.selected = '';
            }
          }

          if (parameter.name === 'Notch (mm)') {
            if (!parameter.selectedNotchTime || (parameter.values[0].selected === 0 && parameter.values[1].selected === 0)) {
              product.parametersRight[index].selected = '0x0'
            } else {
              product.parametersRight[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected + ' (' + parameter.selectedNotchTime + ')';
            }
          }
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'placeholder', 'disabled']);
        });
        productSelected.parameters = product.parametersRight;

      }
      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;
        productSelected.typeLens = self.typeLensLeft.selected;

        /* Materials */
        productSelected.materials = product.materialsLeft.selected;

        /* Hydrapeg */
        productSelected.hydrapeg = product.hydrapegLeft.selected;

         /* design */
         productSelected.design = self.designLeft.selected;

        /*params*/
        _.each(product.parametersLeft, function(parameter, index) {
          if (parameter.name === 'Addition') {
            if (parameter.selected === null || parameter.selected === undefined ) {
              parameter.selected = '';
            }
          }

          if (parameter.name === 'Notch (mm)') {
            if (!parameter.selectedNotchTime || (parameter.values[0].selected === 0 && parameter.values[1].selected === 0)) {
              product.parametersLeft[index].selected = '0x0'
            } else {
              product.parametersLeft[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected + ' (' + parameter.selectedNotchTime + ')';
            }
          }
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'placeholder', 'disabled']);
        });
        productSelected.parameters = product.parametersLeft;
      }

      productSelected.detail = { name: '', eye: productSelected.eye, typeLens: productSelected.typeLens, materials: productSelected.materials, hydrapeg: productSelected.hydrapeg, design: productSelected.design, parameters: productSelected.parameters };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye', 'set']);
    });

    return productsSelected;
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

  verifyOpenModal() {
    if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
        && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
      this.openModal(this.type);
    }
  }

  openModal(type): void {
    this.spinner.hide();
    const modalRef = this.modalService.open( ConfirmationSmartlensComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.componentInstance.typeOrder = this.typeOrder;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
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
}