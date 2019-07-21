import { Component, OnInit} from '@angular/core';
import { Order } from '../../../shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { ProductoimageService } from '../../../shared/services/productoimage/productoimage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsConfirmationComponent } from '../modals-confirmation/modals-confirmation.component';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Product } from '../../../shared/models/product';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';
import { CompanyService } from '../../../shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewChild } from '@angular/core';
import { SupplierEuclidComponent } from '../../details-order-supplier/supplier-euclid/supplier-euclid.component';
import { SalineFluoComponent } from '../../edit-order/saline-fluo/saline-fluo.component';
import { ProductService } from '../../../shared/services/products/product.service';

@Component({
  selector: 'app-details-order-client',
  templateUrl: './details-order-client.component.html',
  styleUrls: ['./details-order-client.component.scss']
})
export class DetailsOrderClientComponent implements OnInit {

  id: any;
  order: Order = new Order();
  listDetails: Array<any> = new Array;
  listDetailsAll: Array<any> = new Array;
  listDetailsAux: Array<any> = new Array;
  listAux: Array<ProductRequested> = new Array<ProductRequested>();
  advancedPagination: number;
  itemPerPage = 2;
  generar = false;
  download = false;
  user: any;
  company: any;
  prueba: any;
  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    public productImageService: ProductoimageService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private productService: ProductService,
    private companyService: CompanyService,
    private userStorageService: UserStorageService,
    private spinner: NgxSpinnerService) {
        this.user = JSON.parse(userStorageService.getCurrentUser());
     }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.advancedPagination = 1;
    this.getOrder(this.id);
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listDetails = this.listDetailsAux.slice(startItem, endItem);
  }

  getOrder(idOrder): void {
    this.spinner.show();
    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.order = res.data;
        if (this.order.status !== 1 && this.order.dateSend === null && this.user.role.idRole === 1) {
           this.generar = true;
        }

        if (res.data.dateSend !== null && res.data.supplier.idSupplier !== 1) {
          this.download = true;
        }
        const auxList = [];
        _.each(this.order.listProductRequested, function (detailsOrder) {
          detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
          detailsOrder.productRequested.priceBase = detailsOrder.productRequested.price;
          if (detailsOrder.productRequested.detail.length > 0) {
            detailsOrder.productRequested.detail = JSON.parse(detailsOrder.productRequested.detail);
          }

          const productId = detailsOrder.productRequested.product.idProduct;
            if (productId !== 145
                && productId !== 146
                && productId !== 147) {
            auxList.push(detailsOrder);
          }
        });

        this.listDetailsAll = this.order.listProductRequested;
        this.order.listProductRequested = auxList;
        this.listDetails = this.order.listProductRequested;
        this.listDetailsAux = this.order.listProductRequested;
        this.listDetails = this.listDetailsAux.slice(0, this.itemPerPage);

        // search product insertor
        if (res.data.supplier.idSupplier === 2) {
          this.productService.findById$(146).subscribe(res1 => {
            if (res1.code === CodeHttp.ok) {
              this.assignPriceAllEuropa(auxList, res1.data[0]);
            } else {
              console.log(res1.errors[0].detail);
              this.spinner.hide();
            }
          }, error => {
            console.log('error', error);
            this.spinner.hide();
          });
        }

        this.spinner.hide();
      }
    });
  }

  assignPriceAllEuropa(auxList, productDMV): void {
    let arrayProductAditionals = [];
    const self = this;
    let priceAll = 0;
    let priceInsertor = 0;

    let existContraryEye = false;

    _.each(auxList, function(detailsOrder) {
      arrayProductAditionals = self.getProductsAditionalEuropa(detailsOrder.productRequested.detail[0].eye);
      priceAll = 0;
      existContraryEye = self.contraryEye(detailsOrder.productRequested.detail[0].eye);
      _.each(arrayProductAditionals, function(item) {
        const productId = item.productRequested.product.idProduct;
        if (productId !== 146) {
          priceAll = priceAll + item.productRequested.price;
        }
      });
      // price insertors
      const insertor = detailsOrder.productRequested.detail[0].header[2].selected === true;

      priceInsertor = self.getPriceInsertor(detailsOrder.order.user.membership.idMembership, productDMV);

      if (insertor && existContraryEye) {
        priceAll = priceAll + (priceInsertor / 2);
      } else if (insertor) {
        priceAll = priceAll + priceInsertor;
      }

      detailsOrder.productRequested.price = priceAll;
      detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
    });
  }

  getProductsAditionalEuropa(eye) {
    const auxList = [];

    _.each(this.listDetailsAll, function(item) {
      if (item.productRequested.detail[0].eye === eye) {
        auxList.push(item);
      }
    });

    return auxList;
  }

  getPriceInsertor(membership, productDMV) {
    let price = 0;

    switch (membership) {
      case 1:
        price = productDMV.price1;
        break;
      case 2:
        price = productDMV.price2;
        break;
      case 3:
        price = productDMV.price3;
        break;
    }

    return price;
  }

  contraryEye(eye) {
    let exist = false;
    let contraryEye = '';

    if (eye === 'Left') {
      contraryEye = 'Right';
    } else {
      contraryEye = 'Left';
    }

    _.each(this.listDetailsAll, function(item) {
      if (item.productRequested.detail[0].eye === contraryEye) {
        exist = true;
      }
    });
    return exist;
  }

  generateOrder(order): void {
  const modalRef = this.modalService.open(ModalsConfirmationComponent ,
  {backdrop  : 'static', keyboard  : false});
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
      } , (reason) => {
        this.ngOnInit();
    });
  }

  downloadOrder(order) {
    this.spinner.show();
    this.orderService.downloadOrder$(order.idOrder).subscribe(res => {
      const filename = order.number + '.pdf';
      if (res.size > 0) {
        this.spinner.hide();
        saveAs(res, filename);
      } else {
        this.spinner.hide();
        this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res1: string) => {
          this.notification.error('', res1);
        });
      }
    }, error => {
      this.spinner.hide();
      this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
      console.log('error', error);
    });
  }

  refresh(productRequested: any): void {
   const list: Array<ProductRequested> = productRequested;
    _.each(this.order.listProductRequested, function (detailsOrder) {
      _.each(list, function (item) {
        if (detailsOrder.productRequested.idProductRequested === item.idProductRequested) {
          detailsOrder.productRequested.patient = item.patient;
          detailsOrder.productRequested.product = item.product;
          detailsOrder.productRequested.price = item.price;
          detailsOrder.productRequested.quantity = item.quantity;
          detailsOrder.productRequested.observations = item.observations;
          detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
          detailsOrder.productRequested.detail = item.detail;
        }
      });
    });
   // this.listDetails = this.order.listProductRequested;
    this.listDetailsAux = this.order.listProductRequested;
    // this.updateTotal();
  }

  openEdit(lista, image) {
    const modalRefSalineFluo = this.modalService.open( SalineFluoComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRefSalineFluo.componentInstance.detailEdit = lista;
    modalRefSalineFluo.componentInstance.typeEdit = 2;
    modalRefSalineFluo.componentInstance.userOrder = this.order.user;
    modalRefSalineFluo.componentInstance.image = image;
    modalRefSalineFluo.result.then((result) => {
      this.listAux.push(result);
      this.refresh(this.listAux);
    } , (reason) => {

    });
  }

  updateTotal() {
     let total = 0.0;
    _.each(this.listDetails, function (item) {
       total = total + item.productRequested.subtotal;
    });
    this.order.total = total;
    this.order.subtotal = total;
  }
}

