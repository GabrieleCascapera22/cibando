import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import{faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  iconaHome = faHouzz;
  iconaScheda = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistrati =faCircleUser;
  isCollapsed = true;

  ricerca:string;


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }


  onRicerca() {
    this.recipeService.wantedRicetta.next(this.ricerca);
  }
}
