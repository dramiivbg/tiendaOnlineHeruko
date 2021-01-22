import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { PostService } from '@app/components/posts/post.service';
import {MatTableDataSource} from '@angular/material/table';
import { PostI } from '@app/shared/models/post.interface';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  dataSource = new MatTableDataSource<PostI>();
  public filterProduct = '';
  public  appName = 'ngOnline';
  constructor(private authSvc: AuthService,private postSvc: PostService) { }

  ngOnInit(): void {

  
  }
  

  onlogout(): void{

    this.authSvc.logout();





  }



  

}
