import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {User} from '../../shared/models/user.interface';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { CdkNoDataRow } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { Pedido } from '../models/pedido';
import { Product } from '../models/product.interface';
import { Vendedor } from '../models/vendedor';
@Injectable({
  providedIn: 'root'
})
export class AuthCrudService {

  users: Observable<User[]>;
  public user: User

private usersCollection: AngularFirestoreCollection<User>;
private vendedorCollection: AngularFirestoreCollection<Vendedor>;
private docCollection: AngularFirestoreCollection<Product>;

private pedidosCollection: AngularFirestoreCollection<Pedido>;

  constructor(private afs: AngularFirestore ){


    this.usersCollection = afs.collection<User>('clientes');

    this.vendedorCollection = afs.collection<Vendedor>('vendedores');

  
  
    



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


  onSaveUser(name: string, apellido: string,gmail: string,cedula:number,direccion: string,pais: string,rol:string, userId: string,telefono:number) /*: Promise<void>*/{

    

     

  var user = {
    name: name,
    apellido: apellido,
    gmail : gmail,
    cedula :  cedula,
    direccion : direccion,
    pais :  pais,
    role :  rol,
    telefono: telefono,
    id: userId
  }
    
  




     
        
 
     this.usersCollection.doc<User>(userId).set(
      user
     );


     
    

    

  }


 
public getUsers(): Observable<User[]>{

  
  return   this.usersCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
           return { id, ...data };
        })
      )
    );

  
}


public getPedidos(path: string): Observable<Pedido[]>{

   this.pedidosCollection = this.afs.collection<Pedido>(path);
  
  return   this.pedidosCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Pedido;
          const id = a.payload.doc.id;
           return { id, ...data };
        })
      )
    );

  

    


}



 getDoc<tipo>(path: string, uid: string){

  return this.afs.doc<tipo>(`${path}/${uid}`).valueChanges();

}

createDoc(data: Pedido, path: string, id: string){

  const collection = this.afs.collection<Pedido>(path).doc(id).set( data);

  return collection;

}

doc<type>(data:any ,path: string){

  const id = this.afs.createId();

  
  const collection = this.afs.collection<type>(path).doc(id).set(data);

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

getCollectionQuery<tipo>(path: string, parametro: string, condicion: any, busqueda: string ){

  const collection = this.afs.collection<tipo>(path
    , ref => ref.where(parametro, condicion, busqueda));

 return collection.valueChanges();

}

getCollectionAll<tipo>(path: string, parametro: string, condicion: any, busqueda: string,
  startAt: any ){

    if(startAt == null){


     startAt = new Date();
    }
 
  const collection = this.afs.collectionGroup<tipo>(path
   , ref => ref.where(parametro, condicion, busqueda,)
   .orderBy('fecha','desc')
   .limit(2)
   .startAfter(startAt)
   
   );

 return collection.valueChanges();
  }



  

}
