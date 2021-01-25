import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CantidadTotalService {

  constructor() { }


  addCantidad(cantidad?: number){

    return cantidad;
 


  }

  cantidadTotal(product:Product){
  
  const cantidad =   this.addCantidad();
  

 const resultado = cantidad*product.valor;

   return resultado


  }
}
