import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/services/products/product.service';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { UserStorageService } from '../../http/user-storage.service';
import { ProductRequested } from '../../shared/models/productrequested';
import { BasketService } from '../../shared/services/basket/basket.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../shared/models/product';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BasketRequest } from '../../shared/models/basketrequest';
import { ShippingAddressService } from '../../shared/services/shippingAddress/shipping-address.service';
import { UserService } from '../../shared/services';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../shared/services/fileproductrequested/fileproductrequested.service';
import { environment } from '../../../environments/environment';
import { ConfirmationEuclidComponent } from '../modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConsultationForm } from '../../shared/models/consultation-form';
import { ConsultationFormRequest } from '../../shared/models/consultation-form-request';
import { FileConsultationForm } from '../../shared/models/fileconsultationform';
import { ConsultationFormService } from '../../shared/services/consultation-form/consultation-form.service';

const URL = environment.apiUrl + 'fileConsultationForm/uploader';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.scss']
})
export class ConsultationFormComponent implements OnInit {

  eyes: any;
  products: Array<any> = new Array;
  productsCode: Array<any> = new Array;
  product: any;
  id: any;
  parameters: any;
  productsSelected: Array<any> = new Array;
  currentUser: any;
  user: any;
  generalParams: any;
  client: any;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  productsRequested: ConsultationForm[];
  consultationFormRequest: ConsultationFormRequest = new ConsultationFormRequest;
  // Upload files
  @ViewChild('selectedFiles') selectedFiles: any;
  queueLimit = 5;
  maxFileSize = 25 * 1024 * 1024; // 25 MB
  listFile: Array<FileConsultationForm> = new Array;
  private uploadResult: any = null;
  public uploader: FileUploader = new FileUploader({url: URL,
                                                    itemAlias: 'files',
                                                    queueLimit: this.queueLimit,
                                                    maxFileSize: this.maxFileSize,
                                                    removeAfterUpload: false,
                                                    authToken: this.userStorageService.getToke(),
                                                    autoUpload: false});

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private userStorageService: UserStorageService,
              private shippingAddressService: ShippingAddressService,
              private consultationFormService: ConsultationFormService,
              private userService: UserService,
              public router: Router,
              private notification: ToastrService,
              private translate: TranslateService,
              private changeDetector: ChangeDetectorRef,
              private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());

    this.uploader.onAfterAddingFile = (item) => {
      const maxSize = this.maxFilesSize();

      if (maxSize > this.maxFileSize) {
        this.removeFile(item);
        this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
          this.notification.error('', res);
        });
      }
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.uploadResult = {'success': true, 'item': item, 'response':
                           response, 'status': status, 'headers': headers};
      if (this.uploadResult) {
        this.buildFileProductRequested();
      }
    };
    this.uploader.onProgressItem = (progress: any) => this.changeDetector.detectChanges();
    // this.changeDetector.detectChanges();
    this.uploader.onErrorItem = (item, response, status, headers) => {
        this.uploadResult = {'success': true, 'item': item, 'response':
                             response, 'status': status, 'headers': headers};
    };

  }

  ngOnInit() {
    this.getProducts();
    this.clearFiles();
  }

  getProducts() {
    this.spinner.show();
    this.productService.findBySupplierInView$(2, true).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.products = res.data;
        this.productService.findBySupplierAndInViewAndCategory$(4, false, 10).subscribe(res1 => {
          if (res1.code === CodeHttp.ok) {
            this.productsCode = res1.data;
          } else {
            console.log(res1.errors[0].detail);
            this.spinner.hide();
          }
        }, error => {
          console.log('error', error);
          this.spinner.hide();
        });
        this.getProductView();
        this.spinner.hide();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  getProductView() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = _.find(this.products, {idProduct: this.id});
    this.product.eyeRight = false;
    this.product.eyeLeft = false;
    this.product.typeForm = null;
    this.product.type = JSON.parse(this.product.types)[0].name;
    this.generalParams = JSON.parse(this.product.types)[0].generals;
    this.eyes = JSON.parse(this.product.types)[0].eyes;
    this.eyes[0].params.forEach(param => {
      if (param.type === 'multiple') {
        param.values.forEach(val => {
          val.disabled = null;
        });
      }
    });
    this.eyes[1].params.forEach(param => {
      if (param.type === 'multiple') {
        param.values.forEach(val => {
          val.disabled = null;
        });
      }
    });
    this.setClient();
  }

  setCheckbox(param) {
    param.selected = !param.selected;
  }

  changeTypeForm(param) {
    switch (param.name) {
      case 'New Order':
        this.product.typeForm = 'New Order';
        this.generalParams[0].selected = true;
        this.generalParams[1].selected = false;
        console.log(this.generalParams);
        break;
      case 'Warranty':
        this.product.typeForm = 'Warranty';
        this.generalParams[1].selected = true;
        this.generalParams[0].selected = false;
        console.log(this.generalParams);
        break;
    }
  }

  setDisabledMultiple(param, subparam, eye, value) {
    let parameters;
    if (eye === 'right') {
      parameters = this.eyes[0].params;
    } else {
      parameters = this.eyes[1].params;
    }
    if (subparam.name === 'Ideal') {
      switch (param.name) {
        case '1. Corneal Clearence':
          let addMicrons1: any;
          let subsMicrons1: any;
          let parameter1: any;
          parameter1 = _.find(parameters, {name: '1. Corneal Clearence'});
          addMicrons1 = _.find(parameter1.values, {name: 'Add Microns'});
          addMicrons1.disabled = value;
          addMicrons1.selected = addMicrons1.disabled ? null : addMicrons1.selected;
          subsMicrons1 = _.find(parameter1.values, {name: 'Substract Microns'});
          subsMicrons1.disabled = value;
          subsMicrons1.selected = subsMicrons1.disabled ? null : subsMicrons1.selected;
          break;
        case '2. Limbal Clearence':
          let addMicrons2: any;
          let subsMicrons2: any;
          let parameter2: any;
          parameter2 = _.find(parameters, {name: '2. Limbal Clearence'});
          addMicrons2 = _.find(parameter2.values, {name: 'Add Microns'});
          addMicrons2.disabled = value;
          addMicrons2.selected = addMicrons2.disabled ? null : addMicrons2.selected;
          subsMicrons2 = _.find(parameter2.values, {name: 'Substract Microns'});
          subsMicrons2.disabled = value;
          subsMicrons2.selected = subsMicrons2.disabled ? null : subsMicrons2.selected;
          break;
        case '3. Lens Landing':
          let blanching: any;
          let impingement: any;
          let blanchingSelect: any;
          let impingementSelect: any;
          let parameter3: any;
          parameter3 = _.find(parameters, {name: '3. Lens Landing'});
          blanching = _.find(parameter3.values, {name: 'Blanching'});
          blanching.disabled = value;
          blanching.selected = blanching.disabled ? null : blanching.selected;
          blanchingSelect = _.find(parameter3.values, {name: 'Blanching-Select'});
          blanchingSelect.disabled = value;
          blanchingSelect.selected = blanchingSelect.disabled ? null : blanchingSelect.selected;
          impingement = _.find(parameter3.values, {name: 'Impingement'});
          impingement.disabled = value;
          impingement.selected = impingement.disabled ? null : impingement.selected;
          impingementSelect = _.find(parameter3.values, {name: 'Impingement-Select'});
          impingementSelect.disabled = value;
          impingementSelect.selected = impingementSelect.disabled ? null : impingementSelect.selected;
          break;
      }
    }

    if (eye === 'right') {
      this.eyes[0].params = parameters;
    } else {
      this.eyes[1].params = parameters;
    }
  }

  setValueEye(eye) {
    if (eye === 'right') {
      this.product.eyeRight = !this.product.eyeRight;
      if (!this.product.eyeRight) {
        this.clean('right');
        this.eyes[0].selected = null;
      } else {
        this.eyes[0].selected = true;
      }
    } else {
      this.product.eyeLeft = !this.product.eyeLeft;
      if (!this.product.eyeLeft) {
        this.clean('left');
        this.eyes[1].selected = null;
      } else {
        this.eyes[1].selected = true;
      }
    }
  }

  clean(eye) {
    let parameters;
    if (eye === 'right') {
      parameters = this.eyes[0].params;
    } else {
      parameters = this.eyes[1].params;
    }
    // parameter
    _.each(parameters, function(param) {
      if ((param.type === 'text-area' || param.type === 'input' || param.type === 'radio')) {
        param.selected = null;
      }
      if (param.type === 'multiple') {
        _.each(param.values, function (item) {
          item.selected = null;
          item.disabled = null;
        });
      }
    });
    if (eye === 'right') {
      this.eyes[0].params = parameters;
    } else {
      this.eyes[1].params = parameters;
    }
  }

  setEyeSelected() {
    this.productsSelected = [];

    if (this.product.eyeRight) {
      this.productsSelected.push({eye: 'Right'});
    }
    if (this.product.eyeLeft) {
      this.productsSelected.push({eye: 'Left'});
    }
  }

  isDisabled(eye) {
    switch (eye) {
      case 'right':
        return !this.product.eyeRight;
      case 'left':
        return !this.product.eyeLeft;
    }
  }

  setClient() {
    if (this.user.role.idRole === 3) {
      this.client = this.currentUser;
      let accSpct = !!this.currentUser.accSpct ?  this.currentUser.accSpct + ' - ' : '';
      let certificationCode = !!this.currentUser.certificationCode ? ' | ' + this.currentUser.certificationCode : '';
      this.product.client = accSpct + this.currentUser.name + certificationCode + ' | ' + this.currentUser.country.name;
      this.findShippingAddress(this.client.idUser);
    } else if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomersAux = res.data;
          // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
          this.listCustomers = _.filter(this.listCustomersAux, function(u) {
            return !(u.certificationCode === null || u.certificationCode === '');
          });
          this.listCustomers.map((i) => {
            let accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' +  i.certificationCode + ' | ' + i.country.name;
            return i;
          });
        }
      });
    }
  }

  onSelectedClient(clientSelect) {
    if (clientSelect !== undefined) {
      this.client = clientSelect;
      this.findShippingAddress(this.client.idUser);
    } else {
      this.client = '';
      this.product.shippingAddress = '';
      this.product.priceSale = '';
    }
  }

  findShippingAddress(idCliente) {
    this.shippingAddressService.findIdUser$(idCliente).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
      } else if (res.code === CodeHttp.notContent) {
        this.product.shippingAddress = '';
        this.translate.get('You must enter a main address in the shipping address module',
         {value: 'You must enter a main address in the shipping address module'}).subscribe(( res: string) => {
          this.notification.warning('', res);
        });
      } else {
        this.product.shippingAddress = '';
      }
    });
  }

  maxFilesSize() {
    let maxFileSize = 0;

    if (this.uploader.queue) {
      _.each(this.uploader.queue, function (item) {
        maxFileSize = maxFileSize + item.file.size;
      });
    }
    return maxFileSize;
  }

  removeFile(item) {
    this.uploader.removeFromQueue(item);
  }

  clearSelectedFile() {
    this.selectedFiles.nativeElement.value = '';
  }

  clearFiles() {
    if (this.uploader.queue.length) {
      this.uploader.clearQueue();
      this.clearSelectedFile();
    }
  }

  saveFiles(): void {
    this.spinner.show();
    this.listFile = new Array;
    if (this.uploader.queue) {
      _.each(this.uploader.queue, function (item) {
        item.upload();
      });
    }
    if (!this.uploader.queue.length) {
      this.save();
    }
  }

  save () {
    this.consultationFormRequest.consultationList = this.productsRequested;
    this.consultationFormRequest.listFiles = this.listFile;
    console.log(this.consultationFormRequest);
    this.consultationFormService.save$(this.consultationFormRequest).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.spinner.hide();
        this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe(( res1: string) => {
          this.notification.success('', res1);
        });
        this.redirectList();
      } else {
        console.log(res);
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
      this.spinner.hide();
    });
  }
  private buildFileProductRequested() {
    if (this.uploadResult.success) {
      const fileconsultationform: FileConsultationForm = new FileConsultationForm();
      fileconsultationform.url  = JSON.parse(this.uploadResult.response).data;
      fileconsultationform.name = this.uploadResult.item.file.name;
      fileconsultationform.type = this.uploadResult.item.file.type;
      fileconsultationform.size = this.uploadResult.item.file.size;
      fileconsultationform.createdAt = new Date();
      this.listFile.push(fileconsultationform);
      this.verifyOpenModal();
    }
  }

  buildConsultation() {
    // Buil detail
    const patient = this.product.patient;
    this.eyes[0].selected = this.product.eyeRight;
    this.eyes[1].selected = this.product.eyeLeft;
    const detail = {'patient': patient, 'generals': this.generalParams, 'eyes': this.eyes };
    // Buidl Consultation Form
    const consultation: ConsultationForm = new ConsultationForm();
    consultation.idUser = this.client.idUser;
    consultation.details = '[' + JSON.stringify(detail) + ']';
    consultation.patientName = patient;
    consultation.idSupplier = 2;
    this.productsRequested[0] = consultation;
  }

  saveConsultationForm() {
    this.spinner.show();
    this.productsRequested = [];
    this.buildConsultation();
    this.saveFiles();
  }

  verifyOpenModal() {
    if (this.uploader.queue.length === this.listFile.length) {
      this.save();
    }
  }

  redirectList(): void {
    this.router.navigate(['/list-consultation-form']);
  }

  formIsValid() {
    let isValid = true;
    if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
      return false;
    }

    if ((this.generalParams[0].selected === null || this.generalParams[0].selected === undefined) && 
    (this.generalParams[1].selected === null || this.generalParams[1].selected === undefined) ) {
      isValid = false;
    }

    return isValid;
  }
}
