(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["token-add-token-add-token-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/token/add-token/add-token.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/token/add-token/add-token.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover-spin\"  *ngIf=\"loader.isLoading | async\">\r\n\t<ion-spinner name=\"lines\" class=\"Loading-spinner\"></ion-spinner>\r\n</div>\r\n \t<ion-grid [ngClass]=\"href == '/admin/tokens/add-token'?'main-grid':'main-grid-customer'\">\r\n \t\t\t<!-- <ion-row class=\"admin-header-nav-bar pt-4\" *ngIf=\"href == '/admin/tokens/add-token'\">\t\t\t\t\t\t\t \r\n\t\t\t\r\n\t\t\t\t<ion-col class=\"linkcol\"  size-xs=\"12\" align=\"right\"  >\r\n\t\t\t\t\t<span id=\"home\" routerLink=\"/admin/home\">Home</span> /\r\n\t\t\t\t\t<span >Tokens</span> /\r\n\t\t\t\t\t<span >Generate Tokens</span> \r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t</ion-row> -->\r\n\t\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" align=\"center\" class=\"page-heading-col\">\r\n\t\t\t\t<h1 class=\"page-heading\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\tGenerate Token\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</h1>\r\n\t\t\t</ion-col>\r\n\r\n\t\t\t<ion-col size=\"12\" align=\"right\">\r\n\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t\t<ion-label align=\"right\">{{public_private}}:</ion-label><ion-toggle [(ngModel)]=\"is_private\" (ionChange)=\"toggleChange()\"></ion-toggle>\r\n\t\t\t\t</ion-item>\t\t\t\t\r\n\t\t\t</ion-col>\r\n\r\n\t\t\t<ion-col class=\"form-col\">\r\n\t\t\t\t<form [formGroup]=\"addTokenForm\" (ngSubmit)=\"addToken(addTokenForm.value)\" class=\"mt-4\">\r\n\t\t\t\t\t<ion-row>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-col size-lg=\"{{headSize}}\" >\r\n\t\t\t\t\t\t\t<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"heading\" placeholder=\" Heading (max 50 chars)*\" maxlength = \"50\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t<span *ngIf=\"heading\" style=\"margin-left: 40px; color: red;\">{{heading}}</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-col size=\"{{typeSize}}\">\t\t\t\r\n\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"select-item-list\">\r\n\t\t\t\t\t\t\t\t<label class=\"token_type_label\"> Type</label>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field >\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t  <mat-select  formControlName=\"token_type\" (selectionChange)=\"hideTypeSelectLabel($event)\">\r\n\t\t\t\t\t\t\t\t\t    <mat-option  value=\"\" ></mat-option>\r\n\t\t\t\t\t\t\t\t\t    <mat-option *ngFor=\"let tokenType of tokenTypes\" value=\"{{tokenType._id}}\">{{tokenType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t<ion-col size-lg=\"3\" size-xs=\"12\" *ngIf=\"ExpectedDateShow\">\r\n\t\t\t\t\t\t\t<ion-item class=\"select-item-dateTime\">\r\n\t\t\t\t\t\t\t\t<ion-datetime placeholder=\"Expected Date\" [pickerOptions]=\"pickerOptions\" \r\n\t\t\t\t\t\t\t\tformControlName=\"expected_date\" display-format=\"D MMM YYYY HH:mm A\" \r\n\t\t\t\t\t\t\t\tpicker-format=\"D MMM YYYY HH:mm A\"></ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t<ion-col size=\"{{prioritySize}}\">\r\n\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"select-item-list\">\r\n\t\t\t\t\t\t\t\t<label class=\"token_priority_label\"> Priority</label>\r\n\t\t\t\t\t\t\t\t<mat-form-field >\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  <mat-select  formControlName=\"priority\" (selectionChange)=\"hidePrioritySelectLabel($event)\">\r\n\t\t\t\t\t\t\t\t    <mat-option  value=\"\"></mat-option>\r\n\t\t\t\t\t\t\t\t    <mat-option *ngFor=\"let priority of priorities\" value=\"{{priority._id}}\" >{{priority.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-col size=\"12\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ion-item class=\"file-upload-item\" lines=\"none\">\r\n\t\t\t\t\t\t\t\t<!-- <ion-label  class=\"token-desc\" >\tToken Description </ion-label> -->\r\n\t\t\t\t\t\t\t    <ion-row \tclass=\"description-token\">\r\n\t\t\t\t\t\t\t    \t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"adv_textarea token-desc\" formControlName=\"description\"\r\n\t\t\t\t\t\t\t\t\t\t(keyup)=\"token_desc($event)\" placeholder=\"Token Description\"></textarea>\r\n\t\t\t\t\t\t\t    \t\t<!-- <div  class=\"adv_textarea\" formControlName=\"description\"></div> -->\r\n\t\t\t\t\t\t\t    \t</ion-col>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<ion-col size={{micSize}}>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n    \t\t\t\t\t\t\t\t\t\t <ion-icon name=\"mic-outline\" class=\"mic-start\" *ngIf=\"!isRecording && !blobUrl\" (click)=\"startRecording()\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mic-off-outline\"  class=\"mic-start\" *ngIf=\"isRecording && !blobUrl\" (click)=\"stopRecording()\"></ion-icon>\r\n<!-- \t\t\t\t\t\t\t\t\t\t\t<button class=\"start-button\" *ngIf=\"!isRecording && !blobUrl\" (click)=\"startRecording()\">Start Recording</button>\r\n\t\t\t\t\t\t\t\t\t\t\t <button class=\"stop-button\" *ngIf=\"isRecording && !blobUrl\" (click)=\"stopRecording()\">Stop Recording</button> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <button class=\"cancel-button\" *ngIf=\"!isRecording && blobUrl\" (click)=\"clearRecordedData()\">Clear Recording</button> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isRecording && !blobUrl\">{{recordingText}} {{recordedTime}} </div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"aud-hov\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<audio *ngIf=\"!isRecording && blobUrl\"  controls>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<source [src]=\"blobUrl\" type=\"audio/webm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </audio>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"rec-close\" *ngIf=\"!isRecording && blobUrl\" (click)=\"clearRecordedData(audioIndex)\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t    \t\t\r\n\t\t\t\t\t    \t\t\t<ion-col size={{attachSize}} class=\"file-upload-col\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon  class=\"file-upload\" (click)=\"file.click()\" name=\"attach-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t<input style=\"display: none;\" type=\"file\" (change)=\"readURL($event)\" multiple=\"true\" #file>\r\n\t\t\t\t\t\t\t\t\t<!-- <ion-button type=\"button\" >\t\t\t\t\t\t\t\t \t \t -->\r\n\t\t\t\t\t\t\t\t\t<!-- </ion-button> -->\r\n\r\n\t\t\t\t\t\t\t\t \t</ion-col>\r\n\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t      \t<ion-col size=\"1\" *ngFor='let url of images; let i = index' align=\"center\" class=\"file_upload_img\">\r\n\t\t\t\t\t\t\t        <img [src]=\"url.url\" title=\"{{url.name}}\" />\r\n\r\n\t\t\t\t\t\t\t        <span (click)=\"delete(i)\" class=\"file_delete_icon\">\r\n\t\t\t\t\t\t\t          <ion-icon name=\"close-outline\"  title=\"{{url.name}}\"   class=\"delete-file\"></ion-icon>\r\n\t\t\t\t\t\t\t        </span>\r\n\t\t\t\t\t\t\t      </ion-col>\t \r\n\t\t\t\t\t\t\t    </ion-row>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t<span *ngIf=\"description\" style=\"margin-left: 40px; color: red;\">{{description}}</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-col size-lg=\"4\" size-xs=\"12\">\r\n\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"select-item-list\">\r\n\t\t\t\t\t\t\t\t<label class=\"token_branch_label\" *ngIf=\"branchLabel\">Select Branch</label>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<mat-form-field>\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  <mat-select matNativeControl formControlName=\"branch\" (selectionChange)=\"onBranchChange($event.value)\">\r\n\t\t\t\t\t\t\t\t    <mat-option  value=\"\" *ngIf=\"branchNone\">None</mat-option>\r\n\t\t\t\t\t\t\t\t    <mat-option *ngFor=\"let branch of branches\" value=\"{{branch._id}}\" >{{branch.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t<ion-col size-lg=\"4\" size-xs=\"12\">\r\n\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"select-item-list\">\r\n\t\t\t\t\t\t\t\t<label class=\"token_dept_label\" *ngIf=\"deptLabel\">Select Department</label>\r\n\t\t\t\t\t\t\t\t<mat-form-field (click)=\"showMsg()\">\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  <mat-select  formControlName=\"department\" [disabled]=\"disabledept\" (selectionChange)=\"onDepartmentChange($event.value)\">\r\n\t\t\t\t\t\t\t\t    <mat-option *ngIf=\"deptNone\" value=\"\">None</mat-option>\r\n\t\t\t\t\t\t\t\t    <mat-option *ngFor=\"let department of departments\" value=\"{{department._id}}\">{{department.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t<span id=\"deptErr\" style=\"display: none;\">please select branch first !</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t <ion-col size-lg=\"4\" size-sm=\"6\"  size-xs=\"12\" class=\"multi-item-select exiting-token-col\">\r\n\t\t\t\t\t\t  \t<span class=\"add-user add-token\">\r\n\t\t\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"add-outline\" slot=\"start\" (click)=\"showHideSearch()\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<span class=\"multiple-field-name\">Reference Task</span>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"show_token_icon\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let token of selectedExistingtokenList\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{token.heading}}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"selected-existing-item\"  *ngIf=\"!isItemAvailable\" routerLink=\"/admin/tokens/edit-token/{{token._id}}\" style=\"border: solid 0px red;display: block;margin-bottom: 30px;width: 40px;float: left;\">\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"removeExitingToken(token._id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"remove-token\" name=\"close-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"isItemAvailable\" lines=\"none\" class=\"exiting-token\" style=\"margin-left: 60px;\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"searchExistingToken\" (keyup)=\"onSearchToken($event.target.value)\" placeholder=\"search\" ></ion-input>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"isItemAvailable && existingtokenList.length >0\" class=\"existing-token-dropdown\" >\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"nav\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item exist-token-list \"  *ngFor=\"let token of existingtokenList\" (click)=showTokenIcon(token)>{{token.heading}} (<span>{{token.token_no}}</span>)</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </ion-col>\r\n\r\n\r\n\t\t\t\t\t\t  <ion-col size-lg=\"4\" size-sm=\"6\"  size-xs=\"12\" class=\"responsible-col\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<span class=\"add-user1\" style=\" cursor: pointer;\" (click)=\"responsibleDropDow.click()\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"person-add-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<span class=\"multiple-field-name\">Responsible</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<span class=\"dropdown-btn\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let responsible of addTokenForm.value.responsible_person\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{responsible.name}}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"persion-icon\"  (click)=\"resOnIcon(responsible)\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t<ng-multiselect-dropdown \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t[placeholder]=\"'Responsible person'\" \r\n\t\t\t\t\t\t\t\t\t[settings]=\"responsiblePersonsSetting\"\r\n\t\t\t\t\t\t\t\t\t[data]=\"responsibleList\"\r\n\t\t\t\t\t\t\t\t\t[formControl]=\"r.responsible_person\" \r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t  </ion-col>\r\n\r\n\t\t\t\t\t\t   <ion-col size-lg=\"4\" size-sm=\"6\"  size-xs=\"12\"  class=\"multi-item-select supporter-col\">\r\n\t\t\t\t\t\t\t\t<div class=\"token-add-multiple-col\">\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"add-user\">\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"person-add-outline\"  slot=\"start\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"multiple-field-name\">Supporter</span>\r\n\t\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"dropdown-btn\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let support of addTokenForm.value.support_person\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{support.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"persion-icon\" (click)=\"resOnIcon(support)\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown #multiselect\r\n\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Supporter'\" \r\n\t\t\t\t\t\t\t\t\t\t[settings]=\"supporterPersonsSetting\"\r\n\t\t\t\t\t\t\t\t\t\t[data]=\"users\"\r\n\t\t\t\t\t\t\t\t\t\t[formControl]=\"r.support_person\" \r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\r\n    \r\n\t\t\t\t\t\t\t <ion-col size-lg=\"4\" size-sm=\"6\"  size-xs=\"12\"  class=\"multi-item-select reviewer-select-col\">\r\n\t\t\t\t\t\t\t \t\r\n\t\t\t\t\t\t\t \t<div class=\"token-add-multiple-col\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<span class=\"add-user\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon id=\"person-icon\" name=\"person-add-outline\"  slot=\"start\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"multiple-field-name\">Reviewer</span>\r\n\t\t\t\t\t\t\t\t\t  </span>\r\n\r\n\t\t\t\t\t\t\t\t\t  <span class=\"dropdown-btn\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let reviewer of addTokenForm.value.reviewer_person\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"user-loop\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{reviewer.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"persion-icon\"  (click)=\"resOnIcon(reviewer)\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown #multiselect\r\n\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'Reviewer'\" \r\n\t\t\t\t\t\t\t\t\t\t[settings]=\"reviewerPersonsSetting\"\r\n\t\t\t\t\t\t\t\t\t\t[data]=\"users\"\r\n\t\t\t\t\t\t\t\t\t\t[formControl]=\"r.reviewer_person\" \r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</ng-multiselect-dropdown>  \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t<ion-col class=\"mt-4\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ion-button type=\"submit\" [disabled]=\"isSubmit || !addTokenForm.valid\" size=\"large\" expand=\"block\">Submit</ion-button>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</form>\r\n\t\t\t</ion-col>\r\n\t\t\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n");

/***/ }),

/***/ "./src/app/token/add-token/add-token-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/token/add-token/add-token-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddTokenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTokenPageRoutingModule", function() { return AddTokenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_token_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-token.page */ "./src/app/token/add-token/add-token.page.ts");




const routes = [
    {
        path: '',
        component: _add_token_page__WEBPACK_IMPORTED_MODULE_3__["AddTokenPage"]
    }
];
let AddTokenPageRoutingModule = class AddTokenPageRoutingModule {
};
AddTokenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddTokenPageRoutingModule);



/***/ }),

/***/ "./src/app/token/add-token/add-token.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/token/add-token/add-token.module.ts ***!
  \*****************************************************/
/*! exports provided: AddTokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTokenPageModule", function() { return AddTokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_token_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-token-routing.module */ "./src/app/token/add-token/add-token-routing.module.ts");
/* harmony import */ var _add_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-token.page */ "./src/app/token/add-token/add-token.page.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");














let AddTokenPageModule = class AddTokenPageModule {
};
AddTokenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_token_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTokenPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaViewModule"].forRoot(),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(),
        ],
        providers: [],
        declarations: [_add_token_page__WEBPACK_IMPORTED_MODULE_6__["AddTokenPage"]]
    })
], AddTokenPageModule);



/***/ }),

/***/ "./src/app/token/add-token/add-token.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/token/add-token/add-token.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".existing-token-dropdown {\n  position: absolute;\n  top: 45px;\n  z-index: 1;\n  width: 62%;\n  height: auto;\n  max-height: 300px;\n  background: #dcdcdc;\n  margin-left: 16%;\n  padding-top: 13px;\n  padding-left: 10PX;\n  overflow: scroll;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 0 1px 5px #959595;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.existing-token-dropdown::-webkit-scrollbar {\n  display: none;\n}\n.responsible-col {\n  height: 75px;\n}\n.token-desc {\n  height: 70px;\n  border: 0px;\n}\n.mic-start {\n  color: #999999;\n  float: right;\n  font-size: 30px;\n}\n.rec-close {\n  color: #ba1e24;\n  font-size: 20px;\n  position: relative;\n  left: 272px;\n  bottom: 65px;\n}\n.aud-hov:hover .rec-close {\n  display: none;\n}\n.file-upload-item {\n  border-radius: 30px;\n}\n.persion-icon::after {\n  content: url('person-1.png');\n  background: #68bfbb;\n  width: auto;\n  height: auto;\n  position: relative;\n  float: left;\n  padding: 8px 9px 4px;\n  border-radius: 50%;\n  margin-left: 6px;\n  margin-bottom: 10px;\n  border: solid 0px red;\n  z-index: 999999;\n  cursor: pointer;\n}\n@media screen and (max-width: 576px) {\n  .persion-icon::after {\n    content: url('person-1.png');\n    padding: 5px 8px;\n  }\n}\n.persion-icon .file_delete_icon1 ion-icon.delete-file {\n  font-size: 17px;\n  position: absolute;\n  right: -12px;\n  top: -5px;\n  background: #65c1bc;\n  color: white;\n  border-radius: 50%;\n}\n.select-item-dateTime ion-datetime {\n  padding-bottom: 11px !important;\n}\n.dropdown-btn {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 0;\n  font-weight: 400;\n  line-height: 1.52857143;\n  text-align: left;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  border: 0px solid #adadad !important;\n  padding: 5px 40px 0 80px !important;\n  position: relative;\n  top: -3px;\n  overflow-y: scroll;\n  height: 65px;\n  cursor: context-menu;\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.dropdown-btn::-webkit-scrollbar {\n  display: none;\n}\n.add-user1 {\n  /*position: absolute;\n  left: 0px;\n  top: 10px;*/\n  font-size: 28px;\n  background: #68bfbb;\n  color: #fff;\n  border-radius: 50%;\n  padding: 0;\n  display: block;\n  width: 40px;\n  height: 40px;\n  padding-top: 4px;\n  padding-left: 4px;\n  position: absolute;\n  left: 25px;\n}\n@media screen and (max-width: 576px) {\n  .add-user1 {\n    font-size: 22px;\n    background: #68bfbb;\n    color: #fff;\n    border-radius: 50%;\n    padding: 0;\n    display: block;\n    width: 36px;\n    height: 35px;\n    padding-top: 1px;\n    padding-left: 2px;\n    /*  width: 33px;\n        height: 33px;\n        padding-top: 5px;\n        padding-left: 5px;\n        font-size: 22px;\n    */\n  }\n}\n.add-user1 .multiple-field-name {\n  max-width: 172px;\n  z-index: 999;\n  bottom: -23px;\n  left: -10px;\n  color: #9e9e9e;\n  font-size: 13px;\n  position: absolute;\n  width: auto;\n  left: 0;\n}\n@media screen and (max-width: 576px) {\n  .add-user1 .multiple-field-name span {\n    display: block;\n  }\n}\n.add-user1 ion-icon[name=person-add-outline] {\n  font-size: 19px;\n  padding: 6px 6px;\n}\n.exiting-token-col .selected-existing-item {\n  margin-left: 15px;\n  position: relative;\n  width: 25px;\n  border: solid 1px #fff;\n}\n.exiting-token-col .selected-existing-item .remove-token {\n  position: absolute;\n  top: -20px !important;\n  left: 25px !important;\n  background: #7b7b7b;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 15px;\n  width: 13px;\n  height: 13px;\n  padding: 2px;\n}\n.exiting-token-col div {\n  display: inline;\n  float: left;\n  margin-left: 85px;\n  margin-top: 10px;\n  padding: 0;\n  z-index: 9999999999;\n}\n.exiting-token-col div ng-container span {\n  margin-right: 10px;\n  position: relative;\n  display: block;\n}\nul.nav {\n  padding: 0;\n}\nul.nav li.nav-item {\n  padding: 10px 15px;\n  border-bottom: solid 1px #f4f2f2;\n  width: 100%;\n}\nul.nav li.nav-item:hover, ul.nav li.nav-item:active, ul.nav li.nav-item:focus {\n  color: #68bfbb;\n  cursor: pointer;\n}\nselect {\n  border: 0;\n  border-radius: 0px;\n  position: relative;\n  height: 45px;\n  padding-left: 0px;\n  margin-left: -2px;\n  position: absolute;\n  top: 0px;\n  width: 95%;\n  margin: auto;\n  background: none !important;\n}\nselect:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\nselect option {\n  border: solid 1px red !important;\n}\n.select-item-list label {\n  color: #999ca3;\n  margin-top: -12px;\n  position: absolute;\n  z-index: -1;\n}\n@media screen and (max-width: 991px) {\n  .exiting-token-col div.show_token_icon {\n    height: 0px;\n  }\n\n  .responsible-col .dropdown-btn {\n    padding: 5px 40px 0 115px !important;\n  }\n\n  .supporter-col .dropdown-btn {\n    padding: 5px 40px 0 100px !important;\n  }\n\n  .reviewer-select-col .dropdown-btn {\n    padding: 5px 40px 0 95px !important;\n  }\n\n  ion-item.exiting-token {\n    margin-bottom: 0px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .responsible-col {\n    height: 100px;\n    margin-top: 50px;\n    margin-bottom: 0px;\n  }\n\n  .supporter-col {\n    height: 100px;\n    margin-bottom: 0px;\n    margin-top: -10px;\n  }\n\n  .reviewer-select-col {\n    height: 100px;\n    margin-bottom: 0px;\n    margin-top: 0;\n  }\n\n  .responsible-col .dropdown-btn {\n    padding: 5px 40px 0 115px !important;\n  }\n\n  .supporter-col .dropdown-btn {\n    padding: 5px 40px 0 104px !important;\n  }\n\n  .reviewer-select-col .dropdown-btn {\n    padding: 5px 40px 0 105px !important;\n  }\n\n  .admin-right-side .main-grid {\n    padding-left: 0;\n    padding-right: 5px;\n  }\n\n  ion-item.exiting-token {\n    border-radius: 45px;\n    --highlight-background: transparent;\n    box-shadow: 0px 0px 8px #68bfbb;\n    margin: 0 20px 0px;\n    height: 40px;\n    position: absolute;\n    margin-left: 0px !important;\n    width: 70%;\n    left: 21%;\n  }\n  ion-item.exiting-token ion-input {\n    margin-top: -7px;\n  }\n\n  .existing-token-dropdown.search-result {\n    border: solid 1px red !important;\n    display: inline;\n    float: left;\n    margin-left: 79px;\n    margin-top: 1px;\n    padding: 0;\n    z-index: 9999999999;\n  }\n\n  ul.nav {\n    padding: 0px;\n  }\n\n  .exiting-token-col div.show_token_icon {\n    height: 0px;\n    margin-left: 105px !important;\n  }\n\n  .existing-token-dropdown {\n    margin-left: 30px !important;\n    margin-top: 2px !important;\n    height: auto !important;\n  }\n\n  div.token_show_div {\n    height: 0px;\n  }\n\n  .remove-token[_ngcontent-adk-c281] {\n    position: absolute;\n    top: -17px !important;\n    left: 17px !important;\n  }\n\n  .selected-existing-item::after {\n    padding: 8px 10px;\n  }\n\n  .persion-icon::after {\n    padding: 8px 9px 4px;\n  }\n\n  /*.form-edit-token-col .multi-item-select.exiting-token-col{\n      margin-bottom:0px!important;\n  }\n  */\n}\n#deptErr {\n  color: #bb373b;\n  font-size: 15px;\n  position: relative;\n  bottom: 11px;\n  left: 28px;\n}\n.persion-icon.activity-t1 {\n  position: relative;\n}\n.activity-t2 {\n  position: absolute;\n  top: 0px;\n  left: -90px;\n  top: 5px;\n  left: 75px;\n  z-index: 999;\n  width: auto;\n  background: #fff;\n  box-shadow: 0px 0px 2px #464646;\n  padding: 2px 5px;\n}\n.user-loop {\n  position: relative;\n  border: solid 0px red;\n  height: 50px;\n  width: 50px;\n  float: left;\n}\n.user-loop .user-name {\n  z-index: 999;\n  width: auto;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0px 0px 2px #464646;\n  padding: 0px 1px;\n  margin-top: 13px;\n  display: none;\n  font-size: 12px;\n}\n.user-loop:hover .user-name {\n  display: block;\n  position: absolute;\n  top: 10px;\n  width: 85px;\n  z-index: 99999999;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9rZW4vYWRkLXRva2VuL2FkZC10b2tlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxrQkFBQTtFQUNELFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw2QkFBQTtFQU1BLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7RUFHeEIsZ0RBQUE7QUFQSjtBQVFJO0VBQ0ksYUFBQTtBQU5SO0FBV0E7RUFDSSxZQUFBO0FBUko7QUFXQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBUko7QUFXQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVJKO0FBeUJBO0VBQ0ssY0FBQTtFQUNMLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdEJBO0FBMEJJO0VBQ0ksYUFBQTtBQXZCUjtBQTJCQTtFQUNJLG1CQUFBO0FBeEJKO0FBNkJJO0VBRUksNEJBQUE7RUFHQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBL0JSO0FBZ0NRO0VBbkJKO0lBcUJRLDRCQUFBO0lBQ0MsZ0JBQUE7RUE5Qlg7QUFDRjtBQW9DRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFsQ047QUF1Q0E7RUFDSSwrQkFBQTtBQXBDSjtBQXVDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVGLGdEQUFBO0FBdkNGO0FBd0NNO0VBQ0ksYUFBQTtBQXRDVjtBQTRDQTtFQUNJOzthQUFBO0VBR0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUExQ0o7QUE0Q0s7RUFsQkw7SUFvQlMsZUFBQTtJQUNELG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFPQzs7Ozs7S0FBQTtFQTNDUDtBQUNGO0FBb0RJO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFuRFI7QUFxRFE7RUFDSTtJQUNJLGNBQUE7RUFuRGQ7QUFDRjtBQXdESTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQXJEUjtBQTJESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUF4RFI7QUEwRFE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF4RFo7QUEyREk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUF6RFI7QUEyRFk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXpEaEI7QUFnRUE7RUFDSSxVQUFBO0FBN0RKO0FBOERJO0VBRUksa0JBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7QUE5RFI7QUErRFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQTdEWjtBQW9FQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBakVKO0FBbUVJO0VBQ0ksa0RBQUE7QUFqRVI7QUFvRUk7RUFDSSxnQ0FBQTtBQWxFUjtBQTBFSTtFQUNRLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXZFWjtBQTRFQTtFQUNLO0lBQ0csV0FBQTtFQXpFTjs7RUE0RUU7SUFDSSxvQ0FBQTtFQXpFTjs7RUEyRUU7SUFDSSxvQ0FBQTtFQXhFTjs7RUEwRUU7SUFDSSxtQ0FBQTtFQXZFTjs7RUF5RUU7SUFDSSxrQkFBQTtFQXRFTjtBQUNGO0FBMkVBO0VBRUk7SUFDRyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQTFFTDs7RUE0RUU7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQXpFTjs7RUEyRUU7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VBeEVOOztFQWtGRTtJQUNJLG9DQUFBO0VBL0VOOztFQWlGRTtJQUNJLG9DQUFBO0VBOUVOOztFQWdGRTtJQUNJLG9DQUFBO0VBN0VOOztFQWdGRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQTdFTjs7RUFpRkU7SUFDSSxtQkFBQTtJQUNBLG1DQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUE5RU47RUFrRk07SUFDSSxnQkFBQTtFQWhGVjs7RUFvRkU7SUFDSSxnQ0FBQTtJQUNELGVBQUE7SUFDQyxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0VBakZOOztFQXFGRTtJQUNJLFlBQUE7RUFsRk47O0VBb0ZFO0lBQ0ksV0FBQTtJQUNBLDZCQUFBO0VBakZOOztFQXFGRTtJQUVLLDRCQUFBO0lBQ0EsMEJBQUE7SUFDUSx1QkFBQTtFQW5GZjs7RUFzRkU7SUFDSSxXQUFBO0VBbkZOOztFQXFGRTtJQUNJLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQWxGTjs7RUFxRk07SUFFSSxpQkFBQTtFQW5GVjs7RUF3Rk07SUFDSSxvQkFBQTtFQXJGVjs7RUEyRkU7OztHQUFBO0FBckZKO0FBMEZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBeEZKO0FBNEZBO0VBQ0ksa0JBQUE7QUF6Rko7QUE2RkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQTFGSjtBQStGQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUE1Rko7QUE2Rkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQTNGUjtBQTZGSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTNGUiIsImZpbGUiOiJzcmMvYXBwL3Rva2VuL2FkZC10b2tlbi9hZGQtdG9rZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4aXN0aW5nLXRva2VuLWRyb3Bkb3due1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogNjIlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMFBYO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzk1OTU5NTtcclxuICAgXHJcbiAgIFxyXG4gICAgXHJcblxyXG5cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcblxyXG5cclxuICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnJlc3BvbnNpYmxlLWNvbHtcclxuICAgIGhlaWdodDogNzVweDtcclxufVxyXG5cclxuLnRva2VuLWRlc2N7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLm1pYy1zdGFydHtcclxuICAgIGNvbG9yOiM5OTk5OTk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLy8gLy8gcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxNXB4KXsgXHJcbiAgICAvLyAgICAgcGFkZGluZy1yaWdodDogOXB4O1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpeyBcclxuICAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzVweCl7IFxyXG4gICAgLy8gICAgIHBhZGRpbmctcmlnaHQ6MThweDtcclxuICAgIC8vIH1cclxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MnB4KXsgXHJcbiAgICAvLyAgICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLnJlYy1jbG9zZXtcclxuICAgICBjb2xvcjogI2JhMWUyNDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmxlZnQ6IDI3MnB4O1xyXG5ib3R0b206IDY1cHg7XHJcbn1cclxuXHJcbi5hdWQtaG92OmhvdmVye1xyXG4gICAgLnJlYy1jbG9zZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1pdGVte1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnBlcnNpb24taWNvbntcclxuXHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBcclxuICAgICAgICBjb250ZW50OnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGVyc29uLTEucG5nXCIpOyAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNjhiZmJiO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy8gcGFkZGluZzogOXB4O1xyXG4gICAgICAgIHBhZGRpbmc6OHB4IDlweCA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXI6c29saWQgMHB4IHJlZDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCl7IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGVyc29uLTEucG5nXCIpO1xyXG4gICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5maWxlX2RlbGV0ZV9pY29uMXtcclxuXHRcdGlvbi1pY29uLmRlbGV0ZS1maWxle1xyXG5cdFx0ICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgcmlnaHQ6IC0xMnB4O1xyXG5cdFx0ICAgIHRvcDogLTVweDtcclxuXHRcdCAgICBiYWNrZ3JvdW5kOiAjNjVjMWJjO1xyXG5cdFx0ICAgIGNvbG9yOiB3aGl0ZTtcclxuXHRcdCAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdH1cclxufVxyXG4uc2VsZWN0LWl0ZW0tZGF0ZVRpbWUgaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1ib3R0b206IDExcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWJ0bntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweCAwIDgwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBjdXJzb3I6IGNvbnRleHQtbWVudTtcclxuXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLmFkZC11c2VyMXtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAxMHB4OyovXHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjhiZmJiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHRcclxuICAgIGxlZnQ6IDI1cHg7XHJcblxyXG4gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNjhiZmJiO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIC8vIHRvcDogNXB4O1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgIC8qICB3aWR0aDogMzNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm11bHRpcGxlLWZpZWxkLW5hbWV7XHJcbiAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDE3MnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBib3R0b206IC0yM3B4O1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFkZC11c2VyMXtcclxuICAgIGlvbi1pY29uW25hbWU9XCJwZXJzb24tYWRkLW91dGxpbmVcIl17IFx0ICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmV4aXRpbmctdG9rZW4tY29se1xyXG4gICAgLnNlbGVjdGVkLWV4aXN0aW5nLWl0ZW17XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjVweDsgICAgXHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuXHJcbiAgICAgICAgLnJlbW92ZS10b2tlbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4IWltcG9ydGFudCAgICA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI1cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2I3YjdiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xyXG4gICAgICAgIG5nLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG51bC5uYXZ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBsaS5uYXYtaXRlbVxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Y0ZjJmMjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpob3ZlciwmOmFjdGl2ZSwmOmZvY3Vze1xyXG4gICAgICAgICAgICBjb2xvcjojNjhiZmJiOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDo5NSU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJhY2tncm91bmQ6IG5vbmUhaW1wb3J0YW50O1xyXG5cclxuICAgICY6Zm9jdXN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYigyNTUgMjU1IDI1NSAvIDI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ue1xyXG4gICAgICAgIGJvcmRlcjpzb2xpZCAxcHggcmVkIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnNlbGVjdC1pdGVtLWxpc3R7XHJcbiAgICBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTljYTM7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgLmV4aXRpbmctdG9rZW4tY29sIGRpdi5zaG93X3Rva2VuX2ljb257XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDEwNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZXNwb25zaWJsZS1jb2wgLmRyb3Bkb3duLWJ0bntcclxuICAgICAgICBwYWRkaW5nOjVweCA0MHB4IDAgMTE1cHggIWltcG9ydGFudDsgICAgXHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydGVyLWNvbCAuZHJvcGRvd24tYnRue1xyXG4gICAgICAgIHBhZGRpbmc6NXB4IDQwcHggMCAxMDBweCFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgfVxyXG4gICAgLnJldmlld2VyLXNlbGVjdC1jb2wgLmRyb3Bkb3duLWJ0bntcclxuICAgICAgICBwYWRkaW5nOjVweCA0MHB4IDAgOTVweCAhaW1wb3J0YW50OyAgICBcclxuICAgIH1cclxuICAgIGlvbi1pdGVtLmV4aXRpbmctdG9rZW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XHJcblxyXG4gICAgLnJlc3BvbnNpYmxlLWNvbHtcclxuICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMHB4OyAgICBcclxuICAgIH1cclxuICAgIC5zdXBwb3J0ZXItY29se1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnJldmlld2VyLXNlbGVjdC1jb2x7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAuZXhpdGluZy10b2tlbi1jb2wge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6NXB4IDQwcHggMCAxMDJweCAhaW1wb3J0YW50OyBcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMTAwcHg7ICAgXHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2libGUtY29sIC5kcm9wZG93bi1idG57XHJcbiAgICAgICAgcGFkZGluZzo1cHggNDBweCAwIDExNXB4ICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgfVxyXG4gICAgLnN1cHBvcnRlci1jb2wgLmRyb3Bkb3duLWJ0bntcclxuICAgICAgICBwYWRkaW5nOjVweCA0MHB4IDAgMTA0cHghaW1wb3J0YW50OyAgICBcclxuICAgIH1cclxuICAgIC5yZXZpZXdlci1zZWxlY3QtY29sIC5kcm9wZG93bi1idG57XHJcbiAgICAgICAgcGFkZGluZzo1cHggNDBweCAwIDEwNXB4ICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5hZG1pbi1yaWdodC1zaWRlIC5tYWluLWdyaWQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlvbi1pdGVtLmV4aXRpbmctdG9rZW57XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjNjhiZmJiO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBsZWZ0OiAyMSU7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuZXhpc3RpbmctdG9rZW4tZHJvcGRvd24uc2VhcmNoLXJlc3VsdHtcclxuICAgICAgICBib3JkZXI6c29saWQgMXB4IHJlZCFpbXBvcnRhbnQ7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc5cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdWwubmF2e1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4aXRpbmctdG9rZW4tY29sIGRpdi5zaG93X3Rva2VuX2ljb257XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmV4aXN0aW5nLXRva2VuLWRyb3Bkb3duIHsgICAgICAgIFxyXG4gICAgICAgIC8vIGJvcmRlcjpzb2xpZCAxcHggcmVkIWltcG9ydGFudDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiAycHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnRva2VuX3Nob3dfZGl2e1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlbW92ZS10b2tlbltfbmdjb250ZW50LWFkay1jMjgxXSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTE3cHggIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0ZWQtZXhpc3RpbmctaXRlbXtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wZXJzaW9uLWljb257XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA5cHggNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLyouZm9ybS1lZGl0LXRva2VuLWNvbCAubXVsdGktaXRlbS1zZWxlY3QuZXhpdGluZy10b2tlbi1jb2x7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgKi9cclxufVxyXG4jZGVwdEVycntcclxuICAgIGNvbG9yOiAjYmIzNzNiO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAxMXB4O1xyXG4gICAgbGVmdDogMjhweDtcclxufVxyXG5cclxuXHJcbi5wZXJzaW9uLWljb24uYWN0aXZpdHktdDF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uYWN0aXZpdHktdDJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IC05MHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA3NXB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggIzQ2NDY0NjtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbn1cclxuXHJcbi8vIDE3LTA1LTIwMjFcclxuXHJcbi51c2VyLWxvb3B7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDBweCByZWQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLnVzZXItbmFtZXtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggIzQ2NDY0NjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIC51c2VyLW5hbWV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/token/add-token/add-token.page.ts":
/*!***************************************************!*\
  !*** ./src/app/token/add-token/add-token.page.ts ***!
  \***************************************************/
/*! exports provided: AddTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTokenPage", function() { return AddTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main-services.service */ "./src/app/services/main-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_record_audio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/record-audio.service */ "./src/app/services/record-audio.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");

// import { Component, OnInit } from '@angular/core';










let AddTokenPage = class AddTokenPage {
    constructor(toastr, sanitizer, audioRecordingService, router, fb, activatedRoute, mainService, location, loader) {
        // constructor(private toastr: ToastrService,
        //    private router: Router,private fb:FormBuilder,
        //    private mainService: MainServicesService,
        //     private location: Location) { 
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.audioRecordingService = audioRecordingService;
        this.router = router;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.location = location;
        this.loader = loader;
        this.pickerOptions = {
            buttons: [{
                    text: "Clear",
                    handler: () => this.addTokenForm.controls['expected_date'].setValue('')
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
                        console.log(this.DateTimevalue);
                        this.addTokenForm.controls['expected_date'].setValue(this.DateTimevalue);
                    }
                }]
        };
        this.isRecording = false;
        this.show_textarea = false;
        this.images = new Array();
        this.imagesURL = new Array();
        this.tokenTypes = [];
        this.branches = [];
        this.departments_list = [];
        this.departments = [];
        this.users = [];
        this.usersList = [];
        this.responsibleList = [];
        this.priorities = [];
        this.isItemAvailable = false;
        this.userDropdownShow = true;
        this.isSubmit = true;
        this.recordingText = "Recording...";
        this.audioIndex = 0;
        this.filesToUpload = [];
        this.existingtokenSetting = {};
        this.supporterPersonsSetting = {};
        this.reviewerPersonsSetting = {};
        this.responsiblePersonsSetting = {};
        this.existingtokenList = [];
        this.selectedExistingtokenList = [];
        this.ExpectedDateShow = false;
        this.incidentId = '';
        this.is_private = 'false';
        this.public_private = "Public";
        this.disabledept = true;
        this.deptNone = false;
        this.branchNone = false;
        this.branchLabel = true;
        this.deptLabel = true;
        this.micSize = 11;
        this.attachSize = 1;
        this.addTokenForm = this.fb.group({
            heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            token_type: ['',],
            priority: ['',],
            branch: ['',],
            department: ['',],
            existing_token: ['',],
            responsible_person: ['',],
            support_person: ['',],
            reviewer_person: ['',],
            expected_date: ['',],
            searchExistingToken: ['']
        });
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
            this.checkExtension = this.filename.split('.').pop();
            var file = new File([data.blob], this.filename, { type: 'audio/wav', lastModified: Date.now() });
            this.filesToUpload.push(file);
            this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
            console.log(data.blob);
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
            this.isSubmit = false;
            this.audioRecordingService.stopRecording();
            this.isRecording = false;
            this.showmic = true;
        }
    }
    ngOnDestroy() {
        this.abortRecording();
    }
    token_desc(e) {
        let get_desc = this.addTokenForm.get('description').value;
        get_desc = e.target.value;
        console.log(get_desc);
        if (get_desc != '') {
            this.isSubmit = false;
        }
        else {
            this.isSubmit = true;
        }
    }
    toggleChange() {
        if (this.is_private) {
            this.public_private = "Private";
        }
        else {
            this.public_private = "Public";
        }
    }
    hidePrioritySelectLabel(e) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_priority_label').hide();
        if (e.value == '') {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_priority_label').show();
        }
    }
    get r() { return this.addTokenForm.controls; }
    ngOnInit() {
        if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() < 449) {
            this.micSize = 10;
            this.attachSize = 2;
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() < 992) {
            this.typeSize = 12;
        }
        this.mainService.getDataForCreateToken().subscribe((result) => {
            if (result['success']) {
                this.tokenTypes = result['tokenTypes'];
                this.branches = result['branches'];
                this.departments = result['departments'];
                this.departments_list = result['departments'];
                this.users = result['users'];
                this.usersList = result['users'];
                this.responsibleList = this.users;
            }
            this.dropdownSetting();
        });
        this.mainService.getPriority().subscribe((result) => {
            if (result['success']) {
                this.priorities = result['priorities'];
            }
        });
    }
    hideTypeSelectLabel(e) {
        this.tokenTypes.forEach(tokenType => {
            if (tokenType.name == 'Incident') {
                this.incidentId = tokenType._id;
            }
        });
        if (e.value != this.incidentId || '') {
            if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                this.typeSize = 3;
                this.prioritySize = 3;
                this.headSize = 3;
            }
            else {
                this.typeSize = 12;
                this.prioritySize = 12;
                this.headSize = 12;
            }
            this.ExpectedDateShow = true;
        }
        else {
            if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                this.typeSize = 4;
                this.prioritySize = 4;
                this.headSize = 4;
            }
            else {
                this.typeSize = 12;
                this.prioritySize = 12;
                this.headSize = 12;
            }
            this.ExpectedDateShow = false;
        }
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_type_label').hide();
        if (e.value == '') {
            if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).width() > 992) {
                this.typeSize = 4;
            }
            else {
                this.typeSize = 12;
            }
            this.ExpectedDateShow = false;
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_type_label').show();
        }
    }
    readURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            var selectedFile = event.target.files[i];
            this.filesToUpload.push(selectedFile);
            console.log(this.filesToUpload);
            var fileName = selectedFile.name;
            var extension = fileName.split('.').pop();
            let img = { url: '', name: fileName };
            var reader = new FileReader();
            console.log(reader);
            switch (extension) {
                case 'jpg':
                case 'png':
                case 'jpeg':
                case 'gif':
                case 'webp':
                    reader.onload = (e) => {
                        img.url = e.target.result;
                    };
                    break;
                case 'docx':
                    img.url = '../../assets/files-extension-imgs/doc-file.png';
                    break;
                case 'xlsx':
                    img.url = '../../assets/files-extension-imgs/excel-file.png';
                    break;
                case 'pdf':
                    img.url = '../../assets/files-extension-imgs/pdf-file.png';
                    break;
                case 'ppt':
                    img.url = '../../assets/files-extension-imgs/ppt-file.jpg';
                    break;
                case 'zip':
                case 'zipx':
                    img.url = '../../assets/files-extension-imgs/zip-file.png';
                    break;
                default:
                    img.url = '../../assets/files-extension-imgs/other-file.jpg';
            }
            this.images.push(img);
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    clearRecordedData(audioIndex) {
        this.isSubmit = true;
        this.checkExtension = '';
        this.blobUrl = null;
        this.filesToUpload = Array.from(this.filesToUpload).filter(item => {
            return item != this.filesToUpload[audioIndex];
        });
    }
    delete(index) {
        console.log(index);
        console.log(this.images);
        this.images.splice(index, 1);
        this.filesToUpload = Array.from(this.filesToUpload).filter(item => {
            return item != this.filesToUpload[index];
        });
    }
    resOnIcon(val) {
    }
    addToken(value) {
        this.isSubmit = true;
        console.log(this.checkExtension);
        if (!value.description && this.checkExtension == 'mp3') {
            value.description = 'Description is in the audio!';
        }
        if (!value.heading || !value.description) {
            if (!value.heading)
                this.heading = 'Heading is required';
            else
                this.heading = '';
            if (!value.description)
                this.description = 'Description is required';
            else
                this.description = '';
            return 0;
        }
        let formData = this.convertToFormData(value);
        this.mainService.postDataForCreateToken(formData).subscribe((result) => {
            this.isSubmit = false;
            if (result['success']) {
                console.log(result);
                this.toastr.success(result['message']);
                this.addTokenForm.reset();
                this.location.back();
                this.mainService.tokenFilter('click');
            }
        }, (error) => {
            this.isSubmit = false;
            console.log(error);
            this.heading = error['error']['error']['heading'];
            this.description = error['error']['error']['description'];
        });
    }
    convertToFormData(value) {
        const formData = new FormData();
        if (value.responsible_person.length) {
            for (let responsible of value.responsible_person) {
                formData.append('responsible_person', responsible._id);
            }
        }
        if (value.support_person.length) {
            for (let supporter of value.support_person) {
                formData.append('support_person', supporter._id);
            }
        }
        if (value.reviewer_person.length) {
            for (let reviewer of value.reviewer_person) {
                formData.append('reviewer_person', reviewer._id);
            }
        }
        if (this.selectedExistingtokenList.length) {
            for (let exiting of this.selectedExistingtokenList) {
                formData.append('existing_token', exiting._id);
            }
        }
        formData.append('is_private', this.is_private);
        formData.append('heading', value.heading);
        formData.append('description', value.description);
        value.token_type != "" ? formData.append('token_type', value.token_type) : '';
        value.priority != "" ? formData.append('priority', value.priority) : '';
        value.branch != "" ? formData.append('branch', value.branch) : "";
        value.department != "" ? formData.append('department', value.department) : '';
        value.expected_date != "" ? formData.append('expected_date', value.expected_date) : '';
        for (let img of this.filesToUpload) {
            formData.append('image', img);
        }
        if (this.audioData) {
            formData.append('image', this.audioData);
        }
        return formData;
    }
    showHideSearch() {
        this.isItemAvailable = !this.isItemAvailable;
        if (this.isItemAvailable) {
        }
    }
    onSearchToken(value) {
        if (value.length > 3) {
            this.mainService.getExistingToken(value).subscribe((result) => {
                if (result['success']) {
                    this.existingtokenList = result['tokens'];
                }
            });
        }
        else {
            this.existingtokenList = this.existingtokenList.filter(token => {
                return token.heading.includes(value);
            });
        }
    }
    showTokenIcon(token) {
        this.isItemAvailable = !this.isItemAvailable;
        const index = this.selectedExistingtokenList.findIndex((item) => item._id === token._id);
        if (index === -1) {
            this.selectedExistingtokenList.push(token);
        }
        else {
        }
        this.existingtokenList = this.existingtokenList.filter(item => {
            return item.token_no != token.token_no;
        });
    }
    removeExitingToken(tokenId) {
        this.selectedExistingtokenList = this.selectedExistingtokenList.filter(item => {
            return item._id != tokenId;
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
            itemsShowLimit: this.users.length,
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
    existingDropdownSetting() {
        this.existingtokenSetting = {
            singleSelection: false,
            idField: '_id',
            textField: 'heading',
            defaultOpen: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: this.existingtokenList.length,
            allowSearchFilter: true,
            searchPlaceholderText: 'Search',
        };
    }
    onBranchChange(branchId) {
        this.branchNone = true;
        this.branchLabel = false;
        this.disabledept = false;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#deptErr").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_branch_label').hide();
        if (branchId == '') {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_branch_label').show();
            this.disabledept = true;
        }
        this.departments = this.departments_list.filter((department) => {
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
            });
        }
        this.addTokenForm.get('responsible_person').setValue([]);
    }
    showMsg() {
        if (this.disabledept == true) {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()("#deptErr").fadeIn();
        }
    }
    onDepartmentChange(departmentId) {
        //  this.disabledept==false;
        this.deptNone = true;
        this.deptLabel = false;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#deptErr").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_dept_label').hide();
        // if (departmentId == '') {
        //   $('.select-item-list label.token_dept_label').show();
        //   this.disabledept == true;
        // }
        if (departmentId == '') {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.select-item-list label.token_dept_label').show();
            this.disabledept == true;
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
        this.addTokenForm.get('responsible_person').setValue([]);
    }
    a(data) {
        return data.filter((value, index) => data.indexOf(value) == index);
    }
    ionViewWillEnter() {
        // this.removeElement1(this.person);
        this.href = this.router.url;
    }
    f() {
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'present'];
        const result = words.filter((word, i) => {
            //word.length > 6
        });
    }
    show_editor() {
        this.show_textarea = !this.show_textarea;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.file-upload-item').addClass('add-file-upload-item');
        });
    }
    submit1() {
    }
};
AddTokenPage.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _services_record_audio_service__WEBPACK_IMPORTED_MODULE_9__["RecordAudioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] }
];
AddTokenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-token',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-token.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/token/add-token/add-token.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-token.page.scss */ "./src/app/token/add-token/add-token.page.scss")).default]
    })
], AddTokenPage);



/***/ })

}]);
//# sourceMappingURL=token-add-token-add-token-module-es2015.js.map