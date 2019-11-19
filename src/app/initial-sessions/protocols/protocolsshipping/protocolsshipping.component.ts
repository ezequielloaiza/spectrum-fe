import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Protocol } from '../../../shared/models/protocol';
import { FormBuilder } from '@angular/forms';
import { CountryService } from '../../../shared/services';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ProtocolClientService } from '../../../shared/services/protocolClient/protocol-client.service';
import { Router } from '@angular/router';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestBed } from '@angular/core/testing';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-protocolsshipping',
  templateUrl: './protocolsshipping.component.html',
  styleUrls: ['./protocolsshipping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProtocolsshippingComponent implements OnInit {

  modeEdit = true;
  formulario: FormGroup;
  protocols: Array<any> = new Array;
  protocolsCopy: Array<any> = new Array;
  protocolsSave: Array<Protocol> = new Array;
  protocolsBySupplier: Array<Protocol> = new Array;
  protocolForms: Array<any> = new Array;
  validRecords = 0;
  suppliers: Array<any> = new Array;
  countries: Array<any> = new Array();
  listShippingMethod = ['2nd day', 'Overnight', 'Overnight AM', 'Ground'];
  listBiweekly = ['15', '30'];
  listWeekly = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  valueFrecuency: any;
  currentUser: any;
  suppliersSelected: Array<any> = new Array;
  validRecordsShipping = 0;
  @Input() lista: Array<any>;
  @Output() emitEventShipping: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
    private countryService: CountryService,
    private supplierService: SupplierService,
    private userStorageService: UserStorageService,
    private translate: TranslateService,
    private notification: ToastrService,
    public router: Router,
    private protocolClientService: ProtocolClientService,
    private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
  }

  ngOnInit() {
    this.protocolsCopy = this.lista;
    this.protocolsSave = this.protocols
    //this.initializeForm();
    this.initializeInfo();
    this.getCountry();
    this.valueFrecuency = 'ANY';
  }

  initializeForm() {
    this.formulario = this.formBuilder.group({
      accNumber: ['', [Validators.required]]
    });
  }

  initializeInfo() {
    this.supplierService.findByUser$(this.currentUser.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.suppliers = _.orderBy(res.data, ['companyName']);
        this.protocolForms = [{ supplier: { values: this.suppliers, selectedSuppliers: [] }, protocols: this.newProtocols() }];
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  newProtocols() {
    let protocols = [
      // {label: 'ACC Number'                           , values:[{content: ''}], placeHolder:'Enter ACC Number'},
      // {label: 'Country'                              , values:[{content: ''}], placeHolder:'Enter Country'},
      // {label: 'Business Name'                        , values:[{content: ''}], placeHolder:'Enter Business Name'},
      { title: 'Recipient', values: [{ label: 'Recipient', content: ''}], placeHolder: 'Enter recipient', id: 1 },
      { title: 'Shipping Address', values: [{ label: 'Shipping Address', content: ''}], placeHolder: 'Enter shipping address', id: 2 },
      { title: 'Shipping Frecuency', values: [{ label: 'Shipping Frecuency', content: '', showB: "false", showW: "false" }], placeHolder: 'Enter shipping frecuency', id: 3 },
      { title: 'Shipping Method', values: [{ label: 'Shipping Method', content: ''}], placeHolder: 'Enter shipping method', id: 4 },
      { title: 'Shipping Details', values: [{ label: 'Shipping Details', content: ''}], placeHolder: 'Enter shipping details', id: 5 },
      { title: 'Account Number for Shipping Carrier', values: [{ label: 'Account Number for Shipping Carrier', content: ''}], placeHolder: 'Enter account number for shipping carrier', id: 6 },
      { title: 'Comments', values: [{ label: 'Comments', content: ''}], placeHolder: 'Enter comments', id: 7 },
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
    _.each(this.suppliers, function (supplier) {
      !self.disabledCheck(supplier, posForm) && self.selectSupplier(self.protocolForms[posForm], supplier);
    });
  }

  checkedAllSupplierByForm(form) {
    return this.suppliers.length === form.supplier.selectedSuppliers.length;
  }

  checkedAllSuppliers() {
    let selectedLength =_.sumBy(this.protocolForms, function(form) { return form.supplier.selectedSuppliers.length; });
    return this.suppliers.length === selectedLength;
  }

  addForm() {
    this.protocolForms.push({ supplier: { values: this.suppliers, selectedSuppliers: [] }, protocols: this.newProtocols() });
  }

  removeForm(pos) {
    this.protocolForms = _.slice(this.protocolForms, 0, pos);
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















  ///////////////////////////////////////////////////////////////////////////////////////////////

  allowedSelection(idSupplier, protocol) {
    return _.indexOf(protocol.selectedSuppliers, idSupplier) === -1;
  }

  hiddenSupplier(protocol, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier)
  }

  removeValue(protocol, index) {
    protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, protocol.values[index].suppliers);
    protocol.values.splice(index, 1);
  }

  getCountry() {
    this.countryService.findAll$().subscribe(res => {
      this.countries = res.data;
    });
  }



  /*
  save() {
    this.buildProtocols();
    let listProtocolsShipping = this.protocolsSave;
    let serviceShipping = this.protocolClientService;
    let recordsShipping = this.validRecordsShipping;
    let self = this;
    let userId = this.currentUser.idUser;
    if (listProtocolsShipping.length > 0) {
      this.spinner.show();
      serviceShipping.remove$(userId).subscribe(resRem => {
        if (resRem.code === CodeHttp.ok) {
          _.each(listProtocolsShipping, function (protocolShipping) {
            serviceShipping.update$(protocolShipping).subscribe(res => {
              recordsShipping++;
              self.showMessage(recordsShipping);
            });
          });
        }
      });
    } else {
      this.sendReply();
    }
  }
  */

  save() {
    this.buildProtocols(null);
    let self = this;
    let serviceShipping = this.protocolClientService;
    if (this.protocolsBySupplier.length > 0) {
      this.spinner.show();
      serviceShipping.remove$(self.currentUser.idUser).subscribe(resRem => {
        if (resRem.code === CodeHttp.ok) {
          _.each(this.protocolsBySupplier, function (protocolSupplier) {
            serviceShipping.update$(protocolSupplier).subscribe(res => {
            });
          });
          self.showMessage();
          self.sendReply();
        }
      });
    } else {
      self.sendReply();
    }
  }

  /*
  showMessage(records) {
    this.validRecords = records;
    if (this.validRecords === this.protocolsSave.length) {
      this.spinner.hide();
      this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
        this.notification.success('', res);
        this.sendReply();
      });
    }
  }
  */

  showMessage() {
    this.spinner.hide();
    this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
      this.notification.success('', res);
    });
  }

  /*
  buildProtocols() {
    const protocolsSuppliersAux: Array<Protocol> = new Array;
    const protocolsSuppliers = this.protocolsSave;
    let protocolsClient = [];
    this.protocolsCopy = JSON.parse(JSON.stringify(this.protocols));
    let protocols = this.protocolsCopy;
    let userId = this.currentUser.idUser;
    //Protocolos seleccionados
    _.each(protocolsSuppliers, function (item) {
      const protocolAux: Protocol = new Protocol();
      _.each(protocols, function (protocol, index) {
        // Values
        _.each(protocol.values, function (itemValue) {
          // Suppliers
          _.each(itemValue.suppliers, function (supplier) {
            if (item.supplierId === supplier) {
              protocolAux.valid = true;
              protocolAux.supplierId = supplier;
              protocolAux.clientId = userId; //cambiar cuando se una completo
              switch (protocol.id) {
                case 1:
                  protocolAux.recipient = itemValue.content;
                  break;
                case 2:
                  protocolAux.shippingAddress = itemValue.content;
                  break;
                case 3:
                  protocolAux.shippingFrecuency = itemValue.content;
                  break;
                case 4:
                  protocolAux.shippingMethod = itemValue.content;
                  break;
                case 5:
                  protocolAux.shippingDetail = itemValue.content;
                  break;
                case 6:
                  protocolAux.accountNumber = itemValue.content;
                  break;
                case 7:
                  protocolAux.comment = itemValue.content;
                  break;
              }
            }
          });
        });
      });
      if (protocolAux.valid) {
        protocolsSuppliersAux.push(protocolAux);
      }
    });
    this.protocolsSave = JSON.parse(JSON.stringify(protocolsSuppliersAux));
    //console.log(this.protocolsCopy);
  }
  */

  buildProtocols(protocol) {
    const self = this;
    _.each(self.suppliersSelected, function (supplier) {
      if (!protocol) {
        const protocol: Protocol = new Protocol();
        //protocol.accNumber: string;
        //protocol.businessName: string;
        protocol.recipient = self.protocols[0].values[0].content;
        protocol.shippingAddress = self.protocols[1].values[0].content;
        //protocol.dmv: string;
        protocol.shippingFrecuency = self.protocols[2].values[0].content;
        protocol.shippingMethod = self.protocols[3].values[0].content;
        protocol.shippingDetail = self.protocols[4].values[0].content;
        protocol.accountNumber = self.protocols[5].values[0].content;
        protocol.comment = self.protocols[6].values[0].content;
        //emailComment: string;
        protocol.clientId = self.currentUser.idUser;
        protocol.supplierId = supplier.idSupplier;
        //country: number;
        //countryName: string;
        //valid: boolean;
        if (!!self.protocolsBySupplier.length) {
          const findProtocol = _.find(self.protocolsBySupplier, protocol);
          if (findProtocol === undefined) {
            self.protocolsBySupplier = _.concat(self.protocolsBySupplier, protocol);
          } else {
            self.protocolsBySupplier = _.filter(self.protocolsBySupplier, function (protocolBySupplier) {
              return protocolBySupplier.supplierId !== protocol.supplierId;
            });
          }
        } else {
          self.protocolsBySupplier = _.concat(self.protocolsBySupplier, protocol);
        }
      } else {
        //protocol.accNumber: string;
        //protocol.businessName: string;
        self.protocols[0].values[0].content = protocol.recipient;
        self.protocols[1].values[0].content = protocol.shippingAddress;
        //protocol.dmv: string;
        self.protocols[2].values[0].content = protocol.shippingFrecuency;
        self.protocols[3].values[0].content = protocol.shippingMethod;
        self.protocols[4].values[0].content = protocol.shippingDetail;
        self.protocols[5].values[0].content = protocol.accountNumber;
        self.protocols[6].values[0].content = protocol.comment;
        //emailComment: string;
        //protocol.clientId = self.currentUser.idUser;
        //protocol.supplierId = supplier.idSupplier;
        //country: number;
        //countryName: string;
        //valid: boolean;
      }
    });
  }

  public sendReply(): any {
    const fResponse = [];
    fResponse.push(this.protocolsSave);
    fResponse.push(false);
    fResponse.push(this.protocolsCopy);
    this.emitEventShipping.emit(fResponse);
    return fResponse;
  }

  Skip() {
    this.buildProtocols(null);
    this.protocolsCopy = new Array;
    this.sendReply();
  }

  /*
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
  */

  disabledSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier) && !_.includes(value.suppliers, supplier.idSupplier);
  }

  /*
  checkedSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier);
  }
  */


  formIsValid() {
    let valid = true;
    let protocols = JSON.parse(JSON.stringify(this.protocols));
    _.each(protocols, function (protocol, index) {
      _.each(protocol.values, function (itemValue) {
        if (itemValue.content !== '' && itemValue.suppliers.length === 0) {
          valid = false;
          return valid;
        }
      });
    });
    return valid;
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

  /*
  checkedAllSuppliers(protocol) {
    return this.suppliers.length === protocol.selectedSuppliers.length;
  }
  */

  hideAdd(protocol) {
    return this.suppliers.length === protocol.selectedSuppliers.length ||
      protocol.values.length === this.suppliers.length ||
      (protocol.values.length === 3 && (protocol.label === 'Shipping Frecuency' || protocol.label === 'Shipping Method'));
  }
}
