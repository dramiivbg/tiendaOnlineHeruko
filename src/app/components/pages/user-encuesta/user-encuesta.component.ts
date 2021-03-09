import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { Encuesta } from '@app/shared/models/encuesta';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { UserService } from '@app/shared/services/user.service';
import * as e from 'cors';
import { Observable } from 'rxjs';

interface sexo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-encuesta',
  templateUrl: './user-encuesta.component.html',
  styleUrls: ['./user-encuesta.component.scss']
})
export class UserEncuestaComponent implements OnInit {

  sexos: sexo[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'Femenino'},
    {value: 'Otro', viewValue: 'otro'},
    
  ];


 public edad: number;
 public sexo: string;
 public ingreso: number ;
 public trabajo: string;
 public nivelEscolar: string ;
 public productosPreferidos: string ;
 public esperanza: string ;

 user: User;
 userE: User;

 private Encuesta: Observable<Encuesta[]>;

  constructor(private firestoreSvc: AuthCrudService, private userSvc: UserService) {

    
  
   }

  ngOnInit(): void{

    this.getMIencuesta();
  }

  getMIencuesta(){


    this.userE = this.userSvc.getUserEncuesta();

    
  

   

  

    

 
   
  
   
    this.edad =  this.userE.encuesta.edad;
    this.sexo = this.userE.encuesta.sexo;
    this.ingreso = this.userE.encuesta.ingreso;
    this.trabajo = this.userE.encuesta.trabajo;
    this.nivelEscolar = this.userE.encuesta.nivelEscolar;
    this.productosPreferidos = this.userE.encuesta.productosPreferidos;
    this.esperanza = this.userE.encuesta.esperanza;
  
     
   
    



  
  
  }

}
