import { Injectable } from '@angular/core';
import { Domiciliario } from '../models/domiciliario';

@Injectable({
  providedIn: 'root'
})
export class DomiciliarioService {

  domiciliario: Domiciliario;
  constructor() { }

  setDomiciliario(domiciliario: Domiciliario){

    this.domiciliario = domiciliario;
  
  }

  getDomiciliario(){
    return this.domiciliario;
  }
}
