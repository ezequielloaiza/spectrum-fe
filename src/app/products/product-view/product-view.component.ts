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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationBuyComponent } from '../modals/confirmation-buy/confirmation-buy.component';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
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
  axesXtensa: Array<any> = new Array;
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
    /* var product xtensa */
    this.setAxesXtensa();
  }

  setAxesXtensa() {
    this.axesXtensa = [{ "values": ["5º", "10º", "15º", "20º", "25º", "30º", "35º", "40º", "45º", "50º", "55º", "60º", "65º", "70º", "75º", "80º", "85º", "90º", "95º", "100º", "105º", "110º", "115º", "120º", "125º", "130º", "135º", "140º", "145º", "150º", "155º", "160º", "165º", "170º", "175º", "180º"] },
    { "values": ["10º", "20º", "30º", "40º", "50º", "60º", "70º", "80º", "90º", "100º", "110º", "120º", "130º", "140º", "150º", "160º", "170º", "180º"] }];
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

  changeSelect(eye, parameter, value) {
    parameter.selected = value;
    /*if (this.product.father === "Xtensa" && parameter.name === 'Cylinder (D)'){
      this.setValuesAxesXtensa(eye, value);
    }*/
  }

  /*setValuesAxesXtensa(eye, value) {
    if (eye === 'right') {
      this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
      if (parseFloat(value) <= -3.25) {
        this.paramAxesRight.values = this.axesXtensa[0].values;
      } else {
        this.paramAxesRight.values = this.axesXtensa[1].values;
      }
    } else {
      this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
      if (parseFloat(value) <= -3.25) {
        this.paramAxesLeft.values = this.axesXtensa[0].values;
      } else {
        this.paramAxesLeft.values = this.axesXtensa[1].values;
      }
    }
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
      this.product.client = this.currentUser.name;
      this.findShippingAddress(this.client);

    } else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
          this.listCustomers = _.filter(this.listCustomersAux, function (u) {
            return !(u.cardCode === null || u.cardCode === '');
          });
          //this.listCustomers.map((i) => { i.fullName = i.accSpct + ' ' + i.cardCode + ' ' + i.country.name + ' ' + i.name; return i; });
          this.listCustomers.map((i) => {
            let accSpct = !!i.accSpct ?  i.accSpct + ' ' : '';
            i.fullName = accSpct + i.name + ', '  +  i.cardCode + ', ' + i.country.name;
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
