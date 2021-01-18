import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '@auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

    const userData = {
      username: 'mosquera',
      password: '782389493',

    };
    this.authSvc.login(userData).subscribe((res => console.log('Login')))
  }

}
