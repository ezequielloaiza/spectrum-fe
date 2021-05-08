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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtYmFsYW5jZS1jbGllbnQvcmVwb3J0LWJhbGFuY2UtY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLFFBQVE7RUFDUixTQUFTLEVBQUE7QUFHWDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtYmFsYW5jZS1jbGllbnQvcmVwb3J0LWJhbGFuY2UtY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGVmaW5lIHRyIHdpZHRoICovXG5AbWl4aW4gdHItc2l6ZXMoJGNlbGwtc2l6ZXMpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNlbGwtc2l6ZXMpIHtcbiAgICAudGFibGUtdHI6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICB3aWR0aDogbnRoKCRjZWxsLXNpemVzLCAkaSk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KSAhaW1wb3J0YW50OztcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjI0KSwgMCAwIDJweCByZ2JhKDAsMCwwLC4xMikgIWltcG9ydGFudDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXdoaXRlO1xuICAgIGNvbG9yOiAkYmctYmx1ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93LXk6IC13ZWJraXQtcGFnZWQteTtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcblxuICA+dGhlYWQgPnRyID50aCA+dGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICA+dGJvZHkgPnRyOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi5oZWFkZXItY29sdW1uIHtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4YThhOGE7XG59XG5cbi5wYWdpbmF0aW9uLWxpc3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNvdW50LWVsZW1lbnRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5mYS1zb3J0LXVwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydC1kb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXJlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZC10YWJsZXtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIkYmctc2lkZWJhcjogIzQ5NDk0OTtcbiRiZy1uYXZiYXI6ICMyMjI7XG4kYmctYmx1ZTogIzE3NTZhNjtcbiRiZy13aGl0ZTogI2ZmZmZmZjtcbiRiZy10ZXh0LXNlbGVjdDogI2Y5MDtcbiRiZy1pdGVtLXNlbGVjdDogIzNjM2MzYztcbiRiZy1ibHVlLWhvdmVyOiAjMTg1ZWI5O1xuJGJnLWltcHV0OiAjY2VkNGRhO1xuJGJnLXJlZDogI2NjMDAwMDtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4kYm94LXNoYWRvdyA6IDJweCByZ2JhKDAsMCwwLC4yNCk7XG4kYm94LXNoYWRvdzE6cmdiYSgwLDAsMCwuMTIpO1xuJGNvbG9yLXRleHQtbWVudTojODY4ZTk2O1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJnLXRpdGxlLWNhcmQ6ICNmN2Y3Zjc7XG4kYm9yZGVyLWdyZXk6ICNkZWUyZTY7XG5cbi8vU1RBVFVTRVNcbiRwZW5kaW5nLXN0YXR1czogI0I3MUMxQztcbiRhdXRob3JpemVkLXN0YXR1czogIzRBMTQ4QztcbiRwcm9jZXNzZWQtc3RhdHVzOiAjRkY2RjAwO1xuJHBhaWQtc3RhdHVzOiAjMUI1RTIwO1xuJHNlbnQtc3RhdHVzOiAjMDE1NzlCO1xuJGNhbmNlbC1zdGF0dXM6ICMzMzMzMzU7XG5cblxuJHNlY29uZGFyeS1pbmZvOiM4NjhlOTY7XG4kYmctcHJvZHVjdC1kZXRhaWw6I2ZmZmZmZjtcbiRpbmZvLXNlcGFyYXRvcjpyZ2JhKDAsIDAsIDAsIDAuMSk7XG4kaWNvbi1lZGl0LWRldGFpbDojMTc1NmE2O1xuJGVycm9yLXF1YW50aXR5OnJlZDtcbiRtZXNzYWdlLXF1YW50aXR5OiMwMDgwMDA7XG4iLCIuYnRuLW1haW4ge1xuICBiYWNrZ3JvdW5kOiAkYmctYmx1ZTtcbiAgY29sb3I6ICRiZy13aGl0ZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGJnLWJsdWUtaG92ZXI7XG4gIH1cbn1cblxuLmJ0bi1kcm9wZG93bi1tYWluIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICB0b3A6IDI4cHggIWltcG9ydGFudDtcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDU5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjQ0NDO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5kcm9wZG93bi1tZW51OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgJGJnLXdoaXRlO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiAnJztcbiAgfVxuXG4gIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCIubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWJsdWU7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgPmJ1dHRvbiB7XG4gICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLWdyZWVuOyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctcmVkOyAvKiByZWQgKi9cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxLjdyZW07XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA4cmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjApO1xufVxuXG4ubWVzc2FnZS1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBjb2xvcjogJGJnLXJlZDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnNwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtdGl0bGUge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3NwZWN0cnVtL3NwZWN0cnVtJztcblxuLnNwaW5uZXIge1xuICB0b3A6IDkwJTtcbiAgbGVmdDogODUlO1xufVxuXG4uY29udHJvbC1wZXJpb2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbiJdfQ== */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtZ2VuZXJhbC1iYWxhbmNlL3JlcG9ydC1nZW5lcmFsLWJhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsUUFBUTtFQUNSLFNBQVMsRUFBQTtBQUdYO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy1saXN0L3JlcG9ydC1nZW5lcmFsLWJhbGFuY2UvcmVwb3J0LWdlbmVyYWwtYmFsYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bSc7XG5cbi5zcGlubmVyIHtcbiAgdG9wOiA5MCU7XG4gIGxlZnQ6IDg1JTtcbn1cblxuLmNvbnRyb2wtcGVyaW9kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59Il19 */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtaW52b2ljZXMtb3ZlcmR1ZS9yZXBvcnQtaW52b2ljZXMtb3ZlcmR1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQVNBO0VBQ0UsbURBQW1EO0VBQ25ELGlGQUF5RSxFQUFBO0FBRjNFO0lBS0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJDZGM7SURlZCxjQ2hCYTtJRGlCYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0FBWnJCO01BZU0sMkJBQTJCLEVBQUE7QUFLakM7RUFHSSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7QUFKM0I7RUFRSSxhQUFhLEVBQUE7QUFJakI7RUFFSSxlQUFlLEVBQUE7QUFJbkI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FFM0ZyQjtFQUNFLG1CRENlO0VDQWYsY0RDZ0IsRUFBQTtBQ0hsQjtJQUtJLGdCQUFnQixFQUFBO0FBTHBCO0lBU0ksbUJESG1CLEVBQUE7QUNPdkI7RUFDRSxjRFplO0VDYWYsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFMcEI7SUFRSSxnQkFBZ0IsRUFBQTtBQUtwQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLFdBQVcsRUFBQTtBQUVYO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxnQ0Q5Q2dCO0VDK0NoQixrQ0FBa0M7RUFDbEMsV0FBVyxFQUFBO0FBR1g7RUFDRSxtQkFBbUIsRUFBQTtBQ3ZEdkI7RUFDRSx5QkZDZTtFRUFmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7QUFOZDtJQVNJLGNGTmM7SUVPZCxVQUFVLEVBQUE7QUNWZDtFQUNFLDhCSGFnQjtFR2JrQixVQUFBLEVBQVc7QUFHL0M7RUFDRSw4QkhHYztFR0hrQixRQUFBLEVBQVM7QUFHM0M7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxnREFBaUQsRUFBQTtBQUduRDtFQUNFLGlCQUFpQjtFQUNqQixjSFZjO0VHV2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNIcENlO0VHcUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQ3RDbkI7RUFDRSxRQUFRO0VBQ1IsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLWxpc3QvcmVwb3J0LWludm9pY2VzLW92ZXJkdWUvcmVwb3J0LWludm9pY2VzLW92ZXJkdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW0nO1xuXG4uc3Bpbm5lciB7XG4gIHRvcDogOTAlO1xuICBsZWZ0OiA4NSU7XG59XG4iXX0= */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtcGF5bWVudHMvcmVwb3J0LXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLFFBQVE7RUFDUixTQUFTLEVBQUE7QUFHWDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtcGF5bWVudHMvcmVwb3J0LXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGVmaW5lIHRyIHdpZHRoICovXG5AbWl4aW4gdHItc2l6ZXMoJGNlbGwtc2l6ZXMpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNlbGwtc2l6ZXMpIHtcbiAgICAudGFibGUtdHI6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICB3aWR0aDogbnRoKCRjZWxsLXNpemVzLCAkaSk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KSAhaW1wb3J0YW50OztcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjI0KSwgMCAwIDJweCByZ2JhKDAsMCwwLC4xMikgIWltcG9ydGFudDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXdoaXRlO1xuICAgIGNvbG9yOiAkYmctYmx1ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93LXk6IC13ZWJraXQtcGFnZWQteTtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcblxuICA+dGhlYWQgPnRyID50aCA+dGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICA+dGJvZHkgPnRyOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi5oZWFkZXItY29sdW1uIHtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4YThhOGE7XG59XG5cbi5wYWdpbmF0aW9uLWxpc3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNvdW50LWVsZW1lbnRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5mYS1zb3J0LXVwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydC1kb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXJlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZC10YWJsZXtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIkYmctc2lkZWJhcjogIzQ5NDk0OTtcbiRiZy1uYXZiYXI6ICMyMjI7XG4kYmctYmx1ZTogIzE3NTZhNjtcbiRiZy13aGl0ZTogI2ZmZmZmZjtcbiRiZy10ZXh0LXNlbGVjdDogI2Y5MDtcbiRiZy1pdGVtLXNlbGVjdDogIzNjM2MzYztcbiRiZy1ibHVlLWhvdmVyOiAjMTg1ZWI5O1xuJGJnLWltcHV0OiAjY2VkNGRhO1xuJGJnLXJlZDogI2NjMDAwMDtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4kYm94LXNoYWRvdyA6IDJweCByZ2JhKDAsMCwwLC4yNCk7XG4kYm94LXNoYWRvdzE6cmdiYSgwLDAsMCwuMTIpO1xuJGNvbG9yLXRleHQtbWVudTojODY4ZTk2O1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJnLXRpdGxlLWNhcmQ6ICNmN2Y3Zjc7XG4kYm9yZGVyLWdyZXk6ICNkZWUyZTY7XG5cbi8vU1RBVFVTRVNcbiRwZW5kaW5nLXN0YXR1czogI0I3MUMxQztcbiRhdXRob3JpemVkLXN0YXR1czogIzRBMTQ4QztcbiRwcm9jZXNzZWQtc3RhdHVzOiAjRkY2RjAwO1xuJHBhaWQtc3RhdHVzOiAjMUI1RTIwO1xuJHNlbnQtc3RhdHVzOiAjMDE1NzlCO1xuJGNhbmNlbC1zdGF0dXM6ICMzMzMzMzU7XG5cblxuJHNlY29uZGFyeS1pbmZvOiM4NjhlOTY7XG4kYmctcHJvZHVjdC1kZXRhaWw6I2ZmZmZmZjtcbiRpbmZvLXNlcGFyYXRvcjpyZ2JhKDAsIDAsIDAsIDAuMSk7XG4kaWNvbi1lZGl0LWRldGFpbDojMTc1NmE2O1xuJGVycm9yLXF1YW50aXR5OnJlZDtcbiRtZXNzYWdlLXF1YW50aXR5OiMwMDgwMDA7XG4iLCIuYnRuLW1haW4ge1xuICBiYWNrZ3JvdW5kOiAkYmctYmx1ZTtcbiAgY29sb3I6ICRiZy13aGl0ZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGJnLWJsdWUtaG92ZXI7XG4gIH1cbn1cblxuLmJ0bi1kcm9wZG93bi1tYWluIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICB0b3A6IDI4cHggIWltcG9ydGFudDtcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDU5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjQ0NDO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5kcm9wZG93bi1tZW51OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgJGJnLXdoaXRlO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiAnJztcbiAgfVxuXG4gIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCIubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWJsdWU7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgPmJ1dHRvbiB7XG4gICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLWdyZWVuOyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctcmVkOyAvKiByZWQgKi9cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxLjdyZW07XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA4cmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjApO1xufVxuXG4ubWVzc2FnZS1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBjb2xvcjogJGJnLXJlZDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnNwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtdGl0bGUge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3NwZWN0cnVtL3NwZWN0cnVtJztcblxuLnNwaW5uZXIge1xuICB0b3A6IDkwJTtcbiAgbGVmdDogODUlO1xufVxuXG4uY29udHJvbC1wZXJpb2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbiJdfQ== */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtcHJvZHVjdC1tZW1iZXJzaGlwL3JlcG9ydC1wcm9kdWN0LW1lbWJlcnNoaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsUUFBUTtFQUNSLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy1saXN0L3JlcG9ydC1wcm9kdWN0LW1lbWJlcnNoaXAvcmVwb3J0LXByb2R1Y3QtbWVtYmVyc2hpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bSc7XG5cbi5zcGlubmVyIHtcbiAgdG9wOiA5MCU7XG4gIGxlZnQ6IDg1JTtcbn1cbiJdfQ== */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.spinner {\n  top: 90%;\n  left: 85%; }\n.control-period {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnQtc2FsZXMtYnktcHJvZHVjdC9yZXBvcnQtc2FsZXMtYnktcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQVNBO0VBQ0UsbURBQW1EO0VBQ25ELGlGQUF5RSxFQUFBO0FBRjNFO0lBS0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJDZGM7SURlZCxjQ2hCYTtJRGlCYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0FBWnJCO01BZU0sMkJBQTJCLEVBQUE7QUFLakM7RUFHSSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7QUFKM0I7RUFRSSxhQUFhLEVBQUE7QUFJakI7RUFFSSxlQUFlLEVBQUE7QUFJbkI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FFM0ZyQjtFQUNFLG1CRENlO0VDQWYsY0RDZ0IsRUFBQTtBQ0hsQjtJQUtJLGdCQUFnQixFQUFBO0FBTHBCO0lBU0ksbUJESG1CLEVBQUE7QUNPdkI7RUFDRSxjRFplO0VDYWYsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFMcEI7SUFRSSxnQkFBZ0IsRUFBQTtBQUtwQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLFdBQVcsRUFBQTtBQUVYO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxnQ0Q5Q2dCO0VDK0NoQixrQ0FBa0M7RUFDbEMsV0FBVyxFQUFBO0FBR1g7RUFDRSxtQkFBbUIsRUFBQTtBQ3ZEdkI7RUFDRSx5QkZDZTtFRUFmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7QUFOZDtJQVNJLGNGTmM7SUVPZCxVQUFVLEVBQUE7QUNWZDtFQUNFLDhCSGFnQjtFR2JrQixVQUFBLEVBQVc7QUFHL0M7RUFDRSw4QkhHYztFR0hrQixRQUFBLEVBQVM7QUFHM0M7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxnREFBaUQsRUFBQTtBQUduRDtFQUNFLGlCQUFpQjtFQUNqQixjSFZjO0VHV2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNIcENlO0VHcUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQ3RDbkI7RUFDRSxRQUFRO0VBQ1IsU0FBUyxFQUFBO0FBR1g7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLWxpc3QvcmVwb3J0LXNhbGVzLWJ5LXByb2R1Y3QvcmVwb3J0LXNhbGVzLWJ5LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW0nO1xuXG4uc3Bpbm5lciB7XG4gIHRvcDogOTAlO1xuICBsZWZ0OiA4NSU7XG59XG5cbi5jb250cm9sLXBlcmlvZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIl19 */"

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

module.exports = "<br />\n<br />\n<br />\n<div class=\"margin-breadcrumb\">\n  <div class=\"header-body\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\"\n          ><i class=\"fa fa-dashboard\"></i> {{ \"Dashboard\" | translate }}</a\n        >\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-edit\"></i> {{ \"Reports List\" | translate }}\n      </li>\n    </ol>\n  </div>\n</div>\n<br /><br /><br />\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!-- THUMBNAILS PRODUCTS -->\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\n      <div class=\"row margin-list\">\n        <div class=\"col-md-4\" *ngFor=\"let report of listReport\">\n          <div class=\"mb-4\">\n            <a class=\"prodTeaser\" >\n              <div class=\"prodTeaser-overlay\" (click)=\"onSelection(report.id)\">\n                <i class=\"fa fa-download prodTeaser-more\"></i>\n              </div>\n              <div class=\"prodTeaser-inner\">\n                <!--<img\n                  class=\"card-img-top-teaser\"\n                  src=\"{{ supplier.image }}\"\n                />-->\n                <label class=\"label-report\">{{report.name | translate}}</label>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.box {\n  border: 1px solid #555657;\n  border-radius: 1.45em;\n  z-index: 1; }\n.prodTeaser {\n  background: #fff;\n  border: 1px solid #dcddde;\n  box-shadow: inset 0 0 0 0 transparent;\n  height: 15vw;\n  padding: 18%;\n  position: relative;\n  transition: all 0s;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n.prodTeaser-overlay {\n  background: rgba(0, 174, 239, 0.5);\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n  position: absolute;\n  overflow: hidden; }\n.prodTeaser-overlay:hover {\n    opacity: 1;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer; }\n.prodTeaser-inner:focus,\na:active,\na:hover {\n  outline: 0;\n  cursor: pointer; }\n.card-img-top-teaser {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: center; }\n.prodTeaser-more {\n  color: #199bd7;\n  background: #fff;\n  border-radius: 50%;\n  font-size: 1.5em;\n  line-height: 86px;\n  width: 90px;\n  height: 90px;\n  top: 50%;\n  left: 50%;\n  margin: -45px 0 0 -45px;\n  display: block;\n  position: absolute;\n  transition: all 0.35s ease-out;\n  opacity: 1; }\n.prodTeaser-more:hover {\n    position: absolute;\n    transform: translateY(-25%); }\n.prodTeaser-inner {\n  max-width: 100%;\n  transition: all 0.35s ease-out; }\n.prodTeaser-inner .label-report {\n    font-style: italic;\n    font-weight: 700;\n    font-size: 2.0rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZXRlY2kvU29mdGd1YXJvL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fdGFibGVzLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvaG9tZS9jbGV0ZWNpL1NvZnRndWFyby9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX21vZGFscy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2xldGVjaS9Tb2Z0Z3Vhcm8vc3BlY3RydW0tZmUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsY0pKZ0IsRUFBQTtBSU9sQjtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTtBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUV6QixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFHbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQ0FBa0M7RUFDbEMsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDViw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBVGxCO0lBWUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZSxFQUFBO0FBSW5COzs7RUFHRSxVQUFVO0VBQ1YsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7QUFHMUI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFFOUIsVUFBVSxFQUFBO0FBZlo7SUFrQkksa0JBQWtCO0lBQ2xCLDJCQUEyQixFQUFBO0FBSS9CO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QixFQUNEO0FBSC9CO0lBTUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy1saXN0L3JlcG9ydHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW1cIjtcblxuLm1hcmdpbi1icmVhZGNydW1iIHtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4udGl0bGUtY29sbGFwc2Uge1xuICBjb2xvcjogJGJnLXdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucGFkZGluZy1saXN0IHtcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XG59XG5cbi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NjU3O1xuICBib3JkZXItcmFkaXVzOiAxLjQ1ZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9kVGVhc2VyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGRkZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDE1dnc7XG4gIHBhZGRpbmc6IDE4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2RUZWFzZXItb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTc0LCAyMzksIDAuNSk7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLnByb2RUZWFzZXItaW5uZXI6Zm9jdXMsXG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWltZy10b3AtdGVhc2VyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xufVxuXG4ucHJvZFRlYXNlci1tb3JlIHtcbiAgY29sb3I6ICMxOTliZDc7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogLTQ1cHggMCAwIC00NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICBvcGFjaXR5OiAxO1xuXG4gICY6aG92ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XG4gIH1cbn1cblxuLnByb2RUZWFzZXItaW5uZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLW91dDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG5cbiAgLmxhYmVsLXJlcG9ydCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyLjByZW07XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\"></ngx-spinner>\n<app-header></app-header>\n<section class=\"main-container\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.scss":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"

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