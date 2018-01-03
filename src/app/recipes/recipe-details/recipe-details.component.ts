import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
  // @Input() recipe:Recipe;
  recipe:Recipe;

  constructor(private recipeService:RecipeService, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
      }
    );
  }

  OnAddIngredient() {
    this.recipeService.addNewIngredient(this.recipe.ingredients);
  }
}
