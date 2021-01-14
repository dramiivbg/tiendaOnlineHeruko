import { Injectable } from '@angular/core';
import { from, Observable, observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {PostI} from './../../shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) { }

  public getAllPosts():Observable<PostI[]>{
    return this.afs
    .collection('1')
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


}