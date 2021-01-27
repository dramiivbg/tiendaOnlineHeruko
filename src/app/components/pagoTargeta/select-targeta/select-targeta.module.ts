import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTargetaRoutingModule } from './select-targeta-routing.module';
import { SelectTargetaComponent } from './select-targeta.component';
import {MaterialModule} from '../../../material.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [SelectTargetaComponent],
  imports: [
    CommonModule,
    SelectTargetaRoutingModule,
    MaterialModule
  ]
})
export class SelectTargetaModule { }
