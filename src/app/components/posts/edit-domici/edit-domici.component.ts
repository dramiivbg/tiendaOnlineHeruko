import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Product} from '../../../shared/models/product.interface';
import { ProductService} from '../product.service';
import Swal from 'sweetalert2';
import { AuthService } from '@app/components/auth/auth.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Domiciliario } from '@app/shared/models/domiciliario';
import { Router } from '@angular/router';
import { DomiciliarioService } from '@app/shared/services/domiciliario.service';

@Component({
  selector: 'app-edit-domici',
  templateUrl: './edit-domici.component.html',
  styleUrls: ['./edit-domici.component.scss']
})
export class EditDomiciComponent implements OnInit {


  private domilicliario: Domiciliario;

 domicili$: Domiciliario = {
   apellido: null,
   correo: null,
   nombre: null,
   telefono: null,
   id: null,
   password : null
 };
  constructor(
    private firestoreSvc: AuthCrudService,
    private domiciliarioService: DomiciliarioService,
    private authService: AuthService, private router: Router){


 
   }
   
   public newDomiciForm = new FormGroup({
     nombre: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
     apellido: new FormControl('',  Validators.pattern('[a-zA-Z ]*') ),
     correo: new FormControl('', Validators.pattern('[a-zA-Z0-9]+@+[a-zA-Z.]+')),
     telefono: new FormControl('',[Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
   
 
   });
 

  ngOnInit(): void {


  this.domilicliario =  this.domiciliarioService.getDomiciliario()


  const path = 'domiciliarios';
      
  this.firestoreSvc.getDoc<Domiciliario>(path,this.domilicliario.id).subscribe(domici => {
    
   
   this.domicili$ = domici
 
  
 
  });
 
  }



  EditDomici(data: Domiciliario){


    

    



    const path = 'domiciliarios';


    this.firestoreSvc.createD( data, path, this.domicili$.id);

  









}



create(){

 
  

    Swal.fire({

      title:'Are you sure',
      text:`You won't be able to revert this!`,
      icon:'warning',
      
    }).then(result => {
  
      if(result.value){
  
        
          Swal.fire('Updating!, He Domiciliario has been update.','sucessfull');
          
      }else{
  
          Swal.fire('Error!, There was an error updating this post','error');
        }
    
      }
    )


  

    }
  }


