import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
//firebase

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule,BUCKET } from '@angular/fire/storage'
import {AngularFireModule} from '@angular/fire'


import { from } from 'rxjs';
//enviroment
import {environment} from '../environments/environment';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';

//form

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//httpClient

import {HttpClientModule} from '@angular/common/http';

import {AuthCrudService} from '../app/shared/services/authCrud.service';
import { ModalCarritoComponent } from './shared/components/modal-carrito/modal-carrito.component';
import { NewCarritoComponent } from './components/posts/new-carrito/new-carrito.component';
import { NewCarritoModule } from './components/posts/new-carrito/new-carrito.module';
import { ItemCarritoComponent } from './components/item-carrito/item-carrito.component';
import { PuenteComponent } from './shared/components/puente/puente.component';
import { ToolbarLoginComponent } from './shared/components/toolbar-login/toolbar-login.component';
import { ContainerLoginsComponent } from './components/pages/container-logins/container-logins.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';
import { ModalEditComponent } from './shared/components/modal-edit/modal-edit.component';







//pipe


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,

    NewPostComponent,
    ContainerAppComponent,
    ModalComponent,
    ModalCarritoComponent,
    NewCarritoComponent,
    ItemCarritoComponent,
    PuenteComponent,
    ToolbarLoginComponent,
    ContainerLoginsComponent,
    EditPostComponent,
    ModalEditComponent

      
  
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NewPostModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NewCarritoModule,
    EditPostModule,
   
 
   
    
    
  ],
  entryComponents:[ModalComponent],
  providers: [ 
    
    AuthCrudService,
    {provide: BUCKET, useValue: 'gs://ngblogventa.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
