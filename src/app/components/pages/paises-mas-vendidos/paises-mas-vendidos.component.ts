import { Component, OnInit } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paises-mas-vendidos',
  templateUrl: './paises-mas-vendidos.component.html',
  styleUrls: ['./paises-mas-vendidos.component.css']
})
export class PaisesMasVendidosComponent implements OnInit {

  pedido$: Observable<Pedido[]>;
  sumaTotal: number = 0;
  public contador: number = 0;
  public vector: string[] = [];
  pos: number[] = [];
  posi: number = 0;
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = []; 
  
  public doughnutChartType: ChartType = 'doughnut';
  
  
  constructor(private pedidosSvc: AuthCrudService
    ) {
  
      this.pedido$ = pedidosSvc.getPedidosAll();
  
  
    }

  ngOnInit(): void {

    this.getPais();
  }


getPais(){

  this.pedido$.subscribe( paises => {
  
  
    for (let index = 0; index < paises.length; index++) {
        
   
        const nombre = paises[index].cliente.pais;
  
         this.vector.push(nombre);
          
            
    
  }
  
  
  for (let index = 0; index < this.vector.length; index++) {
  
    for (let index1 = 1+index; index1 <=this.vector.length; index1++) {
  
      if(this.vector[index] == this.vector[index1]){
  
        this.vector[index1] = '';
      }
    } 
  
     
    }
  
   
  
  this.vector.find( pais => {
  
    if(pais != ''){
  
      this.doughnutChartLabels.push(pais);
  
    }
  });
  
  
  while( this.posi < this.doughnutChartLabels.length) {
  
    this.contador = 0;
  
    for (let index1 = 0; index1 < paises.length; index1++) {
  
      
        
        if(paises[index1].cliente.pais  == this.doughnutChartLabels[this.posi]){
  
             this.contador ++;
  
            
        }
  
        
      
     
      
    }
  
  
    this.doughnutChartData[this.posi] = [this.contador];
  
    this.posi++;
   
    
  }
  });   
  
  
  
  
  
       
    
  
    
    
    
  
  
  
  }
  
  

}
