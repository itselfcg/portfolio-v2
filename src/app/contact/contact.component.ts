import { Component } from '@angular/core';
import { slideInOutAnimation,fadeAnimation } from '../_animations/index';

@Component({
  selector: 'contact-app',
  templateUrl: 'contact.component.html',
  styleUrls: ['../app.component.scss'],
  animations: [fadeAnimation]

})
export class ContactComponent {
  animation = true;

}
