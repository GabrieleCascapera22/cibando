import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipes-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DividerModule } from "primeng/divider";


import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ResultComponent } from './result/result.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeCardComponent } from 'src/app/shared/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    DetailComponent,
    RecipesListComponent,
    RecipeCardComponent,
    NewRecipeComponent,
    ResultComponent

  ],
  imports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    RecipeRoutingModule,
    NgbModule,
    DividerModule,
    CommonModule
  ],
  exports: [RecipeCardComponent,NewRecipeComponent,DetailComponent]
})
export class RecipesModule{ }
