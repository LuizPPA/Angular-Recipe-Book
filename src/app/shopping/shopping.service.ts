import { Subject } from 'rxjs/Subject'

import { Ingredient } from './../shared/ingredient.model'

export class ShoppingService{
  ingredientsChanged: Subject<null> = new Subject<null>()
  editIngredient: Subject<number> = new Subject<number>()
  ingredients: Ingredient[] = []

  addItem(item: Ingredient){
    this.ingredients.push(item)
    this.ingredientsChanged.next()
  }

  addItens(itens: Ingredient[]){
    this.ingredients.push(...itens)
  }

  clearList(){
    this.ingredients = []
    this.ingredientsChanged.next()
  }

  edit(id: number){
    this.editIngredient.next(id)
  }

  getIngredients(){
    return this.ingredients.slice()
  }

  get(i: number){
    return this.ingredients[i]
  }

  update(i: number, item: Ingredient){
    this.ingredients[i] = item
    this.ingredientsChanged.next()
  }

  remove(i: number){
    this.ingredients.splice(i, 1)
    this.ingredientsChanged.next()
  }
}
