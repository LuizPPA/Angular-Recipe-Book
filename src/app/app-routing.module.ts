import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeBookComponent } from './recipe-book/recipe-book.component'
import { ShopListComponent } from './shop-list/shop-list.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component'
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, pathMatch: 'full'},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shop', component: ShopListComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
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
