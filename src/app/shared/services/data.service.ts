import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Product } from '../models/product.interface';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

prouct$: Product;  
vehiculo$: Vehiculo;
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

  setProduct(product: Product){

    this.prouct$ = product;

  }

  getProduct(){

    return this.prouct$;
  }

  setVehiculo(vehiculo: Vehiculo){


    this.vehiculo$ = vehiculo;
  }

  getVehiculo(){

    return this.vehiculo$;
  }

  setPedido(pedido: Pedido){

    this.pedido = pedido;
  }

  getPedido(){

    return this.pedido;
  }


}
