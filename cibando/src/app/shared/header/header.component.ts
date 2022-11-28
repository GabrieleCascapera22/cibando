import { Router } from '@angular/router';
import { Component, OnInit,DoCheck } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import{faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { RecipeService } from 'src/app/services/recipe.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  user: any;


  iconaHome = faHouzz;
  iconaScheda = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistrati =faCircleUser;
  isCollapsed = true;

  ricerca:string;



  constructor(
    private recipeService: RecipeService,
    private router:Router,
    public authService: AuthService,
    private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')!) !== null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(['home']);
  }


  onRicerca() {
    this.recipeService.wantedRicetta.next(this.ricerca);
    this.router.navigate(['ricette/result/'])
  }


  // chiudiModale(e){
  //   if(e){
  //     this.modalService.dismissAll();
  //   }
  // }

  open(content: any,azioneDaEseguire?:string,id?: number,titolo?: string){
    let idNumber= id;
    let title= titolo;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',size: 'lg',centered: true}).result.then((res) => {
      console.log('azione da eseguire')
      if(azioneDaEseguire === "esci"){
        this.logout();
      }
      if(azioneDaEseguire === "accedi")
      {
      }
    }).catch((res) => {
        console.log('nessuna azione eseguita')
      })
  }
}
