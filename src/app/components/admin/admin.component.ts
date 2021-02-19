import { Component, OnInit } from '@angular/core';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Vendedor } from '@app/shared/models/vendedor';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
public opened = false;
  constructor() { 

    
  }

  ngOnInit(): void {

 
  
  }
}
