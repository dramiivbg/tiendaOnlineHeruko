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

    authSvc.afAuth1.user
    .subscribe(domini => {
 
      this.uid = domini.uid

    });
  }

  ngOnInit(): void {

    this.getPedidos();
  }


  getPedidos(){


    const path = 'domiciliarios';

    this.firestoreSvc.getDoc<Domiciliario>(path,this.uid).subscribe(domiciliarios => {



      for (let index = 0; index < domiciliarios.pedidos.length; index++) {
      

           this.pedidos[index] = domiciliarios.pedidos[index];

           console.log(this.pedidos);
        
      }
    })
  }

}
