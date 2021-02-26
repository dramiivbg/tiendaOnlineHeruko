import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import {MatTableDataSource} from '@angular/material/table';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Vendedor } from '@app/shared/models/vendedor';
import { User } from '@app/shared/models/user.interface';

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
  uid = '';
  admin: boolean = false;
  client: Boolean = false;

  producto: any;
  constructor(private authSvc: AuthService, private firestore: AuthCrudService) {

    authSvc.afAuth.user.subscribe(res => {

      this.uid  = res.uid;

      this.verifyAdmin();
      this.verifyClient();

    })
   }

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


  verifyAdmin(){



      if(this.uid == 'Dik2UyFl6wQ0EamZoHrDIKGQj1e2'){

        this.admin = true;

      }else{

        this.admin = false;
      }
    
    
  }




  verifyClient(){

    const path = 'clientes';
    this.firestore.getDoc<User>(path,this.uid).subscribe(res => {

      if(res){

        this.client = true;

      }else{

        this.client = false;
      }
    })
    
  }

  

}
