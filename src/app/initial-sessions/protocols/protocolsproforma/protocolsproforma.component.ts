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
  @Output() emitEventProforma: EventEmitter<any> = new EventEmitter<any>();
  //@Input() protocolsParentIn: ProtocolsComponent;

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
    this.protocols = [
    {label: 'Spectrum Proforma'                            , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Spectrum Proforma',id:1},
    {label: 'Additional Documents'                         , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Shipping Address',id:2},
    {label: 'Comments'                                     , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Comments',id:3},
    {label: 'Tariff Codes'                                 , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Shipping Frecuency',id:4},
    ];
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
    let skip = false;
    fResponse.push(this.protocolsSave);
    fResponse.push(skip);
    this.emitEventProforma.emit(fResponse);
    return fResponse;
  }

  back() {
    debugger
  }

  skip() {
    debugger
    this.loadFields();
    this.getProtocols();
    const fResponse = [];
    let skip = true;
    fResponse.push(this.protocolsSave);
    fResponse.push(skip);
    this.emitEventProforma.emit(fResponse);
    return fResponse;
  }

}
