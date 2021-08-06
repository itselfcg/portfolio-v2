import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavbarService {
  isNavbarShown = new BehaviorSubject<boolean>(false);

  constructor() {}

  hideNavbar() {
    this.isNavbarShown.next(false);
  }

  showNavbar() {
    this.isNavbarShown.next(true);

  }
}
