import { Component, OnInit, ViewChild } from '@angular/core';
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
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { FileUploader } from 'ng2-file-upload';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../shared/services/fileproductrequested/fileproductrequested.service';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationSpectrumSalineComponent } from '../modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component';

const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-spectrum-saline',
  templateUrl: './product-view-spectrum-saline.component.html',
  styleUrls: ['./product-view-spectrum-saline.component.scss']
})
export class ProductViewSpectrumSalineComponent implements OnInit {

  codeSpectrum: any;
  membership: any;
  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  product: any;
  productCode: any;
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
  priceFrom: any;
  priceUp: any;
  clientSelected: any;
  quantityValues: any;
  // Upload files
  @ViewChild('selectedFiles') selectedFiles: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFileBasket: Array<FileProductRequested> = new Array;
  typeOrder = 'new';
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
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
              private fileProductRequestedService: FileProductRequestedService,
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
    this.productService.findBySupplierInView$(7 , true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.productService.findBySupplierAndInViewAndCategory$(7, false, 10).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.productsCode = res1.data;
            this.setCodeProduct();
          } else {
            console.log(res1.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
          this.spinner.hide();
        });
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
    this.product.properties = JSON.parse(this.product.infoAditional)[1];
    this.quantityValues = (JSON.parse(this.product.infoAditional).find(n => n.name === 'Quantity'));
    this.product.priceSale = '';
    this.setClient();
    this.setPrice();
  }

  setCodeProduct() {
    let self = this;
    let flag = '';
    let productCode = null;
    if (this.product.quantity >= 250 && this.product.quantity < 500) {
      flag = '250';
    } else if (this.product.quantity >= 500 && this.product.quantity < 1000) {
      flag = '500';
    } else if (this.product.quantity >= 1000) {
      flag = '1000';
    }
    _.each(this.productsCode, function (pr) {
      var productName = (JSON.parse(pr.infoAditional).find(n => n.name === 'ProductName'));
      if (productName && _.includes(productName.value, flag)) {
        productCode = pr;
      }
    });

    this.productCode = productCode || this.product;
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
          this.excludeClients(this.listCustomers, this.product.supplier.idSupplier, this.product);
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
      this.clientSelected = clienteSelect;
      this.findShippingAddress(this.client);
      this.membership = clienteSelect.membership.idMembership;
      this.definePrice();
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSale = '';
      this.priceFrom = '';
      this.priceUp = '';
      this.clientSelected = '';
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
      this.definePrice();
    }
  }

  definePrice() {
    this.setCodeProduct();

    switch (this.membership) {
      case 1: // Gold
        this.productCode.priceSale = this.productCode.price1;
        break;
      case 2: // Diamond
        this.productCode.priceSale = this.productCode.price2;
        break;
      case 3: // Preferred
        this.productCode.priceSale = this.productCode.price3;
        break;
      case 4:
        this.productCode.priceSale = this.productCode.price4;
        break;
      case 5:
        this.productCode.priceSale = this.productCode.price5;
        break;
      case 6:
        this.productCode.priceSale = this.productCode.price6;
        break;
      case 7:
        this.productCode.priceSale = this.productCode.price7;
        break;
    }
  }

  buildProductSelected() {
    let product = this.productCopy;
    let productSelected = product;
    productSelected.idProduct = this.productCode.idProduct;
    productSelected.price = this.productCode.priceSale;
    productSelected.quantity = product.quantity;
    productSelected.detail = '';
    productSelected.observations = product.observations;
    return productSelected;
  }

  addToCart(type) {
    this.productCopy = JSON.parse(JSON.stringify(this.product));
    const productsRequested = [];
    const product = this.buildProductSelected();

    const productRequest: ProductRequested = new ProductRequested();
    const productoSelect: Product = new Product();
    productoSelect.idProduct = product.idProduct;
    productRequest.product = productoSelect;
    productRequest.quantity = product.quantity;
    productRequest.price = product.price;
    productRequest.detail = '';
    productRequest.patient = '';
    productRequest.observations = product.observations;
    productsRequested.push(productRequest);

    this.basketRequestModal.idUser = this.client;
    this.basketRequestModal.productRequestedList = productsRequested;
    this.openModal(type);
  }

  openModal(type): void {
    const modalRef = this.modalService.open( ConfirmationSpectrumSalineComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.productCode;
    modalRef.componentInstance.listFileBasket = this.listFileBasket;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.view = 1; // spectrum saline
    modalRef.componentInstance.typeOrder = this.typeOrder;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  formIsValid() {
    var isValid = true;
    if (!this.product.quantity || this.product.quantity < 250 || (!this.CustomersSelected && !this.product.client)) {
      isValid = false;
    }
    return isValid;
  }

  excludeClients(listCustomers, idSupplier, product) {
    let listClients = [];
    if (idSupplier === 7 && product.father === 'Spectrum Saline') { // Exclusion de los clientes con membresia Oro para Spectrum Saline
      listClients = _.filter(listCustomers, function(c) {
        return c.membership.idMembership !== 1;
      });
      this.listCustomers = listClients;
      this.listCustomersAux = this.listCustomers;
    }
  }
}
