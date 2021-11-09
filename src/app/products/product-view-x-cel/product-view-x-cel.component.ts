import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { ProductService } from '../../shared/services/products/product.service';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { PurchaseConfirmationComponent } from '../components/confirm-purchase/confirmation-component.component';

@Component({
  selector: 'app-product-view-x-cel',
  templateUrl: './product-view-x-cel.component.html',
  styleUrls: ['./product-view-x-cel.component.scss']
})
export class ProductViewXCelComponent implements OnInit {
  id: any;
  user: any;
  product: any;
  buttons: any;
  originalParameters = { right: [], left: [] };
  enable = {
    right: false,
    left: false
  };
  disableBuyButton = true;
  designSelected: any;
  //selectedProduct = { right: { name: 'right', header: [], params: [] }, left: { name: 'left', header: [], params: [] } };
  //selectedProduct.params[0].header
  selectedProduct = { params: [ { name: 'Right', header: [], params: []  }, { name: 'Left', header: [], params: [] } ] }//ob-array-obj

  //buscarlos mejor por la DB
  parametersRgp = ["Apex", "Bitoric", "CV-4 Multifocal", "Essential Solutions", "Pinnacle", "Pinnacle FT", "Pinnacle  IC", "Pinnacle LD", "Proplus", "Solutions Bifocal", "Sphere", "Starlens", "Titan", "X-Cel Thin"];
  parametersAtlantis = ["Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.O", "Atlantis LD"];
  parametersCustomSoft = ["Adult Aphakic", "X-Cel Multifocal", "Flexlens Piggyback", "Flexlens ARC", "Flexlens Large Diameter", "Flexlens PRS", "Flexlens Sphere", "Flexlens Toric", "Flexlens Tricurve", "Horizon Sphere", "Horizon Toric", "Pediatric Aphakic"];


  enableParams = { right: false, left: false };

  listFileRightEye: Array<FileProductRequested> = new Array;
  listFileLeftEye: Array<FileProductRequested> = new Array;

  @ViewChildren('uploadFile') uploadFilesComponents: QueryList<UploadFileComponent>;

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    this.getProduct();
  }

  getProduct() {
    this.productService.findById$(this.id).subscribe(res => {
      this.product = res.data[0];
      this.product.typeOrder = 'new';

      this.originalParameters.right =JSON.parse(this.product.types)[0].parameters;
      this.originalParameters.left = JSON.parse(this.product.types)[0].parameters;

      this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
      this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;

      this.initFooterButtons();
      this.initialViewParams();
    });
  }

  initFooterButtons() {
    this.buttons = [
      { name: 'Buy Now', icon: null, hidden: this.user.role.idRole === 3, fn: 'buyNow' },
      { name: 'Add to cart', icon: 'fa fa-cart-plus', hidden: this.product.typeOrder !== 'new', fn: 'addToCart' }
    ];
  }

  initialViewParams() {
    const self = this;
    this.product.parametersRight = _.filter(this.product.parametersRight, function (param) {
      return !self.checkAtlantisParams(param);
    });
    this.product.parametersLeft = _.filter(this.product.parametersLeft, function (param) {
      return !self.checkAtlantisParams(param);
    });
  }

  buttonAction(functionName) {
    if (functionName === 'buyNow') {
      this.buyNow();
    }

    if (functionName === 'addToCart') {
      this.addToCart();
    }
  }

  buyNow() {
    this.uploadFilesComponents.forEach(uploadFileComponent => {
      uploadFileComponent.saveFiles();
    });
    this.selectedProduct.params[0].header = [];//clean everything
    this.selectedProduct.params[0].params = []
    this.selectedProduct.params[1].header = []
    this.selectedProduct.params[1].params = []

    this.selectedProduct['name'] = this.product.name;
    this.selectedProduct['category'] = this.product.category;
    this.selectedProduct['idProduct'] = this.product.idProduct;
    this.selectedProduct['client'] = this.product.client;
    this.selectedProduct['mainImg'] = this.product.mainImg;
    this.selectedProduct['patient'] = this.product.patient;
    this.selectedProduct['shipping'] = this.product.shippingAddress;
    this.selectedProduct['supplier'] = this.product.supplier;
    this.selectedProduct['typeOrder'] = this.product.typeOrder;

    this.setSelectedParams();
    //this.setSelectedParams(this.selectedProduct.params[1]);
    console.log('chequeando si todo salio vbien', this.selectedProduct);
    //this.spinner.hide();
    const modalRef = this.modalService.open( PurchaseConfirmationComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.selectedProduct = this.selectedProduct;
    /* modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.typeBuy = type;
    modalRef.componentInstance.role = this.user.role.idRole;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.componentInstance.typeOrder = this.typeOrder; */
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
    //console.log('buyNow');
  }

  setSelectedParams() {
    const self = this;
    _.each(this.selectedProduct.params, function (parameters) {
      _.each(self.product[self.parametersByEye(parameters.name)], function (param) {

        if (self.enable[(parameters.name.toLowerCase())] && !!param.selected && param.selected !== 'No') {
          if (param.header) {
            parameters.header = _.concat(parameters.header, param);
          } else {
            parameters.params = _.concat(parameters.params, param);
          }
        }
      });
      parameters['observations'] = parameters.name.toLowerCase() === 'right' ? self.product.observationsRight : self.product.observationsLeft;
    })

  }

  addToCart() {
    console.log('addToCart');
    console.log(this.listFileLeftEye);
    console.log(this.listFileRightEye);
  }

  validation() {
    return true;
  }

  selectEye(object) {
    this.enable[object.name] = object.value;
    this.enableParams[object.name] = object.value;
  }

  parametersByEye(eye) {
    return eye.toLowerCase() === 'right' ? 'parametersRight' : 'parametersLeft';
  }

  getParams(type, eye) {
    switch (type) {
      case 'header':
       return  _.filter(this.product[this.parametersByEye(eye)], function (param) {
          return param.header;
        });

      case 'body':
        return _.filter(this.product[this.parametersByEye(eye)], function (param) {
          return !param.header;
        });
    }
  }

  changeParamsAndPrice(value) {
    //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.O", "Atlantis LD"
    const self = this;
    this.designSelected = value.param.selected;
    let paramsBody = [];
    const paramsHeader = this.getParams('header', value.eye);
debugger
    if (_.includes(this.parametersAtlantis, this.designSelected)) { //Atlantis Case

      if (value.param.name === 'Design') {

        this.setPriceByDesign(this.designSelected); //Change price by design selected

        paramsBody = _.filter(this.originalParameters[value.eye], function (param) {
          switch (self.designSelected) {
            case 'Atlantis SPH':
            case 'Atlantis FT':
              if (_.includes(['LZ 3D Vault / 2.0', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param);
            case 'Atlantis TPC':
            case 'Atlantis MF':
              if (param.name === 'LZ 3D Vault / 2.0') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'LZ 3D Vault / 2.0' && !param.header && !self.checkAtlantisParams(param);
            case 'Atlantis 3D':
              if (param.name === 'TPC') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param);
            case 'Atlantis 2.O':
              if (_.includes(['Limbal Zone', 'Scleral Zone', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && !param.header;
            case 'Atlantis LD':
              return !param.header && !self.checkAtlantisParams(param);
            default:
              return param && !self.checkAtlantisParams(param) && !param.header;
          }

        });
        this.product[this.parametersByEye(value.eye)] = _.concat(paramsHeader, paramsBody);
        this.setRequiredParams(value);
        //call checkBUY method
      }
    } else if (_.includes(this.parametersRgp, this.designSelected)) { // RGP CASE
    } else if (_.includes(this.parametersCustomSoft, this.designSelected)) { //Custom Soft Case

      if (value.param.name === 'Design') {
        paramsBody = _.filter(this.originalParameters[value.eye], function (param) {
          switch (this.designSelected) {
            case 'X-Cel Multifocal': //addition, dom eye, distance zone
              return !param.header;
            case 'Flexlens Large Diameter':
              if (param.name === 'Presentation') {
                param.values = param.values.filter(p => p !== '3 Pack');
              }
            return !param.header && param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
            default:
              if (!_.includes(param.values, '3 Pack') && param.name === 'Presentation') {
                param.values = _.concat(param.values, '3 Pack');
              }
            return !param.header && param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
          }
        });
        this.product[this.parametersByEye(value.eye)] = _.concat(paramsHeader, paramsBody);
      }

    }

  }

  setPriceByDesign(design) {
    let spCode = null;
    let preferredP = null;
    let diamondP = null;
    let goldP = null;
    //do i get it from db or set it here?
     //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.O", "Atlantis LD"

    switch (design) {
      case 'Atlantis SPH':
        spCode = '122A';
        preferredP = 95;
        diamondP = 95;
        goldP = 95;
      break;
      case 'Atlantis TPC':
        spCode = '126A';
        preferredP = 140;
        diamondP = 140;
        goldP = 140;
      break;
      case '"Atlantis FT':
        spCode = '125A';
        preferredP = 140;
        diamondP = 140;
        goldP = 140;
      break;
      case 'Atlantis 3D':
        spCode = '124A';
        preferredP = 140;
        diamondP = 140;
        goldP = 140;
      break;
      case 'Atlantis MF':
        spCode = '125A';
        preferredP = 140;
        diamondP = 140;
        goldP = 140;
      break;
      case 'Atlantis 2.O':
        spCode = '127A';
        preferredP = 140;
        diamondP = 140;
        goldP = 140;
      break;
      case 'Atlantis LD':
        spCode = '123A';
        preferredP = 140;
        diamondP = 140;
        goldP = 140;
      break;
    }
  }

  setRequiredParams({ param, eye }) {
    let self = this;
    _.each(this.product[this.parametersByEye(eye)], function (p, index) {
      switch (p.name) {
        case 'Addition':
        case 'Dom. Eye':
        case 'Distance Zone':
          if (param.name === 'Design') {
            self.product[self.parametersByEye(eye)][index].noRequired = param.selected !== 'Atlantis MF';
          }
          break;
      }
    });
  }

  checkAtlantisParams(param) {
    switch (param.name) {
      case 'Atlantis 2.0 C.S.A':
      case 'Clock Mark':
      case 'Q1 LZ':
      case 'Q1 SZ':
      case 'Q2 LZ':
      case 'Q2 SZ':
      case 'Q3 LZ':
      case 'Q3 SZ':
      case 'Q4 LZ':
      case 'Q4 SZ':
        param.selected = null;
        return true;
      default:
        break;
    }
  }

  checkToBuy() {
    const rightEye = this.enable.right;
    const leftEye = this.enable.left;

    if (!rightEye && !leftEye) {
      this.disableBuyButton = true;
    } else {
      this.disableBuyButton = this.checkSelectedParams('right', rightEye) || this.checkSelectedParams('left', leftEye);
    }
  }

  checkSelectedParams(eye, value) {
    let disable = !this.product.client || !this.product.patient;
    if (value) {
      _.each(this.product[this.parametersByEye(eye)], function (parameter) {
        disable = disable || (!parameter.noRequired && !parameter.selected);
      });
    }
    return disable;
  }
}
