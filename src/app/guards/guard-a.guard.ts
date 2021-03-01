import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class GuardAGuard implements CanActivate {

  public active: boolean = false;

  uid = '';


  constructor(private authSvc: AuthService,private firestoreSvc: AuthCrudService,
    private router: Router){



      this.comprobarCliente();


  }


comprobarCliente(){

  this.authSvc.afAuth.user.subscribe(res => {

   
  
  const path = 'clientes';
  
  this.firestoreSvc.getDoc<User>(path,res.uid).subscribe(user => {

    if(user){

      this.active = true;

    }else{
      this.active = false;

      Swal.fire('Acceso no permitido').then(() => {

        this.router.navigate(['/home']);
      });
    }
  });
});

  return this.active;
}

  
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    
    return this.active;
     
  }
  
}
