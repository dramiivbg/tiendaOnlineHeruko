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

  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  pedido$: Observable<Pedido[]>;
  label: string[] = ['venta global'];
  data: number[] = [];
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
      this.data.push(this.sumaTotal);


    this.single = [
      {
        "name": this.label,
        "value": this.data[0]
    }
    ]
      
    });

  }

  onSelect(event) {
    console.log(event);
  }


}
