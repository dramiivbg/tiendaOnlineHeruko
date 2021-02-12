import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from '@app/shared/models/pedido';
import {HttpClient} from '@angular/common/http';
import { ValorService } from '@app/shared/services/valor.service';
@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.scss']
})
export class ItemCarritoComponent implements OnInit {

  @Input() productoPedido: ProductoPedido;

  num:number = 1;

  cantidad: number = 0;
  

  constructor(private Http: HttpClient,private valorSvc: ValorService) { 

   
  }

  ngOnInit(): void {

    this.cantidad = this.productoPedido.producto.valor;
  }

  
addCantidad(){

  this.num++;

this.cantidad =   this.productoPedido.producto.valor * this.num;

}

resCantidad(){


  this.num--;

this.cantidad =   this.productoPedido.producto.valor * this.num;
  
}


sendValor(){


this.valorSvc.setValorTotal(this.cantidad);


}

}
