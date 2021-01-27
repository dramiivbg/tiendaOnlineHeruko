import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { from, Observable } from 'rxjs';
import {Product} from '../../../shared/models/product.interface';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

   public product$: Observable<Product>;
  cantidad:number = 0;
  public valor:Array<string>;

  public valor2:number;

  public total:number;

   constructor(private route: ActivatedRoute,public productSvc: ProductService) { }
 
   ngOnInit(): void {
 
     const idPost  = this.route.snapshot.params.id;

     this.product$ = this.productSvc.getOnePost(idPost);

  

     console.log(this.product$);


     
 
   }


   valorTotal(){


   this.product$.subscribe(res =>{


  this.valor = res.valor.toString().split('$')

this.valor2 =  Number(this.valor[1]);


  

    return this.total = (this.valor2*this.cantidad );
   
   })
   




  
    }

    
 
}
