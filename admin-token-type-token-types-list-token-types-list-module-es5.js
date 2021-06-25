(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-token-type-token-types-list-token-types-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminTokenTypeAddTokenTypeModalAddTokenTypeModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  \r\n  <ion-content class=\"add-modal-content\">\r\n    <ion-grid class=\"margin-adjustable\">\r\n      <ion-icon class=\"close-modal\" name='close-circle-outline'  (click)='dismiss()'></ion-icon> \r\n      <ion-row>\r\n        <div id=\"errors\" style=\"display: none;\">\r\n          <ion-icon name=\"alert-circle\" style=\"font-size: 25px;\"></ion-icon>\r\n          <span class=\"errorMsgText\">{{errMsg}}!</span>\r\n        </div>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"new-branch-heading\">\r\n            <span>\r\n              New Token Type\r\n            </span>   \r\n          </h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <form   class=\"token-type-form\" >\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item class=\"modal-input-field\">\r\n                <ion-input class=\"place-text\" type=\"text\"  placeholder=\"Token Type*\" (change)=\"dept_name($event)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n           <!-- <ion-col>\r\n            <ion-item class=\"modal-input-field\"> -->\r\n              <!-- <ion-select interface=\"popover\" class=\"place-text\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" formControlName=\"priority\" \r\n              placeholder=\"Priority\" appNoArrow>\r\n                <ion-select-option value=\"\">Token Type</ion-select-option>\r\n                <ion-select-option value=\"High\">High</ion-select-option>\r\n                <ion-select-option value=\"Medium\">Medium</ion-select-option>\r\n                <ion-select-option value=\"Low\">Low</ion-select-option>\r\n              </ion-select> -->\r\n              <!-- <select class=\"place-text form-control round-dropdown\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" (change)=\"dept_priority($event)\" placeholder=\"Priority\" appNoArrow>\r\n                <option value=\"\">Select Priority</option>\r\n                <option value=\"High\">High</option>\r\n                <option value=\"Medium\">Medium</option>\r\n                <option value=\"Low\">Low</option>\r\n              </select>\r\n            </ion-item>\r\n           </ion-col> -->\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <!-- <ion-item lines=\"none\" class=\"modal-input-field textarea-height\"> -->\r\n                  <!-- <ion-textarea class=\"place-text\" (change)=\"dept_description($event)\" placeholder=\"Description\" height=\"80px\"></ion-textarea> -->\r\n                  <textarea class=\" modal-input-field textarea-height place-text desc-text-area\" (change)=\"dept_description($event)\" placeholder=\"Description\" height=\"80px\"></textarea>\r\n              <!-- </ion-item> -->\r\n                <ion-button type=\"button\" (click)=\"submit()\" block>Submit</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n\r\n\r\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminTokenTypeEditTokenTypeModalEditTokenTypeModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover-spin\"  *ngIf=\"loader.isLoading | async\">\r\n\t<ion-spinner name=\"lines\" class=\"profile-modal-spinner\"></ion-spinner>\r\n</div>\r\n<ion-content class=\"edit-modal-content\">\r\n\t<ion-grid>\r\n\t\t<ion-icon class=\"close-modal\" name='close-circle-outline'  (click)='dismiss()'></ion-icon> \r\n\t <ion-row>\r\n\t   <div id=\"errors\" style=\"display: none;\">\r\n\t\t <ion-icon name=\"alert-circle\" style=\"font-size: 25px;\"></ion-icon>\r\n\t\t <span class=\"errorMsgText\">{{errMsg}}!</span>\r\n\t   </div>\r\n\t </ion-row>\r\n\t\t\t<form class=\"edit-form\" [formGroup]=\"editTokenTypeForm\">\r\n\t\t   <ion-item  lines=\"{{line_value_name}}\">\r\n\t\t\t <ion-label position=\"stacked\">Name</ion-label>\r\n\t\t\t <ion-input type=\"text\"  formControlName=\"name\"  [readonly]=\"valuetokentypeName\" (change)=\"InsertData($event)\"></ion-input>\r\n\t\t\t <img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil\" (click)=\"editTokenTypeName()\">\r\n\t         <img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t*ngIf=\"tokentypeRight\"\tclass=\"edit-pencil-icon token-edit-checked-icon\">\r\n\t\t   </ion-item>\r\n\t\t   <ion-item lines=\"{{line_value_desc}}\" class=\"desc\">\r\n\t\t\t <ion-label position=\"stacked\">description</ion-label>\r\n\t\t\t <ion-textarea  formControlName=\"description\" [readonly]=\"valuetokentypeDesc\" (change)=\"InsertDesc($event)\"></ion-textarea>\r\n\t \r\n\t\t\t <img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon desc-edit-pencil-icon edit-modal-pencil\" (click)=\"editTokenTypeDesc()\">\r\n\t\t\t <img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t *ngIf=\"descRight\"\tclass=\"edit-pencil-icon token-edit-checked-icon\">\r\n\t\t   \r\n\t\t\t</ion-item>\r\n\t\t   <div class=\"col text-center\">\r\n\t\t\t   <ion-button type=\"button\" *ngIf = \"showBtn\" (click)=\"updateTokenType(editTokenTypeForm.value)\">Submit</ion-button>\r\n\t\t   </div>\r\n\t   </form>\r\n\t</ion-grid>\r\n   </ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/token-types-list/token-types-list.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/token-types-list/token-types-list.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminTokenTypeTokenTypesListTokenTypesListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\t\t\t\t\t\t\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\r\n\t\t\t\t\t\t\t\t<ion-fab-button class=\"ionFabbtn\" (click)=\"openModal()\" size=\"small\">\r\n\t\t\t\t\t\t\t\t  <ion-icon name=\"add\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</ion-fab-button>\r\n\t\t\t\t\t\t\t</ion-fab>\r\n\t\t\t\t\t\t\t<div class=\"cover-spin\"  *ngIf=\"loader.isLoading | async\">\r\n\t\t\t\t\t\t\t\t<ion-spinner name=\"lines\" class=\"Loading-spinner\"></ion-spinner>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<ion-grid class=\"main-grid list-pages\">\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<!-- <ion-col class=\"linkcol\" size=\"12\" align=\"right\"><span id=\"home\" routerLink=\"/admin/home\">Home</span>/<span\r\n\t\t\t\t\t\t\t\t\tid=\"about\">Token Type</span>\r\n\t\t\t\t\t\t\t</ion-col> -->\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" align=\"center\" class=\"page-heading-col\">\r\n\t\t\t\t\t\t\t\t<h1 class=\"page-heading\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tToken Type\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</h1>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size-lg=\"2\" size-md=\"12\" class=\"search-col\">\r\n\t\t\t\t\t\t\t\t<!-- <ion-item>  -->\r\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\" Search \"\r\n\t\t\t\t\t\t\t\t\tclass=\"search\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"search-outline\" class=\"d-lg-none d-md-block search-icon\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<!-- </ion-item> -->\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"10\" align=\"right\" class=\"add-token-col\">\r\n\t\t\t\t\t\t\t\t<ion-button color=\"primary\" class=\"primary-btn\" (click)=\" openModal()\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon> New TokenType\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col class=\"table-grid\">\r\n\t\t\t\t\t\t\t\t<ion-row class=\"head\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col col-3 th tokentypepadding\" align=\"left\">Name</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col col-6 th zeropadding\" align=\"left\">Description</div>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t<ion-row class=\"body\" *ngFor=\"let list of tokenTypesList | filter:searchText\">\r\n\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row (click)=\"openEditModal(list)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col size-md=\"1\" size-sm=\"1\" size-xs=\"2\" class=\"ion-hide-md-up iconimg\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"list\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"content_col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size-lg=\"3\" size-md=\"3\" size-xs=\"11\" class=\"td firsttd\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{list.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size-lg=\"8\" size-md=\"8\" size-xs=\"11\" class=\"td secondtd\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{list.description}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<div class=\"\" id=\"crossicon\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon id=\"cross\" name=\"close-outline\" (click)=\"presentAlert(list._id)\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col pagination-col\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<ul class=\"nav justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"page != 1\" id=\"prev\" class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"paginationData(page-1)\"><ion-icon id=\"previous-icon\" name=\"chevron-back-outline\"></ion-icon>Prev</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let pageNo of pageCounts\" class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"paginationData(pageNo)\" > \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span  *ngIf=\"pageNo == page; else elseBlock\" class=\"active-design\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{pageNo}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{pageNo}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"page != pageCount\" id=\"next\" class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"paginationData(page+1)\">Next<ion-icon  name=\"chevron-forward-outline\"></ion-icon></span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-grid>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminTokenTypeAddTokenTypeModalAddTokenTypeModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add-modal-content {\n  --background: #ffffff !important;\n}\n.add-modal-content .new-branch-heading {\n  text-align: center;\n  margin: 12px 0 21px;\n}\n.add-modal-content .new-branch-heading span {\n  color: #6c6c6c;\n  border-bottom: 2px solid #65a2ad;\n  padding: 4px 25px;\n  font-size: 20px;\n  font-weight: 500;\n}\n.add-modal-content .token-type-form {\n  margin: 20px 36px auto;\n  width: 100%;\n}\n.add-modal-content .token-type-form .modal-input-field {\n  border-radius: 45px;\n  --highlight-background: transparent;\n  box-shadow: 0px 0px 8px #68bfbb;\n  margin: -6px 0px 20px;\n  height: 40px;\n}\n.add-modal-content .token-type-form .modal-input-field ion-input {\n  margin-top: -5px;\n}\n.add-modal-content .token-type-form .modal-input-field ion-textarea {\n  margin-top: 0px;\n}\n.add-modal-content .token-type-form .modal-input-field ion-select {\n  padding-top: 0px;\n}\n.add-modal-content .token-type-form .modal-input-field .place-text {\n  color: #787878;\n  font-size: 13px;\n}\n.add-modal-content .token-type-form ion-button {\n  width: 100%;\n  --border-radius: 25px;\n  background-color: transparent;\n  border-color: transparent;\n  border: transparent;\n}\n.add-modal-content .round-dropdown {\n  border: 0px !important;\n  padding-top: 0px !important;\n}\n.add-modal-content .round-dropdown:hover {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25) !important;\n}\n.add-modal-content .textarea-height {\n  height: 80px !important;\n  border-radius: 20px !important;\n}\n.add-modal-content .desc-text-area {\n  width: 100%;\n  height: 80px;\n  border: 0px;\n  overflow-y: scroll;\n  padding: 12px;\n  color: #6c6c6c;\n}\n.add-modal-content .desc-text-area::-webkit-scrollbar {\n  display: none;\n}\n.add-modal-content #errors {\n  margin: auto;\n  color: #a70000;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.add-modal-content .errorMsgText {\n  position: relative;\n  top: -6px;\n  left: 6px;\n}\n@media only screen and (max-width: 991px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 335px !important;\n  }\n}\n@media only screen and (max-width: 530px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 298px !important;\n  }\n  .add-modal-content .token-type-form ion-button {\n    width: 298px !important;\n  }\n}\n@media only screen and (max-width: 430px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 272px !important;\n  }\n  .add-modal-content .token-type-form ion-button {\n    width: 272px !important;\n  }\n}\n@media only screen and (max-width: 370px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 245px !important;\n  }\n  .add-modal-content .token-type-form ion-button {\n    width: 245px !important;\n  }\n}\n@media only screen and (max-width: 340px) and (min-height: 600px) {\n  .add-modal-content .token-type-form {\n    margin: 20px 21px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdG9rZW4tdHlwZS9hZGQtdG9rZW4tdHlwZS1tb2RhbC9hZGQtdG9rZW4tdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGdDQUFBO0FBREo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUdJO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBRFI7QUFFUTtFQUNJLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUFaO0FBQ1k7RUFDSSxnQkFBQTtBQUNoQjtBQUVZO0VBQ0ksZUFBQTtBQUFoQjtBQUdZO0VBQ0ksZ0JBQUE7QUFEaEI7QUFLWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSGhCO0FBTVE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQVFRO0VBQ0csc0JBQUE7RUFDQSwyQkFBQTtBQU5YO0FBUVE7RUFDSSw2REFBQTtBQU5aO0FBU1M7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FBUGI7QUFTUztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQYjtBQVVTO0VBQ0csYUFBQTtBQVJaO0FBZVM7RUFDRyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWJaO0FBZVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBYlo7QUFpQkE7RUFHWTtJQUNJLHVCQUFBO0VBaEJkO0FBQ0Y7QUFxQkE7RUFHWTtJQUNJLHVCQUFBO0VBckJkO0VBdUJVO0lBQ0ksdUJBQUE7RUFyQmQ7QUFDRjtBQTBCQTtFQUdZO0lBQ0ksdUJBQUE7RUExQmQ7RUE0QlU7SUFDSSx1QkFBQTtFQTFCZDtBQUNGO0FBOEJBO0VBR1k7SUFDSSx1QkFBQTtFQTlCZDtFQWdDVTtJQUNJLHVCQUFBO0VBOUJkO0FBQ0Y7QUFrQ0E7RUFFUTtJQUNJLHNCQUFBO0VBakNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90b2tlbi10eXBlL2FkZC10b2tlbi10eXBlLW1vZGFsL2FkZC10b2tlbi10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hZGQtbW9kYWwtY29udGVudHtcclxuICBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgLm5ldy1icmFuY2gtaGVhZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOjEycHggMCAyMXB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM2YzZjO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY1YTJhZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLXR5cGUtZm9ybXtcclxuICAgICAgICBtYXJnaW46IDIwcHggMzZweCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5tb2RhbC1pbnB1dC1maWVsZHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICM2OGJmYmI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTZweCAwcHggMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXRleHRhcmVhe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXNlbGVjdHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBsYWNlLXRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgICAgIC5yb3VuZC1kcm9wZG93bntcclxuICAgICAgICAgICBib3JkZXI6MHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdW5kLWRyb3Bkb3duOmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMCAwIDAuMnJlbSByZ2IoMjU1IDI1NSAyNTUgLyAyNSUpICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAudGV4dGFyZWEtaGVpZ2h0e1xyXG4gICAgICAgICAgICAgaGVpZ2h0OjgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuZGVzYy10ZXh0LWFyZWF7XHJcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OjgwcHg7XHJcbiAgICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICAgICAgIGNvbG9yOiM2YzZjNmM7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5kZXNjLXRleHQtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAjZXJyb3Jze1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTcwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXJyb3JNc2dUZXh0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTZweDtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCl7XHJcbiAgICAuYWRkLW1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgLnRva2VuLXR5cGUtZm9ybXtcclxuICAgICAgICAgICAgLm1vZGFsLWlucHV0LWZpZWxke1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpe1xyXG4gICAgLmFkZC1tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIC50b2tlbi10eXBlLWZvcm17XHJcbiAgICAgICAgICAgIC5tb2RhbC1pbnB1dC1maWVsZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjk4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQzMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXtcclxuICAgIC5hZGQtbW9kYWwtY29udGVudHtcclxuICAgICAgICAudG9rZW4tdHlwZS1mb3Jte1xyXG4gICAgICAgICAgICAubW9kYWwtaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjcycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXtcclxuICAgIC5hZGQtbW9kYWwtY29udGVudHtcclxuICAgICAgICAudG9rZW4tdHlwZS1mb3Jte1xyXG4gICAgICAgICAgICAubW9kYWwtaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXtcclxuICAgIC5hZGQtbW9kYWwtY29udGVudHtcclxuICAgICAgICAudG9rZW4tdHlwZS1mb3Jte1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjFweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHRleHRhcmVheyAgXHJcbi8vICAgICAvKiBib3gtc2l6aW5nOiBwYWRkaW5nLWJveDsgKi9cclxuLy8gICAgIG92ZXJmbG93OmhpZGRlbjtcclxuLy8gICAgIC8qIGRlbW8gb25seTogKi9cclxuLy8gICAgIHBhZGRpbmc6MTBweDtcclxuLy8gICAgIHdpZHRoOjI1MHB4O1xyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcbi8vICAgICBtYXJnaW46NTBweCBhdXRvO1xyXG4vLyAgICAgZGlzcGxheTpibG9jaztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuLy8gICAgIGJvcmRlcjo2cHggc29saWQgIzU1NjY3NztcclxuLy8gICB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: AddTokenTypeModalComponent */

    /***/
    function srcAppAdminTokenTypeAddTokenTypeModalAddTokenTypeModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTokenTypeModalComponent", function () {
        return AddTokenTypeModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/main-services.service */
      "./src/app/services/main-services.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AddTokenTypeModalComponent = /*#__PURE__*/function () {
        function AddTokenTypeModalComponent(fb, router, main_services, modalController, alertCtrl) {
          _classCallCheck(this, AddTokenTypeModalComponent);

          this.fb = fb;
          this.router = router;
          this.main_services = main_services;
          this.modalController = modalController;
          this.alertCtrl = alertCtrl;
          this.modelo = "Hello this is my lonnggggggggggggggggg text";
          this.addTokenTypeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(AddTokenTypeModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var textarea = document.querySelector('textarea');
            textarea.addEventListener('keydown', autosize);

            function autosize() {
              var el = this;
              setTimeout(function () {
                // el.style.cssText = 'height:auto; padding:0';
                // for box-sizing other than "content-box" use:
                // el.style.cssText = '-moz-box-sizing:content-box';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
              }, 1);
            }
          }
        }, {
          key: "dept_name",
          value: function dept_name(e) {
            this.deptName = e.target.value;
          }
        }, {
          key: "dept_priority",
          value: function dept_priority(e) {
            this.tokenTypePriority = e.target.value;
          }
        }, {
          key: "dept_description",
          value: function dept_description(e) {
            this.tokenTypeDesc = e.target.value;
          } // submit(value){
          //   //console.log(value);
          //   this.main_services.addTokenType(value).subscribe((result)=>{
          //     console.log(result);
          //   })
          //   this.router.navigate(['token-types-list']);
          // }

        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var addTokenType = {
              name: this.deptName,
              description: this.tokenTypeDesc
            };
            this.main_services.addTokenType(addTokenType).subscribe(function (result) {
              _this.modalController.dismiss(result, 'success');
            }, function (error) {
              console.log(error);
              _this.errMsg = error['error']['error']['name'];

              if (_this.errMsg) {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()('#errors').fadeIn(1000);
              }
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);

        return AddTokenTypeModalComponent;
      }();

      AddTokenTypeModalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      AddTokenTypeModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-token-type-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-token-type-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-token-type-modal.component.scss */
        "./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.scss"))["default"]]
      })], AddTokenTypeModalComponent);
      /***/
    },

    /***/
    "./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminTokenTypeEditTokenTypeModalEditTokenTypeModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".edit-modal-content {\n  --background: #ffffff !important;\n}\n.edit-modal-content .edit-form {\n  margin-top: 33px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.edit-modal-content .edit-form ion-item {\n  --border-width: 0 0 0px 0;\n}\n.edit-modal-content .edit-form ion-item ion-label {\n  font-size: 22px;\n  color: #343434;\n  font-weight: 400;\n}\n.edit-modal-content .edit-form ion-item ion-input {\n  padding-top: 9px !important;\n  color: #787878;\n}\n.edit-modal-content .edit-form ion-item ion-textarea {\n  color: #787878;\n}\n.edit-modal-content .edit-form ion-item ion-textarea textarea {\n  height: 90px;\n}\n.edit-modal-content .edit-form .desc {\n  margin-top: 18px;\n  height: auto;\n}\n.edit-modal-content .edit-form .desc .edit-modal-pencil {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  bottom: 22px;\n  right: 0px;\n  z-index: 9999999;\n  /* border: solid 1px; */\n  padding: 7px;\n  background: #ffffff00;\n}\n.edit-modal-content .edit-form ion-button {\n  --border-radius: 28px;\n  background-color: transparent;\n  border-color: transparent;\n  border: transparent;\n}\n.edit-modal-content #errors {\n  margin: auto;\n  color: #a70000;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.edit-modal-content .errorMsgText {\n  position: relative;\n  top: -6px;\n  left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdG9rZW4tdHlwZS9lZGl0LXRva2VuLXR5cGUtbW9kYWwvZWRpdC10b2tlbi10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNJLHlCQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7QUFGZ0I7RUFDSSwyQkFBQTtFQUNBLGNBQUE7QUFJcEI7QUFEb0I7RUFDQSxjQUFBO0FBR3BCO0FBRG9CO0VBQ0ksWUFBQTtBQUd4QjtBQUNRO0VBQ0ksZ0JBQUE7RUFFQSxZQUFBO0FBQVo7QUFDaUI7RUFDTCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ1o7QUFFUTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFNUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSlo7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFKWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Rva2VuLXR5cGUvZWRpdC10b2tlbi10eXBlLW1vZGFsL2VkaXQtdG9rZW4tdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LW1vZGFsLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIC5lZGl0LWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzNweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3ODc4Nzg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi10ZXh0YXJlYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2N7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IDEyN3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgLmVkaXQtbW9kYWwtcGVuY2lse1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjJweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5OTtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiBzb2xpZCAxcHg7ICovXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlcnJvcnN7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgY29sb3I6ICNhNzAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lcnJvck1zZ1RleHR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG5cclxuICAgIFxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: EditTokenTypeModalComponent */

    /***/
    function srcAppAdminTokenTypeEditTokenTypeModalEditTokenTypeModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTokenTypeModalComponent", function () {
        return EditTokenTypeModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/main-services.service */
      "./src/app/services/main-services.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");

      var EditTokenTypeModalComponent = /*#__PURE__*/function () {
        function EditTokenTypeModalComponent(fb, router, main_services, route, navParams, modalController, loader) {
          _classCallCheck(this, EditTokenTypeModalComponent);

          this.fb = fb;
          this.router = router;
          this.main_services = main_services;
          this.route = route;
          this.navParams = navParams;
          this.modalController = modalController;
          this.loader = loader;
          this.getId = this.navParams.get('_id');
          this.valuetokentypeName = true;
          this.valuetokentypeDesc = true;
          this.line_value_name = "none";
          this.line_value_desc = "none";
          this.tokentypeRight = false;
          this.descRight = false;
          this.editTokenTypeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(EditTokenTypeModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "editTokenTypeName",
          value: function editTokenTypeName() {
            this.showBtn = true;
            this.line_value_name = "line";
            this.valuetokentypeName = false;
          }
        }, {
          key: "InsertData",
          value: function InsertData() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name-edit-pencil-icon').hide();
            this.tokentypeRight = true;
          }
        }, {
          key: "editTokenTypeDesc",
          value: function editTokenTypeDesc() {
            this.showBtn = true;
            this.line_value_desc = "line";
            this.valuetokentypeDesc = false;
          }
        }, {
          key: "InsertDesc",
          value: function InsertDesc() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.desc-edit-pencil-icon').hide();
            this.descRight = true;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.main_services.editTokenType(this.getId).subscribe(function (result) {
              //console.log(result)
              _this2.TokenTypeData = result['tokenType'];
              _this2.editTokenTypeForm = _this2.fb.group({
                name: [_this2.TokenTypeData.name],
                priority: [_this2.TokenTypeData.priority],
                description: [_this2.TokenTypeData.description]
              });
            });
          }
        }, {
          key: "updateTokenType",
          value: function updateTokenType(value) {
            var _this3 = this;

            //console.log(value);
            this.main_services.updateTokenType(this.getId, value).subscribe(function (result) {
              _this3.modalController.dismiss(result, 'success');
            }, function (error) {
              console.log(error);
              _this3.errMsg = error['error']['error']['name'];

              if (_this3.errMsg) {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#errors').fadeIn(1000);
              }
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);

        return EditTokenTypeModalComponent;
      }();

      EditTokenTypeModalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
        }];
      };

      EditTokenTypeModalComponent.propDecorators = {
        _id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      EditTokenTypeModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-token-type-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-token-type-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-token-type-modal.component.scss */
        "./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.scss"))["default"]]
      })], EditTokenTypeModalComponent);
      /***/
    },

    /***/
    "./src/app/admin/token-type/token-types-list/token-types-list-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/admin/token-type/token-types-list/token-types-list-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: TokenTypesListPageRoutingModule */

    /***/
    function srcAppAdminTokenTypeTokenTypesListTokenTypesListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenTypesListPageRoutingModule", function () {
        return TokenTypesListPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _token_types_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./token-types-list.page */
      "./src/app/admin/token-type/token-types-list/token-types-list.page.ts");

      var routes = [{
        path: '',
        component: _token_types_list_page__WEBPACK_IMPORTED_MODULE_3__["TokenTypesListPage"]
      }];

      var TokenTypesListPageRoutingModule = function TokenTypesListPageRoutingModule() {
        _classCallCheck(this, TokenTypesListPageRoutingModule);
      };

      TokenTypesListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TokenTypesListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admin/token-type/token-types-list/token-types-list.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/admin/token-type/token-types-list/token-types-list.module.ts ***!
      \******************************************************************************/

    /*! exports provided: TokenTypesListPageModule */

    /***/
    function srcAppAdminTokenTypeTokenTypesListTokenTypesListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenTypesListPageModule", function () {
        return TokenTypesListPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _token_types_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./token-types-list-routing.module */
      "./src/app/admin/token-type/token-types-list/token-types-list-routing.module.ts");
      /* harmony import */


      var _token_types_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./token-types-list.page */
      "./src/app/admin/token-type/token-types-list/token-types-list.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var _add_token_type_modal_add_token_type_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../add-token-type-modal/add-token-type-modal.component */
      "./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.ts");
      /* harmony import */


      var _edit_token_type_modal_edit_token_type_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../edit-token-type-modal/edit-token-type-modal.component */
      "./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.ts");

      var TokenTypesListPageModule = function TokenTypesListPageModule() {
        _classCallCheck(this, TokenTypesListPageModule);
      };

      TokenTypesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _token_types_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TokenTypesListPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_token_types_list_page__WEBPACK_IMPORTED_MODULE_6__["TokenTypesListPage"], _add_token_type_modal_add_token_type_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddTokenTypeModalComponent"], _edit_token_type_modal_edit_token_type_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditTokenTypeModalComponent"]]
      })], TokenTypesListPageModule);
      /***/
    },

    /***/
    "./src/app/admin/token-type/token-types-list/token-types-list.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/admin/token-type/token-types-list/token-types-list.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminTokenTypeTokenTypesListTokenTypesListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table-grid .head {\n  background: #a1a1a1;\n  border-radius: 35px;\n  margin-bottom: 20px;\n  height: 45px;\n  padding-top: 12px;\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .head {\n    display: none !important;\n  }\n}\n.table-grid .head .zeropadding {\n  padding-left: 6px;\n}\n@media only screen and (max-width: 991px) {\n  .table-grid .head .zeropadding {\n    padding-left: 29px;\n  }\n}\n.table-grid .head .tokentypepadding {\n  padding-left: 69px;\n}\n@media only screen and (max-width: 1165px) {\n  .table-grid .head .tokentypepadding {\n    padding-left: 50px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .table-grid .head .tokentypepadding {\n    padding-left: 40px;\n  }\n}\n@media only screen and (max-width: 941px) {\n  .table-grid .head .tokentypepadding {\n    padding-left: 46px;\n  }\n}\n.table-grid .head .th {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n@media only screen and (max-width: 1212px) {\n  .table-grid .head .th {\n    font-size: 16px;\n  }\n}\n.table-grid .head .th .mat-sort-header-container.mat-focus-indicator.ng-tns-c145-0 {\n  display: block;\n}\n.table-grid .head .th span {\n  margin: auto;\n}\n.table-grid .body {\n  background: #ffffff;\n  border-radius: 18px;\n  margin-bottom: 20px;\n  min-height: 59px;\n  padding-top: 7px;\n  box-shadow: 0px 2px 12px #bfbfbf;\n  height: auto;\n  cursor: pointer;\n}\n.table-grid .body #cross {\n  display: none;\n  color: white;\n  background: #ba1e24;\n  border-radius: 50%;\n  margin-top: -8px;\n  font-size: 18px;\n  position: absolute;\n  right: 0;\n}\n.table-grid .body .iconimg {\n  padding: 0px;\n  margin-left: 0px;\n  text-align: center;\n}\n.table-grid .body .iconimg ion-icon {\n  font-size: 15px;\n  margin-top: 4px;\n  color: #67bebb;\n}\n.table-grid .body .iconimg img {\n  height: auto;\n  width: 35px;\n  margin: auto;\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .body .content_col {\n    border-left: dashed 1px #d2d2d2;\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 768px) and (max-width: 330px) {\n  .table-grid .body .content_col {\n    border-left: none;\n    margin-left: -14px;\n  }\n}\n.table-grid .body .td {\n  color: #4a4a4ac2;\n  font-weight: 400;\n  font-size: 16px;\n  text-transform: capitalize;\n  padding-top: 10px;\n  padding-left: 0px;\n}\n@media only screen and (max-width: 1212px) {\n  .table-grid .body .td {\n    font-size: 15px;\n  }\n}\n.table-grid .body .td .priorityimg {\n  width: 20px;\n  margin-right: 9px;\n}\n.table-grid .body .firsttd {\n  padding-left: 60px;\n}\n@media only screen and (max-width: 1165px) {\n  .table-grid .body .firsttd {\n    padding-left: 40px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .table-grid .body .firsttd {\n    padding-left: 29px;\n  }\n}\n@media only screen and (max-width: 941px) {\n  .table-grid .body .firsttd {\n    padding-left: 35px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .body .firsttd {\n    padding-left: 11px;\n    font-size: 15px;\n    font-weight: 500;\n    margin-top: -10px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .table-grid .body .firsttd {\n    font-weight: 400;\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 405px) {\n  .table-grid .body .firsttd {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .table-grid .body .secondtd {\n    padding-left: 25px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .body .secondtd {\n    padding-left: 12px;\n    font-size: 14px;\n    margin: 0 0 0 0;\n    padding-top: 8px;\n    font-weight: 300;\n    text-align: justify;\n  }\n}\n@media only screen and (max-width: 405px) {\n  .table-grid .body .secondtd {\n    padding-right: 6px;\n    font-size: 12px;\n  }\n}\n.table-grid .body .thirdtd {\n  padding-left: 21px;\n}\n@media only screen and (max-width: 767px) {\n  .table-grid .body .thirdtd {\n    padding-left: 11px;\n    font-weight: 300;\n    font-size: 13px;\n    padding-top: 6px;\n  }\n}\n@media only screen and (max-width: 405px) {\n  .table-grid .body .thirdtd {\n    font-size: 12px;\n  }\n}\n.table-grid .body:hover {\n  box-shadow: 0px 7px 26px #a7a7a7d1;\n}\n.table-grid .body:hover #cross {\n  display: block;\n}\nion-header ion-toolbar:first-of-type {\n  margin-top: -29px;\n}\nion-header ion-toolbar:first-of-type #menu {\n  font-size: 25px;\n  padding-left: 11px;\n  padding-top: 14px;\n  cursor: pointer;\n}\nion-header ion-toolbar:first-of-type ion-badge {\n  position: relative;\n  top: -17px;\n  left: -17px;\n  font-size: 11px;\n  background: red;\n  border-radius: 50%;\n  font-weight: 300;\n  padding: 4px;\n}\n.list-pages {\n  padding-left: 35px;\n  padding-right: 35px;\n}\n.list-pages .linkcol {\n  font-size: 17px;\n  margin-top: -55px;\n  cursor: pointer;\n}\n.list-pages .linkcol #home {\n  padding-right: 10px;\n  color: #68bfbb;\n}\n@media only screen and (max-width: 540px) {\n  .list-pages .linkcol #home {\n    padding-right: 5px;\n  }\n}\n.list-pages .linkcol #about {\n  color: #4a4a4ac2;\n  padding-left: 10px;\n}\n@media only screen and (max-width: 540px) {\n  .list-pages .linkcol #about {\n    padding-right: 6px;\n  }\n}\n.sucessMessage {\n  position: relative;\n  top: -5px;\n  left: 9px;\n}\n#successMsg {\n  box-shadow: 0px 1px 7px #15572461;\n}\n.alert-success {\n  position: relative;\n  top: 53px;\n  width: 1388px;\n  margin: auto;\n}\n.ionFabbtn {\n  display: none;\n}\n@media only screen and (max-width: 991px) {\n  .ionFabbtn {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdG9rZW4tdHlwZS90b2tlbi10eXBlcy1saXN0L3Rva2VuLXR5cGVzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdDO0VBQ0MsbUJBQUE7RUFDRyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHRTtFQU5EO0lBT0Usd0JBQUE7RUFBRDtBQUNGO0FBQ1E7RUFDSSxpQkFBQTtBQUNaO0FBQUc7RUFGSztJQUdKLGtCQUFBO0VBR0Y7QUFDRjtBQUNFO0VBQ0Msa0JBQUE7QUFDSDtBQUFHO0VBRkQ7SUFHRSxrQkFBQTtFQUdGO0FBQ0Y7QUFERztFQU5EO0lBT0Usa0JBQUE7RUFJRjtBQUNGO0FBSEc7RUFURDtJQVVFLGtCQUFBO0VBTUY7QUFDRjtBQUhFO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBS047QUFKWTtFQUxWO0lBTUUsZUFBQTtFQU9GO0FBQ0Y7QUFMTTtFQUNDLGNBQUE7QUFPUDtBQUpNO0VBQ0MsWUFBQTtBQU1QO0FBREM7RUFDQyxtQkFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0VBQ04sZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdGO0FBRkU7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFJSDtBQUZFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJSDtBQUhHO0VBQ0MsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBS0o7QUFIRztFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlKO0FBQUU7RUFDQztJQUNDLCtCQUFBO0lBQ0Esa0JBQUE7RUFFRjtBQUNGO0FBRkk7RUFIRDtJQUlFLGlCQUFBO0lBQ0Esa0JBQUE7RUFLSDtBQUNGO0FBREU7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdIO0FBRkc7RUFQRDtJQVFFLGVBQUE7RUFLRjtBQUNGO0FBSEc7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQURFO0VBQ0Msa0JBQUE7QUFHSDtBQUZHO0VBRkQ7SUFHRSxrQkFBQTtFQUtGO0FBQ0Y7QUFKRztFQUxEO0lBTUUsa0JBQUE7RUFPRjtBQUNGO0FBTkc7RUFSRDtJQVNFLGtCQUFBO0VBU0Y7QUFDRjtBQVJHO0VBWEQ7SUFZRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBV0Y7QUFDRjtBQVRHO0VBbEJEO0lBbUJFLGdCQUFBO0lBQ0EsZUFBQTtFQVlGO0FBQ0Y7QUFYRztFQXRCRDtJQXVCRSxlQUFBO0VBY0Y7QUFDRjtBQVZHO0VBRkQ7SUFHRSxrQkFBQTtFQWFGO0FBQ0Y7QUFaRztFQUxEO0lBTUUsa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQWVGO0FBQ0Y7QUFkRztFQWJEO0lBY2Msa0JBQUE7SUFDWixlQUFBO0VBaUJGO0FBQ0Y7QUFmRTtFQUNDLGtCQUFBO0FBaUJIO0FBaEJHO0VBRkQ7SUFHRSxrQkFBQTtJQUNZLGdCQUFBO0lBQ1osZUFBQTtJQUNBLGdCQUFBO0VBbUJGO0FBQ0Y7QUFsQkc7RUFSRDtJQVNFLGVBQUE7RUFxQkY7QUFDRjtBQWxCQztFQUNDLGtDQUFBO0FBb0JGO0FBbkJFO0VBQ0MsY0FBQTtBQXFCSDtBQWhCQTtFQUdDLGlCQUFBO0FBaUJEO0FBaEJDO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBa0JGO0FBZkM7RUFDTyxrQkFBQTtFQUNILFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWlCTDtBQWJBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQWdCRDtBQWZDO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWlCRjtBQWhCRTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQWtCSDtBQWpCRztFQUhEO0lBSUUsa0JBQUE7RUFvQkY7QUFDRjtBQWxCRTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUFvQkg7QUFuQkc7RUFIRDtJQUlFLGtCQUFBO0VBc0JGO0FBQ0Y7QUFqQkE7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxTQUFBO0FBb0JKO0FBakJBO0VBQ0MsaUNBQUE7QUFvQkQ7QUFqQkE7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQW9CSjtBQWpCQTtFQUNDLGFBQUE7QUFvQkQ7QUFuQkM7RUFGRDtJQUdFLGNBQUE7RUFzQkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Rva2VuLXR5cGUvdG9rZW4tdHlwZXMtbGlzdC90b2tlbi10eXBlcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1ncmlke1xyXG5cdFxyXG5cclxuXHQuaGVhZHtcclxuXHRcdGJhY2tncm91bmQ6ICNhMWExYTE7XHJcblx0ICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHQgICAgXHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHRcdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG4gICAgICAgIC56ZXJvcGFkZGluZ3tcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMjlweDtcclxuXHRcdFx0fVxyXG5cclxuICAgICAgICB9XHJcblx0XHRcclxuXHRcdC50b2tlbnR5cGVwYWRkaW5ne1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDY5cHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMTY1cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTQxcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDQ2cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LnRoe1xyXG5cdFx0ICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHQgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cdFx0ICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTIxMnB4KSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0ICAgIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyLm1hdC1mb2N1cy1pbmRpY2F0b3IubmctdG5zLWMxNDUtMCB7XHJcblx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHQvLyBtYXJnaW46IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0ICAgIHNwYW57XHJcblx0XHQgICAgXHRtYXJnaW46YXV0bztcclxuXHRcdFx0XHQvLyBtYXJnaW4tbGVmdDogLTM2MXB4ICFpbXBvcnRhbnQ7XHJcblx0XHQgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYm9keXtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0ICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHQgICAgXHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTlweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMnB4ICNiZmJmYmY7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHQjY3Jvc3N7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmExZTI0O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdG1hcmdpbi10b3A6IC04cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdH1cclxuXHRcdC5pY29uaW1ne1xyXG5cdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0Zm9udC1zaXplOjE1cHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjNjdiZWJiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGltZ3tcclxuXHRcdFxyXG5cdFx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHRcdFx0LmNvbnRlbnRfY29se1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiBkYXNoZWQgMXB4ICNkMmQyZDI7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAzMzBweCkge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTE0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQgfVxyXG5cdFx0ICAgfVxyXG5cdFx0XHJcblx0XHQudGR7XHJcblx0XHRcdGNvbG9yOiAjNGE0YTRhYzI7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDEyMTJweCkge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0LnByaW9yaXR5aW1ne1xyXG5cdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogOXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5maXJzdHRke1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMTY1cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyOXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5NDFweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMzVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDExcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcdFx0XHRcdFxyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNDA1cHgpIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHQgICAgIH1cclxuXHRcdH1cclxuXHRcdC5zZWNvbmR0ZHtcclxuXHRcdFx0Ly8gcGFkZGluZy1yaWdodDogNTVweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMTJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMCAwO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiA4cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA0MDVweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdCAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHQudGhpcmR0ZHtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAyMXB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogNnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA0MDVweCkge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdCAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYm9keTpob3ZlcntcclxuXHRcdGJveC1zaGFkb3c6IDBweCA3cHggMjZweCAjYTdhN2E3ZDE7XHJcblx0XHQjY3Jvc3N7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59XHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBcclxuICAgIC8vIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi10b3A6IC0yOXB4O1xyXG5cdCNtZW51e1xyXG5cdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMXB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDE0cHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0IH1cclxuXHRcclxuXHRpb24tYmFkZ2V7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCAgICB0b3A6IC0xN3B4O1xyXG5cdCAgICBsZWZ0OiAtMTdweDtcclxuXHQgICAgZm9udC1zaXplOiAxMXB4O1xyXG5cdCAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcblx0ICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHQgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHQgICAgcGFkZGluZzogNHB4O1xyXG5cdH1cclxuXHRcclxufVxyXG4ubGlzdC1wYWdlc3tcclxuXHRwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcblx0cGFkZGluZy1yaWdodDogMzVweDtcclxuXHQubGlua2NvbHtcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdG1hcmdpbi10b3A6IC01NXB4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0I2hvbWV7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdGNvbG9yOiByZ2IoMTA0LDE5MSwxODcpO1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNTQwcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCNhYm91dHtcclxuXHRcdFx0Y29sb3I6ICM0YTRhNGFjMjtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNTQwcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zdWNlc3NNZXNzYWdle1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTVweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuI3N1Y2Nlc3NNc2d7XHJcblx0Ym94LXNoYWRvdzogMHB4IDFweCA3cHggIzE1NTcyNDYxO1xyXG59XHJcblxyXG4uYWxlcnQtc3VjY2Vzc3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUzcHg7XHJcbiAgICB3aWR0aDogMTM4OHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaW9uRmFiYnRue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/admin/token-type/token-types-list/token-types-list.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/token-type/token-types-list/token-types-list.page.ts ***!
      \****************************************************************************/

    /*! exports provided: TokenTypesListPage */

    /***/
    function srcAppAdminTokenTypeTokenTypesListTokenTypesListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenTypesListPage", function () {
        return TokenTypesListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_main_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/main-services.service */
      "./src/app/services/main-services.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_token_type_modal_add_token_type_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-token-type-modal/add-token-type-modal.component */
      "./src/app/admin/token-type/add-token-type-modal/add-token-type-modal.component.ts");
      /* harmony import */


      var _edit_token_type_modal_edit_token_type_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../edit-token-type-modal/edit-token-type-modal.component */
      "./src/app/admin/token-type/edit-token-type-modal/edit-token-type-modal.component.ts");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");

      var TokenTypesListPage = /*#__PURE__*/function () {
        function TokenTypesListPage(main_services, router, modalController, alertCtrl, toastr, loader) {
          _classCallCheck(this, TokenTypesListPage);

          this.main_services = main_services;
          this.router = router;
          this.modalController = modalController;
          this.alertCtrl = alertCtrl;
          this.toastr = toastr;
          this.loader = loader;
          this.tokenTypesList = [];
          this.pageCounts = Array(); // Will Push total no. of pages in this array

          this.showMenu = false;
          this.showMenuMob = true;
        }

        _createClass(TokenTypesListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "manuToggle",
          value: function manuToggle() {
            this.showMenu = !this.showMenu;

            if (this.showMenu == false) {
              if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 992) {
                this.rightSize = 12;
              } else if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 1200) {
                this.leftSize = 3;
                this.rightSize = 9;
              } else {
                this.leftSize = 2;
                this.rightSize = 10;
              }

              jquery__WEBPACK_IMPORTED_MODULE_7___default()('#firstdiv').removeClass("small-aside");
              jquery__WEBPACK_IMPORTED_MODULE_7___default()('#seconddiv').removeClass("big-right-side");
            } else {
              if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 992) {
                this.rightSize = 12;
              } else if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 1200) {
                this.leftSize = 1;
                this.rightSize = 11;
              } else {
                this.leftSize = 1;
                this.rightSize = 11;
              }

              jquery__WEBPACK_IMPORTED_MODULE_7___default()('#firstdiv').addClass("small-aside");
              jquery__WEBPACK_IMPORTED_MODULE_7___default()('#seconddiv').addClass("big-right-side");
            }
          }
        }, {
          key: "hide_mobile_menu",
          value: function hide_mobile_menu() {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#close-show-991').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_7___default()('#firstdiv').removeClass("small-aside");
            });
          }
        }, {
          key: "mobileManuToggle",
          value: function mobileManuToggle() {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#firstdiv').addClass("small-aside"); // this.showMenuMob = !this.showMenuMob;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 992) {
              this.rightSize = 12;
            } else if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 1367) {
              this.leftSize = 3;
              this.rightSize = 9;
            } else {
              this.leftSize = 2;
              this.rightSize = 10;
            }

            this.pageCounts = [];
            this.tokenTypesList = [];
            this.main_services.getTokentypesList().subscribe(function (result) {
              _this4.pageCount = result['pageCount'];
              _this4.page = result['page'];

              for (var i = 1; i <= result['pageCount']; i++) {
                _this4.pageCounts.push(i);
              }

              _this4.tokenTypesList = result['tokenTypes'];
            });
          } // Function to switch b/w pages

        }, {
          key: "paginationData",
          value: function paginationData(pageNo) {
            var _this5 = this;

            this.tokenTypesList = [];
            this.main_services.tokenTypePagination(pageNo).subscribe(function (data) {
              _this5.page = data['page'];
              _this5.tokenTypesList = data['tokenTypes'];
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal, _yield$modal$onWillDi, result, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _add_token_type_modal_add_token_type_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddTokenTypeModalComponent"],
                        cssClass: 'my-token-type-custom-class'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      _context.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi = _context.sent;
                      result = _yield$modal$onWillDi.data;
                      role = _yield$modal$onWillDi.role;
                      //  const {data:error } = await modal.onWillDismiss();
                      this.sucmsg = result['message'];

                      if (result['success'] == true) {
                        this.toastr.success(this.sucmsg);
                        this.ionViewWillEnter();
                      }

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openEditModal",
          value: function openEditModal(list) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, _yield$modal$onWillDi2, result, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _edit_token_type_modal_edit_token_type_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditTokenTypeModalComponent"],
                        componentProps: {
                          _id: list._id
                        },
                        cssClass: 'my-edit-token-type-class'
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      _context2.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi2 = _context2.sent;
                      result = _yield$modal$onWillDi2.data;
                      role = _yield$modal$onWillDi2.role;
                      this.sucmsg = result['message'];

                      if (result['success'] == true) {
                        this.toastr.success(this.sucmsg);
                        this.ionViewWillEnter();
                      }

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-alert-class',
                        subHeader: 'Do you really want to delete it ?',
                        buttons: [{
                          text: 'Cancel'
                        }, {
                          text: 'yes',
                          handler: function handler() {
                            _this6.delete_tokentype(id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "delete_tokentype",
          value: function delete_tokentype(id) {
            var _this7 = this;

            this.main_services.deleteTokenType(id).subscribe(function (data) {
              _this7.sucmsg = data['message'];

              _this7.toastr.success(_this7.sucmsg);

              _this7.ionViewWillEnter();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return TokenTypesListPage;
      }();

      TokenTypesListPage.ctorParameters = function () {
        return [{
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
        }];
      };

      TokenTypesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-token-types-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./token-types-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/token-type/token-types-list/token-types-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./token-types-list.page.scss */
        "./src/app/admin/token-type/token-types-list/token-types-list.page.scss"))["default"]]
      })], TokenTypesListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-token-type-token-types-list-token-types-list-module-es5.js.map