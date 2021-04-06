import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalListDomiciComponent } from '@app/shared/components/modal-list-domici/modal-list-domici.component';
import { Pedido } from '@app/shared/models/pedido';
import { Vehiculo } from '@app/shared/models/vehiculo';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { DataService } from '@app/shared/services/data.service';
import { MessageService } from '@app/shared/services/message.service';
import { SendProductService } from '@app/shared/services/sendProduct';
import { VehiculoService } from '@app/shared/services/vehiculo.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.scss']
})
export class ListVehiculoComponent implements OnInit {

 

  vehiculo$: Observable<Vehiculo[]>;

  pedido: Pedido = {

    cliente:null,
  estado:null,
  fecha:null,
  id:null,
  precioTotal: null,
  productos: null,
  valoracion: null,
  CorreoClient:null,
  vehiculo: null
  }
  constructor(dataService: DataService, private firestore: AuthCrudService, 
    private vehiculoSvc: VehiculoService, private sendProductService: SendProductService,
    public dialog: MatDialog, private dataSe: DataService ) {

    this.pedido = dataService.getPedido();

    this.vehiculo$ =  this.vehiculoSvc.getAllVehiculos();

   }

  ngOnInit(): void {

   
  }

 
  sendNotify(vehiculo:Vehiculo){



 const id = this.pedido.cliente.id;

 this.pedido.vehiculo = vehiculo;

 const path1 = 'pedidos';
 const path = `clientes/${id}/${path1}`;

 this.firestore.createDoc(this.pedido,path,this.pedido.id).then(() => {
    

  console.log('añadido con exito');

  this.dataSe.setPedido(this.pedido);

 this.onpenDialog();
  
 
  });


  


  }


onpenDialog(): void{

  const dialogRef= this.dialog.open(ModalListDomiciComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  })
}

}
