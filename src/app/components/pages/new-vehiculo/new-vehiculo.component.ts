import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/components/auth/auth.service';
import { Vehiculo } from '@app/shared/models/vehiculo';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { VehiculoService } from '@app/shared/services/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-vehiculo',
  templateUrl: './new-vehiculo.component.html',
  styleUrls: ['./new-vehiculo.component.scss']
})
export class NewVehiculoComponent implements OnInit {
  private image:any;
  private vehiculo:any;


  
  constructor(private vehiculoService: VehiculoService , private authSvc: AuthService,
   private firestoreSvc: AuthCrudService){

  }

  

  public newPostForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    placa: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),

  });

  ngOnInit(): void {

  
  }

  addNewVehiculo(data: Vehiculo){

        
    
    this.vehiculo =  console.log(this.vehiculoService.preAddAndUpdate(data, this.image));
      
     
        
     
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
  
        
          Swal.fire('Deleted!, Your post has been deleted.','sucessfull');
          
      }else{
  
          Swal.fire('Error!, There was an error deleting this post','error');
        }
    
      }
    )


  

    }

}

