import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class SendProductService {

  constructor(private http: HttpClient) { }


  sendEstadoProduct(body: any) {
    return this.http.post('http://localhost:5000/estadoPedido', body);
    }

    sendEntregadoProduct(body: any) {
      return this.http.post('http://localhost:2000/entregadoPedido', body);
      }
}
