import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.component.html',
  styleUrls: ['./medio-pago.component.scss']
})
export class MedioPagoComponent implements OnInit {
  public opened = false;
  public filterProduct = '';
  public  appName = 'ngOnline';
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

   
  }

  onlogout(): void{

    this.authSvc.logout();





  }

}
