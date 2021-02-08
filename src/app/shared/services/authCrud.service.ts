import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {User} from '../../shared/models/user.interface';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { CdkNoDataRow } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { Pedido } from '../models/pedido';
import { Product } from '../models/product.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthCrudService {

  users: Observable<User[]>;
  public user: User

private usersCollection: AngularFirestoreCollection<User>;
private docCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore ){


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


  onSaveUser(gmail: string,cedula:number,direccion: string,pais: string,rol:string, userId: string) /*: Promise<void>*/{

    

     

  var user = {

    gmail : gmail,
    cedula :  cedula,
    direccion : direccion,
    pais :  pais,
    role :  rol,
  }
    
  




     
        
 
     this.usersCollection.doc<User>(userId).set(
      user
     );


     
    

    

  }




 
private getUsers(){

  this.users = this.usersCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as User))
  );



}

 getDoc<tipo>(path: string, uid: string){

  return this.afs.doc<tipo>(`${path}/${uid}`).valueChanges();

}

createDoc(data: Pedido, path: string, id: string){

  const collection = this.afs.collection<Pedido>(path).doc(id).set( data);

  return collection;

}


deleteDoc(path: string, id:string){

  const collection = this.afs.collection(path).doc(id).delete();


  return collection;

}
        
updateDoc(data:any, path: string, id: string){

  const collection = this.afs.collection(path).doc(id).update(data);


  return collection;

}



  

}
