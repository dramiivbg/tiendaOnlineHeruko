(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-home-home-module"],{

/***/ "3znK":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/home/home-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "wpF5");





const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TWGy":
/*!******************************************************!*\
  !*** ./src/app/components/pages/home/home.module.ts ***!
  \******************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "3znK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "wpF5");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material.module */ "vvyD");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wpF5":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../posts/product.service */ "uJAp");
/* harmony import */ var _shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/carrito.service */ "Dj/G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_coment_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/coment-product.service */ "Y3Hb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


















function HomeComponent_div_2_mat_card_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_mat_card_1_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addCarrito(product_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "a\u00F1adir al carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_mat_card_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_mat_card_1_div_12_div_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.productoComent(product_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_mat_card_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_2_mat_card_1_div_12_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r11 = ctx.$implicit;
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.tipo_producto == producto_r11);
} }
function HomeComponent_div_2_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_2_mat_card_1_div_11_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_2_mat_card_1_div_12_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.tipo_producto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.valor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.productos);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_2_mat_card_1_Template, 16, 6, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const products_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", products_r3);
} }
function HomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(postSvc, carritoSvc, authSvc, router, firestore, comentSvc) {
        this.postSvc = postSvc;
        this.carritoSvc = carritoSvc;
        this.authSvc = authSvc;
        this.router = router;
        this.firestore = firestore;
        this.comentSvc = comentSvc;
        this.admin = false;
        this.contador = 0;
        this.vector = [];
        this.selected = '';
        this.posi = 0;
        this.porcentajeC = 0;
        this.product = [];
        this.pedidoCalificado = 0;
        this.calificaciones = [];
        this.productos = [];
        this.calificacionGlobal = 0;
        this.id = '';
        this.ifcoment = false;
        this.products$ = this.postSvc.getAllPosts();
        this.users$ = firestore.getUsers();
        this.pedidos$ = firestore.getPedidosAll();
    }
    ngOnInit() {
        this.userActive();
        this.postSvc.getAllPosts().subscribe(res => console.log('POSTS', res));
        this.users$.subscribe(res => console.log('users->', res));
        this.pedidos$.subscribe(res => console.log('pedidos->', res));
        this.contador = 0;
        this.comprobarUserComment();
    }
    addCarrito(product) {
        this.carritoSvc.addProduct(product);
    }
    comprobarUserComment() {
        this.productos = [];
        this.vector = [];
        this.authSvc.afAuth.user.subscribe(user => {
            if (user) {
                const path = `clientes/${user.uid}/pedidos`;
                this.product$ = this.firestore.getPedidos(path);
                this.product$.subscribe(pedidos => {
                    for (let index = 0; index < pedidos.length; index++) {
                        for (let index1 = 0; index1 < pedidos[index].productos.length; index1++) {
                            const nombre = pedidos[index].productos[index1].producto.tipo_producto;
                            this.vector.push(nombre);
                        }
                    }
                    for (let index = 0; index < this.vector.length; index++) {
                        for (let index1 = 1 + index; index1 <= this.vector.length; index1++) {
                            if (this.vector[index] == this.vector[index1]) {
                                this.vector[index1] = '';
                            }
                        }
                    }
                    this.vector.find(producto => {
                        if (producto != '') {
                            this.productos.push(producto);
                        }
                    });
                });
            }
        });
    }
    productoComent(producto) {
        this.comentSvc.setProduct(producto);
    }
    userActive() {
        this.authSvc.afAuth.user.subscribe(res1 => {
            if (res1 == null) {
                this.admin = false;
                return;
            }
            else {
                this.comprobarUser(res1.uid);
            }
        });
    }
    comprobarUser(id) {
        const path = 'clientes';
        this.firestore.getDoc(path, id).subscribe(user => {
            if (user) {
                this.admin = true;
            }
            else {
                this.admin = false;
            }
        });
    }
    comprobarDomici(id) {
        const path = 'domiciliarios';
        this.firestore.getDoc(path, id).subscribe(domici => {
            if (id == domici.id) {
                this.admin = true;
            }
            else {
                this.admin = false;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_coment_product_service__WEBPACK_IMPORTED_MODULE_6__["ComentProductService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 4, consts: [[1, "ancho"], ["class", "container", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "container"], ["class", "post-card", 4, "ngFor", "ngForOf"], [1, "post-card"], [1, "dimension"], ["matCardImage", "", 3, "src"], [2, "background", "cornsilk"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn-flotante", 3, "click"], ["routerLink", "/comentarios", 1, "material-icons", 3, "click"], [1, "container-spinner"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.products$))("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".ancho[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: 24% 24% 24% 24%;\n  grid-column-gap: 10px;\n  grid-row-gap: 15px;\n  justify-content: center;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dimension[_ngcontent-%COMP%] {\n  height: 40%;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fff;\n  text-decoration: none;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .post-card[_ngcontent-%COMP%] {\n  background: black;\n  color: #fff;\n  border-radius: 5px;\n  padding: 20px;\n  font-size: 150%;\n  height: 82%;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .post-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .post-card[_ngcontent-%COMP%]   p.content[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .post-card[_ngcontent-%COMP%]   .btn-flotante[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #ffffff;\n  \n  letter-spacing: 2px;\n  \n  background-color: #E91E63;\n  \n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .post-card[_ngcontent-%COMP%]   .btn-flotante[_ngcontent-%COMP%]:hover {\n  background-color: #2c2fa5;\n  \n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);\n  transform: translateY(-7px);\n}\n@media only screen and (max-width: 600px) {\n  .ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .post-card[_ngcontent-%COMP%]   .btn-flotante[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 20px;\n    bottom: 20px;\n  }\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #fff;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.ancho[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNBO0VBRUksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUtBO0VBRUksV0FBQTtBQUpKO0FBUUk7RUFFSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBUFI7QUFZQTtFQUVJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWEo7QUFjSTtFQUVJLGFBQUE7QUFiUjtBQWlCSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWZSO0FBbUJBO0VBRUksZUFBQTtFQUdBLGNBQUE7RUFBZ0Isb0JBQUE7RUFFaEIsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIseUJBQUE7RUFBMkIsbUJBQUE7RUFJM0IsMkNBQUE7QUFyQko7QUF3QkU7RUFDRSx5QkFBQTtFQUEyQixzQ0FBQTtFQUMzQiw0Q0FBQTtFQUNBLDJCQUFBO0FBckJKO0FBdUJFO0VBQ0c7SUFDRyxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBckJOO0FBQ0Y7QUF5QkE7RUFFSSxlQUFBO0VBRUEsc0JBQUE7QUF6Qko7QUFpQ0E7RUFFSSxrQkFBQTtBQWhDSjtBQXFDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbkNKO0FBc0NFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBcENKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5jaG97XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLmNvbnRhaW5lcntcblxuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0JSAyNCUgMjQlIDI0JTtcblxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblxuXG4uZGltZW5zaW9ue1xuXG4gICAgaGVpZ2h0OiA0MCU7XG5cbn1cblxuICAgIGF7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICBcblxuLnBvc3QtY2FyZHtcblxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBoZWlnaHQ6IDgyJTtcblxuXG4gICAgaW1ne1xuXG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICB9XG5cbiAgICBwLmNvbnRlbnR7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuXG4uYnRuLWZsb3RhbnRlIHtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cbiAgIFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7IC8qIEVzcGFjaW8gZW50cmUgbGV0cmFzICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5MUU2MzsgLyogQ29sb3IgZGUgZm9uZG8gKi9cblxuIFxuICBcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBcbiAgfVxuICAuYnRuLWZsb3RhbnRlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZmE1OyAvKiBDb2xvciBkZSBmb25kbyBhbCBwYXNhciBlbCBjdXJzb3IgKi9cbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAuYnRuLWZsb3RhbnRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgXG4gICAgfVxuICB9XG59ICBcbnNwYW57XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5cblxuXG5cblxucHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbn1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _posts_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _app_shared_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }, { type: _app_shared_services_coment_product_service__WEBPACK_IMPORTED_MODULE_6__["ComentProductService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pages-home-home-module.js.map