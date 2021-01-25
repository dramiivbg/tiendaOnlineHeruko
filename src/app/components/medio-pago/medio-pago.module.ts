import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedioPagoRoutingModule } from './medio-pago-routing.module';
import { MedioPagoComponent } from './medio-pago.component';
import {MaterialModule} from '../../material.module';

@NgModule({
  declarations: [MedioPagoComponent],
  imports: [
    CommonModule,
    MedioPagoRoutingModule,
    MaterialModule
  ]
})
export class MedioPagoModule { }
