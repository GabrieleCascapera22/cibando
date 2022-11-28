import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { RecipesModule } from './components/recipes/recipes.module';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


import { RegistrationComponent } from './components/users/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { ChangeColorDirective } from './directives/change-color.directive';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecipesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ContactsComponent,
    ChangeColorDirective,
    LoginComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    RecipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
