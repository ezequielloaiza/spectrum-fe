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
    console.log('product: ', this.product);
  }

  formatter = (x: { description: string }) => x.description;

  initializeForm() {
    this.form = this.formBuilder.group({
      id: [this.action === 'edit' ? this.product.idProduct : ''],
      name: [
        this.action === 'edit' ? this.product.name : '',
        [Validators.required]
      ],
      description: [
        this.action === 'edit' ? this.product.descriptionShort : '',
        [Validators.required]
      ],
      price_base: [
        this.action === 'edit' ? this.product.priceBase : '',
        [Validators.required]
      ],
      price1: [
        this.action === 'edit' ? this.product.price1 : '',
        [Validators.required]
      ],
      price2: [
        this.action === 'edit' ? this.product.price2 : '',
        [Validators.required]
      ],
      price3: [
        this.action === 'edit' ? this.product.price3 : '',
        [Validators.required]
      ],
      status: [
        this.action === 'edit' ? this.product.status : '',
        [Validators.required]
      ]
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
  get description() { return this.form.get('description'); }
  get price_base() { return this.form.get('price_base'); }
  get price1() { return this.form.get('price1'); }
  get price2() { return this.form.get('price2'); }
  get price3() { return this.form.get('price3'); }

  save(): void {
    this.productService.update$(this.form.value).subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.translate
            .get('Successfully Updated', { value: 'Successfully Updated' })
            .subscribe((res: string) => {
              this.notification.success('', res);
            });
          this.dismiss();
        } else if (res.code === CodeHttp.notAcceptable) {
          this.translate
            .get('The product already exists', {
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
