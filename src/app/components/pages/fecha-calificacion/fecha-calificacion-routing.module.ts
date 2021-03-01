import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechaCalificacionComponent } from './fecha-calificacion.component';

const routes: Routes = [{ path: '', component: FechaCalificacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FechaCalificacionRoutingModule { }
