import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import {MatTableDataSource} from '@angular/material/table';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers:[AuthService]
})
export class ToolbarComponent implements OnInit {
  public opened = false;
  public filterProduct = '';
  public  appName = 'ngOnline';
  public isLogged = false; 
  constructor(private authSvc: AuthService) { }

 async ngOnInit() {

try {
  
    const user = await  this.authSvc.getCurrentUser();

    if(user){
 
 
      this.isLogged = true;
    
     }else{
    
      this.isLogged = false;
      console.log('deslogiado')
     }

  } catch (error) {
    
  }


  
  
  }
  

 async onlogout(){

   this.authSvc.logout();





  }





  

}
