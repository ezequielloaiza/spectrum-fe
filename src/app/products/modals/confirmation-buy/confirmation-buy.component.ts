import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ProductRequested } from '../../../shared/models/productrequested';
import { BasketService } from '../../../shared/services/basket/basket.service';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmation-buy',
  templateUrl: './confirmation-buy.component.html',
  styleUrls: ['./confirmation-buy.component.scss']
})
export class ConfirmationBuyComponent implements OnInit {
  datos: any;
  product: any;
  listBasket: Array<any> = new Array;
  listNameParameters: Array<any> = new Array;
  namePatient: any;
  form: FormGroup;
  constructor(public modalReference: NgbActiveModal,
              private basketService: BasketService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.getDatos();
   this.initializeForm();
  }

  close() {
    this.modalReference.close();
  }

  getDatos() {
   // console.log('datos' , this.datos);
  //  console.log('product' , this.product.name);
    let patient;
    const detail = [];
    let listDetailSelect;

    /*this.listBasket = _.filter(this.datos.productRequestedList, function (item) {
      let productRequest: ProductRequested = new ProductRequested();
      productRequest = item;
      patient = productRequest.patient;
      let arrayDetail = '[' + JSON.stringify(productRequest.detail) + ']';
   //   productRequest.detail =  JSON.stringify(productRequest.detail);
     // productRequest.detail = JSON.parse(arrayDetail);
      listDetailSelect = _(detail).push(productRequest);
      listDetailSelect = listDetailSelect.commit();
      return  listDetailSelect;

    });*/
    this.listBasket = _.clone(this.datos.productRequestedList);

    _.each(this.listBasket, function (productRequested1) {
     // productRequested = item;
      patient = productRequested1.patient;
      productRequested1.detail = JSON.parse(productRequested1.detail);
      console.log('detail', productRequested1.detail); // = JSON.parse(productRequested.detail);
    });
    this.namePatient = patient;
    this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    // console.log('parametros', this.listNameParameters);
  }

  save(): void {
    this.form.get('idUser').setValue(this.datos.idUser);
    _.each(this.datos.productRequestedList, function (productRequested) {
      debugger
      productRequested.detail = '' + JSON.stringify(productRequested.detail) + '';
    });
    this.form.get('productRequestedList').setValue(this.datos.productRequestedList);

    this.basketService.saveBasket$(this.form.value).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.close();
        this.translate.get('Successfully save', {value: 'Successfully save'}).subscribe(( res: string) => {
          this.notification.success('', res);
        });
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      idUser: [''],
      productRequestedList: [''],
    });
  }
  get idUser() { return this.form.get('idUser'); }
  get productRequestedList() { return this.form.get('productRequestedList'); }


}
