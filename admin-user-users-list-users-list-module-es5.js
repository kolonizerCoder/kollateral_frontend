(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-user-users-list-users-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/add-user-modal/add-user-modal.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/add-user-modal/add-user-modal.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminUserAddUserModalAddUserModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover-spin\"  *ngIf=\"loader.isLoading | async\">\r\n  <ion-spinner name=\"lines\" class=\"profile-modal-spinner\"></ion-spinner>\r\n</div>\r\n<ion-content class=\"add-modal-content\">\r\n  <ion-grid class=\"margin-adjustable\">\r\n    <ion-icon class=\"close-user-modal\" name='close-circle-outline'  (click)='dismiss()'></ion-icon> \r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <span id=\"errors\" class=\"errorMsgText\">{{extensionError}}</span>\r\n        <h1 class=\"new-user-heading\">\r\n          <span>\r\n            New User\r\n          </span>   \r\n        </h1>\r\n      </ion-col>\r\n      <ion-col id=\"usericon\" size=\"12\">\r\n        \r\n        <ion-icon name=\"person-circle\"></ion-icon>  \r\n \r\n          <img id=\"blah\" alt=\"\" />\r\n        \r\n           <input type=\"file\" style=\"display: none;\" (change)=\"tokenImage($event)\" #file/>\r\n            <ion-icon class=\"camera-icon\" (click)=\"file.click()\"  name=\"camera\" ></ion-icon>  \r\n         \r\n        </ion-col>\r\n      \r\n\r\n    </ion-row>\r\n    <ion-row>\r\n      <form class=\"user-form\" >\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"modal-input-field\">\r\n              <ion-input class=\"place-text\" type=\"text\"  placeholder=\"Name*\" (change)=\"user_name($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{errMsg}}</span>\r\n        <ion-row>\r\n          <ion-col size=\"7\" size-sm=\"6\" size-xs=\"12\">\r\n            <ion-item class=\"modal-input-field\">\r\n              <ion-input class=\"place-text\" type=\"text\"  placeholder=\"Phone *\" (change)=\"user_phone($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"5\" size-sm=\"6\" size-xs=\"12\"  class=\"watsapp-enabled\">\r\n            <ion-icon name=\"logo-whatsapp\" class=\"whatsapp-icon\"></ion-icon>\r\n            <ion-toggle [(ngModel)]=\"pepperoni\" name=\"whats\" (ionChange)=\"changeToggle()\"></ion-toggle>\r\n            <!-- <ion-toggle (ionChange)=\"updateDriverOnlineStatus($event)\" ></ion-toggle> -->\r\n          </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{phoneErr}}</span>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"modal-input-field\">\r\n              <ion-input class=\"place-text\" type=\"text\"  placeholder=\"Email*\" (change)=\"user_email($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{emailErr}}</span>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"modal-input-field\">\r\n              <ion-input class=\"place-text\" type=\"password\"  placeholder=\"Password*\" (change)=\"user_psw($event)\" ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{passworderr}}</span>\r\n          <ion-row class=\"modal-gender-field\">\r\n            <ion-col class=\"mb-3\">\r\n              <ion-label>Gender*</ion-label>\r\n              <input type=\"radio\" name=\"gender\" (change)=\"user_gender($event)\" value=\"Male\"> &nbsp;Male &nbsp;\r\n              <input type=\"radio\" name=\"gender\" (change)=\"user_gender($event)\" value=\"Female\">&nbsp; Female\r\n          </ion-col>\r\n          </ion-row>\r\n          <span id=\"errors\" class=\"errorMsgText\">{{gendererr}}</span>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-item class=\"modal-input-field select-item-list-popup-models\">\r\n              <!-- <select class=\"selectoption form-control round-dropdown\"  (change)=\"branch_name($event)\" placeholder=\"Select branch\" >\r\n                <option>Select Branch*</option>\r\n                <option *ngFor=\"let branch of branchesList\" [value]=\"branch._id\">{{branch.name}}</option>\r\n              </select> -->\r\n              <label class=\"branch-label  user-label\">Select Branch</label>\r\n\r\n             <mat-form-field>\r\n                <mat-select class=\"place-text\"  (selectionChange)=\"branch_name($event)\">\r\n                  <mat-option *ngFor=\"let branch of branchesList\" [value]=\"branch._id\">{{branch.name}}\r\n                  </mat-option>     \r\n                </mat-select>\r\n              </mat-form-field>\r\n            </ion-item>\r\n           </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{brancherr}}</span>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-item class=\"modal-input-field select-item-list-popup-models\">\r\n              <!-- <select class=\"selectoption form-control round-dropdown\"  (change)=\"dept_name($event)\" placeholder=\"Select branch\" >\r\n                <option>Select Department*</option>\r\n                <option *ngFor=\"let dept of departmentsList\" [value]=\"dept._id\">{{dept.name}}</option>\r\n              </select> -->\r\n              <label class=\"dept-label user-label\">Select Department</label>\r\n              <mat-form-field>\r\n                 <mat-select class=\"place-text\"  (selectionChange)=\"dept_name($event)\" >\r\n                   <mat-option *ngFor=\"let dept of departmentsList\" [value]=\"dept._id\">{{dept.name}}\r\n                   </mat-option>     \r\n                 </mat-select>\r\n               </mat-form-field>\r\n            </ion-item>\r\n           </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{departmenterr}}</span>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-item class=\"modal-input-field select-item-list-popup-models\">\r\n              <!-- <select class=\"selectoption form-control round-dropdown\"  (change)=\"roll_name($event)\" placeholder=\"Select branch\" >\r\n                <option>Select Roll*</option>\r\n                <option *ngFor=\"let roll of rolesList\" [value]=\"roll._id\">{{roll.name}}</option>\r\n              </select> -->\r\n              <label class=\"role-label  user-label\">Select Role</label>\r\n              <mat-form-field>\r\n                 <mat-select class=\"place-text\"  (selectionChange)=\"roll_name($event)\">\r\n                   <mat-option *ngFor=\"let roll of rolesList\" [value]=\"roll._id\">{{roll.name}}\r\n                   </mat-option>     \r\n                 </mat-select>\r\n               </mat-form-field>\r\n            </ion-item>\r\n           </ion-col>\r\n        </ion-row>\r\n        <span id=\"errors\" class=\"errorMsgText\">{{rollerr}}</span>\r\n          <ion-col>\r\n             <ion-button type=\"button\" (click)=\"submit()\" block>Submit</ion-button>\r\n            \r\n          </ion-col>\r\n      </form>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/edit-user-modal/edit-user-modal.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/edit-user-modal/edit-user-modal.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminUserEditUserModalEditUserModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover-spin\" *ngIf=\"isLoading\">\r\n\t<ion-spinner name=\"lines\" class=\"profile-modal-spinner\"></ion-spinner>\r\n  </div>\r\n<div class=\"profile-back\"></div>\r\n\r\n<ion-row>\r\n\t<ion-col>\r\n\t\t<ion-thumbnail class=\"user-profile\">\r\n\t\t\t<img src=\"{{imageData?imageData:'../../../../assets/user/icon/default-user.jpg'}}\" id=\"blah\" alt=\"\"\r\n\t\t\t\tclass=\"profile-img\">\r\n\t\t\t\r\n\t\t</ion-thumbnail>\r\n\t\t<input type=\"file\" accept=\".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*\" style=\"display: none;\"\r\n\t\t\t(change)=\"tokenImage($event)\" formControlName=\"image\" #file />\r\n\t\t<ion-icon class=\"camera-icon\" (click)=\"file.click()\" name=\"camera\"></ion-icon>\r\n\t\t<span *ngIf=\"extensionErr\" id=\"extError\" class=\"errorMsgText \">{{showExtError}}</span>\r\n\r\n\t</ion-col>\r\n\t<ion-icon class=\"user-edit-close\" name='close-circle-outline' (click)='dismiss()'></ion-icon> \r\n</ion-row>\r\n\r\n<ion-grid class=\"modal-grid\">\r\n\r\n\t<ion-row>\r\n\t\t<ion-col>\r\n\r\n\t\t\t<form [formGroup]=\"editUserForm\" (ngSubmit)=\"editUser(editUserForm.value)\">\r\n\t\t\t\t<ion-row class=\"padding-row\">\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"name profile-head\">\r\n\t\t\t\t\t\t\t<!-- <ion-label position=\"stacked\">Name</ion-label> -->\r\n\t\t\t\t\t\t\t<ion-input type=\"text\" style=\"text-align: center;\" formControlName=\"name\"\r\n\t\t\t\t\t\t\t\t[readonly]=\"valueUserName\" (change)=\"InsertData($event)\"></ion-input>\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil name-pencil\"\r\n\t\t\t\t\t\t\t\t(click)=\"editUserName()\">\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"nameRight\" class=\"edit-user-pencil-icon token-edit-checked-icon\">\r\n\t\t\t\t\t\t<span id=\"errors\" class=\"errorMsgText\">{{errName}}</span>\r\n\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"mt-2\">\r\n\t\t\t\t\t\t<div class=\"role \" >\r\n\t\t\t\t\t\t\t<!-- <select  formControlName=\"role\" id=\"selectrole\" disabled=\"disabled\" >\r\n\t\t\t\t\t\t\t  <option *ngFor=\"let roles of rolesList\" [value]=\"roles._id\" >{{roles.name}}</option>\r\n\t\t\t\t\t\t\t</select> -->\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"role\" id=\"selectrole\" [disabled]=\"disablerole\" (selectionChange)=\"applyrole($event)\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let roles of rolesList\" [value]=\"roles._id\"> {{roles.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil role-pencil\"\r\n\t\t\t\t\t\t\t\t(click)=\"editRole()\">\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"roleRight\" class=\"edit-user-pencil-icon token-edit-checked-icon\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"userData && userData.department\" class=\"mt-2 mb-2\">\r\n\t\t\t\t\t\t<div class=\"dept\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"department\" id=\"selectdept\" [disabled]=\"disabledbtn\" (selectionChange)=\"applyDept($event)\"> \r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let dept of departmentsList\" [value]=\"dept._id\">{{dept.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil department-pencil\"\r\n\t\t\t\t\t\t\t\t(click)=\"editDepartment()\">\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t                    *ngIf=\"deptRight\" class=\"edit-user-pencil-icon token-edit-checked-icon\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"userData && userData.branch\" class=\"mt-5\">\r\n\t\t\t\t\t\t<ion-col size=\"12\" >\r\n\t\t\t\t\t\t\t<div class=\"branch\" >\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"branch\" id=\"selectbranch\" [disabled]=\"disablebranch\" (selectionChange)=\"applyBranch($event)\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let branch of branchesList\" [value]=\"branch._id\"> {{branch.name}}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil branch-pencil\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"editBranch()\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"branchRight\" class=\"edit-user-pencil-icon token-edit-checked-icon\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ion-col size=\"12\" classs=\"mt-2\">\r\n\t\t\t\t\t\t<hr class=\"new5\">\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\r\n\r\n\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"email\">\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"1\" class=\"mt-2\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"mail-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"email-input-col\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" class=\"email-field\" formControlName=\"email\" [readonly]=\"valueUserEmail\" (change)=\"InsertEmail($event)\"></ion-input>\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil email-pencil\" (click)=\"editUserEmail()\">\r\n\t\t\t\t\t\t\t    <img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"emailRight\" class=\"edit-user-pencil-icon token-edit-checked-icon email-img\">\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<span id=\"errors\" class=\"errorMsgText\">{{errMail}}</span>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"phone\">\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ion-col size=\"1\" class=\"mt-2\">\r\n\t\t\t\t\t\t\t\t<ion-icon class=\"phone-icon\"  name=\"call-outline\" ></ion-icon>\t\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ion-col class=\"email-input-col\">\t\r\n\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-col size='5'>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"phone-field\" formControlName=\"phone\" [readonly]=\"valueUserPhone\" (change)=\"InsertPhone($event)\">\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<ion-col size='2'>\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"logo-whatsapp\" class=\"whatsapp-icon\"></ion-icon>\r\n\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<ion-col size='2'>\r\n\t\t\t\t\t\t\t\t\t\t<ion-toggle  formControlName=\"is_whatsapp_enabled\" name=\"whats\" [(ngModel)]=\"getValue\" (ionChange)=\"changeToggle()\" ></ion-toggle>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<ion-col size='3' style=\"padding-right:2px  !important;\">\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"phone-edit-pencil name-edit-pencil-icon edit-modal-pencil number-pencil\" (click)=\"editUserPhone()\">\r\n                    <img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"phoneRight\" class=\"edit-user-pencil-icon token-edit-checked-icon phone-img\">\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<span id=\"errors\" class=\"errorMsgText\">{{errPhone}}</span>\r\n\r\n\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"gender\">\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"1\" class=\"mt-2\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"female\"></ion-icon>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"gender\" class=\"genderSelect\" [disabled]=\"disablegender\" (selectionChange)=\"applyGender($event)\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Female\">Female</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Male\">Male</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon name-edit-pencil-icon edit-modal-pencil gender-pencil\" (click)=\"editGender()\">\r\n\t\t\t\t\t\t\t    <img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t                    *ngIf=\"genderRight\" class=\"edit-user-pencil-icon token-edit-checked-icon gender-img\">\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t<ion-col class=\"col text-center mt-2\">\r\n\t\t\t\t\t\t<ion-button type=\"submit\" *ngIf=\"showBtn\" block>Submit</ion-button>\t\t\t\t\t\t\r\n\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\r\n\t\t\t</form>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n\t<!-- <ion-icon class=\"user-edit-close\" name='close-circle-outline'  (click)='dismiss()'></ion-icon>  -->\r\n</ion-grid>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/users-list/users-list.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/users-list/users-list.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminUserUsersListUsersListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\t\t<ion-fab class=\"ionAddButton\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n\t\t\t<ion-fab-button class=\"ionFabbtn\" (click)=\"openModal()\" size=\"small\">\r\n\t\t\t  <ion-icon name=\"add\"></ion-icon>\r\n\t\t\t</ion-fab-button>\r\n\t\t</ion-fab>\r\n\t\t<!-- <div class=\"loader-spinner-design\" *ngIf=\"loader.isLoading | async;else Loadcontent\">\r\n\t\t\t<ion-spinner name=\"lines\" class=\"Loading-spinner\"></ion-spinner>\r\n\t\t  </div> -->\r\n\t\t  <div class=\"cover-spin\"  *ngIf=\"isLoading\">\r\n\t\t\t<ion-spinner name=\"lines\" class=\"Loading-spinner\"></ion-spinner>\r\n\t\t  </div>\r\n\t\t \r\n\t\t  <!-- <ng-template #Loadcontent> -->\r\n\t\t\t\t\t<ion-grid class=\"main-grid list-pages\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<!-- <ion-col class=\"linkcol\" size=\"12\" align=\"right\"><span id=\"home\" routerLink=\"/admin/home\">Home</span>/<span\r\n\t\t\t\t\t\t\t\t\tid=\"about\">Users</span>\r\n\t\t\t\t\t\t\t</ion-col> -->\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" align=\"center\" class=\"page-heading-col\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<h1 class=\"page-heading\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tUsers\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</h1>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size-lg=\"2\" size-md=\"12\" class=\"search-col\">\r\n\t\t\t\t\t\t\t\t<!-- <ion-item>  -->\r\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\" Search \"\r\n\t\t\t\t\t\t\t\t\tclass=\"search\" (keyup)=\"user_search($event.target.value)\"></ion-input>\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"search-outline\" class=\"d-lg-none d-md-block search-icon\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<!-- </ion-item> -->\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"10\" align=\"right\" class=\"add-token-col\">\r\n\t\t\t\t\t\t\t\t<!-- <ion-button color=\"primary\" class=\"primary-btn\" routerLink=\"/add-user\"> -->\r\n\t\t\t\t\t\t\t\t<ion-button color=\"primary\" class=\"primary-btn\" (click)=\"openModal()\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon> New User\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col class=\"table-grid\">\r\n\t\t\t\t\t\t\t\t<ion-row class=\"head\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col th userpadding\" align=\"left\">Name</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col col-3 th secondth\" align=\"left\">Role</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col col-3 th thirdth\" align=\"left\">Phone Number</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col col-3 th \" align=\"left\">Token Count</div>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t\t\t\t<ion-row class=\"body\" *ngFor=\"let users of setupData \" >\r\n                  <ion-col>\r\n                    <ion-row (click)=\"openEditModal(users)\">\r\n                      <ion-col size-md=\"1\" size-sm=\"1\" size-xs=\"2\" class=\"ion-hide-md-up iconimg\">\r\n                        <img id=\"iconimage\" src=\"{{users.image?users.image:'../../../../assets/user/icon/default-user.jpg'}}\"/>\r\n\t\t\t\t\t\t \r\n                        <!-- <ion-icon name=\"list\"></ion-icon> -->\r\n                      </ion-col>\r\n                      <ion-col class=\"content_col\">\r\n                        <ion-row>\r\n                          <ion-col size-lg=\"3\" size-md=\"3\" size-xs=\"12\"  class=\"td firsttd\"><img id=\"userimgg\" src=\"{{users.image?users.image:'../../../../assets/user/icon/default-user.jpg'}}\" />{{users.name}}</ion-col>\r\n                          <ion-col size-lg=\"3\" size-md=\"3\" size-xs=\"12\"  class=\"td secondtd \">{{users.role}}</ion-col>\r\n                          <ion-col size-lg=\"3\" size-md=\"3\" size-xs=\"12\"  class=\"td thirdtd\">{{users.phone}}</ion-col>\r\n                          <ion-col size-lg=\"3\" size-md=\"3\" size-xs=\"12\"  class=\"td fourthtd\"><ion-badge id=\"badge\" color=\"primary\">{{users.tokenCount}}</ion-badge></ion-col>\r\n                        </ion-row>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <div class=\"\" id=\"crossicon\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon id=\"cross\" (click)=\"presentAlert(users._id)\" name=\"close-outline\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col pagination-col\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<ul class=\"nav justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"page != 1\" id=\"prev\" class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"paginationData(page-1)\"><ion-icon id=\"previous-icon\" name=\"chevron-back-outline\"></ion-icon>Prev</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let pageNo of pageCounts\" class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"paginationData(pageNo)\" > \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span  *ngIf=\"pageNo == page; else elseBlock\" class=\"active-design\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{pageNo}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{pageNo}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"page != pageCount\" id=\"next\" class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"paginationData(page+1)\">Next<ion-icon  name=\"chevron-forward-outline\"></ion-icon></span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-grid>\r\n\t\t\t\t<!-- </ng-template> -->\r\n";
      /***/
    },

    /***/
    "./src/app/admin/user/add-user-modal/add-user-modal.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/user/add-user-modal/add-user-modal.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminUserAddUserModalAddUserModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add-modal-content {\n  --background: #ffffff !important;\n}\n.add-modal-content .close-user-modal {\n  float: right;\n  font-size: 25px;\n  color: #65a2ad;\n  position: relative;\n  top: 15px;\n  right: 10px;\n  cursor: pointer;\n}\n@media screen and (max-width: 991px) {\n  .add-modal-content .close-user-modal {\n    top: 25px;\n  }\n}\n.add-modal-content .new-user-heading {\n  text-align: center;\n  margin: 12px 0 0px;\n}\n.add-modal-content .new-user-heading span {\n  color: #6c6c6c;\n  border-bottom: 2px solid #65a2ad;\n  padding: 4px 25px;\n  font-size: 20px;\n  font-weight: 500;\n}\n@media screen and (max-width: 575px) {\n  .add-modal-content .new-user-heading {\n    margin: -15px 0 10px;\n  }\n}\n.add-modal-content #usericon {\n  font-size: 85px;\n  text-align: center;\n  color: #69bfba;\n}\n.add-modal-content #usericon ion-icon {\n  border: 7px solid #f2f2f2;\n  border-radius: 50px;\n}\n.add-modal-content #usericon .camera-icon {\n  border: 0px;\n  position: absolute;\n  bottom: 17px;\n  right: 160px;\n  color: #fff;\n  font-size: 20px !important;\n  background-color: #f55a0e;\n  padding: 4px;\n}\n@media screen and (max-width: 549px) {\n  .add-modal-content #usericon .camera-icon {\n    bottom: 15px;\n    right: 150px;\n  }\n}\n@media screen and (max-width: 393px) {\n  .add-modal-content #usericon .camera-icon {\n    bottom: 15px;\n    right: 133px;\n  }\n}\n@media screen and (max-width: 340px) {\n  .add-modal-content #usericon .camera-icon {\n    right: 124px;\n  }\n}\n.add-modal-content #usericon img {\n  position: absolute;\n  bottom: 20px;\n  left: 41%;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  border: solid 1px white;\n}\n@media screen and (max-width: 767px) {\n  .add-modal-content #usericon img {\n    position: absolute;\n    bottom: 20px;\n    width: 70px;\n    height: 70px;\n  }\n}\n@media screen and (max-width: 549px) {\n  .add-modal-content #usericon img {\n    left: 39.5%;\n  }\n}\n@media screen and (max-width: 393px) {\n  .add-modal-content #usericon img {\n    left: 38.5%;\n  }\n}\n@media screen and (max-width: 340px) {\n  .add-modal-content #usericon img {\n    left: 37.5%;\n  }\n}\n.add-modal-content .user-form {\n  margin: 20px 36px auto;\n  width: 100%;\n}\n.add-modal-content .user-form .modal-input-field {\n  border-radius: 45px;\n  --highlight-background: transparent;\n  box-shadow: 0px 0px 8px #68bfbb;\n  margin: -15px 0px 20px;\n  height: 35px;\n}\n.add-modal-content .user-form .modal-input-field ion-input {\n  margin-top: -10px;\n}\n.add-modal-content .user-form .modal-input-field ion-label {\n  margin-left: 2px;\n}\n.add-modal-content .user-form .modal-input-field ion-textarea {\n  margin-top: 0px;\n}\n.add-modal-content .user-form .modal-input-field ion-select {\n  padding-top: 0px;\n}\n.add-modal-content .user-form .modal-input-field .place-text {\n  color: #787878;\n  font-size: 13px;\n}\n.add-modal-content .user-form .modal-input-field .selectoption {\n  color: #78787899;\n  font-size: 13px;\n  padding-left: 0px;\n}\n.add-modal-content .user-form .modal-gender-field {\n  border-radius: 45px;\n  --highlight-background: transparent;\n  margin: -13px 0px 25px;\n  height: 25px;\n  padding-left: 9px;\n  color: #787878ad;\n}\n.add-modal-content .user-form .modal-gender-field ion-label {\n  padding-right: 10px;\n}\n.add-modal-content .user-form ion-button {\n  width: 100%;\n  --border-radius: 25px;\n  background-color: transparent;\n  border-color: transparent;\n  border: transparent;\n}\n@media screen and (max-width: 575px) {\n  .add-modal-content .user-form ion-button {\n    margin-top: -5px;\n  }\n}\n.add-modal-content .user-form .watsapp-enabled {\n  position: relative;\n  left: 42px;\n  bottom: 18px;\n}\n.add-modal-content .user-form .watsapp-enabled .whatsapp-icon {\n  font-size: 30px;\n  color: #7ad06d;\n  margin-bottom: 3px;\n}\n@media screen and (max-width: 575px) {\n  .add-modal-content .user-form .watsapp-enabled {\n    left: 0;\n    bottom: 18px;\n    width: 25% !important;\n    left: 35%;\n    padding-bottom: 0px;\n  }\n}\n.add-modal-content .round-dropdown {\n  border: 0px !important;\n  padding-top: 0px !important;\n}\n.add-modal-content .round-dropdown:hover {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25) !important;\n}\n.add-modal-content .textarea-height {\n  height: 80px !important;\n  border-radius: 20px !important;\n}\n.add-modal-content #errors {\n  color: #a70000;\n  font-size: 14px;\n  font-weight: 400;\n}\n.add-modal-content .errorMsgText {\n  position: relative;\n  top: -14px;\n  left: 12px;\n}\n.add-modal-content .user-label {\n  margin-bottom: 14px;\n}\n@media only screen and (max-width: 991px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 335px !important;\n  }\n}\n@media only screen and (max-width: 530px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 298px !important;\n  }\n  .add-modal-content .token-type-form ion-button {\n    width: 298px !important;\n  }\n}\n@media only screen and (max-width: 430px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 272px !important;\n  }\n  .add-modal-content .token-type-form ion-button {\n    width: 272px !important;\n  }\n}\n@media only screen and (max-width: 370px) and (min-height: 600px) {\n  .add-modal-content .token-type-form .modal-input-field {\n    width: 245px !important;\n  }\n  .add-modal-content .token-type-form ion-button {\n    width: 245px !important;\n  }\n}\n@media only screen and (max-width: 340px) and (min-height: 600px) {\n  .add-modal-content .token-type-form {\n    margin: 20px 21px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci9hZGQtdXNlci1tb2RhbC9hZGQtdXNlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQWVJLGdDQUFBO0FBZEo7QUFBSztFQUNHLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRVI7QUFEUTtFQVJIO0lBU08sU0FBQTtFQUlWO0FBQ0Y7QUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUFRO0VBVko7SUFXWSxvQkFBQTtFQUdkO0FBQ0Y7QUFESTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHUjtBQURRO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRFk7RUFWSjtJQVlRLFlBQUE7SUFDQSxZQUFBO0VBR2Q7QUFDRjtBQUZZO0VBZko7SUFnQlEsWUFBQTtJQUNBLFlBQUE7RUFLZDtBQUNGO0FBSlk7RUFuQko7SUFvQlEsWUFBQTtFQU9kO0FBQ0Y7QUFIUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFLWjtBQUhZO0VBVEo7SUFVUSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQU1kO0FBQ0Y7QUFKWTtFQWhCSjtJQWlCUSxXQUFBO0VBT2Q7QUFDRjtBQU5ZO0VBbkJKO0lBb0JRLFdBQUE7RUFTZDtBQUNGO0FBUlk7RUF0Qko7SUF1QlEsV0FBQTtFQVdkO0FBQ0Y7QUFQSTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQVNSO0FBUlE7RUFDSSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFVWjtBQVRZO0VBQ0ksaUJBQUE7QUFXaEI7QUFSWTtFQUNJLGdCQUFBO0FBVWhCO0FBUlk7RUFDSSxlQUFBO0FBVWhCO0FBUFk7RUFDSSxnQkFBQTtBQVNoQjtBQUpZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFNaEI7QUFKWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTWhCO0FBSFE7RUFDSSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtaO0FBSlk7RUFDSSxtQkFBQTtBQU1oQjtBQUhRO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBS1o7QUFIWTtFQVBKO0lBUVEsZ0JBQUE7RUFNZDtBQUNGO0FBSlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTVo7QUFMWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFPaEI7QUFKWTtFQVZKO0lBWVEsT0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQU1kO0FBQ0Y7QUFDUTtFQUNHLHNCQUFBO0VBQ0EsMkJBQUE7QUFDWDtBQUNRO0VBQ0ksNkRBQUE7QUFDWjtBQUVTO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtBQUFiO0FBRVM7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVo7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFEWjtBQUdRO0VBQ0EsbUJBQUE7QUFEUjtBQUtBO0VBR1k7SUFDSSx1QkFBQTtFQUpkO0FBQ0Y7QUFTQTtFQUdZO0lBQ0ksdUJBQUE7RUFUZDtFQVdVO0lBQ0ksdUJBQUE7RUFUZDtBQUNGO0FBY0E7RUFHWTtJQUNJLHVCQUFBO0VBZGQ7RUFnQlU7SUFDSSx1QkFBQTtFQWRkO0FBQ0Y7QUFrQkE7RUFHWTtJQUNJLHVCQUFBO0VBbEJkO0VBb0JVO0lBQ0ksdUJBQUE7RUFsQmQ7QUFDRjtBQXNCQTtFQUVRO0lBQ0ksc0JBQUE7RUFyQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXIvYWRkLXVzZXItbW9kYWwvYWRkLXVzZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFkZC1tb2RhbC1jb250ZW50e1xyXG4gICAgIC5jbG9zZS11c2VyLW1vZGFse1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NWEyYWQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgfVxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAubmV3LXVzZXItaGVhZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOjEycHggMCAwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM2YzZjNmM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjVhMmFkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTE1cHggMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICN1c2VyaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDg1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOmhzbCgxNzdkZWcgNDAlIDU4JSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBib3JkZXI6IDdweCBzb2xpZCBoc2woMGRlZyAwJSA5NSUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FtZXJhLWljb257XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTdweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTVhMGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTQ5cHgpe1xyXG5cclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM5M3B4KXtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMzNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0MHB4KXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMjRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQxJTtcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTQ5cHgpe1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzkuNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozOTNweCl7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzOC41JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0MHB4KXtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDM3LjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDM2cHggYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAubW9kYWwtaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjNjhiZmJiO1xyXG4gICAgICAgICAgICBtYXJnaW46IC0xNXB4IDBweCAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tc2VsZWN0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBsYWNlLXRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsZWN0b3B0aW9ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3ODc4Nzg5OTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbC1nZW5kZXItZmllbGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IC0xM3B4IDBweCAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc4Nzg3OGFkO1xyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53YXRzYXBwLWVuYWJsZWR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogNDJweDtcclxuICAgICAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgICAgICAgICAud2hhdHNhcHAtaWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2FkMDZkO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1JSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzNSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgIH1cclxuICAgICAgICAucm91bmQtZHJvcGRvd257XHJcbiAgICAgICAgICAgYm9yZGVyOjBweCAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3VuZC1kcm9wZG93bjpob3ZlcntcclxuICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMCAwLjJyZW0gcmdiKDI1NSAyNTUgMjU1IC8gMjUlKSAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnRleHRhcmVhLWhlaWdodHtcclxuICAgICAgICAgICAgIGhlaWdodDo4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgI2Vycm9yc3tcclxuICAgICAgICAgICAgY29sb3I6ICNhNzAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVycm9yTXNnVGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0xNHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1sYWJlbHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCl7XHJcbiAgICAuYWRkLW1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgLnRva2VuLXR5cGUtZm9ybXtcclxuICAgICAgICAgICAgLm1vZGFsLWlucHV0LWZpZWxke1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpe1xyXG4gICAgLmFkZC1tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIC50b2tlbi10eXBlLWZvcm17XHJcbiAgICAgICAgICAgIC5tb2RhbC1pbnB1dC1maWVsZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjk4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQzMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXtcclxuICAgIC5hZGQtbW9kYWwtY29udGVudHtcclxuICAgICAgICAudG9rZW4tdHlwZS1mb3Jte1xyXG4gICAgICAgICAgICAubW9kYWwtaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjcycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXtcclxuICAgIC5hZGQtbW9kYWwtY29udGVudHtcclxuICAgICAgICAudG9rZW4tdHlwZS1mb3Jte1xyXG4gICAgICAgICAgICAubW9kYWwtaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXtcclxuICAgIC5hZGQtbW9kYWwtY29udGVudHtcclxuICAgICAgICAudG9rZW4tdHlwZS1mb3Jte1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMjFweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/admin/user/add-user-modal/add-user-modal.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/admin/user/add-user-modal/add-user-modal.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AddUserModalComponent */

    /***/
    function srcAppAdminUserAddUserModalAddUserModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserModalComponent", function () {
        return AddUserModalComponent;
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


      var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _services_main_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/main-services.service */
      "./src/app/services/main-services.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");

      var AddUserModalComponent = /*#__PURE__*/function () {
        function AddUserModalComponent(router, main_services, modalController, navCtrl, loader) {
          _classCallCheck(this, AddUserModalComponent);

          this.router = router;
          this.main_services = main_services;
          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.loader = loader;
          this.userName = "";
          this.phone = "";
          this.email = "";
          this.gender = "";
          this.branch = "";
          this.dept = "";
          this.role = "";
          this.psw = "";
          this.pepperoni = false;
          this.filesToUpload = [];
          this.images = new Array();
          this.selectedFile = [];
        }

        _createClass(AddUserModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "get_branches",
          value: function get_branches() {
            var _this = this;

            this.main_services.getBranchesList().subscribe(function (result) {
              _this.branchesList = result['branches'];
            });
          }
        }, {
          key: "get_depts",
          value: function get_depts() {
            var _this2 = this;

            this.main_services.getDepartmentsList().subscribe(function (result) {
              _this2.departmentsList = result['departments'];
              _this2.departments = result['departments'];
            });
          }
        }, {
          key: "get_roles",
          value: function get_roles() {
            var _this3 = this;

            this.main_services.getRolesList().subscribe(function (result) {
              _this3.rolesList = result['roles'];
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.get_branches();
            this.get_depts();
            this.get_roles();
          }
        }, {
          key: "user_name",
          value: function user_name(e) {
            this.userName = e.target.value;
          }
        }, {
          key: "user_phone",
          value: function user_phone(e) {
            this.phone = e.target.value;
          }
        }, {
          key: "changeToggle",
          value: function changeToggle() {
            this.is_watsapp = this.pepperoni;
          } // updateDriverOnlineStatus(e) {
          //   console.log(e.target.value);
          //   // this.isOnline = !this.isOnline;
          // }

        }, {
          key: "user_email",
          value: function user_email(e) {
            this.email = e.target.value;
          }
        }, {
          key: "user_psw",
          value: function user_psw(e) {
            this.psw = e.target.value;
          }
        }, {
          key: "user_gender",
          value: function user_gender(m, f) {
            if (m) {
              this.gender = m.target.value;
            } else {
              this.gender = f.target.value;
            }
          }
        }, {
          key: "branch_name",
          value: function branch_name(e) {
            this.branch = e.value;
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.select-item-list-popup-models label.branch-label').hide();
            this.departmentsList = this.departments.filter(function (department) {
              return department.branch._id == e.value;
            });
            this.branch = e.value;
          }
        }, {
          key: "dept_name",
          value: function dept_name(e) {
            this.dept = e.value;
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.select-item-list-popup-models label.dept-label').hide();
          }
        }, {
          key: "roll_name",
          value: function roll_name(e) {
            this.role = e.value;
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.select-item-list-popup-models label.role-label').hide();
          }
        }, {
          key: "tokenImage",
          value: function tokenImage(event) {
            this.selectedFile = event.target.files[0];
            this.filesToUpload.push(this.selectedFile);
            var fileName = this.selectedFile.name;
            var extension = fileName.split('.').pop();
            var reader = new FileReader();

            if (extension == 'jpg' || extension == 'png' || extension == 'jpeg' || extension == 'gif' || extension == 'webp') {
              reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#blah').attr('src', e.target.result);
              };
            }

            reader.readAsDataURL(this.selectedFile); // convert to base64 string
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            var addUser;
            addUser = {
              name: this.userName,
              phone: this.phone,
              is_whatsapp_enabled: this.pepperoni,
              email: this.email,
              password: this.psw,
              gender: this.gender,
              branch: this.branch,
              department: this.dept,
              role: this.role,
              image: this.selectedFile
            };
            var formData = new FormData();
            formData.append('name', addUser.name);
            formData.append('phone', addUser.phone); // formData.append('is_whatsapp_enabled', addUser.is_whatsapp_enabled);

            formData.append('is_whatsapp_enabled', addUser.is_whatsapp_enabled);
            formData.append('email', addUser.email);
            formData.append('password', addUser.password);
            formData.append('gender', addUser.gender);
            formData.append('branch', addUser.branch);
            formData.append('department', addUser.department);
            formData.append('role', addUser.role);
            formData.append('image', addUser.image); // return formData;

            this.main_services.addUserDetails(formData).subscribe(function (result) {
              _this4.modalController.dismiss(result, 'success');
            }, function (error) {
              console.log(error);
              _this4.errMsg = error['error']['error']['name'];
              _this4.emailErr = error['error']['error']['email'];
              _this4.passworderr = error['error']['error']['password'];
              _this4.phoneErr = error['error']['error']['phone'];
              _this4.departmenterr = error['error']['error']['department'];
              _this4.rollerr = error['error']['error']['role'];
              _this4.brancherr = error['error']['error']['branch'];
              _this4.gendererr = error['error']['error']['gender'];

              if (_this4.errMsg) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.brancherr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.emailErr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.passworderr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.phoneErr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.departmenterr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.rollerr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
              }

              if (_this4.gendererr) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#errors').fadeIn(1000);
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

        return AddUserModalComponent;
      }();

      AddUserModalComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }];
      };

      AddUserModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-user-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/add-user-modal/add-user-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-user-modal.component.scss */
        "./src/app/admin/user/add-user-modal/add-user-modal.component.scss"))["default"]]
      })], AddUserModalComponent);
      /***/
    },

    /***/
    "./src/app/admin/user/edit-user-modal/edit-user-modal.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/admin/user/edit-user-modal/edit-user-modal.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminUserEditUserModalEditUserModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form ion-toggle {\n  padding-left: 0px;\n}\n@media only screen and (max-width: 339px) {\n  form ion-toggle {\n    padding-left: 4px;\n  }\n}\nform .role {\n  margin-top: 0px;\n}\nform .role #selectrole {\n  margin: auto;\n  border: 0px transparent;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #f08754 !important;\n  -webkit-appearance: none;\n  font-weight: 500;\n}\nform .role img {\n  margin-bottom: 11px;\n}\nform #selectdept {\n  margin: auto;\n  border: 0px;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  -webkit-appearance: none;\n  font-weight: 400;\n}\nform .branch {\n  margin-bottom: -16px;\n  margin-top: -16px;\n}\nform .branch #selectbranch {\n  margin: auto;\n  border: 0px;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  -webkit-appearance: none;\n  font-size: 14px;\n  font-weight: 500;\n}\nform .email .email-icon {\n  margin-right: 7px;\n}\nform .email .email-field {\n  color: #8d8d8d;\n  margin-left: 7px;\n}\nform .email img {\n  margin-bottom: 9px;\n}\nform .email .email-img {\n  right: -5px;\n}\nform .phone .phone-field {\n  color: #838383;\n  background-color: #fff;\n  border: 0px;\n  margin-top: 10px;\n  width: 124px;\n}\nform .phone .phone-icon {\n  margin-top: 6px;\n}\nform .phone img {\n  margin-bottom: 16px;\n}\nform .phone .phone-img {\n  right: -10px;\n}\nform ion-icon {\n  font-size: 20px;\n  color: #8d8d8d;\n}\nform .whatsapp-icon {\n  margin-top: 7px;\n  margin-left: 11px;\n  font-size: 25px;\n  color: #7ad06d !important;\n  margin-bottom: 3px;\n}\nform #selectID {\n  background-color: transparent;\n  border: 0px;\n  -webkit-appearance: none;\n  color: #838383;\n  text-align: center;\n}\nform .token-type-select-box ion-icon {\n  font-size: 20px;\n  color: #8d8d8d;\n}\nform .genderSelect {\n  margin-left: 7px;\n}\nform .edit-modal-pencil {\n  width: 30px;\n  height: 30px;\n}\nform .phone-edit-pencil {\n  float: right;\n  width: 17px;\n  height: 17px;\n  margin-top: 9px;\n}\nform .padding-row {\n  padding-left: 30px;\n  padding-right: 30px;\n}\nform .gender img {\n  margin-bottom: 9px;\n}\nform .gender .gender-img {\n  right: -5px;\n}\nform ion-button {\n  border-radius: 40px;\n  background-color: transparent;\n  background-color: transparent;\n  border-color: transparent;\n  border: transparent;\n}\n.user-profile {\n  --size:90px !important;\n  margin: 93px auto;\n}\n.user-profile .profile-img {\n  border-radius: 50px;\n  border: 6px solid white;\n}\n.profile-back {\n  width: 426px;\n  height: 231px;\n  background-color: #64bfbb;\n  margin: -142px auto;\n  border-bottom-left-radius: 1000px;\n  border-bottom-right-radius: 1000px;\n}\n.modal-grid {\n  position: relative;\n  top: -52px;\n}\n.profile-head {\n  margin-top: -45px;\n  margin-bottom: -12px;\n  color: #6c6c6c;\n}\n.profile-head ion-input {\n  text-align: center;\n  font-size: 21px;\n  color: #656565 !important;\n  font-weight: 450;\n}\n.profile-head img {\n  margin-bottom: 10px;\n}\n.designation {\n  margin: 0px;\n  color: #f08754;\n}\n.dept {\n  color: #64bfbb;\n  margin-top: -17px;\n}\n.dept img {\n  margin-bottom: 10px;\n}\nhr.new5 {\n  width: 180px;\n  background-color: #848484;\n}\n.profile-icon {\n  margin-right: 8px;\n  margin-bottom: 9px;\n  margin-top: 7px;\n}\n.close-btn {\n  margin: auto;\n  position: relative;\n  top: 439px;\n  font-size: 25px;\n}\n.camera-icon {\n  border-radius: 50px;\n  background-color: #f55a0e;\n  font-size: 18px;\n  position: absolute;\n  bottom: 105px;\n  right: 170px;\n  color: #fff;\n  padding: 4px;\n}\n#extError {\n  position: absolute;\n  bottom: 81px;\n  right: 132px;\n  color: #bb0000;\n}\n.dept,\n.branch {\n  margin-bottom: 0px;\n}\n.gender, .phone, .email {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  border-bottom: solid 2px #fff !important;\n  height: 50px;\n}\n.email-input-col ion-input {\n  --padding-end: 0;\n  --padding-start: 0;\n}\nform ion-col div {\n  height: 45px;\n}\n@media only screen and (max-width: 549px) {\n  .profile-back {\n    width: 502px;\n    height: 247px;\n    background-color: #64bfbb;\n    margin: -147px auto;\n    border-bottom-left-radius: 1000px;\n    border-bottom-right-radius: 1000px;\n  }\n\n  .user-profile {\n    --size: 90px !important;\n    margin: 97px auto;\n  }\n\n  .camera-icon {\n    border-radius: 50px;\n    background-color: #f55a0e;\n    font-size: 18px;\n    position: absolute;\n    bottom: 110px;\n    right: 140px;\n    color: #fff;\n    padding: 4px;\n  }\n}\n@media only screen and (max-width: 393px) {\n  .camera-icon {\n    border-radius: 50px;\n    background-color: #f55a0e;\n    font-size: 18px;\n    position: absolute;\n    bottom: 110px;\n    right: 126px;\n    color: #fff;\n    padding: 4px;\n  }\n}\n@media only screen and (max-width: 340px) {\n  .camera-icon {\n    border-radius: 50px;\n    background-color: #f55a0e;\n    font-size: 18px;\n    position: absolute;\n    bottom: 110px;\n    right: 114px;\n    color: #fff;\n    padding: 4px;\n  }\n}\n@media only screen and (max-width: 486px) {\n  .profile-back {\n    width: 473px;\n    height: 225px;\n    background-color: #64bfbb;\n    margin: -147px auto;\n    border-bottom-left-radius: 1000px;\n    border-bottom-right-radius: 1000px;\n  }\n}\n@media only screen and (max-width: 460px) {\n  .profile-back {\n    width: 460px;\n    height: 225px;\n    background-color: #64bfbb;\n    margin: -147px auto;\n    border-bottom-left-radius: 1000px;\n    border-bottom-right-radius: 1000px;\n  }\n}\n@media only screen and (min-width: 320px) {\n  .profile-back {\n    width: 325px;\n    height: 212px;\n  }\n}\n@media only screen and (min-width: 420px) {\n  .profile-back {\n    width: 365px;\n    height: 212px;\n  }\n}\n.user-edit-close {\n  float: right;\n  font-size: 24px;\n  color: #65a2ad;\n  position: absolute;\n  top: 30px;\n  right: 8px;\n  cursor: pointer;\n}\n.selection-border {\n  border-bottom: solid 2px #68bfbb !important;\n}\n:host mat-select ::ng-deep .mat-select-arrow {\n  color: white;\n  opacity: 0;\n}\n::ng-deep .mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: white;\n}\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 0px;\n}\n::ng-deep .mat-select-value {\n  color: #909090 !important;\n}\n.calliconmargin {\n  margin-left: 20px;\n}\n.edit-user-pencil-icon {\n  width: 29px;\n  height: 29px;\n  position: absolute;\n  bottom: 5px;\n  right: 0px;\n  z-index: 9999999;\n  padding: 7px;\n  background: #ffffff00;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci9lZGl0LXVzZXItbW9kYWwvZWRpdC11c2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUFBUjtBQUNFO0VBRkU7SUFHQSxpQkFBQTtFQUVGO0FBQ0Y7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUNRO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7T0FBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxtQkFBQTtBQUNaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHSTtFQUVBLG9CQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtPQUFBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGWjtBQU9RO0VBQ0ksaUJBQUE7QUFMWjtBQVNRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBUFo7QUFXUTtFQUNJLGtCQUFBO0FBVFo7QUFXUTtFQUNJLFdBQUE7QUFUWjtBQWFRO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVhaO0FBYVE7RUFDSSxlQUFBO0FBWFo7QUFhUTtFQUNJLG1CQUFBO0FBWFo7QUFhUTtFQUNHLFlBQUE7QUFYWDtBQWNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFaUjtBQWVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBR0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFmUjtBQWlCSTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZlI7QUFrQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWhCWjtBQW1CSTtFQUNJLGdCQUFBO0FBakJSO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFsQlI7QUF3Qkk7RUFDSSxZQUFBO0VBQ0osV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdEJKO0FBeUJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXZCUjtBQTBCUTtFQUNJLGtCQUFBO0FBeEJaO0FBMEJRO0VBQ0ksV0FBQTtBQXhCWjtBQTRCSTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUExQlI7QUE4QkE7RUFHSSxzQkFBQTtFQUNBLGlCQUFBO0FBN0JKO0FBK0JJO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQTdCUjtBQWlDQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUEvQko7QUFrQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUEvQko7QUFrQ0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQS9CSjtBQW9DQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFsQ0o7QUFvQ0E7RUFDSSxtQkFBQTtBQWxDSjtBQXNDQTtFQUNHLFdBQUE7RUFDQSxjQUFBO0FBbkNIO0FBc0NBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBbkNKO0FBd0NJO0VBQ0ksbUJBQUE7QUF0Q1I7QUEyQ0E7RUFHSSxZQUFBO0VBQ0EseUJBQUE7QUExQ0o7QUE2Q0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTFDSjtBQTZDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBMUNKO0FBNkNFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUExQ0o7QUE0Q0k7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXpDSjtBQThDQTs7RUFHUSxrQkFBQTtBQTVDUjtBQWdEQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSx3Q0FBQTtFQUNBLFlBQUE7QUEvQ0o7QUFpREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBOUNKO0FBa0RRO0VBQ0ksWUFBQTtBQS9DWjtBQW9ERTtFQUNFO0lBRUksWUFBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtFQWxETjs7RUFxREU7SUFDSSx1QkFBQTtJQUNBLGlCQUFBO0VBbEROOztFQXFERTtJQUNJLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBbEROO0FBQ0Y7QUF1REE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBckROO0FBQ0Y7QUF3REE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBdEROO0FBQ0Y7QUF5REE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlDQUFBO0lBQ0Esa0NBQUE7RUF2RE47QUFDRjtBQTREQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtFQTFETjtBQUNGO0FBK0RBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQTdETjtBQUNGO0FBaUVBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQS9ETjtBQUNGO0FBaUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUEvREo7QUFpRUE7RUFDSSwyQ0FBQTtBQTlESjtBQXNFSTtFQUNJLFlBQUE7RUFDQyxVQUFBO0FBbkVUO0FBcUVRO0VBQ0ksWUFBQTtBQWxFWjtBQW9FRztFQUNDLG1CQUFBO0FBakVKO0FBb0VBO0VBQ0kseUJBQUE7QUFqRUo7QUFtRUM7RUFDSSxpQkFBQTtBQWhFTDtBQWtFQztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBL0RKO0FBa0VDOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQS9ETDtBQWtFQyxZQUFBO0FBQ0E7RUFDRSwwQkFBQTtBQS9ESCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXIvZWRpdC11c2VyLW1vZGFsL2VkaXQtdXNlci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBpb24tdG9nZ2xle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzM5cHgpe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcblxyXG4gICAgfVxyXG59XHJcbiAgICAucm9sZXtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgICAgICAjc2VsZWN0cm9sZXtcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjowcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjojZjA4NzU0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3NlbGVjdGRlcHR7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICAgICAgICBmb250LXdlaWdodDogNDAwOyAgXHJcbiAgICB9XHJcbiAgICAuYnJhbmNoe1xyXG4gICAgICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuXHJcbiAgICAgICAgI3NlbGVjdGJyYW5jaHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXI6MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lbWFpbHtcclxuICAgICAgICAuZW1haWwtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAvLyBsZWZ0OjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbWFpbC1maWVsZHtcclxuICAgICAgICAgICAgY29sb3I6IzhkOGQ4ZDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwtaW1ne1xyXG4gICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIC5waG9uZS1maWVsZHtcclxuICAgICAgICAgICAgY29sb3I6ICM4MzgzODM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG9uZS1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBob25lLWltZ3tcclxuICAgICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiM4ZDhkOGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53aGF0c2FwcC1pY29ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gbGVmdDogMzZweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICM3YWQwNmQgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcbiAgICAjc2VsZWN0SUR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOjBweDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gICAgICAgIGNvbG9yOiM4MzgzODM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRva2VuLXR5cGUtc2VsZWN0LWJveHtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojOGQ4ZDhkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5nZW5kZXJTZWxlY3R7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6N3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LW1vZGFsLXBlbmNpbHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAvLyAuZ2VuZGVyLWljb257XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIGxlZnQ6NzBweDtcclxuICAgIC8vIH1cclxuICAgIC5waG9uZS1lZGl0LXBlbmNpbHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFkZGluZy1yb3d7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZ2VuZGVye1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2VuZGVyLWltZ3tcclxuICAgICAgICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItcHJvZmlsZXtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIHRvcDogLTE3MnB4O1xyXG4gICAgLS1zaXplOjkwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjo5M3B4IGF1dG87XHJcblxyXG4gICAgLnByb2ZpbGUtaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWJhY2t7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDI2cHg7XHJcbiAgICBoZWlnaHQ6IDIzMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0YmZiYjtcclxuICAgIG1hcmdpbjogLTE0MnB4IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtZ3JpZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUycHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWhlYWR7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG4gICAgY29sb3I6IzZjNmM2YztcclxuLy8gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdG9wOiAtODBweDtcclxuLy8gICAgIGxlZnQ6IDBweDtcclxuLy8gICAgIGNvbG9yOiAjNmM2YzZjOyBcclxuaW9uLWlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6ICM2NTY1NjUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XHJcbn1cclxuaW1ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG59XHJcblxyXG4uZGVzaWduYXRpb257XHJcbiAgIG1hcmdpbjogMHB4O1xyXG4gICBjb2xvcjogI2YwODc1NDtcclxufVxyXG5cclxuLmRlcHR7XHJcbiAgICBjb2xvcjogIzY0YmZiYjtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gdG9wOiAtMjA4cHg7XHJcbiAgICAvLyBsZWZ0OiAwcHg7XHJcbiAgICAvLyBjb2xvcjogIzY0YmZiYjtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmhyLm5ldzUge1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gdG9wOiAtMjY1cHg7XHJcbiAgICB3aWR0aDoxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtaWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ0bntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDM5cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FtZXJhLWljb257XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NWEwZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTA1cHg7XHJcbiAgICByaWdodDogMTcwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcbiAgICAjZXh0RXJyb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDgxcHg7XHJcbiAgICByaWdodDogMTMycHg7XHJcbiAgICBjb2xvcjogI2JiMDAwMDtcclxuICAgIH1cclxuXHJcblxyXG4vLyAwNS0wNC0yMDIxXHJcbi5kZXB0LFxyXG4uYnJhbmNoIFxyXG57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxuICAgICAgICAvLyBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuLmdlbmRlciwucGhvbmUsLmVtYWlse1xyXG5cclxuICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmVtYWlsLWlucHV0LWNvbCBpb24taW5wdXR7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59XHJcbmZvcm17XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0OXB4KXtcclxuICAgIC5wcm9maWxlLWJhY2t7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MDJweCA7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiZmJiO1xyXG4gICAgICAgIG1hcmdpbjogLTE0N3B4IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgLS1zaXplOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA5N3B4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbWVyYS1pY29ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NWEwZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuXHJcbiBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTNweCl7XHJcbiAgICAuY2FtZXJhLWljb257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU1YTBlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMTBweDtcclxuICAgICAgICByaWdodDogMTI2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KXtcclxuICAgIC5jYW1lcmEtaWNvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTVhMGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDExMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMTRweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg2cHgpe1xyXG4gICAgLnByb2ZpbGUtYmFja3tcclxuICAgICAgICB3aWR0aDogNDczcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiZmJiO1xyXG4gICAgICAgIG1hcmdpbjogLTE0N3B4IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCl7XHJcbiAgICAucHJvZmlsZS1iYWNre1xyXG4gICAgICAgIHdpZHRoOiA0NjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NGJmYmI7XHJcbiAgICAgICAgbWFyZ2luOiAtMTQ3cHggYXV0bztcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KXtcclxuICAgIC5wcm9maWxlLWJhY2t7XHJcbiAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KXtcclxuICAgIC5wcm9maWxlLWJhY2t7XHJcbiAgICAgICAgd2lkdGg6IDM2NXB4O1xyXG4gICAgICAgIGhlaWdodDogMjEycHg7XHJcbiAgICB9XHJcbn1cclxuLnVzZXItZWRpdC1jbG9zZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNjVhMmFkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VsZWN0aW9uLWJvcmRlcntcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNjhiZmJiIWltcG9ydGFudDtcclxuXHJcbiAgICAgICBcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAvLyBoZWlnaHQ6IDQ1cHg7XHJcblxyXG5cclxuICAgfVxyXG4gICAgOmhvc3QgbWF0LXNlbGVjdCA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3d7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzkwOTA5MCAhaW1wb3J0YW50OyBcclxuIH1cclxuIC5jYWxsaWNvbm1hcmdpbntcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuIH1cclxuIC5lZGl0LXVzZXItcGVuY2lsLWljb257XHJcbiAgICB3aWR0aDogMjlweDtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDA7XHJcbiB9XHJcblxyXG4gaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgICAgbWFyZ2luOiAwOyBcclxuIH1cclxuIFxyXG4gLyogRmlyZWZveCAqL1xyXG4gaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiB9Il19 */";
      /***/
    },

    /***/
    "./src/app/admin/user/edit-user-modal/edit-user-modal.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/user/edit-user-modal/edit-user-modal.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EditUserModalComponent */

    /***/
    function srcAppAdminUserEditUserModalEditUserModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserModalComponent", function () {
        return EditUserModalComponent;
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
      /*! ../../../services/main-services.service */
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

      var EditUserModalComponent = /*#__PURE__*/function () {
        function EditUserModalComponent(fb, route, router, main_serives, navParams, modalController, notificationService) {
          _classCallCheck(this, EditUserModalComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.main_serives = main_serives;
          this.navParams = navParams;
          this.modalController = modalController;
          this.notificationService = notificationService;
          this.getId = this.navParams.get('_id');
          this.valueUserName = true;
          this.valueUserPhone = true;
          this.valueUserEmail = true;
          this.valueUserPsw = true;
          this.valuebranch = true;
          this.line_value_name = "none";
          this.line_value_mobile = "none";
          this.line_value_gender = "none";
          this.line_value_email = "none";
          this.line_value_password = "none";
          this.line_value_branch = "none";
          this.line_value_role = "none";
          this.line_value_dept = "none";
          this.filesToUpload = [];
          this.selectedFile = [];
          this.showFields = true;
          this.disablebranch = true;
          this.disabledbtn = true;
          this.disablegender = true;
          this.disablerole = true;
          this.roleRight = false;
          this.deptRight = false;
          this.branchRight = false;
          this.emailRight = false;
          this.phoneRight = false;
          this.genderRight = false;
          this.nameRight = false;
          this.isLoading = false;
          this.editUserForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]+")]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            is_whatsapp_enabled: [false],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            // password:['',Validators.required],
            branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.getPermission = JSON.parse(localStorage.getItem('login_permission'));
          this.userId = this.getPermission.id;
        }

        _createClass(EditUserModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('document').ready(function () {
              jquery__WEBPACK_IMPORTED_MODULE_6___default()('#extError').click(function () {
                alert('hello');
              });
            });
          }
        }, {
          key: "changeToggle",
          value: function changeToggle() {
            this.showBtn = true;
          }
        }, {
          key: "tokenImage",
          value: function tokenImage(event) {
            this.showBtn = true;
            this.selectedFile = event.target.files[0];
            this.filesToUpload.push(this.selectedFile);
            var fileName = this.selectedFile.name;
            this.extension = fileName.split('.').pop();
            var reader = new FileReader();

            if (this.extension == 'png' || this.extension == 'jpg' || this.extension == 'jpeg' || this.extension == 'gif' || this.extension == 'webp') {
              reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#blah').attr('src', e.target.result);
              };

              reader.readAsDataURL(this.selectedFile); // convert to base64 string

              this.extensionErr = false;
            } else {
              this.showExtError = "Couldn't set profile photo.";
              this.extensionErr = true; // $(document).ready(function(){
              // $('#extError').fadeIn(1000);
              // $('#extError').fadeOut(5000);
              // })
            }
          }
        }, {
          key: "editUserName",
          value: function editUserName() {
            this.showBtn = true;
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').removeClass('selection-border'); // this.line_value_name = "line";

            this.valueUserName = false;
            this.disablebranch = true;
            this.valueUserEmail = true;
            this.disablegender = true;
            this.valueUserPhone = true;
            this.disabledbtn = true;
            this.disablerole = true;
          }
        }, {
          key: "InsertData",
          value: function InsertData() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name-pencil').hide();
            this.nameRight = true;
          }
        }, {
          key: "editBranch",
          value: function editBranch() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').removeClass('selection-border');
            this.showBtn = true; // this.line_value_branch = "line";
            // $('#selectbranch').attr('disabled',false);
            // $('.branch-pencil').hide(); 

            this.valueUserName = true;
            this.valueUserEmail = true;
            this.disablegender = true;
            this.valueUserPhone = true;
            this.disabledbtn = true;
            this.disablerole = true;
            this.disablebranch = false;
          }
        }, {
          key: "applyBranch",
          value: function applyBranch() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch-pencil').hide();
            this.branchRight = true;
          }
        }, {
          key: "editUserEmail",
          value: function editUserEmail() {
            this.showBtn = true;
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').removeClass('selection-border'); // this.line_value_email = "line";

            this.valueUserName = true;
            this.disablebranch = true;
            this.disablegender = true;
            this.valueUserPhone = true;
            this.disabledbtn = true;
            this.disablerole = true;
            this.valueUserEmail = false;
          }
        }, {
          key: "InsertEmail",
          value: function InsertEmail() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email-pencil').hide();
            this.emailRight = true;
          }
        }, {
          key: "editGender",
          value: function editGender() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').removeClass('selection-border');
            this.showBtn = true; // this.line_value_gender = "line";

            this.valueUserName = true;
            this.disablebranch = true;
            this.valueUserEmail = true;
            this.valueUserPhone = true;
            this.disabledbtn = true;
            this.disablerole = true;
            this.disablegender = false;
          }
        }, {
          key: "applyGender",
          value: function applyGender() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender-pencil').hide();
            this.genderRight = true;
          }
        }, {
          key: "editUserPhone",
          value: function editUserPhone() {
            this.showBtn = true;
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').removeClass('selection-border'); // this.line_value_mobile = "line";

            this.valueUserPhone = false;
            this.valueUserName = true;
            this.disablebranch = true;
            this.valueUserEmail = true;
            this.disablegender = true;
            this.disabledbtn = true;
            this.disablerole = true;
          }
        }, {
          key: "InsertPhone",
          value: function InsertPhone() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.number-pencil').hide();
            this.phoneRight = true;
          }
        }, {
          key: "editUserPsw",
          value: function editUserPsw() {
            this.showBtn = true; // this.line_value_password = "line";

            this.valueUserPsw = false;
          }
        }, {
          key: "editDepartment",
          value: function editDepartment() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').removeClass('selection-border');
            this.showBtn = true; // this.line_value_dept = "line"; 

            this.disabledbtn = false;
            this.valueUserName = true;
            this.disablebranch = true;
            this.valueUserEmail = true;
            this.disablegender = true;
            this.valueUserPhone = true;
            this.disablerole = true;
          }
        }, {
          key: "applyDept",
          value: function applyDept() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.department-pencil').hide();
            this.deptRight = true;
          }
        }, {
          key: "editRole",
          value: function editRole() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role').addClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.name').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.branch').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.email').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gender').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.phone').removeClass('selection-border');
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.dept').removeClass('selection-border');
            this.showBtn = true; // this.line_value_role = "line";

            this.disablerole = false;
            this.valueUserName = true;
            this.disablebranch = true;
            this.valueUserEmail = true;
            this.disablegender = true;
            this.valueUserPhone = true;
            this.disabledbtn = true;
          }
        }, {
          key: "applyrole",
          value: function applyrole() {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.role-pencil').hide();
            this.roleRight = true;
          }
        }, {
          key: "get_branches",
          value: function get_branches() {
            var _this5 = this;

            this.isLoading = true;
            this.main_serives.getBranchesList().subscribe(function (result) {
              _this5.isLoading = false;
              _this5.branchesList = result['branches'];
            });
          }
        }, {
          key: "get_depts",
          value: function get_depts() {
            var _this6 = this;

            this.isLoading = true;
            this.main_serives.getDepartmentsList().subscribe(function (result) {
              _this6.isLoading = false;
              _this6.departmentsList = result['departments'];
              _this6.departments = result['departments'];
            });
          }
        }, {
          key: "get_roles",
          value: function get_roles() {
            var _this7 = this;

            this.isLoading = true;
            this.main_serives.getRolesList().subscribe(function (result) {
              _this7.isLoading = false;
              _this7.rolesList = result['roles'];
            });
          }
        }, {
          key: "branch_name",
          value: function branch_name(e) {
            this.departmentsList = this.departments.filter(function (department) {
              return department.branch._id == e.target.value;
            });
            this.editUserForm.get('department').setValue(''); // this.branch = e.target.value
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this8 = this;

            jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
              jquery__WEBPACK_IMPORTED_MODULE_6___default()('#mat-select-value-1').addClass('roleSelect');
            });
            this.get_branches();
            this.get_depts();
            this.get_roles();
            this.isLoading = true;
            this.main_serives.getUserDetails(this.getId).subscribe(function (data) {
              _this8.isLoading = false;
              _this8.userData = data['user'];
              _this8.checkWatsapp = data['user']['is_whatsapp_enabled'];
              _this8.imageData = data['user']['image'] ? data['user']['image'].url : '';
              _this8.isRole = data['user']['role']['name'];

              if (!_this8.userData.branch || _this8.userData.department) {
                _this8.showFields = false;
              }

              _this8.editUserForm = _this8.fb.group({
                name: [_this8.userData.name],
                gender: [_this8.userData.gender],
                phone: [_this8.userData.phone],
                is_whatsapp_enabled: [_this8.userData.is_whatsapp_enabled],
                email: [_this8.userData.email],
                branch: [_this8.userData.branch ? _this8.userData.branch._id : ''],
                department: [_this8.userData.department ? _this8.userData.department._id : ''],
                role: [_this8.userData.role._id]
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "editUser",
          value: function editUser(value) {
            var _this9 = this;

            this.router.navigateByUrl['/home'];
            var formData = new FormData();
            formData.append('name', value.name);
            formData.append('phone', value.phone);
            formData.append('is_whatsapp_enabled', value.is_whatsapp_enabled);
            formData.append('email', value.email);
            formData.append('gender', value.gender);
            formData.append('branch', value.branch);
            formData.append('department', value.department);
            formData.append('role', value.role);

            if (this.selectedFile.length == 0) {
              formData.append('image', this.imageData);
            } else {
              if (this.extension == 'png' || this.extension == 'jpg' || this.extension == 'jpeg' || this.extension == 'gif' || this.extension == 'webp') {
                formData.append('image', this.selectedFile);
              }
            } // return 0;


            this.main_serives.editUserDetails(this.getId, formData).subscribe(function (result) {
              _this9.modalController.dismiss(result, 'success');

              _this9.main_serives.filter('click');
            }, function (error) {
              console.log(error);
              _this9.errName = error['error']['error']['name'];
              _this9.errPhone = error['error']['error']['phone'];
              _this9.errMail = error['error']['error']['email'];

              if (_this9.errName || _this9.errPhone || _this9.errMail) {
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

        return EditUserModalComponent;
      }();

      EditUserModalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]
        }];
      };

      EditUserModalComponent.propDecorators = {
        _id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      EditUserModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-user-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/edit-user-modal/edit-user-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-user-modal.component.scss */
        "./src/app/admin/user/edit-user-modal/edit-user-modal.component.scss"))["default"]]
      })], EditUserModalComponent);
      /***/
    },

    /***/
    "./src/app/admin/user/users-list/users-list-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admin/user/users-list/users-list-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: UsersListPageRoutingModule */

    /***/
    function srcAppAdminUserUsersListUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageRoutingModule", function () {
        return UsersListPageRoutingModule;
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


      var _users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users-list.page */
      "./src/app/admin/user/users-list/users-list.page.ts");

      var routes = [{
        path: '',
        component: _users_list_page__WEBPACK_IMPORTED_MODULE_3__["UsersListPage"]
      }];

      var UsersListPageRoutingModule = function UsersListPageRoutingModule() {
        _classCallCheck(this, UsersListPageRoutingModule);
      };

      UsersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admin/user/users-list/users-list.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/admin/user/users-list/users-list.module.ts ***!
      \************************************************************/

    /*! exports provided: UsersListPageModule */

    /***/
    function srcAppAdminUserUsersListUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageModule", function () {
        return UsersListPageModule;
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


      var _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-list-routing.module */
      "./src/app/admin/user/users-list/users-list-routing.module.ts");
      /* harmony import */


      var _users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-list.page */
      "./src/app/admin/user/users-list/users-list.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var _add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../add-user-modal/add-user-modal.component */
      "./src/app/admin/user/add-user-modal/add-user-modal.component.ts");
      /* harmony import */


      var _edit_user_modal_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../edit-user-modal/edit-user-modal.component */
      "./src/app/admin/user/edit-user-modal/edit-user-modal.component.ts");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

      var UsersListPageModule = function UsersListPageModule() {
        _classCallCheck(this, UsersListPageModule);
      };

      UsersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersListPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"]],
        declarations: [_users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"], _add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddUserModalComponent"], _edit_user_modal_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditUserModalComponent"]]
      })], UsersListPageModule);
      /***/
    },

    /***/
    "./src/app/admin/user/users-list/users-list.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/admin/user/users-list/users-list.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminUserUsersListUsersListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  height: 100%;\n}\n\n.table-grid .head {\n  background: #a1a1a1;\n  border-radius: 35px;\n  margin-bottom: 20px;\n  height: 45px;\n  padding-top: 12px;\n}\n\n@media only screen and (max-width: 767px) {\n  .table-grid .head {\n    display: none !important;\n  }\n}\n\n.table-grid .head .userpadding {\n  padding-left: 73px;\n}\n\n@media only screen and (max-width: 1165px) {\n  .table-grid .head .userpadding {\n    padding-left: 62px;\n  }\n}\n\n@media only screen and (max-width: 1065px) {\n  .table-grid .head .userpadding {\n    padding-left: 50px;\n  }\n}\n\n@media only screen and (max-width: 941px) {\n  .table-grid .head .userpadding {\n    padding-left: 48px;\n  }\n}\n\n@media only screen and (max-width: 778px) {\n  .table-grid .head .userpadding {\n    padding-left: 42px;\n  }\n}\n\n.table-grid .head .secondth {\n  padding-left: 50px;\n}\n\n@media only screen and (max-width: 991px) {\n  .table-grid .head .secondth {\n    padding-left: 25px;\n  }\n}\n\n.table-grid .head .thirdth {\n  padding-left: 6px;\n}\n\n.table-grid .head .th {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 1212px) {\n  .table-grid .head .th {\n    font-size: 16px;\n  }\n}\n\n.table-grid .head .th .mat-sort-header-container.mat-focus-indicator.ng-tns-c145-0 {\n  display: block;\n}\n\n.table-grid .head .th span {\n  margin: auto;\n}\n\n.table-grid .body {\n  background: #ffffff;\n  border-radius: 18px;\n  margin-bottom: 20px;\n  min-height: 59px;\n  padding-top: 7px;\n  box-shadow: 0px 2px 12px #bfbfbf;\n  height: auto;\n  cursor: pointer;\n}\n\n.table-grid .body .ion-color-primary {\n  border-radius: 13px;\n  width: 44px;\n  height: 22px;\n  font-size: 14px;\n  background-color: #f1660a;\n  padding-top: 5px;\n}\n\n@media only screen and (max-width: 1212px) {\n  .table-grid .body .ion-color-primary {\n    width: 38px;\n    height: 20px;\n    font-size: 11px;\n  }\n}\n\n@media only screen and (max-width: 941px) {\n  .table-grid .body .ion-color-primary {\n    width: 34px;\n    height: 18px;\n    font-size: 10px;\n    margin-top: 2px;\n  }\n}\n\n@media only screen and (max-width: 873px) {\n  .table-grid .body .ion-color-primary {\n    width: 31px;\n    height: 16px;\n    font-size: 7px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .table-grid .body .ion-color-primary {\n    width: 34px;\n    height: 19px;\n    font-size: 9px;\n  }\n}\n\n.table-grid .body ion-icon {\n  margin-left: 4px;\n  color: #5fd45f;\n}\n\n.table-grid .body #userimgg {\n  border-radius: 90px;\n  width: 25px;\n  height: 25px;\n  background: #fff;\n  margin-right: 5px;\n}\n\n@media only screen and (max-width: 767px) {\n  .table-grid .body #userimgg {\n    display: none;\n  }\n}\n\n.table-grid .body #cross {\n  display: none;\n  color: white;\n  background: #ba1e24;\n  border-radius: 50%;\n  margin-top: -8px;\n  font-size: 18px;\n  position: absolute;\n  right: 0;\n}\n\n.table-grid .body .iconimg {\n  padding: 0px;\n  margin-left: 0px;\n  text-align: center;\n}\n\n.table-grid .body .iconimg #iconimage {\n  border-radius: 23px;\n  width: 25px;\n  height: 25px;\n}\n\n.table-grid .body .listheading {\n  font-weight: 500;\n  font-size: 15px;\n  text-transform: capitalize;\n  color: #a1a1a1;\n  position: relative;\n  top: 9px;\n}\n\n@media only screen and (max-width: 768px) {\n  .table-grid .body .content_col {\n    border-left: dashed 1px #d2d2d2;\n    margin-bottom: 5px;\n    margin-left: 8px;\n  }\n}\n\n@media only screen and (max-width: 768px) and (max-width: 575px) {\n  .table-grid .body .content_col {\n    margin-left: 0px;\n  }\n}\n\n@media only screen and (max-width: 768px) and (max-width: 470px) {\n  .table-grid .body .content_col {\n    margin-left: 7px;\n  }\n}\n\n.table-grid .body .td {\n  color: #4a4a4ac2;\n  font-weight: 400;\n  font-size: 16px;\n  text-transform: capitalize;\n  padding-top: 6px;\n}\n\n@media only screen and (max-width: 1212px) {\n  .table-grid .body .td {\n    font-size: 15px;\n  }\n}\n\n.table-grid .body .firsttd {\n  padding-left: 60px;\n}\n\n@media only screen and (max-width: 1165px) {\n  .table-grid .body .firsttd {\n    padding-left: 50px;\n  }\n}\n\n@media only screen and (max-width: 1065px) {\n  .table-grid .body .firsttd {\n    padding-left: 40px;\n  }\n}\n\n@media only screen and (max-width: 941px) {\n  .table-grid .body .firsttd {\n    padding-left: 35px;\n  }\n}\n\n@media only screen and (max-width: 778px) {\n  .table-grid .body .firsttd {\n    padding-left: 30px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .table-grid .body .firsttd {\n    padding-left: 11px;\n    font-size: 14px;\n    font-weight: 500;\n    margin-top: -4px;\n  }\n}\n\n.table-grid .body .secondtd {\n  padding-left: 44px;\n}\n\n@media only screen and (max-width: 991px) {\n  .table-grid .body .secondtd {\n    padding-left: 21px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .table-grid .body .secondtd {\n    padding-left: 12px;\n    font-size: 14px;\n    margin: 0 0 0 0;\n    padding-top: 8px;\n    font-weight: 300;\n  }\n}\n\n.table-grid .body .thirdtd {\n  padding-left: 6px;\n}\n\n@media only screen and (max-width: 767px) {\n  .table-grid .body .thirdtd {\n    padding-left: 12px;\n    font-size: 14px;\n    margin: 0 0 0 0;\n    padding-top: 8px;\n    font-weight: 300;\n  }\n}\n\n.table-grid .body .fourthtd {\n  padding-left: 47px;\n}\n\n@media only screen and (max-width: 1213px) {\n  .table-grid .body .fourthtd {\n    padding-left: 38px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .table-grid .body .fourthtd {\n    padding-left: 14px;\n  }\n}\n\n.table-grid .body:hover {\n  box-shadow: 0px 7px 26px #a7a7a7d1;\n}\n\n.table-grid .body:hover #cross {\n  display: block;\n}\n\nion-header ion-toolbar:first-of-type {\n  margin-top: -29px;\n}\n\nion-header ion-toolbar:first-of-type #menu {\n  font-size: 25px;\n  padding-left: 11px;\n  padding-top: 14px;\n  cursor: pointer;\n}\n\nion-header ion-toolbar:first-of-type ion-badge {\n  position: relative;\n  top: -17px;\n  left: -17px;\n  font-size: 11px;\n  background: red;\n  border-radius: 50%;\n  font-weight: 300;\n  padding: 4px;\n}\n\n.list-pages {\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n.list-pages .linkcol {\n  font-size: 17px;\n  margin-top: -55px;\n  cursor: pointer;\n}\n\n.list-pages .linkcol #home {\n  padding-right: 10px;\n  color: #68bfbb;\n}\n\n@media only screen and (max-width: 540px) {\n  .list-pages .linkcol #home {\n    padding-right: 5px;\n  }\n}\n\n.list-pages .linkcol #about {\n  color: #4a4a4ac2;\n  padding-left: 10px;\n}\n\n@media only screen and (max-width: 540px) {\n  .list-pages .linkcol #about {\n    padding-right: 6px;\n  }\n}\n\n.sucessMessage {\n  position: relative;\n  top: -5px;\n  left: 9px;\n}\n\n#successMsg {\n  box-shadow: 0px 1px 7px #15572461;\n}\n\n.alert-success {\n  position: relative;\n  top: 53px;\n  width: 1388px;\n  margin: auto;\n}\n\n.ionFabbtn {\n  display: none;\n}\n\n@media only screen and (max-width: 991px) {\n  .ionFabbtn {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci91c2Vycy1saXN0L3VzZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtBQUNEOztBQUlDO0VBQ0MsbUJBQUE7RUFDRyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBR0U7RUFQRDtJQVFFLHdCQUFBO0VBQUQ7QUFDRjs7QUFDRTtFQUNDLGtCQUFBO0FBQ0g7O0FBQUc7RUFGRDtJQUdFLGtCQUFBO0VBR0Y7QUFDRjs7QUFGRztFQUxEO0lBTUUsa0JBQUE7RUFLRjtBQUNGOztBQUhHO0VBVEQ7SUFVRSxrQkFBQTtFQU1GO0FBQ0Y7O0FBTEc7RUFaRDtJQWFFLGtCQUFBO0VBUUY7QUFDRjs7QUFORTtFQUNDLGtCQUFBO0FBUUg7O0FBUEc7RUFGRDtJQUdFLGtCQUFBO0VBVUY7QUFDRjs7QUFSRTtFQUNDLGlCQUFBO0FBVUg7O0FBTkU7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFRTjs7QUFORztFQU5EO0lBT0UsZUFBQTtFQVNGO0FBQ0Y7O0FBUk07RUFDQyxjQUFBO0FBVVA7O0FBSE07RUFDQyxZQUFBO0FBS1A7O0FBQ0M7RUFDQyxtQkFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0VBQ04sZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUFFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ1MsWUFBQTtFQUNULGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRUg7O0FBREc7RUFQRDtJQVFFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQUlGO0FBQ0Y7O0FBSEc7RUFaRDtJQWFFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUFNRjtBQUNGOztBQUxHO0VBbEJEO0lBbUJDLFdBQUE7SUFDUyxZQUFBO0lBQ0EsY0FBQTtFQVFWO0FBQ0Y7O0FBUEc7RUF2QkQ7SUF3QkUsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBVUY7QUFDRjs7QUFSRztFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVVIOztBQVJFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFVSDs7QUFURztFQU5EO0lBT0UsYUFBQTtFQVlGO0FBQ0Y7O0FBVEU7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFXSDs7QUFURTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBV0g7O0FBVkc7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWUo7O0FBUkU7RUFDQyxnQkFBQTtFQUNHLGVBQUE7RUFDQSwwQkFBQTtFQUNILGNBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7QUFTSDs7QUFORTtFQUNBO0lBQ0MsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBUUQ7QUFDRjs7QUFSRztFQUpEO0lBS1UsZ0JBQUE7RUFXVjtBQUNGOztBQVZHO0VBUEQ7SUFRRSxnQkFBQTtFQWFGO0FBQ0Y7O0FBVEU7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFXSDs7QUFWRztFQU5EO0lBT0UsZUFBQTtFQWFGO0FBQ0Y7O0FBVEU7RUFDQyxrQkFBQTtBQVdIOztBQVZHO0VBRkQ7SUFHRSxrQkFBQTtFQWFGO0FBQ0Y7O0FBWkc7RUFMRDtJQU1FLGtCQUFBO0VBZUY7QUFDRjs7QUFiRztFQVREO0lBVUUsa0JBQUE7RUFnQkY7QUFDRjs7QUFmRztFQVpEO0lBYUUsa0JBQUE7RUFrQkY7QUFDRjs7QUFqQkc7RUFmRDtJQWdCRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBb0JGO0FBQ0Y7O0FBbEJRO0VBQ0ksa0JBQUE7QUFvQlo7O0FBbkJHO0VBRks7SUFHSixrQkFBQTtFQXNCRjtBQUNGOztBQXJCRztFQUxLO0lBTUosa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUF3QkY7QUFDRjs7QUF0QkU7RUFDQyxpQkFBQTtBQXdCSDs7QUF2Qkc7RUFGRDtJQUdFLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBMEJGO0FBQ0Y7O0FBdkJFO0VBQ0Msa0JBQUE7QUF5Qkg7O0FBeEJHO0VBRkQ7SUFHRSxrQkFBQTtFQTJCRjtBQUNGOztBQTFCRztFQUxEO0lBTUUsa0JBQUE7RUE2QkY7QUFDRjs7QUExQkM7RUFDQyxrQ0FBQTtBQTRCRjs7QUEzQkU7RUFDQyxjQUFBO0FBNkJIOztBQXpCQTtFQUdDLGlCQUFBO0FBMEJEOztBQXpCQztFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTJCRjs7QUF4QkM7RUFDTyxrQkFBQTtFQUNILFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTBCTDs7QUF0QkE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBeUJEOztBQXhCQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUEwQkY7O0FBekJFO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMkJIOztBQTFCRztFQUhEO0lBSUUsa0JBQUE7RUE2QkY7QUFDRjs7QUEzQkU7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBNkJIOztBQTVCRztFQUhEO0lBSUUsa0JBQUE7RUErQkY7QUFDRjs7QUExQkE7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxTQUFBO0FBNkJKOztBQTFCQTtFQUNDLGlDQUFBO0FBNkJEOztBQTFCQTtFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBNkJKOztBQTFCQTtFQUNDLGFBQUE7QUE2QkQ7O0FBNUJDO0VBRkQ7SUFHRSxjQUFBO0VBK0JBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi91c2VyL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuXHRoZWlnaHQ6MTAwJTtcclxufVxyXG4udGFibGUtZ3JpZHtcclxuXHRcclxuXHJcblx0LmhlYWR7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYTFhMWExO1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiAzNXB4O1x0ICAgIFxyXG5cdCAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuXHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHRcdFx0ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0XHQudXNlcnBhZGRpbmd7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogNzNweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDExNjVweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNjJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTA2NXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTQxcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDQ4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc3OHB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA0MnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuc2Vjb25kdGh7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQudGhpcmR0aHtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiA2cHg7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0LnRoe1xyXG5cdFx0ICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHQgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cdFx0ICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0ICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMjEycHgpIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdH1cclxuXHRcdCAgICAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lci5tYXQtZm9jdXMtaW5kaWNhdG9yLm5nLXRucy1jMTQ1LTAge1xyXG5cdFx0XHQgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0Ly8gbWFyZ2luOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHJcblx0XHQgICBcclxuXHRcdCAgICBzcGFue1xyXG5cdFx0ICAgIFx0bWFyZ2luOmF1dG87XHJcblx0XHRcdFx0XHJcblx0XHQgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQuYm9keXtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0ICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHQgICAgXHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTlweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMnB4ICNiZmJmYmY7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHQuaW9uLWNvbG9yLXByaW1hcnl7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcblx0XHRcdHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YxNjYwYTtcclxuXHRcdFx0cGFkZGluZy10b3A6IDVweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDEyMTJweCkge1xyXG5cdFx0XHRcdHdpZHRoOiAzOHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk0MXB4KSB7XHJcblx0XHRcdFx0d2lkdGg6IDM0cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAycHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDg3M3B4KSB7XHJcblx0XHRcdHdpZHRoOiAzMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG5cdFx0ICAgIH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHRcdFx0d2lkdGg6IDM0cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxOXB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogOXB4O1xyXG5cdFx0XHR9XHJcblx0XHQgfVxyXG5cdFx0IGlvbi1pY29ue1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNHB4O1xyXG5cdFx0XHRjb2xvcjogcmdiKDk1LCAyMTIsIDk1KTtcclxuXHRcdCAgIH1cclxuXHRcdCN1c2VyaW1nZ3tcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuXHRcdFx0d2lkdGg6IDI1cHg7XHJcblx0XHRcdGhlaWdodDogMjVweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjdweCApIHtcclxuXHRcdFx0IGRpc3BsYXk6IG5vbmU7XHRcclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHRcclxuXHRcdCNjcm9zc3tcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0Y29sb3I6d2hpdGU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiYTFlMjQ7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0bWFyZ2luLXRvcDogLThweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0fVxyXG5cdFx0Lmljb25pbWd7XHJcblx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQjaWNvbmltYWdle1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcblx0XHRcdFx0d2lkdGg6IDI1cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyNXB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdFx0Lmxpc3RoZWFkaW5ne1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0ICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdCAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdFx0Y29sb3I6ICNhMWExYTE7XHJcblx0ICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDYzcHg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0dG9wOiA5cHg7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHQuY29udGVudF9jb2x7XHJcblx0XHRcdGJvcmRlci1sZWZ0OiBkYXNoZWQgMXB4ICNkMmQyZDI7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDQ3MHB4KSB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDdweDtcclxuXHRcdFx0XHR9XHJcblx0XHQgfVxyXG5cdCAgIH1cclxuXHRcdFxyXG5cdFx0LnRke1xyXG5cdFx0XHRjb2xvcjogIzRhNGE0YWMyO1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogNnB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTIxMnB4KSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQuZmlyc3R0ZHtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTE2NXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMDY1cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5NDFweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMzVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzc4cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMXB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IC00cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICAuc2Vjb25kdGR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyMXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMTJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMCAwO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiA4cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1cclxuXHRcdC50aGlyZHRke1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDZweDtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAwIDA7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDhweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0LmZvdXJ0aHRke1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDQ3cHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMjEzcHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDM4cHg7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmJvZHk6aG92ZXJ7XHJcblx0XHRib3gtc2hhZG93OiAwcHggN3B4IDI2cHggI2E3YTdhN2QxO1xyXG5cdFx0I2Nyb3Nze1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcclxuICAgIFxyXG4gICAgLy8gaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLXRvcDogLTI5cHg7XHJcblx0I21lbnV7XHJcblx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDExcHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMTRweDtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHQgfVxyXG5cdFxyXG5cdGlvbi1iYWRnZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICAgIHRvcDogLTE3cHg7XHJcblx0ICAgIGxlZnQ6IC0xN3B4O1xyXG5cdCAgICBmb250LXNpemU6IDExcHg7XHJcblx0ICAgIGJhY2tncm91bmQ6IHJlZDtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdCAgICBmb250LXdlaWdodDogMzAwO1xyXG5cdCAgICBwYWRkaW5nOiA0cHg7XHJcblx0fVxyXG5cdFxyXG59XHJcbi5saXN0LXBhZ2Vze1xyXG5cdHBhZGRpbmctbGVmdDogMzVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG5cdC5saW5rY29se1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTU1cHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHQjaG9tZXtcclxuXHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdFx0Y29sb3I6IHJnYigxMDQsMTkxLDE4Nyk7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA1NDBweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0I2Fib3V0e1xyXG5cdFx0XHRjb2xvcjogIzRhNGE0YWMyO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA1NDBweCkge1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDZweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnN1Y2Vzc01lc3NhZ2V7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG4jc3VjY2Vzc01zZ3tcclxuXHRib3gtc2hhZG93OiAwcHggMXB4IDdweCAjMTU1NzI0NjE7XHJcbn1cclxuXHJcbi5hbGVydC1zdWNjZXNze1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTNweDtcclxuICAgIHdpZHRoOiAxMzg4cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pb25GYWJidG57XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/admin/user/users-list/users-list.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/admin/user/users-list/users-list.page.ts ***!
      \**********************************************************/

    /*! exports provided: UsersListPage */

    /***/
    function srcAppAdminUserUsersListUsersListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPage", function () {
        return UsersListPage;
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


      var _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/main-services.service */
      "./src/app/services/main-services.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-user-modal/add-user-modal.component */
      "./src/app/admin/user/add-user-modal/add-user-modal.component.ts");
      /* harmony import */


      var _edit_user_modal_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../edit-user-modal/edit-user-modal.component */
      "./src/app/admin/user/edit-user-modal/edit-user-modal.component.ts");
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

      var UsersListPage = /*#__PURE__*/function () {
        function UsersListPage(main_services, router, modalController, alertCtrl, toastr) {
          _classCallCheck(this, UsersListPage);

          this.main_services = main_services;
          this.router = router;
          this.modalController = modalController;
          this.alertCtrl = alertCtrl;
          this.toastr = toastr;
          this.setupData = new Array();
          this.pageCounts = Array(); // Will Push total no. of pages in this array

          this.showMenu = false;
          this.isLoading = false;
          this.showMenuMob = true;
        }

        _createClass(UsersListPage, [{
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
            var _this10 = this;

            if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 992) {
              this.rightSize = 12;
            } else if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).width() < 1367) {
              this.leftSize = 3;
              this.rightSize = 9;
            } else {
              this.leftSize = 2;
              this.rightSize = 10;
            } // this.loader.getdata(true)


            this.pageCounts = [];
            this.setupData = [];
            this.isLoading = true;
            this.main_services.getUsersList().subscribe(function (result) {
              _this10.isLoading = false;
              _this10.pageCount = result['pageCount'];
              _this10.page = result['page'];

              for (var i = 1; i <= result['pageCount']; i++) {
                _this10.pageCounts.push(i);
              }

              result['users'].forEach(function (data) {
                _this10.setupData.push({
                  branch: data['branch'] ? data['branch']['name'] : "-",
                  department: data['department'] ? data['department']['name'] : "-",
                  email: data['email'],
                  gender: data['gender'],
                  is_whatsapp_enabled: data['is_whatsapp_enabled'],
                  name: data['name'],
                  phone: data['phone'],
                  role: data['role']['name'],
                  _id: data['_id'],
                  tokenCount: data['token_data']['count'],
                  image: data['image'] ? data['image'].url : ''
                });
              });
            });
          }
        }, {
          key: "paginationData",
          value: function paginationData(pageNo) {
            var _this11 = this;

            this.setupData = [];
            this.isLoading = true;
            this.main_services.userPagination(pageNo).subscribe(function (result) {
              _this11.isLoading = false;
              _this11.page = result['page'];
              result['users'].forEach(function (data) {
                _this11.setupData.push({
                  branch: data['branch'] ? data['branch']['name'] : "-",
                  department: data['department'] ? data['department']['name'] : "-",
                  email: data['email'],
                  gender: data['gender'],
                  is_whatsapp_enabled: data['is_whatsapp_enabled'],
                  name: data['name'],
                  phone: data['phone'],
                  role: data['role']['name'],
                  _id: data['_id'],
                  tokenCount: data['token_data']['count']
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
                        component: _add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddUserModalComponent"],
                        cssClass: 'my-user-custom-class'
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
          key: "openEditModal",
          value: function openEditModal(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, _yield$modal$onWillDi2, result, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _edit_user_modal_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditUserModalComponent"],
                        componentProps: {
                          _id: user._id
                        },
                        cssClass: 'my-user-edit-custom-class'
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
              var _this12 = this;

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
                            _this12.delete_user(id);
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
          key: "delete_user",
          value: function delete_user(id) {
            var _this13 = this;

            this.isLoading = true;
            this.main_services.deleteUserDetails(id).subscribe(function (data) {
              _this13.isLoading = false;
              _this13.sucmsg = data['message'];

              _this13.toastr.success(_this13.sucmsg);

              _this13.ionViewWillEnter();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "user_search",
          value: function user_search(searchData) {
            var _this14 = this;

            this.isLoading = true;
            this.main_services.searchuserApi(searchData).subscribe(function (data) {
              _this14.isLoading = false;
              _this14.setupData = [];
              data['users'].forEach(function (result) {
                _this14.setupData.push({
                  name: result['name'],
                  phone: result['phone'],
                  role: result['role']['name'],
                  image: result['image'] ? result['image'].url : '',
                  tokenCount: result['token_data']['count'],
                  _id: result['_id']
                });
              });
            });
          }
        }]);

        return UsersListPage;
      }();

      UsersListPage.ctorParameters = function () {
        return [{
          type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }];
      };

      UsersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/users-list/users-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-list.page.scss */
        "./src/app/admin/user/users-list/users-list.page.scss"))["default"]]
      })], UsersListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-user-users-list-users-list-module-es5.js.map