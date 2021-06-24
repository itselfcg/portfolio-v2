import { Component } from '@angular/core';
import { fadeAnimation,slideInOutAnimation } from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation,slideInOutAnimation]

})
export class AppComponent {
  title = 'portfolio-v2';
}
