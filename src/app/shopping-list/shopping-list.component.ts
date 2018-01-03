import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; 
import { ShoppingListService } from './shopping-list.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy{
    ingredients: Ingredient[];

    constructor(private shoppingListService:ShoppingListService){
    }

    private subscription:Subscription;

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}