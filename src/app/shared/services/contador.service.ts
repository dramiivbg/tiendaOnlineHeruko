import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  contador: number;
  constructor() { }

  setContador(contador: number){

    this.contador = contador;

  }

  getContador(){
    console.log(this.contador);
   return this.contador;

  }


}
