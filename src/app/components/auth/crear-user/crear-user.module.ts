import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearUserRoutingModule } from './crear-user-routing.module';
import { CrearUserComponent } from './crear-user.component';
import {MaterialModule} from '../../../material.module';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearUserComponent],
  imports: [
    CommonModule,
    CrearUserRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CrearUserModule { }
