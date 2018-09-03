(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/product-detail/product-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <br>\n  <a routerLink=\"/products/{{id}}/product-view\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <br>\n  <h4>Complete the specifications of your product <strong>{{ product.name }}</strong></h4>\n  <br>\n  <!-- card.// -->\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <!--RIGHT EYE-->\n      <div class=\"col-md-6\" *ngFor=\"let eye of eyes\">\n        <h3 class=\"label-eye\">{{eye.name}}</h3>\n        <ngb-tabset>\n          <ngb-tab *ngFor=\"let type of product.types\">\n            <ng-template ngbTabTitle>\n              <div (click)=\"setParameters(type)\">\n                <label>{{ type.name }}</label>\n              </div>\n            </ng-template>\n            <ng-template ngbTabContent>\n              <!-- item-property-hor .// -->\n              <dl class=\"param param-feature\">\n                <br>\n                <dt>{{ 'Parameters' | translate }}</dt>\n                <dd>\n                  <div *ngFor=\"let parameter of parameters\" class=\"col-sm-12\">\n                    <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                      <!--One value in list values -->\n                      <div *ngIf=\"parameter.type === 'number'\">\n                        <select class=\"form-control\" name=\"value\" (change)=\"changeSelect(eye.type, parameter, $event.target.value)\">\n                          <option *ngFor=\"let value of parameter.values\">{{ value }}</option>\n                        </select>\n                      </div>\n                      <div *ngIf=\"parameter.type === 'radio'\">\n                        <div *ngFor=\"let value of parameter.values\" class=\"custom-control custom-radio\">\n                          <input class=\"custom-control-input\" type=\"radio\" id=\"{{ value.name + eye.type }}\" [checked]=\"checkedRadio(eye.type, value)\" (click)=\"setValueRadio(eye.type, value, parameter.values)\">\n                          <label class=\"custom-control-label\" for=\"{{ value.name + eye.type }}\">{{ value.name }}</label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </dd>\n                <br>\n                <!-- colors\n                <dt>{{ 'Colors' | translate }}</dt>\n                <dd>\n                  <div class=\"custom-control custom-radio\" name=\"colors\" *ngFor=\"let color of product.colors\">\n                    <input type=\"radio\" id=\"{{ color.name }}\" name=\"colors\" class=\"custom-control-input\" [checked]=\"color.selected === true\"\n                      (click)=\"setColor(color)\">\n                    <label class=\"custom-control-label\" for=\"{{ color.name }}\">{{ color.name }}</label>\n                  </div>\n                </dd>\n                -->\n              </dl>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn-save\">\n    <a (click)=\"buyNow()\" class=\"btn btn-lg btn-primary text-uppercase\">Confirm Buy</a>&nbsp;\n  </div>\n</div>\n<!--container.//-->\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 0px 40px 0px 40px; }\n\n.card-body {\n  padding: 20px !important;\n  display: flex; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\n.label-eye {\n  color: #1756a6;\n  padding-bottom: 5px; }\n\n.btn-save {\n  text-align: center;\n  color: white;\n  padding-top: 20px; }\n"

/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.products = new Array;
        this.eyes = new Array;
        this.quantity = 1;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.setEyes();
        this.getProducts();
    };
    ProductDetailComponent.prototype.setEyes = function () {
        this.eyes = [{ type: 'left', name: 'Eye Left' }, { type: 'right', name: 'Eye Right' }];
    };
    ProductDetailComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductDetailComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-8, -0.75, 0.25)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.types = JSON.parse(this.product.types);
        //simulando click en el primer type del producto actual
        this.parameters = this.product.types[0].parameters;
    };
    ProductDetailComponent.prototype.setParameters = function (type) {
        this.cleanTypeSelected();
        type.selected = true;
        this.parameters = type.parameters;
    };
    ProductDetailComponent.prototype.cleanTypeSelected = function () {
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.types, function (type) {
            type.selected = false;
        });
    };
    ProductDetailComponent.prototype.setColor = function (color) {
        this.cleanColorSelected();
        color.selected = true;
    };
    ProductDetailComponent.prototype.cleanColorSelected = function () {
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.colors, function (color) {
            color.selected = false;
        });
    };
    ProductDetailComponent.prototype.changeSelect = function (typeEye, parameter, value) {
        if (typeEye === 'left') {
            parameter.selectedLeft = value;
        }
        else {
            parameter.selectedRight = value;
        }
    };
    ProductDetailComponent.prototype.checkedRadio = function (typeEye, value) {
        if (typeEye === 'left') {
            if (value.selectedLeft === true)
                return true;
        }
        else {
            if (value.selectedRight === true)
                return true;
        }
        return false;
    };
    ProductDetailComponent.prototype.setValueRadio = function (typeEye, value, values) {
        this.cleanValueRadio(typeEye, values);
        if (typeEye === 'left') {
            value.selectedLeft = true;
        }
        else {
            value.selectedRight = true;
        }
    };
    ProductDetailComponent.prototype.cleanValueRadio = function (typeEye, values) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](values, function (value) {
            if (typeEye === 'left') {
                value.selectedLeft = false;
            }
            else {
                value.selectedRight = false;
            }
        });
    };
    ProductDetailComponent.prototype.buildOrder = function () {
        var color = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.product.colors, function (color) {
            return color.selected === true;
        });
        var type = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.product.types, function (type) {
            return type.selected === true;
        });
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](type.parameters, function (parameter, index) {
            if (parameter.type === "radio") {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parameter.values, function (value) {
                    if (value.selectedLeft) {
                        parameter.selectedLeft = value.name;
                    }
                    if (value.selectedRight) {
                        parameter.selectedRight = value.name;
                    }
                });
            }
            type.parameters[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values']);
        });
        //verificar atributos del producto que se enviaran a la orden
        var productToBuy = {
            id: this.product.id,
            name: this.product.name,
            priceBase: this.product.priceBase,
            price1: this.product.price1,
            price2: this.product.price2,
            price3: this.product.price3,
            category: this.product.category,
            subCategory: this.product.subCategory,
            material: this.product.material,
            description: this.product.description,
            replacementPeriod: this.product.replacementPeriod,
            warranty: this.product.warranty,
            stock: this.product.stock,
            color: 'falta traerselo',
            type: type,
            quantityBuy: this.quantity
        };
        return productToBuy;
    };
    ProductDetailComponent.prototype.buyNow = function () {
        this.order = this.buildOrder();
        this.getProducts();
        alert('In construction.');
        this.router.navigate(['/order-list-client']);
        console.log(JSON.stringify(this.order));
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/products/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view/product-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <br>\n  <a routerLink=\"/products\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"assets/images/products/quattro.jpg\" />\n            </div>\n          </div>\n          <!--\n          <ul class=\"preview-thumbnail nav nav-tabs\">\n            <li class=\"active\">\n              <a data-target=\"#pic-1\" data-toggle=\"tab\">\n                <img src=\"assets/images/products/quattro.jpg\" />\n              </a>\n            </li>\n            <li>\n              <a data-target=\"#pic-2\" data-toggle=\"tab\">\n                <img src=\"assets/images/products/quattro.jpg\" />\n              </a>\n            </li>\n            <li>\n              <a data-target=\"#pic-3\" data-toggle=\"tab\">\n                <img src=\"assets/images/products/quattro.jpg\" />\n              </a>\n            </li>\n            <li>\n              <a data-target=\"#pic-4\" data-toggle=\"tab\">\n                <img src=\"assets/images/products/quattro.jpg\" />\n              </a>\n            </li>\n            <li>\n              <a data-target=\"#pic-5\" data-toggle=\"tab\">\n                <img src=\"assets/images/products/quattro.jpg\" />\n              </a>\n            </li>\n          </ul>\n          -->\n        </div>\n        <div class=\"details col-md-6\">\n          <h3 class=\"product-title\">{{ product.name }}</h3>\n          <!--\n          <div class=\"rating\">\n            <div class=\"stars\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n            <span class=\"review-no\">41 reviews</span>\n          </div>\n          -->\n          <h5>Description</h5>\n          <p class=\"product-description\">{{ product.description }}</p>\n          <hr>\n          <h4 class=\"price\">current price:\n            <span>${{ product.price1 }}</span>\n          </h4>\n          <!--\n          <p class=\"vote\"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>\n          <h5 class=\"sizes\">sizes:\n            <span class=\"size\" data-toggle=\"tooltip\" title=\"small\">s</span>\n            <span class=\"size\" data-toggle=\"tooltip\" title=\"medium\">m</span>\n            <span class=\"size\" data-toggle=\"tooltip\" title=\"large\">l</span>\n            <span class=\"size\" data-toggle=\"tooltip\" title=\"xtra large\">xl</span>\n          </h5>\n          <h5 class=\"colors\">colors:\n            <span class=\"color orange not-available\" data-toggle=\"tooltip\" title=\"Not In store\"></span>\n            <span class=\"color green\"></span>\n            <span class=\"color blue\"></span>\n          </h5>\n          -->\n          <!-- properties -->\n          <dl class=\"item-property\">\n            <dt>{{ 'Properties' | translate }}</dt>\n            <p>\n              <img placement=\"top\" ngbTooltip=\"Toric\" class=\"alignleft wp-image-1358\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-02-150x150.png\"\n                alt=\"Toric\" width=\"30\" height=\"30\">&nbsp;\n              <img placement=\"top\" ngbTooltip=\"Multifocal\" class=\"alignleft wp-image-1359\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-03-300x300.png\"\n                alt=\"Multifocal\" width=\"30\" height=\"30\">&nbsp;\n              <img placement=\"top\" ngbTooltip=\"3-monthly\"class=\"wp-image-1389 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/10/íconos-09-273x300.png\"\n                alt=\"\" width=\"30\" height=\"33\">&nbsp;\n              <img placement=\"top\" ngbTooltip=\"Sylicone Hydrogel\" class=\"wp-image-1362 alignleft\"src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-06-250x300.png\"\n                alt=\"\" width=\"28\" height=\"33\">&nbsp;\n              <img placement=\"top\" ngbTooltip=\"UV Filter\" class=\"wp-image-1364 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png\"\n                alt=\"\" width=\"35\" height=\"33\" srcset=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png 300w, http://spctinternational.com/wp-content/uploads/2017/09/íconos-08.png 459w\"\n                sizes=\"(max-width: 35px) 100vw, 35px\">&nbsp;\n            </p>\n          </dl>\n          <!-- product sheet -->\n          <dl class=\"item-property\">\n            <dt>Product Sheet</dt>\n            <dd>\n              <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'download' }}</a>\n            </dd>\n          </dl>\n          <!-- info buy-->\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <!-- price-detail-wrap .// -->\n              <dl class=\"param param-inline\">\n                <dt>Stock</dt>\n                <dd>\n                  <h5>{{ product.stock }}</h5>\n                </dd>\n              </dl>\n            </div>\n            <div class=\"col-sm-3\">\n              <dl class=\"param param-inline\">\n                <dt>Quantity: </dt>\n                <dd>\n                  <input type='number' class=\"form-control\" min=\"1\" max=\"{{ product.stock }}\" step=\"1\" ng-disabled=\"product.stock === 0\" [(ngModel)]=\"quantity\">\n                </dd>\n              </dl>\n              <!-- item-property .// -->\n            </div>\n            <!-- col.// -->\n            <div class=\"col-sm-6\">\n              <dl class=\"param param-inline\">\n                <dt>Total: </dt>\n                <dd>\n                  <span class=\"price h3 text-warning\">\n                    <span class=\"currency\">US $</span>\n                    <span class=\"num\">{{ product.price1 * quantity }}</span>\n                  </span>\n                </dd>\n              </dl>\n              <!-- item-property .// -->\n            </div>\n            <!-- col.// -->\n          </div>\n          <!--buttons buy-->\n          <hr>\n          <br>\n          <div class=\"buy-btns\">\n            <a routerLink=\"/products/{{product.idProduct}}/product-details/{{'toBuy'}}\" class=\"btn btn-lg btn-primary text-uppercase\">\n              Buy now </a>&nbsp;\n            <a routerLink=\"/products/{{product.idProduct}}/product-details/{{'toCart'}}\" class=\"btn btn-lg btn-outline-primary text-uppercase\">\n              <i class=\"fa fa-cart-plus\"></i> Add to cart\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/products/product-view/product-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 0px 40px 0px 40px;\n  margin-top: -40px; }\n\n.card-body {\n  padding: 20px !important; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\n\nimg {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  margin-top: 50px;\n  background: #eee;\n  padding: 3em;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked,\n.price span {\n  color: #ff9f1a; }\n\n.product-title,\n.rating,\n.product-description,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.buy-btns {\n  text-align: right; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/products/product-view/product-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.products = new Array;
        this.quantity = 1;
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](4, 10, 0.5)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.infoAditional = JSON.parse(this.product.infoAditional);
        //simulando click en el primer type del producto actual
        //this.parameters = this.product.types[0].parameters;
    };
    ProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__(/*! ./product-view.component.html */ "./src/app/products/product-view/product-view.component.html"),
            styles: [__webpack_require__(/*! ./product-view.component.scss */ "./src/app/products/product-view/product-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<div class=\"margin-breadcrumb\">\n  <app-page-header [heading]=\"'Products List'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <br>\n  <a routerLink=\"/dashboard\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"middleBar\">\n  <div class=\"row display-table\">\n    <div class=\"col-sm-3 vertical-align text-left hidden-xs\">\n    </div>\n    <!-- end col -->\n    <div class=\"col-sm-9 vertical-align text-center\">\n      <form>\n        <div class=\"row grid-space-1\">\n          <div class=\"col col-xl-12 col-lg-12 search\">\n            <input class=\"form-control\" placeholder=\" {{ 'Enter product name...' | translate }} \">\n            <i class=\"fa fa-search\"></i>\n          </div>\n          <!-- Categories\n          <div class=\"col-sm-4\">\n            <select class=\"form-control input-lg\" name=\"category\">\n              <option value=\"all\">All Categories</option>\n              <optgroup label=\"Mens\">\n                <option value=\"shirts\">Shirts</option>\n                <option value=\"coats-jackets\">Coats & Jackets</option>\n                <option value=\"underwear\">Underwear</option>\n                <option value=\"sunglasses\">Sunglasses</option>\n                <option value=\"socks\">Socks</option>\n                <option value=\"belts\">Belts</option>\n              </optgroup>\n              <optgroup label=\"Womens\">\n                <option value=\"bresses\">Bresses</option>\n                <option value=\"t-shirts\">T-shirts</option>\n                <option value=\"skirts\">Skirts</option>\n                <option value=\"jeans\">Jeans</option>\n                <option value=\"pullover\">Pullover</option>\n              </optgroup>\n              <option value=\"kids\">Kids</option>\n              <option value=\"fashion\">Fashion</option>\n              <optgroup label=\"Sportwear\">\n                <option value=\"shoes\">Shoes</option>\n                <option value=\"bags\">Bags</option>\n                <option value=\"pants\">Pants</option>\n                <option value=\"swimwear\">Swimwear</option>\n                <option value=\"bicycles\">Bicycles</option>\n              </optgroup>\n              <option value=\"bags\">Bags</option>\n              <option value=\"shoes\">Shoes</option>\n              <option value=\"hoseholds\">HoseHolds</option>\n              <optgroup label=\"Technology\">\n                <option value=\"tv\">TV</option>\n                <option value=\"camera\">Camera</option>\n                <option value=\"speakers\">Speakers</option>\n                <option value=\"mobile\">Mobile</option>\n                <option value=\"pc\">PC</option>\n              </optgroup>\n            </select>\n          </div>\n          <!-- end col -->\n        </div>\n        <!-- end row -->\n      </form>\n    </div>\n    <!-- end col -->\n  </div>\n  <!-- end  row -->\n</div>\n\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!--FILTERS-->\n    <div class=\"col-sm-3 col-md-3 hidden-xs\">\n      <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"filter1,filter2\" type=\"dark\">\n        <ngb-panel id=\"filter1\">\n          <ng-template ngbPanelTitle>\n            <span class=\"title-collapse\"> {{ 'Supplies' | translate }} </span>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"fluoStrips\" name=\"types\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"fluoStrips\">{{ 'Fluo Strips' | translate }}</label>\n            </div>\n            <br>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"spectrumSaline\" name=\"types\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"spectrumSaline\">{{ 'Spectrum Saline' | translate }}</label>\n            </div>\n          </ng-template>\n        </ngb-panel>\n        <ngb-panel id=\"filter2\">\n          <ng-template ngbPanelTitle>\n            <span class=\"title-collapse\">{{ 'Contact Lenses' | translate }}</span>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"colorContactLenses\" name=\"types\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"colorContactLenses\">{{ 'Color Contact Lenses' | translate }}</label>\n            </div>\n            <br>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"scleralLenses\" name=\"types\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"scleralLenses\">{{ 'Scleral Lenses' | translate }}</label>\n            </div>\n            <br>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"spectrumBlueLight\" name=\"types\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"spectrumBlueLight\">{{ 'Spectrum Blue Light' | translate }}</label>\n            </div>\n            <br>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"markEnnovy\" name=\"types\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"markEnnovy\">{{ 'MarkEnnovy Contact Lenses' | translate }}</label>\n            </div>\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n      <br>\n      <div class=\"btn-align\">\n        <input type=\"button\" class=\"btn btn-primary\" value=\"{{ 'Search' | translate }}\">\n      </div>\n    </div>\n    <!--THUMBNAILS PRODUCTS-->\n    <div class=\"col-sm-9 col-md-9 col-lg-9\">\n      <div class=\"row\">\n        <div class=\"col-md-4 box-shadow\" *ngFor=\"let product of products\">\n          <div class=\"mb-4 box-shadow\">\n            <img class=\"card-img-top\" src=\"assets/images/products/quattro.jpg\">\n            <h3 class=\"product-name\">{{ product.name }}</h3>\n            <div class=\"card-body\">\n              <p class=\"card-text\"> {{ product.descriptionShort }}</p>\n              <div class=\"price-wrap h4\">\n                <del class=\"price-base\">${{ product.priceBase }}</del>&nbsp;\n                <span class=\"price-new text-warning\">${{ product.price1 }}</span>\n              </div>\n              <div class=\"product-btns\">\n                <div class=\"btn-group\">\n                  <button routerLink=\"/products/{{product.idProduct}}/product-view\" type=\"button\" class=\"btn btn-primary\">View</button>\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.margin-list {\n  margin-left: 20% !important; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.search {\n  padding-bottom: 1.5rem; }\n.search i {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    color: #ced4da; }\n.middleBar {\n  padding: 0px 25px 15px 35px; }\n.middleBar .display-table {\n    padding-right: 20px !important; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.btn-align {\n  text-align: center;\n  padding-bottom: 20px; }\n.card {\n  margin-top: 30px; }\n.card-img-top {\n  border-radius: 12px; }\n.product-name {\n  text-align: center;\n  color: #1756a6;\n  padding-top: 10px; }\n.card-product:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  visibility: hidden; }\n.card-product .price-new, .card-product .price {\n  margin-right: 5px; }\n.price-base {\n  color: #999; }\n.card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 220px;\n  text-align: center; }\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .action-wrap {\n  padding-top: 4px;\n  margin-top: 4px; }\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .title {\n  margin-top: 0; }\nbody {\n  margin-top: 50px; }\n.glyphicon {\n  margin-right: 10px; }\n.panel-body {\n  padding: 0px; }\n.panel-body table tr td {\n  padding-left: 15px; }\n.panel-body .table {\n  margin-bottom: 0px; }\n.product-btns {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListsComponent", function() { return ProductsListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsListsComponent = /** @class */ (function () {
    function ProductsListsComponent(productService) {
        this.productService = productService;
        this.products = new Array;
    }
    ProductsListsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsListsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.products = res.data;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-lists',
            template: __webpack_require__(/*! ./products-lists.component.html */ "./src/app/products/products-lists/products-lists.component.html"),
            styles: [__webpack_require__(/*! ./products-lists.component.scss */ "./src/app/products/products-lists/products-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductsListsComponent);
    return ProductsListsComponent;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-lists/products-lists.component */ "./src/app/products/products-lists/products-lists.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/products/product-view/product-view.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        canActivateChild: [_shared__WEBPACK_IMPORTED_MODULE_6__["RoleGuard"]],
        children: [
            { path: '', component: _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListsComponent"], data: { option: 'ProductsList' } },
            { path: ':id/product-view', component: _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductViewComponent"], data: { option: 'ProductsView' } },
            { path: ':id/product-details/:type', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"], data: { option: 'ProductsDetails' } },
        ], data: { option: 'ProductsList' }
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<section class=\"main-container\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-lists/products-lists.component */ "./src/app/products/products-lists/products-lists.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/products/product-view/product-view.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/modules/header/header.module */ "./src/app/shared/modules/header/header.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_10__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListsComponent"], _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_5__["ProductViewComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"]],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"],
                _shared_services__WEBPACK_IMPORTED_MODULE_12__["AuthorizationService"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/shared/services/products/product.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/products/product.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.findAll$ = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'products/findAll');
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map