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

  single: any[];
  view: any[] = [700, 400];

  // options
  data: number[] = [];
  label: string[] = ['activo','inactivo']
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  
  
  


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

     this.data[0] = this.activo;

     this.data[1] = this.inactivo;

     this.single = [

      {
        "name": this.label[0],
        "value": this.data[0]
      },

      {
        "name": this.label[1],
        "value": this.data[1]
      }
     ]
  
  });



}

onSelect(data): void {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

onActivate(data): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}


}