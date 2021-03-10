import { Component, OnInit } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { Vehiculo } from '@app/shared/models/vehiculo';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { DataService } from '@app/shared/services/data.service';
import { VehiculoService } from '@app/shared/services/vehiculo.service';


interface vehiculo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.css']
})
export class ListVehiculoComponent implements OnInit {

  selectedValue: string;
  
  vehiculos: vehiculo[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

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
    private vehiculoSvc: VehiculoService ) {

    this.pedido = dataService.getPedido();

   }

  ngOnInit(): void {

    this.getVehiculos();
  }

  getVehiculos(){


    this.vehiculoSvc.getAllVehiculos().subscribe(vehiculo => {

      for (let index = 0; index < vehiculo.length; index++) {

        this.vehiculos = [
          {value: vehiculo[index].nombre, viewValue: vehiculo[index].nombre}
        
        ]
        
        
      }

    });


  }

  sendPedido(vehiculo: Vehiculo){



 const id = this.pedido.cliente.id;

 const path1 = 'pedidos';
 const path = `clientes/${id}/${path1}`;

 this.firestore.createDoc(this.pedido,path,this.pedido.id).then(() => {
    

  console.log('añadido con exito');
  
  

  });
  
 
  }

}
