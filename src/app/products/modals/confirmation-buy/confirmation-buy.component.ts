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
import { BasketRequest } from '../../../shared/models/basketrequest';

@Component({
  selector: 'app-confirmation-buy',
  templateUrl: './confirmation-buy.component.html',
  styleUrls: ['./confirmation-buy.component.scss']
})
export class ConfirmationBuyComponent implements OnInit {
  datos: any;
  product: any;
  listBasket: Array<ProductRequested> = new Array;
  lista: Array<ProductRequested> = new Array;
  listNameParameters: Array<any> = new Array;
  namePatient: any;
  basketRequest: BasketRequest = new BasketRequest();
  constructor(public modalReference: NgbActiveModal,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService,
              private basketService: BasketService) { }

  ngOnInit() {
   this.getDatos();
  }

  close() {
    this.modalReference.close();
  }

  getDatos() {
    let patient;
    this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
    _.each(this.listBasket, function (productRequested1) {
      patient = productRequested1.patient;
      productRequested1.detail = JSON.parse(productRequested1.detail);
    });
    this.namePatient = patient;
    this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
  }

  save(): void {
    this.basketRequest.idUser = this.datos.idUser;
    this.basketRequest.productRequestedList = this.lista;

    this.basketService.saveBasket$(this.basketRequest).subscribe(res => {
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
}
