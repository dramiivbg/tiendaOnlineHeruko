import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Vendedor } from '@app/shared/models/vendedor';
import { AuthCrudService } from '@app/shared/services/authCrud.service';

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

 uid = '';

public contador:number = 0;
 
 

  constructor(private authSvc: AuthService,private router: Router,
    private firestore: AuthCrudService) { }



  ngOnInit(): void {

    
  

  
  }


  onLogin(emial,password){






  this.authSvc.login(emial.value, password.value).then(res =>{

    if(res){
  
      console.log(res && res.user.emailVerified)

   
      this.router.navigate(['/home']);
    
  this.verifyIfSeller();


      

      
    }
    else if(res){

      this.router.navigate(['/sendEmail']);
    
    
    }else{

      Swal.fire('username and password incorrect')
    }


});





 } 


verifyIfSeller(){

  this.authSvc.afAuth.user.subscribe(res1 => {


    this.uid = res1.uid;

   })

  const path = 'vendedores';

this.firestore.getDoc<Vendedor>(path,this.uid).subscribe(res => {

  if(res){

    console.log(res);
    Swal.fire('login successfully');
    this.router.navigate(['/home']);
  }else{

    this.router.navigate(['/login']);
    this.authSvc.logout();


  }
})

}




}


