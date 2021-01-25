import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedioPagoComponent } from './medio-pago.component';

const routes: Routes = [{ path: '', component: MedioPagoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedioPagoRoutingModule { }
