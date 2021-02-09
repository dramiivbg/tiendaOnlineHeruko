import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Validator } from 'class-validator';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.component.html',
  styleUrls: ['./login-vendedor.component.scss']
})
export class LoginVendedorComponent implements OnInit {

  
  hide = true;



public contador:number = 0;
 
 

  constructor(private authSvc: AuthService,private router: Router) { }



  ngOnInit(): void {

    
  

  
  }


  onLogin(emial,password){






  this.authSvc.login(emial.value, password.value).then(res =>{

    if(res){
  
      console.log(res)

   
    
      Swal.fire('login successfully');
      this.router.navigate(['/admin']);


      

      
    }else{

      Swal.fire('username and password incorrect')
    }


});





 } 



}


