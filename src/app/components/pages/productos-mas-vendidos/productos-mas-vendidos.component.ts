import { Component, OnInit } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';


import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos-mas-vendidos',
  templateUrl: './productos-mas-vendidos.component.html',
  styleUrls: ['./productos-mas-vendidos.component.css']
})
export class ProductosMasVendidosComponent implements OnInit {

 private product$: Observable<Pedido[]>
 public contador: number = 0;
 public vector: string[] = [];
 pos: number[] = [];
 posi: number = 0;

 public doughnutChartLabels: Label[] = [];
 public doughnutChartData: MultiDataSet = [

 ];
 public doughnutChartType: ChartType = 'doughnut';


  constructor(private firestoreSvc: AuthCrudService) {

this.product$ = this.firestoreSvc.getPedidosAll<Pedido>();



 
   }

  ngOnInit(): void {

    this.getAllClient();
    
}

getAllClient(){

  this.product$.subscribe(pedidos => {


    for (let index = 0; index < pedidos.length; index++) {
      
  
        for (let index1 = 0; index1 < pedidos[index].productos.length; index1++) {

          const nombre = pedidos[index].productos[index1].producto.tipo_producto;

           this.vector.push(nombre);
            
              }
      
    }


    for (let index = 0; index < this.vector.length; index++) {
   
      for (let index1 = 1+index; index1 <=this.vector.length; index1++) {
  
        if(this.vector[index] == this.vector[index1]){
  
          this.vector[index1] = '';
        }
      } 
  
       
      }
  
     

    this.vector.find( producto => {

      if(producto != ''){

        this.doughnutChartLabels.push(producto);

        
  
      }
    });

   

  


    for (this.posi = 0; this.posi < this.doughnutChartLabels.length; this.posi++) {
     
      
    

   

      for (let index1 = 0; index1 < pedidos.length; index1++) {

        for (let index2 = 0; index2 < pedidos[index1].productos.length; index2++) {
          
          if(pedidos[index1].productos[index2].producto.tipo_producto  == this.doughnutChartLabels[this.posi]){

               this.contador += pedidos[index1].productos[index2].cantidad;

              
              
          }

         

          
        }

        
       
      }

   
      this.doughnutChartData[this.posi] = [this.contador];

      
   
      

    

      this.contador = 0;

    

    
    
     
      
    }
  });   

  
    
    

         
      
this.doughnutChartData = [];
this.doughnutChartLabels = [];
      
      
      
  

  }


onSelect(event) {
  console.log(event);
}
}

