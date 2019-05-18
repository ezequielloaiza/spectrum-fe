import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})
export class ProtocolsComponent implements OnInit {

  modeEdit = false;
  form: FormGroup;
  protocols: any;
  arrayAccNumber: Array<any> = new Array;
  arrayCountry: Array<any> = new Array;
  arrayBussinessName: Array<any> = new Array;
  arrayRecipient: Array<any> = new Array;
  arrayShippingAddress: Array<any> = new Array;
  arrayShippingFrecuency: Array<any> = new Array;
  arrayShippingMethod: Array<any> = new Array;
  arrayAccountNumber: Array<any> = new Array;
  arrayShippingDetails: Array<any> = new Array;
  arrayComments: Array<any> = new Array;
  arrayEmailComments: Array<any> = new Array;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.initializeForm();
    this.loadData();
    this.orderData();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      accNumber: ['', [ Validators.required]]
    });
  }

  loadData() {
    //TODO cambiar por los protocolos que vienen de BD.
    this.protocols = [{providerId: 'Markennovy', accNumber: '0001', country: 'a', bussinessName: 'b', recipient: 'c', shippingAddress: 'd', dmv: 'e', shippingFrecuency: 'f', shippingMethod: 'g', accountNumber: 'h', shippingDetails: 'i', comments: 'j', emailComments: 'k'},
                      {providerId: 'Magic Look', accNumber: '0002', country: 'a', bussinessName: 'b2', recipient: 'c2', shippingAddress: 'd2', dmv: 'e2', shippingFrecuency: 'f2', shippingMethod: 'g2', accountNumber: 'h2', shippingDetails: 'i2', comments: 'j2', emailComments: 'k2'},
                      {providerId: 'Europa', accNumber: '0003', country: 'a3', bussinessName: 'b3', recipient: 'c3', shippingAddress: 'd2', dmv: 'e3', shippingFrecuency: 'f3', shippingMethod: 'g3', accountNumber: 'h2', shippingDetails: 'i3', comments: 'j3', emailComments: 'k3'}];
  }

  orderData() {
    var arrayAccNumber = [];
    var arrayCountry = [];
    var arrayBussinessName = [];
    var arrayRecipient = [];
    var arrayShippingAddress = [];
    var arrayShippingFrecuency = [];
    var arrayShippingMethod = [];
    var arrayAccountNumber = [];
    var arrayShippingDetails = [];
    var arrayComments = [];
    var arrayEmailComments = [];

    _.each(this.protocols, function(protocol) {
      //ACC NUMBER
      var find = _.findIndex(arrayAccNumber, function(o) { return o.value === protocol.accNumber; });
      if (find > -1) {
        arrayAccNumber[find].providers.push(protocol.providerId);
      } else {
        arrayAccNumber.push({label:'ACC Number', value: protocol.accNumber, providers: [protocol.providerId] });
      }

      //COUNTRY
      var find = _.findIndex(arrayCountry, function(o) { return o.value === protocol.country; });
      if (find > -1) {
        arrayCountry[find].providers.push(protocol.providerId);
      } else {
        arrayCountry.push({label:'Country', value: protocol.country, providers: [protocol.providerId] });
      }

      //BUSSINESS NAME
      var find = _.findIndex(arrayBussinessName, function(o) { return o.value === protocol.bussinessName; });
      if (find > -1) {
        arrayBussinessName[find].providers.push(protocol.providerId);
      } else {
        arrayBussinessName.push({label:'Bussiness Name', value: protocol.bussinessName, providers: [protocol.providerId] });
      }

      //RECIPIENT
      var find = _.findIndex(arrayRecipient, function(o) { return o.value === protocol.recipient; });
      if (find > -1) {
        arrayRecipient[find].providers.push(protocol.providerId);
      } else {
        arrayRecipient.push({label:'Recipient', value: protocol.recipient, providers: [protocol.providerId] });
      }

      //SHIPPING ADDRESS
      var find = _.findIndex(arrayShippingAddress, function(o) { return o.value === protocol.shippingAddress; });
      if (find > -1) {
        arrayShippingAddress[find].providers.push(protocol.providerId);
      } else {
        arrayShippingAddress.push({label:'Shipping Address', value: protocol.shippingAddress, providers: [protocol.providerId] });
      }

      //SHIPPING FRECUENCY
      var find = _.findIndex(arrayShippingFrecuency, function(o) { return o.value === protocol.shippingFrecuency; });
      if (find > -1) {
        arrayShippingFrecuency[find].providers.push(protocol.providerId);
      } else {
        arrayShippingFrecuency.push({label:'Shipping Frecuency', value: protocol.shippingFrecuency, providers: [protocol.providerId] });
      }

      //SHIPPING METHOD
      var find = _.findIndex(arrayShippingMethod, function(o) { return o.value === protocol.shippingMethod; });
      if (find > -1) {
        arrayShippingMethod[find].providers.push(protocol.providerId);
      } else {
        arrayShippingMethod.push({label:'Shipping Method', value: protocol.shippingMethod, providers: [protocol.providerId] });
      }

      //ACCOUNT NUMBER
      var find = _.findIndex(arrayAccountNumber, function(o) { return o.value === protocol.accountNumber; });
      if (find > -1) {
        arrayAccountNumber[find].providers.push(protocol.providerId);
      } else {
        arrayAccountNumber.push({label:'Account Number', value: protocol.accountNumber, providers: [protocol.providerId] });
      }

      //SHIPPING DETAILS
      var find = _.findIndex(arrayShippingDetails, function(o) { return o.value === protocol.shippingDetails; });
      if (find > -1) {
        arrayShippingDetails[find].providers.push(protocol.providerId);
      } else {
        arrayShippingDetails.push({label:'Shipping Details', value: protocol.shippingDetails, providers: [protocol.providerId] });
      }

      //COMMENTS
      var find = _.findIndex(arrayComments, function(o) { return o.value === protocol.comments; });
      if (find > -1) {
        arrayComments[find].providers.push(protocol.providerId);
      } else {
        arrayComments.push({label:'Comments', value: protocol.comments, providers: [protocol.providerId] });
      }

      //EMAIL COMMENTS
      var find = _.findIndex(arrayEmailComments, function(o) { return o.value === protocol.emailComments; });
      if (find > -1) {
        arrayEmailComments[find].providers.push(protocol.providerId);
      } else {
        arrayEmailComments.push({label:'Email Comments', value: protocol.emailComments, providers: [protocol.providerId] });
      }
    });

    this.arrayAccNumber = arrayAccNumber;
    this.arrayCountry = arrayCountry;
    this.arrayBussinessName = arrayBussinessName;
    this.arrayRecipient = arrayRecipient;
    this.arrayShippingAddress = arrayShippingAddress;
    this.arrayShippingFrecuency = arrayShippingFrecuency;
    this.arrayShippingMethod = arrayShippingMethod;
    this.arrayAccountNumber = arrayAccountNumber;
    this.arrayShippingDetails = arrayShippingDetails;
    this.arrayComments = arrayComments;
    this.arrayEmailComments = arrayEmailComments;
  }

  edit() {
    this.modeEdit = !this.modeEdit;
  }

  cancel(): void {
    this.modeEdit = !this.modeEdit;
  }

  save(): void {
    this.modeEdit = !this.modeEdit;
  }

}
