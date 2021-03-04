import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-anality-clients',
  templateUrl: './anality-clients.component.html',
  styleUrls: ['./anality-clients.component.scss']
})
export class AnalityClientsComponent implements OnInit {


  user$: Observable<User[]>;

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = []; 
  
  public doughnutChartType: ChartType = 'doughnut';
  
  
  

  constructor(private firestoreSvc: AuthCrudService) {


this.user$ = this.firestoreSvc.getUsers();



 
   }

  ngOnInit(): void {

    this.getAllClient();
    
}

getAllClient(){

  this.user$.subscribe(user => {
    for (let index = 0; index < user.length; index++) {

      this.doughnutChartLabels[index] = user[index].name;
     
    
    

      const path = `clientes/${user[index].id}/pedidos`

      this.firestoreSvc.getPedidos(path).subscribe(pedido => {

        

      if(pedido.length){



      
        this.doughnutChartData[index] = [pedido.length];
     
   
      
    
     
    
  }

        
      });
  
    
    
        
        
    
    
    }

  });

    
}

}