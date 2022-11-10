import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import{faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';


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

  constructor() { }

  ngOnInit(): void {
  }

}
