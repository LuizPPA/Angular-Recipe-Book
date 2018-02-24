import { NgModule } from '@angular/core'
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { SharedModule } from './../shared/shared.module'
import { ShoppingRoutingModule } from './shopping-routing.module'
import { ShoppingComponent } from './shopping.component'
import { ShopListEditComponent } from './shop-list-edit/shop-list-edit.component'

@NgModule({
  declarations:[
    ShoppingComponent,
    ShopListEditComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    SharedModule,
    ShoppingRoutingModule
  ],
  exports: [

  ]
})
export class ShoppingModule{

}
