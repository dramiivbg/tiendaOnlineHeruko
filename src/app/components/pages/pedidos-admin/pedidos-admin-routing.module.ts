import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardAGuard } from '@app/guards/guard-a.guard';
import { GuardGuard } from '@app/guards/guard.guard';

import { PedidosAdminComponent } from './pedidos-admin.component';

const routes: Routes = [{ path: '', component: PedidosAdminComponent,
canActivateChild:[GuardGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosAdminRoutingModule { }
