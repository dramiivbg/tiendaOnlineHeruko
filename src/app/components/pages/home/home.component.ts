import { Component, Input, OnInit } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import {ProductService} from '../../posts/product.service';
import {AuthCrudService} from '../../../shared/services/authCrud.service';
import { AuthService } from '@app/components/auth/auth.service';
import { CarritoService } from '@app/shared/services/carrito.service';
import { ProductoPedido } from '@app/shared/models/pedido';
import { Router } from '@angular/router';
import { Vendedor } from '@app/shared/models/vendedor';
import { FilterProductPipe } from '../../../pipe/filter-product.pipe';
import { ComentProductService } from '@app/shared/services/coment-product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

admin:  boolean = false;

producto: any;




  selected = '';

  products$: Observable<Product[]>;




  constructor(private postSvc: ProductService, private authCrud: AuthCrudService,
    private carritoSvc: CarritoService,
    private authSvc: AuthService,
    private router: Router,private firestore: AuthCrudService,
    private comentSvc: ComentProductService
      ) { 


            
        this.products$ = this.postSvc.getAllPosts();



        

       




            
    
}
  

  

  ngOnInit(): void {


 
 this.userActive();

this.postSvc.getAllPosts().subscribe(res => console.log('POSTS',res));


      

         


        

        
  


       
        
 

    




   
  }

   addCarrito(product: Product){

  
    this.carritoSvc.addProduct(product);
}

productoComent(producto: Product){

  this.comentSvc.setProduct(producto);

  
}






   userActive(){

      
    this.authSvc.afAuth.user.subscribe(res1 => {
  
    
  
      if(res1 == null){
  
      this.admin = true;
        
        
      }else{
        this.comprobarUser(res1.uid);
      }

    });
   
  }


  comprobarUser(id: string){

  
  
        if(id !== 'Dik2UyFl6wQ0EamZoHrDIKGQj1e2'){
  
        this.admin = true;
  
          
        }else{
  
          this.admin = false;
  
        }
         
        
  
        
        
        
      
  
      }


  




  }





