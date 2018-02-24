import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeComponent } from './recipe/recipe.component'
import { ShoppingComponent } from './shopping/shopping.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component'
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component'
import { SignInComponent } from './user-actions/sign-in/sign-in.component';
import { SignUpComponent } from './user-actions/sign-up/sign-up.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'login', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'recipes', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, pathMatch: 'full'},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shop', component: ShoppingComponent},
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
