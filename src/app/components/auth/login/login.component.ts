import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '@auth/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Validator } from 'class-validator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;




 
 

  constructor(private authSvc: AuthService,private router: Router) { }



  ngOnInit(): void {

    
  

  
  }


  onLogin(emial,password){


this.authSvc.login(emial.value, password.value).then(res =>{

  if(res && res.user.emailVerified){

    console.log(res);
    Swal.fire('login successfully');
    this.router.navigate(['/admin']);
    
  }else if(res){

    this.router.navigate(['/sendEmail']);

  }
  
  else{

    Swal.fire('user and password incorrect');
  }
})

}

}