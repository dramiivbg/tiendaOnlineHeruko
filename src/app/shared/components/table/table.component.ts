import { Component,AfterViewInit, OnInit,ViewChild } from '@angular/core';
import { from } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {PostI} from '../../models/post.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PostService} from '../../../components/posts/post.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['titlePost', 'tagsPost','actions'];
  dataSource = new MatTableDataSource<PostI>();
 
  @ViewChild(MatPaginator,{static: true})paginator: MatPaginator;
  @ViewChild(MatSort,{static:true})sort: MatSort;
  constructor(private postSvc: PostService){}

  ngOnInit(): void {

   this.postSvc.getAllPosts()
   .subscribe(posts => (this.dataSource.data = posts));
  }

  ngAfterViewInit(){

    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  


  oneEditPost(post: PostI){

    console.log('Edit post', post);

}

oneDeletePost(post: PostI){

  console.log('Delete post', post);

}

onNewPost(){

  console.log('New Post');
}


}




