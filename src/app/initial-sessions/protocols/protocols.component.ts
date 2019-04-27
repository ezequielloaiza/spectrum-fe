import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})
export class ProtocolsComponent implements OnInit {

  modeEdit = true;
  form: FormGroup;
  protocols: Array<any> = new Array;
  protocolsCopy: Array<any> = new Array;
  suppliers: Array<any> = new Array;

  constructor(private formBuilder: FormBuilder) { }

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
      {label: 'ACC Number'        , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter ACC Number'},
      {label: 'Country'           , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Country'},
      {label: 'Businness Name'    , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Business Name'},
      {label: 'Recipient'         , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Recipient'},
      {label: 'Shipping Address'  , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Shipping Address'},
      {label: 'Shipping Frecuency', values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Shipping Frecuency'},
      {label: 'Shipping Method'   , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Shipping Method'},
      {label: 'Acount Number'     , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Account Number'},
      {label: 'Shipping Details'  , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Shipping Details'},
      {label: 'Comments'          , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Comments'},
      {label: 'Email Comments'    , values:[{content: '', suppliers: []}], selectedSuppliers: [], placeHolder:'Enter Email Comments'}
    ];
  }

  loadSuppliers() {
    this.suppliers = [{idSupplier: 1, name:'Markennovy'},
                      {idSupplier: 2, name:'Europa'},
                      {idSupplier: 3, name:'Elipsys'},
                      {idSupplier: 4, name:'Euclid'},
                      {idSupplier: 5, name:'Magic Look'},
                      {idSupplier: 6, name:'Blue Light'},
                      {idSupplier: 7, name:'Spectrum'}];
  }

  selectSupplier(idSupplier, protocol, value) {
    var index = _.indexOf(value.suppliers, idSupplier);
    if (index > -1) {
      value.suppliers.splice(index, 1);
      protocol.selectedSuppliers.splice(_.indexOf(protocol.selectedSuppliers, idSupplier), 1);
    } else if(this.allowedSelection(idSupplier, protocol)) {
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
    protocol.values.push({content:'', suppliers:[]});
  }

  removeValue(protocol, index) {
    protocol.selectedSuppliers = _.difference(protocol.selectedSuppliers, protocol.values[index].suppliers);
    protocol.values.splice(index, 1);
  }

  save() {
    this.protocolsCopy = JSON.parse(JSON.stringify(this.protocols));
    var protocols = this.protocolsCopy;
    _.each(protocols, function(protocol, index) {
      protocols[index] = _.omit(protocol, ['selectedSuppliers', 'placeHolder']);
    });
    //send to BE protocolsCopy
    console.log(this.protocolsCopy);
  }
}
