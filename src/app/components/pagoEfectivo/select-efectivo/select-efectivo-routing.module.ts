import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEfectivoComponent } from './select-efectivo.component';

const routes: Routes = [{ path: '', component: SelectEfectivoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectEfectivoRoutingModule { }
