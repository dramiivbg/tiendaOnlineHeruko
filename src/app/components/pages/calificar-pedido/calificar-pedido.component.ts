import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { Pedido } from '@app/shared/models/pedido';
import { Product } from '@app/shared/models/product.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { MessageService } from '@app/shared/services/message.service';
import { PedidoCalificarService } from '@app/shared/services/pedido-calificar.service';

@Component({
  selector: 'app-calificar-pedido',
  templateUrl: './calificar-pedido.component.html',
  styleUrls: ['./calificar-pedido.component.scss']
})
export class CalificarPedidoComponent implements OnInit {

  valoracion:number[] = [1,2,3,4,5];

  pedido: Pedido;
  pedidoV: Pedido[] = [];

  constructor(private firestoreSvc: AuthCrudService,
    private messageService: MessageService, private pedidoCalificarService:PedidoCalificarService) { 

      this.initCarrito();
      
      this.pedido = this.pedidoCalificarService.getPedido();
  
      this.pedidoV.push(this.pedido);
  
      console.log(this.pedido);

  }

  ngOnInit(): void {

   

  }

 

  valorarPedido(numero: number, producto: Product){

    const path = 'productos';
  
  this.firestoreSvc.getDoc<Product>(path,producto.id).subscribe(producto => {

    if(producto){

      producto.calificacion = numero;

      const path = 'productos';

      this.firestoreSvc.createPro(producto,path,producto.id).then(() => {

        console.log('calificacion echa');
      });
    }
  })
   
    
  }

  initCarrito(){

    this.pedido = {
      id: '',
      cliente: null,
      productos:[],
      precioTotal: null,
      estado: 'enviado',
      fecha: new Date(),
      valoracion: null,
  }

  }

  
}
