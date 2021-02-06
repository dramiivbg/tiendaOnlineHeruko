import { Injectable } from '@angular/core';
import { catchError, first, map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AngularFireAuth} from '@angular/fire/auth';

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

async resetPassword(email: string):Promise<void>{

  try {
    
    return this.auth.sendPasswordResetEmail(email);
  } catch (error) {

    console.log(error.message);
    
  }
} 




}
