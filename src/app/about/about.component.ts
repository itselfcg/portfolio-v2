import { Component } from '@angular/core';
import { slideInOutAnimation,fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'about-app',
  templateUrl: 'about.component.html',
  styleUrls: ['../app.component.scss'],
  animations: [fadeInAnimation,slideInOutAnimation]
})
export class AboutComponent {
  animation = true;
}
