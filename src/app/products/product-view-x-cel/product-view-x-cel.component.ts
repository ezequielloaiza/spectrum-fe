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
  newParameters = {right: [], left: []};
  enable = {
    right: false,
    left: false
  };

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

  initFooterButtons() {
    this.buttons = [
      { name: 'Buy Now', icon: null, hidden: this.user.role.idRole === 3, fn: 'buyNow' },
      { name: 'Add to cart', icon: 'fa fa-cart-plus', hidden: this.product.typeOrder !== 'new', fn: 'addToCart' }
    ];
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

  getProduct() {
    this.productService.findById$(this.id).subscribe(res => {
      this.product = res.data[0];
      this.product.typeOrder = 'new';

      this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
      this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;

      this.initFooterButtons();
    });
  }

  validation() {
    return true;
  }

  selectEye(object) {
    this.enable[object.name] = object.value;
  }

  parametersByEye(eye) {

    return eye === 'right' ? 'parametersRight' : 'parametersLeft';
  }

  changeParamHeader(value) {
    //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.O", "Atlantis LD"
    let self = this;
    let valueSelected = value.param.selected;
    let eyeParameter = this.parametersByEye(value.eye);

    if (value.param.name === 'Design') {

      self.newParameters[value.eye] = _.filter(this.product[eyeParameter], function (param) {

        switch (valueSelected) {
          case 'Atlantis SPH':
          case 'Atlantis FT':
            return param.name !== 'Atlantis 2.0 C.S.A' && param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !param.header;
          case 'Atlantis TPC':
          case 'Atlantis MF':
            return param.name !== 'Atlantis 2.0 C.S.A' && param.name !== 'LZ 3D Vault / 2.0' && !param.header;
          case 'Atlantis 3D':
            return param.name !== 'Atlantis 2.0 C.S.A' && param.name !== 'TPC' && !param.header;
          case 'Atlantis 2.O':
            return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && !param.header;
          case 'Atlantis LD':
            return param.name !== 'Atlantis 2.0 C.S.A';
          default:
            return param;
        }

      });
      this.setRequiredParams(value);
    }
  }

  setRequiredParams({ param, eye }) {
    let self = this;
    _.each(this.newParameters[eye], function (p, index) {
      switch (p.name) {
        case 'TPC':
        case 'Addition':
        case 'Dom. Eye':
        case 'Distance Zone':
          if (param.name === 'Design') {
            self.newParameters[eye][index].noRequired = param.selected !== 'Atlantis MF';
          }
          break;
      }
    });
  }
}
