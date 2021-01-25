import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PostComponent } from './components/posts/post/post.component';
import {ContainerAppComponent} from '../app/components/pages/container-app/container-app.component';
const routes: Routes = [
  {path: '', component:ContainerAppComponent,

  children:[

    { path: 'home', loadChildren: () => 
    
       import('./components/pages/home/home.module').then(m => m.HomeModule) },

      
    {path: 'post/:id', component:PostComponent},
    
   { path: 'about', loadChildren: () => 
     
     import('./components/pages/about/about.module').then(m => m.AboutModule) },
    

   {

    path:'', redirectTo:'home',
    pathMatch: 'full' 
  }
  ]
},



 { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  
 { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'crearUser', loadChildren: () => import('./components/auth/crear-user/crear-user.module').then(m => m.CrearUserModule) },
 
  { path: 'medio_pago', loadChildren: () => import('./components/medio-pago/medio-pago.module').then(m => m.MedioPagoModule) },
  

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
