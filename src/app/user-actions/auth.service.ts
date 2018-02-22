import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import * as firebase from 'firebase'
import { CookieService } from 'ngx-cookie-service'

@Injectable()
export class AuthService{

  constructor(private router: Router, private cookies: CookieService){}

  signup(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signin(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  refreshAuth(){
    firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.cookies.set('token', token)
    })
  }

  isLogged(): boolean {
    return this.cookies.check('token')
  }

  logout(){
    this.cookies.delete('token')
    firebase.auth().signOut()
    this.router.navigate(['/'])
  }
}
