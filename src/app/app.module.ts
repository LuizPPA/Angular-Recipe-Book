import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { AuthModule } from './auth/auth.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
