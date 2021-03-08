import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User: User;
  constructor() { }


  setUser(User: User){

    this.User = User;
  }

  getUser(){

    return this.User;
  }

  
}
