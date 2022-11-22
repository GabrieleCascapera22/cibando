import { Observable,map } from 'rxjs';
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
  page= 1;
  ricettePerPagina= 4;
  pagingNumber= 0;



  ricette$: Observable<Recipe[]>;
  totRicette: Recipe[];


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    if(this.pageRichiamante==='home'){

      this.ricette$ = this.recipeService.getRecipes().pipe(
        map(res => res.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 6)),
        map(res => res.slice(0,4)),
        map(res => this.totRicette = res),

    )}else{

    this.ricette$ = this.recipeService.getRecipes().pipe(
      map(res => res.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 6)),
      map(res => this.totRicette = res),

    )}


    // this.recipeService.getRecipes().subscribe({
    //   next:(res) =>{
    //     this.ricette=res;
    //     if(this.pageRichiamante === "home"){
    //       this.ricette=this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
    //     }else
    //     {
    //       this.ricette=this.ricette.sort((b,a) => b._id - a._id);
    //     }

    //   },
    //   error: (err) =>{
    //     console.error(err);
    //   }
    // })
    this.pagine();
  }

  inviaTitolo(titolo:string){
      this.messaggio.emit(titolo);
  }

  pagine(){
    let tot;
    if(this.ricette){
      tot = this.ricette.length;
    }
    this.page=1;
    this.pagingNumber=0;
    this.pagingNumber= Math.ceil(this.ricette.length/this.ricettePerPagina/4);
  }
}
