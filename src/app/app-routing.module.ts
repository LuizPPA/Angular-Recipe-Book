import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeComponent } from './recipe/recipe.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component'
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent}
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}
