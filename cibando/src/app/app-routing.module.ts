import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path: 'ricette',component:RecipesComponent,children:[
    {path:'dettaglio/:title/:_id',component:DetailComponent},
    {path:'',pathMatch:'full',component:RecipesListComponent}
  ]},
  {path:'registrazione',component:RegistrationComponent},
  {path:'contatti',component:ContactsComponent},
  {path:'nuova-ricetta',component:NewRecipeComponent,canActivate: [LoggedInGuard]},
  {path:'login',component:LoginComponent},
  {path:'profilo',component:ProfileComponent, canActivate: [LoggedInGuard]},
  {path:'**', redirectTo:'home'},


  //{ path: 'ricette',component:RecipesComponent}
  //{path:'dettaglio/:_id',component:DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
