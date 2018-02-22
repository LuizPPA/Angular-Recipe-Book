import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { Recipe } from '../recipe.model'
import { RecipeBookService } from '../recipe-book.service'
import { AuthService } from '../../user-actions/auth.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = []
  recipes: Recipe[]

  constructor(private recipeBookService: RecipeBookService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private auth: AuthService){}

  ngOnInit(){
    this.recipes = this.recipeBookService.getRecipes()
    this.subscriptions.push(this.recipeBookService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    }))
  }

  new(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute})
  }

  logged(): boolean {
    return this.auth.isLogged()
  }

  ngOnDestroy(){
    for(let subscription of this.subscriptions){
      subscription.unsubscribe()
    }
  }
}
