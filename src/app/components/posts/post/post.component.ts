import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { from, Observable } from 'rxjs';
import {Product} from '../../../shared/models/product.interface';
import {ProductService} from '../product.service';
import {CantidadTotalService} from '../../../shared/services/cantidad-total.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

   public product$: Observable<Product>;
  public total:any;
 

   constructor(private route: ActivatedRoute,public productSvc: ProductService,
      private cantidadTotal:CantidadTotalService) { }
 
   ngOnInit(): void {
 
     const idPost  = this.route.snapshot.params.id;

     this.product$ = this.productSvc.getOnePost(idPost);

  
    this.valorTotal();
 
     console.log(this.product$);


     
 
   }


   valorTotal(){

   this.product$.subscribe(res =>{



   this.total = this.cantidadTotal.cantidadTotal(res);
   }


   )

    console.log(this.total);
    
    }

    
 
}
