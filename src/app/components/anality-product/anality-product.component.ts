import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { UserService } from '@app/shared/services/user.service';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-anality-product',
  templateUrl: './anality-product.component.html',
  styleUrls: ['./anality-product.component.scss']
})
export class AnalityProductComponent implements OnInit {

  user: User;
  public contador: number = 0;
  public vector: string[] = [];
  pos: number[] = [];
  posi: number = 0;

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = []; 
  
  public doughnutChartType: ChartType = 'doughnut';
  
  
  


  constructor(private userSvc: UserService, private firestoreSvc: AuthCrudService) { 

    this.user = userSvc.getAnality();
  }

  ngOnInit(): void {

    this.doughnutChartLabels = [''];
    this.doughnutChartData = [];
    
    this.product();
  }

  product(){

    const path = `clientes/${this.user.id}/pedidos`;

    this.firestoreSvc.getPedidos(path).subscribe(pedidos => {

      
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


  while( this.posi < this.doughnutChartLabels.length) {

    this.contador = 0;

    for (let index1 = 0; index1 < pedidos.length; index1++) {

      for (let index2 = 0; index2 < pedidos[index1].productos.length; index2++) {
        
        if(pedidos[index1].productos[index2].producto.tipo_producto  == this.doughnutChartLabels[this.posi]){

             this.contador += pedidos[index1].productos[index2].cantidad;

            
        }

        
      }
     
      
    }


    this.doughnutChartData[this.posi] = [this.contador];

    this.posi++;
   
    
  }
});   


  
  

       
    

    
    
    
}

}


 
  
  
