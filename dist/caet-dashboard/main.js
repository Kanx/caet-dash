(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/analytics/analytics.component.css":
/*!***************************************************!*\
  !*** ./src/app/analytics/analytics.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resp-container {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n}\n\n.resp-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n"

/***/ }),

/***/ "./src/app/analytics/analytics.component.html":
/*!****************************************************!*\
  !*** ./src/app/analytics/analytics.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resp-container\">\n  <iframe class=\"resp-iframe\" src=\"https://datastudio.google.com/embed/reporting/1Q4UaXepC4As6dUFPskOFxLie7gLF6zhM/page/4YbN\" gesture=\"media\"  allow=\"encrypted-media\" allowfullscreen></iframe>\n</div>\n\n"

/***/ }),

/***/ "./src/app/analytics/analytics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/analytics/analytics.component.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
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

var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.css */ "./src/app/analytics/analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav class=\"grid\"></app-nav>\n<div id=\"content-view\">\n  <router-outlet></router-outlet>\n</div>\n<app-doomsayer></app-doomsayer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/sharepoint.service */ "./src/app/shared/services/sharepoint.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(sp, us) {
        this.sp = sp;
        this.us = us;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__["SharepointService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wiki/wiki.component */ "./src/app/wiki/wiki.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/sharepoint.service */ "./src/app/shared/services/sharepoint.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/index.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wiki_wiki_nav_wiki_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wiki/wiki-nav/wiki-nav.component */ "./src/app/wiki/wiki-nav/wiki-nav.component.ts");
/* harmony import */ var _wiki_wiki_content_wiki_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wiki/wiki-content/wiki-content.component */ "./src/app/wiki/wiki-content/wiki-content.component.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _utm_utm_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utm/utm.service */ "./src/app/utm/utm.service.ts");
/* harmony import */ var _utm_utm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utm/utm.component */ "./src/app/utm/utm.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/dist/index.js");
/* harmony import */ var _utm_utm_control_form_utm_control_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utm/utm-control-form/utm-control-form.component */ "./src/app/utm/utm-control-form/utm-control-form.component.ts");
/* harmony import */ var _shared_doomsayer_doomsayer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/doomsayer/doomsayer.component */ "./src/app/shared/doomsayer/doomsayer.component.ts");
/* harmony import */ var _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/doomsayer/doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
/* harmony import */ var _wiki_wiki_editor_wiki_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wiki/wiki-editor/wiki-editor.component */ "./src/app/wiki/wiki-editor/wiki-editor.component.ts");
/* harmony import */ var _wiki_wiki_create_wiki_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wiki/wiki-create/wiki-create.component */ "./src/app/wiki/wiki-create/wiki-create.component.ts");
/* harmony import */ var _wiki_wiki_nav_wiki_nav_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./wiki/wiki-nav/wiki-nav-filter.pipe */ "./src/app/wiki/wiki-nav/wiki-nav-filter.pipe.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/dialog-modal/dialog-modal.component */ "./src/app/shared/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var _wiki_wiki_topics_wiki_topics_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./wiki/wiki-topics/wiki-topics.component */ "./src/app/wiki/wiki-topics/wiki-topics.component.ts");
/* harmony import */ var _wiki_topic_id_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./wiki/topic-id.pipe */ "./src/app/wiki/topic-id.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sort.pipe */ "./src/app/sort.pipe.ts");
/* harmony import */ var _whats_on_whats_on_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./whats-on/whats-on.component */ "./src/app/whats-on/whats-on.component.ts");
/* harmony import */ var _shared_horizontal_sub_nav_horizontal_sub_nav_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/horizontal-sub-nav/horizontal-sub-nav.component */ "./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.ts");
/* harmony import */ var _utm_utm_generator_utm_generator_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utm/utm-generator/utm-generator.component */ "./src/app/utm/utm-generator/utm-generator.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/analytics/analytics.component.ts");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/esm5/ngx-mat-select-search.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var appRoutes = [
    { path: 'wiki', component: _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_3__["WikiComponent"],
        children: [
            { path: 'post/:id/edit', component: _wiki_wiki_editor_wiki_editor_component__WEBPACK_IMPORTED_MODULE_21__["WikiEditorComponent"] },
            { path: 'post/:id', component: _wiki_wiki_content_wiki_content_component__WEBPACK_IMPORTED_MODULE_12__["WikiContentComponent"] },
            { path: 'create', component: _wiki_wiki_create_wiki_create_component__WEBPACK_IMPORTED_MODULE_22__["WikiCreateComponent"] },
            { path: 'topics', component: _wiki_wiki_topics_wiki_topics_component__WEBPACK_IMPORTED_MODULE_26__["WikiTopicsComponent"] },
        ]
    },
    { path: 'utm', component: _utm_utm_component__WEBPACK_IMPORTED_MODULE_16__["UtmComponent"],
        children: [
            { path: '', component: _utm_utm_generator_utm_generator_component__WEBPACK_IMPORTED_MODULE_33__["UtmGeneratorComponent"] },
            { path: 'campaigns', component: _utm_utm_control_form_utm_control_form_component__WEBPACK_IMPORTED_MODULE_18__["UtmControlFormComponent"] },
            { path: 'content', component: _utm_utm_control_form_utm_control_form_component__WEBPACK_IMPORTED_MODULE_18__["UtmControlFormComponent"] },
            { path: 'mediums', component: _utm_utm_control_form_utm_control_form_component__WEBPACK_IMPORTED_MODULE_18__["UtmControlFormComponent"] },
            { path: 'sources', component: _utm_utm_control_form_utm_control_form_component__WEBPACK_IMPORTED_MODULE_18__["UtmControlFormComponent"] }
        ]
    },
    { path: 'analytics', component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_34__["AnalyticsComponent"] },
    { path: '**', redirectTo: '/' }
];
var MatModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_3__["WikiComponent"],
                _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _wiki_wiki_nav_wiki_nav_component__WEBPACK_IMPORTED_MODULE_11__["WikiNavComponent"],
                _wiki_wiki_content_wiki_content_component__WEBPACK_IMPORTED_MODULE_12__["WikiContentComponent"],
                _utm_utm_component__WEBPACK_IMPORTED_MODULE_16__["UtmComponent"],
                _utm_utm_control_form_utm_control_form_component__WEBPACK_IMPORTED_MODULE_18__["UtmControlFormComponent"],
                _shared_doomsayer_doomsayer_component__WEBPACK_IMPORTED_MODULE_19__["DoomsayerComponent"],
                _wiki_wiki_editor_wiki_editor_component__WEBPACK_IMPORTED_MODULE_21__["WikiEditorComponent"],
                _wiki_wiki_create_wiki_create_component__WEBPACK_IMPORTED_MODULE_22__["WikiCreateComponent"],
                _wiki_wiki_nav_wiki_nav_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["WikiNavFilterPipe"],
                _wiki_wiki_nav_wiki_nav_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["WikiNavDeepFilterPipe"],
                _shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_25__["DialogModalComponent"],
                _wiki_wiki_topics_wiki_topics_component__WEBPACK_IMPORTED_MODULE_26__["WikiTopicsComponent"],
                _wiki_topic_id_pipe__WEBPACK_IMPORTED_MODULE_27__["TopicIdPipe"],
                _sort_pipe__WEBPACK_IMPORTED_MODULE_30__["SortPipe"],
                _whats_on_whats_on_component__WEBPACK_IMPORTED_MODULE_31__["WhatsOnComponent"],
                _shared_horizontal_sub_nav_horizontal_sub_nav_component__WEBPACK_IMPORTED_MODULE_32__["HorizontalSubNavComponent"],
                _utm_utm_generator_utm_generator_component__WEBPACK_IMPORTED_MODULE_33__["UtmGeneratorComponent"],
                _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_34__["AnalyticsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"]
            ].concat(MatModules, [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__["ClipboardModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__["Ng2Webstorage"],
                ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_24__["BootstrapModalModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_35__["NgxMatSelectSearchModule"]
            ]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_5__["SharepointService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _utm_utm_service__WEBPACK_IMPORTED_MODULE_15__["UtmService"], _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_20__["DoomsayerService"], _sort_pipe__WEBPACK_IMPORTED_MODULE_30__["SortPipe"], _wiki_topic_id_pipe__WEBPACK_IMPORTED_MODULE_27__["TopicIdPipe"], _wiki_wiki_nav_wiki_nav_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["WikiNavFilterPipe"], _wiki_wiki_nav_wiki_nav_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["WikiNavDeepFilterPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_25__["DialogModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/dialog-modal/dialog-modal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/dialog-modal/dialog-modal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  {{theme}}\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header {{theme}}\">\n        <span class=\"modal-title\">{{title || 'Confirm'}}</span>\n        <span class=\"action\">\n          <button type=\"button\" class=\"close\" (click)=\"close()\" ><i class=\"fa fa-times\"></i></button>\n        </span>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message || 'Are you sure?'}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn action-btn\" (click)=\"confirm()\">OK</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/dialog-modal/dialog-modal.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/dialog-modal/dialog-modal.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dialog-modal/dialog-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/dialog-modal/dialog-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModalComponent", function() { return DialogModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogModalComponent = /** @class */ (function (_super) {
    __extends(DialogModalComponent, _super);
    function DialogModalComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    DialogModalComponent.prototype.confirm = function () {
        this.result = true;
        this.close();
    };
    DialogModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-modal',
            template: __webpack_require__(/*! ./dialog-modal.component.html */ "./src/app/shared/dialog-modal/dialog-modal.component.html"),
            styles: [__webpack_require__(/*! ./dialog-modal.component.scss */ "./src/app/shared/dialog-modal/dialog-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
    ], DialogModalComponent);
    return DialogModalComponent;
}(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/doomsayer/doomsayer-message.class.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/doomsayer/doomsayer-message.class.ts ***!
  \*************************************************************/
/*! exports provided: DoomsayerMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoomsayerMessage", function() { return DoomsayerMessage; });
var DoomsayerMessage = /** @class */ (function () {
    function DoomsayerMessage(_a) {
        var theme = _a.theme, message = _a.message;
        this.archived = false;
        this.isActive = false;
        this.theme = theme;
        this.message = message;
        this.animate();
    }
    DoomsayerMessage.prototype.animate = function () {
        var _this = this;
        setTimeout(function () {
            _this.isActive = true;
        }, 0);
        setTimeout(function () {
            _this.isActive = false;
        }, 3200);
        setTimeout(function () {
            _this.archived = true;
        }, 3300);
    };
    return DoomsayerMessage;
}());



/***/ }),

/***/ "./src/app/shared/doomsayer/doomsayer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/doomsayer/doomsayer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"doomsayer\">\n  <div *ngFor=\"let message of messageQueue\" class=\"message {{message.theme}}\" [ngClass]=\"{ 'active': message.isActive, 'archived': message.archived }\">\n    <div class=\"text\">\n      <p>{{message.message}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/doomsayer/doomsayer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/doomsayer/doomsayer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n#doomsayer {\n  z-index: 10;\n  position: fixed;\n  display: block;\n  width: 300px;\n  right: -780px;\n  top: 20px;\n  color: white;\n  font-weight: 100;\n  font-size: 0.8rem; }\n#doomsayer .message {\n    transition: all 0.3s ease, margin-left 0.7s cubic-bezier(0.175, 0.885, 0.1, 1.1);\n    width: 300px;\n    border-radius: 3px;\n    box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);\n    padding: 20px 25px;\n    background: #b9aad8;\n    margin: 15px 0;\n    margin-left: 180px; }\n#doomsayer .message.archived {\n      height: 1px;\n      overflow: hidden;\n      padding: 0;\n      margin: -1px;\n      clip: rect(0, 0, 0, 0);\n      border: 0; }\n#doomsayer .message.active {\n      margin-left: -800px; }\n#doomsayer .message.info {\n      background: #b9aad8; }\n#doomsayer .message.success {\n      background: #82A934; }\n#doomsayer .message.danger {\n      background: #EB2136; }\n#doomsayer p {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/shared/doomsayer/doomsayer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/doomsayer/doomsayer.component.ts ***!
  \*********************************************************/
/*! exports provided: DoomsayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoomsayerComponent", function() { return DoomsayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _doomsayer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
/* harmony import */ var _doomsayer_message_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doomsayer-message.class */ "./src/app/shared/doomsayer/doomsayer-message.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoomsayerComponent = /** @class */ (function () {
    function DoomsayerComponent(doomService) {
        this.doomService = doomService;
        this.messageQueue = [];
    }
    DoomsayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doomService.doomsayer$.subscribe(function (data) {
            _this.messageQueue.push(new _doomsayer_message_class__WEBPACK_IMPORTED_MODULE_2__["DoomsayerMessage"]({ theme: data.theme, message: data.message }));
        });
    };
    DoomsayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doomsayer',
            template: __webpack_require__(/*! ./doomsayer.component.html */ "./src/app/shared/doomsayer/doomsayer.component.html"),
            styles: [__webpack_require__(/*! ./doomsayer.component.scss */ "./src/app/shared/doomsayer/doomsayer.component.scss")]
        }),
        __metadata("design:paramtypes", [_doomsayer_service__WEBPACK_IMPORTED_MODULE_1__["DoomsayerService"]])
    ], DoomsayerComponent);
    return DoomsayerComponent;
}());



/***/ }),

/***/ "./src/app/shared/doomsayer/doomsayer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/doomsayer/doomsayer.service.ts ***!
  \*******************************************************/
/*! exports provided: DoomsayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoomsayerService", function() { return DoomsayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoomsayerService = /** @class */ (function () {
    function DoomsayerService() {
        this.notify = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.doomsayer$ = this.notify.asObservable();
    }
    DoomsayerService.prototype.info = function (message) {
        this.notify.next({ message: message, theme: 'info' });
    };
    DoomsayerService.prototype.success = function (message) {
        this.notify.next({ message: message, theme: 'success' });
    };
    DoomsayerService.prototype.danger = function (message) {
        this.notify.next({ message: message, theme: 'danger' });
    };
    DoomsayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DoomsayerService);
    return DoomsayerService;
}());



/***/ }),

/***/ "./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"HorizontalSubNav\">\n  <ul class=\"HorizontalSubNav__List\">\n    <li *ngFor=\"let navItem of config\">\n      <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" [routerLink]=\"navItem.target\" class=\"HorizontalSubNav__ListItem\">{{navItem.label}}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n:host {\n  display: block;\n  width: 100%;\n  background: white; }\n.HorizontalSubNav {\n  padding: 0 2rem;\n  text-align: center;\n  border-bottom: 1px solid #D6D6D6; }\n.HorizontalSubNav__List {\n    margin: auto;\n    list-style-type: none; }\n.HorizontalSubNav__List li {\n      display: inline-block; }\n.HorizontalSubNav__ListItem {\n      display: block;\n      padding: 1.5rem;\n      font-size: 0.9rem;\n      color: #231937;\n      font-weight: 100; }\n.HorizontalSubNav__ListItem.active {\n        color: #EB2136; }\n"

/***/ }),

/***/ "./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.ts ***!
  \***************************************************************************/
/*! exports provided: HorizontalSubNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalSubNavComponent", function() { return HorizontalSubNavComponent; });
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


var HorizontalSubNavComponent = /** @class */ (function () {
    function HorizontalSubNavComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HorizontalSubNavComponent.prototype, "config", void 0);
    HorizontalSubNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-sub-nav',
            template: __webpack_require__(/*! ./horizontal-sub-nav.component.html */ "./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-sub-nav.component.scss */ "./src/app/shared/horizontal-sub-nav/horizontal-sub-nav.component.scss")]
        })
    ], HorizontalSubNavComponent);
    return HorizontalSubNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Nav\">\n  <div class=\"Nav__Logo\">\n    <span>caet</span>board\n  </div>\n  <div class=\"Nav__Profile\">\n    <div class=\"Nav__ProfilePicture\">\n      <img [src]=\"(user | async)?.PictureUrl\" alt=\"\">\n    </div>\n    <div class=\"Nav__ProfileName\">{{ (user | async)?.DisplayName }}</div>\n  </div>\n  <ul class=\"Nav__List\">\n    <li *ngFor=\"let navItem of navItems\">\n      <a routerLinkActive=\"active\" [routerLink]=\"navItem.route\" class=\"Nav__ListItem\">\n        <div class=\"Nav__ListIcon\">\n          <i class=\"{{navItem.icon}}\"></i>\n        </div>\n        <div class=\"Nav__ListLabel\">{{navItem.label}}</div>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n:host {\n  font-family: \"RN House Sans\";\n  display: block;\n  padding: 20px 0;\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  overflow: auto;\n  max-width: 250px;\n  background-image: linear-gradient(to top left, #231937, #1d1528); }\n:host nav > div {\n    font-size: 0.9rem;\n    float: left;\n    min-height: 1px;\n    position: relative; }\n.Nav__Logo {\n  text-align: center;\n  color: white;\n  font-weight: 100;\n  font-size: 1.5rem;\n  margin: 2rem; }\n.Nav__Logo span {\n    color: #EB2136; }\n.Nav__Profile {\n  text-align: center; }\n.Nav__ProfileName {\n    color: rgba(255, 255, 255, 0.8);\n    font-weight: 100;\n    margin: 1rem; }\n.Nav__ProfilePicture {\n    margin: auto;\n    overflow: hidden;\n    border-radius: 100%;\n    height: 100px;\n    width: 100px; }\n.Nav__ProfilePicture img {\n      width: 100%; }\n.Nav__List {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n.Nav__ListItem {\n    display: block;\n    margin: auto;\n    padding: 1.1rem 1rem 1.1rem 1.8rem;\n    transition: all 0.2s ease-in-out; }\n.Nav__ListItem.active {\n      background: #FAFCFD; }\n.Nav__ListItem.active .Nav__ListIcon {\n        color: #ED2760; }\n.Nav__ListItem.active .Nav__ListLabel {\n        color: #6F7A89; }\n.Nav__ListIcon {\n    font-size: 1.2rem;\n    display: inline-block;\n    color: #ED2760;\n    width: 40px; }\n.Nav__ListLabel {\n    margin: 6px 0;\n    color: #BBBCBE;\n    display: inline-block;\n    font-size: 1rem; }\n"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(router, us) {
        this.router = router;
        this.us = us;
        this.user = this.us.getUser();
        this.navItems = [
            // {
            //   label: 'What\'s On',
            //   route: 'whats-on',
            //   icon: 'fal fa-chalkboard'
            // },
            {
                label: 'Team Wiki',
                route: 'wiki',
                icon: 'fal fa-book-open'
            },
            // {
            //   label: 'Files',
            //   route: 'files',
            //   icon: 'fal fa-file'
            // },
            {
                label: 'UTM Library',
                route: 'utm',
                icon: 'fab fa-wpforms'
            }
        ];
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/shared/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/sharepoint.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/sharepoint.service.ts ***!
  \*******************************************************/
/*! exports provided: SharepointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharepointService", function() { return SharepointService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var xml_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xml-js */ "./node_modules/xml-js/lib/index.js");
/* harmony import */ var xml_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xml_js__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // Required to support XML response

/**
 *  @RequestDigest() wraps SharePoint service functions in to an Observable that provides the HTTP call with a FormDigestRequest code.
 *  The code is a little messy and not overly intuitive, so these are being kept as experimental methods until I work out how
 *  to better-refactor these. As of writing this, there isn't any real support for Async decorators.
 */
function FetchRequestDigest() {
    return function (target, key, descriptor) {
        var targetHttpMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var targetArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                targetArgs[_i] = arguments[_i];
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                var requestDigestHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
                requestDigestHeaders.append('Accept', 'text/xml;charset=utf-8');
                var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: requestDigestHeaders });
                _this._http.post(_this.api + "/contextinfo", {}, requestOptions)
                    .map(function (requestDigest) { return requestDigest.text(); }).subscribe(function (requestDigest) {
                    targetHttpMethod.apply(_this, targetArgs.concat([JSON.parse(xml_js__WEBPACK_IMPORTED_MODULE_6__["xml2json"](requestDigest)).elements[0].elements[1].elements[0].text]))
                        .subscribe(function (response) {
                        if (response) {
                            observer.next(response.d); // Update and Create requests return a copy of the modified/generated item
                        }
                        else {
                            observer.next(); // Delete requests return null/undefined
                        }
                        observer.complete();
                    }, observer.error);
                });
            });
        };
        return descriptor;
    };
}
var SharepointService = /** @class */ (function () {
    function SharepointService(http, _http) {
        this.http = http;
        this._http = _http;
        this.siteUsers = {};
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('Accept', 'application/json;odata=verbose')
            .set('Content-Type', 'application/json;odata=verbose')
            .set('If-Match', '*');
        this.pickAuthor = 'Author/ID,Author/Title';
        this.pickCreated = 'Created';
        this.pickModified = 'Modified';
    }
    // LIST OPERATIONS
    SharepointService.prototype.getListItems = function (listName, selectBy, expandBy, limitTo) {
        var viewFields = "?$select=" + this.pickAuthor + "," + this.pickCreated + "," + this.pickModified + ((selectBy) ? ',' + selectBy : '');
        viewFields += "&$expand=" + this.pickAuthor + ((expandBy) ? ',' + expandBy : '');
        if (limitTo) {
            viewFields += "&top=" + limitTo;
        }
        return this.http.get(this.api + "/web/lists/getByTitle('" + listName + "')/items" + viewFields, { 'headers': this.headers });
    };
    SharepointService.prototype.getListItem = function (listName, query, selectBy, expandBy) {
        var viewFields = "?$filter=" + query;
        viewFields += "&$select=" + this.pickAuthor + "," + this.pickCreated + "," + this.pickModified + ((selectBy) ? ',' + selectBy : '');
        viewFields += "&$expand=" + this.pickAuthor + ((expandBy) ? ',' + expandBy : '');
        return this.http.get(this.api + "/web/lists/getByTitle('" + listName + "')/items" + viewFields, { 'headers': this.headers });
    };
    SharepointService.prototype.getListItemById = function (listName, listItemId, selectBy, expandBy) {
        var viewFields = "?$select=" + this.pickAuthor + "," + this.pickCreated + "," + this.pickModified + ((selectBy) ? ',' + selectBy : '');
        viewFields += "&$expand=" + this.pickAuthor + ((expandBy) ? ',' + expandBy : '');
        return this.http.get(this.api + "/web/lists/getByTitle('" + listName + "')/items(" + listItemId + ")" + viewFields, { 'headers': this.headers });
    };
    SharepointService.prototype.createListItem = function (listName, data, requestDigest) {
        var payload = JSON.stringify(Object.assign(data, { __metadata: { 'type': "SP.Data." + listName + "ListItem" } }));
        return this.http.post(this.api + "/web/lists/getByTitle('" + listName + "')/items", payload, { 'headers': this.headers.set('X-RequestDigest', requestDigest) });
    };
    SharepointService.prototype.updateListItem = function (listName, listItemId, data, requestDigest) {
        return this.http.post(this.api + "/web/lists/getByTitle('" + listName + "')/items(" + listItemId + ")", JSON.stringify(Object.assign(data, { __metadata: { 'type': "SP.Data." + listName + "ListItem" } })), { 'headers': this.headers.set('X-RequestDigest', requestDigest).set('X-HTTP-Method', 'MERGE') });
    };
    SharepointService.prototype.deleteListItem = function (listName, listItemId, requestDigest) {
        return this.http.delete(this.api + "/web/lists/getByTitle('" + listName + "')/items(" + listItemId + ")", { 'headers': this.headers.set('X-RequestDigest', requestDigest), responseType: 'text' });
    };
    // USER OPERATIONS
    SharepointService.prototype.getCurrentUser = function () {
        return this.http.get(this.api + "/SP.UserProfiles.PeopleManager/GetMyProperties", { 'headers': this.headers });
    };
    SharepointService.prototype.getUserByRacf = function (racf) {
        return this.http.get(this.api + "/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='europa\\" + racf + "'", { 'headers': this.headers });
    };
    SharepointService.prototype.getUserById = function (userId) {
        return this.http.get(this.api + "/web/GetUserById(" + userId + ")", { 'headers': this.headers });
    };
    SharepointService.prototype.getAllFilesAndFolders = function (folderName) {
        return this.http
            .get(this.api + "/web/GetFolderByServerRelativeUrl('" + folderName + "')?$expand=Folders,Files,Folders/Folders/Files,Folders/Folders/Folders/Files,Folders/Folders/Folders/Folders/Files", { 'headers': this.headers });
    };
    __decorate([
        FetchRequestDigest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Object)
    ], SharepointService.prototype, "createListItem", null);
    __decorate([
        FetchRequestDigest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Object, Object]),
        __metadata("design:returntype", Object)
    ], SharepointService.prototype, "updateListItem", null);
    __decorate([
        FetchRequestDigest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Object]),
        __metadata("design:returntype", Object)
    ], SharepointService.prototype, "deleteListItem", null);
    SharepointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], SharepointService);
    return SharepointService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharepoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharepoint.service */ "./src/app/shared/services/sharepoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(sp) {
        this.sp = sp;
        this.users = new Map();
    }
    UserService.prototype.getUser = function () {
        return this.sp.getCurrentUser().map(function (data) { return data.d; });
    };
    UserService.prototype.getUserByRacf = function (racf) {
        return this.sp.getUserByRacf(racf).map(function (data) { return data.d; });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__["SharepointService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sort.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sort.pipe.ts ***!
  \******************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        if (value) {
            if (args) {
                value.sort(function (a, b) {
                    var compareA, compareB;
                    if (typeof a[args] === 'string') {
                        compareA = a[args].toLowerCase();
                    }
                    if (typeof b[args] === 'string') {
                        compareB = b[args].toLowerCase();
                    }
                    if (compareA < compareB) {
                        return -1;
                    }
                    else if (compareA > compareB) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
                value.sort(function (a, b) {
                    var compareA, compareB;
                    if (typeof a[args] === 'string') {
                        compareA = a[args].toLowerCase();
                    }
                    if (typeof b[args] === 'string') {
                        compareB = b[args].toLowerCase();
                    }
                    if (compareA < compareB) {
                        return -1;
                    }
                    else if (compareA > compareB) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }
        return value;
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/utm/utm-control-form/utm-control-form-validators.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/utm/utm-control-form/utm-control-form-validators.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: noAmpersandValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAmpersandValidator", function() { return noAmpersandValidator; });
function noAmpersandValidator(control) {
    return control.value.includes('&') ? { 'hasAmpersand': true } : null;
}


/***/ }),

/***/ "./src/app/utm/utm-control-form/utm-control-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/utm/utm-control-form/utm-control-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"UtmControlForm card\" id=\"UtmControlForm\" [formGroup]=\"utmControlForm\">\n  <h4>Add {{selectedComponentName}}</h4>\n  <mat-form-field>\n    <input matInput\n           type=\"text\"\n           id=\"create\"\n           class=\"light\"\n           formControlName=\"newComponentName\"\n           placeholder=\"Enter new {{singularComponentName | lowercase}} value\">\n    <button matSuffix type=\"button\" class=\"Input__Button Input__Button--success\"  (click)=\"submitNewComponent()\" [disabled]=\"!utmControlForm.valid\"><i class=\"fas fa-plus\"></i></button>\n  </mat-form-field>\n  <mat-error *ngIf=\"utmControlForm.get('newComponentName').hasError('hasAmpersand')\">\n    <p>{{selectedComponentName}} cannot contain ampersands (&)</p>\n  </mat-error>\n\n\n  <mat-form-field  *ngIf=\"selectedComponentName === 'Sources'\">\n    <mat-select name=\"bind-to-medium\" id=\"bind-to-medium\" formControlName=\"medium\" placeholder=\"Select Medium\">\n      <mat-option *ngFor=\"let medium of mediums | sort\"  [value]=\"medium.Title\">\n        {{medium.Title}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n</form>\n<form class=\"UtmControlForm no-ui-validation\">\n  <h4>Update/Delete {{selectedComponentName}}</h4>\n  <mat-form-field *ngFor=\"let component of existingComponents | sort; let i = index\">\n    <input matInput type=\"text\" class=\"light\" [value]=\"component.Title\" [(ngModel)]=\"existingComponents[i].Title\" [ngModelOptions]=\"{standalone: true}\">\n    <button matSuffix type=\"button\" class=\"Input__Button Input__Button--info\" (click)=\"updateComponent(component)\" aria-label=\"Save\"><i class=\"fas fa-save\"></i></button>\n    <button matSuffix type=\"button\" class=\"Input__Button Input__Button--danger\" (click)=\"deleteComponent(component)\" aria-label=\"Delete\"><i class=\"fas fa-trash\"></i></button>\n  </mat-form-field>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/utm/utm-control-form/utm-control-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/utm/utm-control-form/utm-control-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n:host {\n  margin: 2rem;\n  display: block; }\n.UtmControlForm {\n  padding: 2rem;\n  display: block;\n  background: white;\n  border-radius: 3px;\n  margin: 0 20px;\n  margin-bottom: 15px; }\n.UtmControlForm h4 {\n    color: #44155d;\n    margin-bottom: 1rem; }\n.mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/utm/utm-control-form/utm-control-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/utm/utm-control-form/utm-control-form.component.ts ***!
  \********************************************************************/
/*! exports provided: UtmControlFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtmControlFormComponent", function() { return UtmControlFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utm.service */ "./src/app/utm/utm.service.ts");
/* harmony import */ var _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/doomsayer/doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/dialog-modal/dialog-modal.component */ "./src/app/shared/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var _utm_control_form_validators_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utm-control-form-validators.directive */ "./src/app/utm/utm-control-form/utm-control-form-validators.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UtmControlFormComponent = /** @class */ (function () {
    function UtmControlFormComponent(router, dialogService, utmService, doomService, fb) {
        this.router = router;
        this.dialogService = dialogService;
        this.utmService = utmService;
        this.doomService = doomService;
        this.fb = fb;
        this.componentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialise();
    }
    UtmControlFormComponent.prototype.initialise = function () {
        var _this = this;
        this.mediumFormSetup = [];
        switch (this.router.url.split('/')[2]) {
            case 'mediums':
                this.selectedComponentName = 'Mediums';
                this.singularComponentName = 'Medium';
                this.utmService.getMediums().subscribe(function (data) { return _this.existingComponents = data; });
                this.updateMethod = this.utmService.updateMedium;
                this.deleteMethod = this.utmService.deleteMedium;
                break;
            case 'campaigns':
                this.selectedComponentName = 'Campaigns';
                this.singularComponentName = 'Campaign';
                this.utmService.getCampaigns().subscribe(function (data) { return _this.existingComponents = data; });
                this.updateMethod = this.utmService.updateCampaign;
                this.deleteMethod = this.utmService.deleteCampaign;
                break;
            case 'sources':
                this.selectedComponentName = 'Sources';
                this.singularComponentName = 'Source';
                this.utmService.getMediums().subscribe(function (data) { return _this.mediums = data; });
                this.utmService.getSources().subscribe(function (data) { return _this.existingComponents = data; });
                this.updateMethod = this.utmService.updateSource;
                this.deleteMethod = this.utmService.deleteSource;
                this.mediumFormSetup = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required];
                break;
            case 'content':
                this.selectedComponentName = 'Content';
                this.singularComponentName = 'Content';
                this.utmService.getContent().subscribe(function (data) { return _this.existingComponents = data; });
                this.updateMethod = this.utmService.updateContent;
                this.deleteMethod = this.utmService.deleteContent;
                break;
            default:
        }
    };
    UtmControlFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utmControlForm = this.fb.group({
            newComponentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _utm_control_form_validators_directive__WEBPACK_IMPORTED_MODULE_7__["noAmpersandValidator"]]],
            medium: this.mediumFormSetup
        });
        this.utmService.updateService$.subscribe(function (data) {
            _this.initialise();
        });
    };
    UtmControlFormComponent.prototype.updateComponent = function (component) {
        var _this = this;
        this.updateMethod.call(this.utmService, component.Title, component.ID).subscribe(function () {
            _this.doomService.success(_this.singularComponentName + " updated");
            _this.utmService.notifySubscribers();
        });
    };
    UtmControlFormComponent.prototype.deleteComponent = function (component) {
        var _this = this;
        this.dialogService.addDialog(_shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_6__["DialogModalComponent"], {
            title: 'Delete ' + this.singularComponentName,
            theme: 'danger',
            message: "Are you sure you want to delete this " + this.singularComponentName + "?"
        })
            .subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.deleteMethod.call(_this.utmService, component.ID).subscribe(function () {
                    _this.doomService.danger(_this.singularComponentName + " deleted");
                    _this.utmService.notifySubscribers();
                });
            }
        });
    };
    UtmControlFormComponent.prototype.submitNewComponent = function () {
        var _this = this;
        var componentName = this.utmControlForm.get('newComponentName').value;
        var selectedMedium = this.utmControlForm.get('medium').value;
        switch (this.router.url.split('/')[2]) {
            case 'mediums':
                this.utmService.createMedium(componentName).subscribe(function () { return _this.utmService.notifySubscribers(); });
                break;
            case 'content':
                this.utmService.createContent(componentName).subscribe(function () { return _this.utmService.notifySubscribers(); });
                break;
            case 'campaigns':
                this.utmService.createCampaign(componentName).subscribe(function () { return _this.utmService.notifySubscribers(); });
                break;
            case 'sources':
                this.utmService.createSource(componentName, selectedMedium).subscribe(function () { return _this.utmService.notifySubscribers(); });
                break;
            default:
        }
        this.doomService.success("\"" + componentName + "\" added to " + this.selectedComponentName.toLowerCase());
        this.utmControlForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UtmControlFormComponent.prototype, "componentAdded", void 0);
    UtmControlFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utm-control-form',
            template: __webpack_require__(/*! ./utm-control-form.component.html */ "./src/app/utm/utm-control-form/utm-control-form.component.html"),
            styles: [__webpack_require__(/*! ./utm-control-form.component.scss */ "./src/app/utm/utm-control-form/utm-control-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _utm_service__WEBPACK_IMPORTED_MODULE_2__["UtmService"],
            _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_3__["DoomsayerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UtmControlFormComponent);
    return UtmControlFormComponent;
}());



/***/ }),

/***/ "./src/app/utm/utm-generator/utm-generator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/utm/utm-generator/utm-generator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"UtmGenerator card\">\n  <form [formGroup]=\"utmForm\" class=\"UtmGenerator__Form\">\n    <mat-form-field>\n      <input matInput type=\"url\" id=\"url\" placeholder=\"Enter the URL\" formControlName=\"url\" required>\n      <mat-hint align=\"start\">Specify the full URL including the protocol; e.g. https://jobs.rbs.com</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select id=\"medium\" formControlName=\"medium\" placeholder=\"Medium\" required>\n        <mat-option *ngFor=\"let medium of mediums | sort:'Title'\" [value]=\"medium.Title\">\n          {{medium.Title}}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"start\">This is the top-level 'platform' which the source can be classified as. This option will change available Sources.</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select id=\"source\" formControlName=\"source\" placeholder=\"Source\" required>\n        <mat-option *ngFor=\"let source of filteredSources | sort:'Title'\" [value]=\"source.Title\">\n          {{source.Title}}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"start\">Select the specific Source under the chosen Medium.</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select id=\"campaign\" formControlName=\"campaign\" placeholder=\"Campaign\" required>\n        <mat-option *ngFor=\"let campaign of campaigns | sort:'Title'\" [value]=\"campaign.Title\">\n          {{campaign.Title}}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"start\">Required parameter to tie URL to a specific campaign</mat-hint>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <mat-select id=\"content\" formControlName=\"content\" placeholder=\"Content\">\n        <mat-option *ngFor=\"let content of contentList | sort:'Title'\" [value]=\"content.Title\">\n          {{content.Title}}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"start\">Optional parameter that is used to specify the sort of content being promoted, e.g. IWFAB, Blog</mat-hint>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <mat-select  formControlName=\"bid\" placeholder=\"Talemetry BID\" #singleSelect>\n        <ngx-mat-select-search formControlName=\"bidFilterCtrl\" placeholderLabel=\"Search BIDs\" noEntriesFoundLabel=\"No BIDs found\"></ngx-mat-select-search>\n        <mat-option *ngFor=\"let bid of bidList | sort:'Boardid'\" [value]=\"bid.Boardid\">\n          {{bid.Boardid}} - {{bid.Title}}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"start\">Please select the BID</mat-hint>\n\n    </mat-form-field>\n\n    <div class=\"ButtonGroup ButtonGroup--justified\">\n      <button class=\"Button Button--aqua\" (click)=\"generateUrl()\" [disabled]=\"!utmForm.valid\">Generate</button>\n      <button class=\"Button Button--crimson\" (click)=\"clearForm()\">Clear form</button>\n    </div>\n  </form>\n\n  <div class=\"UtmGenerator__Output\">\n    <h3>UTM Link</h3>\n    <p [hidden]=\"generatedUrl\">This is where the completed URL will be generated.</p>\n    <textarea id=\"generatedUrl\" readonly [hidden]=\"!generatedUrl\">{{generatedUrl}}</textarea>\n    <button class=\"Button Button--crimson\" type=\"submit\" ngxClipboard [cbContent]=\"generatedUrl\" (click)=\"doomSayer.success('Copied to clipboard')\" [disabled]=\"!generatedUrl\">Copy to clipboard</button>\n  </div>\n  <div class=\"UtmGenerator__RecentStrings\">\n    <div class=\"ActionHeader\" *ngIf=\"utmHistory.length > 0\">\n      <div class=\"ActionHeader__Title ActionHeader__Title--sm\">\n        <span>Recent strings</span>\n      </div>\n      <div class=\"ActionHeader__Action\">\n        <button class=\"Button\" (click)=\"clearRecentStrings()\">Clear</button>\n      </div>\n    </div>\n\n    <mat-form-field *ngFor=\"let utmUrl of utmHistory\">\n      <input matInput type=\"text\" readonly  class=\"light\" [value]=\"utmUrl\">\n      <button matSuffix class=\"Input__Button Input__Button--info\" ngxClipboard [cbContent]=\"utmUrl\" (click)=\"notify()\"><i class=\"fa fa-copy\"></i></button>\n    </mat-form-field>\n\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/utm/utm-generator/utm-generator.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/utm/utm-generator/utm-generator.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 2rem; }\n\n.UtmGenerator {\n  background: white;\n  padding: 2rem;\n  display: block; }\n\n.UtmGenerator input {\n    width: 100%; }\n\n.UtmGenerator .mat-form-field {\n    width: 100%; }\n\n.UtmGenerator__Output {\n    padding: 15px 25px;\n    background: #fafafa;\n    border-radius: 3px;\n    margin: 20px 0;\n    border: 1px solid #fdfdfd; }\n\n.UtmGenerator__Output h3 {\n      color: #bdbdbd;\n      margin-bottom: 25px; }\n\n.UtmGenerator__Output textarea, .UtmGenerator__Output p {\n      background: white;\n      color: #333333;\n      padding: 20px;\n      width: 100%;\n      border-radius: 2px;\n      border: 1px solid #fdfdfd;\n      margin: 0; }\n\n.UtmGenerator__Output button {\n      margin: 15px 0; }\n\nmat-form-field {\n  margin-bottom: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/utm/utm-generator/utm-generator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/utm/utm-generator/utm-generator.component.ts ***!
  \**************************************************************/
/*! exports provided: UtmGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtmGeneratorComponent", function() { return UtmGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utm.service */ "./src/app/utm/utm.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/doomsayer/doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UtmGeneratorComponent = /** @class */ (function () {
    function UtmGeneratorComponent(storage, router, utmService, fb, doomSayer) {
        this.storage = storage;
        this.router = router;
        this.utmService = utmService;
        this.fb = fb;
        this.doomSayer = doomSayer;
        this.previousMedium = '';
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    UtmGeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataFromService();
        this.utmForm = this.fb.group({
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})')
                ])],
            medium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            source: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            campaign: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bidFilterCtrl: '',
            bid: '',
            content: ''
        });
        this.utmService.updateService$.subscribe(function (data) {
            _this.getDataFromService();
            _this.utmForm.patchValue({ 'medium': '' });
        });
        this.bidList = [{ Title: 'foo' }];
        this.utmForm.valueChanges.subscribe(function (val) {
            if (val.medium !== _this.previousMedium) {
                _this.filteredSources = _this.sources.filter(function (source) { return source.Medium === val.medium; });
                _this.previousMedium = val.medium;
                _this.filteredSources.length ? _this.utmForm.get('source').enable() : _this.utmForm.get('source').disable();
            }
        });
        this.utmHistory = this.parseUtmHistory(this.storage.retrieve('utmHistory'));
        this.storage.observe('utmHistory')
            .subscribe(function (value) {
            if (value) {
                _this.utmHistory = value.split(',');
            }
        });
        this.utmForm.get('bidFilterCtrl').valueChanges
            .debounceTime(500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterBids();
        });
    };
    UtmGeneratorComponent.prototype.clearForm = function () {
        this.utmForm.reset();
    };
    UtmGeneratorComponent.prototype.filterBids = function () {
        var _this = this;
        var search = this.utmForm.get('bidFilterCtrl').value;
        return this.utmService.getBidByTitle(search)
            .subscribe(function (data) { return _this.bidList = data; });
    };
    UtmGeneratorComponent.prototype.getDataFromService = function () {
        var _this = this;
        this.utmService.getMediums()
            .subscribe(function (data) { return _this.mediums = data; });
        this.utmService.getSources()
            .subscribe(function (data) { return _this.sources = data; });
        this.utmService.getCampaigns()
            .subscribe(function (data) { return _this.campaigns = data; });
        this.utmService.getContent()
            .subscribe(function (data) { return _this.contentList = data; });
    };
    UtmGeneratorComponent.prototype.generateUrl = function () {
        var baseUrlDelimiter = (this.utmForm.get('url').value.indexOf('?') === -1) ? '?' : '&';
        var utmString = this.utmForm.get('url').value +
            baseUrlDelimiter +
            ("utm_medium=" + this.utmForm.get('medium').value + "&") +
            ("utm_source=" + this.utmForm.get('source').value + "&") +
            ("utm_campaign=" + this.utmForm.get('campaign').value);
        if (this.utmForm.get('content')) {
            utmString += "&utm_content=" + this.utmForm.get('content').value;
        }
        this.generatedUrl = utmString.replace(/\s/, '+');
        var currentHistory = this.storage.retrieve('utmHistory');
        if (!currentHistory) {
            this.storage.store('utmHistory', "" + this.generatedUrl);
        }
        else {
            this.storage.store('utmHistory', currentHistory + "," + this.generatedUrl);
        }
    };
    UtmGeneratorComponent.prototype.clearRecentStrings = function () {
        this.storage.clear('utmHistory');
        this.utmHistory = [];
        this.doomSayer.danger('Cleared UTM history');
    };
    UtmGeneratorComponent.prototype.parseUtmHistory = function (s) {
        if (!s) {
            return [];
        }
        return (s.indexOf(',') !== -1) ? s.split(',') : [s];
    };
    UtmGeneratorComponent.prototype.notify = function () {
        this.doomSayer.info('Copied to clipboard');
    };
    UtmGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utm-generator',
            template: __webpack_require__(/*! ./utm-generator.component.html */ "./src/app/utm/utm-generator/utm-generator.component.html"),
            styles: [__webpack_require__(/*! ./utm-generator.component.scss */ "./src/app/utm/utm-generator/utm-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _utm_service__WEBPACK_IMPORTED_MODULE_3__["UtmService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_5__["DoomsayerService"]])
    ], UtmGeneratorComponent);
    return UtmGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/utm/utm.component.html":
/*!****************************************!*\
  !*** ./src/app/utm/utm.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-horizontal-sub-nav [config]=\"subNavConfig\"></app-horizontal-sub-nav>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/utm/utm.component.scss":
/*!****************************************!*\
  !*** ./src/app/utm/utm.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n.utm-controls_content-primary {\n  min-width: 257px;\n  flex-grow: 5; }\n.utm-controls_content-primary h1 {\n    margin: 5px 0 !important;\n    padding: 10px 0;\n    font-size: 2rem;\n    margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/utm/utm.component.ts":
/*!**************************************!*\
  !*** ./src/app/utm/utm.component.ts ***!
  \**************************************/
/*! exports provided: UtmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtmComponent", function() { return UtmComponent; });
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

var UtmComponent = /** @class */ (function () {
    function UtmComponent() {
        this.subNavConfig = [
            {
                label: 'Generate',
                target: '../utm'
            },
            {
                label: 'Mediums',
                target: 'mediums'
            },
            {
                label: 'Sources',
                target: 'sources'
            },
            {
                label: 'Campaigns',
                target: 'campaigns'
            },
            {
                label: 'Content',
                target: 'content'
            }
        ];
    }
    UtmComponent.prototype.ngOnInit = function () { };
    UtmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utm',
            template: __webpack_require__(/*! ./utm.component.html */ "./src/app/utm/utm.component.html"),
            styles: [__webpack_require__(/*! ./utm.component.scss */ "./src/app/utm/utm.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UtmComponent);
    return UtmComponent;
}());



/***/ }),

/***/ "./src/app/utm/utm.service.ts":
/*!************************************!*\
  !*** ./src/app/utm/utm.service.ts ***!
  \************************************/
/*! exports provided: UtmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtmService", function() { return UtmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/sharepoint.service */ "./src/app/shared/services/sharepoint.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtmService = /** @class */ (function () {
    function UtmService(sp) {
        this.sp = sp;
        this.shouldBeUpdated = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateService$ = this.shouldBeUpdated.asObservable();
    }
    UtmService.prototype.notifySubscribers = function () {
        this.shouldBeUpdated.next(true);
    };
    UtmService.prototype.getMediums = function () {
        return this.sp.getListItems('UTMMediums', 'Title,ID').map(function (data) { return data.d.results; });
    };
    UtmService.prototype.createMedium = function (medium) {
        return this.sp.createListItem('UTMMediums', { Title: medium });
    };
    UtmService.prototype.updateMedium = function (medium, id) {
        return this.sp.updateListItem('UTMMediums', id, { Title: medium });
    };
    UtmService.prototype.deleteMedium = function (id) {
        return this.sp.deleteListItem('UTMMediums', id);
    };
    UtmService.prototype.getSources = function () {
        return this.sp.getListItems('UTMSources', "Title,ID,Medium").map(function (data) { return data.d.results; });
    };
    UtmService.prototype.createSource = function (source, medium) {
        return this.sp.createListItem('UTMSources', { Title: source, Medium: medium });
    };
    UtmService.prototype.updateSource = function (source, id) {
        return this.sp.updateListItem('UTMSources', id, { Title: source });
    };
    UtmService.prototype.deleteSource = function (id) {
        return this.sp.deleteListItem('UTMSources', id);
    };
    UtmService.prototype.getCampaigns = function () {
        return this.sp.getListItems('UTMCampaigns', "Title,ID").map(function (data) { return data.d.results; });
    };
    UtmService.prototype.createCampaign = function (campaign) {
        return this.sp.createListItem('UTMCampaigns', { Title: campaign });
    };
    UtmService.prototype.updateCampaign = function (campaign, id) {
        return this.sp.updateListItem('UTMCampaigns', id, { Title: campaign });
    };
    UtmService.prototype.deleteCampaign = function (id) {
        return this.sp.deleteListItem('UTMCampaigns', id);
    };
    UtmService.prototype.getContent = function () {
        return this.sp.getListItems('UTMContent', "Title,ID").map(function (data) { return data.d.results; });
    };
    UtmService.prototype.createContent = function (content) {
        return this.sp.createListItem('UTMContent', { Title: content });
    };
    UtmService.prototype.updateContent = function (content, id) {
        return this.sp.updateListItem('UTMContent', id, { Title: content });
    };
    UtmService.prototype.deleteContent = function (id) {
        return this.sp.deleteListItem('UTMContent', id);
    };
    UtmService.prototype.getBidByTitle = function (title) {
        return this.sp.getListItem('UTMBidList', "substringof('" + title + "',Title)").map(function (data) { return data.d.results; });
    };
    UtmService.prototype.populateBids = function () {
        return this.sp.getListItems('UTMBidList', "Title,ID").map(function (data) { return data.d.results; });
    };
    UtmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__["SharepointService"]])
    ], UtmService);
    return UtmService;
}());



/***/ }),

/***/ "./src/app/whats-on/whats-on.component.html":
/*!**************************************************!*\
  !*** ./src/app/whats-on/whats-on.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  whats-on works!\n</p>\n"

/***/ }),

/***/ "./src/app/whats-on/whats-on.component.scss":
/*!**************************************************!*\
  !*** ./src/app/whats-on/whats-on.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/whats-on/whats-on.component.ts":
/*!************************************************!*\
  !*** ./src/app/whats-on/whats-on.component.ts ***!
  \************************************************/
/*! exports provided: WhatsOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsOnComponent", function() { return WhatsOnComponent; });
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

var WhatsOnComponent = /** @class */ (function () {
    function WhatsOnComponent() {
    }
    WhatsOnComponent.prototype.ngOnInit = function () {
    };
    WhatsOnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whats-on',
            template: __webpack_require__(/*! ./whats-on.component.html */ "./src/app/whats-on/whats-on.component.html"),
            styles: [__webpack_require__(/*! ./whats-on.component.scss */ "./src/app/whats-on/whats-on.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhatsOnComponent);
    return WhatsOnComponent;
}());



/***/ }),

/***/ "./src/app/wiki/topic-id.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/wiki/topic-id.pipe.ts ***!
  \***************************************/
/*! exports provided: TopicIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicIdPipe", function() { return TopicIdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopicIdPipe = /** @class */ (function () {
    function TopicIdPipe() {
    }
    TopicIdPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        return value.replace(/\s/g, '-').toUpperCase();
    };
    TopicIdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'topicid'
        })
    ], TopicIdPipe);
    return TopicIdPipe;
}());



/***/ }),

/***/ "./src/app/wiki/wiki-content/wiki-content.component.html":
/*!***************************************************************!*\
  !*** ./src/app/wiki/wiki-content/wiki-content.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Wiki__ContentHeader\">\n  <div class=\"Wiki__ContentHeaderTitle\">\n    <h1 [innerHTML]=\"article.Title\"></h1>\n    <div class=\"Wiki__ContentHeaderMeta\">written by <span class=\"Wiki__ContentHeaderMetaAuthorName\">{{(article.Author.Title)}}</span> on <span class=\"Wiki__ContentHeaderMetaCreated\">{{article.Created | date }}</span></div>\n  </div>\n  <div class=\"Wiki__ContentHeaderControls\">\n    <button routerLinkActive=\"active\" [routerLink]=\"'edit'\" class=\"Button Button--white card\"><i class=\"fal fa-pen-alt\"></i>&nbsp;Edit</button>\n\n  </div>\n</div>\n<div class=\"Wiki__ContentArticleWrapper card\">\n  <div class=\"Wiki__ContentArticle\" [innerHTML]=\"article.Content\"></div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/wiki/wiki-content/wiki-content.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/wiki/wiki-content/wiki-content.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n.side-bar {\n  flex: 2;\n  min-height: 100vh;\n  padding: 10px 20px; }\n.side-bar h1 {\n    margin: 0;\n    color: #838386;\n    font-size: 1.9rem; }\n.container {\n  display: flex; }\n.main {\n  flex: 7;\n  display: block;\n  padding: 20px; }\n:host {\n  display: block;\n  width: 100%; }\n.Wiki__Content {\n  display: block;\n  width: 100%;\n  flex: 3;\n  flex-wrap: wrap; }\n.Wiki__ContentHeader {\n    display: flex;\n    vertical-align: middle;\n    margin-bottom: 1rem; }\n.Wiki__ContentHeaderTitle {\n      flex: 4;\n      padding-left: 2rem; }\n.Wiki__ContentHeaderControls {\n      flex: 1;\n      text-align: right; }\n.Wiki__ContentHeaderMeta {\n      color: #999;\n      font-size: 0.9rem;\n      font-weight: 100; }\n.Wiki__ContentHeaderMetaAuthorName {\n        color: #EB2136; }\n.Wiki__ContentHeaderMetaCreated {\n        color: #5668b0; }\n.Wiki__ContentHeader h1 {\n      margin: 0.1rem 0 0.2rem 0;\n      line-height: 1;\n      padding-bottom: 0.5rem;\n      font-size: 2rem;\n      color: #333; }\n.Wiki__ContentHeader button {\n      font-size: 0.9rem;\n      padding-left: 15px;\n      padding-right: 15px; }\n.Wiki__ContentArticle {\n    line-height: 1.4; }\n.Wiki__ContentArticleWrapper {\n      padding: 2rem; }\n"

/***/ }),

/***/ "./src/app/wiki/wiki-content/wiki-content.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-content/wiki-content.component.ts ***!
  \*************************************************************/
/*! exports provided: WikiContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiContentComponent", function() { return WikiContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wiki.service */ "./src/app/wiki/wiki.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WikiContentComponent = /** @class */ (function () {
    function WikiContentComponent(wikiService, route) {
        this.wikiService = wikiService;
        this.route = route;
    }
    WikiContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = {
            Content: '',
            Title: '',
            TopicID: '',
            ID: null,
            Author: {
                Title: ''
            },
            Created: '',
            Modified: ''
        };
        this.route.params.subscribe(function (val) {
            _this.articleId = val.id;
            _this.wikiService.getArticle(_this.articleId).subscribe(function (article) {
                _this.article = article;
            });
        });
    };
    WikiContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki-content',
            template: __webpack_require__(/*! ./wiki-content.component.html */ "./src/app/wiki/wiki-content/wiki-content.component.html"),
            styles: [__webpack_require__(/*! ./wiki-content.component.scss */ "./src/app/wiki/wiki-content/wiki-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WikiContentComponent);
    return WikiContentComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki-create/wiki-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-create/wiki-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"block-input\">\n  <input matInput placeholder=\"Create Article Title\" [(ngModel)]=\"title\" placeholder=\"Enter a title\">\n</mat-form-field>\n\n<mat-form-field class=\"block-input\">\n  <mat-select placeholder=\"Attach to topic\" name=\"topics\" [(ngModel)]=\"category\">\n    <mat-option *ngFor=\"let topic of secondaryTopics | sort:'Title'\" [value]=\"topic.SecondaryTopicID\">\n      {{topic.Title}} ({{topic.PrimaryTopicID}})\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<label>\n  Article Content\n  <ckeditor\n    [(ngModel)]=\"content\"\n    class=\"editor\"\n    [config]=\"{\n    extraPlugins: 'divarea',\n    uiColor: '#bdbdbd',\n      toolbarGroups: [\n      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },\n      { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },\n      { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },\n      { name: 'forms', groups: [ 'forms' ] },\n      { name: 'insert', groups: [ 'image', 'table'] },\n      { name: 'editing', groups: [ 'find', 'selection', 'editing' ] },\n      { name: 'styles', groups: [ 'styles' ] },\n      { name: 'links', groups: [ 'links' ] },\n      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] }\n    ]\n   }\"\n    debounce=\"20\">\n\n  </ckeditor>\n\n</label>\n<button class=\"Button Button--success\" (click)=\"createArticle()\">Create</button>\n"

/***/ }),

/***/ "./src/app/wiki/wiki-create/wiki-create.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-create/wiki-create.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/wiki/wiki-create/wiki-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/wiki/wiki-create/wiki-create.component.ts ***!
  \***********************************************************/
/*! exports provided: WikiCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiCreateComponent", function() { return WikiCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/doomsayer/doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wiki.service */ "./src/app/wiki/wiki.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WikiCreateComponent = /** @class */ (function () {
    function WikiCreateComponent(wikiService, router, doomSayer) {
        this.wikiService = wikiService;
        this.router = router;
        this.doomSayer = doomSayer;
    }
    WikiCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikiService.getSecondaryTopics().subscribe(function (secondaryTopics) {
            _this.secondaryTopics = secondaryTopics;
        });
    };
    WikiCreateComponent.prototype.createArticle = function () {
        var _this = this;
        this.wikiService.createArticle({ Title: this.title, Content: this.content, TopicID: this.category }).subscribe(function (data) {
            _this.wikiService.notifySubscribers();
            _this.doomSayer.success('Article created');
            _this.router.navigate(['wiki/post/' + data.ID]);
        });
    };
    WikiCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki-create',
            template: __webpack_require__(/*! ./wiki-create.component.html */ "./src/app/wiki/wiki-create/wiki-create.component.html"),
            styles: [__webpack_require__(/*! ./wiki-create.component.scss */ "./src/app/wiki/wiki-create/wiki-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_2__["DoomsayerService"]])
    ], WikiCreateComponent);
    return WikiCreateComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki-editor/wiki-editor.component.html":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-editor/wiki-editor.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"block-input\">\n  <input matInput placeholder=\"Article Title\" name=\"title\" [(ngModel)]=\"article.Title\">\n</mat-form-field>\n\n<label>\n  Article Content\n<ckeditor\n  [(ngModel)]=\"article.Content\"\n  class=\"editor\"\n  [config]=\"{\n    extraPlugins: 'divarea',\n    uiColor: '#bdbdbd',\n      toolbarGroups: [\n      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },\n      { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },\n      { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },\n      { name: 'forms', groups: [ 'forms' ] },\n      { name: 'insert', groups: [ 'image', 'table'] },\n      { name: 'editing', groups: [ 'find', 'selection', 'editing' ] },\n      { name: 'styles', groups: [ 'styles' ] },\n      { name: 'links', groups: [ 'links' ] },\n      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] }\n    ]\n   }\"\n  debounce=\"20\">\n</ckeditor>\n</label>\n<button class=\"Button Button--secondary\" (click)=\"saveChangesToArticle()\">Save</button>\n<button class=\"Button Button--crimson\" (click)=\"deleteArticle()\">Delete</button>\n<button class=\"Button\" routerLink=\"/wiki/post/{{article.ID}}\">Back</button>\n"

/***/ }),

/***/ "./src/app/wiki/wiki-editor/wiki-editor.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-editor/wiki-editor.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/wiki/wiki-editor/wiki-editor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/wiki/wiki-editor/wiki-editor.component.ts ***!
  \***********************************************************/
/*! exports provided: WikiEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiEditorComponent", function() { return WikiEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wiki.service */ "./src/app/wiki/wiki.service.ts");
/* harmony import */ var _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/doomsayer/doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/dialog-modal/dialog-modal.component */ "./src/app/shared/dialog-modal/dialog-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WikiEditorComponent = /** @class */ (function () {
    function WikiEditorComponent(dialogService, route, wikiService, router, doomSayer) {
        this.dialogService = dialogService;
        this.route = route;
        this.wikiService = wikiService;
        this.router = router;
        this.doomSayer = doomSayer;
    }
    WikiEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = {
            Content: '',
            Title: '',
            TopicID: '',
            ID: null
        };
        this.route.params.subscribe(function (val) {
            if (_this.article.ID !== val.id) {
                var articleId = val.id;
                _this.wikiService.getArticle(articleId).subscribe(function (data) {
                    _this.article = data;
                }, function () {
                    _this.router.navigate(['wiki']);
                });
            }
        });
    };
    WikiEditorComponent.prototype.saveChangesToArticle = function () {
        var _this = this;
        this.wikiService.updateArticle(this.article).subscribe(function () {
            _this.wikiService.notifySubscribers();
            _this.doomSayer.success('Updates saved to SharePoint');
        });
    };
    WikiEditorComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.dialogService.addDialog(_shared_dialog_modal_dialog_modal_component__WEBPACK_IMPORTED_MODULE_5__["DialogModalComponent"], {
            title: 'Delete article',
            theme: 'danger',
            message: 'Are you sure you want to delete this article?'
        })
            .subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.wikiService.deleteArticle(_this.article.ID).subscribe(function () {
                    _this.wikiService.notifySubscribers();
                    _this.doomSayer.danger('Article deleted');
                    _this.router.navigate(['wiki']);
                });
            }
        });
    };
    WikiEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki-editor',
            template: __webpack_require__(/*! ./wiki-editor.component.html */ "./src/app/wiki/wiki-editor/wiki-editor.component.html"),
            styles: [__webpack_require__(/*! ./wiki-editor.component.scss */ "./src/app/wiki/wiki-editor/wiki-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _wiki_service__WEBPACK_IMPORTED_MODULE_2__["WikiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_3__["DoomsayerService"]])
    ], WikiEditorComponent);
    return WikiEditorComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki-nav/wiki-nav-filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/wiki/wiki-nav/wiki-nav-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: WikiNavFilterPipe, WikiNavDeepFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiNavFilterPipe", function() { return WikiNavFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiNavDeepFilterPipe", function() { return WikiNavDeepFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WikiNavFilterPipe = /** @class */ (function () {
    function WikiNavFilterPipe() {
    }
    WikiNavFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) {
            if (item !== '') {
                return item.Title.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || item.Content.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            }
        });
    };
    WikiNavFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wikiNavFilter'
        })
    ], WikiNavFilterPipe);
    return WikiNavFilterPipe;
}());

var WikiNavDeepFilterPipe = /** @class */ (function () {
    function WikiNavDeepFilterPipe() {
    }
    WikiNavDeepFilterPipe.prototype.transform = function (secondaryTopicList, inputFilter) {
        var filter = inputFilter || '';
        if (!secondaryTopicList) {
            return secondaryTopicList;
        }
        var articleList = [];
        for (var _i = 0, secondaryTopicList_1 = secondaryTopicList; _i < secondaryTopicList_1.length; _i++) {
            var topics = secondaryTopicList_1[_i];
            if (topics.Articles.length) {
                articleList = articleList.concat(topics.Articles);
            }
            else {
                articleList = [];
            }
        }
        var returnArray = articleList.filter(function (item) {
            if (item !== '') {
                return item.Title.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || item.Content.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            }
        });
        return returnArray;
    };
    WikiNavDeepFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wikiNavDeepFilter'
        })
    ], WikiNavDeepFilterPipe);
    return WikiNavDeepFilterPipe;
}());



/***/ }),

/***/ "./src/app/wiki/wiki-nav/wiki-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/wiki/wiki-nav/wiki-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row Wiki__NavActions card ButtonGroup\">\n  <button routerLinkActive=\"active\" routerLink=\"create\" class=\"Button Button--white\"><i class=\"far fa-plus-square\"></i> Create</button>\n  <button routerLinkActive=\"active\" routerLink=\"topics\" class=\"Button Button--white\"><i class=\"fal fa-cogs\"></i> Manage</button>\n</div>\n<div class=\"Wiki__NavContents card\">\n  <div class=\"Wiki__NavList\">\n    <ul>\n      <li class=\"Wiki__NavList--primary\" *ngFor=\"let primaryNavItem of navItems\" [ngClass]=\"{active: primaryNavItem.isActive }\"><span class=\"Wiki__NavList--primary-label\" (click)=\"toggleNav(primaryNavItem)\" >{{primaryNavItem.Title}}</span>\n        <ul>\n          <li class=\"Wiki__NavList--secondary\" *ngFor=\"let secondaryTopic of primaryNavItem.SecondaryTopics\" [ngClass]=\"{active: (secondaryTopic.Articles | wikiNavFilter: keywordFilter).length}\">\n            {{secondaryTopic.Title}}\n            <ul class=\"Wiki__NavListArticles\">\n              <li *ngFor=\"let article of secondaryTopic.Articles | wikiNavFilter: keywordFilter\"><a routerLinkActive=\"active\" routerLink=\"post/{{article.ID}}\">{{article.Title}}</a></li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wiki/wiki-nav/wiki-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/wiki/wiki-nav/wiki-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n:host {\n  display: block;\n  width: 290px; }\n.Wiki__Nav {\n  position: fixed;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 55px;\n  overflow: auto;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.Wiki__NavContents {\n    padding: 10px 20px;\n    overflow: auto;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px; }\n.Wiki__NavHead div.row {\n    display: flex;\n    align-items: center; }\n.Wiki__NavHeadTitle {\n    width: 60%;\n    float: left; }\n.Wiki__NavHead-btn-wrap {\n    width: 40%;\n    text-align: right;\n    float: left; }\n.Wiki__NavFilter {\n    display: block;\n    width: 100%;\n    position: relative;\n    margin: 15px 0;\n    text-align: right; }\n.Wiki__NavFilter:after {\n      font-family: \"Font Awesome 5 Free\";\n      font-weight: 900;\n      position: absolute;\n      width: 20px;\n      left: 88% !important;\n      right: 15px !important;\n      color: white;\n      top: 48%;\n      font-size: 0.8rem;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '\\f002'; }\n.Wiki__NavFilter input {\n      display: block;\n      width: 100%;\n      font-size: 0.8rem;\n      padding: 15px 15px 15px 15px;\n      background: #181125;\n      color: white !important;\n      border: none;\n      font-family: 'RN House Sans', sans-serif;\n      font-weight: 100; }\n.Wiki__NavFilter input::-webkit-input-placeholder {\n        color: #f7f7f7; }\n.Wiki__NavFilter input:-ms-input-placeholder {\n        color: #f7f7f7; }\n.Wiki__NavFilter input::-ms-input-placeholder {\n        color: #f7f7f7; }\n.Wiki__NavFilter input::placeholder {\n        color: #f7f7f7; }\n.Wiki__NavList ul {\n    margin: 0;\n    padding-left: 0;\n    list-style-type: none; }\n.Wiki__NavList > ul > li {\n    margin-top: 20px;\n    margin-bottom: 20px; }\n.Wiki__NavList--primary {\n    font-weight: 400;\n    color: #231937; }\n.Wiki__NavList--primary span {\n      cursor: pointer;\n      font-size: 1.1rem;\n      margin-bottom: 30px;\n      position: relative; }\n.Wiki__NavList--primary span:after {\n        transition: all 0.2s;\n        position: absolute;\n        font-size: 0.8rem;\n        top: 6px;\n        right: -1.5rem;\n        font-family: \"Font Awesome 5 Pro\";\n        content: \"\\f078\";\n        color: #9d9d9f; }\n.Wiki__NavList--primary .Wiki__NavList--secondary {\n      display: none; }\n.Wiki__NavList--primary.active span:after {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n.Wiki__NavList--primary.active .Wiki__NavList--secondary {\n      display: block; }\n.Wiki__NavList--secondary {\n    font-size: 1rem;\n    font-weight: 100;\n    margin: 1rem 0;\n    color: #231939; }\n.Wiki__NavList--secondary > ul {\n      margin: 10px 0; }\n.Wiki__NavList--secondary > li {\n      margin-top: 5px; }\n.Wiki__NavList--secondary li {\n      display: block;\n      margin: 0 0 0 3px; }\n.Wiki__NavList--secondary li a {\n        display: block;\n        font-size: 0.7rem;\n        color: #555555;\n        font-weight: 100;\n        padding: 2px 0 2px 8px;\n        color: #666;\n        font-size: 0.9rem; }\n.Wiki__NavList--secondary li a.active {\n          color: #3acadb; }\n.Wiki__NavActions {\n    margin: 0;\n    margin-bottom: 1.5rem; }\n#wiki-search {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/wiki/wiki-nav/wiki-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/wiki/wiki-nav/wiki-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: WikiNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiNavComponent", function() { return WikiNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wiki.service */ "./src/app/wiki/wiki.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WikiNavComponent = /** @class */ (function () {
    function WikiNavComponent(wikiService, router) {
        this.wikiService = wikiService;
        this.router = router;
    }
    WikiNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .map(function (routeInfo) { return _this.routeInfo = routeInfo; })
            .subscribe(function () {
            _this.currentArticle = _this.routeInfo.url.split('/')[3];
        });
        this.currentArticle = this.router.url.split('/')[3];
    };
    WikiNavComponent.prototype.ngOnChanges = function (changes) {
        if (changes.articles.currentValue.length) {
            this.buildNavigation(changes.articles.currentValue);
        }
    };
    WikiNavComponent.prototype.toggleNav = function (ins) {
        ins.isActive = !ins.isActive;
    };
    WikiNavComponent.prototype.buildNavigation = function (articles) {
        var _this = this;
        var mergedTopics = this.wikiService
            .getPrimaryTopics()
            .mergeMap(function (primaryTopicList) {
            return _this.wikiService.getSecondaryTopics()
                .map(function (secondaryTopicList) {
                var _loop_1 = function (primaryTopic) {
                    primaryTopic.isActive = false;
                    primaryTopic.SecondaryTopics = secondaryTopicList.filter(function (secondaryTopic) {
                        return secondaryTopic.PrimaryTopicID === primaryTopic.PrimaryTopicID;
                    });
                };
                for (var _i = 0, primaryTopicList_1 = primaryTopicList; _i < primaryTopicList_1.length; _i++) {
                    var primaryTopic = primaryTopicList_1[_i];
                    _loop_1(primaryTopic);
                }
                return primaryTopicList;
            });
        });
        mergedTopics
            .subscribe(function (navConstruct) {
            for (var _i = 0, navConstruct_1 = navConstruct; _i < navConstruct_1.length; _i++) {
                var primaryTopic = navConstruct_1[_i];
                var _loop_2 = function (secondaryTopic) {
                    secondaryTopic.Articles = articles.map(function (article) {
                        return { Title: article.Title, TopicID: article.TopicID, ID: article.ID, Content: article.Content };
                    }).filter(function (val) {
                        return val.TopicID == secondaryTopic.SecondaryTopicID;
                    });
                };
                for (var _a = 0, _b = primaryTopic.SecondaryTopics; _a < _b.length; _a++) {
                    var secondaryTopic = _b[_a];
                    _loop_2(secondaryTopic);
                }
            }
            _this.navItems = navConstruct;
            console.log('nav items', _this.navItems);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WikiNavComponent.prototype, "articles", void 0);
    WikiNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki-nav',
            template: __webpack_require__(/*! ./wiki-nav.component.html */ "./src/app/wiki/wiki-nav/wiki-nav.component.html"),
            styles: [__webpack_require__(/*! ./wiki-nav.component.scss */ "./src/app/wiki/wiki-nav/wiki-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WikiNavComponent);
    return WikiNavComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki-topics/wiki-topics.component.html":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-topics/wiki-topics.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wiki-topics\">\n  <div class=\"panel\">\n    <div class=\"panel__title primary\">\n      <h2>Manage Primary Topics</h2>\n    </div>\n    <div class=\"panel__body\">\n      <form class=\"no-ui-validation\">\n        <div class=\"panel__table lined\">\n          <div class=\"panel__row\">\n            <h3>Create Primary Topic</h3>\n\n            <div class=\"toggle-create\">\n              <mat-form-field>\n                <input matInput [value]=\"newPrimaryTopicTitle\" [(ngModel)]=\"newPrimaryTopicTitle\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Create a new primary topic\">\n              </mat-form-field>\n              <mat-form-field floatLabel=\"always\">\n                <input matInput [value]=\"newPrimaryTopicTitle | topicid\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Topic ID\" disabled>\n                <mat-hint align=\"end\">Topic ID is auto-generated</mat-hint>\n              </mat-form-field>\n              <button mat-mini-fab color=\"accent\" (click)=\"createPrimaryTopic(newPrimaryTopicTitle)\">\n                <mat-icon><i class=\"fas fa-plus\"></i></mat-icon>\n              </button>\n            </div>\n          </div>\n          <h3>Primary Topic list</h3>\n          <mat-list class=\"topic-list\">\n            <mat-list-item *ngFor=\"let primaryTopic of primaryTopics; let i = index; last as last\">\n              <div class=\"topic-list__topic\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Primary Topic title\" [value]=\"primaryTopic.Title\" [(ngModel)]=\"primaryTopics[i].Title\" [ngModelOptions]=\"{standalone: true}\">\n                </mat-form-field>\n                <div class=\"topic-list__topic--action\">\n                  <button mat-raised-button class=\"btn-icon\" color=\"primary\" (click)=\"updatePrimaryTopic(primaryTopic)\">Save <i class=\"fas fa-save\"></i></button>\n                </div>\n              </div>\n            </mat-list-item>\n          </mat-list>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"panel\">\n    <div class=\"panel__title primary\">\n      <h2>Manage Secondary Topics</h2>\n    </div>\n    <div class=\"panel__body\">\n      <form class=\"no-ui-validation\">\n        <div class=\"panel__table lined\">\n          <div class=\"panel__row\">\n            <div class=\"toggle-create\">\n              <mat-form-field>\n                <input matInput [value]=\"newSecondaryTopicTitle\" [(ngModel)]=\"newSecondaryTopicTitle\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Secondary topic name\">\n              </mat-form-field>\n              <mat-form-field floatLabel=\"always\">\n                <input matInput [value]=\"newSecondaryTopicTitle | topicid\" [(ngModel)]=\"newSecondaryTopicID\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Topic ID\"  disabled>\n                <mat-hint align=\"end\">Topic ID is auto-generated</mat-hint>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select placeholder=\"Attach to Primary Topic\" [(ngModel)]=\"newSecondaryTopicPrimaryID\" [ngModelOptions]=\"{standalone: true}\">\n                  <mat-option *ngFor=\"let primaryTopic of primaryTopics\" value=\"{{primaryTopic.PrimaryTopicID}}\">\n                    {{primaryTopic.Title}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <button mat-mini-fab color=\"accent\" (click)=\"createSecondaryTopic(newSecondaryTopicTitle, newSecondaryTopicPrimaryID)\">\n                <mat-icon><i class=\"fas fa-plus\"></i></mat-icon>\n              </button>\n            </div>\n          </div>\n          <h3>Secondary Topic list</h3>\n          <mat-list class=\"topic-list\">\n            <mat-list-item *ngFor=\"let secondaryTopic of secondaryTopics; let i = index; last as last\">\n              <div class=\"topic-list__topic\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Secondary Topic title\" [value]=\"secondaryTopic.Title\" [(ngModel)]=\"secondaryTopics[i].Title\" [ngModelOptions]=\"{standalone: true}\">\n                </mat-form-field>\n                <mat-form-field>\n                  <mat-select placeholder=\"Bound to Primary Topic\" [(ngModel)]=\"secondaryTopic.PrimaryTopicID\" [ngModelOptions]=\"{standalone: true}\">\n                    <mat-option *ngFor=\"let primaryTopic of primaryTopics\" value=\"{{primaryTopic.PrimaryTopicID}}\">\n                      {{primaryTopic.Title}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <div class=\"topic-list__topic--action\">\n                  <button mat-raised-button class=\"btn-icon\" color=\"primary\" (click)=\"updateSecondaryTopic(secondaryTopic)\">Save <i class=\"fas fa-save\"></i></button>\n                </div>\n              </div>\n            </mat-list-item>\n          </mat-list>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wiki/wiki-topics/wiki-topics.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/wiki/wiki-topics/wiki-topics.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n.wiki-topics h3 {\n  margin: 25px 0 15px;\n  color: #231937; }\n.toggle-create .mat-form-field:first-child {\n  min-width: 60%; }\n.topic-list {\n  font-size: 1rem;\n  display: block;\n  padding: 5px 0; }\n.topic-list__topic {\n    display: flex;\n    vertical-align: middle; }\n.topic-list__topic mat-form-field {\n      flex: 10;\n      line-height: 1; }\n.topic-list__topic--action {\n      line-height: 1;\n      padding: 10px 15px;\n      flex: 1; }\nmat-form-field {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/wiki/wiki-topics/wiki-topics.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/wiki/wiki-topics/wiki-topics.component.ts ***!
  \***********************************************************/
/*! exports provided: WikiTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiTopicsComponent", function() { return WikiTopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wiki.service */ "./src/app/wiki/wiki.service.ts");
/* harmony import */ var _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/doomsayer/doomsayer.service */ "./src/app/shared/doomsayer/doomsayer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WikiTopicsComponent = /** @class */ (function () {
    function WikiTopicsComponent(wikiService, doom) {
        this.wikiService = wikiService;
        this.doom = doom;
        this.displayAddNewPrimaryTopic = false;
        this.displayAddNewSecondaryTopic = false;
        this.primaryTopics = [];
        this.secondaryTopics = [];
    }
    WikiTopicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikiService.getPrimaryTopics().subscribe(function (primaryTopics) {
            _this.primaryTopics = primaryTopics;
        });
        this.wikiService.getSecondaryTopics().subscribe(function (secondaryTopics) {
            _this.secondaryTopics = secondaryTopics;
        });
        this.wikiService.updateService$.subscribe(function () {
            _this.wikiService.getPrimaryTopics().subscribe(function (primaryTopics) {
                _this.primaryTopics = primaryTopics;
            });
            _this.wikiService.getSecondaryTopics().subscribe(function (secondaryTopics) {
                _this.secondaryTopics = secondaryTopics;
            });
        });
    };
    WikiTopicsComponent.prototype.createPrimaryTopic = function (topicTitle) {
        var _this = this;
        var tid = topicTitle.replace(' ', '-').toUpperCase();
        this.wikiService.createPrimaryTopic(topicTitle, tid)
            .subscribe(function () {
            _this.wikiService.notifySubscribers();
            _this.doom.success('Primary topic created');
        }, function (err) {
            console.log('Non-unique value found (assumed), check error:', err);
            _this.doom.danger('This topic already exists');
        });
    };
    WikiTopicsComponent.prototype.updatePrimaryTopic = function (topic) {
        var _this = this;
        this.wikiService.updatePrimaryTopic(topic.ID, topic.Title)
            .subscribe(function () {
            _this.wikiService.notifySubscribers();
            _this.doom.success('Primary topic updated');
        });
    };
    WikiTopicsComponent.prototype.createSecondaryTopic = function (topicTitle, pid) {
        var _this = this;
        // TODO Ensure topicID is unique
        var tid = topicTitle.replace(' ', '-').toUpperCase();
        this.wikiService.createSecondaryTopic(topicTitle, tid, pid)
            .subscribe(function () {
            _this.wikiService.notifySubscribers();
            _this.doom.success('Secondary topic created');
        }, function (err) {
            console.log('Non-unique value found (assumed), check error:', err);
            _this.doom.danger('This topic already exists');
        });
    };
    WikiTopicsComponent.prototype.updateSecondaryTopic = function (topic) {
        var _this = this;
        this.wikiService.updateSecondaryTopic(topic.ID, topic.Title, topic.PrimaryTopicID)
            .subscribe(function () {
            _this.wikiService.notifySubscribers();
            _this.doom.success('Secondary topic updated');
        });
    };
    WikiTopicsComponent.prototype.toggleCreateState = function (topicType) {
        if (topicType === 'primary') {
            this.displayAddNewPrimaryTopic = !this.displayAddNewPrimaryTopic;
        }
        else {
            this.displayAddNewSecondaryTopic = !this.displayAddNewSecondaryTopic;
        }
    };
    WikiTopicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki-topics',
            template: __webpack_require__(/*! ./wiki-topics.component.html */ "./src/app/wiki/wiki-topics/wiki-topics.component.html"),
            styles: [__webpack_require__(/*! ./wiki-topics.component.scss */ "./src/app/wiki/wiki-topics/wiki-topics.component.scss")]
        }),
        __metadata("design:paramtypes", [_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"], _shared_doomsayer_doomsayer_service__WEBPACK_IMPORTED_MODULE_2__["DoomsayerService"]])
    ], WikiTopicsComponent);
    return WikiTopicsComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki.component.html":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Wiki\">\n  <div class=\"Wiki__NavWrapper\">\n    <app-wiki-nav class=\"Wiki__Nav\" [articles]=\"wikiArticles\"></app-wiki-nav>\n  </div>\n  <div class=\"Wiki__Content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wiki/wiki.component.scss":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    Colours   */\n/*    Sizing   */\n.Wiki {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  margin: 1.5rem 1rem;\n  padding: 1rem 0; }\n.Wiki__NavWrapper {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  display: block;\n  margin-right: 1.5rem; }\n.Wiki__Content {\n  width: 100%;\n  flex: 3;\n  flex-wrap: wrap; }\n"

/***/ }),

/***/ "./src/app/wiki/wiki.component.ts":
/*!****************************************!*\
  !*** ./src/app/wiki/wiki.component.ts ***!
  \****************************************/
/*! exports provided: WikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiComponent", function() { return WikiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wiki.service */ "./src/app/wiki/wiki.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WikiComponent = /** @class */ (function () {
    function WikiComponent(wikiService, router) {
        this.wikiService = wikiService;
        this.router = router;
    }
    WikiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikiService.updateService$.subscribe(function () {
            _this.wikiService.getArticles().subscribe(function (articles) { return _this.wikiArticles = articles; });
        });
        this.wikiArticles = [];
        this.wikiService.getArticles().subscribe(function (articles) {
            _this.wikiArticles = articles;
            console.log('articles', _this.wikiArticles);
        });
        this.router.events.subscribe(function () { return window.scrollTo(0, 0); });
    };
    WikiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki',
            template: __webpack_require__(/*! ./wiki.component.html */ "./src/app/wiki/wiki.component.html"),
            styles: [__webpack_require__(/*! ./wiki.component.scss */ "./src/app/wiki/wiki.component.scss")],
            providers: [_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"]]
        }),
        __metadata("design:paramtypes", [_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WikiComponent);
    return WikiComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki.service.ts":
/*!**************************************!*\
  !*** ./src/app/wiki/wiki.service.ts ***!
  \**************************************/
/*! exports provided: WikiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiService", function() { return WikiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/sharepoint.service */ "./src/app/shared/services/sharepoint.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WikiService = /** @class */ (function () {
    function WikiService(sp) {
        this.sp = sp;
        this.listName = 'WikiContent';
        this.shouldBeUpdated = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateService$ = this.shouldBeUpdated.asObservable();
    }
    WikiService.prototype.getPrimaryTopics = function () {
        return this.sp.getListItems('WikiPrimaryTopics', "Title,PrimaryTopicID,ID").map(function (data) { return data.d.results; });
    };
    WikiService.prototype.createPrimaryTopic = function (title, id) {
        return this.sp.createListItem('WikiPrimaryTopics', { Title: title, PrimaryTopicID: id });
    };
    WikiService.prototype.updatePrimaryTopic = function (id, newTitle) {
        return this.sp.updateListItem('WikiPrimaryTopics', id, {
            Title: newTitle
        });
    };
    WikiService.prototype.getSecondaryTopics = function () {
        return this.sp.getListItems('WikiSecondaryTopics', "Title,PrimaryTopicID,ID,SecondaryTopicID").map(function (data) { return data.d.results; });
    };
    WikiService.prototype.createSecondaryTopic = function (title, sid, pid) {
        return this.sp.createListItem('WikiSecondaryTopics', { Title: title, SecondaryTopicID: sid, PrimaryTopicID: pid });
    };
    WikiService.prototype.updateSecondaryTopic = function (id, newTitle, newPrimaryTopicId) {
        var data = {
            Title: newTitle
        };
        if (newPrimaryTopicId) {
            data = Object.assign(data, { PrimaryTopicID: newPrimaryTopicId });
        }
        return this.sp.updateListItem('WikiSecondaryTopics', id, data);
    };
    WikiService.prototype.notifySubscribers = function () {
        this.shouldBeUpdated.next(true);
    };
    WikiService.prototype.getArticles = function () {
        return this.sp.getListItems(this.listName, "Title,TopicID,ID").map(function (data) { return data.d.results; });
    };
    WikiService.prototype.getArticle = function (id) {
        return this.sp.getListItemById(this.listName, id, "Title,TopicID,ID,Content," + this.sp.pickAuthor + "," + this.sp.pickCreated, "" + this.sp.pickAuthor).map(function (data) { return data.d; });
    };
    WikiService.prototype.createArticle = function (article) {
        return this.sp.createListItem(this.listName, article);
    };
    WikiService.prototype.updateArticle = function (article) {
        return this.sp.updateListItem(this.listName, article.ID, {
            Title: article.Title,
            Content: article.Content
        });
    };
    WikiService.prototype.deleteArticle = function (id) {
        return this.sp.deleteListItem(this.listName, id);
    };
    WikiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_sharepoint_service__WEBPACK_IMPORTED_MODULE_1__["SharepointService"]])
    ], WikiService);
    return WikiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: 'http://localhost:3000/_api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Matt/Development/Apps/caet-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map