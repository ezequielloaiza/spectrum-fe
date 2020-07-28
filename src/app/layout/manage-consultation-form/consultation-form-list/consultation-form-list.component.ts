import { Component, OnInit } from '@angular/core';
import { ConsultationFormService } from '../../../shared/services/consultation-form/consultation-form.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbDateStruct, NgbDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserStorageService } from '../../../http/user-storage.service';
import { ModalChangeStatusComponent } from '../modal-change-status/modal-change-status.component';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { DetailConsultationFormComponent } from '../detail-consultation-form/detail-consultation-form.component';
import { EditConsultationFormComponent } from '../edit-consultation-form/edit-consultation-form.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-consultation-form-list',
  templateUrl: './consultation-form-list.component.html',
  styleUrls: ['./consultation-form-list.component.scss']
})
export class ConsultationFormListComponent implements OnInit {
  consultationList: Array<any> = new Array;
  consultationListAux: Array<any> = new Array;
  orderByField = 'number';
  reverseSort = true;
  typeSort = 0;
  advancedPagination: number;
  itemPerPage = 8;
  filterStatus = [{ id: 0, name: 'Pending' },
  { id: 1, name: 'Processed' },
  { id: 2, name: 'Ready to Ship' },
  { id: 3, name: 'Shipped' }
  ];
  selectedStatus: any;
  searchName: any;
  status: any;
  tamano: String;
  model: NgbDateStruct;
  valid1 = false;
  fechaSelec: NgbDatepicker;
  user: any;

  constructor(private consultationFormService: ConsultationFormService,
              private userStorageService: UserStorageService,
              private modalService: NgbModal,
              private translate: TranslateService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private spinner: NgxSpinnerService) {
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    this.getListConsultationForms();
    this.advancedPagination = 1;
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.model = { year: 0, month: 0, day: 0 };
  }


  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.consultationList = this.consultationListAux.slice(startItem, endItem);
  }

  getListConsultationForms() {
    this.spinner.show();
    this.consultationFormService.allConsultationsFormByUser$().subscribe(
      res => {
        if (res.code === CodeHttp.ok) {
          this.consultationList = res.data;
          this.consultationListAux = res.data;
          this.spinner.hide();
        } else {
          console.log(res.code);
          this.spinner.hide();
        }
      },
      error => {
        console.log('error', error);
        this.spinner.hide();
      }
    );
  }

  sortConsultationForm(key) {
    if (this.orderByField !== key) {
      this.typeSort = 0;
      this.reverseSort = false;
    }
    this.orderByField = key;
    if (this.orderByField !== 'number') {
      this.typeSort++;
      if (this.typeSort > 2) {
        this.typeSort = 0;
        this.orderByField = 'number';
        key = 'number';
        this.reverseSort = true;
        this.getListConsultationForms();
      }
    }
    const consultationSort = this.consultationListAux.sort(function(a, b) {
      const x = a[key].toString().toLowerCase();
      const y = b[key].toString().toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.consultationListAux = consultationSort;
    if (this.reverseSort) {
      this.consultationListAux = consultationSort.reverse();
    }
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  getStatus(value) {
    switch (value) {
      case 0:
        status = 'Pending';
        break;
      case 1:
        status = 'Processed';
        break;
      case 2:
        status = 'Ready to Ship';
        break;
      case 3:
        status = 'Shipped';
        break;
      case 4:
        status = 'Canceled';
        break;
    }
    return status;
  }

  getItems(ev: any) {
    this.consultationList = this.consultationListAux;
    const val = ev.target.value;
    this.searchName = val;
    const valorStatus = this.selectedStatus;
    const lista = [];
    this.valid1 = true;
    if (val && val.trim() !== '') {
      const name = val;
      if (_.toString(valorStatus) === '' && this.tamano.length === 9) {
        // If it hasn't select status and date
        this.consultationList = this.consultationList.filter(item => {
          return (
            item.nameUser.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.patientName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.trackingNumber.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 9) {
        // If it select status and not date
        this.filterStatusNombre(name, valorStatus);
      } else if (_.toString(valorStatus) === '' && this.tamano.length === 15) {
        // If it select date and not status
        this.filterDateNombre(name);
      } else if (_.toString(valorStatus) !== '' && this.tamano.length === 15) {
        // If it write name and select date
        this.fullFilter(name, valorStatus);
      }
    } else if (_.toString(valorStatus) !== '') {
      // If it erase name and select status
      this.filter();
    } else if (_.toString(valorStatus) === '') {
      // If it select status and erase name y don't select status
      if (this.tamano.length === 15) {
        this.valid1 = true;
        let fecha: String;
        fecha = this.getFecha();
        _.filter(this.consultationListAux, function(consultation) {
          let fechaList: String;
          fechaList = _.toString(consultation.date.slice(0, 10));
          if (_.isEqual(fecha, fechaList)) {
            lista.push(consultation);
          }
        });
        this.consultationList = lista;
      }
    }
  }

  filter(): void {
    if (this.selectedStatus !== '') {
      this.valid1 = true;
      if (
        this.tamano.length === 9 &&
        (_.toString(this.searchName).length === 0 ||
          this.searchName.trim() === '')
      ) {
        // tslint:disable-next-line:radix
        this.consultationList = _.filter(this.consultationListAux, { 'status': parseInt(this.selectedStatus) });
      } else if (
        this.tamano.length === 15 &&
        (_.toString(this.searchName).length === 0 ||
          this.searchName.trim() === '')
      ) {
        this.filterStatusDate(this.selectedStatus);
      } else if (this.tamano.length === 9 && this.searchName.trim() !== '') {
        const nombre = this.searchName;
        this.filterStatusNombre(nombre, this.selectedStatus);
      } else if (this.tamano.length === 15 && this.searchName.trim() !== '') {
        const nombre = this.searchName;
        this.fullFilter(nombre, this.selectedStatus);
      }
    }
  }

  filter1(value): void {
    this.model = value;
    const valorStatus = this.selectedStatus;
    this.tamano = this.valueDate(this.model);
    const lista = [];
    if (this.tamano.length === 15) {
      this.valid1 = true;
      if (
        _.toString(valorStatus) === '' &&
        (_.toString(this.searchName).length === 0 ||
          this.searchName.trim() === '')
      ) {
        let fecha: String;
        fecha = this.getFecha();
        _.filter(this.consultationListAux, function(consultation) {
          let fechaList: String;
          fechaList = _.toString(consultation.date.slice(0, 10));
          if (_.isEqual(fecha, fechaList)) {
            lista.push(consultation);
          }
        });
        this.consultationList = lista;
      } else if (
        _.toString(valorStatus) !== '' &&
        (_.toString(this.searchName).length === 0 ||
          this.searchName.trim() === '')
      ) {
        this.filterStatusDate(valorStatus);
      } else if (
        this.searchName.trim() !== '' &&
        _.toString(valorStatus) === ''
      ) {
        this.filterDateNombre(this.searchName);
      } else if (
        this.searchName.trim() !== '' &&
        _.toString(valorStatus) !== ''
      ) {
        this.fullFilter(this.searchName, valorStatus);
      }
    }
  }

  filterStatusNombre(nombre, status): void {
    const lista = [];
    _.filter(this.consultationListAux, function(consultation) {
      if (
        (_.includes( consultation.nameUser.toLowerCase(), nombre.toLowerCase()) ||
          consultation.patientName.toLowerCase().indexOf(nombre.toLowerCase()) > -1 ||
          consultation.trackingNumber.toLowerCase().indexOf(nombre.toLowerCase()) > -1) &&
        // tslint:disable-next-line:radix
        _.isEqual(parseInt(status), consultation.status)
      ) {
        lista.push(consultation);
      }
    });
    this.consultationList = lista;
  }

  filterDateNombre(nombre): void {
    const lista = [];
    let fecha: String;
    fecha = this.getFecha();
    _.filter(this.consultationListAux, function(consultation) {
      const fechaList = _.toString(consultation.date.slice(0, 10));
      if ((_.includes(consultation.nameUser.toLowerCase(), nombre.toLowerCase()) ||
          consultation.patientName.toLowerCase().indexOf(nombre.toLowerCase()) > -1 ||
          consultation.trackingNumber.toLowerCase().indexOf(nombre.toLowerCase()) > -1) &&
        _.isEqual(fecha, fechaList)
      ) {
        lista.push(consultation);
      }
    });
    this.consultationList = lista;
  }

  filterStatusDate(status): void {
    const lista = [];
    let fecha: String;
    fecha = this.getFecha();
    _.filter(this.consultationListAux, function(consultation) {
      let fechaList: String;
      fechaList = _.toString(consultation.date.slice(0, 10));
      // tslint:disable-next-line:radix
      if ( _.isEqual(fecha, fechaList) && _.isEqual(parseInt(status), consultation.status)) {
        lista.push(consultation);
      }
    });
    this.consultationList = lista;
  }


  getFecha(): String {
    let ano;
    let mes;
    let dia;
    let fecha: String;
    // Year
    ano = this.model.year;
    // Month
    this.model.month < 10
      ? (mes = '0' + this.model.month)
      : (mes = this.model.month);
    // Day
    this.model.day < 10 ? (dia = '0' + this.model.day) : (dia = this.model.day);
    // FechaFiltro
    fecha = ano + '-' + mes + '-' + dia;
    return fecha;
  }

  fullFilter(nombre, status): void {
    // FechaFiltro
    let fecha: String;
    fecha = this.getFecha();
    const lista = [];
    // actual list
    _.filter(this.consultationListAux, function(consultation) {
      const fechaList = _.toString(consultation.date.slice(0, 10));
      if ((_.includes(consultation.nameUser.toLowerCase(), nombre.toLowerCase()) ||
          consultation.patientName.toLowerCase().indexOf(nombre.toLowerCase()) > -1 ||
          consultation.trackingNumber.toLowerCase().indexOf(nombre.toLowerCase()) > -1) &&
        // tslint:disable-next-line:radix
        _.isEqual(fecha, fechaList) && _.isEqual(parseInt(status), consultation.status)) {
        lista.push(consultation);
      }
    });
    this.consultationList = lista;
  }

  valueDate(valor): String {
    let str: String;
    const o = [];
    o.push(valor);
    str = _.toString(o);
    return str;
  }

  clean() {
    this.getListConsultationForms();
    this.valid1 = false;
    this.selectedStatus = '';
    this.tamano = 'undefined';
    this.fechaSelec = null;
    this.searchName = '';
  }

  changeStatus(consultation) {
    const modalRef = this.modalService.open(ModalChangeStatusComponent ,
    {backdrop  : 'static', keyboard  : false, windowClass: 'modal-content-border modal-dialog-status'});
    modalRef.componentInstance.consultation = consultation;
    modalRef.result.then((result) => {
      this.ngOnInit();
      }, (reason) => {
    });
  }

  open(consultation, action) {
    switch (action) {
      case 'view':
        const modalRef = this.modalService.open(DetailConsultationFormComponent ,
          {size: 'lg', windowClass: 'modal-content-border modal-dialog-consultation', backdrop  : 'static', keyboard  : false});
          modalRef.componentInstance.consultation = consultation;
          modalRef.componentInstance.read = true;
          modalRef.result.then((result) => {
            this.ngOnInit();
            }, (reason) => {
          });
        break;
      case 'edit':
        const modalRefEdit = this.modalService.open(EditConsultationFormComponent ,
          {size: 'lg', windowClass: 'modal-content-border modal-dialog-consultation', backdrop  : 'static', keyboard  : false });
          modalRefEdit.componentInstance.consultation = consultation;
          modalRefEdit.componentInstance.read = false;
          modalRefEdit.result.then((result) => {
            this.ngOnInit();
            }, (reason) => {
          });
        break;
    }

  }

  download(consultation) {
    this.spinner.show();
    const self = this;
    self.consultationFormService.downloadConsultationForm$(consultation.idConsultationForm).subscribe(res => {
      const filename = consultation.trackingNumber + '.pdf';
      if (res.size > 0) {
        self.spinner.hide();
        saveAs(res, filename);
      } else {
        self.spinner.hide();
        self.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res1: string) => {
          self.notification.error('', res1);
        });
      }
    }, error => {
      self.spinner.hide();
      self.translate.get('File Not Found', { value: 'File Not Found' }).subscribe((res: string) => {
        self.notification.error('', res);
      });
      console.log('error', error);
    });
  }

  cancel(consultation) {
    this.translate.get('Cancel Consultation Form', { value: 'Cancel Consultation Form' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to cancel the consultation form?',
        { value: 'Are you sure you want to cancel the consultation form?' }).subscribe((msg: string) => {
          this.alertify.confirm(title, msg, () => {
            this.spinner.show();
            this.consultationFormService.changeStatus$(consultation.idConsultationForm, 4).subscribe(res => {
              if (res.code === CodeHttp.ok) {
                this.spinner.hide();
                this.getListConsultationForms();
                this.translate.get('Successfully Canceled', { value: 'Successfully Canceled' }).subscribe((res1: string) => {
                  this.notification.success('', res1);
                });
              } else {
                console.log(res.errors[0].detail);
              }
            }, error => {
              console.log('error', error);
            });
          }, () => {
          });
        });
    });
  }

}
