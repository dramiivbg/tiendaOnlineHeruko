import { Component, OnInit } from '@angular/core';
import { Pago } from '@app/shared/models/pago';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Observable } from 'rxjs';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-anality-t',
  templateUrl: './anality-t.component.html',
  styleUrls: ['./anality-t.component.css']
})
export class AnalityTComponent implements OnInit {

  private pagos: Observable<Pago[]>;

  private mes: string;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio','agosto',
'septiembre','octubre','noviembre', 'diciembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
   
  
  ];

  private enero: number = 0;
  private febrero: number = 0;
  private marzo: number = 0;
  private abril: number = 0;
  private mayo: number = 0;
  private junio: number = 0;
  private julio: number = 0;
  private agosto: number = 0;
  private septiembre: number = 0;
  private octubre: number = 0;
  private noviembre: number = 0;
  private diciembre: number = 0;


  constructor(private  firestoreSvc: AuthCrudService) { 

    this.pagos = firestoreSvc.getT();
  }

  ngOnInit(): void {

  
    this.compararTransaccion_dia_dia();
  }


  compararTransaccion_dia_dia(){

    this.pagos.subscribe( pagos => {

      for (let index = 0; index < pagos.length; index++) {
       
        
      
    switch(pagos[index].fecha.split('/')[1]){


      case '1': this.enero++;
       break;

       case '2': this.febrero++;
      
       break;
       case '3': this.marzo++;
      
       break;
       case '4': this.abril++;
      
       break;
       case '5': this.mayo++;
     
       break;
       case '6': this.junio++;
   
       break;
       case '7': this.julio++;
    
       break;
       case '8': this.agosto++;
      
       break;
       case '9': this.septiembre++;
      
       break;
       case '10': this.octubre++;
      
       break;
       case '11': this.noviembre++;
      
       break;
       case '12': this.diciembre++;
      
       break;
      
      
    }
  }

  this.barChartData = [ { data: [this.enero,this.febrero,this.marzo, this.abril, this.mayo, this.junio, 
     this.julio, this.agosto, this.septiembre, this.octubre, this.noviembre, this.diciembre], label: 'transacciones' } ]

  
  });

  }

}
