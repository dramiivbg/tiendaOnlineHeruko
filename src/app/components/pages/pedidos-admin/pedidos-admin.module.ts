import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosAdminRoutingModule } from './pedidos-admin-routing.module';
import { PedidosAdminComponent } from './pedidos-admin.component';
import {MaterialModule} from '../../../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PedidosAdminComponent],
  imports: [
    CommonModule,
    PedidosAdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PedidosAdminModule { }
