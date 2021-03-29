import { Component, OnInit } from '@angular/core';
import { Tarea } from '@app/shared/models/tarea';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { MessageService } from '@app/shared/services/message.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-tareas',
  templateUrl: './ver-tareas.component.html',
  styleUrls: ['./ver-tareas.component.scss']
})
export class VerTareasComponent implements OnInit {

  tarea$: Observable<Tarea[]>;
  constructor(private firestoreSvc: AuthCrudService, private messageService: MessageService) { 

    this.tarea$ = firestoreSvc.getTareas();
  }

  ngOnInit(): void {
  }

  eliminarTarea(tarea: Tarea){

    Swal.fire({

      title:'Are you sure',
      text:`You won't be able to revert this!`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Yes, delete it!'
    }).then(result => {
  
      if(result.value){
  

        const path = 'tareas';
  
        this.firestoreSvc.deleteDoc(path,tarea.id).then(() => {
  
          Swal.fire('Deleted!, Your post has been deleted.','sucessfull');

          
          this.messageService.sendMessageTarea(tarea).subscribe(res => {

            console.log(res);
          });
          
        }).catch((error) => {
  
          Swal.fire('Error!, There was an error deleting this post','error');
        })
        
      }
    });
  


  }
}
