import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarContraentregaComponent } from './comprar-contraentrega.component';

const routes: Routes = [{ path: '', component: ComprarContraentregaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprarContraentregaRoutingModule { }
