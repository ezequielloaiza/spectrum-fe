import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductRequest } from '../../../../shared/models/productrequest';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../../../shared/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product-spectrum-saline',
  templateUrl: './edit-product-spectrum-saline.component.html',
  styleUrls: ['./edit-product-spectrum-saline.component.scss']
})
export class EditProductSpectrumSalineComponent implements OnInit {


  form: FormGroup;
  product: any;
  searching = false;
  action: string;
  public model: any;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );
  filterStatus = [{ id: 0, name: 'Inactive' },
  { id: 1, name: 'Active' }];
  //Preferred
  priceP1 = 0;
  priceP2 = 0;
  priceP3 = 0;
  // Diamond
  priceD1 = 0;
  priceD2 = 0;
  priceD3 = 0;
  productUpdate: ProductRequest = new ProductRequest();
  constructor(private modalReference: NgbActiveModal,
              private formBuilder: FormBuilder,
              private productService: ProductService,
              private notification: ToastrService,
              private translate: TranslateService) {}

  ngOnInit() {
    this.getPrices();
    this.initializeForm();
  }

  formatter = (x: { description: string }) => x.description;

  initializeForm() {
    this.form = this.formBuilder.group({
      id         : [this.action === 'edit' ? this.product.idProduct : ''],
      name       : [this.action === 'edit' ? this.product.name : '', [Validators.required]],
      descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [Validators.required]],
      pricePr1     : [this.action === 'edit' ? this.priceP1 : '', [Validators.required]],
      pricePr2     : [this.action === 'edit' ? this.priceP2 : '', [Validators.required]],
      pricePr3     : [this.action === 'edit' ? this.priceP3 : '', [Validators.required]],
      priceDi1     : [this.action === 'edit' ? this.priceD1 : '', [Validators.required]],
      priceDi2     : [this.action === 'edit' ? this.priceD2 : '', [Validators.required]],
      priceDi3     : [this.action === 'edit' ? this.priceD3 : '', [Validators.required]],
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
  get pricePr1() { return this.form.get('pricePr1'); }
  get pricePr2() { return this.form.get('pricePr2'); }
  get pricePr3() { return this.form.get('pricePr3'); }
  get priceDi1() { return this.form.get('priceDi1'); }
  get priceDi2() { return this.form.get('priceDi2'); }
  get priceDi3() { return this.form.get('priceDi3'); }

  info(): any {
    let infProperties = JSON.parse(this.product.infoAditional)[0];
    let Preferred =  {
                    'name': 'Preferred',
                    'values': [
                      {
                        'name': '250',
                        'price': this.form.get('pricePr1').value
                      },
                      {
                        'name': '500',
                        'price': this.form.get('pricePr2').value
                      },
                      {
                        'name': '1000',
                        'price': this.form.get('pricePr3').value
                      }
                    ]
                  };
    let Diamond =  {
                    'name': 'Diamond',
                    'values': [
                      {
                        'name': '250',
                        'price': this.form.get('priceDi1').value
                      },
                      {
                        'name': '500',
                        'price': this.form.get('priceDi2').value
                      },
                      {
                        'name': '1000',
                        'price': this.form.get('priceDi3').value
                      }
                    ]
                  };
    let jsonInfo = JSON.stringify([infProperties, Diamond, Preferred ]);
   return jsonInfo;
  }
  save(): void {
    this.setProductRequest();
    this.productService.update$(this.productUpdate).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
            .subscribe((rest: string) => {
              this.notification.success('', rest);
            });
          this.close(res);
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The product already exists', {
              value: 'The product already exists'
            })
            .subscribe((rest: string) => {
              this.notification.warning('', rest);
            });
        } else {
          console.log(res.errors[0].detail);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  getPrices() {
    let info = JSON.parse(this.product.infoAditional);
    // Diamond prices
    this.priceD1 = parseFloat(info[1].values[0].price); // Desde 250 hasta 499
    this.priceD2 = parseFloat(info[1].values[1].price); // Desde 500 hasta 999
    this.priceD3 = parseFloat(info[1].values[2].price); // mayor 2001 boxes

     // Preferred prices
     this.priceP1 = parseFloat(info[2].values[0].price); // Desde 250 hasta 499
     this.priceP2 = parseFloat(info[2].values[1].price); // Desde 500 hasta 999
     this.priceP3 = parseFloat(info[2].values[2].price); // Desde 500 hasta 999
  }

  setProductRequest() {
    this.productUpdate.id = this.product.idProduct;
    this.productUpdate.name = this.form.get('name').value;
    this.productUpdate.descriptionShort = this.form.get('descriptionShort').value;
    this.productUpdate.infoAditional =  this.info();
    this.productUpdate.idSupplier = this.product.supplier.idSupplier;
    this.productUpdate.status = this.form.get('status').value;
  }
}
