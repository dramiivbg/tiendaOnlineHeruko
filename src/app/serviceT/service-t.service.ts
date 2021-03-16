import { Injectable } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ServiceTService {

  pedido: Pedido = {

    cliente:null,
    estado: null,
    fecha: null,
    id: null,
    precioTotal: null,
    productos: null,
    valoracion: null,
    CorreoClient: null,
    vehiculo: null
  }

  constructor() { }

  setPedidoT(pedido: Pedido){

     this.pedido = pedido;

  }

  getPedidoT(){

    return this.pedido;

  }
}
