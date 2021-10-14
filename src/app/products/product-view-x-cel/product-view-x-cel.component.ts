import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';
import { FileProductRequested } from '../../shared/models/fileproductrequested';
import { ProductService } from '../../shared/services/products/product.service';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';

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
    enable = {
      right: false,
      left: false
    };

    listFileRightEye: Array<FileProductRequested> = new Array;
    listFileLeftEye: Array<FileProductRequested> = new Array;

    @ViewChildren('uploadFile') uploadFilesComponents: QueryList<UploadFileComponent>;

    constructor(private route: ActivatedRoute,
                private userStorageService: UserStorageService,
                private productService: ProductService) {}

    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.user = JSON.parse(this.userStorageService.getCurrentUser());
      this.getProduct();
    }

    initFooterButtons() {
      this.buttons = [
        { name: 'Buy Now', icon: null , hidden: this.user.role.idRole === 3, fn:'buyNow' },
        { name: 'Add to cart', icon:'fa fa-cart-plus', hidden: this.product.typeOrder !== 'new', fn:'addToCart'}
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
  }
