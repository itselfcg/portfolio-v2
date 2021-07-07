import { Component } from '@angular/core';
import { slideInOutAnimation,fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'contact-app',
  templateUrl: 'contact.component.html',
  styleUrls: ['../app.component.scss'],
  animations: [fadeInAnimation,slideInOutAnimation]

})
export class ContactComponent {
  animation = true;

}
