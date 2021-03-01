import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificar-pedido',
  templateUrl: './calificar-pedido.component.html',
  styleUrls: ['./calificar-pedido.component.scss']
})
export class CalificarPedidoComponent implements OnInit {

  valoracion:number[] = [1,2,3,4,5];

  

  constructor() { 

  
  
  }

  ngOnInit(): void {
  }

  change(event:any){

    console.log(event);
  }

  valorarPedido(numero: number){

    console.log(numero);

    
  }

}
