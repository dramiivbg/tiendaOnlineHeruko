import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-estado-cliente',
  templateUrl: './estado-cliente.component.html',
  styleUrls: ['./estado-cliente.component.css']
})
export class EstadoClienteComponent implements OnInit {


  user$: Observable<User[]>;

  activo: number = 0;
  inactivo: number = 0;

  public doughnutChartLabels: Label[] = ['activo', 'inactivo'];
  public doughnutChartData: MultiDataSet = []; 
  
  public doughnutChartType: ChartType = 'doughnut';
  
  
  


  constructor(private firestoreSvc: AuthCrudService) { 
    
    this.user$ = this.firestoreSvc.getUsers();
  }

  ngOnInit(): void {

    this.estado();
  }

  estado(){

    this.user$.subscribe(cliente => {

     for (let index = 0; index < cliente.length; index++) {
      
       if(cliente[index].active == true){

        this.activo++;

       }else if(cliente[index].active == false){

        this.inactivo++;


       }


     }

     this.doughnutChartData[0] = [this.activo];

     this.doughnutChartData[1] = [this.inactivo];
  
  });



}

}