import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { SharedModule } from './../shared/shared.module'
import { AppRoutingModule } from './../app-routing.module'
import { RecipeComponent } from './recipe.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeItemComponent } from './recipe-item/recipe-item.component'
import { RecipeStartComponent } from './recipe-start/recipe-start.component'

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class RecipeModule {

}
