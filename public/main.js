(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GYW":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/new-vehiculo/new-vehiculo.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVehiculoComponent", function() { return NewVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/vehiculo.service */ "sP2n");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














class NewVehiculoComponent {
    constructor(vehiculoService, authSvc, firestoreSvc) {
        this.vehiculoService = vehiculoService;
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.newPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    addNewVehiculo(data) {
        this.vehiculo = console.log(this.vehiculoService.preAddAndUpdate(data, this.image));
    }
    handleImage(event) {
        this.image = event.target.files[0];
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('vehicle successfully created');
    }
}
NewVehiculoComponent.ɵfac = function NewVehiculoComponent_Factory(t) { return new (t || NewVehiculoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_4__["VehiculoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"])); };
NewVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewVehiculoComponent, selectors: [["app-new-vehiculo"]], decls: 28, vars: 2, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "nombre", "formControlName", "nombre"], ["matInput", "", "placeholder", "placa", "formControlName", "placa"], ["matInput", "", "placeholder", "color", "formControlName", "color"], ["matInput", "", "placeholder", "marca", "formControlName", "marca"], [1, "container-input-file"], [1, "custom-file"], ["type", "file", "formControlName", "imagen", 3, "change"], [1, "container-button"], ["type", "submit", "value", "Save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function NewVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewVehiculoComponent_Template_form_ngSubmit_1_listener() { return ctx.addNewVehiculo(ctx.newPostForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "placa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewVehiculoComponent_Template_input_change_21_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CHOOSE IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewVehiculoComponent_Template_input_click_27_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy12ZWhpY3Vsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFFSSxtQkFBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0FBQ1o7QUFFUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUFaO0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjtBQUdRO0VBRUksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZaO0FBTVE7RUFFSSxjQUFBO0FBTFo7QUFRUTtFQUNJLGdCQUFBO0FBTlo7QUFVUTtFQUNJLFdBQUE7QUFSWiIsImZpbGUiOiJuZXctdmVoaWN1bG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LXBvc3QtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGZvcm17XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaW5wdXRbdHlwZT0nZmlsZSdde1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICB9XG4gICAgICAgIGlucHV0Lm1hdC1mbGF0LWJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXN0b20tZmlsZXtcblxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItaW5wdXQtZmlsZXtcblxuICAgICAgICAgICAgbWFyZ2luOiAgMnJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1idXR0b257XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-vehiculo',
                templateUrl: './new-vehiculo.component.html',
                styleUrls: ['./new-vehiculo.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_4__["VehiculoService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "/gzX":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/roomlist/roomlist.component.ts ***!
  \****************************************************************/
/*! exports provided: snapshotToArray, RoomlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomlistComponent", function() { return RoomlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");












function RoomlistComponent_div_8_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function RoomlistComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomlistComponent_div_8_mat_spinner_1_Template, 1, 0, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingResults);
} }
function RoomlistComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomlistComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.roomname);
} }
function RoomlistComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function RoomlistComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomlistComponent_tr_19_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.enterChatRoom(row_r7.roomname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/addroom"]; };
const snapshotToArray = (snapshot) => {
    const returnArr = [];
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
class RoomlistComponent {
    constructor(route, router, datepipe) {
        this.route = route;
        this.router = router;
        this.datepipe = datepipe;
        this.nickname = '';
        this.displayedColumns = ['roomname'];
        this.rooms = [];
        this.isLoadingResults = true;
        this.nickname = localStorage.getItem('nickname');
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('rooms/').on('value', resp => {
            this.rooms = [];
            this.rooms = snapshotToArray(resp);
            this.isLoadingResults = false;
        });
    }
    ngOnInit() {
    }
    enterChatRoom(roomname) {
        const chat = { roomname: '', nickname: '', message: '', date: '', type: '' };
        chat.roomname = roomname;
        chat.nickname = this.nickname;
        chat.date = this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        chat.message = `${this.nickname} enter the room`;
        chat.type = 'join';
        const newMessage = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('chats/');
        newMessage.set(chat);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('roomusers/').orderByChild('roomname').equalTo(roomname).on('value', (resp) => {
            let roomuser = [];
            roomuser = snapshotToArray(resp);
            const user = roomuser.find(x => x.nickname === this.nickname);
            if (user !== undefined) {
                const userRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('roomusers/' + user.key);
                userRef.update({ status: 'online' });
            }
            else {
                const newroomuser = { roomname: '', nickname: '', status: '' };
                newroomuser.roomname = roomname;
                newroomuser.nickname = this.nickname;
                newroomuser.status = 'online';
                const newRoomUser = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('roomusers/').push();
                newRoomUser.set(newroomuser);
            }
        });
        this.router.navigate(['/chatroom', roomname]);
    }
    logout() {
        localStorage.removeItem('nickname');
        this.router.navigate(['/loginChat']);
    }
}
RoomlistComponent.ɵfac = function RoomlistComponent_Factory(t) { return new (t || RoomlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"])); };
RoomlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomlistComponent, selectors: [["app-roomlist"]], decls: 20, vars: 7, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-flat-button", "", 3, "click"], ["class", "example-loading-shade", 4, "ngIf"], [1, "button-row"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", "matSortActive", "roomname", "matSortDisableClear", "", "matSortDirection", "asc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "roomname"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "example-loading-shade"], [4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function RoomlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomlistComponent_Template_button_click_3_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Room List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomlistComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomlistComponent_th_16_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomlistComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoomlistComponent_tr_18_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoomlistComponent_tr_19_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.nickname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: [".example-container[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 10px;\n  }\n  \n  .example-table-container[_ngcontent-%COMP%] {\n    position: relative;\n    max-height: 400px;\n    overflow: auto;\n  }\n  \n  table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .button-row[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  \n  .example-loading-shade[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .example-rate-limit-reached[_ngcontent-%COMP%] {\n    color: #980000;\n    max-width: 360px;\n    text-align: center;\n  }\n  \n  \n  \n  .mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n    max-width: 64px;\n  }\n  \n  .mat-column-created[_ngcontent-%COMP%] {\n    max-width: 124px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb21saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBLGtCQUFrQjs7RUFDbEI7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJyb29tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtdGFibGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmJ1dHRvbi1yb3cge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XG4gICAgY29sb3I6ICM5ODAwMDA7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qIENvbHVtbiBXaWR0aHMgKi9cbiAgLm1hdC1jb2x1bW4tbnVtYmVyLFxuICAubWF0LWNvbHVtbi1zdGF0ZSB7XG4gICAgbWF4LXdpZHRoOiA2NHB4O1xuICB9XG4gIFxuICAubWF0LWNvbHVtbi1jcmVhdGVkIHtcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roomlist',
                templateUrl: './roomlist.component.html',
                styleUrls: ['./roomlist.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ivan/ngVentaLibre2/src/main.ts */"zUnb");


/***/ }),

/***/ "1Ikr":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/chatroom/chatroom.component.ts ***!
  \****************************************************************/
/*! exports provided: MyErrorStateMatcher, snapshotToArray, ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















const _c0 = ["chatcontent"];
function ChatroomComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.nickname);
} }
function ChatroomComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r5.message);
} }
function ChatroomComponent_div_12_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatroomComponent_div_12_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r5.nickname);
} }
const _c1 = function (a0, a1) { return { "right-bubble": a0, "left-bubble": a1 }; };
function ChatroomComponent_div_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatroomComponent_div_12_ng_template_2_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatroomComponent_div_12_ng_template_2_span_3_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, chat_r5.nickname === ctx_r8.nickname, chat_r5.nickname !== ctx_r8.nickname));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r5.nickname === ctx_r8.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r5.nickname !== ctx_r8.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r5.message);
} }
function ChatroomComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatroomComponent_div_12_div_1_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatroomComponent_div_12_ng_template_2_Template, 6, 7, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r5.type === "join" || chat_r5.type === "exit")("ngIfElse", _r7);
} }
function ChatroomComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
const snapshotToArray = (snapshot) => {
    const returnArr = [];
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        //   item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
class ChatroomComponent {
    constructor(router, route, formBuilder, datepipe) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.scrolltop = null;
        this.nickname = '';
        this.roomname = '';
        this.message = '';
        this.users = [];
        this.chats = [];
        this.matcher = new MyErrorStateMatcher();
        this.nickname = localStorage.getItem('nickname');
        this.roomname = this.route.snapshot.params.roomname;
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('chats/').on('value', resp => {
            this.chats = [];
            this.chats = snapshotToArray(resp);
            setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 500);
        });
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('roomusers/').orderByChild('roomname').equalTo(this.roomname).on('value', (resp2) => {
            const roomusers = snapshotToArray(resp2);
            this.users = roomusers.filter(x => x.status === 'online');
        });
    }
    ngOnInit() {
        this.chatForm = this.formBuilder.group({
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        const chat = form;
        chat.roomname = this.roomname;
        chat.nickname = this.nickname;
        chat.date = this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        chat.type = 'message';
        const newMessage = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('chats/').push();
        newMessage.set(chat);
        this.chatForm = this.formBuilder.group({
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    exitChat() {
        const chat = { roomname: '', nickname: '', message: '', date: '', type: '' };
        chat.roomname = this.roomname;
        chat.nickname = this.nickname;
        chat.date = this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        chat.message = `${this.nickname} leave the room`;
        chat.type = 'exit';
        const newMessage = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('chats/').push();
        newMessage.set(chat);
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('roomusers/').orderByChild('roomname').equalTo(this.roomname).on('value', (resp) => {
            let roomuser = [];
            roomuser = snapshotToArray(resp);
            const user = roomuser.find(x => x.nickname === this.nickname);
            if (user !== undefined) {
                const userRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('roomusers/' + user.key);
                userRef.update({ status: 'offline' });
            }
        });
        this.router.navigate(['/roomlist']);
    }
}
ChatroomComponent.ɵfac = function ChatroomComponent_Factory(t) { return new (t || ChatroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"])); };
ChatroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatroomComponent, selectors: [["app-chatroom"]], viewQuery: function ChatroomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatcontent = _t.first);
    } }, decls: 22, vars: 7, consts: [[1, "example-container", "mat-elevation-z8"], [1, "drawer-container"], ["mode", "side", "opened", "", 1, "left-drawer"], [1, "users-pane"], [1, "users-card"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Exit", 3, "click"], ["class", "users-card", 4, "ngFor", "ngForOf"], [1, "chat-pane"], [1, "chat-content", 3, "scrollTop"], ["chatcontent", ""], ["class", "message-box", 4, "ngFor", "ngForOf"], [1, "sticky-footer"], [1, "message-form", 3, "formGroup", "ngSubmit"], [1, "message-form-field"], ["matInput", "", "placeholder", "Enter message here", "formControlName", "message", 3, "errorStateMatcher"], [4, "ngIf"], ["type", "submit", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Send", 3, "disabled"], [1, "username"], [1, "message-box"], ["class", "chat-status", "text-center", "", 4, "ngIf", "ngIfElse"], ["message", ""], ["text-center", "", 1, "chat-status"], [1, "chat-content-center"], [1, "chat-message"], [1, "right-bubble", 3, "ngClass"], ["class", "msg-name", 4, "ngIf"], ["text-wrap", ""], [1, "msg-name"]], template: function ChatroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatroomComponent_Template_button_click_5_listener() { return ctx.exitChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatroomComponent_mat_card_8_Template, 5, 1, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-drawer-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatroomComponent_div_12_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatroomComponent_Template_form_ngSubmit_14_listener() { return ctx.onFormSubmit(ctx.chatForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatroomComponent_span_18_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", ctx.scrolltop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chatForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chatForm.get("message").valid && ctx.chatForm.get("message").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.chatForm.valid);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".example-container[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 10px;\n  }\n  \n  .drawer-container[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n  }\n  \n  .left-drawer[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  \n  .users-pane[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  \n  .users-card[_ngcontent-%COMP%] {\n    margin: 5px 20px;\n  }\n  \n  .username[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: 5px;\n    margin-left: 10px;\n  }\n  \n  footer.sticky-footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px;\n    background-color: #ffffff;\n    border-top: solid 1px #efefef;\n  }\n  \n  .message-form[_ngcontent-%COMP%] {\n    margin-left: 200px;\n  }\n  \n  .message-form-field[_ngcontent-%COMP%] {\n    width: 94%;\n    margin: 0 4% 0 2%;\n  }\n  \n  .message-box[_ngcontent-%COMP%] {\n    float: left;\n    width: 98%;\n    margin: 5px 0 0 2%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: 40px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%] {\n    position: relative;\n    background: #dcf8c6;\n    border-top-left-radius: .4em;\n    border-bottom-left-radius: .4em;\n    border-bottom-right-radius: .4em;\n    padding: 5px 10px 10px;\n    left: 15%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]   span.msg-name[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    color: green;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]   span.msg-date[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 13px;\n    width: 0;\n    height: 0;\n    border: 27px solid transparent;\n    border-left-color: #dcf8c6;\n    border-right: 0;\n    border-top: 0;\n    margin-top: -13.5px;\n    margin-right: -27px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%] {\n    position: relative;\n    background: lightblue;\n    border-top-right-radius: .4em;\n    border-bottom-left-radius: .4em;\n    border-bottom-right-radius: .4em;\n    padding: 5px 10px 10px;\n    left: 5%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]   span.msg-name[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    color: blue;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]   span.msg-date[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 13px;\n    width: 0;\n    height: 0;\n    border: 27px solid transparent;\n    border-right-color: lightblue;\n    border-left: 0;\n    border-top: 0;\n    margin-top: -13.5px;\n    margin-left: -27px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%] {\n    min-height: 49px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%]   .chat-date[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 10px;\n    font-style: italic;\n    color: #fff;\n    text-shadow: 0px -1px 0px #222, 0px 1px 0px #aaa;\n    height: 15px;\n    left: 10%;\n    right:10%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%]   .chat-content-center[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    background-color: #e1e1f7;\n    border-radius: 6px;\n    font-size: 12px;\n    color: #555;\n    height: 34px;\n    left: 10%;\n    right:10%;\n  }\n  \n  .chat-content[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: 600px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07RUFDUjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWixTQUFTO0lBQ1QsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2YiLCJmaWxlIjoiY2hhdHJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICAuZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgLmxlZnQtZHJhd2VyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gIC51c2Vycy1wYW5lIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIFxuICAudXNlcnMtY2FyZCB7XG4gICAgbWFyZ2luOiA1cHggMjBweDtcbiAgfVxuICBcbiAgLnVzZXJuYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICBmb290ZXIuc3RpY2t5LWZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VmZWZlZjtcbiAgfVxuICBcbiAgLm1lc3NhZ2UtZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9XG4gIFxuICAubWVzc2FnZS1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbjogMCA0JSAwIDIlO1xuICB9XG4gIFxuICAubWVzc2FnZS1ib3gge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiA1cHggMCAwIDIlO1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIC5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNkY2Y4YzY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjRlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNGVtO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XG4gICAgbGVmdDogMTUlO1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuICAuY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEzcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjZjhjNjtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI3cHg7XG4gIH1cbiAgLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC40ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjRlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICAgIGxlZnQ6IDUlO1xuICB9XG4gIC5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlIHNwYW4ubXNnLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuICAuY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMTNweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogLTEzLjVweDtcbiAgICBtYXJnaW4tbGVmdDogLTI3cHg7XG4gIH1cbiAgXG4gIC5jaGF0LW1lc3NhZ2UgLmNoYXQtc3RhdHVzIHtcbiAgICBtaW4taGVpZ2h0OiA0OXB4O1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIC5jaGF0LXN0YXR1cyAuY2hhdC1kYXRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggIzIyMiwgMHB4IDFweCAwcHggI2FhYTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OjEwJTtcbiAgfVxuICBcbiAgLmNoYXQtbWVzc2FnZSAuY2hhdC1zdGF0dXMgLmNoYXQtY29udGVudC1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZjc7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OjEwJTtcbiAgfVxuICBcbiAgLmNoYXQtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatroom',
                templateUrl: './chatroom.component.html',
                styleUrls: ['./chatroom.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }]; }, { chatcontent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatcontent']
        }] }); })();


/***/ }),

/***/ "1l70":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/anality-t/anality-t.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnalityTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalityTComponent", function() { return AnalityTComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");





class AnalityTComponent {
    constructor(firestoreSvc) {
        this.firestoreSvc = firestoreSvc;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto',
            'septiembre', 'octubre', 'noviembre', 'diciembre'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [];
        this.enero = 0;
        this.febrero = 0;
        this.marzo = 0;
        this.abril = 0;
        this.mayo = 0;
        this.junio = 0;
        this.julio = 0;
        this.agosto = 0;
        this.septiembre = 0;
        this.octubre = 0;
        this.noviembre = 0;
        this.diciembre = 0;
        this.pagos = firestoreSvc.getT();
    }
    ngOnInit() {
        this.compararTransaccion_dia_dia();
    }
    compararTransaccion_dia_dia() {
        this.pagos.subscribe(pagos => {
            for (let index = 0; index < pagos.length; index++) {
                switch (pagos[index].fecha.split('/')[1]) {
                    case '1':
                        this.enero++;
                        break;
                    case '2':
                        this.febrero++;
                        break;
                    case '3':
                        this.marzo++;
                        break;
                    case '4':
                        this.abril++;
                        break;
                    case '5':
                        this.mayo++;
                        break;
                    case '6':
                        this.junio++;
                        break;
                    case '7':
                        this.julio++;
                        break;
                    case '8':
                        this.agosto++;
                        break;
                    case '9':
                        this.septiembre++;
                        break;
                    case '10':
                        this.octubre++;
                        break;
                    case '11':
                        this.noviembre++;
                        break;
                    case '12':
                        this.diciembre++;
                        break;
                }
            }
            this.barChartData = [{ data: [this.enero, this.febrero, this.marzo, this.abril, this.mayo, this.junio,
                        this.julio, this.agosto, this.septiembre, this.octubre, this.noviembre, this.diciembre], label: 'transacciones' }];
        });
    }
}
AnalityTComponent.ɵfac = function AnalityTComponent_Factory(t) { return new (t || AnalityTComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
AnalityTComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalityTComponent, selectors: [["app-anality-t"]], decls: 2, vars: 6, consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function AnalityTComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFsaXR5LXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalityTComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anality-t',
                templateUrl: './anality-t.component.html',
                styleUrls: ['./anality-t.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "23+/":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/user-encuesta/user-encuesta.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserEncuestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEncuestaComponent", function() { return UserEncuestaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class UserEncuestaComponent {
    constructor(firestoreSvc, userSvc) {
        this.firestoreSvc = firestoreSvc;
        this.userSvc = userSvc;
        this.sexos = [
            { value: 'masculino', viewValue: 'Masculino' },
            { value: 'femenino', viewValue: 'Femenino' },
            { value: 'Otro', viewValue: 'otro' },
        ];
    }
    ngOnInit() {
        this.getMIencuesta();
    }
    getMIencuesta() {
        this.userE = this.userSvc.getUserEncuesta();
        this.edad = this.userE.encuesta.edad;
        this.sexo = this.userE.encuesta.sexo;
        this.ingreso = this.userE.encuesta.ingreso;
        this.trabajo = this.userE.encuesta.trabajo;
        this.nivelEscolar = this.userE.encuesta.nivelEscolar;
        this.productosPreferidos = this.userE.encuesta.productosPreferidos;
        this.esperanza = this.userE.encuesta.esperanza;
    }
}
UserEncuestaComponent.ɵfac = function UserEncuestaComponent_Factory(t) { return new (t || UserEncuestaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
UserEncuestaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEncuestaComponent, selectors: [["app-user-encuesta"]], decls: 44, vars: 7, consts: [[1, "contenedor"], [1, "example-form-field"], ["matInput", "", "type", "number", "readonly", "", "onmousedown", "return false;", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "readonly", "", "onmousedown", "return false;", 3, "ngModel", "ngModelChange"], ["matInput", "", "readonly", "", "onmousedown", "return false;", "type", "text", 3, "ngModel", "ngModelChange"]], template: function UserEncuestaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00BFCuantos a\u00F1os tienes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_6_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00BFCual es tu genero?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_12_listener($event) { return ctx.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00BFCual es el ingreso de tu familia?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_18_listener($event) { return ctx.ingreso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00BFA que te dedicas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_24_listener($event) { return ctx.trabajo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00BFCual es tu nivel escolar o universitario?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_30_listener($event) { return ctx.nivelEscolar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00BFCual o cuales son tus productos preferidos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_36_listener($event) { return ctx.productosPreferidos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00BFEsperas que tu producto favorezca tu vida en mas de una forma?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEncuestaComponent_Template_input_ngModelChange_42_listener($event) { return ctx.esperanza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ingreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trabajo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nivelEscolar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productosPreferidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.esperanza);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["@charset \"UTF-8\";\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  max-width: 600px;\n}\n.contenedor[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  \n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VzZXItZW5jdWVzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0k7RUFFSSxXQUFBO0VBRUEsa0JBQUE7QUFEUjtBQU9JO0VBQ0ksa0JBQUE7QUFMUjtBQVFJO0VBRUksWUFBQTtFQUFjLGlFQUFBO0VBQ2QsZ0JBQUE7RUFDQSwyQkFBQTtBQU5SO0FBYUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFWSjtBQWNFO0VBQ0UsY0FBQTtBQVhKIiwiZmlsZSI6InVzZXItZW5jdWVzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjoxcmVtIGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcblxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbiAgICB9XG5cblxuICAgIHB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gXG4gICAgYnV0dG9ue1xuXG4gICAgICAgIHdpZHRoOiAxMTBweDsgLyogUGFyYSBxdWUgbm8gc2Ugcm9tcGEgZW4gZG9zIGzDrW5lYXMsIHkgbG8gdHJhbnNsYWRlIHRhbCBjdWFsLiAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxufSBcblxuXG5cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICBcbiAgfVxuICBcbiAgLmV4YW1wbGUtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEncuestaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-encuesta',
                templateUrl: './user-encuesta.component.html',
                styleUrls: ['./user-encuesta.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }, { type: _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "2tXk":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/toolbar-login/toolbar-login.component.ts ***!
  \****************************************************************************/
/*! exports provided: ToolbarLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarLoginComponent", function() { return ToolbarLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ToolbarLoginComponent {
    constructor() {
        this.appName = 'ngOnline';
    }
    ngOnInit() {
    }
}
ToolbarLoginComponent.ɵfac = function ToolbarLoginComponent_Factory(t) { return new (t || ToolbarLoginComponent)(); };
ToolbarLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarLoginComponent, selectors: [["app-toolbar-login"]], decls: 9, vars: 1, consts: [["color", "primary", 1, "yellow"], ["routerLink", "/"], ["routerLink", "/", "routerLinkActive", "active"], [1, "material-icons"], [1, "fill-remaining-space"]], template: function ToolbarLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appName);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["mat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rvb2xiYXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsV0FBQTtBQUFKOztBQU1HO0VBRUMsV0FBQTtFQUNBLHFCQUFBO0FBSko7O0FBUUc7RUFFQyxlQUFBO0VBQ0EsV0FBQTtBQU5KIiwiZmlsZSI6InRvb2xiYXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbntcblxuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB3aWR0aDogNTBweDtcblxuXG4gICB9XG5cblxuICAgYXtcblxuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgIH1cblxuXG4gICBzcGFue1xuXG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar-login',
                templateUrl: './toolbar-login.component.html',
                styleUrls: ['./toolbar-login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4cfA":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/authCrud.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCrudService", function() { return AuthCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");








class AuthCrudService {
    constructor(afs, authSvc) {
        this.afs = afs;
        this.authSvc = authSvc;
        this.uid = '';
        this.domiciliariosCollection = afs.collection('domiciliarios');
        this.usersCollection = afs.collection('clientes');
        this.vendedorCollection = afs.collection('vendedores');
        this.pagoCollection = afs.collection('pagos');
    }
    onDeleteUser(userId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.usersCollection.doc(userId).delete();
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    onSaveUser(name, apellido, gmail, cedula, direccion, pais, rol, userId, telefono) {
        var user = {
            name: name,
            apellido: apellido,
            gmail: gmail,
            cedula: cedula,
            direccion: direccion,
            pais: pais,
            role: rol,
            telefono: telefono,
            id: userId
        };
        this.usersCollection.doc(userId).set(user);
    }
    getUsers() {
        return this.usersCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getDomici() {
        return this.domiciliariosCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getT() {
        return this.pagoCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getEncuesta(path) {
        return this.afs.collection(path).valueChanges();
    }
    getChats(path) {
        return this.afs.collection(path)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getTareas() {
        this.tareasCollection = this.afs.collection('tareas');
        return this.tareasCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getPedidos(path) {
        this.pedidosCollection = this.afs.collection(path);
        return this.pedidosCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getDoc(path, uid) {
        return this.afs.doc(`${path}/${uid}`).valueChanges();
    }
    createDoc(data, path, id) {
        const collection = this.afs.collection(path).doc(id).set(data);
        return collection;
    }
    create(data, path, id) {
        const collection = this.afs.collection(path).doc(id).set(data);
        return collection;
    }
    createD(data, path, id) {
        const domiciliario = {
            nombre: data.nombre,
            apellido: data.apellido,
            correo: data.correo,
            telefono: data.telefono,
            pedidos: data.pedidos,
            id: id
        };
        const collection = this.afs.collection(path).doc(id).set(domiciliario);
        return collection;
    }
    docT(data, path) {
        const id = this.afs.createId();
        data.id = id;
        const collection = this.afs.collection(path).doc(id).set(data);
        return collection;
    }
    doc(data, path) {
        const id = this.afs.createId();
        const collection = this.afs.collection(path).doc(id).set(data);
        return collection;
    }
    deleteDoc(path, id) {
        const collection = this.afs.collection(path).doc(id).delete();
        return collection;
    }
    updateDoc(data, path, id) {
        const collection = this.afs.collection(path).doc(id).update(data);
        return collection;
    }
    getCollectionQuery(path, parametro, condicion, busqueda) {
        const collection = this.afs.collection(path, ref => ref.where(parametro, condicion, busqueda));
        return collection.valueChanges();
    }
    getPedidosAll() {
        const path = 'pedidos';
        const collection = this.afs.collectionGroup(path);
        return collection.valueChanges();
    }
    getCollectionAll(path, parametro, condicion, busqueda, startAt) {
        if (startAt == null) {
            startAt = new Date();
        }
        const collection = this.afs.collectionGroup(path, ref => ref.where(parametro, condicion, busqueda)
            .orderBy('fecha', 'desc')
            .limit(2)
            .startAfter(startAt));
        return collection.valueChanges();
    }
}
AuthCrudService.ɵfac = function AuthCrudService_Factory(t) { return new (t || AuthCrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AuthCrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthCrudService, factory: AuthCrudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthCrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "4wBk":
/*!************************************************!*\
  !*** ./src/app/shared/services/sendProduct.ts ***!
  \************************************************/
/*! exports provided: SendProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendProductService", function() { return SendProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SendProductService {
    constructor(http) {
        this.http = http;
    }
    sendEstadoProduct(body) {
        return this.http.post('http://localhost:5000/estadoPedido', body);
    }
    sendEntregadoProduct(body) {
        return this.http.post('http://localhost:2000/entregadoPedido', body);
    }
}
SendProductService.ɵfac = function SendProductService_Factory(t) { return new (t || SendProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SendProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SendProductService, factory: SendProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SendProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6KrS":
/*!****************************************************************!*\
  !*** ./src/app/components/posts/edit-post/edit-post.module.ts ***!
  \****************************************************************/
/*! exports provided: EditPostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostModule", function() { return EditPostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class EditPostModule {
}
EditPostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditPostModule });
EditPostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditPostModule_Factory(t) { return new (t || EditPostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditPostModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "70zx":
/*!*****************************************!*\
  !*** ./src/app/guards/guard-d.guard.ts ***!
  \*****************************************/
/*! exports provided: GuardDGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardDGuard", function() { return GuardDGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);









class GuardDGuard {
    constructor(authSvc, firestoreSvc, router) {
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.router = router;
        this.active = false;
        this.uid = '';
        this.comprobarDomici();
    }
    comprobarDomici() {
        this.authSvc.afAuth1.user.subscribe(res => {
            const path = 'domiciliarios';
            this.firestoreSvc.getDoc(path, res.uid).subscribe(user => {
                if (user) {
                    this.active = true;
                }
                else {
                    this.active = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Acceso no permitido').then(() => {
                        this.router.navigate(['/home']);
                    });
                }
            });
        });
        return this.active;
    }
    canActivate(route, state) {
        return this.active;
    }
}
GuardDGuard.ɵfac = function GuardDGuard_Factory(t) { return new (t || GuardDGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GuardDGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuardDGuard, factory: GuardDGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardDGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "8TYY":
/*!**************************************************************!*\
  !*** ./src/app/components/chat/addroom/addroom.component.ts ***!
  \**************************************************************/
/*! exports provided: MyErrorStateMatcher, AddroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddroomComponent", function() { return AddroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function AddroomComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter room name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class AddroomComponent {
    constructor(router, route, formBuilder, snackBar) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.nickname = '';
        this.roomname = '';
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('rooms/');
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.roomForm = this.formBuilder.group({
            'roomname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        const room = form;
        this.ref.orderByChild('roomname').equalTo(room.roomname).once('value', (snapshot) => {
            if (snapshot.exists()) {
                this.snackBar.open('Room name already exist!');
            }
            else {
                firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('rooms/').push().set(room);
                this.router.navigate(['/roomlist']);
            }
        });
    }
}
AddroomComponent.ɵfac = function AddroomComponent_Factory(t) { return new (t || AddroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AddroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddroomComponent, selectors: [["app-addroom"]], decls: 14, vars: 4, consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter room name", "formControlName", "roomname", 3, "errorStateMatcher"], [4, "ngIf"], [1, "button-row"], ["type", "submit", "mat-fab", "", "color", "primary", 3, "disabled"]], template: function AddroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddroomComponent_Template_form_ngSubmit_1_listener() { return ctx.onFormSubmit(ctx.roomForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please enter new Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Room Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddroomComponent_span_9_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roomForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.roomForm.get("roomname").valid && ctx.roomForm.get("roomname").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.roomForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".example-container[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 5px;\n  }\n  \n  .example-form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .example-full-width[_ngcontent-%COMP%]:nth-last-child(0) {\n    margin-bottom: 10px;\n  }\n  \n  .button-row[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  \n  .mat-flat-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoiYWRkcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKDApIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuYnV0dG9uLXJvdyB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgXG4gIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addroom',
                templateUrl: './addroom.component.html',
                styleUrls: ['./addroom.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "9KBI":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/anality-precios/anality-precios.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AnalityPreciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalityPreciosComponent", function() { return AnalityPreciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");





class AnalityPreciosComponent {
    constructor(firestoreSvc) {
        this.firestoreSvc = firestoreSvc;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.precioTotalPedidos = 0;
        this.user$ = this.firestoreSvc.getUsers();
    }
    ngOnInit() {
        this.getAllClient();
    }
    getAllClient() {
        this.user$.subscribe(user => {
            for (let index = 0; index < user.length; index++) {
                this.precioTotalPedidos = 0;
                this.doughnutChartLabels[index] = user[index].name;
                const path = `clientes/${user[index].id}/pedidos`;
                this.firestoreSvc.getPedidos(path).subscribe(pedido => {
                    if (pedido.length) {
                        for (let index1 = 0; index1 < pedido.length; index1++) {
                            this.precioTotalPedidos = this.precioTotalPedidos + pedido[index1].precioTotal;
                            this.doughnutChartData[index] = [this.precioTotalPedidos / 2];
                        }
                    }
                });
            }
        });
        this.doughnutChartData = [];
        this.doughnutChartLabels = [];
    }
}
AnalityPreciosComponent.ɵfac = function AnalityPreciosComponent_Factory(t) { return new (t || AnalityPreciosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
AnalityPreciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalityPreciosComponent, selectors: [["app-anality-precios"]], decls: 5, vars: 3, consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"]], template: function AnalityPreciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "precio total de los pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FuYWxpdHktcHJlY2lvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYW5hbGl0eS1wcmVjaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalityPreciosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anality-precios',
                templateUrl: './anality-precios.component.html',
                styleUrls: ['./anality-precios.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "9PSG":
/*!*******************************************************************!*\
  !*** ./src/app/components/posts/edit-post/edit-post.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/data.service */ "iiaH");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product.service */ "uJAp");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















class EditPostComponent {
    constructor(productSvc, authSvc, data, firestoreSvc) {
        this.productSvc = productSvc;
        this.authSvc = authSvc;
        this.data = data;
        this.firestoreSvc = firestoreSvc;
        this.uid = '';
        this.newPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ciudad_de_exportacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            tipo_producto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]),
        });
    }
    ngOnInit() {
        this.product = this.data.getProduct();
        this.productSvc.getOnePost(this.product.id).subscribe(post => {
            this.product$ = post;
        });
    }
    EditPost(data) {
        this.productSvc.preUpdate(data, this.product$.image, this.image);
    }
    handleImage(event) {
        this.image = event.target.files[0];
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
        }).then(result => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!, Your post has been update.', 'sucessfull');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error!, There was an error updating this post', 'error');
            }
        });
    }
}
EditPostComponent.ɵfac = function EditPostComponent_Factory(t) { return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"])); };
EditPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPostComponent, selectors: [["app-edit-post"]], decls: 24, vars: 5, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "nombre", "formControlName", "tipo_producto", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "valor", "formControlName", "valor", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "cuidad de exportacion", "formControlName", "ciudad_de_exportacion", 3, "ngModel", "ngModelChange"], [1, "container-input-file"], [1, "custom-file"], ["type", "file", "formControlName", "imagen", 3, "change"], [1, "container-button"], ["type", "submit", "value", "Save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function EditPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPostComponent_Template_form_ngSubmit_1_listener() { return ctx.EditPost(ctx.newPostForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPostComponent_Template_input_ngModelChange_6_listener($event) { return ctx.product$.tipo_producto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPostComponent_Template_input_ngModelChange_10_listener($event) { return ctx.product$.valor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "cuidad de exportacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPostComponent_Template_input_ngModelChange_14_listener($event) { return ctx.product$.ciudad_de_exportacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditPostComponent_Template_input_change_17_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CHOOSE IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPostComponent_Template_input_click_23_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product$.tipo_producto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product$.valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product$.ciudad_de_exportacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFFSSxtQkFBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0FBQ1o7QUFFUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUFaO0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjtBQUdRO0VBRUksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZaO0FBTVE7RUFFSSxjQUFBO0FBTFo7QUFRUTtFQUNJLGdCQUFBO0FBTlo7QUFVUTtFQUNJLFdBQUE7QUFSWiIsImZpbGUiOiJlZGl0LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LXBvc3QtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGZvcm17XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaW5wdXRbdHlwZT0nZmlsZSdde1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICB9XG4gICAgICAgIGlucHV0Lm1hdC1mbGF0LWJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXN0b20tZmlsZXtcblxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItaW5wdXQtZmlsZXtcblxuICAgICAgICAgICAgbWFyZ2luOiAgMnJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1idXR0b257XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-post',
                templateUrl: './edit-post.component.html',
                styleUrls: ['./edit-post.component.scss']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "9qLr":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/container-logins/container-logins.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContainerLoginsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerLoginsComponent", function() { return ContainerLoginsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _shared_components_toolbar_login_toolbar_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/toolbar-login/toolbar-login.component */ "2tXk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");








class ContainerLoginsComponent {
    constructor(authSvc, firestoreSvc) {
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
    }
    ngOnInit() {
    }
}
ContainerLoginsComponent.ɵfac = function ContainerLoginsComponent_Factory(t) { return new (t || ContainerLoginsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"])); };
ContainerLoginsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerLoginsComponent, selectors: [["app-container-logins"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function ContainerLoginsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_toolbar_login_toolbar_login_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarLoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXItbG9naW5zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerLoginsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-logins',
                templateUrl: './container-logins.component.html',
                styleUrls: ['./container-logins.component.css']
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "AKzV":
/*!***************************************!*\
  !*** ./src/app/guards/guard.guard.ts ***!
  \***************************************/
/*! exports provided: GuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardGuard", function() { return GuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/auth.service */ "jC6o");









class GuardGuard {
    constructor(authSvc, firestoreSvc, router) {
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.router = router;
        this.active = false;
        this.uid = '';
        this.comprobarVendedor();
    }
    comprobarVendedor() {
        this.authSvc.afAuth.user.subscribe(res => {
            if (res.uid == 'Dik2UyFl6wQ0EamZoHrDIKGQj1e2') {
                this.active = true;
            }
            else {
                this.active = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Acceso no permitido').then(() => {
                    this.router.navigate(['/home']);
                });
            }
        });
        return this.active;
    }
    canActivate(route, state) {
        return this.active;
    }
}
GuardGuard.ɵfac = function GuardGuard_Factory(t) { return new (t || GuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuardGuard, factory: GuardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDEdedrhOEhmEakXSpBByQ4r6rbIv_v3o4",
        authDomain: "ngblogventa.firebaseapp.com",
        databaseURL: "https://ngblogventa-default-rtdb.firebaseio.com",
        projectId: "ngblogventa",
        storageBucket: "ngblogventa.appspot.com",
        messagingSenderId: "913007174996",
        appId: "1:913007174996:web:1ef22535290997591254c1",
        measurementId: "G-DVDLJD7296"
    },
    API_URL: 'http://localhost:3000'
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

/***/ "D5WO":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/modal-list-domici/modal-list-domici.component.ts ***!
  \************************************************************************************/
/*! exports provided: ModalListDomiciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalListDomiciComponent", function() { return ModalListDomiciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_pages_list_domiciliario_list_domiciliario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/pages/list-domiciliario/list-domiciliario.component */ "gB5A");




class ModalListDomiciComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalListDomiciComponent.ɵfac = function ModalListDomiciComponent_Factory(t) { return new (t || ModalListDomiciComponent)(); };
ModalListDomiciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalListDomiciComponent, selectors: [["app-modal-list-domici"]], decls: 2, vars: 0, consts: [[1, "dialog-content"]], template: function ModalListDomiciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-list-domiciliario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_pages_list_domiciliario_list_domiciliario_component__WEBPACK_IMPORTED_MODULE_2__["ListDomiciliarioComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1saXN0LWRvbWljaS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalListDomiciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-list-domici',
                templateUrl: './modal-list-domici.component.html',
                styleUrls: ['./modal-list-domici.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Dj/G":
/*!****************************************************!*\
  !*** ./src/app/shared/services/carrito.service.ts ***!
  \****************************************************/
/*! exports provided: CarritoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoService", function() { return CarritoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authCrud.service */ "4cfA");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");









class CarritoService {
    constructor(authSvc, router, firestore) {
        this.authSvc = authSvc;
        this.router = router;
        this.firestore = firestore;
        this.pedido$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.path = 'carrito';
        this.uid = '';
        this.authSvc.afAuth.authState.subscribe(res => {
            if (res !== null && res.emailVerified) {
                this.uid = res.uid;
                this.initCarrito();
                this.loadUser();
                this.loadCarrito();
            }
            else if (res) {
                router.navigate(['/sendEmail']);
            }
            else {
                router.navigate(['/home']);
            }
        });
    }
    loadUser() {
        const path = 'clientes';
        this.firestore.getDoc(path, this.uid).subscribe(res => {
            this.pedido = {
                id: this.uid,
                cliente: res,
                productos: [],
                precioTotal: null,
                estado: 'enviado',
                fecha: new Date(),
                valoracion: null,
            };
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
        this.pedido$.next(this.pedido);
    }
    loadCarrito() {
        const path = `clientes/${this.uid}/${this.path}`;
        if (this.carritoSuscriber) {
            this.carritoSuscriber.unsubscribe();
        }
        this.carritoSuscriber = this.firestore.getDoc(path, this.uid).subscribe(res => {
            console.log(res);
            if (res) {
                this.pedido = res;
                this.pedido$.next(this.pedido);
            }
            else {
                this.initCarrito();
            }
        });
    }
    getCarrito() {
        return this.pedido$.asObservable();
    }
    addProduct(producto) {
        const item = this.pedido.productos.find(productoPedido => {
            return (productoPedido.producto.id == producto.id);
        });
        if (item !== undefined) {
            item.cantidad = item.cantidad + 1;
        }
        else {
            const add = {
                cantidad: 1,
                producto
            };
            this.pedido.productos.push(add);
        }
        this.pedido$.next(this.pedido);
        const path = `clientes/${this.uid}/${this.path}`;
        this.firestore.createDoc(this.pedido, path, this.uid).then(() => {
            console.log('añadido con exito');
        });
    }
    realizarPedido() {
    }
    removeProduct(producto) {
        let position = 0;
        const item = this.pedido.productos.find((productoPedido, index) => {
            position = index;
            return (productoPedido.producto.id == producto.id);
        });
        if (item !== undefined) {
            item.cantidad = item.cantidad - 1;
            if (item.cantidad == 0) {
                this.pedido.productos.splice(position, 1);
            }
            console.log('remove->', this.pedido);
            const path = `clientes/${this.uid}/${this.path}`;
            this.firestore.createDoc(this.pedido, path, this.uid).then(() => {
                console.log('añadido con exito');
            });
        }
    }
    clearCarrito() {
        const path = `clientes/${this.uid}/${this.path}`;
        this.firestore.deleteDoc(path, this.uid).then(() => {
            this.initCarrito();
        });
    }
}
CarritoService.ɵfac = function CarritoService_Factory(t) { return new (t || CarritoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"])); };
CarritoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarritoService, factory: CarritoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarritoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "JGgF":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/modal-vehiculo/modal-vehiculo.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVehiculoComponent", function() { return ModalVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_pages_new_vehiculo_new_vehiculo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/pages/new-vehiculo/new-vehiculo.component */ "+GYW");




class ModalVehiculoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalVehiculoComponent.ɵfac = function ModalVehiculoComponent_Factory(t) { return new (t || ModalVehiculoComponent)(); };
ModalVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalVehiculoComponent, selectors: [["app-modal-vehiculo"]], decls: 4, vars: 0, consts: [[1, "dialog-content"]], template: function ModalVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new Vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-new-vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_pages_new_vehiculo_new_vehiculo_component__WEBPACK_IMPORTED_MODULE_2__["NewVehiculoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC12ZWhpY3Vsby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-vehiculo',
                templateUrl: './modal-vehiculo.component.html',
                styleUrls: ['./modal-vehiculo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lfae":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/modal-edit-domici/modal-edit-domici.component.ts ***!
  \************************************************************************************/
/*! exports provided: ModalEditDomiciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditDomiciComponent", function() { return ModalEditDomiciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_posts_edit_domici_edit_domici_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/posts/edit-domici/edit-domici.component */ "aVC8");




class ModalEditDomiciComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalEditDomiciComponent.ɵfac = function ModalEditDomiciComponent_Factory(t) { return new (t || ModalEditDomiciComponent)(); };
ModalEditDomiciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalEditDomiciComponent, selectors: [["app-modal-edit-domici"]], decls: 2, vars: 0, consts: [[1, "dialog-content"]], template: function ModalEditDomiciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-edit-domici");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_posts_edit_domici_edit_domici_component__WEBPACK_IMPORTED_MODULE_2__["EditDomiciComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0LWRvbWljaS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalEditDomiciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-edit-domici',
                templateUrl: './modal-edit-domici.component.html',
                styleUrls: ['./modal-edit-domici.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OAro":
/*!*******************************************************************!*\
  !*** ./src/app/components/item-carrito/item-carrito.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemCarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCarritoComponent", function() { return ItemCarritoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/valor.service */ "VVFE");
/* harmony import */ var _app_shared_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/carrito.service */ "Dj/G");
/* harmony import */ var _app_shared_services_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/producto.service */ "o1Bm");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "jC6o");
/* harmony import */ var _app_serviceT_service_t_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/serviceT/service-t.service */ "dFYn");
/* harmony import */ var _app_shared_paypal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/paypal.service */ "ipUY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



























function ItemCarritoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemCarritoComponent_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const producto_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addProducto(producto_r1.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemCarritoComponent_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const producto_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.resProducto(producto_r1.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", producto_r1.producto.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nombre: ", producto_r1.producto.tipo_producto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" cantidad: ", producto_r1.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("valor: ", producto_r1.producto.valor, "");
} }
class ItemCarritoComponent {
    constructor(Http, valorSvc, carritoSvc, productoSvc, firestoreSvc, firesore, authSvc, totalSvc, serviceTService, paypalSvc, router) {
        this.Http = Http;
        this.valorSvc = valorSvc;
        this.carritoSvc = carritoSvc;
        this.productoSvc = productoSvc;
        this.firestoreSvc = firestoreSvc;
        this.firesore = firesore;
        this.authSvc = authSvc;
        this.totalSvc = totalSvc;
        this.serviceTService = serviceTService;
        this.paypalSvc = paypalSvc;
        this.router = router;
        this.uid1 = '';
        this.uid = '';
        this.num = 1;
        this.cantidad = 0;
        this.cantidades = [];
        this.contador = 0;
        this.initCarrito();
        this.authSvc.afAuth.authState.subscribe(res => {
            this.uid = res.uid;
            const path = 'clientes';
            this.firestoreSvc.getDoc(path, res.uid).subscribe(user => {
                this.cliente = user;
            });
        });
    }
    ngOnInit() {
        this.loadPedido();
    }
    addProducto(producto) {
        this.carritoSvc.addProduct(producto);
    }
    resProducto(producto) {
        this.carritoSvc.removeProduct(producto);
    }
    loadPedido() {
        this.carritoSuscriber = this.carritoSvc.getCarrito().subscribe(res => {
            console.log('loadPedido() en carrito', res);
            if (res) {
                res.cliente = this.cliente;
                this.pedido = res;
                this.getTotal();
                this.getCantidad();
            }
            else {
                console.log('error pedido no traido');
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
    getTotal() {
        this.carritoTotal = 0;
        this.pedido.productos.forEach(producto => {
            this.carritoTotal = (producto.producto.valor) * producto.cantidad + this.carritoTotal;
            this.total = (producto.producto.valor) * producto.cantidad + this.carritoTotal;
        });
    }
    getCantidad() {
        this.cantidad = 0;
        this.pedido.productos.forEach(producto => {
            this.cantidad = producto.cantidad + this.cantidad;
        });
    }
    pedir() {
        if (!this.pedido.productos.length) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('añada productos al carrito');
            return;
        }
        else {
            this.router.navigate(['/pago']);
        }
        this.pedido.fecha = new Date();
        this.pedido.precioTotal = this.carritoTotal;
        this.pedido.id = this.firesore.createId();
        this.serviceTService.setPedidoT(this.pedido);
        this.paypalSvc.setPedidoPaypal(this.pedido);
        this.totalSvc.setValorTotal(this.carritoTotal);
        this.producto();
        this.carritoSvc.clearCarrito();
    }
    producto() {
        this.pedido.precioTotal = this.total;
        this.productoSvc.setProducto(this.pedido);
    }
}
ItemCarritoComponent.ɵfac = function ItemCarritoComponent_Factory(t) { return new (t || ItemCarritoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_2__["ValorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_2__["ValorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_serviceT_service_t_service__WEBPACK_IMPORTED_MODULE_8__["ServiceTService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_paypal_service__WEBPACK_IMPORTED_MODULE_9__["PaypalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
ItemCarritoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemCarritoComponent, selectors: [["app-item-carrito"]], decls: 13, vars: 3, consts: [["class", "flexp ", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "btn-flotante", 3, "click"], [1, "flexp"], [3, "src"], ["mat-fab", "", "color", "primary", 3, "click"]], template: function ItemCarritoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemCarritoComponent_div_3_Template, 15, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemCarritoComponent_Template_a_click_6_listener() { return ctx.pedir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedido.productos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" cantidad: ", ctx.cantidad, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" total: $", ctx.carritoTotal, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: ["@charset \"UTF-8\";\nmat-card[_ngcontent-%COMP%] {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n}\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.btn-flotante[_ngcontent-%COMP%] {\n  font-size: 16px;\n  \n  text-transform: uppercase;\n  \n  font-weight: bold;\n  \n  color: #ffffff;\n  \n  border-radius: 5px;\n  \n  letter-spacing: 2px;\n  \n  background-color: #E91E63;\n  \n  padding: 18px 30px;\n  \n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  transition: all 300ms ease 0ms;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  z-index: 99;\n}\n.btn-flotante[_ngcontent-%COMP%]:hover {\n  background-color: #2c2fa5;\n  \n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);\n  transform: translateY(-7px);\n}\n@media only screen and (max-width: 600px) {\n  .btn-flotante[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n}\n.flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\n.flexp[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.btn-flotante[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n  \n  text-transform: uppercase;\n  \n  font-weight: bold;\n  \n  color: #ffffff;\n  \n  border-radius: 5px;\n  \n  letter-spacing: 2px;\n  \n  background-color: #E91E63;\n  \n  padding: 18px 30px;\n  \n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  transition: all 300ms ease 0ms;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  z-index: 99;\n}\n.btn-flotante[_ngcontent-%COMP%]:hover {\n  background-color: #2c2fa5;\n  \n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);\n  transform: translateY(-7px);\n}\n@media only screen and (max-width: 600px) {\n  .btn-flotante[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tY2Fycml0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNGLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUlBO0VBSUksZUFBQTtFQUNKLDBCQUFBO0FBTEE7QUFTQTtFQUVJLGtCQUFBO0FBUko7QUFhSTtFQUVJLFVBQUE7QUFaUjtBQXFCSTtFQUNJLGVBQUE7RUFBaUIsdUNBQUE7RUFDakIseUJBQUE7RUFBMkIsd0JBQUE7RUFDM0IsaUJBQUE7RUFBbUIsNkJBQUE7RUFDbkIsY0FBQTtFQUFnQixvQkFBQTtFQUNoQixrQkFBQTtFQUFvQixvQkFBQTtFQUNwQixtQkFBQTtFQUFxQix5QkFBQTtFQUNyQix5QkFBQTtFQUEyQixtQkFBQTtFQUMzQixrQkFBQTtFQUFvQixzQkFBQTtFQUNwQixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtBQVZSO0FBWUk7RUFDSSx5QkFBQTtFQUEyQixzQ0FBQTtFQUMzQiw0Q0FBQTtFQUNBLDJCQUFBO0FBUlI7QUFVSTtFQUNLO0lBQ0csZUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFQVjtBQUNGO0FBY0k7RUFJSSxlQUFBO0VBQ0osMEJBQUE7QUFmSjtBQW1CSTtFQUVJLFlBQUE7RUFDRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxCTjtBQXVCSTtFQUVFLGVBQUE7RUFFQSxlQUFBO0VBQWlCLHVDQUFBO0VBQ2pCLHlCQUFBO0VBQTJCLHdCQUFBO0VBQzNCLGlCQUFBO0VBQW1CLDZCQUFBO0VBQ25CLGNBQUE7RUFBZ0Isb0JBQUE7RUFDaEIsa0JBQUE7RUFBb0Isb0JBQUE7RUFDcEIsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIseUJBQUE7RUFBMkIsbUJBQUE7RUFDM0Isa0JBQUE7RUFBb0Isc0JBQUE7RUFDcEIsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUFkTjtBQWdCSTtFQUNFLHlCQUFBO0VBQTJCLHNDQUFBO0VBQzNCLDRDQUFBO0VBQ0EsMkJBQUE7QUFaTjtBQWNJO0VBQ0c7SUFDRyxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQVhSO0FBQ0Y7QUFjSTtFQUNJLGVBQUE7QUFaUiIsImZpbGUiOiJpdGVtLWNhcnJpdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1jYXJke1xuXG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cbiRyb3dIZWlnaHQ6IDQwcHg7XG4uZmxleHAge1xuXG5cblxuICAgIGNvbHVtbi1jb3VudDogMjtcbm1heC1oZWlnaHQ6IGNhbGMoNSAqICN7JHJvd0hlaWdodH0pO1xuXG5cblxuYnV0dG9ue1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICAgIH1cblxuXG4gICAgaW1ne1xuXG4gICAgICAgIHdpZHRoOiA0MCU7XG5cbiAgICB9XG5cblxufVxuXG5cblxuICAgIC5idG4tZmxvdGFudGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7IC8qIENhbWJpYXIgZWwgdGFtYcOxbyBkZSBsYSB0aXBvZ3JhZmlhICovXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IC8qIFRleHRvIGVuIG1heXVzY3VsYXMgKi9cbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEZ1ZW50ZSBlbiBuZWdyaXRhIG8gYm9sZCAqL1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgLyogQ29sb3IgZGVsIHRleHRvICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQm9yZGUgZGVsIGJvdG9uICovXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7IC8qIEVzcGFjaW8gZW50cmUgbGV0cmFzICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOTFFNjM7IC8qIENvbG9yIGRlIGZvbmRvICovXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMzBweDsgLyogUmVsbGVubyBkZWwgYm90b24gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwbXM7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgICAuYnRuLWZsb3RhbnRlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmZhNTsgLyogQ29sb3IgZGUgZm9uZG8gYWwgcGFzYXIgZWwgY3Vyc29yICovXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgIC5idG4tZmxvdGFudGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cblxuXG5cbiAgICAkcm93SGVpZ2h0OiA0MHB4O1xuICAgIC5mbGV4cCB7XG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDUgKiAjeyRyb3dIZWlnaHR9KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBtYXQtY2FyZHtcbiAgICBcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC5idG4tZmxvdGFudGUge1xuICAgIFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgICAgZm9udC1zaXplOiAxNnB4OyAvKiBDYW1iaWFyIGVsIHRhbWHDsW8gZGUgbGEgdGlwb2dyYWZpYSAqL1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgLyogVGV4dG8gZW4gbWF5dXNjdWxhcyAqL1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEZ1ZW50ZSBlbiBuZWdyaXRhIG8gYm9sZCAqL1xuICAgICAgY29sb3I6ICNmZmZmZmY7IC8qIENvbG9yIGRlbCB0ZXh0byAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBCb3JkZSBkZWwgYm90b24gKi9cbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7IC8qIEVzcGFjaW8gZW50cmUgbGV0cmFzICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTkxRTYzOyAvKiBDb2xvciBkZSBmb25kbyAqL1xuICAgICAgcGFkZGluZzogMThweCAzMHB4OyAvKiBSZWxsZW5vIGRlbCBib3RvbiAqL1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwbXM7XG4gICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICAgIC5idG4tZmxvdGFudGU6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmZhNTsgLyogQ29sb3IgZGUgZm9uZG8gYWwgcGFzYXIgZWwgY3Vyc29yICovXG4gICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgIC5idG4tZmxvdGFudGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH0gICBcblxuICAgIGJ1dHRvbntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemCarritoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-carrito',
                templateUrl: './item-carrito.component.html',
                styleUrls: ['./item-carrito.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_2__["ValorService"] }, { type: _app_shared_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"] }, { type: _app_shared_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _app_shared_services_valor_service__WEBPACK_IMPORTED_MODULE_2__["ValorService"] }, { type: _app_serviceT_service_t_service__WEBPACK_IMPORTED_MODULE_8__["ServiceTService"] }, { type: _app_shared_paypal_service__WEBPACK_IMPORTED_MODULE_9__["PaypalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ovbr":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/ver-tareas/ver-tareas.component.ts ***!
  \*********************************************************************/
/*! exports provided: VerTareasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerTareasComponent", function() { return VerTareasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/message.service */ "QLLi");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");











function VerTareasComponent_div_0_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " cedula del cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tipo de tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " tarea a hacer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " fecha de la tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerTareasComponent_div_0_mat_card_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const tarea_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.eliminarTarea(tarea_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cumplida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tarea_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tarea_r5.cedula_cliente, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tarea_r5.tipo_tarea, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tarea_r5.tarea, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tarea_r5.fecha, " ");
} }
function VerTareasComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerTareasComponent_div_0_mat_card_1_Template, 24, 4, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tareas_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tareas_r3);
} }
function VerTareasComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VerTareasComponent {
    constructor(firestoreSvc, messageService) {
        this.firestoreSvc = firestoreSvc;
        this.messageService = messageService;
        this.tarea$ = firestoreSvc.getTareas();
    }
    ngOnInit() {
    }
    eliminarTarea(tarea) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                const path = 'tareas';
                this.firestoreSvc.deleteDoc(path, tarea.id).then(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!, Your post has been deleted.', 'sucessfull');
                    this.messageService.sendMessageTarea(tarea).subscribe(res => {
                        console.log(res);
                    });
                }).catch((error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!, There was an error deleting this post', 'error');
                });
            }
        });
    }
}
VerTareasComponent.ɵfac = function VerTareasComponent_Factory(t) { return new (t || VerTareasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
VerTareasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerTareasComponent, selectors: [["app-ver-tareas"]], decls: 4, vars: 4, consts: [["class", "contenedor", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "contenedor"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "container-spinner"]], template: function VerTareasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VerTareasComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerTareasComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.tarea$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  max-width: 600px;\n}\n.contenedor[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  \n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Zlci10YXJlYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0k7RUFFSSxXQUFBO0VBRUEsa0JBQUE7QUFEUjtBQU9JO0VBQ0ksa0JBQUE7QUFMUjtBQVFJO0VBRUksWUFBQTtFQUFjLGlFQUFBO0VBQ2QsZ0JBQUE7RUFDQSwyQkFBQTtBQU5SO0FBYUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFWSjtBQWNFO0VBQ0UsY0FBQTtBQVhKIiwiZmlsZSI6InZlci10YXJlYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjoxcmVtIGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcblxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbiAgICB9XG5cblxuICAgIHB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gXG4gICAgYnV0dG9ue1xuXG4gICAgICAgIHdpZHRoOiAxMTBweDsgLyogUGFyYSBxdWUgbm8gc2Ugcm9tcGEgZW4gZG9zIGzDrW5lYXMsIHkgbG8gdHJhbnNsYWRlIHRhbCBjdWFsLiAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxufSBcblxuXG5cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICBcbiAgfVxuICBcbiAgLmV4YW1wbGUtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerTareasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ver-tareas',
                templateUrl: './ver-tareas.component.html',
                styleUrls: ['./ver-tareas.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }, { type: _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "P5so":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/container-app/container-app.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContainerAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerAppComponent", function() { return ContainerAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/toolbar/toolbar.component */ "S9hJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");








class ContainerAppComponent {
    constructor(authSvc, firestoreSvc) {
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.bolean = false;
    }
    ngOnInit() {
        this.authSvc.afAuth.user.subscribe(user => {
            if (user) {
                this.uid = user.uid;
                this.Activo(user.uid);
            }
            else {
                this.inactivo(this.uid);
                return;
            }
        });
    }
    Activo(id) {
        const path = 'clientes';
        this.firestoreSvc.getDoc(path, id).subscribe(cliente => {
            cliente.active = true;
            this.firestoreSvc.create(cliente, path, cliente.id).then(() => console.log('user active'));
        });
    }
    inactivo(id) {
        const path = 'clientes';
        this.firestoreSvc.getDoc(path, id).subscribe(cliente => {
            cliente.active = false;
            this.firestoreSvc.create(cliente, path, cliente.id).then(() => console.log('user inactivo'));
        });
    }
}
ContainerAppComponent.ɵfac = function ContainerAppComponent_Factory(t) { return new (t || ContainerAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"])); };
ContainerAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerAppComponent, selectors: [["app-container-app"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function ContainerAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXItYXBwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container-app',
                templateUrl: './container-app.component.html',
                styleUrls: ['./container-app.component.css']
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "PI8J":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/paises-mas-vendidos/paises-mas-vendidos.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PaisesMasVendidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesMasVendidosComponent", function() { return PaisesMasVendidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");





class PaisesMasVendidosComponent {
    constructor(pedidosSvc) {
        this.pedidosSvc = pedidosSvc;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.sumaTotal = 0;
        this.contador = 0;
        this.vector = [];
        this.pos = [];
        this.posi = 0;
        this.pedido$ = pedidosSvc.getPedidosAll();
    }
    ngOnInit() {
        this.getPais();
    }
    getPais() {
        this.pedido$.subscribe(paises => {
            for (let index = 0; index < paises.length; index++) {
                const nombre = paises[index].cliente.pais;
                this.vector.push(nombre);
            }
            for (let index = 0; index < this.vector.length; index++) {
                for (let index1 = 1 + index; index1 <= this.vector.length; index1++) {
                    if (this.vector[index] == this.vector[index1]) {
                        this.vector[index1] = '';
                    }
                }
            }
            this.vector.find(pais => {
                if (pais != '') {
                    this.doughnutChartLabels.push(pais);
                }
            });
            while (this.posi < this.doughnutChartLabels.length) {
                this.contador = 0;
                for (let index1 = 0; index1 < paises.length; index1++) {
                    if (paises[index1].cliente.pais == this.doughnutChartLabels[this.posi]) {
                        this.contador++;
                    }
                }
                this.doughnutChartData[this.posi] = [this.contador];
                this.posi++;
            }
        });
        this.doughnutChartData = [];
        this.doughnutChartLabels = [];
    }
}
PaisesMasVendidosComponent.ɵfac = function PaisesMasVendidosComponent_Factory(t) { return new (t || PaisesMasVendidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
PaisesMasVendidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaisesMasVendidosComponent, selectors: [["app-paises-mas-vendidos"]], decls: 2, vars: 3, consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"]], template: function PaisesMasVendidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["p[_ngcontent-%COMP%] {\n    font-family: Lato;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaXNlcy1tYXMtdmVuZGlkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJwYWlzZXMtbWFzLXZlbmRpZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaisesMasVendidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paises-mas-vendidos',
                templateUrl: './paises-mas-vendidos.component.html',
                styleUrls: ['./paises-mas-vendidos.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "PVsK":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/ventas-reales/ventas-reales.component.ts ***!
  \***************************************************************************/
/*! exports provided: VentasRealesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasRealesComponent", function() { return VentasRealesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _anality_t_anality_t_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anality-t/anality-t.component */ "1l70");
/* harmony import */ var _paises_mas_vendidos_paises_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paises-mas-vendidos/paises-mas-vendidos.component */ "PI8J");








class VentasRealesComponent {
    constructor(pedidosSvc) {
        this.pedidosSvc = pedidosSvc;
        this.view = [500, 400];
        // options
        this.showLegend = true;
        this.showLabels = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.label = ['venta global'];
        this.data = [];
        this.sumaTotal = 0;
        this.contador = 0;
        this.vector = [];
        this.pos = [];
        this.posi = 0;
        this.doughnutChartLabels = ['venta Global'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.pedido$ = pedidosSvc.getPedidosAll();
    }
    ngOnInit() {
        this.totalVentas();
    }
    totalVentas() {
        this.pedido$.subscribe(pedidos => {
            for (let index = 0; index < pedidos.length; index++) {
                this.sumaTotal += pedidos[index].precioTotal;
                // var fecha1 = String(pedidos[index].fecha.seconds * 1000);
                // const  fecha = new Date(parseInt(fecha1));
                // console.log(fecha.getDay()+'/'+(1+fecha.getMonth())+'/'+fecha.getFullYear());
            }
            this.doughnutChartData[0] = [this.sumaTotal];
            this.data.push(this.sumaTotal);
            this.single = [
                {
                    "name": this.label,
                    "value": this.data[0]
                }
            ];
        });
        this.single = [];
    }
    onSelect(event) {
        console.log(event);
    }
}
VentasRealesComponent.ɵfac = function VentasRealesComponent_Factory(t) { return new (t || VentasRealesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
VentasRealesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentasRealesComponent, selectors: [["app-ventas-reales"]], decls: 8, vars: 3, consts: [[1, "global"], [3, "view", "scheme", "results", "select"]], template: function VentasRealesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-charts-pie-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function VentasRealesComponent_Template_ngx_charts_pie_grid_select_1_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-anality-t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " paises con mas pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-paises-mas-vendidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["PieGridComponent"], _anality_t_anality_t_component__WEBPACK_IMPORTED_MODULE_4__["AnalityTComponent"], _paises_mas_vendidos_paises_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_5__["PaisesMasVendidosComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.global[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ZlbnRhcy1yZWFsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVFO0VBSUUsa0JBQUE7QUFGSjs7QUFJRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InZlbnRhcy1yZWFsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfVxuXG4gIG1hdC1jYXJke1xuXG5cbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmdsb2JhbHtcblxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentasRealesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ventas-reales',
                templateUrl: './ventas-reales.component.html',
                styleUrls: ['./ventas-reales.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "PZnL":
/*!*********************************************************************************!*\
  !*** ./src/app/components/posts/new-domiciliario/new-domiciliario.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewDomiciliarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDomiciliarioComponent", function() { return NewDomiciliarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");














class NewDomiciliarioComponent {
    constructor(firestoreSvc, authService, router) {
        this.firestoreSvc = firestoreSvc;
        this.authService = authService;
        this.router = router;
        this.newDomiciForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')),
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]+@+[a-zA-Z.]+')),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)),
        });
    }
    ngOnInit() {
    }
    loginUp(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authService.register(data.correo, data.password);
                if (user) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('user created successfully').then(() => {
                        this.addNewDomici(data, user.uid);
                    });
                }
            }
            catch (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(error.message);
            }
        });
    }
    addNewDomici(data, id) {
        const path = 'domiciliarios';
        Number(data.telefono);
        data.pedidos = [];
        this.domilicliario = console.log(this.firestoreSvc.createD(data, path, id));
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('domiciliario successfully created');
    }
}
NewDomiciliarioComponent.ɵfac = function NewDomiciliarioComponent_Factory(t) { return new (t || NewDomiciliarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NewDomiciliarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewDomiciliarioComponent, selectors: [["app-new-domiciliario"]], decls: 25, vars: 2, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "nombre", "formControlName", "nombre", "required", ""], ["matInput", "", "placeholder", "apellido", "formControlName", "apellido", "required", ""], ["matInput", "", "placeholder", "correo", "formControlName", "correo", "required", ""], ["matInput", "", "placeholder", "password", "formControlName", "password", "required", ""], ["matInput", "", "placeholder", "telefono", "formControlName", "telefono", "required", ""], [1, "container-button"], ["type", "submit", "value", "Save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function NewDomiciliarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewDomiciliarioComponent_Template_form_ngSubmit_1_listener() { return ctx.loginUp(ctx.newDomiciForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewDomiciliarioComponent_Template_input_click_24_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newDomiciForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy1kb21pY2lsaWFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBRUksbUJBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBRVE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFBWjtBQUNZO0VBQ0kseUJBQUE7QUFDaEI7QUFHUTtFQUVJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGWjtBQU1RO0VBRUksY0FBQTtBQUxaO0FBUVE7RUFDSSxnQkFBQTtBQU5aO0FBVVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFSWiIsImZpbGUiOiJuZXctZG9taWNpbGlhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1wb3N0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBmb3Jte1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGlucHV0W3R5cGU9J2ZpbGUnXXtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5tYXQtZmxhdC1idXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLWZpbGV7XG5cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWlucHV0LWZpbGV7XG5cbiAgICAgICAgICAgIG1hcmdpbjogIDJyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYnV0dG9ue1xuICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewDomiciliarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-new-domiciliario',
                templateUrl: './new-domiciliario.component.html',
                styleUrls: ['./new-domiciliario.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "QLLi":
/*!****************************************************!*\
  !*** ./src/app/shared/services/message.service.ts ***!
  \****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MessageService {
    constructor(http) {
        this.http = http;
    }
    sendMessage(body) {
        return this.http.post('http://localhost:4000/formulario', body);
    }
    sendMessageUser(body) {
        return this.http.post('http://localhost:1000/sendUser', body);
    }
    sendMessageTarea(body) {
        return this.http.post('http://localhost:500/tareaCumplida', body);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S9hJ":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.ts ***!
  \****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");

















function ToolbarComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " add_shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
function ToolbarComponent_mat_nav_list_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " history");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " event_note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " remove_red_eye ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ver tareas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " event_note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "crear tareas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " event_note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "realizar encuesta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " local_shipping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "crear vehiculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " signal_wifi_0_bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Embudo de venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "crear domiciliario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Gestion de clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " show_chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Anality");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-menu", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r17);
} }
function ToolbarComponent_mat_nav_list_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " perm_identity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Pedidos asignados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_mat_nav_list_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(authSvc, firestore) {
        this.authSvc = authSvc;
        this.firestore = firestore;
        this.opened = false;
        this.filterProduct = '';
        this.appName = 'ngOnline';
        this.isLogged = false;
        this.uid = '';
        this.admin = false;
        this.client = false;
        this.uidD = '';
        this.domiciliario = false;
        authSvc.afAuth.user.subscribe(res => {
            this.uid = res.uid;
            this.verifyAdmin();
            this.verifyClient();
        });
        authSvc.afAuth1.user.subscribe(res => {
            this.uidD = res.uid;
            this.verifyDomici();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.getCurrentUser();
                if (user) {
                    this.isLogged = true;
                }
                else {
                    this.isLogged = false;
                    console.log('deslogiado');
                }
            }
            catch (error) {
            }
        });
    }
    onlogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authSvc.logout();
        });
    }
    verifyAdmin() {
        if (this.uid == 'Dik2UyFl6wQ0EamZoHrDIKGQj1e2') {
            this.admin = true;
        }
        else {
            this.admin = false;
        }
    }
    verifyClient() {
        const path = 'clientes';
        this.firestore.getDoc(path, this.uid).subscribe(res => {
            if (res) {
                this.client = true;
            }
            else {
                this.client = false;
            }
        });
    }
    verifyDomici() {
        const path = 'domiciliarios';
        this.firestore.getDoc(path, this.uidD).subscribe(res => {
            if (res) {
                this.domiciliario = true;
            }
            else {
                this.domiciliario = false;
            }
        });
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], decls: 64, vars: 17, consts: [["color", "primary", 1, "yellow"], ["color", "primary", 3, "click"], ["routerLink", "/"], ["routerLink", "/", "routerLinkActive", "active"], [1, "material-icons"], [1, "fill-remaining-space"], ["routerLink", "/carrito", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "rojo", 3, "click"], [1, "material-icons", 3, "matMenuTriggerFor"], ["menu1", "matMenu"], ["routerLink", "/login"], ["mat-menu-item", ""], ["mode", "side", 3, "opened", "openedChange"], ["sideNav", ""], ["mat-list-item", "", "routerLink", ""], [4, "ngIf"], ["mat-list-item", "", "routerLink", "/loginChat"], ["routerLink", "/carrito"], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-list-item", "", "routerLink", "/mispedidos"], ["mat-list-item", "", "routerLink", "/ver-tareas"], ["mat-list-item", "", "routerLink", "/crear-tareas"], ["mat-list-item", "", "routerLink", "/encuesta"], ["mat-list-item", "", "routerLink", "/crear-vehiculo"], ["mat-list-item", "", "routerLink", "/ventas"], ["mat-list-item", "", "routerLink", "/crear-domiciliario"], ["mat-list-item", "", "routerLink", "/sendMail"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-list-item", ""], ["routerLink", "anality-full-pedidos"], ["routerLink", "anality-full-clients", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "/admin"], ["mat-list-item", "", "routerLink", "/pedidos-asignados"], ["mat-list-item", "", "routerLink", "/pedidos"], ["matBadge", "15", "matBadgeColor", "warn", 1, "material-icons"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_Template_span_click_1_listener() { return ctx.opened = !ctx.opened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ToolbarComponent_a_13_Template, 3, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ToolbarComponent_button_15_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_18_listener() { return ctx.onlogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " manage_accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-sidenav", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function ToolbarComponent_Template_mat_sidenav_openedChange_28_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ToolbarComponent_mat_nav_list_33_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ToolbarComponent_mat_nav_list_35_Template, 8, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ToolbarComponent_mat_nav_list_37_Template, 8, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ToolbarComponent_mat_nav_list_39_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ToolbarComponent_mat_nav_list_41_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ToolbarComponent_mat_nav_list_43_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ToolbarComponent_mat_nav_list_45_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ToolbarComponent_mat_nav_list_47_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ToolbarComponent_mat_nav_list_49_Template, 21, 1, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ToolbarComponent_mat_nav_list_57_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ToolbarComponent_mat_nav_list_60_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ToolbarComponent_mat_nav_list_62_Template, 6, 0, "mat-nav-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.domiciliario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadge"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background: darkslateblue;\n}\n\n.yellow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: 50px;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: 50px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100vh;\n}\n\n.verde[_ngcontent-%COMP%] {\n  background: forestgreen;\n}\n\n.rojo[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.navbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  cursor: pointer;\n  background: darkslateblue;\n  position: fixed;\n  top: 55px;\n  z-index: 1000;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.mat-badge-medium.mat-badge-overlap.mat-badge-after.first[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  \n  right: 15px;\n  background-color: black;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRztFQUVDLHlCQUFBO0FBREo7O0FBR0k7RUFFRSxlQUFBO0FBRk47O0FBTUc7RUFFQyxlQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVlHO0VBRUUsZUFBQTtFQUNBLFdBQUE7QUFWTDs7QUFlRTtFQUNJLFlBQUE7QUFaTjs7QUFnQkU7RUFFRSx1QkFBQTtBQWRKOztBQWtCRTtFQUVFLHFCQUFBO0FBaEJKOztBQXFCRTtFQUVFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFuQko7O0FBcUJJO0VBRUksZUFBQTtBQXBCUjs7QUF3QkE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBdEJKOztBQTJCQTtFQUdJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUExQko7O0FBZ0NBO0VBQStFLG1EQUFBO0VBQzdFLFdBQUE7RUFDQSx1QkFBQTtBQTVCRjs7QUFnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTdCRiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcblxuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgIH1cblxuICAgLnllbGxvd3tcblxuICAgIGJhY2tncm91bmQ6ZGFya3NsYXRlYmx1ZTtcbiAgXG4gICAgc3BhbntcblxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIH1cblxuICAgbWF0LWljb257XG5cbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG5cblxuICAgfVxuXG5cblxuXG4gICBzcGFue1xuXG4gICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgd2lkdGg6IDUwcHg7XG4gICB9XG5cbiAgIFxuXG4gIGlucHV0e1xuICAgICAgd2lkdGg6IDEwMHZoO1xuICB9XG5cblxuICAudmVyZGV7XG5cbiAgICBiYWNrZ3JvdW5kOiBmb3Jlc3RncmVlbjtcbiAgfVxuXG5cbiAgLnJvam97XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cblxuXG4gIFxuICAubmF2YmFye1xuXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcblxuICAgIG1hdC1pY29ue1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbm1hdC1zaWRlbmF2e1xuICAgXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDU1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgXG5cbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0sYVxue1xuXG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG5cbiAgXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIuZmlyc3QgLm1hdC1iYWRnZS1jb250ZW50IHsgLyogVXNpbmcgZmlyc3QgaW5zaWRlIHRoZSBtdWx0aXBsZSBjbGFzcyBzZWxlY3RvciAqL1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cblxuc3ZnIHtcbiAgd2lkdGg6NTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss'],
                providers: [_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "SVWb":
/*!*************************************************************************!*\
  !*** ./src/app/components/anality-product/anality-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnalityProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalityProductComponent", function() { return AnalityProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/user.service */ "kmKP");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");







class AnalityProductComponent {
    constructor(userSvc, firestoreSvc) {
        this.userSvc = userSvc;
        this.firestoreSvc = firestoreSvc;
        this.contador = 0;
        this.vector = [];
        this.pos = [];
        this.posi = 0;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.user = userSvc.getAnality();
    }
    ngOnInit() {
        this.product();
    }
    product() {
        this.doughnutChartData = [];
        this.doughnutChartLabels = [];
        const path = `clientes/${this.user.id}/pedidos`;
        this.firestoreSvc.getPedidos(path).subscribe(pedidos => {
            for (let index = 0; index < pedidos.length; index++) {
                for (let index1 = 0; index1 < pedidos[index].productos.length; index1++) {
                    const nombre = pedidos[index].productos[index1].producto.tipo_producto;
                    this.vector.push(nombre);
                }
            }
            //limpiar palabras repetidas
            for (let index = 0; index < this.vector.length; index++) {
                for (let index1 = 1 + index; index1 <= this.vector.length; index1++) {
                    if (this.vector[index] == this.vector[index1]) {
                        this.vector[index1] = '';
                    }
                }
            }
            //introducir palabras no vacias   
            this.vector.find(producto => {
                if (producto != '') {
                    this.doughnutChartLabels.push(producto);
                }
            });
            // comparacion de  areglo ordenado con el desordenado
            while (this.posi < this.doughnutChartLabels.length) {
                this.contador = 0;
                for (let index1 = 0; index1 < pedidos.length; index1++) {
                    for (let index2 = 0; index2 < pedidos[index1].productos.length; index2++) {
                        if (pedidos[index1].productos[index2].producto.tipo_producto == this.doughnutChartLabels[this.posi]) {
                            this.contador += pedidos[index1].productos[index2].cantidad;
                        }
                    }
                }
                this.doughnutChartData[this.posi] = [this.contador];
                this.posi++;
            }
        });
        //limpiar data
    }
}
AnalityProductComponent.ɵfac = function AnalityProductComponent_Factory(t) { return new (t || AnalityProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
AnalityProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalityProductComponent, selectors: [["app-anality-product"]], decls: 2, vars: 3, consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"]], template: function AnalityProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuYWxpdHktcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYW5hbGl0eS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalityProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anality-product',
                templateUrl: './anality-product.component.html',
                styleUrls: ['./anality-product.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "SYS6":
/*!*************************************************************!*\
  !*** ./src/app/components/send-mail/send-mail.component.ts ***!
  \*************************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_shared_components_modal_anality_user_modal_anality_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/modal-anality-user/modal-anality-user.component */ "chgw");
/* harmony import */ var _app_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/components/modal-message/modal-message.component */ "nwUO");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/services/user.service */ "kmKP");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");






















function SendMailComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", element_r14.name, " ");
} }
function SendMailComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apellido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.apellido, " ");
} }
function SendMailComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " gmail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.gmail, " ");
} }
function SendMailComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telefono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.telefono, " ");
} }
function SendMailComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cedula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.cedula, " ");
} }
function SendMailComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_td_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.oneEditPost(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_td_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.oneDeletePost(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_td_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.sendEmail(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_td_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.sendEncuesta(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " event_note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_td_20_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.anality(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " leaderboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function SendMailComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
const _c0 = function () { return [5, 10, 20]; };
class SendMailComponent {
    constructor(firestoreSvc, dialog, userSvc) {
        this.firestoreSvc = firestoreSvc;
        this.dialog = dialog;
        this.userSvc = userSvc;
        this.displayedColumns = ['name', 'apellido', 'correo', 'telefono', 'cedula', 'actios'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.firestoreSvc.getUsers()
            .subscribe(users => (this.dataSource.data = users));
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    sendEmail(user) {
        this.userSvc.setUser(user);
        this.oneMessageDialog();
    }
    anality(user) {
        this.userSvc.setAnality(user);
        this.oneAnalityClient();
    }
    sendEncuesta(user) {
        this.userSvc.setUserEncuesta(user);
    }
    oneDeletePost(user) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                const path = 'clientes';
                this.firestoreSvc.deleteDoc(path, user.id).then(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Deleted!, Your post has been deleted.', 'sucessfull');
                }).catch((error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Error!, There was an error deleting this post', 'error');
                });
            }
        });
    }
    oneMessageDialog() {
        const dialogRef = this.dialog.open(_app_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__["ModalMessageComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
    oneAnalityClient() {
        const dialogRef = this.dialog.open(_app_shared_components_modal_anality_user_modal_anality_user_component__WEBPACK_IMPORTED_MODULE_5__["ModalAnalityUserComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
}
SendMailComponent.ɵfac = function SendMailComponent_Factory(t) { return new (t || SendMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_7__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
SendMailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendMailComponent, selectors: [["app-send-mail"]], viewQuery: function SendMailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "yellow"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "apellido"], ["matColumnDef", "correo"], ["matColumnDef", "telefono"], ["matColumnDef", "cedula"], ["matColumnDef", "actios"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "material-icons"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-stroked-button", "", 3, "click"], ["routerLink", "/miencuesta", "mat-stroked-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function SendMailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SendMailComponent_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SendMailComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SendMailComponent_td_5_Template, 4, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SendMailComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SendMailComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SendMailComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SendMailComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SendMailComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SendMailComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SendMailComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SendMailComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SendMailComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SendMailComponent_td_20_Template, 18, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SendMailComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SendMailComponent_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 98%;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbmQtbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7QUFBSjs7QUFHQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJzZW5kLW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcblxuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGR7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendMailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-send-mail',
                templateUrl: './send-mail.component.html',
                styleUrls: ['./send-mail.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_7__["AuthCrudService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'ngVentaLibre';
        firebase__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VVFE":
/*!**************************************************!*\
  !*** ./src/app/shared/services/valor.service.ts ***!
  \**************************************************/
/*! exports provided: ValorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValorService", function() { return ValorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ValorService {
    constructor() { }
    setValorTotal(valor) {
        this.valor = valor;
    }
    getValorTotal() {
        return this.valor;
    }
}
ValorService.ɵfac = function ValorService_Factory(t) { return new (t || ValorService)(); };
ValorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValorService, factory: ValorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y3Hb":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/coment-product.service.ts ***!
  \***********************************************************/
/*! exports provided: ComentProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentProductService", function() { return ComentProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ComentProductService {
    constructor() { }
    setProduct(producto) {
        this.producto = producto;
    }
    getProduct() {
        return this.producto;
    }
}
ComentProductService.ɵfac = function ComentProductService_Factory(t) { return new (t || ComentProductService)(); };
ComentProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComentProductService, factory: ComentProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComentProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y8qG":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/list-vehiculo/list-vehiculo.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiculoComponent", function() { return ListVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_shared_components_modal_list_domici_modal_list_domici_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/modal-list-domici/modal-list-domici.component */ "D5WO");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/data.service */ "iiaH");
/* harmony import */ var _app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/sendProduct */ "4wBk");
/* harmony import */ var _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/vehiculo.service */ "sP2n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");

















function ListVehiculoComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 \u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListVehiculoComponent_div_0_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const vehiculo_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.sendNotify(vehiculo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehiculo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", vehiculo_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nombre:", vehiculo_r5.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" marca: ", vehiculo_r5.marca, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("placa: ", vehiculo_r5.placa, "");
} }
function ListVehiculoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListVehiculoComponent_div_0_div_1_Template, 17, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehiculos_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vehiculos_r3);
} }
function ListVehiculoComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListVehiculoComponent {
    constructor(dataService, firestore, vehiculoSvc, sendProductService, dialog, dataSe) {
        this.firestore = firestore;
        this.vehiculoSvc = vehiculoSvc;
        this.sendProductService = sendProductService;
        this.dialog = dialog;
        this.dataSe = dataSe;
        this.pedido = {
            cliente: null,
            estado: null,
            fecha: null,
            id: null,
            precioTotal: null,
            productos: null,
            valoracion: null,
            CorreoClient: null,
            vehiculo: null
        };
        this.pedido = dataService.getPedido();
        this.vehiculo$ = this.vehiculoSvc.getAllVehiculos();
    }
    ngOnInit() {
    }
    sendNotify(vehiculo) {
        const id = this.pedido.cliente.id;
        this.pedido.vehiculo = vehiculo;
        const path1 = 'pedidos';
        const path = `clientes/${id}/${path1}`;
        this.firestore.createDoc(this.pedido, path, this.pedido.id).then(() => {
            console.log('añadido con exito');
            this.dataSe.setPedido(this.pedido);
            this.onpenDialog();
        });
    }
    onpenDialog() {
        const dialogRef = this.dialog.open(_app_shared_components_modal_list_domici_modal_list_domici_component__WEBPACK_IMPORTED_MODULE_2__["ModalListDomiciComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
}
ListVehiculoComponent.ɵfac = function ListVehiculoComponent_Factory(t) { return new (t || ListVehiculoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_6__["VehiculoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_5__["SendProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
ListVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListVehiculoComponent, selectors: [["app-list-vehiculo"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "flexp"], [3, "src"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "container-spinner"]], template: function ListVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListVehiculoComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListVehiculoComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.vehiculo$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".boton1[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n}\n\n.boton2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20%;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.ancho[_ngcontent-%COMP%] {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpc3QtdmVoaWN1bG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxZQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBRUksV0FBQTtFQUNBLFVBQUE7QUFISjs7QUFRQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0YsdUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVVBO0VBSUksZUFBQTtFQUNKLDBCQUFBO0FBWEE7O0FBY0E7RUFFSSxlQUFBO0VBQ0EsVUFBQTtBQWJKOztBQWtCSTtFQUVJLFVBQUE7QUFqQlI7O0FBMkJBO0VBRUksV0FBQTtBQXpCSiIsImZpbGUiOiJsaXN0LXZlaGljdWxvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5ib3RvbjF7XG5cbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmJvdG9uMntcblxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cblxuXG5tYXQtY2FyZHtcblxuICAgIGhlaWdodDogNDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4kcm93SGVpZ2h0OiA0MHB4O1xuLmZsZXhwIHtcblxuXG5cbiAgICBjb2x1bW4tY291bnQ6IDI7XG5tYXgtaGVpZ2h0OiBjYWxjKDUgKiAjeyRyb3dIZWlnaHR9KTtcblxuXG5zcGFue1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyMCU7XG59XG4gICAgfVxuXG5cbiAgICBpbWd7XG5cbiAgICAgICAgd2lkdGg6IDcwJTtcblxuICAgIH1cblxuXG5cblxufVxuXG5cbi5hbmNob3tcblxuICAgIGhlaWdodDogMTAlO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-vehiculo',
                templateUrl: './list-vehiculo.component.html',
                styleUrls: ['./list-vehiculo.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }, { type: _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_6__["VehiculoService"] }, { type: _app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_5__["SendProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "YKZj":
/*!***********************************************************************!*\
  !*** ./src/app/components/anality-pedido/anality-pedido.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalityPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalityPedidoComponent", function() { return AnalityPedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _pages_productos_mas_vendidos_productos_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/productos-mas-vendidos/productos-mas-vendidos.component */ "y+rU");




class AnalityPedidoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnalityPedidoComponent.ɵfac = function AnalityPedidoComponent_Factory(t) { return new (t || AnalityPedidoComponent)(); };
AnalityPedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalityPedidoComponent, selectors: [["app-anality-pedido"]], decls: 2, vars: 0, template: function AnalityPedidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-productos-mas-vendidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _pages_productos_mas_vendidos_productos_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_2__["ProductosMasVendidosComponent"]], styles: ["mat-card[_ngcontent-%COMP%]{\n\ntext-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWxpdHktcGVkaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsa0JBQWtCO0FBQ2xCIiwiZmlsZSI6ImFuYWxpdHktcGVkaWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcblxudGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalityPedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anality-pedido',
                templateUrl: './anality-pedido.component.html',
                styleUrls: ['./anality-pedido.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts/new-post/new-post.component */ "rjGZ");
/* harmony import */ var _components_posts_new_post_new_post_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/posts/new-post/new-post.module */ "t7AC");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/toolbar/toolbar.component */ "S9hJ");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_pages_container_app_container_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/container-app/container-app.component */ "P5so");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/modal/modal.component */ "ajRT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _components_item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/item-carrito/item-carrito.component */ "OAro");
/* harmony import */ var _shared_components_puente_puente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/puente/puente.component */ "z2IN");
/* harmony import */ var _shared_components_toolbar_login_toolbar_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/toolbar-login/toolbar-login.component */ "2tXk");
/* harmony import */ var _components_pages_container_logins_container_logins_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/container-logins/container-logins.component */ "9qLr");
/* harmony import */ var _components_posts_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/posts/edit-post/edit-post.component */ "9PSG");
/* harmony import */ var _components_posts_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/posts/edit-post/edit-post.module */ "6KrS");
/* harmony import */ var _shared_components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/components/modal-edit/modal-edit.component */ "jvi1");
/* harmony import */ var _components_pages_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/pedidos/pedidos.component */ "k+/l");
/* harmony import */ var _pipe_filter_product_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipe/filter-product.pipe */ "ZNp+");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/services/message.service */ "QLLi");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _components_pages_anality_clients_anality_clients_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pages/anality-clients/anality-clients.component */ "z3Ex");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_chat_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/chat/login/login.component */ "nQsB");
/* harmony import */ var _components_chat_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/chat/roomlist/roomlist.component */ "/gzX");
/* harmony import */ var _components_chat_addroom_addroom_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/chat/addroom/addroom.component */ "8TYY");
/* harmony import */ var _components_chat_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/chat/chatroom/chatroom.component */ "1Ikr");
/* harmony import */ var _components_pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/pages/anality-precios/anality-precios.component */ "9KBI");
/* harmony import */ var _components_pages_calificar_pedido_calificar_pedido_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/pages/calificar-pedido/calificar-pedido.component */ "nFXx");
/* harmony import */ var _components_pages_comentario_comentario_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/pages/comentario/comentario.component */ "cigX");
/* harmony import */ var _components_anality_client_anality_client_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/anality-client/anality-client.component */ "ilyf");
/* harmony import */ var _components_anality_pedido_anality_pedido_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/anality-pedido/anality-pedido.component */ "YKZj");
/* harmony import */ var _components_pages_productos_mas_vendidos_productos_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/pages/productos-mas-vendidos/productos-mas-vendidos.component */ "y+rU");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "SYS6");
/* harmony import */ var _components_pages_estado_cliente_estado_cliente_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/pages/estado-cliente/estado-cliente.component */ "xAJv");
/* harmony import */ var _components_posts_new_send_new_send_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/posts/new-send/new-send.component */ "y1hf");
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shared/components/modal-message/modal-message.component */ "nwUO");
/* harmony import */ var _components_pages_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/pages/encuesta/encuesta.component */ "h4gG");
/* harmony import */ var _components_pages_user_encuesta_user_encuesta_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/pages/user-encuesta/user-encuesta.component */ "23+/");
/* harmony import */ var _components_pages_new_vehiculo_new_vehiculo_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/pages/new-vehiculo/new-vehiculo.component */ "+GYW");
/* harmony import */ var _shared_components_modal_vehiculo_modal_vehiculo_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/components/modal-vehiculo/modal-vehiculo.component */ "JGgF");
/* harmony import */ var _shared_components_table_vehiculo_table_vehiculo_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/components/table-vehiculo/table-vehiculo.component */ "qFw8");
/* harmony import */ var _components_pages_edit_vehiculo_edit_vehiculo_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/pages/edit-vehiculo/edit-vehiculo.component */ "rskb");
/* harmony import */ var _shared_components_modal_eidt_vehiculo_modal_eidt_vehiculo_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shared/components/modal-eidt-vehiculo/modal-eidt-vehiculo.component */ "xh3/");
/* harmony import */ var _components_pages_list_vehiculo_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/pages/list-vehiculo/list-vehiculo.component */ "Y8qG");
/* harmony import */ var _shared_components_modal_list_vehiculo_modal_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shared/components/modal-list-vehiculo/modal-list-vehiculo.component */ "mj0C");
/* harmony import */ var _components_pages_user_active_user_active_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/pages/user-active/user-active.component */ "ulZx");
/* harmony import */ var _shared_components_modal_active_modal_active_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./shared/components/modal-active/modal-active.component */ "xJ8H");
/* harmony import */ var _components_pages_tareas_tareas_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/pages/tareas/tareas.component */ "cxHJ");
/* harmony import */ var _components_pages_ver_tareas_ver_tareas_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/pages/ver-tareas/ver-tareas.component */ "Ovbr");
/* harmony import */ var _components_anality_product_anality_product_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/anality-product/anality-product.component */ "SVWb");
/* harmony import */ var _shared_components_modal_anality_user_modal_anality_user_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./shared/components/modal-anality-user/modal-anality-user.component */ "chgw");
/* harmony import */ var _components_pages_ventas_reales_ventas_reales_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/pages/ventas-reales/ventas-reales.component */ "PVsK");
/* harmony import */ var _components_pages_paises_mas_vendidos_paises_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/pages/paises-mas-vendidos/paises-mas-vendidos.component */ "PI8J");
/* harmony import */ var _components_pages_anality_t_anality_t_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/pages/anality-t/anality-t.component */ "1l70");
/* harmony import */ var _shared_components_table_domiciliario_table_domiciliario_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./shared/components/table-domiciliario/table-domiciliario.component */ "lHyo");
/* harmony import */ var _components_posts_new_domiciliario_new_domiciliario_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/posts/new-domiciliario/new-domiciliario.component */ "PZnL");
/* harmony import */ var _shared_components_modal_domici_modal_domici_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./shared/components/modal-domici/modal-domici.component */ "mdD+");
/* harmony import */ var _components_posts_edit_domici_edit_domici_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/posts/edit-domici/edit-domici.component */ "aVC8");
/* harmony import */ var _shared_components_modal_edit_domici_modal_edit_domici_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./shared/components/modal-edit-domici/modal-edit-domici.component */ "Lfae");
/* harmony import */ var _components_pages_list_domiciliario_list_domiciliario_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/pages/list-domiciliario/list-domiciliario.component */ "gB5A");
/* harmony import */ var _shared_components_modal_list_domici_modal_list_domici_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./shared/components/modal-list-domici/modal-list-domici.component */ "D5WO");
/* harmony import */ var _components_pages_entregar_pedidos_entregar_pedidos_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/pages/entregar-pedidos/entregar-pedidos.component */ "zYFw");









//firebase



//enviroment



//form

//httpClient












//paypal


//ngx-charts
//ng2-charts













































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"],
        _shared_services_message_service__WEBPACK_IMPORTED_MODULE_27__["MessageService"],
        _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_17__["AuthCrudService"],
        { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["BUCKET"], useValue: 'gs://ngblogventa.appspot.com' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _components_posts_new_post_new_post_module__WEBPACK_IMPORTED_MODULE_5__["NewPostModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _components_posts_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_23__["EditPostModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_28__["NgxPayPalModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_31__["ChartsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__["NgxChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
        _components_posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_4__["NewPostComponent"],
        _components_pages_container_app_container_app_component__WEBPACK_IMPORTED_MODULE_13__["ContainerAppComponent"],
        _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
        _components_item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_18__["ItemCarritoComponent"],
        _shared_components_puente_puente_component__WEBPACK_IMPORTED_MODULE_19__["PuenteComponent"],
        _shared_components_toolbar_login_toolbar_login_component__WEBPACK_IMPORTED_MODULE_20__["ToolbarLoginComponent"],
        _components_pages_container_logins_container_logins_component__WEBPACK_IMPORTED_MODULE_21__["ContainerLoginsComponent"],
        _components_posts_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_22__["EditPostComponent"],
        _shared_components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_24__["ModalEditComponent"],
        _components_pages_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_25__["PedidosComponent"],
        _pipe_filter_product_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterProductPipe"],
        _components_pages_anality_clients_anality_clients_component__WEBPACK_IMPORTED_MODULE_29__["AnalityClientsComponent"],
        _components_chat_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
        _components_chat_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_34__["RoomlistComponent"],
        _components_chat_addroom_addroom_component__WEBPACK_IMPORTED_MODULE_35__["AddroomComponent"],
        _components_chat_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_36__["ChatroomComponent"],
        _components_pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_37__["AnalityPreciosComponent"],
        _components_pages_calificar_pedido_calificar_pedido_component__WEBPACK_IMPORTED_MODULE_38__["CalificarPedidoComponent"],
        _components_pages_comentario_comentario_component__WEBPACK_IMPORTED_MODULE_39__["ComentarioComponent"],
        _components_anality_client_anality_client_component__WEBPACK_IMPORTED_MODULE_40__["AnalityClientComponent"],
        _components_anality_pedido_anality_pedido_component__WEBPACK_IMPORTED_MODULE_41__["AnalityPedidoComponent"],
        _components_pages_productos_mas_vendidos_productos_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_42__["ProductosMasVendidosComponent"],
        _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_43__["SendMailComponent"],
        _components_pages_estado_cliente_estado_cliente_component__WEBPACK_IMPORTED_MODULE_44__["EstadoClienteComponent"],
        _components_posts_new_send_new_send_component__WEBPACK_IMPORTED_MODULE_45__["NewSendComponent"],
        _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_46__["ModalMessageComponent"],
        _components_pages_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_47__["EncuestaComponent"],
        _components_pages_user_encuesta_user_encuesta_component__WEBPACK_IMPORTED_MODULE_48__["UserEncuestaComponent"],
        _components_pages_new_vehiculo_new_vehiculo_component__WEBPACK_IMPORTED_MODULE_49__["NewVehiculoComponent"],
        _shared_components_modal_vehiculo_modal_vehiculo_component__WEBPACK_IMPORTED_MODULE_50__["ModalVehiculoComponent"],
        _shared_components_table_vehiculo_table_vehiculo_component__WEBPACK_IMPORTED_MODULE_51__["TableVehiculoComponent"],
        _components_pages_edit_vehiculo_edit_vehiculo_component__WEBPACK_IMPORTED_MODULE_52__["EditVehiculoComponent"],
        _shared_components_modal_eidt_vehiculo_modal_eidt_vehiculo_component__WEBPACK_IMPORTED_MODULE_53__["ModalEidtVehiculoComponent"],
        _components_pages_list_vehiculo_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_54__["ListVehiculoComponent"],
        _shared_components_modal_list_vehiculo_modal_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_55__["ModalListVehiculoComponent"],
        _components_pages_user_active_user_active_component__WEBPACK_IMPORTED_MODULE_56__["UserActiveComponent"],
        _shared_components_modal_active_modal_active_component__WEBPACK_IMPORTED_MODULE_57__["ModalActiveComponent"],
        _components_pages_tareas_tareas_component__WEBPACK_IMPORTED_MODULE_58__["TareasComponent"],
        _components_pages_ver_tareas_ver_tareas_component__WEBPACK_IMPORTED_MODULE_59__["VerTareasComponent"],
        _components_anality_product_anality_product_component__WEBPACK_IMPORTED_MODULE_60__["AnalityProductComponent"],
        _shared_components_modal_anality_user_modal_anality_user_component__WEBPACK_IMPORTED_MODULE_61__["ModalAnalityUserComponent"],
        _components_pages_ventas_reales_ventas_reales_component__WEBPACK_IMPORTED_MODULE_62__["VentasRealesComponent"],
        _components_pages_paises_mas_vendidos_paises_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_63__["PaisesMasVendidosComponent"],
        _components_pages_anality_t_anality_t_component__WEBPACK_IMPORTED_MODULE_64__["AnalityTComponent"],
        _shared_components_table_domiciliario_table_domiciliario_component__WEBPACK_IMPORTED_MODULE_65__["TableDomiciliarioComponent"],
        _components_posts_new_domiciliario_new_domiciliario_component__WEBPACK_IMPORTED_MODULE_66__["NewDomiciliarioComponent"],
        _shared_components_modal_domici_modal_domici_component__WEBPACK_IMPORTED_MODULE_67__["ModalDomiciComponent"],
        _components_posts_edit_domici_edit_domici_component__WEBPACK_IMPORTED_MODULE_68__["EditDomiciComponent"],
        _shared_components_modal_edit_domici_modal_edit_domici_component__WEBPACK_IMPORTED_MODULE_69__["ModalEditDomiciComponent"],
        _components_pages_list_domiciliario_list_domiciliario_component__WEBPACK_IMPORTED_MODULE_70__["ListDomiciliarioComponent"],
        _shared_components_modal_list_domici_modal_list_domici_component__WEBPACK_IMPORTED_MODULE_71__["ModalListDomiciComponent"],
        _components_pages_entregar_pedidos_entregar_pedidos_component__WEBPACK_IMPORTED_MODULE_72__["EntregarPedidosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
        _components_posts_new_post_new_post_module__WEBPACK_IMPORTED_MODULE_5__["NewPostModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        _components_posts_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_23__["EditPostModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_28__["NgxPayPalModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_31__["ChartsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__["NgxChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                    _components_posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_4__["NewPostComponent"],
                    _components_pages_container_app_container_app_component__WEBPACK_IMPORTED_MODULE_13__["ContainerAppComponent"],
                    _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
                    _components_item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_18__["ItemCarritoComponent"],
                    _shared_components_puente_puente_component__WEBPACK_IMPORTED_MODULE_19__["PuenteComponent"],
                    _shared_components_toolbar_login_toolbar_login_component__WEBPACK_IMPORTED_MODULE_20__["ToolbarLoginComponent"],
                    _components_pages_container_logins_container_logins_component__WEBPACK_IMPORTED_MODULE_21__["ContainerLoginsComponent"],
                    _components_posts_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_22__["EditPostComponent"],
                    _shared_components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_24__["ModalEditComponent"],
                    _components_pages_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_25__["PedidosComponent"],
                    _pipe_filter_product_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterProductPipe"],
                    _components_pages_anality_clients_anality_clients_component__WEBPACK_IMPORTED_MODULE_29__["AnalityClientsComponent"],
                    _components_chat_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
                    _components_chat_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_34__["RoomlistComponent"],
                    _components_chat_addroom_addroom_component__WEBPACK_IMPORTED_MODULE_35__["AddroomComponent"],
                    _components_chat_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_36__["ChatroomComponent"],
                    _components_pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_37__["AnalityPreciosComponent"],
                    _components_pages_calificar_pedido_calificar_pedido_component__WEBPACK_IMPORTED_MODULE_38__["CalificarPedidoComponent"],
                    _components_pages_comentario_comentario_component__WEBPACK_IMPORTED_MODULE_39__["ComentarioComponent"],
                    _components_anality_client_anality_client_component__WEBPACK_IMPORTED_MODULE_40__["AnalityClientComponent"],
                    _components_anality_pedido_anality_pedido_component__WEBPACK_IMPORTED_MODULE_41__["AnalityPedidoComponent"],
                    _components_pages_productos_mas_vendidos_productos_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_42__["ProductosMasVendidosComponent"],
                    _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_43__["SendMailComponent"],
                    _components_pages_estado_cliente_estado_cliente_component__WEBPACK_IMPORTED_MODULE_44__["EstadoClienteComponent"],
                    _components_posts_new_send_new_send_component__WEBPACK_IMPORTED_MODULE_45__["NewSendComponent"],
                    _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_46__["ModalMessageComponent"],
                    _components_pages_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_47__["EncuestaComponent"],
                    _components_pages_user_encuesta_user_encuesta_component__WEBPACK_IMPORTED_MODULE_48__["UserEncuestaComponent"],
                    _components_pages_new_vehiculo_new_vehiculo_component__WEBPACK_IMPORTED_MODULE_49__["NewVehiculoComponent"],
                    _shared_components_modal_vehiculo_modal_vehiculo_component__WEBPACK_IMPORTED_MODULE_50__["ModalVehiculoComponent"],
                    _shared_components_table_vehiculo_table_vehiculo_component__WEBPACK_IMPORTED_MODULE_51__["TableVehiculoComponent"],
                    _components_pages_edit_vehiculo_edit_vehiculo_component__WEBPACK_IMPORTED_MODULE_52__["EditVehiculoComponent"],
                    _shared_components_modal_eidt_vehiculo_modal_eidt_vehiculo_component__WEBPACK_IMPORTED_MODULE_53__["ModalEidtVehiculoComponent"],
                    _components_pages_list_vehiculo_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_54__["ListVehiculoComponent"],
                    _shared_components_modal_list_vehiculo_modal_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_55__["ModalListVehiculoComponent"],
                    _components_pages_user_active_user_active_component__WEBPACK_IMPORTED_MODULE_56__["UserActiveComponent"],
                    _shared_components_modal_active_modal_active_component__WEBPACK_IMPORTED_MODULE_57__["ModalActiveComponent"],
                    _components_pages_tareas_tareas_component__WEBPACK_IMPORTED_MODULE_58__["TareasComponent"],
                    _components_pages_ver_tareas_ver_tareas_component__WEBPACK_IMPORTED_MODULE_59__["VerTareasComponent"],
                    _components_anality_product_anality_product_component__WEBPACK_IMPORTED_MODULE_60__["AnalityProductComponent"],
                    _shared_components_modal_anality_user_modal_anality_user_component__WEBPACK_IMPORTED_MODULE_61__["ModalAnalityUserComponent"],
                    _components_pages_ventas_reales_ventas_reales_component__WEBPACK_IMPORTED_MODULE_62__["VentasRealesComponent"],
                    _components_pages_paises_mas_vendidos_paises_mas_vendidos_component__WEBPACK_IMPORTED_MODULE_63__["PaisesMasVendidosComponent"],
                    _components_pages_anality_t_anality_t_component__WEBPACK_IMPORTED_MODULE_64__["AnalityTComponent"],
                    _shared_components_table_domiciliario_table_domiciliario_component__WEBPACK_IMPORTED_MODULE_65__["TableDomiciliarioComponent"],
                    _components_posts_new_domiciliario_new_domiciliario_component__WEBPACK_IMPORTED_MODULE_66__["NewDomiciliarioComponent"],
                    _shared_components_modal_domici_modal_domici_component__WEBPACK_IMPORTED_MODULE_67__["ModalDomiciComponent"],
                    _components_posts_edit_domici_edit_domici_component__WEBPACK_IMPORTED_MODULE_68__["EditDomiciComponent"],
                    _shared_components_modal_edit_domici_modal_edit_domici_component__WEBPACK_IMPORTED_MODULE_69__["ModalEditDomiciComponent"],
                    _components_pages_list_domiciliario_list_domiciliario_component__WEBPACK_IMPORTED_MODULE_70__["ListDomiciliarioComponent"],
                    _shared_components_modal_list_domici_modal_list_domici_component__WEBPACK_IMPORTED_MODULE_71__["ModalListDomiciComponent"],
                    _components_pages_entregar_pedidos_entregar_pedidos_component__WEBPACK_IMPORTED_MODULE_72__["EntregarPedidosComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                    _components_posts_new_post_new_post_module__WEBPACK_IMPORTED_MODULE_5__["NewPostModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                    _components_posts_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_23__["EditPostModule"],
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_28__["NgxPayPalModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_31__["ChartsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__["NgxChartsModule"]
                ],
                entryComponents: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"]],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"],
                    _shared_services_message_service__WEBPACK_IMPORTED_MODULE_27__["MessageService"],
                    _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_17__["AuthCrudService"],
                    { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["BUCKET"], useValue: 'gs://ngblogventa.appspot.com' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZNp+":
/*!*********************************************!*\
  !*** ./src/app/pipe/filter-product.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterProductPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductPipe", function() { return FilterProductPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterProductPipe {
    transform(value, input) {
        if (input) {
            return value.filter(val => val.indexOf(input) >= 0);
        }
        else {
            return value;
        }
    }
}
FilterProductPipe.ɵfac = function FilterProductPipe_Factory(t) { return new (t || FilterProductPipe)(); };
FilterProductPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterProduct", type: FilterProductPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterProductPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterProduct'
            }]
    }], null, null); })();


/***/ }),

/***/ "aVC8":
/*!***********************************************************************!*\
  !*** ./src/app/components/posts/edit-domici/edit-domici.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditDomiciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDomiciComponent", function() { return EditDomiciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_domiciliario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/domiciliario.service */ "pJrl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















class EditDomiciComponent {
    constructor(firestoreSvc, domiciliarioService, authService, router) {
        this.firestoreSvc = firestoreSvc;
        this.domiciliarioService = domiciliarioService;
        this.authService = authService;
        this.router = router;
        this.domicili$ = {
            apellido: null,
            correo: null,
            nombre: null,
            telefono: null,
            id: null,
            password: null
        };
        this.newDomiciForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')),
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+@+[a-zA-Z.]+')),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]),
        });
    }
    ngOnInit() {
        this.domilicliario = this.domiciliarioService.getDomiciliario();
        const path = 'domiciliarios';
        this.firestoreSvc.getDoc(path, this.domilicliario.id).subscribe(domici => {
            this.domicili$ = domici;
        });
    }
    EditDomici(data) {
        const path = 'domiciliarios';
        this.firestoreSvc.createD(data, path, this.domicili$.id);
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
        }).then(result => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Updating!, He Domiciliario has been update.', 'sucessfull');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error!, There was an error updating this post', 'error');
            }
        });
    }
}
EditDomiciComponent.ɵfac = function EditDomiciComponent_Factory(t) { return new (t || EditDomiciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_domiciliario_service__WEBPACK_IMPORTED_MODULE_6__["DomiciliarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditDomiciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditDomiciComponent, selectors: [["app-edit-domici"]], decls: 21, vars: 6, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "nombre", "formControlName", "nombre", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "apellido", "formControlName", "apellido", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "correo", "formControlName", "correo", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "telefono", "formControlName", "telefono", "required", "", 3, "ngModel", "ngModelChange"], [1, "container-button"], ["type", "submit", "value", "Save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function EditDomiciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditDomiciComponent_Template_form_ngSubmit_1_listener() { return ctx.EditDomici(ctx.newDomiciForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDomiciComponent_Template_input_ngModelChange_6_listener($event) { return ctx.domicili$.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDomiciComponent_Template_input_ngModelChange_10_listener($event) { return ctx.domicili$.apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDomiciComponent_Template_input_ngModelChange_14_listener($event) { return ctx.domicili$.correo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDomiciComponent_Template_input_ngModelChange_18_listener($event) { return ctx.domicili$.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDomiciComponent_Template_input_click_20_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newDomiciForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.domicili$.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.domicili$.apellido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.domicili$.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.domicili$.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtZG9taWNpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUVJLG1CQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7QUFDWjtBQUVRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQVo7QUFDWTtFQUNJLHlCQUFBO0FBQ2hCO0FBR1E7RUFFSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRlo7QUFNUTtFQUVJLGNBQUE7QUFMWjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQVVRO0VBQ0ksV0FBQTtBQVJaIiwiZmlsZSI6ImVkaXQtZG9taWNpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1wb3N0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBmb3Jte1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGlucHV0W3R5cGU9J2ZpbGUnXXtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5tYXQtZmxhdC1idXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLWZpbGV7XG5cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWlucHV0LWZpbGV7XG5cbiAgICAgICAgICAgIG1hcmdpbjogIDJyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYnV0dG9ue1xuICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDomiciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-domici',
                templateUrl: './edit-domici.component.html',
                styleUrls: ['./edit-domici.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__["AuthCrudService"] }, { type: _app_shared_services_domiciliario_service__WEBPACK_IMPORTED_MODULE_6__["DomiciliarioService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "ajRT":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/posts/new-post/new-post.component */ "rjGZ");




class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 4, vars: 0, consts: [[1, "dialog-content"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-new-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_posts_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_2__["NewPostComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "chgw":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/modal-anality-user/modal-anality-user.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ModalAnalityUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAnalityUserComponent", function() { return ModalAnalityUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_anality_product_anality_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/anality-product/anality-product.component */ "SVWb");




class ModalAnalityUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalAnalityUserComponent.ɵfac = function ModalAnalityUserComponent_Factory(t) { return new (t || ModalAnalityUserComponent)(); };
ModalAnalityUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalAnalityUserComponent, selectors: [["app-modal-anality-user"]], decls: 2, vars: 0, consts: [[1, "dialog-content"]], template: function ModalAnalityUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-anality-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_anality_product_anality_product_component__WEBPACK_IMPORTED_MODULE_2__["AnalityProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1hbmFsaXR5LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAnalityUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-anality-user',
                templateUrl: './modal-anality-user.component.html',
                styleUrls: ['./modal-anality-user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cigX":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/comentario/comentario.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyErrorStateMatcher, ComentarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioComponent", function() { return ComentarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_coment_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/coment-product.service */ "Y3Hb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");

















const _c0 = ["chatcontent"];
function ComentarioComponent_div_4_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r6.cliente.name);
} }
function ComentarioComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComentarioComponent_div_4_mat_card_1_Template, 5, 1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chats_r4);
} }
function ComentarioComponent_div_9_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r9.cliente.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r9.message);
} }
function ComentarioComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComentarioComponent_div_9_div_1_ng_template_7_Template, 6, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", chat_r9.cliente.name, " \u00A0 ", chat_r9.cliente.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r9.message);
} }
function ComentarioComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComentarioComponent_div_9_div_1_Template, 9, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chats_r7);
} }
function ComentarioComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class ComentarioComponent {
    constructor(formBuilder, productSvc, firestoreSvc, authSvc) {
        this.formBuilder = formBuilder;
        this.productSvc = productSvc;
        this.firestoreSvc = firestoreSvc;
        this.authSvc = authSvc;
        this.scrolltop = null;
        this.message = '';
        this.users = [];
        this.matcher = new MyErrorStateMatcher();
        this.initProducto();
        this.initChat();
        setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 500);
        authSvc.afAuth.user.subscribe(res => {
            const path = 'clientes';
            this.firestoreSvc.getDoc(path, res.uid).subscribe(cliente => {
                this.cliente = cliente;
            });
        });
    }
    ngOnInit() {
        this.chatForm = this.formBuilder.group({
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.producto = this.productSvc.getProduct();
        const path1 = `productos/${this.producto.id}/comentarios`;
        this.chats = this.firestoreSvc.getChats(path1);
    }
    onFormSubmit(form) {
        const date = new Date;
        this.chat.fecha = date;
        this.chat.cliente = this.cliente;
        this.chat.message = form.message;
        const path = `productos/${this.producto.id}/comentarios`;
        this.firestoreSvc.doc(this.chat, path).then(() => {
            console.log('añadido con exito');
        });
    }
    initProducto() {
        this.producto = {
            ciudad_de_exportacion: null,
            tipo_producto: null,
            valor: null,
            id: null,
            image: null,
            vendedor: null
        };
    }
    initChat() {
        this.chat = {
            cliente: null,
            fecha: null,
            message: null
        };
    }
}
ComentarioComponent.ɵfac = function ComentarioComponent_Factory(t) { return new (t || ComentarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_coment_product_service__WEBPACK_IMPORTED_MODULE_4__["ComentProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ComentarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComentarioComponent, selectors: [["app-comentario"]], viewQuery: function ComentarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatcontent = _t.first);
    } }, decls: 20, vars: 11, consts: [[1, "example-container", "mat-elevation-z8"], [1, "drawer-container"], ["mode", "side", "opened", "", 1, "left-drawer"], [1, "users-pane"], [4, "ngIf"], [1, "chat-pane"], [1, "chat-content", 3, "scrollTop"], ["chatcontent", ""], [1, "sticky-footer"], [1, "message-form", 3, "formGroup", "ngSubmit"], [1, "message-form-field"], ["matInput", "", "placeholder", "Enter comment here", "formControlName", "message", 3, "errorStateMatcher"], ["type", "submit", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Send", 3, "disabled"], ["class", "users-card", 4, "ngFor", "ngForOf"], [1, "users-card"], [1, "username"], ["class", "message-box", 4, "ngFor", "ngForOf"], [1, "message-box"], ["text-center", "", 1, "chat-status"], [1, "msg-name"], [1, "chat-content-center"], ["message", ""], [1, "chat-message"], [1, "right-bubble"], ["text-wrap", ""]], template: function ComentarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComentarioComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-drawer-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComentarioComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ComentarioComponent_Template_form_ngSubmit_12_listener() { return ctx.onFormSubmit(ctx.chatForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ComentarioComponent_span_16_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.chats));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", ctx.scrolltop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.chats));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chatForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chatForm.get("message").valid && ctx.chatForm.get("message").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.chatForm.valid);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 10px;\n  }\n  \n  .drawer-container[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n  }\n  \n  .left-drawer[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  \n  .users-pane[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  \n  .users-card[_ngcontent-%COMP%] {\n    margin: 5px 20px;\n  }\n  \n  .username[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: 5px;\n    margin-left: 10px;\n  }\n  \n  footer.sticky-footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px;\n    background-color: #ffffff;\n    border-top: solid 1px #efefef;\n  }\n  \n  .message-form[_ngcontent-%COMP%] {\n    margin-left: 200px;\n  }\n  \n  .message-form-field[_ngcontent-%COMP%] {\n    width: 94%;\n    margin: 0 4% 0 2%;\n  }\n  \n  .message-box[_ngcontent-%COMP%] {\n    float: left;\n    width: 98%;\n    margin: 5px 0 0 2%;\n    background-color: aquamarine;\n  }\n  \n  .chat-message[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: 40px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%] {\n    position: relative;\n    background: #dcf8c6;\n    border-top-left-radius: .4em;\n    border-bottom-left-radius: .4em;\n    border-bottom-right-radius: .4em;\n    padding: 5px 10px 10px;\n    left: 15%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]   span.msg-name[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    color: green;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]   span.msg-date[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 13px;\n    width: 0;\n    height: 0;\n    border: 27px solid transparent;\n    border-left-color: #dcf8c6;\n    border-right: 0;\n    border-top: 0;\n    margin-top: -13.5px;\n    margin-right: -27px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]  {\n    position: relative;\n    background: lightblue;\n    border-top-right-radius: .4em;\n    border-bottom-left-radius: .4em;\n    border-bottom-right-radius: .4em;\n    padding: 5px 10px 10px;\n    left: 5%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   span.msg-name[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    color: blue;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]   span.msg-date[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 13px;\n    width: 0;\n    height: 0;\n    border: 27px solid transparent;\n    border-right-color: lightblue;\n    border-left: 0;\n    border-top: 0;\n    margin-top: -13.5px;\n    margin-left: -27px;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%] {\n    min-height: 49px;\n\n    \n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%]   .chat-date[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 10px;\n    font-style: italic;\n    color: #fff;\n    text-shadow: 0px -1px 0px #222, 0px 1px 0px #aaa;\n    height: 15px;\n    left: 10%;\n    right:10%;\n  }\n  \n  .chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%]   .chat-content-center[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    background-color: #e1e1f7;\n    border-radius: 6px;\n    font-size: 12px;\n    color: #555;\n    height: 34px;\n    left: 10%;\n    right:10%;\n  }\n  \n  .chat-content[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: 600px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWVudGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QsTUFBTTtFQUNSOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7OztFQUdsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLFNBQVM7SUFDVCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZiIsImZpbGUiOiJjb21lbnRhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmRyYXdlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgXG4gIC5sZWZ0LWRyYXdlciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIFxuICAudXNlcnMtcGFuZSB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICBcbiAgLnVzZXJzLWNhcmQge1xuICAgIG1hcmdpbjogNXB4IDIwcHg7XG4gIH1cbiAgXG4gIC51c2VybmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgZm9vdGVyLnN0aWNreS1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZmVmZWY7XG4gIH1cbiAgXG4gIC5tZXNzYWdlLWZvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgfVxuICBcbiAgLm1lc3NhZ2UtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW46IDAgNCUgMCAyJTtcbiAgfVxuICBcbiAgLm1lc3NhZ2UtYm94IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogNXB4IDAgMCAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIC5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNkY2Y4YzY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjRlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNGVtO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XG4gICAgbGVmdDogMTUlO1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuICAuY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEzcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjZjhjNjtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI3cHg7XG4gIH1cbiAgLmNoYXQtbWVzc2FnZSAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC40ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjRlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICAgIGxlZnQ6IDUlO1xuICB9XG4gIC5jaGF0LW1lc3NhZ2Ugc3Bhbi5tc2ctbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG4gIC5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlIHNwYW4ubXNnLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxM3B4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDI3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjdweDtcbiAgfVxuICBcbiAgLmNoYXQtbWVzc2FnZSAuY2hhdC1zdGF0dXMge1xuICAgIG1pbi1oZWlnaHQ6IDQ5cHg7XG5cbiAgICBcbiAgfVxuICBcbiAgLmNoYXQtbWVzc2FnZSAuY2hhdC1zdGF0dXMgLmNoYXQtZGF0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMHB4ICMyMjIsIDBweCAxcHggMHB4ICNhYWE7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDoxMCU7XG4gIH1cbiAgXG4gIC5jaGF0LW1lc3NhZ2UgLmNoYXQtc3RhdHVzIC5jaGF0LWNvbnRlbnQtY2VudGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWY3O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDoxMCU7XG4gIH1cbiAgXG4gIC5jaGF0LWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComentarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comentario',
                templateUrl: './comentario.component.html',
                styleUrls: ['./comentario.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_shared_services_coment_product_service__WEBPACK_IMPORTED_MODULE_4__["ComentProductService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { chatcontent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatcontent']
        }] }); })();


/***/ }),

/***/ "cxHJ":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/tareas/tareas.component.ts ***!
  \*************************************************************/
/*! exports provided: TareasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareasComponent", function() { return TareasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");













class TareasComponent {
    constructor(firestoreSvc, router) {
        this.firestoreSvc = firestoreSvc;
        this.router = router;
        this.tarea = '';
        this.newPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cedula_cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]),
            tipo_tarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    addWork(tarea) {
        const cedula = Number(tarea.cedula_cliente);
        tarea.cedula_cliente = cedula;
        var fecha = new Date(tarea.fecha);
        const fechaT = (fecha.getMonth() + 1) + '/' + (fecha.getDay() + 7) + '/' + fecha.getFullYear();
        tarea.fecha = fechaT;
        console.log(tarea);
        const path = 'tareas';
        this.firestoreSvc.docT(tarea, path).then(() => {
            console.log('tarea añadida');
        });
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: `do you want to get out of this place!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, leave!'
        }).then(result => {
            if (result.value) {
                this.router.navigate(['/home']);
            }
        });
    }
}
TareasComponent.ɵfac = function TareasComponent_Factory(t) { return new (t || TareasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TareasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TareasComponent, selectors: [["app-tareas"]], decls: 25, vars: 4, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["type", "text", "matInput", "", "placeholder", "cedula", "formControlName", "cedula_cliente"], ["matInput", "", "placeholder", "tipo", "formControlName", "tipo_tarea"], [1, "example-full-width"], ["matInput", "", "placeholder", "", "formControlName", "tarea"], ["appearance", "fill"], ["formControlName", "fecha", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "container-button"], ["type", "submit", "value", "save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function TareasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TareasComponent_Template_form_ngSubmit_2_listener() { return ctx.addWork(ctx.newPostForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "cedula del cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tipo_tarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TareasComponent_Template_input_click_24_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RhcmVhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUVJLG1CQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7QUFDWjtBQUVRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQVo7QUFDWTtFQUNJLHlCQUFBO0FBQ2hCO0FBR1E7RUFFSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRlo7QUFNUTtFQUVJLGNBQUE7QUFMWjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQVVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBUloiLCJmaWxlIjoidGFyZWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1wb3N0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBmb3Jte1xuICBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaW5wdXRbdHlwZT0nZmlsZSdde1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgXG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQubWF0LWZsYXQtYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAuY3VzdG9tLWZpbGV7XG4gIFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAuY29udGFpbmVyLWlucHV0LWZpbGV7XG4gIFxuICAgICAgICAgICAgbWFyZ2luOiAgMnJlbSAwO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuY29udGFpbmVyLWJ1dHRvbntcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TareasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tareas',
                templateUrl: './tareas.component.html',
                styleUrls: ['./tareas.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "dFYn":
/*!***********************************************!*\
  !*** ./src/app/serviceT/service-t.service.ts ***!
  \***********************************************/
/*! exports provided: ServiceTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTService", function() { return ServiceTService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServiceTService {
    constructor() {
        this.pedido = {
            cliente: null,
            estado: null,
            fecha: null,
            id: null,
            precioTotal: null,
            productos: null,
            valoracion: null,
            CorreoClient: null,
            vehiculo: null
        };
    }
    setPedidoT(pedido) {
        this.pedido = pedido;
    }
    getPedidoT() {
        return this.pedido;
    }
}
ServiceTService.ɵfac = function ServiceTService_Factory(t) { return new (t || ServiceTService)(); };
ServiceTService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceTService, factory: ServiceTService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gB5A":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/list-domiciliario/list-domiciliario.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListDomiciliarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDomiciliarioComponent", function() { return ListDomiciliarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/data.service */ "iiaH");
/* harmony import */ var _app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/sendProduct */ "4wBk");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













function ListDomiciliarioComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDomiciliarioComponent_div_0_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const domini_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.guardar(domini_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domini_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nombre:", domini_r5.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" apellido: ", domini_r5.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("telefono: ", domini_r5.telefono, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("correo: ", domini_r5.correo, "");
} }
function ListDomiciliarioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListDomiciliarioComponent_div_0_div_1_Template, 20, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dominis_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", dominis_r3);
} }
function ListDomiciliarioComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListDomiciliarioComponent {
    constructor(dominiSvc, dataSe, sendProductService) {
        this.dominiSvc = dominiSvc;
        this.dataSe = dataSe;
        this.sendProductService = sendProductService;
        this.domini$ = dominiSvc.getDomici();
        this.pedido = dataSe.getPedido();
    }
    ngOnInit() {
    }
    guardar(data) {
        data.pedidos.push(this.pedido);
        const path = 'domiciliarios';
        this.dominiSvc.createD(data, path, data.id).then(() => {
            this.sendProductService.sendEstadoProduct(this.pedido).subscribe(() => {
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('notification sent successfully');
        });
    }
}
ListDomiciliarioComponent.ɵfac = function ListDomiciliarioComponent_Factory(t) { return new (t || ListDomiciliarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_3__["SendProductService"])); };
ListDomiciliarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListDomiciliarioComponent, selectors: [["app-list-domiciliario"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "flexp"], [1, "material-icons"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "container-spinner"]], template: function ListDomiciliarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListDomiciliarioComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListDomiciliarioComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.domini$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".boton1[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n}\n\n.boton2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20%;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.ancho[_ngcontent-%COMP%] {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpc3QtZG9taWNpbGlhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksWUFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0FBSEo7O0FBUUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNGLHVCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFVQTtFQUlJLGVBQUE7RUFDSiwwQkFBQTtBQVhBOztBQWNBO0VBRUksZUFBQTtFQUNBLFVBQUE7QUFiSjs7QUFrQkk7RUFFSSxVQUFBO0FBakJSOztBQTJCQTtFQUVJLFdBQUE7QUF6QkoiLCJmaWxlIjoibGlzdC1kb21pY2lsaWFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJvdG9uMXtcblxuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uYm90b24ye1xuXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuXG5cbm1hdC1jYXJke1xuXG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cbiRyb3dIZWlnaHQ6IDQwcHg7XG4uZmxleHAge1xuXG5cblxuICAgIGNvbHVtbi1jb3VudDogMjtcbm1heC1oZWlnaHQ6IGNhbGMoNSAqICN7JHJvd0hlaWdodH0pO1xuXG5cbnNwYW57XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDIwJTtcbn1cbiAgICB9XG5cblxuICAgIGltZ3tcblxuICAgICAgICB3aWR0aDogNzAlO1xuXG4gICAgfVxuXG5cblxuXG59XG5cblxuLmFuY2hve1xuXG4gICAgaGVpZ2h0OiAxMCU7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDomiciliarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-domiciliario',
                templateUrl: './list-domiciliario.component.html',
                styleUrls: ['./list-domiciliario.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }, { type: _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_3__["SendProductService"] }]; }, null); })();


/***/ }),

/***/ "h4gG":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/encuesta/encuesta.component.ts ***!
  \*****************************************************************/
/*! exports provided: EncuestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaComponent", function() { return EncuestaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function EncuestaComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sexo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sexo_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sexo_r3.viewValue, " ");
} }
function EncuestaComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", respuesta_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", respuesta_r4.viewValue, " ");
} }
class EncuestaComponent {
    constructor(firestoreSvc, authSvc, router) {
        this.firestoreSvc = firestoreSvc;
        this.authSvc = authSvc;
        this.router = router;
        this.sexos = [
            { value: 'masculino', viewValue: 'Masculino' },
            { value: 'femenino', viewValue: 'Femenino' },
            { value: 'Otro', viewValue: 'otro' },
        ];
        this.respuestas = [
            { value: 'si', viewValue: 'Si' },
            { value: 'no', viewValue: 'No' },
            { value: 'tal vez', viewValue: 'Tal vez' },
        ];
        this.edad = 0;
        this.sexo = '';
        this.ingreso = 0;
        this.trabajo = '';
        this.nivelEscolar = '';
        this.productosPreferidos = '';
        this.esperanza = '';
        this.encuesta = {
            edad: null,
            esperanza: null,
            ingreso: null,
            nivelEscolar: null,
            productosPreferidos: null,
            sexo: null,
            trabajo: null
        };
        this.uid = '';
        authSvc.afAuth.user.subscribe(res => {
            this.uid = res.uid;
        });
    }
    ngOnInit() {
    }
    guardarEncuesta() {
        if (this.edad <= 130) {
            this.encuesta.edad = this.edad;
            this.encuesta.sexo = this.sexo;
            this.encuesta.ingreso = this.ingreso;
            this.encuesta.trabajo = this.trabajo;
            this.encuesta.nivelEscolar = this.nivelEscolar;
            this.encuesta.productosPreferidos = this.productosPreferidos;
            this.encuesta.esperanza = this.esperanza;
            const path = `clientes`;
            this.firestoreSvc.getDoc(path, this.uid).subscribe(user => {
                user.encuesta = this.encuesta;
                const path = 'clientes';
                this.firestoreSvc.create(user, path, user.id).then(() => sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('the survey was done successfully').then(() => {
                    this.router.navigate(['/home']);
                }));
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('edad fuera de rango');
        }
    }
}
EncuestaComponent.ɵfac = function EncuestaComponent_Factory(t) { return new (t || EncuestaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EncuestaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EncuestaComponent, selectors: [["app-encuesta"]], decls: 49, vars: 10, consts: [[1, "contenedor"], [1, "example-form-field"], ["matInput", "", "pattern", "[0-9]*", "type", "number", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["f", ""], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "pattern", "[a-zA-z]*", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "pattern", "[a-zA-z]*", "type", "text", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"]], template: function EncuestaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00BFCuantos a\u00F1os tienes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_input_ngModelChange_6_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00BFCual es tu genero?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EncuestaComponent_mat_option_14_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00BFCual es el ingreso de tu familia?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_input_ngModelChange_20_listener($event) { return ctx.ingreso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00BFA que te dedicas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_input_ngModelChange_26_listener($event) { return ctx.trabajo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00BFCual es tu nivel escolar o universitario?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_input_ngModelChange_32_listener($event) { return ctx.nivelEscolar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u00BFCual o cuales son tus productos preferidos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_input_ngModelChange_38_listener($event) { return ctx.productosPreferidos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u00BFEsperas que tu producto favorezca tu vida en mas de una forma?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EncuestaComponent_Template_mat_select_ngModelChange_44_listener($event) { return ctx.esperanza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EncuestaComponent_mat_option_45_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EncuestaComponent_Template_button_click_47_listener() { return ctx.guardarEncuesta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sexos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ingreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trabajo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nivelEscolar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productosPreferidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.esperanza);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.respuestas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: ["@charset \"UTF-8\";\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  max-width: 600px;\n}\n.contenedor[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  \n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VuY3Vlc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNJO0VBRUksV0FBQTtFQUVBLGtCQUFBO0FBRFI7QUFPSTtFQUNJLGtCQUFBO0FBTFI7QUFRSTtFQUVJLFlBQUE7RUFBYyxpRUFBQTtFQUNkLGdCQUFBO0VBQ0EsMkJBQUE7QUFOUjtBQWFBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVko7QUFjRTtFQUNFLGNBQUE7QUFYSiIsImZpbGUiOiJlbmN1ZXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOjFyZW0gYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuXG5cbiAgICBtYXQtZm9ybS1maWVsZHtcblxuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxuICAgIH1cblxuXG4gICAgcHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiBcbiAgICBidXR0b257XG5cbiAgICAgICAgd2lkdGg6IDExMHB4OyAvKiBQYXJhIHF1ZSBubyBzZSByb21wYSBlbiBkb3MgbMOtbmVhcywgeSBsbyB0cmFuc2xhZGUgdGFsIGN1YWwuICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG59IFxuXG5cblxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgIFxuICB9XG4gIFxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EncuestaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-encuesta',
                templateUrl: './encuesta.component.html',
                styleUrls: ['./encuesta.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "iiaH":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.pedido = {
            cliente: null,
            estado: null,
            fecha: null,
            id: null,
            precioTotal: null,
            productos: null,
            valoracion: null,
            CorreoClient: null,
            vehiculo: null
        };
    }
    setProduct(product) {
        this.prouct$ = product;
    }
    getProduct() {
        return this.prouct$;
    }
    setVehiculo(vehiculo) {
        this.vehiculo$ = vehiculo;
    }
    getVehiculo() {
        return this.vehiculo$;
    }
    setPedido(pedido) {
        this.pedido = pedido;
    }
    getPedido() {
        return this.pedido;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ilyf":
/*!***********************************************************************!*\
  !*** ./src/app/components/anality-client/anality-client.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalityClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalityClientComponent", function() { return AnalityClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_shared_components_modal_active_modal_active_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/modal-active/modal-active.component */ "xJ8H");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _pages_anality_clients_anality_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/anality-clients/anality-clients.component */ "z3Ex");
/* harmony import */ var _pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/anality-precios/anality-precios.component */ "9KBI");
/* harmony import */ var _pages_estado_cliente_estado_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/estado-cliente/estado-cliente.component */ "xAJv");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class AnalityClientComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    onDialogActive() {
        const dialogRef = this.dialog.open(_app_shared_components_modal_active_modal_active_component__WEBPACK_IMPORTED_MODULE_2__["ModalActiveComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
}
AnalityClientComponent.ɵfac = function AnalityClientComponent_Factory(t) { return new (t || AnalityClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AnalityClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalityClientComponent, selectors: [["app-anality-client"]], decls: 12, vars: 0, consts: [[1, "estado"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AnalityClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-anality-clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-anality-precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-estado-cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalityClientComponent_Template_button_click_10_listener() { return ctx.onDialogActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "userActive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _pages_anality_clients_anality_clients_component__WEBPACK_IMPORTED_MODULE_4__["AnalityClientsComponent"], _pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_5__["AnalityPreciosComponent"], _pages_estado_cliente_estado_cliente_component__WEBPACK_IMPORTED_MODULE_6__["EstadoClienteComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\n\n    text-align: center;\n    \n    \n}\n.estado[_ngcontent-%COMP%]{\n\n    display: flex; \n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWxpdHktY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLGtCQUFrQjs7O0FBR3RCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhbmFsaXR5LWNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtY2FyZHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbn1cbi5lc3RhZG97XG5cbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalityClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anality-client',
                templateUrl: './anality-client.component.html',
                styleUrls: ['./anality-client.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "ipUY":
/*!******************************************!*\
  !*** ./src/app/shared/paypal.service.ts ***!
  \******************************************/
/*! exports provided: PaypalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalService", function() { return PaypalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PaypalService {
    constructor() {
        this.pedido = {
            cliente: null,
            estado: null,
            fecha: null,
            id: null,
            precioTotal: null,
            productos: null,
            valoracion: null,
            CorreoClient: null,
            vehiculo: null
        };
    }
    setPedidoPaypal(pedido) {
        this.pedido = pedido;
    }
    getPedidoPaypal() {
        return this.pedido;
    }
}
PaypalService.ɵfac = function PaypalService_Factory(t) { return new (t || PaypalService)(); };
PaypalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaypalService, factory: PaypalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaypalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jC6o":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");











const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
class AuthService {
    constructor(afAuth, afAuth1, afs) {
        this.afAuth = afAuth;
        this.afAuth1 = afAuth1;
        this.afs = afs;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((user) => {
            if (user) {
                return this.afs.doc(`clientes/${user.uid}`).valueChanges();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
        this.domici$ = this.afAuth1.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((user1) => {
            if (user1) {
                return this.afs.doc(`domiciliarios/${user1.uid}`).valueChanges();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
    }
    sendVerifyEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield (yield this.afAuth.currentUser).sendEmailVerification();
        });
    }
    register(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                return user;
            }
            catch (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(error.message);
            }
        });
    }
    login(email, password) {
        try {
            const result = this.afAuth.signInWithEmailAndPassword(email, password);
            this.sendVerifyEmail();
            return result;
        }
        catch (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(error.message);
        }
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afAuth.signOut();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCurrentUser() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise();
    }
    resetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.afAuth.sendPasswordResetEmail(email);
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "jvi1":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/modal-edit/modal-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditComponent", function() { return ModalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_posts_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/posts/edit-post/edit-post.component */ "9PSG");




class ModalEditComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalEditComponent.ɵfac = function ModalEditComponent_Factory(t) { return new (t || ModalEditComponent)(); };
ModalEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalEditComponent, selectors: [["app-modal-edit"]], decls: 4, vars: 0, consts: [[1, "dialog-content"]], template: function ModalEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-edit-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_posts_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__["EditPostComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-edit',
                templateUrl: './modal-edit.component.html',
                styleUrls: ['./modal-edit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k+/l":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pedidos/pedidos.component.ts ***!
  \***************************************************************/
/*! exports provided: PedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosComponent", function() { return PedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_pedido_calificar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/pedido-calificar.service */ "sFdE");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function PedidosComponent_div_8_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidosComponent_div_8_div_9_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const pedido_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.productoP(pedido_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "calificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedidosComponent_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PedidosComponent_div_8_div_9_div_15_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", producto_r3.producto.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", producto_r3.producto.tipo_producto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" cantidad: ", producto_r3.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("valor: ", producto_r3.producto.valor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", producto_r3.producto.calificacion == 0);
} }
function PedidosComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PedidosComponent_div_8_div_9_Template, 16, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pedido_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Estado: ", pedido_r1.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fecha: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, pedido_r1.fecha.seconds * 1000), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pedido_r1.productos);
} }
class PedidosComponent {
    constructor(firestoreSvc, authSvc, firesore, pedidoCalificarService, router) {
        this.firestoreSvc = firestoreSvc;
        this.authSvc = authSvc;
        this.firesore = firesore;
        this.pedidoCalificarService = pedidoCalificarService;
        this.router = router;
        this.uid = '';
        this.activar = false;
    }
    ngOnInit() {
        this.authSvc.afAuth.authState.subscribe(res => {
            this.uid = res.uid;
            this.getPedidosNuevos();
        });
    }
    ngOnDestroy() {
        if (this.newSuscriber) {
            this.newSuscriber.unsubscribe();
        }
        if (this.culminadoSuscriber) {
            this.culminadoSuscriber.unsubscribe();
        }
    }
    change($event) {
        this.activar = true;
        console.log('change()', $event.value);
        this.pedidos = [];
        this.getPedidosCulminados();
    }
    change1($event) {
        this.activar = false;
        console.log('change()', $event.value);
        this.pedidos = [];
        this.getPedidosNuevos();
    }
    getPedidosNuevos() {
        const path = `clientes/${this.uid}/pedidos`;
        const uid = this.firesore.createId();
        this.newSuscriber = this.firestoreSvc.getCollectionQuery(path, 'estado', '==', 'enviado').subscribe(res => {
            if (res.length) {
                this.pedidos = res;
                console.log(this.pedidos);
            }
        });
        this.pedidos = [];
    }
    getPedidosCulminados() {
        const path = `clientes/${this.uid}/pedidos`;
        const uid = this.firesore.createId();
        this.culminadoSuscriber = this.firestoreSvc.getCollectionQuery(path, 'estado', '==', 'entregado').subscribe(res => {
            if (res.length) {
                this.pedidos = res;
                console.log(this.pedidos);
            }
        });
        this.pedidos = [];
    }
    productoP(pedido) {
        this.pedidoCalificarService.setPedido(pedido);
        this.router.navigate(['/calificar']);
    }
}
PedidosComponent.ɵfac = function PedidosComponent_Factory(t) { return new (t || PedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_pedido_calificar_service__WEBPACK_IMPORTED_MODULE_5__["PedidoCalificarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidosComponent, selectors: [["app-pedidos"]], decls: 9, vars: 1, consts: [[1, "flexp"], ["value", "nuevos", 1, "boton1", 3, "click"], ["value", "culminados", 1, "boton2", 3, "click"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "ancho"], [4, "ngFor", "ngForOf"], [3, "src"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"]], template: function PedidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidosComponent_Template_mat_button_toggle_click_2_listener($event) { return ctx.change1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "nuevos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidosComponent_Template_mat_button_toggle_click_5_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "culminados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PedidosComponent_div_8_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidos);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".boton1[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n}\n\n.boton2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20%;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.ancho[_ngcontent-%COMP%] {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxZQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBRUksV0FBQTtFQUNBLFVBQUE7QUFISjs7QUFRQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0YsdUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVVBO0VBSUksZUFBQTtFQUNKLDBCQUFBO0FBWEE7O0FBY0E7RUFFSSxlQUFBO0VBQ0EsVUFBQTtBQWJKOztBQWtCSTtFQUVJLFVBQUE7QUFqQlI7O0FBMkJBO0VBRUksV0FBQTtBQXpCSiIsImZpbGUiOiJwZWRpZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5ib3RvbjF7XG5cbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmJvdG9uMntcblxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cblxuXG5tYXQtY2FyZHtcblxuICAgIGhlaWdodDogNDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4kcm93SGVpZ2h0OiA0MHB4O1xuLmZsZXhwIHtcblxuXG5cbiAgICBjb2x1bW4tY291bnQ6IDI7XG5tYXgtaGVpZ2h0OiBjYWxjKDUgKiAjeyRyb3dIZWlnaHR9KTtcblxuXG5zcGFue1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyMCU7XG59XG4gICAgfVxuXG5cbiAgICBpbWd7XG5cbiAgICAgICAgd2lkdGg6IDcwJTtcblxuICAgIH1cblxuXG5cblxufVxuXG5cbi5hbmNob3tcblxuICAgIGhlaWdodDogMTAlO1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedidos',
                templateUrl: './pedidos.component.html',
                styleUrls: ['./pedidos.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_4__["AuthCrudService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _app_shared_services_pedido_calificar_service__WEBPACK_IMPORTED_MODULE_5__["PedidoCalificarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserService {
    constructor() { }
    setUser(User) {
        this.User = User;
    }
    getUser() {
        return this.User;
    }
    setUserEncuesta(user) {
        this.user = user;
    }
    getUserEncuesta() {
        return this.user;
    }
    setAnality(user) {
        this.userA = user;
    }
    getAnality() {
        return this.userA;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lHyo":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/table-domiciliario/table-domiciliario.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TableDomiciliarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDomiciliarioComponent", function() { return TableDomiciliarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _modal_domici_modal_domici_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-domici/modal-domici.component */ "mdD+");
/* harmony import */ var _modal_edit_domici_modal_edit_domici_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-edit-domici/modal-edit-domici.component */ "Lfae");
/* harmony import */ var _app_shared_services_domiciliario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/domiciliario.service */ "pJrl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");























function TableDomiciliarioComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDomiciliarioComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.nombre, " ");
} }
function TableDomiciliarioComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " apellido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDomiciliarioComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.apellido, " ");
} }
function TableDomiciliarioComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDomiciliarioComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.correo, " ");
} }
function TableDomiciliarioComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " telefono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDomiciliarioComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.telefono, " ");
} }
function TableDomiciliarioComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDomiciliarioComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableDomiciliarioComponent_td_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.oneEditPost(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableDomiciliarioComponent_td_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.oneDeletePost(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDomiciliarioComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function TableDomiciliarioComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
const _c0 = function () { return [5, 10, 20]; };
class TableDomiciliarioComponent {
    constructor(authCrudService, dialog, authSvc, data) {
        this.authCrudService = authCrudService;
        this.dialog = dialog;
        this.authSvc = authSvc;
        this.data = data;
        this.displayedColumns = ['nombre', 'apellido', 'correo', 'telefono', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.uid = '';
    }
    ngOnInit() {
        this.authCrudService.getDomici()
            .subscribe(domici => (this.dataSource.data = domici));
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    oneEditPost(domiciliario) {
        this.data.setDomiciliario(domiciliario);
        this.oneditDialog();
    }
    oneDeletePost(domiciliario) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                const path = 'domiciliarios';
                this.authCrudService.deleteDoc(path, domiciliario.id).then(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!, Your domiciliario has been deleted.', 'sucessfull');
                }).catch((error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error!, There was an error deleting this  domiciliario', 'error');
                });
            }
        });
    }
    onNewPost() {
        this.onpenDialog();
    }
    onpenDialog() {
        const dialogRef = this.dialog.open(_modal_domici_modal_domici_component__WEBPACK_IMPORTED_MODULE_8__["ModalDomiciComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
    oneditDialog() {
        const dialogRef = this.dialog.open(_modal_edit_domici_modal_edit_domici_component__WEBPACK_IMPORTED_MODULE_9__["ModalEditDomiciComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
}
TableDomiciliarioComponent.ɵfac = function TableDomiciliarioComponent_Factory(t) { return new (t || TableDomiciliarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_7__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_domiciliario_service__WEBPACK_IMPORTED_MODULE_10__["DomiciliarioService"])); };
TableDomiciliarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableDomiciliarioComponent, selectors: [["app-table-domiciliario"]], viewQuery: function TableDomiciliarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 26, vars: 5, consts: [[1, "yellow"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "container-btn-new"], ["mat-stroked-button", "", 3, "click"], [1, "material-icons"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "apellido"], ["matColumnDef", "correo"], ["matColumnDef", "telefono"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDomiciliarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableDomiciliarioComponent_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableDomiciliarioComponent_Template_button_click_3_listener() { return ctx.onNewPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " cloud_upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 New Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableDomiciliarioComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableDomiciliarioComponent_td_10_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableDomiciliarioComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableDomiciliarioComponent_td_13_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableDomiciliarioComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableDomiciliarioComponent_td_16_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableDomiciliarioComponent_th_18_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableDomiciliarioComponent_td_19_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableDomiciliarioComponent_th_21_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableDomiciliarioComponent_td_22_Template, 7, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableDomiciliarioComponent_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TableDomiciliarioComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-paginator", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 98%;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1rem;\n}\n\n.container-btn-new[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin: 1rem -0.6rem;\n}\n\n.container-btn-new[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n  color: #fff;\n  background: darkslateblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RhYmxlLWRvbWljaWxpYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7QUFBSjs7QUFHQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUVJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUhKOztBQUtJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFIUiIsImZpbGUiOiJ0YWJsZS1kb21pY2lsaWFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcblxuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGR7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG59XG5cbi5jb250YWluZXItYnRuLW5ld3tcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFyZW0gLTAuNnJlbTtcblxuICAgIGJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableDomiciliarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-domiciliario',
                templateUrl: './table-domiciliario.component.html',
                styleUrls: ['./table-domiciliario.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_7__["AuthCrudService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _app_shared_services_domiciliario_service__WEBPACK_IMPORTED_MODULE_10__["DomiciliarioService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "mJJ/":
/*!*****************************************!*\
  !*** ./src/app/guards/guard-a.guard.ts ***!
  \*****************************************/
/*! exports provided: GuardAGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAGuard", function() { return GuardAGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);









class GuardAGuard {
    constructor(authSvc, firestoreSvc, router) {
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.router = router;
        this.active = false;
        this.uid = '';
        this.comprobarCliente();
    }
    comprobarCliente() {
        this.authSvc.afAuth.user.subscribe(res => {
            const path = 'clientes';
            this.firestoreSvc.getDoc(path, res.uid).subscribe(user => {
                if (user) {
                    this.active = true;
                }
                else {
                    this.active = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Acceso no permitido').then(() => {
                        this.router.navigate(['/home']);
                    });
                }
            });
        });
        return this.active;
    }
    canActivate(route, state) {
        return this.active;
    }
}
GuardAGuard.ɵfac = function GuardAGuard_Factory(t) { return new (t || GuardAGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
GuardAGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuardAGuard, factory: GuardAGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardAGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "mPEr":
/*!********************************************************!*\
  !*** ./src/app/shared/services/url-archivo.service.ts ***!
  \********************************************************/
/*! exports provided: UrlArchivoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlArchivoService", function() { return UrlArchivoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UrlArchivoService {
    constructor() {
        this.message = {
            asunto: null,
            message: null,
            file: null,
            gmail: null
        };
    }
    setUrlArchivo(message) {
        this.message = message;
    }
    getUrlArchivo() {
        return this.message;
    }
}
UrlArchivoService.ɵfac = function UrlArchivoService_Factory(t) { return new (t || UrlArchivoService)(); };
UrlArchivoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UrlArchivoService, factory: UrlArchivoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlArchivoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mdD+":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal-domici/modal-domici.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModalDomiciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDomiciComponent", function() { return ModalDomiciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_posts_new_domiciliario_new_domiciliario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/posts/new-domiciliario/new-domiciliario.component */ "PZnL");




class ModalDomiciComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalDomiciComponent.ɵfac = function ModalDomiciComponent_Factory(t) { return new (t || ModalDomiciComponent)(); };
ModalDomiciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalDomiciComponent, selectors: [["app-modal-domici"]], decls: 2, vars: 0, consts: [[1, "dialog-content"]], template: function ModalDomiciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-new-domiciliario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_posts_new_domiciliario_new_domiciliario_component__WEBPACK_IMPORTED_MODULE_2__["NewDomiciliarioComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1kb21pY2kuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDomiciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-domici',
                templateUrl: './modal-domici.component.html',
                styleUrls: ['./modal-domici.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mj0C":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/modal-list-vehiculo/modal-list-vehiculo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ModalListVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalListVehiculoComponent", function() { return ModalListVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_pages_list_vehiculo_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/pages/list-vehiculo/list-vehiculo.component */ "Y8qG");




class ModalListVehiculoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalListVehiculoComponent.ɵfac = function ModalListVehiculoComponent_Factory(t) { return new (t || ModalListVehiculoComponent)(); };
ModalListVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalListVehiculoComponent, selectors: [["app-modal-list-vehiculo"]], decls: 2, vars: 0, consts: [[1, "dialog-content"]], template: function ModalListVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-list-vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_pages_list_vehiculo_list_vehiculo_component__WEBPACK_IMPORTED_MODULE_2__["ListVehiculoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1saXN0LXZlaGljdWxvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalListVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-list-vehiculo',
                templateUrl: './modal-list-vehiculo.component.html',
                styleUrls: ['./modal-list-vehiculo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nFXx":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/calificar-pedido/calificar-pedido.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CalificarPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificarPedidoComponent", function() { return CalificarPedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/message.service */ "QLLi");
/* harmony import */ var _app_shared_services_pedido_calificar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/pedido-calificar.service */ "sFdE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");













function CalificarPedidoComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalificarPedidoComponent_div_0_div_2_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const producto_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.valorarPedido(ctx_r4.valoracion[0], producto_r3.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalificarPedidoComponent_div_0_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const producto_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.valorarPedido(ctx_r6.valoracion[1], producto_r3.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalificarPedidoComponent_div_0_div_2_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const producto_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.valorarPedido(ctx_r7.valoracion[2], producto_r3.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalificarPedidoComponent_div_0_div_2_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const producto_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.valorarPedido(ctx_r8.valoracion[3], producto_r3.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalificarPedidoComponent_div_0_div_2_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const producto_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.valorarPedido(ctx_r9.valoracion[4], producto_r3.producto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", producto_r3.producto.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CalificarPedidoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalificarPedidoComponent_div_0_div_2_Template, 20, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pedido.productos);
} }
class CalificarPedidoComponent {
    constructor(firestoreSvc, authSvc, messageService, pedidoCalificarService) {
        this.firestoreSvc = firestoreSvc;
        this.authSvc = authSvc;
        this.messageService = messageService;
        this.pedidoCalificarService = pedidoCalificarService;
        this.valoracion = [1, 2, 3, 4, 5];
        this.pedidoV = [];
        this.initCarrito();
        this.pedido = this.pedidoCalificarService.getPedido();
        this.pedidoV.push(this.pedido);
        console.log(this.pedido);
    }
    ngOnInit() {
    }
    valorarPedido(numero, producto) {
        this.authSvc.afAuth.user.subscribe(user => {
            if (user) {
                const path = `clientes/${user.uid}/pedidos`;
                this.firestoreSvc.getDoc(path, this.pedido.id).subscribe(pedido => {
                    if (pedido) {
                        for (let index = 0; index < pedido.productos.length; index++) {
                            if (pedido.productos[index].producto.id == producto.id) {
                                pedido.productos[index].producto.calificacion = numero;
                            }
                            else {
                                console.log('producto no encontrado');
                            }
                        }
                        this.firestoreSvc.create(pedido, path, pedido.id).then(() => {
                            console.log('calificacion echa');
                        });
                    }
                });
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
CalificarPedidoComponent.ɵfac = function CalificarPedidoComponent_Factory(t) { return new (t || CalificarPedidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_pedido_calificar_service__WEBPACK_IMPORTED_MODULE_4__["PedidoCalificarService"])); };
CalificarPedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalificarPedidoComponent, selectors: [["app-calificar-pedido"]], decls: 1, vars: 1, consts: [["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "flexp"], [3, "src"], [1, "ec-stars-wrapper"], ["routerLink", "/home", "value", "1", "title", "Votar con 1 estrellas", 3, "click"], ["routerLink", "/home", "value", "2", "title", "Votar con 2 estrellas", 3, "click"], ["routerLink", "/home", "value", "3", "title", "Votar con 3 estrellas", 3, "click"], ["routerLink", "/home", "value", "4", "title", "Votar con 4 estrellas", 3, "click"], ["routerLink", "/home", "value", "5", "title", "Votar con 5 estrellas", 3, "click"]], template: function CalificarPedidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalificarPedidoComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedido.productos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["@charset \"UTF-8\";\n.ec-stars-wrapper[_ngcontent-%COMP%] {\n  \n  font-size: 0;\n  \n  display: inline-block;\n}\n.ec-stars-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  \n  font-size: 42px;\n  font-size: 2rem;\n  color: #888;\n}\n.ec-stars-wrapper[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #2782e4;\n  cursor: pointer;\n}\n\n.ec-stars-wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    ~ a[_ngcontent-%COMP%] {\n  color: #888;\n}\nmat-card[_ngcontent-%COMP%] {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbGlmaWNhci1wZWRpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0M7cUZBQUE7RUFFQSxZQUFBO0VBQ0E7OztxREFBQTtFQUlBLHFCQUFBO0FBRUQ7QUFJQTtFQUNDLHFCQUFBO0VBRUEsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUdBLFdBQUE7QUFKRDtBQU9BO0VBQ0MsY0FBQTtFQUNHLGVBQUE7QUFKSjtBQU1BOztFQUFBO0FBR0E7RUFDQyxXQUFBO0FBSEQ7QUFTQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0YsdUJBQUE7RUFDQSxtQkFBQTtBQVBGO0FBV0E7RUFJSSxlQUFBO0VBQ0osMEJBQUE7QUFaQSIsImZpbGUiOiJjYWxpZmljYXItcGVkaWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVjLXN0YXJzLXdyYXBwZXIge1xuXHQvKiBFc3BhY2lvIGVudHJlIGxvcyBpbmxpbmUtYmxvY2sgKGxvcyBoaWpvcywgbG9zIGBhYCkgXG5cdCAgIGh0dHA6Ly9rc2Vzb2Nzcy5ibG9nc3BvdC5jb20vMjAxMi8wMy9kaXNwbGF5LWlubGluZS1ibG9jay15LXN1cy1lbXBlbm8tZW4uaHRtbCAqL1xuXHRmb250LXNpemU6IDA7XG5cdC8qIFBvZHLDrWFtb3MgcXVpdGFybG8sIFxuXHRcdHBlcm8gZGUgZXN0YSBtYW5lcmEgKHNpZW1wcmUgcXVlIG5vIGxlIGRlbW9zIHBhZGRpbmcpLCBcblx0XHRzw7NsbyBhcGxpY2Fyw6EgbGEgcmVnbGEgLmVjLXN0YXJzLXdyYXBwZXI6aG92ZXIgYSBjdWFuZG9cblx0XHR0YW1iacOpbiBzZSBlc3TDqSBoYWNpZW5kbyBob3ZlciBhIGFsZ3VuYSBlc3RyZWxsYSAqL1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgXG5cblxufVxuLmVjLXN0YXJzLXdyYXBwZXIgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHQvKiBWb2x2ZXIgYSBkYXIgdGFtYcOxbyBhbCB0ZXh0byAqL1xuXHRmb250LXNpemU6IDQycHg7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0XG5cblx0Y29sb3I6ICM4ODg7XG59XG5cbi5lYy1zdGFycy13cmFwcGVyOmhvdmVyIGEge1xuXHRjb2xvcjogcmdiKDM5LCAxMzAsIDIyOCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLypcbiAqIEVsIHNlbGVjdG9yIGRlIGhpam8sIGVzIG5lY2VzYXJpbyBwYXJhIGF1bWVudGFyIGxhIGVzcGVjaWZpZGFkXG4gKi9cbi5lYy1zdGFycy13cmFwcGVyID4gYTpob3ZlciB+IGEge1xuXHRjb2xvcjogIzg4ODtcbn1cbiAgXG5cblxuXG5tYXQtY2FyZHtcblxuICAgIGhlaWdodDogNDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4kcm93SGVpZ2h0OiA0MHB4O1xuLmZsZXhwIHtcblxuXG5cbiAgICBjb2x1bW4tY291bnQ6IDI7XG5tYXgtaGVpZ2h0OiBjYWxjKDUgKiAjeyRyb3dIZWlnaHR9KTtcbn1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalificarPedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calificar-pedido',
                templateUrl: './calificar-pedido.component.html',
                styleUrls: ['./calificar-pedido.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _app_shared_services_pedido_calificar_service__WEBPACK_IMPORTED_MODULE_4__["PedidoCalificarService"] }]; }, null); })();


/***/ }),

/***/ "nQsB":
/*!**********************************************************!*\
  !*** ./src/app/components/chat/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your nickname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class LoginComponent {
    constructor(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.nickname = '';
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('users/');
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        if (localStorage.getItem('nickname')) {
            this.router.navigate(['/roomlist']);
        }
        this.loginForm = this.formBuilder.group({
            'nickname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        const login = form;
        this.ref.orderByChild('nickname').equalTo(login.nickname).once('value', snapshot => {
            if (snapshot.exists()) {
                localStorage.setItem('nickname', login.nickname);
                this.router.navigate(['/roomlist']);
            }
            else {
                console.log(login);
                firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('users').push().set(login);
                localStorage.setItem('nickname', login.nickname);
                this.router.navigate(['/roomlist']);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 4, consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter your nickname", "formControlName", "nickname", 3, "errorStateMatcher"], [4, "ngIf"], [1, "button-row"], ["type", "submit", "mat-fab", "", "color", "primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onFormSubmit(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please login using your nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_span_14_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("nickname").valid && ctx.loginForm.get("nickname").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".example-container[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 5px;\n  }\n  \n  .example-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 600px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   \n\n   \n  }\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  \n  .example-full-width[_ngcontent-%COMP%]:nth-last-child(0) {\n    margin-bottom: 10px;\n  }\n  \n  .button-row[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  \n  .mat-flat-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COzs7O0VBSXJCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIFxuXG4gICBcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKDApIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuYnV0dG9uLXJvdyB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgXG4gIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "nwUO":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal-message/modal-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModalMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMessageComponent", function() { return ModalMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_posts_new_send_new_send_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/posts/new-send/new-send.component */ "y1hf");




class ModalMessageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalMessageComponent.ɵfac = function ModalMessageComponent_Factory(t) { return new (t || ModalMessageComponent)(); };
ModalMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalMessageComponent, selectors: [["app-modal-message"]], decls: 2, vars: 0, consts: [[1, "dialog-content"]], template: function ModalMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-new-send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_posts_new_send_new_send_component__WEBPACK_IMPORTED_MODULE_2__["NewSendComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1tZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-message',
                templateUrl: './modal-message.component.html',
                styleUrls: ['./modal-message.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o1Bm":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/producto.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductoService {
    constructor() {
        this.initCarrito();
    }
    setProducto(pedido) {
        this.pedido = pedido;
    }
    getProducto() {
        return this.pedido;
    }
    setValorTotal(total) {
        this.total = total;
    }
    getvalorTotal() {
        return this.total;
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
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pJrl":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/domiciliario.service.ts ***!
  \*********************************************************/
/*! exports provided: DomiciliarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomiciliarioService", function() { return DomiciliarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DomiciliarioService {
    constructor() { }
    setDomiciliario(domiciliario) {
        this.domiciliario = domiciliario;
    }
    getDomiciliario() {
        return this.domiciliario;
    }
}
DomiciliarioService.ɵfac = function DomiciliarioService_Factory(t) { return new (t || DomiciliarioService)(); };
DomiciliarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DomiciliarioService, factory: DomiciliarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomiciliarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qFw8":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/table-vehiculo/table-vehiculo.component.ts ***!
  \******************************************************************************/
/*! exports provided: TableVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableVehiculoComponent", function() { return TableVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/data.service */ "iiaH");
/* harmony import */ var _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/vehiculo.service */ "sP2n");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modal_eidt_vehiculo_modal_eidt_vehiculo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-eidt-vehiculo/modal-eidt-vehiculo.component */ "xh3/");
/* harmony import */ var _modal_vehiculo_modal_vehiculo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-vehiculo/modal-vehiculo.component */ "JGgF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");























function TableVehiculoComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableVehiculoComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.nombre, " ");
} }
function TableVehiculoComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " marca ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableVehiculoComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.marca, " ");
} }
function TableVehiculoComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " placa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableVehiculoComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.placa, " ");
} }
function TableVehiculoComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableVehiculoComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.color, " ");
} }
function TableVehiculoComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableVehiculoComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableVehiculoComponent_td_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.oneEditVehiculo(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableVehiculoComponent_td_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.oneDeleteVehiculo(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableVehiculoComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function TableVehiculoComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
const _c0 = function () { return [5, 10, 20]; };
class TableVehiculoComponent {
    constructor(vehiculoService, dialog, authSvc, data) {
        this.vehiculoService = vehiculoService;
        this.dialog = dialog;
        this.authSvc = authSvc;
        this.data = data;
        this.displayedColumns = ['nombre', 'marca', 'placa', 'color', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.uid = '';
    }
    ngOnInit() {
        this.vehiculoService.getAllVehiculos()
            .subscribe(vehiculos => (this.dataSource.data = vehiculos));
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    oneEditVehiculo(vehiculo) {
        this.data.setVehiculo(vehiculo);
        this.oneditDialog();
    }
    oneDeleteVehiculo(vehiculo) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                this.vehiculoService.deleteVehiculoById(vehiculo).then(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!, Your post has been deleted.', 'sucessfull');
                }).catch((error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Error!, There was an error deleting this post', 'error');
                });
            }
        });
    }
    onNewVehiculo() {
        this.onpenDialog();
    }
    onpenDialog() {
        const dialogRef = this.dialog.open(_modal_vehiculo_modal_vehiculo_component__WEBPACK_IMPORTED_MODULE_10__["ModalVehiculoComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
    oneditDialog() {
        const dialogRef = this.dialog.open(_modal_eidt_vehiculo_modal_eidt_vehiculo_component__WEBPACK_IMPORTED_MODULE_9__["ModalEidtVehiculoComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result ${result}`);
        });
    }
}
TableVehiculoComponent.ɵfac = function TableVehiculoComponent_Factory(t) { return new (t || TableVehiculoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_7__["VehiculoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
TableVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableVehiculoComponent, selectors: [["app-table-vehiculo"]], viewQuery: function TableVehiculoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 26, vars: 5, consts: [[1, "yellow"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "container-btn-new"], ["mat-stroked-button", "", 3, "click"], [1, "material-icons"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "marca"], ["matColumnDef", "placa"], ["matColumnDef", "color"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableVehiculoComponent_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableVehiculoComponent_Template_button_click_3_listener() { return ctx.onNewVehiculo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " cloud_upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 New Vehiculo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableVehiculoComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableVehiculoComponent_td_10_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableVehiculoComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableVehiculoComponent_td_13_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableVehiculoComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableVehiculoComponent_td_16_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableVehiculoComponent_th_18_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableVehiculoComponent_td_19_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableVehiculoComponent_th_21_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableVehiculoComponent_td_22_Template, 7, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableVehiculoComponent_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TableVehiculoComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-paginator", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 98%;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1rem;\n}\n\n.container-btn-new[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin: 1rem -0.6rem;\n}\n\n.container-btn-new[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n  color: #fff;\n  background: darkslateblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RhYmxlLXZlaGljdWxvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtBQUFKOztBQUdBO0VBRUksZUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBRUksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBSEo7O0FBS0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUhSIiwiZmlsZSI6InRhYmxlLXZlaGljdWxvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG5cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGR7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcblxufVxuXG4uY29udGFpbmVyLWJ0bi1uZXd7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtIC0wLjZyZW07XG5cbiAgICBidXR0b257XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-vehiculo',
                templateUrl: './table-vehiculo.component.html',
                styleUrls: ['./table-vehiculo.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_7__["VehiculoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "rjGZ":
/*!*****************************************************************!*\
  !*** ./src/app/components/posts/new-post/new-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "uJAp");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














class NewPostComponent {
    constructor(productSvc, authSvc, firestoreSvc) {
        this.productSvc = productSvc;
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.newPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ciudad_de_exportacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipo_producto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')),
        });
    }
    ngOnInit() {
    }
    addNewPost(data) {
        this.product = console.log(this.productSvc.preAddAndUpdate(data, this.image));
    }
    handleImage(event) {
        this.image = event.target.files[0];
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('product successfully created');
    }
}
NewPostComponent.ɵfac = function NewPostComponent_Factory(t) { return new (t || NewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"])); };
NewPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPostComponent, selectors: [["app-new-post"]], decls: 24, vars: 2, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "nombre", "formControlName", "tipo_producto", "required", ""], ["matInput", "", "placeholder", "valor", "formControlName", "valor", "required", ""], ["matInput", "", "placeholder", "cuidad de exportacion", "formControlName", "ciudad_de_exportacion", "required", ""], [1, "container-input-file"], [1, "custom-file"], ["type", "file", "formControlName", "imagen", 3, "change"], [1, "container-button"], ["type", "submit", "value", "Save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function NewPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewPostComponent_Template_form_ngSubmit_1_listener() { return ctx.addNewPost(ctx.newPostForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "cuidad de exportacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewPostComponent_Template_input_change_17_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CHOOSE IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostComponent_Template_input_click_23_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUVJLG1CQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7QUFDWjtBQUVRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQVo7QUFDWTtFQUNJLHlCQUFBO0FBQ2hCO0FBR1E7RUFFSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRlo7QUFNUTtFQUVJLGNBQUE7QUFMWjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQVVRO0VBQ0ksV0FBQTtBQVJaIiwiZmlsZSI6Im5ldy1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1wb3N0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBmb3Jte1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGlucHV0W3R5cGU9J2ZpbGUnXXtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5tYXQtZmxhdC1idXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLWZpbGV7XG5cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWlucHV0LWZpbGV7XG5cbiAgICAgICAgICAgIG1hcmdpbjogIDJyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYnV0dG9ue1xuICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-post',
                templateUrl: './new-post.component.html',
                styleUrls: ['./new-post.component.scss']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_5__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "rskb":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/edit-vehiculo/edit-vehiculo.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehiculoComponent", function() { return EditVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/data.service */ "iiaH");
/* harmony import */ var _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/vehiculo.service */ "sP2n");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















class EditVehiculoComponent {
    constructor(vehiculoService, authSvc, data, firestoreSvc) {
        this.vehiculoService = vehiculoService;
        this.authSvc = authSvc;
        this.data = data;
        this.firestoreSvc = firestoreSvc;
        this.uid = '';
        this.vehicu$ = {
            color: null,
            marca: null,
            nombre: null,
            placa: null,
            id: null,
            image: null
        };
        this.newPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.vehiculo = this.data.getVehiculo();
        this.vehiculoService.getOneVehiculo(this.vehiculo.id).subscribe(vehicul => {
            this.vehicu$ = vehicul;
        });
    }
    EditVehiculo(data) {
        this.vehiculoService.preUpdate(data, this.vehicu$.id, this.vehicu$.image, this.image);
    }
    handleImage(event) {
        this.image = event.target.files[0];
    }
    create() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
        }).then(result => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deleted!, Your vehicle has been update.', 'sucessfull');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error!, There was an error updating this vehicle', 'error');
            }
        });
    }
}
EditVehiculoComponent.ɵfac = function EditVehiculoComponent_Factory(t) { return new (t || EditVehiculoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__["VehiculoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"])); };
EditVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditVehiculoComponent, selectors: [["app-edit-vehiculo"]], decls: 28, vars: 6, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "nombre", "formControlName", "nombre", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "placa", "formControlName", "placa", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "color", "formControlName", "color", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "marca", "formControlName", "marca", 3, "ngModel", "ngModelChange"], [1, "container-input-file"], [1, "custom-file"], ["type", "file", "formControlName", "imagen", 3, "change"], [1, "container-button"], ["type", "submit", "value", "Save", 1, "mat-flat-button", 3, "disabled", "click"]], template: function EditVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditVehiculoComponent_Template_form_ngSubmit_1_listener() { return ctx.EditVehiculo(ctx.newPostForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehiculoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.vehicu$.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "placa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehiculoComponent_Template_input_ngModelChange_10_listener($event) { return ctx.vehicu$.placa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehiculoComponent_Template_input_ngModelChange_14_listener($event) { return ctx.vehicu$.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehiculoComponent_Template_input_ngModelChange_18_listener($event) { return ctx.vehicu$.marca = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditVehiculoComponent_Template_input_change_21_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CHOOSE IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditVehiculoComponent_Template_input_click_27_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicu$.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicu$.placa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicu$.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicu$.marca);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtdmVoaWN1bG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBRUksbUJBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBRVE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFBWjtBQUNZO0VBQ0kseUJBQUE7QUFDaEI7QUFHUTtFQUVJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGWjtBQU1RO0VBRUksY0FBQTtBQUxaO0FBUVE7RUFDSSxnQkFBQTtBQU5aO0FBVVE7RUFDSSxXQUFBO0FBUloiLCJmaWxlIjoiZWRpdC12ZWhpY3Vsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctcG9zdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgZm9ybXtcblxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBpbnB1dFt0eXBlPSdmaWxlJ117XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQubWF0LWZsYXQtYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmN1c3RvbS1maWxle1xuXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1pbnB1dC1maWxle1xuXG4gICAgICAgICAgICBtYXJnaW46ICAycmVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWJ1dHRvbntcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-vehiculo',
                templateUrl: './edit-vehiculo.component.html',
                styleUrls: ['./edit-vehiculo.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__["VehiculoService"] }, { type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_3__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "sFdE":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/pedido-calificar.service.ts ***!
  \*************************************************************/
/*! exports provided: PedidoCalificarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoCalificarService", function() { return PedidoCalificarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PedidoCalificarService {
    constructor() { }
    setPedido(pedido) {
        this.pedido = pedido;
    }
    getPedido() {
        return this.pedido;
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
PedidoCalificarService.ɵfac = function PedidoCalificarService_Factory(t) { return new (t || PedidoCalificarService)(); };
PedidoCalificarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PedidoCalificarService, factory: PedidoCalificarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoCalificarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sP2n":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/vehiculo.service.ts ***!
  \*****************************************************/
/*! exports provided: VehiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoService", function() { return VehiculoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class VehiculoService {
    constructor(afs, storage) {
        this.afs = afs;
        this.storage = storage;
        this.vehiculoCollection = afs.collection('vehiculos');
    }
    getAllVehiculos() {
        return this.vehiculoCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    preUpdate(Vehiculo, id, img, img2) {
        if (img2 != null) {
            this.uploadImage1(Vehiculo, id, img2);
        }
        else {
            this.editPostVendedor(Vehiculo, id, img);
        }
    }
    preAddAndUpdate(vehiculo, image) {
        this.uploadImage(vehiculo, image);
    }
    deleteVehiculoById(vehiculo) {
        return this.vehiculoCollection.doc(vehiculo.id).delete();
    }
    getOneVehiculo(id) {
        return this.vehiculoCollection.doc(id).valueChanges();
    }
    editPostVendedor(vehiculo, id, img) {
        const producto = {
            nombre: vehiculo.nombre,
            color: vehiculo.color,
            image: img,
            marca: vehiculo.marca,
            id: id,
            placa: vehiculo.placa
        };
        const result = this.vehiculoCollection.doc(id).set(producto);
        return result;
    }
    editPostVendedor1(vehiculo, id) {
        const producto = {
            nombre: vehiculo.nombre,
            color: vehiculo.color,
            image: this.downloadURL1,
            marca: vehiculo.marca,
            id: id,
            placa: vehiculo.placa
        };
        const result = this.vehiculoCollection.doc(id).set(producto);
        return result;
    }
    saveVehiculo(vehiculo) {
        this.id = this.afs.createId();
        const producObj = {
            nombre: vehiculo.nombre,
            color: vehiculo.color,
            image: this.downloadURL,
            marca: vehiculo.marca,
            id: this.id,
            placa: vehiculo.placa
        };
        this.vehiculoCollection.doc(this.id).set(producObj);
    }
    uploadImage(vehiculo, image) {
        this.filePath = `images/${image.name}`;
        const fileRef = this.storage.ref(this.filePath);
        const task = this.storage.upload(this.filePath, image);
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe(urlImage => {
                this.downloadURL = urlImage;
                this.saveVehiculo(vehiculo);
                //call addPost()
            });
        })).subscribe();
    }
    uploadImage1(vehiculo, id, image) {
        this.filePath = `images/${image.name}`;
        const fileRef = this.storage.ref(this.filePath);
        const task = this.storage.upload(this.filePath, image);
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe(urlImage => {
                this.downloadURL1 = urlImage;
                this.editPostVendedor1(vehiculo, id);
                //call addPost()
            });
        })).subscribe();
    }
}
VehiculoService.ɵfac = function VehiculoService_Factory(t) { return new (t || VehiculoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
VehiculoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehiculoService, factory: VehiculoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehiculoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "t7AC":
/*!**************************************************************!*\
  !*** ./src/app/components/posts/new-post/new-post.module.ts ***!
  \**************************************************************/
/*! exports provided: NewPostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostModule", function() { return NewPostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class NewPostModule {
}
NewPostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewPostModule });
NewPostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewPostModule_Factory(t) { return new (t || NewPostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewPostModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uJAp":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _app_shared_services_url_archivo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/url-archivo.service */ "mPEr");









class ProductService {
    constructor(afs, storage, urlArchivoService) {
        this.afs = afs;
        this.storage = storage;
        this.urlArchivoService = urlArchivoService;
        this.postCollection = afs.collection('productos');
    }
    getAllPosts() {
        return this.postCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getOnePost(id) {
        return this.postCollection.doc(id).valueChanges();
    }
    getAllPedidos(path) {
        return this.afs.collection(path)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    deletePostById(product) {
        return this.postCollection.doc(product.id).delete();
    }
    editPostVendedor(product, img) {
        const producto = {
            ciudad_de_exportacion: product.ciudad_de_exportacion,
            image: img,
            tipo_producto: product.tipo_producto,
            valor: product.valor,
        };
        const result = this.postCollection.doc(product.id).set(producto);
        return result;
    }
    editPostVendedor1(product) {
        const producto = {
            ciudad_de_exportacion: product.ciudad_de_exportacion,
            image: this.downloadURL1,
            tipo_producto: product.tipo_producto,
            valor: product.valor,
        };
        const result = this.postCollection.doc(product.id).set(producto);
        return result;
    }
    preAddAndUpdate(product, image) {
        this.uploadImage(product, image);
    }
    preUpdate(product, img, img2) {
        if (img2 != null) {
            this.uploadImage1(product, img2);
        }
        else {
            this.editPostVendedor(product, img);
        }
    }
    saveProduct(product) {
        this.id = this.afs.createId();
        const producObj = {
            ciudad_de_exportacion: product.ciudad_de_exportacion,
            tipo_producto: product.tipo_producto,
            image: this.downloadURL,
            valor: product.valor,
            id: this.id,
            calificacion: 0
        };
        this.postCollection.doc(this.id).set(producObj);
    }
    storageA(archivo) {
        this.filePath = `archivos/${archivo.name}`;
        const fileRef = this.storage.ref(this.filePath);
        const task = this.storage.upload(this.filePath, archivo);
        const url = fileRef.getDownloadURL();
        return url;
    }
    uploadImage(product, image) {
        this.filePath = `images/${image.name}`;
        const fileRef = this.storage.ref(this.filePath);
        const task = this.storage.upload(this.filePath, image);
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe(urlImage => {
                this.downloadURL = urlImage;
                this.saveProduct(product);
                //call addPost()
            });
        })).subscribe();
    }
    Archivo() {
        return this.downloadURL2;
    }
    uploadImage1(product, image) {
        this.filePath = `images/${image.name}`;
        const fileRef = this.storage.ref(this.filePath);
        const task = this.storage.upload(this.filePath, image);
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe(urlImage => {
                this.downloadURL1 = urlImage;
                this.editPostVendedor1(product);
                //call addPost()
            });
        })).subscribe();
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_url_archivo_service__WEBPACK_IMPORTED_MODULE_4__["UrlArchivoService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _app_shared_services_url_archivo_service__WEBPACK_IMPORTED_MODULE_4__["UrlArchivoService"] }]; }, null); })();


/***/ }),

/***/ "ulZx":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/user-active/user-active.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserActiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActiveComponent", function() { return UserActiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






function UserActiveComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nombre:", users_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" apellido: ", users_r1.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("telefono: ", users_r1.telefono, "");
} }
class UserActiveComponent {
    constructor(firestoreSvc) {
        this.firestoreSvc = firestoreSvc;
        this.userActive = [];
        this.active();
    }
    ngOnInit() {
    }
    active() {
        const path = 'clientes';
        this.firestoreSvc.getUsers().subscribe(user => {
            for (let index = 0; index < user.length; index++) {
                if (user[index].active == true) {
                    this.userActive = user;
                }
            }
        });
    }
}
UserActiveComponent.ɵfac = function UserActiveComponent_Factory(t) { return new (t || UserActiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
UserActiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserActiveComponent, selectors: [["app-user-active"]], decls: 1, vars: 1, consts: [["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "flexp"], [1, "material-icons"]], template: function UserActiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserActiveComponent_div_0_Template, 15, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: [".boton1[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.boton2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%] {\n  column-count: 2;\n  max-height: calc(5 * 40px);\n}\n\nmat-card[_ngcontent-%COMP%]   .flexp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20%;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.ancho[_ngcontent-%COMP%] {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VzZXItYWN0aXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksWUFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUVJLGVBQUE7QUFISjs7QUFLQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0FBSEo7O0FBUUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNGLHVCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFVQTtFQUlJLGVBQUE7RUFDSiwwQkFBQTtBQVhBOztBQWNBO0VBRUksZUFBQTtFQUNBLFVBQUE7QUFiSjs7QUFrQkk7RUFFSSxVQUFBO0FBakJSOztBQTJCQTtFQUVJLFdBQUE7QUF6QkoiLCJmaWxlIjoidXNlci1hY3RpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJvdG9uMXtcblxuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5zcGFue1xuXG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuLmJvdG9uMntcblxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cblxuXG5tYXQtY2FyZHtcblxuICAgIGhlaWdodDogNDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4kcm93SGVpZ2h0OiA0MHB4O1xuLmZsZXhwIHtcblxuXG5cbiAgICBjb2x1bW4tY291bnQ6IDI7XG5tYXgtaGVpZ2h0OiBjYWxjKDUgKiAjeyRyb3dIZWlnaHR9KTtcblxuXG5zcGFue1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyMCU7XG59XG4gICAgfVxuXG5cbiAgICBpbWd7XG5cbiAgICAgICAgd2lkdGg6IDcwJTtcblxuICAgIH1cblxuXG5cblxufVxuXG5cbi5hbmNob3tcblxuICAgIGhlaWdodDogMTAlO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-active',
                templateUrl: './user-active.component.html',
                styleUrls: ['./user-active.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_pages_container_app_container_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/pages/container-app/container-app.component */ "P5so");
/* harmony import */ var _guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/guard.guard */ "AKzV");
/* harmony import */ var _components_pages_container_logins_container_logins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/container-logins/container-logins.component */ "9qLr");
/* harmony import */ var _components_item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-carrito/item-carrito.component */ "OAro");
/* harmony import */ var _components_pages_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/pedidos/pedidos.component */ "k+/l");
/* harmony import */ var _guards_guard_a_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/guard-a.guard */ "mJJ/");
/* harmony import */ var _components_chat_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat/login/login.component */ "nQsB");
/* harmony import */ var _components_chat_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/roomlist/roomlist.component */ "/gzX");
/* harmony import */ var _components_chat_addroom_addroom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chat/addroom/addroom.component */ "8TYY");
/* harmony import */ var _components_chat_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat/chatroom/chatroom.component */ "1Ikr");
/* harmony import */ var _components_pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/anality-precios/anality-precios.component */ "9KBI");
/* harmony import */ var _components_pages_calificar_pedido_calificar_pedido_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/calificar-pedido/calificar-pedido.component */ "nFXx");
/* harmony import */ var _components_pages_comentario_comentario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/comentario/comentario.component */ "cigX");
/* harmony import */ var _components_anality_client_anality_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/anality-client/anality-client.component */ "ilyf");
/* harmony import */ var _components_anality_pedido_anality_pedido_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/anality-pedido/anality-pedido.component */ "YKZj");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "SYS6");
/* harmony import */ var _components_pages_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/encuesta/encuesta.component */ "h4gG");
/* harmony import */ var _components_pages_user_encuesta_user_encuesta_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/user-encuesta/user-encuesta.component */ "23+/");
/* harmony import */ var _shared_components_table_vehiculo_table_vehiculo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/table-vehiculo/table-vehiculo.component */ "qFw8");
/* harmony import */ var _components_pages_tareas_tareas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/tareas/tareas.component */ "cxHJ");
/* harmony import */ var _components_pages_ver_tareas_ver_tareas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/ver-tareas/ver-tareas.component */ "Ovbr");
/* harmony import */ var _components_pages_ventas_reales_ventas_reales_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/ventas-reales/ventas-reales.component */ "PVsK");
/* harmony import */ var _shared_components_table_domiciliario_table_domiciliario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/components/table-domiciliario/table-domiciliario.component */ "lHyo");
/* harmony import */ var _components_pages_entregar_pedidos_entregar_pedidos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/entregar-pedidos/entregar-pedidos.component */ "zYFw");
/* harmony import */ var _guards_guard_d_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/guard-d.guard */ "70zx");





























const routes = [
    { path: '', component: _app_components_pages_container_app_container_app_component__WEBPACK_IMPORTED_MODULE_2__["ContainerAppComponent"],
        children: [
            { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | components-pages-home-home-module */ "components-pages-home-home-module").then(__webpack_require__.bind(null, /*! ./components/pages/home/home.module */ "TWGy")).then(m => m.HomeModule)
            },
            { path: 'carrito', component: _components_item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_5__["ItemCarritoComponent"],
            },
            { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | components-pages-about-about-module */ "components-pages-about-about-module").then(__webpack_require__.bind(null, /*! ./components/pages/about/about.module */ "xW2K")).then(m => m.AboutModule) },
            {
                path: '', redirectTo: 'home',
                pathMatch: 'full'
            },
        ]
    },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | components-admin-admin-module */ "components-admin-admin-module").then(__webpack_require__.bind(null, /*! ./components/admin/admin.module */ "5OiB")).then(m => m.AdminModule) },
    { path: '', component: _components_pages_container_logins_container_logins_component__WEBPACK_IMPORTED_MODULE_4__["ContainerLoginsComponent"],
        children: [
            { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() | components-auth-login-login-module */ "components-auth-login-login-module").then(__webpack_require__.bind(null, /*! ./components/auth/login/login.module */ "TXZ+")).then(m => m.LoginModule) },
            { path: 'crearUser', loadChildren: () => __webpack_require__.e(/*! import() | components-auth-crear-user-crear-user-module */ "components-auth-crear-user-crear-user-module").then(__webpack_require__.bind(null, /*! ./components/auth/crear-user/crear-user.module */ "oNjQ")).then(m => m.CrearUserModule) },
            { path: 'change-password', loadChildren: () => __webpack_require__.e(/*! import() | components-auth-change-password-change-password-module */ "components-auth-change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./components/auth/change-password/change-password.module */ "Y8Os")).then(m => m.ChangePasswordModule) },
            { path: 'pago', loadChildren: () => __webpack_require__.e(/*! import() | components-pagoTargeta-select-targeta-select-targeta-module */ "components-pagoTargeta-select-targeta-select-targeta-module").then(__webpack_require__.bind(null, /*! ./components/pagoTargeta/select-targeta/select-targeta.module */ "rJ/t")).then(m => m.SelectTargetaModule) },
            { path: 'sendEmail', loadChildren: () => __webpack_require__.e(/*! import() | components-auth-send-email-send-email-module */ "components-auth-send-email-send-email-module").then(__webpack_require__.bind(null, /*! ./components/auth/send-email/send-email.module */ "Z7Zf")).then(m => m.SendEmailModule) },
            { path: 'mispedidos', component: _components_pages_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_6__["PedidosComponent"],
                canActivate: [_guards_guard_a_guard__WEBPACK_IMPORTED_MODULE_7__["GuardAGuard"]] },
            { path: 'miencuesta', component: _components_pages_user_encuesta_user_encuesta_component__WEBPACK_IMPORTED_MODULE_19__["UserEncuestaComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'loginChat', component: _components_chat_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'roomlist', component: _components_chat_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_9__["RoomlistComponent"] },
            { path: 'addroom', component: _components_chat_addroom_addroom_component__WEBPACK_IMPORTED_MODULE_10__["AddroomComponent"] },
            { path: 'chatroom/:roomname', component: _components_chat_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_11__["ChatroomComponent"] },
            { path: 'precios', component: _components_pages_anality_precios_anality_precios_component__WEBPACK_IMPORTED_MODULE_12__["AnalityPreciosComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'encuesta', component: _components_pages_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_18__["EncuestaComponent"],
                canActivate: [_guards_guard_a_guard__WEBPACK_IMPORTED_MODULE_7__["GuardAGuard"]] },
            { path: 'crear-vehiculo', component: _shared_components_table_vehiculo_table_vehiculo_component__WEBPACK_IMPORTED_MODULE_20__["TableVehiculoComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'crear-domiciliario', component: _shared_components_table_domiciliario_table_domiciliario_component__WEBPACK_IMPORTED_MODULE_24__["TableDomiciliarioComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'pedidos-asignados', component: _components_pages_entregar_pedidos_entregar_pedidos_component__WEBPACK_IMPORTED_MODULE_25__["EntregarPedidosComponent"],
                canActivate: [_guards_guard_d_guard__WEBPACK_IMPORTED_MODULE_26__["GuardDGuard"]] },
            { path: 'crear-tareas', component: _components_pages_tareas_tareas_component__WEBPACK_IMPORTED_MODULE_21__["TareasComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'ver-tareas', component: _components_pages_ver_tareas_ver_tareas_component__WEBPACK_IMPORTED_MODULE_22__["VerTareasComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'ventas', component: _components_pages_ventas_reales_ventas_reales_component__WEBPACK_IMPORTED_MODULE_23__["VentasRealesComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'calificar', component: _components_pages_calificar_pedido_calificar_pedido_component__WEBPACK_IMPORTED_MODULE_13__["CalificarPedidoComponent"],
                canActivate: [_guards_guard_a_guard__WEBPACK_IMPORTED_MODULE_7__["GuardAGuard"]] },
            { path: 'comentarios', component: _components_pages_comentario_comentario_component__WEBPACK_IMPORTED_MODULE_14__["ComentarioComponent"] },
            { path: 'anality-full-clients', component: _components_anality_client_anality_client_component__WEBPACK_IMPORTED_MODULE_15__["AnalityClientComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'anality-full-pedidos', component: _components_anality_pedido_anality_pedido_component__WEBPACK_IMPORTED_MODULE_16__["AnalityPedidoComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'sendMail', component: _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_17__["SendMailComponent"],
                canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_3__["GuardGuard"]] },
            { path: 'fecha-calificacion', loadChildren: () => __webpack_require__.e(/*! import() | components-pages-fecha-calificacion-fecha-calificacion-module */ "components-pages-fecha-calificacion-fecha-calificacion-module").then(__webpack_require__.bind(null, /*! ./components/pages/fecha-calificacion/fecha-calificacion.module */ "G0QP")).then(m => m.FechaCalificacionModule) },
            { path: 'pedidos', loadChildren: () => __webpack_require__.e(/*! import() | components-pages-pedidos-admin-pedidos-admin-module */ "components-pages-pedidos-admin-pedidos-admin-module").then(__webpack_require__.bind(null, /*! ./components/pages/pedidos-admin/pedidos-admin.module */ "spaL")).then(m => m.PedidosAdminModule) },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




























const myModule = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            myModule
        ], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    myModule
                ],
                exports: [myModule],
            }]
    }], null, null); })();


/***/ }),

/***/ "xAJv":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/estado-cliente/estado-cliente.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EstadoClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoClienteComponent", function() { return EstadoClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");





class EstadoClienteComponent {
    constructor(firestoreSvc) {
        this.firestoreSvc = firestoreSvc;
        this.activo = 0;
        this.inactivo = 0;
        this.view = [700, 400];
        // options
        this.data = [];
        this.label = ['activo', 'inactivo'];
        this.gradient = true;
        this.showLegend = true;
        this.showLabels = true;
        this.isDoughnut = false;
        this.legendPosition = 'below';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.user$ = this.firestoreSvc.getUsers();
    }
    ngOnInit() {
        this.estado();
    }
    estado() {
        this.user$.subscribe(cliente => {
            for (let index = 0; index < cliente.length; index++) {
                if (cliente[index].active == true) {
                    this.activo++;
                }
                else if (cliente[index].active == false) {
                    this.inactivo++;
                }
            }
            this.data[0] = this.activo;
            this.data[1] = this.inactivo;
            this.single = [
                {
                    "name": this.label[0],
                    "value": this.data[0]
                },
                {
                    "name": this.label[1],
                    "value": this.data[1]
                }
            ];
        });
        this.single = [];
    }
    onSelect(data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
    onActivate(data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
    onDeactivate(data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
EstadoClienteComponent.ɵfac = function EstadoClienteComponent_Factory(t) { return new (t || EstadoClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
EstadoClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstadoClienteComponent, selectors: [["app-estado-cliente"]], decls: 3, vars: 8, consts: [[3, "view", "scheme", "results", "gradient", "legend", "legendPosition", "labels", "doughnut", "select", "activate", "deactivate"]], template: function EstadoClienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estado de clientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-charts-pie-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function EstadoClienteComponent_Template_ngx_charts_pie_chart_select_2_listener($event) { return ctx.onSelect($event); })("activate", function EstadoClienteComponent_Template_ngx_charts_pie_chart_activate_2_listener($event) { return ctx.onActivate($event); })("deactivate", function EstadoClienteComponent_Template_ngx_charts_pie_chart_deactivate_2_listener($event) { return ctx.onDeactivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("legend", ctx.showLegend)("legendPosition", ctx.legendPosition)("labels", ctx.showLabels)("doughnut", ctx.isDoughnut);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhZG8tY2xpZW50ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoClienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estado-cliente',
                templateUrl: './estado-cliente.component.html',
                styleUrls: ['./estado-cliente.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "xJ8H":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal-active/modal-active.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModalActiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalActiveComponent", function() { return ModalActiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_pages_user_active_user_active_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/pages/user-active/user-active.component */ "ulZx");




class ModalActiveComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalActiveComponent.ɵfac = function ModalActiveComponent_Factory(t) { return new (t || ModalActiveComponent)(); };
ModalActiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalActiveComponent, selectors: [["app-modal-active"]], decls: 4, vars: 0, consts: [[1, "dialog-content"]], template: function ModalActiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-user-active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_pages_user_active_user_active_component__WEBPACK_IMPORTED_MODULE_2__["UserActiveComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1hY3RpdmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalActiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-active',
                templateUrl: './modal-active.component.html',
                styleUrls: ['./modal-active.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xh3/":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/modal-eidt-vehiculo/modal-eidt-vehiculo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ModalEidtVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEidtVehiculoComponent", function() { return ModalEidtVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_pages_edit_vehiculo_edit_vehiculo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/pages/edit-vehiculo/edit-vehiculo.component */ "rskb");




class ModalEidtVehiculoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalEidtVehiculoComponent.ɵfac = function ModalEidtVehiculoComponent_Factory(t) { return new (t || ModalEidtVehiculoComponent)(); };
ModalEidtVehiculoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalEidtVehiculoComponent, selectors: [["app-modal-eidt-vehiculo"]], decls: 4, vars: 0, consts: [[1, "dialog-content"]], template: function ModalEidtVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-edit-vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _components_pages_edit_vehiculo_edit_vehiculo_component__WEBPACK_IMPORTED_MODULE_2__["EditVehiculoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1laWR0LXZlaGljdWxvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalEidtVehiculoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-eidt-vehiculo',
                templateUrl: './modal-eidt-vehiculo.component.html',
                styleUrls: ['./modal-eidt-vehiculo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "y+rU":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/pages/productos-mas-vendidos/productos-mas-vendidos.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductosMasVendidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosMasVendidosComponent", function() { return ProductosMasVendidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");





class ProductosMasVendidosComponent {
    constructor(firestoreSvc) {
        this.firestoreSvc = firestoreSvc;
        this.contador = 0;
        this.vector = [];
        this.pos = [];
        this.posi = 0;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.product$ = this.firestoreSvc.getPedidosAll();
    }
    ngOnInit() {
        this.getAllClient();
    }
    getAllClient() {
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
                    this.doughnutChartLabels.push(producto);
                }
            });
            for (this.posi = 0; this.posi < this.doughnutChartLabels.length; this.posi++) {
                for (let index1 = 0; index1 < pedidos.length; index1++) {
                    for (let index2 = 0; index2 < pedidos[index1].productos.length; index2++) {
                        if (pedidos[index1].productos[index2].producto.tipo_producto == this.doughnutChartLabels[this.posi]) {
                            this.contador += pedidos[index1].productos[index2].cantidad;
                        }
                    }
                }
                this.doughnutChartData[this.posi] = [this.contador];
                this.contador = 0;
            }
        });
        this.doughnutChartData = [];
        this.doughnutChartLabels = [];
    }
    onSelect(event) {
        console.log(event);
    }
}
ProductosMasVendidosComponent.ɵfac = function ProductosMasVendidosComponent_Factory(t) { return new (t || ProductosMasVendidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
ProductosMasVendidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductosMasVendidosComponent, selectors: [["app-productos-mas-vendidos"]], decls: 4, vars: 3, consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"]], template: function ProductosMasVendidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Productos mas vendidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["p[_ngcontent-%COMP%] {\n    font-family: Lato;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy1tYXMtdmVuZGlkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJwcm9kdWN0b3MtbWFzLXZlbmRpZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductosMasVendidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productos-mas-vendidos',
                templateUrl: './productos-mas-vendidos.component.html',
                styleUrls: ['./productos-mas-vendidos.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "y1hf":
/*!*****************************************************************!*\
  !*** ./src/app/components/posts/new-send/new-send.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSendComponent", function() { return NewSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/message.service */ "QLLi");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "uJAp");
/* harmony import */ var _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/user.service */ "kmKP");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_shared_services_url_archivo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/url-archivo.service */ "mPEr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















class NewSendComponent {
    constructor(firestoreSvc, userSvc, messageSvc, archSvc, urlArchivoService) {
        this.firestoreSvc = firestoreSvc;
        this.userSvc = userSvc;
        this.messageSvc = messageSvc;
        this.archSvc = archSvc;
        this.urlArchivoService = urlArchivoService;
        this.newPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            asunto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.user = userSvc.getUser();
    }
    ngOnInit() {
    }
    handleFile(event) {
        this.file = event.target.files[0];
    }
    addNewMessage(data) {
        data.gmail = this.user.gmail;
        if (this.file !== undefined) {
            data.file = null;
            const url = this.archSvc.storageA(this.file);
            url.subscribe(UrlImage => {
                data.file = UrlImage;
                console.log(data);
                this.messageSvc.sendMessageUser(data).subscribe(() => {
                });
            });
        }
        else {
            this.messageSvc.sendMessageUser(data).subscribe(() => {
            });
        }
    }
    send() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Send!, Your message has been send.', 'sucessfull');
    }
}
NewSendComponent.ɵfac = function NewSendComponent_Factory(t) { return new (t || NewSendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_url_archivo_service__WEBPACK_IMPORTED_MODULE_7__["UrlArchivoService"])); };
NewSendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewSendComponent, selectors: [["app-new-send"]], decls: 20, vars: 2, consts: [[1, "new-post-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "asunto", "formControlName", "asunto"], [1, "example-full-width"], ["matInput", "", "placeholder", "", "formControlName", "message"], [1, "container-input-file"], [1, "custom-file"], ["type", "file", "formControlName", "file", 3, "change"], [1, "container-button"], ["type", "submit", "value", "Send", 1, "mat-flat-button", 3, "disabled", "click"]], template: function NewSendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewSendComponent_Template_form_ngSubmit_1_listener() { return ctx.addNewMessage(ctx.newPostForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewSendComponent_Template_input_change_13_listener($event) { return ctx.handleFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CHOOSE FILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewSendComponent_Template_input_click_19_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".new-post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.mat-flat-button[_ngcontent-%COMP%]:hover {\n  background: darkslateblue;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-input-file[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n.new-post-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldy1zZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUVJLG1CQUFBO0FBQU47QUFDTTtFQUNJLGFBQUE7QUFDVjtBQUVNO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQVY7QUFDVTtFQUNJLHlCQUFBO0FBQ2Q7QUFHTTtFQUVJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGVjtBQU1NO0VBRUksY0FBQTtBQUxWO0FBUU07RUFDSSxnQkFBQTtBQU5WO0FBVU07RUFDSSxXQUFBO0FBUlYiLCJmaWxlIjoibmV3LXNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LXBvc3QtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGZvcm17XG5cbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBpbnB1dFt0eXBlPSdmaWxlJ117XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgfVxuICAgICAgaW5wdXQubWF0LWZsYXQtYnV0dG9ue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jdXN0b20tZmlsZXtcblxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyLWlucHV0LWZpbGV7XG5cbiAgICAgICAgICBtYXJnaW46ICAycmVtIDA7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItYnV0dG9ue1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG5cbiAgICAgIH1cblxuICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewSendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-send',
                templateUrl: './new-send.component.html',
                styleUrls: ['./new-send.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }, { type: _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _app_shared_services_url_archivo_service__WEBPACK_IMPORTED_MODULE_7__["UrlArchivoService"] }]; }, null); })();


/***/ }),

/***/ "z2IN":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/puente/puente.component.ts ***!
  \**************************************************************/
/*! exports provided: PuenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuenteComponent", function() { return PuenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PuenteComponent {
    constructor() { }
    ngOnInit() {
    }
}
PuenteComponent.ɵfac = function PuenteComponent_Factory(t) { return new (t || PuenteComponent)(); };
PuenteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PuenteComponent, selectors: [["app-puente"]], decls: 2, vars: 0, template: function PuenteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "puente works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWVudGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuenteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-puente',
                templateUrl: './puente.component.html',
                styleUrls: ['./puente.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "z3Ex":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/anality-clients/anality-clients.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AnalityClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalityClientsComponent", function() { return AnalityClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");





class AnalityClientsComponent {
    constructor(firestoreSvc) {
        this.firestoreSvc = firestoreSvc;
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.user$ = this.firestoreSvc.getUsers();
    }
    ngOnInit() {
        this.getAllClient();
    }
    getAllClient() {
        this.user$.subscribe(user => {
            for (let index = 0; index < user.length; index++) {
                this.doughnutChartLabels[index] = user[index].name;
                const path = `clientes/${user[index].id}/pedidos`;
                this.firestoreSvc.getPedidos(path).subscribe(pedido => {
                    if (pedido.length) {
                        this.doughnutChartData[index] = [pedido.length];
                    }
                });
            }
        });
        this.doughnutChartData = [];
        this.doughnutChartLabels = [];
    }
}
AnalityClientsComponent.ɵfac = function AnalityClientsComponent_Factory(t) { return new (t || AnalityClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"])); };
AnalityClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalityClientsComponent, selectors: [["app-anality-clients"]], decls: 6, vars: 3, consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"]], template: function AnalityClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedidos comprados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FuYWxpdHktY2xpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYW5hbGl0eS1jbGllbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalityClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anality-clients',
                templateUrl: './anality-clients.component.html',
                styleUrls: ['./anality-clients.component.scss']
            }]
    }], function () { return [{ type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_1__["AuthCrudService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYFw":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/entregar-pedidos/entregar-pedidos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EntregarPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregarPedidosComponent", function() { return EntregarPedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/auth/auth.service */ "jC6o");
/* harmony import */ var _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/authCrud.service */ "4cfA");
/* harmony import */ var _app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/sendProduct */ "4wBk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function EntregarPedidosComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", producto_r4.producto.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", producto_r4.producto.tipo_producto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" cantidad: ", producto_r4.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("valor: ", producto_r4.producto.valor, "");
} }
function EntregarPedidosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EntregarPedidosComponent_div_0_div_16_Template, 15, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntregarPedidosComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const pedido_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.eliminar(pedido_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "entregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pedido_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Estado: ", pedido_r1.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fecha: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, pedido_r1.fecha.seconds * 1000), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Telefono: ", pedido_r1.cliente.telefono, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Direccion: ", pedido_r1.cliente.direccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pedido_r1.productos);
} }
class EntregarPedidosComponent {
    constructor(authSvc, firestoreSvc, sendProductSvc) {
        this.authSvc = authSvc;
        this.firestoreSvc = firestoreSvc;
        this.sendProductSvc = sendProductSvc;
        this.uid = '';
        this.pedidos = [];
    }
    ngOnInit() {
        this.getPedidos();
    }
    getPedidos() {
        const path = 'domiciliarios';
        this.authSvc.afAuth1.user
            .subscribe(domini => {
            this.uid = domini.uid;
            this.firestoreSvc.getDoc(path, this.uid).subscribe(domiciliarios => {
                for (let index = 0; index < domiciliarios.pedidos.length; index++) {
                    this.pedidos[index] = domiciliarios.pedidos[index];
                }
            });
        });
    }
    eliminar(pedido) {
        this.authSvc.afAuth1.user
            .subscribe(domini => {
            this.uid = domini.uid;
            let position = 0;
            const item = this.pedidos.find((productoPedido, index) => {
                position = index;
                return (productoPedido.id == pedido.id);
            });
            if (item !== undefined) {
                this.pedidos.splice(position, 1);
                const path = 'domiciliarios';
                this.firestoreSvc.getDoc(path, this.uid).subscribe(domini => {
                    let position = 0;
                    const item1 = domini.pedidos.find((Pedido, index) => {
                        position = index;
                        return (Pedido.id == pedido.id);
                    });
                    if (item1 !== undefined) {
                        domini.pedidos.splice(position, 1);
                        this.firestoreSvc.createD(domini, path, domini.id).then(() => {
                            console.log('eliminado');
                            const path1 = `clientes/${item1.cliente.id}/pedidos`;
                            item1.estado = 'entregado';
                            this.firestoreSvc.createDoc(item1, path1, item1.id).then(() => {
                                console.log(item1);
                                console.log('añadido con exito');
                                this.sendProductSvc.sendEntregadoProduct(item1).subscribe(() => console.log('producto entregado'));
                            });
                        });
                    }
                });
            }
        });
    }
}
EntregarPedidosComponent.ɵfac = function EntregarPedidosComponent_Factory(t) { return new (t || EntregarPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_3__["SendProductService"])); };
EntregarPedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntregarPedidosComponent, selectors: [["app-entregar-pedidos"]], decls: 1, vars: 1, consts: [["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["pedido", ""], [1, "ancho"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "flexp"], [3, "src"]], template: function EntregarPedidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EntregarPedidosComponent_div_0_Template, 19, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyZWdhci1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntregarPedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entregar-pedidos',
                templateUrl: './entregar-pedidos.component.html',
                styleUrls: ['./entregar-pedidos.component.scss']
            }]
    }], function () { return [{ type: _app_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _app_shared_services_authCrud_service__WEBPACK_IMPORTED_MODULE_2__["AuthCrudService"] }, { type: _app_shared_services_sendProduct__WEBPACK_IMPORTED_MODULE_3__["SendProductService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map