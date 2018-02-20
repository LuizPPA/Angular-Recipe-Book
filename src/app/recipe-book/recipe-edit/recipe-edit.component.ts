import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

import { Recipe } from '../recipe.model'
import { Ingredient } from '../../shared/ingredient.model'
import { RecipeBookService } from '../recipe-book.service'
import { AppValidators } from '../../shared/validators'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe
  id: number
  editMode: boolean = false
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required, AppValidators.image]),
    ingredients: new FormArray([])
  })

  constructor(private recipeBookService: RecipeBookService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      if(params['id'] != null){
        this.id = +params['id']
        this.recipe = this.recipeBookService.getRecipe(this.id)
        this.editMode = true
      }
      else {
        this.editMode = false
      }
      if(this.editMode){
        let ingredients = new FormArray([])
        for (let ingredient of this.recipe.ingredients){
          ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, AppValidators.positive])
            })
          )
        }
        this.form = new FormGroup({
          name: new FormControl(this.recipe.name, [Validators.required]),
          description: new FormControl(this.recipe.description, [Validators.required]),
          image: new FormControl(this.recipe.image, [Validators.required, AppValidators.image]),
          ingredients: ingredients
        })
      }
    })
  }

  addIngredient(){
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, AppValidators.positive])
      })
    )
  }

  removeIngredient(i: number){
    (<FormArray>this.form.get('ingredients')).removeAt(i)
  }

  onSubmit(){
    let ingredients: Ingredient[] = []
    for (let ingredientControl of (<FormArray>this.form.get('ingredients')).controls){
      ingredients.push(
        new Ingredient(ingredientControl.value.name, ingredientControl.value.amount)
      )
    }
    if(this.editMode){
      this.recipeBookService.update(this.id, new Recipe(this.form.value.name, this.form.value.description, this.form.value.image, ingredients))
      this.form.reset()
      this.router.navigate(['recipes', this.id])
    }
    else {
      this.recipeBookService.add(new Recipe(this.form.value.name, this.form.value.description, this.form.value.image, ingredients))
      this.form.reset()
      this.router.navigate(['recipes', this.recipeBookService.getLastIndex()])
    }
  }

  cancel(){
    this.form.reset()
    if(this.editMode){
      this.router.navigate(['recipes', this.id])
    }
    else {
      this.router.navigate(['recipes'])
    }
  }

  remove(){
    this.recipeBookService.remove(this.id)
    this.form.reset()
    this.router.navigate(['recipes'])
  }

}
