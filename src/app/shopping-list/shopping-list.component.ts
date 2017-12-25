import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; 

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',5),
        new Ingredient('Apple',3)
    ];

    constructor(){
        
    }

    OnAdd(data:Ingredient){
        this.ingredients.push(data);
    }
}