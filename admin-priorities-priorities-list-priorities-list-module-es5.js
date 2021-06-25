(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-priorities-priorities-list-priorities-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPrioritiesAddPriorityModalAddPriorityModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"add-modal-content\">\r\n  <ion-grid class=\"margin-adjustable\">\r\n    <ion-icon class=\"close-modal\" name='close-circle-outline'  (click)='dismiss()'></ion-icon> \r\n    <ion-row>\r\n      <div id=\"errors\" style=\"display: none;\">\r\n        <ion-icon name=\"alert-circle\" style=\"font-size: 25px;\"></ion-icon>\r\n        <span class=\"errorMsgText\">{{errMsg}}!</span>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h1 class=\"new-branch-heading\">\r\n          <span>\r\n            New Priority\r\n          </span> \r\n        </h1>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"fields-row\">\r\n      <ion-col>\r\n          <form class=\"add-branch-form\" (ngSubmit)=\"submit()\" >\r\n          <ion-item class=\"modal-input-field\">\r\n            <ion-input class=\"placeholder-text name-input\"  type=\"text\" (change)=\"priority_name($event)\" placeholder=\"Name\"></ion-input>\r\n            </ion-item>\r\n          <ion-item class=\"modal-input-field\"> \r\n            <ion-input class=\"placeholder-text name-input\"  type=\"text\" (change)=\"timeline($event)\" placeholder=\"Duration in Hours\"></ion-input>\r\n          </ion-item>\r\n          <ion-button class=\"add-branch-btn\" ion-button type=\"submit\" block >Submit</ion-button>  \r\n          </form>\r\n      </ion-col> \r\n    </ion-row>\r\n    </ion-grid>\r\n  </ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPrioritiesEditPriorityModalEditPriorityModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover-spin\"  *ngIf=\"loader.isLoading | async\">\r\n  <ion-spinner name=\"lines\" class=\"profile-modal-spinner\"></ion-spinner>\r\n</div>\r\n<ion-content class=\"edit-modal-content\">\r\n  <ion-grid>\r\n    <ion-icon class=\"close-modal\" name='close-circle-outline'  (click)='dismiss()'></ion-icon> \r\n    <ion-row>\r\n      <div id=\"errors\" style=\"display: none;\">\r\n        <ion-icon name=\"alert-circle\" style=\"font-size: 25px;\"></ion-icon>\r\n        <span class=\"errorMsgText\">{{errMsg}}!</span>\r\n      </div>\r\n    </ion-row>\r\n    <form class=\"edit-form\"  [formGroup]=\"editPriorityForm\">\r\n      <ion-item lines=\"{{line_value_name}}\">\r\n        <ion-label position=\"stacked\">Name</ion-label>\r\n        <ion-input type=\"text\"  formControlName=\"name\"  [readonly]=\"valuebranchName\" (change)=\"InsertPname($event)\"></ion-input>\r\n        <img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil\" (click)=\"editBranchName()\">\r\n        <img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t*ngIf=\"pnameRight\" class=\"edit-pencil-icon token-edit-checked-icon\">\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"{{line_value_desc}}\">\r\n        <ion-label position=\"stacked\">Duration in Hours</ion-label>\r\n        <!-- <p>adjfguasg fayhesgdrfywetgr urywqt ruywetgqru yetgry7 uwetr7qwt ruqtgdryqatr7qwe uwaery7t</p> -->\r\n        <ion-input type=\"text\"  formControlName=\"time_line\"  [readonly]=\"valuebranchDesc\" (change)=\"Inserttimeline($event)\"></ion-input>\r\n        <img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon desc-edit-pencil-icon edit-modal-pencil\" (click)=\"editBranchDesc()\">\r\n        <img src=\"../../assets/images/icons/checked-resized.png\"\r\n        *ngIf=\"timelineRight\" class=\"edit-pencil-icon token-edit-checked-icon\">\r\n      </ion-item>\r\n      <div class=\"col text-center update-btn\">\r\n        <ion-button ion-button *ngIf = \"showBtn\" (click)=\"updatePriority(editPriorityForm.value)\" type=\"button\" block>Update</ion-button>\r\n      </div>\r\n</form>\r\n</ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/priorities-list/priorities-list.page.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/priorities-list/priorities-list.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPrioritiesPrioritiesListPrioritiesListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button class=\"ionFabbtn\" (click)=\"openModal()\" size=\"small\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n<div class=\"cover-spin\"  *ngIf=\"loader.isLoading | async\">\r\n  <ion-spinner name=\"lines\" class=\"Loading-spinner\"></ion-spinner>\r\n</div>\r\n\r\n<div class=\"alert alert-success\" [ngStyle]=\"{'display': showMessage ? 'block' : 'none'}\" id=\"successMsg\" role=\"alert\">\r\n  <!-- {{sucmsg}} -->\r\n  <ion-icon style=\"font-size: 22px;\" name=\"checkmark-circle\"></ion-icon>\r\n  <span class=\"sucessMessage\">{{sucmsg}} !</span>\r\n</div>\r\n<ion-grid class=\"main-grid list-pages\">\r\n  <ion-row>\r\n    <!-- <ion-col class=\"linkcol\" size=\"12\" align=\"right\"><span id=\"home\" routerLink=\"/admin/home\">Home</span>/<span\r\n        id=\"about\">Priorities</span>\r\n      </ion-col> -->\r\n    <ion-col size=\"12\" align=\"center\" class=\"page-heading-col\">\r\n\r\n      <h1 class=\"page-heading\">\r\n        <span>\r\n          Priorities\r\n        </span>\r\n      </h1>\r\n    </ion-col>\r\n    <ion-col size-lg=\"2\" size-md=\"12\" class=\"search-col\">\r\n      <!-- <ion-item>  -->\r\n      <ion-input [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\" Search \"\r\n        class=\"search\" ></ion-input>\r\n      <ion-icon name=\"search-outline\" class=\"d-lg-none d-md-block search-icon\"></ion-icon>\r\n      \r\n      <!-- </ion-item> -->\r\n    </ion-col>\r\n    <ion-col size=\"10\" align=\"right\" class=\"add-token-col\">\r\n      <ion-button color=\"primary\" class=\"primary-btn\" (click)=\"openModal()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon> New Priority\r\n      </ion-button>\r\n      \r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col class=\"table-grid \" matSort (matSortChange)=\"sortData($event)\">\r\n      <ion-row class=\"head\">\r\n        <div class=\"col col-3 th branchpadding\" align=\"left\">Name </div>\r\n        <div class=\"col col-9 th secondth\" align=\"left\">Duration</div>\r\n\r\n      </ion-row>\r\n      <!-- <ion-row *ngIf=\"sortedData.length == 0\"> -->\r\n        <!-- <ion-row>\r\n        <ion-col>\t\r\n          <p class=\"text-danger\" align=\"center\">\r\n            No Records Found\r\n          </p>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n      <!-- <ion-row class=\"body\"\r\n        *ngFor=\"let list of sortedData  | filter:searchText | paginate: { itemsPerPage: 10, currentPage: p }\"\r\n        routerLink=\"/edit-branch/{{list._id}}\"> -->\r\n      <!-- <ion-row class=\"body\"\r\n        *ngFor=\"let list of sortedData\" > -->\r\n        <ion-row class=\"body\" *ngFor=\"let list of list | filter:searchText\">\r\n        <ion-col>\r\n          <ion-row (click)=\"openeditModal(list)\">\r\n            <ion-col size-md=\"1\" size-sm=\"1\" size-xs=\"2\" class=\"ion-hide-md-up iconimg\">\r\n              <ion-icon name=\"list\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col class=\"content_col\">\r\n              <ion-row>\r\n                <ion-col size-lg=\"3\" size-md=\"3\" size-xs=\"11\" class=\"td firsttd\">\r\n                {{list.name}}\r\n                </ion-col>\r\n                <ion-col size-lg=\"8\" size-md=\"8\" size-xs=\"11\" class=\"td secondtd\">\r\n                  <ion-badge class=\"timeline_badge\" id=\"badge\" color=\"primary\"><span style=\"font-weight: 550;\">{{list.time_line}}</span></ion-badge>\r\n                  </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <div class=\"\" id=\"crossicon\" (click)=\"presentAlert(list._id)\">\r\n          <ion-icon id=\"cross\" name=\"close-outline\"></ion-icon>\r\n        </div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n";
      /***/
    },

    /***/
    "./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminPrioritiesAddPriorityModalAddPriorityModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add-modal-content {\n  --background: #ffffff !important;\n}\n.add-modal-content .margin-adjustable .add-branch-form {\n  margin-left: 28px;\n  margin-right: 28px;\n}\n.add-modal-content .margin-adjustable .add-branch-form ion-button {\n  width: 100%;\n  --border-radius: 25px;\n  background-color: transparent;\n  border-color: transparent;\n  border: transparent;\n}\n.add-modal-content .margin-adjustable .add-branch-form .name-input {\n  position: relative;\n  top: -16px;\n}\n.add-modal-content .margin-adjustable .add-branch-form .placeholder-text {\n  --placeholder-color:#787878 !important;\n  padding-bottom: 5px !important;\n  font-size: 14px;\n  height: 80px;\n}\n.add-modal-content .margin-adjustable .add-branch-form .textarea-height {\n  height: 80px !important;\n  border-radius: 20px !important;\n}\n.add-modal-content .margin-adjustable .new-branch-heading {\n  text-align: center;\n}\n.add-modal-content .margin-adjustable .new-branch-heading span {\n  color: #6c6c6c;\n  border-bottom: 2px solid #65a2ad;\n  padding: 4px 25px;\n  font-size: 20px;\n  font-weight: 500;\n}\n.add-modal-content .margin-adjustable .modal-input-field {\n  border-radius: 45px;\n  --highlight-background: transparent;\n  box-shadow: 0px 0px 8px #68bfbb;\n  margin: 6px 0px 20px;\n  height: 40px;\n}\n.add-modal-content .margin-adjustable .fields-row {\n  margin-top: 16px;\n}\n.add-modal-content #errors {\n  margin: auto;\n  color: #a70000;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.add-modal-content .errorMsgText {\n  position: relative;\n  top: -6px;\n  left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJpb3JpdGllcy9hZGQtcHJpb3JpdHktbW9kYWwvYWRkLXByaW9yaXR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0NBQUE7QUFBSjtBQUdRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURaO0FBRVk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBaEI7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUFoQjtBQUVZO0VBQ0ksc0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQWhCO0FBRVk7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FBQWhCO0FBZVE7RUFDSSxrQkFBQTtBQWJaO0FBY1k7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVpoQjtBQWdCUTtFQUNJLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQWRaO0FBZ0JRO0VBQ0ksZ0JBQUE7QUFkWjtBQW1CSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBakJSO0FBbUJJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWpCUiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ByaW9yaXRpZXMvYWRkLXByaW9yaXR5LW1vZGFsL2FkZC1wcmlvcml0eS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWRkLW1vZGFsLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHJcbiAgICAubWFyZ2luLWFkanVzdGFibGV7XHJcbiAgICAgICAgLmFkZC1icmFuY2gtZm9ybXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbnsgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lLWlucHV0e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICAgICAgICAgIHRvcDotMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGxhY2Vob2xkZXItdGV4dHtcclxuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6Izc4Nzg3OCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjgwcHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0YXJlYS1oZWlnaHR7ICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDo4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaW9uLWlucHV0eyAgXHJcbiAgICAgICAgICAgIC8vICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM3ODc4NzggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgICAgIC8vICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM3ODc4NzggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAubmV3LWJyYW5jaC1oZWFkaW5ne1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZjNmM2YztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjVhMmFkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsLWlucHV0LWZpZWxke1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzY4YmZiYjtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkcy1yb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICNlcnJvcnN7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiAjYTcwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuZXJyb3JNc2dUZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddPriorityModalComponent */

    /***/
    function srcAppAdminPrioritiesAddPriorityModalAddPriorityModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPriorityModalComponent", function () {
        return AddPriorityModalComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

      var AddPriorityModalComponent = /*#__PURE__*/function () {
        function AddPriorityModalComponent(priorityData, modalController) {
          _classCallCheck(this, AddPriorityModalComponent);

          this.priorityData = priorityData;
          this.modalController = modalController;
        }

        _createClass(AddPriorityModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "priority_name",
          value: function priority_name(e) {
            this.priorityName = e.target.value;
          }
        }, {
          key: "timeline",
          value: function timeline(e) {
            this.duration = e.target.value;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var addPriority = {
              name: this.priorityName,
              time_line: this.duration
            };
            this.priorityData.addPriorities(addPriority).subscribe(function (result) {
              _this.modalController.dismiss(result, 'success');
            }, function (error) {
              console.log(error);
              _this.errMsg = error['error']['error']['name'];

              if (_this.errMsg) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#errors').fadeIn(1000);
              }
            });
          }
        }]);

        return AddPriorityModalComponent;
      }();

      AddPriorityModalComponent.ctorParameters = function () {
        return [{
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      AddPriorityModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-priority-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-priority-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-priority-modal.component.scss */
        "./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.scss"))["default"]]
      })], AddPriorityModalComponent);
      /***/
    },

    /***/
    "./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminPrioritiesEditPriorityModalEditPriorityModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".edit-modal-content {\n  --background: #ffffff !important;\n}\n.edit-modal-content .edit-form {\n  margin-top: 33px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.edit-modal-content .edit-form ion-item {\n  --border-width: 0 0 0px 0;\n}\n.edit-modal-content .edit-form ion-item ion-label {\n  font-size: 22px;\n  color: #343434;\n  font-weight: 400;\n}\n.edit-modal-content .edit-form ion-item ion-input {\n  padding-top: 8px !important;\n  color: #787878;\n}\n.edit-modal-content .edit-form ion-item ion-textarea {\n  color: #787878;\n}\n.edit-modal-content .edit-form ion-item ion-textarea textarea {\n  height: 90px;\n}\n.edit-modal-content .edit-form .desc {\n  margin-top: 18px;\n  height: auto;\n}\n.edit-modal-content .edit-form .desc .edit-modal-pencil {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  bottom: 22px;\n  right: 0px;\n  z-index: 9999999;\n  /* border: solid 1px; */\n  padding: 7px;\n  background: #ffffff00;\n}\n.edit-modal-content .edit-form ion-button {\n  --border-radius: 28px;\n  background-color: transparent;\n  border-color: transparent;\n  border: transparent;\n}\n.edit-modal-content .update-btn {\n  margin-top: 35px;\n}\n.edit-modal-content #errors {\n  margin: auto;\n  color: #a70000;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.edit-modal-content .errorMsgText {\n  position: relative;\n  top: -6px;\n  left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJpb3JpdGllcy9lZGl0LXByaW9yaXR5LW1vZGFsL2VkaXQtcHJpb3JpdHktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0kseUJBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUloQjtBQUZnQjtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtBQUlwQjtBQURvQjtFQUVBLGNBQUE7QUFFcEI7QUFBb0I7RUFDSSxZQUFBO0FBRXhCO0FBRVE7RUFDSSxnQkFBQTtFQUVBLFlBQUE7QUFEWjtBQUVpQjtFQUNMLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBWjtBQUdRO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUhaIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcHJpb3JpdGllcy9lZGl0LXByaW9yaXR5LW1vZGFsL2VkaXQtcHJpb3JpdHktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1tb2RhbC1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAuZWRpdC1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMzcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICAgICAgLy8gbWluLWhlaWdodDogMTI3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAuZWRpdC1tb2RhbC1wZW5jaWx7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAyMnB4O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xyXG4gICAgICAgICAgICAvKiBib3JkZXI6IHNvbGlkIDFweDsgKi9cclxuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVwZGF0ZS1idG57XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Vycm9yc3tcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBjb2xvcjogI2E3MDAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVycm9yTXNnVGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: EditPriorityModalComponent */

    /***/
    function srcAppAdminPrioritiesEditPriorityModalEditPriorityModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPriorityModalComponent", function () {
        return EditPriorityModalComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_main_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/main-services.service */
      "./src/app/services/main-services.service.ts");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");

      var EditPriorityModalComponent = /*#__PURE__*/function () {
        function EditPriorityModalComponent(formbuilder, modalController, priorityData, navParams, loader) {
          _classCallCheck(this, EditPriorityModalComponent);

          this.formbuilder = formbuilder;
          this.modalController = modalController;
          this.priorityData = priorityData;
          this.navParams = navParams;
          this.loader = loader;
          this.getId = this.navParams.get('_id');
          this.line_value_name = "none";
          this.valuebranchName = true;
          this.valuebranchDesc = true;
          this.line_value_desc = "none";
          this.pnameRight = false;
          this.timelineRight = false;
          this.editPriorityForm = this.formbuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            time_line: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(EditPriorityModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "editBranchName",
          value: function editBranchName() {
            this.showBtn = true;
            this.line_value_name = "line";
            this.valuebranchName = false;
          }
        }, {
          key: "InsertPname",
          value: function InsertPname() {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('.name-edit-pencil-icon').hide();
            this.pnameRight = true;
          }
        }, {
          key: "editBranchDesc",
          value: function editBranchDesc() {
            this.showBtn = true;
            this.line_value_desc = "line";
            this.valuebranchDesc = false;
          }
        }, {
          key: "Inserttimeline",
          value: function Inserttimeline() {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('.desc-edit-pencil-icon').hide();
            this.timelineRight = true;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.priorityData.editPriority(this.getId).subscribe(function (result) {
              _this2.getData = result['priority'];
              _this2.editPriorityForm = _this2.formbuilder.group({
                name: [_this2.getData.name],
                time_line: [_this2.getData.time_line]
              });
            });
          }
        }, {
          key: "updatePriority",
          value: function updatePriority(value) {
            var _this3 = this;

            this.priorityData.updatePriority(this.getId, value).subscribe(function (result) {
              _this3.modalController.dismiss(result, 'success');
            }, function (error) {
              console.log(error);
              _this3.errMsg = error['error']['error'];

              if (_this3.errMsg) {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()('#errors').fadeIn(1000);
              }
            });
          }
        }]);

        return EditPriorityModalComponent;
      }();

      EditPriorityModalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }];
      };

      EditPriorityModalComponent.propDecorators = {
        _id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      EditPriorityModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-priority-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-priority-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-priority-modal.component.scss */
        "./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.scss"))["default"]]
      })], EditPriorityModalComponent);
      /***/
    },

    /***/
    "./src/app/admin/priorities/priorities-list/priorities-list-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/admin/priorities/priorities-list/priorities-list-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: PrioritiesListPageRoutingModule */

    /***/
    function srcAppAdminPrioritiesPrioritiesListPrioritiesListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrioritiesListPageRoutingModule", function () {
        return PrioritiesListPageRoutingModule;
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


      var _priorities_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./priorities-list.page */
      "./src/app/admin/priorities/priorities-list/priorities-list.page.ts");

      var routes = [{
        path: '',
        component: _priorities_list_page__WEBPACK_IMPORTED_MODULE_3__["PrioritiesListPage"]
      }];

      var PrioritiesListPageRoutingModule = function PrioritiesListPageRoutingModule() {
        _classCallCheck(this, PrioritiesListPageRoutingModule);
      };

      PrioritiesListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrioritiesListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admin/priorities/priorities-list/priorities-list.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/priorities/priorities-list/priorities-list.module.ts ***!
      \****************************************************************************/

    /*! exports provided: PrioritiesListPageModule */

    /***/
    function srcAppAdminPrioritiesPrioritiesListPrioritiesListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrioritiesListPageModule", function () {
        return PrioritiesListPageModule;
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


      var _priorities_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./priorities-list-routing.module */
      "./src/app/admin/priorities/priorities-list/priorities-list-routing.module.ts");
      /* harmony import */


      var _priorities_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./priorities-list.page */
      "./src/app/admin/priorities/priorities-list/priorities-list.page.ts");
      /* harmony import */


      var _add_priority_modal_add_priority_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! .././add-priority-modal/add-priority-modal.component */
      "./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.ts");
      /* harmony import */


      var _edit_priority_modal_edit_priority_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! .././edit-priority-modal/edit-priority-modal.component */
      "./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

      var PrioritiesListPageModule = function PrioritiesListPageModule() {
        _classCallCheck(this, PrioritiesListPageModule);
      };

      PrioritiesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _priorities_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrioritiesListPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]],
        declarations: [_priorities_list_page__WEBPACK_IMPORTED_MODULE_6__["PrioritiesListPage"], _add_priority_modal_add_priority_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddPriorityModalComponent"], _edit_priority_modal_edit_priority_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditPriorityModalComponent"]]
      })], PrioritiesListPageModule);
      /***/
    },

    /***/
    "./src/app/admin/priorities/priorities-list/priorities-list.page.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/priorities/priorities-list/priorities-list.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminPrioritiesPrioritiesListPrioritiesListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table-grid .head {\n  background: #a1a1a1;\n  border-radius: 35px;\n  margin-bottom: 20px;\n  height: 45px;\n  padding-top: 12px;\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .head {\n    display: none !important;\n  }\n}\n.table-grid .head .branchpadding {\n  padding-left: 68px;\n}\n@media only screen and (max-width: 1165px) {\n  .table-grid .head .branchpadding {\n    padding-left: 60px;\n  }\n}\n@media only screen and (max-width: 1065px) {\n  .table-grid .head .branchpadding {\n    padding-left: 50px;\n  }\n}\n@media only screen and (max-width: 941px) {\n  .table-grid .head .branchpadding {\n    padding-left: 45px;\n  }\n}\n.table-grid .head .secondth {\n  padding-left: 50px;\n}\n@media only screen and (max-width: 991px) {\n  .table-grid .head .secondth {\n    padding-left: 30px;\n  }\n}\n.table-grid .head .th {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n@media only screen and (max-width: 1212px) {\n  .table-grid .head .th {\n    font-size: 14px;\n  }\n}\n.table-grid .head .th .mat-sort-header-container.mat-focus-indicator.ng-tns-c145-0 {\n  display: block;\n}\n.table-grid .head .th span {\n  margin: auto;\n}\n.table-grid .body {\n  background: #ffffff;\n  border-radius: 18px;\n  margin-bottom: 20px;\n  min-height: 59px;\n  padding-top: 7px;\n  box-shadow: 0px 2px 12px #bfbfbf;\n  height: auto;\n  cursor: pointer;\n}\n.table-grid .body #cross {\n  display: none;\n  color: white;\n  background: #ba1e24;\n  border-radius: 50%;\n  margin-top: -8px;\n  font-size: 18px;\n  position: absolute;\n  right: 0;\n}\n.table-grid .body .iconimg {\n  padding: 0px;\n  margin-left: 0px;\n  text-align: center;\n}\n.table-grid .body .iconimg ion-icon {\n  font-size: 15px;\n  margin-top: 4px;\n  color: #67bebb;\n}\n.table-grid .body .iconimg img {\n  height: auto;\n  width: 35px;\n  margin: auto;\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .body .content_col {\n    border-left: dashed 1px #d2d2d2;\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 768px) and (max-width: 330px) {\n  .table-grid .body .content_col {\n    border-left: none;\n    margin-left: -14px;\n  }\n}\n.table-grid .body .td {\n  color: #4a4a4ac2;\n  font-weight: 400;\n  font-size: 16px;\n  padding-top: 6px;\n  padding-left: 0px;\n}\n@media only screen and (max-width: 1212px) {\n  .table-grid .body .td {\n    font-size: 14px;\n  }\n}\n.table-grid .body .firsttd {\n  padding-left: 60px;\n}\n@media only screen and (max-width: 1165px) {\n  .table-grid .body .firsttd {\n    padding-left: 50px;\n  }\n}\n@media only screen and (max-width: 1065px) {\n  .table-grid .body .firsttd {\n    padding-left: 40px;\n  }\n}\n@media only screen and (max-width: 941px) {\n  .table-grid .body .firsttd {\n    padding-left: 35px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .body .firsttd {\n    padding-left: 11px;\n    font-size: 14px;\n    font-weight: 500;\n    margin-top: -10px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .table-grid .body .firsttd {\n    font-weight: 400;\n    font-size: 14px;\n  }\n}\n.table-grid .body .secondtd {\n  padding-left: 44px;\n}\n@media only screen and (max-width: 991px) {\n  .table-grid .body .secondtd {\n    padding-left: 25px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .table-grid .body .secondtd {\n    padding-left: 12px;\n    font-size: 14px;\n    margin: 0 0 0 0;\n    padding-top: 8px;\n    font-weight: 300;\n    text-align: justify;\n  }\n}\n.table-grid .body:hover {\n  box-shadow: 0px 7px 26px #a7a7a7d1;\n}\n.table-grid .body:hover #cross {\n  display: block;\n}\nion-header ion-toolbar:first-of-type {\n  margin-top: -29px;\n}\nion-header ion-toolbar:first-of-type #menu {\n  font-size: 25px;\n  padding-left: 11px;\n  padding-top: 14px;\n  cursor: pointer;\n}\n.list-pages {\n  padding-left: 35px;\n  padding-right: 35px;\n}\n.list-pages .linkcol {\n  font-size: 17px;\n  margin-top: -55px;\n  cursor: pointer;\n}\n.list-pages .linkcol #home {\n  padding-right: 10px;\n  color: #68bfbb;\n}\n@media only screen and (max-width: 540px) {\n  .list-pages .linkcol #home {\n    padding-right: 5px;\n  }\n}\n.list-pages .linkcol #about {\n  color: #4a4a4ac2;\n  padding-left: 10px;\n}\n@media only screen and (max-width: 540px) {\n  .list-pages .linkcol #about {\n    padding-right: 6px;\n  }\n}\n.sucessMessage {\n  position: relative;\n  top: -5px;\n  left: 9px;\n}\n#successMsg {\n  box-shadow: 0px 1px 7px #15572461;\n}\n.alert-success {\n  position: relative;\n  top: 53px;\n  width: 1388px;\n  margin: auto;\n}\n.timeline_badge {\n  border-radius: 13px;\n  width: 70px;\n  height: 25px;\n  background-color: #f1660a;\n  padding-top: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .timeline_badge {\n    height: 23px;\n    margin-left: -4px;\n  }\n}\n.ionFabbtn {\n  display: none;\n}\n@media only screen and (max-width: 991px) {\n  .ionFabbtn {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJpb3JpdGllcy9wcmlvcml0aWVzLWxpc3QvcHJpb3JpdGllcy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQztFQUNDLG1CQUFBO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNHLFlBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSUU7RUFQRDtJQVFFLHdCQUFBO0VBREQ7QUFDRjtBQUVFO0VBQ0Msa0JBQUE7QUFBSDtBQUNHO0VBRkQ7SUFHRSxrQkFBQTtFQUVGO0FBQ0Y7QUFERztFQUxEO0lBTUUsa0JBQUE7RUFJRjtBQUNGO0FBRkc7RUFURDtJQVVFLGtCQUFBO0VBS0Y7QUFDRjtBQUhFO0VBQ0Msa0JBQUE7QUFLSDtBQUpHO0VBRkQ7SUFHRSxrQkFBQTtFQU9GO0FBQ0Y7QUFKRTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQU1OO0FBSkc7RUFORDtJQU9FLGVBQUE7RUFPRjtBQUNGO0FBSk07RUFDQyxjQUFBO0FBTVA7QUFDTTtFQUNDLFlBQUE7QUFDUDtBQU1DO0VBQ0MsbUJBQUE7RUFDRyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtFQUNOLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBSkg7QUFNRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSkg7QUFLRztFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhKO0FBS0c7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjtBQVFFO0VBQ0E7SUFDQywrQkFBQTtJQUNBLGtCQUFBO0VBTkQ7QUFDRjtBQU1HO0VBSEQ7SUFJYSxpQkFBQTtJQUNULGtCQUFBO0VBSEo7QUFDRjtBQU9FO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FBTkg7QUFPRztFQVBEO0lBUUUsZUFBQTtFQUpGO0FBQ0Y7QUFPRTtFQUNDLGtCQUFBO0FBTEg7QUFNRztFQUZEO0lBR0Usa0JBQUE7RUFIRjtBQUNGO0FBSUc7RUFMRDtJQU1FLGtCQUFBO0VBREY7QUFDRjtBQUVHO0VBUkQ7SUFTRSxrQkFBQTtFQUNGO0FBQ0Y7QUFBRztFQVhEO0lBWUUsa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQUdGO0FBQ0Y7QUFERztFQWxCRDtJQW1CRSxnQkFBQTtJQUNBLGVBQUE7RUFJRjtBQUNGO0FBRFE7RUFDSSxrQkFBQTtBQUdaO0FBRkc7RUFGSztJQUdKLGtCQUFBO0VBS0Y7QUFDRjtBQUpHO0VBTEs7SUFNSixrQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBT0Y7QUFDRjtBQUhDO0VBQ0Msa0NBQUE7QUFLRjtBQUpFO0VBQ0MsY0FBQTtBQU1IO0FBRkE7RUFHQyxpQkFBQTtBQUdEO0FBRkM7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFJRjtBQURBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUlEO0FBSEM7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBS0Y7QUFKRTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQU1IO0FBTEc7RUFIRDtJQUlFLGtCQUFBO0VBUUY7QUFDRjtBQU5FO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQVFIO0FBUEc7RUFIRDtJQUlFLGtCQUFBO0VBVUY7QUFDRjtBQUxBO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsU0FBQTtBQVFKO0FBTEE7RUFDQyxpQ0FBQTtBQVFEO0FBTEE7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVNKO0FBUkM7RUFORDtJQU9DLFlBQUE7SUFDRyxpQkFBQTtFQVdGO0FBQ0Y7QUFSQTtFQUNDLGFBQUE7QUFXRDtBQVZDO0VBRkQ7SUFHRSxjQUFBO0VBYUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ByaW9yaXRpZXMvcHJpb3JpdGllcy1saXN0L3ByaW9yaXRpZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLWdyaWR7XHJcblxyXG5cdC5oZWFke1xyXG5cdFx0YmFja2dyb3VuZDogI2ExYTFhMTtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogMzVweDtcdCAgICBcclxuXHQgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcblxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHRcdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdFx0LmJyYW5jaHBhZGRpbmd7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogNjhweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDExNjVweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNjBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTA2NXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTQxcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5zZWNvbmR0aHtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LnRoe1xyXG5cdFx0ICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHQgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cdFx0ICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0ICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMjEycHgpIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0ICAgIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyLm1hdC1mb2N1cy1pbmRpY2F0b3IubmctdG5zLWMxNDUtMCB7XHJcblx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHQvLyBtYXJnaW46IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcclxuXHRcdCAgIFxyXG5cdFx0ICAgIHNwYW57XHJcblx0XHQgICAgXHRtYXJnaW46YXV0bztcclxuXHRcdFx0XHQvLyBtYXJnaW4tbGVmdDogLTM2MXB4ICFpbXBvcnRhbnQ7XHJcblx0XHQgICAgfVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0XHJcblx0LmJvZHl7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiAxOHB4O1x0ICAgIFxyXG5cdCAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDU5cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggMTJweCAjYmZiZmJmO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHJcblx0XHQjY3Jvc3N7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmExZTI0O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdG1hcmdpbi10b3A6IC04cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdH1cclxuXHRcdC5pY29uaW1ne1xyXG5cdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0Zm9udC1zaXplOjE1cHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjNjdiZWJiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGltZ3tcclxuXHRcdFxyXG5cdFx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHQuY29udGVudF9jb2x7XHJcblx0XHRcdGJvcmRlci1sZWZ0OiBkYXNoZWQgMXB4ICNkMmQyZDI7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDMzMHB4KSB7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG5cdFx0XHQgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcblx0XHRcdH1cclxuXHRcdCB9XHJcblx0ICAgfVxyXG5cdFx0XHJcblx0XHQudGR7XHJcblx0XHRcdGNvbG9yOiAjNGE0YTRhYzI7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0Ly8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdHBhZGRpbmctdG9wOiA2cHg7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMHB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTIxMnB4KSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5maXJzdHRke1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMTY1cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDEwNjVweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTQxcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMXB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHRcdFx0XHRcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICAuc2Vjb25kdGR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMTJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMCAwO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiA4cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcblx0fVxyXG5cdC5ib2R5OmhvdmVye1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDdweCAyNnB4ICNhN2E3YTdkMTtcclxuXHRcdCNjcm9zc3tcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBcclxuICAgIC8vIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi10b3A6IC0yOXB4O1xyXG5cdCNtZW51e1xyXG5cdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMXB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDE0cHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0IH1cclxufVxyXG4ubGlzdC1wYWdlc3tcclxuXHRwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcblx0cGFkZGluZy1yaWdodDogMzVweDtcclxuXHQubGlua2NvbHtcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdG1hcmdpbi10b3A6IC01NXB4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0I2hvbWV7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdGNvbG9yOiByZ2IoMTA0LDE5MSwxODcpO1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNTQwcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCNhYm91dHtcclxuXHRcdFx0Y29sb3I6ICM0YTRhNGFjMjtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNTQwcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zdWNlc3NNZXNzYWdle1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTVweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuI3N1Y2Nlc3NNc2d7XHJcblx0Ym94LXNoYWRvdzogMHB4IDFweCA3cHggIzE1NTcyNDYxO1xyXG59XHJcblxyXG4uYWxlcnQtc3VjY2Vzc3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUzcHg7XHJcbiAgICB3aWR0aDogMTM4OHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50aW1lbGluZV9iYWRnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTY2MGE7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAgNzY3cHgpIHtcclxuXHRoZWlnaHQ6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcclxuXHR9XHJcbn1cclxuXHJcbi5pb25GYWJidG57XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/admin/priorities/priorities-list/priorities-list.page.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/admin/priorities/priorities-list/priorities-list.page.ts ***!
      \**************************************************************************/

    /*! exports provided: PrioritiesListPage */

    /***/
    function srcAppAdminPrioritiesPrioritiesListPrioritiesListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrioritiesListPage", function () {
        return PrioritiesListPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_priority_modal_add_priority_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! .././add-priority-modal/add-priority-modal.component */
      "./src/app/admin/priorities/add-priority-modal/add-priority-modal.component.ts");
      /* harmony import */


      var _edit_priority_modal_edit_priority_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! .././edit-priority-modal/edit-priority-modal.component */
      "./src/app/admin/priorities/edit-priority-modal/edit-priority-modal.component.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");

      var PrioritiesListPage = /*#__PURE__*/function () {
        function PrioritiesListPage(priorityData, modalController, alertCtrl, toastr, loader) {
          _classCallCheck(this, PrioritiesListPage);

          this.priorityData = priorityData;
          this.modalController = modalController;
          this.alertCtrl = alertCtrl;
          this.toastr = toastr;
          this.loader = loader;
          this.list = [];
        }

        _createClass(PrioritiesListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            this.list = [];
            this.priorityData.getPrioritiesList().subscribe(function (result) {
              _this4.PrioritiesList = result['priorities'];

              _this4.PrioritiesList.forEach(function (data) {
                _this4.list.push({
                  _id: data._id,
                  name: data.name,
                  time_line: data.time_line >= 24 ? Math.floor(data.time_line / 24) + 'd' + ' ' + data.time_line % 24 + 'h' : data.time_line + 'h'
                });
              });
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
                        component: _add_priority_modal_add_priority_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddPriorityModalComponent"],
                        cssClass: 'my-custom-priority-class'
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
          key: "openeditModal",
          value: function openeditModal(list) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, _yield$modal$onWillDi2, result, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _edit_priority_modal_edit_priority_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditPriorityModalComponent"],
                        componentProps: {
                          _id: list._id
                        },
                        cssClass: 'my-edit-form-class'
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
              var _this5 = this;

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
                            _this5.delete_priority(id);
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
          key: "delete_priority",
          value: function delete_priority(id) {
            var _this6 = this;

            this.priorityData.deletePriority(id).subscribe(function (result) {
              _this6.sucmsg = result['message'];

              if (result['success'] == true) {
                _this6.toastr.success(_this6.sucmsg);

                _this6.ionViewWillEnter();
              }
            });
          }
        }]);

        return PrioritiesListPage;
      }();

      PrioritiesListPage.ctorParameters = function () {
        return [{
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
        }];
      };

      PrioritiesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-priorities-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./priorities-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/priorities/priorities-list/priorities-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./priorities-list.page.scss */
        "./src/app/admin/priorities/priorities-list/priorities-list.page.scss"))["default"]]
      })], PrioritiesListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-priorities-priorities-list-priorities-list-module-es5.js.map