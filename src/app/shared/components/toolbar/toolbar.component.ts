import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import { PostI } from '@app/shared/models/post.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public opened = false;
  public filterProduct = '';
  public  appName = 'ngOnline';
  public isLogged: boolean = false; 
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

    this.onCheckUser();
  
  }
  

  onlogout(): void{

    this.authSvc.logout();





  }


  onCheckUser():void{

    if (this.authSvc.getCurrentUser() == null){

      this.isLogged = false;
    }else{

      this.isLogged = true;
    }
  }



  

}
