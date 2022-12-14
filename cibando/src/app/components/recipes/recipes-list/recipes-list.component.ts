import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeCardComponent } from 'src/app/shared/recipe-card/recipe-card.component';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  titoloRicevuto:string;
  page="recipes-list";

  constructor() { }

  ngOnInit(): void {
  }
  riceviTitolo(e: any){
    if(!this.titoloRicevuto)
    {
      this.titoloRicevuto =e;
    }else
    {
      this.titoloRicevuto='';
    }

  }



}
