import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../../../shared/enum/role.enum';
import { UserStorageService } from '../../../http/user-storage.service';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { ProtocolProformaService } from '../../../shared/services/protocolProforma/protocol-proforma.service';
import { ProtocolProforma } from '../../../shared/models/protocolProforma';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';

@Component({
  selector: 'app-protocol-proforma',
  templateUrl: './protocol-proforma.component.html',
  styleUrls: ['./protocol-proforma.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProtocolProformaComponent implements OnInit {

  protocol: ProtocolProforma = new ProtocolProforma();
  suppliers: Array<any> = new Array();
  countries: Array<any> = new Array();
  allProtocols: Array<any> = new Array();
  //protocols: Array<any> = new Array();
  protocols: any;
  protocolsAux: any;
  protocolForm: FormGroup;
  edit = false;
  editField = false;
  viewField = false;
  user: any;
  idClient: any;
  saving = false;
  download = false;
  saveAllProtocol = false;
  today: Date = new Date();

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private translate: TranslateService,
              private spinner: NgxSpinnerService,
              private notification: ToastrService,
              private supplierService: SupplierService,
              private protocolProformaService: ProtocolProformaService,
              private userStorageService: UserStorageService) { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    this.loadFields();
    this.initializeForm();
    this.getSupplier();
    this.getIdClient();
    this.getAllProtocolByUser();
  }

  initializeForm() {
    this.protocolForm = this.fb.group({
      id: [null],
      spectrumProforma: [false],
      additionalDocuments: [null],
      outputs: [null],
      protocolSpectrum: [null],
      maximumAmount: [null],
      documentation: [null],
      fixedPrices: [null],
      comments: [[]],
      emailComment: [null],
      tariffCodes: [null],
      clientId: [null],
      supplierId: [null]
    });
  }

  getIdClient() {
    if (this.user.role.idRole === Role.User) {
      this.idClient = this.user.userResponse.idUser;
      this.editField = false;
      this.viewField = false;
    } else {
      this.idClient = this.route.parent.snapshot.paramMap.get('id');
      this.editField = true;
      this.viewField = true;
    }
  }

  getSupplier() {
    this.supplierService.findAll$().subscribe(res => {
      this.suppliers = _.orderBy(res.data, ['companyName']);
      this.getProtocol(this.idClient, this.suppliers[0].idSupplier);
    });
  }

  getProtocol(clientId: any, supplierId: any) {
    this.protocolProformaService.findByClienSupplier$(clientId, supplierId).subscribe(res => {
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

  loadFields() {
    this.protocols = {
      aspectrumProforma: {label: 'Spectrum Proforma', values:[], selectedSuppliers: [], placeHolder:'Enter Spectrum Proforma',id:1},
      badditionalDocuments: {label: 'Additional Documents', values:[], selectedSuppliers: [], placeHolder:'Enter additional documents',id:2},
      comments: {label: 'Comments', values:[], selectedSuppliers: [], placeHolder:'Enter comments',id:3},
      tariffCodes: {label: 'HS Code', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:4},
      protocolSpectrum: {label: 'Protocol From Spectrum', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:5},
      outputs: {label: 'Outputs (Send information to Spectrum team)', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:6},
      maximumAmount: {label: 'Maximum Amount to Declare', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:7},
      documentation: {label: 'Documentation that must accompany the delivery and proforma invoice', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:8},
      fixedPrices: {label: 'Fixed Prices for Proforma Invoice', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:9},
      emailComment: {label: 'Email Comments', values:[], selectedSuppliers: [], placeHolder:'Enter tariff codes',id:10}
    };
  }

  getAllProtocolByUser() {
    this.loadFields();
    const self = this;
    this.protocolProformaService.allProtocolByUserId$(this.idClient).subscribe(res => {
      _.each(res.data, function(protocol, key) {
        _.each(protocol, function(obj, _key) {
          const clave = _key === 'spectrumProforma' ? 'aspectrumProforma' : (_key === 'additionalDocuments' ? 'badditionalDocuments' : _key);
          if (!!self.protocols[clave]) {
            if (protocol[_key] !== '' && protocol[_key] !== null) {
              if (self.protocols[clave].values.length === 0) {
                const object = {content: protocol[_key], suppliers: [protocol.supplier.idSupplier], ids: [{idSupplier: protocol.supplier.idSupplier}]};
                self.protocols[clave].values.push(object);
                self.protocols[clave].selectedSuppliers.push(protocol.supplier.idSupplier);
              } else {
                const index = _.findIndex(self.protocols[clave].values, function(value: any) {
                  return value.content === protocol[_key];
                });
                if (index !== -1) {
                  self.protocols[clave].values[index].suppliers.push(protocol.supplier.idSupplier);
                  self.protocols[clave].values[index].ids.push({idSupplier: protocol.supplier.idSupplier});
                  self.protocols[clave].selectedSuppliers.push(protocol.supplier.idSupplier);
                } else {
                  const object = {content: protocol[_key], suppliers: [protocol.supplier.idSupplier], ids: [{idSupplier: protocol.supplier.idSupplier}]};
                  self.protocols[clave].values.push(object);
                  self.protocols[clave].selectedSuppliers.push(protocol.supplier.idSupplier);
                }
              }

            }
          }
        });
        self.protocolsAux = JSON.parse(JSON.stringify(self.protocols));
      });
    }, error => {

    })
  }

  checkedSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier);
  }

  disabledSupplier(protocol, value, supplier) {
    return !!_.includes(protocol.selectedSuppliers, supplier.idSupplier) && !_.includes(value.suppliers, supplier.idSupplier);
  }

  addValue(protocol) {
    protocol.values.push({content: '', suppliers: [], ids: [{idSupplier: null}]});
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

  removeValue(protocol, index) {
    protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, protocol.values[index].suppliers);
    protocol.values.splice(index, 1);
  }

  cancelAll() {
    this.edit = false;
    this.protocols = JSON.parse(JSON.stringify(this.protocolsAux));
  }

  saveAll() {
    const self = this;
    const protocolsProforma = [];
    this.saveAllProtocol = true;
    _.each(this.suppliers, function(supplier) {
      const protocolSave = {spectrumProforma: null, additionalDocuments: null, comments: null, tariffCodes: null, protocolSpectrum: null,
        outputs: null, maximumAmount: null, documentation: null, fixedPrices: null, emailComment: null, supplierId: null, clientId: null, id: null
      };
      protocolSave.supplierId = supplier.idSupplier;
      protocolSave.clientId = self.idClient;
      _.each(self.protocols, function(protocol, key) {
        const _key = key === 'aspectrumProforma' ? 'spectrumProforma' : (key === 'badditionalDocuments' ? 'additionalDocuments' : key);
        _.each(protocol.values, function(value) {
          if (_.includes(value.suppliers, supplier.idSupplier)) {
            const obj = _.find(value.ids, ['idSupplier', supplier.idSupplier])
            protocolSave[_key] = value.content;
          }
        });
      });
      protocolsProforma.push(JSON.parse(JSON.stringify(protocolSave)));
    });
    this.protocolProformaService.saveAll$(protocolsProforma).subscribe(res => {
      this.translate.get('Successfully Updated', { value: 'Successfully Updated' }).subscribe((res: string) => {
        this.notification.success('', res);
      });
      this.saveAllProtocol = false;
      this.edit = false;
    }, error => {
      this.saveAllProtocol = false;
      this.edit = false;
    });
  }

  validContent(protocol, pos) {
    let valid = true;
    if (protocol.values[pos].content === '') {
         valid = false;
    }
    return valid;
  }

  update() {
    this.saving = true;
    if (this.protocolForm.value.spectrumProforma == null) {
      this.spectrumProforma.setValue(false);
    }
    this.protocolProformaService.update$(this.protocolForm.value).subscribe(res => {
      this.protocol = res;
      this.download = true;
      this.setProtocol(res);
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

  beforeChangeProforma($event: NgbTabChangeEvent) {
    if ($event.activeId !== $event.nextId) {
      if (Number($event.nextId) === 1000) {
        this.getAllProtocolByUser();
      } else {
        this.edit = false;
        this.getProtocol(this.idClient, $event.nextId);
      }
    }
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

  checkSuppliers(protocol, pos) {
    let show = true;
    if (protocol.values[pos].suppliers.length > 0) {
      show = false;
    }
    return show;
  }

  setProtocol(protocol: ProtocolProforma) {
    if (protocol.id !== null) {
      this.download = true;
    } else {
      this.download = false;
    }
    this.id.setValue(protocol.id);
    this.spectrumProforma.setValue(protocol.spectrumProforma);
    this.additionalDocuments.setValue(protocol.additionalDocuments);
    this.outputs.setValue(protocol.outputs);
    this.protocolSpectrum.setValue(protocol.protocolSpectrum);
    this.maximumAmount.setValue(protocol.maximumAmount);
    this.documentation.setValue(protocol.documentation);
    this.fixedPrices.setValue(protocol.fixedPrices);
    this.comments.setValue(protocol.comments);
    this.emailComment.setValue(protocol.emailComment);
    this.tariffCodes.setValue(protocol.tariffCodes);
    this.clientId.setValue(protocol.clientId);
    this.supplierId.setValue(protocol.supplierId);
  }

  get id() {
    return this.protocolForm.get('id');
  }
  get spectrumProforma() {
    return this.protocolForm.get('spectrumProforma');
  }
  get additionalDocuments() {
    return this.protocolForm.get('additionalDocuments');
  }
  get outputs() {
    return this.protocolForm.get('outputs');
  }
  get protocolSpectrum() {
    return this.protocolForm.get('protocolSpectrum');
  }
  get maximumAmount() {
    return this.protocolForm.get('maximumAmount');
  }
  get documentation() {
    return this.protocolForm.get('documentation');
  }
  get fixedPrices() {
    return this.protocolForm.get('fixedPrices');
  }
  get comments() {
    return this.protocolForm.get('comments');
  }
  get emailComment() {
    return this.protocolForm.get('emailComment');
  }
  get tariffCodes() {
    return this.protocolForm.get('tariffCodes');
  }
  get clientId() {
    return this.protocolForm.get('clientId');
  }
  get supplierId() {
    return this.protocolForm.get('supplierId');
  }

  assignSpectrumProforma(value: number) { this.protocolForm.get('spectrumProforma').setValue(value); }

  downloadProtocol() {
    this.spinner.show();
    this.protocolProformaService.reportProtocolById$(this.protocol.id, this.user.role.idRole).subscribe(res => {
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
      const filename = 'ProtocolProforma-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
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

  checkedAllSuppliers(protocol) {
    return this.suppliers.length === protocol.selectedSuppliers.length;
  }

  onSelectionAll(protocol, value) {
    let self = this;

    if (this.checkedAllSuppliers(protocol)) {
      protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, value.suppliers);
      value.suppliers = [];
    } else {
      _.each(self.suppliers, function(supplier) {
        if (self.allowedSelection(supplier.idSupplier, protocol)) {
          value.suppliers.push(supplier.idSupplier);
          protocol.selectedSuppliers.push(supplier.idSupplier);
        }
      });
    }
  }
}
