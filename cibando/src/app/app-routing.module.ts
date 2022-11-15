import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/users/registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path: 'ricette',component:RecipesComponent,children:[
    {path:'dettaglio/:title/:_id',component:DetailComponent},
    {path:'',pathMatch:'full',component:RecipesListComponent}
  ]},
  {path:'registrazione',component:RegistrationComponent},
  {path:'**', redirectTo:'home'}

  //{ path: 'ricette',component:RecipesComponent}
  //{path:'dettaglio/:_id',component:DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
