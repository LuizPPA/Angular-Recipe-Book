import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { RecipeBookComponent } from './recipe-book/recipe-book.component'
import { RecipeBookService } from './recipe-book/recipe-book.service'
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component'
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component'
import { ShopListComponent } from './shop-list/shop-list.component'
import { ShopListService } from './shop-list/shop-list.service'
import { ShopListEditComponent} from './shop-list/shop-list-edit/shop-list-edit.component'
import { DropdownDirective } from './shared/dropdown.directive'
import { NotFoundComponent } from './not-found/not-found.component'
import { HomeComponent } from './home/home.component'
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    ShopListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShopListEditComponent,
    DropdownDirective,
    NotFoundComponent,
    HomeComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RecipeBookService, ShopListService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
