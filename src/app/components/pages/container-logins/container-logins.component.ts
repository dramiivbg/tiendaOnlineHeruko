import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';

@Component({
  selector: 'app-container-logins',
  templateUrl: './container-logins.component.html',
  styleUrls: ['./container-logins.component.css']
})
export class ContainerLoginsComponent implements OnInit {

  constructor(private authSvc: AuthService, private firestoreSvc: AuthCrudService) { }

  ngOnInit(): void {


    
  }
  }


