import { Component, Input, OnInit } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import {ProductService} from '../../posts/product.service';
import {AuthCrudService} from '../../../shared/services/authCrud.service';
import { AuthService } from '@app/components/auth/auth.service';
import { CarritoService } from '@app/shared/services/carrito.service';
import { Pedido, ProductoPedido } from '@app/shared/models/pedido';
import { Router } from '@angular/router';
import { Vendedor } from '@app/shared/models/vendedor';
import { FilterProductPipe } from '../../../pipe/filter-product.pipe';
import { ComentProductService } from '@app/shared/services/coment-product.service';
import { User } from '@app/shared/models/user.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

admin:  boolean = false;

producto: any;
public contador: number = 0;

public vector: string[] = [];

  selected = '';
  posi: number = 0;
  products$: Observable<Product[]>;


  users$: Observable<User[]>;
  pedidos$: Observable<Pedido[]>;
  product: string[] = [];

  constructor(private postSvc: ProductService, private authCrud: AuthCrudService,
    private carritoSvc: CarritoService,
    private authSvc: AuthService,
    private router: Router,private firestore: AuthCrudService,
    private comentSvc: ComentProductService
      ) { 


            
        this.products$ = this.postSvc.getAllPosts();

        this.users$ = firestore.getUsers();

        
        this.pedidos$ = firestore.getPedidosAll();



        

       




            
    
}
  

  

  ngOnInit(): void {


 
 this.userActive();

this.postSvc.getAllPosts().subscribe(res => console.log('POSTS',res));
this.users$.subscribe(res => console.log('users->', res));
this.pedidos$.subscribe(res => console.log('pedidos->', res));

this.calificacionGlobalProducto();

  }


  

   addCarrito(product: Product){

  
    this.carritoSvc.addProduct(product);
}

calificacionGlobalProducto(){


  this.pedidos$.subscribe(pedidos => {

    

    for (let index = 0; index < pedidos.length; index++) {
      
  
      for (let index1 = 0; index1 < pedidos[index].productos.length; index1++) {

        const nombre = pedidos[index].productos[index1].producto.tipo_producto;

         this.vector.push(nombre)
         this.vector[nombre] = pedidos[index].productos[index1].producto.id;
          
       }
    
  }


  
  for (let index = 0; index < this.vector.length; index++) {
   
    for (let index1 = 1+index; index1 <=this.vector.length; index1++) {

      if(this.vector[index] == this.vector[index1]){

        this.vector[index1] = '';
      }} 

     
    }




   

  this.vector.find( producto => {

    if(producto != ''){

      this.product.push(producto);

    }

    console.log(this.product);
  });


  while( this.posi < this.product.length) {

    this.contador = 0;

    for (let index1 = 0; index1 < pedidos.length; index1++) {

      for (let index2 = 0; index2 < pedidos[index1].productos.length; index2++) {
        
        if(pedidos[index1].productos[index2].producto.tipo_producto  == this.product[this.posi]){

             this.contador = pedidos[index1].productos[index2].producto.calificacion + this.contador/ pedidos[index1].productos.length;

            
        }

        
      }
     
      
    }


    const path = 'productos';

    this.firestore.getDoc<Product>(path,this.vector[this.vector[this.posi]]).subscribe(
     producto => {

      producto.calificacion = this.contador;
      
      this.firestore.create<Product>(producto,path,producto.id).then(res => {

        console.log(res);
      });

     });

    this.posi++;
   
    
  }


  });
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





