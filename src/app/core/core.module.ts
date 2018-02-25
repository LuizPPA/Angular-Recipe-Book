import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { CoreRoutingModule } from './core-routing.module'
import { HeaderComponent } from './header/header.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { HomeComponent } from './home/home.component'
import { RecipeService } from '../recipe/recipe.service'
import { ShoppingService } from '../shopping/shopping.service'
import { AuthService } from '../auth/auth.service'
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [RecipeService, ShoppingService, AuthService, CookieService]
})

export class CoreModule{}
