import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers:[AuthService]
})
export class ChangePasswordComponent implements OnInit {

  
  constructor(private authSvc: AuthService,private http: Router) { }

  ngOnInit(): void {
  }

  onReset(email){

   this.authSvc.resetPassword(email.value);
  
   Swal.fire('Email sent, check your inbox!')
  
   

    this.http.navigate(['/login'])
}


}