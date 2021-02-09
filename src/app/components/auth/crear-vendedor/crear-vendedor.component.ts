import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

interface Rol {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.scss']
})
export class CrearVendedorComponent implements OnInit {
  public gmail: string = '';
  public  password: string = '';
  public direccion: string = '';
  public  cedula:number = 0;
  public  pais: string = '';
  public  rol: string = '';
 
 
   roles: Rol[] = [
 
     {value:'vendedor', viewValue:'Vendedor'}
 
   ]
   constructor(private authService: AuthService, private router: Router,
     private authCrud: AuthCrudService){
 
 
   }
 
   ngOnInit(){
 
     
   }
 
  async loginUp(){
 
 try {
 
 
  const user =    await  this.authService.register(this.gmail,this.password)
 
  if(user){
  
 
   Swal.fire('user created successfully');
    this.router.navigate(['/loginVendedor']);
 
 
    this.onsave(user.uid);
    
 
  }
   
 } catch (error) {
   
   console.log(error);
 }
 
     
 
     
 
   }
 
   onsave(id: string){
 
 
  try {
   
 
  
  this.authCrud.onSaveVendedor(this.gmail, this.cedula,this.direccion,this.pais,this.rol,id);
 
 
 } catch (error) {
   
   console.log(error.message);
 }
   
 
 
   }
 
}
