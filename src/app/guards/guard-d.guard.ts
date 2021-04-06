import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { Domiciliario } from '@app/shared/models/domiciliario';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GuardDGuard implements CanActivate {


  public active: boolean = false;

  uid = '';


  constructor(private authSvc: AuthService,private firestoreSvc: AuthCrudService,
    private router: Router){



      this.comprobarDomici();


  }


comprobarDomici(){

  this.authSvc.afAuth1.user.subscribe(res => {

   
  
  const path = 'domiciliarios';
  
  this.firestoreSvc.getDoc<Domiciliario>(path,res.uid).subscribe(user => {

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
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   
      return this.active;
  }
  
}
