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
  paramAxesRight: any;
  paramAxesLeft: any;
  basketRequestModal: BasketRequest = new BasketRequest();
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;
  codeMarkennovyL: any;
  codeMarkennovyR: any;

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
    this.codeMarkennovyL = this.product.code;
    this.codeMarkennovyR = this.product.code;
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
    this.product.properties = this.product.infoAditional ? JSON.parse(this.product.infoAditional)[0] : null;
    this.product.priceSale = '';
    this.setClient();
    this.setPrice();
    this.addSign();
  }

  resetParams(eye, parameter) {

    if (parameter.name === "Diameter (mm)") {
      let baseCurve = null;
      if (eye === "right") {
        baseCurve = _.find(this.product.parametersRight, { name: 'Base Curve (mm)' });
      } else {
        baseCurve = _.find(this.product.parametersLeft, { name: 'Base Curve (mm)' });
      }

      if (!baseCurve) {
        return;
      }

      // Reset selection base curve
      baseCurve.selected = null;
      baseCurve.sel = null;
    }

    if (parameter.name === "Dominance") {
      // ADDITION
      let addition = null;
      if (eye === "right") {
        addition = _.find(this.product.parametersRight, { name: 'Addition' });
      } else {
        addition = _.find(this.product.parametersLeft, { name: 'Addition' });
      }

      if (addition) {
        // Reset selection addition
        addition.selected = null;
        addition.sel = null;
      }

      //SPHERE
      let sphere = null;
      if (eye === "right") {
        sphere = _.find(this.product.parametersRight, { name: 'Sphere (D)' });
      } else {
        sphere = _.find(this.product.parametersLeft, { name: 'Sphere (D)' });
      }

      if (sphere) {
        // Reset selection sphere
        sphere.selected = null;
        sphere.sel = null;
      }

      if (eye === 'right') {
        this.codeMarkennovyR = this.product.code;
      } else {
        this.codeMarkennovyL = this.product.code;
      }
    }

    if (parameter.name === "Cylinder (D)") {
      let axes = null;
      if (eye === "right") {
        axes = _.find(this.product.parametersRight, { name: 'Axes (º)' });
      } else {
        axes = _.find(this.product.parametersLeft, { name: 'Axes (º)' });
      }

      if (axes) {
        // Reset selection base curve
        axes.selected = null;
        axes.sel = null;
      }
    }
  }

  changeSelect(eye, parameter, value) {
    if (parameter.selected === value) {
      return;
    }

    parameter.selected = value;
    parameter.sel = value;

    if (parameter.name === "Diameter (mm)") {
      let baseCurve = null;
      if (eye === "right") {
        baseCurve = _.find(this.product.parametersRight, { name: 'Base Curve (mm)' });
      } else {
        baseCurve = _.find(this.product.parametersLeft, { name: 'Base Curve (mm)' });
      }

      if (!baseCurve) {
        return;
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

        case "Quattro 3-Monthly":
        case "Quattro Conventional":
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

    if (parameter.name === "Dominance") {
      // ADDITION
      let addition = null;
      if (eye === "right") {
        addition = _.find(this.product.parametersRight, { name: 'Addition' });
      } else {
        addition = _.find(this.product.parametersLeft, { name: 'Addition' });
      }

      if (addition) {
        // Reset selection addition
        addition.selected = null;
        addition.sel = null;

        switch (this.product.father) {
          case "Quattro 3-Monthly":
          case "Quattro Conventional":
            switch (value) {
              case "CN":
                addition.values = ["1.0", "1.75", "2.50"];
                break;
              case "CD":
                addition.values = ["1.0", "2.0", "3.0"];
                break;
            }
          default:
            break;
        }
      }

      //SPHERE
      let sphere = null;
      if (eye === "right") {
        sphere = _.find(this.product.parametersRight, { name: 'Sphere (D)' });
      } else {
        sphere = _.find(this.product.parametersLeft, { name: 'Sphere (D)' });
      }

      if (sphere) {
        // Reset selection sphere
        sphere.selected = null;
        sphere.sel = null;

        switch (this.product.father) {
          case "Quattro 3-Monthly":
          case "Quattro Conventional":
            switch (value) {
              case "CN":
                sphere.values = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "3.25", "3.50", "3.75", "4.00", "4.25", "4.50", "4.75", "5.00", "5.25", "5.50", "5.75", "6.00", "6.25", "6.50", "6.75", "7.00", "7.25", "7.50", "7.75", "8.00"];
                break;
              case "CD":
                sphere.values = ["-12.00", "-11.75", "-11.50", "-11.25", "-11.00", "-10.75", "-10.50", "-10.25", "-10.00", "-9.75", "-9.50", "-9.25", "-9.00", "-8.75", "-8.50", "-8.25", "-8.00", "-7.75", "-7.50", "-7.25", "-7.00", "-6.75", "-6.50", "-6.25", "-6.00", "-5.75", "-5.50", "-5.25", "-5.00", "-4.75", "-4.50", "-4.25", "-4.00", "-3.75", "-3.50", "-3.25", "-3.00", "-2.75", "-2.50", "-2.25", "-2.00", "-1.75", "-1.50", "-1.25", "-1.00"];
                break;
            }
          default:
            break;
        }
      }
    }

    if (parameter.name === "Cylinder (D)") {
      let axes = null;
      if (eye === "right") {
        axes = _.find(this.product.parametersRight, { name: 'Axes (º)' });
      } else {
        axes = _.find(this.product.parametersLeft, { name: 'Axes (º)' });
      }

      if (!axes) {
        return;
      }

      // Reset selection base curve
      axes.selected = null;
      axes.sel = null;
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
    let codeL = this.codeMarkennovyL;
    let codeR = this.codeMarkennovyR;

    _.each(productsSelected, function (productSelected, index) {

      productSelected.id = product.idProduct;
      productSelected.patient = product.patient;
      productSelected.price = product.priceSale;
      let code: any;

      if (productSelected.eye === "Right") {
        productSelected.quantity = product.quantityRight;
        productSelected.observations = product.observationsRight;
        _.each(product.parametersRight, function (parameter, index) {
          product.parametersRight[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.parameters = product.parametersRight;
        code = codeR;
      }

      if (productSelected.eye === "Left") {
        productSelected.quantity = product.quantityLeft;
        productSelected.observations = product.observationsLeft;
        _.each(product.parametersLeft, function (parameter, index) {
          product.parametersLeft[index] = _.omit(parameter, ['type', 'values', 'sel']);
        });
        productSelected.parameters = product.parametersLeft;
        code = codeL;
      }

      productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters, code:  code};
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
