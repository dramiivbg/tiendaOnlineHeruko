import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {ContainerAppComponent} from '../app/components/pages/container-app/container-app.component';
import { GuardGuard } from './guards/guard.guard';
import { ContainerLoginsComponent } from './components/pages/container-logins/container-logins.component';

import { NewCarritoComponent } from './components/posts/new-carrito/new-carrito.component';
import { ItemCarritoComponent } from './components/item-carrito/item-carrito.component';
const routes: Routes = [
  {path: '', component:ContainerAppComponent,

 

  children:[

    { path: 'home', loadChildren: () => 
    
       import('./components/pages/home/home.module').then(m => m.HomeModule) 
        
      },

      {path: 'carrito', component: NewCarritoComponent},

            


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






{ path: 'crear-vendedor', loadChildren: () => import('./components/auth/crear-vendedor/crear-vendedor.module').then(m => m.CrearVendedorModule) },
{ path: 'loginVendedor', loadChildren: () => import('./components/auth/login-vendedor/login-vendedor.module').then(m => m.LoginVendedorModule) },


{ path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'crearUser', loadChildren: () => import('./components/auth/crear-user/crear-user.module').then(m => m.CrearUserModule) },


{ path: 'change-password', loadChildren: () => import('./components/auth/change-password/change-password.module').then(m => m.ChangePasswordModule) },

{path: 'pago', loadChildren: () => import('./components/pagoTargeta/select-targeta/select-targeta.module').then(m => m.SelectTargetaModule)},

{ path: 'sendEmail', loadChildren: () => import('./components/auth/send-email/send-email.module').then(m => m.SendEmailModule) },

{ path: 'pedidos', loadChildren: () => import('./components/pages/pedidos/pedidos.module').then(m => m.PedidosModule) },
  

]

},

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
