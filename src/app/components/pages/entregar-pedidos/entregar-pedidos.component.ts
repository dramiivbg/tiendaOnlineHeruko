import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { Domiciliario } from '@app/shared/models/domiciliario';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';

@Component({
  selector: 'app-entregar-pedidos',
  templateUrl: './entregar-pedidos.component.html',
  styleUrls: ['./entregar-pedidos.component.scss']
})
export class EntregarPedidosComponent implements OnInit {


  uid = ''

  pedidos: Pedido[] =[];
  constructor(private authSvc: AuthService,
     private firestoreSvc: AuthCrudService) {

   
  }

  ngOnInit(): void {

    this.getPedidos();
  }


  getPedidos(){


    const path = 'domiciliarios';

  
    this.authSvc.afAuth1.user
    .subscribe(domini => {
 
      this.uid = domini.uid

     

    
    this.firestoreSvc.getDoc<Domiciliario>(path,this.uid).subscribe(domiciliarios => {



      for (let index = 0; index < domiciliarios.pedidos.length; index++) {
      

           this.pedidos[index] = domiciliarios.pedidos[index];

           
        
      }
    })

  });
  }

  eliminar(pedido: Pedido){

    this.authSvc.afAuth1.user
    .subscribe(domini => {
 
      this.uid = domini.uid

    let position = 0;
    const item =   this.pedidos.find( (productoPedido, index) => {
  
      position = index;
       return (productoPedido.id == pedido.id);
      });
    
      if(item !== undefined){
    
       this.pedidos.splice(position, 1);

       const path = 'domiciliarios'

       this.firestoreSvc.getDoc<Domiciliario>(path, this.uid).subscribe( domini => {

       
    let position = 0;
    const item1 =   domini.pedidos.find( (Pedido, index) => {
  
      position = index;
       return (Pedido.id == pedido.id);
      });
    
      if(item1 !== undefined){
    
       domini.pedidos.splice(position, 1);

       

       this.firestoreSvc.createD(domini,path,domini.id).then(() => {

        console.log('eliminado');

        const path1 = `clientes/pedidos/${item1.cliente.id}`;



      item1.estado = 'entregado';

 this.firestoreSvc.createDoc(item1,path1,item1.id).then(() => {

  
  console.log('añadido con exito');
  

  });

       });
      
      
      }


       });
      
      
      }
  
    });
  
  }
}
