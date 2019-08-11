import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/services';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserStorageService } from '../../http/user-storage.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-view-medmont',
  templateUrl: './product-view-medmont.component.html',
  styleUrls: ['./product-view-medmont.component.scss']
})
export class ProductViewMedmontComponent implements OnInit {

  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  product: any;
  productCode: any;
  productCopy: any;
  id: any;
  currentUser: any;
  user: any;
  ngSelect: any;
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  CustomersSelected: any;

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
    this.setClient();
    this.setCodeProduct();
  }

  setCodeProduct() {
    const productCode = this.product.codeSpectrum;
    const productCategory = this.product.category;
    let prCode;
    this.productService.findBySupplierAndInViewAndCategory$(8, false, productCategory.idCategory).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.productsCode = res.data;
        _.each(this.productsCode, function (pr) {
          console.log(_.includes(pr.codeSpectrum, productCode));
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
        }
      });
    }
  }

  onSelectedClient(clienteSelect) {
    if (clienteSelect !== undefined) {
      this.client = clienteSelect.idUser;
      this.findShippingAddress(this.client);
    } else {
      this.client = '';
      this.product.shippingAddress = '';
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


  openModal(type): void {
    /*const modalRef = this.modalService.open( ConfirmationSpectrumSalineComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.listFileBasket = this.listFileBasket;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.view = 2; // fluo strips
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });*/
  }

  formIsValid() {
    let isValid = true;
    if (this.client === '' || this.client === undefined) {
      isValid = false;
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
}
