import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileI } from '../models/file.interface';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


 private vehiculoCollection: AngularFirestoreCollection<Vehiculo>;
 private filePath: any;
 private downloadURL: Observable<string>;
 private id: string; 
 private downloadURL1: Observable<string>;
  constructor(private afs: AngularFirestore,

    private storage: AngularFireStorage,) { 
      this.vehiculoCollection = afs.collection<Vehiculo>('vehiculos');
    }



  public getAllVehiculos():Observable<Vehiculo[]>{
    return this.vehiculoCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Vehiculo;
          const id = a.payload.doc.id;
           return { id, ...data };
        })
      )
    );

  }
  


  public preUpdate(Vehiculo: Vehiculo ,id: string, img: string,img2: FileI){


    if(img2 != null){

      this.uploadImage1(Vehiculo,id,img2)
    }else{
    this.editPostVendedor(Vehiculo,id,img);
  }

  }



    public preAddAndUpdate(vehiculo: Vehiculo, image:FileI){

      this.uploadImage(vehiculo,image);
      }



  public deleteVehiculoById(vehiculo:Vehiculo){

    return this.vehiculoCollection.doc(vehiculo.id).delete();

  }

    
public getOneVehiculo(id: string){

  return this.vehiculoCollection.doc(id).valueChanges();
}



  private editPostVendedor(vehiculo: Vehiculo,id: string,img: string,){


    const producto = {

      

      nombre: vehiculo.nombre,
      color: vehiculo.color,
      image:  img,
      marca: vehiculo.marca,
      id: id,
      placa: vehiculo.placa
      
    }


const result =     this.vehiculoCollection.doc<Vehiculo>(id).set(
      producto
    )



    return result;

  }





  private editPostVendedor1(vehiculo: Vehiculo, id: string){


    const producto = {

      
      nombre: vehiculo.nombre,
      color: vehiculo.color,
      image: this.downloadURL1,
      marca: vehiculo.marca,
      id: id,
      placa: vehiculo.placa

      
    }

  const result =   this.vehiculoCollection.doc<Vehiculo>(id).set(
      producto
    )



    return result;

  }



  private saveVehiculo(vehiculo: Vehiculo){

    this.id = this.afs.createId();
     const producObj = {
 
       nombre: vehiculo.nombre,
       color: vehiculo.color,
       image: this.downloadURL,
       marca: vehiculo.marca,
       id: this.id,
       placa: vehiculo.placa
 
     }
 
     this.vehiculoCollection.doc<Vehiculo>(this.id).set(
 
       producObj
     )
 
   }

 private  uploadImage(vehiculo:Vehiculo,image:FileI){
  this.filePath = `images/${image.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const task = this.storage.upload(this.filePath, image);
   task.snapshotChanges()
   .pipe(
     finalize(() =>{
       fileRef.getDownloadURL().subscribe( urlImage => {
       this.downloadURL = urlImage;
       this.saveVehiculo(vehiculo);

       //call addPost()


       });
     })
   ).subscribe();
  }



   
  private  uploadImage1(vehiculo:Vehiculo,id: string, image:FileI){
    this.filePath = `images/${image.name}`;
     const fileRef = this.storage.ref(this.filePath);
     const task = this.storage.upload(this.filePath, image);
     task.snapshotChanges()
     .pipe(
       finalize(() =>{
         fileRef.getDownloadURL().subscribe( urlImage => {
         this.downloadURL1 = urlImage;
         this.editPostVendedor1(vehiculo,id);
  
         //call addPost()
  
  
         });
       })
     ).subscribe();
    }
  
 
}


