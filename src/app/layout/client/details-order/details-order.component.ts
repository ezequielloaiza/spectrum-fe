import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Order } from '../../../shared/models/order';
import * as _ from 'lodash';
import { ProductoimageService } from '../../../shared/services/productoimage/productoimage.service';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SalineFluoComponent } from '../../edit-order/saline-fluo/saline-fluo.component';
import { ProductRequested } from '../../../shared/models/productrequested';
import { ProductService } from '../../../shared/services/products/product.service';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss']
})

export class DetailsOrderComponent implements OnInit {

  id: any;
  order: Order = new Order();
  listDetails: Array<any> = new Array;
  listDetailsAux: Array<any> = new Array;
  listDetailsAll: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 2;
  download = false;
  listAux: Array<ProductRequested> = new Array<ProductRequested>();
  productModel: Product = new Product();

  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    public productImageService: ProductoimageService,
    private productService: ProductService,
    private translate: TranslateService,
    private fileProductRequestedService: FileProductRequestedService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.advancedPagination = 1;
    this.getOrder(this.id);
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listDetails = this.listDetailsAux.slice(startItem, endItem);
    this.updateTotal();
  }

  getOrder(idOrder): void {
    const self = this;
    this.spinner.show();
    this.orderService.findId$(idOrder).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.order = res.data;

        if (res.data.dateSend !== null && res.data.supplier.idSupplier !== 1) {
          this.download = true;
        }

        const auxList = [];
        _.each(this.order.listProductRequested, function (detailsOrder) {
          const productId = detailsOrder.productRequested.product ? detailsOrder.productRequested.product.idProduct : null;
          detailsOrder.productRequested.show = false;
          detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
          if (detailsOrder.productRequested.detail && detailsOrder.productRequested.detail.length) {
            detailsOrder.productRequested.detail = JSON.parse(detailsOrder.productRequested.detail);
          }
          if (!self.productModel.isAdditionalProduct(productId)) {
            auxList.push(detailsOrder);
          }
        });
        this.order.listDetailsAll = this.order.listProductRequested;
        this.listDetailsAll = this.order.listProductRequested;
        this.order.listProductRequested = auxList;
        this.listDetailsAux = this.order.listProductRequested;
        this.listDetails = this.listDetailsAux.slice(0, this.itemPerPage);

        // search product insertor
        if (res.data.supplier.idSupplier === 2 && res.data.type !== 'warranty') {
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
      arrayProductAditionals = self.getProductsAditionalEuropa(detailsOrder.productRequested.detail[0].eye, detailsOrder.productRequested.groupId);
      priceAll = 0;
      existContraryEye = self.contraryEye(detailsOrder.productRequested.detail[0].eye, detailsOrder.productRequested.groupId);
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
    this.updateTotal();
  }

  getProductsAditionalEuropa(eye, groupId) {
    const auxList = [];

    _.each(this.listDetailsAll, function(item) {
      if (item.productRequested.detail[0].eye === eye && item.productRequested.groupId === groupId) {
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

  contraryEye(eye, groupId) {
    let exist = false;
    let contraryEye = '';

    if (eye === 'Left') {
      contraryEye = 'Right';
    } else {
      contraryEye = 'Left';
    }

    _.each(this.listDetailsAll, function(item) {
      if (item.productRequested.detail[0].eye === contraryEye && item.productRequested.groupId === groupId) {
        exist = true;
      }
    });
    return exist;
  }

  downloadOrder(order) {
    this.orderService.downloadOrder$(order.idOrder).subscribe(res => {
      const filename = order.number + '.pdf';
      saveAs(res, filename);
    }, error => {
      console.log('error', error);
    });
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

  refresh(productRequested: any): void {
    let list: Array<ProductRequested> = productRequested;
    _.each(this.order.listProductRequested, function (detailsOrder) {
      _.each(list, function (item) {
        if (detailsOrder.productRequested.idProductRequested === item.idProductRequested) {
          detailsOrder.productRequested.patient = item.patient;
          detailsOrder.productRequested.price = item.price;
          detailsOrder.productRequested.quantity = item.quantity;
          detailsOrder.productRequested.observations = item.observations;
          detailsOrder.productRequested.subtotal = detailsOrder.productRequested.price * detailsOrder.productRequested.quantity;
        }
      });

    });
    this.listDetailsAux = this.order.listProductRequested;
    this.updateTotal();
  }

  updateTotal() {
    let total = 0.0;
    let subTotal = 0.0;
    _.each(this.listDetails, function (item) {
      subTotal = subTotal + item.productRequested.subtotal;
    });
    this.order.subtotal = subTotal;

    _.each(this.listDetailsAux, function (item) {
      total = total + item.productRequested.subtotal;
    });
    this.order.totalOrder = total;
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
