import { NgModule } from '@angular/core';
import { Routes, RouterModule, GuardsCheckEnd } from '@angular/router';
import { from } from 'rxjs';

import {ContainerAppComponent} from '../app/components/pages/container-app/container-app.component';
import { GuardGuard } from './guards/guard.guard';
import { ContainerLoginsComponent } from './components/pages/container-logins/container-logins.component';

import { NewCarritoComponent } from './components/posts/new-carrito/new-carrito.component';
import { ItemCarritoComponent } from './components/item-carrito/item-carrito.component';
import { PedidosComponent } from './components/pages/pedidos/pedidos.component';
import { GuardAGuard } from './guards/guard-a.guard';
import { PaypalComponent } from './components/paypal/paypal.component';
import { AnalityClientsComponent } from './components/pages/anality-clients/anality-clients.component';
import { LoginComponent } from './components/chat/login/login.component';
import { RoomlistComponent } from './components/chat/roomlist/roomlist.component';
import { AddroomComponent } from './components/chat/addroom/addroom.component';
import { ChatroomComponent } from './components/chat/chatroom/chatroom.component';



const routes: Routes = [
  {path: '', component:ContainerAppComponent,

 

  children:[

    { path: 'home', loadChildren: () => 
    
       import('./components/pages/home/home.module').then(m => m.HomeModule) 
        
      },

      {path: 'carrito', component: NewCarritoComponent,
    
      canActivateChild:[GuardAGuard]
    }
      ,
      

            


{ path: 'about', loadChildren: () => 
 
 import('./components/pages/about/about.module').then(m => m.AboutModule) },
    

   {

    path:'', redirectTo:'home',
    pathMatch: 'full' 
  },

 
  ]

  
},

{ path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)},




{path: '', component:ContainerLoginsComponent,

 

children:[










{ path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'crearUser', loadChildren: () => import('./components/auth/crear-user/crear-user.module').then(m => m.CrearUserModule) },


{ path: 'change-password', loadChildren: () => import('./components/auth/change-password/change-password.module').then(m => m.ChangePasswordModule) },

{path: 'pago', loadChildren: () => import('./components/pagoTargeta/select-targeta/select-targeta.module').then(m => m.SelectTargetaModule)},

{ path: 'sendEmail', loadChildren: () => import('./components/auth/send-email/send-email.module').then(m => m.SendEmailModule) },

{path:'mispedidos', component: PedidosComponent,
canActivateChild:[GuardAGuard]},

{path: 'anality-client', component: AnalityClientsComponent},

{path: 'loginChat', component: LoginComponent},
{path: 'roomlist', component: RoomlistComponent},
{path: 'addroom', component: AddroomComponent},
{path: 'chatroom/:roomname',component: ChatroomComponent},




{ path: 'pedidos', loadChildren: () => import('./components/pages/pedidos-admin/pedidos-admin.module').then(m => m.PedidosAdminModule) },
 

]

  

 

},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
