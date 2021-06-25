import { Component } from '@angular/core';
import { fadeAnimation } from '../_animations/index';

@Component({
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss','../app.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent {
  animation = true;


}
