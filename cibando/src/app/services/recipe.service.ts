
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from './../mocks/recipes.mock';
import { Observable,of } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl="api/recipes";

  wantedRicetta= new ReplaySubject();

  constructor(private http: HttpClient) { }

  //prendo tutte le ricette
getRecipes(): Observable<Recipe[]>{
  // return of (RECIPES);
  return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
}

//metodo con il mok
// getRecipe(id:number):Observable<Recipe | undefined>{

//   const recipe= RECIPES.find(recipe => recipe._id === id);
//   return of (recipe);
//   }
//   }

getRecipe(id:string):Observable<Recipe | undefined>{

return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
}

postRecipe(recipe: any): Observable<any>{

  return this.http.post(`${this.apiBaseUrl}/`,recipe);
}

getRecipeByTitle(title:string):Observable<Recipe | undefined>{

  return this.http.get<Recipe>(`${this.apiBaseUrl}/titolo/${title}`);
  }


}

