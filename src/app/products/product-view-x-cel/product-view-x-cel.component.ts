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
  membership: any;
  product: any;
  buttons: any;
  insertor: any;
  dmv = 5.15;
  hydrapeg = 25.00;
  originalParameters = { right: [], left: [] };
  enable = {
    right: false,
    left: false
  };
  disableBuyButton = true;
  selectedProduct = { params: [{ name: 'Right', header: [], params: [] }, { name: 'Left', header: [], params: [] }] };
  price = { right: { spCode: null, priceUnit: 0 }, left: { spCode: null, priceUnit: 0 } };
  quantity = { right: 0, left: 0 };
  presentationAndDesign = { right: { presentation: '', design: '' }, left:{ presentation: '', design: ''} };


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
    this.membership = this.user.userResponse.membership.idMembership;
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
      this.product.header = JSON.parse(this.product.types)[0].header;

      this.initFooterButtons();
      this.initialViewParams();
      this.insertorButton();
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

  insertorButton() {
    this.insertor = this.product.name.includes('Atlantis') /*? true : false*/;
  }

 /*  buttonAction(functionName) {
   // if (functionName === 'buyNow') {
      this.buyNow(functionName);
    //}
/*
    if (functionName === 'addToCart') {
      this.addToCart();
    }
  } */

  buttonAction(functionName) {
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
    this.selectedProduct['insertor'] = this.product.name.includes('Atlantis') ? this.product.header[0] : null;//this's DMV according to Json

    this.setSelectedParams();
    this.selectedProduct['price'] = this.price; //an object that has selected designs and their price
    this.selectedProduct['totalPrice'] = this.setTotalPrice(); //sum both eyes, hydra, dmv
    //console.log("revisando prices", this.selectedProduct['price']);
    //this.spinner.hide();
    const modalRef = this.modalService.open( PurchaseConfirmationComponent,
      { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.selectedProduct = this.selectedProduct;
    modalRef.componentInstance.buttonPressed = functionName;
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
            if (param.name === 'Quantity') {
              self.quantity[parameters.name.toLowerCase()] = param.selected;
            }
            if (param.name === 'Design') { //put spectrum code right after Design header.
              parameters.header = _.concat(parameters.header, { name: 'Spectrum Code', selected: self.price[parameters.name.toLowerCase()].spCode });//ver cual ojo colocar
            }
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
    const self = this;
    let paramsBody = [];
    const paramsHeader = this.getParams('header', value.eye);

    //--------------------------------------------------------

    if (this.product.name.includes('Atlantis')) { //Atlantis Case

      if (value.param.name === 'Design') {

        const selectedDesign = value.param.selected;
        this.setPriceByDesign(value.eye, selectedDesign);

        paramsBody = _.filter(this.originalParameters[value.eye], function (param) {
          switch (selectedDesign) {
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
      console.log(this.presentationAndDesign);
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
                  param.selected = null;
                  this.presentationAndDesign[value.eye.toLowerCase()].presentation = null;
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
     //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.O", "Atlantis LD"
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
        case '"Atlantis FT':
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
        case 'Atlantis 2.O':
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
/*               case '3 Pack': //This presentation is not being offered
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
              break; */
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
    let total = 0;
    let insertorUsed = false;
    let hydraTotal = 0;
    const dmvSelected = this.product.header[0].selected;

    if (this.enable.right) {
      total += this.price.right.priceUnit * this.quantity.right;
      total = (dmvSelected === 'Yes' && !insertorUsed) ? total + this.dmv : total;
      insertorUsed = true;
      _.each(this.product.parametersRight, function(param) {
        if (param.name === 'Hydrapeg' && param.selected === 'Yes') {
          hydraTotal++;
        }
      })
    }
    if (this.enable.left) {
      total += this.price.left.priceUnit * this.quantity.left;
      total = (dmvSelected === 'Yes' && !insertorUsed) ? total + this.dmv : total;
      insertorUsed = true;
      _.each(this.product.parametersLeft, function(param) {
        if (param.name === 'Hydrapeg' && param.selected === 'Yes') {
          hydraTotal++;
        }
      })
    }
    debugger
    return total + (hydraTotal * this.hydrapeg);//+ hydra, + dmv
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
