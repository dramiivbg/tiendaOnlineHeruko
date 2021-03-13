import { Component, OnInit } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ventas-reales',
  templateUrl: './ventas-reales.component.html',
  styleUrls: ['./ventas-reales.component.scss']
})
export class VentasRealesComponent implements OnInit {

  pedido$: Observable<Pedido[]>;
  sumaTotal: number = 0;
  public contador: number = 0;
  public vector: string[] = [];
  pos: number[] = [];
  posi: number = 0;
  public doughnutChartLabels: Label[] = ['venta Global'];
  public doughnutChartData: MultiDataSet = []; 
  
  public doughnutChartType: ChartType = 'doughnut';
  
  
  
  constructor(private pedidosSvc: AuthCrudService
  ) {

    this.pedido$ = pedidosSvc.getPedidosAll();


  }
  ngOnInit(): void {

    this.totalVentas();
  
  }


  totalVentas(){

    this.pedido$.subscribe(pedidos => {


      for (let index = 0; index < pedidos.length; index++) {
      
        this.sumaTotal+= pedidos[index].precioTotal;

        // var fecha1 = String(pedidos[index].fecha.seconds * 1000);



    
        // const  fecha = new Date(parseInt(fecha1));

        // console.log(fecha.getDay()+'/'+(1+fecha.getMonth())+'/'+fecha.getFullYear());

      }

   


      this.doughnutChartData[0] = [this.sumaTotal];
    });
  }


}
