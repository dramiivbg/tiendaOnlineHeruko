import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from '@app/shared/models/pedido';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.scss']
})
export class ItemCarritoComponent implements OnInit {

  @Input() productoPedido: ProductoPedido;

  

  constructor() { }

  ngOnInit(): void {
  }

}
