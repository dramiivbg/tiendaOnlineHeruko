import { Injectable } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { Pedido, ProductoPedido } from '../models/pedido';
import { Product} from '../models/product.interface';
import {Router} from '@angular/router';
import { AuthCrudService } from './authCrud.service';
import { User } from '../models/user.interface';
import { Observable, Subject, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  pedido: Pedido;

  clienteSuscriber: Subscription;
  carritoSuscriber: Subscription;

  pedido$ = new Subject<Pedido>();

  carritoTotal: number;
 public cliente;
 User;

path = 'carrito';
uid = '';

  constructor(private authSvc: AuthService,
    private router: Router,
    private firestore: AuthCrudService) {

      

     this.authSvc.afAuth.authState.subscribe( res => {

    

      if(res !== null && res.emailVerified){
     
        this.uid = res.uid;

      
        this.initCarrito();

        this.loadUser();

        this.loadCarrito();

        

     
       

   

       
     
      }else if(res) {

        router.navigate(['/sendEmail']);
        
      }else{

        router.navigate(['/home']);
      }
      
      })



  

   }



  


loadUser(){
const path = 'clientes';


 this.firestore.getDoc<User>(path, this.uid).subscribe(res => {

  this.pedido = {
    id: this.uid,
    cliente: res,
    productos:[],
    precioTotal: null,
    estado: 'enviado',
    fecha: new Date(),
    valoracion: null,
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

this.pedido$.next(this.pedido);
}




  loadCarrito(){
    const path = `clientes/${this.uid}/${this.path}`;

    if(this.carritoSuscriber){

      this.carritoSuscriber.unsubscribe();
    }
  this.carritoSuscriber =   this.firestore.getDoc<Pedido>(path, this.uid).subscribe(res => {

     console.log(res);

      if(res){

        this.pedido = res; 
        this.pedido$.next(this.pedido);

      }else{

  
        this.initCarrito();

        
      }
    });





  }

 

  

  

  getCarrito(): Observable<Pedido>{

    return  this.pedido$.asObservable();

  }


addProduct(producto: Product){

if(this.uid.length){

const item =   this.pedido.productos.find( productoPedido => {
   return (productoPedido.producto.id == producto.id);
  });

  if(item !== undefined){

    item.cantidad+=1;

    

  }else{

    const add: ProductoPedido = { 

      cantidad: 1,
      producto


    };


    this.pedido.productos.push(add);
  
  }

  

}else{

  this.router.navigate(['/login']);
  return;
}


this.pedido$.next(this.pedido);
 const path = `clientes/${this.uid}/${this.path}`;

  this.firestore.createDoc(this.pedido,path,this.uid).then(() => {

  console.log('añadido con exito');

 

  });




}

realizarPedido(){





}

removeProduct(producto: Product){

  

if(this.uid.length){

  let position = 0;
  const item =   this.pedido.productos.find( (productoPedido, index) => {

    position = index;
     return (productoPedido.producto.id == producto.id);
    });
  
    if(item !== undefined){
  
      item.cantidad-=1;
  
      if(item.cantidad == 0){


        this.pedido.productos.splice(position, 1);
      }


      console.log('remove->', this.pedido);
      const path = `clientes/${this.uid}/${this.path}`;
  
      this.firestore.createDoc(this.pedido,path,this.uid).then(() => {
    
      console.log('añadido con exito');
      
     
    
      });
      
  }
  


  
  
  
  


}
}

clearCarrito(){

 

  const path = `clientes/${this.uid}/${this.path}`;
  this.firestore.deleteDoc(path, this.uid).then(() => {

    this.initCarrito();
  })


}



}