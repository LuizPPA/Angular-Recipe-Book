import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDuf2LiL2NAbcDks40x3kjCVtp-2nqGUa0",
      authDomain: "udemy-angular-88cef.firebaseapp.com"
    })
  }
}
