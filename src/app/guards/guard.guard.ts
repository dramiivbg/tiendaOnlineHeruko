import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import {AuthService} from '../components/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authSvc: AuthService,private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {
   
 

    return 
  }
  
}
