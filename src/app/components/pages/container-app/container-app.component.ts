import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';

@Component({
  selector: 'app-container-app',
  templateUrl: './container-app.component.html',
  styleUrls: ['./container-app.component.css']
})
export class ContainerAppComponent implements OnInit {



  constructor(private authSvc: AuthService, private firestoreSvc: AuthCrudService) { }

  ngOnInit(): void {

    let id: string;

    this.authSvc.afAuth.user.subscribe(user => {

     

      if(user){

        id = user.uid;
        
      const path = 'clientes';
    this.firestoreSvc.getDoc<User>(path,user.uid).subscribe(cliente => {

      cliente.active = true;


      this.firestoreSvc.create<User>(cliente,path,cliente.id).then(() => 
      console.log('user active') );

    });
      }else{


      const path = 'clientes';
      this.firestoreSvc.getDoc<User>(path,id).subscribe(cliente => {
  
        cliente.active = false;
  
  
        this.firestoreSvc.create<User>(cliente,path,cliente.id).then(() => 
        console.log('user inactivo'));
  
        

      });

      }
    
    });

  }

 

}
