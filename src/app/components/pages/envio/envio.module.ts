import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioRoutingModule } from './envio-routing.module';
import { EnvioComponent } from './envio.component';
import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [EnvioComponent],
  imports: [
    CommonModule,
    EnvioRoutingModule,
    MaterialModule
  ]
})
export class EnvioModule { }
