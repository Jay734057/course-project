import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";
// import { EventEmitter} from '@angular/core';

export class ShoppingListService{
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(data:Ingredient){
        this.ingredients.push(data);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    newIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    ingredientChanged = new Subject<Ingredient[]>();
}