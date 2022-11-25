import { Recipe } from './../../../models/recipe.model';

import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  ricette:Recipe[];
  percorsoDifficolta = "../../../../assets/images/difficolta-";

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  this.onGetRecipe();
  }

  onGetRecipe():void{
    this.recipeService.wantedRicetta.subscribe((res:any) =>{
      let testo = res;
      this.recipeService.searchRecipes(testo).subscribe({
        next: (res) =>{this.ricette=res},
        error:(e) =>{console.log(e)},
    })

    })

  }

}
