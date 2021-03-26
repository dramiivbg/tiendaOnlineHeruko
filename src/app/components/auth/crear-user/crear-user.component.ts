import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { User } from '@app/shared/models/user.interface';



@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.scss'],
  providers: [AuthCrudService]
})


export class CrearUserComponent implements OnInit {
  public  appName = 'ngOnline';
  public name: string = '';
  public apellido: string = '';
 public correo: string = '';
 public  password: string = '';
 public direccion: string = '';
 public  cedula:string = '';
 public  pais: string = '';
 public  rol: string = 'cliente';
 public telefono: number = 0;


 
  constructor(private authService: AuthService, private router: Router,
    private authCrud: AuthCrudService){


  }

  ngOnInit(){

    
  }

 async loginUp(){


 
try {


 const user =    await  this.authService.register(this.correo,this.password)

 if(user){
 

  Swal.fire('user created successfully').then(() => {

 this.router.navigate(['/sendEmail']);

  });

   this.onsave(user.uid);
   

 }
  
} catch (error) {
  
  Swal.fire(error.message);
}

    

    

  }

  onsave(id: string){


 try {
  


 
 this.authCrud.onSaveUser(this.name,this.apellido,this.correo, Number(this.cedula),this.direccion,this.pais,this.rol,id,this.telefono);


} catch (error) {
  
  Swal.fire(error.message);
}
  


  }

}
