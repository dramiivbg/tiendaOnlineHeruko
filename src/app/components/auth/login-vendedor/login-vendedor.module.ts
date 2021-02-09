import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginVendedorRoutingModule } from './login-vendedor-routing.module';
import { LoginVendedorComponent } from './login-vendedor.component';
import {MaterialModule} from '../../../material.module';

import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginVendedorComponent],
  imports: [
    CommonModule,
    LoginVendedorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class LoginVendedorModule { }
