import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardAGuard } from '@app/guards/guard-a.guard';
import { GuardGuard } from '@app/guards/guard.guard';

import { SelectTargetaComponent } from './select-targeta.component';

const routes: Routes = [{ path: '', component: SelectTargetaComponent,
canActivateChild:[GuardAGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectTargetaRoutingModule { }
