import { Injectable } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { Pedido, ProductoPedido } from '../models/pedido';
import { Product} from '../models/product.interface';
import {Router} from '@angular/router';
import { AuthCrudService } from './authCrud.service';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  pedido: Pedido;

 public cliente;User;

path = 'carrito';
uid = '';

  constructor(private authSvc: AuthService,
    private router: Router,
    private firestore: AuthCrudService) {

     this.authSvc.getCurrentUser().then( res => {



      if(res !== null){
     
        this.uid = res.uid;

      
        this.loadUser();
       
     
      }
      
      })



  

   }



  


loadUser(){
const path = 'users';


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
this.loadCarrito();


 })


}

  loadCarrito(){

    const path = 'users/' +this.uid +'/'+this.path;
    this.firestore.getDoc<Pedido>(path, this.uid).subscribe(res => {

      console.log(res);

      if(res){

        this.pedido = res;

    
      }
    })



  }

  getCarrito(){

 return this.pedido;
  }


addProduct(producto: Product){




if(this.uid.length){

const item =   this.pedido.productos.find( productoPedido => {
   return (productoPedido.producto.id == producto.id);
  });

  if(item !== undefined){

    item.cantidad ++;


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

 const path = `users/${this.uid}/${this.path}`;

  this.firestore.createDoc(this.pedido,path,this.uid).then(() => {

  console.log('añadido con exito')

  });




}

realizarPedido(){


}

removeProduct(producto: Product){}

clearCarrito(){


}

}