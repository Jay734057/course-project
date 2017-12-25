import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean = true;

  onNavigate(data:string){
    if (data === 'recipes'){
      this.showRecipes = true;
    } else if (data === 'shopping-list'){
      this.showRecipes = false;
    }
  }
}
