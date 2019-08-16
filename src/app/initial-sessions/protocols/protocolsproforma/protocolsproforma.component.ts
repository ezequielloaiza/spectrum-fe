import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Protocol } from '../../../shared/models/protocol';
import { FormBuilder } from '@angular/forms';
import { CountryService } from '../../../shared/services';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { UserStorageService } from '../../../http/user-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProtocolClientService } from '../../../shared/services/protocolClient/protocol-client.service';
import { Validators } from '@angular/forms';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import * as _ from 'lodash';
import { ProtocolProformaService } from '../../../shared/services/protocolProforma/protocol-proforma.service';
import { ProtocolProforma } from '../../../shared/models/protocolProforma';
import { ProtocolsComponent } from '../protocols.component';

@Component({
  selector: 'app-protocolsproforma',
  templateUrl: './protocolsproforma.component.html',
  styleUrls: ['./protocolsproforma.component.scss']
})
export class ProtocolsproformaComponent implements OnInit {


  modeEdit = true;
  form: FormGroup;
  protocols: Array<any> = new Array;
  protocolsCopy: Array<any> = new Array;
  protocolsSave: Array<ProtocolProforma> = new Array;
  validRecords = 0;
  suppliers: Array<any> = new Array;
  countries: Array<any> = new Array();
  currentUser: any;
  vSkip = false;
  vBack = true;
  @Input() lista: Array<any>;
  @Output() emitEventProforma: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
    private countryService: CountryService,
    private supplierService: SupplierService,
    private userStorageService: UserStorageService,
    private translate: TranslateService,
    private notification: ToastrService,
    public router: Router,
    private protocolProformaService: ProtocolProformaService) {
      this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    }

  ngOnInit() {
    this.protocolsCopy = this.lista;
    this.initializeForm();
    this.loadFields();
    this.loadSuppliers();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
    accNumber: ['', [ Validators.required]]
    });
  }

  loadFields() {
    if (this.protocolsCopy.length === 0) {
      this.protocols = [
        {label: 'Spectrum Proforma'                                                   , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Spectrum Proforma',id:1},
        {label: 'Additional Documents'                                                , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter additional documents',id:2},
        {label: 'Comments'                                                            , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter comments',id:3},
        {label: 'HS Code'                                                             , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter hs code',id:4},
        {label: 'Documentation that must accompany the delivery and proforma invoice' , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter documentation that must accompany the delivery and proforma invoice',id:5},
        ];
    } else {
      this.protocols = this.protocolsCopy;
    }
  }

  loadSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
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
   /* if (protocol.label === 'Spectrum Proforma') {
      protocol.values.push({content: 'false', suppliers: []});
    } else {*/
      protocol.values.push({content: '', suppliers: []});
   // }
  }

  removeValue(protocol, index) {
    protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, protocol.values[index].suppliers);
    protocol.values.splice(index, 1);
  }

  buildProtocols() {
      const protocolsSuppliersAux: Array<ProtocolProforma> = new Array;
      const protocolsSuppliers = this.protocolsSave;
      this.protocolsCopy = JSON.parse(JSON.stringify(this.protocols));
      let protocols = this.protocolsCopy;
      let userId = this.currentUser.idUser;
      //Protocolos seleccionados
      _.each(protocolsSuppliers, function(item) {
      const protocolProforma: ProtocolProforma = new ProtocolProforma();
      _.each(protocols, function(protocol, index) {
      // Values
      _.each(protocol.values, function(itemValue) {
        // Suppliers
      _.each(itemValue.suppliers, function(supplier) {
            if (item.supplierId === supplier ) {
                protocolProforma.valid = true;
                protocolProforma.supplierId = supplier;
                protocolProforma.clientId = userId;
                switch (protocol.id) {
                  case 1:
                    protocolProforma.spectrumProforma = itemValue.content;
                    break;
                  case 2:
                    protocolProforma.additionalDocuments = itemValue.content;
                    break;
                  case 3:
                    protocolProforma.comments = itemValue.content;
                    break;
                  case 4:
                    protocolProforma.tariffCodes = itemValue.content;
                    break;
                  case 5:
                    protocolProforma.documentation = itemValue.content;
                    break;
                }
            }
          });
        });
      });
      if (protocolProforma.valid) {
      protocolsSuppliersAux.push(protocolProforma);
      }
      });
      this.protocolsSave = JSON.parse(JSON.stringify(protocolsSuppliersAux));
     // console.log(this.protocolsCopy);
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

  public save(): any {
    this.buildProtocols();
    const fResponse = [];
    this.vSkip = false;
    fResponse.push(this.protocolsSave);
    fResponse.push(this.vSkip);
    fResponse.push(false);
    fResponse.push(this.protocolsCopy);
    this.emitEventProforma.emit(fResponse);
    return fResponse;
  }

  back() {
    this.buildProtocols();
    const fResponse = [];
    this.vBack = true;
    fResponse.push(this.protocolsSave);
    fResponse.push(null);
    fResponse.push(this.vBack);
    fResponse.push(this.protocolsCopy);
    this.emitEventProforma.emit(fResponse);
    return fResponse;
  }

  skip() {
    this.protocolsCopy = new Array;
    this.loadFields();
    this.getProtocols();
    const fResponse = [];
    this.vSkip = true;
    fResponse.push(this.protocolsSave);
    fResponse.push(this.vSkip);
    fResponse.push(this.vBack);
    fResponse.push(this.protocolsCopy);
    this.emitEventProforma.emit(fResponse);
    return fResponse;
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

  formIsValid() {
    let valid = true;
    let protocols = JSON.parse(JSON.stringify(this.protocols));
    _.each(protocols, function(protocol, index) {
      _.each(protocol.values, function(itemValue) {
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
