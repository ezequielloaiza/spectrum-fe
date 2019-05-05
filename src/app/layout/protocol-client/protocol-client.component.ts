import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../shared/services/suppliers/supplier.service';
import { ProtocolClientService } from '../../shared/services/protocolClient/protocol-client.service';
import { Protocol } from '../../shared/models/protocol';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserStorageService } from '../../http/user-storage.service';
import { CountryService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-protocol-client',
  templateUrl: './protocol-client.component.html',
  styleUrls: ['./protocol-client.component.scss']
})
export class ProtocolClientComponent implements OnInit {

  protocol: Protocol = new Protocol();
  suppliers: Array<any> = new Array();
  countries: Array<any> = new Array();
  protocolForm: FormGroup;
  edit = false;
  user: any;
  saving = false;

  constructor(private fb: FormBuilder,
              private supplierService: SupplierService,
              private translate: TranslateService,
              private notification: ToastrService,
              private protocolClientService: ProtocolClientService,
              private userStorageService: UserStorageService,
              private countryService: CountryService) { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
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
      country: [null]
    });
  }

  getSupplier() {
    this.supplierService.findAll$().subscribe(res => {
      this.suppliers = res.data;
      this.getProtocol(this.user.userResponse.idUser, this.suppliers[0].idSupplier);
    });
  }

  getProtocol(clientId: any, supplierId: any) {
    this.protocolClientService.findByClienSupplier$(clientId, supplierId).subscribe(res => {
      this.protocol = res;
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
    this.protocolClientService.update$(this.protocolForm.value).subscribe(res => {
      this.protocol = res;
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
      this.getProtocol(this.user.userResponse.idUser, $event.nextId);
    }
  }

  setProtocol(protocol: Protocol) {
    this.id.setValue(protocol.id);
    this.accNumber.setValue(protocol.accNumber);
    this.businessName.setValue(protocol.businessName);
    this.recipient.setValue(protocol.recipient);
    this.shippingAddress.setValue(protocol.shippingAddress);
    this.dmv.setValue(protocol.dmv);
    this.shippingFrecuency.setValue(protocol.shippingFrecuency);
    this.shippingMethod.setValue(protocol.shippingMethod);
    this.accountNumber.setValue(protocol.accountNumber);
    this.shippingDetail.setValue(protocol.shippingDetail);
    this.comment.setValue(protocol.comment);
    this.emailComment.setValue(protocol.emailComment);
    this.clientId.setValue(protocol.clientId);
    this.supplierId.setValue(protocol.supplierId);
    this.country.setValue(protocol.country);
  }

  get id() {
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

}
