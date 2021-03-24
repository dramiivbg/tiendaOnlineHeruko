import { Injectable } from '@angular/core';
import { Pedido } from './models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
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
  
  constructor() { }

  setPedidoPaypal(pedido: Pedido){

    this.pedido = pedido;

  }

  getPedidoPaypal(){

    return this.pedido;

  }

}
