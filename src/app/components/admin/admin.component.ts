import { Component, OnInit } from '@angular/core';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Vendedor } from '@app/shared/models/vendedor';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
public opened = false;
  constructor(private authSvc: AuthService,private router: Router,private firestore: AuthCrudService) { 

    
  }

  ngOnInit(): void {

    this.userActive();
  
  }

  userActive(){

      
    this.authSvc.getCurrentUser().then(res1 => {
  
      const path = 'vendedores';
  
      if(res1 == null){
  
        this.router.navigate(['/home']);
        
        
      }else{
        this.comprobarUser(res1.uid);
      }

    });
   
  }


  comprobarUser(id: string){

 

    const path = 'vendedores';

      this.firestore.getDoc<Vendedor>(path,id).subscribe(res => {
  
  
  
        if(res != null){
  
        this.router.navigate(['/admin']);
  
          
        }else{
  
          this.router.navigate(['/home']);
  
        }
         
        
  
        
        
        
      });
  
  
      }
}
