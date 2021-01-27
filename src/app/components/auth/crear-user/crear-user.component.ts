import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})


export class CrearUserComponent implements OnInit {
cedula:number = 0;
username:string = '';
gmail: string = '';
password: string = '';
direccion: string = '';
pais:string = '';
rol:string = '';


  roles: Rol[] = [
    {value: 'cliente', viewValue: 'Cliente'},
  ];


  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {

   
  }

  crearUser(){

   

    this.authSvc.registerUser(this.cedula,this.username,this.password,this.gmail,
    this.direccion,this.pais,this.rol).subscribe (res => {

      
    try{  
      if(res){

        Swal.fire('User created.','sucessfull');
        
        this.router.navigate(['/login']);

      }
     
    }
  catch(e){
    Swal.fire(e);

  }
}  
    )
  


  }

}
