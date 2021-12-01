import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { ProductService } from '../../shared/services/products/product.service';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { PurchaseConfirmationComponent } from '../components/confirm-purchase/confirmation-component.component';
import { ProductRequested } from '../../shared/models/productrequested';
import { Product } from '../../shared/models/product';
import { BasketRequest } from '../../shared/models/basketrequest';
import { UserService } from '../../shared/services';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-view-x-cel',
  templateUrl: './product-view-x-cel.component.html',
  styleUrls: ['./product-view-x-cel.component.scss']
})
export class ProductViewXCelComponent implements OnInit {
  id: any;
  user: any;
  membership: any;
  product: any;
  buttons: any;
  client: any;
  showImg = { right: false, left: false };
  finalDesign: any;
  originalParameters = { right: [], left: [] };
  enable = {
    right: false,
    left: false
  };
  disableBuyButton = true;
  selectedProduct = { params: [{ eye: 'Right', header: [], params: [] }, { eye: 'Left', header: [], params: [] }] };
  price = { right: { spCode: null, priceUnit: 0 }, left: { spCode: null, priceUnit: 0 } };
  quantity = { right: 0, left: 0 };
  presentationAndDesign = { right: { presentation: '', design: '' }, left: { presentation: '', design: '' } };

  productsSelected: Array<any> = new Array;
  basketRequestModal: BasketRequest = new BasketRequest();


  paramsAtlantisImages = { right: { clock: {}, parameters: []}, left: { clock: {}, parameters: [] }};

  listFileRightEye: Array<FileProductRequested> = new Array;
  listFileLeftEye: Array<FileProductRequested> = new Array;

  @ViewChildren('uploadFile') uploadFilesComponents: QueryList<UploadFileComponent>;

  // Additional products
  productsAdditional: any;
  priceHydrapeg: any;
  priceDMV: any;

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private userStorageService: UserStorageService,
    private userService: UserService,
    private productService: ProductService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    //this.membership = this.user.userResponse.membership.idMembership;
    this.getProduct();
  }

  getProduct() {
    this.spinner.show();
    this.productService.findById$(this.id).subscribe(res => {
      this.product = res.data[0];
      this.product.typeOrder = 'new';

      if (this.product.name.includes('Atlantis')) {
        this.getOtherProducts();
      }

      this.originalParameters.right =JSON.parse(this.product.types)[0].parameters;
      this.originalParameters.left = JSON.parse(this.product.types)[0].parameters;

      this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
      this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;

      this.product.header = JSON.parse(this.product.types)[0].header;

      this.initFooterButtons();
      this.initialViewParams();

      this.spinner.hide();
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  getOtherProducts() {
    this.productService.findBySupplierAndInViewAndCategory$(13, false, 10).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.setInfoAdditionalPrices(res.data);
        this.setMembership();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  setInfoAdditionalPrices(data) {
    let self = this;
    this.productsAdditional = data;
    this.product.infoAdditionalPrices = {
      "name": "prices", "values":
        { "hydrapeg": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0
          },
          "dmv insertion and removal set": {
            "gold": 0,
            "diamond": 0,
            "preferred": 0
          }
        }
    }

    _.each(this.productsAdditional, function(product) {
      const name = product.name.toLowerCase();

      self.product.infoAdditionalPrices.values[name] = {
        "gold": product.price1,
        "diamond": product.price2,
        "preferred": product.price3
      };
    });
  }

  setMembership() {
    if (this.user.role.idRole === 3) {
      this.membership = this.user.userResponse.membership.idMembership;

      if (this.product.name.includes('Atlantis')) {
        this.definePrice(this.membership);
      }
    }
  }

  definePrice(membership) {
    switch (membership) {
      case 1:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.gold;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].gold;
        break;
      case 2:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamond;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamond;
        break;
      case 3:
        this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.preferred;
        this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].preferred;
        break;
    }
  }

  priceSaleTotal() {
    this.setPrice();
    return (this.price['right'].priceUnit || 0) + (this.price['left'].priceUnit || 0);
  }

  setPrice() {
    const self = this;
    _.each(this.selectedProduct.params, function (parameter) {
      if (self.enable[(parameter.eye.toLowerCase())]) {
        _.each(self.product[self.parametersByEye(parameter.eye)], function (p) {
          if (p.name === 'Design' && !!p.selected) {
            self.setPriceByDesign(parameter.eye.toLowerCase(), p.selected)
          }
        });
      } else {
        self.price[parameter.eye.toLowerCase()].priceUnit = 0;
      }
    });
    return this.price;
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
      return !self.checkAtlantisParams(param, 0);
    });
    this.product.parametersLeft = _.filter(this.product.parametersLeft, function (param) {
      return !self.checkAtlantisParams(param, 0);
    });
  }

  getClient(client) {
    this.client = client.idUser;
    this.membership = client.membership.idMembership;
    if (this.product.name.includes('Atlantis') && this.product.infoAdditionalPrices) {
      this.definePrice(this.membership);
    }
  }

  setEyeSelected() {
    this.productsSelected = [];

    if (this.enable.right) {
      this.productsSelected.push({ eye: 'Right' });
    }
    if (this.enable.left) {
      this.productsSelected.push({ eye: 'Left' });
    }
  }

  buttonAction(functionName) {
    this.uploadFilesComponents.forEach(uploadFileComponent => {
      uploadFileComponent.saveFiles();
    });
    this.selectedProduct.params[0].header = [];//clean everything
    this.selectedProduct.params[0].params = []
    this.selectedProduct.params[1].header = []
    this.selectedProduct.params[1].params = []
    this.selectedProduct['price'] = this.setPrice(); //an object that has selected designs and their price
    const productsRequested = [];
    const productsSelected = this.buildProductSelected();
    _.each(productsSelected, function (product) {
      const productRequest: ProductRequested = new ProductRequested();
      const productoSelect: Product = new Product();
      productoSelect.idProduct = product.id;
      productoSelect.codeSpectrum = product.codeSpectrum;
      productRequest.product = productoSelect;
      productRequest.quantity = product.quantity;
      productRequest.name = product.name;
      productRequest.price = product.price;
      productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
      productRequest.patient = product.patient;
      productRequest.observations = product.observations;
      productsRequested.push(productRequest);
    });
    this.basketRequestModal.idUser = this.client;
    this.basketRequestModal.productRequestedList = productsRequested;

    this.selectedProduct['name'] = this.product.name;
    this.selectedProduct['category'] = this.product.category;
    this.selectedProduct['idProduct'] = this.product.idProduct;
    this.selectedProduct['client'] = this.product.client;
    this.selectedProduct['mainImg'] = this.product.mainImg;
    this.selectedProduct['patient'] = this.product.patient;
    this.selectedProduct['shipping'] = this.product.shippingAddress;
    this.selectedProduct['supplier'] = this.product.supplier;
    this.selectedProduct['typeOrder'] = this.product.typeOrder;
    this.selectedProduct['insertor'] = this.product.name.includes('Atlantis') ? this.product.header[0] : null;//this's DMV according to Json
    this.selectedProduct['totalPrice'] = this.setTotalPrice(); //sum both eyes, hydra, dmv
    const modalRef = this.modalService.open( PurchaseConfirmationComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.selectedProduct = this.selectedProduct;
    modalRef.componentInstance.buttonPressed = functionName;
    modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
    modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
    modalRef.componentInstance.datos = this.basketRequestModal;
    modalRef.componentInstance.typeOrder = this.product.typeOrder;
    modalRef.componentInstance.role = this.user.role.idRole
    modalRef.componentInstance.additionalDMV = this.getAdditionalPrices(false).dmv;
    modalRef.componentInstance.additionalHydrapeg = this.getAdditionalPrices(false).hydrapeg;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
    });
  }

  buildProductSelected() {
    const self = this;
    this.setEyeSelected();
    let productsSelected = this.productsSelected;
    this.setSelectedParams();

    _.each(productsSelected, function (p, index) {
      let eye = p.eye.toLowerCase();
      p.patient = self.product.patient;
      p.name = self.product.name;
      p.id = self.product.idProduct;
      p.codeSpectrum = self.price[eye].spCode;
      p.price = self.price[eye].priceUnit;
      p.quantity = self.quantity[eye];
      p.header = self.selectedProduct.params[index].header.filter(param => param.name !== 'Spectrum Code');
      p.dmv = _.find(self.product.header, {name: "DMV"});
      p.parameters = self.selectedProduct.params[index].params;
      p.hydrapeg = _.find(p.parameters, {name: "Hydrapeg"}) || _.find(self.originalParameters[eye], {name: "Hydrapeg"});
      p.observations = eye === 'right' ? self.product.observationsRight : self.product.observationsLeft;

      if (self.product.name.includes('Atlantis')) {
        p.detail = { name: self.product.name, eye: p.eye, codeSpectrum: self.price[eye].spCode, header: p.header, parameters: p.parameters, dmv: p.dmv, hydrapeg: p.hydrapeg, productsAdditional: self.getProductsAdditional(p, 'detail') };
      } else {
        p.detail = { name: self.product.name, eye: p.eye, codeSpectrum: self.price[eye].spCode, header: p.header, parameters: p.parameters};

      }
    });
    let requestedProducts = JSON.parse(JSON.stringify(productsSelected));
    _.each(productsSelected, function(p) {
      _.each(self.getProductsAdditional(p, 'basket'), function(additional) {
        requestedProducts.push(additional);
      });
    });

    return requestedProducts;

  }

  setSelectedParams() {
    const self = this;
    _.each(this.selectedProduct.params, function (parameters) {
      _.each(self.product[self.parametersByEye(parameters.eye)], function (param) {

        if (self.enable[(parameters.eye.toLowerCase())] && !!param.selected && param.selected !== 'No') { //filtra el dom eye o radio no
          if (param.header) {
            parameters.header = _.concat(parameters.header, param);
            if (param.name === 'Quantity') {
              self.quantity[parameters.eye.toLowerCase()] = param.selected;
            }
            if (param.name === 'Design') { //put spectrum code right after Design header.
              parameters.header = _.concat(parameters.header, { name: 'Spectrum Code', selected: self.price[parameters.eye.toLowerCase()].spCode });//ver cual ojo colocar
              self.finalDesign = param.selected;
            }
          } else {
            parameters.params = _.concat(parameters.params, param);
          }
        }
      });
      if (self.finalDesign === 'Atlantis 2.0') {
        let eye = parameters.eye.toLowerCase();
        self.paramsAtlantisImages[eye].parameters = self.paramsAtlantisImages[eye].parameters.filter(p => p.name !== 'Atlantis 2.0 C.S.A');
        parameters.params = _.concat(parameters.params, self.paramsAtlantisImages[parameters.eye.toLowerCase()].parameters);
      }
      parameters['observations'] = parameters.eye.toLowerCase() === 'right' ? self.product.observationsRight : self.product.observationsLeft;
    })

  }

  getAdditionalPrices(isIndividualPrice) {
    let priceDmv = 0;
    let priceHydrapegRight = 0;
    let priceHydrapegLeft = 0;

    if (!this.product.name.includes('Atlantis')) {
      return { "dmv": 0, "hydrapeg":0};
    }

    // Finding DMV
    let dmv:any = _.find(this.product.header, { name: "DMV"});
    if (dmv.selected === 'Yes') {
      dmv.price = this.priceDMV;
      priceDmv = this.priceDMV;
    } else {
      dmv.price = 0;
    }

    // Finding Hydrapeg Right
    const hydrapegRight:any = _.find(this.product.parametersRight, { name: "Hydrapeg"});
    if (hydrapegRight.selected === "Yes") {
      priceHydrapegRight =  this.priceHydrapeg;
    }

    // Finding Hydrapeg Left
    const hydrapegLeft:any = _.find(this.product.parametersRight, { name: "Hydrapeg"});
    if (hydrapegLeft.selected === "Yes") {
      priceHydrapegLeft = this.priceHydrapeg;
    }

    if (isIndividualPrice) {
      return { "dmv": (priceDmv || 0), "hydrapegRight": priceHydrapegRight, "hydrapegLeft": priceHydrapegLeft };
    } else {
      return { "dmv": (priceDmv || 0),
              "hydrapeg": ((priceHydrapegRight * this.quantity['right']) || 0) + ((priceHydrapegLeft * this.quantity['left']) || 0)};
    }
  }

  getProductsAdditional(productSelected: any, type: any) {
    const additionals = [];

    // Type is basket (detail) and when is detail (productSelecte)
    const eye = productSelected.eye || productSelected.detail.eye;

    const keyDMV = 'dmv';
    const keyHydrapeg = eye === 'Right' ? "hydrapegRight" : "hydrapegLeft";

    const productDMV: any = _.find(this.productsAdditional, {name:"DMV Insertion and Removal Set"});
    const productHydrapeg: any = _.find(this.productsAdditional, {name:"Hydrapeg"});

    if (this.getAdditionalPrices(true)[keyDMV]) {
      let dmv = {
        id: productDMV.idProduct,
        name: productDMV.name,
        price: this.getAdditionalPrices(true)[keyDMV],
        quantity: productSelected.quantity,
        patient: productSelected.patient,
        codeSpectrum: productDMV.codeSpectrum,
        detail: {}
      }

      if (type === 'basket') {
        dmv.detail = productSelected.detail;
      }
      additionals.push(dmv);
    }

    if (this.getAdditionalPrices(true)[keyHydrapeg]) {
      const hydrapeg = {
        id: productHydrapeg.idProduct,
        name: productHydrapeg.name,
        price: this.getAdditionalPrices(true)[keyHydrapeg],
        quantity: productSelected.quantity,
        patient: productSelected.patient,
        codeSpectrum: productHydrapeg.codeSpectrum,
        detail: {}
      }

      if (type === 'basket') {
        hydrapeg.detail = productSelected.detail;
      }
      additionals.push(hydrapeg)
    }

    return additionals;
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
    const self = this;
    let paramsBody = [];
    const paramsHeader = this.getParams('header', value.eye);

    //--------------------------------------------------------

    if (this.product.name.includes('Atlantis')) { //Atlantis Case

      if (value.param.name === 'Design') {

        const selectedDesign = value.param.selected;
        this.setPriceByDesign(value.eye, selectedDesign);
        this.showImg[value.eye] = false;

        paramsBody = _.filter(this.originalParameters[value.eye], function (param) {
          switch (selectedDesign) {
            case 'Atlantis SPH':
            case 'Atlantis FT':
              if (_.includes(['LZ 3D Vault / 2.0', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param, 0);
            case 'Atlantis TPC':
            case 'Atlantis MF':
              if (param.name === 'LZ 3D Vault / 2.0') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'LZ 3D Vault / 2.0' && !param.header && !self.checkAtlantisParams(param, 0);
            case 'Atlantis 3D':
              if (param.name === 'TPC') {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param, 0);
            case 'Atlantis 2.0':
              self.paramsAtlantisImages[value.eye].parameters = _.filter(self.originalParameters[value.eye], function (param) {
                return selectedDesign === 'Atlantis 2.0' && self.checkAtlantisParams(param, 0);
              });
              self.getClock(value.eye);
              self.showImg[value.eye] = true;
              if (_.includes(['Limbal Zone', 'Scleral Zone', 'TPC'], param.name)) {
                param.selected = (param.type === 'radio') ? 'No' : null;
              }
              return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param, 1);
            case 'Atlantis LD':
              return !param.header && !self.checkAtlantisParams(param, 0);
            default:
              return param && !self.checkAtlantisParams(param, 0) && !param.header;
          }
        });

        this.product[this.parametersByEye(value.eye)] = _.concat(paramsHeader, paramsBody);
        this.setRequiredParams(value);
      }
    } else if (this.product.name.includes('RGP')) { // RGP CASE

      if (value.param.name === 'Design') {

        const selectedDesign = value.param.selected;
        this.setPriceByDesign(value.eye, selectedDesign);
      }

    } else if (this.product.name.includes('Soft')) { //Custom Soft Case

        if (value.param.name === 'Presentation') {
          this.presentationAndDesign[value.eye.toLowerCase()].presentation = value.param.selected;
          this.setPriceByDesign(value.eye, value.param.selected);
        }
        if (value.param.name === 'Design') {

          const selectedDesign = value.param.selected;
          this.presentationAndDesign[value.eye.toLowerCase()].design = selectedDesign;
          this.setPriceByDesign(value.eye, selectedDesign);

          paramsBody = _.filter(this.originalParameters[value.eye], function (param) {
            switch (selectedDesign) {
              case 'X-Cel Multifocal': //addition, dom eye, distance zone
                return !param.header;
              case 'Flexlens Large Diameter':
                if (param.name === 'Presentation') {
                  param.values = param.values.filter(p => p !== '3 Pack');
                  param.selected = (param.selected === '3 Pack') ? null : param.selected;
                  self.presentationAndDesign[value.eye.toLowerCase()].presentation = null;
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

  setPriceByDesign(eye, design) {

    //do i get it from db or set it here? X-Cel RGP X-Cel Atlantis Scleral X-Cel Custom Soft
     //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.0", "Atlantis LD"
    if (this.product.name.includes('Atlantis')) {
      switch (design) {
        case 'Atlantis SPH':
          this.price[eye].spCode = '122A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 95;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 95;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 95;
              break;
          }
        break;
        case 'Atlantis TPC':
          this.price[eye].spCode = '126A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 140;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 140;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 140;
              break;
          }
        break;
        case 'Atlantis FT':
          this.price[eye].spCode = '125A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 140;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 140;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 140;
              break;
          }
        break;
        case 'Atlantis 3D':
          this.price[eye].spCode = '124A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 140;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 140;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 140;
              break;
          }
        break;
        case 'Atlantis MF':
          this.price[eye].spCode = '125A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 140;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 140;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 140;
              break;
          }
        break;
        case 'Atlantis 2.0':
          this.price[eye].spCode = '127A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 140;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 140;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 140;
              break;
          }
        break;
        case 'Atlantis LD':
          this.price[eye].spCode = '123A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 140;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 140;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 140;
              break;
          }
        break;
      }
    } else if (this.product.name.includes('RGP')) {
      switch (design) {
        case 'Apex':
          this.price[eye].spCode = '130A';
          switch (this.membership) {
            case 1://Gold
              this.price[eye].priceUnit = 65;
              break;
            case 2://Diamond
              this.price[eye].priceUnit = 65;
              break;
            case 3://Preffered
              this.price[eye].priceUnit = 65;
          break;
          }
          break;
          case 'Bitoric':
            this.price[eye].spCode = '129A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 32;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 32;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 32;
                break;
            }
          break;
          case 'CV-4 Multifocal':
            this.price[eye].spCode = '133A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 66;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 66;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 66;
                break;
            }
          break;
          case 'Pinnacle':
            this.price[eye].spCode = '118A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 21;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 21;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 21;
                break;
            }
          break;
          case 'Pinnacle IC':
            this.price[eye].spCode = '120A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 55;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 55;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 55;
                break;
            }
          break;
          case 'Pinnacle LD':
            this.price[eye].spCode = '119A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 31;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 31;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 31;
                break;
            }
          break;
          case 'Proplus':
            this.price[eye].spCode = '131A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 47;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 47;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 47;
                break;
            }
          break;
          case 'Sphere':
            this.price[eye].spCode = '114A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 21;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 21;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 21;
                break;
            }
          break;
          case 'Starlens':
            this.price[eye].spCode = '116A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 21;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 21;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 21;
                break;
            }
          break;
          case 'Titan':
            this.price[eye].spCode = '121A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 65;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 65;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 65;
                break;
            }
          break;
          case 'X-Cel Thin':
            this.price[eye].spCode = '117A';
            switch (this.membership) {
              case 1://Gold
                this.price[eye].priceUnit = 21;
                break;
              case 2://Diamond
                this.price[eye].priceUnit = 21;
                break;
              case 3://Preffered
                this.price[eye].priceUnit = 21;
                break;
            }
          break;
      }

    } else if (this.product.name.includes('Custom Soft')) {
      const customDesign = this.presentationAndDesign[eye.toLowerCase()].design;
      const customPresentation = this.presentationAndDesign[eye.toLowerCase()].presentation;
      if (!!customDesign && !!customPresentation) {
        switch (customDesign) {
          case 'Adult Aphakic':
          case 'Pediatric Aphakic':
            switch (customPresentation) {
              case 'Single (Vial)':
                this.price[eye].spCode = '104A (W)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 60.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 60.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 60.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.price[eye].spCode = '104B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 30.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 30.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 30.00;
                    break;
                }
              break;
              case '3 Pack':
                this.price[eye].spCode = '104C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 93.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 93.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 93.00;
                    break;
                }
              break;
            }
          break;
          case 'X-Cel Multifocal':
            switch (customPresentation) {
              case 'Single (Vial)':
                this.price[eye].spCode = '107A (W)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 69.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 69.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 69.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.price[eye].spCode = '107B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 36.50;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 36.50;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 36.50;
                    break;
                }
              break;
              case '3 Pack':
                this.price[eye].spCode = '107C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 103.50;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 103.50;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 103.50;
                    break;
                }
              break;
            }
          break;
          case 'Flexlens ARC':
            switch (customPresentation) {
              case 'Single (Vial)':
                this.price[eye].spCode = '100A (W)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 79.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 79.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 79.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.price[eye].spCode = '100B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 45.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 45.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 45.00;
                    break;
                }
              break;
              case '3 Pack':
                this.price[eye].spCode = '100C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 99.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 99.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 99.00;
                    break;
                }
              break;
            }
          break;
          case 'Flexlens Piggyback':
            switch (customPresentation) {
              case 'Single (Vial)':
                this.price[eye].spCode = '103A (W)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 60.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 60.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 60.00;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.price[eye].spCode = '103B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 37.50;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 37.50;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 37.50;
                    break;
                }
              break;
              case '3 Pack':
                this.price[eye].spCode = '103C (3PK)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 110.00;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 110.00;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 110.00;
                    break;
                }
              break;
            }
          break;
          case 'Flexlens Large Diameter':
            switch (customPresentation) {
              case 'Single (Vial)':
                this.price[eye].spCode = '108A (W)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 51.75;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 51.75;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 51.75;
                    break;
                }
              break;
              case 'Spare (Blister)':
                this.price[eye].spCode = '108B (NW)';
                switch (this.membership) {
                  case 1://Gold
                    this.price[eye].priceUnit = 32.30;
                    break;
                  case 2://Diamond
                    this.price[eye].priceUnit = 32.30;
                    break;
                  case 3://Preffered
                    this.price[eye].priceUnit = 32.30;
                    break;
                }
              break;
            }
            break;
            case 'Flexlens PRS':
              switch (customPresentation) {
                case 'Single (Vial)':
                  this.price[eye].spCode = '102A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 70.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 70.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 70.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.price[eye].spCode = '102B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 37.50;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 37.50;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 37.50;
                      break;
                  }
                break;
                case '3 Pack':
                  this.price[eye].spCode = '102C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 80.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 80.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 80.00;
                      break;
                  }
                break;
              }
            break;
            case 'Flexlens Sphere':
              switch (customPresentation) {
                case 'Single (Vial)':
                  this.price[eye].spCode = '105A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 26.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 26.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 26.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.price[eye].spCode = '105B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 14.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 14.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 14.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.price[eye].spCode = '105C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 42.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 42.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 42.00;
                      break;
                  }
                break;
              }
            break;
            case 'Flexlens Toric':
              switch (customPresentation) {
                case 'Single (Vial)':
                  this.price[eye].spCode = '106A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 40.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 40.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 40.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.price[eye].spCode = '106B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 18.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 18.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 18.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.price[eye].spCode = '106C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 54.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 54.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 54.00;
                      break;
                  }
                break;
              }
            break;
            case 'Flexlens Tricurve':
              switch (customPresentation) {
                case 'Single (Vial)':
                  this.price[eye].spCode = '101A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 70.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 70.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 70.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.price[eye].spCode = '101B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 37.50;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 37.50;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 37.50;
                      break;
                  }
                break;
                case '3 Pack':
                  this.price[eye].spCode = '101C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 80.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 80.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 80.00;
                      break;
                  }
                break;
              }
            break;
            case 'Horizon Sphere':
              switch (customPresentation) {
                case 'Single (Vial)':
                  this.price[eye].spCode = '111A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 26.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 26.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 26.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.price[eye].spCode = '111B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 14.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 14.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 14.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.price[eye].spCode = '111C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 42.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 42.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 42.00;
                      break;
                  }
                break;
              }
            break;
            case 'Horizon Toric':
              switch (customPresentation) {
                case 'Single (Vial)':
                  this.price[eye].spCode = '112A (W)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 40.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 40.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 40.00;
                      break;
                  }
                break;
                case 'Spare (Blister)':
                  this.price[eye].spCode = '112B (NW)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 18.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 18.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 18.00;
                      break;
                  }
                break;
                case '3 Pack':
                  this.price[eye].spCode = '112C (3PK)';
                  switch (this.membership) {
                    case 1://Gold
                      this.price[eye].priceUnit = 54.00;
                      break;
                    case 2://Diamond
                      this.price[eye].priceUnit = 54.00;
                      break;
                    case 3://Preffered
                      this.price[eye].priceUnit = 54.00;
                      break;
                  }
                break;
              }
            break;

          //---------------------------------------------//
        }
      }

    }

  }

  setTotalPrice() {
    let totalEyes = this.price.right.priceUnit * this.quantity.right;
    totalEyes += this.price.left.priceUnit * this.quantity.left;

    const priceDmv = this.getAdditionalPrices(true).dmv;
    const priceHydrapeg = this.getAdditionalPrices(false).hydrapeg;

    return totalEyes + priceDmv + priceHydrapeg;
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

  checkAtlantisParams(param, flag) {
    if (flag && param.name === 'Atlantis 2.0 C.S.A') {
      return false;
    }
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

  checkDisabled() {

    return this.missingParamsRequired();
  }

  missingParamsRequired() {
    const eyes = ['right', 'left'];
    const eyesEnabled = [this.enable.right, this.enable.left];
    const nothingSelected = _.every(eyesEnabled, function (eye) { return !eye; });
    const self = this;

    return !this.product.client || !this.product.patient || nothingSelected || _.some(eyes, function (eye, index) {
      return eyesEnabled[index] && _.some(self.product[self.parametersByEye(eye)], function (parameter) {
        return !parameter.noRequired && !parameter.selected;
      });
    });
  }

  getAtlantisParams(eye) {
    return this.paramsAtlantisImages[eye].parameters;
  }

  getClock(eye) {
    const self = this;
    _.each(this.paramsAtlantisImages[eye].parameters, function (param) {
      if ('Clock Mark' === param.name) {
        self.paramsAtlantisImages[eye].clock = param;
      }
    });
  }

  getProductSheet() {
    const language = this.userStorageService.getLanguage();
    const path = "https://storage.googleapis.com/spectrum-storage/products-sheets/xcel/";
    return path + language + ".pdf";
  }
}
