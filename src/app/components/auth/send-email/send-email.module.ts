import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendEmailRoutingModule } from './send-email-routing.module';
import { SendEmailComponent } from './send-email.component';

import {MaterialModule} from '../../../material.module';

import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SendEmailComponent],
  imports: [
    CommonModule,
    SendEmailRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SendEmailModule { }
