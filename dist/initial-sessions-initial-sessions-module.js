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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.footer-form {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9pbml0aWFsLXNlc3Npb25zL2NoYW5nZS1wYXNzd29yZC10ZW1wb3JhbC9jaGFuZ2UtcGFzc3dvcmQtdGVtcG9yYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbml0aWFsLXNlc3Npb25zL2NoYW5nZS1wYXNzd29yZC10ZW1wb3JhbC9jaGFuZ2UtcGFzc3dvcmQtdGVtcG9yYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW0nO1xuXG4uZm9vdGVyLWZvcm0ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */"

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
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./change-password-temporal.component.scss */ "./src/app/initial-sessions/change-password-temporal/change-password-temporal.component.scss")]
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

module.exports = ".main-container-pws-temporal {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container-pws-temporal {\n    margin-left: 0px !important; } }\n\n.icon-sort {\n  margin-left: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvYXBwL2luaXRpYWwtc2Vzc2lvbnMvaW5pdGlhbC1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJO0lBQ0ksMkJBQTJCLEVBQUEsRUFDOUI7O0FBR0w7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luaXRpYWwtc2Vzc2lvbnMvaW5pdGlhbC1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lci1wd3MtdGVtcG9yYWwge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm1haW4tY29udGFpbmVyLXB3cy10ZW1wb3JhbCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5pY29uLXNvcnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn0iXX0= */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.container {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 0 1px rgba(0, 0, 0, 0.12) !important;\n  padding-right: 35px;\n  padding-left: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9pbml0aWFsLXNlc3Npb25zL3Byb3RvY29scy9wcm90b2NvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsaUZBQXlFO0VBQ3pFLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luaXRpYWwtc2Vzc2lvbnMvcHJvdG9jb2xzL3Byb3RvY29scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bSc7XG5cbi5jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMXB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG59XG4iXX0= */"

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
        this.spinner.hide();
        if (this.validRecordsProforma === this.protocolsProformaSave.length) {
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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.context .menu ul {\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  align-content: flex-end;\n  align-items: stretch; }\n.context .menu ul li {\n    padding: 0.6rem;\n    border-radius: 24px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n    cursor: pointer; }\n.context .menu ul li:not(:last-child) {\n      margin-right: 1rem; }\n.context .menu ul li.router-link-active a {\n      color: #1756a6; }\n.context .menu ul li a {\n      color: #868e96; }\n.context .menu ul li:focus {\n      outline: none; }\n.context .menu ul .li-selected {\n    background-color: #007bff; }\n.footer-form {\n  display: flex;\n  justify-content: flex-end; }\n.form-options {\n  display: flex;\n  justify-content: space-between; }\n.form-group span {\n  color: #868e96;\n  font-weight: bold; }\n.form-group label {\n  margin-bottom: 0; }\n.form-group > div:nth-child(1) {\n  display: flex; }\n.form-group .input-value {\n  display: flex; }\n.border-bottom {\n  border-bottom: solid 1px #c4c5c7; }\n.border-type {\n  border: solid 1px #ced4da;\n  background: white;\n  height: 34px; }\n.border-type::after {\n    position: absolute;\n    left: 95%;\n    top: 15px; }\n.w-46 {\n  width: 46%; }\n.trash {\n  width: 3%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  position: relative; }\n.trash > span {\n    position: absolute;\n    top: -7px; }\n.trash > span.top {\n      top: -18px; }\n.dropdown-list.dropdown-menu {\n  top: 31px !important;\n  left: 0px !important; }\n.dropdown-list.dropdown-menu::before {\n    content: none; }\n.dropdown-list.dropdown-menu::after {\n    content: none; }\n.dropdown-list.dropdown-menu span {\n    color: #30414a;\n    font-weight: bold; }\n.dropdown-list .custom-checkbox .custom-control-label::before {\n  border: solid 1px #cccccd;\n  border-radius: .3em; }\n.select-required {\n  background-color: red;\n  width: 5px;\n  height: 35px; }\n.custom-control-input:disabled ~ .custom-control-label {\n  cursor: not-allowed;\n  opacity: .5; }\n.border-protocol {\n  border: 25px solid #e9ecef !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9pbml0aWFsLXNlc3Npb25zL3Byb3RvY29scy9wcm90b2NvbHNwcm9mb3JtYS9wcm90b2NvbHNwcm9mb3JtYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQVNBO0VBQ0UsbURBQW1EO0VBQ25ELGlGQUF5RSxFQUFBO0FBRjNFO0lBS0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJDZGM7SURlZCxjQ2hCYTtJRGlCYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0FBWnJCO01BZU0sMkJBQTJCLEVBQUE7QUFLakM7RUFHSSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7QUFKM0I7RUFRSSxhQUFhLEVBQUE7QUFJakI7RUFFSSxlQUFlLEVBQUE7QUFJbkI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FFM0ZyQjtFQUNFLG1CRENlO0VDQWYsY0RDZ0IsRUFBQTtBQ0hsQjtJQUtJLGdCQUFnQixFQUFBO0FBTHBCO0lBU0ksbUJESG1CLEVBQUE7QUNPdkI7RUFDRSxjRFplO0VDYWYsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFMcEI7SUFRSSxnQkFBZ0IsRUFBQTtBQUtwQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLFdBQVcsRUFBQTtBQUVYO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxnQ0Q5Q2dCO0VDK0NoQixrQ0FBa0M7RUFDbEMsV0FBVyxFQUFBO0FBR1g7RUFDRSxtQkFBbUIsRUFBQTtBQ3ZEdkI7RUFDRSx5QkZDZTtFRUFmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7QUFOZDtJQVNJLGNGTmM7SUVPZCxVQUFVLEVBQUE7QUNWZDtFQUNFLDhCSGFnQjtFR2JrQixVQUFBLEVBQVc7QUFHL0M7RUFDRSw4QkhHYztFR0hrQixRQUFBLEVBQVM7QUFHM0M7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxnREFBaUQsRUFBQTtBQUduRDtFQUNFLGlCQUFpQjtFQUNqQixjSFZjO0VHV2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNIcENlO0VHcUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQ3RDbkI7RUFJTSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUE7QUFSMUI7SUFXUSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNGQUFnRjtJQUNoRixlQUFlLEVBQUE7QUFkdkI7TUFpQlUsa0JBQWtCLEVBQUE7QUFqQjVCO01Bc0JZLGNKdEJLLEVBQUE7QUlBakI7TUEyQlUsY0poQmMsRUFBQTtBSVh4QjtNQStCVSxhQUFhLEVBQUE7QUEvQnZCO0lBb0NRLHlCQUF5QixFQUFBO0FBUWpDO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBO0FBR2hDO0VBRUksY0o3Q29CO0VJOENwQixpQkFBaUIsRUFBQTtBQUhyQjtFQU9JLGdCQUFnQixFQUFBO0FBUHBCO0VBV0ksYUFBYSxFQUFBO0FBWGpCO0VBZUksYUFBYSxFQUFBO0FBSWpCO0VBQ0UsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtBQUhkO0lBTUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTLEVBQUE7QUFJYjtFQUNFLFVBQ0YsRUFBQTtBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTtBQVRiO01BWU0sVUFBVSxFQUFBO0FBS2hCO0VBRUksb0JBQW9CO0VBQ3BCLG9CQUFvQixFQUFBO0FBSHhCO0lBTU0sYUFBYSxFQUFBO0FBTm5CO0lBVU0sYUFBYSxFQUFBO0FBVm5CO0lBY00sY0FBYztJQUNkLGlCQUFpQixFQUFBO0FBZnZCO0VBb0JJLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUl2QjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWSxFQUFBO0FBR2Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBR2I7RUFDRSxxQ0FBcUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luaXRpYWwtc2Vzc2lvbnMvcHJvdG9jb2xzL3Byb3RvY29sc3Byb2Zvcm1hL3Byb3RvY29sc3Byb2Zvcm1hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGVmaW5lIHRyIHdpZHRoICovXG5AbWl4aW4gdHItc2l6ZXMoJGNlbGwtc2l6ZXMpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNlbGwtc2l6ZXMpIHtcbiAgICAudGFibGUtdHI6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICB3aWR0aDogbnRoKCRjZWxsLXNpemVzLCAkaSk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KSAhaW1wb3J0YW50OztcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjI0KSwgMCAwIDJweCByZ2JhKDAsMCwwLC4xMikgIWltcG9ydGFudDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXdoaXRlO1xuICAgIGNvbG9yOiAkYmctYmx1ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93LXk6IC13ZWJraXQtcGFnZWQteTtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcblxuICA+dGhlYWQgPnRyID50aCA+dGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICA+dGJvZHkgPnRyOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi5oZWFkZXItY29sdW1uIHtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4YThhOGE7XG59XG5cbi5wYWdpbmF0aW9uLWxpc3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNvdW50LWVsZW1lbnRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5mYS1zb3J0LXVwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydC1kb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXJlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZC10YWJsZXtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIkYmctc2lkZWJhcjogIzQ5NDk0OTtcbiRiZy1uYXZiYXI6ICMyMjI7XG4kYmctYmx1ZTogIzE3NTZhNjtcbiRiZy13aGl0ZTogI2ZmZmZmZjtcbiRiZy10ZXh0LXNlbGVjdDogI2Y5MDtcbiRiZy1pdGVtLXNlbGVjdDogIzNjM2MzYztcbiRiZy1ibHVlLWhvdmVyOiAjMTg1ZWI5O1xuJGJnLWltcHV0OiAjY2VkNGRhO1xuJGJnLXJlZDogI2NjMDAwMDtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4kYm94LXNoYWRvdyA6IDJweCByZ2JhKDAsMCwwLC4yNCk7XG4kYm94LXNoYWRvdzE6cmdiYSgwLDAsMCwuMTIpO1xuJGNvbG9yLXRleHQtbWVudTojODY4ZTk2O1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJnLXRpdGxlLWNhcmQ6ICNmN2Y3Zjc7XG4kYm9yZGVyLWdyZXk6ICNkZWUyZTY7XG5cbi8vU1RBVFVTRVNcbiRwZW5kaW5nLXN0YXR1czogI0I3MUMxQztcbiRhdXRob3JpemVkLXN0YXR1czogIzRBMTQ4QztcbiRwcm9jZXNzZWQtc3RhdHVzOiAjRkY2RjAwO1xuJHBhaWQtc3RhdHVzOiAjMUI1RTIwO1xuJHNlbnQtc3RhdHVzOiAjMDE1NzlCO1xuJGNhbmNlbC1zdGF0dXM6ICMzMzMzMzU7XG5cblxuJHNlY29uZGFyeS1pbmZvOiM4NjhlOTY7XG4kYmctcHJvZHVjdC1kZXRhaWw6I2ZmZmZmZjtcbiRpbmZvLXNlcGFyYXRvcjpyZ2JhKDAsIDAsIDAsIDAuMSk7XG4kaWNvbi1lZGl0LWRldGFpbDojMTc1NmE2O1xuJGVycm9yLXF1YW50aXR5OnJlZDtcbiRtZXNzYWdlLXF1YW50aXR5OiMwMDgwMDA7XG4iLCIuYnRuLW1haW4ge1xuICBiYWNrZ3JvdW5kOiAkYmctYmx1ZTtcbiAgY29sb3I6ICRiZy13aGl0ZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGJnLWJsdWUtaG92ZXI7XG4gIH1cbn1cblxuLmJ0bi1kcm9wZG93bi1tYWluIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICB0b3A6IDI4cHggIWltcG9ydGFudDtcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDU5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjQ0NDO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5kcm9wZG93bi1tZW51OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgJGJnLXdoaXRlO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiAnJztcbiAgfVxuXG4gIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCIubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWJsdWU7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgPmJ1dHRvbiB7XG4gICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLWdyZWVuOyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctcmVkOyAvKiByZWQgKi9cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxLjdyZW07XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA4cmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjApO1xufVxuXG4ubWVzc2FnZS1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBjb2xvcjogJGJnLXJlZDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnNwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtdGl0bGUge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3NwZWN0cnVtL3NwZWN0cnVtJztcblxuLmNvbnRleHQge1xuXG4gIC5tZW51IHtcbiAgICB1bCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOztcblxuICAgICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsNjQsNjcsMC4zMDIpLCAwIDFweCAzcHggMXB4IHJnYmEoNjAsNjQsNjcsMC4xNDkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW1lbnU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saS1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxufVxuXG4uZm9vdGVyLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZm9ybS1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHNwYW4ge1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tZW51O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuaW5wdXQtdmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M0YzVjNztcbn1cblxuLmJvcmRlci10eXBlIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NlZDRkYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMzRweDtcblxuICAmOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDk1JTtcbiAgICB0b3A6IDE1cHg7XG4gIH1cbn1cblxuLnctNDYge1xuICB3aWR0aDogNDYlXG59XG5cbi50cmFzaCB7XG4gIHdpZHRoOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTdweDtcblxuICAgICYudG9wIHtcbiAgICAgIHRvcDogLTE4cHg7XG4gICAgfVxuICB9XG59XG5cbi5kcm9wZG93bi1saXN0IHtcbiAgJi5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IDMxcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzMwNDE0YTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2Q7XG4gICAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgfVxufVxuXG4uc2VsZWN0LXJlcXVpcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4uYm9yZGVyLXByb3RvY29se1xuICBib3JkZXI6IDI1cHggc29saWQgI2U5ZWNlZiAhaW1wb3J0YW50O1xufVxuIl19 */"

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

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.text-overflow {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n.context .menu ul {\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  align-content: flex-end;\n  align-items: stretch; }\n.context .menu ul li {\n    padding: 0.6rem;\n    border-radius: 24px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n    cursor: pointer; }\n.context .menu ul li:not(:last-child) {\n      margin-right: 1rem; }\n.context .menu ul li.router-link-active a {\n      color: #1756a6; }\n.context .menu ul li a {\n      color: #868e96; }\n.context .menu ul li:focus {\n      outline: none; }\n.context .menu ul .li-selected {\n    background-color: #007bff; }\n.form-options {\n  display: flex;\n  justify-content: space-between; }\n.bottom-label {\n  margin-bottom: -10px !important; }\n.form-group span {\n  color: #868e96;\n  font-weight: bold; }\n.form-group label {\n  margin-bottom: 0; }\n.form-group > div:nth-child(1) {\n  display: flex; }\n.form-group .input-value {\n  display: flex; }\n.footer-form {\n  display: flex;\n  justify-content: flex-end; }\n.border-bottom {\n  border-bottom: solid 1px #c4c5c7; }\n.border-type {\n  border: solid 1px #ced4da;\n  background: white;\n  height: 34px; }\n.border-type::after {\n    position: absolute;\n    left: 95%;\n    top: 15px; }\n.w-46 {\n  width: 46%; }\n.w-96 {\n  width: 96%; }\n.trash {\n  width: 3%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  position: relative; }\n.trash > span {\n    position: absolute;\n    top: -7px; }\n.trash > span.top {\n      top: -18px; }\n.dropdown-list.dropdown-menu {\n  top: 31px !important;\n  left: 0px !important; }\n.dropdown-list.dropdown-menu::before {\n    content: none; }\n.dropdown-list.dropdown-menu::after {\n    content: none; }\n.dropdown-list.dropdown-menu span {\n    color: #30414a;\n    font-weight: bold; }\n.dropdown-list .custom-checkbox .custom-control-label::before {\n  border: solid 1px #cccccd;\n  border-radius: .3em; }\n.select-required {\n  background-color: red;\n  height: 35px;\n  width: 5px; }\n.custom-control-input:disabled ~ .custom-control-label {\n  cursor: not-allowed;\n  opacity: .5; }\n.border-protocol-shipping {\n  border: 25px solid #e9ecef !important; }\n.border-protocol-shipping div:last-child {\n    width: 100%; }\n.border-protocol-shipping .margin-title {\n    margin-bottom: 0.5em; }\n.btn-form {\n  padding: 10px; }\n.btn-form > button {\n    width: 100%; }\n.btn-remove {\n  padding: 10px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9pbml0aWFsLXNlc3Npb25zL3Byb3RvY29scy9wcm90b2NvbHNzaGlwcGluZy9wcm90b2NvbHNzaGlwcGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQVNBO0VBQ0UsbURBQW1EO0VBQ25ELGlGQUF5RSxFQUFBO0FBRjNFO0lBS0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJDZGM7SURlZCxjQ2hCYTtJRGlCYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0FBWnJCO01BZU0sMkJBQTJCLEVBQUE7QUFLakM7RUFHSSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7QUFKM0I7RUFRSSxhQUFhLEVBQUE7QUFJakI7RUFFSSxlQUFlLEVBQUE7QUFJbkI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FFM0ZyQjtFQUNFLG1CRENlO0VDQWYsY0RDZ0IsRUFBQTtBQ0hsQjtJQUtJLGdCQUFnQixFQUFBO0FBTHBCO0lBU0ksbUJESG1CLEVBQUE7QUNPdkI7RUFDRSxjRFplO0VDYWYsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFMcEI7SUFRSSxnQkFBZ0IsRUFBQTtBQUtwQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLFdBQVcsRUFBQTtBQUVYO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxnQ0Q5Q2dCO0VDK0NoQixrQ0FBa0M7RUFDbEMsV0FBVyxFQUFBO0FBR1g7RUFDRSxtQkFBbUIsRUFBQTtBQ3ZEdkI7RUFDRSx5QkZDZTtFRUFmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7QUFOZDtJQVNJLGNGTmM7SUVPZCxVQUFVLEVBQUE7QUNWZDtFQUNFLDhCSGFnQjtFR2JrQixVQUFBLEVBQVc7QUFHL0M7RUFDRSw4QkhHYztFR0hrQixRQUFBLEVBQVM7QUFHM0M7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxnREFBaUQsRUFBQTtBQUduRDtFQUNFLGlCQUFpQjtFQUNqQixjSFZjO0VHV2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNIcENlO0VHcUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQ3RDbkI7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3JCO0VBSU0sYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQixFQUFBO0FBUjFCO0lBWVEsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzRkFBc0Y7SUFDdEYsZUFBZSxFQUFBO0FBZnZCO01Ba0JVLGtCQUFrQixFQUFBO0FBbEI1QjtNQXVCWSxjSjdCSyxFQUFBO0FJTWpCO01BNEJVLGNKdkJjLEVBQUE7QUlMeEI7TUFnQ1UsYUFBYSxFQUFBO0FBaEN2QjtJQXFDUSx5QkFBeUIsRUFBQTtBQVFqQztFQUNFLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLCtCQUErQixFQUFBO0FBR2pDO0VBRUksY0puRG9CO0VJb0RwQixpQkFBaUIsRUFBQTtBQUhyQjtFQU9JLGdCQUFnQixFQUFBO0FBUHBCO0VBV0ksYUFBYSxFQUFBO0FBWGpCO0VBZUksYUFBYSxFQUFBO0FBSWpCO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtBQUhkO0lBTUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTLEVBQUE7QUFJYjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7QUFMcEI7SUFRSSxrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBVGI7TUFZTSxVQUFVLEVBQUE7QUFLaEI7RUFFSSxvQkFBb0I7RUFDcEIsb0JBQW9CLEVBQUE7QUFIeEI7SUFNTSxhQUFhLEVBQUE7QUFObkI7SUFVTSxhQUFhLEVBQUE7QUFWbkI7SUFjTSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7QUFmdkI7RUFvQkkseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBSXZCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixVQUFVLEVBQUE7QUFHWjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7QUFHYjtFQUNFLHFDQUFxQyxFQUFBO0FBRHZDO0lBSUksV0FBVyxFQUFBO0FBSmY7SUFRSSxvQkFBb0IsRUFBQTtBQU14QjtFQUNFLGFBQWEsRUFBQTtBQURmO0lBSUksV0FBVyxFQUFBO0FBSWY7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbml0aWFsLXNlc3Npb25zL3Byb3RvY29scy9wcm90b2NvbHNzaGlwcGluZy9wcm90b2NvbHNzaGlwcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bSc7XG5cbi50ZXh0LW92ZXJmbG93IHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250ZXh0IHtcblxuICAubWVudSB7XG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIDtcblxuICAgICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zMDIpLCAwIDFweCAzcHggMXB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNDkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW1lbnU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saS1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxufVxuXG4uZm9ybS1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9tLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBzcGFuIHtcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtbWVudTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgPmRpdjpudGgtY2hpbGQoMSkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuaW5wdXQtdmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLmZvb3Rlci1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M0YzVjNztcbn1cblxuLmJvcmRlci10eXBlIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NlZDRkYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMzRweDtcblxuICAmOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDk1JTtcbiAgICB0b3A6IDE1cHg7XG4gIH1cbn1cblxuLnctNDYge1xuICB3aWR0aDogNDYlO1xufVxuXG4udy05NiB7XG4gIHdpZHRoOiA5NiU7XG59XG5cbi50cmFzaCB7XG4gIHdpZHRoOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID5zcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtN3B4O1xuXG4gICAgJi50b3Age1xuICAgICAgdG9wOiAtMThweDtcbiAgICB9XG4gIH1cbn1cblxuLmRyb3Bkb3duLWxpc3Qge1xuICAmLmRyb3Bkb3duLW1lbnUge1xuICAgIHRvcDogMzFweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjMzA0MTRhO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjZDtcbiAgICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICB9XG59XG5cbi5zZWxlY3QtcmVxdWlyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDVweDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkfi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4uYm9yZGVyLXByb3RvY29sLXNoaXBwaW5nIHtcbiAgYm9yZGVyOiAyNXB4IHNvbGlkICNlOWVjZWYgIWltcG9ydGFudDtcblxuICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWFyZ2luLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuXG5cblxuLmJ0bi1mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcblxuICA+YnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYnRuLXJlbW92ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"

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
            _this.spinner.hide();
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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./protocolsshipping.component.scss */ "./src/app/initial-sessions/protocols/protocolsshipping/protocolsshipping.component.scss")]
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