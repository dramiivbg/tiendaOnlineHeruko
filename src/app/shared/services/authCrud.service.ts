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

private usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore){


    this.usersCollection = afs.collection<User>('users');
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


  onSaveUser(user:User, userId: string): Promise<void>{

    
    return new Promise( async (resolve, reject) => {

      try {
        
   const id = userId || this.afs.createId();

   const data = {id, ...user};
   const result = this.usersCollection.doc(id).set(data);
   resolve(result);

      } catch (error) {

        reject(error.message);
        
        
      }
    })

  }

 
private getUsers(){

  this.users = this.usersCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as User))
  );



}
        
 
  

}
