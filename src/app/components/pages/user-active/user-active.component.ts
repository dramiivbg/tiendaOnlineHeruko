import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.scss']
})
export class UserActiveComponent implements OnInit {

  userActive:User[] = [];
  constructor(private firestoreSvc: AuthCrudService) { 

    this.active();
  }

  ngOnInit(): void {

 

   
  }

  active(){

    const path= 'clientes';

     this.firestoreSvc.getUsers().subscribe(user => {

      for (let index = 0; index < user.length; index++) {
      
        if(user[index].active == true){

          this.userActive = user;
        }
      }
     });
  
  
  }

}
