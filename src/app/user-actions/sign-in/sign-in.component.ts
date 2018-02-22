import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './../auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  })
  loginFailed: boolean = false

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.auth.signin(this.loginForm.value.email, this.loginForm.value.password)
      .then((response: Response) => {
        this.auth.refreshAuth()
        this.router.navigate(['/'])
      })
      .catch((error: Response) => {
        this.loginFailed = true
      })
    this.loginForm.reset()
  }

}
