(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-authentication-new-password-new-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-authentication/new-password/new-password.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-authentication/new-password/new-password.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>new-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPass(resetPasswordForm.value)\">\r\n\t\t<ion-item>\r\n\t\t\t<ion-label position=\"stacked\">\tNew Password</ion-label>\r\n\t\t\t<ion-input type=\"Password\" formControlName=\"newPassword\" required></ion-input>\t\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label position=\"stacked\">\tConfirm Password</ion-label>\r\n\t\t\t<ion-input type=\"Password\" formControlName=\"confirmPassword\" required></ion-input>\t\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t\r\n\t\t\t<ion-button type=\"submit\" color=\"primary\" [disabled]=\"!resetPasswordForm.valid\">Login</ion-button>\r\n\t\t</ion-item>\r\n\t\t\r\n\t</form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login-authentication/new-password/new-password-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/login-authentication/new-password/new-password-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NewPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPageRoutingModule", function() { return NewPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-password.page */ "./src/app/login-authentication/new-password/new-password.page.ts");




const routes = [
    {
        path: '',
        component: _new_password_page__WEBPACK_IMPORTED_MODULE_3__["NewPasswordPage"]
    }
];
let NewPasswordPageRoutingModule = class NewPasswordPageRoutingModule {
};
NewPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/login-authentication/new-password/new-password.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/login-authentication/new-password/new-password.module.ts ***!
  \**************************************************************************/
/*! exports provided: NewPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPageModule", function() { return NewPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-password-routing.module */ "./src/app/login-authentication/new-password/new-password-routing.module.ts");
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-password.page */ "./src/app/login-authentication/new-password/new-password.page.ts");







let NewPasswordPageModule = class NewPasswordPageModule {
};
NewPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_new_password_page__WEBPACK_IMPORTED_MODULE_6__["NewPasswordPage"]]
    })
], NewPasswordPageModule);



/***/ }),

/***/ "./src/app/login-authentication/new-password/new-password.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/login-authentication/new-password/new-password.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWF1dGhlbnRpY2F0aW9uL25ldy1wYXNzd29yZC9uZXctcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login-authentication/new-password/new-password.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/login-authentication/new-password/new-password.page.ts ***!
  \************************************************************************/
/*! exports provided: NewPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPage", function() { return NewPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let NewPasswordPage = class NewPasswordPage {
    constructor(fb, route) {
        this.fb = fb;
        this.route = route;
        this.id = this.route.snapshot.params['id'];
        this.resetPasswordForm = this.fb.group({
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    resetPass(value) {
    }
};
NewPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NewPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-authentication/new-password/new-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-password.page.scss */ "./src/app/login-authentication/new-password/new-password.page.scss")).default]
    })
], NewPasswordPage);



/***/ })

}]);
//# sourceMappingURL=login-authentication-new-password-new-password-module-es2015.js.map