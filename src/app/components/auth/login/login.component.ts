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


this.authSvc.login(emial.value, password.value).then(res =>{

  if(res && res.user.emailVerified){

   this.verifyIfClient();
    
  }else if(res){

    this.router.navigate(['/sendEmail']);

  }
  
  else{

    Swal.fire('user and password incorrect');
  }
})

}


verifyIfClient(){

  this.authSvc.afAuth.user.subscribe(res1 => {


    this.uid = res1.uid;

   })

  const path = 'clientes';

this.firestore.getDoc<User>(path,this.uid).subscribe(res => {

  if(res){

    console.log(res);
    Swal.fire('login successfully');
    this.router.navigate(['/home']);
  }else{

    this.router.navigate(['/loginVendedor']);
    this.authSvc.logout();
 

    return;

  }
})

}

}