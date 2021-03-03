import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
import {finalize, map} from 'rxjs/operators';
import {Product} from './../../shared/models/product.interface';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth/auth.service';
import { promise } from 'protractor';
import { Pedido } from '@app/shared/models/pedido';
import { Vendedor } from '@app/shared/models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


 private id: string; 
 private postCollection: AngularFirestoreCollection<Product>;
  private filePath: any;
  private downloadURL: Observable<string>;
  private downloadURL1: Observable<string>;
  
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
  
public getOnePost(id: string){

  return this.postCollection.doc(id).valueChanges();
}


  public getAllPedidos(path: string):Observable<Pedido[]>{
    return this.afs.collection(path)
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


 


  public deletePostById(product:Product){

    return this.postCollection.doc(product.id).delete();

  }

  private editPostVendedor(product: Product,img: string,){


    const producto = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      image: img,
      tipo_producto: product.tipo_producto,
      valor: product.valor,
      
    }


const result =     this.postCollection.doc<Product>(product.id).set(
      producto
    )



    return result;

  }



  private editPostVendedor1(product: Product){


    const producto = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      image: this.downloadURL1,
      tipo_producto: product.tipo_producto,
      valor: product.valor,
      
    }

  const result =   this.postCollection.doc<Product>(product.id).set(
      producto
    )



    return result;

  }




  public preAddAndUpdate(product: Product, image:FileI){

  this.uploadImage(product,image);
  }


  public preUpdate(product: Product , img: string,img2: FileI){


    if(img2 != null){

      this.uploadImage1(product,img2)
    }else{
    this.editPostVendedor(product,img);
  }

  }

  private saveProduct(product: Product){

   this.id = this.afs.createId();
    const producObj = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      tipo_producto: product.tipo_producto,
      image: this.downloadURL,
      valor: product.valor,
      id: this.id,
      calificacion: 0

    }

    this.postCollection.doc<Product>(this.id).set(

      producObj
    )

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



 private  uploadImage1(product:Product, image:FileI){
  this.filePath = `images/${image.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const task = this.storage.upload(this.filePath, image);
   task.snapshotChanges()
   .pipe(
     finalize(() =>{
       fileRef.getDownloadURL().subscribe( urlImage => {
       this.downloadURL1 = urlImage;
       this.editPostVendedor1(product);

       //call addPost()


       });
     })
   ).subscribe();
  }

 
 

}