import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearVendedorComponent } from './crear-vendedor.component';

const routes: Routes = [{ path: '', component: CrearVendedorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearVendedorRoutingModule { }
