import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { ProductRequested } from '../../shared/models/productrequested';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../shared/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationMoldedLensesComponent } from '../modals/confirmation-buy/confirmation-molded-lenses/confirmation-molded-lenses.component';

@Component({
  selector: 'app-product-view-molded-lenses',
  templateUrl: './product-view-molded-lenses.component.html',
  styleUrls: ['./product-view-molded-lenses.component.scss']
})
export class ProductViewMoldedLensesComponent implements OnInit {

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
  typeOrder = 'new';

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private userStorageService: UserStorageService,
    private shippingAddressService: ShippingAddressService,
    private userService: UserService,
    private modalService: NgbModal,
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
    this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
    this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
    this.product.properties = this.product.infoAditional ? JSON.parse(this.product.infoAditional)[0] : null;
    this.product.priceSale = '';
    this.setCodesXtensaPremiumToric();
    this.setClient();
    this.setPrice();
  }

  setCodesXtensaPremiumToric() {
    if (this.product.name === 'Xtensa Premium Toric 6pk') {
      this.product.codeRight = '214B';
      this.product.codeLeft = '214B';
    }
  }

  setCodeAndPrice(parameter, eye) {
    switch (this.product.name) {
      case 'Xtensa Premium Toric 6pk':
        if (parameter.name === 'Cylinder (D)') {
          if (parameter.selected === '-2.75') {
            if (eye === 'right') {
              this.product.codeRight = '214C';
              this.product.priceSaleRight = 15.0;
            } else {  
              this.product.codeLeft = '214C';
              this.product.priceSaleLeft = 15.0;
            }
          } else {
            if (eye === 'right') {
              this.product.codeRight = '214B';
              this.product.priceSaleRight = 14.5;
            } else {  
              this.product.codeLeft = '214B';
              this.product.priceSaleLeft = 14.5;
            }
          }
        }
        break;
    }
  }

  isProductClaria(product) {
    return product.name === 'Claria SiHy Aspheric 6pk' || product.name === 'Claria SiHy Toric 6pk';
  }

  isProductPersonalized(product) {
    return product.name === 'Xtensa Premium Toric 6pk' || this.isProductClaria(product);
  }

  minToBuy() {
    if (this.isProductClaria(this.product)) {
      return 50;
    } else {
      return 1;
    }
  }

  setCodeAndPriceByQuantity(eye) {
    if (this.product.name === 'Claria SiHy Aspheric 6pk') {
      if (eye === 'right') {
        if (this.product.quantityRight < 501) {
          this.product.codeRight = '216A';
          this.product.priceSaleRight = 14.0;
        } else if (this.product.quantityRight < 2001) {
          this.product.codeRight = '216B';
          this.product.priceSaleRight = 13.5;
        } else if (this.product.quantityRight < 3501) {
          this.product.codeRight = '216C';
          this.product.priceSaleRight = 13.2;
        } else if (this.product.quantityRight < 5001) {
          this.product.codeRight = '216D';
          this.product.priceSaleRight = 12.75;
        } else {
          this.product.codeRight = '216E';
          this.product.priceSaleRight = 12.5;
        }
      } else {
        if (this.product.quantityLeft < 501) {
          this.product.codeLeft = '216A';
          this.product.priceSaleLeft = 14.0;
        } else if (this.product.quantityLeft < 2001) {
          this.product.codeLeft = '216B';
          this.product.priceSaleLeft = 13.5;
        } else if (this.product.quantityLeft < 3501) {
          this.product.codeLeft = '216C';
          this.product.priceSaleLeft = 13.2;
        } else if (this.product.quantityLeft < 5001) {
          this.product.codeLeft = '216D';
          this.product.priceSaleLeft = 12.75;
        } else {
          this.product.codeLeft = '216E';
          this.product.priceSaleLeft = 12.5;
        }
      }
    } else if (this.product.name === 'Claria SiHy Toric 6pk') {
      if (eye === 'right') {
        if (this.product.quantityRight < 501) {
          this.product.codeRight = '217A';
          this.product.priceSaleRight = 18.25;
        } else if (this.product.quantityRight < 2001) {
          this.product.codeRight = '217B';
          this.product.priceSaleRight = 18.0;
        } else if (this.product.quantityRight < 3501) {
          this.product.codeRight = '217C';
          this.product.priceSaleRight = 17.75;
        } else if (this.product.quantityRight < 5001) {
          this.product.codeRight = '217D';
          this.product.priceSaleRight = 17.5;
        } else {
          this.product.codeRight = '217E';
          this.product.priceSaleRight = 17.25;
        }
      } else {
        if (this.product.quantityLeft < 501) {
          this.product.codeLeft = '217A';
          this.product.priceSaleLeft = 18.25;
        } else if (this.product.quantityLeft < 2001) {
          this.product.codeLeft = '217B';
          this.product.priceSaleLeft = 18.0;
        } else if (this.product.quantityLeft < 3501) {
          this.product.codeLeft = '217C';
          this.product.priceSaleLeft = 17.75;
        } else if (this.product.quantityLeft < 5001) {
          this.product.codeLeft = '217D';
          this.product.priceSaleLeft = 17.5;
        } else {
          this.product.codeLeft = '217E';
          this.product.priceSaleLeft = 17.25;
        }
      }
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
      let accSpct = !!this.currentUser.accSpct ? this.currentUser.accSpct + ' - ' : '';
      this.product.client = accSpct + this.currentUser.name + ' | ' + this.currentUser.country.name;
      this.findShippingAddress(this.client);
    } else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          this.listCustomers = this.listCustomersAux;
          this.listCustomers.map((i) => {
            let accSpct = !!i.accSpct ? i.accSpct + ' - ' : '';
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

  setPricesAndCodes(product, productSelected) {
    if (this.isProductPersonalized(product)) {
      if (productSelected.eye === 'Right') {
        productSelected.price = product.priceSaleRight;
        productSelected.detail.codeSpectrum = product.codeRight;
      } else {
        productSelected.price = product.priceSaleLeft;
        productSelected.detail.codeSpectrum = product.codeLeft;
      }
    }
  }

  buildProductsSelected() {
    this.setEyeSelected();
    let self = this;
    let product = this.productCopy;
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

      productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters};
      self.setPricesAndCodes(product, productSelected);
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
    const modalRef = this.modalService.open(ConfirmationMoldedLensesComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.typeOrder = this.typeOrder;
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

      if (this.isProductClaria(this.product)) {
        return this.product.quantityRight > 49;
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
      if (this.isProductClaria(this.product)) {
        return this.product.quantityLeft > 49;
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
      if (param.values.length > 1) {
        param.selected = null;
      }
    });
    if (eye === 'right') {
      this.product.parametersRight = parameters;
    } else {
      this.product.parametersLeft = parameters;
    }
  }
}
