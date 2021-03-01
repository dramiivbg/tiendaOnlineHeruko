import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FechaCalificacionRoutingModule } from './fecha-calificacion-routing.module';
import { FechaCalificacionComponent } from './fecha-calificacion.component';

import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [FechaCalificacionComponent],
  imports: [
    CommonModule,
    FechaCalificacionRoutingModule,
    MaterialModule
  ]
})
export class FechaCalificacionModule { }
