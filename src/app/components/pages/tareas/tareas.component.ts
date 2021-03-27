import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from '@app/shared/models/tarea';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tarea: string = '';

  constructor(private firestoreSvc: AuthCrudService,
    private router: Router) { }




  public newPostForm = new FormGroup({
    cedula_cliente: new FormControl(0 ,[Validators.pattern('[0-9]*'), Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    tipo_tarea: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
    fecha: new FormControl(new Date, [Validators.required]),
    tarea: new FormControl('',Validators.pattern('[a-zA-Z0-9]*')),
  

  });

  ngOnInit(): void {
  }



  addWork(tarea: Tarea ){

 const cedula = Number(tarea.cedula_cliente);

 tarea.cedula_cliente = cedula;
   
   var fecha = new Date(tarea.fecha);

   const fechaT = (fecha.getMonth()+1) +'/'+ (fecha.getDay()+7)+'/'+fecha.getFullYear();

  tarea.fecha = fechaT;

  console.log(tarea);

  const path = 'tareas'
  this.firestoreSvc.docT(tarea,path).then(() => {


    console.log('tarea añadida');
  });

  }


  create(){
    Swal.fire({

      
      text:`do you want to get out of this place!`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Yes, leave!'
    }).then(result => {
  
      if(result.value){
  
        
  
        this.router.navigate(['/home']);
      }
    });

}
}