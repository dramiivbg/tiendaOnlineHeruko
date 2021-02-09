import { Component, Input, OnInit } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import {ProductService} from '../../posts/product.service';
import {AuthCrudService} from '../../../shared/services/authCrud.service';
import { AuthService } from '@app/components/auth/auth.service';
import { CarritoService } from '@app/shared/services/carrito.service';
import { ProductoPedido } from '@app/shared/models/pedido';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uid?:string;

  contador:number = 0;

  products$: Observable<Product[]>;


  vector:string[];

private uids:string[];

  constructor(private postSvc: ProductService, private authCrud: AuthCrudService,
    private carritoSvc: CarritoService,
    private authSvc: AuthService,

      ) { 


            
        this.products$ = this.postSvc.getAllPosts();



        

       




            
    
}
  

  

  ngOnInit(): void {




    this.postSvc.getAllPosts().subscribe(res => console.log('POSTS',res));


      

         


        

        
  


       
        
 

    




   
  }

   addCarrito(product: Product){

  
    this.carritoSvc.addProduct(product);
   }

  




  }





