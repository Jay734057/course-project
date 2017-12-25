import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe }  from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pasta', 'Italian food','https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg'),
    new Recipe('Salad', 'Vegetatian','https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg')    
  ];

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetail(recipe:Recipe){
    this.showRecipe.emit(recipe);
  }

}
