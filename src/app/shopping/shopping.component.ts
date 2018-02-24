import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { Ingredient } from './../shared/ingredient.model'
import { ShoppingService } from './shopping.service'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = []
  subscriptions: Subscription[] = []

  constructor(private shopListService: ShoppingService){}

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
