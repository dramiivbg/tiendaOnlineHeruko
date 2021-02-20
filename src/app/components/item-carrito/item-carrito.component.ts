import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from '@app/shared/models/pedido';
import {HttpClient} from '@angular/common/http';
import { ValorService } from '@app/shared/services/valor.service';
import { CarritoService } from '@app/shared/services/carrito.service';
import { Product } from '@app/shared/models/product.interface';
import { ProductoService } from '@app/shared/services/producto.service';
@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.scss']
})
export class ItemCarritoComponent implements OnInit {

  @Input() productoPedido: ProductoPedido;

  num:number = 1;

  cantidad: number = 0;

  cantidades: number[] = [];
  
 contador: number = 0;
  constructor(private Http: HttpClient,private valorSvc: ValorService,
    private carritoSvc: CarritoService,private productoSvc: ProductoService) { 

  
  

   
  }

  ngOnInit(): void {

   






  }
  addProducto(){


    this.carritoSvc.addProduct(this.productoPedido.producto);


  }


  resProducto(){

    this.carritoSvc.removeProduct(this.productoPedido.producto);

  }

  


  





}
