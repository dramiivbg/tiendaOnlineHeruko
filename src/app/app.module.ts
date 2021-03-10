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

import { NewCarritoComponent } from './components/posts/new-carrito/new-carrito.component';
import { NewCarritoModule } from './components/posts/new-carrito/new-carrito.module';
import { ItemCarritoComponent } from './components/item-carrito/item-carrito.component';
import { PuenteComponent } from './shared/components/puente/puente.component';
import { ToolbarLoginComponent } from './shared/components/toolbar-login/toolbar-login.component';
import { ContainerLoginsComponent } from './components/pages/container-logins/container-logins.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';
import { ModalEditComponent } from './shared/components/modal-edit/modal-edit.component';

import {PedidosComponent} from './components/pages/pedidos/pedidos.component';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { MessageService } from './shared/services/message.service';

//paypal

import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalComponent } from './components/paypal/paypal.component';
import { AnalityClientsComponent } from './components/pages/anality-clients/anality-clients.component';

//ng2-charts

import {ChartsModule} from 'ng2-charts';

import { DatePipe } from '@angular/common';


import { LoginComponent } from './components/chat/login/login.component';
import { RoomlistComponent } from './components/chat/roomlist/roomlist.component';
import { AddroomComponent } from './components/chat/addroom/addroom.component';
import { ChatroomComponent } from './components/chat/chatroom/chatroom.component';
import { AnalityPreciosComponent } from './components/pages/anality-precios/anality-precios.component';
import { CalificarPedidoComponent } from './components/pages/calificar-pedido/calificar-pedido.component';
import { ComentarioComponent } from './components/pages/comentario/comentario.component';
import { AnalityClientComponent } from './components/anality-client/anality-client.component';
import { AnalityPedidoComponent } from './components/anality-pedido/anality-pedido.component';
import { ProductosMasVendidosComponent } from './components/pages/productos-mas-vendidos/productos-mas-vendidos.component';
import { SendMailComponent } from './components/send-mail/send-mail.component';
import { EstadoClienteComponent } from './components/pages/estado-cliente/estado-cliente.component';
import { NewSendComponent } from './components/posts/new-send/new-send.component';
import { ModalMessageComponent } from './shared/components/modal-message/modal-message.component';
import { EncuestaComponent } from './components/pages/encuesta/encuesta.component';
import { UserEncuestaComponent } from './components/pages/user-encuesta/user-encuesta.component';
import { NewVehiculoComponent } from './components/pages/new-vehiculo/new-vehiculo.component';
import { ModalVehiculoComponent } from './shared/components/modal-vehiculo/modal-vehiculo.component';
import { TableVehiculoComponent } from './shared/components/table-vehiculo/table-vehiculo.component';
import { EditVehiculoComponent } from './components/pages/edit-vehiculo/edit-vehiculo.component';
import { ModalEidtVehiculoComponent } from './shared/components/modal-eidt-vehiculo/modal-eidt-vehiculo.component';
import { ListVehiculoComponent } from './components/pages/list-vehiculo/list-vehiculo.component';
import { ModalListVehiculoComponent } from './shared/components/modal-list-vehiculo/modal-list-vehiculo.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,

    NewPostComponent,
    ContainerAppComponent,
    ModalComponent,

    NewCarritoComponent,
    ItemCarritoComponent,
    PuenteComponent,
    ToolbarLoginComponent,
    ContainerLoginsComponent,
    EditPostComponent,
    ModalEditComponent,
    PedidosComponent,
    FilterProductPipe,
    AnalityClientsComponent,
  
 
  
    LoginComponent,
  
    RoomlistComponent,
  
    AddroomComponent,
  
    ChatroomComponent,
  
    AnalityPreciosComponent,
  
    CalificarPedidoComponent,
  
    ComentarioComponent,
  
    AnalityClientComponent,
  
    AnalityPedidoComponent,
  
    ProductosMasVendidosComponent,
  
    SendMailComponent,
  
    EstadoClienteComponent,
  
    NewSendComponent,
  
    ModalMessageComponent,
  
    EncuestaComponent,
  
    UserEncuestaComponent,
  
    NewVehiculoComponent,
  
    ModalVehiculoComponent,
  
    TableVehiculoComponent,
  
    EditVehiculoComponent,
  
    ModalEidtVehiculoComponent,
  
    ListVehiculoComponent,
  
    ModalListVehiculoComponent,
   

 
  
   
  
   

      
  
      
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
    NgxPayPalModule,
    ChartsModule,
    
   
 
   
    
    
  ],
  entryComponents:[ModalComponent],
  providers: [ 
    DatePipe,
    MessageService,
    AuthCrudService,
    {provide: BUCKET, useValue: 'gs://ngblogventa.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
