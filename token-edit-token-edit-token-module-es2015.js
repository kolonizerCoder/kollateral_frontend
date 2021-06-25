(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["token-edit-token-edit-token-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/token/edit-token/edit-token.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/token/edit-token/edit-token.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover-spin\"  *ngIf=\"isLoading\">\r\n\t<ion-spinner name=\"lines\" class=\"Loading-spinner\"></ion-spinner>\r\n</div>\r\n<ion-grid [ngClass]=\"urlCheck ?'main-grid':'main-grid-customer'\" class=\"edit-token-grid\">\r\n\t<ion-col size=\"12\" class=\"msg_show_col\">\r\n\t\t<div class=\"alert alert-success\" id=\"successMsg\" role=\"alert\">\r\n\t\t\t<ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\r\n\t\t\t<span class=\"sucessMessage\">{{sucmsg}}!</span>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"alert alert-danger\" id=\"errorMsg\" role=\"alert\">\r\n\t\t\t<ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\r\n\t\t\t<span class=\"sucessMessage\">{{errmsg}}!</span>\r\n\t\t</div>\r\n\t</ion-col>\r\n\r\n\t<!-- <ion-row class=\"admin-header-nav-bar pt-4\" *ngIf=\"urlCheck\">\r\n\t\t<ion-col class=\"linkcol\" size-xs=\"12\" align=\"right\">\r\n\t\t\t<span id=\"home\" routerLink=\"/admin/home\">Home</span> /\r\n\t\t\t<span>Tokens</span> /\r\n\t\t\t<span>View Tokens</span>\r\n\t\t</ion-col>\r\n\t</ion-row> -->\r\n\r\n\t<ion-row>\r\n\t\t<ion-col size=\"12\" align=\"center\" class=\"page-heading-col mt-1 mb-5\">\r\n\t\t\t<h1 class=\"page-heading\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t{{tokenNo}}\r\n\t\t\t\t</span>\r\n\t\t\t</h1>\r\n\t\t</ion-col>\r\n\r\n\t\t<ion-col size=\"12\" align=\"right\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label align=\"right\">{{public_private}}: </ion-label>\r\n\t\t\t\t<ion-toggle [(ngModel)]=\"is_private\" (ionChange)=\"toggleChange()\"\r\n\t\t\t\t\t*ngIf=\"is_private ? 'checked' : 'unchecked'\"></ion-toggle>\r\n\t\t\t</ion-item>\r\n\t\t</ion-col>\r\n\r\n\t\t<ion-col class=\"form-edit-token-col\">\r\n\t\t\t<ion-row style=\"padding-left: 20px;\">\r\n\t\t\t\t<ion-col size=\"{{tokenHeadingSize}}\" class=\"\">\r\n\t\t\t\t\t<div class=\"selected-token-heading\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Token Heading * :</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"text\" id=\"token-heading\" [value]=\"token_heading\"\r\n\t\t\t\t\t\t\t(change)=\"InsertData($event)\"\r\n\t\t\t\t\t\t\t[readonly]=\"isReadonly\"\r\n\t\t\t\t\t\t\tstyle=\"padding-bottom: 9px!important; font-size: 1rem!important;\r\n\t\t\t\t\t\t\t--padding-start: 0; --padding-top: 4px;\" maxlength = \"50\">\r\n\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon\r\n\t\t\t\t\t\t\ttoken-edit-pencil-icon heading-edit-pencil\"\r\n\t\t\t\t\t\t\t(click)=\"editTokenHeading($event)\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-edit-checked-icon\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size=\"{{typeSize}}\" class=\"select-col token-type\">\r\n\t\t\t\t\t<div class=\"selection-col token-type-select-box select-item-list\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Token Type:</ion-label>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<P [ngStyle]=\"{'display':!isTokenType ? 'block' : 'none' }\" class=\"defaultText\">\r\n\t\t\t\t\t\t\t\t{{tokenData.token_type?tokenData.token_type.name:''}}</P>\r\n\t\t\t\t\t\t\t<mat-form-field [ngStyle]=\"{'display':isTokenType ? 'block' : 'none' }\">\r\n\t\t\t\t\t\t\t\t<mat-select (selectionChange)=\"applyTokenType($event)\" [(value)]=\"token_type\">\r\n\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\" disabled=\"disabled\" selected>None</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let token of tokenTypesList\" value=\"{{token._id}}\">\r\n\t\t\t\t\t\t\t\t\t\t{{token.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-type-pencil-icon\" (click)=\"editTokenType($event)\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-type-checked-icon\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size-lg=\"3\" size-xs=\"12\" *ngIf=\"ExpectedDateShow\" class=\"select-col token-type\">\r\n\t\t\t\t\t<div class=\"selected-expected-date\">\r\n\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Expected Date:</ion-label>\r\n\t\t\t\t\t\t<P [ngStyle]=\"{'display':!isExpectedDate ? 'block' : 'none' }\" class=\"defaultText\">\r\n\t\t\t\t\t\t\t{{expected_date | date:'medium'}}</P>\r\n\t\t\t\t\t\t<ion-datetime (click)=\"editExpectedDateTime($event)\"\r\n\t\t\t\t\t\t\t[ngStyle]=\"{'display':isExpectedDate ? 'block' : 'none' }\"\r\n\t\t\t\t\t\t\t[pickerOptions]=\"pickerOptions\" \r\n\t\t\t\t\t\t\t(ionChange)=\"insertExpectedDate($event)\" [(value)]=\"expected_date\"\r\n\t\t\t\t\t\t\tdisplay-format=\"D MMM YYYY HH:mm A\" picker-format=\"D MMM YYYY HH:mm A\"></ion-datetime>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon\r\n\t\t\t\t\t\t\tdate-edit-pencil-icon\"\r\n\t\t\t\t\t\t\t(click)=\"editExpectedDateTime($event)\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon date-edit-checked-icon\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size=\"{{tokenPrioritySize}}\" class=\"select-col priority\">\r\n\t\t\t\t\t<div class=\"selection-col token-priority-select-box select-item-list\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Token Priority:</ion-label>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<P [ngStyle]=\"{'display':!isTokenPriority ? 'block' : 'none' }\" class=\"defaultText\">\r\n\t\t\t\t\t\t\t\t{{tokenData.priority?tokenData.priority.name:''}}</P>\r\n\t\t\t\t\t\t\t<mat-form-field [ngStyle]=\"{'display':isTokenPriority ? 'block' : 'none' }\">\r\n\t\t\t\t\t\t\t\t<mat-select (selectionChange)=\"applyTokenPriority($event)\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"editTokenPriority($event)\" [(value)]=\"token_priority\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\" disabled=\"disabled\" selected>None</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tokenPriority of tokenPriorityList\"\r\n\t\t\t\t\t\t\t\t\t\tvalue=\"{{tokenPriority._id}}\">{{tokenPriority.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-priority-pencil-icon\" (click)=\"editTokenPriority($event)\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-priority-checked-icon\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\r\n\t\t\t<ion-row style=\"padding-left: 20px;\">\r\n\t\t\t\t<ion-col size=\"12\" class=\"input-col-edit-token mb-3 mt-3\">\r\n\t\t\t\t\t<ion-item style=\"margin-left:-15px;\" class=\"file-upload-item token-description\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"token-desc\" style=\"font-size:\r\n\t\t\t\t\t\t\t25px!important;\"> Token\r\n\t\t\t\t\t\t\tDescription : </ion-label>\r\n\t\t\t\t\t\t<textarea class=\"adv_textarea token-desc\" [readonly]=\"isDescReadonly\"\r\n\t\t\t\t\t\t\t(change)=\"tokeDesc($event)\" [(ngModel)]=\"token_desc_data\"></textarea>\r\n\t\t\t\t\t\t<!-- <ion-textarea id=\"token-desc-details\" class=\"form-control\"></ion-textarea> -->\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-desc-date-pencil-icon\" (click)=\"token_desc($event)\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-desc-checked-icon\">\r\n\t\t\t\t\t\t<ion-row *ngIf=\"show_textarea\" class=\"description-token\">\r\n\t\t\t\t\t\t\t<ion-col size=\"11\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"mic-outline\" class=\"mic-start\" *ngIf=\"!isRecording && !blobUrl\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"startRecording()\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"mic-off-outline\" class=\"mic-start\" *ngIf=\"isRecording && !blobUrl\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"stopRecording()\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<button class=\"start-button\" *ngIf=\"!isRecording && !blobUrl\" (click)=\"startRecording()\">Start Recording</button>\r\n\t\t\t\t\t\t\t\t <button class=\"stop-button\" *ngIf=\"isRecording && !blobUrl\" (click)=\"stopRecording()\">Stop Recording</button> -->\r\n\t\t\t\t\t\t\t\t<!-- <button class=\"cancel-button\" *ngIf=\"!isRecording && blobUrl\" (click)=\"clearRecordedData()\">Clear Recording</button> -->\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"isRecording && !blobUrl\">{{recordingText}} {{recordedTime}} </div>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"aud-hov\">\r\n\t\t\t\t\t\t\t\t\t\t\t<audio *ngIf=\"!isRecording && blobUrl\" controls>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<source [src]=\"blobUrl\" type=\"audio/webm\">\r\n\t\t\t\t\t\t\t\t\t\t\t</audio>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"rec-close\" *ngIf=\"!isRecording && blobUrl\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearRecordedData(audioIndex)\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t\t<ion-col size=\"1\" class=\"file-upload-col\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" (change)=\"tokenImage($event)\" formControlName=\"image\"\r\n\t\t\t\t\t\t\t\t\tmultiple=\"true\" id=\"file-upload-open\"></ion-input>\r\n\t\t\t\t\t\t\t\t<!-- <ion-button type=\"button\" (click)=\"target_file()\"> -->\r\n\t\t\t\t\t\t\t\t<!-- Attach File -->\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"attach-outline\" class=\"attach-file\" (click)=\"target_file()\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<!-- </ion-button> -->\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<ion-row *ngFor='let img of images; let i= index'>\r\n\r\n\t\t\t\t\t\t<ion-col *ngIf=\"img.showAudio\">\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<div class=\"aud-hov\">\r\n\t\t\t\t\t\t\t\t\t<audio controls>\r\n\t\t\t\t\t\t\t\t\t\t<source [src]=\"img.previewURL\" type=\"audio/webm\">\r\n\r\n\t\t\t\t\t\t\t\t\t</audio>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<ion-icon *ngIf=\"show_textarea\" name=\"close-circle\" class=\"rec-close\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"deleteTokenDescFiles(img)\">\r\n\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t<ion-row class=\"token-edit-img-row\">\r\n\t\t\t\t\t\t<ion-col size=\"1\" *ngFor='let img of images; let i= index' align=\"center\"\r\n\t\t\t\t\t\t\tclass=\"file_upload_img\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"img.showImg\">\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"img.url; else elseBlock\" href=\"{{img.url}}\" title=\"{{img.name}}\"\r\n\t\t\t\t\t\t\t\t\ttarget=\"_blank\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"img.previewURL\" title=\"{{img.name}}\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ng-template #elseBlock><img [src]=\"img.previewURL\" title=\"{{img.name}}\" />\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t<span (click)=\"deleteTokenDescFiles(img)\" class=\"file_delete_icon\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"show_textarea\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"close-outline\" title=\"{{img.name}}\" class=\"delete-file\">\r\n\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<p class=\"text-danger alredy_file\">{{alreadyFile}}</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size-lg=\"4\" size-xs=\"12\" class=\"select-col\">\r\n\t\t\t\t\t<div class=\"selection-col token-branch-select-box select-item-list\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Branch Name :</ion-label>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\r\n\t\t\t\t\t\t\t<P [ngStyle]=\"{'display':!isBranch ? 'block' : 'none' }\" class=\"defaultText\">\r\n\t\t\t\t\t\t\t\t{{tokenData.branch?tokenData.branch.name:''}}</P>\r\n\t\t\t\t\t\t\t<mat-form-field [ngStyle]=\"{'display':isBranch ? 'block' : 'none' }\">\r\n\t\t\t\t\t\t\t\t<mat-select (selectionChange)=\"applyTokenBranch($event.value)\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"edittokenBranch($event)\" [(value)]=\"branch\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\" >None</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let branch of branchesList\" value=\"{{branch._id}}\">\r\n\t\t\t\t\t\t\t\t\t\t{{branch.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-branch-pencil-icon\" (click)=\"edittokenBranch($event)\">\r\n\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-branch-checked-icon\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size-lg=\"4\" size-xs=\"12\" class=\"select-col dept-col\">\r\n\t\t\t\t\t<div class=\"selection-col token-dept-select-box select-item-list\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Department :</ion-label>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<P [ngStyle]=\"{'display':!isDepartment ? 'block' : 'none' }\" class=\"defaultText\">\r\n\t\t\t\t\t\t\t\t{{tokenData.department?tokenData.department.name:''}}</P>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-form-field [ngStyle]=\"{'display':isDepartment ? 'block' : 'none' }\"\r\n\t\t\t\t\t\t\t\t(click)=\"ShowDeptErr()\">\r\n\t\t\t\t\t\t\t\t<mat-select (selectionChange)=\"applyTokenDept($event.value)\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"edittokenDept($event)\" [(value)]=\"dept\" [disabled]=\"disableEditdept\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\" >None</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let dept of deptsList\" value=\"{{dept._id}}\">{{dept.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-dept-pencil-icon\" (click)=\"edittokenDept($event)\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-dept-checked-icon\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span id=\"editdeptErr\" style=\"display: none;\">please select the branch first !</span>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size-lg=\"4\" size-sm=\"6\" size-xs=\"12\" class=\"multi-item-select\r\n\t\t\t\t\texiting-token-col\">\r\n\t\t\t\t\t<span class=\"add-user add-token\">\r\n\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"add-outline\" slot=\"start\" (click)=\"showHideSearch()\">\r\n\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t<span class=\"multiple-field-name\">Reference Task</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let token of selectedExistingtokenList\">\r\n\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t{{token.heading}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"selected-existing-item\" *ngIf=\"!isItemAvailable\"\r\n\t\t\t\t\t\t\t\tstyle=\"border: solid 0px red;display:\r\n\t\t\t\t\t\t\t\tblock;margin-bottom: 30px;width: 40px;float: left;\">\r\n\t\t\t\t\t\t\t\t<span (click)=\"removeExitingToken(token._id)\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"remove-token\" name=\"close-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<ion-item *ngIf=\"isItemAvailable\" lines=\"none\" class=\"exiting-token\" style=\"margin-left: 60px;\">\r\n\t\t\t\t\t\t<ion-input type=\"text\" (keyup)=\"onSearchToken($event.target.value)\" placeholder=\"search\">\r\n\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<div *ngIf=\"isItemAvailable && existingtokenList.length>0\" class=\"existing-token-dropdown\">\r\n\t\t\t\t\t\t<ul class=\"nav\">\r\n\t\t\t\t\t\t\t<li class=\"nav-item exist-token-list\" *ngFor=\"let token of\r\n\t\t\t\t\t\t\t\texistingtokenList\" (click)=showTokenIcon(token)>{{token.heading}} (<span>{{token.token_no}}</span>)\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t<ion-col size-lg=\"4\" size-sm=\"6\" size-xs=\"12\" class=\"multi-item-select mt-4\r\n\t\t\t\t\tresponsible-select-col\" style=\"height: 100px;padding-left:0;\">\r\n\r\n\t\t\t\t\t<span class=\"add-user1\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"person-add-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t\t\t<span class=\"multiple-field-name\">Responsible</span>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t<span class=\"dropdown-btn\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let responsible of selectedItems\">\r\n\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t{{responsible.name}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"persion-icon activity-t1\" > \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t<ng-multiselect-dropdown [placeholder]=\"'Responsible person'\" [settings]=\"responsiblePersonsSetting\"\r\n\t\t\t\t\t\t[data]=\"responsibleList\" [(ngModel)]=\"selectedItems\" (onSelect)=\"onItemSelect($event)\"\r\n\t\t\t\t\t\t(onSelectAll)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\"\r\n\t\t\t\t\t\t(onDeSelectAll)=\"onItemDeSelect($event)\">\r\n\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\r\n\r\n\t\t\t\t<ion-col size-lg=\"4\" size-sm=\"6\" size-xs=\"12\" class=\"multi-item-select mt-4\r\n\t\t\t\t\tsupporter-col\" style=\"height: 100px;\">\r\n\r\n\t\t\t\t\t<span class=\"add-user1 supporter\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"person-add-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t\t\t<span class=\"multiple-field-name\">Supporter</span>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t<span class=\"dropdown-btn\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let responsible of SuporterItem\">\r\n\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t{{responsible.name}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"persion-icon activity-t1\" > \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t<ng-multiselect-dropdown [placeholder]=\"'Supporter'\" [settings]=\"supporterPersonsSetting\"\r\n\t\t\t\t\t\t[data]=\"support_person\" [(ngModel)]=\"SuporterItem\" (onSelect)=\"onItemSelect($event)\"\r\n\t\t\t\t\t\t(onSelectAll)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\"\r\n\t\t\t\t\t\t(onDeSelectAll)=\"onItemDeSelect($event)\">\r\n\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size-lg=\"4\" size-sm=\"6\" size-xs=\"12\" class=\"multi-item-select mt-4\r\n\t\t\t\t\treviewer-select-col\" style=\"height: 100px;\">\r\n\r\n\t\t\t\t\t<span class=\"add-user1\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"person-add-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t\t\t<span class=\"multiple-field-name\">Reviewer</span>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t<span class=\"dropdown-btn\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let responsible of ReviewerItem\" >\r\n\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t{{responsible.name}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"persion-icon activity-t1\" > \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- \r\n\t\t\t\t\t\t\t\t\t<span class=\"persion-icon activity-t1\" title=\"{{responsible.name}}\"> \r\n\t\t\t\t\t\t\t\t\t\t<span class=\"user-name\">{{responsible.name}}</span>\t\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t<ng-multiselect-dropdown [placeholder]=\"'Reviewer'\" [settings]=\"reviewerPersonsSetting\"\r\n\t\t\t\t\t\t[data]=\"users\" [(ngModel)]=\"ReviewerItem\" (onSelect)=\"onItemSelect($event)\"\r\n\t\t\t\t\t\t(onSelectAll)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\"\r\n\t\t\t\t\t\t(onDeSelectAll)=\"onItemDeSelect($event)\">\r\n\r\n\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t</ion-row>\r\n\r\n\t\t\t<ion-row class=\"mt-2 mb-3\">\r\n\t\t\t\t<ion-col size-lg=\"4\" size-xs=\"12\" class=\"select-col status-col\">\r\n\t\t\t\t\t<div class=\"selection-col select-item-list selected-token-status\">\r\n\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Status :</ion-label>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<P [ngStyle]=\"{'display':!isStatus ? 'block' : 'none' }\" class=\"defaultText\">{{status}}</P>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-form-field [ngStyle]=\"{'display':isStatus ? 'block' : 'none' }\">\r\n\t\t\t\t\t\t\t\t<mat-select (selectionChange)=\"applyTokenStatus($event)\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"edittokenStatus($event)\" [(value)]=\"status\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"0\" disabled=\"disabled\" selected>None</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let status of tokenStatusList\" value=\"{{status}}\">{{status}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-status-pencil-icon\" (click)=\"edittokenStatus($event)\">\r\n\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\t\tclass=\"edit-pencil-icon token-status-checked-icon\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t<ion-col size-lg=\"8\" size-xs=\"12\">\r\n\r\n\t\t\t\t\t<div class=\"remark selected-token-remark\">\r\n\t\t\t\t\t\t<ion-label position=\"stacked\"> Remark :</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"max 50 chars\" id=\"remark\" [value]=\"remark\" (change)=\"remarkInsert($event)\"\r\n\t\t\t\t\t\t\t[readonly]=\"isRemarkReadonly\" maxlength=\"50\" style=\"padding-top: 5px!important;\r\n\t\t\t\t\t\t\tfont-size: 1rem!important;\">\r\n\t\t\t\t\t\t</ion-input>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\" class=\"edit-pencil-icon\r\n\t\t\t\t\t\t\tremark-edit-pencil-icon\" (click)=\"editRemark($event)\">\r\n\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon remark-edit-checked-icon\">\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\t\t\t</ion-row>\r\n\r\n\r\n\t\t\t<ion-row>\r\n\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size=\"12\" class=\"mb-3 mt-3\">\r\n\r\n\r\n\t\t\t\t\t<div class=\"comment-ion-item\">\r\n\r\n\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"token-desc\" style=\"font-size:\r\n\t\t\t\t\t\t\t25px!important;\"> Comment * :\r\n\t\t\t\t\t\t</ion-label>\r\n\r\n\t\t\t\t\t\t<ion-textarea class=\"form-control\" [value]=\"comment_desc_data\" [readonly]=\"isCommentReadonly\"\r\n\t\t\t\t\t\t\tid=\"commenm\" (change)=\"commentDesc($event)\"></ion-textarea>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/pencil.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon comment-desc-date-pencil-icon\" (click)=\"comment_desc($event)\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/icons/checked-resized.png\"\r\n\t\t\t\t\t\t\tclass=\"edit-pencil-icon comment-desc-checked-icon\">\r\n\t\t\t\t\t\t<ion-row class=\"description-token comment-token\" style=\"display:none;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" class=\"file-upload-col\">\r\n\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" (change)=\"commentImage($event)\" multiple=\"true\"\r\n\t\t\t\t\t\t\t\t\tid=\"file-upload-open\"></ion-input>\r\n\r\n\t\t\t\t\t\t\t\t<ion-button type=\"button\" (click)=\"target_file()\">\r\n\t\t\t\t\t\t\t\t\tAttch File\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ion-row class=\"token-edit-img-row\">\r\n\t\t\t\t\t\t{{commentImages}}\r\n\t\t\t\t\t\t<ion-col size=\"1\" *ngFor='let commentImage of commentImages ' align=\"center\"\r\n\t\t\t\t\t\t\tclass=\"file_upload_img\">\r\n\t\t\t\t\t\t\t<img [src]=\"commentImage.url\" title=\"\" />\r\n\r\n\r\n\t\t\t\t\t\t\t<span (click)=\"deleteCommentDescFiles(commentImage)\" class=\"file_delete_icon\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"show_comment_textarea\">\r\n\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-outline\" title=\"{{commentImage.name}}\" class=\"delete-file\">\r\n\t\t\t\t\t\t\t\t</ion-icon>\r\n\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t</ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t<ion-col size=\"12\" align=\"center\" class=\"mt-3 edit-token-btn-col\">\r\n\t\t\t\t\t<ion-button type=\"submit\" *ngIf=\"showSubmitBtn\" (click)=\"updateToken()\" block>Update</ion-button>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t</ion-row>\r\n\r\n\r\n\r\n\r\n\t\t\t<ion-grid class=\"mt-4\">\r\n\r\n\r\n\t\t\t\t<app-log [actionlog]='actionlog' [comment]='activity_log' [tokenNo1]='tokenNo1'></app-log>\r\n\r\n\r\n\r\n\t\t\t</ion-grid>\r\n\r\n\r\n\t\t</ion-col>\r\n\r\n\t</ion-row>\r\n\r\n\r\n</ion-grid>");

/***/ }),

/***/ "./src/app/token/edit-token/edit-token-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/token/edit-token/edit-token-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EditTokenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTokenPageRoutingModule", function() { return EditTokenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_token_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-token.page */ "./src/app/token/edit-token/edit-token.page.ts");




const routes = [
    {
        path: '',
        component: _edit_token_page__WEBPACK_IMPORTED_MODULE_3__["EditTokenPage"]
    }
];
let EditTokenPageRoutingModule = class EditTokenPageRoutingModule {
};
EditTokenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditTokenPageRoutingModule);



/***/ }),

/***/ "./src/app/token/edit-token/edit-token.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/token/edit-token/edit-token.module.ts ***!
  \*******************************************************/
/*! exports provided: EditTokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTokenPageModule", function() { return EditTokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_token_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-token-routing.module */ "./src/app/token/edit-token/edit-token-routing.module.ts");
/* harmony import */ var _edit_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-token.page */ "./src/app/token/edit-token/edit-token.page.ts");
/* harmony import */ var _common_log_log_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../common/log/log.component */ "./src/app/common/log/log.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");













let EditTokenPageModule = class EditTokenPageModule {
};
EditTokenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_token_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditTokenPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_11__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_11__["FroalaViewModule"].forRoot(),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        ],
        declarations: [_edit_token_page__WEBPACK_IMPORTED_MODULE_6__["EditTokenPage"], _common_log_log_component__WEBPACK_IMPORTED_MODULE_7__["LogComponent"]
        ]
    })
], EditTokenPageModule);



/***/ }),

/***/ "./src/app/token/edit-token/edit-token.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/token/edit-token/edit-token.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* apply CSS to the select tag of  \n .dropdown-container div*/\nselect {\n  /* for Firefox */\n  -moz-appearance: none;\n  /* for Safari, Chrome, Opera */\n  -webkit-appearance: none;\n}\n/* for IE10 */\nselect::-ms-expand {\n  display: none;\n}\n.token-desc {\n  height: 70px;\n  border: 0px;\n}\n.edit-pencil-icon {\n  background: #ffffff05;\n}\n.select-item-list .edit-pencil-icon {\n  top: 30px;\n}\n.attach-file {\n  color: #999999;\n  font-size: 30px;\n  transform: rotate(20deg);\n}\ndl-date-time-picker#expected_date_picker {\n  display: none;\n}\nform {\n  margin-bottom: 100px;\n}\nform input, form select, form ion-input {\n  height: 45px;\n}\ndiv:focus, div:active {\n  color: green;\n}\n.token-edit-checked-icon, .token-type-checked-icon, .token-priority-checked-icon, .token-branch-checked-icon,\n.token-dept-checked-icon, .token-status-checked-icon, .remark-edit-checked-icon,\n.expected-token-date-checked-icon, .token-desc-checked-icon, .comment-desc-checked-icon, .date-edit-checked-icon {\n  display: none;\n}\n.token-type-checked-icon,\n.token-priority-checked-icon,\n.token-status-checked-icon,\n.token-dept-checked-icon,\n.token-branch-checked-icon {\n  bottom: 24px;\n  z-index: 9999;\n  right: 7px;\n  background: #fff;\n}\n.token-status-checked-icon {\n  bottom: 22px;\n}\n.edit-pencil-icon.remark-edit-pencil-icon,\n.edit-pencil-icon.remark-edit-checked-icon {\n  right: 30px;\n}\n@media screen and (max-width: 991px) {\n  .edit-pencil-icon.remark-edit-pencil-icon,\n.edit-pencil-icon.remark-edit-checked-icon {\n    right: 5px;\n  }\n}\n.file-upload-col ion-button.file-upload {\n  left: 0 !important;\n  right: 0;\n  bottom: 1px;\n  width: 60px;\n  transform: rotate(33deg);\n  margin-left: -8px;\n}\n.rec-close {\n  color: #ba1e24;\n  font-size: 20px;\n  position: relative;\n  left: 272px;\n  bottom: 65px;\n}\n.mic-start {\n  color: #999999;\n  float: right;\n  font-size: 30px;\n  padding-bottom: 3px;\n}\n.commentErrMsg {\n  color: #5c2222;\n  font-size: 16px;\n  font-weight: 400;\n}\nimg.edit-pencil-icon {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  bottom: 12px;\n}\nion-item {\n  --inner-padding-end: 0px;\n  --border-color: #68bfbb;\n  --border-width: 0 0 0px 0;\n  --border-bottom: solid 0px #68bfbb;\n  margin-right: 15px;\n}\n@media screen and (max-width: 991px) {\n  ion-item {\n    margin-right: 0px;\n  }\n}\nion-item .item-inner {\n  border: solid 11px red !important;\n  --inner-padding-end: 0!important;\n}\nion-item ion-input {\n  margin-top: 0px;\n}\nion-item.file-upload-item.token-description {\n  --border-color: #fff;\n}\n/*ion-item.file-upload-item{\n    margin:0;\n}*/\nion-textarea {\n  border: 0px;\n  max-height: 130px;\n  margin: 15px 0;\n}\nion-item.exiting-token {\n  border-radius: 45px;\n  --highlight-background: transparent;\n  box-shadow: 0px 0px 8px #68bfbb;\n  margin: 0 20px 20px;\n  height: 45px;\n}\n@media screen and (max-width: 991px) {\n  ion-item.exiting-token {\n    --background: transparent;\n  }\n}\nion-item.exiting-token ion-input {\n  color: #000000 !important;\n}\nion-item.exiting-token ion-input::-moz-placeholder {\n  color: red;\n  opacity: 1;\n  /* Firefox */\n}\nion-item.exiting-token ion-input::placeholder {\n  color: red;\n  opacity: 1;\n  /* Firefox */\n}\nion-item.exiting-token ion-input:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: red;\n}\nion-item.exiting-token ion-input::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: red;\n}\nion-item.exiting-token ion-label.token-desc {\n  color: #999999;\n}\nion-item.file-upload-item {\n  padding-bottom: 0px;\n}\n.input-col-edit-token ion-label {\n  font-weight: 500;\n  /* color: #434343 !important; */\n  /* margin-bottom: 7px !important; */\n  height: 30px;\n  margin-top: 0px;\n}\n@media screen and (max-width: 991px) {\n  .input-col-edit-token ion-label {\n    font-size: 23px !important;\n  }\n}\n@media screen and (max-width: 767px) {\n  .input-col-edit-token ion-label {\n    font-size: 23px !important;\n    font-weight: 400;\n    height: 25px;\n  }\n}\n.token-desc-date-pencil-icon,\n.comment-desc-date-pencil-icon {\n  top: 30px;\n  right: 9px;\n}\n@media screen and (max-width: 991px) {\n  .token-desc-date-pencil-icon,\n.comment-desc-date-pencil-icon {\n    right: 0px;\n  }\n}\n.file-upload-col {\n  position: relative;\n  height: 55px;\n}\n.adv_textarea {\n  margin-bottom: 5px;\n}\n.file-upload-col ion-input {\n  opacity: 0;\n  position: absolute;\n  bottom: -10px;\n  right: 0;\n  z-index: 99999;\n  border: solid 1px red;\n  width: 107px;\n  left: 0;\n}\n.file_upload_img .file_delete_icon ion-icon.delete-file {\n  font-size: 17px;\n  position: absolute;\n  right: 2px;\n  top: -5px;\n  background: #65c1bc;\n  color: white;\n  border-radius: 50%;\n}\n.token-edit-img-row {\n  padding: 0 15px;\n  margin-top: 10px;\n}\n.selection-border {\n  border-bottom: solid 2px #68bfbb !important;\n}\n.selection-col {\n  border-bottom: solid 0px #68bfbb;\n  padding-bottom: 0px;\n  margin: 0;\n  margin-left: 15px;\n  margin-right: 30px;\n}\n@media screen and (max-width: 991px) {\n  .selection-col {\n    margin-left: 0px;\n  }\n}\n.selection-col ion-input {\n  height: 45px;\n  font-size: 1rem;\n  --padding-start: 0px;\n  --padding-top: 12px;\n}\n@media screen and (max-width: 575px) {\n  .selection-col ion-input {\n    font-size: 0.9rem;\n  }\n}\n.selection-col .form-group {\n  margin-bottom: 0px;\n}\n.selection-col .form-group .form-control:focus {\n  background-color: #fff;\n  border-color: #ffffff;\n  outline: 0;\n  box-shadow: 0 0 0;\n}\n.selection-col .edit-pencil-icon {\n  bottom: 15px;\n  right: 30px;\n}\n@media screen and (max-width: 991px) {\n  .selection-col .edit-pencil-icon {\n    right: 5px;\n  }\n}\n.selection-col .token-branch-pencil-icon,\n.selection-col .token-dept-pencil-icon, .selection-col .token-status-pencil-icon {\n  bottom: 15px;\n}\n.selection-col .token-branch-checked-icon,\n.selection-col .token-dept-checked-icon, .selection-col .token-status-checked-icon {\n  bottom: 15px;\n}\n@media screen and (max-width: 991px) {\n  .selection-col ion-label {\n    font-size: 17px !important;\n  }\n}\n@media screen and (max-width: 575px) {\n  .selection-col ion-label {\n    font-size: 17px !important;\n    font-weight: 400;\n  }\n}\nselect {\n  border: 0;\n  border-radius: 0px;\n  position: relative;\n  height: 45px;\n  padding-left: 0px;\n  margin-left: -2px;\n}\nselect::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  border-bottom: solid 1px red;\n}\n@media screen and (max-width: 991px) {\n  select {\n    padding-left: 0px;\n    margin-left: 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .form-edit-token-col .select-col {\n    margin-left: 0px;\n    padding-left: 15px;\n  }\n\n  .add-user1.supporter {\n    margin-left: 10px;\n  }\n\n  .token-type,\n.priority {\n    padding-left: 5px !important;\n  }\n\n  .remark.selected-token-remark {\n    padding-left: 14px;\n  }\n  .remark.selected-token-remark ion-input {\n    --padding-start: 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .form-edit-token-col .multi-item-select {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .form-edit-token-col .exiting-token-col {\n    padding-top: 20px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .form-edit-token-col .multi-item-select {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n}\n@media screen and (max-width: 576px) and (max-width: 575px) {\n  .form-edit-token-col .multi-item-select {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n}\n@media screen and (max-width: 576px) {\n  .form-edit-token-col .exiting-token-col {\n    padding-top: 4px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .dept-col {\n    padding-bottom: 0 !important;\n  }\n\n  .responsible-select-col, .reviewer-select-col {\n    position: relative;\n    top: 40px;\n    left: 9px;\n  }\n\n  .supporter-col {\n    height: 15px !important;\n  }\n\n  .status-col {\n    margin-top: 20px;\n  }\n\n  .edit-token-btn-col {\n    padding: 0;\n    margin-top: 0px !important;\n  }\n}\n#token-heading {\n  --padding-bottom:0px !important;\n  --padding-top: 13px !important;\n}\n#token-heading-confirm {\n  display: none;\n}\n@media screen and (max-width: 991px) {\n  .form-edit-token-col ion-col {\n    margin-bottom: 10px;\n  }\n}\n.comment-ion-item {\n  margin-right: 0px;\n}\n.comment-ion-item .comment-desc-date-pencil-icon,\n.comment-ion-item .comment-desc-checked-icon {\n  right: 25px;\n}\n@media screen and (max-width: 991px) {\n  .comment-ion-item .comment-desc-date-pencil-icon,\n.comment-ion-item .comment-desc-checked-icon {\n    right: 5px;\n  }\n}\n.comment-ion-item ion-textarea {\n  max-height: 130px;\n  margin: 15px 0;\n}\n.existing-token-dropdown {\n  position: absolute;\n  top: 45px;\n  z-index: 1;\n  width: 62%;\n  height: auto;\n  max-height: 300px;\n  background: #dcdcdc;\n  margin-left: 16%;\n  padding-top: 13px;\n  padding-left: 10PX;\n  overflow: scroll;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 0 1px 5px #959595;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.existing-token-dropdown::-webkit-scrollbar {\n  display: none;\n}\n.responsible-col {\n  height: 75px;\n}\n.persion-icon::after {\n  content: url('person-1.png');\n  background: #68bfbb;\n  width: auto;\n  height: auto;\n  position: relative;\n  float: left;\n  padding: 8px 9px 4px;\n  border-radius: 50%;\n  margin-left: 6px;\n  margin-bottom: 10px;\n  border: solid 0px red;\n  z-index: 999999;\n  cursor: pointer;\n}\n@media screen and (max-width: 576px) {\n  .persion-icon::after {\n    content: url('person-1.png');\n    padding: 5px 8px;\n  }\n}\n.persion-icon .file_delete_icon1 ion-icon.delete-file {\n  font-size: 17px;\n  position: absolute;\n  right: -12px;\n  top: -5px;\n  background: #65c1bc;\n  color: white;\n  border-radius: 50%;\n}\n.dropdown-btn {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 0;\n  font-weight: 400;\n  line-height: 1.52857143;\n  text-align: left;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  border: 0px solid #adadad !important;\n  padding: 5px 40px 0 80px !important;\n  position: relative;\n  top: -3px;\n  overflow-y: scroll;\n  height: 65px;\n  cursor: context-menu;\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.dropdown-btn::-webkit-scrollbar {\n  display: none;\n}\n.add-user1 {\n  /*position: absolute;\n  left: 0px;\n  top: 10px;*/\n  font-size: 28px;\n  background: #68bfbb;\n  color: #fff;\n  border-radius: 50%;\n  padding: 0;\n  display: block;\n  width: 40px;\n  height: 40px;\n  padding-top: 4px;\n  padding-left: 4px;\n  position: absolute;\n  left: 15px;\n}\n@media screen and (max-width: 576px) {\n  .add-user1 {\n    font-size: 22px;\n    background: #68bfbb;\n    color: #fff;\n    border-radius: 50%;\n    padding: 0;\n    display: block;\n    width: 36px;\n    height: 35px;\n    padding-top: 1px;\n    padding-left: 2px;\n    /*  width: 33px;\n        height: 33px;\n        padding-top: 5px;\n        padding-left: 5px;\n        font-size: 22px;\n    */\n  }\n}\n.add-user1 .multiple-field-name {\n  max-width: 172px;\n  z-index: 999;\n  bottom: -23px;\n  left: -10px;\n  color: #9e9e9e;\n  font-size: 13px;\n  position: absolute;\n  width: auto;\n  left: 0;\n}\n@media screen and (max-width: 576px) {\n  .add-user1 .multiple-field-name span {\n    display: block;\n  }\n}\n.add-user1 ion-icon[name=person-add-outline] {\n  font-size: 19px;\n  padding: 6px 6px;\n}\n.exiting-token-col .selected-existing-item {\n  margin-left: 15px;\n  position: relative;\n  width: 25px;\n  border: solid 1px #fff;\n}\n.exiting-token-col .selected-existing-item .remove-token {\n  position: absolute;\n  top: -20px !important;\n  left: 25px !important;\n  background: #7b7b7b;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 15px;\n  width: 13px;\n  height: 13px;\n  padding: 2px;\n}\n.exiting-token-col div {\n  display: inline;\n  float: left;\n  margin-left: 100px;\n  margin-top: 10px;\n  padding: 0;\n  z-index: 9999999999;\n}\n.exiting-token-col div ng-container span {\n  margin-right: 10px;\n  position: relative;\n  display: block;\n}\nul.nav {\n  padding: 0;\n}\nul.nav li.nav-item {\n  padding: 10px 15px;\n  border-bottom: solid 1px #f4f2f2;\n  width: 100%;\n}\nul.nav li.nav-item:hover, ul.nav li.nav-item:active, ul.nav li.nav-item:focus {\n  color: #68bfbb;\n  cursor: pointer;\n}\n.mat-form-field-hide-placeholder .mat-select-placeholder {\n  color: #000000f0;\n  -webkit-text-fill-color: black;\n  transition: none;\n  display: block;\n  z-index: 10000000000000000;\n}\n@media screen and (max-width: 575px) {\n  .responsible-select-col .dropdown-btn {\n    padding: 5px 40px 0 100px !important;\n  }\n\n  .supporter-col .dropdown-btn {\n    padding: 5px 40px 0 104px !important;\n  }\n\n  .reviewer-select-col .dropdown-btn {\n    padding: 5px 40px 0 95px !important;\n  }\n\n  .admin-right-side .main-grid {\n    padding-left: 0;\n    padding-right: 5px;\n  }\n\n  ion-item.exiting-token {\n    border-radius: 45px;\n    --highlight-background: transparent;\n    box-shadow: 0px 0px 8px #68bfbb;\n    margin: 0 20px 0px;\n    height: 40px;\n    position: absolute;\n    margin-left: 0px !important;\n    width: 70%;\n    left: 21%;\n  }\n  ion-item.exiting-token ion-input {\n    margin-top: -7px;\n  }\n\n  .existing-token-dropdown.search-result {\n    border: solid 1px red !important;\n    display: inline;\n    float: left;\n    margin-left: 79px;\n    margin-top: 1px;\n    padding: 0;\n    z-index: 9999999999;\n  }\n\n  ul.nav {\n    padding: 0px;\n  }\n\n  .exiting-token-col div {\n    height: 0px;\n    margin-left: 96px;\n  }\n\n  .existing-token-dropdown {\n    margin-left: 30px !important;\n    margin-top: 2px !important;\n    height: auto !important;\n  }\n\n  div.token_show_div {\n    height: 0px;\n  }\n\n  .remove-token[_ngcontent-adk-c281] {\n    position: absolute;\n    top: -17px !important;\n    left: 17px !important;\n  }\n\n  .selected-existing-item::after {\n    padding: 8px 10px;\n  }\n\n  .persion-icon::after {\n    padding: 8px 9px 4px;\n  }\n\n  /*.form-edit-token-col .multi-item-select.exiting-token-col{\n      margin-bottom:0px!important;\n  }\n  */\n}\n.defaultText {\n  padding-top: 5px !important;\n  font-size: 1rem !important;\n  --padding-start: 0;\n}\n@media screen and (max-width: 320px) {\n  .edit-token-grid.main-grid.md.hydrated {\n    padding-right: 8px !important;\n  }\n}\n#editdeptErr {\n  color: #bb373b;\n  font-size: 15px;\n  margin-left: 19px;\n}\n@media screen and (max-width: 991px) {\n  #editdeptErr {\n    margin-left: 0px;\n  }\n}\nion-datetime {\n  padding-left: 0px !important;\n  padding-bottom: 12px;\n}\n.mat-select-value {\n  padding-top: 4px !important;\n}\nmat-select {\n  padding-bottom: 17px;\n}\n.activity-t2 {\n  visibility: hidden;\n  position: absolute;\n}\n.activity-t1:hover .activity-t2 {\n  visibility: visible;\n  position: relative;\n  z-index: 999;\n}\n.persion-icon.activity-t1 {\n  position: relative;\n}\n.activity-t2 {\n  position: absolute;\n  top: 0px;\n  left: -90px;\n  top: 5px;\n  left: 75px;\n  z-index: 999;\n  width: auto;\n  background: #fff;\n  box-shadow: 0px 0px 2px #464646;\n  padding: 2px 5px;\n}\n.user-loop {\n  position: relative;\n  border: solid 0px red;\n  height: 50px;\n  width: 50px;\n  float: left;\n}\n.user-loop .user-name {\n  z-index: 999;\n  width: auto;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0px 0px 2px #464646;\n  padding: 0px 1px;\n  margin-top: 13px;\n  display: none;\n  font-size: 12px;\n}\n.user-loop:hover .user-name {\n  display: block;\n  position: absolute;\n  top: 10px;\n  width: 85px;\n  z-index: 99999999;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9rZW4vZWRpdC10b2tlbi9lZGl0LXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTt5QkFBQTtBQUdBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7QUFBQTtBQUdBLGFBQUE7QUFDQTtFQUNBLGFBQUE7QUFBQTtBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFBSjtBQU1BO0VBR0kscUJBQUE7QUFMSjtBQVVJO0VBQ0ksU0FBQTtBQVBSO0FBV0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBUko7QUFjQTtFQUNDLGFBQUE7QUFYRDtBQWFBO0VBQ0Msb0JBQUE7QUFWRDtBQVlJO0VBQ0ksWUFBQTtBQVZSO0FBY0E7RUFDRSxZQUFBO0FBWEY7QUFjQTs7O0VBR0MsYUFBQTtBQVhEO0FBYUE7Ozs7O0VBTUMsWUFBQTtFQUNHLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFYSjtBQWNBO0VBRUMsWUFBQTtBQVpEO0FBaUJBOztFQUVRLFdBQUE7QUFkUjtBQWdCUTtFQUpSOztJQUtZLFVBQUE7RUFaVjtBQUNGO0FBZ0JBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBYko7QUFnQkE7RUFDSSxjQUFBO0VBQ0osZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFiQTtBQWtCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZko7QUFtQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWhCSjtBQWtCQTtFQUNDLHdCQUFBO0VBQ0csdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFmSjtBQWlCSTtFQVBKO0lBUVEs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O0VBN0lOOztFQWdKTTtJQUVJLGlCQUFBO0VBOUlWOztFQW1KTTtJQUNJLG9CQUFBO0VBaEpWOztFQXFKRTs7O0dBQUE7QUEvSUo7QUF1SkE7RUFDSSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0gsa0JBQUE7QUFySkQ7QUF5SkE7RUFDSTtJQUNRLDZCQUFBO0VBdEpWO0FBQ0Y7QUF5SkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdkpKO0FBd0pJO0VBSko7SUFLUSxnQkFBQTtFQXJKTjtBQUNGO0FBdUpBO0VBR1EsNEJBQUE7RUFDQSxvQkFBQTtBQXRKUjtBQTBKQTtFQUNJLDJCQUFBO0FBdkpKO0FBMEpBO0VBQ0ksb0JBQUE7QUF2Sko7QUEySkc7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0FBeEpOO0FBMkpJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF4SlI7QUE2SkE7RUFDSSxrQkFBQTtBQTFKSjtBQThKQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBM0pKO0FBZ0tBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTdKSjtBQThKSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBNUpSO0FBOEpJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBNUpSIiwiZmlsZSI6InNyYy9hcHAvdG9rZW4vZWRpdC10b2tlbi9lZGl0LXRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGFwcGx5IENTUyB0byB0aGUgc2VsZWN0IHRhZyBvZiAgXHJcbiAuZHJvcGRvd24tY29udGFpbmVyIGRpdiovIFxyXG5cclxuc2VsZWN0IHsgXHJcbi8qIGZvciBGaXJlZm94ICovIFxyXG4tbW96LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4vKiBmb3IgU2FmYXJpLCBDaHJvbWUsIE9wZXJhICovIFxyXG4td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG59IFxyXG5cclxuLyogZm9yIElFMTAgKi8gXHJcbnNlbGVjdDo6LW1zLWV4cGFuZCB7IFxyXG5kaXNwbGF5OiBub25lOyBcclxufSBcclxuXHJcbi50b2tlbi1kZXNje1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5lZGl0LXBlbmNpbC1pY29ue1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDU7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0LWl0ZW0tbGlzdHtcclxuICAgIC5lZGl0LXBlbmNpbC1pY29ue1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmF0dGFjaC1maWxle1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZGwtZGF0ZS10aW1lLXBpY2tlciNleHBlY3RlZF9kYXRlX3BpY2tlcntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbmZvcm17XHJcblx0bWFyZ2luLWJvdHRvbToxMDBweDtcclxuXHJcbiAgICBpbnB1dCxzZWxlY3QsaW9uLWlucHV0e1xyXG4gICAgICAgIGhlaWdodDo0NXB4O1xyXG5cclxuICAgIH1cclxufVxyXG5kaXY6Zm9jdXMsIGRpdjphY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnRva2VuLWVkaXQtY2hlY2tlZC1pY29uLC50b2tlbi10eXBlLWNoZWNrZWQtaWNvbiwgLnRva2VuLXByaW9yaXR5LWNoZWNrZWQtaWNvbiwudG9rZW4tYnJhbmNoLWNoZWNrZWQtaWNvbiwgXHJcbi50b2tlbi1kZXB0LWNoZWNrZWQtaWNvbiwudG9rZW4tc3RhdHVzLWNoZWNrZWQtaWNvbiwucmVtYXJrLWVkaXQtY2hlY2tlZC1pY29uLFxyXG4uZXhwZWN0ZWQtdG9rZW4tZGF0ZS1jaGVja2VkLWljb24sIC50b2tlbi1kZXNjLWNoZWNrZWQtaWNvbiAsIC5jb21tZW50LWRlc2MtY2hlY2tlZC1pY29uLCAuZGF0ZS1lZGl0LWNoZWNrZWQtaWNvbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9rZW4tdHlwZS1jaGVja2VkLWljb24sXHJcbi50b2tlbi1wcmlvcml0eS1jaGVja2VkLWljb24sXHJcbi50b2tlbi1zdGF0dXMtY2hlY2tlZC1pY29uLFxyXG4udG9rZW4tZGVwdC1jaGVja2VkLWljb24sXHJcbi50b2tlbi1icmFuY2gtY2hlY2tlZC1pY29uXHJcbntcclxuXHRib3R0b206IDI0cHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi50b2tlbi1zdGF0dXMtY2hlY2tlZC1pY29uXHJcbntcclxuXHRib3R0b206IDIycHg7XHJcbiBcclxuIFxyXG59XHJcblxyXG4uZWRpdC1wZW5jaWwtaWNvbi5yZW1hcmstZWRpdC1wZW5jaWwtaWNvbixcclxuLmVkaXQtcGVuY2lsLWljb24ucmVtYXJrLWVkaXQtY2hlY2tlZC1pY29ue1xyXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG4uZmlsZS11cGxvYWQtY29sIGlvbi1idXR0b24uZmlsZS11cGxvYWR7XHJcbiAgICBsZWZ0OiAwIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKCAzM2RlZyk7ICBcclxuICAgIG1hcmdpbi1sZWZ0Oi04cHg7XHJcbn1cclxuXHJcbi5yZWMtY2xvc2V7XHJcbiAgICBjb2xvcjogI2JhMWUyNDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmxlZnQ6IDI3MnB4O1xyXG5ib3R0b206IDY1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1pYy1zdGFydHtcclxuICAgIGNvbG9yOiM5OTk5OTk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uY29tbWVudEVyck1zZ3tcclxuICAgIGNvbG9yOiAjNWMyMjIyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuXHJcbmltZy5lZGl0LXBlbmNpbC1pY29uIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuXHQtLWlubmVyLXBhZGRpbmctZW5kIDogMHB4O1x0XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzY4YmZiYjtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAtLWJvcmRlci1ib3R0b206IHNvbGlkIDBweCAjNjhiZmJiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuXHQuaXRlbS1pbm5lcntcclxuXHRcdGJvcmRlcjpzb2xpZCAxMXB4IHJlZCFpbXBvcnRhbnQ7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGlvbi1pbnB1dHtcclxuXHQgICAgbWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxufVxyXG5cclxuaW9uLWl0ZW0uZmlsZS11cGxvYWQtaXRlbS50b2tlbi1kZXNjcmlwdGlvbntcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gfVxyXG4vKmlvbi1pdGVtLmZpbGUtdXBsb2FkLWl0ZW17XHJcbiAgICBtYXJnaW46MDtcclxufSovXHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMHB4O1xyXG5cclxuICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcblxyXG4gaW9uLWl0ZW0uZXhpdGluZy10b2tlbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjNjhiZmJiO1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMjBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwudG9rZW4tZGVzYyB7XHJcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gaW9uLWl0ZW0uZmlsZS11cGxvYWQtaXRlbXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmlucHV0LWNvbC1lZGl0LXRva2Vue1xyXG5cdGlvbi1sYWJlbHtcclxuXHQgICAgXHJcblx0ICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0ICAgIC8qIGNvbG9yOiAjNDM0MzQzICFpbXBvcnRhbnQ7ICovXHJcblx0ICAgIC8qIG1hcmdpbi1ib3R0b206IDdweCAhaW1wb3J0YW50OyAqL1xyXG5cdCAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8vICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuLnRva2VuLWRlc2MtZGF0ZS1wZW5jaWwtaWNvbixcclxuLmNvbW1lbnQtZGVzYy1kYXRlLXBlbmNpbC1pY29uXHJcbntcclxuXHR0b3A6IDMwcHg7ICAgIFxyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5maWxlLXVwbG9hZC1jb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uYWR2X3RleHRhcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi5maWxlLXVwbG9hZC1jb2wgaW9uLWlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcclxuICAgIHdpZHRoOiAxMDdweDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5maWxlX3VwbG9hZF9pbWcgLmZpbGVfZGVsZXRlX2ljb24gaW9uLWljb24uZGVsZXRlLWZpbGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIHRvcDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICM2NWMxYmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRva2VuLWVkaXQtaW1nLXJvd3tcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tYm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM2OGJmYmIhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3Rpb24tY29se1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM2OGJmYmI7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwcHggIzY4YmZiYjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0e1xyXG5cdCAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyAgICAgICAgXHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblxyXG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuZm9ybS1ncm91cHtcclxuICAgIFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICBcdFxyXG5cclxuXHRcdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcblx0XHRcdFxyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcblx0XHRcdG91dGxpbmU6IDA7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAwO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICAuZWRpdC1wZW5jaWwtaWNvbntcclxuICAgIFx0IGJvdHRvbTogMTVweDsgICAgXHQgXHJcbiAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b2tlbi1icmFuY2gtcGVuY2lsLWljb24sXHJcbiAgICAudG9rZW4tZGVwdC1wZW5jaWwtaWNvbiwudG9rZW4tc3RhdHVzLXBlbmNpbC1pY29ue1xyXG4gICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC50b2tlbi1icmFuY2gtY2hlY2tlZC1pY29uLFxyXG4gICAgLnRva2VuLWRlcHQtY2hlY2tlZC1pY29uLC50b2tlbi1zdGF0dXMtY2hlY2tlZC1pY29ue1xyXG4gICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gLnRva2VuLXR5cGUtcGVuY2lsLWljb24sXHJcbiAgICAvLyAudG9rZW4tcHJpb3JpdHktcGVuY2lsLWljb24sXHJcbiAgICAvLyAudG9rZW4tdHlwZS1jaGVja2VkLWljb24sXHJcbiAgICAvLyAudG9rZW4tcHJpb3JpdHktY2hlY2tlZC1pY29uLFxyXG4gICAgLy8gLnRva2VuLXN0YXR1cy1wZW5jaWwtaWNvbixcclxuICAgIC8vIC50b2tlbi1zdGF0dXMtY2hlY2tlZC1pY29ue1xyXG4gICAgLy8gXHRib3R0b206IDEwcHg7ICAgIFx0XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuc2VsZWN0e1xyXG5cdGJvcmRlcjogMDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDsgICAgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4OyAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgXHRjb250ZW50OicgJztcclxuICAgIFx0cG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBcdGJvdHRvbTowcHg7XHJcbiAgICBcdGxlZnQ6MHB4O1xyXG4gICAgXHR3aWR0aDogMTAwJTtcclxuICAgIFx0Ym9yZGVyLWJvdHRvbTpzb2xpZCAxcHggcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgIC5mb3JtLWVkaXQtdG9rZW4tY29sIC5zZWxlY3QtY29sIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC5hZGQtdXNlcjEuc3VwcG9ydGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIH1cclxuICAgIC50b2tlbi10eXBlLFxyXG4gICAgLnByaW9yaXR5e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHghaW1wb3J0YW50OyBcclxuICAgIH1cclxuXHJcbiAgICAucmVtYXJrLnNlbGVjdGVkLXRva2VuLXJlbWFya3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWVkaXQtdG9rZW4tY29se1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpeyAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAubXVsdGktaXRlbS1zZWxlY3R7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW0haW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtIWltcG9ydGFudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhpdGluZy10b2tlbi1jb2x7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5mb3JtLWVkaXQtdG9rZW4tY29se1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpeyAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAubXVsdGktaXRlbS1zZWxlY3R7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW0haW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhpdGluZy10b2tlbi1jb2x7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcclxuICAgIC5kZXB0LWNvbHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2libGUtc2VsZWN0LWNvbCwucmV2aWV3ZXItc2VsZWN0LWNvbHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICBsZWZ0OiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1cHBvcnRlci1jb2x7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zdGF0dXMtY29se1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtdG9rZW4tYnRuLWNvbHsgICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG5cclxuI3Rva2VuLWhlYWRpbmd7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdG9rZW4taGVhZGluZy1jb25maXJte1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgLmZvcm0tZWRpdC10b2tlbi1jb2x7XHJcbiAgICAgICAgLy8gYm9yZGVyOnNvbGlkIDFweCByZWQhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCAxcHggZ3JlZW4haW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDb21tbmV0IFxyXG4uY29tbWVudC1pb24taXRlbXtcclxuICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICAgLmNvbW1lbnQtZGVzYy1kYXRlLXBlbmNpbC1pY29uLFxyXG4gICAgIC5jb21tZW50LWRlc2MtY2hlY2tlZC1pY29uXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyAgQWRkIFRva2VuIFNDU1MgXHJcblxyXG4uZXhpc3RpbmctdG9rZW4tZHJvcGRvd257XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkY2RjZGM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYlO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwUFg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjOTU5NTk1O1xyXG4gICBcclxuICAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuXHJcblxyXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ucmVzcG9uc2libGUtY29se1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG5cclxuLnBlcnNpb24taWNvbntcclxuICAgIC8vICY6OmJlZm9yZXtcclxuICAgIC8vICAgICBjb250ZW50OiAnYic7XHJcbiAgICAvLyB9XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBcclxuICAgICAgICBjb250ZW50OnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGVyc29uLTEucG5nXCIpOyAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNjhiZmJiO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy8gcGFkZGluZzogOXB4O1xyXG4gICAgICAgIHBhZGRpbmc6OHB4IDlweCA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXI6c29saWQgMHB4IHJlZDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICAgICAgLy8gei1pbmRleDogOTk7XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCl7IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGVyc29uLTEucG5nXCIpO1xyXG4gICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5maWxlX2RlbGV0ZV9pY29uMXtcclxuICAgICAgICBpb24taWNvbi5kZWxldGUtZmlsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMTJweDtcclxuICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjVjMWJjO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWJ0bntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweCAwIDgwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBjdXJzb3I6IGNvbnRleHQtbWVudTtcclxuXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgXHJcblxyXG59XHJcblxyXG5cclxuLmFkZC11c2VyMXtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAxMHB4OyovXHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjhiZmJiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbGVmdDogMTVweDtcclxuXHJcbiAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cclxuICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2OGJmYmI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgLy8gdG9wOiA1cHg7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgLyogIHdpZHRoOiAzM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubXVsdGlwbGUtZmllbGQtbmFtZXtcclxuICAgIFxyXG4gICAgICAgIG1heC13aWR0aDogMTcycHg7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGJvdHRvbTogLTIzcHg7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWRkLXVzZXIxe1xyXG4gICAgaW9uLWljb25bbmFtZT1cInBlcnNvbi1hZGQtb3V0bGluZVwiXXsgICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmV4aXRpbmctdG9rZW4tY29se1xyXG4gICAgLnNlbGVjdGVkLWV4aXN0aW5nLWl0ZW17XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjVweDsgICAgXHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuXHJcbiAgICAgICAgLnJlbW92ZS10b2tlbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4IWltcG9ydGFudCAgICA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI1cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2I3YjdiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICAgICAgICBuZy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxudWwubmF2e1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbGkubmF2LWl0ZW1cclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmNGYyZjI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6aG92ZXIsJjphY3RpdmUsJjpmb2N1c3tcclxuICAgICAgICAgICAgY29sb3I6IzY4YmZiYjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIEVuZCBBZGQgVG9rZW4gU0NTU1xyXG5cclxuXHJcblxyXG4ubWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlciAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMGYwO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcclxuICAgIC5leGl0aW5nLXRva2VuLWNvbCB7XHJcbiAgICAgICAgLy8gcGFkZGluZzo1cHggNDBweCAwIDEwMnB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxMDBweDsgICBcclxuICAgIH1cclxuICAgIC5yZXNwb25zaWJsZS1zZWxlY3QtY29sIC5kcm9wZG93bi1idG57XHJcbiAgICAgICAgcGFkZGluZzo1cHggNDBweCAwIDEwMHB4IWltcG9ydGFudDsgICAgXHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydGVyLWNvbCAuZHJvcGRvd24tYnRue1xyXG4gICAgICAgIHBhZGRpbmc6NXB4IDQwcHggMCAxMDRweCFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgfVxyXG4gICAgLnJldmlld2VyLXNlbGVjdC1jb2wgLmRyb3Bkb3duLWJ0bntcclxuICAgICAgICBwYWRkaW5nOjVweCA0MHB4IDAgOTVweCFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5hZG1pbi1yaWdodC1zaWRlIC5tYWluLWdyaWQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlvbi1pdGVtLmV4aXRpbmctdG9rZW57XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjNjhiZmJiO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBsZWZ0OiAyMSU7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuZXhpc3RpbmctdG9rZW4tZHJvcGRvd24uc2VhcmNoLXJlc3VsdHtcclxuICAgICAgICBib3JkZXI6c29saWQgMXB4IHJlZCFpbXBvcnRhbnQ7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc5cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdWwubmF2e1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4aXRpbmctdG9rZW4tY29sIGRpdntcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTZweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmV4aXN0aW5nLXRva2VuLWRyb3Bkb3duIHsgICAgICAgIFxyXG4gICAgICAgIC8vIGJvcmRlcjpzb2xpZCAxcHggcmVkIWltcG9ydGFudDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiAycHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnRva2VuX3Nob3dfZGl2e1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlbW92ZS10b2tlbltfbmdjb250ZW50LWFkay1jMjgxXSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTE3cHggIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0ZWQtZXhpc3RpbmctaXRlbXtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wZXJzaW9uLWljb257XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA5cHggNHB4O1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8qLmZvcm0tZWRpdC10b2tlbi1jb2wgLm11bHRpLWl0ZW0tc2VsZWN0LmV4aXRpbmctdG9rZW4tY29se1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICovXHJcbn1cclxuXHJcblxyXG5cclxuLmRlZmF1bHRUZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDVweCFpbXBvcnRhbnQ7IFxyXG4gICAgZm9udC1zaXplOiAxcmVtIWltcG9ydGFudDtcclxuXHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KXtcclxuICAgIC5lZGl0LXRva2VuLWdyaWQubWFpbi1ncmlkLm1kLmh5ZHJhdGVke1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4jZWRpdGRlcHRFcnJ7XHJcbiAgICBjb2xvcjogI2JiMzczYjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMTlweDtcclxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDowcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtc2VsZWN0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbn1cclxuXHJcblxyXG4gICAuYWN0aXZpdHktdDJ7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpdml0eS10MTpob3ZlciAuYWN0aXZpdHktdDJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgfVxyXG5cclxuXHJcbi8vICAxMS0wNS0yMDIxXHJcbi5wZXJzaW9uLWljb24uYWN0aXZpdHktdDF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uYWN0aXZpdHktdDJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IC05MHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA3NXB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggIzQ2NDY0NjtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbn1cclxuXHJcbi8vIDE3LTA1LTIwMjFcclxuXHJcbi51c2VyLWxvb3B7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDBweCByZWQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLnVzZXItbmFtZXtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggIzQ2NDY0NjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIC51c2VyLW5hbWV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/token/edit-token/edit-token.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/token/edit-token/edit-token.page.ts ***!
  \*****************************************************/
/*! exports provided: EditTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTokenPage", function() { return EditTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_main_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main-services.service */ "./src/app/services/main-services.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_record_audio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/record-audio.service */ "./src/app/services/record-audio.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const moment = moment__WEBPACK_IMPORTED_MODULE_8__;





let EditTokenPage = class EditTokenPage {
    constructor(fb, main_services, router, route, _snackBar, audioRecordingService, sanitizer, auth, location, alertController, toastr) {
        this.fb = fb;
        this.main_services = main_services;
        this.router = router;
        this.route = route;
        this._snackBar = _snackBar;
        this.audioRecordingService = audioRecordingService;
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.location = location;
        this.alertController = alertController;
        this.toastr = toastr;
        this.isTokenUpdate = false;
        this.isStatusUpdate = false;
        this.isReadonly = true;
        this.isTokenType = false;
        this.isExpectedDate = false;
        this.isTokenPriority = false;
        this.isDepartment = false;
        this.isBranch = false;
        this.isStatus = false;
        this.isRemarkReadonly = true;
        this.tokenData = '';
        this.baseUrl = 'http://localhost:3000/';
        this.supporterPersonsSetting = {};
        this.reviewerPersonsSetting = {};
        this.responsiblePersonsSetting = {};
        this.activity_log = [];
        this.actionlog = [];
        this.show_textarea = false;
        this.show_comment_textarea = false;
        this.images = [];
        this.imagepreviewURlArr = [];
        this.getImages = [];
        this.commentImages = [];
        this.myFiles = [];
        this.commentFiles = [];
        this.comment = [];
        this.tokenTypes = [];
        this.branches = [];
        this.departments = [];
        this.department_list = [];
        this.users = [];
        this.support_person = [];
        this.responsibleList = [];
        this.usersList = [];
        this.priorities = [];
        this.existingtokenList = [];
        this.selectedExistingtokenList = [];
        this.isItemAvailable = false;
        this.token_heading = "";
        this.is_private = 'false';
        this.public_private = "Public";
        this.disableEditdept = true;
        this.responsibleIds = [];
        this.supporterIds = [];
        this.reviewerIds = [];
        this.isCommentReadonly = true;
        this.isDescReadonly = true;
        this.isRecording = false;
        this.audioIndex = 0;
        this.commentChange = false;
        this.isLoading = false;
        // Token Type
        this.tokenTypesList = [];
        //Token priority
        this.tokenPriorityList = [];
        // Branch
        this.branchesList = [];
        // Dept
        this.deptsList = [];
        // Status
        this.tokenStatusList = [];
        //tokenStatusList: any = ["Open", "Assigned", "Re-assigned", "In-process", "Hold", "Completed", "Re-opened", "Done", "Rejected"];
        this.responsible_persons = [];
        this.support_persons = [];
        this.user_persons = [];
        this.existingToken = [];
        this.token_priority = '';
        this.token_type = '';
        this.token_desc_data = '';
        this.comment_desc_data = '';
        this.branch = '';
        this.dept = '';
        this.status = '';
        this.remark = '';
        this.tokenPriorityBydefault = [];
        this.disabledept = true;
        this.pickerOptions = {
            buttons: [{
                    text: "Clear",
                    handler: () => this.expected_date = ''
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: "Done",
                    handler: (data) => {
                        console.log(data);
                        let year = data.year.text;
                        let month = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
                        let day = data.day.text < 10 ? '0' + data.day.text : data.day.text;
                        let hour = data.hour.text;
                        let minute = data.minute.text;
                        this.DateTimevalue = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00+05:30';
                        this.expected_date = this.DateTimevalue;
                    }
                }]
        };
        this.token_id = this.route.snapshot.params['id'];
        let currentUrl = this.router.url;
        this.urlCheck = currentUrl.includes('admin');
        this.values = JSON.parse(localStorage.getItem("login_permission"));
        this.loginUser = this.values.id;
        this.audioRecordingService.recordingFailed().subscribe(() => {
            this.isRecording = false;
        });
        this.audioRecordingService.getRecordedTime().subscribe((time) => {
            this.recordedTime = time;
        });
        this.audioRecordingService.getRecordedBlob().subscribe((data) => {
            console.log(data);
            console.log(data.title);
            this.filename = data.title;
            var file = new File([data.blob], this.filename, { type: 'audio/wav', lastModified: Date.now() });
            this.myFiles.push(file);
            this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
            console.log(data.blob);
        });
    }
    openSnackBar1() {
        this._snackBar.open("Cannonball!!", "End now", {
            duration: 5000
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.main_services.view_token(this.token_id).subscribe((data) => {
            this.isLoading = false;
            this.tokenNo = data['token']['token_no'];
            this.tokenNo1 = this.tokenNo;
            this.tokenData = data['token'];
            if ((data['token']['token_type'] && data['token']['token_type']['name'] == 'Incident') || !data['token']['token_type']) {
                if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                    this.typeSize = 4;
                    this.tokenPrioritySize = 4;
                    this.tokenHeadingSize = 4;
                }
                else {
                    this.typeSize = 12;
                    this.tokenPrioritySize = 12;
                    this.tokenHeadingSize = 12;
                }
                this.ExpectedDateShow = false;
            }
            else {
                if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                    this.typeSize = 3;
                    this.tokenPrioritySize = 3;
                    this.tokenHeadingSize = 3;
                }
                else {
                    this.typeSize = 12;
                    this.tokenPrioritySize = 12;
                    this.tokenHeadingSize = 12;
                }
                this.ExpectedDateShow = true;
            }
            // this. blobUrl = null;
            this.is_private = data['token']['is_private'];
            this.is_private ? this.public_private = 'Private' : 'Public';
            this.token_heading = data['token']['heading'];
            this.tokenHeadingBydefault = data['token']['heading'];
            this.token_type = data['token']['token_type'] ? data['token']['token_type']['_id'] : "";
            this.tokentypeBydefault = data['token']['token_type'] ? data['token']['token_type']['_id'] : "";
            this.expected_date = data['token']['expected_date'] ? moment(data['token']['expected_date']).format() : '';
            this.token_priority = data['token']['priority'] ? data['token']['priority']['_id'] : "";
            this.tokenPriorityBydefault = data['token']['priority'] ? data['token']['priority']['_id'] : "";
            this.token_desc_data = data['token']['description'];
            this.tokenDescDataBydefault = data['token']['description'];
            // $("#token-desc-details").empty().append($(this.token_desc_data));
            this.branch = data['token']['branch'] ? data['token']['branch']['_id'] : "";
            this.branchbyDefault = data['token']['branch'] ? data['token']['branch']['_id'] : "";
            this.dept = data['token']['department'] ? data['token']['department']['_id'] : "";
            this.deptbyDefault = data['token']['department'] ? data['token']['department']['_id'] : "";
            this.selectedItems = data['token']['responsible_person'];
            this.selectedItemsbyDefault = data['token']['responsible_person'];
            this.SuporterItem = data['token']['support_person'];
            this.supporterItembyDefault = data['token']['support_person'];
            this.ReviewerItem = data['token']['reviewer_person'];
            this.reviewerItembyDefault = data['token']['reviewer_person'];
            this.selectedExistingtokenList = data['token']['existing_token'];
            console.log(this.selectedExistingtokenList);
            this.tokenlistbyDefault = data['token']['existing_token'];
            this.status = data['token']['status'];
            this.statusBydefault = data['token']['status'];
            this.remark = "";
            this.images = this.imagePreviewUrl(data['token']['images']);
            console.log(this.images);
            this.imageBydefault = this.imagePreviewUrl(data['token']['images']);
            this.actionlog = data['token']['actionlog'];
            this.activity_log = data['token']['activity_log'].map(log => {
                log.images = this.imagePreviewUrl(log.images);
                return log;
            });
            this.selectedItems.forEach(responsible => {
                this.responsibleIds.push(responsible.id);
            });
            this.SuporterItem.forEach(supporter => {
                this.supporterIds.push(supporter.id);
            });
            this.ReviewerItem.forEach(reviewer => {
                this.reviewerIds.push(reviewer.id);
            });
            if (this.responsibleIds.includes(this.loginUser)) {
                this.tokenStatusList = ["Open", "Assigned", "Re-assigned", "In-process", "Hold", "Completed", "Re-opened", "Rejected"];
                if (this.reviewerIds.includes(this.loginUser)) {
                    this.tokenStatusList = ["Open", "Assigned", "Re-assigned", "In-process", "Hold", "Completed", "Re-opened", "Done", "Rejected"];
                }
            }
            else if (this.supporterIds.includes(this.loginUser)) {
                this.tokenStatusList = ["Open", "Assigned", "Re-assigned", "In-process", "Hold", "Completed", "Re-opened", "Rejected"];
                if (this.reviewerIds.includes(this.loginUser)) {
                    this.tokenStatusList = ["Open", "Assigned", "Re-assigned", "In-process", "Hold", "Completed", "Re-opened", "Done", "Rejected"];
                }
            }
            else if (this.reviewerIds.includes(this.loginUser)) {
                this.tokenStatusList = ["Open", "Assigned", "Re-assigned", "In-process", "Hold", "Done", "Re-opened", "Rejected"];
            }
            else {
                this.tokenStatusList = [];
            }
        }, (error) => {
            console.log(error);
        });
    }
    startRecording() {
        if (!this.isRecording) {
            this.isRecording = true;
            this.audioRecordingService.startRecording();
        }
    }
    abortRecording() {
        if (this.isRecording) {
            this.isRecording = false;
            this.audioRecordingService.abortRecording();
        }
    }
    stopRecording() {
        if (this.isRecording) {
            this.audioRecordingService.stopRecording();
            this.isRecording = false;
            this.showmic = true;
        }
    }
    clearRecordedData(audioIndex) {
        this.blobUrl = null;
        this.myFiles = Array.from(this.myFiles).filter(item => {
            return item != this.myFiles[audioIndex];
        });
        console.log(this.myFiles);
    }
    ngOnDestroy() {
        this.abortRecording();
    }
    onItemSelect(event) {
        this.isTokenUpdate = true;
        this.showSubmitBtn = true;
    }
    onItemDeSelect(event) {
        this.isTokenUpdate = true;
        this.showSubmitBtn = true;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.href = this.router.url;
            yield this.main_services.getDataForCreateToken().subscribe((result) => {
                if (result['success']) {
                    this.tokenTypesList = result['tokenTypes'];
                    this.branchesList = result['branches'];
                    this.deptsList = result['departments'];
                    this.department_list = result['departments'];
                    this.support_person = result['users'];
                    this.users = result['users'];
                    this.responsibleList = this.users;
                    this.usersList = result['users'];
                    this.tokenPriorityList = result['tokenPriorities'];
                }
            });
            this.dropdownSetting();
            yield this.main_services.filter('click');
        });
    }
    toggleChange() {
        if (this.is_private) {
            this.public_private = "Private";
        }
        else {
            this.public_private = "Public";
        }
    }
    imagePreviewUrl(files) {
        this.imagepreviewURlArr = [];
        for (let i = 0; i < files.length; i++) {
            var fileName = files[i]['name'];
            var extension = files[i]['extension'];
            let img = { url: files[i]['url'], previewURL: '', name: fileName, showAudio: false, showImg: false };
            console.log(img);
            console.log('Hii', extension, files[i]['url']);
            if (extension == '.mp3') {
                img.showAudio = true;
            }
            else {
                img.showImg = true;
            }
            switch (extension) {
                case '.jpg':
                case '.png':
                case '.jpeg':
                case '.gif':
                case '.webp':
                case '.mp3':
                    img.previewURL = files[i]['url'];
                    break;
                case '.docx':
                    img.previewURL = '../../assets/files-extension-imgs/doc-file.png';
                    break;
                case '.xlsx':
                    img.previewURL = '../../assets/files-extension-imgs/excel-file.png';
                    break;
                case '.pdf':
                    img.previewURL = '../../assets/files-extension-imgs/pdf-file.png';
                    break;
                case '.ppt':
                    img.previewURL = '../../assets/files-extension-imgs/ppt-file.jpg';
                    break;
                case '.zip':
                case 'zipx':
                    img.previewURL = '../../assets/files-extension-imgs/zip-file.png';
                    break;
                default:
                    img.previewURL = '../../assets/files-extension-imgs/other-file.jpg';
            }
            this.imagepreviewURlArr.push(img);
        }
        return this.imagepreviewURlArr;
    }
    showHideSearch() {
        this.isItemAvailable = !this.isItemAvailable;
        if (this.isItemAvailable) {
        }
        this.isTokenUpdate = !this.showSubmitBtn;
        this.showSubmitBtn = true;
        //this.showSubmitBtn = !this.showSubmitBtn;
    }
    removeExitingToken(tokenId) {
        this.selectedExistingtokenList = this.selectedExistingtokenList.filter(item => {
            return item._id != tokenId;
        });
        this.showSubmitBtn = true;
    }
    onSearchToken(value) {
        if (value.length > 3) {
            this.main_services.getExistingToken(value).subscribe((result) => {
                if (result['success']) {
                    this.existingtokenList = result['tokens'];
                }
            });
        }
    }
    showTokenIcon(token) {
        this.isItemAvailable = !this.isItemAvailable;
        this.selectedExistingtokenList.push(token);
        this.existingtokenList = this.existingtokenList.filter(item => {
            return item.token_no != token.token_no;
        });
    }
    dropdownSetting() {
        this.supporterPersonsSetting = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            defaultOpen: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: this.support_person.length,
            allowSearchFilter: true,
        };
        this.reviewerPersonsSetting = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            defaultOpen: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: this.users.length,
            allowSearchFilter: true,
        };
        this.responsiblePersonsSetting = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            defaultOpen: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: this.responsibleList.length,
            allowSearchFilter: true,
        };
    }
    //Expected Date
    editExpectedDateTime(event) {
        this.isExpectedDate = true;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.date-edit-pencil-icon').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.selected-expected-date').addClass('selection-border');
    }
    insertExpectedDate(e) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.date-edit-checked-icon').show();
        this.expected_date = e.target.value;
        // $('.selected-expected-date').addClass('selection-border');
        this.isTokenUpdate = true;
    }
    // Token Heading
    editTokenHeading(event) {
        this.isReadonly = !this.isReadonly;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-edit-checked-icon').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-edit-pencil-icon').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.selected-token-heading').addClass('selection-border');
        this.showSubmitBtn = true;
    }
    InsertData(e) {
        this.token_heading = e.target.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-edit-checked-icon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.selected-token-heading').addClass('selection-border');
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
        this.isStatusUpdate = false;
    }
    // End Heading
    editTokenType(e) {
        this.isTokenType = true;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-type-select-box').addClass('selection-border');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-type-pencil-icon').hide();
        this.showSubmitBtn = true;
    }
    applyTokenType(e) {
        this.token_type = e.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-type-checked-icon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-type-select-box').addClass('selection-border');
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
        this.tokenTypesList.forEach(data => {
            if (data.name == 'Incident') {
                this.incidentId = data._id;
            }
        });
        if (e.value != this.incidentId) {
            if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                this.typeSize = 3;
                this.tokenPrioritySize = 3;
                this.tokenHeadingSize = 3;
            }
            else {
                this.typeSize = 12;
                this.tokenPrioritySize = 12;
                this.tokenHeadingSize = 12;
            }
            this.ExpectedDateShow = true;
            this.expected_date = '';
        }
        else {
            if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                this.typeSize = 4;
                this.tokenPrioritySize = 4;
                this.tokenHeadingSize = 4;
            }
            else {
                this.typeSize = 12;
                this.tokenPrioritySize = 12;
                this.tokenHeadingSize = 12;
            }
            this.ExpectedDateShow = false;
        }
    }
    // End Token Type
    // Token Priority
    editTokenPriority(e) {
        this.isTokenPriority = true;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-priority-select-box').addClass('selection-border');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-priority-pencil-icon').hide();
        this.showSubmitBtn = true;
    }
    applyTokenPriority(e) {
        this.token_priority = e.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-priority-pencil-icon').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-priority-checked-icon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-priority-select-box').addClass('selection-border');
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
    }
    // End Token Priority
    // Branch
    edittokenBranch(e) {
        this.isBranch = true;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-branch-select-box').addClass('selection-border');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-branch-pencil-icon').hide();
        this.showSubmitBtn = true;
    }
    applyTokenBranch(branchId) {
        this.dept = "";
        this.disableEditdept = false;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-branch-checked-icon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-branch-select-box').addClass('selection-border');
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#editdeptErr").fadeOut();
        this.deptsList = this.department_list.filter((department) => {
            return department.branch._id == branchId;
        });
        if (branchId == '') {
            this.responsibleList = this.users;
        }
        else {
            this.responsibleList = this.usersList.filter((user) => {
                if (user.branch)
                    return user.branch._id == branchId;
                this.branchIid = branchId;
                console.log(this.branchIid);
            });
        }
    }
    ShowDeptErr() {
        if (this.disableEditdept == true) {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()("#editdeptErr").fadeIn();
        }
    }
    // End branch
    // Dept
    edittokenDept(e) {
        this.isDepartment = true;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-dept-select-box').addClass('selection-border');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-dept-pencil-icon').hide();
        this.showSubmitBtn = true;
    }
    applyTokenDept(departmentId) {
        // this.dept = e.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-dept-checked-icon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-dept-select-box').addClass('selection-border');
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
        if (departmentId == '') {
            this.responsibleList = this.usersList.filter((user) => {
                if (user.branch)
                    return user.branch._id == this.branchIid;
            });
        }
        else {
            this.responsibleList = this.usersList.filter((user) => {
                if (user.department)
                    return user.department._id == departmentId;
            });
        }
    }
    // End Dept
    // Token Status
    edittokenStatus(e) {
        this.isStatus = true;
        // $('.token-status-select-box').addClass('selection-border');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-status-pencil-icon').hide();
        // $('.remark-edit-pencil-icon').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.selected-token-status').addClass('selection-border');
    }
    applyTokenStatus(e) {
        this.status = e.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-status--checkedicon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-status-select-box').addClass('selection-border');
        if (this.statusBydefault == 'Done' || this.statusBydefault == 'Rejected') {
            this.showSubmitBtn = false;
        }
        else {
            this.showSubmitBtn = true;
        }
        // this.isTokenUpdate = true;
        this.isStatusUpdate = true;
    }
    // End status
    // Remark
    editRemark(event) {
        this.isRemarkReadonly = false;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.remark-edit-pencil-icon').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.selected-token-remark').addClass('selection-border');
        this.showSubmitBtn = true;
    }
    remarkInsert(e) {
        this.remark = e.target.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.remark-edit-checked-icon').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.selected-token-remark').addClass('selection-border');
        //this.showSubmitBtn = true;
        // this.isTokenUpdate = true;
        this.isStatusUpdate = true;
    }
    // End remarks
    token_desc(e) {
        this.isDescReadonly = !this.isDescReadonly;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.file-upload-item').addClass('selection-border');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-desc-date-pencil-icon, #token-desc-details').hide();
        this.show_textarea = !this.show_textarea;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.file-upload-item').addClass('add-file-upload-item');
        });
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
        this.showSubmitBtn = true;
    }
    tokeDesc(e) {
        this.token_desc_data = e.target.value;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.token-desc-checked-icon').show();
        // this.showSubmitBtn = true;
        this.isTokenUpdate = true;
    }
    // Comment
    comment_desc(e) {
        this.isCommentReadonly = !this.isCommentReadonly;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.comment-desc-date-pencil-icon, #comment-desc-details').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.comment-token').show();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.comment-ion-item').css({ "border-bottom": "solid 2px #68bfbb", "margin-bottom": "25px" });
        this.show_comment_textarea = !this.show_comment_textarea;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.file-upload-item').addClass('add-file-upload-item');
        });
        if (this.statusBydefault == 'Done' || this.statusBydefault == 'Rejected') {
            this.showSubmitBtn = false;
        }
        else {
            this.showSubmitBtn = true;
        }
        // this.isTokenUpdate = true;
    }
    commentDesc(e) {
        this.comment_desc_data = e.target.value;
        console.log(this.comment_desc_data);
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.comment-desc-checked-icon').show();
        this.showSubmitBtn = true;
        this.commentChange = true;
    }
    // End comment
    tokenImage(input) {
        const file = input.target.files;
        for (var i = 0; i < file.length; i++) {
            let f_name = file[i].name;
            let getName = f_name.split('.');
            let extension = getName[1];
            this.myFiles.push(file[i]);
            let img = { name: '', url: '', previewURL: '', showImg: false };
            console.log(img);
            img.name = file[i]['name'];
            const reader = new FileReader();
            switch (extension) {
                case 'jpg':
                case 'png':
                case 'PNG':
                case 'jpeg':
                case 'gif':
                case 'webp':
                    reader.onload = (e) => {
                        img.previewURL = e.target.result;
                        img.showImg = true;
                    };
                    break;
                case 'docx':
                    img.previewURL = '../../assets/files-extension-imgs/doc-file.png';
                    img.showImg = true;
                    break;
                case 'xlsx':
                    img.previewURL = '../../assets/files-extension-imgs/excel-file.png';
                    img.showImg = true;
                    break;
                case 'pdf':
                    img.previewURL = '../../assets/files-extension-imgs/pdf-file.png';
                    img.showImg = true;
                    break;
                case 'ppt':
                    img.previewURL = '../../assets/files-extension-imgs/ppt-file.jpg';
                    img.showImg = true;
                    break;
                case 'zip':
                case 'zipx':
                    img.previewURL = '../../assets/files-extension-imgs/zip-file.png';
                    img.showImg = true;
                    break;
                default:
                    img.previewURL = '../../assets/files-extension-imgs/other-file.jpg';
                    img.showImg = true;
            }
            this.images.push(img);
            reader.readAsDataURL(file[i]);
        }
    }
    deleteTokenDescFiles(img) {
        if (img.url) {
            this.main_services.tokenDocumentDelete(this.token_id, { documentUrl: img.url }).subscribe((result) => {
                this.sucmsg = result['message'];
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#successMsg').fadeIn(1000);
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#successMsg').fadeOut(5000);
                let preview_index = this.images.indexOf(img);
                this.images.splice(preview_index, 1);
                for (let d = 0; d < this.myFiles.length; d++) {
                    if (this.myFiles[d]['name'] == img['name']) {
                        this.myFiles.splice(d, 1);
                        break;
                    }
                }
            });
        }
        else {
            let preview_index = this.images.indexOf(img);
            this.images.splice(preview_index, 1);
            for (let d = 0; d < this.myFiles.length; d++) {
                if (this.myFiles[d]['name'] == img['name']) {
                    this.myFiles.splice(d, 1);
                    break;
                }
            }
        }
    }
    commentImage(input) {
        const file = input.target.files;
        for (var i = 0; i < file.length; i++) {
            let f_name = file[i].name;
            let getName = f_name.split('.');
            let extension = getName[1];
            this.commentFiles.push(file[i]);
            let img1 = { name: '', url: '' };
            img1.name = file[i]['name'];
            const reader = new FileReader();
            switch (extension) {
                case 'jpg':
                case 'png':
                case 'jpeg':
                case 'gif':
                case 'webp':
                    reader.onload = (e) => {
                        img1.url = e.target.result;
                    };
                    break;
                case 'docx':
                    img1.url = '../../assets/files-extension-imgs/doc-file.png';
                    break;
                case 'xlsx':
                    img1.url = '../../assets/files-extension-imgs/excel-file.png';
                    break;
                case 'pdf':
                    img1.url = '../../assets/files-extension-imgs/pdf-file.png';
                    break;
                case 'ppt':
                    img1.url = '../../assets/files-extension-imgs/ppt-file.jpg';
                    break;
                case 'zip':
                case 'zipx':
                    img1.url = '../../assets/files-extension-imgs/zip-file.png';
                    break;
                default:
                    img1.url = '../../assets/files-extension-imgs/other-file.jpg';
            }
            this.commentImages.push(img1);
            reader.readAsDataURL(file[i]);
        }
    }
    deleteCommentDescFiles(img) {
        let preview_index = this.commentImages.indexOf(img);
        this.commentImages.splice(preview_index, 1);
        for (let d = 0; d < this.commentFiles.length; d++) {
            if (this.commentFiles[d]['name'] == img['name']) {
                this.commentFiles.splice(d, 1);
                break;
            }
        }
    }
    commentDescription() {
        this.comment_desc_data;
        this.commentFiles;
        let commentDesc = {
            desc: this.comment_desc_data,
            file: this.commentFiles
        };
    }
    updateToken() {
        this.blobUrl = null;
        if (this.commentChange == true && (this.isTokenUpdate == false && this.isStatusUpdate == false)) {
            const commentFormData = new FormData();
            commentFormData.append('token', this.token_id);
            commentFormData.append('comment', this.comment_desc_data);
            for (let img of this.commentFiles) {
                commentFormData.append('image', img);
            }
            this.create_comment(commentFormData);
        }
        else if (this.isStatusUpdate == true && (this.isTokenUpdate == false)) {
            this.update_token(this.token_id);
            this.showSubmitBtn = true;
        }
        else {
            if (this.comment_desc_data != '') {
                if (this.isStatusUpdate == true && this.remark == '') {
                    this.presentAlert('Remark is required');
                }
                else {
                    this.update_token(this.token_id);
                    this.showSubmitBtn = true;
                    const commentFormData = new FormData();
                    commentFormData.append('token', this.token_id);
                    commentFormData.append('comment', this.comment_desc_data);
                    for (let img of this.commentFiles) {
                        commentFormData.append('image', img);
                    }
                    this.create_comment(commentFormData);
                }
            }
            else {
                if (this.isStatusUpdate == true && this.remark == '') {
                    this.presentAlert('Remark is required');
                }
                else {
                    const commentFormData = new FormData();
                    commentFormData.append('token', this.token_id);
                    commentFormData.append('comment', this.comment_desc_data);
                    for (let img of this.commentFiles) {
                        commentFormData.append('image', img);
                    }
                    this.create_comment(commentFormData);
                    this.showSubmitBtn = true;
                }
            }
        }
        this.main_services.filter('click');
    }
    update_token(id) {
        this.token_heading = this.token_heading == '' ? this.tokenHeadingBydefault : this.token_heading;
        this.token_desc_data = this.token_desc_data == '' ? this.tokenDescDataBydefault : this.token_desc_data;
        this.status = this.status == '' ? this.statusBydefault : this.status;
        const formData = new FormData();
        formData.append('is_private', this.is_private);
        formData.append('heading', this.token_heading);
        if (this.token_type != '') {
            formData.append('token_type', this.token_type);
        }
        // if(this.expected_date != '')
        // {
        formData.append('expected_date', this.expected_date);
        // }
        if (this.token_priority != '' && this.token_priority != this.tokenPriorityBydefault) {
            formData.append('priority', this.token_priority);
        }
        formData.append('description', this.token_desc_data);
        if (this.branch != '') {
            formData.append('branch', this.branch);
        }
        // if(this.dept = '')
        // {
        formData.append('department', this.dept);
        // }
        if (this.selectedItems.length) {
            for (let responsible of this.selectedItems) {
                formData.append('responsible_person', responsible._id);
            }
        }
        if (this.ReviewerItem.length) {
            for (let reviewer of this.ReviewerItem) {
                formData.append('reviewer_person', reviewer._id);
            }
        }
        if (this.SuporterItem.length) {
            for (let supporter of this.SuporterItem) {
                formData.append('support_person', supporter._id);
            }
        }
        if (this.selectedExistingtokenList.length) {
            for (let exiting of this.selectedExistingtokenList) {
                formData.append('existing_token', exiting._id);
                console.log(exiting);
            }
        }
        else {
            formData.append('existing_token', '');
        }
        if (this.status != this.statusBydefault) {
            formData.append('status', this.status);
        }
        if (this.remark !== "") {
            formData.append('remark', this.remark);
        }
        for (let img of this.myFiles) {
            formData.append('image', img);
            console.log(img);
        }
        this.myFiles = [];
        this.main_services.putToken(id, formData).subscribe((result) => {
            console.log(result);
            console.log(result['message']);
            this.sucmsg = result['message'];
            if (result['success'] == true) {
                this.toastr.success(this.sucmsg);
                if (this.auth.isRoleSuperAdmin()) {
                    this.router.navigateByUrl('/admin/tokens');
                }
                else {
                    this.router.navigateByUrl('/customer/tokens');
                }
                // this.location.back();
            }
        }, (error) => {
            this.errmsg = error.error.error;
            this.presentAlert(this.errmsg);
            console.log(this.errmsg);
        });
    }
    create_comment(formData) {
        if (!this.comment_desc_data) {
            this.presentAlert('Comment is required');
        }
        this.main_services.postComments(formData).subscribe((result) => {
            this.commentsucmsg = result['message'];
            this.toastr.success(this.commentsucmsg);
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('#commentDescription').empty();
            this.comment_desc_data = '';
            console.log(this.comment_desc_data);
            this.ngOnInit();
        }, (error) => {
            console.log(error['error']['error']);
            // this.commentErr = error['error']['error'];
        });
    }
    presentAlert(err) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showSubmitBtn = true;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: err + '<ion-icon name="alert"></ion-icon>',
                buttons: ['close']
            });
            yield alert.present();
        });
    }
};
EditTokenPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
    { type: _services_record_audio_service__WEBPACK_IMPORTED_MODULE_11__["RecordAudioService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }
];
EditTokenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-token',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-token.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/token/edit-token/edit-token.page.html")).default,
        providers: [],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-token.page.scss */ "./src/app/token/edit-token/edit-token.page.scss")).default]
    })
], EditTokenPage);



/***/ })

}]);
//# sourceMappingURL=token-edit-token-edit-token-module-es2015.js.map