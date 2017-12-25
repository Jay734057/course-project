import { EventEmitter } from '@angular/core'
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pasta', 'Italian food','https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg'),
        new Recipe('Salad', 'Vegetatian','https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg')    
      ];

    getRecipes() {
        return this.recipes.slice();
    }
    
    selectedRecipe = new EventEmitter<Recipe>();

}