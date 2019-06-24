import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupplierService } from '../../../../shared/services/suppliers/supplier.service';
import { ProtocolClientService } from '../../../../shared/services/protocolClient/protocol-client.service';
import { UserStorageService } from '../../../../http/user-storage.service';
import { CountryService } from '../../../../shared/services';
import { Protocol } from '../../../../shared/models/protocol';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import { Role } from '../../../../shared/enum/role.enum';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
@Component({
  selector: 'app-shipping-protocol',
  templateUrl: './shipping-protocol.component.html',
  styleUrls: ['./shipping-protocol.component.scss']
})
export class ShippingProtocolComponent implements OnInit {

  protocol: Protocol = new Protocol();
  protocols: Array<any> = new Array;
  protocolsSave: Array<Protocol> = new Array;
  suppliers: Array<any> = new Array();
  countries: Array<any> = new Array();
  protocolForm: FormGroup;
  edit = false;
  id: any;
  saving = false;
  listShippingMethod = [ '2nd day', 'Overnight', 'Overnight AM' ];
  listBiweekly = [ '15', '30'];
  listWeekly = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  valueFrecuency: any;
  download = false;
  today: Date = new Date();
  user: any;
  IDClient: any;
  validRecords = 0;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private protocolClientService: ProtocolClientService,
    private userStorageService: UserStorageService,
    private countryService: CountryService,
    private translate: TranslateService,
    private notification: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    this.valueFrecuency = 'ANY';
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getCountry();
    this.getIdClient();
    this.initializeForm();
    this.getSupplier();
    this.loadSuppliers();
    this.loadFields();
  }

  initializeForm() {
  this.protocolForm = this.fb.group({
    id: [null],
    accNumber: [null],
    businessName: [null],
    recipient: [null],
    shippingAddress: [null],
    dmv: [null],
    shippingFrecuency: [null],
    shippingMethod: [null],
    accountNumber: [null],
    shippingDetail: [null],
    comment: [[]],
    emailComment: [null],
    clientId: [null],
    supplierId: [null],
    country: [null],
    shippingFrecuencyB: [null],
    shippingFrecuencyW: [null]
    });
  }

  getSupplier() {
    this.supplierService.findAll$().subscribe(res => {
      this.suppliers = res.data;
      this.getProtocol(this.id, this.suppliers[0].idSupplier);
    });
  }

  getProtocol(clientId: any, supplierId: any) {
    this.protocolClientService.findByClienSupplier$(clientId, supplierId).subscribe(res => {
      this.protocol = res;
      if (res.id !== null) {
        this.download = true;
      } else {
        this.download = false;
      }
      this.protocol.supplierId = supplierId;
      this.protocol.clientId = clientId;
      this.setProtocol(this.protocol);
    });
  }

  getCountry() {
    this.countryService.findAll$().subscribe(res => {
      this.countries = res.data;
    });
  }

  update() {
    this.saving = true;
    this.getShippingFrecuency();
    this.protocolClientService.update$(this.protocolForm.value).subscribe(res => {
      this.protocol = res;
      this.download = true;
      this.setProtocol(this.protocol);
      this.edit = false;
      this.saving = false;
      this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
        this.notification.success('', res);
      });
    });
  }

  enableEdit() {
    this.edit = true;
  }

  cancel() {
    this.edit = false;
    this.setProtocol(this.protocol);
  }

  beforeChange($event: NgbTabChangeEvent) {
    if ($event.activeId !== $event.nextId) {
      this.cancel();
      this.getProtocol(this.id, $event.nextId);
      this.loadFields();
    }
  }

  setProtocol(protocol: Protocol) {
    if (protocol.id !== null) {
      this.download = true;
    } else {
      this.download = false;
    }
    this.idClient.setValue(protocol.id);
    this.accNumber.setValue(protocol.accNumber);
    this.businessName.setValue(protocol.businessName);
    this.recipient.setValue(protocol.recipient);
    this.shippingAddress.setValue(protocol.shippingAddress);
    this.dmv.setValue(protocol.dmv);
    this.shippingFrecuency.setValue(protocol.shippingFrecuency);
    this.setShippingFrecuency();
    this.shippingMethod.setValue(protocol.shippingMethod);
    this.accountNumber.setValue(protocol.accountNumber);
    this.shippingDetail.setValue(protocol.shippingDetail);
    this.comment.setValue(protocol.comment);
    this.emailComment.setValue(protocol.emailComment);
    this.clientId.setValue(protocol.clientId);
    this.supplierId.setValue(protocol.supplierId);
    this.country.setValue(protocol.country);
  }


  assignShippingFrecuency(value: number) {
    switch (value) {
      case 1:
          this.valueFrecuency = 'Monthly';
          this.protocolForm.get('shippingFrecuencyB').setValue(null);
          this.protocolForm.get('shippingFrecuencyW').setValue(null);
        break;
      case 2:
           this.valueFrecuency = 'Biweekly';
           this.protocolForm.get('shippingFrecuencyW').setValue(null);
        break;
      case 3:
           this.valueFrecuency = 'Weekly';
           this.protocolForm.get('shippingFrecuencyB').setValue(null);
        break;
    }
  }

  setShippingFrecuency() {
      if (this.protocol.shippingFrecuency === 'Monthly' || this.protocol.shippingFrecuency === null) {
        this.valueFrecuency = 'Monthly';
        this.protocolForm.get('shippingFrecuency').setValue('Monthly');
      } else if (this.protocol.shippingFrecuency === '15' || this.protocol.shippingFrecuency === '30') {
        this.valueFrecuency = 'Biweekly';
        this.protocolForm.get('shippingFrecuencyB').setValue(this.protocol.shippingFrecuency);
      } else {
        this.valueFrecuency = 'Weekly';
        this.protocolForm.get('shippingFrecuencyW').setValue(this.protocol.shippingFrecuency);
      }
  }

  getShippingFrecuency() {
    switch (this.valueFrecuency) {
      case 'Monthly':
          this.protocolForm.get('shippingFrecuency').setValue('Monthly');
        break;
      case 'Biweekly':
          this.protocolForm.get('shippingFrecuency').setValue(this.protocolForm.get('shippingFrecuencyB').value);
        break;
      case 'Weekly' :
          this.protocolForm.get('shippingFrecuency').setValue(this.protocolForm.get('shippingFrecuencyW').value);
        break;
    }
  }

  get idClient() {
    return this.protocolForm.get('id');
  }
  get accNumber() {
    return this.protocolForm.get('accNumber');
  }
  get businessName() {
    return this.protocolForm.get('businessName');
  }
  get recipient() {
    return this.protocolForm.get('recipient');
  }
  get shippingAddress() {
    return this.protocolForm.get('shippingAddress');
  }
  get dmv() {
    return this.protocolForm.get('dmv');
  }
  get shippingFrecuency() {
    return this.protocolForm.get('shippingFrecuency');
  }
    get shippingMethod() {
    return this.protocolForm.get('shippingMethod');
  }
  get accountNumber() {
    return this.protocolForm.get('accountNumber');
  }
  get shippingDetail() {
    return this.protocolForm.get('shippingDetail');
  }
  get comment() {
    return this.protocolForm.get('comment');
  }
  get emailComment() {
    return this.protocolForm.get('emailComment');
  }
  get clientId() {
    return this.protocolForm.get('clientId');
  }
  get supplierId() {
    return this.protocolForm.get('supplierId');
  }
  get country() {
    return this.protocolForm.get('country');
  }

  downloadProtocol() {
    this.spinner.show();
    this.protocolClientService.reportProtocolById$(this.protocol.id, this.user.role.idRole).subscribe(res => {
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
      const filename = 'ProtocolShipping-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
      saveAs(res, filename);
      this.spinner.hide();
    }, error => {
      console.log('error', error);
      this.spinner.hide();
      this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
    });
  }

  ////////////////////////////////////////// MANAGE ALL /////////////////////////////////////////////
  
  ///////////// new functions

  getIdClient() {
    if (this.user.role.idRole === Role.User) {
      this.IDClient = this.user.userResponse.idUser;
    } else {
      this.IDClient = this.route.parent.snapshot.paramMap.get('id');
    }
  }

  showMessage(records) {
    if (records === this.protocolsSave.length) {
      this.spinner.hide();
      this.edit = false;
      this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
        this.notification.success('', res);
      });
    }
  }

  cleanChanges() {
    this.edit = false;
    this.loadFields();
  }

  updateManageAll() {
    const self = this;
    const protocolsClient = [];
    let recordsShipping = 0;
    let serviceShipping = this.protocolClientService;

    _.each(this.suppliers, function(supplier) {
      const protocolSave = {accNumber:null, country:null, businessName:null, recipient: null, shippingAddress: null, shippingFrecuency: null, shippingMethod: null, shippingDetails: null, accountNumber: null,
                            comment: null, emailComments:null, supplierId: supplier.idSupplier, clientId: self.IDClient, id: null};
      _.each(self.protocols, function(protocol) {
        _.each(protocol.values, function(value) {
          if (_.includes(value.suppliers, supplier.idSupplier)) {
            const obj = _.find(value.ids, ['idSupplier', supplier.idSupplier])
            protocolSave[protocol.key] = value.content;            
          }
        });       
      });
      protocolsClient.push(protocolSave);
    });

    this.spinner.show();
    _.each(protocolsClient, function(protocolShipping) {
      serviceShipping.updateManageAll$(protocolShipping, self.user.userResponse.idUser).subscribe(res => {
        recordsShipping++;
        self.showMessage(recordsShipping);
      });
    });
  }


  getProtocols() {
    const protocolsSave = [];
    _.each(this.suppliers, function(supplier) {
    const protocol: Protocol = new Protocol();
    protocol.supplierId = supplier.idSupplier;
    protocol.valid = false;
    protocolsSave.push(protocol);
    });
    this.protocolsSave = protocolsSave;
  }

  loadSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
    if (res.code === CodeHttp.ok) {
      this.suppliers = res.data;
      this.getProtocols();
    } else {
      console.log(res.errors[0].detail);
    }
    }, error => {
      console.log('error', error);
    });
  }

  ///////////// copy of other component

  loadFields() {

    this.protocols = [
      //only admin
      {key: 'accNumber', label: 'ACC Number', values:[], selectedSuppliers: [], placeHolder:'Enter ACC Number', id:8, edit: this.user.role.idRole === 1},
      {key: 'country', label: 'Country', values:[], selectedSuppliers: [], placeHolder:'Enter Country', id:9, edit: this.user.role.idRole === 1},
      {key: 'businessName', label: 'Business Name', values:[], selectedSuppliers: [], placeHolder:'Enter Business Name', id:10, edit: this.user.role.idRole === 1},

      //permitted client
      {key: 'recipient', label: 'Recipient', values:[], selectedSuppliers: [], placeHolder:'Enter recipient',id:1, edit:true},
      {key: 'shippingAddress', label: 'Shipping Address', values:[], selectedSuppliers: [], placeHolder:'Enter shipping address',id:2, edit:true},
      {key: 'shippingFrecuency', label: 'Shipping Frecuency', values:[], selectedSuppliers: [], placeHolder:'Enter shipping frecuency',id:3, edit:true},
      {key: 'shippingMethod', label: 'Shipping Method', values:[], selectedSuppliers: [], placeHolder:'Enter shipping method',id:4, edit:true},
      {key: 'shippingDetails', label: 'Shipping Details', values:[], selectedSuppliers: [], placeHolder:'Enter shipping details',id:5, edit:true},
      {key: 'accountNumber', label: 'Account Number for Shipping Carrier', values:[], selectedSuppliers: [], placeHolder:'Enter account number for shipping carrier',id:6, edit:true},
      {key: 'comment', label: 'Comments', values:[], selectedSuppliers: [], placeHolder:'Enter comments',id:7, edit:true},

      //only admin
      {key: 'emailComments', label: 'Email Comments', values:[], selectedSuppliers: [], placeHolder:'Enter Email Comments', id:11, edit: this.user.role.idRole === 1}
    ];

    this.protocolClientService.allByUser$(this.IDClient).subscribe(res => {
      var protocols = this.protocols;
      _.each(res.data, function(protocol) {
        Object.keys(protocol).forEach(key => {
          var keyFound = _.find(protocols, ['key', key]);
          if (!!keyFound && !!protocol[key]) {
            var valueFound = _.find(keyFound.values, ['content', protocol[key]]);
            if (!!valueFound) {
              valueFound.suppliers.push(protocol.supplier.idSupplier);
            } else {
              keyFound.values.push({content: protocol[key], suppliers: [protocol.supplier.idSupplier], selectedSuppliers: [protocol.supplier.idSupplier]});
            }
            keyFound.selectedSuppliers.push(protocol.supplier.idSupplier);
          }
        });
      });

      _.each(this.protocols, function(protocol) {
        if (protocol.values.length === 0) {
          if (protocol.key === 'shippingFrecuency') {
            protocol.values.push({content: '', suppliers: [],showB:"false",showW:"false"});
          } else {
            protocol.values.push({content: '', suppliers: []});
          }
          protocol.selectedSuppliers = [];
        }
      });
    });
  }

  selectSupplier(idSupplier, protocol, value) {
    let index = _.indexOf(value.suppliers, idSupplier);
    if (index > -1) {
      value.suppliers.splice(index, 1);
      protocol.selectedSuppliers.splice(_.indexOf(protocol.selectedSuppliers, idSupplier), 1);
    } else if (this.allowedSelection(idSupplier, protocol)) {
      value.suppliers.push(idSupplier);
      protocol.selectedSuppliers.push(idSupplier);
    }
  }

  allowedSelection(idSupplier, protocol) {
    return _.indexOf(protocol.selectedSuppliers, idSupplier) === -1;
  }

  supplierSelected(idSupplier, protocolValue) {
    return _.indexOf(protocolValue.suppliers, idSupplier) > -1;
  }

  addValue(protocol) {
    protocol.values.push({content: '', suppliers: []});

  }

  hiddenSupplier(protocol, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier)
  }

  removeValue(protocol, index) {
    protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, protocol.values[index].suppliers);
    protocol.values.splice(index, 1);
  }

  getNamesTypeList(value) {
    const self = this;
    const suppliersName = [];
    _.each(self.suppliers, function(supplier) {
      if (_.includes(value.suppliers, supplier.idSupplier)) {
        suppliersName.push(supplier.companyName);
      }
    });
    return suppliersName.join(', ');
  }

  disabledSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier) && !_.includes(value.suppliers, supplier.idSupplier);
  }

  checkedSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier);
  }

  validContent(protocol, pos) {
    let valid = true;
    if (protocol.values[pos].content === '') {
         valid = false;
    }
    return valid;
  }

  checkSuppliers(protocol, pos) {
    let show = true;
    if (protocol.values[pos].suppliers.length > 0) {
      show = false;
    }
    return show;
  }

}

