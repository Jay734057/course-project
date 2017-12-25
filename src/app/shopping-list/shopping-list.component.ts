import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; 
import { ShoppingListService } from './shopping-list.service'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{
    ingredients: Ingredient[];

    constructor(private shoppingListService:ShoppingListService){
    }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientAdded.subscribe(
            (ingredient:Ingredient) => {
                this.shoppingListService.addIngredients(ingredient);
                // this.ingredients.push(ingredient);
            }
        );
        this.shoppingListService.ingredientChanged.subscribe(
            () => this.ingredients = this.shoppingListService.getIngredients()
        );
    }

    // OnAdd(data:Ingredient){
    //     this.shoppingListService.addIngredients(data);
    // }
}