import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductRequest } from '../../../../shared/models/productrequest';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../../../shared/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Validators } from '@angular/forms';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-product-euclid',
  templateUrl: './edit-product-euclid.component.html',
  styleUrls: ['./edit-product-euclid.component.scss']
})
export class EditProductEuclidComponent implements OnInit {

  form: FormGroup;
  product: any;
  productsToUpdate: any;
  searching = false;
  action: string;
  public model: any;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );
  filterStatus = [{ id: 0, name: 'Inactive' },
  { id: 1, name: 'Active' }];
  //Gold
  priceGW = 0;
  //Preferred
  pricePW = 0;
  // Diamond
  priceDW = 0;
  productUpdate: ProductRequest = new ProductRequest();
  constructor(
    private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private notification: ToastrService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getPrices();
    this.initializeForm();
    this.getProductsOutView();
  }

  formatter = (x: { description: string }) => x.description;

  initializeForm() {
    this.form = this.formBuilder.group({
      id         : [this.action === 'edit' ? this.product.idProduct : ''],
      name       : [this.action === 'edit' ? this.product.name : '', [Validators.required]],
      descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [Validators.required]],
      price1     : [this.action === 'edit' ? this.product.price1 : '', [Validators.required]],
      price2     : [this.action === 'edit' ? this.product.price2 : '', [Validators.required]],
      price3     : [this.action === 'edit' ? this.product.price3 : '', [Validators.required]],
      priceGW1     : [this.action === 'edit' ? this.priceGW : '', [Validators.required]],
      priceDW2     : [this.action === 'edit' ? this.priceDW : '', [Validators.required]],
      pricePW3     : [this.action === 'edit' ? this.pricePW : '', [Validators.required]],
      status     : [this.action === 'edit' ? this.product.status : '', ]
    });
  }

  close(data): void {
    this.modalReference.close(data);
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  assignStatus(value: number) { this.form.get('status').setValue(value); }

  get status() { return this.form.get('status'); }
  get name() { return this.form.get('name'); }
  get descriptionShort() { return this.form.get('descriptionShort'); }
  get price1() { return this.form.get('price1'); }
  get price2() { return this.form.get('price2'); }
  get price3() { return this.form.get('price3'); }
  get priceGW1() { return this.form.get('priceGW1'); }
  get priceDW2() { return this.form.get('priceDW2'); }
  get pricePW3() { return this.form.get('pricePW3'); }

  info(): any {
    let infProperties = JSON.parse(this.product.infoAditional)[0];
    let Prices = {
                  "name": "Prices",
                  "values": [
                        {
                        'title': 'Warranty',
                        'values': [
                              {
                                'name': 'Gold',
                                'price': this.form.get('priceGW1').value
                              },
                              {
                                'name': 'Diamond',
                                'price': this.form.get('priceDW2').value
                              },
                              {
                                'name': 'Preferred',
                                'price': this.form.get('pricePW3').value
                              }
                            ]
                          }
                        ]
                  };
    let jsonInfo = JSON.stringify([infProperties, Prices]);
   return jsonInfo;
  }

  getProductsOutView() {
    let self = this;
    this.productService.findBySupplierInView$(this.product.supplier.idSupplier, false).subscribe(res => {
      if (res.code === CodeHttp.ok) {
       var productsOutView = res.data;
        var nameProductInView = _.split(this.product.name,' ',2);
        this.productsToUpdate = _.filter(productsOutView, function(product) {
          var nameProductOutView = _.split(product.name,' ',2);
          return nameProductInView.length ===  _.intersection(nameProductInView, nameProductOutView).length;
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  save(): void {
    let self = this;
    this.productsToUpdate.unshift(this.product)
    _.each(this.productsToUpdate, function(product, index) {
      self.setProductRequest(product);
      self.productService.update$(self.productUpdate).subscribe(
        res => {
          if (!index) {
            if (res.code === CodeHttp.ok) {
              self.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                .subscribe((rest: string) => {
                  self.notification.success('', rest);
                });
                self.close(res);
            } else if (res.code === CodeHttp.notAcceptable) {
              self.translate.get('The product already exists', {
                  value: 'The product already exists'
                })
                .subscribe((rest: string) => {
                  self.notification.warning('', rest);
                });
            } else {
              console.log(res.errors[0].detail);
            }
          }
          
        },
        error => {
          console.log('error', error);
        }
      );
    });
  }

  getPrices() {
    let info = JSON.parse(this.product.infoAditional);
    // Gold prices
    this.priceGW = parseFloat(info[1].values[0].values[0].price);
    // Diamond prices
    this.priceDW = parseFloat(info[1].values[0].values[1].price);
     // Preferred prices
    this.pricePW = parseFloat(info[1].values[0].values[2].price);
  }

  setProductRequest(product) {
    this.productUpdate.id = product.idProduct;
    this.productUpdate.name = this.product.idProduct === product.idProduct ? this.form.get('name').value : product.name;
    this.productUpdate.descriptionShort = this.form.get('descriptionShort').value;
    this.productUpdate.price1 = this.form.get('price1').value;
    this.productUpdate.price2 = this.form.get('price2').value;
    this.productUpdate.price3 = this.form.get('price3').value;
    this.productUpdate.infoAditional =  this.info();
    this.productUpdate.idSupplier = this.product.supplier.idSupplier;
    this.productUpdate.status = this.form.get('status').value;
  }
}
