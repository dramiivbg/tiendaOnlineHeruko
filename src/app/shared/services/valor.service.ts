import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValorService {

  valor: number;
  constructor() { }


  setValorTotal(valor: number){

    this.valor = valor

  }

  getValorTotal(){

    return this.valor;
  }
}
