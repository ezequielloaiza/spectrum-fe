import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { CountryService } from '../../shared/services';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { Protocol } from '../../shared/models/protocol';
import { UserStorageService } from '../../http/user-storage.service';
import { ProtocolClientService } from '../../shared/services/protocolClient/protocol-client.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ProtocolProformaService } from '../../shared/services/protocolProforma/protocol-proforma.service';
import { ProtocolsproformaComponent } from './protocolsproforma/protocolsproforma.component';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})

export class ProtocolsComponent implements OnInit {

  protocolsShippingSave: Array<Protocol> = new Array;
  protocolsShippingCopy: Array<Protocol> = new Array;
  protocolsProformaSave: Array<Protocol> = new Array;
  protocolsProformaCopy: Array<Protocol> = new Array;
  currentUser: any;
  showShipping = true;
  validRecordsProforma = 0;
  @ViewChild(ProtocolsproformaComponent) protocolProforma:ProtocolsproformaComponent;

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private supplierService: SupplierService,
              private userStorageService: UserStorageService,
              private translate: TranslateService,
              private notification: ToastrService,
              public router: Router,
              private protocolClientService: ProtocolClientService,
              private protocolProformaService: ProtocolProformaService) {
                this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
              }

  ngOnInit() {
  }

  getProtocolsShipping(listProtocols: any): void {
    this.protocolsShippingSave = listProtocols[0];
    this.showShipping = listProtocols[1];
    this.protocolsShippingCopy = listProtocols[2];
  }

  getProtocolsProforma(listProtocols: any): void {
    this.protocolsProformaSave = listProtocols[0];
    let skip = listProtocols[1];
    this.showShipping = listProtocols[2];
    this.protocolsProformaCopy = listProtocols[3];
    if (!skip) {
      this.save();
    }
    if (skip) {
      this.router.navigate(['/dashboard']);
    }
  }

  save() {
    const listProtocolsProforma = this.protocolsProformaSave;
    const serviceProforma = this.protocolProformaService;
    let recordsProforma = this.validRecordsProforma;
    let self = this;
    _.each(listProtocolsProforma, function(protocolProforma) {
        serviceProforma.update$(protocolProforma).subscribe(res => {
          recordsProforma++;
          self.showMessage(recordsProforma);
        });
    });
}

  showMessage(records) {
    this.validRecordsProforma = records;
    if (this.validRecordsProforma === this.protocolsProformaSave.length ) {
    this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe((res: string) => {
    this.notification.success('', res);
    this.router.navigate(['/dashboard']);
    });
    }
}
}

