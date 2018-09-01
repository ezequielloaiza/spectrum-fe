import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../../shared/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  product: any;
  searching = false;
  action: string;
  public model: any;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(
    private modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private notification: ToastrService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  formatter = (x: { description: string }) => x.description;

  initializeForm() {
    this.form = this.formBuilder.group({
      id         : [this.action === 'edit' ? this.product.idProduct : ''],
      name       : [this.action === 'edit' ? this.product.name : '', [Validators.required]],
      descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [Validators.required]],
      priceBase  : [this.action === 'edit' ? this.product.priceBase : '', [Validators.required]],
      price1     : [this.action === 'edit' ? this.product.price1 : '', [Validators.required]],
      price2     : [this.action === 'edit' ? this.product.price2 : '', [Validators.required]],
      price3     : [this.action === 'edit' ? this.product.price3 : '', [Validators.required]],
      father     : [this.action === 'edit' ? this.product.father : ''],
      code       : [this.action === 'edit' ? this.product.code : ''],
      priceType  : [this.action === 'edit' ? this.product.priceType : ''],
      minimum    : [this.action === 'edit' ? this.product.minimum : ''],
      maximum    : [this.action === 'edit' ? this.product.maximum : ''],
      increment  : [this.action === 'edit' ? this.product.increment : ''],
      material   : [this.action === 'edit' ? this.product.material : ''],
      description: [this.action === 'edit' ? this.product.description : ''],
      replacementPeriod: [this.action === 'edit' ? this.product.replacementPeriod : ''],
      warranty   : [this.action === 'edit' ? this.product.warranty : ''],
      url        : [this.action === 'edit' ? this.product.url : ''],
      stock      : [this.action === 'edit' ? this.product.stock : ''],
      infoAdicional: [this.action === 'edit' ? this.product.infoAdicional : ''],
      types      : [this.action === 'edit' ? this.product.types : ''],
      idSupplier : [this.action === 'edit' ? this.product.supplier.idSupplier : ''],
      idCategory : [this.action === 'edit' ? this.product.category.idCategory : ''],
      status     : [this.action === 'edit' ? this.product.status : '']
    });
  }

  close(data): void {
    this.modalReference.close(data);
  }

  dismiss(): void {
    this.modalReference.dismiss();
  }

  get status() { return this.form.get('status'); }
  get name() { return this.form.get('name'); }
  get descriptionShort() { return this.form.get('descriptionShort'); }
  get priceBase() { return this.form.get('priceBase'); }
  get price1() { return this.form.get('price1'); }
  get price2() { return this.form.get('price2'); }
  get price3() { return this.form.get('price3'); }

  save(): void {
    this.productService.update$(this.form.value).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
            .subscribe((res: string) => {
              this.notification.success('', res);
            });
          this.dismiss();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate.get('The product already exists', {
              value: 'The product already exists'
            })
            .subscribe((res: string) => {
              this.notification.warning('', res);
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
}
