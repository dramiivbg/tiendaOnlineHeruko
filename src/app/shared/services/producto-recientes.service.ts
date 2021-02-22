import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ProductoRecientesService {

  pedido: Pedido;
  constructor() { }

  setPedido(pedido: Pedido){

    this.pedido = pedido;
  }

  getPedido(){

    return this.pedido;
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


}
