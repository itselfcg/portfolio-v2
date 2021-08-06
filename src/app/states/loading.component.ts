import { Component } from '@angular/core';
import { LoaderService } from '../_services/loader.service';
import { NavbarService } from '../_services/navbar.service';
import { fadeInAnimation, fadeOutAnimation } from '../_animations/index';

@Component({
  selector: 'loading-app-state',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.scss'],
  animations: [fadeInAnimation],

})
export class LoadingComponent {
  showLoader = false;

  constructor(public navbarService: NavbarService, private loaderService: LoaderService) {
    this.loaderService.isLoaderShown.subscribe((isLoaderShown) => {
      if (isLoaderShown ) {
        this.navbarService.hideNavbar();
        this.showLoader = isLoaderShown;

      } else {
        this.navbarService.showNavbar();
        this.showLoader = isLoaderShown;

      }
    });
  }
}
