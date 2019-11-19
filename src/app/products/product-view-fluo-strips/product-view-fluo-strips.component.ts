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
import { ConfirmationBlueLightComponent } from '../modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationSpectrumSalineComponent } from '../modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component';
import { saveAs } from 'file-saver';
const URL = environment.apiUrl + 'fileProductRequested/uploader';

@Component({
  selector: 'app-product-view-fluo-strips',
  templateUrl: './product-view-fluo-strips.component.html',
  styleUrls: ['./product-view-fluo-strips.component.scss']
})
export class ProductViewFluoStripsComponent implements OnInit {

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
  strips: any;
  // Upload files
  @ViewChild('selectedFiles') selectedFiles: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFileBasket: Array<FileProductRequested> = new Array;
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
        this.getProductView();
        this.productService.findBySupplierAndInViewAndCategory$(7, false, 10).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.productsCode = res1.data;
            if (this.user.role.idRole === 3) {
              this.setCodeProduct(this.currentUser.name);
            }
          } else {
            console.log(res1.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
          this.spinner.hide();
        });
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
    this.product.properties = JSON.parse(this.product.infoAditional)[0];
    this.product.priceSale = '';
    this.setClient();
    this.setPrice();
  }

  setCodeProduct(clienteSelect) {
    const productName = this.product.codeSpectrum;
    let prCode;
    let condition;
    if (clienteSelect.name === 'MEDICAL CHOICE' && this.product.codeSpectrum === '40') {
      condition = '40A (M.C.)';
    } else {
      condition = productName;
    }
    _.each(this.productsCode, function (pr) {
      if (pr.codeSpectrum == condition) {
        prCode = pr;
      }
    });
    this.productCode = prCode;
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
            i.fullName = accSpct + i.name + ', ' + i.country.name;
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
      this.setCodeProduct(clienteSelect);
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

  buildProductSelected() {
    let product = this.productCopy;
    let productCode = this.productCode;
    let productSelected = product;

    productSelected.id = productCode.idProduct;
    productSelected.price = product.priceSale;
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
    productoSelect.idProduct = product.id;
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
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.productCode;
    modalRef.componentInstance.listFileBasket = this.listFileBasket;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.view = 2; // fluo strips
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  formIsValid() {
    var isValid = true;
    if (!this.product.quantity) {
      isValid = false;
    }
    return isValid;
  }

  change(quantity) {
    if (quantity % 25 === 0) {
      this.strips = quantity * 100;
    }
  }

  download() {
    const language = this.userStorageService.getLanguage();
    let name;
    language === 'en' ? name = 'Fluo-en' : name = 'Fluo-es';
    this.productService.download$(name).subscribe(res => {
      const filename = name + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
  }
}
