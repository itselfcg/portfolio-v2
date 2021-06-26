import { Component } from '@angular/core';
import { slideInOutAnimation,fadeAnimation } from '../_animations/index';

@Component({
  selector: 'about-app',
  templateUrl: 'about.component.html',
  styleUrls: ['../app.component.scss'],
  animations: [fadeAnimation]
})
export class AboutComponent {
  animation = true;
}
