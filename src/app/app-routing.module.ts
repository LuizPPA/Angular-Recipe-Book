import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeComponent } from './recipe/recipe.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule'},
    {path: 'shop', loadChildren: './shopping/shopping.module#ShoppingModule'},
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
