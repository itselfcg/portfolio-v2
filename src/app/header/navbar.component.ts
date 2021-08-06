import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';
import { fadeInAnimation, fadeOutAnimation } from '../_animations/index';

@Component({
  selector: 'navbar-app',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeInAnimation],

})
export class NavbarComponent implements OnInit {
  isHome = false;
  isHomeExpanded=false;
  showNavar=false;
  constructor(private router: Router, public navbarService: NavbarService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects !== '/') {
          this.isHome = false;
        } else {
          this.isHome = true;
        }
      }
    });
  }
  ngOnInit() {
    this.navbarService.isNavbarShown.subscribe((isNavbarShown) => {
      this.showNavar=isNavbarShown;
    });
  }

}
