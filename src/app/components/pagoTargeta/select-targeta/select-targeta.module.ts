import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTargetaRoutingModule } from './select-targeta-routing.module';
import { SelectTargetaComponent } from './select-targeta.component';
import {MaterialModule} from '../../../material.module';
import {NgxStripeModule} from 'ngx-stripe';
import {ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [SelectTargetaComponent],
  imports: [
    CommonModule,
    SelectTargetaRoutingModule,
    MaterialModule,
    NgxStripeModule.forRoot('pk_test_51IGVrnLKdggzOCEi8qk71PNMEBpdgtJx8EQCuNkgQyVA5BsYOb1ic5xoZPddZrfzRFUazK7rSl8jyZDUbDjjnNLn00vKfEDZvg'),
    ReactiveFormsModule
  ]
})
export class SelectTargetaModule { }
