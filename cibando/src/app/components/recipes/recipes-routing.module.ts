import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoggedInGuard } from 'src/app/logged-in.guard';


import { RecipesComponent } from './recipes.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
    { path: '',component:RecipesComponent,children:[
      {path:'recipes',component:RecipesListComponent},
    {path:'dettaglio/:title/:_id',component:DetailComponent},
    {path:'result',component:ResultComponent},
    {path:'nuova-ricetta',component:NewRecipeComponent,canActivate: [LoggedInGuard]},
    {path:'',pathMatch:'full',component:RecipesListComponent}

  ]}


  //{ path: 'ricette',component:RecipesComponent}
  //{path:'dettaglio/:_id',component:DetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
