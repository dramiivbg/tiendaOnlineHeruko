import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardAGuard implements CanActivate {

  public active: boolean = false;

  uid = '';


  constructor(private authSvc: AuthService,private firestoreSvc: AuthCrudService){


    this.authSvc.afAuth.user.subscribe(res => {

      this.uid = res.uid;
    })




  }


comprobarCliente(){

  const path = 'clientes';

  this.firestoreSvc.getDoc<User>(path,this.uid).subscribe(user => {

    if(user){

      this.active = true;

    }else{
      this.active = false;
    }
  })
}

  
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
      return this.active;
  }
  
}
