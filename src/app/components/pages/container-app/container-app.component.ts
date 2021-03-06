import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';

@Component({
  selector: 'app-container-app',
  templateUrl: './container-app.component.html',
  styleUrls: ['./container-app.component.css']
})
export class ContainerAppComponent implements OnInit {

  uid: string;

  bolean: boolean = false;
  constructor(private authSvc: AuthService, private firestoreSvc: AuthCrudService) { }

  ngOnInit(): void {

  
this.authSvc.afAuth.user.subscribe(user => {

if(user){

  this.uid = user.uid;

  this.Activo(user.uid);

  

}else{
  this.inactivo(this.uid);
  return;
}

});
  
    }




 Activo(id:string){

  


  const path = 'clientes';
this.firestoreSvc.getDoc<User>(path,id).subscribe(cliente => {

 
  cliente.active = true;


  this.firestoreSvc.create<User>(cliente,path,cliente.id).then(() => 
  console.log('user active') );

  
  
});


}
    

  

 inactivo(id: string){


  const path = 'clientes';
this.firestoreSvc.getDoc<User>(path,id).subscribe(cliente => {

 
  cliente.active = false;


  this.firestoreSvc.create<User>(cliente,path,cliente.id).then(() => 
  console.log('user inactivo') );

  
  
});




 }

 }
