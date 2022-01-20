(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.service */ "./src/app/about/about.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");






function AboutComponent_div_12_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "grey-bg": a0 }; };
const _c1 = function (a0) { return { "purple": a0 }; };
function AboutComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_div_12_img_13_Template, 1, 1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r2.id % 2 == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, item_r2.id % 2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2);
} }
function AboutComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r5.id % 2 == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(item.url)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, item_r5.id % 2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.description);
} }
class AboutComponent {
    constructor(AboutService) {
        this.AboutService = AboutService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.getAboutList();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    getAboutList() {
        this.subscriptions.push(this.AboutService.getDescription().subscribe((response) => {
            this.aboutList = response;
        }));
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_about_service__WEBPACK_IMPORTED_MODULE_1__["AboutService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 30, vars: 2, consts: [[1, "top"], [1, "break-30"], [1, "intro-title", "margin-side"], [1, "intro-title", "title-bold", "margin-side"], [1, "purple"], [1, "margin-side"], [1, "para"], [1, "contents"], ["class", "showing", 4, "ngFor", "ngForOf"], ["class", "noshow", 4, "ngFor", "ngForOf"], [1, "top-50"], [1, "links", "margin-side"], ["routerLink", "/our-teams"], ["src", "../../assets/main/arrow_blue.svg", "alt", "img", 1, "arrow"], [1, "margin-30"], ["href", "/our-projects"], ["href", ""], [1, "showing"], [3, "ngClass"], [1, "right"], [1, "title", 3, "ngClass"], [1, "description"], ["class", "photo", "alt", "team_img", 3, "src", 4, "ngIf"], [1, "bottom-50"], ["alt", "team_img", 1, "photo", 3, "src"], [1, "noshow"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Who");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mark", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Are We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " iGEM stands for International Genetic Engineered Machine and is an international synthetic biology competition open to high school, undergraduate and graduate students. Each year\u2019s competition begins in January and culminates with a Giant Jamboree in October of the same year. iGEM Toronto is an interdisciplinary team that is always eager to learn from each other\u2019s expertise. We identify problems in our community, propose a synthetic biology-based solution, and execute it to the best of our ability. It\u2019s a friendly group where computer scientists learn the ethical implications of their work, where biologists learn data analysis tools using machine learning, where engineers learn about the beautiful complexity of the cell, where bioethicists actively inquire about the possibilities of synthetic biology, where we all work together toward synthesizing our ideas into something bigger than any one of us could have achieved alone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutComponent_div_12_Template, 15, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_div_13_Template, 14, 10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Join our team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "View past projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Subscribe to newsletters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".top[_ngcontent-%COMP%] {\n  margin: 150px 0px;\n}\n\nmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 0.35em;\n  line-height: 0.01;\n  background-color: #C8B0E3;\n  color: #17425A !important;\n}\n\n.margin-side[_ngcontent-%COMP%] {\n  margin: 0 100px;\n}\n\n.noshow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 800px) {\n  .margin-side[_ngcontent-%COMP%] {\n    margin: 0 20px;\n  }\n\n  .intro-title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .para[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n\n  .break-30[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .small-container[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    color: white;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n\n  .showing[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .noshow[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    height: 20px !important;\n    margin-left: 10px;\n  }\n\n  .top[_ngcontent-%COMP%] {\n    margin: 100px 0px;\n  }\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 90px;\n  color: #17425A;\n}\n\n.title-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #17425A;\n}\n\n.title[_ngcontent-%COMP%] {\n  border-bottom: 8px #66E0FA solid;\n  color: #17425A;\n}\n\n.purple[_ngcontent-%COMP%] {\n  border-bottom: 8px #C8B0E3 solid !important;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-size: 40px;\n  font-family: Avenir;\n}\n\n.right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n}\n\n@media screen and (max-width: 800px) {\n  .photo[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-family: Verdana;\n  font-weight: bold;\n  color: #17425A;\n}\n\n.margin-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.margin-50[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.margin-100[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.top-50[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.bottom-50[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Avenir;\n  color: #17425A;\n  display: inline-block;\n}\n\n.photo[_ngcontent-%COMP%] {\n  width: 230px;\n  float: right;\n  position: relative;\n  margin-right: 100px;\n  margin-bottom: -50px;\n  margin-top: 50px;\n}\n\n.second-page[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-size: 40px;\n  font-family: Avenir;\n}\n\n.exception[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.b0[_ngcontent-%COMP%] {\n  padding: 40px 40px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #7F89E3;\n  margin-left: 100px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 40px;\n  margin-top: 50px;\n  font-family: Avenir;\n  border: none;\n  border-radius: 10px;\n}\n\n.grey-bg[_ngcontent-%COMP%] {\n  background-color: #F1F1F3;\n}\n\n.links[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 40px;\n  font-weight: 400;\n  color: #17425A;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-left: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #17425A;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBSUE7RUFDSTtJQUNJLGNBQUE7RUFETjs7RUFHRTtJQUNJLDBCQUFBO0VBQU47O0VBRUU7SUFDSSwwQkFBQTtFQUNOOztFQUNFO0lBQ0ksbUJBQUE7RUFFTjs7RUFBRTtJQUNJLDBCQUFBO0VBR047O0VBREU7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQUlOOztFQUZFO0lBQ0ksMEJBQUE7RUFLTjs7RUFIRTtJQUNJLHdCQUFBO0VBTU47O0VBSkU7SUFDSSx5QkFBQTtFQU9OOztFQUxFO0lBQ0ksMEJBQUE7RUFRTjs7RUFORTtJQUNJLHVCQUFBO0lBQ0osaUJBQUE7RUFTRjs7RUFQRTtJQUNJLGlCQUFBO0VBVU47QUFDRjs7QUFQQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFTSjs7QUFOQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQVNKOztBQU5BO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0FBU0o7O0FBTkE7RUFDSSwyQ0FBQTtBQVNKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVNKOztBQU5BO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FBU0o7O0FBTkE7RUFDSTtJQUNJLGFBQUE7RUFTTjs7RUFQRTtJQUNJLFdBQUE7RUFVTjtBQUNGOztBQVBBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBU0o7O0FBTkE7RUFDSSxtQkFBQTtBQVNKOztBQU5BO0VBQ0ksbUJBQUE7QUFTSjs7QUFOQTtFQUNJLG9CQUFBO0FBU0o7O0FBTkE7RUFDSSxpQkFBQTtBQVNKOztBQU5BO0VBQ0ksb0JBQUE7QUFTSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQVNKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVNKOztBQUxBO0VBQ0ksa0JBQUE7QUFRSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFMQTtFQUNJLDJCQUFBO0FBUUo7O0FBTEE7RUFDSSxrQkFBQTtBQVFKOztBQUxBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTEE7RUFDSSx5QkFBQTtBQVFKOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFMQTtFQUNJLGNBQUE7QUFRSjs7QUFMQTtFQUNJLHFCQUFBO0FBUUoiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xuICAgIG1hcmdpbjogMTUwcHggMHB4O1xufVxuXG5tYXJrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjM1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuMDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QjBFMztcbiAgICBjb2xvcjogIzE3NDI1QSAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luLXNpZGUge1xuICAgIG1hcmdpbjogMCAxMDBweFxufVxuXG4ubm9zaG93e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5tYXJnaW4tc2lkZSB7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIH1cbiAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBhcmEge1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJyZWFrLTMwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zbWFsbC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTozMHB4ICFpbXBvcnRhbnRcbiAgICB9XG4gICAgLnNob3dpbmd7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxuICAgIH1cbiAgICAubm9zaG93e1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50XG4gICAgfVxuICAgIC5saW5rc3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnRcbiAgICB9XG4gICAgLmFycm93e1xuICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnRvcCB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMHB4O1xuICAgIH1cbn1cblxuLmludHJvLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBmb250LXNpemU6IDkwcHg7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi50aXRsZS1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLnRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiA4cHggIzY2RTBGQSBzb2xpZDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLnB1cnBsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4ICNDOEIwRTMgc29saWQgIWltcG9ydGFudDtcbn1cblxuLnBhcmEge1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xufVxuXG4ucmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5waG90byB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLnJpZ2h0e1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi5tYXJnaW4tMzAge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tYXJnaW4tNTAge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5tYXJnaW4tMTAwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnRvcC01MCB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5ib3R0b20tNTAge1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBob3RvIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbn1cblxuLnNlY29uZC1wYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogIzE3NDI1QTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbn1cblxuLmV4Y2VwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uYjAge1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0Y4OUUzO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ncmV5LWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYzO1xufVxuXG4ubGlua3Mge1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzE3NDI1QVxufVxuXG5hOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _about_service__WEBPACK_IMPORTED_MODULE_1__["AboutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/about/about.service.ts":
/*!****************************************!*\
  !*** ./src/app/about/about.service.ts ***!
  \****************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AboutService {
    constructor(http) {
        this.http = http;
        this._url = "/assets/about/about.json";
    }
    getDescription() {
        return this.http.get(this._url);
    }
}
AboutService.ɵfac = function AboutService_Factory(t) { return new (t || AboutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AboutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AboutService, factory: AboutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _teams_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teams/team-member/team-member.component */ "./src/app/teams/team-member/team-member.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sponsor/sponsor.component */ "./src/app/sponsor/sponsor.component.ts");












const routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
    },
    {
        path: 'about-igem',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
    },
    {
        path: 'our-projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
    },
    {
        path: 'our-teams',
        component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_5__["TeamsComponent"],
    },
    {
        path: 'team-members',
        component: _teams_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_7__["TeamMemberComponent"],
    },
    {
        path: 'contact-us',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"],
    },
    {
        path: 'demo',
        component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["DemoComponent"]
    },
    {
        path: 'sponsor',
        component: _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_9__["SponsorComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'iGEM';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _teams_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teams/team-member/team-member.component */ "./src/app/teams/team-member/team-member.component.ts");
/* harmony import */ var _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/project-detail/project-detail.component */ "./src/app/projects/project-detail/project-detail.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _teams_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./teams/member-detail/member-detail.component */ "./src/app/teams/member-detail/member-detail.component.ts");
/* harmony import */ var _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sponsor/sponsor.component */ "./src/app/sponsor/sponsor.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__["SlickCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _teams_teams_component__WEBPACK_IMPORTED_MODULE_8__["TeamsComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _teams_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_17__["TeamMemberComponent"],
        _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProjectDetailComponent"],
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_20__["DemoComponent"],
        _teams_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_21__["MemberDetailComponent"],
        _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_22__["SponsorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__["SlickCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                    _teams_teams_component__WEBPACK_IMPORTED_MODULE_8__["TeamsComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _teams_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_17__["TeamMemberComponent"],
                    _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProjectDetailComponent"],
                    _demo_demo_component__WEBPACK_IMPORTED_MODULE_20__["DemoComponent"],
                    _teams_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_21__["MemberDetailComponent"],
                    _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_22__["SponsorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__["SlickCarouselModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");








class ContactUsComponent {
    constructor() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            myName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            myEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            mySubject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            myMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 34, vars: 1, consts: [[1, "body"], [1, "come"], [1, "omg"], [1, "example-form", 3, "formGroup"], ["appearance", "standard"], ["formControlName", "myName", "matInput", "", "placeholder", "Ex. Tim Smith"], ["formControlName", "myEmail", "type", "email", "matInput", "", "placeholder", "Ex. pat@example.com "], ["formControlName", "mySubject", "matInput", "", "placeholder", "Ex. Bio Science"], ["formControlName", "myMessage", "matInput", "", "placeholder", "Ex. Funfact: I love coding"], [1, "resume"], ["mat-button", "", 1, "b1"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Interested in our work? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Want to collaborate or contribute? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Let\u2019s talk! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " + Upload attachment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Send email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  margin: 150px 400px;\n  text-align: center;\n}\n\n.come[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: Avenir;\n  font-weight: 400;\n  color: #17425A;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 500px !important;\n  font-size: 25px;\n}\n\n.omg[_ngcontent-%COMP%]::before {\n  background-image: url('home.svg');\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.25;\n}\n\n.omg[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.resume[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 40px;\n  font-weight: 700;\n  color: #19415A;\n}\n\n.b1[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-family: Avenir;\n  padding: 35px 90px !important;\n  font-size: 40px;\n  background-color: #19415A;\n  color: #ffffff;\n  border-radius: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIG1hcmdpbjogMTUwcHggNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29tZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5vbWc6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbWFpbi9ob21lLnN2ZycpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG9wYWNpdHk6IDAuMjU7XG59XG5cbi5vbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlc3VtZSB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzE5NDE1QTtcbn1cblxuLmIxIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgcGFkZGluZzogMzVweCA5MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTQxNUE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.service */ "./src/app/demo/demo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





function DemoComponent_div_5_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DemoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoComponent_div_5_img_7_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.url);
} }
class DemoComponent {
    constructor(DemoService) {
        this.DemoService = DemoService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.getAbout2List();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    getAbout2List() {
        this.subscriptions.push(this.DemoService.getDescription2().subscribe((response) => {
            this.aboutList2 = response;
        }));
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_1__["DemoService"])); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 9, vars: 1, consts: [[1, "second-page"], ["src", "../../assets/about/about.svg", "alt", "about_img", 1, "homept"], [1, "margin-100"], [1, "text"], ["class", "exception", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "b0"], ["src", "../../assets/main/arrow_white.svg", "alt", "img", 1, "arrow"], [1, "exception"], [1, "top-50"], [1, "right"], [1, "description"], [1, "margin-30"], ["class", "photo", "alt", "team_img", 3, "src", 4, "ngIf"], [1, "margin-50"], ["alt", "team_img", 1, "photo", 3, "src"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We envision a circular plastics economy where the cost of recycled plastics is lower than producing virgin plastic. Further, we hope to valorize plastic waste and transform our trash into a critical sustainable resource. Our goal is to construct a highly thermostable and catalytically active enzyme for plastic waste recycling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemoComponent_div_5_Template, 9, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutList2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".homept[_ngcontent-%COMP%] {\n  margin-top: 75px;\n}\n\n.top[_ngcontent-%COMP%] {\n  margin: 150px 100px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 90px;\n  color: #17425A;\n}\n\n.title-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #17425A;\n}\n\nmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 0.35em;\n  line-height: 0.05;\n  background-color: #66E0FA;\n  color: #17425A !important;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: #C8B0E3;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-size: 40px;\n  font-family: Avenir;\n}\n\n.right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-family: Verdana;\n  font-weight: bold;\n  color: #17425A;\n}\n\n.margin-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.margin-50[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.margin-100[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.top-50[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Avenir;\n  color: #17425A;\n  display: inline-block;\n}\n\n.photo[_ngcontent-%COMP%] {\n  width: 230px;\n  float: right;\n  position: relative;\n  margin-right: 100px;\n  margin-bottom: -50px;\n  margin-top: 50px;\n}\n\n.second-page[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-size: 40px;\n  font-family: Avenir;\n}\n\n.exception[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.b0[_ngcontent-%COMP%] {\n  padding: 40px 40px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #7F89E3;\n  margin-left: 100px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 40px;\n  margin-top: 50px;\n  font-family: Avenir;\n  border: none;\n  border-radius: 10px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFDQTtFQUNJLG9CQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksMkJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvZGVtby9kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwdHtcbiAgICBtYXJnaW4tdG9wOiA3NXB4XG59XG4udG9wIHtcbiAgICBtYXJnaW46IDE1MHB4IDEwMHB4O1xufVxuXG4uaW50cm8tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLnRpdGxlLWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG5tYXJrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjM1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuMDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RTBGQTtcbiAgICBjb2xvcjogIzE3NDI1QSAhaW1wb3J0YW50O1xufVxuXG4ucHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhCMEUzO1xufVxuXG4ucGFyYSB7XG4gICAgY29sb3I6ICMxNzQyNUE7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG59XG5cbi5yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG4ubWFyZ2luLTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubWFyZ2luLTUwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubWFyZ2luLTEwMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi50b3AtNTAge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgY29sb3I6ICMxNzQyNUE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGhvdG8ge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNlY29uZC1wYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogIzE3NDI1QTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbn1cblxuLmV4Y2VwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uYjAge1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0Y4OUUzO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo',
                templateUrl: './demo.component.html',
                styleUrls: ['./demo.component.scss']
            }]
    }], function () { return [{ type: _demo_service__WEBPACK_IMPORTED_MODULE_1__["DemoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/demo/demo.service.ts":
/*!**************************************!*\
  !*** ./src/app/demo/demo.service.ts ***!
  \**************************************/
/*! exports provided: DemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoService", function() { return DemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DemoService {
    constructor(http) {
        this.http = http;
        this._url2 = "/assets/about/about2.json";
    }
    getDescription2() {
        return this.http.get(this._url2);
    }
}
DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DemoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DemoService, factory: DemoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: MyErrorStateMatcher, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function FooterComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class FooterComponent {
    constructor() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            myEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 30, vars: 5, consts: [[1, "footer"], [1, "copyright"], [1, "noshow"], [1, "my-form"], ["action", "https://skule.us5.list-manage.com/subscribe/post?u=f43800f031a5e2f4cf5a663b6&id=723c538af6", "method", "post", 1, "example-form", 3, "formGroup"], ["appearance", "standard", 1, "example-full-width"], ["formControlName", "myEmail", "type", "email", "matInput", "", "placeholder", "Ex. pat@example.com ", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], ["type", "image", "value", "SUBSCRIBE", "name", "submit", "src", "../../assets/main/arrow_blue.svg", 1, "arrow"], [1, "myfooter"], ["href", "https://www.behance.net/igemtoronto", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-behance"], ["href", "https://twitter.com/igem_toronto?lang=en", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "fa-2x"], ["href", "https://www.facebook.com/iGEMToronto", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-facebook", "fa-2x"], ["href", "https://www.youtube.com/channel/UCCXZ3suwmZDqIUxVCPb2ZAg/featured", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-youtube", "fa-2x"], ["href", "https://www.instagram.com/igemtoronto/?hl=en", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], ["href", "https://www.linkedin.com/company/igem-toronto/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin", "fa-2x"], ["href", "https://github.com/igemuoft", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-github", "fa-2x"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2021 iGEM Toronto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ALL RIGHTS RESERVED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter email here for newsletters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FooterComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FooterComponent_mat_error_13_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: ["p[_ngcontent-%COMP%] {\n  color: #484F50;\n  font-size: 25px;\n  font-family: Verdana;\n}\n\na[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-left: 0px;\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.my-form[_ngcontent-%COMP%] {\n  margin-left: 45%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 500px !important;\n  font-size: 25px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  margin-left: 10px;\n}\n\n.myfooter[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #484F50;\n  font-size: 30px;\n}\n\n.fa-facebook[_ngcontent-%COMP%]:hover {\n  color: #3B5998 !important;\n  transition: 0.5s;\n}\n\n.fa-twitter[_ngcontent-%COMP%]:hover {\n  color: #55ACEE !important;\n  transition: 0.5s;\n}\n\n.fa-github[_ngcontent-%COMP%]:hover {\n  color: #333 !important;\n  transition: 0.5s;\n}\n\n.fa-youtube[_ngcontent-%COMP%]:hover {\n  color: #FF0000 !important;\n  transition: 0.5s;\n}\n\n.fa-linkedin[_ngcontent-%COMP%]:hover {\n  color: #0e76a8 !important;\n  transition: 0.5s;\n}\n\n.fa-behance[_ngcontent-%COMP%]:hover {\n  color: #1769ff !important;\n  transition: 0.5s;\n}\n\n.fa-instagram[_ngcontent-%COMP%]:hover {\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  transition: 0.5s;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-left: -70px;\n  margin-bottom: -10px;\n}\n\n@media screen and (max-width: 800px) {\n  .myfooter[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .noshow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .mat-form-field[_ngcontent-%COMP%] {\n    width: 200px !important;\n    font-size: 13px;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    height: 10px;\n    margin-left: -70px;\n    margin-bottom: -10px;\n  }\n\n  .my-form[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    position: float;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEdBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksYUFBQTtFQUNOOztFQUNFO0lBQ0ksYUFBQTtFQUVOOztFQUFFO0lBQ0ksZUFBQTtFQUdOOztFQURFO0lBQ0ksdUJBQUE7SUFDQSxlQUFBO0VBSU47O0VBRkU7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtFQUtOOztFQUhFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjogIzQ4NEY1MDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG59XG5cbmEge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubXktZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5teWZvb3RlciAuZmEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzQ4NEY1MDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5mYS1mYWNlYm9vazpob3ZlciB7XG4gICAgY29sb3I6ICMzQjU5OTggIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZmEtdHdpdHRlcjpob3ZlciB7XG4gICAgY29sb3I6ICM1NUFDRUUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZmEtZ2l0aHViOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5mYS15b3V0dWJlOmhvdmVyIHtcbiAgICBjb2xvcjogI0ZGMDAwMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5mYS1saW5rZWRpbjpob3ZlciB7XG4gICAgY29sb3I6ICMwZTc2YTggIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZmEtYmVoYW5jZTpob3ZlciB7XG4gICAgY29sb3I6ICMxNzY5ZmYgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZmEtaW5zdGFncmFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubXlmb290ZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5ub3Nob3d7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5hcnJvdyB7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICB9XG4gICAgLm15LWZvcm0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogZmxvYXRcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");







function MainComponent_div_111_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
} if (rf & 2) {
    const slide_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MainComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_111_img_2_Template, 1, 1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r2);
} }
class TypeWriter {
    constructor(txtElement, words, wait = "2000") {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 200;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 400;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}
class MainComponent {
    constructor() {
        this.slides = [
            { img: "../../assets/Sponsors/biozone.jpeg" },
            { img: "../../assets/Sponsors/CAGEF.png" },
            { img: "../../assets/Sponsors/CSB.png" },
            { img: "../../assets/Sponsors/DSIF.png" },
            { img: "../../assets/Sponsors/EEB.jpeg" },
            { img: "../../assets/Sponsors/genscript.png" },
            { img: "../../assets/Sponsors/HMB.png" },
            { img: "../../assets/Sponsors/IBBME.png" },
            { img: "../../assets/Sponsors/Medicine_By_Design.png" },
            { img: "../../assets/Sponsors/pioreactor.png" },
            { img: "../../assets/Sponsors/shell.png" },
            { img: "../../assets/Sponsors/skule-alumni.png" },
            { img: "../../assets/Sponsors/SKULE.png" },
            { img: "../../assets/Sponsors/SnapGene.png" },
            { img: "../../assets/Sponsors/UC.png" },
            { img: "../../assets/Sponsors/UofT_Eng.png" },
            { img: "../../assets/Sponsors/UofT_Med.png" }
        ];
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "dots": true,
            "infinite": true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 1650
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.addEventListener('DOMContentLoaded', this.init);
    }
    init() {
        const txtElement = document.querySelector('.txt-type');
        const words = ["engineer protein.", "recycle plastics.", "clean earth."];
        const wait = "2000";
        new TypeWriter(txtElement, words, wait);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 133, vars: 2, consts: [[1, "body"], [1, "item", "margin-side"], [1, "break-30"], [1, "igem", "title", "title-color-blue", "title-bold"], [1, "toronto", "title", "title-bold"], ["src", "assets/main/home.svg", 1, "svg1", "margin-right"], [1, "margin-side"], ["mat-button", "", 1, "b0", "view-project"], ["src", "../../assets/main/arrow_white.svg", "alt", "img", 1, "arrow"], ["id", "type", 1, "wall"], ["id", "we"], ["id", "autotype", 1, "txt-type"], [1, "cursor"], [1, "under", "margin-side"], [1, "hashtags"], [1, "inspired"], [1, "intro"], [1, "break-150"], [1, "intro-title", "margin-side"], [1, "intro-title", "title-bold", "margin-side"], [1, "para"], [1, "part2", "margin-side"], [1, "vision"], [1, "greenline"], [1, "para2"], ["src", "../../assets/main/bottle_home.svg", "alt", "bottle", 1, "bottle"], [1, "para3"], [1, "break-70"], [1, "b1"], [1, "b2"], [1, "gold-wining-design"], [1, "purple"], [1, "break-35"], [1, "flex-container"], [1, "year"], ["src", "assets/main/protein_1.svg", 1, "protein"], [1, "l1"], [1, "l2"], ["src", "assets/main/protein_2.svg", 1, "protein"], ["src", "assets/main/protein_3.svg", 1, "protein"], [1, "announce", "margin-side"], [1, "noshow"], ["mat-button", "", "routerLink", "/demo", 1, "b-whatever", "margin-side"], [1, "our-sponsor"], ["autoplay", "", 1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "margin-side", "flex-container"], [1, "thx", "margin-side"], ["mat-button", "", "routerLink", "/sponsor", 1, "b-whatever"], [1, "spon"], [1, "interest"], ["routerLink", "/contact-us", "mat-button", "", 1, "blast"], ["ngxSlickItem", "", 1, "slide"], [1, "box"], ["alt", "hj", "max-height", "200px", "class", "my-pic", 3, "src", 4, "ngIf"], ["alt", "hj", "max-height", "200px", 1, "my-pic", 3, "src"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " iGEM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TORONTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " View project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "#research\u00A0\u00A0\u00A0\u00A0#biotech\u00A0\u00A0\u00A0\u00A0#machineLearning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " *Graphic inspired by orizon.co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Who ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Are We");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " We are a student-led undergraduate synthetic biology research group based in the University of Toronto. Every year we design and execute a research project and compete with teams from across the world at the iGEM Giant Jamboree. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Our vision: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u201CFor the past two years we\u2019ve been designing enzymes for plastic degradation using machine learning. We envision a circular plastics economy where the cost of recycled plastics is lower than producing virgin plastic. Further, we hope to valorize plastic waste and transform our trash into a critical sustainable resource.\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Over 100 talented students from the University of Toronto have already contributed to making our goal possible. In the process, we foster interdisciplinary collaboration and a goal-driven research mindset in our members. With guidance of faculty and PhD students from the University of Toronto, MIT, and Stanford, our three Subteams are dedicated to making this vision a reality. You can support our research by joining us or sponsoring us! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Join the Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sponsor the Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Award-winning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mark", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Initial proof of concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Validation with molecular simulations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Scalable bio-recycling solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "We proudly announce that");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Our 2019/2020 project won gold \uD83C\uDFC5 and was nominated as the best project in the undergraduate manufacturing track. In 2021 we will continue the pursuit towards a highly stable while active enzyme for plastic waste recycling. We will disseminate our results at the Giant Jamboree in Paris and as a preprint for submission to NeurIPS workshops. You can now experiment with our machine learning model on this website and view our interactive protein model. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " View demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ngx-slick-carousel", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, MainComponent_div_111_Template, 3, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Thanks for making our research possible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Sponsor us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Interested in our work? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Let's talk! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".body[_ngcontent-%COMP%] {\n  margin: 120px 0px;\n}\n\n.margin-side[_ngcontent-%COMP%] {\n  margin: 0px 100px;\n}\n\n.title-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #17425A;\n}\n\n.title-color-blue[_ngcontent-%COMP%] {\n  color: #17425A;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 100px;\n  font-weight: bold;\n}\n\n.title-2[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: line-through;\n          text-decoration-line: line-through;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  text-decoration-thickness: 20%;\n  -webkit-text-decoration-color: #66E0FA;\n          text-decoration-color: #66E0FA;\n}\n\nmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 0.35em;\n  line-height: 0.05;\n  background-color: #66E0FA;\n  color: #17425A !important;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: #C8B0E3;\n}\n\n.toronto[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-shadow: -2px 2px 0 #17425A, 2px 2px 0 #17425A, 2px -2px 0 #17425A, -2px -2px 0 #17425A;\n  margin-top: -80px;\n}\n\n.toronto[_ngcontent-%COMP%]::before {\n  content: \"\\a\";\n  white-space: pre;\n}\n\n.svg1[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -200px;\n  width: 720px;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 100px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #7F89E3;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 40px;\n  margin-top: 50px;\n  font-family: Avenir;\n  border: none;\n  border-radius: 10px;\n}\n\n.b0[_ngcontent-%COMP%] {\n  padding: 40px 40px;\n}\n\n.view-project[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.blast[_ngcontent-%COMP%] {\n  background-color: #19415A !important;\n  font-weight: 100;\n  border-radius: 10px;\n  padding: 45px 70px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  transform: scale(2);\n}\n\n#we[_ngcontent-%COMP%] {\n  color: #7F89E3;\n  font-weight: 500;\n}\n\n#type[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.3em;\n  left: 2vw;\n  font-size: 4em;\n  font-weight: 500;\n  font-family: Verdana;\n  color: #17425A;\n  display: inline;\n  z-index: 2;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  border-right: 0.07em solid;\n  animation: caret 1s steps(1) infinite;\n}\n\n@keyframes caret {\n  50% {\n    border-color: transparent;\n  }\n}\n\n.wall[_ngcontent-%COMP%] {\n  font-size: 60px !important;\n  position: absolute;\n  margin-left: -30px;\n  margin-top: 10px;\n}\n\n.hashtags[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: Avenir;\n  color: #49A9C3;\n}\n\n.inspired[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Avenir;\n  color: #277184;\n  margin-left: 200px;\n}\n\n.under[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  position: absolute;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-color: #F1F1F3;\n  margin-top: 300px;\n  color: #17425A;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 100px;\n  color: #17425A;\n}\n\n.our-sponsor[_ngcontent-%COMP%] {\n  background-color: #F1F1F3;\n  width: 100%;\n  color: #17425A;\n}\n\nimg.my-pic[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 300px;\n  margin: auto 80px;\n}\n\n.my-pic[_ngcontent-%COMP%] {\n  margin: 0 40px;\n  max-width: 300px;\n}\n\n.para[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: Avenir;\n  margin: 50px 100px;\n}\n\n.part2[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.vision[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 55px;\n  font-weight: bold;\n}\n\n.greenline[_ngcontent-%COMP%] {\n  border-left: 10px solid #66E0FA;\n  margin-top: 70px;\n}\n\n.para2[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 40px;\n  width: 50%;\n  padding-left: 80px;\n  display: inline-block;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n\n.para3[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 40px;\n  display: block;\n  margin-top: 70px;\n}\n\n.bottle[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -140px;\n  margin-bottom: -100px;\n  width: 35%;\n}\n\nimg.bottle[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 25px;\n}\n\n.b1[_ngcontent-%COMP%], .b2[_ngcontent-%COMP%], b3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: Avenir;\n  padding: 35px 90px !important;\n}\n\n.b-whatever[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  padding: 55px 70px !important;\n  margin-top: -50px;\n}\n\n.b2[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n\n.break-150[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n.break-70[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\n.break-30[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.gold-wining-design[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #17425A;\n}\n\n.svg2[_ngcontent-%COMP%] {\n  margin-left: 280px;\n  margin-top: 100px;\n}\n\n.year[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Avenir;\n  width: 33.3%;\n  text-align: center;\n}\n\n.protein[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.announce[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 60px;\n}\n\n.thx[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 40px;\n  color: #17425A;\n}\n\n.arrow-right[_ngcontent-%COMP%] {\n  border: solid white;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 20px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.arrow1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-right: -48px;\n  margin-left: 20px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-left: 40px;\n}\n\n.sponser[_ngcontent-%COMP%] {\n  width: 22%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-bottom: 25px;\n  margin-right: 15px;\n  position: relative;\n}\n\n.spon[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n}\n\n.interest[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 60px;\n  color: #17425A;\n}\n\n.break-45[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px 0px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.my-pic[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n@media screen and (max-width: 800px) {\n  .toronto[_ngcontent-%COMP%]::before {\n    content: none;\n    white-space: pre;\n  }\n\n  .svg1[_ngcontent-%COMP%] {\n    width: auto;\n    margin-top: 300px;\n  }\n\n  .replace[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .margin-side[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n\n  .intro-title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .vision[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .para[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 10px 15px;\n  }\n\n  .para2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: 0px 0px;\n    width: 100%;\n    padding-left: 0px;\n  }\n\n  .thx[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .para3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 10px;\n  }\n\n  .noshow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .b1[_ngcontent-%COMP%], .b2[_ngcontent-%COMP%] {\n    display: block;\n    padding: 25px 30px !important;\n  }\n\n  .blast[_ngcontent-%COMP%] {\n    font-weight: 100;\n    padding: 25px 35px;\n  }\n\n  .b1[_ngcontent-%COMP%], .b2[_ngcontent-%COMP%] {\n    margin: 10px auto;\n  }\n\n  .break-30[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n\n  .break-150[_ngcontent-%COMP%] {\n    height: 20px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .body[_ngcontent-%COMP%] {\n    margin: 50px 0px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .break-70[_ngcontent-%COMP%] {\n    height: 20px;\n  }\n\n  .top[_ngcontent-%COMP%] {\n    margin: 100px 15px;\n  }\n\n  .view-demo[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 550px;\n    height: 250px;\n    margin-right: 50px;\n    margin-top: 50px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n\n  .year[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 100%;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .b-whatever[_ngcontent-%COMP%] {\n    padding: 25px 30px !important;\n    margin-top: -50px;\n    margin: auto;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .smallscreen[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .green-bg[_ngcontent-%COMP%] {\n    background-color: #66E0FA !important;\n  }\n\n  .mybut[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .wall[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    margin-top: -300px;\n    margin-left: 0;\n  }\n\n  .interest[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .under[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .para2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .greenline[_ngcontent-%COMP%] {\n    border-left: none;\n    margin-top: 10px;\n  }\n\n  .margin-side[_ngcontent-%COMP%] {\n    margin: 0px 25px;\n  }\n\n  .margin-right[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    margin: auto 1 !important;\n    font-size: 20px;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    height: 12px;\n    margin-left: 18px;\n  }\n\n  .b0[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .bottle[_ngcontent-%COMP%] {\n    float: none;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    width: 300px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7VUFBQSxrQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSwyRkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0VBQ0EscUNBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0kseUJBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFQSjs7QUFVQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVlBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFUSjs7QUFZQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTs7O0VBR0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBVEo7O0FBWUE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBWUE7RUFDSSxhQUFBO0FBVEo7O0FBWUE7RUFDSSxZQUFBO0FBVEo7O0FBWUE7RUFDSSxZQUFBO0FBVEo7O0FBWUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFZQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksVUFBQTtBQVRKOztBQVlBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBVEo7O0FBWUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw0RUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVlBO0VBQ0ksbUJBQUE7QUFUSjs7QUFZQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBVEo7O0FBWUE7RUFDSSxZQUFBO0FBVEo7O0FBWUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxnQkFBQTtFQVROOztFQVdFO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0VBUk47O0VBVUU7SUFDSSxhQUFBO0VBUE47O0VBU0U7SUFDSSxjQUFBO0VBTk47O0VBUUU7SUFDSSwwQkFBQTtFQUxOOztFQU9FO0lBQ0ksMEJBQUE7RUFKTjs7RUFNRTtJQUNJLDBCQUFBO0lBQ0EsaUJBQUE7RUFITjs7RUFLRTtJQUNJLDBCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQUZOOztFQUlFO0lBRUksZUFBQTtFQUZOOztFQUlFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBRE47O0VBSUU7SUFDSSxhQUFBO0VBRE47O0VBR0U7O0lBR0EsY0FBQTtJQUNBLDZCQUFBO0VBREY7O0VBSUY7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBREY7O0VBR0Y7SUFDSSxpQkFBQTtFQUFGOztFQUVFO0lBQ0ksa0JBQUE7RUFDTjs7RUFDRTtJQUNJLFlBQUE7RUFFTjs7RUFBRTtJQUNJLDBCQUFBO0VBR047O0VBREU7SUFDSSxnQkFBQTtFQUlOOztFQUZFO0lBQ0ksMEJBQUE7RUFLTjs7RUFIRTtJQUNJLDBCQUFBO0VBTU47O0VBSkU7SUFDSSxZQUFBO0VBT047O0VBTEU7SUFDSSxrQkFBQTtFQVFOOztFQU5FO0lBQ0ksMEJBQUE7RUFTTjs7RUFQRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQVVOOztFQVJFO0lBQ0ksaUJBQUE7RUFXTjs7RUFSRTtJQUNJLGVBQUE7SUFDQSxXQUFBO0VBV047O0VBVEU7SUFDSSxXQUFBO0VBWU47O0VBVkU7SUFDSSw2QkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQWFOOztFQVhFO0lBQ0ksYUFBQTtFQWNOOztFQVpFO0lBQ0ksYUFBQTtFQWVOOztFQWJFO0lBQ0ksY0FBQTtFQWdCTjs7RUFiRTtJQUNJLG9DQUFBO0VBZ0JOOztFQWRFO0lBQ0ksa0JBQUE7RUFpQk47O0VBZkU7SUFDSSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQWtCTjs7RUFoQkU7SUFFSSxlQUFBO0VBa0JOOztFQWZFO0lBQ0ksYUFBQTtFQWtCTjs7RUFoQkU7SUFDSSxXQUFBO0VBbUJOOztFQWpCRTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUFvQk47O0VBbEJFO0lBQ0ksZ0JBQUE7RUFxQk47O0VBbkJFO0lBQ0ksaUJBQUE7RUFzQk47O0VBcEJFO0lBQ0oseUJBQUE7SUFDUSxlQUFBO0VBdUJOOztFQXBCRTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtFQXVCTjs7RUFyQkU7SUFDSSxrQkFBQTtFQXdCTjs7RUF0QkU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7RUF5Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBtYXJnaW46IDEyMHB4IDBweDtcbn1cblxuLm1hcmdpbi1zaWRlIHtcbiAgICBtYXJnaW46IDBweCAxMDBweDtcbn1cblxuLnRpdGxlLWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG4udGl0bGUtY29sb3ItYmx1ZSB7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlLTIge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAyMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjNjZFMEZBO1xufVxuXG5tYXJrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjM1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuMDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RTBGQTtcbiAgICBjb2xvcjogIzE3NDI1QSAhaW1wb3J0YW50O1xufVxuXG4ucHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhCMEUzO1xufVxuXG4udG9yb250byB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDAgIzE3NDI1QSwgMnB4IDJweCAwICMxNzQyNUEsIDJweCAtMnB4IDAgIzE3NDI1QSwgLTJweCAtMnB4IDAgIzE3NDI1QTtcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcbn1cblxuXG5cbi50b3JvbnRvOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxhXCI7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbn1cblxuLnN2ZzEge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XG4gICAgd2lkdGg6IDcyMHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Rjg5RTM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYjAge1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuLnZpZXctcHJvamVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmJsYXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0MTVBICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHggNzBweDtcbn1cblxuLmFycm93IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuXG4jd2Uge1xuICAgIGNvbG9yOiAjN0Y4OUUzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiN0eXBlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjNlbTtcbiAgICBsZWZ0OiAydnc7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBjb2xvcjogIzE3NDI1QTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmN1cnNvciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAuMDdlbSBzb2xpZDtcbiAgICBhbmltYXRpb246IGNhcmV0IDFzIHN0ZXBzKDEpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGNhcmV0IHtcbiAgICA1MCUge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLndhbGwge1xuICAgIGZvbnQtc2l6ZTogNjBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweFxufVxuXG5cblxuLmhhc2h0YWdzIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBjb2xvcjogIzQ5QTlDMztcbn1cblxuLmluc3BpcmVkIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBjb2xvcjogIzI3NzE4NDtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cbi51bmRlciB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuLmludHJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYzO1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG4uaW50cm8tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi5vdXItc3BvbnNvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuaW1nLm15LXBpYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luOiBhdXRvIDgwcHg7XG4gICAgLy8gYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmV5O1xufVxuXG4ubXktcGljIHtcbiAgICBtYXJnaW46IDAgNDBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ucGFyYSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgbWFyZ2luOiA1MHB4IDEwMHB4O1xufVxuXG4ucGFydDIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi52aXNpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyZWVubGluZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzY2RTBGQTtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4ucGFyYTIge1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweFxufVxuXG5cblxuLnBhcmEzIHtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4uYm90dGxlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTE0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMDBweDtcbiAgICB3aWR0aDogMzUlXG59XG5cbmltZy5ib3R0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmIxLFxuLmIyLFxuYjMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIHBhZGRpbmc6IDM1cHggOTBweCAhaW1wb3J0YW50O1xufVxuXG4uYi13aGF0ZXZlciB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBwYWRkaW5nOiA1NXB4IDcwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLmIyIHtcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XG59XG5cbi5icmVhay0xNTAge1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5icmVhay03MCB7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uYnJlYWstMzAge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmdvbGQtd2luaW5nLWRlc2lnbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLnN2ZzIge1xuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnllYXIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIHdpZHRoOiAzMy4zJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm90ZWluIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4uYW5ub3VuY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLnRoeCB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi5hcnJvdy1yaWdodCB7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXJyb3cxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDhweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFycm93IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5zcG9uc2VyIHtcbiAgICB3aWR0aDogMjIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3BvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW50ZXJlc3Qge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLmJyZWFrLTQ1IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogNTBweCAwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5teS1waWMge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAudG9yb250bzo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICB9XG4gICAgLnN2ZzEge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMzAwcHhcbiAgICB9XG4gICAgLnJlcGxhY2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubWFyZ2luLXNpZGUge1xuICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICB9XG4gICAgLmludHJvLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC52aXNpb257XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucGFyYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICB9XG4gICAgLnBhcmEyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4XG4gICAgfVxuICAgIC50aHgge1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLnBhcmEzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5ub3Nob3d7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5iMSxcbi5iMlxuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggIWltcG9ydGFudDtcblxufVxuLmJsYXN0IHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcbn1cbi5iMSwuYjIge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuICAgIC5icmVhay0zMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLmJyZWFrLTE1MHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJvZHkge1xuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6NDBweCAhaW1wb3J0YW50XG4gICAgfVxuICAgIC5saW5rc3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnRcbiAgICB9XG4gICAgLmJyZWFrLTcwIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAudG9wIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAxNXB4O1xuICAgIH1cbiAgICAudmlldy1kZW1ve1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4XG4gICAgfVxuXG4gICAgLnllYXIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucmlnaHR7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuICAgIC5iLXdoYXRldmVyIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5waG90b3tcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cbiAgICAubGlua3tcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cbiAgICAuc21hbGxzY3JlZW57XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5ncmVlbi1iZ3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNjZFMEZBICFpbXBvcnRhbnQ7IFxuICAgIH1cbiAgICAubXlidXR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbiAgICAud2FsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAuaW50ZXJlc3Qge1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcblxuICAgIH1cbiAgICAudW5kZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucGFyYTIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmdyZWVubGluZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAubWFyZ2luLXNpZGUge1xuICAgICAgICBtYXJnaW46IDBweCAyNXB4O1xuICAgIH1cbiAgICAubWFyZ2luLXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG5tYXJnaW46IGF1dG8gMSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgXG4gICAgfVxuICAgIC5hcnJvdyB7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgfVxuICAgIC5iMHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgIH1cbiAgICAuYm90dGxlIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudFxuICAgIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return [a0]; };
function MenuComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.routePath));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.linkName);
} }
class MenuComponent {
    constructor() {
        this.menu = [
            {
                routePath: '/about-igem',
                linkName: 'About iGEMTo'
            },
            {
                routePath: '/our-projects',
                linkName: 'Our Projects'
            },
            {
                routePath: '/our-teams',
                linkName: 'Our Teams'
            },
            {
                routePath: '/contact-us',
                linkName: 'Contact Us'
            }
        ];
    }
    ngOnInit() {
    }
    openMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 11, vars: 1, consts: [[1, "top"], ["id", "myTopnav", 1, "topnav"], [1, "active", 2, "float", "left"], ["routerLink", "/main"], ["src", "assets/main/logo.png", 1, "active"], [1, "icon"], ["mat-icon-button", "", 3, "click"], [1, "bars"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "is-currentRoute", 1, "category-link", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_span_10_Template, 3, 4, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  background-color: #ffffff;\n  width: 100%;\n  z-index: 99;\n}\n\n.bars[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 20px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 40px 30px;\n  text-decoration: none;\n  font-family: Avenir;\n  font-size: 30px;\n  color: #17425A;\n  z-index: 100;\n}\n\na.category-link[_ngcontent-%COMP%]:hover {\n  background-color: #66E0FA;\n  color: #ffffff !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-left: 10px;\n  margin-top: -7px;\n}\n\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 800px) {\n  .active[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 10px;\n  }\n\n  .topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    float: right;\n    display: block !important;\n  }\n\n  .bars[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n    float: none !important;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: left;\n    background-color: #f6f6f6;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7RUFDTjs7RUFDRTtJQUNJLFlBQUE7SUFDQSx5QkFBQTtFQUVOOztFQUFFO0lBQ0ksYUFBQTtFQUdOOztFQURFO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0lBQ0EsTUFBQTtFQUlOOztFQUZFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VBS047O0VBSEU7SUFDSSxnQkFBQTtJQUNBLHlCQUFBO0VBTU47O0VBSkU7SUFDSSx5QkFBQTtFQU9OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmJhcnMge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50b3BuYXYgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuYS5jYXRlZ29yeS1saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZFMEZBO1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuXG4udG9wbmF2IC5pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hY3RpdmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICB9XG4gICAgLnRvcG5hdiAuaWNvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJhcnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2XG4gICAgfVxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/project-detail/project-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/projects/project-detail/project-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProjectDetailComponent_div_0_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.project.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Supervisors:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.project.supervisors);
} }
function ProjectDetailComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Advisors:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.project.advisors, " ");
} }
function ProjectDetailComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.project.undergraduates, " ");
} }
function ProjectDetailComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Presidents: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.project.presidents, " ");
} }
function ProjectDetailComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Wet lab:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.project.wet_lab, " ");
} }
function ProjectDetailComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dry Lab:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.project.dry_lab, " ");
} }
function ProjectDetailComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Policy and Practices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.project.policy_and_practices, " ");
} }
const _c0 = function (a0) { return { "inclinepapa": a0 }; };
function ProjectDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_0_img_6_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDetailComponent_div_0_div_9_Template, 6, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectDetailComponent_div_0_div_10_Template, 6, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mark", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Undergraduates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectDetailComponent_div_0_div_14_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectDetailComponent_div_0_div_15_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectDetailComponent_div_0_div_16_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectDetailComponent_div_0_div_17_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectDetailComponent_div_0_div_18_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.project.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.detail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.supervisors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.advisors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.undergraduates_total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.undergraduates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.presidents);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.wet_lab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.dry_lab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.policy_and_practices);
} }
function ProjectDetailComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "link to wiki");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r10.project.wiki, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_1_a_1_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.project.wiki);
} }
class ProjectDetailComponent {
    constructor(data, ProjectService) {
        this.data = data;
        this.ProjectService = ProjectService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.getProjectInfo(this.data.projectId);
    }
    getProjectInfo(projectId) {
        this.subscriptions.push(this.ProjectService.getDescription().subscribe((response) => {
            if (response) {
                var newArray = response.filter(function (el) {
                    return el.id === projectId;
                });
                this.project = newArray[0];
                console.log(this.project);
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"])); };
ProjectDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 2, vars: 2, consts: [["class", "content", 4, "ngIf"], ["class", "wiki", 4, "ngIf"], [1, "content"], [1, "title"], [1, "margin-20"], [1, "para", 3, "ngClass"], ["alt", "medal", "class", "medal", 3, "src", 4, "ngIf"], [1, "margin-10"], [1, "para"], [4, "ngIf"], [1, "purple"], ["alt", "medal", 1, "medal", 3, "src"], [1, "wiki"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"]], template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectDetailComponent_div_0_Template, 19, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".title[_ngcontent-%COMP%] {\n  color: #19415A;\n  font-family: Avenir;\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #19415A;\n  font-family: Avenir;\n  font-size: 25px;\n}\n\n.margin-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.margin-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 0.35em;\n  line-height: 0.05;\n  background-color: #66E0FA;\n  color: #17425A !important;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: #C8B0E3;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 30px 40px;\n}\n\n.medal[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  margin-right: -40px;\n  width: 250px;\n  margin-top: 40px;\n}\n\n.inclinepapa[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75%;\n}\n\n.wiki[_ngcontent-%COMP%] {\n  color: #19415A;\n  font-family: Avenir;\n  font-size: 28px;\n}\n\n.indent[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QtZGV0YWlsL3Byb2plY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBjb2xvcjogIzE5NDE1QTtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhcmEge1xuICAgIGNvbG9yOiAjMTk0MTVBO1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubWFyZ2luLTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWFyZ2luLTEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5tYXJrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjM1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuMDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RTBGQTtcbiAgICBjb2xvcjogIzE3NDI1QSAhaW1wb3J0YW50O1xufVxuXG4ucHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhCMEUzO1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XG59XG5cbi5tZWRhbCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaW5jbGluZXBhcGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzUlO1xufVxuXG4ud2lraSB7XG4gICAgY29sb3I6ICMxOTQxNUE7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5pbmRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-detail',
                templateUrl: './project-detail.component.html',
                styleUrls: ['./project-detail.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/projects/project-detail/project-detail.component.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");







function ProjectsComponent_div_16_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.projectDetail(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_div_16_img_6_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ProjectsComponent {
    constructor(ProjectsService, dialog) {
        this.ProjectsService = ProjectsService;
        this.dialog = dialog;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.getProjectList();
    }
    projectDetail(id) {
        const dialogRef = this.dialog.open(_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailComponent"], {
            width: '1200px',
            height: '800px',
            data: { projectId: id }
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    getProjectList() {
        this.subscriptions.push(this.ProjectsService.getDescription().subscribe((response) => {
            this.projectList = response;
        }));
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 18, vars: 1, consts: [[1, "top"], [1, "break-30"], [1, "intro-title"], [1, "intro-title", "title-bold"], [1, "purple"], [1, "para"], [1, "view-demo"], ["src", "../../assets/main/arrow_blue.svg", "alt", "img", 1, "arrow"], [1, "flex-container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "detail-a", 3, "click"], [1, "thecontainer"], [1, "right"], [1, "title"], ["class", "photo", "alt", "medal_img", 3, "src", 4, "ngIf"], [1, "description"], ["alt", "medal_img", 1, "photo", 3, "src"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Our");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mark", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Since our establishment in 2007, iGEM Toronto has proudly represented the University of Toronto at the undergraduate level of this research competition. The outstanding commitment and dedication of members from previous years has led to the awarding of 2 Gold Medals, 3 Silver Medals, and 4 Bronze Medals for our projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View 2021 project demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsComponent_div_16_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".top[_ngcontent-%COMP%] {\n  margin: 150px 100px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 100px;\n  color: #17425A;\n}\n\n.title-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #17425A;\n}\n\nmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 0.35em;\n  line-height: 0.05;\n  background-color: #66E0FA;\n  color: #17425A !important;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: #C8B0E3;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-size: 40px;\n  font-family: Avenir;\n}\n\n.view-demo[_ngcontent-%COMP%] {\n  color: #19415A !important;\n  font-size: 50px;\n  font-family: Avenir;\n  font-weight: 800;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 28px;\n  margin-left: 40px;\n  transform: scale(2);\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background-color: #FAFAFC;\n  width: 380px;\n  height: 380px;\n  margin-right: 100px;\n  margin-top: 100px;\n}\n\n.thecontainer[_ngcontent-%COMP%] {\n  margin: 30px 30px;\n}\n\n.photo[_ngcontent-%COMP%] {\n  width: 150px;\n  float: right;\n  position: relative;\n  margin-top: -25px;\n}\n\n.break-120[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-size: 50px;\n  font-weight: 600;\n}\n\n.right[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: #19415A;\n  font-size: 34px;\n  font-family: Avenir;\n}\n\n.detail-a[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  position: relative;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 800px) {\n  .margin-side[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n\n  .intro-title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .para[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .break-30[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    height: 15px !important;\n    margin-left: 20px;\n  }\n\n  .top[_ngcontent-%COMP%] {\n    margin: 100px 15px;\n  }\n\n  .view-demo[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 550px;\n    height: 250px;\n    margin-right: 50px;\n    margin-top: 50px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGNBQUE7RUFDTjs7RUFDRTtJQUNJLDBCQUFBO0VBRU47O0VBQUU7SUFDSSwwQkFBQTtFQUdOOztFQURFO0lBQ0ksbUJBQUE7RUFJTjs7RUFGRTtJQUNJLDBCQUFBO0VBS047O0VBSEU7SUFDSSxpQkFBQTtFQU1OOztFQUpFO0lBQ0ksMEJBQUE7RUFPTjs7RUFMRTtJQUNJLDBCQUFBO0VBUU47O0VBTkU7SUFDSSx1QkFBQTtJQUNKLGlCQUFBO0VBU0Y7O0VBTkU7SUFDSSxrQkFBQTtFQVNOOztFQVBFO0lBQ0ksMEJBQUE7RUFVTjs7RUFSRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQVdOOztFQVRFO0lBQ0ksaUJBQUE7RUFZTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcbiAgICBtYXJnaW46IDE1MHB4IDEwMHB4O1xufVxuXG4uaW50cm8tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgY29sb3I6ICMxNzQyNUE7XG59XG5cbi50aXRsZS1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxubWFyayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMC4zNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjA1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkUwRkE7XG4gICAgY29sb3I6ICMxNzQyNUEgIWltcG9ydGFudDtcbn1cblxuLnB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QjBFMztcbn1cblxuLnBhcmEge1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xufVxuXG4udmlldy1kZW1vIHtcbiAgICBjb2xvcjogIzE5NDE1QSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkM7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGhlaWdodDogMzgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnRoZWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAzMHB4IDMwcHg7XG59XG5cbi5waG90byB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG5cbi5icmVhay0xMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4udGl0bGUge1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogIzE5NDE1QTtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbn1cblxuLmRldGFpbC1hIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5tYXJnaW4tc2lkZSB7XG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIH1cbiAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBhcmEge1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJyZWFrLTMwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6MjBweCAhaW1wb3J0YW50XG4gICAgfVxuICAgIC5saW5rc3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnRcbiAgICB9XG4gICAgLmFycm93e1xuICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAudG9wIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAxNXB4O1xuICAgIH1cbiAgICAudmlldy1kZW1ve1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ProjectsService {
    constructor(http) {
        this.http = http;
        this._url = "/assets/projects/projects.json";
    }
    getDescription() {
        return this.http.get(this._url);
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sponsor/sponsor.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sponsor/sponsor.component.ts ***!
  \**********************************************/
/*! exports provided: SponsorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorComponent", function() { return SponsorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");





class SponsorComponent {
    constructor() { }
    ngOnInit() {
    }
}
SponsorComponent.ɵfac = function SponsorComponent_Factory(t) { return new (t || SponsorComponent)(); };
SponsorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SponsorComponent, selectors: [["app-sponsor"]], decls: 38, vars: 0, consts: [[1, "content"], [1, "break-30"], [1, "intro-title", "margin-side"], [1, "intro-title", "title-bold", "margin-side"], [1, "purple"], [1, "margin-75"], [1, "flex-container"], [1, "the-container"], ["src", "../../assets/sponsor/one.svg", "alt", "first"], [1, "centered-text"], ["src", "../../assets/sponsor/two.svg", "alt", "first"], ["src", "../../assets/sponsor/three.svg", "alt", "first"], [1, "para"], [1, "subtitle"], [1, "margin-35"], [1, "para2"], ["mat-button", "", 1, "blast"], ["mat-button", "", "routerLink", "/contact-us", 1, "blast", "second"]], template: function SponsorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Why");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mark", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sponsor Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Affirm your company\u2019s stance on sustainability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Advertise to an international biotech audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Reach talented students at the University of Toronto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " To realize our dream of highly efficient bio-recycling solutions, we need funding to cover for reagents and plasmids to run wet lab experiments, and supercomputer costs to train our machine learning models. Our project wouldn\u2019t be possible without the generous support of our sponsors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "What we offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "We present our work to an international audience of 6000+ students, industry professionals, and professors from around the world. You will be contributing to a cause that is aligned with the United Nations Sustainable Development Goals and the Government of Canada\u2019s 2030 Agenda for Sustainable Development. We have sponsorship tiers where we will name the top three performing bio-recycling enzymes after your company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Download Sponsorship Package\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Contact Us\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-footer");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  margin: 150px 100px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 90px;\n  color: #17425A;\n}\n\n.title-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #17425A;\n}\n\n.title[_ngcontent-%COMP%] {\n  border-bottom: 8px #66E0FA solid;\n  color: #17425A;\n}\n\nmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 0.35em;\n  line-height: 0.05;\n  background-color: #66E0FA;\n  color: #17425A !important;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: #C8B0E3;\n}\n\n.margin-75[_ngcontent-%COMP%] {\n  margin-bottom: 75px;\n}\n\n.the-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 33.3%;\n}\n\n.centered-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  font-size: 35px;\n  font-family: Avenir;\n  color: #17425A;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.para[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 32px;\n  color: #17425A;\n  font-weight: 500;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 60px;\n  font-weight: bold;\n  color: #17425A;\n  border-bottom: 8px #66E0FA solid !important;\n}\n\n.para2[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 35px;\n  color: #17425A;\n}\n\n.margin-35[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n\n.blast[_ngcontent-%COMP%] {\n  background-color: #19415A !important;\n  border-radius: 10px;\n  padding: 35px 60px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 30px;\n  font-family: Avenir;\n}\n\n.second[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n@media screen and (max-width: 800px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 75px 15px;\n  }\n\n  .intro-title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .para[_ngcontent-%COMP%], .para2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .break-30[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    height: 15px !important;\n    margin-left: 20px;\n  }\n\n  .top[_ngcontent-%COMP%] {\n    margin: 100px 15px;\n  }\n\n  .view-demo[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 550px;\n    height: 250px;\n    margin-right: 50px;\n    margin-top: 50px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n\n  .the-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .centered-text[_ngcontent-%COMP%] {\n    top: 30%;\n    left: 20%;\n    font-size: 15px;\n    font-family: Avenir;\n    color: #17425A;\n  }\n\n  img[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .blast[_ngcontent-%COMP%] {\n    padding: 13px 30px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvci9zcG9uc29yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxpQkFBQTtFQUNOOztFQUNFO0lBQ0ksMEJBQUE7RUFFTjs7RUFBRTtJQUNJLDBCQUFBO0VBR047O0VBREU7SUFDSSxtQkFBQTtFQUlOOztFQUZFO0lBQ0ksMEJBQUE7RUFLTjs7RUFIRTtJQUNJLGlCQUFBO0VBTU47O0VBSkU7SUFDSSwwQkFBQTtFQU9OOztFQUxFO0lBQ0ksMEJBQUE7RUFRTjs7RUFORTtJQUNJLDBCQUFBO0VBU047O0VBUEU7SUFDSSx1QkFBQTtJQUNKLGlCQUFBO0VBVUY7O0VBUEU7SUFDSSxrQkFBQTtFQVVOOztFQVJFO0lBQ0ksMEJBQUE7RUFXTjs7RUFURTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQVlOOztFQVZFO0lBQ0ksaUJBQUE7RUFhTjs7RUFYRTtJQUVJLFdBQUE7RUFhTjs7RUFYRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQWNOOztFQVpFO0lBQ0ksWUFBQTtFQWVOOztFQWJFO0lBQ0ksZUFBQTtFQWdCTjs7RUFkRTtJQUVJLGtCQUFBO0lBQ0EsbUJBQUE7RUFnQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3Ivc3BvbnNvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBtYXJnaW46IDE1MHB4IDEwMHB4O1xufVxuXG4uaW50cm8tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLnRpdGxlLWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG4udGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IDhweCAjNjZFMEZBIHNvbGlkO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG5tYXJrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjM1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuMDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RTBGQTtcbiAgICBjb2xvcjogIzE3NDI1QSAhaW1wb3J0YW50O1xufVxuXG4ucHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhCMEUzO1xufVxuXG4ubWFyZ2luLTc1IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuXG4udGhlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMy4zJTtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBjb2xvcjogIzE3NDI1QVxufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGFyYSB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICMxNzQyNUE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMxNzQyNUE7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4ICM2NkUwRkEgc29saWQgIWltcG9ydGFudDtcbn1cblxuLnBhcmEyIHtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLm1hcmdpbi0zNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLmJsYXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0MTVBICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAzNXB4IDYwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbn1cblxuLnNlY29uZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbjogNzVweCAxNXB4O1xuICAgIH1cbiAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBhcmEsLnBhcmEyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5icmVhay0zMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOjMwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICAuc3VidGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50XG4gICAgfVxuICAgIC5saW5rc3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnRcbiAgICB9XG4gICAgLmFycm93e1xuICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAudG9wIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAxNXB4O1xuICAgIH1cbiAgICAudmlldy1kZW1ve1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4XG4gICAgfVxuICAgIC50aGUtY29udGFpbmVyIHtcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmNlbnRlcmVkLXRleHQge1xuICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgbGVmdDogMjAlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgICAgIGNvbG9yOiAjMTc0MjVBXG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiA3MHB4XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgZm9udC1zaXplOiAxNXB4XG4gICAgfVxuICAgIC5ibGFzdCB7XG5cbiAgICAgICAgcGFkZGluZzogMTNweCAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SponsorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sponsor',
                templateUrl: './sponsor.component.html',
                styleUrls: ['./sponsor.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/teams/member-detail/member-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/teams/member-detail/member-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _member_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-detail.service */ "./src/app/teams/member-detail/member-detail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MemberDetailComponent_div_0_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.member.social_media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MemberDetailComponent_div_0_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.member.social_media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MemberDetailComponent_div_0_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.member.social_media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MemberDetailComponent_div_0_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.member.social_media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MemberDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Position: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Program: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fun fact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MemberDetailComponent_div_0_a_23_Template, 2, 1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MemberDetailComponent_div_0_a_24_Template, 2, 1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MemberDetailComponent_div_0_a_25_Template, 2, 1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MemberDetailComponent_div_0_a_26_Template, 2, 1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.member.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.program);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.fun_fact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasBehance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasLinkedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasGithub);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasInstagram);
} }
class MemberDetailComponent {
    constructor(data, MemberDetailService) {
        this.data = data;
        this.MemberDetailService = MemberDetailService;
        this.subscriptions = [];
        this.hasGithub = false;
        this.hasInstagram = false;
        this.hasLinkedIn = false;
        this.hasBehance = false;
    }
    ngOnInit() {
        this.getMemberInfo(this.data.deId, this.data.memId);
    }
    getMemberInfo(departmentId, memberId) {
        this.subscriptions.push(this.MemberDetailService.getSpecificMember(departmentId).subscribe((response) => {
            if (response) {
                var newArray = response.filter(function (el) {
                    return el.id === memberId;
                });
                this.member = newArray[0];
                console.log(this.member);
                if (this.member.social_media.filter(function (str) {
                    return str.contains("linkedin");
                }))
                    if (this.member.social_media.includes("github")) {
                        this.hasGithub = true;
                    }
                if (this.member.social_media.includes("linkedin")) {
                    console.log("yah!");
                    this.hasLinkedIn = true;
                }
                if (this.member.social_media.includes("instagram")) {
                    this.hasInstagram = true;
                }
                if (this.member.social_media.includes("behance")) {
                    this.hasBehance = true;
                }
            }
        }));
    }
}
MemberDetailComponent.ɵfac = function MemberDetailComponent_Factory(t) { return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_member_detail_service__WEBPACK_IMPORTED_MODULE_2__["MemberDetailService"])); };
MemberDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberDetailComponent, selectors: [["app-member-detail"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text"], ["alt", "img", 1, "profile", 3, "src"], [1, "bold"], [1, "light"], [1, "social-media"], [3, "href", 4, "ngIf"], [3, "href"], ["src", "../../assets/social-media/be.svg", "alt", "be"], ["src", "../../assets/social-media/linkedin.svg", "alt", "be"], ["src", "../../assets/social-media/github.png", "alt", "github"], ["src", "../../assets/social-media/ins.svg", "alt", "github"]], template: function MemberDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberDetailComponent_div_0_Template, 27, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.member);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".bold[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 30px;\n  font-weight: bold;\n  color: #1D475E;\n}\n\n.light[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 30px;\n  color: #1D475E;\n}\n\n.profile[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 50%;\n  border-radius: 10px;\n  object-fit: cover;\n  float: left;\n  margin-right: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvbWVtYmVyLWRldGFpbC9tZW1iZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZCB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMxRDQ3NUVcbn1cblxuLmxpZ2h0IHtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzFENDc1RVxufVxuXG4ucHJvZmlsZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRleHQge1xuICAgIG1hcmdpbi10b3A6IDclO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-detail',
                templateUrl: './member-detail.component.html',
                styleUrls: ['./member-detail.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _member_detail_service__WEBPACK_IMPORTED_MODULE_2__["MemberDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teams/member-detail/member-detail.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/teams/member-detail/member-detail.service.ts ***!
  \**************************************************************/
/*! exports provided: MemberDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailService", function() { return MemberDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MemberDetailService {
    constructor(http) {
        this.http = http;
        this._url1 = "/assets/teams/wet_lab_member.json";
        this._url2 = "/assets/teams/dry_lab_member.json";
        this._url3 = "/assets/teams/business_and_ethics_member.json";
        this._url4 = "/assets/teams/web_and_graphics_member.json";
        this._url5 = "/assets/teams/executives_member.json";
    }
    getSpecificMember(departmentId) {
        let url = "";
        if (departmentId === 1) {
            url = "/assets/teams/wet_lab_member.json";
        }
        if (departmentId === 2) {
            url = "/assets/teams/dry_lab_member.json";
        }
        if (departmentId === 3) {
            url = "/assets/teams/business_and_ethics_member.json";
        }
        if (departmentId === 4) {
            url = "/assets/teams/web_and_graphics_member.json";
        }
        if (departmentId === 5) {
            url = "/assets/teams/executives_member.json";
        }
        return this.http.get(url);
    }
}
MemberDetailService.ɵfac = function MemberDetailService_Factory(t) { return new (t || MemberDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MemberDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberDetailService, factory: MemberDetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teams/team-member/team-member.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teams/team-member/team-member.component.ts ***!
  \************************************************************/
/*! exports provided: TeamMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberComponent", function() { return TeamMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-detail/member-detail.component */ "./src/app/teams/member-detail/member-detail.component.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TeamMemberComponent_div_5_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMemberComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamMemberComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getMemberDetail(1, item_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamMemberComponent_div_5_img_2_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
function TeamMemberComponent_div_10_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMemberComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamMemberComponent_div_10_img_1_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.name);
} }
function TeamMemberComponent_div_15_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMemberComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamMemberComponent_div_15_img_1_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);
} }
function TeamMemberComponent_div_20_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMemberComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamMemberComponent_div_20_img_1_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.name);
} }
function TeamMemberComponent_div_25_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r19.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMemberComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamMemberComponent_div_25_img_1_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.name);
} }
class TeamMemberComponent {
    constructor(TeamService, dialog) {
        this.TeamService = TeamService;
        this.dialog = dialog;
        this.subscriptions = [];
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    ngOnInit() {
        this.getWebLab();
        this.getDryLab();
        this.getBusinessandEthics();
        this.getWebandGraphics();
        this.getExecutivesList();
    }
    getWebLab() {
        this.subscriptions.push(this.TeamService.getWebLab().subscribe((response) => {
            this.wetLabList = response;
        }));
    }
    getDryLab() {
        this.subscriptions.push(this.TeamService.getDryLab().subscribe((response) => {
            this.drylabList = response;
        }));
    }
    getBusinessandEthics() {
        this.subscriptions.push(this.TeamService.getBusinessandEthics().subscribe((response) => {
            this.businessAndEthicsList = response;
        }));
    }
    getWebandGraphics() {
        this.subscriptions.push(this.TeamService.getWebandGraphics().subscribe((response) => {
            this.webAndGraphicsList = response;
        }));
    }
    getExecutivesList() {
        this.subscriptions.push(this.TeamService.getExecutives().subscribe((response) => {
            this.executivesList = response;
        }));
    }
    getMemberDetail(departmentId, memberId) {
        const dialogRef = this.dialog.open(_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_1__["MemberDetailComponent"], {
            width: '1000px',
            height: '600px',
            data: { deId: departmentId, memId: memberId }
        });
    }
}
TeamMemberComponent.ɵfac = function TeamMemberComponent_Factory(t) { return new (t || TeamMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
TeamMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamMemberComponent, selectors: [["app-team-member"]], decls: 26, vars: 5, consts: [[1, "body"], ["id", "wet-lab", 1, "title"], [1, "break-80"], [1, "flex-container"], ["class", "member", 4, "ngFor", "ngForOf"], ["id", "dry-lab", 1, "title"], ["id", "business-and-ethics", 1, "title"], ["id", "web-and-graphics", 1, "title"], ["id", "executives", 1, "title"], [1, "member"], [3, "click"], ["class", "photo", "alt", "team_img", 3, "src", 4, "ngIf"], [1, "name"], ["alt", "team_img", 1, "photo", 3, "src"]], template: function TeamMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wet Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamMemberComponent_div_5_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dry Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamMemberComponent_div_10_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Business and Ethics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamMemberComponent_div_15_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Web and Graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamMemberComponent_div_20_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Executives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TeamMemberComponent_div_25_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wetLabList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drylabList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.businessAndEthicsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.webAndGraphicsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.executivesList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".body[_ngcontent-%COMP%] {\n  margin: 180px 150px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  font-size: 100px;\n  color: #17425A;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-family: Avenir;\n  font-size: 40px;\n  color: #17425A;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.photo[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 60%;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.member[_ngcontent-%COMP%] {\n  width: 25%;\n  text-align: center;\n  margin-bottom: -70px;\n}\n\n.break-80[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n\n@media screen and (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    margin: 50px 15px;\n  }\n\n  .intro-title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .para[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .break-30[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .contents[_ngcontent-%COMP%] {\n    margin: 50px 0px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .top[_ngcontent-%COMP%] {\n    margin: 100px 15px;\n  }\n\n  .view-demo[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 550px;\n    height: 250px;\n    margin-right: 50px;\n    margin-top: 50px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .smallscreen[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  button.smallscreen[_ngcontent-%COMP%] {\n    background-color: #7F89E3;\n    font-size: 20px;\n    padding: 20px 90px;\n    margin: auto;\n  }\n\n  .green-bg[_ngcontent-%COMP%] {\n    background-color: #66E0FA !important;\n  }\n\n  .mybut[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .member[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbS1tZW1iZXIvdGVhbS1tZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFFSTtJQUNJLGlCQUFBO0VBRE47O0VBR0U7SUFDSSwwQkFBQTtFQUFOOztFQUVFO0lBQ0ksMEJBQUE7RUFDTjs7RUFDRTtJQUNJLG1CQUFBO0VBRU47O0VBQUU7SUFDSSwwQkFBQTtFQUdOOztFQURFO0lBQ0ksZ0JBQUE7RUFJTjs7RUFGRTtJQUNJLDBCQUFBO0VBS047O0VBSEU7SUFDSSwwQkFBQTtFQU1OOztFQUhFO0lBQ0ksa0JBQUE7RUFNTjs7RUFKRTtJQUNJLDBCQUFBO0VBT047O0VBTEU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUFRTjs7RUFORTtJQUNJLGlCQUFBO0VBU047O0VBTkU7SUFDSSxXQUFBO0VBU047O0VBUEU7SUFDSSxhQUFBO0VBVU47O0VBUkU7SUFDSSxjQUFBO0VBV047O0VBVEU7SUFDSSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUFZTjs7RUFWRTtJQUNJLG9DQUFBO0VBYU47O0VBWEU7SUFDSSxrQkFBQTtFQWNOOztFQVpFO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBZU47O0VBYkU7SUFDSSwwQkFBQTtJQUNBLFlBQUE7RUFnQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW0tbWVtYmVyL3RlYW0tbWVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIG1hcmdpbjogMTgwcHggMTUwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjogIzE3NDI1QTtcbn1cblxuLm5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG59XG5cbi5waG90byB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubWVtYmVyIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtNzBweFxufVxuXG4uYnJlYWstODAge1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgXG4gICAgLmJvZHkge1xuICAgICAgICBtYXJnaW46IDUwcHggMTVweDtcbiAgICB9XG4gICAgLmludHJvLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wYXJhIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5icmVhay0zMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGVudHMge1xuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTozMHB4ICFpbXBvcnRhbnRcbiAgICB9XG4gICAgLmxpbmtze1xuICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudFxuICAgIH1cblxuICAgIC50b3Age1xuICAgICAgICBtYXJnaW46IDEwMHB4IDE1cHg7XG4gICAgfVxuICAgIC52aWV3LWRlbW97XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50XG4gICAgfVxuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHhcbiAgICB9XG5cbiAgICAucmlnaHR7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuICAgIC5saW5re1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuICAgIC5zbWFsbHNjcmVlbntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIGJ1dHRvbi5zbWFsbHNjcmVlbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojN0Y4OUUzO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggOTBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgfVxuICAgIC5ncmVlbi1iZ3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNjZFMEZBICFpbXBvcnRhbnQ7IFxuICAgIH1cbiAgICAubXlidXR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbiAgICAubWVtYmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-member',
                templateUrl: './team-member.component.html',
                styleUrls: ['./team-member.component.scss']
            }]
    }], function () { return [{ type: _team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teams/team.service.ts":
/*!***************************************!*\
  !*** ./src/app/teams/team.service.ts ***!
  \***************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class TeamService {
    constructor(http) {
        this.http = http;
        this._url = "/assets/teams/team.json";
        this._url1 = "/assets/teams/wet_lab_member.json";
        this._url2 = "/assets/teams/dry_lab_member.json";
        this._url3 = "/assets/teams/business_and_ethics_member.json";
        this._url4 = "/assets/teams/web_and_graphics_member.json";
        this._url5 = "/assets/teams/executives_member.json";
    }
    getDescription() {
        return this.http.get(this._url);
    }
    getWebLab() {
        return this.http.get(this._url1);
    }
    getDryLab() {
        return this.http.get(this._url2);
    }
    getBusinessandEthics() {
        return this.http.get(this._url3);
    }
    getWebandGraphics() {
        return this.http.get(this._url4);
    }
    getExecutives() {
        return this.http.get(this._url5);
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");






function TeamsComponent_div_1_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "grey-bg": a0 }; };
const _c1 = function (a0) { return { "green-bg": a0 }; };
function TeamsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " See members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "See members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TeamsComponent_div_1_img_22_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, item_r1.id % 2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.newLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.newLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, item_r1.id % 2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1);
} }
class TeamsComponent {
    constructor(TeamService) {
        this.TeamService = TeamService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.getTeamList();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    getTeamList() {
        this.subscriptions.push(this.TeamService.getDescription().subscribe((response) => {
            this.teamList = response.map(eachItem => {
                eachItem.newLink = decodeURI(eachItem.routePath);
                return eachItem;
            });
        }));
    }
}
TeamsComponent.ɵfac = function TeamsComponent_Factory(t) { return new (t || TeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"])); };
TeamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamsComponent, selectors: [["app-teams"]], decls: 7, vars: 1, consts: [[1, "contents"], [4, "ngFor", "ngForOf"], [1, "margin-side"], ["href", "https://forms.gle/yeUTSEArZsoUCxgw7"], ["mat-button", "", 1, "blast"], [3, "ngClass"], [1, "each"], [1, "right"], [1, "title"], [1, "margin-30"], [1, "description"], [1, "link", 3, "href"], ["src", "../../assets/main/arrow_blue.svg", "alt", "img", 1, "arrow"], [1, "mybut"], [3, "href"], [1, "smallscreen", 3, "ngClass"], ["class", "photo", "alt", "team_img", 3, "src", 4, "ngIf"], [1, "down"], ["alt", "team_img", 1, "photo", 3, "src"]], template: function TeamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamsComponent_div_1_Template, 24, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Join our team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".contents[_ngcontent-%COMP%] {\n  margin: 180px 0px;\n}\n\n.margin-side[_ngcontent-%COMP%] {\n  margin: 0 100px;\n}\n\n.right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 80px;\n  font-family: Verdana;\n  font-weight: bold;\n  color: #17425A;\n}\n\n.margin-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Avenir;\n  color: #17425A;\n  display: inline-block;\n}\n\n.photo[_ngcontent-%COMP%] {\n  width: 220px;\n  float: right;\n  position: relative;\n  margin-right: 150px;\n  margin-top: -300px;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #17425A;\n  font-weight: 500;\n  font-family: Avenir;\n  font-size: 40px;\n  text-decoration: none;\n}\n\na.link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.margin-100[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-left: 30px;\n  margin-bottom: -10px;\n}\n\n.grey-bg[_ngcontent-%COMP%] {\n  background-color: #FAFAFC;\n}\n\n.each[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.down[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.blast[_ngcontent-%COMP%] {\n  background-color: #19415A !important;\n  font-weight: 100;\n  border-radius: 10px;\n  padding: 45px 70px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 40px;\n  font-family: Avenir;\n  border: none;\n  margin-top: 50px;\n}\n\n.smallscreen[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 800px) {\n  .margin-side[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n\n  .intro-title[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .para[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .break-30[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .contents[_ngcontent-%COMP%] {\n    margin: 50px 0px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .top[_ngcontent-%COMP%] {\n    margin: 100px 15px;\n  }\n\n  .view-demo[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 550px;\n    height: 250px;\n    margin-right: 50px;\n    margin-top: 50px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .smallscreen[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  button.smallscreen[_ngcontent-%COMP%] {\n    background-color: #7F89E3;\n    font-size: 20px;\n    padding: 20px 90px;\n    margin: auto;\n  }\n\n  .green-bg[_ngcontent-%COMP%] {\n    background-color: #66E0FA !important;\n  }\n\n  .mybut[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFFSTtJQUNJLGNBQUE7RUFBTjs7RUFFRTtJQUNJLDBCQUFBO0VBQ047O0VBQ0U7SUFDSSwwQkFBQTtFQUVOOztFQUFFO0lBQ0ksbUJBQUE7RUFHTjs7RUFERTtJQUNJLDBCQUFBO0VBSU47O0VBRkU7SUFDSSxnQkFBQTtFQUtOOztFQUhFO0lBQ0ksMEJBQUE7RUFNTjs7RUFKRTtJQUNJLDBCQUFBO0VBT047O0VBSkU7SUFDSSxrQkFBQTtFQU9OOztFQUxFO0lBQ0ksMEJBQUE7RUFRTjs7RUFORTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQVNOOztFQVBFO0lBQ0ksaUJBQUE7RUFVTjs7RUFQRTtJQUNJLFdBQUE7RUFVTjs7RUFSRTtJQUNJLGFBQUE7RUFXTjs7RUFURTtJQUNJLGFBQUE7RUFZTjs7RUFWRTtJQUNJLGNBQUE7RUFhTjs7RUFYRTtJQUNJLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQWNOOztFQVpFO0lBQ0ksb0NBQUE7RUFlTjs7RUFiRTtJQUNJLGtCQUFBO0VBZ0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy90ZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50cyB7XG4gICAgbWFyZ2luOiAxODBweCAwcHg7XG59XG5cbi5tYXJnaW4tc2lkZSB7XG4gICAgbWFyZ2luOiAwIDEwMHB4XG59XG5cbi5yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xufVxuXG4ubWFyZ2luLTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBob3RvIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6IC0zMDBweDtcbn1cblxuLmxpbmsge1xuICAgIGNvbG9yOiAjMTc0MjVBO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hLmxpbms6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcmdpbi0xMDAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uYXJyb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmdyZXktYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkM7XG59XG5cbi5lYWNoIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmRvd24ge1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uYmxhc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTQxNUEgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNDVweCA3MHB4O1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zbWFsbHNjcmVlbntcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgXG4gICAgLm1hcmdpbi1zaWRlIHtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgfVxuICAgIC5pbnRyby10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucGFyYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnJlYWstMzAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRlbnRzIHtcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6MzBweCAhaW1wb3J0YW50XG4gICAgfVxuICAgIC5saW5rc3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnRcbiAgICB9XG5cbiAgICAudG9wIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAxNXB4O1xuICAgIH1cbiAgICAudmlldy1kZW1ve1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4XG4gICAgfVxuXG4gICAgLnJpZ2h0e1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cbiAgICAucGhvdG97XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG4gICAgLmxpbmt7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG4gICAgLnNtYWxsc2NyZWVue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgYnV0dG9uLnNtYWxsc2NyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3Rjg5RTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweCA5MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5ncmVlbi1iZ3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNjZFMEZBICFpbXBvcnRhbnQ7IFxuICAgIH1cbiAgICAubXlidXR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teams',
                templateUrl: './teams.component.html',
                styleUrls: ['./teams.component.scss']
            }]
    }], function () { return [{ type: _team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yvonnesun/Documents/GitHub/iGEM/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map