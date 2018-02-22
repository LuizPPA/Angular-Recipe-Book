import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './../auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  })

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  signUp(){
    this.auth.signup(this.signUpForm.value.email, this.signUpForm.value.password)
    this.router.navigate(['/'])
  }

}
