import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosAdminRoutingModule } from './pedidos-admin-routing.module';
import { PedidosAdminComponent } from './pedidos-admin.component';
import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [PedidosAdminComponent],
  imports: [
    CommonModule,
    PedidosAdminRoutingModule,
    MaterialModule
  ]
})
export class PedidosAdminModule { }
