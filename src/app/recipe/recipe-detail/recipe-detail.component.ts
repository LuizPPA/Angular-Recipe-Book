import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'
import { ShoppingService } from '../../shopping/shopping.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe
  id: number

  constructor(private recipeBookService: RecipeService,
              private shopListService: ShoppingService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id']
      this.recipe = this.recipeBookService.getRecipe(this.id)
    })
  }

  shopIngredients(){
    this.shopListService.addItens(this.recipe.ingredients)
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute})
  }

  onDelete(){
    this.recipeBookService.remove(this.id)
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }


}
