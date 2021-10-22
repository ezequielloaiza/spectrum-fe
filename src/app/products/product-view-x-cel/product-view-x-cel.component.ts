import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { ProductService } from '../../shared/services/products/product.service';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import * as _ from 'lodash';

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

  enableParams = { right: false, left: false };

  listFileRightEye: Array<FileProductRequested> = new Array;
  listFileLeftEye: Array<FileProductRequested> = new Array;

  @ViewChildren('uploadFile') uploadFilesComponents: QueryList<UploadFileComponent>;

  constructor(private route: ActivatedRoute,
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
      return !self.checkAtlantisParams(param.name);
    });
    this.product.parametersLeft = _.filter(this.product.parametersLeft, function (param) {
      return !self.checkAtlantisParams(param.name);
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
    console.log('buyNow');
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

    return eye === 'right' ? 'parametersRight' : 'parametersLeft';
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

  changeParam(value) {
    //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.O", "Atlantis LD"
    const self = this;
    let valueSelected = value.param.selected;
    let paramsBody = [];
    const paramsHeader = this.getParams('header', value.eye);


    if (value.param.name === 'Design') {

      paramsBody = _.filter(this.originalParameters[value.eye], function (param) {

        switch (valueSelected) {
          case 'Atlantis SPH':
          case 'Atlantis FT':
            return param.name !== 'Atlantis 2.0 C.S.A' && param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param.name);
          case 'Atlantis TPC':
          case 'Atlantis MF':
            return param.name !== 'Atlantis 2.0 C.S.A' && param.name !== 'LZ 3D Vault / 2.0' && !param.header && !self.checkAtlantisParams(param.name);
          case 'Atlantis 3D':
            return param.name !== 'Atlantis 2.0 C.S.A' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param.name);
          case 'Atlantis 2.O':
            return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && !param.header;
          case 'Atlantis LD':
            return param.name !== 'Atlantis 2.0 C.S.A' && !param.header && !self.checkAtlantisParams(param.name);
          default:
            return param && !self.checkAtlantisParams(param.name) && !param.header;
        }

      });
      this.product[this.parametersByEye(value.eye)] = _.concat(paramsHeader, paramsBody);
      this.setRequiredParams(value);
    }
  }

  setRequiredParams({ param, eye }) {
    let self = this;
    _.each(this.product[this.parametersByEye(eye)], function (p, index) {
      switch (p.name) {
        case 'TPC':
          if (param.name === 'Design') {
            self.product[self.parametersByEye(eye)][index].noRequired = param.selected !== 'Atlantis TPC';
          }
        break;
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
    switch (param) {
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
        return true;
      default:
        break;
    }
  }
}
