import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'

const authRoutes: Routes = [
    {path: 'login', component: SignInComponent},
    {path: 'signup', component: SignUpComponent}
  ]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule{

}
