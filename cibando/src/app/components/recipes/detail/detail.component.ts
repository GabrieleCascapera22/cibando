import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 ricetta: Recipe;
 percorsoDifficolta = "../../../../assets/images/difficolta-";

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.onGetRecipe();
  }


  onGetRecipe(): void {
    const id = (this.activatedRoute.snapshot.paramMap.get('_id'));
    this.recipeService.getRecipe(id).subscribe({
      next: (res) => {
        this.ricetta=res;
      console.log(this.ricetta);
      },
      error : (e) => {
        console.log(e);
      }
    })
  }

  onGetRecipe2(): void {
    this.activatedRoute.params.subscribe((urlParams) =>{
      const id =urlParams['_id'];
      // const idN=Number(id);
    this.recipeService.getRecipe(id).subscribe(res => this.ricetta = res);

    })
  }
}
