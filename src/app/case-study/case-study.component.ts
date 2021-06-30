import { Component } from '@angular/core';
import { fadeAnimation } from '../_animations/index';

@Component({
  selector: 'case-study-app',
  templateUrl: './case-study.component.html',
  styleUrls: ['../app.component.scss','./case-study.component.scss'],
  animations: [fadeAnimation]

})
export class CaseStudyComponent {
  animation = true;


}
