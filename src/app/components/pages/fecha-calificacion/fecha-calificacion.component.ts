import { Component, OnInit } from '@angular/core';
import { FechaProgramada } from '@app/shared/models/fechaProgramada';
import { Pedido } from '@app/shared/models/pedido';
import { Product } from '@app/shared/models/product.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ProductoProgramadoService } from '@app/shared/services/producto-programado.service';

@Component({
  selector: 'app-fecha-calificacion',
  templateUrl: './fecha-calificacion.component.html',
  styleUrls: ['./fecha-calificacion.component.css']
})
export class FechaCalificacionComponent implements OnInit {

 fechas = new Array();
 
 
  feha: string  = '';

  fechaProgramada: FechaProgramada;

  pedido: Pedido;

  constructor(private productProgramadoSvc: ProductoProgramadoService,
    private firestoreSvc: AuthCrudService) { 

    this.initCarrito();

    this.initProgramado();

  
    this.pedido = productProgramadoSvc.getProductProgramado();
  }

  ngOnInit(): void {
  }

  getFecha(fecha: any){

    
    this.fechaProgramada.fecha = fecha;
    this.fechaProgramada.pedido =  this.pedido;

    const path = 'fechas_programadas'

    this.firestoreSvc.doc<FechaProgramada>(this.fechaProgramada,path).then( () => {

      console.log('fecha creada');
    });
    
  }


  initCarrito(){

    this.pedido = {
      id: '',
      cliente: null,
      productos:[],
      precioTotal: null,
      estado: 'enviado',
      fecha: new Date(),
      valoracion: null,
  }
  }

  initProgramado(){

    this.fechaProgramada = {

      fecha: null,
      pedido: null
    }
  }

}
