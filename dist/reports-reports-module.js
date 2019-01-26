(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Report of Overdue Invoices' | translate }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 form-group\" >\n        <div class=\"custom-control\">\n          <label >{{'Select Report' | translate}}</label>\n          <div class=\"col-xl-12\" *ngFor=\"let types of typesReport; let i = index\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"radioGroup{{i}}\" name=\"radioGroup\" [value]=\"types.id\" (change)=\"onSelectionChange(types)\" class=\"custom-control-input\">\n              <label class=\"custom-control-label\" for=\"radioGroup{{i}}\">{{ types.name | translate }}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-10 form-group\">\n        <div class=\"custom-control\" [hidden]=\"!byClient\">\n          <label >{{ 'Select Client' | translate }}</label>\n          <select class=\"form-control\" name=\"client\" id=\"client\" [(ngModel)]=\"client\" (change)=\"onSelectClient()\">\n            <option *ngFor=\"let c of clients\" value=\"{{c.idUser}}\">{{ c.name | translate }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-main\" [disabled]=\"!valid\" (click)=\"generateReport()\">{{ 'Generate' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/reports/reports-list/report-invoices-overdue/report-invoices-overdue.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n"

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
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var _shared_services_invoiceClient_invoiceclient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/invoiceClient/invoiceclient.service */ "./src/app/shared/services/invoiceClient/invoiceclient.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_enum_status_invoice_client_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/enum/status-invoice-client.enum */ "./src/app/shared/enum/status-invoice-client.enum.ts");
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
    function ReportInvoicesOverdueComponent(modalReference, notification, translate, alertify, userStorageService, userService, invoiceClientService, spinner) {
        this.modalReference = modalReference;
        this.notification = notification;
        this.translate = translate;
        this.alertify = alertify;
        this.userStorageService = userStorageService;
        this.userService = userService;
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
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_10__["CodeHttp"].ok) {
                _this.clients = res.data;
                console.log(_this.clients);
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
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_10__["CodeHttp"].ok) {
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
        console.log('status', _shared_enum_status_invoice_client_enum__WEBPACK_IMPORTED_MODULE_11__["StatusInvoiceClient"].Overdue);
        this.invoiceClientService.generateReportInvoices$(_shared_enum_status_invoice_client_enum__WEBPACK_IMPORTED_MODULE_11__["StatusInvoiceClient"].Overdue, idClient).subscribe(function (res) {
            var date = new Date();
            var aux = { year: date.getUTCFullYear(), month: date.getMonth() + 1,
                day: date.getDate(), hour: date.getHours(), minutes: date.getMinutes() };
            var filename = 'InvoicesOverdue-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(res, filename);
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
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_8__["UserStorageService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _shared_services_invoiceClient_invoiceclient_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceClientService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ReportInvoicesOverdueComponent);
    return ReportInvoicesOverdueComponent;
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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.box {\n  border: 1px solid #555657;\n  border-radius: 1.45em;\n  z-index: 1; }\n.prodTeaser {\n  background: #fff;\n  border: 1px solid #dcddde;\n  box-shadow: inset 0 0 0 0 transparent;\n  height: 15vw;\n  padding: 18%;\n  position: relative;\n  transition: all 0s;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n.prodTeaser-overlay {\n  background: rgba(0, 174, 239, 0.5);\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n  position: absolute;\n  overflow: hidden; }\n.prodTeaser-overlay:hover {\n    opacity: 1;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer; }\n.prodTeaser-inner:focus,\na:active,\na:hover {\n  outline: 0;\n  cursor: pointer; }\n.card-img-top-teaser {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: center; }\n.prodTeaser-more {\n  color: #199bd7;\n  background: #fff;\n  border-radius: 50%;\n  font-size: 1.5em;\n  line-height: 86px;\n  width: 90px;\n  height: 90px;\n  top: 50%;\n  left: 50%;\n  margin: -45px 0 0 -45px;\n  display: block;\n  position: absolute;\n  transition: all 0.35s ease-out;\n  opacity: 1; }\n.prodTeaser-more:hover {\n    position: absolute;\n    -webkit-transform: translateY(-25%);\n            transform: translateY(-25%); }\n.prodTeaser-inner {\n  max-width: 100%;\n  transition: all 0.35s ease-out; }\n.prodTeaser-inner .label-report {\n    font-style: italic;\n    font-weight: 700;\n    font-size: 2.0rem; }\n"

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
    function ReportsListComponent(userStorageService, modalService, router) {
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        this.router = router;
        this.listReport = [{ id: 1, name: 'Report of Overdue Invoices' },
            { id: 2, name: 'Report 2' },
            { id: 3, name: 'Report 3' },
            { id: 4, name: 'Report 4' }];
        this.products = new Array;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ReportsListComponent.prototype.ngOnInit = function () {
        console.log('report', this.listReport);
    };
    ReportsListComponent.prototype.onSelection = function (id) {
        var _this = this;
        if (this.user.role.idRole === 1) {
            switch (id) {
                case 1: {
                    var modalRef = this.modalService.open(_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_4__["ReportInvoicesOverdueComponent"], { size: 'lg' });
                    modalRef.result.then(function (result) {
                        _this.ngOnInit();
                    }, function (reason) {
                    });
                }
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
                _reports_list_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_12__["ReportInvoicesOverdueComponent"]
            ],
            entryComponents: [
                _reports_list_report_invoices_overdue_report_invoices_overdue_component__WEBPACK_IMPORTED_MODULE_12__["ReportInvoicesOverdueComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_6__["RoleGuard"], _shared_services__WEBPACK_IMPORTED_MODULE_9__["AuthorizationService"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/shared/enum/status-invoice-client.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/enum/status-invoice-client.enum.ts ***!
  \***********************************************************/
/*! exports provided: StatusInvoiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusInvoiceClient", function() { return StatusInvoiceClient; });
var StatusInvoiceClient;
(function (StatusInvoiceClient) {
    StatusInvoiceClient[StatusInvoiceClient["Pending"] = 1] = "Pending";
    StatusInvoiceClient[StatusInvoiceClient["Part_Paid"] = 2] = "Part_Paid";
    StatusInvoiceClient[StatusInvoiceClient["Paid"] = 3] = "Paid";
    StatusInvoiceClient[StatusInvoiceClient["Overdue"] = 4] = "Overdue";
})(StatusInvoiceClient || (StatusInvoiceClient = {}));


/***/ }),

/***/ "./src/app/shared/services/alertify/alertify.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/alertify/alertify.service.ts ***!
  \**************************************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (title, message, okCallBack, cancelCallBack) {
        alertify.confirm(title, message, function (e) {
            if (e) {
                okCallBack();
            }
            else {
                // Do anything
            }
        }, function (e) {
            if (e) {
                cancelCallBack();
            }
            else {
                // Do anything
            }
        }).set('labels', { ok: 'Ok', cancel: 'No' });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.set('notifier', 'position', 'top-right');
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.set('notifier', 'position', 'top-right');
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.set('notifier', 'position', 'top-right');
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.set('notifier', 'position', 'top-right');
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map