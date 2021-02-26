import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-anality-clients',
  templateUrl: './anality-clients.component.html',
  styleUrls: ['./anality-clients.component.scss']
})
export class AnalityClientsComponent implements OnInit {

  user$: Observable<User[]>;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
   
  
  ];



  constructor(private firestoreSvc: AuthCrudService) {


this.user$ = this.firestoreSvc.getUsers();



 
   }

  ngOnInit(): void {

    this.getAllClient();
    
}

getAllClient(){

  this.user$.subscribe(user => {
    for (let index = 0; index < user.length; index++) {
     console.log(user[index].name);
      this.barChartLabels.push(user[index].name);

      const path = `clientes/${user[index].id}/pedidos`

      this.firestoreSvc.getPedidos(path).subscribe(pedido => {

        console.log(pedido);

      if(pedido.length){

    for (let index = 1 ; index <=pedido.length; index++) {
     
      this.barChartData.push(
        { data: [index] , label: 'Series A'}
        
        );
      
    }
     
    
  }

        
      });
  
    
    
        
        
    
    
    }

  });

    
}

}