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
import { ModifyGenerateOrderComponent } from '../modify-generate-order/modify-generate-order.component';

@Component({
  selector: 'app-details-order-client',
  templateUrl: './details-order-client.component.html',
  styleUrls: ['./details-order-client.component.scss']
})
export class DetailsOrderClientComponent implements OnInit {

  id: any;
  orders: Array<any> = new Array;
  listAux: Array<ProductRequested> = new Array<ProductRequested>();
  advancedPagination: number;
  itemPerPage = 2;
  generar: any;
  download: any;
  user: any;
  company: any;
  prueba: any;
  status: any;
  productModel: Product = new Product();

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
    this.route.queryParams.subscribe(params => {
      this.status = params.status;
    });
    this.advancedPagination = 1;
    this.generar = false;
    this.download = false;
    this.getOrder(this.id);
  }

  pageChange(event, order) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    order.listDetails = order.listDetailsAux.slice(startItem, endItem);
  }

  getOrder(idOrder): void {
    const self = this;
    this.spinner.show();
    this.orderService.findOrderGroup$(idOrder, this.status).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        //this.order = res.data[0];
        this.orders = res.data;
        _.each(this.orders, function(order) {
          if (order.status !== 1 && order.dateSend === null && self.user.role.idRole === 1) {
            self.generar = true;
          }

          if (order.dateSend !== null && order.supplier.idSupplier !== 1) {
            self.download = true;
          }

          order.auxList = [];
          _.each(order.listProductRequested, function (detailsOrder) {
            detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
            detailsOrder.productRequested.priceBase = detailsOrder.productRequested.price;
            if (detailsOrder.productRequested.detail && detailsOrder.productRequested.detail.length > 0) {
              detailsOrder.productRequested.detail = JSON.parse(detailsOrder.productRequested.detail);
            }

            const productId = detailsOrder.productRequested.product ? detailsOrder.productRequested.product.idProduct : null;
              if (productId && !self.productModel.isAdditionalProduct(productId)) {
                order.auxList.push(detailsOrder);
              }
          });

          order.listDetails = [];
          order.listDetailsAux = [];
          order.listDetailsAll = [];
          order.listDetailsAll = order.listProductRequested;
          order.listProductRequested = order.auxList;
          order.listDetailsAux = order.listProductRequested;
          order.listDetails = order.listDetailsAux.slice(0, self.itemPerPage);

          if (self.productModel.haveAdditionalProduct(order.supplier.idSupplier)) {
            self.setPriceWithAdditionals(order);
          }
        });

        this.spinner.hide();
      }
    });
  }

  // This method is only for Europa, Smartlens and X-cel
  setPriceWithAdditionals(order): void {
    let productsAdditional = [];
    let inserts = [];
    const self = this;
    let priceAll = 0;
    let priceInsertor = 0;

    let existContraryEye = false;
    let insertor = false;
    const supplierId = order.supplier.idSupplier;
    const insertId = self.productModel.getInsertsID(null, supplierId);

    _.each(order.auxList, function(detailsOrder) {
      [productsAdditional, inserts] = self.getProductsGrouped(detailsOrder.productRequested.detail[0].eye, order, detailsOrder.productRequested.groupId);
      priceAll = 0;
      existContraryEye = self.contraryEye(detailsOrder.productRequested.detail[0].eye, order, detailsOrder.productRequested.groupId);

      // Set prices on additional products
      _.each(productsAdditional, function(item) {
        const productId = item.productRequested.product.idProduct;

        if (productId !== insertId) {
          priceAll = priceAll + item.productRequested.price;
        }
      });

      // INSERTS(DMV) PRICESexistContraryEye
      if (insertId && order.type !== 'warranty') {

        if (inserts.length) {
          // Europa
          if (supplierId === 2) {
            insertor = insertor || detailsOrder.productRequested.detail[0].header[2].selected === true;
          }

          // SMARTLENS or XCEL
          if (supplierId === 14 || self.productModel.xcelWithDmv(detailsOrder.productRequested.product.idProduct)) {
            insertor = insertor || detailsOrder.productRequested.detail[0].dmv.selected === 'Yes';
          }

          if (insertor) {
            // price insertors
            priceInsertor = inserts[0].productRequested.price;

            if (existContraryEye) {
              priceAll = priceAll + (priceInsertor / 2);
            } else {
              priceAll = priceAll + priceInsertor;
            }
          }
        }
      }

      detailsOrder.productRequested.price = priceAll;
      detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
    });
    this.updateTotal(order);
  }

  getProductsGrouped(eye, order, groupId) {
    const groupedList = [];
    const inserts = [];
    const self = this;

    _.each(order.listDetailsAll, function(item) {
      if (item.productRequested.groupId === groupId) {
        if (item.productRequested.detail[0].eye === eye  && !self.productModel.isInsertsDMV(item.productRequested.product.idProduct)) {
          groupedList.push(item);
        }

        if (self.productModel.isInsertsDMV(item.productRequested.product.idProduct)) {
          inserts.push(item);
        }
      }
    });
    return [groupedList, inserts];
  }

  contraryEye(eye, order, groupId) {
    let exist = false;
    let contraryEye = '';
    const self = this;

    if (eye === 'Left') {
      contraryEye = 'Right';
    } else {
      contraryEye = 'Left';
    }

    _.each(order.listDetailsAll, function(item) {
      if (item.productRequested.detail[0].eye === contraryEye && item.productRequested.groupId === groupId && !self.productModel.isAdditionalProduct(item.productRequested.product.idProduct) ) {
        exist = true;
      }
    });
    return exist;
  }

  verifyOrder(order): void {
    if (order.type === 'warranty') {
      this.modifyAndGenerateOrder(order);
    } else {
      this.generateOrder(order);
    }
  }

  modifyAndGenerateOrder(order): void {
    let self = this;
    const modalRef = this.modalService.open(ModifyGenerateOrderComponent,
      { windowClass: 'modal-content-border modal-dialog-modify-generate-invoice', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
      this.ngOnInit();
    }, (reason) => {
    });
  }

  generateOrder(order): void {
    const modalRef = this.modalService.open(ModalsConfirmationComponent, {backdrop  : 'static', keyboard  : false});
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {} , (reason) => {
      this.ngOnInit();
    });
  }

  downloadOrder(order) {
    const self = this;
    self.orderService.downloadOrder$(order.idOrder).subscribe(res => {
      const filename = order.number + '.pdf';
      if (res.size > 0) {
        self.spinner.hide();
        saveAs(res, filename);
      } else {
        self.spinner.hide();
        self.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res1: string) => {
          self.notification.error('', res1);
        });
      }
    }, error => {
      self.spinner.hide();
      self.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        self.notification.error('', res);
      });
      console.log('error', error);
    });
  }

  downloadMergeOrder(order) {
    const self = this;
    self.orderService.downloadMergeOrder$(order.idOrder).subscribe(res => {
      const filename = order.number + '.pdf';
      if (res.size > 0) {
        self.spinner.hide();
        saveAs(res, filename);
      } else {
        self.spinner.hide();
        self.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res1: string) => {
          self.notification.error('', res1);
        });
      }
    }, error => {
      self.spinner.hide();
      self.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        self.notification.error('', res);
      });
      console.log('error', error);
    });
  }

  refresh(productRequested: any, order): void {
   const list: Array<ProductRequested> = productRequested;
    _.each(order.listProductRequested, function (detailsOrder) {
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
    order.listDetailsAux = order.listProductRequested;
    this.updateTotal(order);
  }

  openEdit(lista, image, order) {
    const modalRefSalineFluo = this.modalService.open( SalineFluoComponent,
    { size: 'lg', windowClass: 'modal-content-border' , backdrop  : 'static', keyboard  : false });
    modalRefSalineFluo.componentInstance.detailEdit = lista;
    modalRefSalineFluo.componentInstance.typeEdit = 2;
    modalRefSalineFluo.componentInstance.userOrder = order.user;
    modalRefSalineFluo.componentInstance.image = image;
    modalRefSalineFluo.result.then((result) => {
      this.listAux.push(result);
      this.refresh(this.listAux, order);
    } , (reason) => {

    });
  }


  updateTotal(order) {
    let total = 0.0;
    let subTotal = 0.0;
    _.each(order.listDetails, function (item) {
      subTotal = subTotal + item.productRequested.subtotal;
    });
    order.subtotal = subTotal;

    _.each(order.listDetailsAux, function (item) {
      total = total + item.productRequested.subtotal;
    });
    order.totalOrder = total;
  }

  getReferenceCopy(order) {
    let reference = '';
    if (order.type) {
      const type = this.translate.instant(order.type);
      if (order.originReference) {
        return reference = ' (' + type + ': ' +  '#' + order.originReference + ') ';
      }
      reference = ' (' + type + ') ';
    }
    return reference;
  }

  // idSupplier 2 europa, 3 lenticon
  hasAttributeTypeLens(list) {
    return list.productRequested.product.supplier &&
      _.includes([2, 3], list.productRequested.product.supplier.idSupplier);
  }
}
