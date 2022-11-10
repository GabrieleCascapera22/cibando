import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  evidenziato=false;

  constructor() { }

  ngOnInit(): void {
  }

  onEvidenziazione(){
    this.evidenziato=!this.evidenziato;
  }

  ngOnDestroy(): void {
    console.log('sei uscito dalla home');
  }

}
