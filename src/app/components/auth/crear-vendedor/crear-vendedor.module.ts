import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearVendedorRoutingModule } from './crear-vendedor-routing.module';
import { CrearVendedorComponent } from './crear-vendedor.component';
import {MaterialModule} from '../../../material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CrearVendedorComponent],
  imports: [
    CommonModule,
    CrearVendedorRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CrearVendedorModule { }
