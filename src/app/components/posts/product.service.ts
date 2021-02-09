import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
import {finalize, map} from 'rxjs/operators';
import {Product} from './../../shared/models/product.interface';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


 private id: string; 
 private postCollection: AngularFirestoreCollection<Product>;
  private filePath: any;
  private downloadURL: Observable<string>;
  
  constructor(private afs: AngularFirestore,
  private storage: AngularFireStorage, 


    
    ) { 

      this.postCollection = afs.collection<Product>('productos');
    
  


    }



  public getAllPosts():Observable<Product[]>{
    return this.postCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
           return { id, ...data };
        })
      )
    );

  }
  

  public getAllPostsVendedor(path: string):Observable<Product[]>{
    return this.afs.collection(path)
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
           return { id, ...data };
        })
      )
    );

  }


  public getOnePost(id:string):Observable<Product>{

    
    return this.afs.doc<Product>(id).valueChanges();

      
     
  }

  public deletePostById(product:Product){

    return this.postCollection.doc(product.id).delete();

  }

  public editPostById(post:Product){
    return this.postCollection.doc(post.id).update(post);
  }

  public preAddAndUpdate(product: Product, image:FileI , path: string){

    this.uploadImage(product,image,path);
  }

  private saveProduct(product: Product,path: string){

   this.id = this.afs.createId();
    const producObj = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      tipo_producto: product.tipo_producto,
      image: this.downloadURL,
      valor: product.valor

    }

    this.afs.collection<Product>(path).doc(this.id).set( 

      producObj
    )

    this.postCollection.doc(this.id).set(

      producObj
    )

  }

 private  uploadImage(product:Product,image:FileI,path:string){
  this.filePath = `images/${image.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const task = this.storage.upload(this.filePath, image);
   task.snapshotChanges()
   .pipe(
     finalize(() =>{
       fileRef.getDownloadURL().subscribe( urlImage => {
       this.downloadURL = urlImage;
       this.saveProduct(product,path);

       //call addPost()


       });
     })
   ).subscribe();
  }

  

}