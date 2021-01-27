import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTargetaComponent } from './select-targeta.component';

const routes: Routes = [{ path: '', component: SelectTargetaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectTargetaRoutingModule { }
