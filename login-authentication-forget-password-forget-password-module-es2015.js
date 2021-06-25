(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-authentication-forget-password-forget-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-authentication/forget-password/forget-password.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-authentication/forget-password/forget-password.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgot-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\t<form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"forgotPass(forgotPasswordForm.value)\">\r\n\t\t<ion-item>\r\n\t\t  <ion-label position=\"stacked\">Enter Your Email</ion-label>\r\n\t\t  <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n\t\t</ion-item>\t\t\r\n\r\n\t\t<ion-item>\r\n\t\t\t<!-- <ion-button type=\"submit\" [disabled]=\"!forgetPassForm.valid\">Submit</ion-button> -->\r\n\r\n\t\t\t<ion-button type=\"submit\" color=\"primary\" [disabled]=\"!forgotPasswordForm.valid\">Submit</ion-button>\r\n\r\n\r\n\t\t</ion-item>\r\n\t</form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login-authentication/forget-password/forget-password-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/login-authentication/forget-password/forget-password-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ForgetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function() { return ForgetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password.page */ "./src/app/login-authentication/forget-password/forget-password.page.ts");




const routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }
];
let ForgetPasswordPageRoutingModule = class ForgetPasswordPageRoutingModule {
};
ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/login-authentication/forget-password/forget-password.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/login-authentication/forget-password/forget-password.module.ts ***!
  \********************************************************************************/
/*! exports provided: ForgetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password-routing.module */ "./src/app/login-authentication/forget-password/forget-password-routing.module.ts");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password.page */ "./src/app/login-authentication/forget-password/forget-password.page.ts");







let ForgetPasswordPageModule = class ForgetPasswordPageModule {
};
ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
    })
], ForgetPasswordPageModule);



/***/ }),

/***/ "./src/app/login-authentication/forget-password/forget-password.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/login-authentication/forget-password/forget-password.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWF1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login-authentication/forget-password/forget-password.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/login-authentication/forget-password/forget-password.page.ts ***!
  \******************************************************************************/
/*! exports provided: ForgetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function() { return ForgetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let ForgetPasswordPage = class ForgetPasswordPage {
    constructor(fb) {
        this.fb = fb;
        this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
            // email:['',[Validators.required, Validators.email]]
        });
    }
    ngOnInit() {
    }
    forgotPass(value) {
        if (value.email === '') {
            alert('please insert email id');
        }
    }
};
ForgetPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forget-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-authentication/forget-password/forget-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forget-password.page.scss */ "./src/app/login-authentication/forget-password/forget-password.page.scss")).default]
    })
], ForgetPasswordPage);



/***/ })

}]);
//# sourceMappingURL=login-authentication-forget-password-forget-password-module-es2015.js.map