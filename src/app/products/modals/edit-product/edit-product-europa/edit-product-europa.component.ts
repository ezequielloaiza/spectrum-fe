import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../../shared/services/products/product.service';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product-europa',
  templateUrl: './edit-product-europa.component.html',
  styleUrls: ['./edit-product-europa.component.scss']
})
export class EditProductEuropaComponent implements OnInit {
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
      price1     : [this.action === 'edit' ? this.product.price1 : '', [Validators.required]],
      price2     : [this.action === 'edit' ? this.product.price2 : '', [Validators.required]],
      price3     : [this.action === 'edit' ? this.product.price3 : '', [Validators.required]],
      priced1     : [this.action === 'edit' ? this.product.priced1 : '', [Validators.required]],
      priced2     : [this.action === 'edit' ? this.product.priced2 : '', [Validators.required]],
      priced3     : [this.action === 'edit' ? this.product.priced3 : '', [Validators.required]],
      infoAditional: [this.action === 'edit' ? this.product.infoAditional : ''],
      idSupplier : [this.action === 'edit' ? this.product.supplier.idSupplier : ''],
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
  get priced1() { return this.form.get('priced1'); }
  get priced2() { return this.form.get('priced2'); }
  get priced3() { return this.form.get('priced3'); }

  save(): void {
    this.productService.update$(this.form.value).subscribe(
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
}
