import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  //INIT NEW LAYOUT
  modeEdit = true;
  copyProtocolForms: Array<any> = new Array;
  protocolForms: Array<any> = new Array;
  currentUser: any;
  @Output() emitEventShipping: EventEmitter<any> = new EventEmitter<any>();
  //END NEW LAYOUT

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

  /*
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
  */

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
  */

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

  /*
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
  */

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

  /*
  checkedSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier);
  }
  */

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

  /*
  checkedAllSuppliers(protocol) {
    return this.suppliers.length === protocol.selectedSuppliers.length;
  }
  */

  /*
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
  */

  hideAdd(protocol) {
    return this.suppliers.length === protocol.value.selectedSuppliers.length ||
      this.suppliers.length === protocol.value.values.length ||
      (protocol.value.values.length === 3 && (protocol.value.label === 'Shipping Frecuency' || protocol.value.label === 'Shipping Method'));
  }

  //INIT NEW LAYOUT

  loadSuppliers() {
    this.supplierService.findByUser$(this.idClient).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.suppliers = _.orderBy(res.data, ['companyName']);
        if (!!this.copyProtocolForms && !!this.copyProtocolForms.length) {
          this.protocolForms = this.copyProtocolForms;
        } else {
          this.protocolForms = [{ supplier: { values: this.suppliers, selectedSuppliers: [] }, protocols: this.newProtocols() }];
        }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  newProtocols() {
    let protocols = [

      //Only view client
      { title: 'ACC Number', values: [{ label: 'ACC Number', content: ''}], placeHolder: 'Enter ACC Number'},
      { title: 'Country', values: [{ label: 'Country', content: ''}], placeHolder: 'Enter Country'},
      { title: 'Business Name ', values: [{ label: 'Business Name', content: ''}], placeHolder: 'Enter Business Name'},

      //Can edit client
      { title: 'Recipient', values: [{ label: 'Recipient', content: ''}], placeHolder: 'Enter recipient'},
      { title: 'Shipping Address', values: [{ label: 'Shipping Address', content: ''}], placeHolder: 'Enter shipping address'},
      { title: 'Shipping Frecuency', values: [{ label: 'Shipping Frecuency', content: '', showB: "false", showW: "false" }], placeHolder: 'Enter shipping frecuency'},
      { title: 'Shipping Method', values: [{ label: 'Shipping Method', content: ''}], placeHolder: 'Enter shipping method'},
      { title: 'Shipping Details', values: [{ label: 'Shipping Details', content: ''}], placeHolder: 'Enter shipping details'},
      { title: 'Account Number for Shipping Carrier', values: [{ label: 'Account Number for Shipping Carrier', content: ''}], placeHolder: 'Enter account number for shipping carrier'},
      { title: 'Comments', values: [{ label: 'Comments', content: ''}], placeHolder: 'Enter comments'},
      //  {label: 'Email Comments'                       , values:[{content: ''}],  placeHolder:'Enter Email Comments'}
    ];
    return protocols;
  }

  getSuppliersName(form) {
    if (!!form.supplier.selectedSuppliers.length) {
      let suppliersName = [];
      _.each(form.supplier.selectedSuppliers, function (supplier) {
        suppliersName = _.concat(suppliersName, supplier.companyName);
      });
      return suppliersName.join(', ');
    }
  }

  selectSupplier(form, supplier) {
    if (!_.find(form.supplier.selectedSuppliers, supplier)) {
      form.supplier.selectedSuppliers.push(supplier);
    } else {
      form.supplier.selectedSuppliers = _.filter(form.supplier.selectedSuppliers, function (supplierSelected) {
        return supplierSelected.idSupplier !== supplier.idSupplier;
      });
    }
  }

  disabledCheck(supplier, posForm) {
    return !!_.some(this.protocolForms, function(form, pos) {
      return pos !== posForm && !!_.find(form.supplier.selectedSuppliers, supplier);
    });
  }

  checkedSupplier(supplier) {
    return !!_.some(this.protocolForms, function(form) {
      return !!_.find(form.supplier.selectedSuppliers, supplier);
    });
  }

  selectionAll(posForm) {
    let self = this;
    if (this.checkedAllSupplierByForm(posForm)) {
      this.protocolForms[posForm].supplier.selectedSuppliers = [];
    } else {
      _.each(this.suppliers, function (supplier) {
        if (!self.disabledCheck(supplier, posForm)) {
          if (!_.find(self.protocolForms[posForm].supplier.selectedSuppliers, supplier)) {
            self.protocolForms[posForm].supplier.selectedSuppliers.push(supplier);
          }
        }
      });
    }
  }

  countSelectedDistinct(posForm) {
    let self = this;
    let countSelected = 0;
    _.each(this.suppliers, function(supplier) {
      _.each(self.protocolForms, function(form, pos) {
        if (pos !== posForm && !!_.find(form.supplier.selectedSuppliers, supplier)) {
          countSelected++;
        }
      });
    });
    return countSelected;
  }

  checkedAllSupplierByForm(posForm) {
    let selectedSuppliers = this.protocolForms[posForm].supplier.selectedSuppliers.length
    return !!selectedSuppliers && ((this.suppliers.length - this.countSelectedDistinct(posForm)) === selectedSuppliers);
  }

  suppliersSelected() {
    return _.sumBy(this.protocolForms, function(form) { return form.supplier.selectedSuppliers.length; });
  }

  checkedAllSuppliers() {
    return this.suppliers.length === this.suppliersSelected();
  }

  addForm() {
    this.protocolForms.push({ supplier: { values: this.suppliers, selectedSuppliers: [] }, protocols: this.newProtocols() });
  }

  removeForm(pos) {
    this.protocolForms.splice(pos, 1);
  }

  assignShippingFrecuency(protocol, type, pos) {
    switch (type) {
      case 1:
        protocol.values[pos].content = 'Monthly';
        protocol.values[pos].showW = 'false';
        protocol.values[pos].showB = 'false';
        break;
      case 2:
        protocol.values[pos].content = '';
        protocol.values[pos].showB = 'true';
        protocol.values[pos].showW = 'false';
        break;
      case 3:
        protocol.values[pos].content = '';
        protocol.values[pos].showW = 'true';
        protocol.values[pos].showB = 'false';
        break;
    }
  }

  buildProtocols() {
    const self = this;
    _.each(self.protocolForms, function (form) {
      _.each(form.supplier.selectedSuppliers, function (supplier) {
        let protocols = form.protocols;
        const protocolNew: Protocol = new Protocol();

        protocolNew.recipient = protocols[0].values[0].content;
        protocolNew.shippingAddress = protocols[1].values[0].content;
        protocolNew.shippingFrecuency = protocols[2].values[0].content;
        protocolNew.shippingMethod = protocols[3].values[0].content;
        protocolNew.shippingDetail = protocols[4].values[0].content;
        protocolNew.accountNumber = protocols[5].values[0].content;
        protocolNew.comment = protocols[6].values[0].content;
        protocolNew.clientId = self.idClient;
        protocolNew.supplierId = supplier.idSupplier;

        self.protocolsSave.push(protocolNew);
      });
    });
  }

  save() {
    this.buildProtocols();
    let self = this;
    this.spinner.show();
    this.protocolClientService.remove$(self.idClient).subscribe(resRem => {
      if (resRem.code === CodeHttp.ok) {
        _.each(this.protocolsSave, function (protocol) {
          self.protocolClientService.update$(protocol).subscribe(res => {
          });
        });
        self.showMessage();
        self.sendReply();
        localStorage.setItem(self.idClient + 'copyProtocolForms', JSON.stringify(self.protocolForms));
      }
    });
  }

  showMessage() {
    this.spinner.hide();
    this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
      this.notification.success('', res);
    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(false);
    this.emitEventShipping.emit(fResponse);
    return fResponse;
  }


  formIsValid() {
    if (!this.suppliersSelected()) {
      return false;
    }
    let valid = true;
    _.each(this.protocolForms, function (form) {
      if (!form.supplier.selectedSuppliers.length) {
        valid = false;
        return valid;
      };
      if (_.every(form.protocols, function (protocol) { return protocol.values[0].content === ''})) {
        valid = false;
        return valid;
      }
    });
    return valid;
  }

  skip() {
    this.sendReply();
  }

  hiddenRemove() {
    return this.protocolForms.length < 2;
  }

  hiddenNewForm() {
    let countSelectedSuppliers = _.sumBy(this.protocolForms, function(form) {
      return form.supplier.selectedSuppliers.length;
    });

    return countSelectedSuppliers === this.suppliers.length || (this.suppliers.length - countSelectedSuppliers) === this.protocolForms.length;
  }

  //END NEW LAYOUT
}
