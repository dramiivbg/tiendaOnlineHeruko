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

  constructor(private afs: AngularFirestore ){


    this.usersCollection = afs.collection<User>('clientes');

    this.vendedorCollection = afs.collection<Vendedor>('vendedores');
  
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


  onSaveUser(gmail: string,cedula:number,direccion: string,pais: string,rol:string, userId: string,telefono:number) /*: Promise<void>*/{

    

     

  var user = {

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


  onSaveVendedor(gmail: string,cedula:number,direccion: string,pais: string,rol:string, userId: string,telefono: number) /*: Promise<void>*/{

    

     

    var vendedor = {
  
      gmail : gmail,
      cedula :  cedula,
      direccion : direccion,
      pais :  pais,
      role :  rol,
      telefono: telefono
      
      
    }
      
    
  
  
  
  
       
          
   
       this.vendedorCollection.doc<Vendedor>(userId).set(
        vendedor
        
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
