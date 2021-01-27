import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarContraentregaRoutingModule } from './comprar-contraentrega-routing.module';
import { ComprarContraentregaComponent } from './comprar-contraentrega.component';

import {MaterialModule} from '../../../material.module';
import { from } from 'rxjs';
@NgModule({
  declarations: [ComprarContraentregaComponent],
  imports: [
    CommonModule,
    ComprarContraentregaRoutingModule,
    MaterialModule
  ]
})
export class ComprarContraentregaModule { }
