(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-balance-client/report-balance-client.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Clients Balance' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Report' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let types of typesReport; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup{{i}}\" name=\"radioGroup\" [value]=\"types.id\" (change)=\"onSelectionChangeTypes(types)\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"radioGroup{{i}}\">{{ types.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\">\n        <div class=\"custom-control\" [hidden]=\"!byClient\">\n          <label >{{ 'Select Client' | translate }}</label>\n          <select class=\"form-control\" name=\"client\" id=\"client\" [(ngModel)]=\"client\" (change)=\"onSelectClient()\">\n            <option *ngFor=\"let c of clients\" value=\"{{c.idUser}}\">{{ c.name | translate }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xl-12 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Period' | translate}}</label>\n          <div class=\"col-xl-12 control-period\" >\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"beginDate\" ngbDatepicker [(ngModel)]=\"beginDate\"\n                  #d=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endDate\" ngbDatepicker [(ngModel)]=\"endDate\"\n                  #d1=\"ngbDatepicker\" [disabled]=\"beginDate == null\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" [disabled]=\"!valid\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-balance-client/report-balance-client.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-balance-client/report-balance-client.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ReportBalanceClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBalanceClientComponent", function() { return ReportBalanceClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_models_reportRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/models/reportRequest */ "./src/app/shared/models/reportRequest.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportBalanceClientComponent = /** @class */ (function () {
    function ReportBalanceClientComponent(modalReference, notification, translate, userStorageService, userService, invoiceClientService, invoicePaymentService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.userStorageService = userStorageService;
        this.userService = userService;
        this.invoiceClientService = invoiceClientService;
        this.invoicePaymentService = invoicePaymentService;
        this.spinner = spinner;
        this.typesReport = [{ id: 0, name: 'All Clients' },
            { id: 1, name: 'By Client' }];
        this.listStatus = [{ id: 0, name: 'Pending' },
            { id: 1, name: 'Verified' },
            { id: 2, name: 'All' }];
        this.clients = new Array;
        this.valid = false;
        this.byClient = false;
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }
    ReportBalanceClientComponent.prototype.ngOnInit = function () {
        this.client = '';
        this.selectStatus = 2;
    };
    ReportBalanceClientComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ReportBalanceClientComponent.prototype.onSelectClient = function () {
        this.valid = true;
    };
    ReportBalanceClientComponent.prototype.onSelectionChangeTypes = function (type) {
        if (type.id == 0) {
            this.valid = (this.selectStatus == undefined ? false : true);
            this.byClient = false;
            this.client = '';
        }
        else {
            this.client = '';
            this.valid = false;
            this.byClient = true;
            this.loadClients();
        }
    };
    ReportBalanceClientComponent.prototype.onSelectionChangeStatus = function (state) {
        this.selectStatus = state.id;
        this.valid = true;
    };
    ReportBalanceClientComponent.prototype.loadClients = function () {
        var _this = this;
        this.invoiceClientService.usersWithInvoices$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                _this.clients = res.data;
                if (_this.clients.length == 0) {
                    _this.translate.get('There are no customers with invoices', { value: 'There are no customers with invoices' }).subscribe(function (res1) {
                        _this.notification.warning('', res1);
                        _this.byClient = false;
                        _this.client = '';
                    });
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportBalanceClientComponent.prototype.getFecha = function (model) {
        return new Date(model.year, model.month - 1, model.day);
    };
    ReportBalanceClientComponent.prototype.generateReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportRequest = new _shared_models_reportRequest__WEBPACK_IMPORTED_MODULE_9__["ReportRequest"];
        var idClient = 0;
        if (this.client != '') {
            idClient = this.client;
        }
        // this.reportRequest.status = this.selectStatus;
        this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
        this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
        this.reportRequest.idClient = idClient;
        this.invoiceClientService.downloadReportBalance$(this.reportRequest).subscribe(function (res) {
            if (res == null) {
                _this.translate.get('There are no records for the report', { value: 'There are no records for the report' }).subscribe(function (res1) {
                    _this.notification.warning('', res1);
                });
                _this.spinner.hide();
            }
            else {
                var date = new Date();
                var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                    day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
                var filename = 'PaymentsReport' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
                Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(res, filename);
                _this.spinner.hide();
                _this.translate.get('Report has been generated', { value: 'Report has been generated' }).subscribe(function (res1) {
                    _this.notification.success('', res1);
                });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe(function (res) {
                _this.notification.error('', res);
            });
            console.log('error', error);
        });
        this.close();
    };
    ReportBalanceClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-balance-client',
            template: __webpack_require__(/*! ./report-balance-client.component.html */ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.html"),
            styles: [__webpack_require__(/*! ./report-balance-client.component.scss */ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__["UserStorageService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["InvoiceClientService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["InvoicePaymentService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ReportBalanceClientComponent);
    return ReportBalanceClientComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-general-balance/report-general-balance.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'General Balance' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Period' | translate}}</label>\n          <div class=\"col-xl-12 control-period\" >\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"beginDate\" ngbDatepicker [(ngModel)]=\"beginDate\"\n                  #d=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endDate\" ngbDatepicker [(ngModel)]=\"endDate\"\n                  #d1=\"ngbDatepicker\" [disabled]=\"beginDate == null\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-general-balance/report-general-balance.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-general-balance/report-general-balance.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ReportGeneralBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGeneralBalanceComponent", function() { return ReportGeneralBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_models_reportRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/reportRequest */ "./src/app/shared/models/reportRequest.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportGeneralBalanceComponent = /** @class */ (function () {
    function ReportGeneralBalanceComponent(modalReference, notification, translate, invoiceClientService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.invoiceClientService = invoiceClientService;
        this.spinner = spinner;
        this.valid = false;
    }
    ReportGeneralBalanceComponent.prototype.ngOnInit = function () {
    };
    ReportGeneralBalanceComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ReportGeneralBalanceComponent.prototype.getFecha = function (model) {
        return new Date(model.year, model.month - 1, model.day);
    };
    ReportGeneralBalanceComponent.prototype.generateReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportRequest = new _shared_models_reportRequest__WEBPACK_IMPORTED_MODULE_2__["ReportRequest"];
        this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
        this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
        this.invoiceClientService.downloadGeneralBalance$(this.reportRequest).subscribe(function (res) {
            if (res == null) {
                _this.translate.get('There are no records for the report', { value: 'There are no records for the report' }).subscribe(function (res1) {
                    _this.notification.warning('', res1);
                });
                _this.spinner.hide();
            }
            else {
                var date = new Date();
                var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                    day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
                var filename = 'PaymentsReport' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
                Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(res, filename);
                _this.spinner.hide();
                _this.translate.get('Report has been generated', { value: 'Report has been generated' }).subscribe(function (res1) {
                    _this.notification.success('', res1);
                });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe(function (res) {
                _this.notification.error('', res);
            });
            console.log('error', error);
        });
        this.close();
    };
    ReportGeneralBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-general-balance',
            template: __webpack_require__(/*! ./report-general-balance.component.html */ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.html"),
            styles: [__webpack_require__(/*! ./report-general-balance.component.scss */ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["InvoiceClientService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ReportGeneralBalanceComponent);
    return ReportGeneralBalanceComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Payments Report' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Report' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let types of typesReport; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup{{i}}\" name=\"radioGroup\" [value]=\"types.id\" (change)=\"onSelectionChange(types)\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"radioGroup{{i}}\">{{ types.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\">\n        <div class=\"custom-control\" [hidden]=\"!byClient\">\n          <label >{{ 'Select Client' | translate }}</label>\n          <select class=\"form-control\" name=\"client\" id=\"client\" [(ngModel)]=\"client\" (change)=\"onSelectClient()\">\n            <option *ngFor=\"let c of clients\" value=\"{{c.idUser}}\">{{ c.name | translate }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" [disabled]=\"!valid\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ReportInvoicesOverdueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportInvoicesOverdueComponent", function() { return ReportInvoicesOverdueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_invoiceClient_invoiceclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/invoiceClient/invoiceclient.service */ "./src/app/shared/services/invoiceClient/invoiceclient.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_enum_status_invoice_client_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/enum/status-invoice-client.enum */ "./src/app/shared/enum/status-invoice-client.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportInvoicesOverdueComponent = /** @class */ (function () {
    function ReportInvoicesOverdueComponent(modalReference, notification, translate, userStorageService, invoiceClientService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.userStorageService = userStorageService;
        this.invoiceClientService = invoiceClientService;
        this.spinner = spinner;
        this.typesReport = [{ id: 0, name: 'All Clients' },
            { id: 1, name: 'By Client' }];
        this.clients = new Array;
        this.valid = false;
        this.byClient = false;
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }
    ReportInvoicesOverdueComponent.prototype.ngOnInit = function () {
        this.client = '';
    };
    ReportInvoicesOverdueComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ReportInvoicesOverdueComponent.prototype.onSelectClient = function () {
        this.valid = true;
    };
    ReportInvoicesOverdueComponent.prototype.onSelectionChange = function (type) {
        if (type.id == 0) {
            this.valid = true;
            this.byClient = false;
            this.client = '';
            this.loadInvoices();
        }
        else {
            this.valid = false;
            this.byClient = true;
            this.loadClients();
        }
    };
    ReportInvoicesOverdueComponent.prototype.loadInvoices = function () {
        var _this = this;
        this.invoiceClientService.invoicesOverdue$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].ok) {
                _this.clients = res.data;
                if (_this.clients.length == 0) {
                    _this.translate.get('There are no overdue invoices', { value: 'There are no overdue invoices' }).subscribe(function (res1) {
                        _this.notification.warning('', res1);
                    });
                    _this.valid = false;
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportInvoicesOverdueComponent.prototype.loadClients = function () {
        var _this = this;
        this.invoiceClientService.usersWithInvoicesOverdue$(this.user.userResponse.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_8__["CodeHttp"].ok) {
                _this.clients = res.data;
                console.log(_this.clients);
                if (_this.clients.length == 0) {
                    _this.translate.get('There are no customers with overdue invoices', { value: 'There are no customers with overdue invoices' }).subscribe(function (res1) {
                        _this.notification.warning('', res1);
                        _this.byClient = false;
                        _this.client = '';
                    });
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportInvoicesOverdueComponent.prototype.generateReport = function () {
        var _this = this;
        this.spinner.show();
        var idClient = 0;
        if (this.client != '') {
            idClient = this.client;
        }
        console.log('status', _shared_enum_status_invoice_client_enum__WEBPACK_IMPORTED_MODULE_9__["StatusInvoiceClient"].Overdue);
        this.invoiceClientService.generateReportInvoices$(_shared_enum_status_invoice_client_enum__WEBPACK_IMPORTED_MODULE_9__["StatusInvoiceClient"].Overdue, idClient).subscribe(function (res) {
            var date = new Date();
            var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
            var filename = 'InvoicesOverdue-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(res, filename);
            _this.spinner.hide();
            _this.translate.get('Report has been generated', { value: 'Report has been generated' }).subscribe(function (res1) {
                _this.notification.success('', res1);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe(function (res) {
                _this.notification.error('', res);
            });
            console.log('error', error);
        });
        this.close();
    };
    ReportInvoicesOverdueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-invoices-overdue',
            template: __webpack_require__(/*! ./report-invoices-overdue.component.html */ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.html"),
            styles: [__webpack_require__(/*! ./report-invoices-overdue.component.scss */ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_7__["UserStorageService"],
            _shared_services_invoiceClient_invoiceclient_service__WEBPACK_IMPORTED_MODULE_4__["InvoiceClientService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ReportInvoicesOverdueComponent);
    return ReportInvoicesOverdueComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/report-payments/report-payments.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-payments/report-payments.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Payments Report' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Report' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let types of typesReport; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup{{i}}\" name=\"radioGroup\" [value]=\"types.id\" (change)=\"onSelectionChangeTypes(types)\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"radioGroup{{i}}\">{{ types.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\">\n        <div class=\"custom-control\" [hidden]=\"!byClient\">\n          <label >{{ 'Select Client' | translate }}</label>\n          <select class=\"form-control\" name=\"client\" id=\"client\" [(ngModel)]=\"client\" (change)=\"onSelectClient()\">\n            <option *ngFor=\"let c of clients\" value=\"{{c.idUser}}\">{{ c.name | translate }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Status' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let status of listStatus; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup2{{i}}\" name=\"radioGroup2\" [value]=\"status.id\" (change)=\"onSelectionChangeStatus(status)\" class=\"custom-control-input\" [checked]=\"status.id == 2\">\n              <label class=\"custom-control-label\" for=\"radioGroup2{{i}}\">{{ status.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xl-12 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Period' | translate}}</label>\n          <div class=\"col-xl-12 control-period\" >\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"beginDate\" ngbDatepicker [(ngModel)]=\"beginDate\" \n                  #d=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endDate\" ngbDatepicker [(ngModel)]=\"endDate\" \n                  #d1=\"ngbDatepicker\" [disabled]=\"beginDate == null\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" [disabled]=\"!valid\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-payments/report-payments.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-payments/report-payments.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-payments/report-payments.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-payments/report-payments.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReportPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPaymentsComponent", function() { return ReportPaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_services_invoiceClient_invoiceclient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/invoiceClient/invoiceclient.service */ "./src/app/shared/services/invoiceClient/invoiceclient.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_models_reportRequest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/models/reportRequest */ "./src/app/shared/models/reportRequest.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReportPaymentsComponent = /** @class */ (function () {
    function ReportPaymentsComponent(modalReference, notification, translate, userStorageService, invoiceClientService, invoicePaymentService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.userStorageService = userStorageService;
        this.invoiceClientService = invoiceClientService;
        this.invoicePaymentService = invoicePaymentService;
        this.spinner = spinner;
        this.typesReport = [{ id: 0, name: 'All Clients' },
            { id: 1, name: 'By Client' }];
        this.listStatus = [{ id: 0, name: 'Pending' },
            { id: 1, name: 'Verified' },
            { id: 2, name: 'All' }];
        this.clients = new Array;
        this.valid = false;
        this.byClient = false;
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }
    ReportPaymentsComponent.prototype.ngOnInit = function () {
        this.client = '';
        this.selectStatus = 2;
    };
    ReportPaymentsComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ReportPaymentsComponent.prototype.onSelectClient = function () {
        this.valid = true;
    };
    ReportPaymentsComponent.prototype.onSelectionChangeTypes = function (type) {
        if (type.id == 0) {
            this.valid = (this.selectStatus == undefined ? false : true);
            this.byClient = false;
            this.client = '';
        }
        else {
            this.client = '';
            this.valid = false;
            this.byClient = true;
            this.loadClients();
        }
    };
    ReportPaymentsComponent.prototype.onSelectionChangeStatus = function (state) {
        this.selectStatus = state.id;
        this.valid = true;
    };
    ReportPaymentsComponent.prototype.loadClients = function () {
        var _this = this;
        this.invoicePaymentService.usersWithPayments$(this.user.userResponse.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_6__["CodeHttp"].ok) {
                _this.clients = res.data;
                if (_this.clients.length == 0) {
                    _this.translate.get('There are no customers with overdue invoices', { value: 'There are no customers with overdue invoices' }).subscribe(function (res1) {
                        _this.notification.warning('', res1);
                        _this.byClient = false;
                        _this.client = '';
                    });
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportPaymentsComponent.prototype.getFecha = function (model) {
        return new Date(model.year, model.month - 1, model.day);
    };
    ReportPaymentsComponent.prototype.generateReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportRequest = new _shared_models_reportRequest__WEBPACK_IMPORTED_MODULE_10__["ReportRequest"];
        var idClient = 0;
        if (this.client != '') {
            idClient = this.client;
        }
        this.reportRequest.status = this.selectStatus;
        this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
        this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
        this.reportRequest.idClient = idClient;
        this.invoicePaymentService.generateReportPayments$(this.reportRequest).subscribe(function (res) {
            if (res == null) {
                _this.translate.get('There are no records for the report', { value: 'There are no records for the report' }).subscribe(function (res1) {
                    _this.notification.warning('', res1);
                });
                _this.spinner.hide();
            }
            else {
                var date = new Date();
                var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                    day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
                var filename = 'PaymentsReport' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
                Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(res, filename);
                _this.spinner.hide();
                _this.translate.get('Report has been generated', { value: 'Report has been generated' }).subscribe(function (res1) {
                    _this.notification.success('', res1);
                });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe(function (res) {
                _this.notification.error('', res);
            });
            console.log('error', error);
        });
        this.close();
    };
    ReportPaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-payments',
            template: __webpack_require__(/*! ./report-payments.component.html */ "./src/app/reports/reports-list/report-payments/report-payments.component.html"),
            styles: [__webpack_require__(/*! ./report-payments.component.scss */ "./src/app/reports/reports-list/report-payments/report-payments.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__["UserStorageService"],
            _shared_services_invoiceClient_invoiceclient_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceClientService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["InvoicePaymentService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ReportPaymentsComponent);
    return ReportPaymentsComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-product-membership/report-product-membership.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Report of Products' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Report' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let types of typesReport; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup{{i}}\" name=\"radioGroup\" [value]=\"types.id\" (change)=\"onSelectionChange(types)\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"radioGroup{{i}}\">{{ types.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\">\n        <div class=\"custom-control\" [hidden]=\"!bySupplier\">\n          <label >{{ 'Select Supplier' | translate }}</label>\n          <select class=\"form-control\" name=\"supplier\" id=\"supplier\" [(ngModel)]=\"supplier\" (change)=\"onSelectSupplier()\">\n            <option *ngFor=\"let s of suppliers\" value=\"{{s.idSupplier}}\">{{ s.companyName | translate }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" [disabled]=\"!valid\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-product-membership/report-product-membership.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-product-membership/report-product-membership.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ReportProductMembershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProductMembershipComponent", function() { return ReportProductMembershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/suppliers/supplier.service */ "./src/app/shared/services/suppliers/supplier.service.ts");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReportProductMembershipComponent = /** @class */ (function () {
    function ReportProductMembershipComponent(modalReference, notification, translate, alertify, userStorageService, userService, productService, supplierService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.alertify = alertify;
        this.userStorageService = userStorageService;
        this.userService = userService;
        this.productService = productService;
        this.supplierService = supplierService;
        this.spinner = spinner;
        this.typesReport = [{ id: 0, name: 'All Suppliers' },
            { id: 1, name: 'By Supplier' }];
        this.suppliers = new Array;
        this.valid = false;
        this.bySupplier = false;
        this.today = new Date();
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }
    ReportProductMembershipComponent.prototype.ngOnInit = function () {
        this.supplier = '';
    };
    ReportProductMembershipComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ReportProductMembershipComponent.prototype.onSelectSupplier = function () {
        this.valid = true;
    };
    ReportProductMembershipComponent.prototype.onSelectionChange = function (type) {
        if (type.id === 0) {
            this.valid = true;
            this.bySupplier = false;
            this.supplier = '';
        }
        else {
            this.valid = false;
            this.bySupplier = true;
            this.loadSuppliers();
        }
    };
    ReportProductMembershipComponent.prototype.loadSuppliers = function () {
        var _this = this;
        this.supplierService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_11__["CodeHttp"].ok) {
                _this.suppliers = res.data;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportProductMembershipComponent.prototype.generateReport = function () {
        var _this = this;
        this.spinner.show();
        var idSupplier = 0;
        if (this.supplier !== '') {
            idSupplier = this.supplier;
        }
        if (this.type === 1) {
            this.productService.reportAllOrBySupplier$(idSupplier).subscribe(function (res) {
                var date = new Date();
                var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                    day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
                var filename = 'Products-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
                Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(res, filename);
                _this.spinner.hide();
                _this.translate.get('Report has been generated', { value: 'Report has been generated' }).subscribe(function (res1) {
                    _this.notification.success('', res1);
                });
            }, function (error) {
                _this.spinner.hide();
                _this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
                console.log('error', error);
            });
            this.close();
        }
        else {
            this.downloadProducts(idSupplier);
            this.close();
        }
    };
    ReportProductMembershipComponent.prototype.downloadProducts = function (idSupplier) {
        var _this = this;
        this.spinner.show();
        this.productService.downloadProducts$(idSupplier).subscribe(function (res) {
            var aux = { year: _this.today.getUTCFullYear(), month: _this.today.getMonth() + 1,
                day: _this.today.getDate(), hour: _this.today.getHours(), minutes: _this.today.getMinutes(), seconds: _this.today.getSeconds };
            var filename = 'Detailed-Products-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
            if (res.size > 0) {
                _this.spinner.hide();
                Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(res, filename);
            }
            else {
                _this.spinner.hide();
                _this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe(function (res1) {
                    _this.notification.error('', res1);
                });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.translate.get('File Not Found', { value: 'File Not Found' }).subscribe(function (res) {
                _this.notification.error('', res);
            });
            console.log('error', error);
        });
    };
    ReportProductMembershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-product-membership',
            template: __webpack_require__(/*! ./report-product-membership.component.html */ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.html"),
            styles: [__webpack_require__(/*! ./report-product-membership.component.scss */ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_9__["UserStorageService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ReportProductMembershipComponent);
    return ReportProductMembershipComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Sales by Product Report' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Report' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let types of typesReport; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup{{i}}\" name=\"radioGroup\" [value]=\"types.id\" (change)=\"onSelectionChangeTypes(types)\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"radioGroup{{i}}\">{{ types.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\">\n        <div class=\"custom-control\" [hidden]=\"!byProduct\">\n          <label >{{ 'Select Product' | translate }}</label>\n          <select class=\"form-control\" name=\"product\" id=\"product\" [(ngModel)]=\"product\" (change)=\"onSelectProduct()\">\n            <option *ngFor=\"let p of products\" value=\"{{p.idProduct}}\">{{ p.name | translate }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Country' | translate}}</label>\n          <select class=\"form-control\" name=\"country\" id=\"country\" [(ngModel)]=\"country\" >\n            <option *ngFor=\"let c of countries\" value=\"{{c.idCountry}}\">{{ c.name | translate }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xl-12 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Period' | translate}}</label>\n          <div class=\"col-xl-12 control-period\" >\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"beginDate\" ngbDatepicker [(ngModel)]=\"beginDate\"\n                  #d=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n            <div class=\"input-group col-xl-6\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endDate\" ngbDatepicker [(ngModel)]=\"endDate\"\n                  #d1=\"ngbDatepicker\" [disabled]=\"beginDate == null\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" [disabled]=\"!valid\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ReportSalesByProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSalesByProductComponent", function() { return ReportSalesByProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/order/order.service */ "./src/app/shared/services/order/order.service.ts");
/* harmony import */ var _shared_services_productsRequested_products_requested_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/productsRequested/products-requested.service */ "./src/app/shared/services/productsRequested/products-requested.service.ts");
/* harmony import */ var _shared_models_reportSalesByProductRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/models/reportSalesByProductRequest */ "./src/app/shared/models/reportSalesByProductRequest.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReportSalesByProductComponent = /** @class */ (function () {
    function ReportSalesByProductComponent(modalReference, notification, translate, userStorageService, orderService, productsRequestedService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.userStorageService = userStorageService;
        this.orderService = orderService;
        this.productsRequestedService = productsRequestedService;
        this.spinner = spinner;
        this.typesReport = [{ id: 0, name: 'All Products' },
            { id: 1, name: 'By Product' }];
        this.products = new Array;
        this.countries = new Array;
        this.valid = false;
        this.byProduct = false;
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
    }
    ReportSalesByProductComponent.prototype.ngOnInit = function () {
        this.product = '';
        this.country = '';
        this.loadCountries();
    };
    ReportSalesByProductComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ReportSalesByProductComponent.prototype.onSelectClient = function () {
        this.valid = true;
    };
    ReportSalesByProductComponent.prototype.onSelectProduct = function () {
        this.valid = true;
    };
    ReportSalesByProductComponent.prototype.onSelectionChangeTypes = function (type) {
        if (type.id === 0) {
            this.valid = true;
            this.byProduct = false;
            this.product = '';
            this.country = '';
        }
        else {
            this.product = '';
            this.country = '';
            this.valid = false;
            this.byProduct = true;
            this.loadProducts();
        }
    };
    ReportSalesByProductComponent.prototype.loadCountries = function () {
        var _this = this;
        this.orderService.findAllCountries$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_6__["CodeHttp"].ok) {
                _this.countries = res.data;
                if (_this.countries.length === 0) {
                    _this.translate.get('There are no orders', { value: 'There are no orders' }).subscribe(function (res1) {
                        _this.notification.warning('', res1);
                        _this.byProduct = false;
                        _this.country = '';
                    });
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportSalesByProductComponent.prototype.loadProducts = function () {
        var _this = this;
        this.productsRequestedService.findAllProducts$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_6__["CodeHttp"].ok) {
                _this.products = res.data;
                if (_this.products.length === 0) {
                    _this.translate.get('There are no orders', { value: 'There are no orders' }).subscribe(function (res1) {
                        _this.notification.warning('', res1);
                        _this.byProduct = true;
                        _this.product = '';
                    });
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportSalesByProductComponent.prototype.getFecha = function (model) {
        return new Date(model.year, model.month - 1, model.day);
    };
    ReportSalesByProductComponent.prototype.generateReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportRequest = new _shared_models_reportSalesByProductRequest__WEBPACK_IMPORTED_MODULE_9__["ReportSalesByProductRequest"];
        var idProduct = 0;
        if (this.product !== '') {
            idProduct = this.product;
        }
        var idCountry = 0;
        if (this.country !== '') {
            idCountry = this.country;
        }
        this.reportRequest.idCountry = idCountry;
        this.reportRequest.beginDate = this.beginDate == null ? null : this.getFecha(this.beginDate);
        this.reportRequest.endDate = this.endDate == null ? null : this.getFecha(this.endDate);
        this.reportRequest.idProduct = idProduct;
        this.orderService.reportSalesAllOrByProduct$(this.reportRequest).subscribe(function (res) {
            console.log('response', res);
            if (res == null) {
                _this.translate.get('There are no records for the report', { value: 'There are no records for the report' }).subscribe(function (res1) {
                    _this.notification.warning('', res1);
                });
                _this.spinner.hide();
            }
            else {
                var date = new Date();
                var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                    day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
                var filename = 'SalesReport-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
                Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(res, filename);
                _this.spinner.hide();
                _this.translate.get('Report has been generated', { value: 'Report has been generated' }).subscribe(function (res1) {
                    _this.notification.success('', res1);
                });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe(function (res) {
                _this.notification.error('', res);
            });
            console.log('error', error);
        });
        this.close();
    };
    ReportSalesByProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-sales-by-product',
            template: __webpack_require__(/*! ./report-sales-by-product.component.html */ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.html"),
            styles: [__webpack_require__(/*! ./report-sales-by-product.component.scss */ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_4__["UserStorageService"],
            _shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"],
            _shared_services_productsRequested_products_requested_service__WEBPACK_IMPORTED_MODULE_8__["ProductsRequestedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ReportSalesByProductComponent);
    return ReportSalesByProductComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor=\"rgba(51, 51, 51, 0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-beat\"\n></ngx-spinner>\n<br />\n<br />\n<br />\n<div class=\"margin-breadcrumb\">\n  <div class=\"header-body\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\"\n          ><i class=\"fa fa-dashboard\"></i> {{ \"Dashboard\" | translate }}</a\n        >\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-edit\"></i> {{ \"Reports List\" | translate }}\n      </li>\n    </ol>\n  </div>\n</div>\n<br /><br /><br />\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!-- THUMBNAILS PRODUCTS -->\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\n      <div class=\"row margin-list\">\n        <div class=\"col-md-4\" *ngFor=\"let report of listReport\">\n          <div class=\"mb-4\">\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"onSelection(report.id)\">\n                <i class=\"fa fa-download prodTeaser-more\"></i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <!--<img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ supplier.image }}\"\n                />-->\n                <label class=\"label-report\">{{report.name | translate}}</label>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.box {\n  border: 1px solid #555657;\n  border-radius: 1.45em;\n  z-index: 1; }\n.prodTeaser {\n  background: #fff;\n  border: 1px solid #dcddde;\n  box-shadow: inset 0 0 0 0 transparent;\n  height: 15vw;\n  padding: 18%;\n  position: relative;\n  transition: all 0s;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n.prodTeaser-overlay {\n  background: rgba(0, 174, 239, 0.5);\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n  position: absolute;\n  overflow: hidden; }\n.prodTeaser-overlay:hover {\n    opacity: 1;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer; }\n.prodTeaser-inner:focus,\na:active,\na:hover {\n  outline: 0;\n  cursor: pointer; }\n.card-img-top-teaser {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: center; }\n.prodTeaser-more {\n  color: #199bd7;\n  background: #fff;\n  border-radius: 50%;\n  font-size: 1.5em;\n  line-height: 86px;\n  width: 90px;\n  height: 90px;\n  top: 50%;\n  left: 50%;\n  margin: -45px 0 0 -45px;\n  display: block;\n  position: absolute;\n  transition: all 0.35s ease-out;\n  opacity: 1; }\n.prodTeaser-more:hover {\n    position: absolute;\n    -webkit-transform: translateY(-25%);\n            transform: translateY(-25%); }\n.prodTeaser-inner {\n  max-width: 100%;\n  transition: all 0.35s ease-out; }\n.prodTeaser-inner .label-report {\n    font-style: italic;\n    font-weight: 700;\n    font-size: 2.0rem; }\n"

/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ReportsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsListComponent", function() { return ReportsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-invoices-overdue/report-invoices-overdue.component */ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _report_payments_report_payments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report-payments/report-payments.component */ "./src/app/reports/reports-list/report-payments/report-payments.component.ts");
/* harmony import */ var _report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-product-membership/report-product-membership.component */ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.ts");
/* harmony import */ var _report_balance_client_report_balance_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report-balance-client/report-balance-client.component */ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.ts");
/* harmony import */ var _report_sales_by_product_report_sales_by_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report-sales-by-product/report-sales-by-product.component */ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.ts");
/* harmony import */ var _report_general_balance_report_general_balance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-general-balance/report-general-balance.component */ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent(userStorageService, modalService, router, spinner, translate, notification, productService) {
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        this.router = router;
        this.spinner = spinner;
        this.translate = translate;
        this.notification = notification;
        this.productService = productService;
        this.listReport = [{ id: 1, name: 'Overdue Invoices Report' },
            { id: 2, name: 'Payments Report' },
            { id: 3, name: 'Products Report' },
            { id: 4, name: 'Detailed Products Report' },
            { id: 5, name: 'Clients Balance' },
            { id: 6, name: 'General Balance' },
            { id: 7, name: 'Sales by Product Report' }];
        this.products = new Array;
        this.today = new Date();
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ReportsListComponent.prototype.ngOnInit = function () {
    };
    ReportsListComponent.prototype.onSelection = function (id) {
        var _this = this;
        if (this.user.role.idRole === 1) {
            switch (id) {
                case 1: {
                    var modalRef = this.modalService.open(_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_4__["ReportInvoicesOverdueComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
                }
                case 2: {
                    var modalRef = this.modalService.open(_report_payments_report_payments_component__WEBPACK_IMPORTED_MODULE_9__["ReportPaymentsComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
                }
                case 3: {
                    var modalRef3 = this.modalService.open(_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_10__["ReportProductMembershipComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef3.componentInstance.type = 1;
                    modalRef3.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
                }
                case 4:
                    var modalRef4 = this.modalService.open(_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_10__["ReportProductMembershipComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef4.componentInstance.type = 2;
                    modalRef4.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
                case 5:
                    var modalRef5 = this.modalService.open(_report_balance_client_report_balance_client_component__WEBPACK_IMPORTED_MODULE_11__["ReportBalanceClientComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef5.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
                case 6: {
                    var modalRef6 = this.modalService.open(_report_general_balance_report_general_balance_component__WEBPACK_IMPORTED_MODULE_13__["ReportGeneralBalanceComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef6.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
                }
                case 7:
                    var modalRef7 = this.modalService.open(_report_sales_by_product_report_sales_by_product_component__WEBPACK_IMPORTED_MODULE_12__["ReportSalesByProductComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
                    modalRef7.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                    break;
            }
        }
    };
    ReportsListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'filter2' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ReportsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-list',
            template: __webpack_require__(/*! ./reports-list.component.html */ "./src/app/reports/reports-list/reports-list.component.html"),
            styles: [__webpack_require__(/*! ./reports-list.component.scss */ "./src/app/reports/reports-list/reports-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_user_storage_service__WEBPACK_IMPORTED_MODULE_1__["UserStorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], ReportsListComponent);
    return ReportsListComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-list/reports-list.component */ "./src/app/reports/reports-list/reports-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
        canActivateChild: [_shared__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
        children: [
            { path: '', component: _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__["ReportsListComponent"], data: { option: 'ReportsList' } }
        ], data: { option: 'ReportsList' }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<section class=\"main-container\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.scss":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
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

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/reports/reports-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modules/header/header.module */ "./src/app/shared/modules/header/header.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports-list/reports-list.component */ "./src/app/reports/reports-list/reports-list.component.ts");
/* harmony import */ var _reports_list_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports-list/report-invoices-overdue/report-invoices-overdue.component */ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.ts");
/* harmony import */ var _reports_list_report_payments_report_payments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reports-list/report-payments/report-payments.component */ "./src/app/reports/reports-list/report-payments/report-payments.component.ts");
/* harmony import */ var _reports_list_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reports-list/report-product-membership/report-product-membership.component */ "./src/app/reports/reports-list/report-product-membership/report-product-membership.component.ts");
/* harmony import */ var _reports_list_report_balance_client_report_balance_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reports-list/report-balance-client/report-balance-client.component */ "./src/app/reports/reports-list/report-balance-client/report-balance-client.component.ts");
/* harmony import */ var _reports_list_report_sales_by_product_report_sales_by_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports-list/report-sales-by-product/report-sales-by-product.component */ "./src/app/reports/reports-list/report-sales-by-product/report-sales-by-product.component.ts");
/* harmony import */ var _reports_list_report_general_balance_report_general_balance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reports-list/report-general-balance/report-general-balance.component */ "./src/app/reports/reports-list/report-general-balance/report-general-balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"],
                _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_11__["ReportsListComponent"],
                _reports_list_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_12__["ReportInvoicesOverdueComponent"],
                _reports_list_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_14__["ReportProductMembershipComponent"],
                _reports_list_report_payments_report_payments_component__WEBPACK_IMPORTED_MODULE_13__["ReportPaymentsComponent"],
                _reports_list_report_balance_client_report_balance_client_component__WEBPACK_IMPORTED_MODULE_15__["ReportBalanceClientComponent"],
                _reports_list_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_14__["ReportProductMembershipComponent"],
                _reports_list_report_sales_by_product_report_sales_by_product_component__WEBPACK_IMPORTED_MODULE_16__["ReportSalesByProductComponent"],
                _reports_list_report_general_balance_report_general_balance_component__WEBPACK_IMPORTED_MODULE_17__["ReportGeneralBalanceComponent"]
            ],
            entryComponents: [
                _reports_list_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_12__["ReportInvoicesOverdueComponent"],
                _reports_list_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_14__["ReportProductMembershipComponent"],
                _reports_list_report_payments_report_payments_component__WEBPACK_IMPORTED_MODULE_13__["ReportPaymentsComponent"],
                _reports_list_report_balance_client_report_balance_client_component__WEBPACK_IMPORTED_MODULE_15__["ReportBalanceClientComponent"],
                _reports_list_report_product_membership_report_product_membership_component__WEBPACK_IMPORTED_MODULE_14__["ReportProductMembershipComponent"],
                _reports_list_report_sales_by_product_report_sales_by_product_component__WEBPACK_IMPORTED_MODULE_16__["ReportSalesByProductComponent"],
                _reports_list_report_general_balance_report_general_balance_component__WEBPACK_IMPORTED_MODULE_17__["ReportGeneralBalanceComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_6__["RoleGuard"], _shared_services__WEBPACK_IMPORTED_MODULE_9__["AuthorizationService"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/shared/models/reportRequest.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/reportRequest.ts ***!
  \************************************************/
/*! exports provided: ReportRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRequest", function() { return ReportRequest; });
var ReportRequest = /** @class */ (function () {
    function ReportRequest() {
    }
    return ReportRequest;
}());



/***/ }),

/***/ "./src/app/shared/models/reportSalesByProductRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/reportSalesByProductRequest.ts ***!
  \**************************************************************/
/*! exports provided: ReportSalesByProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSalesByProductRequest", function() { return ReportSalesByProductRequest; });
var ReportSalesByProductRequest = /** @class */ (function () {
    function ReportSalesByProductRequest() {
    }
    return ReportSalesByProductRequest;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map