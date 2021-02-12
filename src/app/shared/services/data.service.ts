import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

prouct$: Product;  
  constructor() { }

  setProduct(product: Product){

    this.prouct$ = product;

  }

  getProduct(){

    return this.prouct$;
  }
}
