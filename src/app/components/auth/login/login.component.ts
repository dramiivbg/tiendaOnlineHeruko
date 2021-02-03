import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '@auth/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Validator } from 'class-validator';

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

  if(res){

    console.log(res);
    this.router.navigate(['/home']);
    
  }
})

}

}