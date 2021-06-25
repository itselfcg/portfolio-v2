import { Component } from '@angular/core';
import { slideInOutAnimation,fadeAnimation } from '../_animations/index';

@Component({
  selector: 'work-app',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss','../app.component.scss'],
  animations: [fadeAnimation]


})
export class WorkComponent {
  animation = true;


}
