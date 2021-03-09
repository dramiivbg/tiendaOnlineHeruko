import { Injectable } from '@angular/core';
import { Encuesta } from '../models/encuesta';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User: User;
  user: User;
  constructor() { }


  setUser(User: User){

    this.User = User;
  }

  getUser(){

    return this.User;
  }

  setUserEncuesta(user: User){

    this.user = user;
    
  }

  getUserEncuesta(){

    return this.user;
  }
}
