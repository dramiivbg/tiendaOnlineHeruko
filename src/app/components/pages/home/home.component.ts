import { Component, OnInit } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import {PostService} from '../../posts/post.service';
import {AuthCrudService} from '../../../shared/services/authCrud.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$ : Observable<PostI[]>;


  constructor(private postSvc: PostService, private authCrud: AuthCrudService) { 
    this.posts$ = this.postSvc.getAllPosts()
   
  }

  ngOnInit(): void {

   this.postSvc.getAllPosts().subscribe(res => console.log('POSTS',res));


  }




}
