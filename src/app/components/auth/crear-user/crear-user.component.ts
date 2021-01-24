import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { Roles } from '@app/shared/models/user.interface';

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
celular: number = 0;
pais:string = '';
rol: string = '';


  roles: Rol[] = [
    {value: 'user', viewValue: 'User'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'vendedor', viewValue: 'Vendedor'}
  ];


  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  crearUser(){

    this.authSvc.registerUser(this.cedula,this.username,this.password,this.gmail,
    this.direccion,this.celular,this.pais,this.rol).subscribe (res => {

    try{  
      if(res){

        this.router.navigate(['/login']);

      }
     
    }
  catch(e){
    console.log(e);

  }
}  
    )
  


  }

}
