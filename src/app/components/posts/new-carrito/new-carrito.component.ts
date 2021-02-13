import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@app/components/auth/auth.service';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { CarritoService } from '@app/shared/services/carrito.service';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-carrito',
  templateUrl: './new-carrito.component.html',
  styleUrls: ['./new-carrito.component.scss']
})
export class NewCarritoComponent implements OnInit {


 pedido: Pedido;
 cantidad: number;

 carritoTotal: number;

 carritoSuscriber: Subscription;
  
uid= '';
  constructor(public carritoSvc: CarritoService,
    private firestoreSvc: AuthCrudService,
    private firesore: AngularFirestore,
    private authSvc: AuthService) {

      this.authSvc.afAuth.authState.subscribe( res => {
      
        this.uid = res.uid;
      
      })



    this.initCarrito();

    this.loadPedido(); 
  
   
  
    
   
 
   }

  ngOnInit() {



 
  

  }

  loadPedido(){


 this.carritoSuscriber =  this.carritoSvc.getCarrito().subscribe(res => {

  console.log('loadPedido() en carrito', res);
 this.pedido = res;

this.getTotal();

this.getCantidad();


 } )

 

  

  

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

 }

this.pedido.fecha = new Date();
this.pedido.precioTotal = this.carritoTotal;
    const path = `clientes/${this.uid}/pedidos`;
 this.pedido.id = this.firesore.createId();




  this.firestoreSvc.createDoc(this.pedido, path,this.pedido.id).then(( ) => {

    Swal.fire('guardado con exito');

   this.carritoSvc.clearCarrito();
 
  });


}

}