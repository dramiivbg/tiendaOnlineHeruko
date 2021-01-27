import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarEfectyRoutingModule } from './comprar-efecty-routing.module';
import { ComprarEfectyComponent } from './comprar-efecty.component';
import {MaterialModule} from '../../../material.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [ComprarEfectyComponent],
  imports: [
    CommonModule,
    ComprarEfectyRoutingModule,
    MaterialModule
  ]
})
export class ComprarEfectyModule { }
