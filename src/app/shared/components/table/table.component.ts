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
import { promise } from 'protractor';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['tipo_producto', 'valor','actions'];
  dataSource = new MatTableDataSource<Product>();


 public uid = '';
 
  @ViewChild(MatPaginator,{static: true})paginator: MatPaginator;
  @ViewChild(MatSort,{static:true})sort: MatSort;
  constructor(private productSvc: ProductService, public dialog: MatDialog,
    private authSvc: AuthService,
    private data: DataService){


  
  
  }

  ngOnInit(): void {
  
   



      
       this.productSvc.getAllPosts()
       .subscribe(posts => (this.dataSource.data = posts));
      
  
     
       
     
      
      
      




  }

  ngAfterViewInit(){

    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  


  oneEditPost(product: Product){


    this.data.setProduct(product);

   this.oneditDialog();
}

oneDeletePost(post: Product){
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

      

      this.productSvc.deletePostById(post).then(() => {

        Swal.fire('Deleted!, Your post has been deleted.','sucessfull');
        
      }).catch((error) => {

        Swal.fire('Error!, There was an error deleting this post','error');
      })
      
    }
  });
}

onNewPost(){

  this.onpenDialog();
 
}

onpenDialog(): void{

  const dialogRef= this.dialog.open(ModalComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  })
}


oneditDialog(): void{

  const dialogRef= this.dialog.open(ModalEditComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  });
}





}




