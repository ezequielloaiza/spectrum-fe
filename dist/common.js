(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/modules/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/modules/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n\t<img src=\"assets/images/spectrumLogo.png\" width=\"200px\" class=\"\" href=\"#\" />\n\t<button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n\t\t<!-- <span class=\"navbar-toggler-icon\"></span> -->\n\t\t<i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n\t</button>\n\t<div class=\"collapse navbar-collapse\">\n\t\t<!--\n\t\t<form class=\"form-inline my-2 my-lg-0\">\n\t\t\t<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\">\n\t\t</form>\n\t\t-->\n\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t<!--\n\t\t\t<li class=\"nav-item d-none d-xl-block\">\n\t\t\t\t<a href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\" class=\"nav-link btn mt-1\" role=\"button\"\n\t\t\t\t style=\"padding: .375rem 1rem !important;border-color: #999;\">\n\t\t\t\t\t{{ 'Download Now' | translate }}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t&nbsp;\n\t\t\t-->\n\t\t\t<!--\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link mt-1\" style=\"padding: 0.375rem 1rem !important; border-color: #999;\" (click)=\"rltAndLtr()\">\n\t\t\t\t\t{{ 'Left/Right' | translate }}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t-->\n\t\t\t&nbsp;\n\t\t\t<!--\n\t\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t\t\t<a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t<span class=\"sr-only\">(current)</span>\n\t\t\t\t</a>\n\t\t\t\t<ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t<img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n\t\t\t\t\t\t alt=\"Generic placeholder image\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h5 class=\"mt-0 mb-1\">John Smith</h5>\n\t\t\t\t\t\t\t<p class=\"small text-muted\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n\t\t\t\t\t\t\t<p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t<img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n\t\t\t\t\t\t alt=\"Generic placeholder image\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h5 class=\"mt-0 mb-1\">John Smith</h5>\n\t\t\t\t\t\t\t<p class=\"small text-muted\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n\t\t\t\t\t\t\t<p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t<img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n\t\t\t\t\t\t alt=\"Generic placeholder image\" />\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h5 class=\"mt-0 mb-1\">John Smith</h5>\n\t\t\t\t\t\t\t<p class=\"small text-muted\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n\t\t\t\t\t\t\t<p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t-->\n\t\t\t<!--\n\t\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n\t\t\t\t\t<i class=\"fa fa-bell\"></i>\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t<span class=\"sr-only\">(current)</span>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu-right\" ngbDropdownMenu>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\">\n\t\t\t\t\t\t{{ 'Pending Task' | translate }}\n\t\t\t\t\t\t<span class=\"badge badge-info\">6</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\">\n\t\t\t\t\t\t{{ 'In queue' | translate }}\n\t\t\t\t\t\t<span class=\"badge badge-info\"> 13</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\">\n\t\t\t\t\t\t{{ 'Mail' | translate }}\n\t\t\t\t\t\t<span class=\"badge badge-info\"> 45</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<li class=\"dropdown-divider\"></li>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\">\n\t\t\t\t\t\t{{ 'View All' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t-->\n\t\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n\t\t\t\t\t<i class=\"fa fa-language\"></i> {{ 'Language' | translate }}\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu-right\" ngbDropdownMenu>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n\t\t\t\t\t\t{{ 'English' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n\t\t\t\t\t\t{{ 'Spanish' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t<!--\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n\t\t\t\t\t\t{{ 'French' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n\t\t\t\t\t\t{{ 'Urdu' | translate }}\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n\t\t\t\t\t\t{{ 'Italian' | translate }}\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n\t\t\t\t\t\t{{ 'Farsi' | translate }}\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n\t\t\t\t\t\t{{ 'German' | translate }}\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">\n\t\t\t\t\t\t{{ 'Simplified Chinese' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t-->\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t&nbsp;\n\t\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n          <i class=\"fa fa-user-circle\"></i>\n          {{ user.userResponse.name  }}\n          ({{ user.userResponse.username }})\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu-right\" ngbDropdownMenu>\n\t\t\t\t\t<a *ngIf=\"user.userResponse.pwsTemporal === false\" class=\"dropdown-item\" routerLink=\"/profile\" [routerLinkActive]=\"['router-link-active']\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t<!--\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t\t-->\n\t\t\t\t\t<a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/modules/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/modules/header/header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222;\n  box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/shared/modules/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/modules/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, userStorageService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.userStorageService = userStorageService;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.use(this.userStorageService.getLanguage());
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this.userStorageService.signOut();
        this.router.navigateByUrl('signin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
        this.userStorageService.setLanguage(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/modules/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/modules/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__["UserStorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/header/header.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/modules/header/header.module.ts ***!
  \********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/modules/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map