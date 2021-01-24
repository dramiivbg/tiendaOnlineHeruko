import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearUserComponent } from './crear-user.component';

const routes: Routes = [{ path: '', component: CrearUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearUserRoutingModule { }
