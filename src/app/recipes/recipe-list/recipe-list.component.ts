import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is simply a test", 'https://4.bp.blogspot.com/-pmR4IgIBHbA/V7lsljHdLwI/AAAAAAAAUDk/H7YGG6CMvUwQ0PSG8JN3-9M77-dAR9bYgCLcB/s1600/guacamole_recipe_sq.jpg')
  ];
  
  constructor(){}

  ngOnInIt(){

  }
}
