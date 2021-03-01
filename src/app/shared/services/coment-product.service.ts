import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentProductService {

  producto: Product;

  constructor() { }


  setProduct(producto: Product){

    this.producto = producto;

}

 getProduct(){

  return this.producto;
 }
}
