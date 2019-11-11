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

@Component({
  selector: 'app-protocolsshipping',
  templateUrl: './protocolsshipping.component.html',
  styleUrls: ['./protocolsshipping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProtocolsshippingComponent implements OnInit {

  modeEdit = true;
  form: FormGroup;
  protocols: Array<any> = new Array;
  protocolsCopy: Array<any> = new Array;
  protocolsSave: Array<Protocol> = new Array;
  protocolsBySupplier: Array<Protocol> = new Array;
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
    this.initializeForm();
    this.loadFields();
    this.loadSuppliers();
    this.getProtocols();
    this.getCountry();
    this.valueFrecuency = 'ANY';
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      accNumber: ['', [Validators.required]]
    });
  }

  /*
  loadFields() {
    if (this.protocolsCopy.length === 0) {
      this.protocols = [
        // {label: 'ACC Number'                           , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter ACC Number'},
        // {label: 'Country'                              , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Country'},
        // {label: 'Business Name'                        , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Business Name'},
        {label: 'Recipient'                            , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter recipient',id:1},
        {label: 'Shipping Address'                     , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter shipping address',id:2},
        {label: 'Shipping Frecuency'                   , values:[{content: '', suppliers: [],showB:"false",showW:"false"}], selectedSuppliers: [], placeHolder:'Enter shipping frecuency',id:3},
        {label: 'Shipping Method'                      , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter shipping method',id:4},
        {label: 'Shipping Details'                     , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter shipping details',id:5},
        {label: 'Account Number for Shipping Carrier'  , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter account number for shipping carrier',id:6},
        {label: 'Comments'                             , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter comments',id:7},
        //  {label: 'Email Comments'                       , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Email Comments'}
        ];
    } else {
      this.protocols = this.protocolsCopy;
    }
  }
  */

  loadFields() {
    //if (this.protocolsCopy.length === 0) {
    this.protocols = [
      // {label: 'ACC Number'                           , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter ACC Number'},
      // {label: 'Country'                              , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Country'},
      // {label: 'Business Name'                        , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Business Name'},
      { title: 'Recipient', values: [{ label: 'Recipient', content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter recipient', id: 1 },
      { title: 'Shipping Address', values: [{ label: 'Shipping Address', content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter shipping address', id: 2 },
      { title: 'Shipping Frecuency', values: [{ label: 'Shipping Frecuency', content: '', suppliers: [], showB: "false", showW: "false" }], selectedSuppliers: [], placeHolder: 'Enter shipping frecuency', id: 3 },
      { title: 'Shipping Method', values: [{ label: 'Shipping Method', content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter shipping method', id: 4 },
      { title: 'Shipping Details', values: [{ label: 'Shipping Details', content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter shipping details', id: 5 },
      { title: 'Account Number for Shipping Carrier', values: [{ label: 'Account Number for Shipping Carrier', content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter account number for shipping carrier', id: 6 },
      { title: 'Comments', values: [{ label: 'Comments', content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter comments', id: 7 },
      //  {label: 'Email Comments'                       , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Email Comments'}
    ];
    //} else {
    //  this.protocols = this.protocolsCopy;
    //}
  }

  loadSuppliers() {
    this.supplierService.findByUser$(this.currentUser.idUser).subscribe(res => {
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

  selectSupplier(supplier) {
    if (this.suppliersSelected.length > 0) {
      const findSupplier = _.find(this.suppliersSelected, supplier);
      if (findSupplier === undefined) {
        this.suppliersSelected = _.concat(this.suppliersSelected, supplier);
      } else {
        this.suppliersSelected = _.filter(this.suppliersSelected, function (supplierSelected) {
          return supplierSelected.idSupplier !== supplier.idSupplier;
        });
      }
    } else {
      this.suppliersSelected = _.concat(this.suppliersSelected, supplier);
    }
  }

  allowedSelection(idSupplier, protocol) {
    return _.indexOf(protocol.selectedSuppliers, idSupplier) === -1;
  }

  supplierSelected(idSupplier, protocolValue) {
    return _.indexOf(protocolValue.suppliers, idSupplier) > -1;
  }

  /*
  addValue(protocol) {
    protocol.values.push({ content: '', suppliers: [] });
  }
  */

  addForm() {

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
      _.each(this.protocolsBySupplier, function (protocolSupplier) {
        self.spinner.show();
        serviceShipping.update$(protocolSupplier).subscribe(res => {
          self.showMessage();
          self.sendReply();
        });
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

  /*
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
  */

  getProtocols() {
    let self = this;
    self.protocolClientService.allByUser$(this.currentUser.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        if (res.data.length > 0) {
          _.each(res.data, function (protocol) {
            self.selectSupplier(protocol.supplier);
            self.buildProtocols(protocol);
          });
        }
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
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
    this.loadFields();
    this.getProtocols();
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

  getSuppliersName() {
    if (!!this.suppliersSelected.length) {
      let suppliersName = [];
      _.each(this.suppliersSelected, function(supplierSelected) {
        suppliersName = _.concat(suppliersName, supplierSelected.companyName);
      });
      return suppliersName.join(', ');
    }
  }

  disabledSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier) && !_.includes(value.suppliers, supplier.idSupplier);
  }

  /*
  checkedSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier);
  }
  */


  checkedSupplier(supplier) {
    if (!!this.suppliersSelected.length) {
      //let findSupplier;
      _.each(this.suppliersSelected, function (supplierSelected) {
        return supplierSelected.idSupplier === supplier.idSupplier;
      });
      //return _.includes(_.map(this.suppliersSelected, 'idSupplier'),  supplier.idSupplier);
      /*
      findSupplier = _.find(this.suppliersSelected, function (supplierSelected) {
        return supplierSelected.idSupplier === supplier.idSupplier;
      });
      debugger
      return !!findSupplier;
      */
    }
  }

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

  checkedAllSuppliers() {
    return this.suppliers.length === this.suppliersSelected.length;
  }

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

  onSelectionAll() {
    let self = this;
    _.each(this.suppliers, function (supplier) {
      self.selectSupplier(supplier);
    })
  }

  hideAdd(protocol) {
    return this.suppliers.length === protocol.selectedSuppliers.length ||
      protocol.values.length === this.suppliers.length ||
      (protocol.values.length === 3 && (protocol.label === 'Shipping Frecuency' || protocol.label === 'Shipping Method'));
  }
}
