import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarEfectyComponent } from './comprar-efecty.component';

const routes: Routes = [{ path: '', component: ComprarEfectyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprarEfectyRoutingModule { }
