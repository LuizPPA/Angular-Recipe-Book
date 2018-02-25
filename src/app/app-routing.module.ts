import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

const appRoutes: Routes = [
    {path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule'},
    {path: 'shop', loadChildren: './shopping/shopping.module#ShoppingModule'},
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}
