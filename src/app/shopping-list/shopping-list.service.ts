import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',5),
        new Ingredient('Apple',3)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(data:Ingredient){
        this.ingredients.push(data);
        this.ingredientChanged.emit();
    }

    ingredientAdded = new EventEmitter<Ingredient>();
    ingredientChanged = new EventEmitter();
}