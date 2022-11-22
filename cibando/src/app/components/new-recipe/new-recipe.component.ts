import { Recipe } from 'src/app/models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  form = new FormGroup(
    {
      title: new FormControl ('', [Validators.required]),
      description: new FormControl ('', [Validators.required]),
      image: new FormControl ('', [Validators.required]),
      difficulty: new FormControl ('', [Validators.required]),
      published: new FormControl ('')
    }
  );

  modal:boolean;
  ricettaCorrente:Recipe | undefined;
  percorsoDifficolta = "../../../../assets/images/difficolta-";



  constructor(private recipeService: RecipeService,private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.form.value);
    const ricetta= this.form.value;
    this.recipeService.postRecipe(ricetta).subscribe();
    this.modal=true;
  }

  nuovaRicetta(){
    // this.router.navigate(['nuova-ricetta']);
    this.modal=false;
    this.form.reset();
  }

  vaiRicette(){
    this.router.navigate(['ricette']);
  }


}
