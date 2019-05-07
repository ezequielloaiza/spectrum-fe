import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./protocol-proforma.component.scss']
})
export class ProtocolProformaComponent implements OnInit {

  protocol: ProtocolProforma = new ProtocolProforma();
  suppliers: Array<any> = new Array();
  countries: Array<any> = new Array();
  protocolForm: FormGroup;
  edit = false;
  editField = false;
  viewField = false;
  user: any;
  idClient: any;
  saving = false;
  download = false;
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
    this.initializeForm();
    this.getSupplier();
    this.getIdClient();
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
      this.suppliers = res.data;
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
      // this.cancel();
      this.edit = false;
      this.getProtocol(this.idClient, $event.nextId);
    }
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
}
