import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '@app/components/auth/auth.service';
import { ProductService } from '@app/components/posts/product.service';
import { Vehiculo } from '@app/shared/models/vehiculo';
import { DataService } from '@app/shared/services/data.service';
import { VehiculoService } from '@app/shared/services/vehiculo.service';
import Swal from 'sweetalert2';
import { ModalEidtVehiculoComponent } from '../modal-eidt-vehiculo/modal-eidt-vehiculo.component';
import { ModalVehiculoComponent } from '../modal-vehiculo/modal-vehiculo.component';

@Component({
  selector: 'app-table-vehiculo',
  templateUrl: './table-vehiculo.component.html',
  styleUrls: ['./table-vehiculo.component.scss']
})
export class TableVehiculoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'marca','placa','color','actions'];
  dataSource = new MatTableDataSource<Vehiculo>();


 public uid = '';
 
  @ViewChild(MatPaginator,{static: true})paginator: MatPaginator;
  @ViewChild(MatSort,{static:true})sort: MatSort;
  constructor(private  vehiculoService: VehiculoService, public dialog: MatDialog,
    private authSvc: AuthService,
    private data: DataService){


  
  
  }

  ngOnInit(): void {
  
   



      
       this.vehiculoService.getAllVehiculos()
       .subscribe(vehiculos => (this.dataSource.data = vehiculos));
      
  
     
       
     
      
      
      




  }

  ngAfterViewInit(){

    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  


  oneEditVehiculo(vehiculo: Vehiculo){


    this.data.setVehiculo(vehiculo);

   this.oneditDialog();
}

oneDeleteVehiculo(vehiculo: Vehiculo){
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

      

      this.vehiculoService.deleteVehiculoById(vehiculo).then(() => {

        Swal.fire('Deleted!, Your post has been deleted.','sucessfull');
        
      }).catch((error) => {

        Swal.fire('Error!, There was an error deleting this post','error');
      })
      
    }
  });
}

onNewVehiculo(){

  this.onpenDialog();
 
}

onpenDialog(): void{

  const dialogRef= this.dialog.open(ModalVehiculoComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  })
}


oneditDialog(): void{

  const dialogRef= this.dialog.open(ModalEidtVehiculoComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  })
}



}
