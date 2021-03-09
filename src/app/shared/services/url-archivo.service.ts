import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class UrlArchivoService {

  message: Message = {

    asunto: null,
    message:null,
    file: null,
    gmail: null
  
  };
  constructor() { }

  setUrlArchivo(message: Message){

    this.message = message;

  }

  getUrlArchivo(){

    return this.message;
  }
}
