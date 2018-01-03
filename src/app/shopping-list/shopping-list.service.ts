import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter} from '@angular/core';

export class ShoppingListService{
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(data:Ingredient){
        this.ingredients.push(data);
        this.ingredientChanged.emit();
    }

    newIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit();
    }

    ingredientChanged = new EventEmitter();
}