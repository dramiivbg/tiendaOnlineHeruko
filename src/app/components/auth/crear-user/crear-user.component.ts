import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { User } from '@app/shared/models/user.interface';

interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.scss'],
  providers: [AuthCrudService]
})


export class CrearUserComponent implements OnInit {

 public gmail: string = '';
 public  password: string = '';
 public direccion: string = '';
 public  cedula:number = 0;
 public  pais: string = '';
 public  rol: string = '';


  roles: Rol[] = [

    {value:'cliente', viewValue:'Cliente'}

  ]
  constructor(private authService: AuthService, private router: Router,
    private authCrud: AuthCrudService){


  }

  ngOnInit(){

    
  }

 async loginUp(){

try {


 const user =    await  this.authService.register(this.gmail,this.password)

 if(user){
 

   this.router.navigate(['/login']);

   this.onsave(user.uid);
   

 }
  
} catch (error) {
  
  console.log(error);
}

    

    

  }

  onsave(id: string){


 try {
  

  var  user: User;
  user.cedula = this.cedula;
  user.gmail = this.gmail;
  user.pais = this.pais;
  user.role = this.rol;
  user.direccion = this.direccion;

  console.log(user.cedula);
 this.authCrud.onSaveUser(user,id);

} catch (error) {
  
  console.log(error);
}
  


  }

}
