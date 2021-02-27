import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngVentaLibre';
 constructor(){

  firebase.default.initializeApp(environment.firebaseConfig);

 }

}
