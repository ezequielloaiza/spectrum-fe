(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 main-info\">\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 title label-title patient-info\">\n            <span>{{ 'Spectrum code' | translate }}</span>\n            <dl>\n              <dt>{{ product.codeSpectrum }}</dt>\n            </dl>\n          </div>\n          <!--Patient-->\n          <div class=\"col-lg-4 title label-title patient-info\">\n            <span>{{ 'Patient' | translate }}</span>\n            <dl>\n              <dt>{{ namePatient}}</dt>\n            </dl>\n          </div>\n        <div class=\"col-lg-4 title label-title patient-info\">\n            <span>{{ 'Price' | translate }}</span>\n          <dl>\n            <dt>{{ price | currency : \"USD $\" }}</dt>\n          </dl>\n        </div>\n        </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"card-body table-responsive\">\n        <div class=\"row justify-content-md-center div-parametros\" *ngFor=\"let list of listBasket\">\n          <div class=\"col-lg-12 title eye-info\">\n            <span>{{ list.detail[0].eye + ' Eye' | translate }}</span>&nbsp;&nbsp;\n          </div>\n          <div class=\"col-sm-3\">\n            <dl class=\"align-item\">\n              <dt>{{ 'Quantity' | translate }}</dt>\n              <hr class=\"separators\">\n              <dt>\n                <span class=\"items\"> {{ list.quantity }}</span>\n              </dt>\n            </dl>\n          </div>\n          <div class=\"col-sm-3\" *ngFor=\"let parameter of list.detail[0].parameters\">\n            <dl class=\"align-item\">\n              <dt>{{parameter.name | translate }}</dt>\n              <hr class=\"separators\">\n              <dt>\n                <span class=\"items\"> {{parameter.selected}}</span>\n              </dt>\n            </dl>\n          </div>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    max-height: 163.65px; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n.list-basket .display-row .spec-params {\n      margin-left: -4em; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    font-weight: 0px;\n    color: #868e96; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ConfirmationBlueLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBlueLightComponent", function() { return ConfirmationBlueLightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationBlueLightComponent = /** @class */ (function () {
    function ConfirmationBlueLightComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_13__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationBlueLightComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationBlueLightComponent.prototype.close = function () {
        if (!this.save_success) {
            this.listUrlFiles = this.buildUrlFiles();
            this.deleteAllFile();
        }
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationBlueLightComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_16__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
            });
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    };
    ConfirmationBlueLightComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                        _this.spinner.hide();
                        console.log(res);
                    });
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                            _this.spinner.hide();
                            console.log(res);
                        });
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationBlueLightComponent.prototype.buildUrlFiles = function () {
        var listUrlFiles = new Array;
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileBasket, function (file) {
            listUrlFiles.push(file.url);
        });
        return listUrlFiles;
    };
    ConfirmationBlueLightComponent.prototype.deleteAllFile = function () {
        this.fileProductRequestedService.deleteAllFile$(this.buildUrlFiles()).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                console.log('Delete files');
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationBlueLightComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationBlueLightComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationBlueLightComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationBlueLightComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationBlueLightComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationBlueLightComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.close();
        });
    };
    ConfirmationBlueLightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-blue-light',
            template: __webpack_require__(/*! ./confirmation-blue-light.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-blue-light.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ConfirmationBlueLightComponent);
    return ConfirmationBlueLightComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"card-body table-responsive row\">\n    <div>\n      <div class=\"list-basket\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <!--Image-->\n            <div>\n              <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n            </div>\n            <!--Details-->\n            <div class=\"details\">\n              <div>\n                <span>{{ product.name }}</span>\n              </div>\n              <div *ngFor=\"let item of listBasket; let i = index\">\n                <div class=\"price h5 text-warning\" [hidden]=\"i===1\">\n                  <h6>{{ item.detail[0].name }}</h6>\n                </div>\n              </div>\n              <div>\n                <span>{{ ('Patient' | translate) + ': ' + namePatient }}</span>\n              </div>\n              <div>\n                <span>{{ price | currency }}</span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-6 params\">\n            <div class=\"row\">\n              <!--<div class=\"col-lg-4\">{{ 'Parameter' | translate }}</div>-->\n              <div class=\"col-lg-6\"></div>\n              <div class=\"col-lg-3 param\" *ngFor=\"let eye of eyesSelected\">\n                <span>\n                  {{ eye | translate }}\n                </span>\n              </div>\n            </div>\n             <!--CONTENT INFO-->\n            <div class=\"row\">\n              <!--PARAM NAME-->\n              <div class=\"col-sm-6\">\n                <dl>\n                  <dt>{{ 'Quantity' | translate }}</dt>\n                </dl>\n                <div *ngFor=\"let parameter of listNameParameters\">\n                  <dl>\n                    <dt>{{ parameter.name | translate}}</dt>\n                  </dl>\n                </div>\n              </div>\n              <!--EYES-->\n              <div class=\"col-sm-3\" *ngFor=\"let item of listBasket\"> <!--iteration by Eye, (right, left)-->\n                <div>\n                  <dl class=\"param\">\n                    <dt>{{ item.quantity }}</dt>\n                  </dl>\n                </div>\n                <div *ngFor=\"let specification of item.detail\">\n                  <div *ngFor=\"let param of specification.parameters\">\n                    <dl class=\"param\">\n                      <dt>{{ param.selected }}</dt>\n                    </dl>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.card-body > div:nth-child(1) {\n  padding-right: 25px; }\n.list-basket {\n  padding: 15px;\n  margin-top: 1.5em; }\n.list-basket .img-product {\n    width: 100%; }\n.list-basket .details {\n    text-align: center; }\n.list-basket .details span {\n      font-size: 18px;\n      font-weight: 600; }\n.list-basket .params {\n    /*display: flex;\n    align-items: center;*/ }\n.list-basket .params > div:nth-child(2) {\n      padding-top: 15px; }\n.list-basket .params .param {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: end;\n              justify-content: flex-end; }\n.list-basket > div:nth-child(1) > div:nth-child(2) {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    color: #494949; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmationBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBuyComponent", function() { return ConfirmationBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationBuyComponent = /** @class */ (function () {
    function ConfirmationBuyComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_8__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_9__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_15__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationBuyComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationBuyComponent.prototype.close = function () {
        if (!this.save_success) {
            this.listUrlFiles = this.buildUrlFiles();
            this.deleteAllFile();
        }
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationBuyComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
            });
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    };
    ConfirmationBuyComponent.prototype.save = function () {
        var _this = this;
        this.spinner.show();
        if (this.typeBuy === 1) {
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    console.log(res.errors[0].detail);
                    _this.spinner.hide();
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        console.log(res);
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                        });
                        _this.spinner.hide();
                        _this.close();
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationBuyComponent.prototype.buildUrlFiles = function () {
        var listUrlFiles = new Array;
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.listFileBasket, function (file) {
            listUrlFiles.push(file.url);
        });
        return listUrlFiles;
    };
    ConfirmationBuyComponent.prototype.deleteAllFile = function () {
        this.fileProductRequestedService.deleteAllFile$(this.buildUrlFiles()).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                console.log('Delete files');
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationBuyComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationBuyComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationBuyComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationBuyComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationBuyComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && (this.price > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationBuyComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_16__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.close();
        });
    };
    ConfirmationBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-buy',
            template: __webpack_require__(/*! ./confirmation-buy.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-buy.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_10__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_11__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_12__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ConfirmationBuyComponent);
    return ConfirmationBuyComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <!--Image-->\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ product.name }}</span>\n        </div>\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n\n        <div class=\"row\">\n          <!--Patient-->\n          <div class=\"col-lg-6 title label-title patient-info\">\n            <span>{{ 'Patient' | translate }}</span>\n            <dl>\n              <dt>{{ namePatient}}</dt>\n            </dl>\n          </div>\n          <div class=\"col-lg-6 title label-title patient-info\">\n            <span>{{ 'Price' | translate }}</span>\n            <dl>\n              <dt>{{ price | currency : \"USD $\" }}</dt>\n            </dl>\n          </div>\n        </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"col-lg-12\" *ngFor=\"let list of listBasket\">\n        <div class=\"row padding-params\">\n          <div class=\"col-lg-6 title eye-info\">\n            <span>{{ list.detail[0].eye + ' Eye' | translate }}</span>&nbsp;&nbsp;\n          </div>\n          <div class=\"col-lg-6 title eye-info\">\n            <span>{{ 'Spectrum code' | translate }}</span>\n            <dl>\n              <dt><span>{{ list.product.codeSpectrum }}</span>&nbsp;&nbsp;</dt>\n            </dl>\n          </div>\n          <div class=\"col-sm-3\">\n            <dl class=\"align-item\">\n              <dt>{{'Quantity'| translate}}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ listBasket[0].quantity }}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <div class=\"col-sm-3\" *ngFor=\"let parameter of list.detail[0].parameters\">\n            <dl class=\"align-item\">\n              <dt>{{ parameter.name | translate }}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\" *ngIf=\"parameter.selected !==true && parameter.selected !==false\">\n                  {{ parameter.selected}}\n                </dt>\n                <dt class=\"items\" *ngIf=\"parameter.selected ===true || parameter.selected ===false\">\n                  <span *ngIf=\"parameter.selected === true\">{{ 'Yes' | translate }}</span>\n                  <span *ngIf=\"parameter.selected === false\">{{ 'No' | translate }}</span>\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <!--Comments-->\n          <div class=\"col-lg-12\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-12\">\n                <dl>\n                  <dt>{{'Comments'| translate}}\n                  </dt>\n                  <dl class=\"comment\" *ngIf=\"list.observations ==='' || list.observations === null\">\n                    <span translate>{{'No comments' | translate}}</span>\n                  </dl>\n                  <dl *ngIf=\"list.observations !==''\">\n                    <span style=\"overflow-x: hidden;\"> {{ list.observations }}</span>\n                  </dl>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 45%;\n    height: 9.5em; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n.list-basket .display-price {\n    -webkit-box-pack: center;\n            justify-content: center; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .title > dl:nth-child(3) > dt:nth-child(2) {\n      color: #868e96; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    color: #868e96; }\n.list-basket .comments {\n    padding: 0 2.5em; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.list-basket .param {\n    color: #f8ac59; }\n.list-basket .comment {\n    color: #868e96;\n    padding: 0 1.5em; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ConfirmationEuclidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationEuclidComponent", function() { return ConfirmationEuclidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationEuclidComponent = /** @class */ (function () {
    function ConfirmationEuclidComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.balance_modal = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_13__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationEuclidComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationEuclidComponent.prototype.close = function () {
        if (!this.save_success && !this.balance_modal) {
            this.listUrlFiles = this.buildUrlFiles();
            this.deleteAllFile();
        }
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationEuclidComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        var quantityW = 0;
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            if (productRequested.observations === undefined) {
                productRequested.observations = '';
            }
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_16__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
                lodash__WEBPACK_IMPORTED_MODULE_16__["each"](detail.parameters, function (parameters) {
                    if (parameters.name === 'Warranty') {
                        if (parameters.selected) {
                            quantityW = quantityW + productRequested.quantity;
                        }
                    }
                });
            });
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
        this.quantityWarranty = quantityW;
        this.additionalTotal = this.additional * this.quantityWarranty;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    };
    ConfirmationEuclidComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    console.log(res);
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                    });
                    _this.spinner.hide();
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        console.log(res);
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                        });
                        _this.spinner.hide();
                        _this.close();
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.balance_modal = true;
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationEuclidComponent.prototype.buildUrlFiles = function () {
        var listUrlFiles = new Array;
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileLeftEye, function (file) {
            listUrlFiles.push(file.url);
        });
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileRightEye, function (file) {
            listUrlFiles.push(file.url);
        });
        return listUrlFiles;
    };
    ConfirmationEuclidComponent.prototype.deleteAllFile = function () {
        this.fileProductRequestedService.deleteAllFile$(this.buildUrlFiles()).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                console.log('Delete files');
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationEuclidComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationEuclidComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationEuclidComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationEuclidComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationEuclidComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationEuclidComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_2__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.save_success = true;
            _this.ngOnInit();
        }, function (reason) {
            _this.save_success = true;
            _this.balance_modal = false;
            _this.close();
        });
    };
    ConfirmationEuclidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-euclid',
            template: __webpack_require__(/*! ./confirmation-euclid.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-euclid.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ConfirmationEuclidComponent);
    return ConfirmationEuclidComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor=\"rgba(51, 51, 51, 0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-beat\"\n></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ \"Confirm purchase\" | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <!-- Image -->\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ product.name }}</span>\n        </div>\n        <!-- Image -->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\" />\n        </div>\n        <!-- Patient -->\n        <div class=\"col-lg-12 title label-title patient-info\">\n          <span>{{ \"Patient\" | translate }}</span>\n          <dl>\n            <dt>{{ namePatient }}</dt>\n          </dl>\n          <dl>\n            <dt>{{ price | currency: \"USD $\" }}</dt>\n            <p class=\"eye-info\" *ngIf=\"(totalInserts && existInserts) || totalHidrapeg || totalNotch || totalThickness\">\n              (\n              <span>{{ 'Includes' | translate }}</span>&nbsp;\n              <span *ngIf=\"totalHidrapeg\">{{'Hidrapeg' | translate}}:{{ totalHidrapeg | currency : \" USD $\" }}</span>\n              <span  *ngIf=\"totalHidrapeg && (totalInserts && existInserts )\">&nbsp;|&nbsp;</span>\n              <span *ngIf=\"totalInserts && existInserts\">{{'Inserts (DMV)' | translate}}:{{ totalInserts | currency : \" USD $\" }}</span>\n              <span  *ngIf=\"((totalInserts && existInserts) || totalHidrapeg) && totalNotch\">&nbsp;|&nbsp;</span>\n              <span *ngIf=\"totalNotch\">{{'Notch (mm)' | translate}}:{{ totalNotch | currency : \" USD $\" }}</span>\n              <!--<span  *ngIf=\"(totalHidrapeg || totalInserts || totalNotch) && totalThickness\">|</span>\n              <span *ngIf=\"totalThickness\">{{'Thickness' | translate}}:{{ totalThickness | currency : \" USD $\" }}</span>-->\n              )\n            </p>\n          </dl>\n        </div>\n      </div>\n      <!-- PARAMETERS -->\n      <div class=\"col-sm-12\" *ngFor=\"let parameter of listBasket[0].detail[0].header\">\n          <dl *ngIf=\"parameter.name === 'Inserts (DMV)'\" class=\"align-item\">\n            <dt>{{ parameter.name | translate }}</dt>\n            <hr class=\"separators\" />\n            <dl>\n              <dt *ngIf=\"parameter.selected === true || parameter.selected === false\" class=\"items\">\n                <span *ngIf=\"parameter.selected === true\">{{\n                  \"Yes\" + ' ' + insertCodeSpectrum | translate\n                }}</span>\n                <span *ngIf=\"parameter.selected === false\">{{\n                  \"No\" | translate\n                }}</span>\n              </dt>\n            </dl>\n          </dl>\n      </div>\n      <div class=\"col-lg-12\" *ngFor=\"let list of listBasket\">\n        <div class=\"row padding-params\">\n          <div class=\"col-lg-12 title eye-info\">\n            <span>{{ list.detail[0].eye + ' Eye' | translate }}</span>&nbsp;&nbsp;\n          </div>\n\n          <div class=\"col-lg-4\">\n            <dl class=\"align-item\">\n              <dt>{{ 'Spectrum code' | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ list.product.codeSpectrum }}</dt>\n              </dl>\n            </dl>\n          </div>\n\n          <div class=\"col-sm-4\" *ngFor=\"let parameter of list.detail[0].header\">\n            <dl *ngIf=\"parameter.name !== 'Inserts (DMV)'\" class=\"align-item\">\n              <dt>{{ parameter.name | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt *ngIf=\"parameter.selected !== true && parameter.selected !== false\" class=\"items\">{{ parameter.selected }}</dt>\n                <dt *ngIf=\"parameter.selected === true || parameter.selected === false\" class=\"items\">\n                  <span *ngIf=\"parameter.selected === true\">{{\n                    \"Yes\" | translate\n                  }}</span>\n                  <span *ngIf=\"parameter.selected === false\">{{\n                    \"No\" | translate\n                  }}</span>\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <div *ngIf=\"list.detail[0].productsAditional.length > 0\" class=\"col-sm-12\">\n            <div class=\"parameters\">{{ 'Additional Products' | translate }}:</div>\n          </div>\n          <div class=\"col-sm-4\" *ngFor=\"let productA of list.detail[0].productsAditional\">\n            <dl class=\"align-item\">\n              <dt>{{ productA.name | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ productA.codeSpectrum }}</dt>\n              </dl>\n            </dl>\n          </div>\n          <div class=\"col-sm-12\">\n            <div class=\"parameters\">{{ \"Parameters\" | translate }}:</div>\n          </div>\n          <div class=\"col-sm-3\">\n            <dl class=\"align-item\">\n              <dt>{{ \"Quantity\" | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ listBasket[0].quantity }}</dt>\n              </dl>\n            </dl>\n          </div>\n          <div\n            class=\"col-sm-3\"\n            *ngFor=\"let parameter of list.detail[0].parameters\"\n          >\n            <dl class=\"align-item\">\n              <dt>{{ parameter.name | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ parameter.selected }}</dt>\n              </dl>\n            </dl>\n          </div>\n          <div class=\"col-sm-12\">\n            <div class=\"parameters\">{{ \"Steps\" | translate }}:</div>\n          </div>\n          <div class=\"col-sm-12\" *ngFor=\"let parameter of list.detail[0].pasos\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-2\">\n                  <dl class=\"name-parameters\">\n                      <dt>{{ parameter.name | translate }}\n                          <hr class=\"separators\" />\n                      </dt>\n                  </dl>\n              </div>\n              <div class=\"col-sm-5\" *ngFor=\"let item of parameter.values\">\n                <dl>\n                  <dt>{{ item.name | translate }}</dt>\n                </dl>\n                <div class=\"row justify-steps\">\n                  <div class=\"col-sm-6\" *ngFor=\"let val of item.values\">\n                    <dl>\n                      <dt class=\"items\">\n                        {{ val.name | translate }}:\n                        <span *ngIf=\"val.selected === true\">{{\n                          \"Yes\" | translate\n                        }}</span>\n                        <span *ngIf=\"val.selected === false\">{{\n                          \"No\" | translate\n                        }}</span>\n                      </dt>\n                    </dl>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br />\n          <!-- Comments -->\n          <div class=\"col-lg-12\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-12\">\n                <dl>\n                  <dt>{{ \"Comments\" | translate }}</dt>\n                  <dl class=\"comment\" *ngIf=\"list.observations ==='' || list.observations === null\">\n                      <span translate>{{'No comments' | translate}}</span>\n                    </dl>\n                  <dl>\n                    <span style=\"overflow-x: hidden;\">\n                      {{ list.observations }}</span\n                    >\n                  </dl>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- FIN PARAMETERS -->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n      {{ \"Cancel\" | translate }}&nbsp; <i class=\"fa fa-times\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-main\"\n      (click)=\"save()\"\n      [hidden]=\"typeBuy === 2\"\n    >\n      {{ \"Save\" | translate }}&nbsp; <i class=\"fa fa-save\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-main\"\n      (click)=\"save()\"\n      [hidden]=\"typeBuy === 1\"\n    >\n      {{ \"Buy\" | translate }}&nbsp; <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description }}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    margin-top: 1em; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n.list-basket .display-price {\n    -webkit-box-pack: center;\n            justify-content: center; }\n.list-basket .padding-params {\n    padding: 0 2em 1em; }\n.list-basket .padding-params .parameters {\n      color: #868e96;\n      margin-left: 1.8rem;\n      margin-bottom: 0.1rem;\n      font-weight: 600;\n      padding-top: 1rem; }\n.list-basket .padding-params .justify-steps {\n      -webkit-box-pack: center;\n              justify-content: center; }\n.list-basket .padding-params .justify-steps > div:nth-child(2) {\n        padding-left: 0; }\n.list-basket .padding-params .name-parameters {\n      padding-left: 1rem;\n      color: #868e96;\n      padding-top: 0.5rem; }\n.list-basket .padding-params .comment {\n      color: #868e96;\n      padding: 0 1.5em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    color: #868e96; }\n.list-basket .comments {\n    padding: 0 2.5em; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem; }\n.list-basket .param {\n    color: #f8ac59; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ConfirmationEuropaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationEuropaComponent", function() { return ConfirmationEuropaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationEuropaComponent = /** @class */ (function () {
    function ConfirmationEuropaComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_2__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_1__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.balance_modal = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
        this.existInserts = false;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationEuropaComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationEuropaComponent.prototype.close = function () {
        if (!this.save_success && !this.balance_modal) {
            this.listUrlFiles = this.buildUrlFiles();
            this.deleteAllFile();
        }
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationEuropaComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        var listBasketAux = [];
        var quantityHidrapeg = 0;
        var quantityInserts = 0;
        var quantityNotch = 0;
        var quantityThickness = 0;
        var existInserts = false;
        var insertCodeSpectrum = '';
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            if (productRequested.name !== 'Inserts (DMV)'
                && productRequested.name !== 'Notch'
                && productRequested.name !== 'HydraPEG') {
                // priceAcum =  priceAcum + (productRequested.price * productRequested.quantity);
                patient = productRequested.patient;
                if (productRequested.observations === undefined) {
                    productRequested.observations = '';
                }
                var details = JSON.parse(productRequested.detail);
                lodash__WEBPACK_IMPORTED_MODULE_16__["each"](details, function (detail) {
                    eyesSelected.push(detail.eye);
                    lodash__WEBPACK_IMPORTED_MODULE_16__["each"](detail.header, function (parameters) {
                        if (parameters.name === 'Hidrapeg' && parameters.selected) {
                            quantityHidrapeg = quantityHidrapeg + productRequested.quantity;
                        }
                    });
                    lodash__WEBPACK_IMPORTED_MODULE_16__["each"](detail.parameters, function (parameters) {
                        if (parameters.name === 'Notch (mm)' && (parameters.selected !== '0x0')) {
                            quantityNotch = quantityNotch + productRequested.quantity;
                        }
                        if (parameters.name === 'Thickness' && parameters.selected) {
                            quantityThickness = quantityThickness + productRequested.quantity;
                        }
                    });
                });
                productRequested.detail = JSON.parse(productRequested.detail);
                listBasketAux.push(productRequested);
            }
            else if (productRequested.name === 'Inserts (DMV)') {
                existInserts = true;
                insertCodeSpectrum = productRequested.product.codeSpectrum;
            }
        });
        this.listBasket = listBasketAux;
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
        this.existInserts = existInserts;
        this.insertCodeSpectrum = insertCodeSpectrum;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
        this.totalHidrapeg = this.additionalHidrapeg * quantityHidrapeg;
        this.totalInserts = this.additionalInserts;
        this.totalNotch = this.additionalNotch * quantityNotch;
        this.totalThickness = this.additionalThickness * quantityThickness;
    };
    ConfirmationEuropaComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                        _this.spinner.hide();
                        console.log(res);
                    });
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                            _this.spinner.hide();
                            console.log(res);
                        });
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.balance_modal = true;
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationEuropaComponent.prototype.buildUrlFiles = function () {
        var listUrlFiles = new Array;
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileLeftEye, function (file) {
            listUrlFiles.push(file.url);
        });
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileRightEye, function (file) {
            listUrlFiles.push(file.url);
        });
        return listUrlFiles;
    };
    ConfirmationEuropaComponent.prototype.deleteAllFile = function () {
        this.fileProductRequestedService.deleteAllFile$(this.buildUrlFiles()).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                console.log('Delete files');
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationEuropaComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationEuropaComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationEuropaComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationEuropaComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationEuropaComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationEuropaComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_15__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.save_success = true;
            _this.balance_modal = false;
            _this.close();
        });
    };
    ConfirmationEuropaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-europa',
            template: __webpack_require__(/*! ./confirmation-europa.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-europa.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_8__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_10__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_12__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ConfirmationEuropaComponent);
    return ConfirmationEuropaComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <!--Image-->\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ product.name }}</span>\n        </div>\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 title label-title patient-info\">\n            <span>{{ 'Spectrum code' | translate }}</span>\n            <dl>\n              <dt>{{ product.codeSpectrum }}</dt>\n            </dl>\n          </div>\n          <!--Patient-->\n          <div class=\"col-lg-4 title label-title patient-info\">\n            <span>{{ 'Patient' | translate }}</span>\n            <dl>\n              <dt>{{ namePatient}}</dt>\n            </dl>\n          </div>\n          <div class=\"col-lg-4 title label-title patient-info\">\n            <span>{{ 'Price' | translate }}</span>\n            <dl>\n              <dt>{{ price | currency : \"USD $\" }}</dt>\n            </dl>\n          </div>\n        </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"col-lg-12\" *ngFor=\"let list of listBasket\">\n        <div class=\"row padding-params\">\n          <div class=\"col-lg-12 title eye-info\">\n            <span>{{ list.detail[0].eye + ' Eye' | translate }}</span>&nbsp;&nbsp;\n          </div>\n          <div class=\"col-lg-12 title title-info\">\n              <span>{{ 'Test set' | translate }}</span>&nbsp;&nbsp;\n          </div>\n          <div class=\"col-sm-4\" *ngFor=\"let parameter of list.detail[0].set\">\n            <dl class=\"align-item\"  *ngIf=\"parameter.selected !== ''\">\n              <dt>{{ parameter.name | translate }}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ parameter.selected}}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n        </div>\n        <div class=\"row padding-params\">\n          <div class=\"col-lg-12 title title-info\">\n              <span>{{ 'Parameters' | translate }}</span>&nbsp;&nbsp;\n          </div>\n          <div class=\"col-sm-4\">\n            <dl class=\"align-item\">\n              <dt>{{'Quantity'| translate}}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ listBasket[0].quantity }}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <div class=\"col-sm-4\" *ngFor=\"let parameter of list.detail[0].parameters\">\n            <dl class=\"align-item\"  *ngIf=\"parameter.selected !== ''\">\n              <dt>{{ parameter.name | translate }}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ parameter.selected}}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <!--Comments-->\n          <div class=\"col-lg-12\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-12\">\n                <dl>\n                  <dt>{{'Comments'| translate}}\n                  </dt>\n                  <dl class=\"comment\" *ngIf=\"list.observations === '' || list.observations === null\">\n                    <span translate>{{'No comments' | translate}}</span>\n                  </dl>\n                  <dl *ngIf=\"list.observations !==''\">\n                    <span style=\"overflow-x: hidden;\"> {{ list.observations }}</span>\n                  </dl>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy === 2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy === 1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 45%;\n    height: 9.5em; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n.list-basket .display-price {\n    -webkit-box-pack: center;\n            justify-content: center; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .title > dl:nth-child(3) > dt:nth-child(2) {\n      color: #868e96; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .title-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    padding-left: 2.5em; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    color: #868e96; }\n.list-basket .comments {\n    padding: 0 2.5em; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.list-basket .param {\n    color: #f8ac59; }\n.list-basket .comment {\n    color: #868e96;\n    padding: 0 1.5em; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ConfirmationLenticonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationLenticonComponent", function() { return ConfirmationLenticonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationLenticonComponent = /** @class */ (function () {
    function ConfirmationLenticonComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.balance_modal = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_13__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationLenticonComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationLenticonComponent.prototype.close = function () {
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationLenticonComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            if (productRequested.observations === undefined) {
                productRequested.observations = '';
            }
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.namePatient = patient;
        this.price = priceAcum;
    };
    ConfirmationLenticonComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    console.log(res);
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                    });
                    _this.spinner.hide();
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        console.log(res);
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                        });
                        _this.spinner.hide();
                        _this.close();
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.balance_modal = true;
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationLenticonComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationLenticonComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationLenticonComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationLenticonComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationLenticonComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationLenticonComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.save_success = true;
            _this.ngOnInit();
        }, function (reason) {
            _this.save_success = true;
            _this.balance_modal = false;
            _this.close();
        });
    };
    ConfirmationLenticonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-lenticon',
            template: __webpack_require__(/*! ./confirmation-lenticon.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-lenticon.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ConfirmationLenticonComponent);
    return ConfirmationLenticonComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"body\">\n    <div>\n      <div class=\"list-basket\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 main-info\">\n            <!--Image-->\n            <div class=\"label-title\">\n              <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 title label-title patient-info\">\n                <span>{{ 'Spectrum code' | translate }}</span>\n                <dl>\n                  <dt>{{ product.codeSpectrum }}</dt>\n                </dl>\n              </div>\n              <div class=\"col-lg-6 title label-title patient-info\">\n                <span>{{ 'Price' | translate }}</span>\n                <dl>\n                  <dt>{{ price | currency : \"USD $\" }}</dt>\n                </dl>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-12 display-row padding-params\">\n            <!--CONTENT INFO-->\n            <!--PARAMETERS-->\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Total Quantity'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl>\n                  <dt class=\"items\">\n                    {{ listBasket[0].quantity }}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n            <div class=\"col-lg-8 display-row padding-params\">\n              <div *ngFor=\"let parameter of listBasket[0].detail[0].parameters\" class=\"col-sm-6 title\">\n                <div>\n                  <dl class=\"align-item\">\n                    <dt>{{ parameter.name | translate }}\n                    </dt>\n                    <hr class=\"separators\">\n                    <dl class=\"items\">\n                      <dt>\n                        {{ parameter.selected}}\n                      </dt>\n                    </dl>\n                  </dl>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--FIN PARAMETERS-->\n          <!--BOXES-->\n          <div class=\"col-lg-12 display-row padding-params\">\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Quantity'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl *ngFor=\"let parameter of listBasket[0].detail[0].boxes\">\n                  <dt class=\"items\">\n                    {{ parameter.Quantity}}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Tone'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl *ngFor=\"let parameter of listBasket[0].detail[0].boxes\">\n                  <dt class=\"items\">\n                    {{ parameter.Tone}}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Color'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl *ngFor=\"let parameter of listBasket[0].detail[0].boxes\">\n                  <dt class=\"items\">\n                    {{ parameter.Color}}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n          </div>\n          <!--Fin Boxes-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n.list-basket .display-row .spec-params {\n      margin-left: -4em; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    font-weight: 0px;\n    color: #868e96; }\n.list-basket .param {\n    color: #f8ac59; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ConfirmationMagicLookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationMagicLookComponent", function() { return ConfirmationMagicLookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationMagicLookComponent = /** @class */ (function () {
    function ConfirmationMagicLookComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_13__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationMagicLookComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationMagicLookComponent.prototype.close = function () {
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationMagicLookComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_16__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
            });
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    };
    ConfirmationMagicLookComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                        _this.spinner.hide();
                        console.log(res);
                    });
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                            _this.spinner.hide();
                            console.log(res);
                        });
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationMagicLookComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationMagicLookComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationMagicLookComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationMagicLookComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationMagicLookComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationMagicLookComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.close();
        });
    };
    ConfirmationMagicLookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-magic-look',
            template: __webpack_require__(/*! ./confirmation-magic-look.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-magic-look.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ConfirmationMagicLookComponent);
    return ConfirmationMagicLookComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <!--Image-->\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ product.name }}</span>\n        </div>\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4 title label-title patient-info\">\n              <span>{{ 'Spectrum code' | translate }}</span>\n              <dl>\n                <dt>{{ product.codeSpectrum }}</dt>\n              </dl>\n            </div>\n            <!--Patient-->\n            <div class=\"col-lg-4 title label-title patient-info\">\n              <span>{{ 'Patient' | translate }}</span>\n              <dl>\n                <dt>{{ namePatient}}</dt>\n              </dl>\n            </div>\n          <div class=\"col-lg-4 title label-title patient-info\">\n              <span>{{ 'Price' | translate }}</span>\n            <dl>\n              <dt>{{ price | currency : \"USD $\" }}</dt>\n            </dl>\n          </div>\n          </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"col-lg-12\" *ngFor=\"let list of listBasket\">\n        <div class=\"row padding-params\">\n          <div class=\"col-lg-12 title eye-info\">\n            <span>{{ list.detail[0].eye + ' Eye' | translate }}</span>&nbsp;&nbsp;\n          </div>\n          <div class=\"col-sm-3\">\n            <dl class=\"align-item\">\n              <dt>{{'Quantity'| translate}}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ listBasket[0].quantity }}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <div class=\"col-sm-3\" *ngFor=\"let parameter of list.detail[0].parameters\">\n            <dl class=\"align-item\">\n              <dt>{{ parameter.name | translate }}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ parameter.selected}}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <!--Comments-->\n          <div class=\"col-lg-12\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-12\">\n                <dl>\n                  <dt>{{'Comments'| translate}}\n                  </dt>\n                  <dl class=\"comment\" *ngIf=\"list.observations === '' || list.observations === null\">\n                    <span translate>{{'No comments' | translate}}</span>\n                  </dl>\n                  <dl *ngIf=\"list.observations !== ''\">\n                    <span style=\"overflow-x: hidden;\"> {{ list.observations }}</span>\n                  </dl>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    margin-top: 1em; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n.list-basket .display-price {\n    -webkit-box-pack: center;\n            justify-content: center; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    color: #868e96; }\n.list-basket .comments {\n    padding: 0 2.5em; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.list-basket .param {\n    color: #f8ac59; }\n.list-basket .comment {\n    color: #868e96;\n    padding: 0 1.5em; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ConfirmationMarkennovyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationMarkennovyComponent", function() { return ConfirmationMarkennovyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConfirmationMarkennovyComponent = /** @class */ (function () {
    function ConfirmationMarkennovyComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_15__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_14__["BuyNow"]();
        // list for File
        this.listFileBasket = new Array;
        this.listUrlFiles = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        // boolean for delete file
        this.save_success = false;
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_13__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationMarkennovyComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationMarkennovyComponent.prototype.close = function () {
        if (!this.save_success) {
            this.listUrlFiles = this.buildUrlFiles();
            this.deleteAllFile();
        }
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationMarkennovyComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            if (productRequested.observations === undefined) {
                productRequested.observations = '';
            }
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_16__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
            });
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    };
    ConfirmationMarkennovyComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = this.listFileRightEye;
            this.basketRequest.listFileLeftEye = this.listFileLeftEye;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                    // this.redirectListBasket();
                }
                else {
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                        _this.spinner.hide();
                        console.log(res);
                    });
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.listFileRightEye = this.listFileRightEye;
            this.buyNow.listFileLeftEye = this.listFileLeftEye;
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                        _this.save_success = true;
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                            _this.spinner.hide();
                            console.log(res);
                        });
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationMarkennovyComponent.prototype.buildUrlFiles = function () {
        var listUrlFiles = new Array;
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileBasket, function (file) {
            listUrlFiles.push(file.url);
        });
        return listUrlFiles;
    };
    ConfirmationMarkennovyComponent.prototype.deleteAllFile = function () {
        this.fileProductRequestedService.deleteAllFile$(this.buildUrlFiles()).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                console.log('Delete files');
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationMarkennovyComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationMarkennovyComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationMarkennovyComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationMarkennovyComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationMarkennovyComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationMarkennovyComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_2__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.close();
        });
    };
    ConfirmationMarkennovyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-markennovy',
            template: __webpack_require__(/*! ./confirmation-markennovy.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-markennovy.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_12__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_8__["FileProductRequestedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ConfirmationMarkennovyComponent);
    return ConfirmationMarkennovyComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 main-info\">\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n        <!--Patient-->\n        <div class=\"row\">\n          <div class=\"col-lg-6 title label-title patient-info\">\n            <span>{{ 'Spectrum code' | translate }}</span>\n            <dl>\n              <dt>{{ product.codeSpectrum }}</dt>\n            </dl>\n          </div>\n          <div class=\"col-lg-6 title label-title patient-info\">\n            <span>{{ 'Price' | translate }}</span>\n            <dl>\n              <dt>{{ price | currency : \"USD $\" }}</dt>\n            </dl>\n          </div>\n        </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"col-lg-12 display-row padding-params\">\n        <div class=\"col-sm-3\">\n          <dl class=\"align-item\">\n            <dt>{{ 'Quantity' | translate }}</dt>\n            <hr class=\"separators\">\n            <dt>\n              <span class=\"items\"> {{ quantity }}</span>\n              <span class=\"items\" *ngIf=\"strips > 0 && view === 2\"> ({{ strips }} {{ 'Strips' | translate }})</span>\n            </dt>\n          </dl>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    max-height: 163.65px; }\n.list-basket .display-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    font-weight: 0px;\n    color: #868e96; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.list-basket .strips {\n    padding-top: 8px;\n    color: #868e96;\n    font-size: 18px;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ConfirmationSpectrumSalineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationSpectrumSalineComponent", function() { return ConfirmationSpectrumSalineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ConfirmationSpectrumSalineComponent = /** @class */ (function () {
    function ConfirmationSpectrumSalineComponent(modalReference, alertify, notification, translate, basketService, orderService, router, userStorageService, spinner, userService, modalService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.router = router;
        this.userStorageService = userStorageService;
        this.spinner = spinner;
        this.userService = userService;
        this.modalService = modalService;
        this.listBasket = new Array;
        this.lista = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_1__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_2__["BuyNow"]();
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ConfirmationSpectrumSalineComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    ConfirmationSpectrumSalineComponent.prototype.close = function () {
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    ConfirmationSpectrumSalineComponent.prototype.getDatos = function () {
        var priceAcum = 0;
        var quantity = 0;
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            quantity = productRequested.quantity;
        });
        this.price = priceAcum;
        this.quantity = quantity;
        this.strips = this.quantity * 100;
    };
    ConfirmationSpectrumSalineComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.listFileRightEye = [];
            this.basketRequest.listFileLeftEye = [];
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_13__["CodeHttp"].ok) {
                    _this.close();
                    _this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListProducts();
                }
                else {
                    _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                        _this.notification.error('', res);
                        _this.spinner.hide();
                        console.log(res);
                    });
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.basketRequest.listFileRightEye = [];
            this.basketRequest.listFileLeftEye = [];
            this.validateAvailableBalance();
            if (this.available) {
                this.spinner.show();
                this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                    if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_13__["CodeHttp"].ok) {
                        _this.spinner.hide();
                        _this.close();
                        _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                            _this.notification.success('', res);
                        });
                        _this.redirectListOrder();
                    }
                    else {
                        _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                            _this.notification.error('', res);
                            _this.spinner.hide();
                            console.log(res);
                        });
                    }
                }, function (error) {
                    console.log('error', error);
                });
            }
            else {
                this.openModal(); // No tiene disponible el balance de credito
                this.close();
            }
        }
    };
    ConfirmationSpectrumSalineComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    ConfirmationSpectrumSalineComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    ConfirmationSpectrumSalineComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    ConfirmationSpectrumSalineComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_13__["CodeHttp"].ok) {
                _this.company = res.data.company;
                _this.balace = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ConfirmationSpectrumSalineComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balace)) {
            available = false;
        }
        this.available = available;
    };
    ConfirmationSpectrumSalineComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_14__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.close();
        });
    };
    ConfirmationSpectrumSalineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-spectrum-saline',
            template: __webpack_require__(/*! ./confirmation-spectrum-saline.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-spectrum-saline.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_9__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_11__["UserStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ConfirmationSpectrumSalineComponent);
    return ConfirmationSpectrumSalineComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Gold-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Gold' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Not guaranteed' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"price1\"\n                      formControlName=\"price1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-6\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Guaranteed' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\"class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGW1\"\n                      formControlName=\"priceGW1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n         <div class=\"message-error\" [hidden]=\"(price1.valid || price1.pristine) && (priceGW1.valid || priceGW1.pristine)\">\n            <span>{{ 'Price Gold is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Gold-->\n        <!--Diamond-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Diamond' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Not guaranteed' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"price2\"\n                      formControlName=\"price2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-6\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Guaranteed' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDW2\"\n                      formControlName=\"priceDW2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n         <div class=\"message-error\" [hidden]=\"(price2.valid || price2.pristine) && (priceDW2.valid || priceDW2.pristine)\">\n            <span>{{ 'Price Diamond is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Diamond-->\n        <!--Preferred-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Preferred' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Not guaranteed' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"price3\"\n                      formControlName=\"price3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-6\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Guaranteed' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePW3\"\n                      formControlName=\"pricePW3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n         <div class=\"message-error\" [hidden]=\"(price3.valid || price3.pristine) && (pricePW3.valid || pricePW3.pristine)\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Preferred-->\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: -webkit-box;\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n.label-prices {\n  color: #868e96;\n  padding-left: 1em;\n  padding-top: 5px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditProductEuclidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductEuclidComponent", function() { return EditProductEuclidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_productrequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/productrequest */ "./src/app/shared/models/productrequest.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditProductEuclidComponent = /** @class */ (function () {
    function EditProductEuclidComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        //Gold
        this.priceGW = 0;
        //Preferred
        this.pricePW = 0;
        // Diamond
        this.priceDW = 0;
        this.productUpdate = new _shared_models_productrequest__WEBPACK_IMPORTED_MODULE_2__["ProductRequest"]();
        this.formatter = function (x) { return x.description; };
    }
    EditProductEuclidComponent.prototype.ngOnInit = function () {
        this.getPrices();
        this.initializeForm();
    };
    EditProductEuclidComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            price1: [this.action === 'edit' ? this.product.price1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            price2: [this.action === 'edit' ? this.product.price2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            price3: [this.action === 'edit' ? this.product.price3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            priceGW1: [this.action === 'edit' ? this.priceGW : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            priceDW2: [this.action === 'edit' ? this.priceDW : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pricePW3: [this.action === 'edit' ? this.pricePW : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductEuclidComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductEuclidComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductEuclidComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductEuclidComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "price1", {
        get: function () { return this.form.get('price1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "price2", {
        get: function () { return this.form.get('price2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "price3", {
        get: function () { return this.form.get('price3'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "priceGW1", {
        get: function () { return this.form.get('priceGW1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "priceDW2", {
        get: function () { return this.form.get('priceDW2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuclidComponent.prototype, "pricePW3", {
        get: function () { return this.form.get('pricePW3'); },
        enumerable: true,
        configurable: true
    });
    EditProductEuclidComponent.prototype.info = function () {
        var infProperties = JSON.parse(this.product.infoAditional)[0];
        var Prices = {
            "name": "Prices",
            "values": [
                {
                    'title': 'Warranty',
                    'values': [
                        {
                            'name': 'Gold',
                            'price': this.form.get('priceGW1').value
                        },
                        {
                            'name': 'Diamond',
                            'price': this.form.get('priceDW2').value
                        },
                        {
                            'name': 'Preferred',
                            'price': this.form.get('pricePW3').value
                        }
                    ]
                }
            ]
        };
        var jsonInfo = JSON.stringify([infProperties, Prices]);
        return jsonInfo;
    };
    EditProductEuclidComponent.prototype.save = function () {
        var _this = this;
        this.setProductRequest();
        this.productService.update$(this.productUpdate).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductEuclidComponent.prototype.getPrices = function () {
        var info = JSON.parse(this.product.infoAditional);
        // Gold prices
        this.priceGW = parseFloat(info[1].values[0].values[0].price);
        // Diamond prices
        this.priceDW = parseFloat(info[1].values[0].values[1].price);
        // Preferred prices
        this.pricePW = parseFloat(info[1].values[0].values[2].price);
    };
    EditProductEuclidComponent.prototype.setProductRequest = function () {
        this.productUpdate.id = this.product.idProduct;
        this.productUpdate.name = this.form.get('name').value;
        this.productUpdate.descriptionShort = this.form.get('descriptionShort').value;
        this.productUpdate.price1 = this.form.get('price1').value;
        this.productUpdate.price2 = this.form.get('price2').value;
        this.productUpdate.price3 = this.form.get('price3').value;
        this.productUpdate.infoAditional = this.info();
        this.productUpdate.idSupplier = this.product.supplier.idSupplier;
        this.productUpdate.status = this.form.get('status').value;
    };
    EditProductEuclidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product-euclid',
            template: __webpack_require__(/*! ./edit-product-euclid.component.html */ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.html"),
            styles: [__webpack_require__(/*! ./edit-product-euclid.component.scss */ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], EditProductEuclidComponent);
    return EditProductEuclidComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-12\">\n            <label>{{ 'Price Gold' | translate }}</label>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-xl-6\">\n                  <fieldset class=\"form-group\">\n                    <label class=\"label-prices\">{{ 'Diameter' | translate }} 16.0</label>\n                    <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"form-group input-group\">\n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">$</span>\n                        </div>\n                        <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"price1\"\n                          formControlName=\"price1\">\n                      </div>\n                    </div>\n                  </fieldset>\n                </div>\n                <div class=\"col-xl-6\">\n                  <fieldset class=\"form-group\">\n                    <label class=\"label-prices\">{{ 'Diameter' | translate }} 18.0-20.0</label>\n                    <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"form-group input-group\">\n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">$</span>\n                        </div>\n                        <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priced1\"\n                          formControlName=\"priced1\">\n                      </div>\n                    </div>\n                  </fieldset>\n                </div>\n            </div>\n            <div class=\"message-error\" [hidden]=\"(price1.valid || price1.pristine) && (priced1.valid || priced1.pristine)\">\n                <span>{{ 'Price Gold is required' | translate }}</span>\n            </div>\n        </div>\n        <div class=\"col-xl-12\">\n            <label>{{ 'Price Diamond' | translate }}</label>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-xl-6\">\n                  <fieldset class=\"form-group\">\n                    <label class=\"label-prices\">{{ 'Diameter' | translate }} 16.0</label>\n                    <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"form-group input-group\">\n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">$</span>\n                        </div>\n                        <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"price2\"\n                          formControlName=\"price2\">\n                      </div>\n                    </div>\n                  </fieldset>\n                </div>\n                <div class=\"col-xl-6\">\n                  <fieldset class=\"form-group\">\n                    <label class=\"label-prices\">{{ 'Diameter' | translate }} 18.0-20.0</label>\n                    <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"form-group input-group\">\n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">$</span>\n                        </div>\n                        <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priced2\"\n                          formControlName=\"priced2\">\n                      </div>\n                    </div>\n                  </fieldset>\n                </div>\n            </div>\n            <div class=\"message-error\" [hidden]=\"(price2.valid || price2.pristine) && (priced2.valid || priced2.pristine)\">\n              <span>{{ 'Price Diamond is required' | translate }}</span>\n            </div>\n        </div>\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Preferred' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n                <fieldset class=\"form-group\">\n                  <label class=\"label-prices\">{{ 'Diameter' | translate }} 16.0</label>\n                  <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                    <div class=\"form-group input-group\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">$</span>\n                      </div>\n                      <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"price3\"\n                        formControlName=\"price3\">\n                    </div>\n                  </div>\n                </fieldset>\n              </div>\n              <div class=\"col-xl-6\">\n                <fieldset class=\"form-group\">\n                  <label class=\"label-prices\">{{ 'Diameter' | translate }} 18.0-20.0</label>\n                  <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                    <div class=\"form-group input-group\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">$</span>\n                      </div>\n                      <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priced3\"\n                        formControlName=\"priced3\">\n                    </div>\n                  </div>\n                </fieldset>\n              </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(price3.valid || price3.pristine) && (priced3.valid || priced3.pristine)\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (click)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: -webkit-box;\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n.label-prices {\n  color: #868e96;\n  padding-left: 1em;\n  padding-top: 5px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditProductEuropaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductEuropaComponent", function() { return EditProductEuropaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditProductEuropaComponent = /** @class */ (function () {
    function EditProductEuropaComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        this.formatter = function (x) { return x.description; };
    }
    EditProductEuropaComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    EditProductEuropaComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price1: [this.action === 'edit' ? this.product.price1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price2: [this.action === 'edit' ? this.product.price2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price3: [this.action === 'edit' ? this.product.price3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priced1: [this.action === 'edit' ? this.product.priced1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priced2: [this.action === 'edit' ? this.product.priced2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priced3: [this.action === 'edit' ? this.product.priced3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            infoAditional: [this.action === 'edit' ? this.product.infoAditional : ''],
            idSupplier: [this.action === 'edit' ? this.product.supplier.idSupplier : ''],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductEuropaComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductEuropaComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductEuropaComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductEuropaComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "price1", {
        get: function () { return this.form.get('price1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "price2", {
        get: function () { return this.form.get('price2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "price3", {
        get: function () { return this.form.get('price3'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "priced1", {
        get: function () { return this.form.get('priced1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "priced2", {
        get: function () { return this.form.get('priced2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductEuropaComponent.prototype, "priced3", {
        get: function () { return this.form.get('priced3'); },
        enumerable: true,
        configurable: true
    });
    EditProductEuropaComponent.prototype.save = function () {
        var _this = this;
        this.productService.update$(this.form.value).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductEuropaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product-europa',
            template: __webpack_require__(/*! ./edit-product-europa.component.html */ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.html"),
            styles: [__webpack_require__(/*! ./edit-product-europa.component.scss */ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], EditProductEuropaComponent);
    return EditProductEuropaComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Gold-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Gold' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGo1\"\n                      formControlName=\"priceGo1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGo2\"\n                      formControlName=\"priceGo2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGo3\"\n                      formControlName=\"priceGo3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(priceGo1.valid || priceGo1.pristine) && (priceGo2.valid || priceGo2.pristine) && ( priceGo3.valid || priceGo3.pristine)\">\n            <span>{{ 'Price Gold is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Gold-->\n        <!--Diamond-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Diamond' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi1\"\n                      formControlName=\"priceDi1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi2\"\n                      formControlName=\"priceDi2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi3\"\n                      formControlName=\"priceDi3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(priceDi1.valid || priceDi1.pristine) && (priceDi2.valid || priceDi2.pristine) && ( priceDi3.valid || priceDi3.pristine)\">\n            <span>{{ 'Price Diamond is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Diamond-->\n        <!--Preferred-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Preferred' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr1\"\n                      formControlName=\"pricePr1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr2\"\n                      formControlName=\"pricePr2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr3\"\n                      formControlName=\"pricePr3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(pricePr1.valid || pricePr1.pristine) && (pricePr2.valid || pricePr2.pristine) && ( pricePr3.valid || pricePr3.pristine)\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Preferred-->\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: -webkit-box;\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n.label-prices {\n  color: #868e96;\n  padding-left: 1em;\n  padding-top: 5px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditProductMagicLookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductMagicLookComponent", function() { return EditProductMagicLookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_productrequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/models/productrequest */ "./src/app/shared/models/productrequest.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditProductMagicLookComponent = /** @class */ (function () {
    function EditProductMagicLookComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        //Gold
        this.priceG1 = 0;
        this.priceG2 = 0;
        this.priceG3 = 0;
        //Preferred
        this.priceP1 = 0;
        this.priceP2 = 0;
        this.priceP3 = 0;
        // Diamond
        this.priceD1 = 0;
        this.priceD2 = 0;
        this.priceD3 = 0;
        this.productUpdate = new _shared_models_productrequest__WEBPACK_IMPORTED_MODULE_8__["ProductRequest"]();
        this.formatter = function (x) { return x.description; };
    }
    EditProductMagicLookComponent.prototype.ngOnInit = function () {
        this.getPrices();
        this.initializeForm();
    };
    EditProductMagicLookComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceGo1: [this.action === 'edit' ? this.priceG1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceGo2: [this.action === 'edit' ? this.priceG2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceGo3: [this.action === 'edit' ? this.priceG3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pricePr1: [this.action === 'edit' ? this.priceP1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pricePr2: [this.action === 'edit' ? this.priceP2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pricePr3: [this.action === 'edit' ? this.priceP3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceDi1: [this.action === 'edit' ? this.priceD1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceDi2: [this.action === 'edit' ? this.priceD2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceDi3: [this.action === 'edit' ? this.priceD3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductMagicLookComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductMagicLookComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductMagicLookComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductMagicLookComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "priceGo1", {
        get: function () { return this.form.get('priceGo1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "priceGo2", {
        get: function () { return this.form.get('priceGo2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "priceGo3", {
        get: function () { return this.form.get('priceGo3'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "pricePr1", {
        get: function () { return this.form.get('pricePr1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "pricePr2", {
        get: function () { return this.form.get('pricePr2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "pricePr3", {
        get: function () { return this.form.get('pricePr3'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "priceDi1", {
        get: function () { return this.form.get('priceDi1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "priceDi2", {
        get: function () { return this.form.get('priceDi2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMagicLookComponent.prototype, "priceDi3", {
        get: function () { return this.form.get('priceDi3'); },
        enumerable: true,
        configurable: true
    });
    EditProductMagicLookComponent.prototype.info = function () {
        var infProperties = JSON.parse(this.product.infoAditional)[0];
        var Gold = {
            'name': 'Gold',
            'values': [
                {
                    'name': '1000',
                    'price': this.form.get('priceGo1').value
                },
                {
                    'name': '2000',
                    'price': this.form.get('priceGo2').value
                },
                {
                    'name': '3000',
                    'price': this.form.get('priceGo3').value
                }
            ]
        };
        var Preferred = {
            'name': 'Preferred',
            'values': [
                {
                    'name': '1000',
                    'price': this.form.get('pricePr1').value
                },
                {
                    'name': '2000',
                    'price': this.form.get('pricePr2').value
                },
                {
                    'name': '3000',
                    'price': this.form.get('pricePr3').value
                }
            ]
        };
        var Diamond = {
            'name': 'Diamond',
            'values': [
                {
                    'name': '1000',
                    'price': this.form.get('priceDi1').value
                },
                {
                    'name': '2000',
                    'price': this.form.get('priceDi2').value
                },
                {
                    'name': '3000',
                    'price': this.form.get('priceDi3').value
                }
            ]
        };
        var jsonInfo = JSON.stringify([infProperties, Gold, Diamond, Preferred]);
        return jsonInfo;
    };
    EditProductMagicLookComponent.prototype.save = function () {
        var _this = this;
        this.setProductRequest();
        this.productService.update$(this.productUpdate).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductMagicLookComponent.prototype.getPrices = function () {
        var info = JSON.parse(this.product.infoAditional);
        // Gold prices
        this.priceG1 = parseFloat(info[1].values[0].price); // hasta 1000 boxes
        this.priceG2 = parseFloat(info[1].values[1].price); // Desde 1001 hasta 2000 boxes
        this.priceG3 = parseFloat(info[1].values[2].price); // mayor 2001 boxes
        // Diamond prices
        this.priceD1 = parseFloat(info[2].values[0].price); // hasta 1000 boxes
        this.priceD2 = parseFloat(info[2].values[1].price); // Desde 1001 hasta 2000 boxes
        this.priceD3 = parseFloat(info[2].values[2].price); // mayor 2001 boxes
        // Preferred prices
        this.priceP1 = parseFloat(info[3].values[0].price); // hasta 1000 boxes
        this.priceP2 = parseFloat(info[3].values[1].price); // Desde 1001 hasta 2000 boxes
        this.priceP3 = parseFloat(info[3].values[2].price); // mayor 2001 boxes
    };
    EditProductMagicLookComponent.prototype.setProductRequest = function () {
        this.productUpdate.id = this.product.idProduct;
        this.productUpdate.name = this.form.get('name').value;
        this.productUpdate.descriptionShort = this.form.get('descriptionShort').value;
        this.productUpdate.infoAditional = this.info();
        this.productUpdate.idSupplier = this.product.supplier.idSupplier;
        this.productUpdate.status = this.form.get('status').value;
    };
    EditProductMagicLookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product-magic-look',
            template: __webpack_require__(/*! ./edit-product-magic-look.component.html */ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.html"),
            styles: [__webpack_require__(/*! ./edit-product-magic-look.component.scss */ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], EditProductMagicLookComponent);
    return EditProductMagicLookComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: -webkit-box;\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditProductMedmontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductMedmontComponent", function() { return EditProductMedmontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditProductMedmontComponent = /** @class */ (function () {
    function EditProductMedmontComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        this.formatter = function (x) { return x.description; };
    }
    EditProductMedmontComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    EditProductMedmontComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            infoAditional: [this.action === 'edit' ? this.product.infoAditional : ''],
            idSupplier: [this.action === 'edit' ? this.product.supplier.idSupplier : ''],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductMedmontComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductMedmontComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductMedmontComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductMedmontComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMedmontComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductMedmontComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    EditProductMedmontComponent.prototype.save = function () {
        var _this = this;
        this.productService.update$(this.form.value).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductMedmontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product-medmont',
            template: __webpack_require__(/*! ./edit-product-medmont.component.html */ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.html"),
            styles: [__webpack_require__(/*! ./edit-product-medmont.component.scss */ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], EditProductMedmontComponent);
    return EditProductMedmontComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Gold-->\n        <!--Diamond-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Diamond' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 499 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi1\"\n                      formControlName=\"priceDi1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 999 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi2\"\n                      formControlName=\"priceDi2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi3\"\n                      formControlName=\"priceDi3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(priceDi1.valid || priceDi1.pristine) && (priceDi2.valid || priceDi2.pristine) && ( priceDi3.valid || priceDi3.pristine)\">\n            <span>{{ 'Price Diamond is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Diamond-->\n        <!--Preferred-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Preferred' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 499 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr1\"\n                      formControlName=\"pricePr1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 999 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr2\"\n                      formControlName=\"pricePr2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr3\"\n                      formControlName=\"pricePr3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(pricePr1.valid || pricePr1.pristine) && (pricePr2.valid || pricePr2.pristine) && ( pricePr3.valid || pricePr3.pristine)\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Preferred-->\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: -webkit-box;\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n.label-prices {\n  color: #868e96;\n  padding-left: 1em;\n  padding-top: 5px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: EditProductSpectrumSalineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductSpectrumSalineComponent", function() { return EditProductSpectrumSalineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_productrequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/productrequest */ "./src/app/shared/models/productrequest.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditProductSpectrumSalineComponent = /** @class */ (function () {
    function EditProductSpectrumSalineComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        //Preferred
        this.priceP1 = 0;
        this.priceP2 = 0;
        this.priceP3 = 0;
        // Diamond
        this.priceD1 = 0;
        this.priceD2 = 0;
        this.priceD3 = 0;
        this.productUpdate = new _shared_models_productrequest__WEBPACK_IMPORTED_MODULE_2__["ProductRequest"]();
        this.formatter = function (x) { return x.description; };
    }
    EditProductSpectrumSalineComponent.prototype.ngOnInit = function () {
        this.getPrices();
        this.initializeForm();
    };
    EditProductSpectrumSalineComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pricePr1: [this.action === 'edit' ? this.priceP1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pricePr2: [this.action === 'edit' ? this.priceP2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pricePr3: [this.action === 'edit' ? this.priceP3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            priceDi1: [this.action === 'edit' ? this.priceD1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            priceDi2: [this.action === 'edit' ? this.priceD2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            priceDi3: [this.action === 'edit' ? this.priceD3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductSpectrumSalineComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductSpectrumSalineComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductSpectrumSalineComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "pricePr1", {
        get: function () { return this.form.get('pricePr1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "pricePr2", {
        get: function () { return this.form.get('pricePr2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "pricePr3", {
        get: function () { return this.form.get('pricePr3'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "priceDi1", {
        get: function () { return this.form.get('priceDi1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "priceDi2", {
        get: function () { return this.form.get('priceDi2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductSpectrumSalineComponent.prototype, "priceDi3", {
        get: function () { return this.form.get('priceDi3'); },
        enumerable: true,
        configurable: true
    });
    EditProductSpectrumSalineComponent.prototype.info = function () {
        var infProperties = JSON.parse(this.product.infoAditional)[0];
        var Preferred = {
            'name': 'Preferred',
            'values': [
                {
                    'name': '250',
                    'price': this.form.get('pricePr1').value
                },
                {
                    'name': '500',
                    'price': this.form.get('pricePr2').value
                },
                {
                    'name': '1000',
                    'price': this.form.get('pricePr3').value
                }
            ]
        };
        var Diamond = {
            'name': 'Diamond',
            'values': [
                {
                    'name': '250',
                    'price': this.form.get('priceDi1').value
                },
                {
                    'name': '500',
                    'price': this.form.get('priceDi2').value
                },
                {
                    'name': '1000',
                    'price': this.form.get('priceDi3').value
                }
            ]
        };
        var jsonInfo = JSON.stringify([infProperties, Diamond, Preferred]);
        return jsonInfo;
    };
    EditProductSpectrumSalineComponent.prototype.save = function () {
        var _this = this;
        this.setProductRequest();
        this.productService.update$(this.productUpdate).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductSpectrumSalineComponent.prototype.getPrices = function () {
        var info = JSON.parse(this.product.infoAditional);
        // Diamond prices
        this.priceD1 = parseFloat(info[1].values[0].price); // Desde 250 hasta 499
        this.priceD2 = parseFloat(info[1].values[1].price); // Desde 500 hasta 999
        this.priceD3 = parseFloat(info[1].values[2].price); // mayor 2001 boxes
        // Preferred prices
        this.priceP1 = parseFloat(info[2].values[0].price); // Desde 250 hasta 499
        this.priceP2 = parseFloat(info[2].values[1].price); // Desde 500 hasta 999
        this.priceP3 = parseFloat(info[2].values[2].price); // Desde 500 hasta 999
    };
    EditProductSpectrumSalineComponent.prototype.setProductRequest = function () {
        this.productUpdate.id = this.product.idProduct;
        this.productUpdate.name = this.form.get('name').value;
        this.productUpdate.descriptionShort = this.form.get('descriptionShort').value;
        this.productUpdate.infoAditional = this.info();
        this.productUpdate.idSupplier = this.product.supplier.idSupplier;
        this.productUpdate.status = this.form.get('status').value;
    };
    EditProductSpectrumSalineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product-spectrum-saline',
            template: __webpack_require__(/*! ./edit-product-spectrum-saline.component.html */ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.html"),
            styles: [__webpack_require__(/*! ./edit-product-spectrum-saline.component.scss */ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], EditProductSpectrumSalineComponent);
    return EditProductSpectrumSalineComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price Gold' | translate }}</label>\n            <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price 1' | translate }}\" name=\"price1\" formControlName=\"price1\">\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price1.valid || price1.pristine\">\n            <span>{{ 'Price Gold is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price Diamond' | translate }}</label>\n            <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price 2' | translate }}\" name=\"price2\" formControlName=\"price2\">\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price2.valid || price2.pristine\">\n            <span>{{ 'Price Diamond is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price Preferred' | translate }}</label>\n            <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"text\" currencyMask  [options] = \" {prefix: '', miles: ',', decimal: '.'}\" class=\"form-control\" placeholder=\"{{ 'Enter price 3' | translate }}\" name=\"price3\" formControlName=\"price3\">\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price3.valid || price3.pristine\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: -webkit-box;\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        this.formatter = function (x) { return x.description; };
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    EditProductComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price1: [this.action === 'edit' ? this.product.price1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price2: [this.action === 'edit' ? this.product.price2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price3: [this.action === 'edit' ? this.product.price3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            infoAditional: [this.action === 'edit' ? this.product.infoAditional : ''],
            idSupplier: [this.action === 'edit' ? this.product.supplier.idSupplier : ''],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "price1", {
        get: function () { return this.form.get('price1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "price2", {
        get: function () { return this.form.get('price2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "price3", {
        get: function () { return this.form.get('price3'); },
        enumerable: true,
        configurable: true
    });
    EditProductComponent.prototype.save = function () {
        var _this = this;
        this.productService.update$(this.form.value).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/products/modals/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/products/modals/edit-product/edit-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/notification-balance/notification-balance.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/products/modals/notification-balance/notification-balance.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Notification' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"card-body table-responsive row\">\n    <div class=\"confirm\">\n      <span>{{ message | translate }}</span>\n    </div>\n    <div class=\"confirm\" [hidden]=\"!visibleAdmin\">\n      <span>{{ 'Are you sure you want to place the order?' | translate }}</span>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Close' | translate }}&nbsp;\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Accept' | translate }}&nbsp;\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/notification-balance/notification-balance.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/products/modals/notification-balance/notification-balance.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.confirm {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/products/modals/notification-balance/notification-balance.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/products/modals/notification-balance/notification-balance.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NotificationBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBalanceComponent", function() { return NotificationBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NotificationBalanceComponent = /** @class */ (function () {
    function NotificationBalanceComponent(modalReference, basketService, alertify, notification, translate, orderService, spinner, userStorageService, router) {
        this.modalReference = modalReference;
        this.basketService = basketService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.orderService = orderService;
        this.spinner = spinner;
        this.userStorageService = userStorageService;
        this.router = router;
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_7__["BuyNow"]();
        this.visibleAdmin = false;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    NotificationBalanceComponent.prototype.ngOnInit = function () {
        this.buyNow = this.buyNowModal;
        if (this.user.role.idRole === 3) {
            this.message = 'It does not have the credit balance available, the order will remain pending until authorized.';
        }
        else if (this.user.role.idRole === 2) {
            this.message = 'The Customer does not have the available credit balance, the order will remain in pending status until authorized.';
        }
        else {
            this.message = 'The Customer has no available balance.';
            this.visibleAdmin = true;
        }
    };
    NotificationBalanceComponent.prototype.save = function () {
        var _this = this;
        this.spinner.show();
        this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.spinner.hide();
                _this.close();
                _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                    _this.notification.success('', res);
                });
                _this.redirectListOrder();
            }
            else {
                console.log(res);
                _this.translate.get('Connection Failed', { value: 'Connection Failed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
                _this.spinner.hide();
                _this.close();
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    NotificationBalanceComponent.prototype.close = function () {
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    NotificationBalanceComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    NotificationBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-balance',
            template: __webpack_require__(/*! ./notification-balance.component.html */ "./src/app/products/modals/notification-balance/notification-balance.component.html"),
            styles: [__webpack_require__(/*! ./notification-balance.component.scss */ "./src/app/products/modals/notification-balance/notification-balance.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["OrderService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_10__["UserStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], NotificationBalanceComponent);
    return NotificationBalanceComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>-->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Material' | translate }}</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' | translate }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\"row info-content\">\n            <input class=\"form-control\" type=\"text\" maxlength=\"20\" placeholder=\"{{ 'Enter name patient' | translate }}\" [(ngModel)]=\"product.patient\"\n              required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\" required\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              required [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\">\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n         <!--shipping address-->\n        <div class=\"col-lg-4\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content \">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <h5 class=\"padding-price\" [hidden]=\"product.priceSale === ''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h5>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Right Eye' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-lg-2 margin-col padding-col\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                  [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div class=\"col-lg-2 margin-col padding-col\" *ngFor=\"let parameter of product.parametersRight\">\n              <div>\n                <!--param name-->\n                <div class=\"row\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div *ngIf=\"parameter.type === 'selected'\" class=\"row select-values\">\n                  <ng-select [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\"\n                    [(ngModel)]=\"parameter.selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                    {{item}}\n                  </ng-select>\n                </div>\n\n                <div *ngIf=\"parameter.type === 'input'\" class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeRight\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Left Eye' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-lg-2 margin-col padding-col\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                  [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div class=\"col-lg-2 margin-col padding-col\" *ngFor=\"let parameter of product.parametersLeft\">\n              <div>\n                <!--param name-->\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div *ngIf=\"parameter.type === 'selected'\" class=\"row select-values\">\n                  <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\"\n                    [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\"\n                    [required]=\"product.eyeLeft\">\n                    {{item}}\n                  </ng-select>\n                </div>\n\n                <div *ngIf=\"parameter.type === 'input'\" class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeLeft\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .padding-col {\n    padding-left: 3em; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 3em; }\n.ng-select {\n  width: 100%; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.product-info .padding-price {\n    padding-top: 1.1em;\n    font-weight: bold; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductViewBlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewBlueComponent", function() { return ProductViewBlueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component */ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewBlueComponent = /** @class */ (function () {
    function ProductViewBlueComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate, spinner) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploader.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item);
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewBlueComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.clearFiles();
    };
    ProductViewBlueComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(6, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.productService.findBySupplierAndInViewAndCategory$(6, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                        _this.setCodeProduct();
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.getProductView();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewBlueComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewBlueComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Warranty') {
            parameter.selected = parameter.selected === "Yes" ? true : false;
        }
    };
    /*setValuesAxesXtensa(eye, value) {
      if (eye === 'right') {
        this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesRight.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesRight.values = this.axesXtensa[1].values;
        }
      } else {
        this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesLeft.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesLeft.values = this.axesXtensa[1].values;
        }
      }
    }*/
    ProductViewBlueComponent.prototype.setValueEye = function (eye) {
        if (eye === 'right') {
            this.product.eyeRight = !this.product.eyeRight;
            if (!this.product.eyeRight) {
                this.clean('right');
            }
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
            if (!this.product.eyeLeft) {
                this.clean('left');
            }
        }
    };
    ProductViewBlueComponent.prototype.setCodeProduct = function () {
        var productName = this.product.name;
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, productName)) {
                prCode = pr;
            }
        });
        this.productCode = prCode;
    };
    ProductViewBlueComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewBlueComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                }
            });
        }
    };
    ProductViewBlueComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewBlueComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewBlueComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewBlueComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewBlueComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productCode = this.productCode;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = productCode.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewBlueComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.openModal(type);
    };
    ProductViewBlueComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationBlueLightComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.productCode;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewBlueComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.product.quantityRight) {
                isValid = false;
            }
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.product.quantityLeft) {
                isValid = false;
            }
        }
        return isValid;
    };
    ProductViewBlueComponent.prototype.maxFilesSize = function () {
        var maxFileSize = 0;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                maxFileSize = maxFileSize + item.file.size;
            });
        }
        return maxFileSize;
    };
    ProductViewBlueComponent.prototype.removeFile = function (item) {
        this.uploader.removeFromQueue(item);
        this.clearSelectedFile();
    };
    ProductViewBlueComponent.prototype.clearSelectedFile = function () {
        this.selectedFiles.nativeElement.value = '';
    };
    ProductViewBlueComponent.prototype.clearFiles = function () {
        if (this.uploader.queue.length) {
            this.uploader.clearQueue();
            this.clearSelectedFile();
        }
    };
    ProductViewBlueComponent.prototype.saveFiles = function () {
        this.listFileBasket = new Array;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewBlueComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResult.response).data;
            fileProductRequest.name = this.uploadResult.item.file.name;
            fileProductRequest.type = this.uploadResult.item.file.type;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileBasket.push(fileProductRequest);
        }
        else {
            console.log('error file');
        }
    };
    ProductViewBlueComponent.prototype.clean = function (eye) {
        var parameters;
        if (eye === 'right') {
            parameters = this.product.parametersRight;
            this.product.quantityRight = '';
        }
        else {
            parameters = this.product.parametersLeft;
            this.product.quantityLeft = '';
        }
        // parameter
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parameters, function (param) {
            param.selected = null;
            param.sel = null;
        });
        if (eye === 'right') {
            this.product.parametersRight = parameters;
        }
        else {
            this.product.parametersLeft = parameters;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewBlueComponent.prototype, "selectedFiles", void 0);
    ProductViewBlueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-blue',
            template: __webpack_require__(/*! ./product-view-blue.component.html */ "./src/app/products/product-view-blue/product-view-blue.component.html"),
            styles: [__webpack_require__(/*! ./product-view-blue.component.scss */ "./src/app/products/product-view-blue/product-view-blue.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_18__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerService"]])
    ], ProductViewBlueComponent);
    return ProductViewBlueComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>-->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"col-md-3\">\n          <dt>{{ 'Material' | translate }}</dt>\n          <dd>\n            <a>{{ product.material | translate }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\" *ngIf=\"download\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' | translate }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\"row info-content\">\n            <input class=\"form-control\" type=\"text\" maxlength=\"20\" placeholder=\"{{ 'Enter name patient' | translate }}\" [(ngModel)]=\"product.patient\"\n              required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter customer patient' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\"\n              required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-lg-4\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <h5 class=\"padding-price\" [hidden]=\"product.priceSale===''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h5>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Right Eye' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-lg-2 margin-col padding-col\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                  [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div class=\"col-lg-2 margin-col padding-col\" *ngFor=\"let parameter of product.parametersRight\">\n              <div>\n                <!--param name-->\n                <div class=\"row\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div *ngIf=\"parameter.type === 'selected'\" class=\"row select-values\">\n                  <ng-select class=\"display-row\" (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\"\n                    [(ngModel)]=\"parameter.selected\" [disabled]=\"!product.eyeRight\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\"\n                    [required]=\"product.eyeRight\">\n                    <ng-template ng-label-tmp let-item=\"item\">\n                      <div class=\"supplier-body\">\n                        <span>{{ item | translate }}</span>\n                      </div>\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                      <div class=\"supplier-body\">\n                        <h6 [ngOptionHighlight]=\"search\">{{ item | translate }}</h6>\n                      </div>\n                    </ng-template>\n                  </ng-select>\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name !=='Axes (º)' && parameter.name !=='Cylinder (D)' && parameter.name !=='Sphere (D)'\"\n                  class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" min=\"00.00\" step=\"00.01\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\"\n                    [required]=\"product.eyeRight\" (change)=\"changeSelect('right',parameter, parameter.selected)\">\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name ==='Sphere (D)'\" class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" step=\"00.01\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\"\n                    [required]=\"product.eyeRight\" (change)=\"changeSelect('left',parameter, parameter.selected)\">\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name !=='Axes (º)' && parameter.name ==='Cylinder (D)'\"\n                  class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" step=\"0.01\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\"\n                    [required]=\"product.eyeRight\" (change)=\"changeSelect('right',parameter, parameter.selected)\">\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name ==='Axes (º)'\" class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\"\n                    [required]=\"product.eyeRight\" (change)=\"changeSelect('right',parameter, parameter.selected)\">\n                </div>\n                <!--</div>-->\n              </div>\n            </div>\n            <!--</div>-->\n            <!--prices aditional-->\n            <div class=\"col-lg-4 margin-col padding-col\">\n              <div class=\"warranty\" [hidden]=\"!warrantyRight || !product.quantityRight\">\n                <span>{{ 'Additional by Warranty' | translate }}</span>&nbsp;&nbsp;\n                <p>\n                  <span>{{ product.additional * product.quantityRight | currency : \"USD $\" }}</span>\n                </p>\n              </div>\n            </div>\n            <!--</div>-->\n          </div>\n        </div>\n\n        <!--comments right-->\n        <div class=\"col-md-12\">\n          <div class=\"row header\">\n            <div class=\"col-md-12\">\n              <div class=\"title\">{{ 'Comments Right Eye' | translate }}</div>\n              <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsRight\"\n                [disabled]=\"!product.eyeRight\" placeholder=\"{{ 'Enter right eye observations' | translate }}\"></textarea>\n            </div>\n          </div>\n        </div>\n\n        <!--files right-->\n        <div class=\"documents col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"\">\n                <dt class=\"title\">{{ 'Documents Right Eye (Topography, Tangential Map, etc.)' | translate }}</dt>\n                <div class=\"custom-file\">\n                  <input #selectedFilesRightEye type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderRightEye\"\n                    [disabled]=\"!product.eyeRight || uploaderRightEye.queue.length > 4\" multiple />\n                  <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                  <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                  <div class=\"message-error\">\n                    <span translate>{{'Max files size:' | translate}} 25MB</span>\n                    <span> / </span>\n                    <span translate>{{'Maximum files number:' | translate }} 5</span>\n                  </div>\n                </div>\n              </div>\n              <br>\n              <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderRightEye.queue.length > 0\">\n                <div class=\"row justify-content-end\" *ngIf=\"uploaderRightEye.queue.length > 1\">\n                  <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderRightEye.clearQueue()\" [disabled]=\"!uploaderRightEye.queue.length\">\n                    <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n                  </button>\n                </div>\n                <br>\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"50%\">{{ 'Name' | translate }}</th>\n                      <th>{{ 'Size' | translate }}</th>\n                      <th>{{ 'Actions' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploaderRightEye.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td nowrap>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item, 'Right')\">\n                          <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Left Eye' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-lg-2 margin-col padding-col\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                  [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div class=\"col-lg-2 margin-col padding-col\" *ngFor=\"let parameter of product.parametersLeft\">\n              <div>\n                <!--param name-->\n                <div class=\"label\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div *ngIf=\"parameter.type === 'selected'\" class=\"row select-values\">\n                  <ng-select class=\"display-row\" (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\"\n                    [(ngModel)]=\"parameter.selected\" [disabled]=\"!product.eyeLeft\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\"\n                    [required]=\"product.eyeLeft\">\n                    <ng-template ng-label-tmp let-item=\"item\">\n                      <div class=\"supplier-body\">\n                        <span>{{ item | translate }}</span>\n                      </div>\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                      <div class=\"supplier-body\">\n                        <h6 [ngOptionHighlight]=\"search\">{{ item | translate }}</h6>\n                      </div>\n                    </ng-template>\n                  </ng-select>\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name !=='Axes (º)' && parameter.name !=='Cylinder (D)' && parameter.name !=='Sphere (D)'\"\n                  class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" min=\"00.00\" step=\"00.01\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" (change)=\"changeSelect('left',parameter, parameter.selected)\">\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name ==='Sphere (D)'\" class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" step=\"00.01\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" (change)=\"changeSelect('left',parameter, parameter.selected)\">\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name !=='Axes (º)' && parameter.name ==='Cylinder (D)'\"\n                  class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" step=\"0.01\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" (change)=\"changeSelect('left',parameter, parameter.selected)\">\n                </div>\n                <div *ngIf=\"parameter.type === 'input' && parameter.name ==='Axes (º)'\" class=\"row select-values\">\n                  <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                    [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" (change)=\"changeSelect('left',parameter, parameter.selected)\">\n                </div>\n              </div>\n            </div>\n\n            <!--prices aditional-->\n            <div class=\"col-lg-4 margin-col padding-col\">\n              <div class=\"warranty\" [hidden]=\"!warrantyLeft || !product.quantityLeft\">\n                <span>{{ 'Additional by Warranty' | translate }}</span>&nbsp;&nbsp;\n                <p>\n                  <span>{{ product.additional * product.quantityLeft | currency : \"USD $\" }}</span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n         <!--comments left-->\n        <div class=\"col-md-12\">\n          <div class=\"row header\">\n            <div class=\"col-md-12\">\n              <div class=\"title\">{{ 'Comments Left Eye' | translate }}</div>\n              <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsLeft\"\n                [disabled]=\"!product.eyeLeft\" placeholder=\"{{ 'Enter left eye observations' | translate }}\"></textarea>\n            </div>\n          </div>\n        </div>\n  \n        <!--files left-->\n        <div class=\"documents col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"\">\n                <dt class=\"title\">{{ 'Documents Left Eye (Topography, Tangential Map, etc.)' | translate }}</dt>\n                <div class=\"custom-file\">\n                  <input #selectedFilesLeftEye type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderLeftEye\"\n                    [disabled]=\"!product.eyeLeft || uploaderLeftEye.queue.length > 4\" multiple />\n                  <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                  <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                  <div class=\"message-error\">\n                    <span translate>{{'Max files size:' | translate}} 25MB</span>\n                    <span> / </span>\n                    <span translate>{{'Maximum files number:' | translate }} 5</span>\n                  </div>\n                </div>\n              </div>\n              <br>\n              <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderLeftEye.queue.length > 0\">\n                <div class=\"row justify-content-end\" *ngIf=\"uploaderLeftEye.queue.length > 1\">\n                  <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderLeftEye.clearQueue()\" [disabled]=\"!uploaderLeftEye.queue.length\">\n                    <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n                  </button>\n                </div>\n                <br>\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"50%\">{{ 'Name' | translate }}</th>\n                      <th>{{ 'Size' | translate }}</th>\n                      <th>{{ 'Actions' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploaderLeftEye.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td nowrap>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item, 'Left')\">\n                          <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 buy-btns\">\n        <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n          (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy Now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n          [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .padding-col {\n    padding-left: 3em; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.ng-select {\n  width: 100%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.warranty {\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .6s; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\n.documents {\n  margin-top: 1em; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n.custom-file-input {\n  cursor: pointer; }\n.message-error {\n  margin-top: 0; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.page-header-fixed {\n  margin-left: 15px; }\n.padding-price {\n  padding-top: 1.1em;\n  font-weight: bold; }\n.warranty {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-top: 10px; }\n.warranty > p:nth-child(2) {\n    font-size: 18px;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductViewEuclidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewEuclidComponent", function() { return ProductViewEuclidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_euclid_confirmation_euclid_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component */ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewEuclidComponent = /** @class */ (function () {
    function ProductViewEuclidComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate, spinner) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.warrantyRight = false;
        this.warrantyLeft = false;
        this.download = false;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        this.uploadResult = null;
        this.uploadResultLeftEye = null;
        this.uploadResultRightEye = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.uploaderLeftEye = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.uploaderRightEye = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        /*this.uploader.onAfterAddingFile = (item) => {
          const maxSize = this.maxFilesSize();
    
          if (maxSize > this.maxFileSize) {
            this.removeFile(item, '');
            this.translate.get('Exceeds the maximum size allowed', {value: 'Exceeds the maximum size allowed'}).subscribe(( res: string) => {
              this.notification.error('', res);
            });
          }
        };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
          this.uploadResult = {'success': true, 'item': item, 'response':
                               response, 'status': status, 'headers': headers};
          if (this.uploadResult) {
            // this.buildFileProductRequested();
          }
        };
        this.uploader.onErrorItem = (item, response, status, headers) => {
            this.uploadResult = {'success': true, 'item': item, 'response':
                                 response, 'status': status, 'headers': headers};
        };*/
        this.uploaderLeftEye.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item, 'Left');
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderLeftEye.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResultLeftEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResultLeftEye) {
                _this.buildFileProductRequested('Left');
            }
        };
        this.uploaderLeftEye.onErrorItem = function (item, response, status, headers) {
            _this.uploadResultLeftEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
        this.uploaderRightEye.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item, 'Right');
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderRightEye.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResultRightEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResultRightEye) {
                _this.buildFileProductRequested('Right');
            }
        };
        this.uploaderRightEye.onErrorItem = function (item, response, status, headers) {
            _this.uploadResultRightEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewEuclidComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.clearFiles();
    };
    ProductViewEuclidComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(4, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.productService.findBySupplierAndInViewAndCategory$(4, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.getProductView();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewEuclidComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        lodash__WEBPACK_IMPORTED_MODULE_1__["reverse"](this.product.parametersRight[4].values);
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        lodash__WEBPACK_IMPORTED_MODULE_1__["reverse"](this.product.parametersLeft[4].values);
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.pricesAditionalWarranties = JSON.parse(this.product.infoAditional)[1].values[0];
        this.download = JSON.parse(this.product.infoAditional)[2].value;
        this.product.priceSale = '';
        this.product.additional = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewEuclidComponent.prototype.setCodeProduct = function (cod, lat) {
        var productName = this.product.name;
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, productName) && lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.codeSpectrum, cod)) {
                prCode = pr;
            }
        });
        if (lat === 'right') {
            this.productCodeR = prCode;
        }
        else {
            this.productCodeL = prCode;
        }
    };
    ProductViewEuclidComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Warranty') {
            if (eye === 'right') {
                if (parameter.selected === 'Yes') {
                    this.warrantyRight = true;
                    this.setCodeProduct('(W)', 'right');
                }
                else {
                    this.warrantyRight = false;
                    this.setCodeProduct('(NW)', 'right');
                }
            }
            if (eye === 'left') {
                if (parameter.selected === 'Yes') {
                    this.warrantyLeft = true;
                    this.setCodeProduct('(W)', 'left');
                }
                else {
                    this.warrantyLeft = false;
                    this.setCodeProduct('(NW)', 'left');
                }
            }
            if (this.client) {
                this.definePrice(this.client.membership.idMembership);
            }
        }
        if (parameter.name === 'Axes (º)') {
            parameter.selected = this.axisFormat(value);
        }
        if (parameter.name === 'Flat K' || parameter.name === 'Steep K' || parameter.name === 'HVID' ||
            (parameter.name === 'Sphere (D)' && parameter.type === 'input')) {
            parameter.selected = this.format(value);
        }
    };
    ProductViewEuclidComponent.prototype.axisFormat = function (value) {
        var axes;
        if (value !== null) {
            if (value <= 180) {
                axes = this.completeStart(value, 3);
            }
            else {
                axes = null;
            }
        }
        return axes;
    };
    ProductViewEuclidComponent.prototype.cilinderFormat = function (value) {
        var cilinder;
        var toString;
        if (value !== null) {
            toString = value.toString();
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](toString, '-')) {
                cilinder = this.formatCi(toString);
            }
            else if (value !== 0 && value !== '0.00') {
                cilinder = '-' + this.formatCi(toString);
            }
            else {
                cilinder = this.formatCi(toString);
            }
        }
        return cilinder;
    };
    ProductViewEuclidComponent.prototype.format = function (value) {
        var flat;
        var partInt;
        var partDec;
        var pos;
        var toString;
        if (value !== null) {
            toString = value.toString();
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](toString, '.')) {
                pos = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](toString, '.');
                partInt = toString.slice(0, pos);
                if (partInt <= 99) {
                    partDec = toString.slice(pos + 1, toString.length);
                    flat = this.completeStart(partInt, 2) + '.' + this.completeEnd(partDec, 2);
                }
                else {
                    flat = null;
                }
            }
            else {
                if (value <= 99) {
                    flat = this.completeStart(value, 2) + '.00';
                }
                else {
                    flat = null;
                }
            }
            return flat;
        }
    };
    ProductViewEuclidComponent.prototype.formatCi = function (value) {
        var cilinder;
        var partInt;
        var partDec;
        var pos;
        var toString;
        if (value !== null) {
            toString = value.toString();
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](toString, '.')) {
                pos = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](toString, '.');
                partInt = toString.slice(0, pos);
                partDec = toString.slice(pos + 1, toString.length);
                cilinder = this.completeStart(partInt, 1) + '.' + this.completeEnd(partDec, 2);
            }
            else {
                cilinder = this.completeStart(value, 1) + '.00';
            }
            return cilinder;
        }
    };
    ProductViewEuclidComponent.prototype.completeStart = function (value, tamano) {
        var filteredId = value.toString();
        filteredId = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](filteredId, tamano, '0');
        return filteredId;
    };
    ProductViewEuclidComponent.prototype.completeEnd = function (value, tamano) {
        var filteredId = value.toString();
        filteredId = lodash__WEBPACK_IMPORTED_MODULE_1__["padEnd"](filteredId, tamano, '0');
        return filteredId;
    };
    ProductViewEuclidComponent.prototype.setValueEye = function (eye) {
        if (eye === 'right') {
            this.product.eyeRight = !this.product.eyeRight;
            if (!this.product.eyeRight) {
                this.clean('right');
            }
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
            if (!this.product.eyeLeft) {
                this.clean('left');
            }
        }
    };
    ProductViewEuclidComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewEuclidComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client.idUser);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                    _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                        return !(u.certificationCode === null || u.certificationCode === '');
                    });
                }
            });
        }
    };
    ProductViewEuclidComponent.prototype.onSelectedClient = function (clientSelect) {
        if (clientSelect !== undefined) {
            this.client = clientSelect;
            this.findShippingAddress(this.client.idUser);
            this.definePrice(clientSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewEuclidComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewEuclidComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewEuclidComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                this.product.additional = this.product.pricesAditionalWarranties.values[0].price - this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                this.product.additional = this.product.pricesAditionalWarranties.values[1].price - this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                this.product.additional = this.product.pricesAditionalWarranties.values[2].price - this.product.price3;
                break;
        }
    };
    ProductViewEuclidComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productCodeL = this.productCodeL;
        var productCodeR = this.productCodeR;
        var productsSelected = this.productsSelected;
        var warrantyRight = this.warrantyRight;
        var warrantyLeft = this.warrantyLeft;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.id = productCodeR.idProduct;
                productSelected.codeSpectrum = productCodeR.codeSpectrum;
                productSelected.quantity = product.quantityRight;
                if (warrantyRight) {
                    productSelected.price = productSelected.price + product.additional;
                }
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    if (parameter.name === 'Warranty') {
                        parameter.selected = parameter.selected === 'Yes' ? true : false;
                    }
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.id = productCodeL.idProduct;
                productSelected.codeSpectrum = productCodeL.codeSpectrum;
                productSelected.quantity = product.quantityLeft;
                if (warrantyLeft) {
                    productSelected.price = productSelected.price + product.additional;
                }
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    if (parameter.name === 'Warranty') {
                        parameter.selected = parameter.selected === 'Yes' ? true : false;
                    }
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewEuclidComponent.prototype.addToCart = function (type) {
        this.type = type;
        this.spinner.show();
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        var productsRequested = [];
        this.saveFiles();
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productoSelect.codeSpectrum = product.codeSpectrum;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client.idUser;
        this.basketRequestModal.productRequestedList = productsRequested;
        // this.openModal(type);
    };
    ProductViewEuclidComponent.prototype.verifyOpenModal = function () {
        if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
            && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
            this.openModal(this.type);
        }
    };
    ProductViewEuclidComponent.prototype.openModal = function (type) {
        var _this = this;
        this.spinner.hide();
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_euclid_confirmation_euclid_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationEuclidComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
        modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
        // modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.additional = this.product.additional;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewEuclidComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
            return false;
        }
        if (this.product.eyeRight) {
            if (this.product.quantityRight === undefined) {
                return false;
            }
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.product.quantityRight) {
                isValid = false;
            }
        }
        if (this.product.eyeLeft) {
            if (this.product.quantityLeft === undefined) {
                return false;
            }
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.product.quantityLeft) {
                isValid = false;
            }
        }
        return isValid;
    };
    ProductViewEuclidComponent.prototype.maxFilesSize = function () {
        var maxFileSize = 0;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                maxFileSize = maxFileSize + item.file.size;
            });
        }
        return maxFileSize;
    };
    ProductViewEuclidComponent.prototype.removeFile = function (item, eye) {
        // this.uploader.removeFromQueue(item);
        if (eye === 'Right') {
            this.uploaderRightEye.removeFromQueue(item);
        }
        else if (eye === 'Left') {
            this.uploaderLeftEye.removeFromQueue(item);
        }
        this.clearSelectedFile(eye);
    };
    ProductViewEuclidComponent.prototype.clearSelectedFile = function (eye) {
        // this.selectedFiles.nativeElement.value = '';
        if (eye === 'Right') {
            this.selectedFilesRightEye.nativeElement.value = '';
        }
        else if (eye === 'Left') {
            this.selectedFilesLeftEye.nativeElement.value = '';
        }
    };
    ProductViewEuclidComponent.prototype.clearFiles = function () {
        /*if (this.uploader.queue.length) {
          this.uploader.clearQueue();
          // this.clearSelectedFile();
        }*/
        if (this.uploaderLeftEye.queue.length) {
            this.uploaderLeftEye.clearQueue();
            this.clearSelectedFile('Left');
        }
        if (this.uploaderRightEye.queue.length) {
            this.uploaderRightEye.clearQueue();
            this.clearSelectedFile('Right');
        }
    };
    ProductViewEuclidComponent.prototype.saveFiles = function () {
        // this.listFileBasket = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        /*if (this.uploader.queue) {
          _.each(this.uploader.queue, function (item) {
            item.upload();
          });
        }*/
        if (this.uploaderLeftEye.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploaderLeftEye.queue, function (item) {
                item.upload();
            });
        }
        if (this.uploaderRightEye.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploaderRightEye.queue, function (item) {
                item.upload();
            });
        }
        if (!this.uploaderLeftEye.queue.length && !this.uploaderRightEye.queue.length) {
            this.openModal(this.type);
        }
    };
    ProductViewEuclidComponent.prototype.buildFileProductRequested = function (eye) {
        if (eye === 'Right' && this.uploadResultRightEye.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResultRightEye.response).data;
            fileProductRequest.name = this.uploadResultRightEye.item.file.name;
            fileProductRequest.type = this.uploadResultRightEye.item.file.type;
            fileProductRequest.size = this.uploadResultRightEye.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileRightEye.push(fileProductRequest);
            this.verifyOpenModal();
        }
        if (eye === 'Left' && this.uploadResultLeftEye.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResultLeftEye.response).data;
            fileProductRequest.name = this.uploadResultLeftEye.item.file.name;
            fileProductRequest.type = this.uploadResultLeftEye.item.file.type;
            fileProductRequest.size = this.uploadResultLeftEye.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileLeftEye.push(fileProductRequest);
            this.verifyOpenModal();
        }
    };
    ProductViewEuclidComponent.prototype.clean = function (eye) {
        var parameters;
        if (eye === 'right') {
            parameters = this.product.parametersRight;
            this.product.quantityRight = '';
            this.product.observationsRight = '';
        }
        else {
            parameters = this.product.parametersLeft;
            this.product.quantityLeft = '';
            this.product.observationsLeft = '';
        }
        // parameter
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parameters, function (param) {
            param.selected = null;
            param.sel = null;
        });
        if (eye === 'right') {
            this.product.parametersRight = parameters;
        }
        else {
            this.product.parametersLeft = parameters;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewEuclidComponent.prototype, "selectedFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFilesLeftEye'),
        __metadata("design:type", Object)
    ], ProductViewEuclidComponent.prototype, "selectedFilesLeftEye", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFilesRightEye'),
        __metadata("design:type", Object)
    ], ProductViewEuclidComponent.prototype, "selectedFilesRightEye", void 0);
    ProductViewEuclidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-euclid',
            template: __webpack_require__(/*! ./product-view-euclid.component.html */ "./src/app/products/product-view-euclid/product-view-euclid.component.html"),
            styles: [__webpack_require__(/*! ./product-view-euclid.component.scss */ "./src/app/products/product-view-euclid/product-view-euclid.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_18__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerService"]])
    ], ProductViewEuclidComponent);
    return ProductViewEuclidComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div> -->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"col-md-3\">\n          <dt>{{ 'Material' | translate }}</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' | translate}}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\"row info-content\">\n            <input class=\"form-control\" type=\"text\" maxlength=\"20\" placeholder=\"{{ 'Enter name patient' | translate }}\" [(ngModel)]=\"product.patient\"\n              required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\" [(ngModel)]=\"product.client\"\n              disabled required>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\"\n              required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-lg-6\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n          <div class=\"row info-content\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n          <div class=\"col-lg-3\" *ngFor=\"let header of product.headerRight\">\n            <div class=\"row\" *ngIf =\"header.name === 'Inserts (DMV)'\">\n              <label class=\"form-check-label\">{{ header.name | translate }}</label>&nbsp;&nbsp;\n            </div>\n            <div class=\"row\">\n              <div class=\"select-values col-sm-12\" *ngIf=\"header.type === 'selected' && header.name === 'Inserts (DMV)'\">\n                <ng-select (change)=\"changeSelect('right', header, $event,0)\" [items]=\"header.values\"\n                  [(ngModel)]=\"header.sel\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [required]=\"true\"\n                  [clearable]=\"false\">\n                  <ng-template ng-label-tmp let-item=\"item\">\n                    <div class=\"supplier-body\">\n                      <span>{{ item | translate }}</span>\n                    </div>\n                  </ng-template>\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                    <div class=\"supplier-body\">\n                      <h6 [ngOptionHighlight]=\"search\">{{ item | translate }}</h6>\n                    </div>\n                  </ng-template>\n                </ng-select>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"row additional col-lg-12\">\n            <p *ngIf=\"additionalInserts === true && membership !== 0\">\n              <span>{{ 'Warning: Includes' | translate }}</span>&nbsp;&nbsp;\n              <span>{{'Inserts (DMV)' | translate}}:{{ inserts | currency : \" USD $\" }}</span>&nbsp;\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Right Eye' | translate }}</label>\n\n          <!--row header right (contamac / hydrapeg / insertors)-->\n          <div class=\"row header-europa\">\n            <div class=\"col-lg-3\" *ngFor=\"let header of product.headerRight\">\n              <div class=\"row\" *ngIf =\"header.name !== 'Inserts (DMV)'\">\n                <label class=\"form-check-label\">{{ header.name | translate }}</label>&nbsp;&nbsp;\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\" *ngIf=\"header.type === 'selected' && header.name !== 'Inserts (DMV)'\">\n                  <ng-select (change)=\"changeSelect('right', header, $event,0)\" [items]=\"header.values\" [disabled]=\"!product.eyeRight\"\n                    [(ngModel)]=\"header.sel\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [required]=\"product.eyeRight\"\n                    [clearable]=\"false\">\n                    <ng-template ng-label-tmp let-item=\"item\">\n                      <div class=\"supplier-body\">\n                        <span>{{ item | translate }}</span>\n                      </div>\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                      <div class=\"supplier-body\">\n                        <h6 [ngOptionHighlight]=\"search\">{{ item | translate }}</h6>\n                      </div>\n                    </ng-template>\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 prices\">\n              <p>\n                <span [hidden]=\"product.priceSaleRight===0\">\n                  {{ product.priceSaleRight | currency : \"USD $\" }}\n                </span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"row title\">{{ 'Parameters' | translate }}</div>\n\n          <!--params right-->\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-lg-3\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\">\n                  <input class=\"form-control\" type=\"number\" value=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"true\" [required]=\"product.eyeRight\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3\" *ngFor=\"let parameter of product.parametersRight\">\n              <div>\n                <!--param name-->\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div class=\"row\">\n                  <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-12\">\n                    <ng-select (change)=\"changeSelect('right', parameter, $event,0)\" [items]=\"parameter.values\"\n                      [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.sel\"\n                      bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                  </div>\n\n                  <!--Only Power-->\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Power'\" class=\"select-values param-power col-sm-12\">\n                    <ng-select [items]=\"['+', '-']\" [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\"\n                      [(ngModel)]=\"signPowerRight\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Sign' | translate }}\"\n                      [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeRight\" min=\"0.00\" step=\"0.01\">\n                  </div>\n\n                  <!--Only Base Curve-->\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Base Curve (d)'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeRight\" min=\"00.00\" step=\"00.01\" (change)=\"parameter.selected = format(parameter.selected)\">\n                  </div>\n\n                  <!--Only Thickness-->\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Thickness'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeRight\" step=\"0.01\" (change)=\"changeSelect('right', parameter, parameter.selected,0)\">\n                  </div>\n\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name !== 'Power' && parameter.name !== 'Base Curve (d)' && parameter.name !== 'Thickness'\"\n                    class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeRight\">\n                  </div>\n\n                  <div *ngIf=\"parameter.type === 'selected-double'\" class=\"select-values col-sm-12\">\n                    <div class=\"row selected-double\">\n                      <div class=\"col-sm-6\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[0].placeholder | translate }}\"\n                          [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.values[0].selected\" (change)=\"setNotch(parameter);changeSelect('right', parameter, parameter.values[0].selected,parameter.values[1].selected)\"  (keyup)=\"changeSelect('right', parameter, parameter.values[0].selected,parameter.values[1].selected)\"\n                          oninput=\"validity.valid||(value='');\" step=\"0.01\" [disabled]=\"!product.eyeRight\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[1].placeholder | translate }}\"\n                          [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.values[1].selected\" (change)=\"setNotch(parameter);changeSelect('right', parameter, parameter.values[1].selected,parameter.values[0].selected)\" (keyup)=\"changeSelect('right', parameter, parameter.values[1].selected,parameter.values[0].selected)\"\n                          oninput=\"validity.valid||(value='');\" step=\"0.01\" [disabled]=\"!product.eyeRight\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--price right-->\n          <div class=\"row additional col-lg-12\">\n            <p *ngIf=\"(additionalHidrapeg || additionalNotch) && product.priceSaleRight!==0\">\n              <span>{{ 'Warning: Includes' | translate }}</span>&nbsp;&nbsp;\n              <span *ngIf=\"additionalHidrapeg\">{{'Hidrapeg' | translate}}:{{ hidrapeg | currency : \" USD $\" }}</span>&nbsp;\n              <span *ngIf=\"additionalHidrapeg && additionalNotch\">| </span>\n              <span *ngIf=\"additionalNotch\">{{'Notch (mm)' | translate}}:{{ notch | currency : \" USD $\" }}</span>&nbsp;\n            </p>\n          </div>\n\n          <!--row steps right-->\n          <br>\n          <div class=\"row content-steps\">\n            <div class=\"col-lg-4 title\" *ngFor=\"let PC of product.pasosRight\">\n              <label class=\"form-check-label\">{{ PC.name }}</label>&nbsp;&nbsp;\n              <div class=\"row steeps\">\n                <div class=\"col-md-6 sub-label\" *ngFor=\"let paso of PC.values\">\n                  <label class=\"form-check-label\">{{ paso.name | translate }}</label>&nbsp;&nbsp;\n                  <div class=\"row\">\n                    <div *ngFor=\"let value of paso.values\" class=\"col-md-6 custom-control custom-checkbox\">\n                      <input class=\"custom-control-input\" type=\"checkbox\" id=\"{{ 'right' + PC.name + paso.name + value.name }}\"\n                        [(ngModel)]=\"value.selected\" (click)=\"setChecked(value, PC)\" [disabled]=\"!product.eyeRight\"\n                        [required]=\"product.eyeRight\">\n                      <label class=\"custom-control-label\" for=\"{{ 'right'  + PC.name + paso.name + value.name }}\">{{\n                        value.name | translate }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n        </div>\n\n        <!--comments-->\n        <br>\n        <div class=\"col-md-12\">\n          <div class=\"comments\">\n            <div class=\"row header\">\n              <div class=\"col-md-12\">\n                <div class=\"title\">{{ 'Comments Right Eye' | translate }}</div>\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsRight\"\n                  [disabled]=\"!product.eyeRight\" placeholder=\"{{ 'Enter right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <!--files-->\n        <div class=\"col-md-12\">\n          <div class=\"comments\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n                  <dt class=\"title\">{{ 'Documents Right Eye' | translate }}</dt>\n                  <div class=\"custom-file\">\n                    <input #selectedFilesRightEye type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderRightEye\"\n                      [disabled]=\"!product.eyeRight || uploaderRightEye.queue.length > 4\" multiple />\n                    <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                    <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                    <div class=\"message-error-file\">\n                      <span translate>{{'Max files size:' | translate}} 25MB</span>\n                      <span> / </span>\n                      <span translate>{{'Maximum files number:' | translate }} 5</span>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderRightEye.queue.length > 0\">\n                  <div class=\"row justify-content-end\" *ngIf=\"uploaderRightEye.queue.length > 1\">\n                    <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderRightEye.clearQueue()\" [disabled]=\"!uploaderRightEye.queue.length\">\n                      <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n                    </button>\n                  </div>\n                  <br>\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th width=\"50%\">{{ 'Name' | translate }}</th>\n                        <th>{{ 'Size' | translate }}</th>\n                        <th>{{ 'Actions' | translate }}</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of uploaderRightEye.queue\">\n                        <td><strong>{{ item?.file?.name }}</strong></td>\n                        <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                        <td nowrap>\n                          <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item, 'Right')\">\n                            <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Left Eye' | translate }}</label>\n\n          <!--row header left (contamac / hydrapeg / insertors)-->\n          <div class=\"row header-europa\">\n            <div class=\"col-lg-3\" *ngFor=\"let header of product.headerLeft\">\n              <div class=\"row\" *ngIf=\"header.name !== 'Inserts (DMV)'\">\n                <label class=\"form-check-label\">{{ header.name }}</label>&nbsp;&nbsp;\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\" *ngIf=\"header.type === 'selected' && header.name !== 'Inserts (DMV)'\">\n                  <ng-select (change)=\"changeSelect('left', header, $event,0)\" [items]=\"header.values\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" [(ngModel)]=\"header.sel\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\"\n                    [clearable]=\"false\">\n                    <ng-template ng-label-tmp let-item=\"item\">\n                      <div class=\"supplier-body\">\n                        <span>{{ item | translate }}</span>\n                      </div>\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                      <div class=\"supplier-body\">\n                        <h6 [ngOptionHighlight]=\"search\">{{ item | translate }}</h6>\n                      </div>\n                    </ng-template>\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-2 prices\">\n              <p>\n                <span [hidden]=\"product.priceSaleLeft===0\">\n                  {{ product.priceSaleLeft | currency : \"USD $\" }}\n                </span>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"row title\">{{ 'Parameters' | translate }}</div>\n\n          <!--params left-->\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-lg-3\">\n              <div class=\"row \">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\">\n                  <input class=\"form-control\" type=\"number\" value=\"1\" [(ngModel)]=\"product.quantityLeft\" [required]=\"product.eyeLeft\"\n                    oninput=\"validity.valid||(value='');\" [disabled]=\"true\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3\" *ngFor=\"let parameter of product.parametersLeft\">\n              <div>\n                <!--param name-->\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div class=\"row\">\n                  <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-12\">\n                    <ng-select (change)=\"changeSelect('left', parameter, $event,0)\" [items]=\"parameter.values\"\n                      [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.sel\" bindLabel=\"item\"\n                      bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                  </div>\n\n                  <!--Only Power-->\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Power'\" class=\"select-values col-sm-12 param-power\">\n                    <ng-select [items]=\"['+', '-']\" [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\"\n                      [(ngModel)]=\"signPowerLeft\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Sign' | translate }}\"\n                      [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeLeft\" min=\"0\">\n                  </div>\n\n                  <!--Only Base Curve-->\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Base Curve (d)'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeLeft\" min=\"00.00\" step=\"00.01\" (change)=\"parameter.selected = format(parameter.selected)\">\n                  </div>\n\n                  <!--Only Thickness-->\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Thickness'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeLeft\" step=\"0.01\" (change)=\"changeSelect('left', parameter, parameter.selected,0)\">\n                  </div>\n\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name !== 'Power' && parameter.name !== 'Base Curve (d)' && parameter.name !== 'Thickness'\"\n                    class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeLeft\">\n                  </div>\n\n                  <div *ngIf=\"parameter.type === 'selected-double'\" class=\"select-values col-sm-12\">\n                    <div class=\"row selected-double\">\n                      <div class=\"col-sm-6\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[0].placeholder | translate }}\"\n                          [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.values[0].selected\" step=\"0.01\" (change)=\"setNotch(parameter);changeSelect('left', parameter, parameter.values[0].selected,parameter.values[1].selected)\" (keyup)=\"changeSelect('left', parameter, parameter.values[0].selected,parameter.values[1].selected)\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[1].placeholder | translate }}\"\n                          [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.values[1].selected\" step=\"0.01\" (change)=\"setNotch(parameter);changeSelect('left', parameter, parameter.values[1].selected,parameter.values[0].selected)\" (keyup)=\"changeSelect('left', parameter, parameter.values[1].selected,parameter.values[0].selected)\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--price left-->\n          <div class=\"row additional col-lg-12\">\n            <p *ngIf=\"(additionalHidrapegL || additionalNotchL) && product.priceSaleLeft!==0\">\n              <span>{{ 'Warning: Includes' | translate }}</span>&nbsp;&nbsp;\n              <span *ngIf=\"additionalHidrapegL\">{{'Hidrapeg' | translate}}:{{ hidrapeg | currency : \" USD $\" }}</span>&nbsp;\n              <span *ngIf=\"additionalHidrapegL && additionalNotchL\">| </span>\n              <span *ngIf=\"additionalNotchL\">{{'Notch (mm)' | translate}}:{{ notch | currency : \" USD $\" }}</span>&nbsp;\n            </p>\n          </div>\n\n          <!--row steps left-->\n          <br>\n          <div class=\"row content-steps\">\n            <div class=\"col-lg-4 title\" *ngFor=\"let PC of product.pasosLeft\">\n              <label class=\"form-check-label\">{{ PC.name }}</label>&nbsp;&nbsp;\n              <div class=\"row steeps\">\n                <div class=\"col-md-6 sub-label\" *ngFor=\"let paso of PC.values\">\n                  <label class=\"form-check-label\">{{ paso.name | translate }}</label>&nbsp;&nbsp;\n                  <div class=\"row\">\n                    <div *ngFor=\"let value of paso.values\" class=\"col-md-6 custom-control custom-checkbox\">\n                      <input class=\"custom-control-input\" type=\"checkbox\" id=\"{{ 'left' + PC.name + paso.name + value.name }}\"\n                        [required]=\"product.eyeLeft\" [(ngModel)]=\"value.selected\" (click)=\"setChecked(value, PC)\"\n                        [disabled]=\"!product.eyeLeft\">\n                      <label class=\"custom-control-label\" for=\"{{ 'left'  + PC.name + paso.name + value.name }}\">{{\n                        value.name | translate }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n         <!--comments-->\n         <br>\n         <div class=\"col-md-12\">\n           <div class=\"comments\">\n             <div class=\"row header\">\n               <div class=\"col-md-12\">\n                 <div class=\"title\">{{ 'Comments Left Eye' | translate }}</div>\n                 <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsLeft\"\n                   [disabled]=\"!product.eyeLeft\" placeholder=\"{{ 'Enter left eye observations' | translate }}\"></textarea>\n               </div>\n             </div>\n             <br>\n           </div>\n         </div>\n         <!--files-->\n         <div class=\"col-md-12\">\n           <div class=\"comments\">\n             <div class=\"row\">\n               <div class=\"col-md-12\">\n                 <div class=\"\">\n                   <dt class=\"title\">{{ 'Documents Left Eye' | translate }}</dt>\n                   <div class=\"custom-file\">\n                     <input #selectedFilesLeftEye type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderLeftEye\"\n                       [disabled]=\"!product.eyeLeft || uploaderLeftEye.queue.length > 4\" multiple />\n                     <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                     <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                     <div class=\"message-error-file\">\n                       <span translate>{{'Max files size:' | translate}} 25MB</span>\n                       <span> / </span>\n                       <span translate>{{'Maximum files number:' | translate }} 5</span>\n                     </div>\n                   </div>\n                 </div>\n                 <br>\n                 <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderLeftEye.queue.length > 0\">\n                   <div class=\"row justify-content-end\" *ngIf=\"uploaderLeftEye.queue.length > 1\">\n                     <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderLeftEye.clearQueue()\" [disabled]=\"!uploaderLeftEye.queue.length\">\n                       <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n                     </button>\n                   </div>\n                   <br>\n                   <table class=\"table\">\n                     <thead>\n                       <tr>\n                         <th width=\"50%\">{{ 'Name' | translate }}</th>\n                         <th>{{ 'Size' | translate }}</th>\n                         <th>{{ 'Actions' | translate }}</th>\n                       </tr>\n                     </thead>\n                     <tbody>\n                       <tr *ngFor=\"let item of uploaderLeftEye.queue\">\n                         <td><strong>{{ item?.file?.name }}</strong></td>\n                         <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                         <td nowrap>\n                           <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item, 'Left')\">\n                             <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                           </button>\n                         </td>\n                       </tr>\n                     </tbody>\n                   </table>\n                 </div>\n               </div>\n             </div>\n           </div>\n         </div>\n\n\n\n\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.ng-select {\n  width: 100%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 2em; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.select-values {\n  padding-left: 0px; }\n.param-power {\n  display: -webkit-box;\n  display: flex; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px;\n  line-height: 30px; }\n.item-properties img {\n  width: 30px; }\n.check-steps {\n  display: -webkit-box;\n  display: flex; }\n.check-steps > input:nth-child(1) {\n    width: 20px;\n    height: 10px;\n    margin-left: 20px; }\n.content-steps .selection {\n  padding-right: 1.5rem;\n  padding-top: 30px; }\n.content-steps .steeps > div:nth-child(1),\n.content-steps .steeps div:nth-child(2) {\n  padding-right: 10px; }\n.content-steps .sub-label {\n  padding-left: 15px; }\n.content-steps .sub-label .row {\n    padding-top: 5px;\n    padding-left: 15px; }\n.content-steps > div:nth-child(1) {\n  padding-left: 0; }\n.content-steps > div:nth-child(2) {\n  border-left: 1px solid #ccc; }\n.content-steps > div:nth-child(3) {\n  border-left: 1px solid #ccc; }\n.selected-double > div:nth-child(1) {\n  padding-right: 0px; }\n.selected-double > div:nth-child(2) {\n  padding-left: 2px; }\n.custom-file-input {\n  cursor: pointer; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.custom-control-label {\n  font-size: 0.9rem;\n  padding-left: -2%; }\n.page-header-fixed {\n  margin-left: 15px; }\n.padding-price {\n  padding-top: 1.1em; }\n.header-europa {\n  padding: 15px 0 5px 0; }\n.header-europa > div:nth-child(1),\n  .header-europa > div:nth-child(2),\n  .header-europa > div:nth-child(3) {\n    padding-left: 2%; }\n.additional {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-top: 10px; }\n.additional > p:nth-child(1) {\n    font-size: 15px;\n    color: red; }\n.prices {\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .6s;\n  padding-top: 10px; }\n.prices > p:nth-child(1) {\n    font-size: 26px;\n    font-weight: bold; }\n.message-error-file {\n  color: #cc0000;\n  font-size: 0.85rem; }\n"

/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductViewEuropaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewEuropaComponent", function() { return ProductViewEuropaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_europa_confirmation_europa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-europa/confirmation-europa.component */ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewEuropaComponent = /** @class */ (function () {
    function ProductViewEuropaComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, modalService, router, alertify, notification, translate, spinner) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.modalService = modalService;
        this.router = router;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.productsCodeSelectL = new Array;
        this.productsCodeSelectR = new Array;
        this.productName = '';
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.priceA = 0;
        this.priceB = 0;
        this.notch = 0;
        this.thickness = 0;
        // flagThickness = false;
        // flagThicknessL = false;
        this.flagNotch = false;
        this.flagNotchL = false;
        this.hidrapeg = 0;
        this.inserts = 0;
        this.additionalNotch = false;
        this.additionalNotchL = false;
        // additionalThickness = false;
        // additionalThicknessL = false;
        this.additionalHidrapeg = false;
        this.additionalHidrapegL = false;
        this.additionalInserts = false;
        this.additionalInsertsL = false;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        this.uploadResult = null;
        this.uploadResultLeftEye = null;
        this.uploadResultRightEye = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.uploaderLeftEye = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.uploaderRightEye = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        /*this.uploader.onAfterAddingFile = (item) => {
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
        this.uploader.onErrorItem = (item, response, status, headers) => {
            this.uploadResult = {'success': true, 'item': item, 'response':
                                 response, 'status': status, 'headers': headers};
        };*/
        this.uploaderLeftEye.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item, 'Left');
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderLeftEye.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResultLeftEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResultLeftEye) {
                _this.buildFileProductRequested('Left');
            }
        };
        this.uploaderLeftEye.onErrorItem = function (item, response, status, headers) {
            _this.uploadResultLeftEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            console.log('error uploader file', response);
        };
        this.uploaderRightEye.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item, 'Right');
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderRightEye.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResultRightEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResultRightEye) {
                _this.buildFileProductRequested('Right');
            }
        };
        this.uploaderRightEye.onErrorItem = function (item, response, status, headers) {
            _this.uploadResultRightEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            console.log('error uploader file', response);
        };
    }
    ProductViewEuropaComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.clearFiles();
    };
    ProductViewEuropaComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(2, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.productService.findBySupplierAndInViewAndCategory$(2, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.getProductView();
                _this.setNameProduct();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewEuropaComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        var orderCylinder;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        orderCylinder = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.product.parametersRight, { name: 'Cylinder (D)' });
        if (orderCylinder != null) {
            orderCylinder.values.reverse();
        }
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        orderCylinder = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.product.parametersLeft, { name: 'Cylinder (D)' });
        if (orderCylinder != null) {
            orderCylinder.values.reverse();
        }
        this.product.headerRight = JSON.parse(this.product.types)[0].header;
        this.product.headerLeft = JSON.parse(this.product.types)[0].header;
        this.product.pasosRight = JSON.parse(this.product.types)[0].pasos;
        this.product.pasosLeft = JSON.parse(this.product.types)[0].pasos;
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.pricesAditionalHidrapeg = JSON.parse(this.product.infoAditional)[0].values[0];
        this.product.pricesAditionalInserts = JSON.parse(this.product.infoAditional)[0].values[1];
        this.product.pricesAditionalNotch = JSON.parse(this.product.infoAditional)[0].values[2];
        //  this.product.pricesAditionalThickness = JSON.parse(this.product.infoAditional)[0].values[3];
        this.product.priceSaleRight = 0;
        this.product.priceSaleLeft = 0;
        this.product.productsAditional = [];
        this.setClient();
        this.setPrice();
    };
    ProductViewEuropaComponent.prototype.setNameProduct = function () {
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](this.product.name, 'Bi-Toric')) {
            this.productName = 'Europa Bitoric';
        }
        else if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](this.product.name, 'SPH')) {
            this.productName = 'Europa Sphere';
        }
        else if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](this.product.name, 'Multifocal')
            || lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](this.product.name, 'Front Toric')
            || lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](this.product.name, 'TPC')) {
            this.productName = 'Europa FT, TPC,  MF';
        }
    };
    ProductViewEuropaComponent.prototype.setCodeProduct = function (name) {
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, name)) {
                prCode = pr;
            }
        });
        return prCode;
    };
    ProductViewEuropaComponent.prototype.setCodeProductByDiameter = function (name, diameter) {
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, name) && lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, diameter)) {
                prCode = pr;
            }
        });
        return prCode;
    };
    ProductViewEuropaComponent.prototype.changeSelect = function (eye, parameter, value, value2) {
        parameter.selected = value;
        if (parameter.name === 'Hidrapeg' || parameter.name === 'Inserts (DMV)') {
            parameter.selected = parameter.selected === 'Yes' ? true : false;
        }
        this.definePrice(this.membership);
        this.definePriceHidrapeg(this.membership);
        this.definePriceNotch(this.membership);
        // this.definePriceTickness(this.membership);
        this.definePriceInserts(this.membership);
        if (parameter.name === 'Diameter (mm)') {
            if (this.membership !== 0) {
                this.valueDiameter(value, eye);
            }
        }
        if (parameter.name === 'Hidrapeg') {
            if (value === 'Yes') {
                this.productHydraPEG = this.setCodeProduct('HydraPEG');
                if (eye === 'right') {
                    if (this.membership !== 0) {
                        this.additionalHidrapeg = true;
                        this.product.priceSaleRight = this.product.priceSaleRight + this.hidrapeg;
                    }
                    else {
                        this.additionalHidrapeg = false;
                    }
                }
                else {
                    if (this.membership !== 0) {
                        this.additionalHidrapegL = true;
                        this.product.priceSaleLeft = this.product.priceSaleLeft + this.hidrapeg;
                    }
                    else {
                        this.additionalHidrapegL = false;
                    }
                }
            }
            else {
                if (eye === 'right') {
                    if (this.membership !== 0) {
                        if (this.additionalHidrapeg) {
                            this.additionalHidrapeg = false;
                            if (this.product.priceSaleRight > 0) {
                                this.product.priceSaleRight = this.product.priceSaleRight - this.hidrapeg;
                            }
                        }
                    }
                    else {
                        this.additionalHidrapeg = false;
                    }
                }
                else {
                    if (this.membership !== 0) {
                        if (this.additionalHidrapegL) {
                            this.additionalHidrapegL = false;
                            if (this.product.priceSaleLeft > 0) {
                                this.product.priceSaleLeft = this.product.priceSaleLeft - this.hidrapeg;
                            }
                        }
                    }
                    else {
                        this.additionalHidrapegL = false;
                    }
                }
            }
        }
        if (parameter.name === 'Inserts (DMV)') {
            if (value === 'Yes') {
                this.productDMV = this.setCodeProduct('DMV Insertion and Removal Set');
                if (this.membership !== 0) {
                    this.additionalInserts = true;
                    this.additionalInsertsL = true;
                }
                else {
                    this.additionalInserts = false;
                    this.additionalInsertsL = false;
                }
            }
            else {
                if (this.membership !== 0) {
                    if (this.additionalInserts) {
                        this.additionalInserts = false;
                    }
                }
                else {
                    this.additionalInserts = false;
                }
                if (this.membership !== 0) {
                    if (this.additionalInsertsL) {
                        this.additionalInsertsL = false;
                    }
                }
                else {
                    this.additionalInsertsL = false;
                }
            }
        }
        /*if (parameter.name === 'Thickness') {
          if (parseFloat(value) !== null) {
            if (parseFloat(value) === 0 || value === null) {
              if (eye === 'right') {
                if (this.membership !== 0) {
                  if (this.flagThickness) {
                    this.flagThickness = false;
                    this.additionalThickness = false;
                    this.product.priceSaleRight = this.product.priceSaleRight - this.thickness;
                  }
                } else {
                   this.flagThickness = false;
                   this.additionalThickness = false;
                }
              } else {
                if (this.membership !== 0) {
                  if (this.flagThicknessL) {
                    this.flagThicknessL = false;
                    this.additionalThicknessL = false;
                    this.product.priceSaleLeft = this.product.priceSaleLeft - this.thickness;
                  }
                } else {
                  this.flagThicknessL = false;
                  this.additionalThicknessL = false;
                }
              }
            } else {
              if (eye === 'right') {
                if (this.membership !== 0) {
                  if (!this.flagThickness) {
                    this.additionalThickness = true;
                    this.flagThickness = true;
                    this.product.priceSaleRight = this.product.priceSaleRight + this.thickness;
                  }
                } else {
                  this.flagThickness = false;
                  this.additionalThickness = false;
                }
              } else {
                if (this.membership !== 0) {
                  if (!this.flagThicknessL) {
                    this.additionalThicknessL = true;
                    this.flagThicknessL = true;
                    this.product.priceSaleLeft = this.product.priceSaleLeft + this.thickness;
                  }
                } else {
                  this.flagThicknessL = false;
                  this.additionalThicknessL = false;
                }
              }
            }
          }
        }*/
        if (parameter.name === 'Notch (mm)') {
            if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
                this.productNotch = this.setCodeProduct('Notch');
            }
            if (eye === 'right') {
                if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
                    if (this.membership !== 0) {
                        if (!this.flagNotch) {
                            this.additionalNotch = true;
                            this.flagNotch = true;
                            this.product.priceSaleRight = this.product.priceSaleRight + this.notch;
                        }
                    }
                    else {
                        this.additionalNotch = false;
                        this.flagNotch = false;
                    }
                }
                else if (parseFloat(value) === 0 && (value2 !== null) && parseFloat(value2) !== 0) {
                    if (this.membership !== 0) {
                        if (!this.flagNotch) {
                            this.additionalNotch = true;
                            this.flagNotch = true;
                            this.product.priceSaleRight = this.product.priceSaleRight + this.notch;
                        }
                    }
                    else {
                        this.additionalNotch = false;
                        this.flagNotch = false;
                    }
                }
                else {
                    if (this.membership !== 0) {
                        if (this.flagNotch) {
                            this.additionalNotch = false;
                            this.flagNotch = false;
                            this.product.priceSaleRight = this.product.priceSaleRight - this.notch;
                        }
                    }
                    else {
                        this.additionalNotch = false;
                        this.flagNotch = false;
                    }
                }
            }
            else {
                if ((parseFloat(value) !== 0 && value !== null) && (value2 !== null)) {
                    if (this.membership !== 0) {
                        if (!this.flagNotchL) {
                            this.additionalNotchL = true;
                            this.flagNotchL = true;
                            this.product.priceSaleLeft = this.product.priceSaleLeft + this.notch;
                        }
                    }
                    else {
                        this.additionalNotchL = false;
                        this.flagNotchL = false;
                    }
                }
                else if (parseFloat(value) === 0 && (value2 !== null) && parseFloat(value2) !== 0) {
                    if (this.membership !== 0) {
                        if (!this.flagNotchL) {
                            this.additionalNotchL = true;
                            this.flagNotchL = true;
                            this.product.priceSaleLeft = this.product.priceSaleLeft + this.notch;
                        }
                    }
                    else {
                        this.additionalNotchL = false;
                        this.flagNotchL = false;
                    }
                }
                else {
                    if (this.membership !== 0) {
                        if (this.flagNotchL) {
                            this.additionalNotchL = false;
                            this.flagNotchL = false;
                            this.product.priceSaleLeft = this.product.priceSaleLeft - this.notch;
                        }
                    }
                    else {
                        this.additionalNotchL = false;
                        this.flagNotchL = false;
                    }
                }
            }
        }
    };
    ProductViewEuropaComponent.prototype.setValueEye = function (eye) {
        if (eye === 'right') {
            this.product.priceSaleRight = 0;
            this.product.eyeRight = !this.product.eyeRight;
            this.product.quantityRight = '';
            if (this.product.eyeRight) {
                this.product.quantityRight = 1;
            }
            else {
                this.clean(eye);
                this.additionalHidrapeg = false;
                // this.additionalInserts = false;
                this.additionalNotch = false;
                // this.additionalThickness = false;
                // this.flagThickness = false;
                this.flagNotch = false;
            }
        }
        else {
            this.product.priceSaleLeft = 0;
            this.product.eyeLeft = !this.product.eyeLeft;
            this.product.quantityLeft = '';
            if (this.product.eyeLeft) {
                this.product.quantityLeft = 1;
            }
            else {
                this.clean(eye);
                this.additionalHidrapegL = false;
                //  this.additionalInsertsL = false;
                this.additionalNotchL = false;
                // this.additionalThicknessL = false;
                // this.flagThicknessL = false;
                this.flagNotchL = false;
            }
        }
    };
    ProductViewEuropaComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewEuropaComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                }
            });
        }
    };
    ProductViewEuropaComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.membership = clienteSelect.membership.idMembership;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
            this.definePriceHidrapeg(this.membership);
            this.definePriceNotch(this.membership);
            // this.definePriceTickness(this.membership);
            this.definePriceInserts(this.membership);
            if (this.product.eyeRight) {
                var paramet = this.product.parametersRight;
                var valueD_1 = null;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](paramet, function (productSelected) {
                    if (productSelected.name === 'Diameter (mm)') {
                        // tslint:disable-next-line:radix
                        if (productSelected.selected !== null) {
                            valueD_1 = productSelected.selected;
                        }
                    }
                });
                if (valueD_1 !== null) {
                    this.valueDiameter(valueD_1, 'right');
                }
                else {
                    this.product.priceSaleRight = 0;
                    /*if (this.additionalInserts) {
                        this.product.priceSaleRight = this.product.priceSaleRight + (this.inserts / 2);
                    }*/
                    if (this.additionalHidrapeg) {
                        this.product.priceSaleRight = this.product.priceSaleRight + this.hidrapeg;
                    }
                    if (this.additionalNotch) {
                        this.product.priceSaleRight = this.product.priceSaleRight + this.notch;
                    }
                    /*if (this.additionalThickness) {
                      this.product.priceSaleRight = this.product.priceSaleRight + this.thickness;
                    }*/
                }
            }
            if (this.product.eyeLeft) {
                var paramet = this.product.parametersLeft;
                var valueD_2 = null;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](paramet, function (productSelected) {
                    if (productSelected.name === 'Diameter (mm)') {
                        // tslint:disable-next-line:radix
                        if (productSelected.selected !== null) {
                            valueD_2 = productSelected.selected;
                        }
                    }
                });
                if (valueD_2 !== null) {
                    this.valueDiameter(valueD_2, 'left');
                }
                else {
                    this.product.priceSaleLeft = 0;
                    /* if (this.additionalInsertsL) {
                         this.product.priceSaleLeft = this.product.priceSaleLeft + (this.inserts / 2);
                     }*/
                    if (this.additionalHidrapegL) {
                        this.product.priceSaleLeft = this.product.priceSaleLeft + this.hidrapeg;
                    }
                    if (this.additionalNotchL) {
                        this.product.priceSaleLeft = this.product.priceSaleLeft + this.notch;
                    }
                    /* if (this.additionalThicknessL) {
                       this.product.priceSaleLeft = this.product.priceSaleLeft + this.thickness;
                     }*/
                }
            }
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSaleRight = 0;
            this.product.priceSaleLeft = 0;
            this.membership = 0;
        }
    };
    ProductViewEuropaComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewEuropaComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            this.membership = this.currentUser.membership.idMembership;
            this.definePrice(this.membership);
            this.definePriceHidrapeg(this.membership);
            this.definePriceNotch(this.membership);
            // this.definePriceTickness(this.membership);
            this.definePriceInserts(this.membership);
        }
    };
    ProductViewEuropaComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.priceA = this.product.price1;
                this.priceB = this.product.priced1;
                break;
            case 2:
                this.priceA = this.product.price2;
                this.priceB = this.product.priced2;
                break;
            case 3:
                this.priceA = this.product.price3;
                this.priceB = this.product.priced3;
                break;
        }
    };
    ProductViewEuropaComponent.prototype.definePriceHidrapeg = function (membership) {
        switch (membership) {
            case 1:
                this.hidrapeg = this.product.pricesAditionalHidrapeg.values[0].price;
                break;
            case 2:
                this.hidrapeg = this.product.pricesAditionalHidrapeg.values[1].price;
                break;
            case 3:
                this.hidrapeg = this.product.pricesAditionalHidrapeg.values[2].price;
                break;
        }
    };
    ProductViewEuropaComponent.prototype.definePriceInserts = function (membership) {
        switch (membership) {
            case 1:
                this.inserts = this.product.pricesAditionalInserts.values[0].price;
                break;
            case 2:
                this.inserts = this.product.pricesAditionalInserts.values[1].price;
                break;
            case 3:
                this.inserts = this.product.pricesAditionalInserts.values[2].price;
                break;
        }
    };
    ProductViewEuropaComponent.prototype.definePriceNotch = function (membership) {
        this.notch = 0;
        switch (membership) {
            case 1:
                this.notch = this.product.pricesAditionalNotch.values[0].price;
                break;
            case 2:
                this.notch = this.product.pricesAditionalNotch.values[1].price;
                break;
            case 3:
                this.notch = this.product.pricesAditionalNotch.values[2].price;
                break;
        }
    };
    /*definePriceTickness(membership) {
      switch (membership) {
        case 1:
          this.thickness = this.product.pricesAditionalThickness.values[0].price;
          break;
        case 2:
          this.thickness = this.product.pricesAditionalThickness.values[1].price;
          break;
        case 3:
          this.thickness = this.product.pricesAditionalThickness.values[2].price;
          break;
      }
    }*/
    ProductViewEuropaComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productDiameterL = this.productDiameterL;
        var productDiameterR = this.productDiameterR;
        var productsSelected = this.productsSelected;
        var signPowerLeft = this.signPowerLeft;
        var signPowerRight = this.signPowerRight;
        var additionalInserts = this.additionalInserts;
        var additionalInsertsL = this.additionalInsertsL;
        var inserts = this.inserts;
        var additionalH = this.additionalHidrapeg;
        var additionalHL = this.additionalHidrapegL;
        var additionalN = this.additionalNotch;
        var additionalNL = this.additionalNotchL;
        var productsAditional = [];
        // add products code
        var productDMV = this.productDMV;
        var productHydraPEG = this.productHydraPEG;
        var productNotch = this.productNotch;
        var hidrapegPrice = this.hidrapeg;
        var dMVPrice = this.inserts;
        var notchPrice = this.notch;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.patient = product.patient;
            productSelected.name = product.name;
            if (productSelected.eye === 'Right') {
                // add header spectrum code
                productSelected.id = productDiameterR.idProduct;
                productSelected.codeSpectrum = productDiameterR.codeSpectrum;
                /*if (additionalInserts && product.eyeLeft) {
                  productSelected.price = product.priceSaleRight + (inserts / 2);
                } else if (additionalInserts && !product.eyeLeft) {
                  productSelected.price = product.priceSaleRight + inserts;
                } else {
                  productSelected.price = product.priceSaleRight;
                }*/
                /*if (additionalH) {
                   productSelected.price = product.priceSaleRight - hidrapegPrice;
                 }
                 if (additionalN) {
                   productSelected.price = product.priceSaleRight - notchPrice;
                 }*/
                // productSelected.price = product.priceSaleRight;
                productSelected.price = product.priceBaseRight;
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                /* headers*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.headerRight, function (parameter, index) {
                    product.headerRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                    if (parameter.name === 'Inserts (DMV)') {
                        product.headerLeft[index].selected = additionalInserts;
                    }
                });
                productSelected.header = product.headerRight;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                    if (parameter.name === 'Power') {
                        product.parametersRight[index].selected = signPowerRight + parameter.selected;
                    }
                    if (parameter.name === 'Notch (mm)') {
                        product.parametersRight[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
                    }
                });
                productSelected.parameters = product.parametersRight;
                /*steps*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.pasosRight, function (PC) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["each"](PC.values, function (step) {
                        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](step.values, function (value, index) {
                            step.values[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](value, ['type', 'sel']);
                        });
                    });
                });
                productSelected.pasos = product.pasosRight;
            }
            if (productSelected.eye === 'Left') {
                // add header spectrum code
                productSelected.id = productDiameterL.idProduct;
                productSelected.codeSpectrum = productDiameterL.codeSpectrum;
                /*if (additionalInsertsL && product.eyeRight) {
                  productSelected.price = product.priceSaleLeft + (inserts / 2);
                } else if (additionalInsertsL && !product.eyeRight) {
                  productSelected.price = product.priceSaleLeft + inserts;
                } else {
                  productSelected.price = product.priceSaleLeft;
                }
                if (additionalHL) {
                  productSelected.price = product.priceSaleLeft - hidrapegPrice;
                }
                if (additionalNL) {
                  productSelected.price = product.priceSaleLeft - notchPrice;
                }*/
                //productSelected.price = product.priceSaleLeft;
                productSelected.price = product.priceBaseLeft;
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                /* headers*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.headerLeft, function (parameter, index) {
                    product.headerLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                    if (parameter.name === 'Inserts (DMV)') {
                        product.headerLeft[index].selected = additionalInsertsL;
                    }
                });
                productSelected.header = product.headerLeft;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                    if (parameter.name === "Power") {
                        product.parametersLeft[index].selected = signPowerLeft + parameter.selected;
                    }
                    if (parameter.name === 'Notch (mm)') {
                        product.parametersLeft[index].selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
                    }
                });
                productSelected.parameters = product.parametersLeft;
                /*steps*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.pasosLeft, function (PC) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["each"](PC.values, function (step) {
                        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](step.values, function (value, index) {
                            step.values[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](value, ['type', 'sel']);
                        });
                    });
                });
                productSelected.pasos = product.pasosLeft;
            }
            // add products aditionals
            productsAditional = [];
            if (productSelected.header[1].selected === true) {
                var productH = { id: productHydraPEG.idProduct,
                    name: productHydraPEG.name,
                    price: hidrapegPrice,
                    codeSpectrum: productHydraPEG.codeSpectrum };
                productsAditional.push(productH);
            }
            /*params*/
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productSelected.parameters, function (parameter) {
                if (parameter.name === 'Notch (mm)' && parameter.selected !== '0x0') {
                    var productN = { id: productNotch.idProduct,
                        name: productNotch.name,
                        price: notchPrice,
                        codeSpectrum: productNotch.codeSpectrum };
                    productsAditional.push(productN);
                }
            });
            productSelected.detail = { name: product.type, eye: productSelected.eye, header: productSelected.header, parameters: productSelected.parameters, pasos: productSelected.pasos, productsAditional: productsAditional };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye', 'pasos', 'header', 'productsAditional']);
        });
        // add products code
        var auxList = JSON.parse(JSON.stringify(productsSelected));
        var auxproductsSelected = [];
        var exist = false;
        this.definePriceHidrapeg(this.membership);
        this.definePriceInserts(this.membership);
        this.definePriceNotch(this.membership);
        var hidrapegPr = this.hidrapeg;
        var dMVPr = this.inserts;
        var notchPr = this.notch;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](auxList, function (productAux, index) {
            auxproductsSelected.push(JSON.parse(JSON.stringify(productAux)));
            if (productAux.detail.header[1].selected === true) {
                var productH = JSON.parse(JSON.stringify(productAux));
                productH.id = productHydraPEG.idProduct;
                productH.name = productHydraPEG.name;
                productH.price = hidrapegPr;
                productH.codeSpectrum = productHydraPEG.codeSpectrum;
                auxproductsSelected.push(productH);
            }
            /*params*/
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productAux.detail.parameters, function (parameter) {
                if (parameter.name === 'Notch (mm)' && parameter.selected !== '0x0') {
                    var productN = JSON.parse(JSON.stringify(productAux));
                    productN.id = productNotch.idProduct;
                    productN.name = productNotch.name;
                    productN.price = notchPr;
                    productN.codeSpectrum = productNotch.codeSpectrum;
                    auxproductsSelected.push(productN);
                }
            });
            if (productAux.detail.header[2].selected === true
                && (index === (auxList.length - 1))) {
                var productD = JSON.parse(JSON.stringify(productAux));
                productD.id = productDMV.idProduct;
                productD.name = 'Inserts (DMV)';
                productD.price = dMVPr;
                productD.codeSpectrum = productDMV.codeSpectrum;
                exist = true;
                auxproductsSelected.push(productD);
            }
        });
        productsSelected = auxproductsSelected;
        return productsSelected;
    };
    ProductViewEuropaComponent.prototype.addToCart = function (type) {
        this.type = type;
        this.spinner.show();
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
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
        // this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        // this.openModal(type);
    };
    ProductViewEuropaComponent.prototype.verifyOpenModal = function () {
        if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
            && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
            this.openModal(this.type);
        }
    };
    ProductViewEuropaComponent.prototype.openModal = function (type) {
        var _this = this;
        this.spinner.hide();
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_europa_confirmation_europa_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmationEuropaComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
        modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.additionalHidrapeg = this.hidrapeg;
        modalRef.componentInstance.additionalInserts = this.inserts;
        modalRef.componentInstance.additionalNotch = this.notch;
        modalRef.componentInstance.additionalThickness = this.thickness;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewEuropaComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
            return false;
        }
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.headerRight, function (param) {
            if (param.name === 'Inserts (DMV)') {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            }
        });
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.name === 'Notch (mm)') {
                    if (param.values[0].selected === null || param.values[1].selected === null) {
                        isValid = false;
                    }
                }
                else if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.signPowerRight) {
                isValid = false;
            }
            if (!this.product.quantityRight) {
                isValid = false;
            }
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.name === 'Notch (mm)') {
                    if (param.values[0].selected === null || param.values[1].selected === null) {
                        isValid = false;
                    }
                }
                else if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.signPowerLeft) {
                isValid = false;
            }
            if (!this.product.quantityLeft) {
                isValid = false;
            }
        }
        return isValid;
    };
    ProductViewEuropaComponent.prototype.setChecked = function (value, PC) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](PC.values, function (step) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](step.values, function (value) {
                value.selected = false;
            });
        });
        value.selected = !value.selected;
    };
    ProductViewEuropaComponent.prototype.setNotch = function (parameter) {
        if (parameter.values[0].selected === null || parameter.values[1].selected === null) {
            parameter.selected = null;
        }
        else {
            parameter.selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
        }
    };
    ProductViewEuropaComponent.prototype.maxFilesSize = function () {
        var maxFileSize = 0;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                maxFileSize = maxFileSize + item.file.size;
            });
        }
        return maxFileSize;
    };
    ProductViewEuropaComponent.prototype.removeFile = function (item, eye) {
        // this.uploader.removeFromQueue(item);
        if (eye === 'Right') {
            this.uploaderRightEye.removeFromQueue(item);
        }
        else if (eye === 'Left') {
            this.uploaderLeftEye.removeFromQueue(item);
        }
        this.clearSelectedFile(eye);
    };
    ProductViewEuropaComponent.prototype.clearSelectedFile = function (eye) {
        // this.selectedFiles.nativeElement.value = '';
        if (eye === 'Right') {
            this.selectedFilesRightEye.nativeElement.value = '';
        }
        else if (eye === 'Left') {
            this.selectedFilesLeftEye.nativeElement.value = '';
        }
    };
    ProductViewEuropaComponent.prototype.clearFiles = function () {
        /*if (this.uploader.queue.length) {
          this.uploader.clearQueue();
          this.clearSelectedFile();
        }*/
        if (this.uploaderLeftEye.queue.length) {
            this.uploaderLeftEye.clearQueue();
            this.clearSelectedFile('Left');
        }
        if (this.uploaderRightEye.queue.length) {
            this.uploaderRightEye.clearQueue();
            this.clearSelectedFile('Right');
        }
    };
    ProductViewEuropaComponent.prototype.saveFiles = function () {
        // this.listFileBasket = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        /*if (this.uploader.queue) {
          _.each(this.uploader.queue, function (item) {
            item.upload();
          });
        }*/
        if (this.uploaderLeftEye.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploaderLeftEye.queue, function (item) {
                item.upload();
            });
        }
        if (this.uploaderRightEye.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploaderRightEye.queue, function (item) {
                item.upload();
            });
        }
        if (!this.uploaderLeftEye.queue.length && !this.uploaderRightEye.queue.length) {
            this.openModal(this.type);
        }
    };
    ProductViewEuropaComponent.prototype.buildFileProductRequested = function (eye) {
        if (eye === 'Right' && this.uploadResultRightEye.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResultRightEye.response).data;
            fileProductRequest.name = this.uploadResultRightEye.item.file.name;
            fileProductRequest.type = this.uploadResultRightEye.item.file.type;
            fileProductRequest.size = this.uploadResultRightEye.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileRightEye.push(fileProductRequest);
            this.verifyOpenModal();
        }
        if (eye === 'Left' && this.uploadResultLeftEye.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResultLeftEye.response).data;
            fileProductRequest.name = this.uploadResultLeftEye.item.file.name;
            fileProductRequest.type = this.uploadResultLeftEye.item.file.type;
            fileProductRequest.size = this.uploadResultLeftEye.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileLeftEye.push(fileProductRequest);
            this.verifyOpenModal();
        }
    };
    ProductViewEuropaComponent.prototype.format = function (value) {
        var flat;
        var partInt;
        var partDec;
        var pos;
        var toString;
        if (value !== null) {
            toString = value.toString();
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](toString, '.')) {
                pos = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](toString, '.');
                partInt = toString.slice(0, pos);
                if (partInt <= 99) {
                    partDec = toString.slice(pos + 1, toString.length);
                    flat = this.completeStart(partInt, 2) + '.' + this.completeEnd(partDec, 2);
                }
                else {
                    flat = null;
                }
            }
            else {
                if (value <= 99) {
                    flat = this.completeStart(value, 2) + '.00';
                }
                else {
                    flat = null;
                }
            }
            return flat;
        }
    };
    ProductViewEuropaComponent.prototype.completeStart = function (value, tamano) {
        var filteredId = value.toString();
        filteredId = lodash__WEBPACK_IMPORTED_MODULE_1__["padStart"](filteredId, tamano, '0');
        return filteredId;
    };
    ProductViewEuropaComponent.prototype.completeEnd = function (value, tamano) {
        var filteredId = value.toString();
        filteredId = lodash__WEBPACK_IMPORTED_MODULE_1__["padEnd"](filteredId, tamano, '0');
        return filteredId;
    };
    ProductViewEuropaComponent.prototype.checkAdditional = function (eye) {
        var header;
        var paramet;
        var additionalH;
        var additionalI;
        var additionalN;
        // let additionalT;
        if (eye === 'right') {
            header = this.product.headerRight;
            paramet = this.product.parametersRight;
            additionalH = this.additionalHidrapeg;
            additionalI = this.additionalInserts;
            additionalN = this.additionalNotch;
            // additionalT = this.additionalThickness;
        }
        else {
            header = this.product.headerLeft;
            paramet = this.product.parametersLeft;
            additionalH = this.additionalHidrapegL;
            additionalI = this.additionalInsertsL;
            additionalN = this.additionalNotchL;
            // additionalT = this.additionalThicknessL;
        }
        var notch = this.notch;
        var inserts = this.inserts;
        var hidrapeg = this.hidrapeg;
        // let thickness = this.thickness;
        // header
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](header, function (itemHeader) {
            if (itemHeader.name === 'Hidrapeg') {
                if (itemHeader.selected === false || itemHeader.selected === null) {
                    hidrapeg = 0;
                }
                else {
                    additionalH = true;
                }
            }
            /* if (itemHeader.name === 'Inserts (DMV)') {
               if (itemHeader.selected === false || itemHeader.selected === null) {
                   inserts = 0;
               } else {
                 additionalI = true;
               }
             }*/
        });
        // parameters
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](paramet, function (productSelected) {
            if (productSelected.name === 'Notch (mm)') {
                if ((productSelected.selected === null || parseFloat(productSelected.values[0].selected) === 0)
                    && (productSelected.selected === null || parseFloat(productSelected.values[1].selected) === 0)) {
                    notch = 0; // No se ha sumado el adicional por Notch en el precio
                }
                else {
                    additionalN = true;
                }
            }
            /* if (productSelected.name === 'Thickness') {
                 // tslint:disable-next-line:radix
                 if (parseFloat(productSelected.selected ) === 0 || productSelected.selected === null ) {
                   thickness = 0;
                 } else {
                   additionalT = true;
                 }
             }*/
        });
        this.notch = notch;
        //  this.inserts = inserts;
        this.hidrapeg = hidrapeg;
        // this.thickness = thickness;
        if (eye === 'right') {
            this.additionalHidrapeg = additionalH;
            this.additionalInserts = additionalI;
            this.additionalNotch = additionalN;
            // this.additionalThickness = additionalT;
        }
        else {
            this.additionalHidrapegL = additionalH;
            this.additionalInsertsL = additionalI;
            this.additionalNotchL = additionalN;
            // this.additionalThicknessL = additionalT;
        }
    };
    ProductViewEuropaComponent.prototype.valueDiameter = function (value, eye) {
        if (value === '17.0' ||
            value === '17.5' ||
            value === '18.0' ||
            value === '18.5' ||
            value === '19.0' ||
            value === '19.5' ||
            value === '20.0') {
            // assing product code
            var prCode = this.setCodeProductByDiameter(this.productName, '(Dia. 17.0-20.0)');
            if (eye === 'right') {
                this.checkAdditional('right');
                this.product.priceBaseRight = this.priceB;
                this.product.priceSaleRight = this.priceB + this.notch + this.thickness + this.hidrapeg;
                this.productDiameterR = prCode;
            }
            else {
                this.checkAdditional('left');
                this.product.priceBaseLeft = this.priceB;
                this.product.priceSaleLeft = this.priceB + this.notch + this.thickness + this.hidrapeg;
                this.productDiameterL = prCode;
            }
        }
        else {
            // assing product code
            var prCode = this.setCodeProductByDiameter(this.productName, '(Dia. 16.0-16.5)');
            if (eye === 'right') {
                this.checkAdditional('right');
                this.product.priceBaseRight = this.priceA;
                this.product.priceSaleRight = this.priceA + this.notch + this.thickness + this.hidrapeg;
                this.productDiameterR = prCode;
            }
            else {
                this.checkAdditional('left');
                this.product.priceBaseLeft = this.priceA;
                this.product.priceSaleLeft = this.priceA + this.notch + this.thickness + this.hidrapeg;
                this.productDiameterL = prCode;
            }
        }
    };
    ProductViewEuropaComponent.prototype.clean = function (eye) {
        var header;
        var parameters;
        var pasos;
        if (eye === 'right') {
            header = this.product.headerRight;
            parameters = this.product.parametersRight;
            pasos = this.product.pasosRight;
            this.product.observationsRight = '';
        }
        else {
            header = this.product.headerLeft;
            parameters = this.product.parametersLeft;
            pasos = this.product.pasosLeft;
            this.product.observationsLeft = '';
        }
        // header
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](header, function (itemHeader) {
            itemHeader.selected = null;
            itemHeader.sel = null;
        });
        // parameter
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parameters, function (param) {
            if (param.name === 'Notch (mm)') {
                param.values[0].selected = 0;
                param.values[0].sel = 0;
                param.values[1].selected = 0;
                param.values[1].sel = 0;
            }
            else if (param.name === 'Thickness') {
                param.selected = 0;
            }
            else {
                param.selected = null;
                param.sel = null;
            }
        });
        // Pasos
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](pasos, function (item) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](item.values, function (valuesPC) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](valuesPC.values, function (value) {
                    value.selected = false;
                });
            });
        });
        if (eye === 'right') {
            this.product.headerRight = header;
            this.product.parametersRight = parameters;
            this.product.pasosRight = pasos;
            this.signPowerRight = null;
        }
        else {
            this.product.headerLeft = header;
            this.product.parametersLeft = parameters;
            this.product.pasosLeft = pasos;
            this.signPowerLeft = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFilesLeftEye'),
        __metadata("design:type", Object)
    ], ProductViewEuropaComponent.prototype, "selectedFilesLeftEye", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFilesRightEye'),
        __metadata("design:type", Object)
    ], ProductViewEuropaComponent.prototype, "selectedFilesRightEye", void 0);
    ProductViewEuropaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-europa',
            template: __webpack_require__(/*! ./product-view-europa.component.html */ "./src/app/products/product-view-europa/product-view-europa.component.html"),
            styles: [__webpack_require__(/*! ./product-view-europa.component.scss */ "./src/app/products/product-view-europa/product-view-europa.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerService"]])
    ], ProductViewEuropaComponent);
    return ProductViewEuropaComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>-->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\" *ngIf=\"product.properties.values.length === 3\">\n        <div class=\"item-properties col-md-4\" *ngFor=\"let property of product.properties.values\">\n          <i class=\"{{ property.class }}\"></i>\n          <p>{{ property.text | translate }}</p>\n        </div>\n      </div>\n\n      <div class=\"row product-info\" *ngIf=\"product.properties.values.length === 4\">\n        <div class=\"item-properties col-md-6\" *ngFor=\"let property of product.properties.values\">\n          <i class=\"{{ property.class }}\"></i>\n          <p>{{ property.text | translate }}</p>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <dt>{{ 'Product Sheet' | translate }}</dt>\n        <dd>\n          <a (click)=\"download()\" href=\"javascript:void(0);\">{{ 'Download' | translate }}</a>\n        </dd>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\" required\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              required [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\">\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n         <!--shipping address-->\n        <div class=\"col-lg-5\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content \">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <h5 class=\"padding-price\" [hidden]=\"product.priceSale === ''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h5>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n      <!--quantity right-->\n      <div class=\"col-lg-4\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n          </div>\n          <div class=\"col-lg-6\">\n              <input class=\"form-control\" type=\"number\" step=\"25\" min=\"25\" max=\"1000\" [ngClass]=\"{'error-quantity':  product.quantity && (product.quantity%25 !== 0 || product.quantity > 1000) }\"\n              [(ngModel)]=\"product.quantity\" (change)=\"product.quantity%25 !== 0 || product.quantity > 1000? product.quantity = '' : '';change(product.quantity)\" required>\n          </div>\n          <div class=\"col-lg-6\" *ngIf=\"strips > 0\">\n              <label class=\"form-check-label strips\">({{ strips }} {{ 'Strips' | translate }})</label>\n          </div>\n        </div>\n      </div>\n\n\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 message-quantity\">\n          <span>{{'To make the order the minimum quantity is' | translate }} 25 {{ 'units' | translate }}</span>&nbsp;\n          <span>{{'and maximum' | translate}} 1000 {{ 'units' | translate }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .padding-col {\n    padding-left: 3em; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 3em; }\n.ng-select {\n  width: 100%; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-bottom: 1em; }\n.product-info .item-properties i {\n      font-size: 30px; }\n.product-info .item-properties p {\n      font-size: 0.9rem;\n      padding: 0px 0 0 10px;\n      margin-bottom: 0; }\n.product-info .padding-price {\n    padding-top: 1.1em;\n    font-weight: bold; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n.strips {\n  padding-top: 8px;\n  color: #868e96;\n  font-size: 18px;\n  font-weight: bold; }\n.error-quantity {\n  color: red; }\n.message-quantity {\n  color: #cc0000;\n  font-size: 0.85rem;\n  margin-left: 1rem; }\n"

/***/ }),

/***/ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductViewFluoStripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewFluoStripsComponent", function() { return ProductViewFluoStripsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component */ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_21__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewFluoStripsComponent = /** @class */ (function () {
    function ProductViewFluoStripsComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate, spinner) {
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductViewFluoStripsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewFluoStripsComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(7, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
                _this.productService.findBySupplierAndInViewAndCategory$(7, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                        if (_this.user.role.idRole === 3) {
                            _this.setCodeProduct(_this.currentUser.name);
                        }
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewFluoStripsComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewFluoStripsComponent.prototype.setCodeProduct = function (clienteSelect) {
        var productName = this.product.codeSpectrum;
        var prCode;
        var condition;
        if (clienteSelect.name === 'MEDICAL CHOICE' && this.product.codeSpectrum === '40') {
            condition = '40A (M.C.)';
        }
        else {
            condition = productName;
        }
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (pr.codeSpectrum == condition) {
                prCode = pr;
            }
        });
        this.productCode = prCode;
    };
    ProductViewFluoStripsComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                }
            });
        }
    };
    ProductViewFluoStripsComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
            this.setCodeProduct(clienteSelect);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewFluoStripsComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewFluoStripsComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewFluoStripsComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewFluoStripsComponent.prototype.buildProductSelected = function () {
        var product = this.productCopy;
        var productCode = this.productCode;
        var productSelected = product;
        productSelected.id = productCode.idProduct;
        productSelected.price = product.priceSale;
        productSelected.quantity = product.quantity;
        productSelected.detail = '';
        productSelected.observations = product.observations;
        return productSelected;
    };
    ProductViewFluoStripsComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        var productsRequested = [];
        var product = this.buildProductSelected();
        var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
        var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
        productoSelect.idProduct = product.id;
        productRequest.product = productoSelect;
        productRequest.quantity = product.quantity;
        productRequest.price = product.price;
        productRequest.detail = '';
        productRequest.patient = '';
        productRequest.observations = product.observations;
        productsRequested.push(productRequest);
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.openModal(type);
    };
    ProductViewFluoStripsComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationSpectrumSalineComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.productCode;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.view = 2; // fluo strips
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewFluoStripsComponent.prototype.formIsValid = function () {
        var isValid = true;
        if (!this.product.quantity) {
            isValid = false;
        }
        return isValid;
    };
    ProductViewFluoStripsComponent.prototype.change = function (quantity) {
        if (quantity % 25 === 0) {
            this.strips = quantity * 100;
        }
    };
    ProductViewFluoStripsComponent.prototype.download = function () {
        var language = this.userStorageService.getLanguage();
        var name;
        language === 'en' ? name = 'Fluo-en' : name = 'Fluo-es';
        this.productService.download$(name).subscribe(function (res) {
            var filename = name + '.pdf';
            Object(file_saver__WEBPACK_IMPORTED_MODULE_21__["saveAs"])(res, filename);
        }, function (error) {
            console.log('error', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewFluoStripsComponent.prototype, "selectedFiles", void 0);
    ProductViewFluoStripsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-fluo-strips',
            template: __webpack_require__(/*! ./product-view-fluo-strips.component.html */ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.html"),
            styles: [__webpack_require__(/*! ./product-view-fluo-strips.component.scss */ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_17__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerService"]])
    ], ProductViewFluoStripsComponent);
    return ProductViewFluoStripsComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-lenticon/product-view-lenticon.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/products/product-view-lenticon/product-view-lenticon.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div> -->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"col-md-3\">\n          <dt>{{ 'Material' | translate }}</dt>\n          <dd>\n            <a>{{ product.material | translate }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a (click)=\"download()\" href=\"javascript:void(0);\">{{ 'Download' | translate }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\"row info-content\">\n            <input class=\"form-control\" type=\"text\" maxlength=\"20\" placeholder=\"{{ 'Enter name patient' | translate }}\" [(ngModel)]=\"product.patient\"\n              required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\" [(ngModel)]=\"product.client\"\n              disabled required>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\"\n              required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-lg-4\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <h5 class=\"padding-price\" [hidden]=\"product.priceSale === ''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h5>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Right Eye' | translate }}</label>\n          <!--row header right (contamac / hydrapeg / insertors)-->\n          <br>\n          <br>\n          <div class=\"row title\">{{ 'Test Set' | translate }}</div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-lg-3\" *ngFor=\"let itemSet of product.setRight\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ itemSet.name | translate }}</label>&nbsp;&nbsp;\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\" *ngIf=\"itemSet.type === 'selected'\">\n                  <ng-select (change)=\"changeSelect('right', itemSet, $event,0)\" [items]=\"itemSet.values\" [disabled]=\"!product.eyeRight\"\n                    [(ngModel)]=\"itemSet.sel\" bindLabel=\"value\" bindValue=\"id\" placeholder=\"{{ 'Select value' | translate }}\" [required]=\"product.eyeRight\"\n                    [clearable]=\"false\">\n                  </ng-select>\n                </div>\n                 <div *ngIf=\"itemSet.type === 'input'\" class=\"select-values param-power col-sm-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ itemSet.placeholder | translate }}\"\n                    [required]=\"product.eyeRight\" [(ngModel)]=\"itemSet.selected\"\n                    [disabled]=true>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row title\">{{ 'Parameters' | translate }}</div>\n          <br>\n          <!--params right-->\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-lg-3\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\">\n                  <input class=\"form-control\" type=\"number\" value=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                     [required]=\"product.eyeRight\"  [disabled]=\"!product.eyeRight\" min=\"1\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3\" *ngFor=\"let parameter of product.parametersRight\">\n              <div>\n                <!--param name-->\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div class=\"row\">\n                  <div *ngIf=\"parameter.type === 'selected' && parameter.name !== 'Addition'\" class=\"select-values col-sm-12\">\n                    <ng-select (change)=\"changeSelect('right', parameter, $event,0)\" [items]=\"parameter.values\"\n                      [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.sel\"\n                      bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                  </div>\n                  <div *ngIf=\"parameter.type === 'selected' && parameter.name === 'Addition'\" class=\"select-values col-sm-12\">\n                    <ng-select (change)=\"changeSelect('right', parameter, $event,0)\" [items]=\"parameter.values\"\n                      [disabled]=\"!addRight\" [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.sel\"\n                      bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                  </div>\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name !== 'Far Zone Diameter'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\"\n                      [disabled]=\"!product.eyeRight\">\n                  </div>\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Far Zone Diameter'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeRight\" [(ngModel)]=\"parameter.selected\"\n                      [disabled]=\"true\" step=\"0.10\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"col-lg-3\" *ngIf=\"addRight\">\n              <div class=\"row\">\n                  <label class=\"form-check-label\">{{ 'Pupillary diameter' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\">\n                  <input class=\"form-control\" type=\"number\" min=\"1\" step=\"0.10\" [(ngModel)]=\"product.pupillaryRight\" oninput=\"validity.valid||(value='');\"\n                      [required]=\"product.eyeRight\" (change)=\"changePupillary('right', product.pupillaryRight)\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n        </div>\n\n        <!--comments right-->\n        <br>\n        <div class=\"col-md-12\">\n          <div class=\"comments\">\n            <div class=\"row header\">\n              <div class=\"col-md-12\">\n                <div class=\"title\">{{ 'Comments Right Eye' | translate }}</div>\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsRight\"\n                  [disabled]=\"!product.eyeRight\" placeholder=\"{{ 'Enter right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <!--files right-->\n        <div class=\"col-md-12\">\n          <div class=\"comments\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n                  <dt class=\"title\">{{ 'Documents Right Eye' | translate }}</dt>\n                  <div class=\"custom-file\">\n                    <input #selectedFilesRightEye type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderRightEye\"\n                      [disabled]=\"!product.eyeRight || uploaderRightEye.queue.length > 4\" multiple />\n                    <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                    <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                    <div class=\"message-error-file\">\n                      <span translate>{{'Max files size:' | translate}} 25MB</span>\n                      <span> / </span>\n                      <span translate>{{'Maximum files number:' | translate }} 5</span>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderRightEye.queue.length > 0\">\n                  <div class=\"row justify-content-end\" *ngIf=\"uploaderRightEye.queue.length > 1\">\n                    <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderRightEye.clearQueue()\" [disabled]=\"!uploaderRightEye.queue.length\">\n                      <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n                    </button>\n                  </div>\n                  <br>\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th width=\"50%\">{{ 'Name' | translate }}</th>\n                        <th>{{ 'Size' | translate }}</th>\n                        <th>{{ 'Actions' | translate }}</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of uploaderRightEye.queue\">\n                        <td><strong>{{ item?.file?.name }}</strong></td>\n                        <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                        <td nowrap>\n                          <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item, 'Right')\">\n                            <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Left Eye' | translate }}</label>\n          <!--row header left (contamac / hydrapeg / insertors)-->\n          <br>\n          <br>\n          <div class=\"row title\">{{ 'Test Set' | translate }}</div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-lg-3\" *ngFor=\"let setLeft of product.setLeft\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ setLeft.name | translate }}</label>&nbsp;&nbsp;\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\" *ngIf=\"setLeft.type === 'selected'\">\n                  <ng-select (change)=\"changeSelect('left', setLeft, $event,0)\" [items]=\"setLeft.values\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" [(ngModel)]=\"setLeft.sel\" bindLabel=\"value\" bindValue=\"id\" placeholder=\"{{ 'Select value' | translate }}\"\n                    [clearable]=\"false\">\n                  </ng-select>\n                </div>\n                <!--Only Design-->\n                <div *ngIf=\"setLeft.type === 'input'\" class=\"select-values param-power col-sm-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ setLeft.placeholder | translate }}\"\n                    [required]=\"product.eyeLeft\" [(ngModel)]=\"setLeft.selected\"\n                    [disabled]=true>\n                </div>\n              </div>\n            </div>\n          </div>\n           <br>\n          <div class=\"row title\">{{ 'Parameters' | translate }}</div>\n          <br>\n          <!--params left-->\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-lg-3\">\n              <div class=\"row \">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\">\n                  <input class=\"form-control\" type=\"number\" value=\"1\" [(ngModel)]=\"product.quantityLeft\" [required]=\"product.eyeLeft\"\n                    oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\" min=\"1\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3\" *ngFor=\"let parameter of product.parametersLeft\">\n              <div>\n                <!--param name-->\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div class=\"row\">\n                  <div *ngIf=\"parameter.type === 'selected' && parameter.name !== 'Addition'\" class=\"select-values col-sm-12\">\n                    <ng-select (change)=\"changeSelect('left', parameter, $event,0)\" [items]=\"parameter.values\"\n                      [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.sel\" bindLabel=\"item\"\n                      bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                  </div>\n                  <div *ngIf=\"parameter.type === 'selected' && parameter.name === 'Addition'\" class=\"select-values col-sm-12\">\n                    <ng-select (change)=\"changeSelect('left', parameter, $event,0)\" [items]=\"parameter.values\"\n                      [disabled]=\"!addLeft\" [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                      bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [clearable]=\"false\">\n                      {{item}}\n                    </ng-select>\n                  </div>\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name !== 'Far Zone Diameter'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\"\n                      [disabled]=\"!product.eyeLeft\">\n                  </div>\n                  <div *ngIf=\"parameter.type === 'input' && parameter.name === 'Far Zone Diameter'\" class=\"select-values col-sm-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                      [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.selected\"\n                      [disabled]=\"true\" step=\"0.10\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"col-lg-3\" *ngIf=\"addLeft\">\n              <div class=\"row\">\n                  <label class=\"form-check-label\">{{ 'Pupillary diameter' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"select-values col-sm-12\">\n                  <input class=\"form-control\" type=\"number\" min=\"1\" step=\"0.10\" [(ngModel)]=\"product.pupillaryLeft\" oninput=\"validity.valid||(value='');\"\n                      [required]=\"product.eyeLeft\" (change)=\"changePupillary('left', product.pupillaryLeft)\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <!--comments left-->\n        <br>\n        <div class=\"col-md-12\">\n          <div class=\"comments\">\n            <div class=\"row header\">\n              <div class=\"col-md-12\">\n                <div class=\"title\">{{ 'Comments Left Eye' | translate }}</div>\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsLeft\"\n                  [disabled]=\"!product.eyeLeft\" placeholder=\"{{ 'Enter left eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <!--files left-->\n        <div class=\"col-md-12\">\n          <div class=\"comments\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n                  <dt class=\"title\">{{ 'Documents Left Eye' | translate }}</dt>\n                  <div class=\"custom-file\">\n                    <input #selectedFilesLeftEye type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderLeftEye\"\n                      [disabled]=\"!product.eyeLeft || uploaderLeftEye.queue.length > 4\" multiple />\n                    <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                    <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                    <div class=\"message-error-file\">\n                      <span translate>{{'Max files size:' | translate}} 25MB</span>\n                      <span> / </span>\n                      <span translate>{{'Maximum files number:' | translate }} 5</span>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderLeftEye.queue.length > 0\">\n                  <div class=\"row justify-content-end\" *ngIf=\"uploaderLeftEye.queue.length > 1\">\n                    <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderLeftEye.clearQueue()\" [disabled]=\"!uploaderLeftEye.queue.length\">\n                      <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n                    </button>\n                  </div>\n                  <br>\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th width=\"50%\">{{ 'Name' | translate }}</th>\n                        <th>{{ 'Size' | translate }}</th>\n                        <th>{{ 'Actions' | translate }}</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of uploaderLeftEye.queue\">\n                        <td><strong>{{ item?.file?.name }}</strong></td>\n                        <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                        <td nowrap>\n                          <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item, 'Left')\">\n                            <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view-lenticon/product-view-lenticon.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/products/product-view-lenticon/product-view-lenticon.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.ng-select {\n  width: 100%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 2em; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.select-values {\n  padding-left: 0px; }\n.param-power {\n  display: -webkit-box;\n  display: flex; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px;\n  line-height: 30px; }\n.item-properties img {\n  width: 30px; }\n.check-steps {\n  display: -webkit-box;\n  display: flex; }\n.check-steps > input:nth-child(1) {\n    width: 20px;\n    height: 10px;\n    margin-left: 20px; }\n.content-steps .selection {\n  padding-right: 1.5rem;\n  padding-top: 30px; }\n.content-steps .steeps > div:nth-child(2) {\n  padding-left: 0; }\n.content-steps .sub-label {\n  padding-left: 25px; }\n.content-steps .sub-label .row {\n    padding-top: 5px;\n    padding-left: 15px; }\n.content-steps > div:nth-child(1) {\n  padding-left: 0; }\n.content-steps > div:nth-child(2) {\n  border-left: 1px solid #ccc; }\n.content-steps > div:nth-child(3) {\n  border-left: 1px solid #ccc; }\n.selected-double > div:nth-child(1) {\n  padding-right: 0px; }\n.selected-double > div:nth-child(2) {\n  padding-left: 2px; }\n.custom-file-input {\n  cursor: pointer; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.custom-control-label {\n  font-size: 0.9rem;\n  padding-left: -2%; }\n.page-header-fixed {\n  margin-left: 15px; }\n.padding-price {\n  padding-top: 1.1em; }\n.header-europa {\n  padding: 15px 0 5px 0; }\n.header-europa > div:nth-child(1),\n  .header-europa > div:nth-child(2),\n  .header-europa > div:nth-child(3) {\n    padding-left: 2%; }\n.additional {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-top: 10px; }\n.additional > p:nth-child(1) {\n    font-size: 15px;\n    color: red; }\n.prices {\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .6s;\n  padding-top: 10px; }\n.prices > p:nth-child(1) {\n    font-size: 26px;\n    font-weight: bold; }\n.message-error-file {\n  color: #cc0000;\n  font-size: 0.85rem; }\n.title-pupullary {\n  padding-left: 2rem; }\n"

/***/ }),

/***/ "./src/app/products/product-view-lenticon/product-view-lenticon.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-lenticon/product-view-lenticon.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductViewLenticonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewLenticonComponent", function() { return ProductViewLenticonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_lenticon_confirmation_lenticon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component */ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_21__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewLenticonComponent = /** @class */ (function () {
    function ProductViewLenticonComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, modalService, router, alertify, notification, translate, spinner) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.modalService = modalService;
        this.router = router;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_16__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.addRight = false;
        this.addLeft = false;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        this.uploadResultLeftEye = null;
        this.uploadResultRightEye = null;
        this.uploaderLeftEye = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.uploaderRightEye = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploaderLeftEye.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize('Left');
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item, 'Left');
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderLeftEye.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResultLeftEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResultLeftEye) {
                _this.buildFileProductRequested('Left');
            }
        };
        this.uploaderLeftEye.onErrorItem = function (item, response, status, headers) {
            _this.uploadResultLeftEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
        this.uploaderRightEye.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize('Right');
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item, 'Right');
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderRightEye.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResultRightEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResultRightEye) {
                _this.buildFileProductRequested('Right');
            }
        };
        this.uploaderRightEye.onErrorItem = function (item, response, status, headers) {
            _this.uploadResultRightEye = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewLenticonComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewLenticonComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(3, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.productService.findBySupplierAndInViewAndCategory$(3, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                        _this.setCodeProduct();
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.getProductView();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewLenticonComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_15__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.setRight = JSON.parse(this.product.types)[0].set;
        this.product.setLeft = JSON.parse(this.product.types)[0].set;
        this.product.priceSaleRight = 0;
        this.product.priceSaleLeft = 0;
        this.product.pupillaryRight = null;
        this.product.pupillaryLeft = null;
        this.setClient();
        this.setPrice();
    };
    ProductViewLenticonComponent.prototype.setCodeProduct = function () {
        var productName = this.product.name;
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_15__["includes"](pr.name, productName)) {
                prCode = pr;
            }
        });
        this.productCode = prCode;
    };
    ProductViewLenticonComponent.prototype.changeSelect = function (eye, parameter, value, value2) {
        parameter.selected = value;
        if (parameter.name === 'num.LC') {
            if (eye === 'right') {
                this.product.setRight[2].selected = this.product.setRight[2].values[parseInt(value.id)]; //Base curve
                this.product.setRight[3].selected = this.product.setRight[3].values[parseInt(value.id)]; // Power
                this.product.setRight[4].selected = this.product.setRight[4].values[parseInt(value.id)]; // exc
            }
            else {
                this.product.setLeft[2].selected = this.product.setLeft[2].values[parseInt(value.id)]; //Base curve
                this.product.setLeft[3].selected = this.product.setLeft[3].values[parseInt(value.id)]; // Power
                this.product.setLeft[4].selected = this.product.setLeft[4].values[parseInt(value.id)]; // exc
            }
        }
        if (parameter.name === 'Design') {
            if (parameter.selected === 'Elipsys_STD_MF' || parameter.selected === 'Elipsys_KC_MF' || parameter.selected === 'Elipsys_SE_MF') {
                if (eye === 'right') {
                    this.addRight = true;
                }
                else {
                    this.addLeft = true;
                }
            }
            else {
                if (eye === 'right') {
                    this.addRight = false;
                    this.product.parametersRight[5].selected = null;
                    this.product.parametersRight[5].sel = null;
                    this.product.pupillaryRight = null;
                }
                else {
                    this.addLeft = false;
                    this.product.parametersLeft[5].selected = null;
                    this.product.parametersLeft[5].sel = null;
                    this.product.pupillaryLeft = null;
                }
            }
        }
    };
    ProductViewLenticonComponent.prototype.changePupillary = function (eye, value) {
        var valueAux = 0;
        if (value != null) {
            if (value >= 1 && value <= 4) {
                valueAux = this.format(3.00);
            }
            else if (value > 4 && value <= 4.50) {
                valueAux = this.format(3.50);
            }
            else if (value > 4.50) {
                valueAux = this.format(4.00);
            }
        }
        if (eye === 'right') {
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.product.parametersRight, function (parameter, index) {
                if (parameter.name === 'Far Zone Diameter') {
                    parameter.selected = valueAux;
                }
            });
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.product.parametersLeft, function (parameter, index) {
                if (parameter.name === 'Far Zone Diameter') {
                    parameter.selected = valueAux;
                }
            });
        }
    };
    ProductViewLenticonComponent.prototype.setValueEye = function (eye) {
        if (eye === 'right') {
            this.product.eyeRight = !this.product.eyeRight;
            if (!this.product.eyeRight) {
                this.clean('right');
                this.addRight = false;
            }
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
            if (!this.product.eyeLeft) {
                this.clean('left');
                this.addLeft = false;
            }
        }
    };
    ProductViewLenticonComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewLenticonComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                }
            });
        }
    };
    ProductViewLenticonComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.membership = clienteSelect.membership.idMembership;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSaleRight = 0;
            this.product.priceSaleLeft = 0;
            this.product.priceSale = 0;
            this.membership = 0;
        }
    };
    ProductViewLenticonComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewLenticonComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            this.membership = this.currentUser.membership.idMembership;
            this.definePrice(this.membership);
        }
    };
    ProductViewLenticonComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewLenticonComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productCode = this.productCode;
        var productsSelected = this.productsSelected;
        var pupillaryRight = this.product.pupillaryRight === null ? '' : this.product.pupillaryRight;
        var pupillaryLeft = this.product.pupillaryLeft === null ? '' : this.product.pupillaryLeft;
        lodash__WEBPACK_IMPORTED_MODULE_15__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = productCode.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                /* set*/
                lodash__WEBPACK_IMPORTED_MODULE_15__["each"](product.setRight, function (parameter, index) {
                    if (parameter.name === 'num.LC') {
                        var value = parameter.selected.value;
                        parameter.selected = value;
                    }
                    product.setRight[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.set = product.setRight;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_15__["each"](product.parametersRight, function (parameter, index) {
                    if (parameter.name === 'Addition' || parameter.name === 'Far Zone Diameter') {
                        if (parameter.selected === null || parameter.selected === undefined) {
                            parameter.selected = '';
                        }
                    }
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
                productSelected.parameters.push({ 'name': 'Pupillary diameter', 'selected': pupillaryRight });
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                /* set*/
                lodash__WEBPACK_IMPORTED_MODULE_15__["each"](product.setLeft, function (parameter, index) {
                    if (parameter.name === 'num.LC') {
                        var value = parameter.selected.value;
                        parameter.selected = value;
                    }
                    product.setLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.set = product.setLeft;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_15__["each"](product.parametersLeft, function (parameter, index) {
                    if (parameter.name === 'Addition' || parameter.name === 'Far Zone Diameter') {
                        if (parameter.selected === null || parameter.selected === undefined) {
                            parameter.selected = '';
                        }
                    }
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersLeft;
                productSelected.parameters.push({ 'name': 'Pupillary diameter', 'selected': pupillaryLeft });
            }
            productSelected.detail = { name: product.name, eye: productSelected.eye, parameters: productSelected.parameters,
                set: productSelected.set };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["omit"](productSelected, ['parameters', 'eye', 'set']);
        });
        return productsSelected;
    };
    ProductViewLenticonComponent.prototype.addToCart = function (type) {
        this.type = type;
        this.spinner.show();
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_15__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_17__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_18__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        // this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        // this.openModal(type);
    };
    ProductViewLenticonComponent.prototype.verifyOpenModal = function () {
        if (this.uploaderRightEye.queue.length === this.listFileRightEye.length
            && this.uploaderLeftEye.queue.length === this.listFileLeftEye.length) {
            this.openModal(this.type);
        }
    };
    ProductViewLenticonComponent.prototype.openModal = function (type) {
        var _this = this;
        this.spinner.hide();
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_lenticon_confirmation_lenticon_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmationLenticonComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.productCode;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
        modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewLenticonComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
            return false;
        }
        if (this.product.eyeRight) {
            var addAux_1 = false;
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.product.parametersRight, function (param) {
                if (param.name === 'Design') {
                    if (param.selected === 'Elipsys_STD_MF' ||
                        param.selected === 'Elipsys_KC_MF' || param.selected === 'Elipsys_SE_MF') {
                        addAux_1 = true;
                    }
                }
                else {
                    if (param.name === 'Addition') {
                        if ((param.selected === null || param.selected === undefined) && addAux_1) {
                            isValid = false;
                        }
                    }
                }
            });
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.product.setRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if ((this.product.pupillaryRight === null && addAux_1) || (this.product.quantityRight === null
                || this.product.quantityRight === undefined)) {
                isValid = false;
            }
        }
        if (this.product.eyeLeft) {
            var addAux_2 = false;
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.product.parametersLeft, function (param) {
                if (param.name === 'Design') {
                    if (param.selected === 'Elipsys_STD_MF' ||
                        param.selected === 'Elipsys_KC_MF' || param.selected === 'Elipsys_SE_MF') {
                        addAux_2 = true;
                    }
                }
                else {
                    if (param.name === 'Addition') {
                        if ((param.selected === null || param.selected === undefined) && addAux_2) {
                            isValid = false;
                        }
                    }
                }
            });
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.product.setLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if ((this.product.pupillaryLeft === null && addAux_2) || (this.product.quantityLeft === null
                || this.product.quantityLeft === undefined)) {
                isValid = false;
            }
        }
        return isValid;
    };
    ProductViewLenticonComponent.prototype.clean = function (eye) {
        var parameters;
        if (eye === 'right') {
            parameters = this.product.parametersRight;
            this.product.quantityRight = '';
            this.product.observationsRight = '';
            this.product.setRight[0].selected = null;
            this.product.setRight[0].sel = null;
            this.product.setRight[2].selected = null;
            this.product.setRight[3].selected = null;
            this.product.setRight[4].selected = null;
            this.product.pupillaryRight = null;
        }
        else {
            parameters = this.product.parametersLeft;
            this.product.quantityLeft = '';
            this.product.observationsLeft = '';
            this.product.setLeft[0].selected = null;
            this.product.setLeft[0].sel = null;
            this.product.setLeft[2].selected = null;
            this.product.setLeft[3].selected = null;
            this.product.setLeft[4].selected = null;
            this.product.pupillaryLeft = null;
        }
        // parameter
        lodash__WEBPACK_IMPORTED_MODULE_15__["each"](parameters, function (param) {
            param.selected = null;
            param.sel = null;
        });
        if (eye === 'right') {
            this.product.parametersRight = parameters;
        }
        else {
            this.product.parametersLeft = parameters;
        }
    };
    ProductViewLenticonComponent.prototype.maxFilesSize = function (eye) {
        var maxFileSize = 0;
        if (eye === 'Right') {
            if (this.uploaderRightEye.queue) {
                lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.uploaderRightEye.queue, function (item) {
                    maxFileSize = maxFileSize + item.file.size;
                });
            }
        }
        else if (eye === 'Left') {
            if (this.uploaderLeftEye.queue) {
                lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.uploaderLeftEye.queue, function (item) {
                    maxFileSize = maxFileSize + item.file.size;
                });
            }
        }
        return maxFileSize;
    };
    ProductViewLenticonComponent.prototype.removeFile = function (item, eye) {
        if (eye === 'Right') {
            this.uploaderRightEye.removeFromQueue(item);
        }
        else if (eye === 'Left') {
            this.uploaderLeftEye.removeFromQueue(item);
        }
        this.clearSelectedFile(eye);
    };
    ProductViewLenticonComponent.prototype.clearSelectedFile = function (eye) {
        if (eye === 'Right') {
            this.selectedFilesRightEye.nativeElement.value = '';
        }
        else if (eye === 'Left') {
            this.selectedFilesLeftEye.nativeElement.value = '';
        }
    };
    ProductViewLenticonComponent.prototype.clearFiles = function () {
        if (this.uploaderLeftEye.queue.length) {
            this.uploaderLeftEye.clearQueue();
            this.clearSelectedFile('Left');
        }
        if (this.uploaderRightEye.queue.length) {
            this.uploaderRightEye.clearQueue();
            this.clearSelectedFile('Right');
        }
    };
    ProductViewLenticonComponent.prototype.saveFiles = function () {
        this.listFileLeftEye = new Array;
        this.listFileRightEye = new Array;
        if (this.uploaderLeftEye.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.uploaderLeftEye.queue, function (item) {
                item.upload();
            });
        }
        if (this.uploaderRightEye.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](this.uploaderRightEye.queue, function (item) {
                item.upload();
            });
        }
        if (!this.uploaderLeftEye.queue.length && !this.uploaderRightEye.queue.length) {
            this.openModal(this.type);
        }
    };
    ProductViewLenticonComponent.prototype.buildFileProductRequested = function (eye) {
        if (eye === 'Right' && this.uploadResultRightEye.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_1__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResultRightEye.response).data;
            fileProductRequest.name = this.uploadResultRightEye.item.file.name;
            fileProductRequest.type = this.uploadResultRightEye.item.file.type;
            fileProductRequest.size = this.uploadResultRightEye.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileRightEye.push(fileProductRequest);
            this.verifyOpenModal();
        }
        if (eye === 'Left' && this.uploadResultLeftEye.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_1__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResultLeftEye.response).data;
            fileProductRequest.name = this.uploadResultLeftEye.item.file.name;
            fileProductRequest.type = this.uploadResultLeftEye.item.file.type;
            fileProductRequest.size = this.uploadResultLeftEye.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileLeftEye.push(fileProductRequest);
            this.verifyOpenModal();
        }
    };
    ProductViewLenticonComponent.prototype.download = function () {
        var language = this.userStorageService.getLanguage();
        var name;
        language === 'en' ? name = 'Elipsys-en' : name = 'Elipsys-es';
        this.productService.download$(name).subscribe(function (res) {
            var filename = name + '.pdf';
            Object(file_saver__WEBPACK_IMPORTED_MODULE_21__["saveAs"])(res, filename);
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewLenticonComponent.prototype.format = function (value) {
        var flat;
        var partInt;
        var partDec;
        var pos;
        var toString;
        if (value !== null) {
            toString = value.toString();
            if (lodash__WEBPACK_IMPORTED_MODULE_15__["includes"](toString, '.')) {
                pos = lodash__WEBPACK_IMPORTED_MODULE_15__["indexOf"](toString, '.');
                partInt = toString.slice(0, pos);
                if (partInt <= 99) {
                    partDec = toString.slice(pos + 1, toString.length);
                    flat = partInt + '.' + this.completeEnd(partDec, 2);
                }
                else {
                    flat = null;
                }
            }
            else {
                if (value <= 99) {
                    flat = value + '.00';
                }
                else {
                    flat = null;
                }
            }
            return flat;
        }
    };
    ProductViewLenticonComponent.prototype.completeStart = function (value, tamano) {
        var filteredId = value.toString();
        filteredId = lodash__WEBPACK_IMPORTED_MODULE_15__["padStart"](filteredId, tamano, '0');
        return filteredId;
    };
    ProductViewLenticonComponent.prototype.completeEnd = function (value, tamano) {
        var filteredId = value.toString();
        filteredId = lodash__WEBPACK_IMPORTED_MODULE_15__["padEnd"](filteredId, tamano, '0');
        return filteredId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFilesLeftEye'),
        __metadata("design:type", Object)
    ], ProductViewLenticonComponent.prototype, "selectedFilesLeftEye", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFilesRightEye'),
        __metadata("design:type", Object)
    ], ProductViewLenticonComponent.prototype, "selectedFilesRightEye", void 0);
    ProductViewLenticonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-lenticon',
            template: __webpack_require__(/*! ./product-view-lenticon.component.html */ "./src/app/products/product-view-lenticon/product-view-lenticon.component.html"),
            styles: [__webpack_require__(/*! ./product-view-lenticon.component.scss */ "./src/app/products/product-view-lenticon/product-view-lenticon.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_6__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_7__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_10__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]])
    ], ProductViewLenticonComponent);
    return ProductViewLenticonComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div> -->\n          <!-- image -->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"col-md-4\">\n          <dt>{{ 'Material' | translate }}</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-4\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' | translate }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n\n        <!-- client -->\n        <div class=\"col-lg-3 margin-col\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row input-align info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name client' | translate }}\" [(ngModel)]=\"product.client\"\n              disabled required>\n          </div>\n          <div class=\"row input-align info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Introduce name client' | translate }}\"\n              required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-lg-5 margin-col\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <!--Price-->\n        <div class=\"col-lg-3 margin-col\">\n          <h4 class=\"padding-price\" [hidden]=\"(priceFrom==='' && priceUp==='') || product.priceSale !==''\">\n            <span>{{ priceFrom | currency : \"USD $\"}}{{priceFrom ? ' - ':''}}{{ priceUp | currency : \"$\"}}</span>\n            <!--<span></span>-->\n          </h4>\n          <h4 class=\"padding-price\" [hidden]=\"product.priceSale===''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h4>\n        </div>\n      </div>\n\n      <!-- row (general parameters) -->\n      <div class=\"row specifications\">\n        <div class=\"col-lg-12 title\">\n          <label class=\"form-check-label\">{{ 'General Parameters' | translate }}</label>\n        </div>\n        <!--PARAMS-->\n        <div class=\"col-lg-12 generals\">\n          <div *ngFor=\"let parameter of product.parameters\" class=\"col-lg-3\">\n            <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n              <div class=\"title\">\n                <label class=\"form-check-label\">{{ parameter.name | translate }}</label>\n              </div>\n              <div class=\"row info-content\">\n                <label class=\"form-check-label\">{{ parameter.values }}</label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (first box, parameters) -->\n      <div class=\"row col-md-12 specifications title\">\n        <label> {{ 'Please specific your product' | translate }}</label>\n      </div>\n      <div class=\"row specifications col-lg-12\" *ngFor=\"let box of boxes; let index = index\">\n        <div class=\"col-lg-1 margin-col\">\n          <div class=\"row title\">\n            <label class=\"form-check-label\">{{ 'Box' | translate }}{{ ' ' + (index+1) }}</label>\n          </div>\n        </div>\n        <!--QANTITY-->\n        <div class=\"col-lg-2 margin-col\">\n          <div class=\"row title\">\n            <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n          </div>\n          <div class=\"row\">\n            <input class=\"form-control\" [ngClass]=\"{'error-quantity':  box.quantity && box.quantity%50 !== 0 }\" type=\"number\"\n              step=\"50\" min=\"50\" [(ngModel)]=\"box.quantity\" (change)=\"box.quantity%50 !== 0 ? box.quantity = '' : '';setPriceBoxes(box.quantity)\"\n              required>\n          </div>\n        </div>\n        <!--PARAMS-->\n        <div *ngFor=\"let parameter of box.parameters\" class=\"col-lg-3 params margin-col\">\n          <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n            <div class=\"row title\">\n              <label class=\"form-check-label\">{{ parameter.name | translate }}</label>\n            </div>\n            <div *ngIf=\"parameter.type === 'selected'\" class=\"row select-values\">\n              <ng-select (change)=\"changeSelect(parameter, $event)\" [items]=\"parameter.values\" [(ngModel)]=\"parameter.sel\"\n                bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" required>\n                {{item}}\n              </ng-select>\n            </div>\n            <div *ngIf=\"parameter.type === 'image'\" class=\"row select-values\">\n              <ng-select [items]=\"tones[box.parameters[0].selected]\" [(ngModel)]=\"parameter.selected\" bindLabel=\"value\"\n                bindValue=\"value\" placeholder=\"{{ 'Select value' | translate }}\" [disabled]=\"!box.parameters[0].selected\"\n                required>\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                  <div class=\"main-info\">\n                    <img height=\"100\" width=\"125\" [src]=\"item.image\" class=\"img-color\" />\n                  </div>\n                </ng-template>\n              </ng-select>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-1 hand-over\">\n          <span class=\"fa fa-trash\" placement=\"top\" ngbTooltip=\"{{'Delete Box' | translate}}\" (click)=\"removeBox(index)\"></span>\n          <span class=\"fa fa-plus-circle\" placement=\"top\" ngbTooltip=\"{{'Add Box' | translate}}\" (click)=\"addBox()\"></span>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase padding-btn margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i>{{ 'Add to cart' | translate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 message-quantity\">\n          <span translate>{{'To make the order the minimum quantity is' | translate}} 250 {{ 'units' | translate}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 3em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .margin-col {\n    margin-bottom: 2%; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.hand-over {\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly; }\n.product-title {\n  margin-top: 0; }\n.product-info {\n  padding-top: 3em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.product-info .input-align {\n    padding-left: 0px; }\n.specifications {\n  padding-top: 2em;\n  -webkit-box-align: center;\n          align-items: center; }\n.specifications .generals {\n    display: -webkit-box;\n    display: flex; }\n.specifications .error-quantity {\n    color: red; }\n.specifications.btn-box {\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.buy-btns {\n  text-align: right; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.title {\n  font-weight: 600; }\n.title.align-title {\n    padding-left: 1em; }\n.readonly-input {\n  background-color: #ffffff; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.padding-price {\n  padding-top: 1.1em; }\n.info-content {\n  margin-left: 5px;\n  margin-bottom: 5px; }\n.ng-select {\n  width: 100%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.message-quantity {\n  color: #cc0000;\n  font-size: 0.85rem;\n  margin-left: 10rem; }\n"

/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductViewMagicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewMagicComponent", function() { return ProductViewMagicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component */ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewMagicComponent = /** @class */ (function () {
    function ProductViewMagicComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate, spinner) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.boxes = new Array;
        this.tones = new Array;
        this.quantity = 1;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploader.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item);
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewMagicComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.clearFiles();
    };
    ProductViewMagicComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(5, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.productService.findBySupplierAndInViewAndCategory$(5, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                        _this.setCodeProduct();
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.getProductView();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewMagicComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parameters = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersBoxes = JSON.parse(this.product.types)[0].parametersBoxes;
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.priceSale = '';
        //adding first box in array boxes
        var parametersBox = { parameters: JSON.parse(JSON.stringify(this.product.parametersBoxes)) };
        this.boxes.push(parametersBox);
        this.setClient();
        this.setPrice();
    };
    ProductViewMagicComponent.prototype.setCodeProduct = function () {
        var productName = this.product.name;
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, productName)) {
                prCode = pr;
            }
        });
        this.productCode = prCode;
    };
    ProductViewMagicComponent.prototype.addBox = function () {
        var parametersBox = { parameters: JSON.parse(JSON.stringify(this.product.parametersBoxes)) };
        this.boxes.push(parametersBox);
    };
    ProductViewMagicComponent.prototype.removeBox = function (index) {
        if (this.boxes.length > 1) {
            this.boxes.splice(index, 1);
        }
    };
    ProductViewMagicComponent.prototype.changeSelect = function (parameter, value) {
        parameter.selected = value;
        if (parameter.name === "Tone") {
            switch (value) {
                /*case "1 TONE":
                  this.tones[value] = this.product.parametersBoxes[1].values[0];
                  break;
                case "2 TONE":
                  this.tones[value] = this.product.parametersBoxes[1].values[1];
                  break;*/
                case "3 TONE":
                    //this.tones[value] = this.product.parametersBoxes[1].values[2];
                    this.tones[value] = this.product.parametersBoxes[1].values[0];
                    break;
            }
            this.product.parametersBoxes[0].selected = null;
        }
    };
    ProductViewMagicComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
    };
    ProductViewMagicComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                }
            });
        }
    };
    ProductViewMagicComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.clientSelected = clienteSelect;
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
            this.priceFrom = '';
            this.priceUp = '';
            this.clientSelected = '';
        }
    };
    ProductViewMagicComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewMagicComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewMagicComponent.prototype.definePrice = function (membership) {
        var info = JSON.parse(this.product.infoAditional);
        var totalQuantity = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.boxes, 'quantity');
        var pos = this.calculateQuantity();
        switch (membership) {
            case 1:// Gold
                if (totalQuantity >= 250) {
                    this.product.priceSale = parseFloat(info[1].values[pos].price);
                }
                else {
                    this.priceFrom = parseFloat(info[1].values[2].price);
                    this.priceUp = parseFloat(info[1].values[0].price);
                }
                break;
            case 2:// Diamond
                if (totalQuantity >= 250) {
                    this.product.priceSale = parseFloat(info[2].values[pos].price);
                }
                else {
                    this.priceFrom = parseFloat(info[2].values[2].price);
                    this.priceUp = parseFloat(info[2].values[0].price);
                }
                break;
            case 3:// Preferred
                if (totalQuantity >= 250) {
                    this.product.priceSale = parseFloat(info[3].values[pos].price);
                }
                else {
                    this.priceFrom = parseFloat(info[3].values[2].price);
                    this.priceUp = parseFloat(info[3].values[0].price);
                }
                break;
        }
    };
    ProductViewMagicComponent.prototype.buildProductsSelected = function () {
        var productsSelected = [];
        var product = this.productCopy;
        var productCode = this.productCode;
        var boxes = this.boxesCopy;
        var boxesProduct = [];
        var productSelected = {
            id: productCode.idProduct,
            quantity: 0,
            price: product.priceSale,
            detail: {},
            patient: '',
        };
        //parameters generals
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parameters, function (parameter, index) {
            product.parameters[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
        });
        var parameters = product.parameters;
        //parameters boxes
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](boxes, function (box, index) {
            var boxProduct = { "id": index + 1, "Tone": box.parameters[0].selected, "Color": box.parameters[1].selected, "Quantity": box.quantity };
            boxesProduct.push(boxProduct);
        });
        var totalQuantity = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](boxes, 'quantity');
        productSelected.detail = { name: '', eye: '', parameters: parameters, boxes: boxesProduct };
        productSelected.quantity = totalQuantity;
        productsSelected.push(productSelected);
        return productsSelected;
    };
    ProductViewMagicComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.boxesCopy = JSON.parse(JSON.stringify(this.boxes));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = '';
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        // this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewMagicComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationMagicLookComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.productCode;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewMagicComponent.prototype.formIsValid = function () {
        var isValid = true;
        var totalQuantity = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.boxes, 'quantity');
        if (totalQuantity < 250) {
            return false;
        }
        if (this.client === '' || this.client === undefined) {
            isValid = false;
        }
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.boxes, function (product) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parameters, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
                if (!product.quantity) {
                    isValid = false;
                }
            });
        });
        return isValid;
    };
    ProductViewMagicComponent.prototype.maxFilesSize = function () {
        var maxFileSize = 0;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                maxFileSize = maxFileSize + item.file.size;
            });
        }
        return maxFileSize;
    };
    ProductViewMagicComponent.prototype.removeFile = function (item) {
        this.uploader.removeFromQueue(item);
        this.clearSelectedFile();
    };
    ProductViewMagicComponent.prototype.clearSelectedFile = function () {
        this.selectedFiles.nativeElement.value = '';
    };
    ProductViewMagicComponent.prototype.clearFiles = function () {
        if (this.uploader.queue.length) {
            this.uploader.clearQueue();
            this.clearSelectedFile();
        }
    };
    ProductViewMagicComponent.prototype.saveFiles = function () {
        this.listFileBasket = new Array;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewMagicComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_17__["FileProductRequested"]();
            fileProductRequest.url = JSON.parse(this.uploadResult.response).data;
            fileProductRequest.name = this.uploadResult.item.file.name;
            fileProductRequest.type = this.uploadResult.item.file.type;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileBasket.push(fileProductRequest);
        }
        else {
            console.log('error file');
        }
    };
    ProductViewMagicComponent.prototype.setPriceBoxes = function (quantity) {
        if (quantity % 50 === 0) {
            var totalQuantity = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.boxes, 'quantity');
            var info = JSON.parse(this.product.infoAditional);
            var membership = 0;
            var pos = this.calculateQuantity();
            if (this.user.role.idRole === 3) {
                membership = this.currentUser.membership.idMembership;
            }
            else {
                if (this.clientSelected !== undefined && this.clientSelected !== '') {
                    membership = this.clientSelected.membership.idMembership;
                }
            }
            if (totalQuantity >= 250) {
                switch (membership) {
                    case 1:// Gold
                        this.product.priceSale = parseFloat(info[1].values[pos].price);
                        break;
                    case 2:// Diamond
                        this.product.priceSale = parseFloat(info[2].values[pos].price);
                        break;
                    case 3:// Preferred
                        this.product.priceSale = parseFloat(info[3].values[pos].price);
                        break;
                }
            }
            else {
                this.product.priceSale = '';
            }
        }
    };
    ProductViewMagicComponent.prototype.calculateQuantity = function () {
        var totalQuantity = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.boxes, 'quantity');
        var pos;
        if (totalQuantity >= 250 && totalQuantity <= 1000) {
            pos = 0;
        }
        else if (totalQuantity >= 1001 && totalQuantity <= 2000) {
            pos = 1;
        }
        else if (totalQuantity >= 2001) {
            pos = 2;
        }
        return pos;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewMagicComponent.prototype, "selectedFiles", void 0);
    ProductViewMagicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-magic',
            template: __webpack_require__(/*! ./product-view-magic.component.html */ "./src/app/products/product-view-magicLook/product-view-magic.component.html"),
            styles: [__webpack_require__(/*! ./product-view-magic.component.scss */ "./src/app/products/product-view-magicLook/product-view-magic.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_18__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerService"]])
    ], ProductViewMagicComponent);
    return ProductViewMagicComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-medmont/product-view-medmont.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-medmont/product-view-medmont.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>-->\n        </div>\n      </div>\n      <div class=\"row product-info\" >\n        <div class=\"item-properties col-md-12\" >\n          <p>{{'The Medmont E300 USB Corneal Topographer offers the practitioner extreme accuracy for the mapping of a patients cornea.Using a PC, the patients full corneal history can be stored and accessed quickly and efficiently.A huge range of display options is now available providing the user with information that they previously would only have dreamed about.'| translate }} </p>\n        </div>\n      </div>\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\" required\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              required [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\">\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n         <!--shipping address-->\n        <div class=\"col-lg-5\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content \">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <span class=\"title\">{{ 'More Information' | translate }}</span>\n          <div class=\"row info-content \">\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'View' | translate }}</a>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"getQuote()\"\n            [disabled]=\"!formIsValid()\">\n           {{ 'Get a quote' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-medmont/product-view-medmont.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-medmont/product-view-medmont.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .padding-col {\n    padding-left: 3em; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.ng-select {\n  width: 100%; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-bottom: 1em; }\n.product-info .item-properties i {\n      font-size: 30px; }\n.product-info .item-properties p {\n      font-size: 0.9rem;\n      padding: 0px 0 0 10px;\n      margin-bottom: 0; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.buy-btns {\n  text-align: right; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/products/product-view-medmont/product-view-medmont.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-medmont/product-view-medmont.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductViewMedmontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewMedmontComponent", function() { return ProductViewMedmontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProductViewMedmontComponent = /** @class */ (function () {
    function ProductViewMedmontComponent(productService, route, userStorageService, shippingAddressService, userService, modalService, alertify, notification, translate, spinner) {
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductViewMedmontComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewMedmontComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(7, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewMedmontComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.products, { idProduct: this.id });
        this.setClient();
        this.setCodeProduct();
    };
    ProductViewMedmontComponent.prototype.setCodeProduct = function () {
        var _this = this;
        var productCode = this.product.codeSpectrum;
        var productCategory = this.product.category;
        var prCode;
        this.productService.findBySupplierAndInViewAndCategory$(8, false, productCategory.idCategory).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.productsCode = res.data;
                lodash__WEBPACK_IMPORTED_MODULE_12__["each"](_this.productsCode, function (pr) {
                    console.log(lodash__WEBPACK_IMPORTED_MODULE_12__["includes"](pr.codeSpectrum, productCode));
                    if (lodash__WEBPACK_IMPORTED_MODULE_12__["includes"](pr.codeSpectrum, productCode)) {
                        prCode = pr;
                    }
                });
                _this.productCode = prCode;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewMedmontComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                }
            });
        }
    };
    ProductViewMedmontComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
        }
    };
    ProductViewMedmontComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewMedmontComponent.prototype.openModal = function (type) {
        /*const modalRef = this.modalService.open( ConfirmationSpectrumSalineComponent, { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.view = 2; // fluo strips
        modalRef.result.then((result) => {
          this.ngOnInit();
        } , (reason) => {
        });*/
    };
    ProductViewMedmontComponent.prototype.formIsValid = function () {
        var isValid = true;
        if (this.client === '' || this.client === undefined) {
            isValid = false;
        }
        return isValid;
    };
    ProductViewMedmontComponent.prototype.getQuote = function () {
        var _this = this;
        this.translate.get('Confirm quote', { value: 'Confirm quote' }).subscribe(function (title) {
            _this.translate.get('Are you sure you want to get a quote?', { value: 'Are you sure you want to get a quote?' }).subscribe(function (msg) {
                _this.alertify.confirm(title, msg, function () {
                    _this.productService.getQuote$(_this.client, _this.id).subscribe(function (res) {
                        if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                            _this.translate.get('Request for quotation sent successfully', { value: 'Request for quotation sent successfully' }).subscribe(function (res1) {
                                _this.notification.success('', res1);
                            });
                        }
                        else {
                            console.log(res.errors[0].detail);
                            _this.spinner.hide();
                        }
                    }, function (error) {
                        console.log('error', error);
                        _this.spinner.hide();
                    });
                }, function () { });
            });
        });
    };
    ProductViewMedmontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-medmont',
            template: __webpack_require__(/*! ./product-view-medmont.component.html */ "./src/app/products/product-view-medmont/product-view-medmont.component.html"),
            styles: [__webpack_require__(/*! ./product-view-medmont.component.scss */ "./src/app/products/product-view-medmont/product-view-medmont.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_9__["UserStorageService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_8__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ProductViewMedmontComponent);
    return ProductViewMedmontComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n          <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>-->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\" *ngIf=\"product.properties.values.length === 3\">\n        <div class=\"item-properties col-md-4\" *ngFor=\"let property of product.properties.values\">\n          <i class=\"{{ property.class }}\"></i>\n          <p>{{ property.text | translate }}</p>\n        </div>\n      </div>\n\n      <div class=\"row product-info\" *ngIf=\"product.properties.values.length === 4\">\n        <div class=\"item-properties col-md-6\" *ngFor=\"let property of product.properties.values\">\n          <i class=\"{{ property.class }}\"></i>\n          <p>{{ property.text | translate }}</p>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\" required\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              required [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\">\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n         <!--shipping address-->\n        <div class=\"col-lg-5\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content \">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n         <!--Price-->\n         <div class=\"col-lg-3\">\n          <h4 class=\"padding-price\" [hidden]=\"(priceFrom==='' && priceUp==='') || product.priceSale !==''\">\n            <span>{{ priceFrom | currency : \"USD $\"}}{{priceFrom ? ' - ':''}}{{ priceUp | currency : \"$\"}}</span>\n            <!--<span></span>-->\n          </h4>\n          <h4 class=\"padding-price\" [hidden]=\"product.priceSale===''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h4>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n      <!--quantity right-->\n      <div class=\"col-lg-4\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n          </div>\n          <div class=\"col-lg-6\">\n            <input class=\"form-control\" type=\"number\" step=1 min=\"250\" max=\"2000\" [(ngModel)]=\"product.quantity\"  [ngClass]=\"{'error-quantity':  product.quantity && (product.quantity < 250 || product.quantity > 2000) }\"\n            (change)=\"product.quantity < 250 || product.quantity > 2000 ? product.quantity = '' : '';setPriceBoxes(product.quantity)\" required>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 message-quantity\">\n          <span>{{'To make the order the minimum quantity is' | translate }} 250 {{ 'units' | translate }}</span>&nbsp;\n          <span>{{'and maximum' | translate}} 2000 {{ 'units' | translate }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .padding-col {\n    padding-left: 3em; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 3em; }\n.ng-select {\n  width: 100%; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.product-info .item-properties i {\n      font-size: 30px; }\n.product-info .item-properties p {\n      font-size: 0.9rem;\n      padding: 5px 0 0 10px; }\n.product-info .padding-price {\n    padding-top: 1.1em;\n    font-weight: bold; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n.padding-price {\n  padding-top: 1.1em; }\n.error-quantity {\n  color: red; }\n.message-quantity {\n  color: #cc0000;\n  font-size: 0.85rem;\n  margin-left: 1rem; }\n"

/***/ }),

/***/ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductViewSpectrumSalineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewSpectrumSalineComponent", function() { return ProductViewSpectrumSalineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component */ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewSpectrumSalineComponent = /** @class */ (function () {
    function ProductViewSpectrumSalineComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate, spinner) {
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.productsCode = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductViewSpectrumSalineComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewSpectrumSalineComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(7, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.productService.findBySupplierAndInViewAndCategory$(7, false, 10).subscribe(function (res1) {
                    if (res1.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                        _this.productsCode = res1.data;
                        _this.setCodeProduct();
                    }
                    else {
                        console.log(res1.errors[0].detail);
                        _this.spinner.hide();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.spinner.hide();
                });
                _this.getProductView();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewSpectrumSalineComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewSpectrumSalineComponent.prototype.setCodeProduct = function () {
        var productName = this.product.codeSpectrum;
        var codesP = [];
        var prCode;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, productName)) {
                prCode = pr;
                codesP.push(prCode);
            }
        });
        this.productCode = codesP;
    };
    ProductViewSpectrumSalineComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    _this.listCustomers = _this.listCustomersAux;
                    _this.excludeClients(_this.listCustomers, _this.product.supplier.idSupplier, _this.product);
                }
            });
        }
    };
    ProductViewSpectrumSalineComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.clientSelected = clienteSelect;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
            this.priceFrom = '';
            this.priceUp = '';
            this.clientSelected = '';
        }
    };
    ProductViewSpectrumSalineComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewSpectrumSalineComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewSpectrumSalineComponent.prototype.definePrice = function (membership) {
        var info = JSON.parse(this.product.infoAditional);
        var pos = this.calculateQuantity(this.product.quantity);
        switch (membership) {
            case 1:// Gold
                if (this.product.quantity >= 250) {
                    this.product.priceSale = parseFloat(info[1].values[pos].price);
                }
                else {
                    this.priceFrom = parseFloat(info[1].values[2].price);
                    this.priceUp = parseFloat(info[1].values[0].price);
                }
                break;
            case 2:// Diamond
                if (this.product.quantity >= 250) {
                    this.product.priceSale = parseFloat(info[2].values[pos].price);
                }
                else {
                    this.priceFrom = parseFloat(info[2].values[2].price);
                    this.priceUp = parseFloat(info[2].values[0].price);
                }
                break;
            case 3:// Preferred
                if (this.product.quantity >= 250) {
                    this.product.priceSale = parseFloat(info[3].values[pos].price);
                }
                else {
                    this.priceFrom = parseFloat(info[3].values[2].price);
                    this.priceUp = parseFloat(info[3].values[0].price);
                }
                break;
        }
    };
    ProductViewSpectrumSalineComponent.prototype.buildProductSelected = function () {
        var product = this.productCopy;
        var productSelected = product;
        var productCode;
        var flag = '';
        if (this.product.quantity >= 250 && this.product.quantity < 500) {
            flag = '250';
        }
        else if (this.product.quantity >= 500) {
            flag = '500';
        }
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.productsCode, function (pr) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](pr.name, flag)) {
                productCode = pr;
            }
        });
        this.productCode = productCode;
        productSelected.idProduct = productCode.idProduct;
        productSelected.price = product.priceSale;
        productSelected.quantity = product.quantity;
        productSelected.detail = '';
        productSelected.observations = product.observations;
        return productSelected;
    };
    ProductViewSpectrumSalineComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        var productsRequested = [];
        var product = this.buildProductSelected();
        var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
        var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
        productoSelect.idProduct = product.idProduct;
        productRequest.product = productoSelect;
        productRequest.quantity = product.quantity;
        productRequest.price = product.price;
        productRequest.detail = '';
        productRequest.patient = '';
        productRequest.observations = product.observations;
        productsRequested.push(productRequest);
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.openModal(type);
    };
    ProductViewSpectrumSalineComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationSpectrumSalineComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.productCode;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.view = 1; // spectrum saline
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewSpectrumSalineComponent.prototype.formIsValid = function () {
        var isValid = true;
        if (!this.product.quantity || this.product.quantity < 250) {
            isValid = false;
        }
        return isValid;
    };
    ProductViewSpectrumSalineComponent.prototype.setPriceBoxes = function (quantity) {
        var info = JSON.parse(this.product.infoAditional);
        var membership = 0;
        var pos = this.calculateQuantity(quantity);
        if (this.user.role.idRole === 3) {
            membership = this.currentUser.membership.idMembership;
        }
        else {
            if (this.clientSelected !== undefined && this.clientSelected !== '') {
                membership = this.clientSelected.membership.idMembership;
            }
        }
        if (quantity >= 250) {
            switch (membership) {
                case 1:// Gold
                    this.product.priceSale = parseFloat(info[1].values[pos].price);
                    break;
                case 2:// Diamond
                    this.product.priceSale = parseFloat(info[2].values[pos].price);
                    break;
                case 3:// Preferred
                    this.product.priceSale = parseFloat(info[3].values[pos].price);
                    break;
            }
        }
        else {
            this.product.priceSale = '';
        }
    };
    ProductViewSpectrumSalineComponent.prototype.calculateQuantity = function (quantity) {
        var pos;
        if (quantity >= 250 && quantity <= 499) {
            pos = 0;
        }
        else if (quantity >= 500 && quantity <= 999) {
            pos = 1;
        }
        else if (quantity >= 1000) {
            pos = 2;
        }
        return pos;
    };
    ProductViewSpectrumSalineComponent.prototype.excludeClients = function (listCustomers, idSupplier, product) {
        var listClients = [];
        if (idSupplier === 7 && product.father === 'Spectrum Saline') {
            listClients = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](listCustomers, function (c) {
                return c.membership.idMembership !== 1;
            });
            this.listCustomers = listClients;
            this.listCustomersAux = this.listCustomers;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewSpectrumSalineComponent.prototype, "selectedFiles", void 0);
    ProductViewSpectrumSalineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-spectrum-saline',
            template: __webpack_require__(/*! ./product-view-spectrum-saline.component.html */ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.html"),
            styles: [__webpack_require__(/*! ./product-view-spectrum-saline.component.scss */ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_17__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerService"]])
    ], ProductViewSpectrumSalineComponent);
    return ProductViewSpectrumSalineComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view/product-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n              <br>\n              <i>{{ product.name }}</i>\n            </h3>\n          </div>\n          <!-- image -->\n         <!-- <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>-->\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Material' | translate}}</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\" [hidden]=\"product.url === null\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' | translate }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\"row info-content \">\n            <input class=\"form-control\" type=\"text\" maxlength=\"20\" placeholder=\"{{ 'Enter name patient' | translate }}\" [(ngModel)]=\"product.patient\"\n              required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-lg-3\">\n          <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n          <div class=\"row info-content \" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter name customer' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled required>\n          </div>\n          <div class=\"row info-content \" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\"\n              required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-lg-4\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row info-content \">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <h5 class=\"padding-price\" [hidden]=\"product.priceSale===''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h5>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Right Eye' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-lg-2 margin-col padding-col\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                  [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div *ngFor=\"let parameter of product.parametersRight\" class=\"col-lg-2 padding-col margin-col\">\n              <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                <!--param name-->\n                <div class=\"row \">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div class=\"row select-values\" *ngIf=\"parameter.type === 'selected'\">\n                  <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                    [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\"\n                    [required]=\"product.eyeRight\">\n                    {{item}}\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-lg-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Left Eye' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-lg-2  margin-col padding-col\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n              </div>\n              <div class=\"row\">\n                <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                  [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div class=\"col-lg-2 padding-col margin-col\" *ngFor=\"let parameter of product.parametersLeft\">\n              <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                <!--param name-->\n                <div class=\"row\">\n                  <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n                </div>\n                <!--param values-->\n                <div class=\"row select-values\">\n                  <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\"\n                    [required]=\"product.eyeLeft\" [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\"\n                    placeholder=\"{{ 'Select value' | translate }}\">\n                    {{item}}\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--row (comments)\n      <div class=\"row comments\">\n        <div class=\"col-md-12\">\n          <div class=\"row header\">\n            <div class=\"col-md-6\">\n              <div class=\"title\">{{ 'Comments Right Eye' | translate }}</div>\n              <textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                placeholder=\"{{ 'Enter right eye observations' | translate }}\"></textarea>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"title\">{{ 'Comments Left Eye' | translate }}</div>\n              <textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                placeholder=\"{{ 'Enter left eye observations' | translate }}\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12 buy-btns\">\n          <button [hidden]=\"user.role.idRole === 3\" class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase margin-button\" (click)=\"formIsValid() && addToCart(1)\"\n            [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i> {{ 'Add to cart' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view/product-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 3em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; }\n  .padding-col {\n    padding-left: 3em; }\n  .margin-button {\n    margin-bottom: 3%; } }\n.margin-button {\n  margin-right: 2%; }\n.margin-col {\n  margin-left: 1%;\n  margin-right: 1%; }\n.preview-pic {\n  -webkit-box-flex: 1;\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 3em; }\n.ng-select {\n  width: 100%; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.product-info .padding-price {\n    padding-top: 1.1em;\n    font-weight: bold; }\n.comments {\n  padding-top: 20px; }\nimg {\n  max-width: 100%; }\n.select-values {\n  padding-left: 0px; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.card {\n  background: #fbfbfb;\n  padding: 2em;\n  line-height: 1.5em; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

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
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component */ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
    function ProductViewComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, modalService, alertify, notification, translate, spinner) {
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.spinner = spinner;
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.axesXtensa = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_13__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        this.getProducts();
        /* var product xtensa */
        this.setAxesXtensa();
    };
    ProductViewComponent.prototype.setAxesXtensa = function () {
        this.axesXtensa = [{ "values": ["5º", "10º", "15º", "20º", "25º", "30º", "35º", "40º", "45º", "50º", "55º", "60º", "65º", "70º", "75º", "80º", "85º", "90º", "95º", "100º", "105º", "110º", "115º", "120º", "125º", "130º", "135º", "140º", "145º", "150º", "155º", "160º", "165º", "170º", "175º", "180º"] },
            { "values": ["10º", "20º", "30º", "40º", "50º", "60º", "70º", "80º", "90º", "100º", "110º", "120º", "130º", "140º", "150º", "160º", "170º", "180º"] }];
    };
    ProductViewComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.id = +this.route.snapshot.paramMap.get('id');
        this.productService.findById$(this.id).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
                //this.setCodeProduct();
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewComponent.prototype.getProductView = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        var orderCylinder;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        orderCylinder = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.product.parametersRight, { name: 'Cylinder (D)' });
        if (orderCylinder != null) {
            orderCylinder.values.reverse();
        }
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        orderCylinder = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.product.parametersLeft, { name: 'Cylinder (D)' });
        if (orderCylinder != null) {
            orderCylinder.values.reverse();
        }
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
        this.addSign();
    };
    /*setCodeProduct() {
      const productCode = this.product.codeSpectrum;
      const productCategory = this.product.category;
      let prCode;
      this.productService.findBySupplierAndInViewAndCategory$(1, false, productCategory.idCategory).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.productsCode = res.data;
          _.each(this.productsCode, function (pr) {
            if (_.includes(pr.codeSpectrum, productCode)) {
              prCode = pr;
            }
          });
          this.productCode = prCode;
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }*/
    ProductViewComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        /*if (this.product.father === "Xtensa" && parameter.name === 'Cylinder (D)'){
          this.setValuesAxesXtensa(eye, value);
        }*/
    };
    /*setValuesAxesXtensa(eye, value) {
      if (eye === 'right') {
        this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesRight.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesRight.values = this.axesXtensa[1].values;
        }
      } else {
        this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesLeft.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesLeft.values = this.axesXtensa[1].values;
        }
      }
    }*/
    ProductViewComponent.prototype.setValueEye = function (eye) {
        if (eye === 'right') {
            this.product.eyeRight = !this.product.eyeRight;
            if (!this.product.eyeRight) {
                this.clean('right');
            }
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
            if (!this.product.eyeLeft) {
                this.clean('left');
            }
        }
    };
    ProductViewComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                        return !(u.cardCode === null || u.cardCode === '');
                    });
                }
            });
        }
    };
    ProductViewComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        //let productCode = this.productCode;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.openModal(type);
    };
    ProductViewComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationMarkennovyComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient || !this.client) {
            return false;
        }
        if (this.product.eyeRight) {
            if (this.product.quantityRight === undefined) {
                return false;
            }
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.product.quantityRight) {
                isValid = false;
            }
        }
        if (this.product.eyeLeft) {
            if (this.product.quantityLeft === undefined) {
                return false;
            }
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
            if (!this.product.quantityLeft) {
                isValid = false;
            }
        }
        return isValid;
    };
    ProductViewComponent.prototype.clean = function (eye) {
        var parameters;
        if (eye === 'right') {
            parameters = this.product.parametersRight;
            this.product.quantityRight = '';
            this.product.observationsRight = '';
        }
        else {
            parameters = this.product.parametersLeft;
            this.product.quantityLeft = '';
            this.product.observationsLeft = '';
        }
        // parameter
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parameters, function (param) {
            param.selected = null;
            param.sel = null;
        });
        if (eye === 'right') {
            this.product.parametersRight = parameters;
        }
        else {
            this.product.parametersLeft = parameters;
        }
    };
    ProductViewComponent.prototype.addSign = function () {
        var parametersR = this.product.parametersRight;
        var auxNeg = [];
        var auxPos = [];
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parametersR, function (param, index) {
            if (param.name === 'Sphere (D)') {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](param.values, function (item) {
                    if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](item, '-') || item === '0.00') {
                        auxNeg.push(item);
                    }
                    else {
                        item = '+' + item;
                        auxPos.push(item);
                    }
                });
                lodash__WEBPACK_IMPORTED_MODULE_1__["reverse"](auxNeg);
                auxPos = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](auxPos, auxNeg);
                parametersR[index].values = auxPos;
            }
        });
        this.product.parametersRight = parametersR;
        // Left
        var parametersL = this.product.parametersLeft;
        var auxNegL = [];
        var auxPosL = [];
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](parametersL, function (param, index) {
            if (param.name === 'Sphere (D)') {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](param.values, function (item) {
                    if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](item, '-') || item === '0.00') {
                        auxNegL.push(item);
                    }
                    else {
                        item = '+' + item;
                        auxPosL.push(item);
                    }
                });
                lodash__WEBPACK_IMPORTED_MODULE_1__["reverse"](auxNegL);
                auxPosL = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](auxPosL, auxNegL);
                parametersL[index].values = auxPosL;
            }
        });
        this.product.parametersLeft = parametersL;
    };
    ProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__(/*! ./product-view.component.html */ "./src/app/products/product-view/product-view.component.html"),
            styles: [__webpack_require__(/*! ./product-view.component.scss */ "./src/app/products/product-view/product-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_14__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerService"]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "./src/app/products/products-lists-internal/products-lists-internal.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/products/products-lists-internal/products-lists-internal.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor = \"rgba(51, 51, 51, 0.8)\"\n  size = \"medium\"\n  color = \"#fff\"\n  type = \"ball-beat\"\n></ngx-spinner>\n<br>\n<br>\n<br>\n<div class=\"margin-breadcrumb\">\n\t<div class=\"header-body\">\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li class=\"breadcrumb-item\">\n\t\t\t\t<a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\t\t\t\t<a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\"><i class=\"fa fa-dashboard\"></i> {{ 'Products List' | translate }}</a>\n\t\t\t</li>\n\t\t\t<li class=\"breadcrumb-item active\" [hidden]=\"idSupplier === 1\">\n        <i class=\"fa fa-edit\"></i> {{ nameSupplier }}\n      </li>\n\n      <!--Aditionales Markennovy-->\n      <li class=\"breadcrumb-item active\" [hidden]=\"idSupplier !== 1 || currentFather !== ''\">\n          <i class=\"fa fa-edit\"></i> {{ nameSupplier }}\n        </li>\n      <li class=\"breadcrumb-item active\" [hidden]=\"idSupplier !== 1 || showFathersMarkennovy\">\n        <a class=\"link\"  href=\"Javascript:void(0)\" (click)=\"backToFathersHeader()\"><i class=\"fa fa-edit\"></i> {{ nameSupplier }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\" [hidden]=\"idSupplier !== 1 || showFathersMarkennovy\">\n        <a class=\"link\"  href=\"Javascript:void(0)\" (click)=\"showPackingsMarkennovy = true\"><i class=\"fa fa-edit\"></i> {{ currentFather }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\" [hidden]=\"idSupplier !== 1 || showFathersMarkennovy || !currentPacking || showPackingsMarkennovy\">\n        <i class=\"fa fa-edit\"></i> {{ currentPacking }}\n      </li>\n\t\t</ol>\n\t</div>\n</div>\n<div class=\"middleBar\" [hidden]=\"showSuppliers\">\n  <div class=\"row display-table\">\n    <div class=\"col-sm-1 vertical-align text-left hidden-xs\">\n    </div>\n    <!-- end col -->\n    <div class=\"col-sm-6 vertical-align text-center\">\n      <form>\n        <div class=\"row grid-space-1\">\n          <div class=\"col col-xl-12 col-lg-12 search\" [hidden]=\"showPackingsMarkennovy\">\n            <input type=\"text\" class=\"form-control\" [hidden]=\"idSupplier === 1\" (keyup)=\"filter('byName')\" placeholder=\" {{ 'Enter product name...' | translate }}\" name=\"filterName\" [(ngModel)]=\"filterName\">\n            <input type=\"text\" class=\"form-control\" [hidden]=\"idSupplier !== 1 || !showFathersMarkennovy\" (keyup)=\"filterByFather('byName')\" placeholder=\" {{ 'Enter product name...' | translate }}\" name=\"filterName\" [(ngModel)]=\"filterName\">\n            <input type=\"text\" class=\"form-control\" [hidden]=\"idSupplier !== 1 || showFathersMarkennovy\" (keyup)=\"filterByPacking(currentPacking)\" placeholder=\" {{ 'Enter product name...' | translate }}\" name=\"filterName\" [(ngModel)]=\"filterName\">\n            <i class=\"fa fa-search\"></i>\n          </div>\n        </div>\n        <!-- end row -->\n      </form>\n    </div>\n    <!-- end col -->\n  </div>\n  <!--<div class=\"row display-table\" [hidden]=\"idSupplier !== 1 || !showFathersMarkennovy\">\n\n     <div class=\"filter\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadioMarkennovy1\" name=\"customRadio\" value=\"3\" class=\"custom-control-input\" (change)=\"filterByFather('All')\" checked>\n        <label class=\"custom-control-label\" for=\"customRadioMarkennovy1\">{{ 'All' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"filter\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadioMarkennovy2\" name=\"customRadio\" value=\"0\" class=\"custom-control-input\" (change)=\"filterByFather('Monthly')\">\n        <label class=\"custom-control-label\" for=\"customRadioMarkennovy2\">{{ 'Monthly' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"filter\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadioMarkennovy3\" name=\"customRadio\" value=\"1\" class=\"custom-control-input\" (change)=\"filterByFather('3-Monthly')\">\n        <label class=\"custom-control-label\" for=\"customRadioMarkennovy3\">{{ '3-Monthly' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"filter\" >\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadioMarkennovy4\" name=\"customRadio\" value=\"2\" class=\"custom-control-input\" (change)=\"filterByFather('Conventional')\">\n        <label class=\"custom-control-label\" for=\"customRadioMarkennovy4\">{{ 'Conventional' | translate }}</label>\n      </div>\n    </div>\n  </div>-->\n  <!-- end  row -->\n</div>\n\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!--THUMBNAILS PRODUCTS-->\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\n      <div class=\"row\">\n\n        <!-- NEW FILTER-->\n        <div class=\"col-md-4\" [hidden]=\"!showFathersMarkennovy || !showFilterMarkennovy\" *ngFor=\"let filter of listFilterMarkennovy\">\n          <div class=\"mb-4\">\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"filterByFather(filter.replacementPeriod)\">\n                <i class=\"prodTeaser-more\">{{ 'View' | translate }}</i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ filter.mainImg }}\"\n                />\n              </div>\n              <h4 class=\"product-name\">\n                {{ filter.replacementPeriod | translate }}\n              </h4>\n            </a>\n          </div>\n        </div>\n\n        <!--Only products father of Markennovy-->\n        <div [hidden]=\"!showFathersMarkennovy || showFilterMarkennovy\" class=\"col-md-4\" *ngFor=\"let product of productsMarkennovy\">\n          <div class=\"mb-4\">\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"redirectPacking(product)\">\n                <i class=\"prodTeaser-more\">{{ 'View' | translate }}</i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ product.mainImg }}\"\n                />\n              </div>\n              <h4 class=\"product-name\">\n                {{ product.name }}\n              </h4>\n            </a>\n          </div>\n        </div>\n\n        <!--Only packing markennovy-->\n        <div [hidden]=\"!showPackingsMarkennovy\" class=\"col-md-4\" *ngFor=\"let packing of packings\">\n          <div class=\"mb-4\">\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"redirectFather(packing.product, packing.type)\">\n                <i class=\"prodTeaser-more\">{{ 'View' | translate }}</i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ packing.product.mainImg }}\"\n                />\n              </div>\n              <h4 class=\"product-name\">\n                {{ packing.type }}\n              </h4>\n            </a>\n          </div>\n        </div>\n\n        <!--Products without Markennovy-->\n        <div [hidden]=\"showFathersMarkennovy || showPackingsMarkennovy || (product.status !== 1 && user.role.idRole !== 1)\" class=\"col-md-4\" *ngFor=\"let product of products\">\n          <div class=\"mb-4\" >\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"redirectView(product)\">\n                <i class=\"prodTeaser-more\">{{ 'View' | translate }}</i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ product.mainImg }}\"\n                />\n              </div>\n                <h4 class=\"product-name\">\n                  <i class=\"fa fa-exclamation-triangle\" placement=\"top\" ngbTooltip=\"{{'Inactive' | translate}}\" [hidden]=\"product.status === 1\"></i>\n                  {{ product.name }}\n                </h4>\n            </a>\n            <div class=\"card-body\">\n              <p class=\"card-text\"> {{ product.descriptionShort }}</p>\n              <div class=\"price-wrap h4\" [hidden]=\"user.role.idRole!==3\">\n                <span [hidden]=\"product.supplier.idSupplier === 2\" class=\"price-new\">{{ product.priceSale | currency : \"USD $\" }}</span>\n              </div>\n              <div class=\"product-btns\">\n                <div class=\"btn-group\">\n                  <button (click)=\"redirectView(product)\" [hidden]=\"user.role.idRole === 3 || user.role.idRole === 2\" type=\"button\" class=\"btn btn-primary\">{{ 'View' | translate}}</button>\n                  <!--\n                  <button (click)=\"open(product,'edit')\" [hidden]=\"user.role.idRole === 3 || user.role.idRole === 2\"  type=\"button\" class=\"btn btn-sm btn-outline-secondary\">{{ 'Edit' | translate }}</button>\n                  -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products-lists-internal/products-lists-internal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/products/products-lists-internal/products-lists-internal.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.margin-list {\n  margin-left: 20% !important; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.search {\n  padding-bottom: 1.5rem; }\n.search i {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    color: #ced4da; }\n.filter {\n  padding-top: 7px; }\n.middleBar {\n  padding: 0px 25px 15px 35px; }\n.middleBar .display-table {\n    padding-right: 20px !important; }\n.middleBar > div:nth-child(2) {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 0 0 1rem 10rem;\n    width: 93%; }\n.middleBar > div:nth-child(3) {\n    display: -webkit-box;\n    display: flex;\n    padding: 0 0 1rem 10rem; }\n.middleBar > div:nth-child(3) div {\n      margin-right: 3%; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.btn-align {\n  text-align: center;\n  padding-bottom: 20px; }\n.card {\n  margin-top: 30px; }\n.card-img-top {\n  border-radius: 40px;\n  cursor: pointer;\n  height: 220px;\n  width: 80%;\n  margin-left: 10%;\n  padding: 5%; }\n.box-shadow:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1, 1);\n  transform: scale(1.2, 1.2);\n  -webkit-transition: all 0.8s cubic-bezier(0.1, -0.5, 0, 3);\n  transition: all 0.8s cubic-bezier(0.1, -0.5, 0, 3);\n  opacity: 1;\n  z-index: 1;\n  -webkit-filter: contrast(100%);\n          filter: contrast(100%); }\n.card-body {\n  padding-top: 2px; }\n.product-name {\n  text-align: center;\n  color: #1756a6;\n  padding-top: 10px;\n  cursor: pointer;\n  height: 75px; }\n.card-product:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  visibility: hidden; }\n.card-product .price-new, .card-product .price {\n  margin-right: 5px; }\n.price-base {\n  color: #999; }\n.card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 220px;\n  text-align: center; }\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .action-wrap {\n  padding-top: 4px;\n  margin-top: 4px; }\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .title {\n  margin-top: 0; }\nbody {\n  margin-top: 50px; }\n.glyphicon {\n  margin-right: 10px; }\n.panel-body {\n  padding: 0px; }\n.panel-body table tr td {\n  padding-left: 15px; }\n.panel-body .table {\n  margin-bottom: 0px; }\n.product-btns {\n  text-align: right; }\n.fa-exclamation-triangle {\n  color: #cc0000; }\n.box {\n  border: 1px solid #555657;\n  border-radius: 1.45em;\n  z-index: 1; }\n.prodTeaser {\n  background: #fff;\n  border: 1px solid #dcddde;\n  box-shadow: inset 0 0 0 0 transparent;\n  height: 18vw;\n  padding: 18%;\n  position: relative;\n  -webkit-transition: all 0s;\n  transition: all 0s;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  overflow: hidden; }\n.prodTeaser-overlay {\n  background: rgba(0, 174, 239, 0.5);\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  position: absolute;\n  overflow: hidden; }\n.prodTeaser-overlay:hover {\n    opacity: 1;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer; }\n.prodTeaser-inner:focus,\na:active,\na:hover {\n  outline: 0;\n  cursor: pointer; }\n.card-img-top-teaser {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center; }\n.prodTeaser-more {\n  color: #199bd7;\n  background: #fff;\n  border-radius: 50%;\n  font-size: 1.5em;\n  line-height: 86px;\n  width: 90px;\n  height: 90px;\n  top: 50%;\n  left: 50%;\n  margin: -45px 0 0 -45px;\n  display: block;\n  position: absolute;\n  -webkit-transition: all 0.35s ease-out;\n  transition: all 0.35s ease-out;\n  -webkit-box-direction: normal;\n  opacity: 1; }\n.prodTeaser-more:hover {\n    position: absolute;\n    -webkit-transform: translateY(-25%);\n            transform: translateY(-25%); }\n.prodTeaser-inner {\n  max-width: 100%;\n  -webkit-transition: all 0.35s ease-out;\n  transition: all 0.35s ease-out;\n  -webkit-box-direction: normal; }\n@media screen and (min-width: 296px) and (max-width: 765px) {\n  .card-img-top-teaser {\n    height: 50%;\n    width: 50%;\n    opacity: 0.9;\n    margin-left: 20%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center; } }\n.custom-control-label {\n  font-size: 23px;\n  margin-left: 10px; }\n.custom-control-label:after,\n.custom-control-label:before {\n  height: 1.7rem;\n  width: 1.7rem; }\n.custom-control-label:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/products/products-lists-internal/products-lists-internal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/products/products-lists-internal/products-lists-internal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductsListInternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListInternalComponent", function() { return ProductsListInternalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/edit-product/edit-product.component */ "./src/app/products/modals/edit-product/edit-product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/edit-product/edit-product-magic-look/edit-product-magic-look.component */ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_euclid_edit_product_euclid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/edit-product/edit-product-euclid/edit-product-euclid.component */ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_europa_edit_product_europa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/edit-product/edit-product-europa/edit-product-europa.component */ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_spectrum_saline_edit_product_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component */ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_medmont_edit_product_medmont_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/edit-product/edit-product-medmont/edit-product-medmont.component */ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProductsListInternalComponent = /** @class */ (function () {
    function ProductsListInternalComponent(productService, userStorageService, modalService, router, spinner, route) {
        this.productService = productService;
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.products = new Array();
        this.productsAux = new Array();
        this.productsMarkennovy = new Array();
        this.productsAuxMarkennovy = new Array();
        this.listFilterMarkennovy = [{ replacementPeriod: 'All', mainImg: 'assets/images/suppliers/markennovy.png' },
            { replacementPeriod: 'Monthly', mainImg: 'assets/images/suppliers/markennovy.png' },
            { replacementPeriod: 'Monthly Disposable', mainImg: 'assets/images/suppliers/markennovy.png' },
            { replacementPeriod: '3-Monthly', mainImg: 'assets/images/suppliers/markennovy.png' },
            { replacementPeriod: 'Conventional', mainImg: 'assets/images/suppliers/markennovy.png' }];
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductsListInternalComponent.prototype.ngOnInit = function () {
        this.idSupplier = +this.route.snapshot.paramMap.get('idSupplier');
        this.getProducts();
        this.filterName = '';
        this.currentFather = '';
        this.currentPacking = 'All';
        this.showFilterMarkennovy = true;
    };
    ProductsListInternalComponent.prototype.userIsAdmin = function () {
        return this.user.role.idRole === 1;
    };
    ProductsListInternalComponent.prototype.setProductsFatherMarkennovy = function () {
        var productsSaphirRx = [];
        var productsGentle80 = [];
        var productsGentle59 = [];
        var productsBluGen = [];
        var productsBluKidz = [];
        var productsXtensa = [];
        var productsXtensaRx = [];
        var productsSaphir = [];
        var productsQuattroX3 = [];
        var productsQuattroX1 = [];
        var productsJade = [];
        var userIsAdmin = this.userIsAdmin();
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.products, function (product) {
            if (userIsAdmin || product.status) {
                switch (product.father) {
                    case 'Saphir Rx':
                        productsSaphirRx.push(product);
                        break;
                    case 'Gentle 80':
                        productsGentle80.push(product);
                        break;
                    case 'Gentle 59':
                        productsGentle59.push(product);
                        break;
                    case 'Blu:gen':
                        productsBluGen.push(product);
                        break;
                    case 'Blu:kidz':
                        productsBluKidz.push(product);
                        break;
                    case 'Xtensa':
                        productsXtensa.push(product);
                        break;
                    case 'Xtensa Rx':
                        productsXtensaRx.push(product);
                        break;
                    case 'Saphir':
                        productsSaphir.push(product);
                        break;
                    case 'Quattro 3-Monthly':
                        productsQuattroX3.push(product);
                        break;
                    case 'Quattro Conventional':
                        productsQuattroX1.push(product);
                        break;
                    case 'Jade':
                        productsJade.push(product);
                        break;
                }
            }
        });
        if (productsSaphirRx.length) {
            this.productsMarkennovy.push({ name: "Saphir Rx",
                mainImg: "assets/images/products/markennovy/saphirRx.png",
                replacementPeriod: "Monthly",
                father: "Saphir Rx" });
        }
        if (productsGentle80.length) {
            this.productsMarkennovy.push({ name: "Gentle 80",
                mainImg: "assets/images/products/markennovy/Mark’ennovy-Gentle-80.png",
                replacementPeriod: "Monthly",
                father: "Gentle 80" });
        }
        if (productsGentle59.length) {
            this.productsMarkennovy.push({ name: "Gentle 59",
                mainImg: "assets/images/products/markennovy/gentle_59_hi_ret_2.png",
                replacementPeriod: "Monthly",
                father: "Gentle 59" });
        }
        if (productsBluGen.length) {
            this.productsMarkennovy.push({ name: "Blu:gen",
                mainImg: "assets/images/products/markennovy/blu-gen.png",
                replacementPeriod: "Monthly",
                father: "Blu:gen" });
        }
        if (productsBluKidz.length) {
            this.productsMarkennovy.push({ name: "Blu:kidz",
                mainImg: "assets/images/products/markennovy/blu-kidz.png",
                replacementPeriod: "Monthly",
                father: "Blu:kidz" });
        }
        if (productsXtensa.length) {
            this.productsMarkennovy.push({ name: "Xtensa",
                mainImg: "assets/images/products/markennovy/xtensa.png",
                replacementPeriod: "Monthly Disposable",
                father: "Xtensa" });
        }
        if (productsXtensaRx.length) {
            this.productsMarkennovy.push({ name: "Xtensa Rx",
                mainImg: "assets/images/products/markennovy/xtensa.png",
                replacementPeriod: "Monthly",
                father: "Xtensa Rx" });
        }
        if (productsJade.length) {
            this.productsMarkennovy.push({ name: "Jade",
                mainImg: "assets/images/products/markennovy/jade.png",
                replacementPeriod: "Monthly Disposable",
                father: "Jade" });
        }
        if (productsSaphir.length) {
            this.productsMarkennovy.push({ name: "Saphir",
                mainImg: "assets/images/products/markennovy/saphir.png",
                replacementPeriod: "3-Monthly",
                father: "Saphir" });
        }
        if (productsQuattroX3.length) {
            this.productsMarkennovy.push({ name: "Quattro 3-Monthly",
                mainImg: "assets/images/products/markennovy/quattro.png",
                replacementPeriod: "3-Monthly",
                father: "Quattro 3-Monthly" });
        }
        if (productsQuattroX1.length) {
            this.productsMarkennovy.push({ name: "Quattro x1Conv",
                mainImg: "assets/images/products/markennovy/quattro-conventional.png",
                replacementPeriod: "Conventional",
                father: "Quattro Conventional" });
        }
        this.productsAuxMarkennovy = this.productsMarkennovy;
    };
    ProductsListInternalComponent.prototype.getProducts = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findBySupplierInView$(this.idSupplier, true).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.setPrice();
                if (_this.idSupplier === 1) {
                    _this.setProductsFatherMarkennovy();
                    _this.showFathersMarkennovy = true;
                    _this.showFilterMarkennovy = true;
                }
                _this.nameSupplier = _this.products[0] ? _this.products[0].supplier.companyName : '';
                if (_this.idSupplier === 7 && _this.user.role.idRole === 3) {
                    _this.excludeProduct();
                }
                else {
                    _this.productsAux = _this.products;
                }
                if (_this.idSupplier === 2) {
                    _this.products = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](_this.products, ['idProduct'], ['desc']);
                }
                else {
                    _this.products = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](_this.products, ['idProduct'], ['asc']);
                }
                _this.spinner.hide();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListInternalComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership_1 = this.currentUser.membership.idMembership;
            var priceFrom_1;
            var priceUp_1;
            lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.products, function (product) {
                if (product.supplier.idSupplier !== 5) {
                    switch (membership_1) {
                        case 1:
                            product.priceSale = product.price1;
                            break;
                        case 2:
                            product.priceSale = product.price2;
                            break;
                        case 3:
                            product.priceSale = product.price3;
                            break;
                    }
                }
                else {
                    var info = JSON.parse(product.infoAditional);
                    switch (membership_1) {
                        case 1:// Gold
                            priceFrom_1 = parseFloat(info[1].values[2].price);
                            priceUp_1 = parseFloat(info[1].values[0].price);
                            break;
                        case 2:// Diamond
                            priceFrom_1 = parseFloat(info[2].values[2].price);
                            priceUp_1 = parseFloat(info[2].values[0].price);
                            break;
                        case 3:// Preferred
                            priceFrom_1 = parseFloat(info[3].values[2].price);
                            priceUp_1 = parseFloat(info[3].values[0].price);
                            break;
                    }
                }
            });
            this.priceFrom = priceFrom_1;
            this.priceUp = priceUp_1;
        }
    };
    ProductsListInternalComponent.prototype.redirectView = function (product) {
        switch (product.supplier.idSupplier) {
            case 1:// markennovy
                this.router.navigate(['/products/' + product.idProduct + '/product-view']);
                break;
            case 2:// europa
                this.router.navigate(['/products/' + product.idProduct + '/product-view-europa']);
                break;
            case 3:// Lenticon
                this.router.navigate(['/products/' + product.idProduct + '/product-view-lenticon']);
                break;
            case 4:// euclid
                this.router.navigate(['/products/' + product.idProduct + '/product-view-euclid']);
                break;
            case 5:// magic look
                this.router.navigate(['/products/' + product.idProduct + '/product-view-magic']);
                break;
            case 6:// magic blue
                this.router.navigate(['/products/' + product.idProduct + '/product-view-blue']);
                break;
            case 7:// fluo strips y spectrum saline
                if (product.father === 'Fluo Strips') {
                    this.router.navigate(['/products/' + product.idProduct + '/product-view-fluo-strips']);
                }
                if (product.father === 'Spectrum Saline') {
                    this.router.navigate(['/products/' + product.idProduct + '/product-view-spectrum-saline']);
                }
                if (product.father === 'Medmont') {
                    this.router.navigate(['/products/' + product.idProduct + '/product-view-medmont']);
                }
                break;
        }
    };
    ProductsListInternalComponent.prototype.open = function (product, action) {
        var _this = this;
        var idSupplier = product.supplier.idSupplier;
        switch (idSupplier) {
            case 1: // Markennovy
            case 3: // Lenticon
            case 6:// Blue Light
                var modalRefGeneral = this.modalService.open(_modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], {
                    size: 'lg',
                    windowClass: 'modal-content-border',
                    backdrop: 'static', keyboard: false
                });
                modalRefGeneral.componentInstance.product = product;
                modalRefGeneral.componentInstance.action = action;
                modalRefGeneral.result.then(function (result) {
                    _this.getProducts();
                }, function (reason) { });
                break;
            case 2:// Europa
                var modalRefEuropa = this.modalService.open(_modals_edit_product_edit_product_europa_edit_product_europa_component__WEBPACK_IMPORTED_MODULE_11__["EditProductEuropaComponent"], {
                    size: 'lg',
                    windowClass: 'modal-content-border',
                    backdrop: 'static', keyboard: false
                });
                modalRefEuropa.componentInstance.product = product;
                modalRefEuropa.componentInstance.action = action;
                modalRefEuropa.result.then(function (result) {
                    _this.getProducts();
                }, function (reason) { });
                break;
            case 4:// Euclid
                var modalRefEuclid = this.modalService.open(_modals_edit_product_edit_product_euclid_edit_product_euclid_component__WEBPACK_IMPORTED_MODULE_10__["EditProductEuclidComponent"], {
                    size: 'lg',
                    windowClass: 'modal-content-border',
                    backdrop: 'static', keyboard: false
                });
                modalRefEuclid.componentInstance.product = product;
                modalRefEuclid.componentInstance.action = action;
                modalRefEuclid.result.then(function (result) {
                    _this.getProducts();
                }, function (reason) { });
                break;
            case 5:// Magic Look
                var modalRefMagic = this.modalService.open(_modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_9__["EditProductMagicLookComponent"], {
                    size: 'lg',
                    windowClass: 'modal-content-border',
                    backdrop: 'static', keyboard: false
                });
                modalRefMagic.componentInstance.product = product;
                modalRefMagic.componentInstance.action = action;
                modalRefMagic.result.then(function (result) {
                    _this.getProducts();
                }, function (reason) { });
                break;
            case 7:// Fluo Strips
                if (product.father === 'Fluo Strips') {
                    var modalRefGeneralFluo = this.modalService.open(_modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], {
                        size: 'lg',
                        windowClass: 'modal-content-border',
                        backdrop: 'static', keyboard: false
                    });
                    modalRefGeneralFluo.componentInstance.product = product;
                    modalRefGeneralFluo.componentInstance.action = action;
                    modalRefGeneralFluo.result.then(function (result) {
                        _this.getProducts();
                    }, function (reason) { });
                }
                else if (product.father === 'Spectrum Saline') {
                    var modalRefSpectrum = this.modalService.open(_modals_edit_product_edit_product_spectrum_saline_edit_product_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_12__["EditProductSpectrumSalineComponent"], {
                        size: 'lg',
                        windowClass: 'modal-content-border',
                        backdrop: 'static', keyboard: false
                    });
                    modalRefSpectrum.componentInstance.product = product;
                    modalRefSpectrum.componentInstance.action = action;
                    modalRefSpectrum.result.then(function (result) {
                        _this.getProducts();
                    }, function (reason) { });
                }
                else {
                    var modalRefMedmont = this.modalService.open(_modals_edit_product_edit_product_medmont_edit_product_medmont_component__WEBPACK_IMPORTED_MODULE_13__["EditProductMedmontComponent"], {
                        size: 'lg',
                        windowClass: 'modal-content-border',
                        backdrop: 'static', keyboard: false
                    });
                    modalRefMedmont.componentInstance.product = product;
                    modalRefMedmont.componentInstance.action = action;
                    modalRefMedmont.result.then(function (result) {
                        _this.getProducts();
                    }, function (reason) { });
                }
                break;
        }
    };
    ProductsListInternalComponent.prototype.getItems = function () {
        var val = this.filterName;
        if (val && val.trim() !== '') {
            this.productsMarkennovy = this.productsMarkennovy.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ProductsListInternalComponent.prototype.filter = function (type) {
        this.products = this.productsAux;
        var val = this.filterName;
        if (val && val.trim() !== '') {
            this.products = this.products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ProductsListInternalComponent.prototype.filterByFather = function (type) {
        var _this = this;
        var products = [];
        var val = this.filterName;
        if (this.showFathersMarkennovy) {
            this.showFilterMarkennovy = false;
            products = this.productsAuxMarkennovy;
        }
        else {
            products = this.productsAux;
        }
        if (type !== 'byName') {
            this.filterMarkennovy = type;
        }
        if (this.filterMarkennovy === 'All') {
            if (val && val.trim() !== '') {
                products = products.filter(function (item) {
                    return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
                });
            }
            if (this.showFathersMarkennovy) {
                this.productsMarkennovy = products;
            }
            else {
                this.products = products;
            }
            return;
        }
        products = products.filter(function (item) {
            return item.replacementPeriod === _this.filterMarkennovy;
        });
        if (val && val.trim() !== '') {
            products = products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        if (this.showFathersMarkennovy) {
            this.productsMarkennovy = products;
            this.showFilterMarkennovy = false;
        }
        else {
            this.products = products;
        }
    };
    ProductsListInternalComponent.prototype.filterByPacking = function (type) {
        var _this = this;
        this.currentPacking = type;
        var products = this.productsAux;
        var val = this.filterName;
        products = products.filter(function (item) {
            return item.father === _this.currentFather;
        });
        if (this.currentFather === 'Saphir Rx' && type === 'All') {
            var productsBlister = [];
            var products3pk = [];
            var productsAll = [];
            var typeB_1 = 'Blister';
            var type3pk_1 = '3pk';
            // Filtro de listas por tipo de producto
            productsBlister = products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(typeB_1.toLowerCase()) > -1));
            });
            products3pk = products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(type3pk_1.toLowerCase()) > -1));
            });
            // Ordenar cada lista por tipo de producto
            productsBlister = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](productsBlister, ['idProduct'], ['asc']);
            products3pk = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](products3pk, ['idProduct'], ['asc']);
            for (var i = 0; i < productsBlister.length; i++) {
                var productBlister = productsBlister[i];
                var product3pk = products3pk[i];
                productsAll.push(productBlister);
                productsAll.push(product3pk);
            }
            this.products = productsAll;
            return;
        }
        else if (type === 'All') {
            this.products = products;
            if (val && val.trim() !== '') {
                this.products = products.filter(function (item) {
                    return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
                });
            }
            return;
        }
        this.products = products.filter(function (item) {
            return ((item.name.toLowerCase().indexOf(type.toLowerCase()) > -1));
        });
        if (val && val.trim() !== '') {
            this.products = this.products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        if (this.currentFather === 'Saphir Rx' && (type === 'Blister' || type === '3pk')) {
            this.products = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](this.products, ['idProduct'], ['asc']);
        }
    };
    ProductsListInternalComponent.prototype.redirectPacking = function (product) {
        this.packings = [];
        this.packings.push({ 'product': product, 'type': 'All' });
        if (product.father === 'Saphir Rx' || product.father === 'Gentle 80' || product.father === 'Gentle 59' ||
            product.father === 'Blu:gen' || product.father === 'Blu:kidz' || product.father === 'Xtensa Rx' ||
            product.father === 'Saphir' || product.father === 'Quattro 3-Monthly' || product.father === 'Jade'
            || product.father === 'Xtensa') {
            this.packings.push({ 'product': product, 'type': 'Blister' });
        }
        if (product.father === 'Xtensa' || product.father === 'Jade') {
            this.packings.push({ 'product': product, 'type': '6pk' });
        }
        if (product.father === 'Saphir Rx' || product.father === 'Gentle 80' || product.father === 'Gentle 59' ||
            product.father === 'Blu:gen' || product.father === 'Blu:kidz' || product.father === 'Xtensa Rx') {
            this.packings.push({ 'product': product, 'type': '3pk' });
        }
        if (product.father === 'Saphir' || product.father === 'Quattro 3-Monthly') {
            this.packings.push({ 'product': product, 'type': '2pk' });
        }
        this.currentFather = product.father;
        this.showFathersMarkennovy = false;
        this.showFilterMarkennovy = false;
        this.showPackingsMarkennovy = true;
    };
    ProductsListInternalComponent.prototype.redirectFather = function (product, type) {
        this.products = this.productsAux;
        this.products = this.products.filter(function (item) {
            return item.father === product.father;
        });
        this.filterByPacking(type);
        this.currentFather = product.father;
        this.showPackingsMarkennovy = false;
    };
    ProductsListInternalComponent.prototype.backToFathersHeader = function () {
        if (this.idSupplier === 1) {
            if (!this.showFathersMarkennovy) {
                this.showFathersMarkennovy = true;
                this.showFilterMarkennovy = true;
                this.showPackingsMarkennovy = false;
                this.filterName = '';
                this.currentFather = '';
                this.currentPacking = '';
            }
        }
    };
    ProductsListInternalComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'filter2' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ProductsListInternalComponent.prototype.excludeProduct = function () {
        var productsAux = [];
        var membership = this.currentUser.membership.idMembership;
        if (membership === 1) {
            productsAux = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.products, function (o) {
                return o.father !== 'Spectrum Saline';
            });
            this.products = productsAux;
        }
    };
    ProductsListInternalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-lists-internal',
            template: __webpack_require__(/*! ./products-lists-internal.component.html */ "./src/app/products/products-lists-internal/products-lists-internal.component.html"),
            styles: [__webpack_require__(/*! ./products-lists-internal.component.scss */ "./src/app/products/products-lists-internal/products-lists-internal.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__["UserStorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ProductsListInternalComponent);
    return ProductsListInternalComponent;
}());



/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor=\"rgba(51, 51, 51, 0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-beat\"\n></ngx-spinner>\n<br />\n<br />\n<br />\n<div class=\"margin-breadcrumb\">\n  <div class=\"header-body\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\"\n          ><i class=\"fa fa-dashboard\"></i> {{ \"Dashboard\" | translate }}</a\n        >\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-edit\"></i> {{ \"Products List\" | translate }}\n      </li>\n    </ol>\n  </div>\n</div>\n<br /><br /><br />\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!--\n      FILTERS\n      <div class=\"col-sm-3 col-md-3 hidden-xs\">\n        <ngb-accordion activeIds=\"filter2\" type=\"dark\" (panelChange)=\"beforeChange($event)\">\n          <ngb-panel id=\"filter2\">\n            <ng-template ngbPanelTitle>\n              <span class=\"title-collapse\">{{ 'Contact Lenses' | translate }}</span>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div *ngFor=\"let supplier of listSupplierFilter; let i = index\">\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"radioGroupSupplier{{i}}\" name=\"radioGroupSupplier\" [value]=\"supplier.idSupplier\" (change)=\"onSelectionSupplier(supplier.idSupplier)\" [checked]=\"supplier.idSupplier===1000\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"radioGroupSupplier{{i}}\">{{ supplier.companyName | translate }}</label>\n                </div>\n              </div>\n              <div class=\"col-sm-12\" *ngFor=\"let category of auxCategories; let i = index\" [hidden]=\"!visible || category.name === 'Other'\">\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"radioGroupCategory{{i}}\" name=\"radioGroupCategory\" [value]=\"category.idCategory\" (change)=\"onSelectionCategory(category.idCategory)\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"radioGroupCategory{{i}}\">{{ category.name | translate }}</label>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n        </ngb-accordion>\n      </div>\n    -->\n    <!-- THUMBNAILS PRODUCTS -->\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\n      <div class=\"row margin-list\">\n        <div class=\"col-md-4\" *ngFor=\"let supplier of listSupplier\">\n          <div class=\"mb-4 box-shadow\">\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"onSelectionSupplier(supplier.idSupplier)\">\n                <i class=\"prodTeaser-more\">{{ 'View' | translate }}</i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ supplier.image }}\"\n                />\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.search {\n  padding-bottom: 1.5rem; }\n.search i {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    color: #ced4da; }\n.middleBar {\n  padding: 0px 25px 15px 35px; }\n.middleBar .display-table {\n    padding-right: 20px !important; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.btn-align {\n  text-align: center;\n  padding-bottom: 20px; }\n.card {\n  margin-top: 30px; }\n.card-img-top {\n  border-radius: 40px;\n  height: 220px;\n  width: 80%;\n  margin-left: 10%;\n  padding: 5%;\n  opacity: 0.9; }\n.card-img-top:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1, 1);\n  transform: scale(1.2, 1.2);\n  -webkit-transition: all 0.8s cubic-bezier(0.1, -0.5, 0, 3);\n  transition: all 0.8s cubic-bezier(0.1, -0.5, 0, 3);\n  opacity: 1;\n  z-index: 1;\n  -webkit-filter: contrast(150%);\n          filter: contrast(150%); }\n/*\n.box-shadow {\n  border: 1px solid gray;\n  border-radius: 12px;\n}\n*/\n.card-body {\n  padding-top: 2px; }\n.product-name {\n  text-align: center;\n  color: #1756a6;\n  padding-top: 10px;\n  cursor: pointer;\n  height: 75px; }\n.card-product:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  visibility: hidden; }\n.card-product .price-new,\n.card-product .price {\n  margin-right: 5px; }\n.price-base {\n  color: #999; }\n.card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 220px;\n  text-align: center; }\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .action-wrap {\n  padding-top: 4px;\n  margin-top: 4px; }\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .title {\n  margin-top: 0; }\nbody {\n  margin-top: 50px; }\n.glyphicon {\n  margin-right: 10px; }\n.panel-body {\n  padding: 0px; }\n.panel-body table tr td {\n  padding-left: 15px; }\n.panel-body .table {\n  margin-bottom: 0px; }\n.product-btns {\n  text-align: right; }\n.fa-exclamation-triangle {\n  color: #cc0000; }\n.box {\n  border: 1px solid #555657;\n  border-radius: 1.45em;\n  z-index: 1; }\n.prodTeaser {\n  background: #fff;\n  border: 1px solid #dcddde;\n  box-shadow: inset 0 0 0 0 transparent;\n  height: 15vw;\n  padding: 18%;\n  position: relative;\n  -webkit-transition: all 0s;\n  transition: all 0s;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  overflow: hidden; }\n.prodTeaser-overlay {\n  background: rgba(0, 174, 239, 0.5);\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  position: absolute;\n  overflow: hidden; }\n.prodTeaser-overlay:hover {\n    opacity: 1;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer; }\n.prodTeaser-inner:focus,\na:active,\na:hover {\n  outline: 0;\n  cursor: pointer; }\n.card-img-top-teaser {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center; }\n.prodTeaser-more {\n  color: #199bd7;\n  background: #fff;\n  border-radius: 50%;\n  font-size: 1.5em;\n  line-height: 86px;\n  width: 90px;\n  height: 90px;\n  top: 50%;\n  left: 50%;\n  margin: -45px 0 0 -45px;\n  display: block;\n  position: absolute;\n  -webkit-transition: all 0.35s ease-out;\n  transition: all 0.35s ease-out;\n  -webkit-box-direction: normal;\n  opacity: 1; }\n.prodTeaser-more:hover {\n    position: absolute;\n    -webkit-transform: translateY(-25%);\n            transform: translateY(-25%); }\n.prodTeaser-inner {\n  max-width: 100%;\n  -webkit-transition: all 0.35s ease-out;\n  transition: all 0.35s ease-out;\n  -webkit-box-direction: normal; }\n@media screen and (min-width: 296px) and (max-width: 765px) {\n  .card-img-top-teaser {\n    height: 50%;\n    width: 50%;\n    opacity: 0.9;\n    margin-left: 20%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center; } }\n"

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
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_supplieruser_supplieruser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/supplieruser/supplieruser.service */ "./src/app/shared/services/supplieruser/supplieruser.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/suppliers/supplier.service */ "./src/app/shared/services/suppliers/supplier.service.ts");
/* harmony import */ var _shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/category/category.service */ "./src/app/shared/services/category/category.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SHOWSUPPLIERS = 'showSuppliers';
var ProductsListsComponent = /** @class */ (function () {
    function ProductsListsComponent(userStorageService, modalService, supplierUserService, router, supplierService, categoryService, spinner, productService) {
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        this.supplierUserService = supplierUserService;
        this.router = router;
        this.supplierService = supplierService;
        this.categoryService = categoryService;
        this.spinner = spinner;
        this.productService = productService;
        this.listSupplier = new Array();
        this.listSupplierAux = new Array();
        this.listSupplierFilter = new Array();
        this.auxCategories = new Array;
        this.products = new Array;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductsListsComponent.prototype.ngOnInit = function () {
        if (this.user.role.idRole === 3) {
            this.associatedSuppliers();
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.getSuppliers();
        }
    };
    ProductsListsComponent.prototype.associatedSuppliers = function () {
        var _this = this;
        this.spinner.show();
        this.supplierUserService
            .findIdUser$(this.currentUser.idUser)
            .subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.listSupplierAux = res.data;
                var userConc_1 = _this.currentUser;
                _this.listSupplier = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](_this.listSupplierAux, function (u) {
                    var idSupp = u.supplier.idSupplier;
                    switch (idSupp) {
                        case 1:// Markennoy
                            return !(userConc_1.cardCode === null || userConc_1.cardCode === '');
                        case 2:// Europa
                            return u;
                        case 3:// Lenticon
                            return u;
                        case 4:// Euclid
                            return !(userConc_1.certificationCode === null || userConc_1.certificationCode === '');
                        case 5:// Magic Look
                            return u;
                        case 6:// Blue Light
                            return u;
                        case 7:// Fluo Strips y Spectrum Saline
                            return u;
                    }
                });
                _this.getSuppliers();
                _this.spinner.hide();
            }
        });
    };
    ProductsListsComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.spinner.show();
        this.supplierService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.listSupplierFilter = res.data;
                if (_this.user.role.idRole === 3) {
                    var lista_1 = _this.listSupplier; // los asociado a los clientes
                    var supplierFiltered_1 = [];
                    lodash__WEBPACK_IMPORTED_MODULE_3__["each"](_this.listSupplierFilter, function (supplier) {
                        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](lista_1, function (item) {
                            if (supplier.idSupplier === item.supplier.idSupplier) {
                                supplierFiltered_1.push(supplier);
                            }
                        });
                    });
                    _this.listSupplierFilter = supplierFiltered_1;
                    _this.orderList();
                    _this.listSupplier = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](_this.listSupplierFilter, function (s) { return s.idSupplier < 8 && s.idSupplier > 0; });
                    _this.spinner.hide();
                }
                else {
                    _this.orderList();
                    _this.listSupplier = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](_this.listSupplierFilter, function (s) { return s.idSupplier < 8 && s.idSupplier > 0; });
                    _this.spinner.hide();
                }
                _this.setImageSupplier();
            }
            else {
                console.log(res.errors[0].detail);
                _this.spinner.hide();
            }
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductsListsComponent.prototype.setImageSupplier = function () {
        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.listSupplier, function (supplier) {
            switch (supplier.idSupplier) {
                case 1:// Markennoy
                    supplier.image = 'assets/images/suppliers/markennovy.png';
                    break;
                case 2:// Europa
                    supplier.image = 'assets/images/suppliers/europa.png';
                    break;
                case 3:// Lenticon
                    supplier.image = 'assets/images/suppliers/elipsys.png';
                    break;
                case 4:// Euclid
                    supplier.image = 'assets/images/suppliers/euclid.png';
                    break;
                case 5:// Magic Look
                    supplier.image = 'assets/images/suppliers/magiclook.png';
                    break;
                case 6:// Blue Light
                    supplier.image = 'assets/images/suppliers/bluelight.png';
                    break;
                case 7:// Fluo Strips y spectrum saline
                    supplier.image = 'assets/images/suppliers/spectrum_products.jpg';
                    break;
            }
        });
    };
    ProductsListsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                _this.auxCategories = res.data;
                //this.visible = true;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListsComponent.prototype.onSelectionSupplier = function (idSupplier) {
        var _this = this;
        if (this.user.role.idRole === 1) {
            this.router.navigate(['/products/' + idSupplier + '/internal']);
        }
        else {
            switch (idSupplier) {
                case 1: //markennovy
                case 2: //europa
                case 3: //Lenticon
                case 4: //euclid
                case 7://fluo strips y saline spectrum
                    this.router.navigate(['/products/' + idSupplier + '/internal']);
                    break;
                case 5://magic look
                    this.productService.findBySupplierInView$(idSupplier, true).subscribe(function (res) {
                        if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                            _this.products = res.data;
                            _this.router.navigate(['/products/' + _this.products[0].idProduct + '/product-view-magic']);
                        }
                        else {
                            console.log(res.errors[0].detail);
                        }
                    }, function (error) {
                        console.log('error', error);
                        _this.spinner.hide();
                    });
                    break;
                case 6:// Blue Light
                    this.productService.findBySupplierInView$(idSupplier, true).subscribe(function (res) {
                        if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                            _this.products = res.data;
                            _this.router.navigate(['/products/' + _this.products[0].idProduct + '/product-view-blue']);
                        }
                        else {
                            console.log(res.errors[0].detail);
                        }
                    }, function (error) {
                        console.log('error', error);
                        _this.spinner.hide();
                    });
            }
        }
    };
    ProductsListsComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'filter2' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ProductsListsComponent.prototype.orderList = function () {
        this.listSupplierFilter = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](this.listSupplierFilter, ['idSupplier'], ['asc']);
    };
    ProductsListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-lists',
            template: __webpack_require__(/*! ./products-lists.component.html */ "./src/app/products/products-lists/products-lists.component.html"),
            styles: [__webpack_require__(/*! ./products-lists.component.scss */ "./src/app/products/products-lists/products-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_user_storage_service__WEBPACK_IMPORTED_MODULE_2__["UserStorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _shared_services_supplieruser_supplieruser_service__WEBPACK_IMPORTED_MODULE_4__["SupplieruserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"],
            _shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]])
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
/* harmony import */ var _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-view-europa/product-view-europa.component */ "./src/app/products/product-view-europa/product-view-europa.component.ts");
/* harmony import */ var _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-view-euclid/product-view-euclid.component */ "./src/app/products/product-view-euclid/product-view-euclid.component.ts");
/* harmony import */ var _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view-magicLook/product-view-magic.component */ "./src/app/products/product-view-magicLook/product-view-magic.component.ts");
/* harmony import */ var _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-view-blue/product-view-blue.component */ "./src/app/products/product-view-blue/product-view-blue.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _products_lists_internal_products_lists_internal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products-lists-internal/products-lists-internal.component */ "./src/app/products/products-lists-internal/products-lists-internal.component.ts");
/* harmony import */ var _product_view_fluo_strips_product_view_fluo_strips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-view-fluo-strips/product-view-fluo-strips.component */ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.ts");
/* harmony import */ var _product_view_spectrum_saline_product_view_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-view-spectrum-saline/product-view-spectrum-saline.component */ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.ts");
/* harmony import */ var _product_view_lenticon_product_view_lenticon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-view-lenticon/product-view-lenticon.component */ "./src/app/products/product-view-lenticon/product-view-lenticon.component.ts");
/* harmony import */ var _product_view_medmont_product_view_medmont_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-view-medmont/product-view-medmont.component */ "./src/app/products/product-view-medmont/product-view-medmont.component.ts");
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
        canActivateChild: [_shared__WEBPACK_IMPORTED_MODULE_9__["RoleGuard"]],
        children: [
            { path: '', component: _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListsComponent"], data: { option: 'ProductsList' } },
            { path: ':idSupplier/internal', component: _products_lists_internal_products_lists_internal_component__WEBPACK_IMPORTED_MODULE_10__["ProductsListInternalComponent"], data: { option: 'ProductsListInternal' } },
            { path: ':id/product-view', component: _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductViewComponent"], data: { option: 'ProductsView' } },
            { path: ':id/product-view-europa', component: _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_5__["ProductViewEuropaComponent"], data: { option: 'ProductsViewEuropa' } },
            { path: ':id/product-view-euclid', component: _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_6__["ProductViewEuclidComponent"], data: { option: 'ProductsViewEuclid' } },
            { path: ':id/product-view-magic', component: _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_7__["ProductViewMagicComponent"], data: { option: 'ProductsViewMagic' } },
            { path: ':id/product-view-blue', component: _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_8__["ProductViewBlueComponent"], data: { option: 'ProductsViewBlue' } },
            { path: ':id/product-view-fluo-strips', component: _product_view_fluo_strips_product_view_fluo_strips_component__WEBPACK_IMPORTED_MODULE_11__["ProductViewFluoStripsComponent"], data: { option: 'ProductsViewFluoStrips' } },
            { path: ':id/product-view-spectrum-saline', component: _product_view_spectrum_saline_product_view_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_12__["ProductViewSpectrumSalineComponent"], data: { option: 'ProductsViewSpectrumSaline' } },
            { path: ':id/product-view-lenticon', component: _product_view_lenticon_product_view_lenticon_component__WEBPACK_IMPORTED_MODULE_13__["ProductViewLenticonComponent"], data: { option: 'ProductsViewLenticon' } },
            { path: ':id/product-view-medmont', component: _product_view_medmont_product_view_medmont_component__WEBPACK_IMPORTED_MODULE_14__["ProductViewMedmontComponent"], data: { option: 'ProductViewMedmontComponent' } },
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
/* harmony import */ var _products_lists_internal_products_lists_internal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-lists-internal/products-lists-internal.component */ "./src/app/products/products-lists-internal/products-lists-internal.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/products/product-view/product-view.component.ts");
/* harmony import */ var _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view-europa/product-view-europa.component */ "./src/app/products/product-view-europa/product-view-europa.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/modules/header/header.module */ "./src/app/shared/modules/header/header.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/edit-product/edit-product.component */ "./src/app/products/modals/edit-product/edit-product.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-view-euclid/product-view-euclid.component */ "./src/app/products/product-view-euclid/product-view-euclid.component.ts");
/* harmony import */ var _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-view-magicLook/product-view-magic.component */ "./src/app/products/product-view-magicLook/product-view-magic.component.ts");
/* harmony import */ var _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-view-blue/product-view-blue.component */ "./src/app/products/product-view-blue/product-view-blue.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modals_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component */ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component */ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component */ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modals/edit-product/edit-product-magic-look/edit-product-magic-look.component */ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_europa_confirmation_europa_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-europa/confirmation-europa.component */ "./src/app/products/modals/confirmation-buy/confirmation-europa/confirmation-europa.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_euclid_confirmation_euclid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component */ "./src/app/products/modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_euclid_edit_product_euclid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modals/edit-product/edit-product-euclid/edit-product-euclid.component */ "./src/app/products/modals/edit-product/edit-product-euclid/edit-product-euclid.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_europa_edit_product_europa_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/edit-product/edit-product-europa/edit-product-europa.component */ "./src/app/products/modals/edit-product/edit-product-europa/edit-product-europa.component.ts");
/* harmony import */ var _product_view_fluo_strips_product_view_fluo_strips_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./product-view-fluo-strips/product-view-fluo-strips.component */ "./src/app/products/product-view-fluo-strips/product-view-fluo-strips.component.ts");
/* harmony import */ var _product_view_spectrum_saline_product_view_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./product-view-spectrum-saline/product-view-spectrum-saline.component */ "./src/app/products/product-view-spectrum-saline/product-view-spectrum-saline.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component */ "./src/app/products/modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component.ts");
/* harmony import */ var _product_view_lenticon_product_view_lenticon_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./product-view-lenticon/product-view-lenticon.component */ "./src/app/products/product-view-lenticon/product-view-lenticon.component.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_lenticon_confirmation_lenticon_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component */ "./src/app/products/modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_spectrum_saline_edit_product_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component */ "./src/app/products/modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component.ts");
/* harmony import */ var _product_view_medmont_product_view_medmont_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./product-view-medmont/product-view-medmont.component */ "./src/app/products/product-view-medmont/product-view-medmont.component.ts");
/* harmony import */ var _modals_edit_product_edit_product_medmont_edit_product_medmont_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modals/edit-product/edit-product-medmont/edit-product-medmont.component */ "./src/app/products/modals/edit-product/edit-product-medmont/edit-product-medmont.component.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// tslint:disable-next-line:max-line-length







var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39__["CurrencyMaskModule"]
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                _products_lists_internal_products_lists_internal_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListInternalComponent"],
                _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListsComponent"],
                _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_6__["ProductViewComponent"],
                _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_7__["ProductViewEuropaComponent"],
                _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_18__["ProductViewEuclidComponent"],
                _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_19__["ProductViewMagicComponent"],
                _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_20__["ProductViewBlueComponent"],
                _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationBuyComponent"],
                _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__["EditProductComponent"],
                _modals_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_22__["NotificationBalanceComponent"],
                _modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmationMagicLookComponent"],
                _modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationMarkennovyComponent"],
                _modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmationBlueLightComponent"],
                _modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_26__["EditProductMagicLookComponent"],
                _modals_confirmation_buy_confirmation_europa_confirmation_europa_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmationEuropaComponent"],
                _modals_confirmation_buy_confirmation_euclid_confirmation_euclid_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmationEuclidComponent"],
                _modals_edit_product_edit_product_euclid_edit_product_euclid_component__WEBPACK_IMPORTED_MODULE_29__["EditProductEuclidComponent"],
                _modals_edit_product_edit_product_europa_edit_product_europa_component__WEBPACK_IMPORTED_MODULE_30__["EditProductEuropaComponent"],
                _product_view_fluo_strips_product_view_fluo_strips_component__WEBPACK_IMPORTED_MODULE_31__["ProductViewFluoStripsComponent"],
                _product_view_spectrum_saline_product_view_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_32__["ProductViewSpectrumSalineComponent"],
                _modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmationSpectrumSalineComponent"],
                _product_view_lenticon_product_view_lenticon_component__WEBPACK_IMPORTED_MODULE_34__["ProductViewLenticonComponent"],
                _modals_confirmation_buy_confirmation_lenticon_confirmation_lenticon_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmationLenticonComponent"],
                _modals_edit_product_edit_product_spectrum_saline_edit_product_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_36__["EditProductSpectrumSalineComponent"],
                _product_view_medmont_product_view_medmont_component__WEBPACK_IMPORTED_MODULE_37__["ProductViewMedmontComponent"],
                _modals_edit_product_edit_product_medmont_edit_product_medmont_component__WEBPACK_IMPORTED_MODULE_38__["EditProductMedmontComponent"]
            ],
            entryComponents: [_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationBuyComponent"],
                _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__["EditProductComponent"],
                _modals_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_22__["NotificationBalanceComponent"],
                _modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmationMagicLookComponent"],
                _modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationMarkennovyComponent"],
                _modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmationBlueLightComponent"],
                _modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_26__["EditProductMagicLookComponent"],
                _modals_confirmation_buy_confirmation_europa_confirmation_europa_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmationEuropaComponent"],
                _modals_confirmation_buy_confirmation_euclid_confirmation_euclid_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmationEuclidComponent"],
                _modals_edit_product_edit_product_euclid_edit_product_euclid_component__WEBPACK_IMPORTED_MODULE_29__["EditProductEuclidComponent"],
                _modals_edit_product_edit_product_europa_edit_product_europa_component__WEBPACK_IMPORTED_MODULE_30__["EditProductEuropaComponent"],
                _modals_confirmation_buy_confirmation_spectrum_saline_confirmation_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmationSpectrumSalineComponent"],
                _modals_confirmation_buy_confirmation_lenticon_confirmation_lenticon_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmationLenticonComponent"],
                _modals_edit_product_edit_product_spectrum_saline_edit_product_spectrum_saline_component__WEBPACK_IMPORTED_MODULE_36__["EditProductSpectrumSalineComponent"],
                _modals_edit_product_edit_product_medmont_edit_product_medmont_component__WEBPACK_IMPORTED_MODULE_38__["EditProductMedmontComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_11__["RoleGuard"], _shared_services__WEBPACK_IMPORTED_MODULE_13__["AuthorizationService"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/shared/models/basketrequest.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/basketrequest.ts ***!
  \************************************************/
/*! exports provided: BasketRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketRequest", function() { return BasketRequest; });
var BasketRequest = /** @class */ (function () {
    function BasketRequest() {
    }
    return BasketRequest;
}());



/***/ }),

/***/ "./src/app/shared/models/buynow.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/buynow.ts ***!
  \*****************************************/
/*! exports provided: BuyNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyNow", function() { return BuyNow; });
var BuyNow = /** @class */ (function () {
    function BuyNow() {
    }
    return BuyNow;
}());



/***/ }),

/***/ "./src/app/shared/models/fileproductrequested.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/fileproductrequested.ts ***!
  \*******************************************************/
/*! exports provided: FileProductRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileProductRequested", function() { return FileProductRequested; });
var FileProductRequested = /** @class */ (function () {
    function FileProductRequested() {
    }
    return FileProductRequested;
}());



/***/ }),

/***/ "./src/app/shared/models/product.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/productrequest.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/productrequest.ts ***!
  \*************************************************/
/*! exports provided: ProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRequest", function() { return ProductRequest; });
var ProductRequest = /** @class */ (function () {
    function ProductRequest() {
    }
    return ProductRequest;
}());



/***/ }),

/***/ "./src/app/shared/services/supplieruser/supplieruser.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/supplieruser/supplieruser.service.ts ***!
  \**********************************************************************/
/*! exports provided: SupplieruserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplieruserService", function() { return SupplieruserService; });
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



var SupplieruserService = /** @class */ (function () {
    function SupplieruserService(http) {
        this.http = http;
    }
    SupplieruserService.prototype.findIdUser$ = function (idUser) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'supplierUser/findIdUser/' + idUser);
    };
    SupplieruserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SupplieruserService);
    return SupplieruserService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map