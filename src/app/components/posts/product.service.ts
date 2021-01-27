import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
import {finalize, map} from 'rxjs/operators';
import {Product} from './../../shared/models/product.interface';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private postCollection: AngularFirestoreCollection<Product>;
  private filePath: any;
  private downloadURL: Observable<string>;
  
  constructor(private afs: AngularFirestore,
  private storage: AngularFireStorage, 

    
    ) { 
    this.postCollection = afs.collection<Product>('1');

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


  public getOnePost(id: Product):Observable<Product>{

    
    return this.afs.doc<Product>(`1/${id}`).valueChanges();

      
     
  }

  public deletePostById(product:Product){

    return this.postCollection.doc(product.id).delete();

  }

  public editPostById(post:Product){
    return this.postCollection.doc(post.id).update(post);
  }

  public preAddAndUpdate(product: Product, image:FileI){

    this.uploadImage(product,image);
  }

  private saveProduct(product: Product){

    const producObj = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      tipo_producto: product.tipo_producto,
      image: this.downloadURL,
      valor: product.valor

    }

    this.postCollection.add(producObj);

  }

 private  uploadImage(product:Product,image:FileI){
  this.filePath = `images/${image.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const task = this.storage.upload(this.filePath, image);
   task.snapshotChanges()
   .pipe(
     finalize(() =>{
       fileRef.getDownloadURL().subscribe( urlImage => {
       this.downloadURL = urlImage;
       this.saveProduct(product);

       //call addPost()


       });
     })
   ).subscribe();
  }

  

}