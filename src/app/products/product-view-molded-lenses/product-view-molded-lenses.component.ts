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

  membership:any;
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
  membershipAllowed: any;
  boxes: any;

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

    // General parameters
    this.product.parameters = _.filter(JSON.parse(this.product.types)[0].parameters, function (param: any) {
      return param.values.length === 1;
    });

    // Parameters
    this.product.parametersBox = _.filter(JSON.parse(this.product.types)[0].parameters, function (param: any) {
      return param.values.length > 1;
    });

    this.boxes = [{quantity: null, parameters: JSON.parse(JSON.stringify(this.product.parametersBox))}];

    this.product.properties = this.product.infoAditional ? JSON.parse(this.product.infoAditional)[0] : null;
    this.product.priceSale = '';
    //this.setCodesXtensaPremiumToric();
    this.setClient();
    this.setPrice();
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

  setPrice() {
    if (this.user.role.idRole === 3) {
      this.membership = this.currentUser.membership.idMembership;
      this.definePrice();
    }
  }

  //////////////////////// BY BOXES///////////////////////////

  setCodeAndPriceByQuantity() {
    var totalQuantity = _.sumBy(this.boxes, 'quantity');

    if (this.product.name === 'Claria SiHy Aspheric 6pk') {
      if (totalQuantity < 501) {
        this.product.codeSpectrum = '216A';
        this.product.priceSale = 14.0;
        if (this.membership === 6) {
          this.product.priceSale = 29.0;
        }
      } else if (totalQuantity < 2001) {
        this.product.codeSpectrum = '216B';
        this.product.priceSale = 13.5;
        if (this.membership === 6) {
          this.product.priceSale = 28.5;
        }
      } else if (totalQuantity < 3501) {
        this.product.codeSpectrum = '216C';
        this.product.priceSale = 13.2;
        if (this.membership === 6) {
          this.product.priceSale = 28.0;
        }
      } else if (totalQuantity < 5001) {
        this.product.codeSpectrum = '216D';
        this.product.priceSale = 12.75;
        if (this.membership === 6) {
          this.product.priceSale = 27.5;
        }
      } else {
        this.product.codeSpectrum = '216E';
        this.product.priceSale = 12.5;
        if (this.membership === 6) {
          this.product.priceSale = 27.0;
        }
      }
    } else if (this.product.name === 'Claria SiHy Toric 6pk') {
      if (totalQuantity < 501) {
        this.product.codeSpectrum = '217A';
        this.product.priceSale = 18.25;
        if (this.membership === 6) {
          this.product.priceSale = 35.0;
        }
      } else if (totalQuantity < 2001) {
        this.product.codeSpectrum = '217B';
        this.product.priceSale = 18.0;
        if (this.membership === 6) {
          this.product.priceSale = 34.5;
        }
      } else if (totalQuantity < 3501) {
        this.product.codeSpectrum = '217C';
        this.product.priceSale = 17.75;
        if (this.membership === 6) {
          this.product.priceSale = 34.0;
        }
      } else if (totalQuantity < 5001) {
        this.product.codeSpectrum = '217D';
        this.product.priceSale = 17.5;
        if (this.membership === 6) {
          this.product.priceSale = 33.5;
        }
      } else {
        this.product.codeSpectrum = '217E';
        this.product.priceSale = 17.25;
        if (this.membership === 6) {
          this.product.priceSale = 33.0;
        }
      }
    }
  }

  addBox() {
    this.boxes.push({ quantity: 1, parameters: JSON.parse(JSON.stringify(this.product.parametersBox)) });
  }

  removeBox(index) {
    if (this.boxes.length > 1) {
      this.boxes.splice(index, 1);
    }
  }

  onSelectedClient(clienteSelect) {
    if (clienteSelect !== undefined) {
      this.client = clienteSelect.idUser;
      this.findShippingAddress(this.client);
      this.membership = clienteSelect.membership.idMembership;
      this.definePrice();
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

  definePrice() {
    switch (this.membership) {
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
    }

    this.membershipAllowed = this.product.priceSale > 0;
  }

  buildProductsSelected() {
    let self = this;
    let productToSave = {
      id      : this.product.idProduct,
      quantity: _.sumBy(self.boxes, 'quantity'),
      price   : this.product.priceSale,
      detail  : { name: this.product.name, eye: '', parameters: this.product.parameters, boxes: this.boxes, codeSpectrum: this.product.codeSpectrum },
      patient : this.product.patient,
      observations: this.product.observations
    };
    return [productToSave];
  }

  addToCart(type) {
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

  membershipNotAllowed() {
    this.translate.get('The current membership does not have prices for this product.', {value: 'The current membership does not have prices for this product.'}).subscribe(( res: string) => {
      this.notification.error('', res);
    });
  }

  openModal(type): void {
    if (!this.membershipAllowed) {
      this.membershipNotAllowed();
      return;
    }
    const modalRef = this.modalService.open(ConfirmationMoldedLensesComponent,
      { size: 'lg', windowClass: 'modal-content-border modal-custom', backdrop: 'static', keyboard: false });
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

    var totalQuantity = _.sumBy(this.boxes, 'quantity');
    if ( totalQuantity < 50 ) {
      return false;
    }

    if (!this.product.patient || !this.client) {
      return false;
    }

    _.each(this.boxes, function(product) {
      _.each(product.parameters, function(param){
        if (param.selected === null || param.selected === undefined) {
          isValid = false;
        }
        if (!product.quantity) {
          isValid = false;
        }
      });
    });
    return isValid;
  }
}
