import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeComponent } from './recipe.component'
import { RecipeStartComponent } from './recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'

const recipeRoutes: Routes = [
    {path: '', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, pathMatch: 'full'},
      {path: ':id/edit', component: RecipeEditComponent}
    ]}
  ]

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipeRoutingModule{

}
