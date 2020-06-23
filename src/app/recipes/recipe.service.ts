import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
    new Recipe('Pasta','Spaghetti vegetable pasta', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('mushroom',30)
    ]),
    new Recipe('Pizza','Four cheese pepperoni pizza','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
    [
      new Ingredient('Cheese',1),
      new Ingredient('Olives',50)
    ]
    ),
    new Recipe('Chicken Curry','A Healthy chicken curry','https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg',
    [
      new Ingredient('Chicken',1),
      new Ingredient('Tomatoes',2)
    ]
    )

  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
  }

    getRecipe(index: number) {
      return this.recipes[index];
    }

}