import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/components/posts/product.service';
import { Product } from '@app/shared/models/product.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent implements OnInit {

  
  estado: number = 0;


  contador: number = 0;

  products$: Observable<Product[]>;


  constructor(private postSvc: ProductService) { 

    this.products$ = this.postSvc.getAllPosts();
  }

  ngOnInit(): void {

 
   
    this.EstadoCompra('en_camino');


   
  }


  EstadoCompra(estado: string){


    if(estado == 'prepando'){

      this.estado = 1;
    }

    else if(estado == 'en_camino'){

      this.estado = 50;
    }

    else{

      this.estado = 100;
    }

  }
}
