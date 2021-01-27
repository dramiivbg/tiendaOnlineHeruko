import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectEfectivoRoutingModule } from './select-efectivo-routing.module';
import { SelectEfectivoComponent } from './select-efectivo.component';
import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [SelectEfectivoComponent],
  imports: [
    CommonModule,
    SelectEfectivoRoutingModule,
    MaterialModule
  ]
})
export class SelectEfectivoModule { }
