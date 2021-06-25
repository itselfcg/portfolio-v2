import { Component } from '@angular/core';
import { slideInOutAnimation,fadeAnimation } from '../_animations/index';

@Component({
  selector: 'about-app',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss','../app.component.scss'],
  animations: [fadeAnimation]
})
export class AboutComponent {
  animation = true;
}
