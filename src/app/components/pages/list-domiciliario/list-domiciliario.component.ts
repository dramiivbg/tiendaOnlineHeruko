import { Component, OnInit } from '@angular/core';
import { Domiciliario } from '@app/shared/models/domiciliario';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { DataService } from '@app/shared/services/data.service';
import { SendProductService } from '@app/shared/services/sendProduct';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-domiciliario',
  templateUrl: './list-domiciliario.component.html',
  styleUrls: ['./list-domiciliario.component.scss']
})
export class ListDomiciliarioComponent implements OnInit {

  public domini$: Observable<Domiciliario[]>;

  public pedido: Pedido;

  constructor(private dominiSvc: AuthCrudService, private dataSe: DataService,
    private sendProductService: SendProductService) {

    this.domini$ = dominiSvc.getDomici();

   this.pedido = dataSe.getPedido();

   }

  ngOnInit(): void {




  }


  guardar(data: Domiciliario){


    data.pedidos.push(this.pedido);

    const path = 'domiciliarios';
    this.dominiSvc.createD(data,path,data.id).then(() => {

   

       
  this.sendProductService.sendEstadoProduct(this.pedido).subscribe(() => {

    

  });

  Swal.fire('notification sent successfully')

    })

  }

}
