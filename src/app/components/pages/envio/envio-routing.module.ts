import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvioComponent } from './envio.component';

const routes: Routes = [{ path: '', component: EnvioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvioRoutingModule { }
