import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { ProductService } from '@app/components/posts/product.service';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { MessageService } from '@app/shared/services/message.service';
import { PedidoCalificarService } from '@app/shared/services/pedido-calificar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit, OnDestroy {


  newSuscriber: Subscription;


  culminadoSuscriber: Subscription;
  uid = '';

  pedidos: Pedido[];

activar: boolean = false;

  constructor(private firestoreSvc: AuthCrudService,
    private authSvc: AuthService,
    private firesore: AngularFirestore,
    
    private pedidoCalificarService:PedidoCalificarService,
    private router: Router) { 




    }

  ngOnInit(): void {

    this.authSvc.afAuth.authState.subscribe( res => {


      this.uid = res.uid;

      this.getPedidosNuevos();


    });

  }

  ngOnDestroy(){

    if(this.newSuscriber){
      this.newSuscriber.unsubscribe();
    }


    if(this.culminadoSuscriber){
      this.culminadoSuscriber.unsubscribe();
    }
  }

  change($event: any){

    this.activar = true;
    console.log('change()', $event.value);

    this.pedidos = [];

    this.getPedidosCulminados();

  }


  change1($event: any){

    this.activar = false;

    console.log('change()', $event.value);
  
    this.pedidos = [];
    this.getPedidosNuevos();
  
  }


  getPedidosNuevos(){
    const path = `clientes/${this.uid}/pedidos`;
 const uid = this.firesore.createId();




 this.newSuscriber =  this.firestoreSvc.getCollectionQuery<Pedido>(path, 'estado','==','enviado').subscribe(res => {

   if(res.length){

 this.pedidos = res;

 console.log(this.pedidos);



 



   }

 });

 this.pedidos = [];


  }

  getPedidosCulminados(){

    const path = `clientes/${this.uid}/pedidos`;
    const uid = this.firesore.createId();
   
   
   
   
    this.culminadoSuscriber =  this.firestoreSvc.getCollectionQuery<Pedido>(path, 'estado','==','entregado').subscribe(res => {
   
      if(res.length){
   
    this.pedidos = res;
   
    console.log(this.pedidos);
   
   
   
    
   
   
   
      }
   
    });
   
    this.pedidos = [];
   

  }


productoP(pedido: Pedido){

  



  this.pedidoCalificarService.setPedido(pedido);

  this.router.navigate(['/calificar']);
    
   
  
  }
  
  
}
