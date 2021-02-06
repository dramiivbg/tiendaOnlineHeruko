import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {User} from '../../shared/models/user.interface';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { CdkNoDataRow } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AuthCrudService {

  users: Observable<User[]>;
  public user: User

private usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore){


    this.usersCollection = afs.collection('users');
    this.getUsers();



  }


  onDeleteUser(userId: string): Promise<void>{

    return new Promise(async (resolve, reject) =>{

      try {

        const result = this.usersCollection.doc(userId).delete();
        resolve(result);
      } catch (error) {
        
        reject(error.message);
      }
    })

  }


  onSaveUser(gmail: string,cedula:number,direccion: string,pais: string,rol:string, userId: string) /*: Promise<void>*/{

    

     

  var user = {

    gmail : gmail,
    cedula :  cedula,
    direccion : direccion,
    pais :  pais,
    role :  rol,
  }
    
  




     
        
 
     this.usersCollection.doc(userId).set(
      user
     );


     
    

    

  }

 
private getUsers(){

  this.users = this.usersCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as User))
  );



}
        
 
  

}
