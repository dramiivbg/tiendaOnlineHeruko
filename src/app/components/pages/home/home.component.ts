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
import { tick } from '@angular/core/testing';
import { Domiciliario } from '@app/shared/models/domiciliario';


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

  private product$: Observable<Pedido[]>
 porcentajeC: number = 0;
  users$: Observable<User[]>;
  pedidos$: Observable<Pedido[]>;
  product: string[] = [];
  pedidoCalificado: number = 0;
  calificaciones: number[] = [];
 productos: string[] = [];
  calificacionGlobal: number = 0;
id = '';

ifcoment:boolean = false;
  constructor(private postSvc: ProductService,
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

this.contador = 0;


this.comprobarUserComment();
  }





  

   addCarrito(product: Product){

  
    this.carritoSvc.addProduct(product);
}

comprobarUserComment(){

  this.productos = [];
this.vector = [];

  this.authSvc.afAuth.user.subscribe(user => {

    if(user){
    const path = `clientes/${user.uid}/pedidos`;    
    this.product$ = this.firestore.getPedidos(path);
   
       
   this.product$.subscribe(pedidos => {


    for (let index = 0; index < pedidos.length; index++) {
      
  
        for (let index1 = 0; index1 < pedidos[index].productos.length; index1++) {

          const nombre = pedidos[index].productos[index1].producto.tipo_producto;

           this.vector.push(nombre);

           
            
              }
      
    }


    for (let index = 0; index < this.vector.length; index++) {
   
      for (let index1 = 1+index; index1 <=this.vector.length; index1++) {
  
        if(this.vector[index] == this.vector[index1]){
  
          this.vector[index1] = '';
        }
      } 
  
       
      }
  
     

    this.vector.find( producto => {

      if(producto != ''){

        this.productos.push(producto);
        
        
  
        
  
      }
    });


  
  
  
  
  });

    }
});
    
}
productoComent(producto: Product){

  this.comentSvc.setProduct(producto);

  
}






   userActive(){


  
    this.authSvc.afAuth.user.subscribe(res1 => {
  
    
  
      if(res1 == null){
  
      this.admin = false;

      return;
        
        
      }else{
        this.comprobarUser(res1.uid);
      }

    });
   
  }


  comprobarUser(id: string){

  
    const path = 'clientes';

    this.firestore.getDoc<User>(path, id).subscribe(user => {
  
        if(user){
  
        this.admin = true;
  
          
        }else{
  
          this.admin = false;
  
        }
         
        
  
        
      });
        
      
  
      }


 
      comprobarDomici(id: string){

  
        const path = 'domiciliarios';
        this.firestore.getDoc<Domiciliario>(path,id).subscribe(domici => {
  
        if(id == domici.id ){
  
        this.admin = true;
  
          
        }else{
  
          this.admin = false;
  
        }
         
        });
  
        
        
        
      
  
      }


 




  }





