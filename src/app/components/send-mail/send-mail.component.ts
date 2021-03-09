import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalMessageComponent } from '@app/shared/components/modal-message/modal-message.component';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { UserService } from '@app/shared/services/user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit,AfterViewInit  {

  displayedColumns: string[] = ['name','apellido', 'correo','telefono','actios'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator,{static: true})paginator: MatPaginator;
  @ViewChild(MatSort,{static:true})sort: MatSort;
  constructor(private firestoreSvc: AuthCrudService, public dialog: MatDialog,
    private userSvc: UserService,
    ){


  
  
  }

  ngOnInit(): void {

    this.firestoreSvc.getUsers()
       .subscribe(users => (this.dataSource.data = users));
      
  }






ngAfterViewInit(){

  this.dataSource.paginator = this.paginator;
  
  this.dataSource.sort = this.sort;

}



applyFilter(filterValue: string) {
    
  this.dataSource.filter = filterValue.trim().toLowerCase();
}  

sendEmail(user: User){

  
  this.userSvc.setUser(user);


  this.oneMessageDialog();

}


sendEncuesta(user: User){

  this.userSvc.setUserEncuesta(user);
  
}
oneMessageDialog(): void{

  const dialogRef= this.dialog.open(ModalMessageComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  })
}


  

}
