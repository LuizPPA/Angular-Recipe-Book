import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { Ingredient } from './../shared/ingredient.model'
import { ShopListService } from './shop-list.service'

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = []
  subscriptions: Subscription[] = []

  constructor(private shopListService: ShopListService){}

  ngOnInit(){
    this.ingredients = this.shopListService.getIngredients()
    this.subscriptions.push(this.shopListService.ingredientsChanged.subscribe(() => {
      this.ingredients = this.shopListService.getIngredients()
    }))
  }

  onEdit(id: number){
    this.shopListService.edit(id)
  }

  ngOnDestroy(){
    for(let subscription of this.subscriptions){
      subscription.unsubscribe()
    }
  }

}
