import { Component,AfterViewInit, OnInit,ViewChild } from '@angular/core';
import { from } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../models/product.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ProductService} from '../../../components/posts/product.service';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from './../modal/modal.component';
import { AuthService } from '@app/components/auth/auth.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { Data } from '@angular/router';
import { DataService } from '@app/shared/services/data.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Domiciliario } from '@app/shared/models/domiciliario';
import { ModalDomiciComponent } from '../modal-domici/modal-domici.component';
import { ModalEditDomiciComponent } from '../modal-edit-domici/modal-edit-domici.component';
import { DomiciliarioService } from '@app/shared/services/domiciliario.service';

@Component({
  selector: 'app-table-domiciliario',
  templateUrl: './table-domiciliario.component.html',
  styleUrls: ['./table-domiciliario.component.scss']
})
export class TableDomiciliarioComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido','correo','telefono','actions'];
  dataSource = new MatTableDataSource<Domiciliario>();


 public uid = '';
 
  @ViewChild(MatPaginator,{static: true})paginator: MatPaginator;
  @ViewChild(MatSort,{static:true})sort: MatSort;
  constructor(private authCrudService: AuthCrudService, public dialog: MatDialog,
    private authSvc: AuthService,
    private data: DomiciliarioService){


  
  
  }

  ngOnInit(): void {
  
   



      
       this.authCrudService.getDomici()
       .subscribe(domici => (this.dataSource.data = domici));
      
  
     
       
     
      
      
      




  }

  ngAfterViewInit(){

    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  


  oneEditPost(domiciliario: Domiciliario){


    this.data.setDomiciliario(domiciliario);

   this.oneditDialog();
}

oneDeletePost(domiciliario: Domiciliario){
  Swal.fire({

    title:'Are you sure',
    text:`You won't be able to revert this!`,
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText:'Yes, delete it!'
  }).then(result => {

    if(result.value){

      
const path = 'domiciliarios';
      this.authCrudService.deleteDoc(path, domiciliario.id).then(() => {

        Swal.fire('Deleted!, Your domiciliario has been deleted.','sucessfull');
        
      }).catch((error) => {

        Swal.fire('Error!, There was an error deleting this  domiciliario','error');
      })
      
    }
  });
}

onNewPost(){

  this.onpenDialog();
 
}

onpenDialog(): void{

  const dialogRef= this.dialog.open(ModalDomiciComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  })
}


oneditDialog(): void{

  const dialogRef= this.dialog.open(ModalEditDomiciComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  });
}

}
