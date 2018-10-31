(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ product.name }}</span>\n        </div>\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n        <!--Patient-->\n        <div class=\"col-lg-12 title label-title patient-info\">\n          <span>{{ 'Patient' | translate }}</span>\n          <dl>\n            <dt>{{ namePatient}}</dt>\n          </dl>\n          <dl class=\"param\">\n            <dt>{{ price | currency : \"USD $\" }}</dt>\n          </dl>\n        </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"card-body table-responsive\">\n        <div class=\"row justify-content-md-center div-parametros\" *ngFor=\"let list of listBasket\">\n          <div class=\"col-sm-3\">\n            <dl class=\"align-item\">\n              <dt>{{ 'Quantity' | translate }}</dt>\n              <hr>\n              <dt>\n                <span class=\"items\"> {{ list.quantity }}</span>\n              </dt>\n            </dl>\n          </div>\n          <div class=\"col-sm-3\" *ngFor=\"let parameter of list.detail[0].parameters\">\n            <dl class=\"align-item\">\n              <dt>{{parameter.name | translate }}</dt>\n              <hr>\n              <dt>\n                <span class=\"items\"> {{parameter.selected}}</span>\n              </dt>\n            </dl>\n          </div>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    max-height: 163.65px; }\n.list-basket .display-row {\n    display: flex;\n    justify-content: space-between; }\n.list-basket .display-row .spec-params {\n      margin-left: -4em; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    font-weight: 0px;\n    color: #868e96; }\n.list-basket .param {\n    color: #f8ac59; }\n"

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
            this.basketRequest.fileProductRequestedList = this.listFileBasket;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully save', { value: 'Successfully save' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListBasket();
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
            this.buyNow.fileProductRequestedList = this.listFileBasket;
            this.validateAvailableBalance();
            if (this.available) {
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
                        console.log(res.errors[0].detail);
                        _this.spinner.hide();
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
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border' });
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

module.exports = "<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"card-body table-responsive row\">\n    <div>\n      <div class=\"list-basket\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <!--Image-->\n            <div>\n              <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n            </div>\n            <!--Details-->\n            <div class=\"details\">\n              <div>\n                <span>{{ product.name }}</span>\n              </div>\n              <div *ngFor=\"let item of listBasket; let i = index\">\n                <div class=\"price h5 text-warning\" [hidden]=\"i===1\">\n                  <h6>{{ item.detail[0].name }}</h6>\n                </div>\n              </div>\n              <div>\n                <span>{{ ('Patient' | translate) + ': ' + namePatient }}</span>\n              </div>\n              <div>\n                <span>{{ price | currency }}</span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-6 params\">\n            <div class=\"row\">\n              <!--<div class=\"col-lg-4\">{{ 'Parameter' | translate }}</div>-->\n              <div class=\"col-lg-6\"></div>\n              <div class=\"col-lg-3 param\" *ngFor=\"let eye of eyesSelected\">\n                <span>\n                  {{ eye | translate }}\n                </span>\n              </div>\n            </div>\n             <!--CONTENT INFO-->\n            <div class=\"row\">\n              <!--PARAM NAME-->\n              <div class=\"col-sm-6\">\n                <dl>\n                  <dt>{{ 'Quantity' }}:</dt>\n                </dl>\n                <div *ngFor=\"let parameter of listNameParameters\">\n                  <dl>\n                    <dt>{{ parameter.name }}:</dt>\n                  </dl>\n                </div>\n              </div>\n              <!--EYES-->\n              <div class=\"col-sm-3\" *ngFor=\"let item of listBasket\"> <!--iteration by Eye, (right, left)-->\n                <div>\n                  <dl class=\"param\">\n                    <dt>{{ item.quantity }}</dt>\n                  </dl>\n                </div>\n                <div *ngFor=\"let specification of item.detail\">\n                  <div *ngFor=\"let param of specification.parameters\">\n                    <dl class=\"param\">\n                      <dt>{{ param.selected }}</dt>\n                    </dl>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.card-body > div:nth-child(1) {\n  padding-right: 25px; }\n.list-basket {\n  padding: 15px;\n  margin-top: 1.5em; }\n.list-basket .img-product {\n    width: 100%; }\n.list-basket .details {\n    text-align: center; }\n.list-basket .details span {\n      font-size: 18px;\n      font-weight: 600; }\n.list-basket .params {\n    /*display: flex;\n    align-items: center;*/ }\n.list-basket .params > div:nth-child(2) {\n      padding-top: 15px; }\n.list-basket .params .param {\n      display: flex;\n      justify-content: flex-end; }\n.list-basket > div:nth-child(1) > div:nth-child(2) {\n    justify-content: flex-end;\n    color: #494949; }\n"

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
        if (this.typeBuy === 1) {
            this.spinner.show();
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.fileProductRequestedList = this.listFileBasket;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully save', { value: 'Successfully save' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListBasket();
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
            this.buyNow.fileProductRequestedList = this.listFileBasket;
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
                        console.log(res.errors[0].detail);
                        _this.spinner.hide();
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
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_16__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border' });
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

/***/ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"body\">\n    <div>\n      <div class=\"list-basket\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 main-info\">\n            <!--Image-->\n            <div class=\"label-title\">\n              <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n            </div>\n            <!--Patient-->\n            <div class=\"col-lg-12 title label-title patient-info\">\n              <dl>\n                <dt>{{ price | currency : \"USD $\" }}</dt>\n              </dl>\n            </div>\n          </div>\n          <div class=\"col-lg-12 display-row padding-params\">\n            <!--CONTENT INFO-->\n            <!--PARAMETERS-->\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Total Quantity'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl>\n                  <dt class=\"items\">\n                    {{ listBasket[0].quantity }}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n            <div class=\"col-lg-8 display-row padding-params\">\n              <div *ngFor=\"let parameter of listBasket[0].detail[0].parameters\" class=\"col-sm-6 title\">\n                <div>\n                  <dl class=\"align-item\">\n                    <dt>{{ parameter.name | translate }}\n                    </dt>\n                    <hr class=\"separators\">\n                    <dl class=\"items\">\n                      <dt>\n                        {{ parameter.selected}}\n                      </dt>\n                    </dl>\n                  </dl>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--FIN PARAMETERS-->\n          <!--BOXES-->\n          <div class=\"col-lg-12 display-row padding-params\">\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Quantity'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl *ngFor=\"let parameter of listBasket[0].detail[0].boxes\">\n                  <dt class=\"items\">\n                    {{ parameter.Quantity}}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Tone'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl *ngFor=\"let parameter of listBasket[0].detail[0].boxes\">\n                  <dt class=\"items\">\n                    {{ parameter.Tone}}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n            <div class=\"col-sm-4\">\n              <dl class=\"align-item\">\n                <dt>{{'Color'| translate}}\n                </dt>\n                <hr class=\"separators\">\n                <dl *ngFor=\"let parameter of listBasket[0].detail[0].boxes\">\n                  <dt class=\"items\">\n                    {{ parameter.Color}}\n                  </dt>\n                </dl>\n              </dl>\n            </div>\n          </div>\n          <!--Fin Boxes-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px; }\n.list-basket .display-row {\n    display: flex;\n    justify-content: space-between; }\n.list-basket .display-row .spec-params {\n      margin-left: -4em; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    font-weight: 0px;\n    color: #868e96; }\n.list-basket .param {\n    color: #f8ac59; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1); }\n"

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
            this.basketRequest.fileProductRequestedList = this.listFileBasket;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully save', { value: 'Successfully save' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListBasket();
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
            this.buyNow.fileProductRequestedList = this.listFileBasket;
            this.validateAvailableBalance();
            if (this.available) {
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
                        console.log(res.errors[0].detail);
                        _this.spinner.hide();
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
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_1__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border' });
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

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-beat\"></ngx-spinner>\n<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <!--Image-->\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ product.name }}</span>\n        </div>\n        <!--Image-->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n        </div>\n        <!--Patient-->\n        <div class=\"col-lg-12 title label-title patient-info\">\n          <span>{{ 'Patient' | translate }}</span>\n          <dl>\n            <dt>{{ namePatient}}</dt>\n          </dl>\n          <dl class=\"param\">\n            <dt>{{ price | currency : \"USD $\" }}</dt>\n          </dl>\n        </div>\n      </div>\n      <!--PARAMETERS-->\n      <div class=\"col-lg-12\" *ngFor=\"let list of listBasket\">\n        <div class=\"row padding-params\">\n          <div class=\"col-lg-12 title eye-info\">\n            <span>{{ 'Eye' | translate }}</span>&nbsp;&nbsp;\n            <span>{{ list.detail[0].eye | translate }}</span>\n          </div>\n          <div class=\"col-sm-3\">\n            <dl class=\"align-item\">\n              <dt>{{'Quantity'| translate}}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ listBasket[0].quantity }}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <div class=\"col-sm-3\" *ngFor=\"let parameter of list.detail[0].parameters\">\n            <dl class=\"align-item\">\n              <dt>{{ parameter.name | translate }}\n              </dt>\n              <hr class=\"separators\">\n              <dl>\n                <dt class=\"items\">\n                  {{ parameter.selected}}\n                </dt>\n              </dl>\n            </dl>\n          </div>\n          <!--Comments-->\n          <div class=\"col-lg-12\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-12\">\n                <dl>\n                  <dt>{{'Comments'| translate}}\n                  </dt>\n                  <dl>\n                    <span style=\"overflow-x: hidden;\"> {{ list.observations }}</span>\n                  </dl>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--FIN PARAMETERS-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===2\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\" [hidden]=\"typeBuy===1\">{{ 'Buy' | translate }}&nbsp;\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    margin-top: 1em; }\n.list-basket .display-row {\n    display: flex;\n    justify-content: space-between; }\n.list-basket .display-price {\n    justify-content: center; }\n.list-basket .padding-params {\n    padding: 0 2em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    padding-bottom: 1.5em; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    color: #868e96; }\n.list-basket .comments {\n    padding: 0 2.5em; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1); }\n.list-basket .param {\n    color: #f8ac59; }\n"

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
            this.basketRequest.fileProductRequestedList = this.listFileBasket;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_1__["CodeHttp"].ok) {
                    _this.save_success = true;
                    _this.close();
                    _this.translate.get('Successfully save', { value: 'Successfully save' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                    _this.spinner.hide();
                    _this.redirectListBasket();
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
            this.buyNow.fileProductRequestedList = this.listFileBasket;
            this.validateAvailableBalance();
            if (this.available) {
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
                        console.log(res.errors[0].detail);
                        _this.spinner.hide();
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
        var modalRef = this.modalService.open(_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_2__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border' });
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

/***/ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Gold-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Gold' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGo1\"\n                      formControlName=\"priceGo1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGo2\"\n                      formControlName=\"priceGo2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceGo3\"\n                      formControlName=\"priceGo3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(priceGo1.valid || priceGo1.pristine) && (priceGo2.valid || priceGo2.pristine) && ( priceGo3.valid || priceGo3.pristine)\">\n            <span>{{ 'Price Gold is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Gold-->\n        <!--Diamond-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Diamond' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi1\"\n                      formControlName=\"priceDi1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi2\"\n                      formControlName=\"priceDi2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"priceDi3\"\n                      formControlName=\"priceDi3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(priceDi1.valid || priceDi1.pristine) && (priceDi2.valid || priceDi2.pristine) && ( priceDi3.valid || priceDi3.pristine)\">\n            <span>{{ 'Price Diamond is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Diamond-->\n        <!--Preferred-->\n        <div class=\"col-xl-12\">\n          <label>{{ 'Price Preferred' | translate }}</label>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 1000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr1\"\n                      formControlName=\"pricePr1\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Up to 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr2\"\n                      formControlName=\"pricePr2\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-xl-4\">\n              <fieldset class=\"form-group\">\n                <label class=\"label-prices\">{{ 'Greater than 2000 boxes' | translate }}</label>\n                <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"form-group input-group\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" min=\"0.0\" step=\"0.1\" class=\"form-control\" placeholder=\"{{ 'Enter price' | translate }}\" name=\"pricePr3\"\n                      formControlName=\"pricePr3\">\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"message-error\" [hidden]=\"(pricePr1.valid || pricePr1.pristine) && (pricePr2.valid || pricePr2.pristine) && ( pricePr3.valid || pricePr3.pristine)\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <!--Fin Preferred-->\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product-magic-look/edit-product-magic-look.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n.label-prices {\n  color: #868e96;\n  padding-left: 1em;\n  padding-top: 5px; }\n"

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

/***/ "./src/app/products/modals/edit-product/edit-product.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price Gold' | translate }}</label>\n            <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter price 3' | translate }}\" name=\"price3\" formControlName=\"price3\">\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price3.valid || price3.pristine\">\n            <span>{{ 'Price Gold is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price Diamond' | translate }}</label>\n            <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter price 2' | translate }}\" name=\"price2\" formControlName=\"price2\">\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price2.valid || price2.pristine\">\n            <span>{{ 'Price Diamond is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price Preferred' | translate }}</label>\n            <div class=\"mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter price 1' | translate }}\" name=\"price1\" formControlName=\"price1\">\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price1.valid || price1.pristine\">\n            <span>{{ 'Price Preferred is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n"

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
        console.log('product:', this.product);
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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.confirm {\n  text-align: center; }\n"

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
                console.log(res.errors[0].detail);
                _this.spinner.hide();
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

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <!--<h4 class=\"product-title\">{{ product.name }}</h4>-->\n            <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n              <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n            </h1>\n          </div>\n          <!-- image -->\n          <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>Material</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>Product Sheet</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-md-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\" row col-md-12\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.patient\">\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-md-3\">\n          <dt class=\"title align-title\">{{ 'Customer Full Name' | translate }}</dt>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\">\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-md-6\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n          <div class=\"row col-md-12\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-md-2 quantity\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div class=\"col-md-10\">\n              <div class=\"row\">\n                <div class=\"col-md-2\" *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <!--param name-->\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-md-2 quantity\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div class=\"col-md-10\">\n              <div class=\"row\">\n                <div class=\"col-md-2\" *ngFor=\"let parameter of product.parametersLeft\">\n                  <div>\n                    <!--param name-->\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                          bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <br>\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy Now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #fbfbfb;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: flex;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n.preview-pic {\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 3em; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

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
    function ProductViewBlueComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
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
        this.products = new Array;
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
    ProductViewBlueComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-15, -0.25, 0.25)));
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
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
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
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
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
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
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
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewBlueComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationBlueLightComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
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
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
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

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h4 class=\"product-title\">{{ product.name }}</h4>\n            <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n              <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n            </h1>\n          </div>\n          <!-- image -->\n          <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>Material</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>Product Sheet</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-md-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\" row col-md-12\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.patient\" required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-md-3\">\n          <dt class=\"title align-title\">{{ 'Customer Full Name' | translate }}</dt>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\" required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-md-6\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n          <div class=\"row col-md-12\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"params-left\">\n            <!--quantity right-->\n            <div>\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div >\n              <div class=\"row\">\n                <div class=\"params\" *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <!--param name-->\n                    <div class=\"label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values\">\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [required]=\"product.eyeRight\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--prices aditional-->\n              <div class=\"row\" [hidden]=\"!warrantyRight || !product.quantityRight\">\n                <span>{{ 'Additional by Warranty' | translate }}</span>\n                <h4 class=\"price\" >\n                  <span>{{ product.additional * product.quantityRight | currency : \"USD $\" }}</span>\n                </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"params-left\">\n            <!--quantity left-->\n            <div>\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div>\n              <div class=\"row\">\n                <div class=\"params\" *ngFor=\"let parameter of product.parametersLeft\">\n                  <div>\n                    <!--param name-->\n                    <div class=\"label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.selected\"\n                          bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [required]=\"product.eyeLeft\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--prices aditional-->\n              <div class=\"row\" [hidden]=\"!warrantyLeft || !product.quantityLeft\">\n                <span>{{ 'Additional by Warranty' | translate }}</span>\n                <h4 class=\"price\" >\n                  <span>{{ product.additional * product.quantityLeft | currency : \"USD $\" }}</span>\n                </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--comments-->\n      <div class=\"comments col-md-12\">\n\n        <!--HEADER-->\n        <div class=\"row header\">\n          <div class=\"col-sm-6 title\">{{ 'Comments Right Eye' | translate }}</div>\n          <div class=\"col-sm-6 title\">{{ 'Comments Left Eye' | translate }}</div>\n        </div>\n        <!--CONTENT-->\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n              placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n          </div>\n          <div class=\"col-md-6\">\n            <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n              placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n          </div>\n        </div>\n      </div>\n      <br>\n\n      <!--files-->\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Documents (Topography, Tangential Map, etc.)' | translate }}</dt>\n            <div class=\"custom-file\">\n              <input #selectedFiles type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploader\"\n                [disabled]=\"uploader.queue.length > 4\" multiple  />\n              <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n              <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n              <div class=\"message-error\">\n                <span translate>{{'Max files size:' | translate}} 25MB</span>\n                <span> / </span>\n                <span translate>{{'Maximum files number:' | translate }} 5</span>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"col-md-12\" style=\"margin-bottom: 40px\" *ngIf=\"uploader.queue.length > 0\">\n            <div class=\"row justify-content-end\" *ngIf=\"uploader.queue.length > 1\">\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\n                (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n              </button>\n            </div>\n            <br>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th width=\"50%\">{{ 'Name' | translate }}</th>\n                  <th>{{ 'Size' | translate }}</th>\n                  <th>{{ 'Actions' | translate }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                  <td><strong>{{ item?.file?.name }}</strong></td>\n                  <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                  <td nowrap>\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                      (click)=\"removeFile(item)\">\n                      <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br>\n\n    <div class=\"buy-btns\">\n      <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n        {{ 'Buy Now' | translate }}\n      </button>\n      <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n        <i class=\"fa fa-cart-plus\"></i> Add to cart\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #fbfbfb;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: flex;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n.preview-pic {\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .params-left {\n    display: flex; }\n.header-params .params-left > div:nth-child(1) {\n      padding-left: 2em;\n      flex-basis: 12%;\n      padding-right: 2.3em; }\n.header-params .params-left > div:nth-child(2) {\n      flex-basis: 83%; }\n.header-params .params-left > div:nth-child(2) > div:nth-child(1) {\n        display: flex;\n        justify-content: space-between; }\n.header-params .params-left > div:nth-child(2) > div:nth-child(1) .params {\n          flex-basis: 12%; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\n.comments {\n  margin-top: 1.5em; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n.custom-file-input {\n  cursor: pointer; }\n.message-error {\n  margin-top: 0; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.page-header-fixed {\n  margin-left: 15px; }\n"

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
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
var ProductViewEuclidComponent = /** @class */ (function () {
    function ProductViewEuclidComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
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
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.warrantyRight = false;
        this.warrantyLeft = false;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({ url: URL,
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
    ProductViewEuclidComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.clearFiles();
    };
    ProductViewEuclidComponent.prototype.getProducts = function () {
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
    ProductViewEuclidComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-15, -0.25, 0.25)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.pricesAditionalWarranties = JSON.parse(this.product.infoAditional)[1].values[0];
        this.product.priceSale = '';
        this.product.additional = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewEuclidComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Warranty') {
            parameter.selected = parameter.selected === 'Yes' ? true : false;
            if (eye === 'right') {
                if (parameter.selected) {
                    this.warrantyRight = true;
                }
                else {
                    this.warrantyRight = false;
                }
            }
            if (eye === 'left') {
                if (parameter.selected) {
                    this.warrantyLeft = true;
                }
                else {
                    this.warrantyLeft = false;
                }
            }
            if (this.client) {
                this.definePrice(this.client.membership.idMembership);
            }
        }
    };
    ProductViewEuclidComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
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
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
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
        var productsSelected = this.productsSelected;
        var warrantyRight = this.warrantyRight;
        var warrantyLeft = this.warrantyLeft;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                if (warrantyRight) {
                    productSelected.price = productSelected.price + product.additional;
                }
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                if (warrantyLeft) {
                    productSelected.price = productSelected.price + product.additional;
                }
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
    ProductViewEuclidComponent.prototype.addToCart = function (type) {
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
        this.basketRequestModal.idUser = this.client.idUser;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewEuclidComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewEuclidComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
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
    ProductViewEuclidComponent.prototype.removeFile = function (item) {
        this.uploader.removeFromQueue(item);
        this.clearSelectedFile();
    };
    ProductViewEuclidComponent.prototype.clearSelectedFile = function () {
        this.selectedFiles.nativeElement.value = '';
    };
    ProductViewEuclidComponent.prototype.clearFiles = function () {
        if (this.uploader.queue.length) {
            this.uploader.clearQueue();
            this.clearSelectedFile();
        }
    };
    ProductViewEuclidComponent.prototype.saveFiles = function () {
        this.listFileBasket = new Array;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewEuclidComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__["FileProductRequested"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewEuclidComponent.prototype, "selectedFiles", void 0);
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
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
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

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h4 class=\"product-title\">{{ product.name }}</h4>\n            <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n              <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n            </h1>\n          </div>\n          <!-- image -->\n          <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>Material</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>Product Sheet</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-md-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\" row col-md-12\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.patient\">\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-md-3\">\n          <dt class=\"title align-title\">{{ 'Customer Full Name' | translate }}</dt>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\">\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-md-6\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n          <div class=\"row col-md-12\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n\n          <!--row header right (contamac / hydrapeg / insertors)-->\n          <div class=\"row\">\n            <div class=\"col-md-2\" *ngFor=\"let header of product.headerRight\">\n              <div class=\"row\">\n                <div class=\"col-md-5 label\">\n                  <label class=\"form-check-label\">{{ header.name }}:</label>&nbsp;&nbsp;\n                </div>\n\n                <div class=\"select-values col-md-7\" *ngIf=\"header.type === 'selected'\">\n                  <ng-select (change)=\"changeSelect('right', header, $event)\" [items]=\"header.values\" [disabled]=\"!product.eyeRight\"\n                    [(ngModel)]=\"header.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                    {{item}}\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-md-1 quantity\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div class=\"col-md-11\">\n              <div class=\"row\">\n                <div class=\"col-md-2\" *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <!--param name-->\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"row\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-10\">\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                                    [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                                {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-10\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                                [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                      </div>\n\n                        <div *ngIf=\"parameter.type === 'selected-double'\" class=\"select-values col-sm-10\">\n                          <div class=\"row selected-double\">\n                            <div class=\"col-sm-6\">\n                              <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[0].values\" [disabled]=\"!product.eyeRight\"\n                                [(ngModel)]=\"parameter.values[0].selected\" bindLabel=\"item\" ng-pla bindValue=\"item\" placeholder=\"{{ 'depth' | translate }}\">\n                                {{item}}\n                              </ng-select>-->\n                              <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[0].placeholder | translate }}\"\n                                      [(ngModel)]=\"parameter.values[0].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                            </div>\n                            <div class=\"col-sm-6\">\n                              <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[1].values\" [disabled]=\"!product.eyeRight\"\n                                [(ngModel)]=\"parameter.values[1].selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'length' | translate }}\">\n                                {{item}}\n                              </ng-select>-->\n                              <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[1].placeholder | translate }}\"\n                                      [(ngModel)]=\"parameter.values[1].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--row steps right-->\n          <br>\n          <div class=\"row content-steps\">\n            <div class=\"col-md-4 title\" *ngFor=\"let PC of product.pasosRight\">\n              <label class=\"form-check-label\">{{ PC.name }}</label>&nbsp;&nbsp;\n              <div class=\"row steeps\">\n                <div class=\"col-md-6 sub-label\" *ngFor=\"let paso of PC.values\">\n                  <label class=\"form-check-label\">{{ paso.name }}</label>&nbsp;&nbsp;\n                  <div class=\"row\">\n                    <div *ngFor=\"let value of paso.values\" class=\"col-md-6 custom-control custom-checkbox\">\n                      <input class=\"custom-control-input\" type=\"checkbox\" id=\"{{ 'right' + PC.name + paso.name + value.name }}\"\n                              [(ngModel)]=\"value.selected\" (click)=\"setChecked(value, PC)\" [disabled]=\"!product.eyeRight\">\n                      <label class=\"custom-control-label\" for=\"{{ 'right'  + PC.name + paso.name + value.name }}\">{{ value.name }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <br>\n        </div>\n\n\n        <!-- row (parameters left) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n\n          <!--row header left (contamac / hydrapeg / insertors)-->\n          <div class=\"row\">\n            <div class=\"col-md-2\" *ngFor=\"let header of product.headerLeft\">\n              <div class=\"row\">\n                <div class=\"col-md-5 label\">\n                  <label class=\"form-check-label\">{{ header.name }}:</label>&nbsp;&nbsp;\n                </div>\n\n                <div class=\"select-values col-md-7\" *ngIf=\"header.type === 'selected'\">\n                  <ng-select (change)=\"changeSelect('left', header, $event)\" [items]=\"header.values\" [disabled]=\"!product.eyeLeft\"\n                    [(ngModel)]=\"header.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                    {{item}}\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-md-1 quantity\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div class=\"col-md-11\">\n              <div class=\"row\">\n                <div class=\"col-md-2\" *ngFor=\"let parameter of product.parametersLeft\">\n                  <div>\n                    <!--param name-->\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"row\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-10\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                                    bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                            {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-10\">\n                        <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                                [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                      </div>\n                      <div *ngIf=\"parameter.type === 'selected-double'\" class=\"select-values col-sm-10\">\n                        <div class=\"row selected-double\">\n                          <div class=\"col-sm-6\">\n                            <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[0].values\" [disabled]=\"!product.eyeRight\"\n                              [(ngModel)]=\"parameter.values[0].selected\" bindLabel=\"item\" ng-pla bindValue=\"item\" placeholder=\"{{ 'depth' | translate }}\">\n                              {{item}}\n                            </ng-select>-->\n                            <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[0].placeholder | translate }}\"\n                                    [(ngModel)]=\"parameter.values[0].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[1].values\" [disabled]=\"!product.eyeRight\"\n                              [(ngModel)]=\"parameter.values[1].selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'length' | translate }}\">\n                              {{item}}\n                            </ng-select>-->\n                            <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[1].placeholder | translate }}\"\n                                    [(ngModel)]=\"parameter.values[1].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--row steps left-->\n          <br>\n          <div class=\"row content-steps\">\n            <div class=\"col-md-4 title\" *ngFor=\"let PC of product.pasosLeft\">\n              <label class=\"form-check-label\">{{ PC.name }}</label>&nbsp;&nbsp;\n              <div class=\"row steeps\">\n                <div class=\"col-md-6 sub-label\" *ngFor=\"let paso of PC.values\">\n                  <label class=\"form-check-label\">{{ paso.name }}</label>&nbsp;&nbsp;\n                  <div class=\"row\">\n                    <div *ngFor=\"let value of paso.values\" class=\"col-md-6 custom-control custom-checkbox\">\n                      <input class=\"custom-control-input\" type=\"checkbox\" id=\"{{ 'left' + PC.name + paso.name + value.name }}\"\n                              [(ngModel)]=\"value.selected\" (click)=\"setChecked(value, PC)\" [disabled]=\"!product.eyeLeft\">\n                      <label class=\"custom-control-label\" for=\"{{ 'left'  + PC.name + paso.name + value.name }}\">{{ value.name }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <br>\n\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy Now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #fbfbfb;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: flex;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n.preview-pic {\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 2em; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.select-values {\n  padding-left: 0px; }\n.card-body {\n  padding: 20px !important; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px;\n  line-height: 30px; }\n.item-properties img {\n  width: 30px; }\n.check-steps {\n  display: flex; }\n.check-steps > input:nth-child(1) {\n    width: 20px;\n    height: 10px;\n    margin-left: 20px; }\n.content-steps .selection {\n  padding-right: 1.5rem;\n  padding-top: 30px; }\n.content-steps .steeps > div:nth-child(2) {\n  padding-left: 0; }\n.content-steps .sub-label {\n  padding-left: 25px; }\n.content-steps .sub-label .row {\n    padding-top: 5px;\n    padding-left: 15px; }\n.selected-double > div:nth-child(1) {\n  padding-right: 0px; }\n.selected-double > div:nth-child(2) {\n  padding-left: 2px; }\n.custom-file-input {\n  cursor: pointer; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.page-header-fixed {\n  margin-left: 15px; }\n"

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
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
var ProductViewEuropaComponent = /** @class */ (function () {
    function ProductViewEuropaComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, modalService, router, alertify, notification, translate) {
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
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({ url: URL,
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
    ProductViewEuropaComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.clearFiles();
    };
    ProductViewEuropaComponent.prototype.getProducts = function () {
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
    ProductViewEuropaComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](4, 10, 0.5)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.headerRight = JSON.parse(this.product.types)[0].header;
        this.product.headerLeft = JSON.parse(this.product.types)[0].header;
        this.product.pasosRight = JSON.parse(this.product.types)[0].pasos;
        this.product.pasosLeft = JSON.parse(this.product.types)[0].pasos;
        this.product.properties = JSON.parse(this.product.infoAditional)[0];
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewEuropaComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Hidrapeg' || parameter.name === 'Inserts') {
            parameter.selected = parameter.selected === "Yes" ? true : false;
        }
    };
    ProductViewEuropaComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
            this.product.quantityRight = '';
            if (this.product.eyeRight) {
                this.product.quantityRight = 1;
            }
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
            this.product.quantityLeft = '';
            if (this.product.eyeLeft) {
                this.product.quantityLeft = 1;
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
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                        return !(u.cardCode === null || u.cardCode === '');
                    });
                    // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                    // todavia no se agregado ese campo en la bd
                }
            });
        }
    };
    ProductViewEuropaComponent.prototype.onSelectedClient = function (clienteSelect) {
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
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewEuropaComponent.prototype.definePrice = function (membership) {
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
    ProductViewEuropaComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                /* headers*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.headerRight, function (parameter, index) {
                    product.headerRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.header = product.headerRight;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
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
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                /* headers*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.headerLeft, function (parameter, index) {
                    product.headerLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.header = product.headerLeft;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
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
            productSelected.detail = { name: product.type, eye: productSelected.eye, header: productSelected.header, parameters: productSelected.parameters, pasos: productSelected.pasos };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye', 'pasos', 'header']);
        });
        return productsSelected;
    };
    ProductViewEuropaComponent.prototype.addToCart = function (type) {
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
    ProductViewEuropaComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewEuropaComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
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
    ProductViewEuropaComponent.prototype.removeFile = function (item) {
        this.uploader.removeFromQueue(item);
        this.clearSelectedFile();
    };
    ProductViewEuropaComponent.prototype.clearSelectedFile = function () {
        this.selectedFiles.nativeElement.value = '';
    };
    ProductViewEuropaComponent.prototype.clearFiles = function () {
        if (this.uploader.queue.length) {
            this.uploader.clearQueue();
            this.clearSelectedFile();
        }
    };
    ProductViewEuropaComponent.prototype.saveFiles = function () {
        this.listFileBasket = new Array;
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewEuropaComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__["FileProductRequested"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], ProductViewEuropaComponent.prototype, "selectedFiles", void 0);
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
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewEuropaComponent);
    return ProductViewEuropaComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- image -->\n          <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Material' | translate }}</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Product Sheet' | translate }}</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' | translate }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient\n        <div class=\"col-md-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\" row col-md-12\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.patient\">\n          </div>\n        </div>-->\n\n        <!-- client -->\n        <div class=\"col-md-3\">\n          <dt class=\"title\">{{ 'Customer Full Name' | translate }}</dt>\n          <div class=\"col-md-12 input-align\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name client' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled required>\n          </div>\n          <div class=\"col-md-12 input-align\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Introduce name client' | translate }}\" required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-md-6\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n          <div class=\"row col-md-12\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected' | translate }}\"\n              readonly>\n          </div>\n        </div>\n        <!--Price-->\n        <div class=\"col-md-3\">\n          <h4 class=\"padding-price\" [hidden]=\"(priceFrom==='' && priceUp==='') || product.priceSale !==''\">\n            <span>{{ priceFrom | currency : \"USD $\"}}{{priceFrom ? ' - ':''}}{{ priceUp | currency : \"$\"}}</span>\n            <span></span>\n          </h4>\n          <h4 class=\"padding-price\" [hidden]=\"product.priceSale===''\">\n            <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n          </h4>\n        </div>\n      </div>\n\n      <!-- row (general parameters) -->\n      <div class=\"row specifications\">\n        <div class=\"col-md-12 title\">\n          <label class=\"form-check-label\">{{ 'General Parameters' | translate }}</label>\n        </div>\n        <!--PARAMS-->\n        <div class=\"col-md-12 generals\">\n          <div *ngFor=\"let parameter of product.parameters\" class=\"col-md-2\">\n            <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n              <div class=\"title\">\n                <label class=\"form-check-label\">{{ parameter.name | translate }}</label>\n              </div>\n              <div>\n                <label class=\"form-check-label\">{{ parameter.values }}</label>\n              </div>\n              <!-- DESCOMENTAR SI SE AGREGAN MÁS PARÁMETROS\n              <div class=\"selection\">\n                <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values \">\n                  <ng-select (change)=\"changeSelect(parameter, $event)\" [items]=\"parameter.values\"\n                    [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                    {{item}}\n                  </ng-select>\n                </div>\n              </div>\n              -->\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (first box, parameters) -->\n      <div class=\"row col-md-12 specifications title\">\n        <label> {{ 'Please specific your product' | translate }}</label>\n      </div>\n      <div class=\"row specifications\" *ngFor=\"let box of boxes; let index = index\">\n        <div class=\"col-md-1 title\">\n          <label class=\"form-check-label\">{{ 'Box' | translate }} {{ ' ' + (index+1) }}</label>\n        </div>\n        <!--QANTITY-->\n        <div class=\"col-md-2\">\n          <div class=\"row title\">\n            <label class=\"form-check-label\">{{ 'Quantity' | translate }}</label>\n          </div>\n          <div class=\"row\">\n            <input class=\"form-control\" [ngClass]=\"{'error-quantity':  box.quantity && box.quantity%50 !== 0 }\" type=\"number\" step=\"50\" min=\"50\" [(ngModel)]=\"box.quantity\" (change)=\"box.quantity%50 !== 0 ? box.quantity = '' : '';setPriceBoxes(box.quantity)\" required>\n          </div>\n        </div>\n        <!--PARAMS-->\n        <div class=\"col-md-8 params\">\n          <div *ngFor=\"let parameter of box.parameters\" class=\"col-md-6\">\n            <div *ngIf=\"parameter.values && parameter.values.length > 0\" class=\"col-md-12\">\n              <div class=\"title col-md-12\">\n                <label class=\"form-check-label\">{{ parameter.name | translate }}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values\">\n                  <ng-select (change)=\"changeSelect(parameter, $event)\" [items]=\"parameter.values\" [(ngModel)]=\"parameter.sel\"\n                    bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" required>\n                    {{item}}\n                  </ng-select>\n                </div>\n                <div *ngIf=\"parameter.type === 'image'\" class=\"select-values \">\n                  <ng-select [items]=\"tones[box.parameters[0].selected]\" [(ngModel)]=\"parameter.selected\" bindLabel=\"value\"\n                    bindValue=\"value\" placeholder=\"{{ 'Select value' | translate }}\" [disabled]=\"!box.parameters[0].selected\" required>\n                    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                      <div class=\"main-info\">\n                        <img height=\"100\" width=\"125\" [src]=\"item.image\" class=\"img-color\" />\n                      </div>\n                    </ng-template>\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n        </div>\n        <div class=\"col-md-1 hand-over\">\n          <span class=\"fa fa-trash\" placement=\"top\" ngbTooltip=\"{{'Delete Box' | translate}}\" (click)=\"removeBox(index)\"></span>\n          <span class=\"fa fa-plus-circle\" placement=\"top\" ngbTooltip=\"{{'Add Box' | translate}}\" (click)=\"addBox()\"></span>\n        </div>\n      </div>\n\n      <div class=\"buy-btns\">\n        <div>\n          <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase padding-btn\" (click)=\"formIsValid() && addToCart(2)\"\n            [disabled]=\"!formIsValid()\">\n            {{ 'Buy Now' | translate }}\n          </button>\n        </div>\n        <div>\n          <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n            <i class=\"fa fa-cart-plus\"></i>{{ 'Add to cart' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 3em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: flex;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n.preview-pic {\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.hand-over {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-evenly; }\n.product-title {\n  margin-top: 0; }\n.product-info {\n  padding-top: 3em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.product-info .input-align {\n    padding-left: 0px; }\n.specifications {\n  padding-top: 2em;\n  align-items: center; }\n.specifications .generals {\n    display: flex; }\n.specifications .params {\n    display: flex;\n    justify-content: space-around; }\n.specifications .params .select-values {\n      padding-left: 0px; }\n.specifications .error-quantity {\n    color: red; }\n.specifications.btn-box {\n    justify-content: flex-start; }\nimg {\n  max-width: 100%; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.buy-btns {\n  padding-top: 3em;\n  display: flex;\n  justify-content: flex-end; }\n.buy-btns :first-child {\n    padding-right: 1em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.title {\n  font-weight: 600; }\n.title.align-title {\n    padding-left: 1em; }\n.readonly-input {\n  background-color: #ffffff; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n.padding-price {\n  padding-top: 1.1em; }\n"

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
    function ProductViewMagicComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
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
        this.products = new Array;
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
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
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
        var boxes = this.boxesCopy;
        var boxesProduct = [];
        var productSelected = {
            id: product.idProduct,
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
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewMagicComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationMagicLookComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
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
                if (this.clientSelected !== undefined) {
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewMagicComponent);
    return ProductViewMagicComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view/product-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"\">\n      <!-- row (name-price-image) -->\n      <div class=\"row wrapper\">\n        <div class=\"preview col-md-12\">\n          <!-- name-price -->\n          <div class=\"main-info\">\n            <h4 class=\"product-title\">{{ product.name }}</h4>\n            <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n              <span>{{ product.priceSale | currency : \"USD $\" }}</span>\n            </h1>\n          </div>\n          <!-- image -->\n          <div class=\"preview-pic tab-content main-info\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- row (properties-material-replacement-warranty-sheet) -->\n      <div class=\"row product-info\">\n        <div class=\"item-properties col-md-2\">\n          <dt>{{ product.properties.name | translate }}</dt>\n          <p>\n            <!--<img *ngFor=\"let property of product.properties.values\" placement=\"top\" ngbTooltip=\"{{ property.title }}\"\n              class=\"\" src=\"{{ property.image }}\" width=\"30\" height=\"30\">&nbsp;-->\n          </p>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>Material</dt>\n          <dd>\n            <a>{{ product.material }}</a>\n          </dd>\n        </div>\n        <div class=\"col-md-3\">\n          <dt>{{ 'Replacemente Period' | translate }}</dt>\n          <p>{{ product.replacementPeriod | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>{{ 'Warranty' | translate }}</dt>\n          <p>{{ product.warranty }} {{ 'days' | translate }}</p>\n        </div>\n        <div class=\"col-md-2\">\n          <dt>Product Sheet</dt>\n          <dd>\n            <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n          </dd>\n        </div>\n      </div>\n\n      <!-- row (pacient, client, shipping address) -->\n      <div class=\"row product-info\">\n        <!-- patient -->\n        <div class=\"col-md-3\">\n          <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n          <div class=\" row col-md-12\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.patient\" required>\n          </div>\n        </div>\n\n        <!-- client -->\n        <div class=\"col-md-3\">\n          <dt class=\"title align-title\">{{ 'Customer Full Name' | translate }}</dt>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole !== 3\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\"\n              [(ngModel)]=\"product.client\" disabled>\n          </div>\n          <div class=\"col-md-12\" [hidden]=\"user.role.idRole === 3\">\n            <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\"\n              [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\" required>\n            </ng-select>\n          </div>\n        </div>\n        <!--shipping address-->\n        <div class=\"col-md-6\">\n          <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n          <div class=\"row col-md-12\">\n            <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\"\n              readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row product-info\">\n        <div class=\"col-md-12 title\">\n          <label> {{ 'Please specific your product' | translate }}</label>\n        </div>\n      </div>\n\n      <!-- row (parameters) -->\n      <div class=\"row header-params\">\n        <!-- row (parameters right) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity right-->\n            <div class=\"col-md-2 quantity\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\" [required]=\"product.eyeRight\">\n              </div>\n            </div>\n            <!--params right-->\n            <div class=\"col-md-10\">\n              <div class=\"row\">\n                <div class=\"col-md-2\" *ngFor=\"let parameter of product.parametersRight\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <!--param name-->\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\" [required]=\"product.eyeRight\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- row (parameters left) -->\n        <div class=\"col-md-12 custom-control custom-checkbox\">\n          <!--header-->\n          <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n            class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n          <div class=\"title\">{{ 'Parameters' | translate }}</div>\n          <div class=\"row\">\n            <!--quantity left-->\n            <div class=\"col-md-2 quantity\">\n              <div class=\"row\">\n                <label class=\"form-check-label\">{{ 'Quantity' }}:</label>\n              </div>\n              <div class=\"row\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\"\n                          oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\">\n              </div>\n            </div>\n            <!--params left-->\n            <div class=\"col-md-10\">\n              <div class=\"row\">\n                <div class=\"col-md-2\" *ngFor=\"let parameter of product.parametersLeft\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <!--param name-->\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                    <!--param values-->\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [required]=\"product.eyeLeft\"\n                          [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--row (comments)-->\n      <div class=\"row comments\">\n        <div class=\"col-md-12\">\n\n          <!--HEADER-->\n          <div class=\"row header\">\n            <div class=\"col-sm-6 title\">{{ 'Comments Right Eye' | translate }}</div>\n            <div class=\"col-sm-6 title\">{{ 'Comments Left Eye' | translate }}</div>\n          </div>\n          <!--CONTENT-->\n          <div class=\"row content\">\n            <div class=\"col-md-6\">\n              <textarea class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n            </div>\n            <div class=\"col-md-6\">\n              <textarea class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <br>\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy Now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-view/product-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #fbfbfb;\n    padding: 3em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n.tab-content {\n  overflow: hidden; }\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n.preview {\n  display: flex;\n  flex-direction: column; }\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n.preview-pic {\n  flex-grow: 1; }\n.preview-pic #pic-1 img {\n    height: 15em;\n    width: 25em;\n    border-radius: 12px; }\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n.product-title {\n  margin-top: 0; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.header-params .quantity {\n    padding-left: 3em; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.comments {\n  padding-top: 20px; }\nimg {\n  max-width: 100%; }\n.select-values {\n  padding-left: 0px; }\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\nimg {\n  max-width: 100%; }\n.card {\n  background: #fbfbfb;\n  padding: 2em;\n  line-height: 1.5em; }\n.checked,\n.price span {\n  color: #ff9f1a; }\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n.buy-btns {\n  text-align: right; }\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n.tooltip-inner {\n  padding: 1.3em; }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.fa-arrow-left {\n  margin-top: 10px; }\n.title {\n  font-weight: 600; }\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

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
    function ProductViewComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, modalService, alertify, notification, translate) {
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
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-3, -1.75, 0.25)));
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
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
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
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
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
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values']);
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
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationMarkennovyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
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
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null || param.selected === undefined) {
                    isValid = false;
                }
            });
        }
        return isValid;
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
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

module.exports = "<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\"></ngx-spinner>\n<br>\n<br>\n<br>\n<div class=\"margin-breadcrumb\">\n\t<div class=\"header-body\">\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li class=\"breadcrumb-item\">\n\t\t\t\t<a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\t\t\t\t<a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products']\"><i class=\"fa fa-dashboard\"></i> {{ 'Products List' | translate }}</a>\n\t\t\t</li>\n\t\t\t<li class=\"breadcrumb-item active\">\n\t\t\t\t<i class=\"fa fa-edit\"></i> {{ nameSupplier }}</li>\n\t\t</ol>\n\t</div>\n</div>\n<div class=\"middleBar\" [hidden]=\"showSuppliers\">\n  <div class=\"row display-table\">\n    <div class=\"col-sm-1 vertical-align text-left hidden-xs\">\n    </div>\n    <!-- end col -->\n    <div class=\"col-sm-6 vertical-align text-center\">\n      <form>\n        <div class=\"row grid-space-1\">\n          <div class=\"col col-xl-12 col-lg-12 search\">\n            <input type=\"text\" class=\"form-control\" (keyup)=\"filter('byName')\" placeholder=\" {{ 'Enter product name...' | translate }}\" name=\"filterName\" [(ngModel)]=\"filterName\">\n            <i class=\"fa fa-search\"></i>\n          </div>\n        </div>\n        <!-- end row -->\n      </form>\n    </div>\n    <div class=\"col col-xl-1 col-lg-1 filter\" [hidden]=\"idSupplier !== 1\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" value=\"3\" class=\"custom-control-input\" (change)=\"filter('All')\" checked>\n        <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'All' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"col col-xl-1 col-lg-1 filter\" [hidden]=\"idSupplier !== 1\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" value=\"0\" class=\"custom-control-input\" (change)=\"filter('Monthly')\">\n        <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Monthly' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"col col-xl-1 col-lg-1 filter\" [hidden]=\"idSupplier !== 1\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio3\" name=\"customRadio\" value=\"1\" class=\"custom-control-input\" (change)=\"filter('3-Monthly')\">\n        <label class=\"custom-control-label\" for=\"customRadio3\">{{ '3-Monthly' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"col col-xl-1 col-lg-1 filter\" [hidden]=\"idSupplier !== 1\">\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio4\" name=\"customRadio\" value=\"2\" class=\"custom-control-input\" (change)=\"filter('Conventional')\">\n        <label class=\"custom-control-label\" for=\"customRadio4\">{{ 'Conventional' | translate }}</label>\n      </div>\n    </div>\n    <!-- end col -->\n  </div>\n  <!-- end  row -->\n</div>\n\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!--THUMBNAILS PRODUCTS-->\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\n      <div class=\"row\">\n        <div class=\"col-md-4 box-shadow\" *ngFor=\"let product of products\">\n          <div class=\"mb-4 box-shadow\">\n            <img class=\"card-img-top\" src=\"{{ product.mainImg }}\" (click)=\"redirectView(product)\">\n            <h4 class=\"product-name\" (click)=\"redirectView(product)\">\n              <i class=\"fa fa-exclamation-triangle\" placement=\"top\" ngbTooltip=\"{{'Inactive' | translate}}\" [hidden]=\"product.status === 1\"></i>\n              {{ product.name }}\n            </h4>\n            <div class=\"card-body\">\n              <p class=\"card-text\"> {{ product.descriptionShort }}</p>\n              <div class=\"price-wrap h4\" [hidden]=\"user.role.idRole!==3\">\n                <!--<del class=\"price-base\">${{ product.priceBase }}</del>&nbsp;-->\n                <span [hidden]=\"product.supplier.idSupplier === 5\" class=\"price-new\">{{ product.priceSale | currency : \"USD $\" }}</span>\n                <span [hidden]=\"product.supplier.idSupplier !== 5\" class=\"price-new\">{{ priceFrom | currency : \"USD $\"}}{{priceFrom ? ' - ':''}}{{ priceUp | currency : \"$\"}}</span>\n              </div>\n              <div class=\"product-btns\">\n                <div class=\"btn-group\">\n                  <button (click)=\"redirectView(product)\" [hidden]=\"user.role.idRole === 3 || user.role.idRole === 2\" type=\"button\" class=\"btn btn-primary\">{{ 'View' | translate}}</button>\n                  <button (click)=\"open(product,'edit')\" [hidden]=\"user.role.idRole === 3 || user.role.idRole === 2\" type=\"button\" class=\"btn btn-sm btn-outline-secondary\">{{ 'Edit' | translate }}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products-lists-internal/products-lists-internal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/products/products-lists-internal/products-lists-internal.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.margin-list {\n  margin-left: 20% !important; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.search {\n  padding-bottom: 1.5rem; }\n.search i {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    color: #ced4da; }\n.filter {\n  padding-top: 7px; }\n.middleBar {\n  padding: 0px 25px 15px 35px; }\n.middleBar .display-table {\n    padding-right: 20px !important; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.btn-align {\n  text-align: center;\n  padding-bottom: 20px; }\n.card {\n  margin-top: 30px; }\n.card-img-top {\n  border-radius: 40px;\n  cursor: pointer;\n  height: 220px;\n  width: 80%;\n  margin-left: 10%;\n  padding: 5%; }\n.card-body {\n  padding-top: 2px; }\n.product-name {\n  text-align: center;\n  color: #1756a6;\n  padding-top: 10px;\n  cursor: pointer;\n  height: 75px; }\n.card-product:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  visibility: hidden; }\n.card-product .price-new, .card-product .price {\n  margin-right: 5px; }\n.price-base {\n  color: #999; }\n.card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 220px;\n  text-align: center; }\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .action-wrap {\n  padding-top: 4px;\n  margin-top: 4px; }\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .title {\n  margin-top: 0; }\nbody {\n  margin-top: 50px; }\n.glyphicon {\n  margin-right: 10px; }\n.panel-body {\n  padding: 0px; }\n.panel-body table tr td {\n  padding-left: 15px; }\n.panel-body .table {\n  margin-bottom: 0px; }\n.product-btns {\n  text-align: right; }\n.fa-exclamation-triangle {\n  color: #cc0000; }\n"

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
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductsListInternalComponent.prototype.ngOnInit = function () {
        this.idSupplier = +this.route.snapshot.paramMap.get('idSupplier');
        this.getProducts();
        this.filterMarkennovy = 'All';
        this.filterName = '';
    };
    ProductsListInternalComponent.prototype.getProducts = function () {
        var _this = this;
        var idSupplier = this.idSupplier;
        this.spinner.show();
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.products = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](_this.products, function (product) {
                    return product.supplier.idSupplier === idSupplier;
                });
                _this.setPrice();
                _this.nameSupplier = _this.products[0] ? _this.products[0].supplier.companyName : '';
                _this.productsAux = _this.products;
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
            case 1://markennovy
                this.router.navigate(['/products/' + product.idProduct + '/product-view']);
                break;
            case 2://europa
                this.router.navigate(['/products/' + product.idProduct + '/product-view-europa']);
                break;
            case 4://euclid
                this.router.navigate(['/products/' + product.idProduct + '/product-view-euclid']);
                break;
            case 5://magic look
                this.router.navigate(['/products/' + product.idProduct + '/product-view-magic']);
                break;
            case 6://magic blue
                this.router.navigate(['/products/' + product.idProduct + '/product-view-blue']);
                break;
        }
    };
    ProductsListInternalComponent.prototype.open = function (product, action) {
        var _this = this;
        if (product.supplier.idSupplier !== 5) {
            var modalRef = this.modalService.open(_modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], {
                size: 'lg',
                windowClass: 'modal-content-border'
            });
            modalRef.componentInstance.product = product;
            modalRef.componentInstance.action = action;
            modalRef.result.then(function (result) {
                _this.getProducts();
            }, function (reason) { });
        }
        else {
            var modalRef = this.modalService.open(_modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_9__["EditProductMagicLookComponent"], {
                size: 'lg',
                windowClass: 'modal-content-border'
            });
            modalRef.componentInstance.product = product;
            modalRef.componentInstance.action = action;
            modalRef.result.then(function (result) {
                _this.getProducts();
            }, function (reason) { });
        }
    };
    ProductsListInternalComponent.prototype.getItems = function () {
        var val = this.filterName;
        if (val && val.trim() !== '') {
            this.products = this.products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ProductsListInternalComponent.prototype.filter = function (type) {
        var _this = this;
        this.products = this.productsAux;
        if (type !== 'byName') {
            this.filterMarkennovy = type;
        }
        if (this.filterMarkennovy === 'All') {
            this.getItems();
            return;
        }
        var val = this.filterName;
        this.products = this.products.filter(function (item) {
            return item.replacementPeriod === _this.filterMarkennovy;
        });
        if (val && val.trim() !== '') {
            this.products = this.products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ProductsListInternalComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'filter2' && $event.nextState === false) {
            $event.preventDefault();
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

module.exports = "<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\"></ngx-spinner>\n<br>\n<br>\n<br>\n<div class=\"margin-breadcrumb\">\n\t<div class=\"header-body\">\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li class=\"breadcrumb-item\">\n\t\t\t\t<a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n\t\t\t</li>\n\t\t\t<li class=\"breadcrumb-item active\">\n\t\t\t\t<i class=\"fa fa-edit\"></i> {{ 'Products List' | translate}}</li>\n\t\t</ol>\n\t</div>\n</div>\n<br><br><br><br>\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!--FILTERS\n    <div class=\"col-sm-3 col-md-3 hidden-xs\">\n      <ngb-accordion activeIds=\"filter2\" type=\"dark\" (panelChange)=\"beforeChange($event)\">\n        <ngb-panel id=\"filter2\">\n          <ng-template ngbPanelTitle>\n            <span class=\"title-collapse\">{{ 'Contact Lenses' | translate }}</span>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            <div *ngFor=\"let supplier of listSupplierFilter; let i = index\">\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"radioGroupSupplier{{i}}\" name=\"radioGroupSupplier\" [value]=\"supplier.idSupplier\" (change)=\"onSelectionSupplier(supplier.idSupplier)\" [checked]=\"supplier.idSupplier===1000\"\n                  class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"radioGroupSupplier{{i}}\">{{ supplier.companyName | translate }}</label>\n              </div>\n            </div>\n            <div class=\"col-sm-12\" *ngFor=\"let category of auxCategories; let i = index\" [hidden]=\"!visible || category.name === 'Other'\">\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"radioGroupCategory{{i}}\" name=\"radioGroupCategory\" [value]=\"category.idCategory\" (change)=\"onSelectionCategory(category.idCategory)\"\n                  class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"radioGroupCategory{{i}}\">{{ category.name | translate }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n    </div>-->\n    <!--THUMBNAILS PRODUCTS-->\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\n      <div class=\"row\">\n        <div class=\"col-md-4 box-shadow\" *ngFor=\"let supplier of listSupplier\">\n          <div class=\"mb-4 box-shadow\">\n            <img class=\"card-img-top\" src=\"{{ supplier.image }}\" (click)=\"onSelectionSupplier(supplier.idSupplier)\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.margin-list {\n  margin-left: 20% !important; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.search {\n  padding-bottom: 1.5rem; }\n.search i {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    color: #ced4da; }\n.middleBar {\n  padding: 0px 25px 15px 35px; }\n.middleBar .display-table {\n    padding-right: 20px !important; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.btn-align {\n  text-align: center;\n  padding-bottom: 20px; }\n.card {\n  margin-top: 30px; }\n.card-img-top {\n  border-radius: 40px;\n  cursor: pointer;\n  height: 220px;\n  width: 80%;\n  margin-left: 10%;\n  padding: 5%; }\n.card-body {\n  padding-top: 2px; }\n.product-name {\n  text-align: center;\n  color: #1756a6;\n  padding-top: 10px;\n  cursor: pointer;\n  height: 75px; }\n.card-product:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  visibility: hidden; }\n.card-product .price-new, .card-product .price {\n  margin-right: 5px; }\n.price-base {\n  color: #999; }\n.card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 220px;\n  text-align: center; }\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .action-wrap {\n  padding-top: 4px;\n  margin-top: 4px; }\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .title {\n  margin-top: 0; }\nbody {\n  margin-top: 50px; }\n.glyphicon {\n  margin-right: 10px; }\n.panel-body {\n  padding: 0px; }\n.panel-body table tr td {\n  padding-left: 15px; }\n.panel-body .table {\n  margin-bottom: 0px; }\n.product-btns {\n  text-align: right; }\n.fa-exclamation-triangle {\n  color: #cc0000; }\n"

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
    function ProductsListsComponent(userStorageService, modalService, supplierUserService, router, supplierService, categoryService, spinner) {
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        this.supplierUserService = supplierUserService;
        this.router = router;
        this.supplierService = supplierService;
        this.categoryService = categoryService;
        this.spinner = spinner;
        this.listSupplier = new Array();
        this.listSupplierAux = new Array();
        this.listSupplierFilter = new Array();
        this.auxCategories = new Array;
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
                    }
                });
                _this.getSuppliers();
            }
        });
    };
    ProductsListsComponent.prototype.getSuppliers = function () {
        var _this = this;
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
                    _this.listSupplier = supplierFiltered_1;
                    _this.listSupplierFilter = supplierFiltered_1;
                    _this.orderList();
                }
                else {
                    _this.listSupplier = _this.listSupplierFilter;
                    _this.orderList();
                }
                _this.setImageSupplier();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListsComponent.prototype.setImageSupplier = function () {
        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.listSupplier, function (supplier) {
            switch (supplier.idSupplier) {
                case 1:// Markennoy
                    supplier.image = 'assets/images/suppliers/markennovy.jpg';
                    break;
                case 2:// Europa
                    supplier.image = 'assets/images/suppliers/europa.jpg';
                    break;
                case 3:// Lenticon
                    supplier.image = 'assets/images/suppliers/lenticon.jpg';
                    break;
                case 4:// Euclid
                    supplier.image = 'assets/images/suppliers/euclid.jpg';
                    break;
                case 5:// Magic Look
                    supplier.image = 'assets/images/suppliers/magiclook.png';
                    break;
                case 6:// Blue Light
                    supplier.image = 'assets/images/suppliers/bluelight.png';
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
        this.router.navigate(['/products/' + idSupplier + '/internal']);
    };
    ProductsListsComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'filter2' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ProductsListsComponent.prototype.orderList = function () {
        var array = [{ idSupplier: 1000, companyName: 'All' }];
        this.listSupplierFilter = lodash__WEBPACK_IMPORTED_MODULE_3__["concat"](this.listSupplierFilter, array);
        this.listSupplierFilter = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](this.listSupplierFilter, ['idSupplier'], ['desc']);
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
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
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
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"]
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
                _modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_26__["EditProductMagicLookComponent"]
            ],
            entryComponents: [_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationBuyComponent"],
                _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__["EditProductComponent"],
                _modals_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_22__["NotificationBalanceComponent"],
                _modals_confirmation_buy_confirmation_magic_look_confirmation_magic_look_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmationMagicLookComponent"],
                _modals_confirmation_buy_confirmation_markennovy_confirmation_markennovy_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationMarkennovyComponent"],
                _modals_confirmation_buy_confirmation_blue_light_confirmation_blue_light_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmationBlueLightComponent"],
                _modals_edit_product_edit_product_magic_look_edit_product_magic_look_component__WEBPACK_IMPORTED_MODULE_26__["EditProductMagicLookComponent"]
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

/***/ "./src/app/shared/models/productrequested.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/productrequested.ts ***!
  \***************************************************/
/*! exports provided: ProductRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRequested", function() { return ProductRequested; });
var ProductRequested = /** @class */ (function () {
    function ProductRequested() {
    }
    return ProductRequested;
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
    ProductService.prototype.update$ = function (product) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'products/update', product);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
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