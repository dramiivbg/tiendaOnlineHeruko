import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '@auth/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Validator } from 'class-validator';
import Swal from 'sweetalert2';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;


uid = '';

 
 

  constructor(private authSvc: AuthService,private router: Router,
    private firestore: AuthCrudService) {

          
   


    }
  ngOnInit(): void {

    
  

  
  }


  onLogin(emial,password){

    console.log('correo->', emial.value);
    console.log('password->', password.value);

    if(emial.value == "" && password.value == ""){

      Swal.fire('Porfavor introduzca su correo y contraseña');
      
      return;

    } 
    
    if(password.value == ""){

      Swal.fire('porfavor introduzca su contraseña');
      return;
      
    }
  else if(emial.value == ""){
    Swal.fire('porfavor introduzca su correo');
    return;
  }
this.authSvc.login(emial.value, password.value).then(res =>{



  

  if(res && res.user.emailVerified){

   this.router.navigate(['/home']);
    
  }else if(res){
    this.authSvc.logout();
    this.router.navigate(['/sendEmail']);

  }

  const path = 'clientes';

  this.firestore.getDoc<User>(path,res.user.uid).subscribe(user => {


    if(user.encuesta.edad == 0 || user.encuesta.esperanza == "" || user.encuesta.ingreso == 0, 
    user.encuesta.nivelEscolar == "" || user.encuesta.productosPreferidos == "" ||
    user.encuesta.sexo == "" || user.encuesta.trabajo == "" ){

      this.router.navigate(['/encuesta']);
    }
  });
  
 
}).catch(err => {

 Swal.fire(err.message);
 
});

}
  

}