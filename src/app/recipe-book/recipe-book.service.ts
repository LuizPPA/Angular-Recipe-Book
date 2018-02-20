import { Injectable, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'

@Injectable()
export class RecipeBookService implements OnInit{
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>()
  detail: Recipe
  recipes: Recipe[]
  // recipes: Recipe[] = [
  //   {
  //     name: 'Toast',
  //     description: 'Burnt bread',
  //     image: 'http://www.khanakhajana.co.in/137-large_default/toast.jpg',
  //     ingredients: [new Ingredient('Bread', 2), new Ingredient('Butter', 1)]
  //   },
  //   new Recipe(
  //     'Cake',
  //     'A chocolate cake',
  //     'https://dochub.com/api/users/20624171.jpg',
  //     [new Ingredient('Eggs', 4), new Ingredient('Milk', 2), new Ingredient('Chocolate', 4), new Ingredient('Flour', 1)]
  //   )
  // ]

  constructor(private http: Http){
    this.updateList()
  }

  ngOnInit(){
  }

  addOnDatabase(recipe: Recipe){
    this.http.post('https://udemy-angular-88cef.firebaseio.com/recipes.json', recipe).subscribe((response: Response) => {
      console.log(response)
    })
  }

  updateDatabase(){
    this.http.put('https://udemy-angular-88cef.firebaseio.com/recipes.json', this.recipes).subscribe((response: Response) => {
      console.log(response)
    })
  }

  updateList(){
    this.http.get('https://udemy-angular-88cef.firebaseio.com/recipes.json').subscribe((response: Response) => {
      this.recipes = response.json()
      this.recipesChanged.next(this.getRecipes())
    })
  }

  add(recipe: Recipe){
    this.recipes.push(recipe)
    this.updateDatabase()
    this.recipesChanged.next(this.getRecipes())
  }

  getRecipes(){
    return this.recipes
  }

  getRecipe(i: number){
    return this.recipes[i]
  }

  getLastIndex(){
    return this.recipes.length-1
  }

  update(i: number, recipe: Recipe){
    this.recipes[i] = recipe
    this.updateDatabase()
    this.recipesChanged.next(this.getRecipes())
  }

  remove(i: number){
    this.recipes.splice(i, 1)
    this.recipesChanged.next(this.getRecipes())
  }
}
