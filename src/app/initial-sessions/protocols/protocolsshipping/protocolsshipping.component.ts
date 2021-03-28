import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Protocol } from '../../../shared/models/protocol';
import { FormBuilder } from '@angular/forms';
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
  protocolsSave: Array<Protocol> = new Array;
  copyProtocolForms: Array<any> = new Array;
  protocolForms: Array<any> = new Array;
  suppliers: Array<any> = new Array;
  listShippingMethod = ['2nd day', 'Overnight', 'Overnight AM', 'Ground'];
  listBiweekly = ['15', '30'];
  listWeekly = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  currentUser: any;
  @Output() emitEventShipping: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
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
    this.copyProtocolForms = JSON.parse(localStorage.getItem(this.currentUser.idUser + 'copyProtocolForms'));
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.findByUser$(this.currentUser.idUser).subscribe(res => {
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
      this.spinner.hide();
    }, error => {
      console.log('error', error);
    });
  }

  newProtocols() {
    let protocols = [
      // {label: 'ACC Number'                           , values:[{content: ''}], placeHolder:'Enter ACC Number'},
      // {label: 'Country'                              , values:[{content: ''}], placeHolder:'Enter Country'},
      // {label: 'Business Name'                        , values:[{content: ''}], placeHolder:'Enter Business Name'},
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
        protocolNew.clientId = self.currentUser.idUser;
        protocolNew.supplierId = supplier.idSupplier;

        self.protocolsSave.push(protocolNew);
      });
    });
  }

  save() {
    this.buildProtocols();
    let self = this;
    this.spinner.show();
    this.protocolClientService.remove$(this.currentUser.idUser).subscribe(resRem => {
      if (resRem.code === CodeHttp.ok) {
        _.each(this.protocolsSave, function (protocol) {
          self.protocolClientService.update$(protocol).subscribe(res => {
          });
        });
        self.showMessage();
        self.sendReply();
        localStorage.setItem(this.currentUser.idUser + 'copyProtocolForms', JSON.stringify(self.protocolForms));
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
}
