import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoProgramadoService {

  pedido: Pedido;
  constructor() { 
    this.initCarrito();
  }

  setProductProgramado(pedido: Pedido){

    this.pedido = pedido;

  }

  getProductProgramado(){

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
