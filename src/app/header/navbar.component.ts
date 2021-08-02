import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'navbar-app',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isHome = false;
  isHomeExpanded=false;
  constructor(private router: Router, public nav: NavbarService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);

        if (event.urlAfterRedirects !== '/') {
          this.isHome = false;
        } else {
          this.isHome = true;
        }
      }
    });
  }
  ngOnInit() {
    this.nav.show();
  }

}
