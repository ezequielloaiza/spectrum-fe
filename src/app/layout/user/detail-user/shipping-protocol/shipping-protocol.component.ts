import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupplierService } from '../../../../shared/services/suppliers/supplier.service';
import { ProtocolClientService } from '../../../../shared/services/protocolClient/protocol-client.service';
import { UserStorageService } from '../../../../http/user-storage.service';
import { CountryService } from '../../../../shared/services';
import { Protocol } from '../../../../shared/models/protocol';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-shipping-protocol',
  templateUrl: './shipping-protocol.component.html',
  styleUrls: ['./shipping-protocol.component.scss']
})
export class ShippingProtocolComponent implements OnInit {

  protocol: Protocol = new Protocol();
  suppliers: Array<any> = new Array();
  countries: Array<any> = new Array();
  protocolForm: FormGroup;
  edit = false;
  id: any;
  saving = false;
  listShippingMethod = [ '2nd day', 'Overnight', 'Overnight AM' ];
  listBiweekly = [ '15', '30'];
  listWeekly = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  valueFrecuency: any;
  download = false;
  today: Date = new Date();
  user: any;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private protocolClientService: ProtocolClientService,
    private userStorageService: UserStorageService,
    private countryService: CountryService,
    private translate: TranslateService,
    private notification: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    this.valueFrecuency = 'NINGUNA';
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getCountry();
    this.initializeForm();
    this.getSupplier();
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
    shippingFrecuencyW: [null]
    });
  }

  getSupplier() {
    this.supplierService.findAll$().subscribe(res => {
      this.suppliers = res.data;
      this.getProtocol(this.id, this.suppliers[0].idSupplier);
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
    this.saving = true;
    this.getShippingFrecuency();
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
      this.getProtocol(this.id, $event.nextId);
    }
  }

  setProtocol(protocol: Protocol) {
    if (protocol.id !== null) {
      this.download = true;
    } else {
      this.download = false;
    }
    this.idClient.setValue(protocol.id);
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


  assignShippingFrecuency(value: number) {
    switch (value) {
      case 1:
          this.valueFrecuency = 'Monthly';
          this.protocolForm.get('shippingFrecuencyB').setValue(null);
          this.protocolForm.get('shippingFrecuencyW').setValue(null);
        break;
      case 2:
           this.valueFrecuency = 'Biweekly';
           this.protocolForm.get('shippingFrecuencyW').setValue(null);
        break;
      case 3:
           this.valueFrecuency = 'Weekly';
           this.protocolForm.get('shippingFrecuencyB').setValue(null);
        break;
    }
  }

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
  }

  getShippingFrecuency() {
    switch (this.valueFrecuency) {
      case 'Monthly':
          this.protocolForm.get('shippingFrecuency').setValue('Monthly');
        break;
      case 'Biweekly':
          this.protocolForm.get('shippingFrecuency').setValue(this.protocolForm.get('shippingFrecuencyB').value);
        break;
      case 'Weekly' :
          this.protocolForm.get('shippingFrecuency').setValue(this.protocolForm.get('shippingFrecuencyW').value);
        break;
    }
  }

  get idClient() {
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
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
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

}

