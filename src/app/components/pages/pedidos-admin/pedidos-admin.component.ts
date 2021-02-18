import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '@app/components/auth/auth.service';
import { Vendedor } from '@app/shared/models/vendedor';
import { DataService } from '@app/shared/services/data.service';
import { ContadorService } from '@app/shared/services/contador.service';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.scss']
})
export class PedidosAdminComponent implements OnInit {



  newSuscriber: Subscription;

 datoCliente: User[] = [];


  culminadoSuscriber: Subscription;
   uid = '';
 
   pedidosNew: Pedido[] = [];
   pedidosCul: Pedido[] = [];

 
 




   culminados: boolean = false;
   nuevos: boolean = true;





  constructor(private firestoreSvc: AuthCrudService,
    private firesore: AngularFirestore,
    private authSvc: AuthService,private router: Router,
    private firestore: AuthCrudService,
    private dataSvc: ContadorService) {

      authSvc.afAuth.user.subscribe(res => {

        this.uid = res.uid;


      })
     };

  ngOnInit() {


  
    
    this.userActive();

   this.getPedidosNuevos();

   
  };

 

 


  userActive(){

      
    this.authSvc.getCurrentUser().then(res1 => {
  
    
  
      if(res1 == null){
  
        this.router.navigate(['/home']);
        
        
      }else{
        this.comprobarUser(res1.uid);
      }

    });
   
  }


  comprobarUser(id: string){

 

    const path = 'vendedores';

      this.firestore.getDoc<Vendedor>(path,id).subscribe(res => {
  
  
  
        if(res != null){
  
        this.router.navigate(['/pedidos']);
  
          
        }else{
  
          this.router.navigate(['/home']);
  
        }
         
        
  
        
        
        
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

    this.culminados = true;
    this.nuevos = false;
    

 
    console.log('change()', $event.value);
   
   
   this.getPedidosCulminados();
  
    
  }


  change1($event: any){

    this.culminados = false;
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
 this.newSuscriber =  this.firestoreSvc.getCollectionAll<Pedido>(path, 'estado','==','enviado',startAt).subscribe(res => {


 


    if(res.length){
      res.forEach( pedido => {
   
      
       this.pedidosNew.push(pedido);
       
      })



  const  fecha =     this.pedidosNew[this.pedidosNew.length -1].fecha;

  const fecha1 = new Date(parseInt(fecha.seconds)*1000);

 

 



  const date = new Date();

     if( fecha == date){
   
      contador++;
   
     }
   
     console.log('hora1',date);
     console.log('hora2', fecha1 );


   this.dataSvc.setContador(contador);
   this.dataSvc.getContador();


 console.log(this.pedidosNew);



 



    }

 })


  }

 getPedidosCulminados(){
  const path = 'pedidos';
  
let startAt = null;

 if(this.pedidosCul.length){

   startAt = this.pedidosCul[this.pedidosCul.length -1].fecha;
 }
this.newSuscriber =  this.firestoreSvc.getCollectionAll<Pedido>(path, 'estado','==','entregado',startAt).subscribe(res => {



  if(res.length){
    res.forEach( pedido => {
 
     this.pedidosCul.push(pedido);
    })

console.log(this.pedidosCul);







  }

})





}
 


  cargarNuevos(){
  
    
  

      this.getPedidosNuevos();
  
  


  }

  cargarCulminados(){
  
    
  

    this.getPedidosCulminados();




}

}

