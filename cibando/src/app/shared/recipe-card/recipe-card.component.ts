import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() pageRichiamante:string;
  percorsoDifficolta = "../../../../assets/images/difficolta-";
  @Output() messaggio= new EventEmitter();
  ricette: Recipe[]=[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next:(res) =>{
        this.ricette=res;
        if(this.pageRichiamante === "home"){
          this.ricette=this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
        }else
        {
          this.ricette=this.ricette.sort((b,a) => b._id - a._id);
        }

      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  inviaTitolo(titolo:string){
      this.messaggio.emit(titolo);
  }
}
