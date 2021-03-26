import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/components/auth/auth.service';
import { Vehiculo } from '@app/shared/models/vehiculo';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { DataService } from '@app/shared/services/data.service';
import { VehiculoService } from '@app/shared/services/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.component.html',
  styleUrls: ['./edit-vehiculo.component.scss']
})
export class EditVehiculoComponent implements OnInit {

  private image:any;
  private vehiculo: Vehiculo;



  uid = '';

 

  vehiculo$: Vehiculo[];
  

  vehicu$: Vehiculo = {

    color: null,
    marca: null,
    nombre: null,
    placa: null,
    id:null,
    image: null
  } ;
  
  constructor(private vehiculoService: VehiculoService,  private authSvc: AuthService,
    private data: DataService,private firestoreSvc: AuthCrudService) {

  
     
     }


   

    

  public newPostForm = new FormGroup({
    nombre: new FormControl('',[Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    marca: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    imagen: new FormControl('', Validators.required),
    placa: new FormControl('',Validators.required),
    color: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),

  });
  ngOnInit(): void {


    
     
       

        
  
    
    
  this.vehiculo =  this.data.getVehiculo();


      
     this.vehiculoService.getOneVehiculo(this.vehiculo.id).subscribe(vehicul => {
       
      
      this.vehicu$ = vehicul
    
     
    
     });
    
    }
     
     
       
      
     
       
     
      

     

    
  




  EditVehiculo(data: Vehiculo){


    

    





      this.vehiculoService.preUpdate(data,this.vehicu$.id,this.vehicu$.image,this.image);

    



  

  


 
  }

  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    
    
  
  }


  create(){

    Swal.fire({

      title:'Are you sure',
      text:`You won't be able to revert this!`,
      icon:'warning',
      
    }).then(result => {
  
      if(result.value){
  
        
          Swal.fire('Deleted!, Your vehicle has been update.','sucessfull');
          
      }else{
  
          Swal.fire('Error!, There was an error updating this vehicle','error');
        }
    
      }
    )


  

    }


}
