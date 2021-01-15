import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
import {finalize, map} from 'rxjs/operators';
import {PostI} from './../../shared/models/post.interface';
import { FileI } from 'src/app/shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 private postCollection: AngularFirestoreCollection<PostI>;
  private filePath: any;
  private downloadURL: Observable<string>;
  
  constructor(private afs: AngularFirestore,
  private storage: AngularFireStorage  
    
    ) { 
    this.postCollection = afs.collection<PostI>('1');

  }

  public getAllPosts():Observable<PostI[]>{
    return this.postCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as PostI;
          const id = a.payload.doc.id;
           return { id, ...data };
        })
      )
    );

  }


  public getOnePost(id: PostI):Observable<PostI>{

    
    return this.afs.doc<PostI>(`1/${id}`).valueChanges();
     
  }

  public deletePostById(post:PostI){

    return this.postCollection.doc(post.id).delete();

  }

  public editPostById(post:PostI){
    return this.postCollection.doc(post.id).update(post);
  }

  public preAddAndUpdate(post: PostI, image:FileI){

    this.uploadImage(post,image);
  }

  private savePost(post: PostI){

    const postObj = {

      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost
    }

    this.postCollection.add(postObj);

  }

 private  uploadImage(post:PostI,image:FileI){
  this.filePath = `images/${image.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const task = this.storage.upload(this.filePath, image);
   task.snapshotChanges()
   .pipe(
     finalize(() =>{
       fileRef.getDownloadURL().subscribe( urlImage => {
       this.downloadURL = urlImage;
       this.savePost(post);

       //call addPost()


       });
     })
   ).subscribe();
  }

  

}