import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { SharedModule } from '../shared/shared.module'
import { AuthRoutingModule } from './auth-routing.module'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
  ]
})
export class AuthModule {

}
