import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {User} from '../../shared/models/user.interface';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {AuthService} from '../../components/auth/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthCrudService {

  Users: Observable<any>;
  User: Observable<any>;

  header: HttpHeaders = new HttpHeaders({

    "Content-Type": "application/json",
     Authorization: this.authService.getToken()
  });
 
  constructor(private http: HttpClient,
     private authService: AuthService) {}

  

  getAllUser(){

    const url_api = "http://localhost:3000/users";
    return this.http.get(url_api);
  }

  
  getUserById(id: number){

    const url_api = `http://localhost:3000/users/${id}`;
    return (this.User = this.http.get(url_api));
  }


  updateUser(user: User){

    let token = this.authService.getToken();

    const url_api = `http://localhost:3000/users?access_token=${token}`;
    return (this.User = this.http.patch<User>(url_api, user,{headers: this.header}).pipe(
      data => data
    ));

  }
  

  deleteUser(id: number){

    let token  = this.authService.getToken();

    const url_api = `http://localhost:3000/users?access_token=${token}`;
    return (this.User = this.http.delete<User>(url_api,{headers: this.header}).pipe(
      data => data
    )); 
  }


 

        
 
  

}
