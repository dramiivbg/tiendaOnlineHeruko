import { Injectable } from '@angular/core';
import { Pedido, ProductoPedido } from '../models/pedido';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  pedido: Pedido;

  total:number;
  constructor() {

    this.initCarrito();
   }

  setProducto(pedido: Pedido){

    this.pedido = pedido;


  }

  getProducto(){

    return this.pedido;
  }

  setValorTotal(total:number){

    this.total = total;
  }

  getvalorTotal(){

    return this.total;

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
