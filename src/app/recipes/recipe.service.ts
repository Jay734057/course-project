import { Injectable } from '@angular/core'
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Spaghetti Marinara', 
            'Italian food',
            'https://c1.staticflickr.com/2/1042/946361888_5d30eb509a_b.jpg',
            [ 
                new Ingredient('Spaghetti', 500),
                new Ingredient('Seafood',500)
            ]
        ),
        new Recipe(
            'Chicken Parma', 
            'Vegetatian',
            'https://c1.staticflickr.com/7/6221/6293226692_f957a16d37_b.jpg',
            [
                new Ingredient('Chicken Breast', 500),
                new Ingredient('Sauce',200)
            ]
        )    
    ];

    constructor(private shoppingListService:ShoppingListService){}


    getRecipes() {
        return this.recipes.slice();
    }
    
    getRecipe(index: number) {
        // const recipe = this.recipes.find(
        //     (s) => {
        //       return s.id === id;
        //     }
        //   );
        //   return recipe;
        return this.recipes[index];
    }
    
    // selectedRecipe = new EventEmitter<Recipe>();

    addNewIngredient(ingredients:Ingredient[]){
        this.shoppingListService.newIngredients(ingredients);
    }
}