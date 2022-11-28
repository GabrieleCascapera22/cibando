import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { ResultComponent } from './components/recipes/result/result.component';
import { NewRecipeComponent } from './components/recipes/new-recipe/new-recipe.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path: 'ricette',
      loadChildren: () =>
        import("./components/recipes/recipes.module").then(modulo => modulo.RecipesModule)
  },

  {path:'registrazione',component:RegistrationComponent},
  {path:'contatti',component:ContactsComponent},
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
