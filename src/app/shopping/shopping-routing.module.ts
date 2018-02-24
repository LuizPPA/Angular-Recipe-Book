import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingComponent } from './shopping.component'

const shoppingRoutes: Routes = [
    {path: '', component: ShoppingComponent},
  ]

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ShoppingRoutingModule{

}
