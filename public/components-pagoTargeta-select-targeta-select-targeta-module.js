(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pagoTargeta-select-targeta-select-targeta-module"],{

/***/ "8TCR":
/*!************************************************!*\
  !*** ./src/app/servicioPago/stripe.service.ts ***!
  \************************************************/
/*! exports provided: stripeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripeService", function() { return stripeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class stripeService {
    constructor(http) {
        this.http = http;
    }
    charge(cantidad, tokenId) {
        const api = "http://localhost:3000/stripe_checkout";
        return this.http.post(api, {
            stripeToken: tokenId,
            cantidad: cantidad,
        }).toPromise();
    }
}
stripeService.ɵfac = function stripeService_Factory(t) { return new (t || stripeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
stripeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: stripeService, factory: stripeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](stripeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ML2w":
/*!****************************************************************************************!*\
  !*** ./src/app/components/pagoTargeta/select-targeta/select-targeta-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SelectTargetaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTargetaRoutingModule", function() { return SelectTargetaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_guards_guard_a_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/guards/guard-a.guard */ "mJJ/");
/* harmony import */ var _select_targeta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-targeta.component */ "TdaX");






const routes = [{ path: '', component: _select_targeta_component__WEBPACK_IMPORTED_MODULE_3__["SelectTargetaComponent"],
        canActivateChild: [_app_guards_guard_a_guard__WEBPACK_IMPORTED_MODULE_2__["GuardAGuard"]] }];
class SelectTargetaRoutingModule {
}
SelectTargetaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SelectTargetaRoutingModule });
SelectTargetaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SelectTargetaRoutingModule_Factory(t) { return new (t || SelectTargetaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectTargetaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectTargetaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TdaX":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pagoTargeta/select-targeta/select-targeta.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectTargetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTargetaComponent", function() { return SelectTargetaComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-stripe */ "VFot");
/* harmony import */ var _servicioPago_stripe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicioPago/stripe.service */ "8TCR");
/* harmony import */ var _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/valor.service */ "VVFE");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/services/message.service */ "QLLi");
/* harmony import */ var _app_shared_services_producto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/producto.service */ "o1Bm");
/* harmony import */ var _app_components_posts_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/posts/product.service */ "uJAp");
/* harmony import */ var _app_serviceT_service_t_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/serviceT/service-t.service */ "dFYn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _paypal_paypal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../paypal/paypal.component */ "Vufj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");






























function SelectTargetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Paypal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Stripe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SelectTargetaComponent_div_0_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.createToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ngx-stripe-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Pagar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.stripeTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.cardOptions)("elementsOptions", ctx_r0.elementsOptions);
} }
function SelectTargetaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SelectTargetaComponent {
    constructor(fb, stripeService, stripSvc, cantidaSvc, authAf, firestore, postSvc, router, message, productoSvc, serviceTService) {
        this.fb = fb;
        this.stripeService = stripeService;
        this.stripSvc = stripSvc;
        this.cantidaSvc = cantidaSvc;
        this.authAf = authAf;
        this.firestore = firestore;
        this.postSvc = postSvc;
        this.router = router;
        this.message = message;
        this.productoSvc = productoSvc;
        this.serviceTService = serviceTService;
        this.uid = '';
        this.cardOptions = {
            style: {
                base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    fontWeight: '300',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: '#CFD7E0'
                    }
                }
            }
        };
        this.elementsOptions = {
            locale: 'es'
        };
        this.products$ = postSvc.getAllPosts();
        this.pedidoT = serviceTService.getPedidoT();
        console.log(this.pedidoT);
        this.authAf.afAuth.user.subscribe(res => {
            this.uid = res.uid;
        });
        this.initCarrito();
    }
    ngOnInit() {
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    createToken() {
        const name = this.stripeTest.get('name').value;
        if (name == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("¡por favor! digite su nombre que esta en la targeta de pago");
            return;
        }
        this.stripeService
            .createToken(this.card.element, { name })
            .subscribe((result) => {
            if (result.token) {
                const valor = this.cantidaSvc.getValorTotal();
                console.log(valor);
                const path = 'clientes';
                this.firestore.getDoc(path, this.uid).subscribe(res => {
                    this.cliente = res;
                });
                this.stripSvc.charge(valor, result.token.id).then(() => {
                    const pathT = `clientes/${this.uid}/pedidos`;
                    this.firestore.create(this.pedidoT, pathT, this.pedidoT.id).then(() => {
                        console.log('pedido guardado');
                    });
                    const path = 'pagos';
                    var fecha = new Date();
                    const fechaT = ((fecha.getDate()) + '/' + (1 + fecha.getMonth())) + '/' + fecha.getFullYear();
                    this.pago = {
                        idtokenTargeta: result.token.id,
                        cantidad: valor,
                        idCliente: this.uid,
                        fecha: fechaT
                    };
                    this.pedido = this.productoSvc.getProducto();
                    this.pedido.CorreoClient = this.cliente.gmail;
                    this.message.sendMessage(this.pedido).subscribe(() => {
                        console.log('message enviado correctamente');
                    });
                    this.firestore.doc(this.pago, path).then(res => {
                        console.log(res);
                        this.router.navigate(['/home']);
                    });
                });
                console.log('Token', result.token.id);
            }
            else if (result.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(result.error.message);
            }
        });
    }
    initCarrito() {
        this.pedido = {
            id: '',
            cliente: null,
            productos: [],
            precioTotal: null,
            estado: 'enviado',
            fecha: new Date(),
            valoracion: null,
        };
    }
}
SelectTargetaComponent.ɵfac = function SelectTargetaComponent_Factory(t) { return new (t || SelectTargetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicioPago_stripe_service__WEBPACK_IMPORTED_MODULE_3__["stripeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_4__["ValorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_components_posts_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_producto_service__WEBPACK_IMPORTED_MODULE_10__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_serviceT_service_t_service__WEBPACK_IMPORTED_MODULE_12__["ServiceTService"])); };
SelectTargetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectTargetaComponent, selectors: [["app-select-targeta"]], viewQuery: function SelectTargetaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeCardComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
    } }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "container"], [2, "text-align", "center"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name", "placeholder", "Full Name", "required", ""], [3, "options", "elementsOptions"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [1, "container-spinner"]], template: function SelectTargetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SelectTargetaComponent_div_0_Template, 22, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectTargetaComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.products$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _paypal_paypal_component__WEBPACK_IMPORTED_MODULE_15__["PaypalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeCardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 50%;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlbGVjdC10YXJnZXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksV0FBQTtFQUNBLFVBQUE7QUFESjtBQUlJO0VBRUksa0JBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUVDLFdBQUE7QUFMTDtBQVFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFOUiIsImZpbGUiOiJzZWxlY3QtdGFyZ2V0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5cbiAgICBcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogNTAlO1xuXG5cbiAgICBpbnB1dHtcblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGJ1dHRvbntcblxuICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICB9XG5cblxufVxuXG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectTargetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-select-targeta',
                templateUrl: './select-targeta.component.html',
                styleUrls: ['./select-targeta.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeService"] }, { type: _servicioPago_stripe_service__WEBPACK_IMPORTED_MODULE_3__["stripeService"] }, { type: _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_4__["ValorService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"] }, { type: _app_components_posts_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] }, { type: _app_shared_services_producto_service__WEBPACK_IMPORTED_MODULE_10__["ProductoService"] }, { type: _app_serviceT_service_t_service__WEBPACK_IMPORTED_MODULE_12__["ServiceTService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeCardComponent"]]
        }] }); })();


/***/ }),

/***/ "VFot":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js ***!
  \*********************************************************************/
/*! exports provided: NgxStripeModule, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective, StripeService, StripeFactoryService, StripeInstance, LazyStripeAPILoader, StripeElementsService, WindowRef, DocumentRef, STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStripeModule", function() { return NgxStripeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardComponent", function() { return StripeCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardNumberComponent", function() { return StripeCardNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardExpiryComponent", function() { return StripeCardExpiryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardCvcComponent", function() { return StripeCardCvcComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeFpxBankComponent", function() { return StripeFpxBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeIbanComponent", function() { return StripeIbanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeIdealBankComponent", function() { return StripeIdealBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeAuBankAccountComponent", function() { return StripeAuBankAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentRequestButtonComponent", function() { return StripePaymentRequestButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardGroupDirective", function() { return StripeCardGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeFactoryService", function() { return StripeFactoryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeInstance", function() { return StripeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyStripeAPILoader", function() { return LazyStripeAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeElementsService", function() { return StripeElementsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_PUBLISHABLE_KEY", function() { return STRIPE_PUBLISHABLE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_OPTIONS", function() { return STRIPE_OPTIONS; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "os0x");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-instance.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["stripeElementRef"];
class StripeInstance {
    /**
     * @param {?} loader
     * @param {?} window
     * @param {?} key
     * @param {?=} options
     */
    constructor(loader, window, key, options) {
        this.loader = loader;
        this.window = window;
        this.key = key;
        this.options = options;
        this.stripe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.stripe = this.stripe$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Boolean(stripe))));
        this.loader
            .asStream()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((/**
         * @param {?} status
         * @return {?}
         */
        (status) => status.loaded === true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((/**
         * @return {?}
         */
        () => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe)))
            .subscribe((/**
         * @param {?} stripeInstance
         * @return {?}
         */
        (stripeInstance) => {
            /** @type {?} */
            const stripe = this.options
                ? ((/** @type {?} */ (stripeInstance(this.key, this.options))))
                : ((/** @type {?} */ (stripeInstance(this.key))));
            this.stripe$.next(stripe);
        }));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe$.getValue();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Boolean(stripe))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => stripe.elements(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    redirectToCheckout(options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.redirectToCheckout(options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmAuBecsDebitPayment(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmAuBecsDebitPayment(clientSecret, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmBancontactPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmBancontactPayment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmCardPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmCardPayment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmEpsPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmEpsPayment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmFpxPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmFpxPayment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmGiropayPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmGiropayPayment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmIdealPayment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmIdealPayment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmP24Payment(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmP24Payment(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmSepaDebitPayment(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmSepaDebitPayment(clientSecret, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    handleCardAction(clientSecret) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.handleCardAction(clientSecret)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} paymentMethodData
     * @return {?}
     */
    createPaymentMethod(paymentMethodData) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.createPaymentMethod(paymentMethodData)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    retrievePaymentIntent(clientSecret) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.retrievePaymentIntent(clientSecret)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmAuBecsDebitSetup(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmAuBecsDebitSetup(clientSecret, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmCardSetup(clientSecret, data, options) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmCardSetup(clientSecret, data, options)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmSepaDebitSetup(clientSecret, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmSepaDebitSetup(clientSecret, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    retrieveSetupIntent(clientSecret) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.confirmSepaDebitSetup(clientSecret)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        /** @type {?} */
        const stripe = this.getInstance();
        return stripe ? stripe.paymentRequest(options) : undefined;
    }
    /**
     * @param {?} tokenType
     * @param {?} data
     * @return {?}
     */
    createToken(tokenType, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.createToken(tokenType, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.createSource(a, b)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stripe.retrieveSource(source)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    handleCardPayment(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(((/** @type {?} */ (stripe))).handleCardPayment(clientSecret, element, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    confirmPaymentIntent(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(((/** @type {?} */ (stripe))).confirmPaymentIntent(clientSecret, element, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    handleCardSetup(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(((/** @type {?} */ (stripe))).handleCardSetup(clientSecret, element, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    confirmSetupIntent(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(((/** @type {?} */ (stripe))).confirmSetupIntent(clientSecret, element, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    handleFpxPayment(clientSecret, element, data) {
        return this.stripe.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} stripe
         * @return {?}
         */
        (stripe) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(((/** @type {?} */ (stripe))).handleFpxPayment(clientSecret, element, data)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/ngx-stripe.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STRIPE_PUBLISHABLE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('Stripe Publishable Key');
/** @type {?} */
const STRIPE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('Stripe Options');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/window-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRef {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    getNativeWindow() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return window;
        }
        return (/** @type {?} */ ({}));
    }
}
WindowRef.ɵfac = function WindowRef_Factory(t) { return new (t || WindowRef)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"])); };
WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: WindowRef, factory: WindowRef.ɵfac });
/** @nocollapse */
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/document-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DocumentRef {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    getNativeDocument() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return document;
        }
        return (/** @type {?} */ ({}));
    }
}
DocumentRef.ɵfac = function DocumentRef_Factory(t) { return new (t || DocumentRef)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"])); };
DocumentRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DocumentRef, factory: DocumentRef.ɵfac });
/** @nocollapse */
DocumentRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DocumentRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/api-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyStripeAPILoader {
    /**
     * @param {?} platformId
     * @param {?} window
     * @param {?} document
     */
    constructor(platformId, window, document) {
        this.platformId = platformId;
        this.window = window;
        this.document = document;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            error: false,
            loaded: false,
            loading: false
        });
    }
    /**
     * @return {?}
     */
    asStream() {
        this.load();
        return this.status.asObservable();
    }
    /**
     * @return {?}
     */
    isReady() {
        return this.status.getValue().loaded;
    }
    /**
     * @return {?}
     */
    load() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        /** @type {?} */
        const status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(Object.assign({}, status, { loading: true }));
            /** @type {?} */
            const script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = (/**
             * @return {?}
             */
            () => {
                this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            });
            script.onerror = (/**
             * @return {?}
             */
            () => {
                this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            });
            this.document.getNativeDocument().body.appendChild(script);
        }
    }
}
LazyStripeAPILoader.ɵfac = function LazyStripeAPILoader_Factory(t) { return new (t || LazyStripeAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DocumentRef)); };
LazyStripeAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LazyStripeAPILoader, factory: LazyStripeAPILoader.ɵfac });
/** @nocollapse */
LazyStripeAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
    { type: WindowRef },
    { type: DocumentRef }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](LazyStripeAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
            }] }, { type: WindowRef }, { type: DocumentRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeService {
    /**
     * @param {?} key
     * @param {?} options
     * @param {?} loader
     * @param {?} window
     */
    constructor(key, options, loader, window) {
        this.key = key;
        this.options = options;
        this.loader = loader;
        this.window = window;
        if (key) {
            this.stripe = new StripeInstance(this.loader, this.window, key, options);
        }
    }
    /**
     * @return {?}
     */
    getStripeReference() {
        return this.loader.asStream().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((/**
         * @param {?} status
         * @return {?}
         */
        (status) => status.loaded === true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((/**
         * @return {?}
         */
        () => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe)));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe.getInstance();
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    setKey(key, options) {
        return this.changeKey(key, options);
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    changeKey(key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe.elements(options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    redirectToCheckout(options) {
        return this.stripe.redirectToCheckout(options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmAuBecsDebitPayment(clientSecret, data) {
        return this.stripe.confirmAuBecsDebitPayment(clientSecret, data);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmBancontactPayment(clientSecret, data, options) {
        return this.stripe.confirmBancontactPayment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmCardPayment(clientSecret, data, options) {
        return this.stripe.confirmCardPayment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmEpsPayment(clientSecret, data, options) {
        return this.stripe.confirmEpsPayment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmFpxPayment(clientSecret, data, options) {
        return this.stripe.confirmFpxPayment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmGiropayPayment(clientSecret, data, options) {
        return this.stripe.confirmGiropayPayment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmIdealPayment(clientSecret, data, options) {
        return this.stripe.confirmIdealPayment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmP24Payment(clientSecret, data, options) {
        return this.stripe.confirmP24Payment(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmSepaDebitPayment(clientSecret, data) {
        return this.stripe.confirmSepaDebitPayment(clientSecret, data);
    }
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    handleCardAction(clientSecret) {
        return this.stripe.handleCardAction(clientSecret);
    }
    /**
     * @param {?} paymentMethodData
     * @return {?}
     */
    createPaymentMethod(paymentMethodData) {
        return this.stripe.createPaymentMethod(paymentMethodData);
    }
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    retrievePaymentIntent(clientSecret) {
        return this.stripe.retrievePaymentIntent(clientSecret);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmAuBecsDebitSetup(clientSecret, data) {
        return this.stripe.confirmAuBecsDebitSetup(clientSecret, data);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @param {?=} options
     * @return {?}
     */
    confirmCardSetup(clientSecret, data, options) {
        return this.stripe.confirmCardSetup(clientSecret, data, options);
    }
    /**
     * @param {?} clientSecret
     * @param {?=} data
     * @return {?}
     */
    confirmSepaDebitSetup(clientSecret, data) {
        return this.stripe.confirmSepaDebitSetup(clientSecret, data);
    }
    /**
     * @param {?} clientSecret
     * @return {?}
     */
    retrieveSetupIntent(clientSecret) {
        return this.stripe.retrieveSetupIntent(clientSecret);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        return this.stripe.paymentRequest(options);
    }
    /**
     * @param {?} tokenType
     * @param {?} data
     * @return {?}
     */
    createToken(tokenType, data) {
        return this.stripe.createToken(tokenType, data);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe.createSource(a, b);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe.retrieveSource(source);
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    handleCardPayment(clientSecret, element, data) {
        return this.stripe.handleCardPayment(clientSecret, element, data);
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    confirmPaymentIntent(clientSecret, element, data) {
        return this.stripe.confirmPaymentIntent(clientSecret, element, data);
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    handleCardSetup(clientSecret, element, data) {
        return this.stripe.handleCardSetup(clientSecret, element, data);
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    confirmSetupIntent(clientSecret, element, data) {
        return this.stripe.confirmSetupIntent(clientSecret, element, data);
    }
    /**
     * @deprecated
     * @param {?} clientSecret
     * @param {?=} element
     * @param {?=} data
     * @return {?}
     */
    handleFpxPayment(clientSecret, element, data) {
        return this.stripe.handleFpxPayment(clientSecret, element, data);
    }
}
StripeService.ɵfac = function StripeService_Factory(t) { return new (t || StripeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](STRIPE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](LazyStripeAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](WindowRef)); };
StripeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StripeService, factory: StripeService.ɵfac });
/** @nocollapse */
StripeService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [STRIPE_PUBLISHABLE_KEY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [STRIPE_OPTIONS]
            }] }, { type: LazyStripeAPILoader }, { type: WindowRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-elements.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeElementsService {
    /**
     * @param {?} stripeService
     */
    constructor(stripeService) {
        this.stripeService = stripeService;
    }
    /**
     * @param {?} stripe
     * @param {?=} options
     * @return {?}
     */
    elements(stripe, options = {}) {
        if (stripe) {
            if (Object.keys(options).length > 0) {
                return stripe.elements(options);
            }
            return stripe.elements();
        }
        else {
            if (Object.keys(options).length > 0) {
                return this.stripeService.elements(options);
            }
            return this.stripeService.elements();
        }
    }
    /**
     * @param {?} stripe
     * @param {?} options
     * @return {?}
     */
    paymentRequest(stripe, options) {
        return stripe
            ? stripe.paymentRequest(options)
            : this.stripeService.paymentRequest(options);
    }
    /**
     * @param {?} options
     * @param {?} containerClass
     * @return {?}
     */
    mergeOptions(options, containerClass) {
        if (!containerClass || (options && options.classes)) {
            return options || {};
        }
        if (!options || !options.classes) {
            return Object.assign({}, (options || {}), { classes: {
                    base: containerClass,
                    complete: `${containerClass}--complete`,
                    empty: `${containerClass}--empty`,
                    focus: `${containerClass}--focus`,
                    invalid: `${containerClass}--invalid`,
                    webkitAutoFill: `${containerClass}--webkit-autoFill`
                } });
        }
        return options || {};
    }
}
StripeElementsService.ɵfac = function StripeElementsService_Factory(t) { return new (t || StripeElementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](StripeService)); };
StripeElementsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StripeElementsService, factory: StripeElementsService.ɵfac });
/** @nocollapse */
StripeElementsService.ctorParameters = () => [
    { type: StripeService }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeElementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: StripeService }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardComponent {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.state = 'notready';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            /** @type {?} */
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            /** @type {?} */
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getCard() {
        return this.element;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    createElement(options = {}) {
        this.element = this.elements.create('card', options);
        this.element.on('change', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.change.emit(ev)));
        this.element.on('blur', (/**
         * @return {?}
         */
        () => this.blur.emit()));
        this.element.on('focus', (/**
         * @return {?}
         */
        () => this.focus.emit()));
        this.element.on('ready', (/**
         * @return {?}
         */
        () => this.ready.emit()));
        this.element.on('escape', (/**
         * @return {?}
         */
        () => this.escape.emit()));
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeCardComponent.ɵfac = function StripeCardComponent_Factory(t) { return new (t || StripeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeCardComponent, selectors: [["ngx-stripe-card"]], viewQuery: function StripeCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeCardComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeCardComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-card',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/card-group.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardGroupDirective {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.elements = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.state = 'notready';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            /** @type {?} */
            const elementsOptions = this.elementsOptions;
            /** @type {?} */
            const stripe = this.stripe;
            if (changes.elementsOptions || changes.stripe || !this._elements) {
                this._elements = yield this.stripeElementsService
                    .elements(stripe, elementsOptions)
                    .toPromise();
                this.elements.emit(this._elements);
            }
            this.state = 'ready';
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this._elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.elements.emit(this._elements);
                this.state = 'ready';
            }
        });
    }
}
StripeCardGroupDirective.ɵfac = function StripeCardGroupDirective_Factory(t) { return new (t || StripeCardGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeCardGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: StripeCardGroupDirective, selectors: [["ngx-stripe-card-group"], ["", "ngxStripeCardGroup", ""]], inputs: { elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { elements: "elements" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
StripeCardGroupDirective.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeCardGroupDirective.propDecorators = {
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeCardGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'ngx-stripe-card-group,[ngxStripeCardGroup]'
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { elements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-number.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardNumberComponent {
    /**
     * @param {?} stripeElementsService
     * @param {?} cardGroup
     */
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((/**
             * @param {?} elements
             * @return {?}
             */
            (elements) => {
                this.elements = elements;
                this.setupElement('elements');
            }));
        }
        else {
            throw new Error('StripeCardNumberComponent must have StripeCardGroupDirective parent');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getCardNumber() {
        return this.element;
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    setupElement(source) {
        /** @type {?} */
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardNumber', options);
            this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.change.emit(ev)));
            this.element.on('blur', (/**
             * @return {?}
             */
            () => this.blur.emit()));
            this.element.on('focus', (/**
             * @return {?}
             */
            () => this.focus.emit()));
            this.element.on('ready', (/**
             * @return {?}
             */
            () => this.ready.emit()));
            this.element.on('escape', (/**
             * @return {?}
             */
            () => this.escape.emit()));
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardNumberComponent.ɵfac = function StripeCardNumberComponent_Factory(t) { return new (t || StripeCardNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeCardNumberComponent, selectors: [["ngx-stripe-card-number"]], viewQuery: function StripeCardNumberComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeCardNumberComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
StripeCardNumberComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeCardNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-card-number',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-expiry.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardExpiryComponent {
    /**
     * @param {?} stripeElementsService
     * @param {?} cardGroup
     */
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((/**
             * @param {?} elements
             * @return {?}
             */
            (elements) => {
                this.elements = elements;
                this.setupElement('elements');
            }));
        }
        else {
            throw new Error('StripeCardExpiryComponent must have StripeCardGroupDirective parent');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getCardExpiry() {
        return this.element;
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    setupElement(source) {
        /** @type {?} */
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardExpiry', options);
            this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.change.emit(ev)));
            this.element.on('blur', (/**
             * @return {?}
             */
            () => this.blur.emit()));
            this.element.on('focus', (/**
             * @return {?}
             */
            () => this.focus.emit()));
            this.element.on('ready', (/**
             * @return {?}
             */
            () => this.ready.emit()));
            this.element.on('escape', (/**
             * @return {?}
             */
            () => this.escape.emit()));
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardExpiryComponent.ɵfac = function StripeCardExpiryComponent_Factory(t) { return new (t || StripeCardExpiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardExpiryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeCardExpiryComponent, selectors: [["ngx-stripe-card-expiry"]], viewQuery: function StripeCardExpiryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardExpiryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeCardExpiryComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
StripeCardExpiryComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeCardExpiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-card-expiry',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-cvc.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardCvcComponent {
    /**
     * @param {?} stripeElementsService
     * @param {?} cardGroup
     */
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((/**
             * @param {?} elements
             * @return {?}
             */
            (elements) => {
                this.elements = elements;
                this.setupElement('elements');
            }));
        }
        else {
            throw new Error('StripeCardCvcComponent must have StripeCardGroupDirective parent');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getCardCvc() {
        return this.element;
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    setupElement(source) {
        /** @type {?} */
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardCvc', options);
            this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.change.emit(ev)));
            this.element.on('blur', (/**
             * @return {?}
             */
            () => this.blur.emit()));
            this.element.on('focus', (/**
             * @return {?}
             */
            () => this.focus.emit()));
            this.element.on('ready', (/**
             * @return {?}
             */
            () => this.ready.emit()));
            this.element.on('escape', (/**
             * @return {?}
             */
            () => this.escape.emit()));
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardCvcComponent.ɵfac = function StripeCardCvcComponent_Factory(t) { return new (t || StripeCardCvcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardCvcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeCardCvcComponent, selectors: [["ngx-stripe-card-cvc"]], viewQuery: function StripeCardCvcComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardCvcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeCardCvcComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
StripeCardCvcComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeCardCvcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-card-cvc',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/fpx-bank.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeFpxBankComponent {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.state = 'notready';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            /** @type {?} */
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            /** @type {?} */
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getFpxBank() {
        return this.element;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    createElement(options = { accountHolderType: 'individual' }) {
        this.element = this.elements.create('fpxBank', options);
        this.element.on('change', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.change.emit(ev)));
        this.element.on('blur', (/**
         * @return {?}
         */
        () => this.blur.emit()));
        this.element.on('focus', (/**
         * @return {?}
         */
        () => this.focus.emit()));
        this.element.on('ready', (/**
         * @return {?}
         */
        () => this.ready.emit()));
        this.element.on('escape', (/**
         * @return {?}
         */
        () => this.escape.emit()));
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeFpxBankComponent.ɵfac = function StripeFpxBankComponent_Factory(t) { return new (t || StripeFpxBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeFpxBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeFpxBankComponent, selectors: [["ngx-stripe-fpx-bank"]], viewQuery: function StripeFpxBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeFpxBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeFpxBankComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeFpxBankComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeFpxBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-fpx-bank',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ideal-bank.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeIdealBankComponent {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.state = 'notready';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            /** @type {?} */
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            /** @type {?} */
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getIdealBank() {
        return this.element;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    createElement(options = {}) {
        this.element = this.elements.create('idealBank', options);
        this.element.on('change', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.change.emit(ev)));
        this.element.on('blur', (/**
         * @return {?}
         */
        () => this.blur.emit()));
        this.element.on('focus', (/**
         * @return {?}
         */
        () => this.focus.emit()));
        this.element.on('ready', (/**
         * @return {?}
         */
        () => this.ready.emit()));
        this.element.on('escape', (/**
         * @return {?}
         */
        () => this.escape.emit()));
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeIdealBankComponent.ɵfac = function StripeIdealBankComponent_Factory(t) { return new (t || StripeIdealBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeIdealBankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeIdealBankComponent, selectors: [["ngx-stripe-ideal-bank"]], viewQuery: function StripeIdealBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeIdealBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeIdealBankComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeIdealBankComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeIdealBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-ideal-bank',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/iban.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeIbanComponent {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.state = 'notready';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            /** @type {?} */
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            /** @type {?} */
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getIban() {
        return this.element;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    createElement(options = {}) {
        this.element = this.elements.create('iban', options);
        this.element.on('change', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.change.emit(ev)));
        this.element.on('blur', (/**
         * @return {?}
         */
        () => this.blur.emit()));
        this.element.on('focus', (/**
         * @return {?}
         */
        () => this.focus.emit()));
        this.element.on('ready', (/**
         * @return {?}
         */
        () => this.ready.emit()));
        this.element.on('escape', (/**
         * @return {?}
         */
        () => this.escape.emit()));
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeIbanComponent.ɵfac = function StripeIbanComponent_Factory(t) { return new (t || StripeIbanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeIbanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeIbanComponent, selectors: [["ngx-stripe-iban"]], viewQuery: function StripeIbanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeIbanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeIbanComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeIbanComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeIbanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-iban',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/au-bank-account.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeAuBankAccountComponent {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.state = 'notready';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = 'starting';
            /** @type {?} */
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            /** @type {?} */
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     * @return {?}
     */
    getAuBankAccount() {
        return this.element;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    createElement(options = {}) {
        this.element = this.elements.create('auBankAccount', options);
        this.element.on('change', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.change.emit(ev)));
        this.element.on('blur', (/**
         * @return {?}
         */
        () => this.blur.emit()));
        this.element.on('focus', (/**
         * @return {?}
         */
        () => this.focus.emit()));
        this.element.on('ready', (/**
         * @return {?}
         */
        () => this.ready.emit()));
        this.element.on('escape', (/**
         * @return {?}
         */
        () => this.escape.emit()));
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeAuBankAccountComponent.ɵfac = function StripeAuBankAccountComponent_Factory(t) { return new (t || StripeAuBankAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeAuBankAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripeAuBankAccountComponent, selectors: [["ngx-stripe-au-bank-account"]], viewQuery: function StripeAuBankAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeAuBankAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripeAuBankAccountComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeAuBankAccountComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeAuBankAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-au-bank-account',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/payment-request-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripePaymentRequestButtonComponent {
    /**
     * @param {?} stripeElementsService
     */
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.token = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.paymentMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.source = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.shippingaddresschange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.shippingoptionchange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.notavailable = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            /** @type {?} */
            const elementsOptions = this.elementsOptions;
            /** @type {?} */
            const stripe = this.stripe;
            /** @type {?} */
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                /** @type {?} */
                const elements = yield this.stripeElementsService
                    .elements(stripe, elementsOptions)
                    .toPromise();
                this.elements = elements;
                updateElements = true;
            }
            if (changes.paymentOptions && this.paymentRequest) {
                this.updateRequest(this.paymentOptions);
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.paymentRequest = this.stripeElementsService.paymentRequest(stripe, this.paymentOptions);
                    this.paymentRequest.on('token', (/**
                     * @param {?} ev
                     * @return {?}
                     */
                    (ev) => this.token.emit(ev)));
                    this.paymentRequest.on('paymentmethod', (/**
                     * @param {?} ev
                     * @return {?}
                     */
                    (ev) => this.paymentMethod.emit(ev)));
                    this.paymentRequest.on('source', (/**
                     * @param {?} ev
                     * @return {?}
                     */
                    (ev) => this.source.emit(ev)));
                    this.paymentRequest.on('cancel', (/**
                     * @return {?}
                     */
                    () => this.cancel.emit()));
                    this.paymentRequest.on('shippingaddresschange', (/**
                     * @param {?} ev
                     * @return {?}
                     */
                    (ev) => this.shippingaddresschange.emit(ev)));
                    this.paymentRequest.on('shippingoptionchange', (/**
                     * @param {?} ev
                     * @return {?}
                     */
                    (ev) => this.shippingoptionchange.emit(ev)));
                    this.element = this.elements.create('paymentRequestButton', Object.assign({ paymentRequest: this.paymentRequest }, options));
                    this.canMakePayment().subscribe((/**
                     * @param {?} result
                     * @return {?}
                     */
                    (result) => {
                        if (result) {
                            this.element.on('click', (/**
                             * @param {?} ev
                             * @return {?}
                             */
                            (ev) => this.change.emit(ev)));
                            this.element.on('blur', (/**
                             * @return {?}
                             */
                            () => this.blur.emit()));
                            this.element.on('focus', (/**
                             * @return {?}
                             */
                            () => this.focus.emit()));
                            this.element.on('ready', (/**
                             * @return {?}
                             */
                            () => this.ready.emit()));
                            this.element.mount(this.stripeElementRef.nativeElement);
                            this.load.emit({
                                paymentRequestButton: this.element,
                                paymentRequest: this.paymentRequest
                            });
                        }
                        else {
                            this.notavailable.emit();
                        }
                    }));
                }
            }
        });
    }
    /**
     * @return {?}
     */
    canMakePayment() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.paymentRequest.canMakePayment());
    }
    /**
     * @param {?} options
     * @return {?}
     */
    update(options) {
        this.element.update(options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    updateRequest(options) {
        this.paymentRequest.update(options);
    }
    /**
     * @return {?}
     */
    show() {
        this.paymentRequest.show();
    }
    /**
     * @deprecated
     * @return {?}
     */
    getButton() {
        return this.element;
    }
}
StripePaymentRequestButtonComponent.ɵfac = function StripePaymentRequestButtonComponent_Factory(t) { return new (t || StripePaymentRequestButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](StripeElementsService)); };
StripePaymentRequestButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StripePaymentRequestButtonComponent, selectors: [["ngx-stripe-payment-request-button"]], viewQuery: function StripePaymentRequestButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", paymentOptions: "paymentOptions", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", change: "change", blur: "blur", focus: "focus", ready: "ready", token: "token", paymentMethod: "paymentMethod", source: "source", cancel: "cancel", shippingaddresschange: "shippingaddresschange", shippingoptionchange: "shippingoptionchange", notavailable: "notavailable" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripePaymentRequestButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/** @nocollapse */
StripePaymentRequestButtonComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripePaymentRequestButtonComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    paymentOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    token: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    paymentMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    shippingaddresschange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    shippingoptionchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    notavailable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripePaymentRequestButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-stripe-payment-request-button',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], paymentMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], shippingaddresschange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], shippingoptionchange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], notavailable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], paymentOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-factory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeFactoryService {
    /**
     * @param {?} baseKey
     * @param {?} baseOptions
     * @param {?} loader
     * @param {?} window
     */
    constructor(baseKey, baseOptions, loader, window) {
        this.baseKey = baseKey;
        this.baseOptions = baseOptions;
        this.loader = loader;
        this.window = window;
    }
    /**
     * @param {?=} key
     * @param {?=} options
     * @return {?}
     */
    create(key, options) {
        if (!key && !this.baseKey) {
            return null;
        }
        return new StripeInstance(this.loader, this.window, key || this.baseKey, options || this.baseOptions);
    }
}
StripeFactoryService.ɵfac = function StripeFactoryService_Factory(t) { return new (t || StripeFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](STRIPE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](LazyStripeAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](WindowRef)); };
StripeFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StripeFactoryService, factory: StripeFactoryService.ɵfac });
/** @nocollapse */
StripeFactoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StripeFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [STRIPE_PUBLISHABLE_KEY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [STRIPE_OPTIONS]
            }] }, { type: LazyStripeAPILoader }, { type: WindowRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-stripe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    StripeCardComponent,
    StripeCardNumberComponent,
    StripeCardExpiryComponent,
    StripeCardCvcComponent,
    StripeFpxBankComponent,
    StripeIdealBankComponent,
    StripeIbanComponent,
    StripeAuBankAccountComponent,
    StripePaymentRequestButtonComponent
];
/** @type {?} */
const directives = [StripeCardGroupDirective];
class NgxStripeModule {
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forRoot(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                StripeElementsService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forChild(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                StripeElementsService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
}
NgxStripeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NgxStripeModule });
NgxStripeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function NgxStripeModule_Factory(t) { return new (t || NgxStripeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgxStripeModule, { declarations: [StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIdealBankComponent, StripeIbanComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective], exports: [StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIdealBankComponent, StripeIbanComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NgxStripeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [...components, ...directives],
                exports: [...components, ...directives]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-stripe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-stripe.js.map

/***/ }),

/***/ "Vufj":
/*!*******************************************************!*\
  !*** ./src/app/components/paypal/paypal.component.ts ***!
  \*******************************************************/
/*! exports provided: PaypalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalComponent", function() { return PaypalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_paypal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/paypal.service */ "ipUY");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/message.service */ "QLLi");
/* harmony import */ var _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/valor.service */ "VVFE");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "jC6o");
















const _c0 = ["paypal"];
class PaypalComponent {
    constructor(paypalSvc, authAf, firestore, router, message, cantidaSvc) {
        this.paypalSvc = paypalSvc;
        this.authAf = authAf;
        this.firestore = firestore;
        this.router = router;
        this.message = message;
        this.cantidaSvc = cantidaSvc;
        this.pedido = {
            cliente: null,
            estado: null,
            fecha: null,
            id: null,
            precioTotal: null,
            productos: null,
            valoracion: null,
            CorreoClient: null
        };
        this.uid = '';
        this.pedido = paypalSvc.getPedidoPaypal();
        this.authAf.afAuth.user.subscribe(res => {
            this.uid = res.uid;
        });
    }
    ngOnInit() {
        paypal.
            Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                            description: this.pedido.fecha,
                            amount: {
                                currency_code: "USD",
                                value: this.pedido.precioTotal
                            }
                        }]
                });
            },
            onApprove: (data, actions) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const order = yield actions.order.capture();
                console.log(order);
                if (order) {
                    const valor = this.cantidaSvc.getValorTotal();
                    const pathT = `clientes/${this.uid}/pedidos`;
                    this.firestore.create(this.pedido, pathT, this.pedido.id).then(() => {
                        this.message.sendMessage(this.pedido).subscribe(() => {
                        });
                        console.log('pedido guardado');
                        const path = 'pagos';
                        var fecha = new Date();
                        const fechaT = ((fecha.getDate()) + '/' + (1 + fecha.getMonth())) + '/' + fecha.getFullYear();
                        this.pago = {
                            idtokenTargeta: order.id,
                            cantidad: valor,
                            idCliente: this.uid,
                            fecha: fechaT
                        };
                        this.firestore.doc(this.pago, path).then(res => {
                            console.log(res);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('transaccion exitosa').then(() => {
                                this.router.navigate(['/home']);
                            });
                        }).catch(() => {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('¡transaccion fallida! porfavor intente de nuevo').then(() => {
                                this.router.navigate(['/home']);
                            });
                        });
                    });
                }
            }),
            onError: err => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('¡transaccion fallida! por favor comenzar de nuevo').then(() => {
                    this.router.navigate(['/home']);
                });
            }
        })
            .render(this.paypalElement.nativeElement);
    }
}
PaypalComponent.ɵfac = function PaypalComponent_Factory(t) { return new (t || PaypalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_paypal_service__WEBPACK_IMPORTED_MODULE_3__["PaypalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_6__["ValorService"])); };
PaypalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaypalComponent, selectors: [["app-paypal"]], viewQuery: function PaypalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paypalElement = _t.first);
    } }, decls: 2, vars: 0, consts: [["paypal", ""]], template: function PaypalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlwYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaypalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-paypal',
                templateUrl: './paypal.component.html',
                styleUrls: ['./paypal.component.scss']
            }]
    }], function () { return [{ type: _app_shared_paypal_service__WEBPACK_IMPORTED_MODULE_3__["PaypalService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__["AuthCrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_6__["ValorService"] }]; }, { paypalElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['paypal', { static: true }]
        }] }); })();


/***/ }),

/***/ "rJ/t":
/*!********************************************************************************!*\
  !*** ./src/app/components/pagoTargeta/select-targeta/select-targeta.module.ts ***!
  \********************************************************************************/
/*! exports provided: SelectTargetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTargetaModule", function() { return SelectTargetaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_targeta_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-targeta-routing.module */ "ML2w");
/* harmony import */ var _select_targeta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-targeta.component */ "TdaX");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material.module */ "vvyD");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-stripe */ "VFot");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _paypal_paypal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../paypal/paypal.component */ "Vufj");










class SelectTargetaModule {
}
SelectTargetaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SelectTargetaModule });
SelectTargetaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SelectTargetaModule_Factory(t) { return new (t || SelectTargetaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _select_targeta_routing_module__WEBPACK_IMPORTED_MODULE_2__["SelectTargetaRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_5__["NgxStripeModule"].forRoot('pk_test_51IGVrnLKdggzOCEi8qk71PNMEBpdgtJx8EQCuNkgQyVA5BsYOb1ic5xoZPddZrfzRFUazK7rSl8jyZDUbDjjnNLn00vKfEDZvg'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectTargetaModule, { declarations: [_select_targeta_component__WEBPACK_IMPORTED_MODULE_3__["SelectTargetaComponent"], _paypal_paypal_component__WEBPACK_IMPORTED_MODULE_7__["PaypalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _select_targeta_routing_module__WEBPACK_IMPORTED_MODULE_2__["SelectTargetaRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], ngx_stripe__WEBPACK_IMPORTED_MODULE_5__["NgxStripeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectTargetaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_select_targeta_component__WEBPACK_IMPORTED_MODULE_3__["SelectTargetaComponent"], _paypal_paypal_component__WEBPACK_IMPORTED_MODULE_7__["PaypalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _select_targeta_routing_module__WEBPACK_IMPORTED_MODULE_2__["SelectTargetaRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    ngx_stripe__WEBPACK_IMPORTED_MODULE_5__["NgxStripeModule"].forRoot('pk_test_51IGVrnLKdggzOCEi8qk71PNMEBpdgtJx8EQCuNkgQyVA5BsYOb1ic5xoZPddZrfzRFUazK7rSl8jyZDUbDjjnNLn00vKfEDZvg'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pagoTargeta-select-targeta-select-targeta-module.js.map