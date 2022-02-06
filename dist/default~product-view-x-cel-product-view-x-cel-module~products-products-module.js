(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~product-view-x-cel-product-view-x-cel-module~products-products-module"],{

/***/ "./src/app/products/components/breadcrumb-product/breadcrumb-product.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/products/components/breadcrumb-product/breadcrumb-product.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\">\n  <div class=\"header-body\">\n    <h4 class=\"page-header\">\n      {{ 'Product Details' | translate }}\n    </h4>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-dashboard\"></i> {{ 'Dashboard' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a class=\"link\" href=\"Javascript:void(0)\" [routerLink]=\"['/products/' + product?.supplier.idSupplier + '/internal']\">\n          <i class=\"fa fa-edit\"></i> {{ 'Products List' | translate }}</a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <i class=\"fa fa-eye\"></i> {{ 'Product Details' | translate}}\n      </li>\n    </ol>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/components/breadcrumb-product/breadcrumb-product.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/products/components/breadcrumb-product/breadcrumb-product.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n.info-breadcrumbs .header-body {\n    width: 100%;\n    background: #ffffff;\n    box-shadow: -2px 5px 5px -5px rgba(0, 0, 0, 0.5); }\n.info-breadcrumbs .header-body .link {\n      color: #1756a6;\n      padding-left: 0px; }\n.info-breadcrumbs .header-body .breadcrumb {\n      background-color: transparent;\n      border-radius: 0px;\n      border-bottom: 0px;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n.info-breadcrumbs .header-body h4 {\n      padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2JyZWFkY3J1bWItcHJvZHVjdC9icmVhZGNydW1iLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUZqQjtJQUtJLFdBQVc7SUFDWCxtQkpMYztJSU1kLGdEQUFnRCxFQUFBO0FBUHBEO01BVU0sY0pWVztNSVdYLGlCQUFpQixFQUFBO0FBWHZCO01BZU0sNkJBQTZCO01BQzdCLGtCQUFrQjtNQUVsQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBO0FBcEJ6QjtNQXdCTSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvYnJlYWRjcnVtYi1wcm9kdWN0L2JyZWFkY3J1bWItcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bSc7XG5cbi5pbmZvLWJyZWFkY3J1bWJzIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuXG4gIC5oZWFkZXItYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xuICAgIGJveC1zaGFkb3c6IC0ycHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblxuICAgIC5saW5rIHtcbiAgICAgIGNvbG9yOiAkYmctYmx1ZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cblxuICAgIC5icmVhZGNydW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgLy9wYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/products/components/breadcrumb-product/breadcrumb-product.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/products/components/breadcrumb-product/breadcrumb-product.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BreadcrumbProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbProductComponent", function() { return BreadcrumbProductComponent; });
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

var BreadcrumbProductComponent = /** @class */ (function () {
    function BreadcrumbProductComponent() {
    }
    BreadcrumbProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbProductComponent.prototype, "product", void 0);
    BreadcrumbProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb-product',
            template: __webpack_require__(/*! ./breadcrumb-product.component.html */ "./src/app/products/components/breadcrumb-product/breadcrumb-product.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb-product.component.scss */ "./src/app/products/components/breadcrumb-product/breadcrumb-product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbProductComponent);
    return BreadcrumbProductComponent;
}());



/***/ }),

/***/ "./src/app/products/components/card-product/card-product.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/products/components/card-product/card-product.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-detail\">\n  <div class=\"card\">\n    <div class=\"row wrapper\">\n      <div class=\"preview col-md-12\">\n        <div class=\"main-info\">\n          <h3 class=\"product-title\">{{'Order Form For' | translate }}:\n            <br>\n            <i>{{ productName}}</i>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/components/card-product/card-product.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/products/components/card-product/card-product.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.title {\n  font-weight: 600; }\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n.padding-detail .card {\n    background: #ffffff;\n    padding: 2em;\n    line-height: 1.5em; }\n.padding-detail .card .main-info {\n      text-align: center; }\n.padding-detail .card .main-info .img-color {\n        border-radius: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2NhcmQtcHJvZHVjdC9jYXJkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSw0QkFBNEIsRUFBQTtBQUQ5QjtJQUlJLG1CSmtCc0I7SUlqQnRCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtBQU50QjtNQVNNLGtCQUFrQixFQUFBO0FBVHhCO1FBWVEsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2NhcmQtcHJvZHVjdC9jYXJkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW0nO1xuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGFkZGluZy1kZXRhaWwge1xuICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCA0MHB4O1xuXG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiRiZy1wcm9kdWN0LWRldGFpbDtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuXG4gICAgLm1haW4taW5mbyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5pbWctY29sb3Ige1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/components/card-product/card-product.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/card-product/card-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: CardProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProductComponent", function() { return CardProductComponent; });
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

var CardProductComponent = /** @class */ (function () {
    function CardProductComponent() {
    }
    CardProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardProductComponent.prototype, "productName", void 0);
    CardProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-product',
            template: __webpack_require__(/*! ./card-product.component.html */ "./src/app/products/components/card-product/card-product.component.html"),
            styles: [__webpack_require__(/*! ./card-product.component.scss */ "./src/app/products/components/card-product/card-product.component.scss")]
        })
    ], CardProductComponent);
    return CardProductComponent;
}());



/***/ }),

/***/ "./src/app/products/components/comment/comment.component.html":
/*!********************************************************************!*\
  !*** ./src/app/products/components/comment/comment.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"title\">{{ eye + ' Eye Comments' | translate }}</div>\n  <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product[attribute]\"\n    [disabled]=\"!enableField\" placeholder=\"{{ 'Enter ' + eye + ' Eye Observations' | translate }}\" maxlength=\"170\"></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/products/components/comment/comment.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/products/components/comment/comment.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/components/comment/comment.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/products/components/comment/comment.component.ts ***!
  \******************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
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

var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "attribute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentComponent.prototype, "enableField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "eye", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/products/components/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/products/components/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/products/components/components-products.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products/components/components-products.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComponentsProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsProductsModule", function() { return ComponentsProductsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_breadcrumb_product_breadcrumb_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/breadcrumb-product/breadcrumb-product.component */ "./src/app/products/components/breadcrumb-product/breadcrumb-product.component.ts");
/* harmony import */ var _components_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/card-product/card-product.component */ "./src/app/products/components/card-product/card-product.component.ts");
/* harmony import */ var _components_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/info-client/info-client.component */ "./src/app/products/components/info-client/info-client.component.ts");
/* harmony import */ var _components_order_type_order_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/order-type/order-type.component */ "./src/app/products/components/order-type/order-type.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/products/components/comment/comment.component.ts");
/* harmony import */ var _footer_buttons_footer_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer-buttons/footer-buttons.component */ "./src/app/products/components/footer-buttons/footer-buttons.component.ts");
/* harmony import */ var _info_params_info_params_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./info-params/info-params.component */ "./src/app/products/components/info-params/info-params.component.ts");
/* harmony import */ var _header_header_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header-component.component */ "./src/app/products/components/header/header-component.component.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/products/components/upload-file/upload-file.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ComponentsProductsModule = /** @class */ (function () {
    function ComponentsProductsModule() {
    }
    ComponentsProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]
            ],
            declarations: [
                _info_params_info_params_component__WEBPACK_IMPORTED_MODULE_13__["InfoParamsComponent"],
                _components_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_9__["InfoClientComponent"],
                _components_breadcrumb_product_breadcrumb_product_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbProductComponent"],
                _components_order_type_order_type_component__WEBPACK_IMPORTED_MODULE_10__["OrderTypeComponent"],
                _components_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_8__["CardProductComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_11__["CommentComponent"],
                _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_15__["UploadFileComponent"],
                _footer_buttons_footer_buttons_component__WEBPACK_IMPORTED_MODULE_12__["FooterButtonsComponent"],
                _header_header_component_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
            ],
            exports: [
                _info_params_info_params_component__WEBPACK_IMPORTED_MODULE_13__["InfoParamsComponent"],
                _components_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_9__["InfoClientComponent"],
                _components_breadcrumb_product_breadcrumb_product_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbProductComponent"],
                _components_order_type_order_type_component__WEBPACK_IMPORTED_MODULE_10__["OrderTypeComponent"],
                _components_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_8__["CardProductComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_11__["CommentComponent"],
                _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_15__["UploadFileComponent"],
                _footer_buttons_footer_buttons_component__WEBPACK_IMPORTED_MODULE_12__["FooterButtonsComponent"],
                _header_header_component_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
            ]
        })
    ], ComponentsProductsModule);
    return ComponentsProductsModule;
}());



/***/ }),

/***/ "./src/app/products/components/confirm-purchase/confirmation-component.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/products/components/confirm-purchase/confirmation-component.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ \"Confirm purchase\" | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"list-basket body\">\n    <div class=\"row\">\n      <!-- Image -->\n      <div class=\"col-lg-12 main-info\">\n        <div>\n          <span class=\"title\">{{ selectedProduct.name }}</span>\n        </div>\n        <!-- Image -->\n        <div class=\"label-title\">\n          <img class=\"img-product\" src=\"{{ selectedProduct.mainImg }}\" />\n        </div>\n        <!-- Patient -->\n        <div class=\"col-lg-12 title label-title patient-info\">\n          <div class=\"col-sm-12\">\n            <dl class=\"align-item\">\n              <dt>{{ \"Patient\" | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ selectedProduct.patient }}</dt>\n              </dl>\n            </dl>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <dl>\n            <dt>{{ selectedProduct.totalPrice | currency: \"USD $\" }}</dt>\n            <p class=\"eye-info\" *ngIf=\"additionalDMV || additionalHydrapeg || additionalNotch\">\n              (\n                <span>{{ 'Includes' | translate }}</span>&nbsp;\n                <span *ngIf=\"additionalDMV\">{{'Inserts (DMV)' | translate}}:{{ additionalDMV | currency : \" USD $\" }}</span>\n                <span  *ngIf=\"additionalHydrapeg\">&nbsp;|&nbsp;</span>\n                <span *ngIf=\"additionalHydrapeg\">{{'Hydrapeg' | translate}}:{{ additionalHydrapeg | currency : \" USD $\" }}</span>\n                <span  *ngIf=\"additionalNotch\">&nbsp;|&nbsp;</span>\n                <span *ngIf=\"additionalNotch\">{{'Notch (mm)' | translate}}:{{ additionalNotch | currency : \" USD $\" }}</span>\n              )\n            </p>\n          </dl>\n        </div>\n      </div>\n\n      <!-- PARAMETERS -->\n      <div class=\"col-lg-12\" *ngFor=\"let list of selectedProduct.params\">\n        <div class=\"row padding-params\" *ngIf=\"list.header.length > 0\">\n          <div class=\"col-lg-12 title eye-info\">\n            <span>{{ list.eye + ' Eye' | translate }}</span>&nbsp;&nbsp;\n          </div>\n\n          <div class=\"col-lg-4\" *ngFor=\"let header of list.header\">\n            <dl class=\"align-item\">\n              <dt>{{ header.name | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ header.selected.toString() | translate }}</dt>\n              </dl>\n            </dl>\n          </div>\n\n          <div class=\"col-sm-12\">\n            <div class=\"parameters\">{{ \"Parameters\" | translate }}:</div>\n          </div>\n          <div class=\"col-sm-3\" *ngFor=\"let param of list.params\">\n            <dl class=\"align-item\">\n              <dt>{{ param.name | translate }}</dt>\n              <hr class=\"separators\" />\n              <dl>\n                <dt class=\"items\">{{ param.selected.toString() | translate }}</dt>\n              </dl>\n            </dl>\n          </div>\n          <br />\n          <!-- Comments -->\n          <div class=\"col-lg-12\">\n            <div class=\"row padding-params\">\n              <div class=\"col-sm-12\">\n                <dl>\n                  <dt>{{ \"Comments\" | translate }}</dt>\n                  <dl class=\"comment\" *ngIf=\"!list.observations\">\n                      <span translate>{{'No comments' | translate}}</span>\n                    </dl>\n                  <dl>\n                    <span style=\"overflow-x: hidden;\">\n                      {{ list.observations }}</span\n                    >\n                  </dl>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- FIN PARAMETERS -->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n      {{ \"Cancel\" | translate }}&nbsp; <i class=\"fa fa-times\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-main\"\n      (click)=\"save()\"\n      [hidden]=\"buttonPressed === 'buyNow'\"\n    >\n      {{ \"Save\" | translate }}&nbsp; <i class=\"fa fa-save\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-main\"\n      (click)=\"save()\"\n      [hidden]=\"buttonPressed === 'addToCart'\"\n    >\n      {{ \"Buy\" | translate }}&nbsp; <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description }}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/components/confirm-purchase/confirmation-component.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/products/components/confirm-purchase/confirmation-component.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.body {\n  overflow-y: auto; }\n.list-basket {\n  max-height: 630px;\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.list-basket .main-info {\n    text-align: center; }\n.list-basket .test-set {\n    width: 100%;\n    margin-left: 0; }\n.list-basket .img-product {\n    width: 40%;\n    border-radius: 12px;\n    margin-top: 1em; }\n.list-basket .display-row {\n    display: flex;\n    justify-content: space-between; }\n.list-basket .display-price {\n    justify-content: center; }\n.list-basket .padding-params {\n    padding: 2em 2em 1em; }\n.list-basket .padding-params .parameters {\n      color: #868e96;\n      margin-left: 1.8rem;\n      margin-bottom: 0.1rem;\n      font-weight: 600;\n      padding-top: 1rem; }\n.list-basket .padding-params .justify-steps {\n      justify-content: center; }\n.list-basket .padding-params .justify-steps > div:nth-child(2) {\n        padding-left: 0; }\n.list-basket .padding-params .name-parameters {\n      padding-left: 1rem;\n      color: #868e96;\n      padding-top: 0.5rem; }\n.list-basket .padding-params .comment {\n      color: #868e96;\n      padding: 0 1.5em; }\n.list-basket .params {\n    padding-top: 1em; }\n.list-basket .params .separator {\n      margin-bottom: 1em; }\n.list-basket .title {\n    font-weight: 600; }\n.list-basket .steps {\n    text-align: left;\n    margin: 3rem 0 0 3rem;\n    display: flex; }\n.list-basket .steps > dt:nth-child(1) {\n      margin-right: 15px; }\n.list-basket .label-title {\n    padding-top: 1.5em; }\n.list-basket .patient-info {\n    display: flex;\n    padding-bottom: 1.5em; }\n.list-basket .eye-info {\n    color: #868e96;\n    padding-bottom: 2em;\n    text-align: center; }\n.list-basket .align-item {\n    text-align: center; }\n.list-basket .items {\n    color: #868e96; }\n.list-basket .comments {\n    padding: 0 2.5em; }\n.list-basket .separators {\n    border-top: 1.5px solid rgba(0, 0, 0, 0.1);\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem; }\n.list-basket .param {\n    color: #f8ac59; }\n.list-basket .separator-set {\n    display: flex;\n    margin-top: 20px;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2NvbmZpcm0tcHVyY2hhc2UvY29uZmlybWF0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQVNBO0VBQ0UsbURBQW1EO0VBQ25ELGlGQUF5RSxFQUFBO0FBRjNFO0lBS0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJDZGM7SURlZCxjQ2hCYTtJRGlCYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0FBWnJCO01BZU0sMkJBQTJCLEVBQUE7QUFLakM7RUFHSSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7QUFKM0I7RUFRSSxhQUFhLEVBQUE7QUFJakI7RUFFSSxlQUFlLEVBQUE7QUFJbkI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FFM0ZyQjtFQUNFLG1CRENlO0VDQWYsY0RDZ0IsRUFBQTtBQ0hsQjtJQUtJLGdCQUFnQixFQUFBO0FBTHBCO0lBU0ksbUJESG1CLEVBQUE7QUNPdkI7RUFDRSxjRFplO0VDYWYsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFMcEI7SUFRSSxnQkFBZ0IsRUFBQTtBQUtwQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLFdBQVcsRUFBQTtBQUVYO0VBQ0Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxnQ0Q5Q2dCO0VDK0NoQixrQ0FBa0M7RUFDbEMsV0FBVyxFQUFBO0FBR1g7RUFDRSxtQkFBbUIsRUFBQTtBQ3ZEdkI7RUFDRSx5QkZDZTtFRUFmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7QUFOZDtJQVNJLGNGTmM7SUVPZCxVQUFVLEVBQUE7QUNWZDtFQUNFLDhCSGFnQjtFR2JrQixVQUFBLEVBQVc7QUFHL0M7RUFDRSw4QkhHYztFR0hrQixRQUFBLEVBQVM7QUFHM0M7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxnREFBaUQsRUFBQTtBQUduRDtFQUNFLGlCQUFpQjtFQUNqQixjSFZjO0VHV2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNIcENlO0VHcUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQ3JDbkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBSnBCO0lBT0ksa0JBQWtCLEVBQUE7QUFQdEI7SUFXSSxXQUFXO0lBQ1gsY0FBYyxFQUFBO0FBWmxCO0lBZ0JJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0FBbEJuQjtJQXNCSSxhQUFhO0lBQ2IsOEJBQThCLEVBQUE7QUF2QmxDO0lBMkJJLHVCQUF1QixFQUFBO0FBM0IzQjtJQStCSSxvQkFBbUIsRUFBQTtBQS9CdkI7TUFrQ00sY0pkaUI7TUllakIsbUJBQW1CO01BQ25CLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7QUF0Q3ZCO01BeUNNLHVCQUF1QixFQUFBO0FBekM3QjtRQTRDUSxlQUFlLEVBQUE7QUE1Q3ZCO01BaURNLGtCQUFrQjtNQUNsQixjSjlCaUI7TUkrQmpCLG1CQUFtQixFQUFBO0FBbkR6QjtNQXVETSxjSm5DaUI7TUlvQ2pCLGdCQUFnQixFQUFBO0FBeER0QjtJQTZESSxnQkFBZ0IsRUFBQTtBQTdEcEI7TUFnRU0sa0JBQWtCLEVBQUE7QUFoRXhCO0lBcUVJLGdCQUFnQixFQUFBO0FBckVwQjtJQXlFSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWEsRUFBQTtBQTNFakI7TUE4RU0sa0JBQWtCLEVBQUE7QUE5RXhCO0lBbUZJLGtCQUFrQixFQUFBO0FBbkZ0QjtJQXVGSSxhQUFhO0lBQ2IscUJBQXFCLEVBQUE7QUF4RnpCO0lBNEZJLGNKeEVtQjtJSXlFbkIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0FBOUZ0QjtJQWtHSSxrQkFBa0IsRUFBQTtBQWxHdEI7SUFzR0ssY0psRmtCLEVBQUE7QUlwQnZCO0lBMEdJLGdCQUFnQixFQUFBO0FBMUdwQjtJQThHSSwwQ0p4RjhCO0lJeUY5QixrQkFBa0I7SUFDbEIscUJBQXFCLEVBQUE7QUFoSHpCO0lBb0hJLGNBQWMsRUFBQTtBQXBIbEI7SUF3SEksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2NvbmZpcm0tcHVyY2hhc2UvY29uZmlybWF0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIlxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bVwiO1xuXG4uYm9keXtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmxpc3QtYmFza2V0IHtcbiAgbWF4LWhlaWdodDogNjMwcHg7XG4gIHBhZGRpbmc6IDJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gIC5tYWluLWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXN0LXNldCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuaW1nLXByb2R1Y3Qge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cblxuICAuZGlzcGxheS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmRpc3BsYXktcHJpY2Uge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnBhZGRpbmctcGFyYW1zIHtcbiAgICBwYWRkaW5nOjJlbSAyZW0gMWVtO1xuXG4gICAgLnBhcmFtZXRlcnN7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1pbmZvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEuOHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLmp1c3RpZnktc3RlcHN7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lLXBhcmFtZXRlcnN7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1pbmZvO1xuICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAuY29tbWVudHtcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWluZm87XG4gICAgICBwYWRkaW5nOiAwIDEuNWVtO1xuICAgIH1cbiAgfVxuXG4gIC5wYXJhbXMge1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG5cbiAgICAuc2VwYXJhdG9yIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuc3RlcHMge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAzcmVtIDAgMCAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICA+IGR0Om50aC1jaGlsZCgxKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLmxhYmVsLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMS41ZW07XG4gIH1cblxuICAucGF0aWVudC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgfVxuXG4gIC5leWUtaW5mbyB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktaW5mbztcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hbGlnbi1pdGVte1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pdGVtc3tcbiAgICAgY29sb3I6ICRzZWNvbmRhcnktaW5mbztcbiAgIH1cblxuICAgLmNvbW1lbnRze1xuICAgIHBhZGRpbmc6IDAgMi41ZW07XG4gIH1cblxuICAuc2VwYXJhdG9ycyB7XG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgJGluZm8tc2VwYXJhdG9yO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cblxuICAucGFyYW17XG4gICAgY29sb3I6ICNmOGFjNTk7XG4gIH1cblxuICAuc2VwYXJhdG9yLXNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/products/components/confirm-purchase/confirmation-component.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/products/components/confirm-purchase/confirmation-component.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PurchaseConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseConfirmationComponent", function() { return PurchaseConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _modals_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modals/notification-balance/notification-balance.component */ "./src/app/products/modals/notification-balance/notification-balance.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_enum_status_user_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/enum/status-user.enum */ "./src/app/shared/enum/status-user.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var PurchaseConfirmationComponent = /** @class */ (function () {
    function PurchaseConfirmationComponent(modalReference, alertify, notification, translate, basketService, orderService, fileProductRequestedService, router, userStorageService, spinner, userService, modalService) {
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
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    PurchaseConfirmationComponent.prototype.ngOnInit = function () {
        this.getDatos();
        this.getBalance();
    };
    PurchaseConfirmationComponent.prototype.checkList = function (parameterList) {
        return parameterList.params.lenght > 0;
    };
    PurchaseConfirmationComponent.prototype.close = function () {
        if (!this.save_success && !this.balance_modal) {
            this.listUrlFiles = this.buildUrlFiles();
            this.deleteAllFile();
        }
        this.modalReference.dismiss();
        this.modalReference.close();
    };
    PurchaseConfirmationComponent.prototype.getDatos = function () {
        var patient;
        var priceAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        var listBasketAux = [];
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listBasket, function (productRequested) {
            priceAcum = priceAcum + (productRequested.price * productRequested.quantity);
            patient = productRequested.patient;
            if (!!productRequested.observations) {
                productRequested.observations = productRequested.observations;
            }
            else {
                productRequested.observations = '';
            }
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_16__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
            });
            productRequested.detail = JSON.parse(productRequested.detail);
            listBasketAux.push(productRequested);
        });
        this.listBasket = listBasketAux;
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.price = priceAcum;
    };
    PurchaseConfirmationComponent.prototype.getBalance = function () {
        var _this = this;
        this.userService.findById$(this.datos.idUser).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_14__["CodeHttp"].ok) {
                _this.client = res.data;
                _this.company = res.data.company;
                _this.balance = _this.company.balance;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    PurchaseConfirmationComponent.prototype.getParams = function (detail) {
        if (detail.typeLens === 'Final Design') {
            return lodash__WEBPACK_IMPORTED_MODULE_16__["filter"](detail.parameters, function (param) {
                // Excluding params design by laboratory
                return param.name !== 'Over-refraction';
            });
        }
        return detail.parameters;
    };
    PurchaseConfirmationComponent.prototype.buildUrlFiles = function () {
        var listUrlFiles = new Array;
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileLeftEye, function (file) {
            listUrlFiles.push(file.url);
        });
        lodash__WEBPACK_IMPORTED_MODULE_16__["each"](this.listFileRightEye, function (file) {
            listUrlFiles.push(file.url);
        });
        return listUrlFiles;
    };
    PurchaseConfirmationComponent.prototype.deleteAllFile = function () {
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
    PurchaseConfirmationComponent.prototype.redirectListProducts = function () {
        this.router.navigate(['/products/']);
    };
    PurchaseConfirmationComponent.prototype.redirectListBasket = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/list-basket-client']);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.router.navigate(['/list-basket']);
        }
    };
    PurchaseConfirmationComponent.prototype.redirectListOrder = function () {
        if (this.user.role.idRole === 3) {
            this.router.navigate(['/order-list-client'], { queryParams: { status: 0 } });
        }
        else if (this.user.role.idRole === 1) {
            var status_1 = this.typeOrder === 'new' ? 1 : 0;
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: status_1 } });
        }
        else if (this.user.role.idRole === 2) {
            this.router.navigate(['/order-list-client-byseller'], { queryParams: { status: 0 } });
        }
    };
    PurchaseConfirmationComponent.prototype.validateAvailableBalance = function () {
        var available = true;
        if (this.company.paymentMethod === 1 && ((this.price) > this.balance)) {
            available = false;
        }
        this.available = available;
    };
    PurchaseConfirmationComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_modals_notification_balance_notification_balance_component__WEBPACK_IMPORTED_MODULE_15__["NotificationBalanceComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.buyNowModal = this.buyNow;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            _this.save_success = true;
            _this.balance_modal = false;
            _this.close();
        });
    };
    PurchaseConfirmationComponent.prototype.save = function () {
        var _this = this;
        if (this.buttonPressed === 'addToCart') {
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
            if (this.client.status === _shared_enum_status_user_enum__WEBPACK_IMPORTED_MODULE_17__["StatusUser"].InDefault) {
                this.translate.get('Customer in Default', { value: 'Customer in Default' }).subscribe(function (title) {
                    _this.translate.get('Your account was deactivated. Please contact with the administrator', { value: 'Your account was deactivated. Please contact with the administrator' })
                        .subscribe(function (msg) {
                        _this.alertify.warning(msg);
                        _this.close();
                    });
                });
            }
            else {
                this.buyNow.idUser = this.datos.idUser;
                this.buyNow.productRequestedList = this.lista;
                this.buyNow.idRole = this.role;
                this.buyNow.listFileRightEye = this.listFileRightEye;
                this.buyNow.listFileLeftEye = this.listFileLeftEye;
                // this.validateAvailableBalance();
                // if (this.available) {
                this.spinner.show();
                this.buyNow.typeOrder = this.typeOrder;
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
                /*} else {
                  this.balance_modal = true;
                  this.openModal(); // No tiene disponible el balance de credito
                  this.close();
                }*/
            }
        }
    };
    PurchaseConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-component',
            template: __webpack_require__(/*! ./confirmation-component.component.html */ "./src/app/products/components/confirm-purchase/confirmation-component.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-component.component.scss */ "./src/app/products/components/confirm-purchase/confirmation-component.component.scss")]
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
    ], PurchaseConfirmationComponent);
    return PurchaseConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/products/components/footer-buttons/footer-buttons.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/products/components/footer-buttons/footer-buttons.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 buy-btns\">\n    <!-- TODO: disabled-->\n    <button *ngFor=\"let button of buttons\" [hidden]=\"button.hidden\" [disabled]=\"disableBuyButton\"\n            class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase margin-button\"\n            (click)=\"executeAction(button.fn)\">\n      <i class=\"{{button.icon}}\"></i> {{ button.name | translate }}\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/components/footer-buttons/footer-buttons.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/products/components/footer-buttons/footer-buttons.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.buy-btns {\n  text-align: right; }\n.margin-button {\n  margin-right: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2Zvb3Rlci1idXR0b25zL2Zvb3Rlci1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2Zvb3Rlci1idXR0b25zL2Zvb3Rlci1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGVmaW5lIHRyIHdpZHRoICovXG5AbWl4aW4gdHItc2l6ZXMoJGNlbGwtc2l6ZXMpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNlbGwtc2l6ZXMpIHtcbiAgICAudGFibGUtdHI6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICB3aWR0aDogbnRoKCRjZWxsLXNpemVzLCAkaSk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KSAhaW1wb3J0YW50OztcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjI0KSwgMCAwIDJweCByZ2JhKDAsMCwwLC4xMikgIWltcG9ydGFudDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXdoaXRlO1xuICAgIGNvbG9yOiAkYmctYmx1ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93LXk6IC13ZWJraXQtcGFnZWQteTtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcblxuICA+dGhlYWQgPnRyID50aCA+dGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICA+dGJvZHkgPnRyOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi5oZWFkZXItY29sdW1uIHtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4YThhOGE7XG59XG5cbi5wYWdpbmF0aW9uLWxpc3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNvdW50LWVsZW1lbnRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5mYS1zb3J0LXVwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydC1kb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXJlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZC10YWJsZXtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIkYmctc2lkZWJhcjogIzQ5NDk0OTtcbiRiZy1uYXZiYXI6ICMyMjI7XG4kYmctYmx1ZTogIzE3NTZhNjtcbiRiZy13aGl0ZTogI2ZmZmZmZjtcbiRiZy10ZXh0LXNlbGVjdDogI2Y5MDtcbiRiZy1pdGVtLXNlbGVjdDogIzNjM2MzYztcbiRiZy1ibHVlLWhvdmVyOiAjMTg1ZWI5O1xuJGJnLWltcHV0OiAjY2VkNGRhO1xuJGJnLXJlZDogI2NjMDAwMDtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4kYm94LXNoYWRvdyA6IDJweCByZ2JhKDAsMCwwLC4yNCk7XG4kYm94LXNoYWRvdzE6cmdiYSgwLDAsMCwuMTIpO1xuJGNvbG9yLXRleHQtbWVudTojODY4ZTk2O1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJnLXRpdGxlLWNhcmQ6ICNmN2Y3Zjc7XG4kYm9yZGVyLWdyZXk6ICNkZWUyZTY7XG5cbi8vU1RBVFVTRVNcbiRwZW5kaW5nLXN0YXR1czogI0I3MUMxQztcbiRhdXRob3JpemVkLXN0YXR1czogIzRBMTQ4QztcbiRwcm9jZXNzZWQtc3RhdHVzOiAjRkY2RjAwO1xuJHBhaWQtc3RhdHVzOiAjMUI1RTIwO1xuJHNlbnQtc3RhdHVzOiAjMDE1NzlCO1xuJGNhbmNlbC1zdGF0dXM6ICMzMzMzMzU7XG5cblxuJHNlY29uZGFyeS1pbmZvOiM4NjhlOTY7XG4kYmctcHJvZHVjdC1kZXRhaWw6I2ZmZmZmZjtcbiRpbmZvLXNlcGFyYXRvcjpyZ2JhKDAsIDAsIDAsIDAuMSk7XG4kaWNvbi1lZGl0LWRldGFpbDojMTc1NmE2O1xuJGVycm9yLXF1YW50aXR5OnJlZDtcbiRtZXNzYWdlLXF1YW50aXR5OiMwMDgwMDA7XG4iLCIuYnRuLW1haW4ge1xuICBiYWNrZ3JvdW5kOiAkYmctYmx1ZTtcbiAgY29sb3I6ICRiZy13aGl0ZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGJnLWJsdWUtaG92ZXI7XG4gIH1cbn1cblxuLmJ0bi1kcm9wZG93bi1tYWluIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICB0b3A6IDI4cHggIWltcG9ydGFudDtcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDU5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjQ0NDO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5kcm9wZG93bi1tZW51OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgJGJnLXdoaXRlO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiAnJztcbiAgfVxuXG4gIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCIubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWJsdWU7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgPmJ1dHRvbiB7XG4gICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLWdyZWVuOyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctcmVkOyAvKiByZWQgKi9cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxLjdyZW07XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA4cmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjApO1xufVxuXG4ubWVzc2FnZS1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBjb2xvcjogJGJnLXJlZDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnNwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtdGl0bGUge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3NwZWN0cnVtL3NwZWN0cnVtJztcblxuLmJ1eS1idG5zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXJnaW4tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/products/components/footer-buttons/footer-buttons.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/products/components/footer-buttons/footer-buttons.component.ts ***!
  \********************************************************************************/
/*! exports provided: FooterButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterButtonsComponent", function() { return FooterButtonsComponent; });
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

var FooterButtonsComponent = /** @class */ (function () {
    function FooterButtonsComponent() {
        this.buttonAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FooterButtonsComponent.prototype.ngOnInit = function () {
    };
    FooterButtonsComponent.prototype.executeAction = function (fn) {
        this.buttonAction.emit(fn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FooterButtonsComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FooterButtonsComponent.prototype, "disableBuyButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("buttonAction"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FooterButtonsComponent.prototype, "buttonAction", void 0);
    FooterButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-buttons',
            template: __webpack_require__(/*! ./footer-buttons.component.html */ "./src/app/products/components/footer-buttons/footer-buttons.component.html"),
            styles: [__webpack_require__(/*! ./footer-buttons.component.scss */ "./src/app/products/components/footer-buttons/footer-buttons.component.scss")]
        })
    ], FooterButtonsComponent);
    return FooterButtonsComponent;
}());



/***/ }),

/***/ "./src/app/products/components/header/header-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/header/header-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" *ngIf=\"header\" >\n  <div class=\"col-lg-3 margin-col padding-col pb-3\" *ngFor=\"let parameter of header\">\n    <div class=\"row\">\n      <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n    </div>\n    <div class=\"row\" [ngSwitch]=\"parameter.type\">\n      <div *ngSwitchCase=\"'radio'\" class=\"radio-b\">\n        <div *ngFor=\"let value of parameter.values; let i = index\">\n          <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" id=\"radio-{{parameter.name}}-{{i}}\" name=\"radio-{{parameter.name}}\"\n                    [value]=\"value\" [required]=\"!parameter.noRequired\"\n                    (click)=\"setHeaderValue(parameter,value)\"\n                    class=\" custom-control-input form-control\" [checked]=\"parameter.selected === value\">\n            <label class=\"custom-control-label\" for=\"radio-{{parameter.name}}-{{i}}\">{{ value | translate }}</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"warnings\" *ngIf=\"dmv?.price\">\n    <span  translate>{{'Warning: Includes' | translate}}</span>&nbsp;\n    <span >{{'Inserts' | translate}}:{{ dmv.price | currency : \" USD $\" }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/components/header/header-component.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/header/header-component.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.header {\n  margin-top: 17px; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.custom-header {\n  display: flex; }\n.radio-b {\n  display: flex; }\n.radio-b > div:nth-child(1) {\n    margin-right: 20px; }\n.warnings {\n  color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7QUFEbkI7SUFJSSxrQkFBa0IsRUFBQTtBQUt0QjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsYUFBYSxFQUFBO0FBRGY7SUFJSSxrQkFBa0IsRUFBQTtBQUl0QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW0nO1xuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cblxuLmhlYWRlci1wYXJhbXMge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcblxuICAuY3VzdG9tLWNvbnRyb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG59XG5cbi5jdXN0b20taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJhZGlvLWJ7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLndhcm5pbmdzIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/products/components/header/header-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/header/header-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.dmv = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.header, { name: "DMV" });
    };
    HeaderComponent.prototype.setHeaderValue = function (parameter, value) {
        parameter.selected = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "header", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-component',
            template: __webpack_require__(/*! ./header-component.component.html */ "./src/app/products/components/header/header-component.component.html"),
            styles: [__webpack_require__(/*! ./header-component.component.scss */ "./src/app/products/components/header/header-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/products/components/info-client/info-client.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/info-client/info-client.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- row (pacient, client, shipping address) -->\n<div class=\"row product-info\">\n  <!-- patient -->\n  <div class=\"col-lg-4\">\n    <dt class=\"title\">{{ 'Patient Full Name' | translate }}</dt>\n    <div class=\"row info-content\">\n      <input class=\"form-control\" type=\"text\" maxlength=\"50\" placeholder=\"{{ 'Enter name patient' | translate }}\"\n        [(ngModel)]=\"product.patient\" required>\n    </div>\n  </div>\n\n  <!-- client -->\n  <div class=\"col-lg-4\">\n    <dt class=\"title\">{{ 'Account Name' | translate }}</dt>\n    <div class=\"row info-content\" [hidden]=\"user.role.idRole !== 3\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Enter customer patient' | translate }}\"\n        [(ngModel)]=\"product.client\" disabled>\n    </div>\n    <div class=\"row info-content\" [hidden]=\"user.role.idRole === 3\">\n      <ng-select [items]=\"listCustomers\" class=\"w-100\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"this.product.client\"\n        [virtualScroll]=\"true\" bindLabel=\"fullName\" bindValue=\"idUser\" placeholder=\"{{ 'Select value' | translate }}\"\n        required>\n      </ng-select>\n    </div>\n  </div>\n  <!--shipping address-->\n  <div class=\"col-lg-4\">\n    <span class=\"title\">{{ 'Shipping Address' | translate }}</span>\n    <div class=\"row info-content\">\n      <input class=\"form-control readonly-input\" type=\"text\" [(ngModel)]=\"product.shippingAddress\"\n        placeholder=\"{{ 'This field is filled when the client is selected.' | translate }}\" readonly>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/components/info-client/info-client.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/info-client/info-client.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.product-info .info-content {\n    margin-left: 0;\n    margin-bottom: 0px; }\n.title {\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2luZm8tY2xpZW50L2luZm8tY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLGdCQUFnQixFQUFBO0FBRGxCO0lBS00sV0FBVztJQUNYLGVBQWUsRUFBQTtBQU5yQjtJQVdJLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtBQUl0QjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9pbmZvLWNsaWVudC9pbmZvLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmluZSB0ciB3aWR0aCAqL1xuQG1peGluIHRyLXNpemVzKCRjZWxsLXNpemVzKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRjZWxsLXNpemVzKSB7XG4gICAgLnRhYmxlLXRyOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgd2lkdGg6IG50aCgkY2VsbC1zaXplcywgJGkpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDs7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yNCksIDAgMCAycHggcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcbiAgICBjb2xvcjogJGJnLWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiAtd2Via2l0LXBhZ2VkLXk7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG5cbiAgPnRoZWFkID50ciA+dGggPnRkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgPnRib2R5ID50cjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbHVtbiB7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuXG4ucGFnaW5hdGlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb3VudC1lbGVtZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZmEtc29ydC11cCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXNvcnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtdGFibGV7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiJGJnLXNpZGViYXI6ICM0OTQ5NDk7XG4kYmctbmF2YmFyOiAjMjIyO1xuJGJnLWJsdWU6ICMxNzU2YTY7XG4kYmctd2hpdGU6ICNmZmZmZmY7XG4kYmctdGV4dC1zZWxlY3Q6ICNmOTA7XG4kYmctaXRlbS1zZWxlY3Q6ICMzYzNjM2M7XG4kYmctYmx1ZS1ob3ZlcjogIzE4NWViOTtcbiRiZy1pbXB1dDogI2NlZDRkYTtcbiRiZy1yZWQ6ICNjYzAwMDA7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuJGJveC1zaGFkb3cgOiAycHggcmdiYSgwLDAsMCwuMjQpO1xuJGJveC1zaGFkb3cxOnJnYmEoMCwwLDAsLjEyKTtcbiRjb2xvci10ZXh0LW1lbnU6Izg2OGU5NjtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRiZy10aXRsZS1jYXJkOiAjZjdmN2Y3O1xuJGJvcmRlci1ncmV5OiAjZGVlMmU2O1xuXG4vL1NUQVRVU0VTXG4kcGVuZGluZy1zdGF0dXM6ICNCNzFDMUM7XG4kYXV0aG9yaXplZC1zdGF0dXM6ICM0QTE0OEM7XG4kcHJvY2Vzc2VkLXN0YXR1czogI0ZGNkYwMDtcbiRwYWlkLXN0YXR1czogIzFCNUUyMDtcbiRzZW50LXN0YXR1czogIzAxNTc5QjtcbiRjYW5jZWwtc3RhdHVzOiAjMzMzMzM1O1xuXG5cbiRzZWNvbmRhcnktaW5mbzojODY4ZTk2O1xuJGJnLXByb2R1Y3QtZGV0YWlsOiNmZmZmZmY7XG4kaW5mby1zZXBhcmF0b3I6cmdiYSgwLCAwLCAwLCAwLjEpO1xuJGljb24tZWRpdC1kZXRhaWw6IzE3NTZhNjtcbiRlcnJvci1xdWFudGl0eTpyZWQ7XG4kbWVzc2FnZS1xdWFudGl0eTojMDA4MDAwO1xuIiwiLmJ0bi1tYWluIHtcbiAgYmFja2dyb3VuZDogJGJnLWJsdWU7XG4gIGNvbG9yOiAkYmctd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRiZy1ibHVlLWhvdmVyO1xuICB9XG59XG5cbi5idG4tZHJvcGRvd24tbWFpbiB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiA1OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI0NDQztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJztcbiAgfVxuICAuZHJvcGRvd24tbWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICRiZy13aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIH1cblxuICAuYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIiwiLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1ibHVlO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gID5idXR0b24ge1xuICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1ncmVlbjsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLXJlZDsgLyogcmVkICovXG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMS43cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wOHJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjIwKTtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgY29sb3I6ICRiZy1yZWQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9zcGVjdHJ1bS9zcGVjdHJ1bSc7XG5cbi5wcm9kdWN0LWluZm8ge1xuICBwYWRkaW5nLXRvcDogMmVtO1xuXG4gIC5pdGVtLXByb3BlcnRpZXMge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbiAgXG4gIC5pbmZvLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/products/components/info-client/info-client.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/info-client/info-client.component.ts ***!
  \**************************************************************************/
/*! exports provided: InfoClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClientComponent", function() { return InfoClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InfoClientComponent = /** @class */ (function () {
    function InfoClientComponent(userStorageService, shippingAddressService, userService, notification, translate) {
        this.userStorageService = userStorageService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.notification = notification;
        this.translate = translate;
        this.getClient = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InfoClientComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
        this.getCustomer();
    };
    InfoClientComponent.prototype.getCustomer = function () {
        var _this = this;
        var currentUser = this.user.userResponse;
        if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomers = res.data;
                    _this.listCustomers.map(function (i) {
                        var accSpct = !!i.accSpct ? i.accSpct + ' - ' : '';
                        var certificationCode = !!i.certificationCode ? i.certificationCode + ' | ' : '';
                        i.fullName = accSpct + i.name + ' | ' + certificationCode + i.country.name;
                        return i;
                    });
                }
            });
        }
        else if (this.user.role.idRole === 3) {
            this.client = currentUser.idUser;
            var accSpct = !!currentUser.accSpct ? currentUser.accSpct + ' - ' : '';
            this.product.client = accSpct + currentUser.name + ' | ' + currentUser.country.name;
            this.findShippingAddress(this.client);
            this.setClient(currentUser);
        }
    };
    InfoClientComponent.prototype.onSelectedClient = function (clientSelect) {
        if (clientSelect !== undefined) {
            this.client = clientSelect;
            this.findShippingAddress(this.product.client);
            this.setClient(this.client);
            //this.membership = clientSelect.membership.idMembership;
            //this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            //this.client = '';
            this.product.shippingAddress = '';
            this.membership = 0;
            this.product.priceSale = '';
        }
    };
    InfoClientComponent.prototype.setClient = function (client) {
        this.getClient.emit(client);
    };
    InfoClientComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                var shippingAddress = res.data.name ? res.data.name : '';
                shippingAddress += res.data.city ? (shippingAddress ? (', ' + res.data.city) : res.data.city) : shippingAddress;
                shippingAddress += res.data.state ? (shippingAddress ? (' - ' + res.data.state) : res.data.state) : shippingAddress;
                shippingAddress += res.data.country.name ? (shippingAddress ? (' ' + res.data.country.name) : res.data.country.name) : shippingAddress;
                _this.product.shippingAddress = shippingAddress;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoClientComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("getClient"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfoClientComponent.prototype, "getClient", void 0);
    InfoClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-client',
            template: __webpack_require__(/*! ./info-client.component.html */ "./src/app/products/components/info-client/info-client.component.html"),
            styles: [__webpack_require__(/*! ./info-client.component.scss */ "./src/app/products/components/info-client/info-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__["UserStorageService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], InfoClientComponent);
    return InfoClientComponent;
}());



/***/ }),

/***/ "./src/app/products/components/info-params/info-params.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/info-params/info-params.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header-params\">\n  <div class=\"col-lg-12 custom-control custom-checkbox\">\n    <!--Eye-->\n    <div *ngIf=\"typeParams === 'header'\">\n      <input id=\"{{eye}}\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"selectEye(); cleanEye()\" class=\"custom-control-input\">\n      <label class=\"custom-control-label\" for=\"{{eye}}\">{{ getLabelEye() }}</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-2 margin-col padding-col pb-3\" *ngFor=\"let parameter of getParams()\">\n        <div class=\"row\">\n          <label class=\"form-check-label\">{{ parameter.name | translate }}</label>&nbsp;&nbsp;\n        </div>\n        <div class=\"row\" [ngSwitch]=\"parameter.type\">\n          <div *ngSwitchCase=\"'selected'\" class=\"col-sm-12 pl-0\">\n            <ng-select [items]=\"parameter.values\" (change)=\"changeParamsAndPriceValue(parameter)\" [(ngModel)]=\"parameter.selected\"\n            [required]=\"!parameter.noRequired || changeRequired(parameter.name)\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\"\n            [clearable]=\"parameter.noRequired\" [disabled]=\"!enableParams || parameter.values.length === 1\">\n                <ng-template ng-label-tmp let-item=\"item\">\n                  <div>\n                    <span>{{ item | translate }}</span>\n                  </div>\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                  <div>\n                    <h6 [ngOptionHighlight]=\"search\">{{ item | translate }}</h6>\n                  </div>\n                </ng-template>\n              </ng-select>\n          </div>\n\n          <div *ngSwitchCase=\"'input-text'\" class=\"col-sm-12 pl-0\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"parameter.selected\" [disabled]=\"!enableParams\" maxlength=\"25\"\n              [required]=\"!parameter.noRequired\" (change)=\"changeParamsAndPriceValue(parameter)\" id=\"text-{{eye}}-{{parameter.name}}\"/>\n          </div>\n          <!-- this input number is for only positive numbers -->\n          <div *ngIf=\"parameter.type === 'input-number' && checkParamName(parameter)\" class=\"col-sm-12 pl-0\">\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"parameter.selected\" [disabled]=\"!enableParams || qtyDisabled(parameter)\"\n              [required]=\"!parameter.noRequired\" max=\"100\" oninput=\"validity.valid||(value='');\" [min]=\"setMinimum(parameter)\"\n              (change)=\"changeParamsAndPriceValue(parameter)\" id=\"number-{{eye}}-{{parameter.name}}\" step=\"0.01\"/>\n          </div>\n          <!-- this input number is for negative numbers -->\n          <div *ngIf=\"parameter.type === 'input-number' && !checkParamName(parameter) && parameter.name !== 'Axis'\" class=\"col-sm-12 pl-0\">\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"parameter.selected\" [disabled]=\"!enableParams || qtyDisabled(parameter)\"\n              [required]=\"!parameter.noRequired\" max=\"100\" [min]=\"setMinimum(parameter)\"\n              (change)=\"changeParamsAndPriceValue(parameter)\" id=\"number-{{eye}}-{{parameter.name}}\" step=\"0.01\"/>\n          </div>\n\n          <div *ngSwitchCase=\"'radio'\" class=\"radio-b\">\n            <div *ngFor=\"let value of parameter.values; let i = index\">\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"radio-{{eye}}-{{parameter.name}}-{{i}}\" name=\"radio-{{eye}}-{{parameter.name}}\"\n                       [value]=\"value\" [required]=\"!parameter.noRequired\" [disabled]=\"!enableParams\"\n                       (click)=\"setRadioButtonValue(parameter,eye,value)\"\n                       class=\" custom-control-input form-control\" [checked]=\"parameter.selected === value\">\n                <label class=\"custom-control-label\" for=\"radio-{{eye}}-{{parameter.name}}-{{i}}\">{{ value | translate }}</label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/components/info-params/info-params.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/info-params/info-params.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.header-params {\n  padding-left: 1em; }\n.header-params .custom-control {\n    margin-bottom: 1em; }\n.custom-header {\n  display: flex; }\n.radio-b {\n  display: flex; }\n.radio-b > div:nth-child(1) {\n    margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2luZm8tcGFyYW1zL2luZm8tcGFyYW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLGlCQUFpQixFQUFBO0FBRG5CO0lBSUksa0JBQWtCLEVBQUE7QUFLdEI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLGFBQWEsRUFBQTtBQURmO0lBSUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL2luZm8tcGFyYW1zL2luZm8tcGFyYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGVmaW5lIHRyIHdpZHRoICovXG5AbWl4aW4gdHItc2l6ZXMoJGNlbGwtc2l6ZXMpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNlbGwtc2l6ZXMpIHtcbiAgICAudGFibGUtdHI6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICB3aWR0aDogbnRoKCRjZWxsLXNpemVzLCAkaSk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KSAhaW1wb3J0YW50OztcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjI0KSwgMCAwIDJweCByZ2JhKDAsMCwwLC4xMikgIWltcG9ydGFudDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXdoaXRlO1xuICAgIGNvbG9yOiAkYmctYmx1ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93LXk6IC13ZWJraXQtcGFnZWQteTtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcblxuICA+dGhlYWQgPnRyID50aCA+dGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICA+dGJvZHkgPnRyOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi5oZWFkZXItY29sdW1uIHtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4YThhOGE7XG59XG5cbi5wYWdpbmF0aW9uLWxpc3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNvdW50LWVsZW1lbnRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5mYS1zb3J0LXVwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydC1kb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc29ydCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXJlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZC10YWJsZXtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIkYmctc2lkZWJhcjogIzQ5NDk0OTtcbiRiZy1uYXZiYXI6ICMyMjI7XG4kYmctYmx1ZTogIzE3NTZhNjtcbiRiZy13aGl0ZTogI2ZmZmZmZjtcbiRiZy10ZXh0LXNlbGVjdDogI2Y5MDtcbiRiZy1pdGVtLXNlbGVjdDogIzNjM2MzYztcbiRiZy1ibHVlLWhvdmVyOiAjMTg1ZWI5O1xuJGJnLWltcHV0OiAjY2VkNGRhO1xuJGJnLXJlZDogI2NjMDAwMDtcbiRiZy1ncmVlbjogIzQyQTk0ODtcbiRib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4kYm94LXNoYWRvdyA6IDJweCByZ2JhKDAsMCwwLC4yNCk7XG4kYm94LXNoYWRvdzE6cmdiYSgwLDAsMCwuMTIpO1xuJGNvbG9yLXRleHQtbWVudTojODY4ZTk2O1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJnLXRpdGxlLWNhcmQ6ICNmN2Y3Zjc7XG4kYm9yZGVyLWdyZXk6ICNkZWUyZTY7XG5cbi8vU1RBVFVTRVNcbiRwZW5kaW5nLXN0YXR1czogI0I3MUMxQztcbiRhdXRob3JpemVkLXN0YXR1czogIzRBMTQ4QztcbiRwcm9jZXNzZWQtc3RhdHVzOiAjRkY2RjAwO1xuJHBhaWQtc3RhdHVzOiAjMUI1RTIwO1xuJHNlbnQtc3RhdHVzOiAjMDE1NzlCO1xuJGNhbmNlbC1zdGF0dXM6ICMzMzMzMzU7XG5cblxuJHNlY29uZGFyeS1pbmZvOiM4NjhlOTY7XG4kYmctcHJvZHVjdC1kZXRhaWw6I2ZmZmZmZjtcbiRpbmZvLXNlcGFyYXRvcjpyZ2JhKDAsIDAsIDAsIDAuMSk7XG4kaWNvbi1lZGl0LWRldGFpbDojMTc1NmE2O1xuJGVycm9yLXF1YW50aXR5OnJlZDtcbiRtZXNzYWdlLXF1YW50aXR5OiMwMDgwMDA7XG4iLCIuYnRuLW1haW4ge1xuICBiYWNrZ3JvdW5kOiAkYmctYmx1ZTtcbiAgY29sb3I6ICRiZy13aGl0ZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGJnLWJsdWUtaG92ZXI7XG4gIH1cbn1cblxuLmJ0bi1kcm9wZG93bi1tYWluIHtcbiAgY29sb3I6ICRiZy1ibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICB0b3A6IDI4cHggIWltcG9ydGFudDtcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDU5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjQ0NDO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5kcm9wZG93bi1tZW51OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgJGJnLXdoaXRlO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiAnJztcbiAgfVxuXG4gIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCIubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWJsdWU7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgPmJ1dHRvbiB7XG4gICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJnLWdyZWVuOyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctcmVkOyAvKiByZWQgKi9cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxLjdyZW07XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjA4cmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjApO1xufVxuXG4ubWVzc2FnZS1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBjb2xvcjogJGJnLXJlZDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnNwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtdGl0bGUge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3NwZWN0cnVtL3NwZWN0cnVtJztcblxuLmhlYWRlci1wYXJhbXMge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcblxuICAuY3VzdG9tLWNvbnRyb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG59XG5cbi5jdXN0b20taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJhZGlvLWJ7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/components/info-params/info-params.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/info-params/info-params.component.ts ***!
  \**************************************************************************/
/*! exports provided: InfoParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoParamsComponent", function() { return InfoParamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoParamsComponent = /** @class */ (function () {
    function InfoParamsComponent(translate) {
        this.translate = translate;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeParamsAndPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.globalHeader = [];
        this.isSelectedDesign = false;
    }
    InfoParamsComponent.prototype.ngOnInit = function () {
        this.paramsByDefault = JSON.parse(JSON.stringify(this.parameters));
    };
    InfoParamsComponent.prototype.getLabelEye = function () {
        return this.eye === 'right' ? 'OD' : 'OS';
    };
    InfoParamsComponent.prototype.selectEye = function () {
        this.eyeSelected = !this.eyeSelected;
        this.select.emit({ name: this.eye, value: this.eyeSelected });
        //CLEAN PARAMS IF EYESELECTED
    };
    InfoParamsComponent.prototype.getParams = function () {
        switch (this.typeParams) {
            case 'header':
                return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.parameters, function (param) {
                    return param.header;
                });
            case 'body':
                return lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.parameters, function (param) {
                    return !param.header;
                });
        }
    };
    InfoParamsComponent.prototype.changeParamsAndPriceValue = function (parameter) {
        this.changeParamsAndPrice.emit({ param: parameter, eye: this.eye });
    };
    InfoParamsComponent.prototype.setRadioButtonValue = function (parameter, eye, value) {
        //let parameters = eye === 'right' ? this.product.parametersRight : this.product.parametersLeft;
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.parameters, function (param) {
            if (parameter.name === param.name) {
                param.selected = value;
            }
        });
    };
    InfoParamsComponent.prototype.cleanEye = function () {
        var self = this;
        if (!this.eyeSelected) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.parameters, function (param) {
                lodash__WEBPACK_IMPORTED_MODULE_2__["each"](self.paramsByDefault, function (p) {
                    if (param.name === p.name) {
                        param.selected = p.selected;
                    }
                });
            });
        }
    };
    InfoParamsComponent.prototype.qtyDisabled = function (param) {
        return this.quantityDisabled && param.name === 'Quantity';
    };
    InfoParamsComponent.prototype.setMinimum = function (param) {
        if (param.name === 'Quantity' || param.name === 'Axis') {
            return 1;
        }
        else if (['BC', 'Base Curve', 'Diameter', 'Addition'].some(function (x) { return param.name.includes(x); })) {
            return 0;
        }
        else {
            return null;
        }
    };
    InfoParamsComponent.prototype.checkParamName = function (parameter) {
        return (['BC', 'Base Curve', 'Diameter', 'Addition'].some(function (x) { return parameter.name.includes(x); }));
    };
    InfoParamsComponent.prototype.changeRequired = function (parameter) {
        if (parameter === 'Edge') {
            var design_1 = this.parameters.find(function (p) { return p.name === 'Design'; }).selected;
            if (!!design_1 && ['Apex', 'Pinnacle', 'Titan'].some(function (x) { return design_1.includes(x); })) {
                return true;
            }
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoParamsComponent.prototype, "eye", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoParamsComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoParamsComponent.prototype, "typeParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoParamsComponent.prototype, "enableParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoParamsComponent.prototype, "quantityDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfoParamsComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("changeParamsAndPrice"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfoParamsComponent.prototype, "changeParamsAndPrice", void 0);
    InfoParamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-params',
            template: __webpack_require__(/*! ./info-params.component.html */ "./src/app/products/components/info-params/info-params.component.html"),
            styles: [__webpack_require__(/*! ./info-params.component.scss */ "./src/app/products/components/info-params/info-params.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], InfoParamsComponent);
    return InfoParamsComponent;
}());



/***/ }),

/***/ "./src/app/products/components/order-type/order-type.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/order-type/order-type.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role.idRole !== 3\">\n  <span class=\"title\">{{ 'Order Type' | translate }}</span>\n  <div class=\"d-flex\">\n    <div class=\"custom-control custom-radio mr-3\">\n      <input type=\"radio\" id=\"order-new\" name=\"orderType\" value=\"new\" [(ngModel)]=\"product.typeOrder\"\n        class=\"custom-control-input\" [checked]=\"product.typeOrder === 'new'\">\n      <label class=\"custom-control-label\" for=\"order-new\">{{ 'New' | translate }}</label>\n    </div>\n    <div class=\"custom-control custom-radio mr-3\">\n      <input type=\"radio\" id=\"order-duplicate\" name=\"orderType\" value=\"duplicate\" [(ngModel)]=\"product.typeOrder\"\n        class=\"custom-control-input\" [checked]=\"product.typeOrder === 'duplicate'\">\n      <label class=\"custom-control-label\" for=\"order-duplicate\">{{ 'Duplicate' | translate }}</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" id=\"order-warranty\" name=\"orderType\" value=\"warranty\" [(ngModel)]=\"product.typeOrder\"\n        class=\"custom-control-input\" [checked]=\"product.typeOrder === 'warranty'\">\n      <label class=\"custom-control-label\" for=\"order-warranty\">{{ 'Warranty' | translate }}</label>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/components/order-type/order-type.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/order-type/order-type.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvb3JkZXItdHlwZS9vcmRlci10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL29yZGVyLXR5cGUvb3JkZXItdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/products/components/order-type/order-type.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/products/components/order-type/order-type.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeComponent", function() { return OrderTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderTypeComponent = /** @class */ (function () {
    function OrderTypeComponent(userStorageService) {
        this.userStorageService = userStorageService;
    }
    OrderTypeComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderTypeComponent.prototype, "product", void 0);
    OrderTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-type',
            template: __webpack_require__(/*! ./order-type.component.html */ "./src/app/products/components/order-type/order-type.component.html"),
            styles: [__webpack_require__(/*! ./order-type.component.scss */ "./src/app/products/components/order-type/order-type.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_user_storage_service__WEBPACK_IMPORTED_MODULE_1__["UserStorageService"]])
    ], OrderTypeComponent);
    return OrderTypeComponent;
}());



/***/ }),

/***/ "./src/app/products/components/upload-file/upload-file.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/upload-file/upload-file.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"\">\n    <dt class=\"title\">{{ eye + ' Documents | Attach Consultation Form' | translate }}</dt>\n    <div class=\"custom-file\">\n      <input #selectedFiles type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploaderFile\"\n        [disabled]=\"!enableField || uploaderFile.queue.length > 4\" multiple />\n      <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n      <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n      <div class=\"message-error-file\">\n        <span translate>{{'Max files size:' | translate}} 25MB</span>\n        <span> / </span>\n        <span translate>{{'Maximum files number:' | translate }} 5</span>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"\" style=\"margin-bottom: 40px\" *ngIf=\"uploaderFile.queue.length > 0\">\n    <div class=\"row justify-content-end\" *ngIf=\"uploaderFile.queue.length > 1\">\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploaderFile.clearQueue()\" [disabled]=\"!uploaderFile.queue.length\">\n        <span class=\"fa fa-trash-o\"></span> {{ 'Remove all' | translate }}\n      </button>\n    </div>\n    <br>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">{{ 'Name' | translate }}</th>\n          <th>{{ 'Size' | translate }}</th>\n          <th>{{ 'Actions' | translate }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploaderFile.queue\">\n          <td><strong>{{ item?.file?.name }}</strong></td>\n          <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n          <td nowrap>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFile(item)\">\n              <span class=\"fa fa-trash-o\"></span> {{ 'Remove' | translate }}\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/components/upload-file/upload-file.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/upload-file/upload-file.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-file-input {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgICAgIHBsYWNlaG9sZGVyOiAoXG4gICAgICAgIGVuOiBcIkNob29zZSBmaWxlLi4uXCIsXG4gICAgICAgIGVzOiBcIlNlbGVjY2lvbmFyIGFyY2hpdm8uLi5cIlxuICAgICAgKSxcbiAgICAgIGJ1dHRvbi1sYWJlbDogKFxuICAgICAgICBlbjogXCJCcm93c2VcIixcbiAgICAgICAgZXM6IFwiTmF2ZWdhclwiXG4gICAgICApXG4gICAgKTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/products/components/upload-file/upload-file.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/upload-file/upload-file.component.ts ***!
  \**************************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'fileProductRequested/uploader';
var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(userStorageService, notification, translate) {
        var _this = this;
        this.userStorageService = userStorageService;
        this.notification = notification;
        this.translate = translate;
        this.queueLimit = 5;
        this.maxFileSize = 25 * 1024 * 1024; // 25 MB
        this.uploadResult = null;
        this.uploaderFile = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: URL,
            itemAlias: 'files',
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            removeAfterUpload: false,
            authToken: this.userStorageService.getToke(),
            autoUpload: false
        });
        this.uploaderFile.onAfterAddingFile = function (item) {
            var maxSize = _this.maxFilesSize();
            if (maxSize > _this.maxFileSize) {
                _this.removeFile(item);
                _this.translate.get('Exceeds the maximum size allowed', { value: 'Exceeds the maximum size allowed' }).subscribe(function (res) {
                    _this.notification.error('', res);
                });
            }
        };
        this.uploaderFile.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = {
                'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers
            };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploaderFile.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = {
                'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers
            };
            console.log('error uploader file', response);
        };
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.removeFile = function (item) {
        this.uploaderFile.removeFromQueue(item);
        this.clearSelectedFile();
    };
    UploadFileComponent.prototype.clearSelectedFile = function () {
        this.selectedFiles.nativeElement.value = '';
    };
    UploadFileComponent.prototype.maxFilesSize = function () {
        var maxFileSize = 0;
        if (this.uploaderFile.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_6__["each"](this.uploaderFile.queue, function (item) {
                maxFileSize = maxFileSize + item.file.size;
            });
        }
        return maxFileSize;
    };
    UploadFileComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_7__["FileProductRequested"]();
            var fileResponse = JSON.parse(this.uploadResult.response).data;
            fileProductRequest.url = fileResponse.url;
            fileProductRequest.name = fileResponse.name;
            fileProductRequest.type = this.uploadResult.item.file.type;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFiles.push(fileProductRequest);
        }
    };
    UploadFileComponent.prototype.saveFiles = function () {
        if (this.uploaderFile.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_6__["each"](this.uploaderFile.queue, function (item) {
                item.upload();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadFileComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UploadFileComponent.prototype, "enableField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadFileComponent.prototype, "listFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadFileComponent.prototype, "eye", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedFiles'),
        __metadata("design:type", Object)
    ], UploadFileComponent.prototype, "selectedFiles", void 0);
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/products/components/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/products/components/upload-file/upload-file.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/notification-balance/notification-balance.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/products/modals/notification-balance/notification-balance.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Notification' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"card-body table-responsive row\">\n    <div class=\"confirm\">\n      <span>{{ message | translate }}</span>\n    </div>\n    <div class=\"confirm\" [hidden]=\"!visibleAdmin\">\n      <span>{{ 'Are you sure you want to place the order?' | translate }}</span>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Close' | translate }}&nbsp;\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Accept' | translate }}&nbsp;\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/notification-balance/notification-balance.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/products/modals/notification-balance/notification-balance.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.confirm {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9tb2RhbHMvbm90aWZpY2F0aW9uLWJhbGFuY2Uvbm90aWZpY2F0aW9uLWJhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFTQTtFQUNFLG1EQUFtRDtFQUNuRCxpRkFBeUUsRUFBQTtBQUYzRTtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQ2RjO0lEZWQsY0NoQmE7SURpQmIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBQVpyQjtNQWVNLDJCQUEyQixFQUFBO0FBS2pDO0VBR0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBSjNCO0VBUUksYUFBYSxFQUFBO0FBSWpCO0VBRUksZUFBZSxFQUFBO0FBSW5CO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBRTNGckI7RUFDRSxtQkRDZTtFQ0FmLGNEQ2dCLEVBQUE7QUNIbEI7SUFLSSxnQkFBZ0IsRUFBQTtBQUxwQjtJQVNJLG1CREhtQixFQUFBO0FDT3ZCO0VBQ0UsY0RaZTtFQ2FmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksZ0JBQWdCLEVBQUE7QUFLcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxXQUFXLEVBQUE7QUFFWDtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0NEOUNnQjtFQytDaEIsa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7QUN2RHZCO0VBQ0UseUJGQ2U7RUVBZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTmQ7SUFTSSxjRk5jO0lFT2QsVUFBVSxFQUFBO0FDVmQ7RUFDRSw4QkhhZ0I7RUdia0IsVUFBQSxFQUFXO0FBRy9DO0VBQ0UsOEJIR2M7RUdIa0IsUUFBQSxFQUFTO0FBRzNDO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0RBQWlELEVBQUE7QUFHbkQ7RUFDRSxpQkFBaUI7RUFDakIsY0hWYztFR1dkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjSHBDZTtFR3FDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUN0Q25CO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9tb2RhbHMvbm90aWZpY2F0aW9uLWJhbGFuY2Uvbm90aWZpY2F0aW9uLWJhbGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3NwZWN0cnVtL3NwZWN0cnVtXCI7XG5cbi5jb25maXJte1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

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

/***/ "./src/app/products/product-view-x-cel/product-view-x-cel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-view-x-cel/product-view-x-cel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-breadcrumb-product [product]=\"product\"></app-breadcrumb-product>\n<app-card-product *ngIf=\"product && validation()\" [productName]=\"product.name\">\n  <app-order-type [product]=\"product\"></app-order-type>\n\n  <!-- row (sheet) -->\n  <div class=\"row product-info\">\n    <div class=\"col-md-2\">\n      <dt>{{ 'Product Sheet' | translate }}</dt>\n      <dd>\n        <a href=\"{{ getProductSheet() }}\" target=\"_blank\">{{ 'Download' | translate }}</a>\n      </dd>\n    </div>\n  </div>\n\n  <app-info-client [product]=\"product\" (getClient)=\"getClient($event)\"></app-info-client>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5 class=\"padding-price\" *ngIf=\"priceSaleTotal()\">\n        <span>{{ priceSaleTotal() | currency : \"USD $\" }}</span>\n      </h5>\n    </div>\n  </div>\n\n  <app-header-component [header]=\"product.header\"></app-header-component>\n  <div class=\"row product-info\">\n    <div class=\"col-md-12 title\">\n      <label> {{ 'Please specify your product' | translate }}</label>\n    </div>\n  </div>\n\n  <!-- EYE RIGHT -->\n  <app-info-params [eye]=\"'right'\" [typeParams]=\"'header'\" [enableParams]=\"enable.right\" (select)=\"selectEye($event)\" (changeParamsAndPrice)=\"changeParamsAndPrice($event)\" [parameters]=\"product.parametersRight\" [quantityDisabled]=\"product.name.includes('Atlantis')\"></app-info-params>\n  <app-info-params [eye]=\"'right'\" [typeParams]=\"'body'\" [enableParams]=\"enable.right\" (select)=\"selectEye($event)\" (changeParamsAndPrice)=\"changeParamsAndPrice($event)\" [parameters]=\"product.parametersRight\"></app-info-params>\n\n  <div class=\"img-atlantis\" *ngIf=\"!!showImg.right && !!enable.right\">\n    <div class=\"col-md-12 title\">\n      <label> {{ 'Quadrant Specifications' | translate }}</label>\n    </div>\n    <div>\n      <div class=\"img1\">\n        <span>{{'Clock mark position of quadrant 2' | translate}}</span>\n        <div>\n          <img [src]=\"'assets/images/products/atlantis/img1.png'\">\n          <div>\n            <ng-select [items]=\"paramsAtlantisImages.right.clock.values\" [required]=\"true\" id=\"select-right-clock\"\n              [(ngModel)]=\"paramsAtlantisImages.right.clock.selected\" bindLabel=\"item\" bindValue=\"item\"\n              [clearable]=\"false\" placeholder=\"{{ ' ' | translate }}\">\n              {{item}}\n            </ng-select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"img2\">\n        <div>\n          <span>{{'(-) FLATTEN' | translate}}</span>\n          <span> {{'(+) STEEPEN' | translate}}</span>\n          <span> {{'1 STEP = 25µ' | translate}}</span>\n        </div>\n        <div>\n          <div *ngFor=\"let parameter of getAtlantisParams('right')\">\n            <!--Quadrants-->\n            <div  *ngIf=\"parameter.name !== 'Clock Mark' && parameter.name !== 'Atlantis 2.0 C.S.A'\" class=\"quadrant {{parameter.name}}\">\n              <span>{{ (parameter.name.includes('LZ') ? 'LZ' : 'SZ') }}</span>\n              <ng-select [items]=\"parameter.values\" [required]=\"true\" id=\"select-right-{{parameter.name}}\"\n                [(ngModel)]=\"parameter.selected\" bindLabel=\"item\" bindValue=\"item\"\n                [clearable]=\"false\" placeholder=\"{{ (parameter.name.includes('LZ') ? 'LZ' : 'SZ') | translate }}\">\n                {{item}}\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <img [src]=\"'assets/images/products/atlantis/img2.png'\">\n      </div>\n    </div>\n  </div>\n\n  <!--prices additional right-->\n  <div class=\"row additional col-lg-12 warnings\" *ngIf=\"getAdditionalPrices(true).hydrapegRight\">\n    <span>{{ 'Includes' | translate }}:</span>&nbsp;&nbsp;\n    <span>{{'Hydrapeg' | translate}}:{{ getAdditionalPrices(true).hydrapegRight | currency : \" USD $\" }}</span>&nbsp;\n  </div>\n\n  <app-comment [product]=\"product\" [attribute]=\"'observationsRight'\" [enableField]=\"enable.right\" [eye]=\"'Right'\"></app-comment>\n\n  <br>\n  <app-upload-file #uploadFile [product]=\"product\" [enableField]=\"enable.right\" [listFiles]=\"listFileRightEye\" [eye]=\"'OD'\"></app-upload-file>\n\n\n  <!-- EYE LEFT -->\n  <br><br>\n  <app-info-params [eye]=\"'left'\" [typeParams]=\"'header'\" [enableParams]=\"enable.left\" (select)=\"selectEye($event)\" (changeParamsAndPrice)=\"changeParamsAndPrice($event)\" [parameters]=\"product.parametersLeft\" [quantityDisabled]=\"product.name.includes('Atlantis')\"></app-info-params>\n  <app-info-params [eye]=\"'left'\" [typeParams]=\"'body'\" [enableParams]=\"enable.left\" (select)=\"selectEye($event)\" (changeParamsAndPrice)=\"changeParamsAndPrice($event)\" [parameters]=\"product.parametersLeft\"></app-info-params>\n  <div class=\"img-atlantis\" *ngIf=\"!!showImg.left && !!enable.left\">\n    <div class=\"col-md-12 title\">\n      <label> {{ 'Quadrant Specifications' | translate }}</label>\n    </div>\n    <div>\n      <div class=\"img1\">\n        <span>{{'Clock mark position of quadrant 2'|translate}}</span>\n        <div>\n          <img [src]=\"'assets/images/products/atlantis/img1.png'\">\n          <div>\n            <ng-select [items]=\"paramsAtlantisImages.left.clock.values\" [required]=\"true\" id=\"select-left-clock\"\n            [(ngModel)]=\"paramsAtlantisImages.left.clock.selected\" bindLabel=\"item\" bindValue=\"item\"\n            [clearable]=\"false\" placeholder=\"{{ ' ' | translate }}\">\n            {{item}}\n          </ng-select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"img2\">\n        <div>\n          <span>{{'(-) FLATTEN' | translate}}</span>\n          <span>{{'(+) STEEPEN' | translate}}</span>\n          <span>{{'1 STEP = 25µ' | translate}}</span>\n        </div>\n        <div>\n          <div *ngFor=\"let parameter of getAtlantisParams('left')\">\n            <!--Quadrant 1-->\n            <div  *ngIf=\"parameter.name !== 'Clock Mark' && parameter.name !== 'Atlantis 2.0 C.S.A'\" class=\"quadrant {{parameter.name}}\">\n              <span>{{ (parameter.name.includes('LZ') ? 'LZ' : 'SZ') }}</span>\n              <ng-select [items]=\"parameter.values\" [required]=\"true\" id=\"select-left-{{parameter.name}}\"\n                [(ngModel)]=\"parameter.selected\" bindLabel=\"item\" bindValue=\"item\"\n                [clearable]=\"false\" placeholder=\"{{ (parameter.name.includes('LZ') ? 'LZ' : 'SZ') | translate }}\">\n                {{item}}\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <img [src]=\"'assets/images/products/atlantis/img2.png'\">\n      </div>\n    </div>\n  </div>\n\n  <!--prices additional left-->\n  <div class=\"row additional col-lg-12 warnings\" *ngIf=\"getAdditionalPrices(true).hydrapegLeft\">\n    <span>{{ 'Includes' | translate }}:</span>&nbsp;&nbsp;\n    <span>{{'Hydrapeg' | translate}}:{{ getAdditionalPrices(true).hydrapegLeft | currency : \" USD $\" }}</span>&nbsp;\n  </div>\n\n  <app-comment [product]=\"product\" [attribute]=\"'observationsLeft'\" [enableField]=\"enable.left\" [eye]=\"'Left'\"></app-comment>\n\n  <br>\n  <app-upload-file #uploadFile [product]=\"product\" [enableField]=\"enable.left\" [listFiles]=\"listFileLeftEye\" [eye]=\"'OS'\"></app-upload-file>\n\n\n  <app-footer-buttons (buttonAction)=\"buttonAction($event)\" [buttons]=\"buttons\"  [disableBuyButton]=\"checkDisabled()\"></app-footer-buttons>\n</app-card-product>\n"

/***/ }),

/***/ "./src/app/products/product-view-x-cel/product-view-x-cel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-view-x-cel/product-view-x-cel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th > td {\n  border-top: none;\n  text-overflow: ellipsis; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -22px;\n  padding-top: 25px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.product-info {\n  padding-top: 2em; }\n.product-info .item-properties img {\n    width: 30px;\n    cursor: pointer; }\n.title {\n  font-weight: 600; }\n.img-atlantis {\n  flex-direction: column;\n  display: flex; }\n.img-atlantis > div:nth-child(2) {\n    display: flex;\n    align-items: center;\n    justify-content: space-around; }\n.img-atlantis .img1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n.img-atlantis .img1 > span:nth-child(1) {\n      margin-bottom: 10px; }\n.img-atlantis .img1 > div:nth-child(2) {\n      display: flex; }\n.img-atlantis .img1 > div:nth-child(2) > div:nth-child(2) {\n        align-self: center; }\n.img-atlantis .img1 ng-select {\n      width: 85px;\n      margin: 0 10px; }\n.img-atlantis .img1 img {\n      width: 140px;\n      height: 150px; }\n.img-atlantis .img2 {\n    position: relative; }\n.img-atlantis .img2 > div:nth-child(1) {\n      position: absolute;\n      right: 25px;\n      display: flex;\n      flex-direction: column;\n      top: -10px; }\n.img-atlantis .img2 > div:nth-child(2) {\n      position: absolute;\n      height: 400px;\n      width: 535px;\n      z-index: 999; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant {\n        display: flex;\n        position: absolute;\n        width: 130px;\n        align-items: center; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant ng-select {\n          width: 85px;\n          margin: 0 10px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q1 {\n          right: 0;\n          margin-bottom: 5px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q1.LZ {\n            top: 155px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q1.SZ {\n            top: 195px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q2 {\n          left: 210px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q2.LZ {\n            bottom: 40px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q2.SZ {\n            bottom: 0px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q3 {\n          left: 0; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q3.LZ {\n            top: 155px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q3.SZ {\n            top: 195px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q4 {\n          left: 210px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q4.LZ {\n            top: -10px; }\n.img-atlantis .img2 > div:nth-child(2) .quadrant.Q4.SZ {\n            top: 30px; }\n.img-atlantis .img2 img {\n      width: 530px; }\n.warnings {\n  color: green;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWV6ZXIvU1BTL1NwZWN0cnVtL3NwZWN0cnVtLWZlL3NyYy9zdHlsZXMvc3BlY3RydW0vbW9kdWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19idXR0b25zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL3N0eWxlcy9zcGVjdHJ1bS9tb2R1bGVzL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy9lbGllemVyL1NQUy9TcGVjdHJ1bS9zcGVjdHJ1bS1mZS9zcmMvc3R5bGVzL3NwZWN0cnVtL21vZHVsZXMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvZWxpZXplci9TUFMvU3BlY3RydW0vc3BlY3RydW0tZmUvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LXZpZXcteC1jZWwvcHJvZHVjdC12aWV3LXgtY2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBU0E7RUFDRSxtREFBbUQ7RUFDbkQsaUZBQXlFLEVBQUE7QUFGM0U7SUFLSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkNkYztJRGVkLGNDaEJhO0lEaUJiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFlTSwyQkFBMkIsRUFBQTtBQUtqQztFQUdJLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUozQjtFQVFJLGFBQWEsRUFBQTtBQUlqQjtFQUVJLGVBQWUsRUFBQTtBQUluQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUUzRnJCO0VBQ0UsbUJEQ2U7RUNBZixjRENnQixFQUFBO0FDSGxCO0lBS0ksZ0JBQWdCLEVBQUE7QUFMcEI7SUFTSSxtQkRIbUIsRUFBQTtBQ092QjtFQUNFLGNEWmU7RUNhZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUxwQjtJQVFJLGdCQUFnQixFQUFBO0FBS3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsV0FBVyxFQUFBO0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGdDRDlDZ0I7RUMrQ2hCLGtDQUFrQztFQUNsQyxXQUFXLEVBQUE7QUFHWDtFQUNFLG1CQUFtQixFQUFBO0FDdkR2QjtFQUNFLHlCRkNlO0VFQWYsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQU5kO0lBU0ksY0ZOYztJRU9kLFVBQVUsRUFBQTtBQ1ZkO0VBQ0UsOEJIYWdCO0VHYmtCLFVBQUEsRUFBVztBQUcvQztFQUNFLDhCSEdjO0VHSGtCLFFBQUEsRUFBUztBQUczQztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdEQUFpRCxFQUFBO0FBR25EO0VBQ0UsaUJBQWlCO0VBQ2pCLGNIVmM7RUdXZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0hwQ2U7RUdxQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FDdENuQjtFQUNFLGdCQUFnQixFQUFBO0FBRGxCO0lBS00sV0FBVztJQUNYLGVBQWUsRUFBQTtBQUtyQjtFQUNFLGdCQUFnQixFQUFBO0FBSWxCO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTtBQUZmO0lBS0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkIsRUFBQTtBQVBqQztJQVlJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7QUFkdkI7TUFpQk0sbUJBQW1CLEVBQUE7QUFqQnpCO01BcUJNLGFBQWEsRUFBQTtBQXJCbkI7UUF3QlEsa0JBQWtCLEVBQUE7QUF4QjFCO01BNkJNLFdBQVc7TUFDWCxjQUFjLEVBQUE7QUE5QnBCO01Ba0NNLFlBQVk7TUFDWixhQUFhLEVBQUE7QUFuQ25CO0lBd0NJLGtCQUFrQixFQUFBO0FBeEN0QjtNQTJDTSxrQkFBa0I7TUFDcEIsV0FBVztNQUNYLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsVUFBVSxFQUFBO0FBL0NkO01Ba0RNLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVksRUFBQTtBQXJEbEI7UUF3RFEsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osbUJBQW1CLEVBQUE7QUEzRDNCO1VBOERVLFdBQVc7VUFDWCxjQUFjLEVBQUE7QUEvRHhCO1VBbUVVLFFBQVE7VUFDUixrQkFBa0IsRUFBQTtBQXBFNUI7WUF1RVksVUFBVSxFQUFBO0FBdkV0QjtZQTJFWSxVQUFVLEVBQUE7QUEzRXRCO1VBZ0ZVLFdBQVcsRUFBQTtBQWhGckI7WUFtRlksWUFBWSxFQUFBO0FBbkZ4QjtZQXVGWSxXQUFXLEVBQUE7QUF2RnZCO1VBNEZVLE9BQU8sRUFBQTtBQTVGakI7WUErRlksVUFBVSxFQUFBO0FBL0Z0QjtZQW1HWSxVQUFVLEVBQUE7QUFuR3RCO1VBd0dVLFdBQVcsRUFBQTtBQXhHckI7WUEyR1ksVUFBVSxFQUFBO0FBM0d0QjtZQThHWSxTQUFTLEVBQUE7QUE5R3JCO01BcUhNLFlBQVksRUFBQTtBQUtsQjtFQUNFLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy14LWNlbC9wcm9kdWN0LXZpZXcteC1jZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZWZpbmUgdHIgd2lkdGggKi9cbkBtaXhpbiB0ci1zaXplcygkY2VsbC1zaXplcykge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY2VsbC1zaXplcykge1xuICAgIC50YWJsZS10cjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHdpZHRoOiBudGgoJGNlbGwtc2l6ZXMsICRpKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpICFpbXBvcnRhbnQ7O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKSAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XG4gICAgY29sb3I6ICRiZy1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgb3ZlcmZsb3cteTogLXdlYmtpdC1wYWdlZC15O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUge1xuXG4gID50aGVhZCA+dHIgPnRoID50ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gID50Ym9keSA+dHI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1jb2x1bW4ge1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnBhZ2luYXRpb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY291bnQtZWxlbWVudHMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZhLXNvcnQtdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0LWRvd24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRkLXRhYmxle1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIiRiZy1zaWRlYmFyOiAjNDk0OTQ5O1xuJGJnLW5hdmJhcjogIzIyMjtcbiRiZy1ibHVlOiAjMTc1NmE2O1xuJGJnLXdoaXRlOiAjZmZmZmZmO1xuJGJnLXRleHQtc2VsZWN0OiAjZjkwO1xuJGJnLWl0ZW0tc2VsZWN0OiAjM2MzYzNjO1xuJGJnLWJsdWUtaG92ZXI6ICMxODVlYjk7XG4kYmctaW1wdXQ6ICNjZWQ0ZGE7XG4kYmctcmVkOiAjY2MwMDAwO1xuJGJnLWdyZWVuOiAjNDJBOTQ4O1xuJGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiRib3gtc2hhZG93IDogMnB4IHJnYmEoMCwwLDAsLjI0KTtcbiRib3gtc2hhZG93MTpyZ2JhKDAsMCwwLC4xMik7XG4kY29sb3ItdGV4dC1tZW51OiM4NjhlOTY7XG4kYmctZ3JlZW46ICM0MkE5NDg7XG4kYmctdGl0bGUtY2FyZDogI2Y3ZjdmNztcbiRib3JkZXItZ3JleTogI2RlZTJlNjtcblxuLy9TVEFUVVNFU1xuJHBlbmRpbmctc3RhdHVzOiAjQjcxQzFDO1xuJGF1dGhvcml6ZWQtc3RhdHVzOiAjNEExNDhDO1xuJHByb2Nlc3NlZC1zdGF0dXM6ICNGRjZGMDA7XG4kcGFpZC1zdGF0dXM6ICMxQjVFMjA7XG4kc2VudC1zdGF0dXM6ICMwMTU3OUI7XG4kY2FuY2VsLXN0YXR1czogIzMzMzMzNTtcblxuXG4kc2Vjb25kYXJ5LWluZm86Izg2OGU5NjtcbiRiZy1wcm9kdWN0LWRldGFpbDojZmZmZmZmO1xuJGluZm8tc2VwYXJhdG9yOnJnYmEoMCwgMCwgMCwgMC4xKTtcbiRpY29uLWVkaXQtZGV0YWlsOiMxNzU2YTY7XG4kZXJyb3ItcXVhbnRpdHk6cmVkO1xuJG1lc3NhZ2UtcXVhbnRpdHk6IzAwODAwMDtcbiIsIi5idG4tbWFpbiB7XG4gIGJhY2tncm91bmQ6ICRiZy1ibHVlO1xuICBjb2xvcjogJGJnLXdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctYmx1ZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnRuLWRyb3Bkb3duLW1haW4ge1xuICBjb2xvcjogJGJnLWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDdyZW07XG4gIHRvcDogMjhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogNTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAkYmctd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcblxuICA+YnV0dG9uIHtcbiAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkYmctZ3JlZW47IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRiZy1yZWQ7IC8qIHJlZCAqL1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDhyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yMCk7XG59XG5cbi5tZXNzYWdlLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIGNvbG9yOiAkYmctcmVkO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wYWdlLWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc3AtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAkYmctYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvc3BlY3RydW0vc3BlY3RydW0nO1xuXG4ucHJvZHVjdC1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDJlbTtcblxuICAuaXRlbS1wcm9wZXJ0aWVzIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLmltZy1hdGxhbnRpcyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgfVxuXG4gIC5pbWcxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID4gc3BhbjpudGgtY2hpbGQoMSkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgfVxuICAgIG5nLXNlbGVjdCB7XG4gICAgICB3aWR0aDogODVweDtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbWcyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICA+ZGl2Om50aC1jaGlsZCgxKXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdG9wOiAtMTBweDtcbiAgICB9XG4gICAgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICB3aWR0aDogNTM1cHg7XG4gICAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAgIC5xdWFkcmFudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLlExIHtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgICAmLkxaIHtcbiAgICAgICAgICAgIHRvcDogMTU1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5TWiB7XG4gICAgICAgICAgICB0b3A6IDE5NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuUTIge1xuICAgICAgICAgIGxlZnQ6IDIxMHB4O1xuXG4gICAgICAgICAgJi5MWiB7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5TWiB7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLlEzIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgJi5MWiB7XG4gICAgICAgICAgICB0b3A6IDE1NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuU1oge1xuICAgICAgICAgICAgdG9wOiAxOTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLlE0IHtcbiAgICAgICAgICBsZWZ0OiAyMTBweDtcblxuICAgICAgICAgICYuTFoge1xuICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5TWiB7XG4gICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MzBweDtcbiAgICB9XG4gIH1cbn1cblxuLndhcm5pbmdzIHtcbiAgY29sb3I6IGdyZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/products/product-view-x-cel/product-view-x-cel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-view-x-cel/product-view-x-cel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductViewXCelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewXCelComponent", function() { return ProductViewXCelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_confirm_purchase_confirmation_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/confirm-purchase/confirmation-component.component */ "./src/app/products/components/confirm-purchase/confirmation-component.component.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
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













var ProductViewXCelComponent = /** @class */ (function () {
    function ProductViewXCelComponent(route, modalService, userStorageService, userService, productService, spinner) {
        this.route = route;
        this.modalService = modalService;
        this.userStorageService = userStorageService;
        this.userService = userService;
        this.productService = productService;
        this.spinner = spinner;
        this.showImg = { right: false, left: false };
        this.originalParameters = { right: [], left: [] };
        this.enable = {
            right: false,
            left: false
        };
        this.disableBuyButton = true;
        this.selectedProduct = { params: [{ eye: 'Right', header: [], params: [] }, { eye: 'Left', header: [], params: [] }] };
        this.price = { right: { spCode: null, priceUnit: 0 }, left: { spCode: null, priceUnit: 0 } };
        this.quantity = { right: 0, left: 0 };
        this.presentationAndDesign = { right: { presentation: '', design: '' }, left: { presentation: '', design: '' } };
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_9__["BasketRequest"]();
        this.paramsAtlantisImages = { right: { clock: {}, parameters: [] }, left: { clock: {}, parameters: [] } };
        this.listFileRightEye = new Array;
        this.listFileLeftEye = new Array;
    }
    ProductViewXCelComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.user = JSON.parse(this.userStorageService.getCurrentUser());
        //this.membership = this.user.userResponse.membership.idMembership;
        this.getProduct();
    };
    ProductViewXCelComponent.prototype.getProduct = function () {
        var _this = this;
        this.spinner.show();
        this.productService.findById$(this.id).subscribe(function (res) {
            _this.product = res.data[0];
            _this.product.typeOrder = 'new';
            if (_this.product.name.includes('Atlantis')) {
                _this.getOtherProducts();
            }
            _this.originalParameters.right = JSON.parse(_this.product.types)[0].parameters;
            _this.originalParameters.left = JSON.parse(_this.product.types)[0].parameters;
            _this.product.parametersRight = JSON.parse(_this.product.types)[0].parameters;
            _this.product.parametersLeft = JSON.parse(_this.product.types)[0].parameters;
            _this.product.header = JSON.parse(_this.product.types)[0].header;
            _this.initFooterButtons();
            _this.initialViewParams();
            _this.spinner.hide();
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    ProductViewXCelComponent.prototype.getOtherProducts = function () {
        var _this = this;
        this.productService.findBySupplierAndInViewAndCategory$(13, false, 10).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_11__["CodeHttp"].ok) {
                _this.setInfoAdditionalPrices(res.data);
                _this.setMembership();
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
    ProductViewXCelComponent.prototype.setInfoAdditionalPrices = function (data) {
        var self = this;
        this.productsAdditional = data;
        this.product.infoAdditionalPrices = {
            "name": "prices", "values": { "hydrapeg": {
                    "gold": 0,
                    "diamond": 0,
                    "preferred": 0,
                    "bronze": 0,
                    "diamondSaudi": 0,
                    "centralAmerica": 0,
                    "diamondPO": 0
                },
                "dmv insertion and removal set": {
                    "gold": 0,
                    "diamond": 0,
                    "preferred": 0,
                    "bronze": 0,
                    "diamondSaudi": 0,
                    "centralAmerica": 0,
                    "diamondPO": 0
                }
            }
        };
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.productsAdditional, function (product) {
            var name = product.name.toLowerCase();
            self.product.infoAdditionalPrices.values[name] = {
                "gold": product.price1,
                "diamond": product.price2,
                "preferred": product.price3,
                "bronze": product.price4,
                "diamondSaudi": product.price5,
                "centralAmerica": product.price6,
                "diamondPO": product.price7
            };
        });
    };
    ProductViewXCelComponent.prototype.setMembership = function () {
        if (this.user.role.idRole === 3) {
            this.membership = this.user.userResponse.membership.idMembership;
            if (this.product.name.includes('Atlantis')) {
                this.definePrice(this.membership);
            }
        }
    };
    ProductViewXCelComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.gold;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].gold;
                break;
            case 2:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamond;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamond;
                break;
            case 3:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.preferred;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].preferred;
                break;
            case 4:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.bronze;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].bronze;
                break;
            case 5:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamondSaudi;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamondSaudi;
                break;
            case 6:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.centralAmerica;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].centralAmerica;
                break;
            case 7:
                this.priceHydrapeg = this.product.infoAdditionalPrices.values.hydrapeg.diamondPO;
                this.priceDMV = this.product.infoAdditionalPrices.values["dmv insertion and removal set"].diamondPO;
                break;
        }
    };
    ProductViewXCelComponent.prototype.priceSaleTotal = function () {
        this.setPrice();
        return (this.price['right'].priceUnit || 0) + (this.price['left'].priceUnit || 0);
    };
    ProductViewXCelComponent.prototype.setPrice = function () {
        var self = this;
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.selectedProduct.params, function (parameter) {
            if (self.enable[(parameter.eye.toLowerCase())]) {
                lodash__WEBPACK_IMPORTED_MODULE_5__["each"](self.product[self.parametersByEye(parameter.eye)], function (p) {
                    if (p.name === 'Design' && !!p.selected) {
                        self.setPriceByDesign(parameter.eye.toLowerCase(), p.selected);
                    }
                });
            }
            else {
                self.price[parameter.eye.toLowerCase()].priceUnit = 0;
            }
        });
        return this.price;
    };
    ProductViewXCelComponent.prototype.initFooterButtons = function () {
        this.buttons = [
            { name: 'Buy Now', icon: null, hidden: this.user.role.idRole === 3, fn: 'buyNow' },
            { name: 'Add to cart', icon: 'fa fa-cart-plus', hidden: this.product.typeOrder !== 'new', fn: 'addToCart' }
        ];
    };
    ProductViewXCelComponent.prototype.initialViewParams = function () {
        var self = this;
        this.product.parametersRight = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.product.parametersRight, function (param) {
            return !self.checkAtlantisParams(param, 0);
        });
        this.product.parametersLeft = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.product.parametersLeft, function (param) {
            return !self.checkAtlantisParams(param, 0);
        });
    };
    ProductViewXCelComponent.prototype.getClient = function (client) {
        this.client = client.idUser;
        this.membership = client.membership.idMembership;
        if (this.product.name.includes('Atlantis') && this.product.infoAdditionalPrices) {
            this.definePrice(this.membership);
        }
    };
    ProductViewXCelComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.enable.right) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.enable.left) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewXCelComponent.prototype.buttonAction = function (functionName) {
        var _this = this;
        this.uploadFilesComponents.forEach(function (uploadFileComponent) {
            uploadFileComponent.saveFiles();
        });
        this.selectedProduct.params[0].header = []; //clean everything
        this.selectedProduct.params[0].params = [];
        this.selectedProduct.params[1].header = [];
        this.selectedProduct.params[1].params = [];
        this.selectedProduct['price'] = this.setPrice(); //an object that has selected designs and their price
        var productsRequested = [];
        var productsSelected = this.buildProductSelected();
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_7__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_8__["Product"]();
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
        this.selectedProduct['name'] = this.product.name;
        this.selectedProduct['category'] = this.product.category;
        this.selectedProduct['idProduct'] = this.product.idProduct;
        this.selectedProduct['client'] = this.product.client;
        this.selectedProduct['mainImg'] = this.product.mainImg;
        this.selectedProduct['patient'] = this.product.patient;
        this.selectedProduct['shipping'] = this.product.shippingAddress;
        this.selectedProduct['supplier'] = this.product.supplier;
        this.selectedProduct['typeOrder'] = this.product.typeOrder;
        this.selectedProduct['insertor'] = this.product.name.includes('Atlantis') ? this.product.header[0] : null; //this's DMV according to Json
        this.selectedProduct['totalPrice'] = this.setTotalPrice(); //sum both eyes, hydra, dmv
        var modalRef = this.modalService.open(_components_confirm_purchase_confirmation_component_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseConfirmationComponent"], { size: 'lg', windowClass: 'modal-content-border', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.selectedProduct = this.selectedProduct;
        modalRef.componentInstance.buttonPressed = functionName;
        modalRef.componentInstance.listFileLeftEye = this.listFileLeftEye;
        modalRef.componentInstance.listFileRightEye = this.listFileRightEye;
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.typeOrder = this.product.typeOrder;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.additionalDMV = this.getAdditionalPrices(false).dmv;
        modalRef.componentInstance.additionalHydrapeg = this.getAdditionalPrices(false).hydrapeg;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
            var self = _this;
            var productsSelected = _this.productsSelected;
            lodash__WEBPACK_IMPORTED_MODULE_5__["each"](productsSelected, function (p, index) {
                self.revertChangePowerPositive(p.parameters);
            });
        });
    };
    ProductViewXCelComponent.prototype.revertChangePowerPositive = function (params) {
        var power = params.find(function (p) { return p.name.includes('Power'); });
        if (!!power) {
            power.selected = parseFloat(power.selected);
        }
    };
    ProductViewXCelComponent.prototype.buildProductSelected = function () {
        var self = this;
        this.setEyeSelected();
        var productsSelected = this.productsSelected;
        this.setSelectedParams();
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](productsSelected, function (p, index) {
            var eye = p.eye.toLowerCase();
            p.patient = self.product.patient;
            p.name = self.product.name;
            p.id = self.product.idProduct;
            p.codeSpectrum = self.price[eye].spCode;
            p.price = self.price[eye].priceUnit;
            p.quantity = self.quantity[eye];
            p.header = self.selectedProduct.params[index].header.filter(function (param) { return param.name !== 'Spectrum Code'; });
            p.dmv = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](self.product.header, { name: "DMV" });
            p.parameters = self.selectedProduct.params[index].params;
            self.changePowerPositive(p.parameters);
            p.hydrapeg = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](p.parameters, { name: "Hydrapeg" }) || lodash__WEBPACK_IMPORTED_MODULE_5__["find"](self.originalParameters[eye], { name: "Hydrapeg" });
            p.observations = eye === 'right' ? self.product.observationsRight : self.product.observationsLeft;
            if (self.product.name.includes('Atlantis')) {
                p.detail = { name: self.product.name, eye: p.eye, codeSpectrum: self.price[eye].spCode, header: p.header, parameters: p.parameters, dmv: p.dmv, hydrapeg: p.hydrapeg, productsAdditional: self.getProductsAdditional(p, 'detail') };
            }
            else {
                p.detail = { name: self.product.name, eye: p.eye, codeSpectrum: self.price[eye].spCode, header: p.header, parameters: p.parameters };
            }
        });
        var requestedProducts = JSON.parse(JSON.stringify(productsSelected));
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](productsSelected, function (p) {
            lodash__WEBPACK_IMPORTED_MODULE_5__["each"](self.getProductsAdditional(p, 'basket'), function (additional) {
                requestedProducts.push(additional);
            });
        });
        return requestedProducts;
    };
    ProductViewXCelComponent.prototype.changePowerPositive = function (parameters) {
        var power = parameters.find(function (p) { return p.name.includes('Power'); });
        if (!!power) {
            power.selected = power.selected > 0 ? "+" + power.selected : power.selected;
        }
    };
    ProductViewXCelComponent.prototype.setSelectedParams = function () {
        var self = this;
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.selectedProduct.params, function (parameters) {
            lodash__WEBPACK_IMPORTED_MODULE_5__["each"](self.product[self.parametersByEye(parameters.eye)], function (param) {
                if (self.enable[(parameters.eye.toLowerCase())] &&
                    param.selected !== null &&
                    param.selected !== undefined &&
                    param.selected !== '' &&
                    param.selected !== 'No') {
                    if (param.header) {
                        parameters.header = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](parameters.header, param);
                        if (param.name === 'Quantity') {
                            self.quantity[parameters.eye.toLowerCase()] = param.selected;
                        }
                        if (param.name === 'Design') {
                            parameters.header = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](parameters.header, { name: 'Spectrum Code', selected: self.price[parameters.eye.toLowerCase()].spCode }); //ver cual ojo colocar
                            self.finalDesign = param.selected;
                        }
                    }
                    else {
                        parameters.params = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](parameters.params, param);
                    }
                }
            });
            if (self.finalDesign === 'Atlantis 2.0') {
                var eye = parameters.eye.toLowerCase();
                self.paramsAtlantisImages[eye].parameters = self.paramsAtlantisImages[eye].parameters.filter(function (p) { return p.name !== 'Atlantis 2.0 C.S.A'; });
                parameters.params = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](parameters.params, self.paramsAtlantisImages[parameters.eye.toLowerCase()].parameters);
            }
            parameters['observations'] = parameters.eye.toLowerCase() === 'right' ? self.product.observationsRight : self.product.observationsLeft;
        });
    };
    ProductViewXCelComponent.prototype.getAdditionalPrices = function (isIndividualPrice) {
        var priceDmv = 0;
        var priceHydrapegRight = 0;
        var priceHydrapegLeft = 0;
        if (!this.product.name.includes('Atlantis')) {
            return { "dmv": 0, "hydrapeg": 0 };
        }
        // Finding DMV
        var dmv = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.product.header, { name: "DMV" });
        if (dmv.selected === 'Yes') {
            dmv.price = this.priceDMV;
            priceDmv = this.priceDMV;
        }
        else {
            dmv.price = 0;
        }
        // Finding Hydrapeg Right
        var hydrapegRight = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.product.parametersRight, { name: "Hydrapeg" });
        if (hydrapegRight.selected === "Yes") {
            priceHydrapegRight = this.priceHydrapeg;
        }
        // Finding Hydrapeg Left
        var hydrapegLeft = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.product.parametersLeft, { name: "Hydrapeg" });
        if (hydrapegLeft.selected === "Yes") {
            priceHydrapegLeft = this.priceHydrapeg;
        }
        if (isIndividualPrice) {
            return { "dmv": (priceDmv || 0), "hydrapegRight": priceHydrapegRight, "hydrapegLeft": priceHydrapegLeft };
        }
        else {
            return { "dmv": (priceDmv || 0),
                "hydrapeg": ((priceHydrapegRight * this.quantity['right']) || 0) + ((priceHydrapegLeft * this.quantity['left']) || 0) };
        }
    };
    ProductViewXCelComponent.prototype.getProductsAdditional = function (productSelected, type) {
        var additionals = [];
        // Type is basket (detail) and when is detail (productSelecte)
        var eye = productSelected.eye || productSelected.detail.eye;
        var keyDMV = 'dmv';
        var keyHydrapeg = eye === 'Right' ? "hydrapegRight" : "hydrapegLeft";
        var productDMV = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.productsAdditional, { name: "DMV Insertion and Removal Set" });
        var productHydrapeg = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.productsAdditional, { name: "Hydrapeg" });
        if (this.getAdditionalPrices(true)[keyDMV]) {
            var dmv = {
                id: productDMV.idProduct,
                name: productDMV.name,
                price: this.getAdditionalPrices(true)[keyDMV],
                quantity: productSelected.quantity,
                patient: productSelected.patient,
                codeSpectrum: productDMV.codeSpectrum,
                detail: {}
            };
            if (type === 'basket') {
                dmv.detail = productSelected.detail;
            }
            additionals.push(dmv);
        }
        if (this.getAdditionalPrices(true)[keyHydrapeg]) {
            var hydrapeg = {
                id: productHydrapeg.idProduct,
                name: productHydrapeg.name,
                price: this.getAdditionalPrices(true)[keyHydrapeg],
                quantity: productSelected.quantity,
                patient: productSelected.patient,
                codeSpectrum: productHydrapeg.codeSpectrum,
                detail: {}
            };
            if (type === 'basket') {
                hydrapeg.detail = productSelected.detail;
            }
            additionals.push(hydrapeg);
        }
        return additionals;
    };
    ProductViewXCelComponent.prototype.addToCart = function () {
        console.log('addToCart');
        console.log(this.listFileLeftEye);
        console.log(this.listFileRightEye);
    };
    ProductViewXCelComponent.prototype.validation = function () {
        return true;
    };
    ProductViewXCelComponent.prototype.selectEye = function (object) {
        this.enable[object.name] = object.value;
        if (!this.enable[object.name]) {
            this.showImg[object.name] = false;
        }
    };
    ProductViewXCelComponent.prototype.parametersByEye = function (eye) {
        return eye.toLowerCase() === 'right' ? 'parametersRight' : 'parametersLeft';
    };
    ProductViewXCelComponent.prototype.getParams = function (type, eye) {
        switch (type) {
            case 'header':
                return lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.product[this.parametersByEye(eye)], function (param) {
                    return param.header;
                });
            case 'body':
                return lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.product[this.parametersByEye(eye)], function (param) {
                    return !param.header;
                });
        }
    };
    ProductViewXCelComponent.prototype.changeParamsAndPrice = function (value) {
        var self = this;
        var paramsBody = [];
        var paramsHeader = this.getParams('header', value.eye);
        //--------------------------------------------------------
        if (this.product.name.includes('Atlantis')) {
            if (value.param.name === 'Design') {
                var selectedDesign_1 = value.param.selected;
                this.setPriceByDesign(value.eye, selectedDesign_1);
                this.showImg[value.eye] = false;
                paramsBody = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.originalParameters[value.eye], function (param) {
                    switch (selectedDesign_1) {
                        case 'Atlantis SPH':
                        case 'Atlantis FT':
                            self.lzRequired(param, 0);
                            if (lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](['LZ 3D Vault / 2.0', 'TPC'], param.name)) {
                                param.selected = (param.type === 'radio') ? 'No' : null;
                            }
                            return param.name !== 'LZ 3D Vault / 2.0' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param, 0);
                        case 'Atlantis TPC':
                        case 'Atlantis MF':
                            self.lzRequired(param, 0);
                            if (param.name === 'LZ 3D Vault / 2.0') {
                                param.selected = (param.type === 'radio') ? 'No' : null;
                            }
                            return param.name !== 'LZ 3D Vault / 2.0' && !param.header && !self.checkAtlantisParams(param, 0);
                        case 'Atlantis 3D':
                            self.lzRequired(param, 1);
                            if (param.name === 'TPC') {
                                param.selected = (param.type === 'radio') ? 'No' : null;
                            }
                            return param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param, 0);
                        case 'Atlantis 2.0':
                            self.lzRequired(param, 1);
                            self.paramsAtlantisImages[value.eye].parameters = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](self.originalParameters[value.eye], function (param) {
                                return selectedDesign_1 === 'Atlantis 2.0' && self.checkAtlantisParams(param, 0);
                            });
                            self.getClock(value.eye);
                            self.showImg[value.eye] = true;
                            if (lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](['Limbal Zone', 'Scleral Zone', 'TPC'], param.name)) {
                                param.selected = (param.type === 'radio') ? 'No' : null;
                            }
                            return param.name !== 'Limbal Zone' && param.name !== 'Scleral Zone' && param.name !== 'TPC' && !param.header && !self.checkAtlantisParams(param, 1);
                        case 'Atlantis LD':
                            self.lzRequired(param, 0);
                            return !param.header && !self.checkAtlantisParams(param, 0);
                        default:
                            self.lzRequired(param, 0);
                            return param && !self.checkAtlantisParams(param, 0) && !param.header;
                    }
                });
                this.product[this.parametersByEye(value.eye)] = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](paramsHeader, paramsBody);
                this.setRequiredParams(value);
            }
        }
        else if (this.product.name.includes('RGP')) {
            if (value.param.name === 'Design') {
                var selectedDesign = value.param.selected;
                this.setPriceByDesign(value.eye, selectedDesign);
            }
        }
        else if (this.product.name.includes('Soft')) {
            if (value.param.name === 'Presentation') {
                this.presentationAndDesign[value.eye.toLowerCase()].presentation = value.param.selected;
                this.setPriceByDesign(value.eye, value.param.selected);
            }
            if (value.param.name === 'Design') {
                var selectedDesign_2 = value.param.selected;
                this.presentationAndDesign[value.eye.toLowerCase()].design = selectedDesign_2;
                this.setPriceByDesign(value.eye, selectedDesign_2);
                var material_1 = paramsHeader.find(function (p) { return p.name === 'Materials'; });
                paramsBody = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.originalParameters[value.eye], function (param) {
                    switch (selectedDesign_2) {
                        case 'X-Cel Multifocal'://addition, dom eye, distance zone
                            if (param.name === 'C.T / E.C') {
                                self.ctRequired(param, selectedDesign_2, 0);
                            }
                            return !param.header;
                        case 'Flexlens ARC':
                            if (param.name === 'C.T / E.C') {
                                self.ctRequired(param, selectedDesign_2, 1);
                            }
                            material_1.values = [];
                            material_1.values = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](material_1.values, "45%", "49%", "55%", "59%", "Definitive 74%");
                            material_1.selected = (material_1.selected === '49%' || material_1.selected === 'Definitive 74%') ? material_1.selected : null;
                            material_1.values = material_1.values.filter(function (p) { return p === '49%' || p === 'Definitive 74%'; });
                            return !param.header && param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
                        case 'Flexlens Large Diameter':
                            if (param.name === 'C.T / E.C') {
                                self.ctRequired(param, selectedDesign_2, 0);
                            }
                            material_1.values = [];
                            material_1.values = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](material_1.values, "45%", "49%", "55%", "59%", "Definitive 74%");
                            material_1.values = material_1.values.filter(function (p) { return p === '55%'; });
                            material_1.selected = material_1.values[0];
                            if (param.name === 'Presentation') {
                                param.values = param.values.filter(function (p) { return p !== '3 Pack'; });
                                param.selected = (param.selected === '3 Pack') ? null : param.selected;
                                self.presentationAndDesign[value.eye.toLowerCase()].presentation = null;
                            }
                            return !param.header && param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
                        case 'Flexlens Tricurve':
                            if (param.name === 'C.T / E.C') {
                                self.ctRequired(param, selectedDesign_2, 1);
                            }
                        default:
                            if (param.name === 'C.T / E.C' && selectedDesign_2 === 'Flexlens Tricurve') {
                                self.ctRequired(param, selectedDesign_2, 1);
                            }
                            else if (param.name === 'C.T / E.C') {
                                self.ctRequired(param, selectedDesign_2, 0);
                            }
                            if (material_1.values.length <= 2) {
                                material_1.values = [];
                                material_1.values = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](material_1.values, "45%", "49%", "55%", "59%", "Definitive 74%");
                            }
                            if (!lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](param.values, '3 Pack') && param.name === 'Presentation') {
                                param.values = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](param.values, '3 Pack');
                            }
                            return !param.header && param.name !== 'Addition' && param.name !== 'Distance Zone' && param.name !== 'Dom. Eye';
                    }
                });
                this.product[this.parametersByEye(value.eye)] = lodash__WEBPACK_IMPORTED_MODULE_5__["concat"](paramsHeader, paramsBody);
            }
        }
    };
    ProductViewXCelComponent.prototype.lzRequired = function (param, required) {
        if (param.name.includes('LZ 3D Vault')) {
            param.noRequired = required ? false : true;
        }
    };
    ProductViewXCelComponent.prototype.ctRequired = function (param, design, required) {
        if (required) {
            param.noRequired = false;
            if (design.includes('ARC')) {
                param.type = 'selected';
                param.values = ['0.30', '0.50'];
            }
            else {
                param.type = 'input-number';
            }
        }
        else {
            param.noRequired = true;
            param.type = 'input-number';
        }
    };
    ProductViewXCelComponent.prototype.setPriceByDesign = function (eye, design) {
        //do i get it from db or set it here? X-Cel RGP X-Cel Atlantis Scleral X-Cel Custom Soft
        //"Atlantis SPH", "Atlantis TPC", "Atlantis FT", "Atlantis 3D", "Atlantis MF", "Atlantis 2.0", "Atlantis LD"
        if (this.product.name.includes('Atlantis')) {
            switch (design) {
                case 'Atlantis SPH':
                    this.price[eye].spCode = '122A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 95;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 95;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 95;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 180;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Atlantis TPC':
                    this.price[eye].spCode = '126A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 140;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 140;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 140;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 260;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Atlantis FT':
                    this.price[eye].spCode = '125A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 140;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 140;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 140;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 260;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Atlantis 3D':
                    this.price[eye].spCode = '124A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 140;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 140;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 140;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 260;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Atlantis MF':
                    this.price[eye].spCode = '125A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 140;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 140;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 140;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 260;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Atlantis 2.0':
                    this.price[eye].spCode = '127A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 140;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 140;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 140;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 260;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Atlantis LD':
                    this.price[eye].spCode = '123A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 140;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 140;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 140;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 175;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 260;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
            }
        }
        else if (this.product.name.includes('RGP')) {
            switch (design) {
                case 'Apex':
                    this.price[eye].spCode = '130A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 65;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 65;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 65;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 94.3;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 95;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Bitoric':
                    this.price[eye].spCode = '129A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 32;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 32;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 32;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 55.3;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 50;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'CV-4 Multifocal':
                    this.price[eye].spCode = '133A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 66;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 66;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 66;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 111.75;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 99;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Pinnacle':
                    this.price[eye].spCode = '118A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 21;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 21;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 21;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 42.15;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 31;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Pinnacle IC':
                    this.price[eye].spCode = '120A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 55;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 55;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 55;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 94.3;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 84;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Pinnacle LD':
                    this.price[eye].spCode = '119A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 31;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 31;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 31;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 72.45;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 46;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Proplus':
                    this.price[eye].spCode = '131A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 47;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 47;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 47;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 95.4;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 70;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Sphere':
                    this.price[eye].spCode = '114A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 21;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 21;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 21;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 33.45;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 31;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Starlens':
                    this.price[eye].spCode = '116A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 21;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 21;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 21;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 33.45;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 31;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'Titan':
                    this.price[eye].spCode = '121A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 65;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 65;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 65;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 94.3;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 95;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
                case 'X-Cel Thin':
                    this.price[eye].spCode = '117A';
                    switch (this.membership) {
                        case 1://Gold
                            this.price[eye].priceUnit = 21;
                            break;
                        case 2://Diamond
                            this.price[eye].priceUnit = 21;
                            break;
                        case 3://Preffered
                            this.price[eye].priceUnit = 21;
                            break;
                        case 4://Bronze
                            this.price[eye].priceUnit = 33.45;
                            break;
                        case 5://Diamond Saudi
                            this.price[eye].priceUnit = 0;
                            break;
                        case 6://Central America
                            this.price[eye].priceUnit = 31;
                            break;
                        case 7://Diamond P&O
                            this.price[eye].priceUnit = 0;
                            break;
                    }
                    break;
            }
        }
        else if (this.product.name.includes('Custom Soft')) {
            var customDesign = this.presentationAndDesign[eye.toLowerCase()].design;
            var customPresentation = this.presentationAndDesign[eye.toLowerCase()].presentation;
            if (!!customDesign && !!customPresentation) {
                switch (customDesign) {
                    case 'Adult Aphakic':
                    case 'Pediatric Aphakic':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '104A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 91.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '104B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 47.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '104C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 93.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 93.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 93.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 144.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'X-Cel Multifocal':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '107A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 69.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 69.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 69.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 104.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '107B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 36.50;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 36.50;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 36.50;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 53.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '107C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 103.50;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 103.50;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 103.50;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 90.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 155.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens ARC':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '100A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 79.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 79.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 79.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 123.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '100B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 45.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 45.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 45.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 69.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '100C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 99.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 99.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 99.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 90.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 150.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens Piggyback':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '103A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 91.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '103B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 58.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '103C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 110.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 110.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 110.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 168.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens Large Diameter':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '108A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 51.75;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 51.75;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 51.75;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 78.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '108C (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 32.30;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 32.30;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 32.30;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 48.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens PRS':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '102A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 70.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 70.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 70.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 110.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '102B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 58.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '102C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 90.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 125.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens Sphere':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '105A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 26.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 26.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 26.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 39.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '105B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 14.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 14.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 14.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 27.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '105C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 42.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 42.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 42.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 81.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens Toric':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '106A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 40.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 40.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 40.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '106B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 18.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 18.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 18.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 33.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '106C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 54.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 54.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 54.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 99.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Flexlens Tricurve':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '101A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 70.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 70.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 70.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 110.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '101B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 37.50;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 30.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 58.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '101C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 80.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 90.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 125.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Horizon Sphere':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '111A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 26.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 26.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 26.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 39.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '111B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 14.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 14.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 14.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 27.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '111C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 42.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 42.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 42.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 81.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                    case 'Horizon Toric':
                        switch (customPresentation) {
                            case 'Single (Vial)':
                                this.price[eye].spCode = '112A (W)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 40.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 40.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 40.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 50.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case 'Spare (Blister)':
                                this.price[eye].spCode = '112B (NW)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 18.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 18.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 18.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 20.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 33.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                            case '3 Pack':
                                this.price[eye].spCode = '112C (3PK)';
                                switch (this.membership) {
                                    case 1://Gold
                                        this.price[eye].priceUnit = 54.00;
                                        break;
                                    case 2://Diamond
                                        this.price[eye].priceUnit = 54.00;
                                        break;
                                    case 3://Preffered
                                        this.price[eye].priceUnit = 54.00;
                                        break;
                                    case 4://Bronze
                                        this.price[eye].priceUnit = 60.00;
                                        break;
                                    case 5://Diamond Saudi
                                        this.price[eye].priceUnit = 0;
                                        break;
                                    case 6://Central America
                                        this.price[eye].priceUnit = 99.00;
                                        break;
                                    case 7://Diamond P&O
                                        this.price[eye].priceUnit = 0;
                                        break;
                                }
                                break;
                        }
                        break;
                }
            }
        }
    };
    ProductViewXCelComponent.prototype.setTotalPrice = function () {
        var totalEyes = this.price.right.priceUnit * this.quantity.right;
        totalEyes += this.price.left.priceUnit * this.quantity.left;
        var priceDmv = this.getAdditionalPrices(true).dmv;
        var priceHydrapeg = this.getAdditionalPrices(false).hydrapeg;
        return totalEyes + priceDmv + priceHydrapeg;
    };
    ProductViewXCelComponent.prototype.setRequiredParams = function (_a) {
        var param = _a.param, eye = _a.eye;
        var self = this;
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.product[this.parametersByEye(eye)], function (p, index) {
            switch (p.name) {
                case 'Addition':
                case 'Dom. Eye':
                case 'Distance Zone':
                    if (param.name === 'Design') {
                        self.product[self.parametersByEye(eye)][index].noRequired = param.selected !== 'Atlantis MF';
                    }
                    break;
            }
        });
    };
    ProductViewXCelComponent.prototype.checkAtlantisParams = function (param, flag) {
        if (flag && param.name === 'Atlantis 2.0 C.S.A') {
            return false;
        }
        switch (param.name) {
            case 'Atlantis 2.0 C.S.A':
            case 'Clock Mark':
            case 'Q1 LZ':
            case 'Q1 SZ':
            case 'Q2 LZ':
            case 'Q2 SZ':
            case 'Q3 LZ':
            case 'Q3 SZ':
            case 'Q4 LZ':
            case 'Q4 SZ':
                param.selected = null;
                return true;
            default:
                break;
        }
    };
    ProductViewXCelComponent.prototype.checkDisabled = function () {
        return this.missingParamsRequired();
    };
    ProductViewXCelComponent.prototype.missingParamsRequired = function () {
        var eyes = ['right', 'left'];
        var eyesEnabled = [this.enable.right, this.enable.left];
        var nothingSelected = lodash__WEBPACK_IMPORTED_MODULE_5__["every"](eyesEnabled, function (eye) { return !eye; });
        var self = this;
        var paramsEmpty = lodash__WEBPACK_IMPORTED_MODULE_5__["some"](eyes, function (eye, index) {
            return eyesEnabled[index] && lodash__WEBPACK_IMPORTED_MODULE_5__["some"](self.product[self.parametersByEye(eye)], function (parameter) {
                return parameter.selected === 0 ? !parameter.noRequired && parameter.selected : !parameter.noRequired && !parameter.selected;
            });
        });
        var paramsAtlantis = lodash__WEBPACK_IMPORTED_MODULE_5__["some"](eyes, function (eye, index) {
            var design = self.product[self.parametersByEye(eye)].find(function (p) { return p.name === 'Design'; });
            return (design.selected !== 'Atlantis 2.0' && eyesEnabled[index]) ? !eyesEnabled[index] : eyesEnabled[index] && lodash__WEBPACK_IMPORTED_MODULE_5__["some"](self.getAtlantisParams(eye), function (parameter) {
                return !parameter.noRequired && !parameter.selected;
            });
        });
        var edgeSelected = lodash__WEBPACK_IMPORTED_MODULE_5__["some"](eyes, function (eye, index) {
            var design = self.product[self.parametersByEye(eye)].find(function (p) { return p.name === 'Design'; });
            var edge = self.product[self.parametersByEye(eye)].find(function (p) { return p.name === 'Edge'; });
            if (!!design.selected && ['Apex', 'Pinnacle', 'Titan'].some(function (x) { return design['selected'].includes(x); })) {
                return !edge.selected && eyesEnabled[index];
            } /* else {
              return eyesEnabled[index] ? !eyesEnabled[index] : eyesEnabled[index];
            } */
        });
        return !this.product.client || !this.product.patient || nothingSelected || paramsEmpty || paramsAtlantis || edgeSelected;
    };
    ProductViewXCelComponent.prototype.getAtlantisParams = function (eye) {
        return this.paramsAtlantisImages[eye].parameters;
    };
    ProductViewXCelComponent.prototype.getClock = function (eye) {
        var self = this;
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.paramsAtlantisImages[eye].parameters, function (param) {
            if ('Clock Mark' === param.name) {
                self.paramsAtlantisImages[eye].clock = param;
            }
        });
    };
    ProductViewXCelComponent.prototype.getProductSheet = function () {
        var language = this.userStorageService.getLanguage();
        var path = "https://storage.googleapis.com/spectrum-storage/products-sheets/xcel/";
        return path + language + ".pdf";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('uploadFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ProductViewXCelComponent.prototype, "uploadFilesComponents", void 0);
    ProductViewXCelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-x-cel',
            template: __webpack_require__(/*! ./product-view-x-cel.component.html */ "./src/app/products/product-view-x-cel/product-view-x-cel.component.html"),
            styles: [__webpack_require__(/*! ./product-view-x-cel.component.scss */ "./src/app/products/product-view-x-cel/product-view-x-cel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_2__["UserStorageService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]])
    ], ProductViewXCelComponent);
    return ProductViewXCelComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-x-cel/product-view-x-cel.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/products/product-view-x-cel/product-view-x-cel.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductsViewXCelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewXCelModule", function() { return ProductsViewXCelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_products_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components-products.module */ "./src/app/products/components/components-products.module.ts");
/* harmony import */ var _product_view_x_cel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-view-x-cel.component */ "./src/app/products/product-view-x-cel/product-view-x-cel.component.ts");
/* harmony import */ var _product_view_x_cel_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view-x-cel.routing.module */ "./src/app/products/product-view-x-cel/product-view-x-cel.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductsViewXCelModule = /** @class */ (function () {
    function ProductsViewXCelModule() {
    }
    ProductsViewXCelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _product_view_x_cel_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductViewXCelRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _components_components_products_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsProductsModule"]
            ],
            declarations: [
                _product_view_x_cel_component__WEBPACK_IMPORTED_MODULE_6__["ProductViewXCelComponent"]
            ]
        })
    ], ProductsViewXCelModule);
    return ProductsViewXCelModule;
}());



/***/ }),

/***/ "./src/app/products/product-view-x-cel/product-view-x-cel.routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/products/product-view-x-cel/product-view-x-cel.routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductViewXCelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewXCelRoutingModule", function() { return ProductViewXCelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_view_x_cel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-view-x-cel.component */ "./src/app/products/product-view-x-cel/product-view-x-cel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _product_view_x_cel_component__WEBPACK_IMPORTED_MODULE_2__["ProductViewXCelComponent"]
    }
];
var ProductViewXCelRoutingModule = /** @class */ (function () {
    function ProductViewXCelRoutingModule() {
    }
    ProductViewXCelRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductViewXCelRoutingModule);
    return ProductViewXCelRoutingModule;
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



/***/ })

}]);
//# sourceMappingURL=default~product-view-x-cel-product-view-x-cel-module~products-products-module.js.map