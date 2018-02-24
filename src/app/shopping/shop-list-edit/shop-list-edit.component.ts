import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { NgForm } from '@angular/forms'

import { ShoppingService } from '../shopping.service'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent{
  @ViewChild('f') form: NgForm
  subscriptions: Subscription[] = []
  editMode: boolean = false
  editingIngredient: Ingredient = null
  editingIngredientId: number = null

  constructor(private shopListService: ShoppingService){}

  ngOnInit(){
    this.subscriptions.push(this.shopListService.editIngredient.subscribe((id: number) => {
      this.editMode = true
      this.editingIngredientId = id
      this.editingIngredient = this.shopListService.get(id)
      this.form.controls.name.setValue(this.editingIngredient.name)
      this.form.controls.amount.setValue(this.editingIngredient.amount)
    }))
  }

  addItem(){
    if(this.form.valid){
      if(this.editMode){
        this.shopListService.update(this.editingIngredientId, {name: this.form.value.name, amount: this.form.value.amount})
        this.form.reset()
      }
      else{
        this.shopListService.addItem({name: this.form.value.name, amount: this.form.value.amount})
        this.form.reset()
      }
    }
  }

  deleteItem(){
    if(this.editingIngredientId !== null){
      this.shopListService.remove(this.editingIngredientId)
      this.editingIngredient = null
      this.editingIngredientId = null
    }
  }

  clearList(){
    this.editMode = false
    this.editingIngredient = null
    this.editingIngredientId = null
    this.form.reset()
  }

  ngOnDestroy(){
    for(let subscription of this.subscriptions){
      subscription.unsubscribe()
    }
  }
}
