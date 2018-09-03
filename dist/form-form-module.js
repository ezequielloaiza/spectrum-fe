(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./src/app/layout/form/form-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/form/form-routing.module.ts ***!
  \****************************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ "./src/app/layout/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]
    }
];
var FormRoutingModule = /** @class */ (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/form.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\t<app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\n\t\t\t<form role=\"form\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Text Input</label>\n\t\t\t\t\t<input class=\"form-control\">\n\t\t\t\t\t<p class=\"help-block\">Example block-level help text here.</p>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Text Input with Placeholder</label>\n\t\t\t\t\t<input class=\"form-control\" placeholder=\"Enter text\">\n\t\t\t\t</fieldset>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Static Control</label>\n\t\t\t\t\t<p class=\"form-control-static\">email@example.com</p>\n\t\t\t\t</div>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"exampleInputFile\">File input</label>\n\t\t\t\t\t<input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Text area</label>\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"></textarea>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Checkboxes</label>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> Checkbox 1\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> Checkbox 2\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> Checkbox 3\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Inline Checkboxes</label>\n\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t<input type=\"checkbox\">1\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t<input type=\"checkbox\">2\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"checkbox-inline\">\n\t\t\t\t\t\t<input type=\"checkbox\">3\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Radio Buttons</label>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Inline Radio Buttons</label>\n\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\n\t\t\t\t\t</label>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Selects</label>\n\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Multiple Selects</label>\n\t\t\t\t\t<select multiple=\"\" class=\"form-control\">\n\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t</select>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\n\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n\t\t\t</form>\n\n\t\t</div>\n\t\t<div class=\"col-lg-6\">\n\t\t\t<h4>Disabled Form States</h4>\n\n\t\t\t<form role=\"form\">\n\n\t\t\t\t<fieldset disabled=\"\">\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"disabledSelect\">Disabled input</label>\n\t\t\t\t\t\t<input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"disabledSelect\">Disabled select menu</label>\n\t\t\t\t\t\t<select id=\"disabledSelect\" class=\"form-control\">\n\t\t\t\t\t\t\t<option>Disabled select</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type=\"checkbox\"> Disabled Checkbox\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\n\n\t\t\t\t</fieldset>\n\n\t\t\t</form>\n\t\t\t<br>\n\n\t\t\t<h4>Form Validation</h4>\n\n\t\t\t<form role=\"form\">\n\n\t\t\t\t<div class=\"form-group has-success\">\n\t\t\t\t\t<label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group has-warning\">\n\t\t\t\t\t<label class=\"form-control-label\" for=\"inputWarning\">Input with warning</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group has-danger\">\n\t\t\t\t\t<label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError\">\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t\t<h4>Input Groups</h4>\n\n\t\t\t<form role=\"form\">\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <span class=\"input-group-addon\">@</span> -->\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<span class=\"input-group-text\">.00</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon1\">\n\t\t\t\t\t\t\t<i class=\"fa fa-eur\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon1\">$</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<span class=\"input-group-text\">.00</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t\t<p>For complete documentation, please visit\n\t\t\t\t<a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\n\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n</div>"

/***/ }),

/***/ "./src/app/layout/form/form.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/form.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/form/form.component.ts ***!
  \***********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/layout/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/layout/form/form.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/form.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/form/form.module.ts ***!
  \********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/layout/form/form-routing.module.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/layout/form/form.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map