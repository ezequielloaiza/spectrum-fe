(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["initial-sessions-initial-sessions-module"],{

/***/ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bootstrap snippet\">\n  <div class=\"row justify-content-md-center\">\n    <!--/col-12-->\n    <div class=\"col-md-6\">\n      <hr>\n      <form [formGroup]=\"form\">\n        <div class=\"form-options\">\n          <h4>{{ 'Change Temporary Password' | translate }}</h4>\n          <label>{{ 'Please change the temporary password to access the system' | translate }}</label>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label>{{ 'Username' | translate }}</label>\n              <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" placeholder=\"Username\"\n                  aria-describedby=\"usernameHelpBlock\" readonly required>\n              </div>\n              <small id=\"usernameHelpBlock\" class=\"form-text text-muted\">\n                {{'You can not edit your username' | translate }}\n              </small>\n            </fieldset>\n            <div class=\"message-error\" [hidden]=\"username.valid || username.pristine\">\n              <span>{{ 'Username is required' | translate }}</span>\n            </div>\n          </div>\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label for=\"oldPassword\" class=\"control-label\">{{'Old Password' | translate}}</label>&nbsp;&nbsp;\n              <i class=\"fa fa-lock\" placement=\"top\" ngbTooltip=\"{{'For security your password is encrypted' | translate}}\"></i>\n              <input type=\"password\" class=\"form-control\" name=\"oldPassword\" formControlName=\"oldPassword\" aria-describedby=\"passwordHelpBlock\" required>\n            </fieldset>\n            <div class=\"message-error\" [hidden]=\"oldPassword.valid || oldPassword.pristine\">\n              <span>{{ 'Password is not valid' | translate }}</span>\n            </div>\n          </div>\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label for=\"password\" class=\"control-label\">{{'Password' | translate}}</label>&nbsp;&nbsp;\n              <i class=\"fa fa-lock\" placement=\"top\" ngbTooltip=\"{{'For security your password is encrypted' | translate}}\"></i>\n              <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" aria-describedby=\"passwordHelpBlock\"\n                required>\n            </fieldset>\n            <div class=\"message-error\" [hidden]=\"password.valid || password.pristine\">\n              <span>{{ 'Password is not valid' | translate }}</span>\n            </div>\n          </div>\n          <div class=\"col-xl-6\">\n            <fieldset class=\"form-group\">\n              <label for=\"confirmedPassword\" class=\"control-label\">{{'Confirm Password' | translate}}</label>&nbsp;&nbsp;\n              <i class=\"fa fa-lock\" placement=\"top\" ngbTooltip=\"{{'For security your password is encrypted' | translate}}\"></i>\n              <input type=\"password\" class=\"form-control\" name=\"confirmedPassword\" formControlName=\"confirmedPassword\"\n                aria-describedby=\"passwordHelpBlock\" [ngStyle]=\"{'border-left': (form.get(['password']).value != form.get(['confirmedPassword']).value\n                                && form.get(['confirmedPassword']).value != null\n                               || form.get(['password']).value === ''\n                               || form.get(['confirmedPassword']).value === '') === false ? '5px solid green' : '5px solid red' }\"\n                required>\n            </fieldset>\n            <div class=\"message-error\" *ngIf=\"form.get(['password']).value != form.get(['confirmedPassword']).value\n                        && form.get(['confirmedPassword']).value != null\">\n              <span>{{ 'Passwords do not match' | translate }}</span>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"footer-form\">\n          <button class=\"btn btn-main\" (click)=\"saveAccount()\" [disabled]=\"form.get(['password']).value != form.get(['confirmedPassword']).value\n                              && form.get(['confirmedPassword']).value != null\n                              || form.get(['password']).value === ''\n                              || form.get(['confirmedPassword']).value === ''\n                              || form.get(['oldPassword']).value === ''\">{{ 'Save' | translate }}&nbsp;\n            <i class=\"fa fa-save\"></i>\n          </button>\n        </div>\n        <br>\n      </form>\n      <hr>\n      <!--/tab-pane-->\n    </div>\n    <!--/tab-content-->\n  </div>\n  <!--/col-9-->\n</div>\n<!--/row-->\n"

/***/ }),

/***/ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.footer-form {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.ts ***!
  \*************************************************************************************************/
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
                _this.router.navigateByUrl('initial-sessions/protocols');
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
            template: __webpack_require__(/*! ./change-password-temporal.component.html */ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.html"),
            styles: [__webpack_require__(/*! ./change-password-temporal.component.scss */ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.scss")],
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

/***/ "./src/app/initial-sessions/initial-sessions-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/initial-sessions/initial-sessions-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: InitialSessionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSessionsRoutingModule", function() { return InitialSessionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _initial_sessions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-sessions.component */ "./src/app/initial-sessions/initial-sessions.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password-temporal/change-password-temporal.component */ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.ts");
/* harmony import */ var _protocols_protocols_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protocols/protocols.component */ "./src/app/initial-sessions/protocols/protocols.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _initial_sessions_component__WEBPACK_IMPORTED_MODULE_2__["InitialSessionsComponent"],
        canActivateChild: [_shared__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
        children: [
            { path: 'change-password', component: _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordTemporalComponent"], data: { option: 'ChangePassword' } },
            { path: 'protocols', component: _protocols_protocols_component__WEBPACK_IMPORTED_MODULE_5__["ProtocolsComponent"], data: { option: 'InitialsProtocols' } }
        ]
    },
    { path: '**', redirectTo: 'not-found' }
];
var InitialSessionsRoutingModule = /** @class */ (function () {
    function InitialSessionsRoutingModule() {
    }
    InitialSessionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InitialSessionsRoutingModule);
    return InitialSessionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/initial-sessions/initial-sessions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/initial-sessions/initial-sessions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"main-container-pws-temporal\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/initial-sessions/initial-sessions.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/initial-sessions/initial-sessions.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container-pws-temporal {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container-pws-temporal {\n    margin-left: 0px !important; } }\n\n.icon-sort {\n  margin-left: 200px; }\n"

/***/ }),

/***/ "./src/app/initial-sessions/initial-sessions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/initial-sessions/initial-sessions.component.ts ***!
  \****************************************************************/
/*! exports provided: InitialSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSessionsComponent", function() { return InitialSessionsComponent; });
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

var InitialSessionsComponent = /** @class */ (function () {
    function InitialSessionsComponent() {
    }
    InitialSessionsComponent.prototype.ngOnInit = function () {
    };
    InitialSessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-initial-sessions',
            template: __webpack_require__(/*! ./initial-sessions.component.html */ "./src/app/initial-sessions/initial-sessions.component.html"),
            styles: [__webpack_require__(/*! ./initial-sessions.component.scss */ "./src/app/initial-sessions/initial-sessions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InitialSessionsComponent);
    return InitialSessionsComponent;
}());



/***/ }),

/***/ "./src/app/initial-sessions/initial-sessions.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/initial-sessions/initial-sessions.module.ts ***!
  \*************************************************************/
/*! exports provided: InitialSessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSessionsModule", function() { return InitialSessionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _initial_sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-sessions-routing.module */ "./src/app/initial-sessions/initial-sessions-routing.module.ts");
/* harmony import */ var _initial_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-sessions.component */ "./src/app/initial-sessions/initial-sessions.component.ts");
/* harmony import */ var _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password-temporal/change-password-temporal.component */ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/header/header.module */ "./src/app/shared/modules/header/header.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _protocols_protocols_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./protocols/protocols.component */ "./src/app/initial-sessions/protocols/protocols.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _protocols_protocolsproforma_protocolsproforma_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./protocols/protocolsproforma/protocolsproforma.component */ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.ts");
/* harmony import */ var _protocols_protocolsshipping_protocolsshipping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./protocols/protocolsshipping/protocolsshipping.component */ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var InitialSessionsModule = /** @class */ (function () {
    function InitialSessionsModule() {
    }
    InitialSessionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _initial_sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__["InitialSessionsRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]
            ],
            declarations: [
                _initial_sessions_component__WEBPACK_IMPORTED_MODULE_3__["InitialSessionsComponent"],
                _change_password_temporal_change_password_temporal_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordTemporalComponent"],
                _protocols_protocols_component__WEBPACK_IMPORTED_MODULE_10__["ProtocolsComponent"],
                _protocols_protocolsproforma_protocolsproforma_component__WEBPACK_IMPORTED_MODULE_12__["ProtocolsproformaComponent"],
                _protocols_protocolsshipping_protocolsshipping_component__WEBPACK_IMPORTED_MODULE_13__["ProtocolsshippingComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_8__["RoleGuard"],
                _shared_services__WEBPACK_IMPORTED_MODULE_15__["AuthorizationService"]
            ]
        })
    ], InitialSessionsModule);
    return InitialSessionsModule;
}());



/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocols.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocols.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\"></ngx-spinner>\n<div class=\"container bootstrap snippet\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- Protocols Shipping -->\n        <app-protocolsshipping *ngIf=\"showShipping\" (emitEventShipping)=\"getProtocolsShipping($event)\"></app-protocolsshipping>\n         <!-- Protocols Proforma -->\n        <app-protocolsproforma *ngIf=\"!showShipping\" [lista]=\"protocolsProformaCopy\" (emitEventProforma)=\"getProtocolsProforma($event)\"></app-protocolsproforma>\n        <br>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocols.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocols.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.container {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 0 1px rgba(0, 0, 0, 0.12) !important;\n  padding-right: 35px;\n  padding-left: 35px; }\n"

/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocols.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocols.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProtocolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolsComponent", function() { return ProtocolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/suppliers/supplier.service */ "./src/app/shared/services/suppliers/supplier.service.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_services_protocolClient_protocol_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/protocolClient/protocol-client.service */ "./src/app/shared/services/protocolClient/protocol-client.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_protocolProforma_protocol_proforma_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/protocolProforma/protocol-proforma.service */ "./src/app/shared/services/protocolProforma/protocol-proforma.service.ts");
/* harmony import */ var _protocolsproforma_protocolsproforma_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./protocolsproforma/protocolsproforma.component */ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProtocolsComponent = /** @class */ (function () {
    function ProtocolsComponent(formBuilder, countryService, supplierService, userStorageService, translate, notification, router, protocolClientService, protocolProformaService, spinner) {
        this.formBuilder = formBuilder;
        this.countryService = countryService;
        this.supplierService = supplierService;
        this.userStorageService = userStorageService;
        this.translate = translate;
        this.notification = notification;
        this.router = router;
        this.protocolClientService = protocolClientService;
        this.protocolProformaService = protocolProformaService;
        this.spinner = spinner;
        this.protocolsProformaSave = new Array;
        this.protocolsProformaCopy = new Array;
        this.showShipping = true;
        this.validRecordsProforma = 0;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    }
    ProtocolsComponent.prototype.ngOnInit = function () {
    };
    ProtocolsComponent.prototype.getProtocolsShipping = function (listProtocols) {
        this.showShipping = listProtocols[0];
    };
    ProtocolsComponent.prototype.getProtocolsProforma = function (listProtocols) {
        this.protocolsProformaSave = listProtocols[0];
        var skip = listProtocols[1];
        this.showShipping = listProtocols[2];
        this.protocolsProformaCopy = listProtocols[3];
        if (skip === false) {
            this.save();
        }
        if (skip === true || (this.showShipping === false && this.protocolsProformaSave.length === 0)) {
            this.router.navigate(['/dashboard']);
        }
    };
    ProtocolsComponent.prototype.save = function () {
        this.showShipping = false;
        this.spinner.show();
        var listProtocolsProforma = this.protocolsProformaSave;
        var serviceProforma = this.protocolProformaService;
        var recordsProforma = this.validRecordsProforma;
        var self = this;
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](listProtocolsProforma, function (protocolProforma) {
            serviceProforma.update$(protocolProforma).subscribe(function (res) {
                recordsProforma++;
                self.showMessage(recordsProforma);
            });
        });
    };
    ProtocolsComponent.prototype.showMessage = function (records) {
        var _this = this;
        this.validRecordsProforma = records;
        if (this.validRecordsProforma === this.protocolsProformaSave.length) {
            this.spinner.show();
            this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
                _this.notification.success('', res);
                _this.router.navigate(['/dashboard']);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_protocolsproforma_protocolsproforma_component__WEBPACK_IMPORTED_MODULE_11__["ProtocolsproformaComponent"]),
        __metadata("design:type", _protocolsproforma_protocolsproforma_component__WEBPACK_IMPORTED_MODULE_11__["ProtocolsproformaComponent"])
    ], ProtocolsComponent.prototype, "protocolProforma", void 0);
    ProtocolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-protocols',
            template: __webpack_require__(/*! ./protocols.component.html */ "./src/app/initial-sessions/protocols/protocols.component.html"),
            styles: [__webpack_require__(/*! ./protocols.component.scss */ "./src/app/initial-sessions/protocols/protocols.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _shared_services_protocolClient_protocol_client_service__WEBPACK_IMPORTED_MODULE_6__["ProtocolClientService"],
            _shared_services_protocolProforma_protocol_proforma_service__WEBPACK_IMPORTED_MODULE_10__["ProtocolProformaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]])
    ], ProtocolsComponent);
    return ProtocolsComponent;
}());



/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"form-options\">\n  <span class=\"sp-title\">{{ 'Proforma Protocols' | translate }}</span>\n</div>\n<div class=\"row\" *ngFor=\"let protocol of protocols\">\n\n  <div class=\"w-100 border-protocol p-3 mb-3\">\n    <div class=\"d-flex w-100 border-bottom\">\n      <div class=\"w-50 mr-3\">\n        <span class=\"font-weight-bold\">{{ protocol.label | translate }}</span>\n      </div>\n      <div class=\"w-46\">\n        <span class=\"font-weight-bold\">{{ 'Supplier' | translate }}</span>\n      </div>\n    </div>\n\n    <div class=\"d-flex w-100 pt-2 pb-1\" *ngFor=\"let value of protocol.values; let pos = index\">\n      <div class=\"w-50 mr-3\">\n        <!-- WRITE VALUE -->\n        <div class=\"input-value\">\n          <div *ngIf=\"protocol.label === 'Spectrum Proforma'\" class=\"mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"custom-control-inline\">\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"{{'customRadioYes'+pos}}\" name=\"{{'spectrumProforma'+pos}}\" class=\"custom-control-input\" [(ngModel)]=\"value.content\"\n                  value=true>\n                <label class=\"custom-control-label\" for=\"{{'customRadioYes'+pos}}\">{{ 'Yes' | translate }}</label>\n              </div>\n              <div style=\"margin-left: 10px;\" class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"{{'customRadioNo'+pos}}\" name=\"{{'spectrumProforma'+pos}}\" class=\"custom-control-input\" [(ngModel)]=\"value.content\"\n                  value=false>\n                <label class=\"custom-control-label\" for=\"{{'customRadioNo'+pos}}\">{{ 'No' | translate }}</label>\n              </div>\n            </div>\n          </div>\n          <textarea *ngIf=\"protocol.label === 'Additional Documents' || protocol.label === 'Comments' || protocol.label === 'HS Code' || protocol.label === 'Documentation that must accompany the delivery and proforma invoice'\"\n            style=\"overflow-x: hidden;\" type=\"text\" class=\"form-control\" placeholder=\"{{ protocol.placeHolder | translate }}\"\n            [(ngModel)]=\"value.content\"></textarea>\n        </div>\n      </div>\n      <div class=\"select-required\" *ngIf=\"validContent(protocol,pos) && checkSuppliers(protocol,pos)\"></div>\n      <div class=\"w-46\">\n        <div class=\"d-inline-block w-100\" ngbDropdown autoClose=\"outside\">\n          <button class=\"btn border-type w-100 text-left\" ngbDropdownToggle required [disabled]=\"!validContent(protocol,pos)\">\n            <div class=\"text-overflow\">{{ getNamesTypeList(value) }}</div>\n            <span class=\"tcs-text-overflow\" *ngIf=\"checkSuppliers(protocol,pos)\">\n              {{ \"Select At Least a Supplier\" | translate }}\n           </span>\n          </button>\n          <ul ngbDropdownMenu class=\"w-100 p-3 dropdown-list\" aria-labelledby=\"dropdownManual\">\n            <div class=\"select-type\">\n              <div class=\"custom-control custom-checkbox\">\n                <input attr.id=\"{{protocol.label}}-{{ i }}-{{ pos }}-all\" type=\"checkbox\" name=\"checkboxAll\"\n                  [checked]=\"checkedAllSuppliers(protocol)\"\n                  (click)=\"onSelectionAll(protocol, value)\" class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"{{protocol.label}}-{{ i }}-{{ pos }}-all\">{{ 'Select All' | translate }}</label>\n              </div>\n              <li *ngFor=\"let supplier of suppliers; index as i\">\n                <div>\n                  <div class=\"custom-control custom-checkbox\">\n                    <input attr.id=\"{{protocol.label}}-{{ i }}-{{ pos }}\" type=\"checkbox\" name=\"checkboxGroupAll\" [checked]=\"checkedSupplier(protocol, value, supplier)\"\n                      (click)=\"selectSupplier(supplier.idSupplier, protocol, value)\" class=\"custom-control-input\" [disabled]=\"disabledSupplier(protocol, value, supplier)\">\n                    <label class=\"custom-control-label\" for=\"{{protocol.label}}-{{ i }}-{{ pos }}\"></label>\n                    <span class=\"tcs-text-overflow\"> {{ supplier.companyName | titlecase }} </span>\n                  </div>\n                </div>\n              </li>\n            </div>\n          </ul>\n        </div>\n      </div>\n      <div class=\"trash\" [hidden]=\"protocol.values.length === 1\">\n        <span class=\"fa fa-trash\" [ngClass]=\"{'top': (protocol.label === 'Additional Documents' || protocol.label === 'Comments' || protocol.label === 'Tariff Codes')}\" placement=\"top\" ngbTooltip=\"{{'Delete protocol value' | translate}}\" (click)=\"removeValue(protocol, pos)\"></span>\n      </div>\n    </div>\n\n    <div>\n      <button type=\"button\" class=\"btn btn-main\" [hidden]=\"hideAdd(protocol)\" (click)=\"addValue(protocol)\">{{ 'Add' | translate }}\n        <i class=\"fa fa-plus-circle ml-2\"></i>\n      </button>\n    </div>\n\n  </div>\n</div>\n<br>\n<div class=\"footer-form\">\n  <button class=\"btn btn-secondary\" (click)=\"back()\">\n    <i class=\"fa fa-arrow-left\"></i>&nbsp;{{ 'Back' | translate }}&nbsp;\n  </button>\n  &nbsp;&nbsp;\n  <button class=\"btn btn-secondary\" (click)=\"skip()\">{{ 'Skip' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  &nbsp;&nbsp;\n  <button class=\"btn btn-main\" (click)=\"save()\" [disabled]=\"!formIsValid()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.context .menu ul {\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  align-content: flex-end;\n  align-items: stretch; }\n.context .menu ul li {\n    padding: 0.6rem;\n    border-radius: 24px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n    cursor: pointer; }\n.context .menu ul li:not(:last-child) {\n      margin-right: 1rem; }\n.context .menu ul li.router-link-active a {\n      color: #1756a6; }\n.context .menu ul li a {\n      color: #868e96; }\n.context .menu ul li:focus {\n      outline: none; }\n.context .menu ul .li-selected {\n    background-color: #007bff; }\n.footer-form {\n  display: flex;\n  justify-content: flex-end; }\n.form-options {\n  display: flex;\n  justify-content: space-between; }\n.form-group span {\n  color: #868e96;\n  font-weight: bold; }\n.form-group label {\n  margin-bottom: 0; }\n.form-group > div:nth-child(1) {\n  display: flex; }\n.form-group .input-value {\n  display: flex; }\n.border-bottom {\n  border-bottom: solid 1px #c4c5c7; }\n.border-type {\n  border: solid 1px #ced4da;\n  background: white;\n  height: 34px; }\n.border-type::after {\n    position: absolute;\n    left: 95%;\n    top: 15px; }\n.w-46 {\n  width: 46%; }\n.trash {\n  width: 3%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  position: relative; }\n.trash > span {\n    position: absolute;\n    top: -7px; }\n.trash > span.top {\n      top: -18px; }\n.dropdown-list.dropdown-menu {\n  top: 31px !important;\n  left: 0px !important; }\n.dropdown-list.dropdown-menu::before {\n    content: none; }\n.dropdown-list.dropdown-menu::after {\n    content: none; }\n.dropdown-list.dropdown-menu span {\n    color: #30414a;\n    font-weight: bold; }\n.dropdown-list .custom-checkbox .custom-control-label::before {\n  border: solid 1px #cccccd;\n  border-radius: .3em; }\n.select-required {\n  background-color: red;\n  width: 5px;\n  height: 35px; }\n.custom-control-input:disabled ~ .custom-control-label {\n  cursor: not-allowed;\n  opacity: .5; }\n.border-protocol {\n  border: 25px solid #e9ecef !important; }\n"

/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProtocolsproformaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolsproformaComponent", function() { return ProtocolsproformaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_protocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/protocol */ "./src/app/shared/models/protocol.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/suppliers/supplier.service */ "./src/app/shared/services/suppliers/supplier.service.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_services_protocolProforma_protocol_proforma_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/protocolProforma/protocol-proforma.service */ "./src/app/shared/services/protocolProforma/protocol-proforma.service.ts");
/* harmony import */ var _shared_models_protocolProforma__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/models/protocolProforma */ "./src/app/shared/models/protocolProforma.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ProtocolsproformaComponent = /** @class */ (function () {
    function ProtocolsproformaComponent(formBuilder, countryService, supplierService, userStorageService, translate, notification, router, protocolProformaService, spinner) {
        this.formBuilder = formBuilder;
        this.countryService = countryService;
        this.supplierService = supplierService;
        this.userStorageService = userStorageService;
        this.translate = translate;
        this.notification = notification;
        this.router = router;
        this.protocolProformaService = protocolProformaService;
        this.spinner = spinner;
        this.modeEdit = true;
        this.protocols = new Array;
        this.protocolsCopy = new Array;
        this.protocolsSave = new Array;
        this.validRecords = 0;
        this.suppliers = new Array;
        this.countries = new Array();
        this.vSkip = false;
        this.vBack = true;
        this.emitEventProforma = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    }
    ProtocolsproformaComponent.prototype.ngOnInit = function () {
        this.protocolsCopy = this.lista;
        this.initializeForm();
        this.loadFields();
        this.loadSuppliers();
    };
    ProtocolsproformaComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            accNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    ProtocolsproformaComponent.prototype.loadFields = function () {
        if (this.protocolsCopy.length === 0) {
            this.protocols = [
                { label: 'Spectrum Proforma', values: [{ content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter Spectrum Proforma', id: 1 },
                { label: 'Additional Documents', values: [{ content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter additional documents', id: 2 },
                { label: 'Comments', values: [{ content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter comments', id: 3 },
                { label: 'HS Code', values: [{ content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter hs code', id: 4 },
                { label: 'Documentation that must accompany the delivery and proforma invoice', values: [{ content: '', suppliers: [] }], selectedSuppliers: [], placeHolder: 'Enter documentation that must accompany the delivery and proforma invoice', id: 5 },
            ];
        }
        else {
            this.protocols = this.protocolsCopy;
        }
    };
    ProtocolsproformaComponent.prototype.loadSuppliers = function () {
        var _this = this;
        this.supplierService.findByUser$(this.currentUser.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_9__["CodeHttp"].ok) {
                _this.suppliers = lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"](res.data, ['companyName']);
                _this.getProtocols();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProtocolsproformaComponent.prototype.selectSupplier = function (idSupplier, protocol, value) {
        var index = lodash__WEBPACK_IMPORTED_MODULE_10__["indexOf"](value.suppliers, idSupplier);
        if (index > -1) {
            value.suppliers.splice(index, 1);
            protocol.selectedSuppliers.splice(lodash__WEBPACK_IMPORTED_MODULE_10__["indexOf"](protocol.selectedSuppliers, idSupplier), 1);
        }
        else if (this.allowedSelection(idSupplier, protocol)) {
            value.suppliers.push(idSupplier);
            protocol.selectedSuppliers.push(idSupplier);
        }
    };
    ProtocolsproformaComponent.prototype.allowedSelection = function (idSupplier, protocol) {
        return lodash__WEBPACK_IMPORTED_MODULE_10__["indexOf"](protocol.selectedSuppliers, idSupplier) === -1;
    };
    ProtocolsproformaComponent.prototype.supplierSelected = function (idSupplier, protocolValue) {
        return lodash__WEBPACK_IMPORTED_MODULE_10__["indexOf"](protocolValue.suppliers, idSupplier) > -1;
    };
    ProtocolsproformaComponent.prototype.addValue = function (protocol) {
        /* if (protocol.label === 'Spectrum Proforma') {
           protocol.values.push({content: 'false', suppliers: []});
         } else {*/
        protocol.values.push({ content: '', suppliers: [] });
        // }
    };
    ProtocolsproformaComponent.prototype.removeValue = function (protocol, index) {
        protocol.selectedSuppliers = lodash__WEBPACK_IMPORTED_MODULE_10__["difference"](protocol.selectedSuppliers, protocol.values[index].suppliers);
        protocol.values.splice(index, 1);
    };
    ProtocolsproformaComponent.prototype.buildProtocols = function () {
        var protocolsSuppliersAux = new Array;
        var protocolsSuppliers = this.protocolsSave;
        this.protocolsCopy = JSON.parse(JSON.stringify(this.protocols));
        var protocols = this.protocolsCopy;
        var userId = this.currentUser.idUser;
        //Protocolos seleccionados
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](protocolsSuppliers, function (item) {
            var protocolProforma = new _shared_models_protocolProforma__WEBPACK_IMPORTED_MODULE_12__["ProtocolProforma"]();
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](protocols, function (protocol, index) {
                // Values
                lodash__WEBPACK_IMPORTED_MODULE_10__["each"](protocol.values, function (itemValue) {
                    // Suppliers
                    lodash__WEBPACK_IMPORTED_MODULE_10__["each"](itemValue.suppliers, function (supplier) {
                        if (item.supplierId === supplier) {
                            protocolProforma.valid = true;
                            protocolProforma.supplierId = supplier;
                            protocolProforma.clientId = userId;
                            switch (protocol.id) {
                                case 1:
                                    protocolProforma.spectrumProforma = itemValue.content;
                                    break;
                                case 2:
                                    protocolProforma.additionalDocuments = itemValue.content;
                                    break;
                                case 3:
                                    protocolProforma.comments = itemValue.content;
                                    break;
                                case 4:
                                    protocolProforma.tariffCodes = itemValue.content;
                                    break;
                                case 5:
                                    protocolProforma.documentation = itemValue.content;
                                    break;
                            }
                        }
                    });
                });
            });
            if (protocolProforma.valid) {
                protocolsSuppliersAux.push(protocolProforma);
            }
        });
        this.protocolsSave = JSON.parse(JSON.stringify(protocolsSuppliersAux));
        // console.log(this.protocolsCopy);
    };
    ProtocolsproformaComponent.prototype.getProtocols = function () {
        var protocolsSave = [];
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](this.suppliers, function (supplier) {
            var protocol = new _shared_models_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"]();
            protocol.supplierId = supplier.idSupplier;
            protocol.valid = false;
            protocolsSave.push(protocol);
        });
        this.protocolsSave = protocolsSave;
    };
    ProtocolsproformaComponent.prototype.save = function () {
        this.spinner.show();
        this.buildProtocols();
        var fResponse = [];
        this.vSkip = false;
        fResponse.push(this.protocolsSave);
        fResponse.push(this.vSkip);
        fResponse.push(false);
        fResponse.push(this.protocolsCopy);
        this.emitEventProforma.emit(fResponse);
        this.spinner.hide();
        return fResponse;
    };
    ProtocolsproformaComponent.prototype.back = function () {
        this.buildProtocols();
        var fResponse = [];
        this.vBack = true;
        fResponse.push(this.protocolsSave);
        fResponse.push(null);
        fResponse.push(this.vBack);
        fResponse.push(this.protocolsCopy);
        this.emitEventProforma.emit(fResponse);
        return fResponse;
    };
    ProtocolsproformaComponent.prototype.skip = function () {
        this.protocolsCopy = new Array;
        this.loadFields();
        this.getProtocols();
        var fResponse = [];
        this.vSkip = true;
        fResponse.push(this.protocolsSave);
        fResponse.push(this.vSkip);
        fResponse.push(this.vBack);
        fResponse.push(this.protocolsCopy);
        this.emitEventProforma.emit(fResponse);
        return fResponse;
    };
    ProtocolsproformaComponent.prototype.getNamesTypeList = function (value) {
        var self = this;
        var suppliersName = [];
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](self.suppliers, function (supplier) {
            if (lodash__WEBPACK_IMPORTED_MODULE_10__["includes"](value.suppliers, supplier.idSupplier)) {
                suppliersName.push(supplier.companyName);
            }
        });
        return suppliersName.join(', ');
    };
    ProtocolsproformaComponent.prototype.disabledSupplier = function (protocol, value, supplier) {
        return !!lodash__WEBPACK_IMPORTED_MODULE_10__["includes"](protocol.selectedSuppliers, supplier.idSupplier) && !lodash__WEBPACK_IMPORTED_MODULE_10__["includes"](value.suppliers, supplier.idSupplier);
    };
    ProtocolsproformaComponent.prototype.checkedSupplier = function (protocol, value, supplier) {
        return !!lodash__WEBPACK_IMPORTED_MODULE_10__["includes"](protocol.selectedSuppliers, supplier.idSupplier);
    };
    ProtocolsproformaComponent.prototype.formIsValid = function () {
        var valid = true;
        var protocols = JSON.parse(JSON.stringify(this.protocols));
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](protocols, function (protocol, index) {
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](protocol.values, function (itemValue) {
                if (itemValue.content !== '' && itemValue.suppliers.length === 0) {
                    valid = false;
                    return valid;
                }
            });
        });
        return valid;
    };
    ProtocolsproformaComponent.prototype.validContent = function (protocol, pos) {
        var valid = true;
        if (protocol.values[pos].content === '') {
            valid = false;
        }
        return valid;
    };
    ProtocolsproformaComponent.prototype.checkSuppliers = function (protocol, pos) {
        var show = true;
        if (protocol.values[pos].suppliers.length > 0) {
            show = false;
        }
        return show;
    };
    ProtocolsproformaComponent.prototype.checkedAllSuppliers = function (protocol) {
        return this.suppliers.length === protocol.selectedSuppliers.length;
    };
    ProtocolsproformaComponent.prototype.onSelectionAll = function (protocol, value) {
        var self = this;
        if (this.checkedAllSuppliers(protocol)) {
            protocol.selectedSuppliers = lodash__WEBPACK_IMPORTED_MODULE_10__["difference"](protocol.selectedSuppliers, value.suppliers);
            value.suppliers = [];
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](self.suppliers, function (supplier) {
                if (self.allowedSelection(supplier.idSupplier, protocol)) {
                    value.suppliers.push(supplier.idSupplier);
                    protocol.selectedSuppliers.push(supplier.idSupplier);
                }
            });
        }
    };
    ProtocolsproformaComponent.prototype.hideAdd = function (protocol) {
        return this.suppliers.length === protocol.selectedSuppliers.length ||
            this.suppliers.length === protocol.values.length ||
            (protocol.label === 'Spectrum Proforma' && protocol.values.length === 2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProtocolsproformaComponent.prototype, "lista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProtocolsproformaComponent.prototype, "emitEventProforma", void 0);
    ProtocolsproformaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-protocolsproforma',
            template: __webpack_require__(/*! ./protocolsproforma.component.html */ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.html"),
            styles: [__webpack_require__(/*! ./protocolsproforma.component.scss */ "./src/app/initial-sessions/protocols/protocolsproforma/protocolsproforma.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_services_protocolProforma_protocol_proforma_service__WEBPACK_IMPORTED_MODULE_11__["ProtocolProformaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]])
    ], ProtocolsproformaComponent);
    return ProtocolsproformaComponent;
}());



/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"form-options\">\n  <span class=\"sp-title\">{{ \"Shipping Protocols\" | translate }}</span>\n</div>\n<br />\n<div class=\"row border-protocol-shipping\" *ngFor=\"let formProtocol of protocolForms, let indexForm = index\">\n  <div class=\"w-100 btn-remove\" *ngIf=\"protocolForms.length > 0\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"removeForm(indexForm)\"\n      *ngIf=\"!hiddenRemove()\">\n      <i class=\"fa fa-times\"  placement=\"top\" ngbTooltip=\"{{'Remove Form' | translate}}\"></i>\n      <!--SELECT SUPPLIERS-->\n    </button>\n  </div>\n  <div class=\"w-96\">\n    <div class=\"w-100 m-4 bottom-label\">\n      <span class=\"font-weight-bold\">{{ 'Suppliers' | translate }}:</span>\n    </div>\n    <div class=\"w-96 m-4 form-options\">\n      <div class=\"select-required\" *ngIf=\"!formProtocol.supplier.selectedSuppliers.length\"></div>\n      <div>\n        <div class=\"d-inline-block w-100\" ngbDropdown autoClose=\"outside\">\n          <button class=\"btn border-type w-100 text-left\" ngbDropdownToggle required>\n            <div class=\"text-overflow\">{{ getSuppliersName(formProtocol) }}</div>\n            <span class=\"tcs-text-overflow\" *ngIf=\"false\">\n              {{ \"Select at Least a Supplier\" | translate }}\n            </span>\n          </button>\n          <ul ngbDropdownMenu class=\"w-100 p-3 dropdown-list\" aria-labelledby=\"dropdownManual\">\n            <div class=\"select-type\">\n              <div class=\"custom-control custom-checkbox\">\n                <input id=\"checkAll-{{indexForm}}\" type=\"checkbox\" name=\"checkboxAll\" class=\"custom-control-input\"\n                  [checked]=\"checkedAllSupplierByForm(indexForm)\" (click)=\"selectionAll(indexForm)\">\n                <label class=\"custom-control-label\" for=\"checkAll-{{indexForm}}\">{{ 'Select All' | translate }}</label>\n              </div>\n              <li *ngFor=\"let supplier of formProtocol.supplier.values; index as i\">\n                <div>\n                  <div class=\"custom-control custom-checkbox\">\n                    <input id=\"{{ indexForm + '-' + i }}\" type=\"checkbox\" name=\"checkboxSupplier\" class=\"custom-control-input\"\n                      [checked]=\"checkedSupplier(supplier)\" (click)=\"!disabledCheck(supplier, indexForm) && selectSupplier(formProtocol, supplier)\" [disabled]=\"disabledCheck(supplier, indexForm)\" />\n                    <label class=\"custom-control-label\" for=\"{{ indexForm + '-' + i }}\"></label>\n                    <span class=\"tcs-text-overflow\">\n                      {{ supplier.companyName | titlecase }}\n                    </span>\n                  </div>\n                </div>\n              </li>\n            </div>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"w-46 m-4\" *ngFor=\"let protocol of formProtocol.protocols, let pos = index\">\n    <!--<div class=\"w-100 border-protocol p-3 mb-3\">-->\n    <!--INPUTS-->\n    <div *ngFor=\"let value of protocol.values; let pos = index\" class=\"form-inputs\">\n\n      <!--PROTOCOL NAME-->\n      <div class=\"margin-title\">\n        <span class=\"font-weight-bold\">{{ value.label | translate }}</span>\n      </div>\n      <!--INPUTS PROTOCOLS-->\n      <div class=\"input-value\">\n        <input *ngIf=\"\n              value.label === 'Recipient' ||\n              value.label === 'Account Number for Shipping Carrier'\n            \" type=\"text\" [hidden]=\"!modeEdit\" class=\"form-control\"\n          placeholder=\"{{ protocol.placeHolder | translate }}\" [(ngModel)]=\"value.content\" />\n        <textarea *ngIf=\"\n              value.label === 'Shipping Address' ||\n              value.label === 'Comments' ||\n              value.label === 'Shipping Details'\n            \" style=\"overflow-x: hidden;\" type=\"text\" class=\"form-control\"\n          placeholder=\"{{ protocol.placeHolder | translate }}\" [(ngModel)]=\"value.content\"></textarea>\n        <div *ngIf=\"value.label === 'Shipping Method'\">\n          <div>\n            <select class=\"form-control\" name=\"shippingMethod\" [(ngModel)]=\"value.content\">\n              <option *ngFor=\"let shippingMethod of listShippingMethod\" value=\"{{shippingMethod}}\">\n                {{ shippingMethod | translate }}</option>\n            </select>\n          </div>\n        </div>\n        <!--Shipping Frecuency-->\n        <div *ngIf=\"value.label === 'Shipping Frecuency'\" class=\"mb-2 mr-sm-2 mb-sm-0 d-flex align-items-center\">\n          <div class=\"custom-control-inline\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"{{ 'customRadioM' + indexForm + '-' + pos }}\" name=\"{{ 'shippingFrecuency' + indexForm + '-' + pos }}\"\n                class=\"custom-control-input\" (change)=\"assignShippingFrecuency(protocol, 1, pos)\"\n                [checked]=\"value.content === 'Monthly'\" />\n              <label class=\"custom-control-label\" for=\"{{ 'customRadioM' + indexForm + '-' + pos }}\">{{ \"Monthly\" | translate }}</label>\n            </div>\n            <div style=\"margin-left: 10px;\" class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"{{ 'customRadioB' + indexForm + '-' + pos }}\" name=\"{{ 'shippingFrecuency' + indexForm + '-' + pos }}\"\n                class=\"custom-control-input\" (change)=\"assignShippingFrecuency(protocol, 2, pos)\"\n                [checked]=\"value.content === '15' || value.content === '30'\" />\n              <label class=\"custom-control-label\" for=\"{{ 'customRadioB' + indexForm + '-' + pos }}\">{{ \"Biweekly\" | translate }}</label>\n            </div>\n            <div style=\"margin-left: 10px;\" class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"{{ 'customRadioW' + indexForm + '-' + pos }}\" name=\"{{ 'shippingFrecuency' + indexForm + '-' + pos }}\"\n                class=\"custom-control-input\" (change)=\"assignShippingFrecuency(protocol, 3, pos)\"\n                [checked]=\"value.content !== 'Monthly' && value.content !== '15' && value.content !== '30' && value.content !== '' \" />\n              <label class=\"custom-control-label\" for=\"{{ 'customRadioW' + indexForm + '-' + pos }}\">{{ \"Weekly\" | translate }}</label>\n            </div>\n          </div>\n          <!--<span>{{ shippingFrecuency.value }}</span>-->\n          <select *ngIf=\"value.showB === 'true'\" [(ngModel)]=\"value.content\" class=\"form-control\"\n            name=\"{{ 'shippingFrecuencyB' + indexForm + '-' + pos }}\">\n            <option value=\"\" [selected]=\"true\" translate>Select value</option>\n            <option *ngFor=\"let biweekly of listBiweekly\" value=\"{{ biweekly }}\">{{ biweekly | translate }}</option>\n          </select>\n          <select *ngIf=\"value.showW === 'true'\" [(ngModel)]=\"value.content\" class=\"form-control\"\n            name=\"{{ 'shippingFrecuencyW' + indexForm + '-' + pos }}\">\n            <option value=\"\" [selected]=\"true\" translate>Select value</option>\n            <option *ngFor=\"let weekly of listWeekly\" value=\"{{ weekly }}\">{{\n                weekly | translate\n              }}</option>\n          </select>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--ADD BUTTON-->\n<div class=\"btn-form\">\n  <button type=\"button\" class=\"btn btn-main\" (click)=\"addForm()\"\n    *ngIf=\"!hiddenNewForm()\">{{ 'Add New Form' | translate }}\n    <i class=\"fa fa-plus-circle ml-2\"></i>\n  </button>\n</div>\n<br />\n<div class=\"footer-form\">\n  <button class=\"btn btn-secondary\" (click)=\"skip()\">\n    {{ \"Skip\" | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  &nbsp;&nbsp;\n  <button class=\"btn btn-main\" (click)=\"save()\" [disabled]=\"!formIsValid()\">\n    {{ \"Save & Next\" | translate }}&nbsp;\n    <i class=\"fa fa-arrow-right\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.text-overflow {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n.context .menu ul {\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  align-content: flex-end;\n  align-items: stretch; }\n.context .menu ul li {\n    padding: 0.6rem;\n    border-radius: 24px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n    cursor: pointer; }\n.context .menu ul li:not(:last-child) {\n      margin-right: 1rem; }\n.context .menu ul li.router-link-active a {\n      color: #1756a6; }\n.context .menu ul li a {\n      color: #868e96; }\n.context .menu ul li:focus {\n      outline: none; }\n.context .menu ul .li-selected {\n    background-color: #007bff; }\n.form-options {\n  display: flex;\n  justify-content: space-between; }\n.bottom-label {\n  margin-bottom: -10px !important; }\n.form-group span {\n  color: #868e96;\n  font-weight: bold; }\n.form-group label {\n  margin-bottom: 0; }\n.form-group > div:nth-child(1) {\n  display: flex; }\n.form-group .input-value {\n  display: flex; }\n.footer-form {\n  display: flex;\n  justify-content: flex-end; }\n.border-bottom {\n  border-bottom: solid 1px #c4c5c7; }\n.border-type {\n  border: solid 1px #ced4da;\n  background: white;\n  height: 34px; }\n.border-type::after {\n    position: absolute;\n    left: 95%;\n    top: 15px; }\n.w-46 {\n  width: 46%; }\n.w-96 {\n  width: 96%; }\n.trash {\n  width: 3%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  position: relative; }\n.trash > span {\n    position: absolute;\n    top: -7px; }\n.trash > span.top {\n      top: -18px; }\n.dropdown-list.dropdown-menu {\n  top: 31px !important;\n  left: 0px !important; }\n.dropdown-list.dropdown-menu::before {\n    content: none; }\n.dropdown-list.dropdown-menu::after {\n    content: none; }\n.dropdown-list.dropdown-menu span {\n    color: #30414a;\n    font-weight: bold; }\n.dropdown-list .custom-checkbox .custom-control-label::before {\n  border: solid 1px #cccccd;\n  border-radius: .3em; }\n.select-required {\n  background-color: red;\n  height: 35px;\n  width: 5px; }\n.custom-control-input:disabled ~ .custom-control-label {\n  cursor: not-allowed;\n  opacity: .5; }\n.border-protocol-shipping {\n  border: 25px solid #e9ecef !important; }\n.border-protocol-shipping div:last-child {\n    width: 100%; }\n.border-protocol-shipping .margin-title {\n    margin-bottom: 0.5em; }\n.btn-form {\n  padding: 10px; }\n.btn-form > button {\n    width: 100%; }\n.btn-remove {\n  padding: 10px;\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProtocolsshippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolsshippingComponent", function() { return ProtocolsshippingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_protocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/protocol */ "./src/app/shared/models/protocol.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/suppliers/supplier.service */ "./src/app/shared/services/suppliers/supplier.service.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_protocolClient_protocol_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/protocolClient/protocol-client.service */ "./src/app/shared/services/protocolClient/protocol-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProtocolsshippingComponent = /** @class */ (function () {
    function ProtocolsshippingComponent(formBuilder, supplierService, userStorageService, translate, notification, router, protocolClientService, spinner) {
        this.formBuilder = formBuilder;
        this.supplierService = supplierService;
        this.userStorageService = userStorageService;
        this.translate = translate;
        this.notification = notification;
        this.router = router;
        this.protocolClientService = protocolClientService;
        this.spinner = spinner;
        this.modeEdit = true;
        this.protocolsSave = new Array;
        this.copyProtocolForms = new Array;
        this.protocolForms = new Array;
        this.suppliers = new Array;
        this.listShippingMethod = ['2nd day', 'Overnight', 'Overnight AM', 'Ground'];
        this.listBiweekly = ['15', '30'];
        this.listWeekly = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.emitEventShipping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    }
    ProtocolsshippingComponent.prototype.ngOnInit = function () {
        this.copyProtocolForms = JSON.parse(localStorage.getItem(this.currentUser.idUser + 'copyProtocolForms'));
        this.loadSuppliers();
    };
    ProtocolsshippingComponent.prototype.loadSuppliers = function () {
        var _this = this;
        this.supplierService.findByUser$(this.currentUser.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_9__["CodeHttp"].ok) {
                _this.suppliers = lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"](res.data, ['companyName']);
                if (!!_this.copyProtocolForms && !!_this.copyProtocolForms.length) {
                    _this.protocolForms = _this.copyProtocolForms;
                }
                else {
                    _this.protocolForms = [{ supplier: { values: _this.suppliers, selectedSuppliers: [] }, protocols: _this.newProtocols() }];
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProtocolsshippingComponent.prototype.newProtocols = function () {
        var protocols = [
            // {label: 'ACC Number'                           , values:[{content: ''}], placeHolder:'Enter ACC Number'},
            // {label: 'Country'                              , values:[{content: ''}], placeHolder:'Enter Country'},
            // {label: 'Business Name'                        , values:[{content: ''}], placeHolder:'Enter Business Name'},
            { title: 'Recipient', values: [{ label: 'Recipient', content: '' }], placeHolder: 'Enter recipient' },
            { title: 'Shipping Address', values: [{ label: 'Shipping Address', content: '' }], placeHolder: 'Enter shipping address' },
            { title: 'Shipping Frecuency', values: [{ label: 'Shipping Frecuency', content: '', showB: "false", showW: "false" }], placeHolder: 'Enter shipping frecuency' },
            { title: 'Shipping Method', values: [{ label: 'Shipping Method', content: '' }], placeHolder: 'Enter shipping method' },
            { title: 'Shipping Details', values: [{ label: 'Shipping Details', content: '' }], placeHolder: 'Enter shipping details' },
            { title: 'Account Number for Shipping Carrier', values: [{ label: 'Account Number for Shipping Carrier', content: '' }], placeHolder: 'Enter account number for shipping carrier' },
            { title: 'Comments', values: [{ label: 'Comments', content: '' }], placeHolder: 'Enter comments' },
        ];
        return protocols;
    };
    ProtocolsshippingComponent.prototype.getSuppliersName = function (form) {
        if (!!form.supplier.selectedSuppliers.length) {
            var suppliersName_1 = [];
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](form.supplier.selectedSuppliers, function (supplier) {
                suppliersName_1 = lodash__WEBPACK_IMPORTED_MODULE_10__["concat"](suppliersName_1, supplier.companyName);
            });
            return suppliersName_1.join(', ');
        }
    };
    ProtocolsshippingComponent.prototype.selectSupplier = function (form, supplier) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_10__["find"](form.supplier.selectedSuppliers, supplier)) {
            form.supplier.selectedSuppliers.push(supplier);
        }
        else {
            form.supplier.selectedSuppliers = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](form.supplier.selectedSuppliers, function (supplierSelected) {
                return supplierSelected.idSupplier !== supplier.idSupplier;
            });
        }
    };
    ProtocolsshippingComponent.prototype.disabledCheck = function (supplier, posForm) {
        return !!lodash__WEBPACK_IMPORTED_MODULE_10__["some"](this.protocolForms, function (form, pos) {
            return pos !== posForm && !!lodash__WEBPACK_IMPORTED_MODULE_10__["find"](form.supplier.selectedSuppliers, supplier);
        });
    };
    ProtocolsshippingComponent.prototype.checkedSupplier = function (supplier) {
        return !!lodash__WEBPACK_IMPORTED_MODULE_10__["some"](this.protocolForms, function (form) {
            return !!lodash__WEBPACK_IMPORTED_MODULE_10__["find"](form.supplier.selectedSuppliers, supplier);
        });
    };
    ProtocolsshippingComponent.prototype.selectionAll = function (posForm) {
        var self = this;
        if (this.checkedAllSupplierByForm(posForm)) {
            this.protocolForms[posForm].supplier.selectedSuppliers = [];
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](this.suppliers, function (supplier) {
                if (!self.disabledCheck(supplier, posForm)) {
                    if (!lodash__WEBPACK_IMPORTED_MODULE_10__["find"](self.protocolForms[posForm].supplier.selectedSuppliers, supplier)) {
                        self.protocolForms[posForm].supplier.selectedSuppliers.push(supplier);
                    }
                }
            });
        }
    };
    ProtocolsshippingComponent.prototype.countSelectedDistinct = function (posForm) {
        var self = this;
        var countSelected = 0;
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](this.suppliers, function (supplier) {
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](self.protocolForms, function (form, pos) {
                if (pos !== posForm && !!lodash__WEBPACK_IMPORTED_MODULE_10__["find"](form.supplier.selectedSuppliers, supplier)) {
                    countSelected++;
                }
            });
        });
        return countSelected;
    };
    ProtocolsshippingComponent.prototype.checkedAllSupplierByForm = function (posForm) {
        var selectedSuppliers = this.protocolForms[posForm].supplier.selectedSuppliers.length;
        return !!selectedSuppliers && ((this.suppliers.length - this.countSelectedDistinct(posForm)) === selectedSuppliers);
    };
    ProtocolsshippingComponent.prototype.suppliersSelected = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_10__["sumBy"](this.protocolForms, function (form) { return form.supplier.selectedSuppliers.length; });
    };
    ProtocolsshippingComponent.prototype.checkedAllSuppliers = function () {
        return this.suppliers.length === this.suppliersSelected();
    };
    ProtocolsshippingComponent.prototype.addForm = function () {
        this.protocolForms.push({ supplier: { values: this.suppliers, selectedSuppliers: [] }, protocols: this.newProtocols() });
    };
    ProtocolsshippingComponent.prototype.removeForm = function (pos) {
        this.protocolForms.splice(pos, 1);
    };
    ProtocolsshippingComponent.prototype.assignShippingFrecuency = function (protocol, type, pos) {
        switch (type) {
            case 1:
                protocol.values[pos].content = 'Monthly';
                protocol.values[pos].showW = 'false';
                protocol.values[pos].showB = 'false';
                break;
            case 2:
                protocol.values[pos].content = '';
                protocol.values[pos].showB = 'true';
                protocol.values[pos].showW = 'false';
                break;
            case 3:
                protocol.values[pos].content = '';
                protocol.values[pos].showW = 'true';
                protocol.values[pos].showB = 'false';
                break;
        }
    };
    ProtocolsshippingComponent.prototype.buildProtocols = function () {
        var self = this;
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](self.protocolForms, function (form) {
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](form.supplier.selectedSuppliers, function (supplier) {
                var protocols = form.protocols;
                var protocolNew = new _shared_models_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"]();
                protocolNew.recipient = protocols[0].values[0].content;
                protocolNew.shippingAddress = protocols[1].values[0].content;
                protocolNew.shippingFrecuency = protocols[2].values[0].content;
                protocolNew.shippingMethod = protocols[3].values[0].content;
                protocolNew.shippingDetail = protocols[4].values[0].content;
                protocolNew.accountNumber = protocols[5].values[0].content;
                protocolNew.comment = protocols[6].values[0].content;
                protocolNew.clientId = self.currentUser.idUser;
                protocolNew.supplierId = supplier.idSupplier;
                self.protocolsSave.push(protocolNew);
            });
        });
    };
    ProtocolsshippingComponent.prototype.save = function () {
        var _this = this;
        this.buildProtocols();
        var self = this;
        this.spinner.show();
        this.protocolClientService.remove$(this.currentUser.idUser).subscribe(function (resRem) {
            if (resRem.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_9__["CodeHttp"].ok) {
                lodash__WEBPACK_IMPORTED_MODULE_10__["each"](_this.protocolsSave, function (protocol) {
                    self.protocolClientService.update$(protocol).subscribe(function (res) {
                    });
                });
                self.showMessage();
                self.sendReply();
                localStorage.setItem(_this.currentUser.idUser + 'copyProtocolForms', JSON.stringify(self.protocolForms));
            }
        });
    };
    ProtocolsshippingComponent.prototype.showMessage = function () {
        var _this = this;
        this.spinner.hide();
        this.translate.get('Successfully Saved', { value: 'Successfully Saved' }).subscribe(function (res) {
            _this.notification.success('', res);
        });
    };
    ProtocolsshippingComponent.prototype.sendReply = function () {
        var fResponse = [];
        fResponse.push(false);
        this.emitEventShipping.emit(fResponse);
        return fResponse;
    };
    ProtocolsshippingComponent.prototype.formIsValid = function () {
        if (!this.suppliersSelected()) {
            return false;
        }
        var valid = true;
        lodash__WEBPACK_IMPORTED_MODULE_10__["each"](this.protocolForms, function (form) {
            if (!form.supplier.selectedSuppliers.length) {
                valid = false;
                return valid;
            }
            ;
            if (lodash__WEBPACK_IMPORTED_MODULE_10__["every"](form.protocols, function (protocol) { return protocol.values[0].content === ''; })) {
                valid = false;
                return valid;
            }
        });
        return valid;
    };
    ProtocolsshippingComponent.prototype.skip = function () {
        this.sendReply();
    };
    ProtocolsshippingComponent.prototype.hiddenRemove = function () {
        return this.protocolForms.length < 2;
    };
    ProtocolsshippingComponent.prototype.hiddenNewForm = function () {
        var countSelectedSuppliers = lodash__WEBPACK_IMPORTED_MODULE_10__["sumBy"](this.protocolForms, function (form) {
            return form.supplier.selectedSuppliers.length;
        });
        return countSelectedSuppliers === this.suppliers.length || (this.suppliers.length - countSelectedSuppliers) === this.protocolForms.length;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProtocolsshippingComponent.prototype, "emitEventShipping", void 0);
    ProtocolsshippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-protocolsshipping',
            template: __webpack_require__(/*! ./protocolsshipping.component.html */ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.html"),
            styles: [__webpack_require__(/*! ./protocolsshipping.component.scss */ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__["UserStorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_services_protocolClient_protocol_client_service__WEBPACK_IMPORTED_MODULE_7__["ProtocolClientService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]])
    ], ProtocolsshippingComponent);
    return ProtocolsshippingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=initial-sessions-initial-sessions-module.js.map