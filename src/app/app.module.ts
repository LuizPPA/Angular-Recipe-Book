import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from './shared/shared.module'
import { RecipeModule } from './recipe/recipe.module'
import { ShoppingModule } from './shopping/shopping.module'
import { AuthModule } from './auth/auth.module'
import { AppRoutingModule } from './app-routing.module'
import { RecipeService } from './recipe/recipe.service'
import { ShoppingService } from './shopping/shopping.service'
import { AuthService } from './auth/auth.service'
import { CookieService } from 'ngx-cookie-service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    RecipeModule,
    ShoppingModule,
    AuthModule
  ],
  providers: [RecipeService, ShoppingService, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
