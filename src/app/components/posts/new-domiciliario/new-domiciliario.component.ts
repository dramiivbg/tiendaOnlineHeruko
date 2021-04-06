import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Product} from '../../../shared/models/product.interface';
import { ProductService} from '../product.service';
import Swal from 'sweetalert2';
import { AuthService } from '@app/components/auth/auth.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Domiciliario } from '@app/shared/models/domiciliario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-domiciliario',
  templateUrl: './new-domiciliario.component.html',
  styleUrls: ['./new-domiciliario.component.scss']
})
export class NewDomiciliarioComponent implements OnInit {

  private domilicliario:any;
  constructor(
    private firestoreSvc: AuthCrudService,
    private authService: AuthService, private router: Router){
 
   }
   
   public newDomiciForm = new FormGroup({
     nombre: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
     apellido: new FormControl('',  Validators.pattern('[a-zA-Z ]*') ),
     correo: new FormControl('', Validators.pattern('[a-zA-Z0-9]+@+[a-zA-Z.]+')),
     telefono: new FormControl('',[Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
     password: new FormControl('',  Validators.minLength(8) ),
 
   });
 
   ngOnInit(): void {
 
   
   }



 async loginUp(data: Domiciliario){


 
  try {
  
  
   const user =    await  this.authService.register(data.correo,data.password)
  
   if(user){
   
  
    Swal.fire('user created successfully').then(() => {
  
  
      this.addNewDomici(data, user.uid);
  
    });
  
 
     
  
   }
    
  } catch (error) {
    
    Swal.fire(error.message);
  }
  
      
  
      
  
    }
  
 
   addNewDomici(data: Domiciliario, id: string){
 
     
    const path = 'domiciliarios'; 

    Number(data.telefono);

    data.pedidos = []; 

     this.domilicliario =  console.log(this.firestoreSvc.createD(data,path,id));
       
      
         
      
       }
       
     
 
 
   
 
   
 
 
  
   
 
   
 
   create(){
 
     Swal.fire('domiciliario successfully created');
   
   }
 
 
}
