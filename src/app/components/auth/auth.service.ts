import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User, UserResponse } from '@app/shared/models/user.interface';
import { catchError, map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';


const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cliente_id:number;
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { 
    this.checkToken();
  }

  header: HttpHeaders = new HttpHeaders({

    "Content-Type": "application/json"
  });

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  //logiar usuario

  login(authData:User):Observable<UserResponse | void>{

    return this.http.post<UserResponse>(`${environment.API_URL}/auth/login`,
     authData).pipe(
       map((res:UserResponse) =>{
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;


}),

       catchError( (err) => this.handlerError(err))
     );   
  }

  setUser(user: User){

    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);

  }

  getToken(){

    return localStorage.getItem("token");
  }


  getCurrentUser(){

    let user_string = localStorage.getItem("currentUser");
    if(!(user_string === null || user_string === undefined)){

      let user = JSON.parse(user_string);
      return user;
}else{

  return null;
}

  }



  registerUser(  username: string, password: string, gmail: string, direccion: string, celular: number, pais: string, role: string){
  
    this.cliente_id++;
     const id = this.cliente_id;

    const url_api = "http://localhost:3000/users";
 
     return this.http.post(url_api,{
       id,
       username,
       password,
       gmail
       ,direccion
       ,celular
       ,pais
       ,role},{
         headers: this.header
       }).pipe(map(data => data));

      }

  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  
  }
  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired->', isExpired);

    isExpired ? this.logout() : this.loggedIn.next(true);
    // if(isExpired){
    //   this.logout();
    // }else{

    //  this.loggedIn.next(true);
    // }
    //set userisLogged = isExpired
  }
  private saveToken(token: string):void{
    localStorage.setItem('token',token);
  }
  
  
  private handlerError(err):Observable<never>{

    let errorMessage = 'An error occured restrienving data';
    if(err){

      errorMessage = `Error: code ${err.message}`;

    }

    window.alert(errorMessage);

    return throwError(errorMessage);
    
    
    

  }

}
