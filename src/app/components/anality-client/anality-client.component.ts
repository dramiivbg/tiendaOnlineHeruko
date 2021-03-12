import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalActiveComponent } from '@app/shared/components/modal-active/modal-active.component';

@Component({
  selector: 'app-anality-client',
  templateUrl: './anality-client.component.html',
  styleUrls: ['./anality-client.component.css']
})
export class AnalityClientComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  onDialogActive(){


  const dialogRef= this.dialog.open(ModalActiveComponent);
  dialogRef.afterClosed().subscribe(result => {

    console.log(`Dialog result ${result}`);
  });
  }

}
