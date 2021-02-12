import { Injectable } from '@angular/core';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AngularFireAuth} from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { Observable, of } from 'rxjs';
import { User } from '@app/shared/models/user.interface';
import { AngularFirestore } from '@angular/fire/firestore';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;
 
  constructor(public afAuth: AngularFireAuth,private afs: AngularFirestore) { 
    


    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`clientes/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async sendVerifyEmail(): Promise<void>{

    return await (await this.afAuth.currentUser).sendEmailVerification();


  }

 async register(email: string, password: string){

  try {

    const {user}  =  await  this.afAuth.createUserWithEmailAndPassword(email,password);



   return user;
    
  }
  
  catch (error) {
    
    console.log(error);
  }
  



}


login(email: string, password: string){

  try {

  const result =  this.afAuth.signInWithEmailAndPassword(email,password);


  this.sendVerifyEmail();

  return result;


} catch (error) {
  


  Swal.fire(error.message);
}

}



async logout(){

  try{
 await this.afAuth.signOut();
  }catch(error){

    console.log(error);
  }

}


getCurrentUser(){

  return this.afAuth.authState.pipe(first()).toPromise();

}

async resetPassword(email: string):Promise<void>{

  try {
    
    return this.afAuth.sendPasswordResetEmail(email);
  } catch (error) {

    console.log(error.message);
    
  }
} 






}
