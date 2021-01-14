import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {UserI} from '../../shared/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
