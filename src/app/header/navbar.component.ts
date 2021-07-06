import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'navbar-app',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( public nav: NavbarService ) {}

  ngOnInit() {
    this.nav.show();
  }

}

