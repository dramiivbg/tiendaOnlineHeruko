import { Component, OnInit } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { CarritoService } from '@app/shared/services/carrito.service';

@Component({
  selector: 'app-new-carrito',
  templateUrl: './new-carrito.component.html',
  styleUrls: ['./new-carrito.component.scss']
})
export class NewCarritoComponent implements OnInit {

 public pedido: Pedido;

  

  constructor(public carritoSvc: CarritoService) {

    this.loadPedido();
   }

  ngOnInit(): void {
  }

  loadPedido(){


  this.pedido =   this.carritoSvc.getCarrito();

  

}

}
