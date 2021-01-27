import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-targeta',
  templateUrl: './select-targeta.component.html',
  styleUrls: ['./select-targeta.component.scss']
})
export class SelectTargetaComponent implements OnInit {
  public opened = false;
  public filterProduct = '';
  public  appName = 'ngOnline';

  foods: Food[] = [
    {value: 'cedula', viewValue: 'Cc'},
    {value: 'targeta_identida', viewValue: 'Ti'},
  
  ];
  constructor(private authSvc: AuthService) { }



  ngOnInit(): void {
  }


  onlogout(): void{

    this.authSvc.logout();





  }

}
