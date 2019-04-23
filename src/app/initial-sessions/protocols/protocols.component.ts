import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})
export class ProtocolsComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  protocols: Array<any> = new Array;
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
      {label: 'ACC Number'        , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Country'           , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Businness Name'    , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Recipient'         , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Shipping Address'  , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Shipping Frecuency', values:[{content: 'xxx', suppliers: []}]},
      {label: 'Shipping Method'   , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Acount Number'     , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Shipping Details'  , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Comments'          , values:[{content: 'xxx', suppliers: []}]},
      {label: 'Email Comments'    , values:[{content: 'xxx', suppliers: []}]}
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

  selectSupplier(idSupplier, protocolValue) {
    var index = _.indexOf(protocolValue.suppliers, idSupplier);
    if (index > -1) {
      protocolValue.suppliers.splice(index, 1);
    } else {
      protocolValue.suppliers.push(idSupplier);
    }
  }

  supplierSelected(idSupplier, protocolValue) {
    return _.indexOf(protocolValue.suppliers, idSupplier) > -1;
  }
}
