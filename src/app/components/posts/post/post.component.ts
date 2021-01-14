import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { from, Observable } from 'rxjs';
import {PostI} from '../../../shared/models/post.interface';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

   public post$: Observable<PostI>;

  

   constructor(private route: ActivatedRoute,public postSvc: PostService) { }
 
   ngOnInit(): void {
 
     const idPost  = this.route.snapshot.params.id;

     this.post$ = this.postSvc.getOnePost(idPost);
 
     console.log(this.post$);
     
 
   }
 
}
