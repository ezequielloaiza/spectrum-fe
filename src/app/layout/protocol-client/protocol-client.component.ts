import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { ProtocolClientService } from '../../shared/services/protocolClient/protocol-client.service';
import { Protocol } from '../../shared/models/protocol';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserStorageService } from '../../http/user-storage.service';
import { CountryService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Role } from '../../shared/enum/role.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protocol-client',
  templateUrl: './protocol-client.component.html',
  styleUrls: ['./protocol-client.component.scss']
})
export class ProtocolClientComponent implements OnInit {

  protocol: Protocol = new Protocol();
  suppliers: Array<any> = new Array();
  countries: Array<any> = new Array();
  protocolForm: FormGroup;
  edit = false;
  user: any;
  idClient: any;
  saving = false;
  listShippingMethod = ['2nd day', 'Overnight', 'Overnight AM', 'Ground'];
  listBiweekly = ['15', '30'];
  listWeekly = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  valueFrecuency: any;
  today: Date = new Date();
  download = false;

  protocols: any;
  protocolsAux: any;
  protocolsCopy: Array<any> = new Array;
  protocolsSave: Array<Protocol> = new Array;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private translate: TranslateService,
    private notification: ToastrService,
    private protocolClientService: ProtocolClientService,
    private userStorageService: UserStorageService,
    private countryService: CountryService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    this.valueFrecuency = 'ANY';
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
      shippingFrecuencyW: [null],
      shippingMethodAll: [null]
    });
  }

  getSupplier() {
    this.supplierService.findByUser$(this.idClient).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.suppliers = _.orderBy(res.data, ['companyName']);
        this.getProtocol(this.idClient, this.suppliers[0].idSupplier);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
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
    this.getShippingFrecuency();
    this.saving = true;
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
      this.getProtocol(this.user.userResponse.idUser, $event.nextId);
      this.loadFields();
    }
  }

  setProtocol(protocol: Protocol) {
    if (protocol.id !== null) {
      this.download = true;
    } else {
      this.download = false;
    }
    this.id.setValue(protocol.id);
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

  assignShippingFrecuency(protocol, type, pos) {
    switch (type) {
      case 1:
        if (pos !== null) {
          protocol.values[pos].content = 'Monthly';
          protocol.values[pos].showW = 'false';
          protocol.values[pos].showB = 'false';
        } else {
          this.valueFrecuency = 'Monthly';
          this.protocolForm.get('shippingFrecuencyB').setValue(null);
          this.protocolForm.get('shippingFrecuencyW').setValue(null);
        }
        break;
      case 2:
        if (pos !== null) {
          //protocol.values[pos].content = '';
          protocol.values[pos].showB = 'true';
          protocol.values[pos].showW = 'false';
        } else {
          this.valueFrecuency = 'Biweekly';
          this.protocolForm.get('shippingFrecuencyW').setValue(null);
        }
        break;
      case 3:
        if (pos !== null) {
          // protocol.values[pos].content = '';
          protocol.values[pos].showW = 'true';
          protocol.values[pos].showB = 'false';
        } else {
          this.valueFrecuency = 'Weekly';
          this.protocolForm.get('shippingFrecuencyB').setValue(null);
        }
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

    _.each(this.protocols, function (protocol) {
      _.each(protocol.values, function (value, pos) {
        if (protocol.key === "shippingFrecuency") {
          if (value.content === 'Monthly' || value.content === null) {
            protocol.values[pos].content = 'Monthly';
            protocol.values[pos].showW = 'false';
            protocol.values[pos].showB = 'false';
          } else if (value.content === '15' || value.content === '30') {
            protocol.values[pos].showW = 'false';
            protocol.values[pos].showB = 'true';
          } else {
            protocol.values[pos].showW = 'true';
            protocol.values[pos].showB = 'false';
          }
        }
      });
    });
  }

  getShippingFrecuency() {
    switch (this.valueFrecuency) {
      case 'Monthly':
        this.protocolForm.get('shippingFrecuency').setValue('Monthly');
        break;
      case 'Biweekly':
        this.protocolForm.get('shippingFrecuency').setValue(this.protocolForm.get('shippingFrecuencyB').value);
        break;
      case 'Weekly':
        this.protocolForm.get('shippingFrecuency').setValue(this.protocolForm.get('shippingFrecuencyW').value);
        break;
    }
  }

  get id() {
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
      const aux = {
        year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()
      };
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
      this.idClient = this.user.userResponse.idUser;
    } else {
      this.idClient = this.route.parent.snapshot.paramMap.get('id');
    }
  }


  cleanChanges() {
    this.edit = false;
    this.loadFields();
  }

  updateManageAll() {
    const self = this;
    const protocolsClient = [];
    this.saving = true;
    _.each(this.suppliers, function (supplier) {
      // tslint:disable-next-line:max-line-length
      const protocolSave = {
        recipient: null, shippingAddress: null, shippingFrecuency: null, shippingMethod: null, shippingDetails: null, accountNumber: null,
        comment: null, supplierId: supplier.idSupplier, clientId: self.user.userResponse.idUser, id: null
      };
      protocolSave.supplierId = supplier.idSupplier;
      protocolSave.clientId = self.user.userResponse.idUser;
      _.each(self.protocols, function (protocol, key) {
        const _key = key;
        _.each(protocol.values, function (value) {
          if (_.includes(value.suppliers, supplier.idSupplier)) {
            const obj = _.find(value.ids, ['idSupplier', supplier.idSupplier]);
            protocolSave[_key] = value.content;
          }
        });
      });
      protocolsClient.push(JSON.parse(JSON.stringify(protocolSave)));
    });
    this.spinner.show();
    this.protocolClientService.updateManageAll$(protocolsClient, self.user.userResponse.idUser).subscribe(res => {
      this.spinner.hide();
      this.edit = false;
      this.saving = false;
      this.loadFields();
      this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
        this.notification.success('', res);
      });
    }, error => {
      this.saving = false;
      this.edit = false;
    });
  }


  getProtocols() {
    const protocolsSave = [];
    _.each(this.suppliers, function (supplier) {
      const protocol: Protocol = new Protocol();
      protocol.supplierId = supplier.idSupplier;
      protocol.valid = false;
      protocolsSave.push(protocol);
    });
    this.protocolsSave = protocolsSave;
  }

  /*
  loadSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
    if (res.code === CodeHttp.ok) {
      this.suppliers =  _.orderBy(res.data, ['companyName']);
      this.getProtocols();
    } else {
      console.log(res.errors[0].detail);
    }
    }, error => {
      console.log('error', error);
    });
  }
  */

  loadSuppliers() {
    this.supplierService.findByUser$(this.idClient).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.suppliers = _.orderBy(res.data, ['companyName']);
        this.getProtocols();
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  ///////////// copy of other component

  isValidProtocols() {
    var isValid = true;

    _.each(this.protocols, function (protocol) {
      _.each(protocol.values, function (value) {
        var emptyContent = value.content === '' || value.content === null || value.content === undefined || false;
        if ((!emptyContent && value.suppliers.length === 0) || (emptyContent && value.suppliers.length > 0)) {
          isValid = false;
        }
      });
    });
    return isValid;
  }

  loadFields() {

    this.protocols = {
      //view client
      accNumber: { label: 'ACC Number', values: [], selectedSuppliers: [], placeHolder: 'Enter ACC Number', id: 8, edit: false },
      country: { label: 'Country', values: [], selectedSuppliers: [], placeHolder: 'Enter Country', id: 9, edit: false },
      businessName: { label: 'Business Name', values: [], selectedSuppliers: [], placeHolder: 'Enter Business Name', id: 10, edit: true },
      //permitted client
      recipient: { label: 'Recipient', values: [], selectedSuppliers: [], placeHolder: 'Enter recipient', id: 1, edit: true },
      shippingAddress: { label: 'Shipping Address', values: [], selectedSuppliers: [], placeHolder: 'Enter shipping address', id: 2, edit: true },
      shippingFrecuency: { label: 'Shipping Frecuency', values: [], selectedSuppliers: [], placeHolder: 'Enter shipping frecuency', id: 3, edit: true },
      shippingMethod: { label: 'Shipping Method', values: [], selectedSuppliers: [], placeHolder: 'Enter shipping method', id: 4, edit: true },
      shippingDetail: { label: 'Shipping Details', values: [], selectedSuppliers: [], placeHolder: 'Enter shipping details', id: 5, edit: true },
      accountNumber: { label: 'Account Number for Shipping Carrier', values: [], selectedSuppliers: [], placeHolder: 'Enter account number for shipping carrier', id: 6, edit: true },
      comment: { label: 'Comments', values: [], selectedSuppliers: [], placeHolder: 'Enter comments', id: 7, edit: true }

    };

    this.protocolClientService.allByUser$(this.idClient).subscribe(res => {
      var protocols = this.protocols;
      let self = this;
      _.each(res.data, function (protocol, key) {
        _.each(protocol, function (obj, _key) {
          const clave = _key;
          if (!!self.protocols[clave]) {
            if (protocol[_key] !== '' && protocol[_key] !== null) {
              if (self.protocols[clave].values.length === 0) {
                let object;
                if (_key !== 'country') {
                  // tslint:disable-next-line:max-line-length
                  object = { content: protocol[_key], suppliers: [protocol.supplier.idSupplier], ids: [{ idSupplier: protocol.supplier.idSupplier }] };
                } else {
                  // tslint:disable-next-line:max-line-length
                  object = { content: protocol[_key].idCountry, countryName: protocol[_key].name, suppliers: [protocol.supplier.idSupplier], ids: [{ idSupplier: protocol.supplier.idSupplier }] };
                }
                self.protocols[clave].values.push(object);
                self.protocols[clave].selectedSuppliers.push(protocol.supplier.idSupplier);
              } else {
                const index = _.findIndex(self.protocols[clave].values, function (value: any) {
                  if (_key !== 'country') {
                    return value.content === protocol[_key];
                  } else {
                    return value.content === protocol[_key].idCountry;
                  }
                });
                if (index !== -1) {
                  self.protocols[clave].values[index].suppliers.push(protocol.supplier.idSupplier);
                  self.protocols[clave].values[index].ids.push({ idSupplier: protocol.supplier.idSupplier });
                  self.protocols[clave].selectedSuppliers.push(protocol.supplier.idSupplier);
                } else {
                  let object;
                  if (_key !== 'country') {
                    // tslint:disable-next-line:max-line-length
                    object = { content: protocol[_key], suppliers: [protocol.supplier.idSupplier], ids: [{ idSupplier: protocol.supplier.idSupplier }] };
                  } else {
                    // tslint:disable-next-line:max-line-length
                    object = { content: protocol[_key].idCountry, countryName: protocol[_key].name, suppliers: [protocol.supplier.idSupplier], ids: [{ idSupplier: protocol.supplier.idSupplier }] };
                  }
                  self.protocols[clave].values.push(object);
                  self.protocols[clave].selectedSuppliers.push(protocol.supplier.idSupplier);

                }
              }
            }
          }
        });
        self.protocolsAux = JSON.parse(JSON.stringify(self.protocols));
      });
      _.each(this.protocols, function (protocol) {
        if (protocol.label === 'Shipping Frecuency') {
          _.each(protocol.values, function (value, pos) {
            if (value.content === 'Monthly' || value.content === null) {
              self.assignShippingFrecuency(protocol, 1, pos);
            } else if (value.content === '15' || value.content === '30') {
              self.assignShippingFrecuency(protocol, 2, pos);
            } else {
              self.assignShippingFrecuency(protocol, 3, pos);
            }

          });
        }
      });
    }, error => {
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
    protocol.values.push({ content: '', suppliers: [] });

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
    _.each(self.suppliers, function (supplier) {
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

  checkedAllSuppliers(protocol) {
    return this.suppliers.length === protocol.selectedSuppliers.length;
  }

  onSelectionAll(protocol, value) {
    let self = this;

    if (this.checkedAllSuppliers(protocol)) {
      protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, value.suppliers);
      value.suppliers = [];
    } else {
      _.each(self.suppliers, function (supplier) {
        if (self.allowedSelection(supplier.idSupplier, protocol)) {
          value.suppliers.push(supplier.idSupplier);
          protocol.selectedSuppliers.push(supplier.idSupplier);
        }
      });
    }
  }

  hideAdd(protocol) {
    return this.suppliers.length === protocol.value.selectedSuppliers.length ||
      this.suppliers.length === protocol.value.values.length ||
      (protocol.value.values.length === 3 && (protocol.value.label === 'Shipping Frecuency' || protocol.value.label === 'Shipping Method'));
  }
}
