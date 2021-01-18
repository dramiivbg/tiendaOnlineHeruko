import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public  appName = 'ngOnline';
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onlogout(): void{

    this.authSvc.logout();




  }

}
