import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user.interface';
import { Vendedor } from '@app/shared/models/vendedor';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { from, Observable, Subscription } from 'rxjs';
import {AuthService} from '../components/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  public active: boolean = false;

  uid = '';

  newSuscriber: Subscription;
  constructor(private authSvc: AuthService,private firestoreSvc: AuthCrudService){

    this.authSvc.afAuth.user.subscribe(res => {

      this.uid = res.uid;
    })



  }


comprobarVendedor(){

  const path = 'vendedores';

  this.firestoreSvc.getDoc<Vendedor>(path,this.uid).subscribe(user => {

    if(user){

      this.active = true;
    }else{
      this.active = false;
    }
  })
}

  
  


    canActivate(
    route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {

    this.comprobarVendedor();
 
  
    
  
 

  return this.active;
 
         }
}
