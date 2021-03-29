import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { ServiceTService } from '@app/serviceT/service-t.service';
import { Pedido } from '@app/shared/models/pedido';
import { User } from '@app/shared/models/user.interface';
import { PaypalService } from '@app/shared/paypal.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { CarritoService } from '@app/shared/services/carrito.service';
import { ProductoService } from '@app/shared/services/producto.service';
import { from, Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import {ValorService} from '../../../shared/services/valor.service';
@Component({
  selector: 'app-new-carrito',
  templateUrl: './new-carrito.component.html',
  styleUrls: ['./new-carrito.component.scss']
})
export class NewCarritoComponent implements OnInit {

uid1 = '';
 pedido: Pedido;
 cantidad: number;

 cliente: User;

 carritoTotal: number;

 carritoSuscriber: Subscription;

 total: number;
  
uid= '';
  constructor(public carritoSvc: CarritoService,
    private firestoreSvc: AuthCrudService,
    private firesore: AngularFirestore,
    private authSvc: AuthService,

      private totalSvc: ValorService,private productoSvc: ProductoService,
      private serviceTService: ServiceTService,
      private paypalSvc: PaypalService,
      private router:Router) {
 
        this.initCarrito();
      this.authSvc.afAuth.authState.subscribe( res => {
      
        this.uid = res.uid;
        
        const path = 'clientes';
        this.firestoreSvc.getDoc<User>(path,res.uid).subscribe(user => {
    
          this.cliente = user;
        });
      
      });



    


  
   
  
    
   
 
   }

  ngOnInit(): void {

   

    this.loadPedido(); 
 
  

  }

  loadPedido(){


 this.carritoSuscriber =  this.carritoSvc.getCarrito().subscribe(res => {

  console.log('loadPedido() en carrito', res);

  if(res){
  res.cliente = this.cliente;
  
 this.pedido = res;

this.getTotal();

this.getCantidad();
  }
  else{

    console.log('error pedido no traido');
  }

 });

 

  
 
  

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
}

getTotal(){

  this.carritoTotal = 0;
this.pedido.productos.forEach( producto => {

this.carritoTotal =   (producto.producto.valor) * producto.cantidad + this.carritoTotal; 

this.total = (producto.producto.valor) * producto.cantidad + this.carritoTotal; 


})
  
}

getCantidad(){
this.cantidad = 0;

  
this.pedido.productos.forEach( producto => {

  this.cantidad =   producto.cantidad + this.cantidad;
  
  
  })
    
}

pedir(){

 if (!this.pedido.productos.length){

  Swal.fire('añada productos al carrito')

  return;

 }else{
   this.router.navigate(['/pago']);
 }

this.pedido.fecha = new Date();
this.pedido.precioTotal = this.carritoTotal;


 
 this.pedido.id = this.firesore.createId();

 this.serviceTService.setPedidoT(this.pedido);

 this.paypalSvc.setPedidoPaypal(this.pedido);
 



    this.totalSvc.setValorTotal(this.carritoTotal);

   

    this.producto();

   

   this.carritoSvc.clearCarrito();


  
 
 



}

producto(){

  
  this.pedido.precioTotal = this.total;
  this.productoSvc.setProducto(this.pedido);
 



}

}