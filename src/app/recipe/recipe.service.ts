import { Injectable, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Router } from '@angular/router'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { AuthService } from '../auth/auth.service'
import { CookieService } from 'ngx-cookie-service'
import 'rxjs/add/operator/map'

@Injectable()
export class RecipeService implements OnInit{
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

  constructor(private http: Http, private router: Router, private auth: AuthService, private cookies: CookieService){
    this.updateList()
  }

  ngOnInit(){
  }

  addOnDatabase(recipe: Recipe){
    this.http.post('https://udemy-angular-88cef.firebaseio.com/recipes.json?auth='+this.cookies.get('token'), recipe).subscribe((response: Response) => {
    })
  }

  updateDatabase(){
    return this.http.put('https://udemy-angular-88cef.firebaseio.com/recipes.json?auth='+this.cookies.get('token'), this.recipes)
  }

  updateList(){
    this.http.get('https://udemy-angular-88cef.firebaseio.com/recipes.json')
      .map((response: Response) => {
        let recipes: Recipe[] = response.json()
        for (let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = []
          }
        }
        return recipes
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes
        this.recipesChanged.next(this.getRecipes())
      })
  }

  add(recipe: Recipe){
    this.recipes.push(recipe)
    this.updateDatabase().subscribe((response: Response) => {
      if(response.ok){
        this.recipesChanged.next(this.getRecipes())
      }
      else{
        this.router.navigate(['/recipes'])
      }
    })
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
    this.updateDatabase().subscribe((response: Response) => {
      if(response.ok){
        this.recipesChanged.next(this.getRecipes())
      }
      else{
        this.router.navigate(['/recipes'])
      }
    })
  }

  remove(i: number){
    this.recipes.splice(i, 1)
    this.updateDatabase().subscribe((response: Response) => {
      if(response.ok){
        this.recipesChanged.next(this.getRecipes())
      }
      else{
        this.router.navigate(['/recipes'])
      }
    })
  }
}
