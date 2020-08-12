import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { ProductRequested } from '../../shared/models/productrequested';
import { BasketService } from '../../shared/services/basket/basket.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../shared/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { ConfirmationMarkennovyComponent } from '../modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products: Array<any> = new Array;
  // productsCode: Array<any> = new Array;
  product: any;
  // productCode: any;
  productCopy: any;
  id: any;
  parameters: any;
  quantity = 1;
  order: any;
  productsSelected: Array<any> = new Array;
  currentUser: any;
  user: any;
  ngSelect: any;
  // configuration XTENSA product
  paramAxesRight: any;
  paramAxesLeft: any;
  // axesXtensa: Array<any> = new Array;
  basketRequestModal: BasketRequest = new BasketRequest();
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private userStorageService: UserStorageService,
    private basketService: BasketService,
    private shippingAddressService: ShippingAddressService,
    private userService: UserService,
    private modalService: NgbModal,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.spinner.show();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.findById$(this.id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.getProductView();
        //this.setCodeProduct();
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
    this.product = _.find(this.products, { idProduct: this.id });
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.type = JSON.parse(this.product.types)[0].name;
    let orderCylinder;
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    orderCylinder = _.find(this.product.parametersRight, { name: 'Cylinder (D)' });
    if (orderCylinder != null) {
      orderCylinder.values.reverse();
    }
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    orderCylinder = _.find(this.product.parametersLeft, { name: 'Cylinder (D)' });
    if (orderCylinder != null) {
      orderCylinder.values.reverse();
    }
    this.product.properties = JSON.parse(this.product.infoAditional)[0];
    this.product.priceSale = '';
    this.setClient();
    this.setPrice();
    this.addSign();
  }

  changeSelect(eye, parameter, value) {
    if (parameter.selected === value) {
      return;
    }

    parameter.selected = value;

    if (parameter.name === "Diameter (mm)") {
      let baseCurve = null;
      if (eye === "right") {
        baseCurve = _.find(this.product.parametersRight, { name: 'Base Curve (mm)' });
      } else {
        baseCurve = _.find(this.product.parametersLeft, { name: 'Base Curve (mm)' });
      }

      // Reset selection base curve
      baseCurve.selected = null;
      baseCurve.sel = null;

      switch (this.product.father) {
        case "Gentle 80":
        case "Gentle 59":
          switch (value) {
            case "13.0":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "13.5":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2"];
              break;
            case "14.0":
              baseCurve.values = ["7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5"];
              break;
            case "14.5":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.0":
              baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.5":
              baseCurve.values = ["8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.0":
              baseCurve.values = ["8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        case "Blu:gen":
          switch (value) {
            case "11.5":
            case "12.0":
              baseCurve.values = ["6.5", "6.8","7.1", "7.4", "7.7", "8.0", "8.3"];
              break;
            case "12.5":
            case "13.0":
              baseCurve.values = ["6.5", "6.8","7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "13.5":
              baseCurve.values = ["6.8","7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2"];
              break;
            case "14.0":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5"];
              break;
            case "14.5":
              baseCurve.values = ["7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.0":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.5":
              baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.0":
              baseCurve.values = ["8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.5":
              baseCurve.values = ["8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        case "Saphir Rx":
        case "Saphir":
          switch (value) {
            case "13.0":
              baseCurve.values = ["6.8","7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "13.5":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2"];
              break;
            case "14.0":
              baseCurve.values = ["7.4", "7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5"];
              break;
            case "14.5":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.0":
              baseCurve.values = ["8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "15.5":
              baseCurve.values = ["8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
            case "16.0":
              baseCurve.values = ["8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        //TODO: Add in BD
        case "Quattro S 3 UV":
        case "Quattro T 3 UV":
        case "Quattro S UV":
        case "Quattro T UV":
          switch (value) {
            case "13.0":
              baseCurve.values = ["7.1", "7.4", "7.7", "8.0", "8.3", "8.6", "8.9"];
              break;
            case "14.5":
              baseCurve.values = ["7.7", "8.0", "8.3", "8.6", "8.9", "9.2", "9.5", "9.8"];
              break;
          }
          break;

        default:
          break;
      }
    }
  }

  /*setCodeProduct() {
    const productCode = this.product.codeSpectrum;
    const productCategory = this.product.category;
    let prCode;
    this.productService.findBySupplierAndInViewAndCategory$(1, false, productCategory.idCategory).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.productsCode = res.data;
        _.each(this.productsCode, function (pr) {
          if (_.includes(pr.codeSpectrum, productCode)) {
            prCode = pr;
          }
        });
        this.productCode = prCode;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }*/

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
      this.productsSelected.push({ eye: 'Right' });
    }
    if (this.product.eyeLeft) {
      this.productsSelected.push({ eye: 'Left' });
    }
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser.idUser;
      let accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
      let cardCode = !!this.currentUser.cardCode ? ' | ' + this.currentUser.cardCode : '';
      this.product.client = accSpct + this.currentUser.name + cardCode + ' | ' + this.currentUser.country.name;
      this.findShippingAddress(this.client);
    } else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
          this.listCustomers = _.filter(this.listCustomersAux, function (u) {
            return !(u.cardCode === null || u.cardCode === '');
          });
          this.listCustomers.map((i) => {
            let accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' + i.cardCode + ' | ' + i.country.name;
            return i;
          });
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
          { value: 'You must enter a main address in the shipping address module' }).subscribe((res: string) => {
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
    //let productCode = this.productCode;
    let productsSelected = this.productsSelected;

    _.each(productsSelected, function (productSelected, index) {

      productSelected.id = product.idProduct;
      productSelected.patient = product.patient;
      productSelected.price = product.priceSale;

      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;
        _.each(product.parametersRight, function (parameter, index) {
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.parameters = product.parametersRight;
      }

      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;
        _.each(product.parametersLeft, function (parameter, index) {
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.parameters = product.parametersLeft;
      }

      productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
      productsSelected[index] = _.omit(productSelected, ['parameters', 'eye']);
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
    const modalRef = this.modalService.open(ConfirmationMarkennovyComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.result.then((result) => {
      this.ngOnInit();
    }, (reason) => {
    });
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
      _.each(this.product.parametersLeft, function (param) {
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
      param.selected = null;
      param.sel = null;
    });
    if (eye === 'right') {
      this.product.parametersRight = parameters;
    } else {
      this.product.parametersLeft = parameters;
    }
  }

  addSign() {
    let parametersR = this.product.parametersRight;
    let auxNeg = [];
    let auxPos = [];
    _.each(parametersR, function (param, index) {
      if (param.name === 'Sphere (D)') {
        _.each(param.values, function (item) {
          if (_.includes(item, '-') || item === '0.00') {
            auxNeg.push(item);
          } else {
            item = '+' + item;
            auxPos.push(item);
          }
        });
        _.reverse(auxNeg);
        auxPos = _.concat(auxPos, auxNeg);
        parametersR[index].values = auxPos;
      }
    });
    this.product.parametersRight = parametersR;
    // Left
    let parametersL = this.product.parametersLeft;
    let auxNegL = [];
    let auxPosL = [];
    _.each(parametersL, function (param, index) {
      if (param.name === 'Sphere (D)') {
        _.each(param.values, function (item) {
          if (_.includes(item, '-') || item === '0.00') {
            auxNegL.push(item);
          } else {
            item = '+' + item;
            auxPosL.push(item);
          }
        });
        _.reverse(auxNegL);
        auxPosL = _.concat(auxPosL, auxNegL);
        parametersL[index].values = auxPosL;
      }
    });
    this.product.parametersLeft = parametersL;
  }



}
