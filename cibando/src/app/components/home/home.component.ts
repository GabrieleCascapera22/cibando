import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  evidenziato=false;
  page="home";
  nome:string;
  email:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.riceviDatiUtente();
  }

  onEvidenziazione(){
    this.evidenziato=!this.evidenziato;
  }

  ngOnDestroy(): void {
    console.log('sei uscito dalla home');
  }

  riceviDatiUtente(){

    //recupero i dati dal subject e li imagazzino nelle localStorage
    this.userService.datiUtente.subscribe((res: any) => {
      localStorage.setItem("nome",res.nome);
      localStorage.setItem("email",res.email);

    })
  if(localStorage.getItem('nome'))
  {
    this.nome=localStorage.getItem('nome');
    this.email=localStorage.getItem('email');
  }

  }

  closeModal(){
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    this.email='';
    this.nome='';
  }

}
