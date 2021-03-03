import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '@app/components/auth/auth.service';
import { Vendedor } from '@app/shared/models/vendedor';
import { DataService } from '@app/shared/services/data.service';
import { ContadorService } from '@app/shared/services/contador.service';
import { User } from '@app/shared/models/user.interface';
import {ProductService} from '../../../components/posts/product.service';
import { SendProductService } from '@app/shared/services/sendProduct';
import { templateJitUrl } from '@angular/compiler';
import { Product } from '@app/shared/models/product.interface';
import { ProductoProgramadoService } from '@app/shared/services/producto-programado.service';
import { MessageService } from '@app/shared/services/message.service';
import { PedidoCalificarService } from '@app/shared/services/pedido-calificar.service';


interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.scss']
})
export class PedidosAdminComponent implements OnInit, OnDestroy {



  newSuscriber: Subscription;

 datoCliente: User[] = [];


  culminadoSuscriber: Subscription;

  caminoSuscriber: Subscription;
   uid = '';
 
   pedidosNew: Pedido[] = [];
   pedidosCul: Pedido[] = [];

   pedidosCamino: Pedido[] = [];

 
 




   culminados: boolean = false;
   nuevos: boolean = true;

   camino: boolean = false;



public  rol: string = '';

contadorNew: number = 0;
pedidoNew: Pedido;




  roles: Rol[] = [


   
    {value:'camino', viewValue:'Camino'},
    {value:'entregado', viewValue:'Entregado'}

  ]
  constructor(private firestoreSvc: AuthCrudService,
    private firesore: AngularFirestore,
    private authSvc: AuthService,private router: Router,
    private firestore: AuthCrudService,
    private dataSvc: ContadorService,
    private pedidoSvc: ProductService,
    private sendProductSvc: SendProductService,
    private pedidoCalificarService:PedidoCalificarService,
    private messageService: MessageService) {

     
     };

  ngOnInit() {

 

   this.getPedidosNuevos();

   
  };

 

 


  




  ngOnDestroy(){

    if(this.newSuscriber){
      this.newSuscriber.unsubscribe();
    }


    if(this.culminadoSuscriber){
      this.culminadoSuscriber.unsubscribe();
    }

    if(this.caminoSuscriber){

      this.caminoSuscriber.unsubscribe();
    }
  }


  change2($event: any){


    this.culminados = false;
    this.nuevos = false;
    this.camino = true;

    console.log('change()', $event.value);

    this.getPedidosCamino();

    
  


  }

  change($event: any){

    this.culminados = true;
    this.nuevos = false;
    this.camino = false;
    

 
    console.log('change()', $event.value);
   
   
   this.getPedidosCulminados();
  
    
  }


  change1($event: any){

    this.culminados = false;
    this.camino = false;
    this.nuevos = true;
    

    console.log('change()', $event.value);
   

    this.getPedidosNuevos();

      }


  getPedidosNuevos(){
    const path = 'pedidos';
    
  let startAt = null;
  let contador:number = 0;

   if(this.pedidosNew.length){

     startAt = this.pedidosNew[this.pedidosNew.length -1].fecha;
     
   }
 this.newSuscriber =  this.firestoreSvc.getCollectionAll<Pedido>(path, 'estado','==','enviado',startAt,).subscribe(res => {


 


    if(res.length){
      res.forEach( pedido => {
  
   
  
      
       
   this.pedidosNew.push(pedido);
   
});
   }
      


       

      

      
       
      });

    

 

 




 console.log(this.pedidosNew);



 


    
  




  }

 getPedidosCulminados(){
  const path = 'pedidos';
  
let startAt = null;

 if(this.pedidosCul.length){

   startAt = this.pedidosCul[this.pedidosCul.length -1].fecha;
 }
this.culminadoSuscriber =  this.firestoreSvc.getCollectionAll<Pedido>(path, 'estado','==','entregado',startAt).subscribe(res => {



  if(res.length){
    res.forEach( pedido => {
 

     this.pedidosCul.push(pedido);
    });

console.log(this.pedidosCul);







  }

});





}



getPedidosCamino(){
  const path = 'pedidos';
  
let startAt = null;

 if(this.pedidosCamino.length){

   startAt = this.pedidosCamino[this.pedidosCamino.length -1].fecha;
 }
this.caminoSuscriber =  this.firestoreSvc.getCollectionAll<Pedido>(path, 'estado','==','camino',startAt).subscribe(res => {



  if(res.length){
    res.forEach( pedido => {
 
     this.pedidosCamino.push(pedido);
    })

console.log(this.pedidosCamino);







  }

});





}
 




  cargarNuevos(){
  
    
  

      this.getPedidosNuevos();

     
  
  


  }

  cargarCulminados(){
  
    
  

    this.getPedidosCulminados();




}


cargarCaminos(){
  
    
  

  this.getPedidosCamino();




}



cambiarEstado(pedido: Pedido){




  let position = 0;
  const item =   this.pedidosNew.find((productoPedido, index)  => {

   position = index;

  
  
    return (productoPedido.id == pedido.id);
     

 

 });

 if(item !== undefined){

 

 item.estado = this.rol;

 if(item.estado == 'camino'){
 this.sendProductSvc.sendEstadoProduct(item).subscribe(() => 
 
 console.log('producto mandado')
 );
}



 const id = item.cliente.id;

 const path1 = 'pedidos';
 const path = `clientes/${id}/${path1}`;

 this.firestore.createDoc(item,path,item.id).then(() => {
    

  console.log('añadido con exito');
  
  

  });
  
 
 }else{
   console.log('error');


  }


  
  let position1 = 0;
  const item1 =   this.pedidosCamino.find((productoPedido, index)  => {

   position1 = index;

  
  
    return (productoPedido.id == pedido.id);
     

 

 });

 if(item1 !== undefined){

  console.log()

 item1.estado = this.rol;


 if(item.estado == 'entregado'){
  this.sendProductSvc.sendEntregadoProduct(item).subscribe(() => 
  
  console.log('producto entregado'));
  
   }

 const id1 = item1.cliente.id;

 

 const path2 = 'pedidos';
 const path1 = `clientes/${id1}/${path2}`;





 this.firestore.createDoc(item1,path1,item1.id).then(() => {

  
  console.log('añadido con exito');
  

  });
  
 
 }else{
   console.log('error');


  }


}

productoP(pedido: Pedido){

  



this.pedidoCalificarService.setPedido(pedido);
  
  this.messageService.sendMessageCalificar(pedido).subscribe( () => {

    console.log('message mandado');



  });



 

}


}

