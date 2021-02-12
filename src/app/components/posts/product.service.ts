import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
import {finalize, map} from 'rxjs/operators';
import {Product} from './../../shared/models/product.interface';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth/auth.service';
import { promise } from 'protractor';

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

  public getOnePostVendedor(idVendedor:string, product: Product):Observable<Product>{


    const path = `vendedores/${idVendedor}/producto`;

    return this.afs.collection<Product>(path).doc(product.id).valueChanges();
  }

 

  public deletePostVendedor(product: Product, idVendedor: string){


    const path = `vendedores/${idVendedor}/producto`

    const result = this.afs.collection<Product>(path).doc(product.id).delete();
    
    
    this.deletePostById(product);

    return result;

  }

  private deletePostById(product:Product){

    return this.postCollection.doc(product.id).delete();

  }

  private editPostVendedor(product: Product, path: string,id: string,img: string){


    const producto = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      image: img,
      tipo_producto: product.tipo_producto,
      valor: product.valor
    }

    const result = this.afs.collection<Product>(path).doc(id).set(
    producto
    );

    this.postCollection.doc<Product>(id).set(
      producto
    )



    return result;

  }



  private editPostVendedor1(product: Product, path: string,id: string){


    const producto = {

      ciudad_de_exportacion: product.ciudad_de_exportacion,
      image: this.downloadURL1,
      tipo_producto: product.tipo_producto,
      valor: product.valor
    }

    const result = this.afs.collection<Product>(path).doc(id).set(
    producto
    );

    this.postCollection.doc<Product>(id).set(
      producto
    )



    return result;

  }




  public preAddAndUpdate(product: Product, image:FileI , path: string){

  this.uploadImage(product,image,path);
  }


  public preUpdate(product: Product , path: string,id: string,img: string,img2: FileI){


    if(img2 != null){

      this.uploadImage1(product,path,id,img2)
    }else{
    this.editPostVendedor(product,path,id,img);
  }

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



 private  uploadImage1(product:Product,path:string,id:string, image:FileI){
  this.filePath = `images/${image.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const task = this.storage.upload(this.filePath, image);
   task.snapshotChanges()
   .pipe(
     finalize(() =>{
       fileRef.getDownloadURL().subscribe( urlImage => {
       this.downloadURL1 = urlImage;
       this.editPostVendedor1(product,path,id);

       //call addPost()


       });
     })
   ).subscribe();
  }

 
 

}