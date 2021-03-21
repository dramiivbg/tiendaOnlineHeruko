import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { Encuesta } from '@app/shared/models/encuesta';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import Swal from 'sweetalert2';

interface sexo {
  value: string;
  viewValue: string;
}

interface Respuesta {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
 
  sexos: sexo[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'Femenino'},
    {value: 'Otro', viewValue: 'otro'},
    
  ];

  respuestas:Respuesta [] = [
    {value: 'si', viewValue: 'Si'},
    {value: 'no', viewValue: 'No'},
    {value: 'tal vez', viewValue: 'Tal vez'},
    
  ];

 public edad: number = 0;
 public sexo: string = '';
 public ingreso: number =  0;
 public trabajo: string = '';
 public nivelEscolar: string = '';
 public productosPreferidos: string = '';
 public esperanza: string = '';

 encuesta: Encuesta = {

  edad: null,
  esperanza: null,
  ingreso: null,
  nivelEscolar: null,
  productosPreferidos: null,
  sexo: null,
  trabajo: null
 };

 uid = '';

  constructor(private firestoreSvc: AuthCrudService,private authSvc: AuthService,
    private router: Router) {
  
  
    authSvc.afAuth.user.subscribe(res => {

      this.uid = res.uid;
    });

   }

  ngOnInit(): void {
  }

  guardarEncuesta(){

    if(this.edad <= 130){
    this.encuesta.edad = this.edad;
    this.encuesta.sexo = this.sexo;
    this.encuesta.ingreso = this.ingreso;
    this.encuesta.trabajo = this.trabajo;
    this.encuesta.nivelEscolar = this.nivelEscolar;
    this.encuesta.productosPreferidos = this.productosPreferidos;

    this.encuesta.esperanza = this.esperanza;

    const path = `clientes`;

    this.firestoreSvc.getDoc<User>(path,this.uid).subscribe(user => {

      user.encuesta = this.encuesta;
    
      const path = 'clientes'
      this.firestoreSvc.create<User>(user,path,user.id).then(() => 
      
      Swal.fire('the survey was done successfully').then(() => {

        this.router.navigate(['/home']);
      })



      
      )
    });


  }else{

    Swal.fire('edad fuera de rango');
  }
  }
}
