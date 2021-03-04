import { Component, OnInit } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos-mas-vendidos',
  templateUrl: './productos-mas-vendidos.component.html',
  styleUrls: ['./productos-mas-vendidos.component.css']
})
export class ProductosMasVendidosComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
 private product$: Observable<Pedido[]>
 public contador: number = 0;
 public vector: string[] = [];
 pos: number[] = [];
 posi: number = 0;
  public barChartData: ChartDataSets[] = [
   
   {data: [], label: 'pedidos'}
  ];



  constructor(private firestoreSvc: AuthCrudService) {
const path = 'pedidos'

this.product$ = this.firestoreSvc.getPedidosAll(path);



 
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
        }} 
  
       
      }
  
     

    this.vector.find( producto => {

      if(producto != ''){

        this.barChartLabels.push(producto);
  
      }
    });


    while( this.posi < this.barChartLabels.length) {

      for (let index1 = 0; index1 < pedidos.length; index1++) {

        for (let index2 = 0; index2 < pedidos[index1].productos.length; index2++) {
          
          if(pedidos[index1].productos[index2].producto.tipo_producto  == this.barChartLabels[this.posi]){

               this.contador += pedidos[index1].productos[index2].cantidad;

              
          }

          
        }
       
        
      }

      this.posi++;
     
      
    }
  });   

  
    
    

         
      

      
      
      
  

  }

}

