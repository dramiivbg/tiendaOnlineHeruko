import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '@auth/auth.service';
import {FormBuilder} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm = this.fb.group({

  username:[''],
  password:[''],


})
  constructor(private authSvc: AuthService, private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {

  
    

  
  }

  onLogin():void{

    const formValue =  this.loginForm.value;
    this.authSvc.login(formValue).subscribe(res => {

      if(res){
        this.router.navigate(['/admin']);
      }
    })
    

  }

}
