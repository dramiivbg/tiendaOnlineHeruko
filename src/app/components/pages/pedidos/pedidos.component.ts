import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@app/components/auth/auth.service';
import { ProductService } from '@app/components/posts/product.service';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
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


  constructor(private firestoreSvc: AuthCrudService,
    private authSvc: AuthService,
    private firesore: AngularFirestore) { 




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

    console.log('change()', $event.value);

    this.getPedidosCulminados()

  }


  change1($event: any){

    console.log('change()', $event.value);
  
  
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

 })


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
   
   

  }
}
