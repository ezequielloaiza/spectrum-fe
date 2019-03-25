(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-temporals-password-temporals-module"],{

/***/ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/password-temporals/change-password-temporal/change-password-temporal.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bootstrap snippet\">\n  <div class=\"row justify-content-md-center\">\n    <!--/col-12-->\n    <div class=\"col-md-6\">\n      <hr>\n      <form [formGroup]=\"form\">\n        <div class=\"form-options\">\n          <h4>{{ 'Change Temporary Password' | translate }}</h4>\n          <label>{{ 'Please change the temporary password to access the system' | translate }}</label>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label>{{ 'Username' | translate }}</label>\n              <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" placeholder=\"Username\"\n                  aria-describedby=\"usernameHelpBlock\" readonly required>\n              </div>\n              <small id=\"usernameHelpBlock\" class=\"form-text text-muted\">\n                {{'You can not edit your username' | translate }}\n              </small>\n            </fieldset>\n            <div class=\"message-error\" [hidden]=\"username.valid || username.pristine\">\n              <span>{{ 'Username is required' | translate }}</span>\n            </div>\n          </div>\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label for=\"oldPassword\" class=\"control-label\">{{'Old Password' | translate}}</label>&nbsp;&nbsp;\n              <i class=\"fa fa-lock\" placement=\"top\" ngbTooltip=\"{{'For security your password is encrypted' | translate}}\"></i>\n              <input type=\"password\" class=\"form-control\" name=\"oldPassword\" formControlName=\"oldPassword\" aria-describedby=\"passwordHelpBlock\" required>\n            </fieldset>\n            <div class=\"message-error\" [hidden]=\"oldPassword.valid || oldPassword.pristine\">\n              <span>{{ 'Password is not valid' | translate }}</span>\n            </div>\n          </div>\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label for=\"password\" class=\"control-label\">{{'Password' | translate}}</label>&nbsp;&nbsp;\n              <i class=\"fa fa-lock\" placement=\"top\" ngbTooltip=\"{{'For security your password is encrypted' | translate}}\"></i>\n              <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" aria-describedby=\"passwordHelpBlock\"\n                required>\n            </fieldset>\n            <div class=\"message-error\" [hidden]=\"password.valid || password.pristine\">\n              <span>{{ 'Password is not valid' | translate }}</span>\n            </div>\n          </div>\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label for=\"confirmedPassword\" class=\"control-label\">{{'Confirm Password' | translate}}</label>&nbsp;&nbsp;\n              <i class=\"fa fa-lock\" placement=\"top\" ngbTooltip=\"{{'For security your password is encrypted' | translate}}\"></i>\n              <input type=\"password\" class=\"form-control\" name=\"confirmedPassword\" formControlName=\"confirmedPassword\"\n                aria-describedby=\"passwordHelpBlock\" [ngStyle]=\"{'border-left': (form.get(['password']).value != form.get(['confirmedPassword']).value\n                                && form.get(['confirmedPassword']).value != null\n                               || form.get(['password']).value === ''\n                               || form.get(['confirmedPassword']).value === '') === false ? '5px solid green' : '5px solid red' }\"\n                required>\n            </fieldset>\n            <div class=\"message-error\" *ngIf=\"form.get(['password']).value != form.get(['confirmedPassword']).value\n                        && form.get(['confirmedPassword']).value != null\">\n              <span>{{ 'Passwords do not match' | translate }}</span>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"footer-form\">\n          <button class=\"btn btn-main\" (click)=\"saveAccount()\" [disabled]=\"form.get(['password']).value != form.get(['confirmedPassword']).value\n                              && form.get(['confirmedPassword']).value != null\n                              || form.get(['password']).value === ''\n                              || form.get(['confirmedPassword']).value === ''\n                              || form.get(['oldPassword']).value === ''\">{{ 'Save' | translate }}&nbsp;\n            <i class=\"fa fa-save\"></i>\n          </button>\n        </div>\n        <br>\n      </form>\n      <hr>\n      <!--/tab-pane-->\n    </div>\n    <!--/tab-content-->\n  </div>\n  <!--/col-9-->\n</div>\n<!--/row-->\n"

/***/ }),

/***/ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/password-temporals/change-password-temporal/change-password-temporal.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.footer-form {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/password-temporals/change-password-temporal/change-password-temporal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChangePasswordTemporalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordTemporalComponent", function() { return ChangePasswordTemporalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChangePasswordTemporalComponent = /** @class */ (function () {
    function ChangePasswordTemporalComponent(router, formBuilder, googleService, userService, userStorageService, notification, translate) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.googleService = googleService;
        this.userService = userService;
        this.userStorageService = userStorageService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function () { return function () { return _this.searching = false; }; });
    }
    ChangePasswordTemporalComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
        this.initializeForm();
        this.form.get('username').setValue(this.user.userResponse.username);
    };
    ChangePasswordTemporalComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmedPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    ChangePasswordTemporalComponent.prototype.saveAccount = function () {
        var _this = this;
        this.userService.changePassword$(this.form.value).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].ok) {
                _this.user.userResponse.pwsTemporal = res.data.pwsTemporal;
                _this.userStorageService.saveCurrentUser(JSON.stringify(_this.user));
                _this.router.navigateByUrl('');
                _this.notification.success('User save', 'Success');
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].notFound) {
                _this.translate.get('Password do not match with old password', { value: 'Password do not match with old password' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].notAcceptable) {
                _this.translate.get('Password matches with old password', { value: 'Password matches with old password' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    Object.defineProperty(ChangePasswordTemporalComponent.prototype, "username", {
        get: function () { return this.form.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordTemporalComponent.prototype, "oldPassword", {
        get: function () { return this.form.get('oldPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordTemporalComponent.prototype, "password", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordTemporalComponent.prototype, "confirmedPassword", {
        get: function () { return this.form.get('confirmedPassword'); },
        enumerable: true,
        configurable: true
    });
    ChangePasswordTemporalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password-temporal',
            template: __webpack_require__(/*! ./change-password-temporal.component.html */ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.html"),
            styles: [__webpack_require__(/*! ./change-password-temporal.component.scss */ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["GoogleService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_6__["UserStorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], ChangePasswordTemporalComponent);
    return ChangePasswordTemporalComponent;
}());



/***/ }),

/***/ "./src/app/password-temporals/password-temporals-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/password-temporals/password-temporals-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PasswordTemporalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordTemporalsRoutingModule", function() { return PasswordTemporalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _password_temporals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-temporals.component */ "./src/app/password-temporals/password-temporals.component.ts");
/* harmony import */ var _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password-temporal/change-password-temporal.component */ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _password_temporals_component__WEBPACK_IMPORTED_MODULE_2__["PasswordTemporalsComponent"],
        children: [
            { path: '', component: _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordTemporalComponent"] }
        ]
    }
];
var PasswordTemporalsRoutingModule = /** @class */ (function () {
    function PasswordTemporalsRoutingModule() {
    }
    PasswordTemporalsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PasswordTemporalsRoutingModule);
    return PasswordTemporalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/password-temporals/password-temporals.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/password-temporals/password-temporals.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"main-container-pws-temporal\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/password-temporals/password-temporals.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/password-temporals/password-temporals.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container-pws-temporal {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container-pws-temporal {\n    margin-left: 0px !important; } }\n\n.icon-sort {\n  margin-left: 200px; }\n"

/***/ }),

/***/ "./src/app/password-temporals/password-temporals.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/password-temporals/password-temporals.component.ts ***!
  \********************************************************************/
/*! exports provided: PasswordTemporalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordTemporalsComponent", function() { return PasswordTemporalsComponent; });
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

var PasswordTemporalsComponent = /** @class */ (function () {
    function PasswordTemporalsComponent() {
    }
    PasswordTemporalsComponent.prototype.ngOnInit = function () {
    };
    PasswordTemporalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-temporals',
            template: __webpack_require__(/*! ./password-temporals.component.html */ "./src/app/password-temporals/password-temporals.component.html"),
            styles: [__webpack_require__(/*! ./password-temporals.component.scss */ "./src/app/password-temporals/password-temporals.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordTemporalsComponent);
    return PasswordTemporalsComponent;
}());



/***/ }),

/***/ "./src/app/password-temporals/password-temporals.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/password-temporals/password-temporals.module.ts ***!
  \*****************************************************************/
/*! exports provided: PasswordTemporalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordTemporalsModule", function() { return PasswordTemporalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _password_temporals_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-temporals-routing.module */ "./src/app/password-temporals/password-temporals-routing.module.ts");
/* harmony import */ var _password_temporals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-temporals.component */ "./src/app/password-temporals/password-temporals.component.ts");
/* harmony import */ var _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password-temporal/change-password-temporal.component */ "./src/app/password-temporals/change-password-temporal/change-password-temporal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/header/header.module */ "./src/app/shared/modules/header/header.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PasswordTemporalsModule = /** @class */ (function () {
    function PasswordTemporalsModule() {
    }
    PasswordTemporalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _password_temporals_routing_module__WEBPACK_IMPORTED_MODULE_2__["PasswordTemporalsRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            declarations: [_password_temporals_component__WEBPACK_IMPORTED_MODULE_3__["PasswordTemporalsComponent"], _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordTemporalComponent"]]
        })
    ], PasswordTemporalsModule);
    return PasswordTemporalsModule;
}());



/***/ })

}]);
//# sourceMappingURL=password-temporals-password-temporals-module.js.map