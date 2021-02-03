import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { catchError, first, map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AngularFireAuth} from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import { promise } from 'protractor';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 
  constructor(private auth: AngularFireAuth) { 
    
  }

 async register(email: string, password: string){

  try {

    const {user}  =  await  this.auth.createUserWithEmailAndPassword(email,password);


   return user;
    
  } catch (error) {
    
    console.log(error);
  }
  



}


login(email: string, password: string){


  return this.auth.signInWithEmailAndPassword(email,password);

}


async logout(){

  try{
 await this.auth.signOut();
  }catch(error){

    console.log(error);
  }

}


getCurrentUser(){

  return this.auth.authState.pipe(first()).toPromise();

}




}
